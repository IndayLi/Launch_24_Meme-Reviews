import React, { Component } from "react";
import ReviewTile from "./ReviewTile";
import ReviewsFormContainer from "./ReviewsFormContainer";

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      currentUser: this.props.currentUser
    };
    this.addReview = this.addReview.bind(this);
    this.removeReview = this.removeReview.bind(this);
    this.changeSubmitted = this.changeSubmitted.bind(this);
  }

  changeSubmitted(event) {
    debugger
  }

  addReview(review) {
    this.setState({ reviews: this.state.reviews.concat(review) });
  }

  removeReview(review) {
    this.componentDidMount();
  }

  componentDidMount() {
    let memeId = this.props.memeId;
    fetch(`/api/v1/memes/${memeId}/reviews`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status}(${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({
          reviews: body
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let reviewArray = this.state.reviews.map(review => {
      return (
        <ReviewTile
          key={review.id}
          id={review.id}
          userId={review.user_id}
          memeId={this.props.memeId}
          timestamp={review.timestamp}
          username={review.username}
          rating={review.rating}
          comment={review.comment}
          removeReview={this.removeReview}
          currentUser={this.props.currentUser.id}
          changeSubmitted={this.changeSubmitted}
        />
      );
    });
    return (
      <div id="meme-reviews">
        <div className="meme-review-array-container">{reviewArray}</div>
        <div id="review-form">
          <ReviewsFormContainer
            memeId={this.props.memeId}
            addReview={this.addReview}
          />
        </div>
      </div>
    );
  }
}

export default ReviewsContainer;
