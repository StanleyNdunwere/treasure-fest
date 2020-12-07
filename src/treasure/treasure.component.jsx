import React from 'react'
import '../global/css/general_css.css'
import "./treasure.css"
import SingleTreasure from './single_treasure.component'
import { treasures } from '../global/treasures'
import { Link } from 'react-router-dom'


class TreasureComponent extends React.Component {
  constructor(props) {
    super()
    this.state = {
      treasures: treasures
    }

  }
  render() {
    return (
      <div>
        <h1>
          Treasures Page
        </h1>
        <hr></hr>

        <h2>
          Welcome{" " + window.localStorage.getItem("name")}
          </h2>
        <a style={{
          marginRight: "15px"
        }} href="treasure-store" className="button">View All Thine Possessed Treasures!</a>
        <Link to="/" onClick={() => {
          window.localStorage.clear()
        }} className="button">Logout</Link>

        <p>
          Few men have ventured this far and lived to tell the tale. Our treasures are as rare as they are powerful.
        </p>
        <p>
          We charge thee to use them for the good of mankind and the protection of the weak. Where injustice arises, we charge thee to subdue it with all of thy might.<br /> Where pain is rife, we charge thee to sow relief. <br />
        Where the heart wanes, we charge thee to provide succor and courage.<br />For it is only in your wielding of these enormous powers that balance may yet be restored!
        <br />The gods are on thy side.
        </p>
        <div>
          <h3>Look through our delightful treasures and possess at will!</h3>
        </div>
        <div className="treasure-container">
          {this.state.treasures.map((treasure) => {
            return <SingleTreasure

              key={treasure.shortName}
              shortName={treasure.shortName}
              name={treasure.name}
              feature={treasure.feature}
              price={treasure.price} />
          })}
        </div>
      </div>
    )
  }
}
export default TreasureComponent