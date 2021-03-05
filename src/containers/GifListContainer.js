import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  state = {
    gifArray: []
  }

  fetchQuery = query => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(data => data.json())
    .then(data => {
      this.setState({ gifArray: data.data.splice(0, 3)}) 
    })
  }

  render() {
    return (
      <div>
        < GifSearch fetchQuery={this.fetchQuery} />
        < GifList list={this.state.gifArray} />
      </div>
    )
  }
}
