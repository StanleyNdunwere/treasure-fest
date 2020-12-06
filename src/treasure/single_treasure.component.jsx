import React from 'react'
import { Link } from 'react-router-dom'
import "./treasure.css"
class SingleTreasure extends React.Component {

  constructor(props) {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="treasure">
        <h3 style={{
          color: "#3c4700"
        }}>{this.props.name}</h3>
        <p>{this.props.feature}
        </p>
        <p>{"$" + this.props.price}
        </p>
        <Link className="button" to="/">Learn More!</Link>
      </div>
    )
  }
}

export default SingleTreasure