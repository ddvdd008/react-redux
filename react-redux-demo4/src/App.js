import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'

//import './index.css'


class App extends Component {
  render () {
    return (
      <div>
        <Header dta={123}/>
        <Content />
      </div>
    )
  }
}
export default App