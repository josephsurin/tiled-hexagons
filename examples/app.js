import React from 'react'
import prism from 'prismjs'

import { Hexagon, TiledHexagons } from '../build'

import reactLogo from './assets/react.svg'

import examples from './examples'

const App = () => {
	return (
		<div className="app-container">
			<div className="github-btn">
				<Hexagon
					sideLength={30}
					borderRadius={6}
					fill="#fafafa"
					shadow="#e2e2e2"
					elevation={8}
					href="https://github.com/josephsurin/tiled-hexagons"
					text="github"
					textStyle={{ fontFamily: 'Font Awesome Brands', fontSize: '24px' }} />
			</div>
			<div className="launching-wrapper">
				<div className="launching">
					<div className="title">
						<Hexagon
							img={reactLogo}
							sideLength={80}
							borderRadius={12}
							fill="#fafafa"
							shadow="#e2e2e2" 
							href="https://reactjs.org/" />
						<h1 className="title-text">
							<div className="react-title">React</div>
							Hexagon Buttons
						</h1>
					</div>
					<div className="about">
						Tiled Hexagons is a simple React button component set to help your render one or multiple tessellated hexagon buttons.
						<br/> <br/> <br/>
						<center>Take a look at some examples! <br/> <br/> <br/>
							<Hexagon
								sideLength={80}
								borderRadius={12}
								elevation={16}
								fill="#7cebff"
								shadow="#64c5d6"
								text="arrow-down"
								textStyle={{ fontFamily: 'Font Awesome Solid', fontSize: '36px', fill: 'white' }}/>
						</center>
					</div>
				</div>
			</div>

			{examples.map((example, i) => (
				<div key={example.title} style={{ marginTop: '100px' }} className={`example-wrapper example-wrapper-${i+1}`}>
					<h1 className={`example-title example-title-${i+1}`}>
						{example.title}
					</h1>
					<div className={`example-body example-body-${i+1}`}>
						<div className={`example-content example-content-${i+1}`}>
							{example.example}
						</div>
						<div className={`example-code example-code-${i+1}`}>
							<pre className="codeblock" dangerouslySetInnerHTML={{ __html: prism.highlight(example.code, prism.languages.jsx, 'jsx') }}></pre>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default App