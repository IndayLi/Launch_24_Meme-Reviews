import React, { Component } from "react";
import { browserHistory } from "react-router";

class ReviewTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: {}
    };
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete(event) {
    let forceUpdate = () => {
      return this.props.removeReview();
    };
    event.preventDefault();
    fetch(`/api/v1/memes/${this.props.memeId}/reviews/${this.props.id}`, {
      credentials: "same-origin",
      method: "DELETE",
      body: JSON.stringify({ id: this.props.userId }),
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
        forceUpdate();
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  render() {
    let reviewButtons;
    if (this.props.userId === this.props.currentUser) {
      reviewButtons = "reviewButtons";
    } else {
      reviewButtons = "reviewButtons hidden";
    }

     return (
      <div className="review-tile">
        <dd className={"memeId" + this.props.memeId}>
          <dl>{this.props.timestamp}</dl>
          <dl>Username: {this.props.username}</dl>
          <dl>Rating: {this.props.rating}</dl>
          <dl>Comment: {this.props.comment}</dl>
        </dd>
        <div className={reviewButtons}>
          <input onClick={this.onDelete} type="submit" value="Delete" />
        </div>
      </div>
    );
  }
}

export default ReviewTile;
