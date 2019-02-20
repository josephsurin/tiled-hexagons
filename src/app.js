import React from 'react'

import Hexagon from './hexagon'
import TiledHexagons from './tiled-hexagons'

import rxjsLogo from './rxjs-logo.png'

const App = () => {
	return (
		<div className="app-body">
			{/* <Hexagon
				width={200}
				elevation={12}
				img={rxjsLogo}
				fill="#fbfbfb"
				onClick={() => console.log('hhhh')}
			/> */}
			<TiledHexagons tiles={[
				{
					img: rxjsLogo
				},
				{
					img: rxjsLogo
				},
				{
					img: rxjsLogo
				},
				{
					img: rxjsLogo
				}
			]} />
		</div>
	)
}

export default App
