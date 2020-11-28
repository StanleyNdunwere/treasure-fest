import React from 'react'
import '../global/css/general_css.css'

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
        <a href={"hulalalalalalal"} className="button">Click Me!!</a>
      </div>
    )
  }
}
export default HomeComponent