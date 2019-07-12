import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

    constructor(props) {
      super(props);

      this.state = {
        text: ''
      };
    };

    handleOnChange(event) {
      this.setState({
        text: event.target.value
        
      });
    }

    handleOnSubmit(event) {
      event.preventDafault();
      this.props.addRestaurant(this.state.text)
      this.setState({
        text: ''
      });
    }
    
  render() {
    return (
      <div>
        //Review Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <Input
          type="text"
          value={this.state.text}
          onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
