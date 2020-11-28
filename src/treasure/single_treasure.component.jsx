import React from 'react'
import "./treasure.css"
class SingleTreasure extends React.Component {

  constructor(props) {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="treasure">
        <h3 style = {{
            color:"#3c4700"
        }}>{this.props.name}</h3>
        <p>{this.props.feature}
        </p>
        <p>{"$" + this.props.price}
        </p>
        <a href="find-out-more-this-treasure" className="button">Learn More!</a>
      </div>
    )
  }
}

export default SingleTreasure