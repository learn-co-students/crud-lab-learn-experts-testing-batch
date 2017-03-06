import React, { Component } from 'react'
import Reviews from './Reviews'

class ReviewInput extends Component {
  constructor(){
    super()

    this.state = {text: ""}
  }

  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.store.dispatch({type: "ADD_REVIEW", payload: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ""
    })
  }
  render(){
    return (
    <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={this.handleChange.bind(this)} value={this.state.text}/>
      </form>
      <Reviews store={this.props.store} restaurantId={this.props.restaurantId}/>
    </div>
    )
  }
}

export default ReviewInput;
