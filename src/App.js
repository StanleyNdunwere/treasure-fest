import './App.css';
import React from 'react';
import HomeComponent from '../src/home/home.component'
import LoginComponent from './login/login.component';
import SingleTreasure from './treasure/single_treasure.component';
import TreasureComponent from './treasure/treasure.component';
import TreasureDetailComponent from './treasure_detail/treasure_detail.component';
import PossessedTreasures from './owned_treasures/possessed_treasures.component';

class App extends React.Component {
  constructor(props) {
    super()
    this.props = props
    this.state = {}
  }

  render() {
    return (

      <div className="parent-page">
        {/* <HomeComponent/> */}
        {/* <LoginComponent/> */}
        {/* <TreasureComponent /> */}
        {/* <TreasureDetailComponent/> */}
        <PossessedTreasures/>
      </div>
    )
  }
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// export default App;
