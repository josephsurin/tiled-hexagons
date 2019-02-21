import React from 'react'
import prism from 'prismjs'
import { Element, scroller } from 'react-scroll'

import { Hexagon, TiledHexagons } from '../dist'

import reactLogo from './assets/react.svg'

import examples from './examples'

const import1 = 'import { Hexagon, TiledHexagons } from \'tiled-hexagons\''
const import2 = 'const { Hexagon, TiledHexagons } = require(\'tiled-hexagons\')'

const App = () => {
	return (
		<div className="app-container">
			<div className="github-btn">
				<TiledHexagons
					maxHorizontal={1}
					tileSideLengths={30}
					tileBorderRadii={6}
					tileElevations={8}
					tileTextStyles={{ fontFamily: 'Font Awesome Solid', fontSize: '24px' }}
					tiles={[
						{
							text: 'github',
							href: 'https://github.com/josephsurin/tiled-hexagons',
							textStyle: { fontFamily: 'Font Awesome Brands' }
						},
						{
							text: 'smile-beam',
							href: 'https://josephsurin.js.org'
						}
					]} />
			</div>
			<div className="launching-wrapper">
				<div className="launching">
					<div className="title">
						<Hexagon
							img={reactLogo}
							sideLength={80}
							borderRadius={12}
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
								textStyle={{ fontFamily: 'Font Awesome Solid', fontSize: '36px', fill: 'white' }}
								onClick={() => {
									scroller.scrollTo('examples', { duration: 600, smooth: true })
								}} />
						</center>
					</div>
				</div>
			</div>

			<div className="basics">
				<h1>The Basics</h1>
				<h2>Installation</h2>
				<div className="codeblock"><pre>npm install tiled-hexagons</pre></div>
				<h2>Importing</h2>
				<div className="codeblock"><pre dangerouslySetInnerHTML={{ __html: prism.highlight(import1, prism.languages.jsx, 'jsx') }}></pre></div>
				OR:
				<div className="codeblock"><pre dangerouslySetInnerHTML={{ __html: prism.highlight(import2, prism.languages.jsx, 'jsx') }}></pre></div>
			</div>

			<Element name="examples" />
			{examples.map((example, i) => (
				<div key={example.title} style={{ marginTop: '100px' }} className={`example-wrapper example-wrapper-${i+1}`}>
					<h1 className={`example-title example-title-${i+1}`}>
						{example.title}
					</h1>
					<div className={`example-subtitle example-subtitle-${i+1}`}>
						{example.subtitle || ''}
					</div>
					<div className={`example-body example-body-${i+1}`}>
						<div className={`example-content example-content-${i+1}`}>
							{example.example}
						</div>
						<div className={`example-code example-code-${i+1}`}>
							<pre dangerouslySetInnerHTML={{ __html: prism.highlight(example.code, prism.languages.jsx, 'jsx') }}></pre>
						</div>
					</div>
				</div>
			))}

			<div className="more">
				<h3>For a list of props and more usage info, check out the <a href="https://github.com/josephsurin/tiled-hexagons">github page.</a></h3>
			</div>

			<center style={{ margin: '40px 0' }}>
				<TiledHexagons
					tileSideLengths={24}
					tileBorderRadii={4}
					tileElevations={6}
					tileTextStyles={{ fontSize: '12px', fill: '#7cebff' }}
					tiles={[
						{
							text: 'code',
							textStyle: { fontFamily: 'Font Awesome Solid' },
							href: 'https://github.com/josephsurin/tiled-hexagons'
						},
						{
							text: 'by',
							textStyle: { fontFamily: 'Source Sans Pro', fill: '#bbb' }
						},
						{
							text: 'JOSEPH',
							textStyle: { fontFamily: 'Source Sans Pro', fontSize: '9px' },
							href: 'https://josephsurin.js.org'
						}
					]} />
			</center>

		</div>
	)
}

export default App