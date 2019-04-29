import React, { Component } from "react";
<<<<<<< HEAD
import ReviewsContainer from './ReviewsContainer'
=======
import ReviewsFormContainer from './ReviewsFormContainer'
>>>>>>> 2aaaeb48d4facef1c7898c59821975a082ebe5cf

class ShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meme: {}
    };
  };

componentDidMount() {
  let memeId = this.props.params.id;
  fetch(`/api/v1/memes/${memeId}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ meme: body })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  };

  render() {
    let memeId = this.props.params.id;
    return(
      <div>
        <h2>{this.state.meme.title}</h2>
        <img src={this.state.meme.imageUrl}/>
        <p>{this.state.meme.description}</p>
<<<<<<< HEAD
        <ReviewsContainer
          memeId={memeId}
        />
=======

        <div>
          <h3>REVIEWS</h3>
          <div>
            <ReviewsFormContainer
              meme={this.state.meme}
            />
          </div>
        </div>
>>>>>>> 2aaaeb48d4facef1c7898c59821975a082ebe5cf
      </div>
    );
  };
};

export default ShowContainer;
