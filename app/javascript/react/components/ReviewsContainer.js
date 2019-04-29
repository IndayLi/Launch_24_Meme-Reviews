import React, { Component } from 'react'
import ReviewTile from './ReviewTile'

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      reviews: []
    }
  }

  componentDidMount() {
    let memeId = this.props.memeId
    debugger
    fetch(`/api/v1/memes/${memeId}/reviews`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status}(${response.statusText})` ,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({reviews: body})
    })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render() {
    debugger
    let reviewArray = this.state.reviews.map((review) => {
      return(
        <ReviewTile
          key={review.id}
          id={review.id}
          rating={review.rating}
          comment={review.comment}
        />
      )
    });

    return(
      <div className="reviews-container">
        {reviewArray}
      </div>
    );
  }

}

export default ReviewsContainer;
