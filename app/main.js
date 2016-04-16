import React from 'react'
import {render} from 'react-dom'
import MainComponent from './components/MainComponent.js'
import './stylesheets/main.scss'

const App = () =>
    <MainComponent />

render(<App />, document.getElementById('app'))
