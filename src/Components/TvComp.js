import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class TVcomp extends Component {
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
        <p> This is TV Component</p>
      
  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="Samsung"
        
        className="form-check-input"
        onChange={this.handlechange}
      />
      SamSung
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
        value="sony"
        className="form-check-input"
        onChange={this.handlechange}

      />
      SONY
    </label>
  </div>

         
  
  <Link to={{
    pathname: '/Content',
    state: { category: this.state.category }
  }}><button>Submit</button></Link>
  </div>
  )
  }
}
