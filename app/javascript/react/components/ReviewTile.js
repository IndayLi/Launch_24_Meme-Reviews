import React, { Component } from "react";
import { browserHistory } from "react-router";
import ReviewEditForm from "./ReviewEditForm";

class ReviewTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: {},
      formEdit: false
    };
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  onEdit(event) {
    if (this.state.formEdit === false) {
      this.setState({ formEdit: true })
    } else {
      this.setState({ formEdit: false })
    }
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

    let form;
    if (this.state.formEdit) {
      form = <ReviewEditForm
        id={this.props.id}
        memeId = {this.props.memeId}
        rating={this.props.rating}
        comment={this.props.comment}
      />
    } else {
      form = ""
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
          <input onClick={this.onEdit} type="submit" value="Edit" />
          <input onClick={this.onDelete} type="submit" value="Delete" />
        </div>
        <div>
          {form}
        </div>
      </div>
    );
  }
}

export default ReviewTile;
