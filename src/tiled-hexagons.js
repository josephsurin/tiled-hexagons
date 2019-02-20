import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Hexagon from './hexagon'

export default class TiledHexagons extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let { tiles, tileWidths, tileElevations, tileGap } = this.props
		let tileCount = tiles.length
		return (
			<svg width={(tileWidths + tileGap) * tileCount} height={11*(tileWidths+2*tileElevations)/9}>
				{tiles.map(({fill, shadow, img, onClick}, i) => {
					return (
						<svg key={img} x={(tileWidths + tileGap) * i} width={tileWidths} height={11*(tileWidths+2*12)/9}>
							<Hexagon
								width={tileWidths}
								elevation={tileElevations}
								img={img}
								fill={fill}
								shadow={shadow}
								onClick={onClick}
							/>
						</svg>)
				})}
			</svg>
		)
	}
}

TiledHexagons.defaultProps = {
	tiles: [],
	tileWidths: Hexagon.defaultProps.width,
	tileElevations: Hexagon.defaultProps.elevation,
	tileGap: 4
}

TiledHexagons.propTypes = {
	tiles: PropTypes.arrayOf(PropTypes.shape({
		fill: PropTypes.string,
		shadow: PropTypes.string,
		img: PropTypes.string,
		onClick: PropTypes.func
	})),
	tileWidths: PropTypes.number,
	tileElevations: PropTypes.number,
	tileGap: PropTypes.number
}