import React from 'react'


export default class GifSearch extends React.Component {
  state = {
    inputVal: ""
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.fetchQuery(this.state.inputVal)
  }

  handleChange = e => {
    this.setState({ inputVal: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.inputVal} onChange={this.handleChange} /> 
      </form>
    )
  }
}
s