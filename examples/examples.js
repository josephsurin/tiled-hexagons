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
        textStyle={{ fontFamily: 'Source Sans Pro', fontSize: '68px', fill: '#3399ff', userSelect: 'none' }}
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
  fill: '#3399ff',
  userSelect: 'none'
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
        textStyle={}
        onClick={this.updateCounter.bind(this)}
      />
    )
  }
}`
//#endregion

//#region example3


//#endregion

export default [
  { title: title1, example: example1, code: code1 },
  { title: title2, example: example2, code: code2 }
]