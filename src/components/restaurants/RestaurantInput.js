import React, { Component } from 'react'

class RestaurantInput extends Component {
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
    e.preventDefault()
    this.props.store.dispatch({
      type: "ADD_RESTAURANT",
      payload: this.state.text
    })
    this.setState({
      text: ''
    })
  }
  render(){
    return (<form onSubmit={this.handleSubmit}>
      <input type='text' value={this.state.text} onChange={this.handleChange} />
      <input type="submit" value="Create Restaurant" />
    </form>
    )
  }
}

export default RestaurantInput;
