import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { generateHexSVG } from './generateHexSVG'

const elevationStyleNormal = (elevation, shadow) => {
	return {
		filter: `drop-shadow(${shadow} 0 ${elevation}px 0)`,
	}
}

const elevationStyleHover = (elevation, shadow) => {
	return {
		cursor: 'pointer',
		filter: `drop-shadow(${shadow} 0 ${elevation/2}px 0)`,
		transform: `translateY(${elevation/2}px)`
	}
}

const elevationStyleActive = (elevation, shadow) => {
	return {
		cursor: 'pointer',
		transition: 'all 0.1s ease',
		filter: `drop-shadow(${shadow} 0 1px 0)`,
		transform: `translateY(${elevation}px)`
	}
}

export default class Hexagon extends Component {
	constructor(props) {
		super(props)
		let { elevation, fill, stroke, strokeWidth, shadow, styles: { normal, hover, active } } = this.props

		var thHexagonStyleBase = {
			userSelect: 'none',
			fill,
			stroke,
			strokeWidth: `${strokeWidth}px`, 
			transition: 'all 0.2s ease',
		}
		this.thHexagonStyleNormal = Object.assign({}, thHexagonStyleBase, elevation ? elevationStyleNormal(elevation, shadow) : {}, normal)
		this.thHexagonStyleHover = Object.assign({}, thHexagonStyleBase, elevation ? elevationStyleHover(elevation, shadow) : {}, hover)
		this.thHexagonStyleActive = Object.assign({}, thHexagonStyleBase, elevation ? elevationStyleActive(elevation,  shadow) : {}, active)

		this.state = {
			thHexagonStyle: this.thHexagonStyleNormal
		}
	}
	render() {
		let { sideLength, borderRadius, elevation, img, text, textStyle, href, target, onClick } = this.props
		let { thHexagonStyle } = this.state

		let width = Math.sqrt(3) * sideLength
		let height = 2 * sideLength + elevation

		let fontSizeOffset = textStyle.fontSize ? 0.4 * parseInt(textStyle.fontSize) : 0

		const hexagon = (
			<React.Fragment>
				<path d={generateHexSVG(sideLength, borderRadius)} />
				<image href={img} width={0.7 * width} height={0.7 * height} x={0.15 * width} y={0.14 * height} />
				<text y={sideLength + fontSizeOffset} fill="#bbb" strokeWidth="0" style={textStyle}>
					<tspan x={width/2} alignmentBaseline="middle" textAnchor="middle">
						{text}
					</tspan>
				</text>
			</React.Fragment>)
		return (
			<svg
				viewBox={`0 0 ${width} ${height}`}
				width={width}
				height={height} >
				<g
					style={thHexagonStyle}
					onMouseOver={() => this.setState({ thHexagonStyle: this.thHexagonStyleHover })}
					onMouseLeave={() => this.setState({ thHexagonStyle: this.thHexagonStyleNormal })}
					onMouseDown={() => this.setState({ thHexagonStyle: this.thHexagonStyleActive })}
					onMouseUp={() => this.setState({ thHexagonStyle: this.thHexagonStyleHover })}
					onClick={onClick}>
					{!href ? hexagon : <a href={href} target={target || '_blank'}>{hexagon}</a>}
				</g>
			</svg>
		)
	}
}

Hexagon.defaultProps = {
	sideLength: 100,
	borderRadius: 16,
	fill: 'white',
	stroke: '#bbb',
	strokeWidth: 0,
	elevation: 12,
	shadow: '#e2e2e2',
	img: '',
	text: '',
	textStyle: {},
	styles: {
		normal: {},
		hover: {},
		active: {}
	},
	href: null,
	target: null,
	onClick: () => {}
}

Hexagon.propTypes = {
	sideLength: PropTypes.number,
	borderRadius: PropTypes.number,
	fill: PropTypes.string,
	stroke: PropTypes.string,
	strokeWidth: PropTypes.number,
	elevation: PropTypes.number,
	shadow: PropTypes.string,
	img: PropTypes.string,
	text: PropTypes.string,
	textStyle: PropTypes.object,
	styles: PropTypes.shape({
		normal: PropTypes.object,
		hover: PropTypes.object,
		active: PropTypes.object
	}),
	href: PropTypes.string,
	target: PropTypes.string,
	onClick: PropTypes.func
}