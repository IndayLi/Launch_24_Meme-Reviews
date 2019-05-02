import React, { Component } from "react";
import ReviewsContainer from "./ReviewsContainer";
import ReviewsFormContainer from "./ReviewsFormContainer"

class ShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meme: {},
      current_user: "",
      meme_is_current_user: false
    };
    this.deleteMeme = this.deleteMeme.bind(this)
  }

  componentDidMount() {
    let memeId = this.props.params.id;

    fetch(`/api/v1/memes/${memeId}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
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
        let match
        if (body.meme.user_id === body.current_user.id){
          match = true
        }
        this.setState({ meme: body.meme, current_user: body.current_user.id, meme_is_current_user: match })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  deleteMeme(){
    event.preventDefault()
    let memeToDelete = this.state.meme
    let memeId = this.state.meme.id;

    if (this.state.meme_is_current_user === true){
      fetch(`/api/v1/memes/${memeId}`, {
        credentials: 'same-origin',
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(memeToDelete)
      })
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
            return window.location.href = "/memes"
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
    }
  }

  render() {
    return (
      <div>
        <h2>{this.state.meme.title}</h2>
        <img src={this.state.meme.imageUrl} />
        <p>{this.state.meme.description}</p>
        <div>
          <button type="button" onClick={this.deleteMeme}>Delete</button>
        </div>
        <div>
          <div>
            <ReviewsContainer memeId={this.props.params.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default ShowContainer;
