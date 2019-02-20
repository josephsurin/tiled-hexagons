import React from 'react'
const { Hexagon, TiledHexagons } = require('../src/index').default

import rxjsLogo from './rxjs-logo.png'

const App = () => {
	return (
		<div className="app-body">
			<Hexagon
				sideLength={200}
				borderRadius={0}
				elevation={22}
				img={rxjsLogo}
				fill="#eee"
				text="heyyyy"
				textStyle={ { fill: 'red' } }
				onClick={() => console.log('hhhh')}
			/>
			<TiledHexagons tiles={[
				{
					img: rxjsLogo,
					fill: '#3b3e47',
					shadow: '#2d2d38'
				},
				{
					img: rxjsLogo,
					// fill: '#76d36b',
					shadow: '#4baf66',
					text: 'hey',
					textStyle: { fill: 'black' }
				},
				{
					img: rxjsLogo,
					// fill: '#80dbf2',
					shadow: '#5b9bd8'
				},
				{
					img: rxjsLogo,
					styles: {
						hover: {
							fill: 'green'
						}
					}
				},
				{
					img: rxjsLogo,
					// fill: '#3b3e47',
					shadow: '#2d2d38'
				},
				{
					img: rxjsLogo,
					// fill: '#76d36b',
					shadow: '#4baf66'
				},
				{
					img: rxjsLogo,
					// fill: '#80dbf2',
					shadow: '#5b9bd8'
				},
				{
					img: rxjsLogo
				},
				{
					img: rxjsLogo,
					// fill: '#3b3e47',
					shadow: '#2d2d38'
				},
				{
					img: rxjsLogo,
					// fill: '#76d36b',
					shadow: '#4baf66'
				},
				{
					img: rxjsLogo,
					// fill: '#80dbf2',
					shadow: '#5b9bd8'
				},
				{
					img: rxjsLogo
				},
				{
					img: rxjsLogo,
					// fill: '#3b3e47',
					shadow: '#2d2d38'
				},
				{
					img: rxjsLogo,
					// fill: '#76d36b',
					shadow: '#4baf66'
				},
				{
					img: rxjsLogo,
					// fill: '#80dbf2',
					shadow: '#5b9bd8'
				},
				{
					img: rxjsLogo,
					text: 'hoy'
				}
			]}
			maxHorizontal={5}
			tileGap={0}
			tileStrokeWidths={1}
			tileBorderRadii={0}
			tileElevations={0}
			tileSideLengths={100}
			tileStyles={ { hover: { cursor: 'pointer' }} }
			tileTextStyles={ { fontSize: '60px' }}
			/>
		</div>
	)
}

export default App