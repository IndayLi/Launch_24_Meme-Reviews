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
      this.setState({ formEdit: true });
    } else {
      this.setState({ formEdit: false });
    }
  }

  onDelete(event) {
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
        this.props.forceRender();
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  render() {
    let reviewButtons;
    if (
      this.props.userId === this.props.currentUser.id ||
      this.props.currentUser.role == "admin"
    ) {
      reviewButtons = (
        <div className="reviewButtons">
          <div onClick={this.onEdit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
          <div onClick={this.onDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
        </div>
      );
    } else {
      reviewButtons = "";
    }

    let form;
    if (this.state.formEdit) {
      form = (
        <ReviewEditForm
          id={this.props.id}
          memeId={this.props.memeId}
          rating={this.props.rating}
          comment={this.props.comment}
          forceRender={this.props.forceRender}
          onEdit={this.onEdit}
        />
      );
    } else {
      form = "";
    }
    return (
      <div className="review-tile">
        <dd className={"memeId" + this.props.memeId}>
          <dl className="review-username">— {this.props.username}</dl>
          <dl className="review-date">{this.props.timestamp}</dl>
          <dl className="review-rating">{this.props.rating}★</dl>
          <dl className="review-comment">{this.props.comment}</dl>
        </dd>
        <div>{reviewButtons}</div>
        <div>{form}</div>
      </div>
    );
  }
}

export default ReviewTile;
