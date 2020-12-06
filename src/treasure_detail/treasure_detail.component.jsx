import React from 'react'
import '../global/css/general_css.css'
import { treasures } from '../global/treasures'

class TreasureDetailComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      treasure: treasures.filter((treasure) => {
        return (treasure.shortName === this.props.match.params.treasure)
      }),
  
    }

  }

  render() {
    return (
      <div>
        <h1>
          Treasure Info
        </h1>
        <hr></hr>
        <h2>
          {this.state.treasure[0].name}
        </h2>
        <p>
          {this.state.treasure[0].detail}
        </p>
        <p>
          {"$" + this.state.treasure[0].price}
        </p>
        <input
          style={{
            border: "none",
          }}
          type='submit' onClick={(e) => {
            e.preventDefault()
            window.localStorage.setItem("selectedTreasure", this.state.treasure[0].shortName)
          }} className="button" name="submit" value="Possess At Once!" />

      </div>
    )
  }
}

export default TreasureDetailComponent