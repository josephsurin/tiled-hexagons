import React from 'react'
import { render } from 'react-dom'

require('./main.sass')

import App from './app'

render(
	<App />,
	document.getElementById('app')
)