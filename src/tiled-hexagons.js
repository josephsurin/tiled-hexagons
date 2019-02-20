import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Hexagon from './hexagon'

const YRATIO =  1 - 0.281
export default class TiledHexagons extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		let { tiles, tileWidths, tileElevations, tileGap, maxHorizontal } = this.props
		let tileCount = tiles.length

		let singleTileWidth = tileWidths + tileGap
		let singleTileHeight = 100*(tileWidths + tileElevations)/82 + tileGap

		let columnCount = getColumnCount(tileCount, maxHorizontal)

		let fullWidth = singleTileWidth * (tileCount < maxHorizontal ? tileCount : maxHorizontal)
		let fullHeight = (singleTileHeight + tileElevations) * (YRATIO * (columnCount - 1) + 1)

		let ranges = getRanges(columnCount, maxHorizontal)

		return (
			<svg width={fullWidth} height={fullHeight}>
				{tiles.map(({fill, shadow, img, onClick}, i) => {
					let { XMultiplier, YMultiplier } = getMultipliers(i, ranges)
					return (
						<svg key={i} x={XMultiplier * singleTileWidth} y={YMultiplier * (singleTileHeight)} width={singleTileWidth} height="100%">
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
	tileGap: 4,
	maxHorizontal: 5
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
	tileGap: PropTypes.number,
	maxHorizontal: PropTypes.number
}

const getRanges = (columnCount, maxHorizontal) => {
	var ranges = [[0, maxHorizontal - 1]]
	for(var c = 1; c <= columnCount; c++) {
		var evenOddModifier = c%2==0 ? 0 : -1
		ranges[c] = [ranges[c-1][1] + 1, ranges[c-1][1] + maxHorizontal + evenOddModifier]
	}
	return ranges
}

const getColumnCount = (tileCount, maxHorizontal) => {
	var columnCount = 0
	var i = 0
	while(i <= tileCount) {
		i += (columnCount%2==0) ? maxHorizontal : maxHorizontal - 1
		columnCount++ 
	}
	return columnCount
}

const getMultipliers = (i, ranges) => {
	var YColumn = ranges.findIndex(range => i >= range[0] && i <= range[1])
	var XMultiplier = i - ranges[YColumn][0] + (YColumn%2==0 ? 0 : 0.5)
	var YMultiplier = YRATIO * YColumn
	return { XMultiplier, YMultiplier }
} 