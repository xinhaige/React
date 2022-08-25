import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
  render() {
    return (
      <div>
            <h1>这是about页面</h1>
      </div>
    )
  }
  componentDidMount(){
    console.log(this.props);
  }
}
