import cuid from 'cuid';
export const cuidFn = cuid
export default function manageRestaurants(state={restaurants: [], reviews: []}, action){
  switch(action.type){
    case 'ADD_RESTAURANT':
      var restaurants = [...state.restaurants];
      restaurants.push({text: action.payload, id: cuidFn()})
      return Object.assign({}, state, {restaurants: restaurants});
    case 'DELETE_RESTAURANT':
      var restaurants = [...state.restaurants];
      for (var i = 0; i < restaurants.length; i++) {
        if(restaurants[i].id == action.id){
          restaurants.splice(i, 1);
        }
      }
      return Object.assign({}, state, {restaurants: restaurants});
    case 'ADD_REVIEW':
      var reviews = [...state.reviews];
      reviews.push({text: action.text, id: cuidFn(), restaurantId: action.restaurantId});
      return Object.assign({}, state, {reviews: reviews});
    case 'DELETE_REVIEW':
      var reviews = [...state.reviews];
      for (var i = 0; i < reviews.length; i++) {
        if(reviews[i].id == action.id){
          reviews.splice(i, 1);
        }
      }
      return Object.assign({}, state, {reviews: reviews});
    default:
      return state;
  }
}
