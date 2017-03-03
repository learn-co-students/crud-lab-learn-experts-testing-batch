import React, { Component } from 'react'

class Review extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const {store, id} = this.props;
    store.dispatch({
      type: "DELETE_REVIEW",
      id: id
    })
  }

  render(){
    return(
      <li>
        {this.props.text}
        <button onClick={this.handleClick}>Delete Review</button>
      </li>
    )
  }
}

export default Review
