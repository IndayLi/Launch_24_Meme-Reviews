import React, { Component } from "react";
import ReviewTextField from "./ReviewTextField";

class ReviewsFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      rating: 0,
      description: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  };

  handleOnChange(event) {
    let newReview = event.target.value
    this.setState({[event.target.]})
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <MemeTextField
            labelName="username"
            inputName="username"
            value={this.state.username}
            handleOnChange={this.handleOnChange}
          />
          <MemeTextField
            labelName="rating"
            inputName="rating"
            value={this.state.rating}
            handleOnChange={this.handleOnChange}
          />
          <MemeTextField
            lablelName="description"
            inputName="description"
            value={this.state.description}
            handleOnChange={this.handleOnChange}
          />
        </form>
      </div>
    );
  };
};

export default ReviewsFormContainer;
