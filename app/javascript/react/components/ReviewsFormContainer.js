import React, { Component } from "react";
import TextField from "./TextField";

class ReviewsFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      comment: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    let newReview = event.target.value;
    this.setState({ [event.target.name]: newReview });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    let reviewPayload = {
      rating: this.state.rating,
      comment: this.state.comment,
      meme_id: this.props.memeId
    };

    fetch(`/api/v1/memes/${this.props.memeId}/reviews`, {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(reviewPayload),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.props.addReview(body.review);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));

    this.clearForm();
  }

  clearForm() {
    this.setState({
      rating: 5,
      comment: ""
    });
  }

  render() {
    let reviewForm = "";
    if (this.props.currentUser.id != 0) {
      reviewForm = (
        <div id="review-form">
          <form onSubmit={this.handleOnSubmit} className="review-form-render">
            <TextField
              type="number"
              labelName="rating"
              inputName="rating"
              value={this.state.rating}
              handleOnChange={this.handleOnChange}
            />
            <TextField
              labelName="comment"
              inputName="comment"
              value={this.state.comment}
              handleOnChange={this.handleOnChange}
            />
            <input type="submit" value="Submit" className="button" />
          </form>
        </div>
      );
    }
    return <div>{reviewForm}</div>;
  }
}

export default ReviewsFormContainer;
