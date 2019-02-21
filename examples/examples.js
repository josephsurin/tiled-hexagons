/* eslint-disable indent */

import React, { Component } from 'react'

import reactLogo from './assets/react.svg'
import { Hexagon, TiledHexagons } from '../build'

//#region example1
const title1 = 'Example #1 - simple button'

const example1 = <Hexagon
  img={reactLogo}
  sideLength={80}
  borderRadius={12}
  fill="#fafafa"
  shadow="#e2e2e2"
  href="https://reactjs.org/" />

const code1 = `<Hexagon
  img={'assets/reactLogo.svg'}
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
  tileTextStyles={{ fontFamily: 'Source Sans Pro', fontSize: '68px', fill: '#7cebff' }}
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
    { img: reactLogo },
    { text: 'angry',
      textStyle: {
        fontFamily: 'Font Awesome Solid'
      }
    },
    { text: 'E',
      onClick: () => console.log('clicked!')
    },
    { text: 'F' },
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
    { text: 'angry',
      textStyle: {
        fontFamily: 'Font Awesome Solid'
      }
    },
    { text: 'E',
      onClick: () => console.log('clicked!')
    },
    { text: 'F' },
    { text: 'G' }
  ]}
/>`
//#endregion

//#region example4
const title4 = 'Example #4 - socials'

const example4 = <TiledHexagons
  maxHorizontal={1}
  tileSideLengths={60}
  tileTextStyles={{
    fontFamily: 'Font Awesome Brands',
    fontSize: '58px',
    fill: 'white'
  }}
  tileGap={4}
  tileBorderRadii={9}
  tiles={[
    {
      text: 'facebook-f',
      fill: '#4267b2',
      shadow: '#1a2947'
    },
    {
      text: 'twitter',
      fill: '#1dcaff',
      shadow: '#0084b4'
    }
  ]}
  />

const code4 = `hi`

//#endregion

export default [
  { title: title1, example: example1, code: code1 },
  { title: title2, example: example2, code: code2 },
  { title: title3, example: example3, code: code3 },
  { title: title4, example: example4, code: code4 }
]