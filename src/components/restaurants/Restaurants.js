import React, { Component } from 'react'
import Restaurant from './Restaurant'
class Restaurants extends Component {
  render(){
    return(
      <ul>
        {this.props.store.getState().restaurants.map((restaurant, index) => {
          return <Restaurant key={index}
                  id={restaurant.id}
                  text={restaurant.text}
                  store={this.props.store} />
        })}
      </ul>
    )
  }
}

export default Restaurants;
