import React, { Component } from "react";
import TextField from "./TextField";

class ReviewsFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      comment: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  };

  handleOnChange(event) {
    let newReview = event.target.value
    this.setState({[event.target.name]: newReview})
  };

  handleOnSubmit(event) {
    event.preventDefault()
    let reviewPayload = {
      rating: this.state.rating,
      comment: this.state.comment
    };

    fetch("/api/v1/memes", {
      credentials: "same-origin",
    	method: "POST",
    	body: JSON.stringify(reviewPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
  	})
  	.then(response => {
  		if (response.ok) {
  			return response;
  		} else {
  			let errorMessage = `${response.status} (${response.statusText})`,
  			error = new Error(errorMessage);
  			throw(error);
  		};
  	})
  	.then(response => response.json())
  	.then(body => { })
  	.catch(error => console.error(`Error in fetch: ${error.message}`));

    this.clearForm();
  };

  clearForm() {
    this.setState(
      rating: 0,
      comment: ""
    );
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <TextField
            labelName="rating"
            inputName="rating"
            value={this.state.rating}
            handleOnChange={this.handleOnChange}
          />
          <TextField
            lablelName="comment"
            inputName="comment"
            value={this.state.comment}
            handleOnChange={this.handleOnChange}
          />
        </form>
      </div>
    );
  };
};

export default ReviewsFormContainer;
