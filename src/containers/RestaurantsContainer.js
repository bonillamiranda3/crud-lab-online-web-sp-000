import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants restaurants={this.props.restaurants}
        deleteRestaurant={this.props.deleteRestaurant} />
      </div>
    )
  }
}
const mapStateToProps = dispatch => ({
  addReview: review => dispatch({type: 'ADD_REVIEW, review'}),
  deleteReview: id => dispatch({type: 'DELETE_REVIEW, id'})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)