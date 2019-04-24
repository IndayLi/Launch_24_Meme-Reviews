import React, { Component } from "react";

class ShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meme: {}
    };
  };

  // componentDidMount() {
  //   let memeId = this.props.params.id;
  //   fetch(`/api/v1/memes/${memeId}`)
  // 	.then(response => {
  // 		if (response.ok) {
  // 			return response;
  // 		} else {
  // 			let errorMessage = `${response.status } (${response.statusText})`,
  // 			error = new Error(errorMessage);
  // 			throw(error);
  // 		}
  // 	})
  // 	.then(response => response.json())
  // 	.then(body => {
  // 		this.setState({ meme: body })
  // 	})
  // 	.catch(error => console.error(`Error in fetch: ${error.message}`));
  // };

  render() {
    return(
      <div>
        {this.state.meme.title}
        {this.state.meme.imageUrl}
        {this.state.meme.description}
      </div>
    );
  };
};

export default ShowContainer;
