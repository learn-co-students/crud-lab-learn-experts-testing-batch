import React, { Component } from 'react'
import Review from './Review'

class Reviews extends Component {
  render(){
    const filteredReviews = this.props.store.getState().reviews.filter(review =>
      review.restaurantId === this.props.restaurantId
    ).map(review =>
      <Review text={review.text} id={review.id} store={this.props.store}/>
    )
    return(
      <ul>
        {filteredReviews}
      </ul>
    )
  }
}

export default Reviews;
