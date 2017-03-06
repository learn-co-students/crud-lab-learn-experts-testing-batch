import React, { Component } from 'react'
import ReviewInput from '../reviews/ReviewInput'

class Restaurant extends Component {

  handleClick(){
    this.props.store.dispatch({type: "DELETE_RESTAURANT", id: this.props.id})
  }

  render(){
    return(
        <li>
          {this.props.text}
          <button onClick={this.handleClick.bind(this)}/>
          <ReviewInput store={this.props.store} restaurantId={this.props.id}/>
        </li>
    )
  }
}

export default Restaurant
