import React, { Component } from 'react'
import Reviews from './Reviews'

class ReviewInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();

    const {store, restaurantId} = this.props;
    store.dispatch({type: 'ADD_REVIEW', text: this.state.text, restaurantId: restaurantId})
    this.setState({
      text: ''
    })
  }

  render(){
    const {store, restaurantId} = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value="this.state.text" onChange={this.handleChange} />
          <input type="submit" value="Create Review" />
        </form>
        <Reviews store={store} restaurantId={restaurantId}/>
      </div>
    )
  }
}

export default ReviewInput;
