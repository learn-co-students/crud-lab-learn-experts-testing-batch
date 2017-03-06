import cuid from 'cuid';
export const cuidFn = cuid
var id = 0
var reviewId = 0
export default function manageRestaurants(state = {restaurants: [], reviews: []}, action){
  switch(action.type){
    case 'ADD_RESTAURANT':
      id++
      var updatedRestaurants = [...state.restaurants,{text: action.payload, id: id}]
      return {...state, restaurants: updatedRestaurants }

    case 'DELETE_RESTAURANT':
      var updatedRestaurants = state.restaurants.filter(restaurant =>
        restaurant.id !== action.id
      )
      return {...state, restaurants: updatedRestaurants}
    case 'ADD_REVIEW':
      reviewId++
      var updatedReviews = [...state.reviews, {text: action.payload, restaurantId: action.restaurantId, id: reviewId}]
      return {...state, reviews: updatedReviews}
    case 'DELETE_REVIEW':
      var updatedReviews = state.reviews.filter(review =>
        review.id !== action.id
      )
      return {...state, reviews: updatedReviews}
    default:
      return state
  }
}
