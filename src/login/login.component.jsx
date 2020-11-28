import React from 'react'
import '../global/css/general_css.css'

class LoginComponent extends React.Component {

  constructor(props) {
    super()
  }

  render() {
    return (
      <div>
        <h1>
          Login Page
        </h1>
        <hr></hr>
        <h2>
          Ah!... I see you want access to the rarities of the earth
        </h2>
        <p>
          Okay, this is where i must take something from you to grant you all that you seek.<br /> For all who grace this path are given the option to sacrifice a little bit of themselves. <br /> Alas! a small price to possess all the treasures that lie beyond this page.
        </p>
        <p>
          Don't worry, we shall keep your secret and no man nor soul that grace the earth, the heaven plows nor roams far below shall know!
        </p>
        <p>
          <form className form>
            <label for="name"><b>Enter thy Name:</b></label><br />
            <input type="text" name="name" />
            <br />
            <label for="password"><b>Enter thy password:</b></label><br />
            <input type="password" name="password" />
            <br />
            <input
              style={{
                border: "none",
              }}
              type='submit' className="button" name="submit" value="Login" />
            <br />
          </form>
        </p>

      </div>
    )
  }
}

export default LoginComponent