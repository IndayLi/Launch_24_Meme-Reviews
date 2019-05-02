import React, { Component } from "react";
import ReviewTile from "./ReviewTile";
import ReviewsFormContainer from "./ReviewsFormContainer";

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
    this.addReview = this.addReview.bind(this);
  }

  addReview(review) {
    this.setState({ reviews: this.state.reviews.concat(review) });
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
        this.setState({ reviews: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let reviewArray = this.state.reviews.map(review => {
      return (
        <ReviewTile
          key={review.id}
          id={review.id}
          memeId={this.props.memeId}
          timestamp={review.timestamp}
          username={review.username}
          rating={review.rating}
          comment={review.comment}
        />
      );
    });
    return (
      <div id="meme-reviews">
        <h3>Reviews</h3>
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
