import React, { Component } from 'react'
import TextField from './TextField'

class MemesFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state={
      title: '',
      imageUrl: '',
      description: ''

    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange(event) {

    let newData = event.target.value
    this.setState({[event.target.name] : newData})
  }

  handleOnSubmit(event){
    event.preventDefault()
    let memePayload={
      user: 2,
      title: this.state.title,
      imageUrl: this.state.imageUrl,
      description: this.state.description
    };
    fetch('/api/v1/memes', {
      method: 'POST',
      body: JSON.stringify(memePayload),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
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

      // this.setState({ title: body.title , imageUrl: , description:  })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
    this.clearForm()
  }

  clearForm(){
    this.setState({title: '', imageUrl: '', description: ''})
  }



  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <TextField
            labelName='Title'
            inputName='title'
            value={this.state.title}
            handleOnChange={this.handleOnChange}
          />
          <TextField
            labelName='URL'
            inputName='imageUrl'
            value={this.state.imageUrl}
            handleOnChange={this.handleOnChange}
          />
          <TextField
            labelName='Description'
            inputName='description'
            value={this.state.description}
            handleOnChange={this.handleOnChange}
          />
          <input type ="submit" className="button" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default MemesFormContainer
