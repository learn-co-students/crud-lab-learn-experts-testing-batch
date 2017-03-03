import React, { Component } from 'react'
import ReviewInput from '../reviews/ReviewInput'
class Restaurant extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    const {store} = this.props;
    store.dispatch({
      type: "DELETE_RESTAURANT",
      id: id
    })
  }
  render(){
    const {text, id, store} = this.props;
    return(
      <li>
        {text} <button onClick={this.handleClick.bind(null, id)}>Delete</button>
        <ReviewInput store={store} restaurantId={id}/>
      </li>
    )
  }
}

export default Restaurant
