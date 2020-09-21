import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class ContentComponent extends Component {
    constructor(props){
        super(props)
            
            this.state={
            val:Object.values(props.location.state)}

           }


  render() {
    return (
        
      <div>
      
      You have selected This Category :{this.state.val}
      <br/>
      Click to navigate to Home Page<Link to='/'>Home</Link>
             </div>
    )
  }
}
