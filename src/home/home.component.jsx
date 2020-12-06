import React from 'react'
import '../global/css/general_css.css'
import { Link } from 'react-router-dom'

class HomeComponent extends React.Component {
  constructor(props) {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>
          Home Page
        </h1>
        <hr></hr>
        <h2>
          Hello From The Overridden App
        </h2>
        <p>
          This is the home page and the first source of information for anyone who visits this site whether old or young.
        </p>
        <p>
          Should you ever desire more information about how we got here, just let me know and i'll direct you.
        </p>
        <p>
          <b>
            In the mean time just click this button below.
            <em> Who knows what you might find?</em>
          </b>
        </p>
        <Link className="button" to="/login">Click Mee!!!!</Link>
      </div>
    )
  }
}
export default HomeComponent