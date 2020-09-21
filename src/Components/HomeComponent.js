import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class HomeComponent extends Component {
  render() {
    return (
      <div className="home">
        <Link to="/Ac">
            <button>AC</button>
        </Link>
        <Link to="/Speaker">
            <button>Speaker</button>
        </Link>
        <Link to="/Mobile">
            <button>Mobile</button>
        </Link>
        <Link to="/Tv">
             <button>TV</button>
        </Link>
        
        
      </div>
    )
  }
}
