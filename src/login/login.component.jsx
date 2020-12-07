import React from 'react'
import '../global/css/general_css.css'

class LoginComponent extends React.Component {

  constructor(props) {
    super()
    this.state = {
      name: "",
      password: ""
    }
    console.log(props)
  }

  handleSetValue = (val, type) => {
    if (type === "name") {
      this.setState({ name: val.target.value })
    } else {
      this.setState({ password: "lololol" })
    }

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
          <b>Enter thy Name:</b><br />
          <input type="text" name="name" onChange={(e) => {
            this.handleSetValue(e, "name")
          }} />
          <br />
          <b>Enter thy password:</b><br />
          <input type="password" name="password" onChange={(e) => {
            this.handleSetValue(e, "password")
          }} />
          <br />
          <input
            style={{
              border: "none",
            }}
            type='submit' onClick={(e) => {
              e.preventDefault()
              if (this.state.name.length < 5) {
                alert("Amigo, Enter a Valid Name")
                return
              }
              if (this.state.password.length < 5) {
                alert("Amigo, Password must be greater than 5 characters")
                return
              }
              window.localStorage.setItem("logged_in", "true")
              window.localStorage.setItem("name", this.state.name.toString())
              window.localStorage.setItem("password", this.state.password.toString())
              this.props.history.replace("/treasures")
              console.log(this.props.history)
            }} className="button" name="submit" value="Login" />
          <br />

        </p>

      </div>
    )
  }
}

export default LoginComponent