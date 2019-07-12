import React, { Component } from 'react';

class RestaurantInput extends Component {
    constructor(props) {
      super(props);

  state = {
    text: ''
  }
}
    handleOnChange = event => {
      this.setState({
        text: event.target.value,
      });
    }

    handleOnSubmit = event => {
      event.preventDafault();
      this.props.addReview(this.state.text)
      this.setState({
        text: ''
      });
    }
  render() {
    return (
      <div>
        //Restaurant Input
        <form onSubmit={this.handleOnSubmit}>
          <label>Add Review</label>
          <input type="text" value={this.state.text}
          onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
