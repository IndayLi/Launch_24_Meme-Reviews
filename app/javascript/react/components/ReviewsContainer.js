import React, { Component } from 'react'

class ReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      reviews: []
    }
  }

  componentDidMount() {
    //fetch will go here
  }

  render() {

    return(
      <div className="reviews-container">
        <dd>
          <dl>User:</dl>
          <dl>Rating:</dl>
          <dl>Comment:</dl>
        </dd>
      </div>
    );
  }

}

export default ReviewsContainer;
