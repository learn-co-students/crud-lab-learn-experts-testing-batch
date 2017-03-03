import React, { Component } from 'react'
import Review from './Review'

class Reviews extends Component {
  render(){
    return(
      <ul>
        {this.props.store.getState().reviews.map((review, index) => {
          if(this.props.restaurantId == review.restaurantId){
            return <Review key={index}
                    text={review.text}
                    id={review.id}
                    restaurantId={review.restaurantId}
                    store={this.props.store}
                    />
          }
        })}
      </ul>
    )
  }
}

export default Reviews;
