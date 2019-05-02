import React, { Component } from "react";
import TextField from "./TextField";

class ReviewEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: this.props.rating,
      comment: this.props.comment
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    let newEdit = event.target.value;
    this.setState({ [event.target.name]: newEdit });
  }


  handleOnSubmit(event) {
    event.preventDefault();
    let reviewPayload = {
      rating: this.state.rating,
      comment: this.state.comment,
      meme_id: this.props.memeId,
      id: this.props.id
    };

    fetch(`/api/v1/memes/${this.props.memeId}/reviews/${this.props.id}/edit`)
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
        debugger
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));

  }

  render() {

    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
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
}
export default ReviewEditForm;
