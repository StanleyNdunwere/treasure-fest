import React from 'react'
import '../global/css/general_css.css'
import "../treasure/treasure.css"
import "./possessed.css"
class PossessedTreasures extends React.Component {

  constructor(props) {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>
          Possessed Treasures Page
        </h1>
        <hr></hr>
        <h2>
          Welcome To Thy Cove Hero! View all of your collections here.
        </h2>
        <p>
          This is thy resting cove to view all of thine treasured collectibles which thou have amassed so far and review their importance in your strategy. We trust that thy wisdom shall guide thee aright.
        </p>
        <p>
          <div className="no-treasure-found" style={{
            textAlign: "center"
          }}>
            <h2>Nothing in thy chest!</h2>
            <p>
              <b style={{
                color: "#fcfcce"
              }}>
                You have no possessed treasures yet!
              </b>
            </p>
            <a href="/treasures" className="button">View Treasures You May Want To Possess</a>
          </div>
        </p>

      </div>
    )
  }
}

export default PossessedTreasures