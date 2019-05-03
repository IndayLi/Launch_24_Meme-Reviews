import React, { Component } from "react";
import TextField from "./TextField";

class MemeEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: ""
    };
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
      title: this.state.title,
      description: this.state.description,
      meme_id: this.props.memeId,
      errors: ""
    };

    fetch(`/api/v1/memes/${this.props.memeId}`, {
      credentials: "same-origin",
      method: "PATCH",
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
        if (body.error === "") {
          this.props.toggleEdit();
          this.props.forceRender();
        } else {
          this.props.setError(body.error);
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} className="meme-form-edit">
          <TextField
            type="number"
            labelName="title"
            inputName="title"
            value={this.state.rating}
            handleOnChange={this.handleOnChange}
          />
          <TextField
            labelName="description"
            inputName="description"
            value={this.state.comment}
            handleOnChange={this.handleOnChange}
          />
          <input type="submit" value="Submit" className="button" />
        </form>
      </div>
    );
  }
}

export default MemeEditForm;
