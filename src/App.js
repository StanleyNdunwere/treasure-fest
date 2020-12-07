import './App.css';
import React from 'react';
import HomeComponent from '../src/home/home.component'
import LoginComponent from './login/login.component';
import SingleTreasure from './treasure/single_treasure.component';
import TreasureComponent from './treasure/treasure.component';
import TreasureDetailComponent from './treasure_detail/treasure_detail.component';
import PossessedTreasures from './owned_treasures/possessed_treasures.component';
import { Redirect, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super()
    this.props = props
    this.state = {}
  }

  render() {
    let loggedIn = (window.localStorage.getItem("logged_in")) === 'true'
    return (
      <div className="parent-page">

        <Switch>
          <PublicRoute exact path="/" restricted={false} fallbackPath="/treasures" component={HomeComponent} />
          <PublicRoute exact path="/login" restricted={true} fallbackPath="/treasures" component={LoginComponent} />
          <PrivateRoute exact path="/treasures" fallbackPath="/login" component={TreasureComponent} />
          <PrivateRoute path="/treasures/:treasure" fallbackPath="/login" component={TreasureDetailComponent} />
          <PrivateRoute path="/treasure-store" fallbackPath="/login" component={PossessedTreasures} />

        </Switch>

      </div>

    )
  }
}

export default App;

function PrivateRoute(props) {
  const { component: Component, fallbackPath, ...rest } = { ...props }
  let loggedIn = (window.localStorage.getItem("logged_in")) === 'true'

  return (
    <Route {...rest} render=
      {(props) => loggedIn ? <Component {...props} /> : <Redirect to={fallbackPath} {...props} />}>
    </Route>
  )
}


function PublicRoute(props) {
  const { component: Component, restricted, fallbackPath, ...rest } = { ...props }
  let loggedIn = (window.localStorage.getItem("logged_in")) === 'true'

  return (
    <Route {...rest} render=
      {(props) =>
        loggedIn && restricted ? <Redirect to={fallbackPath} {...props} /> : <Component  {...props} />} >
    </Route>
  )
}

