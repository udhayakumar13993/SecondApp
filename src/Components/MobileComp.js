import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Mobile extends Component {
  constructor(props){
    super(props)
    this.state={
      category:''
    }
  }

  handlechange=(e)=>{

    this.setState({category:e.target.value})
  }
  render() {
    return (
      <div>

      
  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="OnePlus"
        
        className="form-check-input"
        onChange={this.handlechange}
      />
      OnePlus
    </label>
  </div>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="Mi"
        className="form-check-input"
        onChange={this.handlechange}
      />
      MI
    </label>
  </div>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="OPPO"
        className="form-check-input"
        onChange={this.handlechange}

      />
      OPPO
    </label>
  </div>

         
  
  <Link to={{
    pathname: '/Content',
    state: { category: this.state.category,
             }
  }}><button>Submit</button></Link> </div>
  )
  }
}
