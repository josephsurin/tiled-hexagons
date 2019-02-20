import React, { Component } from 'react'
import PropTypes from 'prop-types'

const hexagonStyleNormal = (elevation, fill, shadow) => {
	return {
		transition: 'all 0.2s ease',
		filter: `drop-shadow(${shadow} 0 ${elevation}px 0)`,
		fill
	}
}

const hexagonStyleHover = (elevation, fill, shadow) => {
	return {
		cursor: 'pointer',
		transition: 'all 0.2s ease',
		filter: `drop-shadow(${shadow} 0 ${elevation/2}px 0)`,
		transform: `translateY(${elevation/2}px)`,
		fill
	}
}

const hexagonStyleActive = (elevation, fill, shadow) => {
	return {
		cursor: 'pointer',
		transition: 'all 0.1s ease',
		filter: `drop-shadow(${shadow} 0 1px 0)`,
		transform: `translateY(${elevation}px)`,
		fill
	}
}

export default class Hexagon extends Component {
	constructor(props) {
		super(props)
		let { elevation, fill, shadow } = this.props

		this.thHexagonStyleNormal = hexagonStyleNormal(elevation, fill, shadow)
		this.thHexagonStyleHover = hexagonStyleHover(elevation, fill, shadow)
		this.thHexagonStyleActive = hexagonStyleActive(elevation, fill, shadow)
		this.state = {
			thHexagonStyle: this.thHexagonStyleNormal
		}
	}
	render() {
		let { width, elevation, img, onClick } = this.props
		let { thHexagonStyle } = this.state
		return (
			<svg viewBox="0 0 90 110" width={width} height={11*(width+2*elevation)/9}>
				<defs>
					<svg id="th-hexagon">
						<g transform="translate(1.7381e-7 -197)">
							<path transform="matrix(.753953 -.68964 -.68698 -.74246 89.898 382.75)" d="m92.226 164.52c-3.6097 3.364-43.362 12.529-48.081 11.085-4.7181-1.4441-32.531-31.289-33.64-36.097-1.1085-4.8081 10.831-43.817 14.441-47.181 3.6097-3.364 43.362-12.529 48.081-11.085 4.7181 1.4441 32.531 31.289 33.64 36.097s-10.831 43.817-14.441 47.181z" />
						</g>
						<image href={img} height="50" width="50" x="20" y="24" />
					</svg>
				</defs>
				<use
					xlinkHref="#th-hexagon"
					style={thHexagonStyle}
					onMouseOver={() => this.setState({ thHexagonStyle: this.thHexagonStyleHover })}
					onMouseLeave={() => this.setState({ thHexagonStyle: this.thHexagonStyleNormal })}
					onMouseDown={() => this.setState({ thHexagonStyle: this.thHexagonStyleActive })}
					onMouseUp={() => this.setState({ thHexagonStyle: this.thHexagonStyleHover })}
					onClick={onClick}
				/>
			</svg>
		)
	}
}

Hexagon.defaultProps = {
	width: 100,
	fill: 'white',
	elevation: 12,
	shadow: 'rgba(0,0,0,0.1)',
	img: '',
	onClick: () => {}
}

Hexagon.propTypes = {
	width: PropTypes.number,
	fill: PropTypes.string,
	elevation: PropTypes.number,
	shadow: PropTypes.string,
	img: PropTypes.string,
	onClick: PropTypes.func
}
