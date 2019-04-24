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
    debugger
    let memePayload={
      title: this.state.title,
      imageUrl: this.state.imageUrl,
      description: this.state.description
    }
    debugger
    this.props.addNewMeme(memePayload)
    this.clearForm()
  }

  clearForm(){
    this.setState({title: '', imageUrl: '', description: ''})
  }

  render() {
    debugger
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
