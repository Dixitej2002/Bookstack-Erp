import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ComingPage.css'

export default class ComingPage extends Component {
  render() {
    return (
      <div className='Comingpage'>
        <h2>Coming Soon...</h2>
        <Link to='/'>Go to Store</Link>

      </div>
    )
  }
}
