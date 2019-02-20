import React from 'react'

import Hexagon from './hexagon'
import TiledHexagons from './tiled-hexagons'

import rxjsLogo from './rxjs-logo.png'

const App = () => {
	return (
		<div className="app-body">
			{/* <Hexagon
				width={400}
				elevation={12}
				img={rxjsLogo}
				fill="#fbfbfb"
				onClick={() => console.log('hhhh')}
			/> */}
			<TiledHexagons tiles={[
				{
					img: rxjsLogo,
					fill: '#3b3e47',
					shadow: '#2d2d38'
				},
				{
					img: rxjsLogo,
					fill: '#76d36b',
					shadow: '#4baf66'
				},
				{
					img: rxjsLogo,
					fill: '#80dbf2',
					shadow: '#5b9bd8'
				},
				{
					img: rxjsLogo
				},
				{
					img: rxjsLogo,
					fill: '#3b3e47',
					shadow: '#2d2d38'
				},
				{
					img: rxjsLogo,
					fill: '#76d36b',
					shadow: '#4baf66'
				},
				{
					img: rxjsLogo,
					fill: '#80dbf2',
					shadow: '#5b9bd8'
				},
				{
					img: rxjsLogo
				},
				{
					img: rxjsLogo,
					fill: '#3b3e47',
					shadow: '#2d2d38'
				},
				{
					img: rxjsLogo,
					fill: '#76d36b',
					shadow: '#4baf66'
				},
				{
					img: rxjsLogo,
					fill: '#80dbf2',
					shadow: '#5b9bd8'
				},
				{
					img: rxjsLogo
				},
				{
					img: rxjsLogo,
					fill: '#3b3e47',
					shadow: '#2d2d38'
				},
				{
					img: rxjsLogo,
					fill: '#76d36b',
					shadow: '#4baf66'
				},
				{
					img: rxjsLogo,
					fill: '#80dbf2',
					shadow: '#5b9bd8'
				},
				{
					img: rxjsLogo
				}
			]} maxHorizontal={5} tileGap={0} tileElevations={12} tileWidths={90}/>
		</div>
	)
}

export default App
