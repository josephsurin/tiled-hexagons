import React from 'react'
import { render } from 'react-dom'

require('./styles/main.sass')

import App from './app.js'

render(
	<App />,
	document.getElementById('app')
)