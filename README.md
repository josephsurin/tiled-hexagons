# Tiled Hexagons

<img alt=" " src="./hex.svg" width="180" align="right" />

`tiled-hexagons` is a simple React button component set to help you render one or more multiple tessellated hexagon buttons. 


[![NPM](https://nodei.co/npm/tiled-hexagons.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/tiled-hexagons/)


## Live Demo
Check out the [live demo](https://josephsurin.github.io/tiled-hexagons) for usage examples!

## Installation
```
npm install tiled-hexagons
```
## Importing
```js
//ES6 import
import { Hexagon, TiledHexagons } from 'tiled-hexagons'
```
OR
```js
//CommonJS
const { Hexagon, TiledHexagons } from 'tiled-hexagons'
```

## Basic Usage
#### `<Hexagon/>`
```jsx
import { Hexagon } from 'tiled-hexagons'

//function that returns a simple hexagon button
const simpleButton = () => {
  return (
    <Hexagon
      sideLength={40}
      text="Hi"
      textStyle={{ fill: 'blue' }}
    />
  )
}
```
#### `<TiledHexagons/>`
```jsx
import { TiledHexagons } from 'tiled-hexagons'

//function that returns simple tiled hexagon buttons
const simpleTiled = () => {
  return (
    <TiledHexagons
      tileSideLengths={40}
      tileTextStyles={{ fill: 'blue' }}
      tiles={[
        { text="Hi 1" },
        { text="Hi 2" },
        { text="Hi 3" }
      ]}
    />
  )
}
```
For more usage examples check out the [live demo](https://josephsurin.github.io/tiled-hexagons).

## Props
#### `<Hexagon/>`
| Prop | Type | Default | Description |
| --- | :---: | :---: | --- |
| sideLength | `number` | `100` | Length in pixels for each **side** of the hexagon |
| borderRadius | `number` | `12` | Radius of curvature for each corner of the hexagon |
| fill | `string` | `white` | Colour to fill the hexagon with (use standard CSS conventions) |
| ⚠️stroke | `string` | `#bbb` | Outline colour for the hexagon |
| ⚠️strokeWidth | `number` | `0` | Thickness of the outline |
| elevation | `number` | `12` | Elevation of the hexagon in pixels |
| shadow | `string` | `#e2e2e2` | Colour of the shadow created by the elevation |
| img | `string` | ` ` | URL to an image to be displayed (square-ish images work best) |
| text | `string` | ` ` | Text to be displayed in the hexagon (font sizes similar to the side length work best) |
| textStyle | `object` | `{}` | Style to be applied to the text (use fill for text colour) |
| styles | `object` | `{}` | Custom styles to be applied to the hexagon |
| href | `string` | ` ` | Link to be opened when hexagon is clicked |
| target | `string` | ` ` | Specifies where to open the href, one of `_blank` `self` `_parent` `_top` _`framename`_ |
| onClick | `function` | ` ` | Function to be called when the hexagon is clicked |


#### `<TiledHexagons/>`
| Prop | Type | Default | Description |
| --- | :---: | :---: | --- |
| tileSideLengths | `number` | `100` | Side length of each hexagon in the grid |
| tileBorderRadii | `number` | `12` | Border radius of each hexagon in the grid |
| tileElevations | `number` | `12` | Elevation of each hexagon in the grid |
| ⚠️tileStrokeWidths | `number` | `0` | Stroke width of each hexagon in the grid |
| tileGap | `number` | `4` | Spacing in pixels between each adjacent hexagon |
| tileStyles | `object` | `{}` | Styling to be applied to all hexagons |
| tileTextStyles | `object` | `{}` | Styling to be applied to the text of all hexagons |
| maxHorizontal | `number` | `5` | Maximum number of horizontals in a row |
| tiles | `array` | `[]` | Array of `tile data objects` to be used to generate hexagons |

⚠️ currently experimental and may not work as intended


`tile data objects`

Not all properties of `<Hexagon/>` are to be placed into a `tile data object` to be used in `<TiledHexagons/>`. The properties that DO carry over and should be placed into a `tile data object` are: `fill` `stroke` `shadow` `img` `text` `textStyle` `styles` `href` `target` `onClick`.

`tileStyles` and `tileTextStyles` apply a general styling to all hexagons, however, they can be overwritten by individual hexagons using `textStyle` and `styles`.

## Custom Styling
To customise a hexagon with CSS, pass through a `textStyle` or `styles` prop.
The `styles` prop is an object consisting of 3 objects: `normal` `hover` and `active`. The styles defined in each of these 3 objects are applied when the hexagon is in it's normal state, hover state and active state respectively.
For example, to make a yellow hexagon turn green when hovered and blue when clicked, you would pass the following object in the `styles` prop.
```js
{
  normal: {
    fill: 'yellow'
  },
  hover: {
    fill: 'green'
  },
  active: {
    fill: 'blue'
  }
}
```
