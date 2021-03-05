import React from 'react'


export default class GifList extends React.Component {
  renderLis = () => {
    if (this.props.list.length === 0) {
      return <p>Look up any Gif you want! Press enter to Search!</p>
    } else {
      return this.props.list.map(gif => {
        return ( 
        <li key={gif.id}>
          <img src={gif.images.original.url} alt="" />
        </li>
        )
      })
    }
  }

  render() {
    return (
      <ul>
        {this.renderLis()}
      </ul>
    )
  }
}
