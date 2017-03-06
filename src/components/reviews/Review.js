import React, { Component } from 'react'

class Review extends Component {
  handleClick(){
    this.props.store.dispatch({type: "DELETE_REVIEW", id: this.props.id})
  }

  render(){
    return(
      <li>
        {this.props.text}
        <button onClick={this.handleClick.bind(this)} />
      </li>
    )
  }
}

export default Review
