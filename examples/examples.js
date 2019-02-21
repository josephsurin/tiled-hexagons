/* eslint-disable indent */

import React, { Component } from 'react'

import nodejs from './assets/nodejs.svg'
import react from './assets/react.svg'
import redux from './assets/redux.svg'
import reactivex from './assets/reactivex.svg'
import sass from './assets/sass.svg'
import electron from './assets/electron.svg'
import graphql from './assets/graphql.svg'
import mongodb from './assets/mongodb.svg'
import arch from './assets/arch.svg'

import { Hexagon, TiledHexagons } from '../build'

//#region example1
const title1 = 'Example #1 - simple button'

const example1 = <Hexagon
  img={react}
  sideLength={80}
  borderRadius={12}
  fill="#fafafa"
  shadow="#e2e2e2"
  href="https://reactjs.org/" />

const code1 = `<Hexagon
  img={'assets/react.svg'}
  sideLength={80}
  borderRadius={12}
  fill="#fafafa"
  shadow="#e2e2e2"
  href="https://reactjs.org/"
  target="_blank" //open in new tab
/>`
//#endregion

//#region example2
const title2 = 'Example #2 - click event'

class Example2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render() {
    let { count } = this.state
    return (
      <Hexagon
        sideLength={80}
        text={count.toString()}
        textStyle={{ fontFamily: 'Source Sans Pro', fontSize: '68px', fill: '#7cebff' }}
        onClick={() => {
            this.setState({ count: this.state.count + 1 })
        }}
      />
    )
  }
}

const example2 = <Example2 />

const code2 =
`const textStyle = {
  fontFamily: 'Source Sans Pro',
  fontSize: '68px',
  fill: '#7cebff'
}

class Example2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  updateCounter() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    let { count } = this.state
    return (
      <Hexagon
        sideLength={80}
        text={count.toString()}
        textStyle={textStyle}
        onClick={this.updateCounter.bind(this)}
      />
    )
  }
}`
//#endregion

//#region example3
const title3 = 'Example #3 - basic tesselation'

const example3 = <TiledHexagons
  tileSideLengths={60}
  tileGap={4}
  tileBorderRadii={9}
  maxHorizontal={3}
  tileTextStyles={{ fontFamily: 'Source Sans Pro', fontSize: '64px', fill: '#7cebff' }}
  tiles={[
    { text: 'あ',
      textStyle: {
        fontFamily: 'M1Plus'
        }  
    },
    { text: 'B',
      textStyle: {
        fill: 'white'
      },
      fill: '#7cebff',
      shadow: '#64c5d6'
    },
    { img: react },
    { text: 'angry',
      textStyle: {
        fontFamily: 'Font Awesome Solid'
      }
    },
    { text: 'E',
      onClick: () => console.log('clicked!')
    },
    { text: '😼' },
    { text: 'G' }
  ]} />

const code3 = 
`<TiledHexagons
  tileSideLengths={60}
  tileGap={4}
  tileBorderRadii={9}
  maxHorizontal={3}
  tileTextStyles={{
    fontFamily: 'Source Sans Pro',
    fontSize: '68px',
    fill: '#7cebff'
  }}
  tiles={[
    { text: 'あ',
      textStyle: {
        fontFamily: 'M1Plus'
      }
    },
    { text: 'B',
      textStyle: {
        fill: 'white'
      },
      fill: '#7cebff',
      shadow: '#64c5d6'
    },
    { img: 'assets/react.svg' }
    { text: 'angry',
      textStyle: {
        fontFamily: 'Font Awesome Solid'
      }
    },
    { text: 'E',
      onClick: () => console.log('clicked!')
    },
    { text: '😼' },
    { text: 'G' }
  ]}
/>`
//#endregion

//#region example4
const title4 = 'Example #4 - stacked socials'

const example4 = <TiledHexagons
  maxHorizontal={1}
  tileSideLengths={60}
  tileTextStyles={{
    fontFamily: 'Font Awesome Brands',
    fontSize: '58px',
    fill: 'white'
  }}
  tileGap={0}
  tileBorderRadii={9}
  tiles={[
    {
      text: 'facebook-f',
      fill: '#4267b2',
      shadow: '#1a2947',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://github.com/josephsurin/tiled-hexagons')}`
    },
    {
      text: 'github',
      fill: '#282828',
      shadow: '#1a1a1a',
      href: 'https://github.com/josephsurin/tiled-hexagons'
    },
    {
      text: 'twitter',
      fill: '#1dcaff',
      shadow: '#0084b4',
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent('https://github.com/josephsurin/tiled-hexagons')}`
    }
  ]}
  />

const code4 = `
const shareURL = encodeURIComponent('https://github.com/josephsurin/tiled-hexagons')
<TiledHexagons
  maxHorizontal={1}
  tileSideLengths={60}
  tileTextStyles={{
    fontFamily: 'Font Awesome Brands',
    fontSize: '58px',
    fill: 'white'
  }}
  tileGap={0}
  tileBorderRadii={9}
  tiles={[
    {
      text: 'facebook-f',
      fill: '#4267b2',
      shadow: '#1a2947',
      href: \`https://www.facebook.com/sharer/sharer.php?u=\${shareURL}}\`
    },
    {
      text: 'github',
      fill: '#282828',
      shadow: '#1a1a1a',
      href: 'https://github.com/josephsurin/tiled-hexagons'
    },
    {
      text: 'twitter',
      fill: '#1dcaff',
      shadow: '#0084b4',
      href: \`https://twitter.com/intent/tweet?url=\${shareURL}}\`
    }
  ]}
/>`

//#endregion

//#region example5
const title5 = 'Example #5 - awesome technologies'

const icons = [nodejs, react, redux, reactivex, sass, electron, graphql, mongodb, arch]
const example5 = <TiledHexagons
  maxHorizontal={5}
  tileSideLengths={60}
  tileElevations={16}
  tileGap={7}
  tileBorderRadii={9}
  tiles={icons.map(img => {
    return { img }
  })}
/>

const code5 = `
const icons = ['nodejs', 'react', 'redux', 'reactivex', 'sass', 'electron', 'graphql', 'mongodb', 'arch']
<TiledHexagons
  maxHorizontal={5}
  tileSideLengths={60}
  tileElevations={16}
  tileGap={7}
  tileBorderRadii={9}
  tiles={icons.map(icon => {
    return { img: \`assets/\${icon}.svg\` }
  })}
/>`

//#endregion

//#region example6

const title6 = 'Example #6 - colourful hexgrid'

const subtitle6 =  'Click a tile to randomise the colours! This one renders best on Chrome!'

const ColorScheme = require('color-scheme')
const shuffle = require('shuffle-array')
const genColours = () => {
  var cScheme = new ColorScheme()
  cScheme.from_hue(Math.round(Math.random() * 360))
    .scheme('analogic')
    .variation('soft')
    .distance(0.4)
  return shuffle(cScheme.colors())
}

const darken = (hexString, amount) => {
  return hexString
    .match(/.{1,2}/g)
    .map(hex => (
      Math.round((1 - amount/100) * parseInt(hex, 16))))
    .map(hex => hex.toString(16))
    .join('')
}

class Example6 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colours: genColours()
    }
  }

  render() {
    let { colours } = this.state
    return <TiledHexagons
      maxHorizontal={5}
      tileBorderRadii={0}
      tileGap={0}
      tileSideLengths={60}
      tiles={colours. map(colour => {
        return {
          fill: '#'+colour,
          shadow: '#'+darken(colour, 25),
          onClick: () => this.setState({
            colours: genColours()
          })
        }
      })}
    />
  }
}

const example6 = <Example6 />

const code6 = `const ColorScheme = require('color-scheme')
const shuffle = require('shuffle-array')
const genColours = () => {
  var cScheme = new ColorScheme()
  cScheme.from_hue(Math.round(Math.random() * 360))
    .scheme('analogic')
    .variation('soft')
    .distance(0.4)
  return shuffle(cScheme.colors())
}

const darken = (hexString, amount) => {
  return hexString
    .match(/.{1,2}/g)
    .map(hex => (
      Math.round((1 - amount/100) * parseInt(hex, 16))))
    .map(hex => hex.toString(16))
    .join('')
}

class Example6 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colours: genColours()
    }
  }

  render() {
    let { colours } = this.state
    return <TiledHexagons
      maxHorizontal={5}
      tileBorderRadii={0}
      tileGap={0}
      tileSideLengths={60}
      tiles={colours. map(colour => {
        return {
          fill: '#'+colour,
          shadow: '#'+darken(colour, 25),
          onClick: () => this.setState({
            colours: genColours()
          })
        }
      })}
    />
  }
}`
//#endregion

export default [
  { title: title1, example: example1, code: code1 },
  { title: title2, example: example2, code: code2 },
  { title: title3, example: example3, code: code3 },
  { title: title4, example: example4, code: code4 },
  { title: title5, example: example5, code: code5 },
  { title: title6, subtitle: subtitle6, example: example6, code: code6 }
]