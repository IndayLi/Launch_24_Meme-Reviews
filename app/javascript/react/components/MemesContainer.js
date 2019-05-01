import React, { Component } from 'react'
import MemeTile from './MemeTile'
import MemesFormContainer from './MemesFormContainer'
import { Link } from 'react-router'

class MemesContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      memes: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/memes')
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
        this.setState({memes: body})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let memeColumnLength = Math.ceil(this.state.memes.length / 4)
    let memes = this.state.memes.map(meme => {
      return (
        <MemeTile
          key={meme.id}
          id={meme.id}
          user_id={meme.user_id}
          title={meme.title}
          imageUrl={meme.imageUrl}
        />
      )
    })

    return(
      <div>
        <div id="gallery">
          {memes}
        </div>
      </div>
    )
  }
}

export default MemesContainer
