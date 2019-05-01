import React, { Component } from "react";
import ReviewsContainer from "./ReviewsContainer";

class ShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meme: {},
      current_user: "",
    };
  }

  componentDidMount() {
    let memeId = this.props.params.id;
    fetch(`/api/v1/memes/${memeId}`)
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
        this.setState({ meme: body.meme, current_user: body.current_user })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  setUserMatchesMemeCreator () => {
    
  }



  render() {
    debugger
    let memeId = this.props.params.id;

    return (
      <div>
        <h2>{this.state.meme.title}</h2>
        <img src={this.state.meme.imageUrl} />
        <p>{this.state.meme.description}</p>
        <div>
          <button type="button"> </button>
        </div>
        <div>
          <h3>REVIEWS</h3>
          <div>
            <ReviewsFormContainer
              memeId={memeId}
            />
          </div>
          <div>
            <ReviewsContainer memeId={memeId} />
          </div>
        </div>
      </div>
    );
  }
}

export default ShowContainer;
