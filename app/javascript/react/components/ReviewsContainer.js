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
    this.forceRender = this.forceRender.bind(this);
  }

  forceRender() {
    this.componentDidMount();
  }

  addReview(review) {
    this.forceRender();
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
          currentUser={this.props.currentUser}
          forceRender={this.forceRender}
        />
      );
    });
    return (
      <div id="meme-reviews">
        <div className="meme-review-array-container">{reviewArray}</div>
        <div>
          <ReviewsFormContainer
            currentUser={this.props.currentUser}
            memeId={this.props.memeId}
            addReview={this.addReview}
          />
        </div>
      </div>
    );
  }
}

export default ReviewsContainer;
