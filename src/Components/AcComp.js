import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class AcComp extends Component {
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
        value="BlueStar"
        
        className="form-check-input"
        onChange={this.handlechange}
      />
      Blue Star
    </label>
  </div>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="Voltas"
        className="form-check-input"
        onChange={this.handlechange}
      />
      Voltas
    </label>
  </div>

  <div className="form-check">
    <label>
      <input
        type="radio"
        name="react-tips"
        value="Mitshubishi"
        className="form-check-input"
        onChange={this.handlechange}

      />
      Mitsubishi
    </label>
  </div>

         
  
   <Link to="/Content"><button>Submit</button></Link>
  </div>
  )
  }
}
