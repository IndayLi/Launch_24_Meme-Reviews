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

    if (this.state.meme_is_current_user){
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
      <div id="show-page">
        <div id="show-image">
          <img src={this.state.meme.imageUrl} />
        </div>
        <div>
          <button type="button" onClick={this.deleteMeme}>Delete</button>
        </div>
        <div id="show-text">
          <h2>{this.state.meme.title}
            <div className="memeButtons">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </div>
          </h2>
          <div id="meme-description">
            <p>{this.state.meme.description}</p>
          </div>
          <ReviewsContainer memeId={this.props.params.id} />
        </div>
      </div>
    );
  }
}

export default ShowContainer;
