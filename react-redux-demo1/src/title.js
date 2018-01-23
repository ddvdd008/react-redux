import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Title extends Component {
    static contextTypes = {
        themeColor : PropTypes.string
    }
    componentWillMount () {
        this.context.themeColor = 'blue'
      }
    render () {
        return (
          <h1 style={{color : this.context.themeColor}}>this is 标题</h1>
        )
      }
}

export default Title;
