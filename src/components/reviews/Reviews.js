import React, { Component } from 'react'
import Review from './Review'

class Reviews extends Component {
  render(){
    return(
      <ul>
        {this.props.store.getState().reviews.map((review, index) => {
          return <Review key={index}
                  text={review.text}
                  id={review.id}
                  restaurantId={review.restaurantId}
                  />
        })}
      </ul>
    )
  }
}

export default Reviews;
