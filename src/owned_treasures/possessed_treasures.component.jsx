import React from "react";
import "../global/css/general_css.css";
import "../treasure/treasure.css";
import "./possessed.css";
import { treasures } from "../global/treasures";
import SingleTreasure from "../treasure/single_treasure.component";

class PossessedTreasures extends React.Component {
  constructor(props) {
    super();
    this.state = {
      treasuresPresent:
        JSON.parse(window.localStorage.getItem("selectedTreasures")).length > 0,
      treasureInfoArray: [],
    };
  }

  componentDidMount() {
    let selectedTreasures = JSON.parse(
      window.localStorage.getItem("selectedTreasures")
    );
    let treasureInfoArray = [];
    for (let i = 0; i < selectedTreasures.length; i++) {
      for (let j = 0; j < treasures.length; j++) {
        if (treasures[j].shortName === selectedTreasures[i]) {
          treasureInfoArray.push(treasures[j]);
        }
      }
    }
    this.setState({ treasureInfoArray: treasureInfoArray });
  }
  render() {
    return (
      <div>
        <h1>Possessed Treasures Page</h1>
        <hr></hr>
        <h2>Welcome To Thy Cove Hero! View all of your collections here.</h2>
        <p>
          This is thy resting cove to view all of thine treasured collectibles
          which thou have amassed so far and review their importance in your
          strategy. We trust that thy wisdom shall guide thee aright.
        </p>
        {this.state.treasuresPresent ? (
          <div className="treasure-container">
            {this.state.treasureInfoArray.map((treasure) => {
              return (
                <SingleTreasure
                  key={Math.random()}
                  shortName={treasure.shortName}
                  name={treasure.name}
                  feature={treasure.feature}
                  price={treasure.price}
                />
              );
            })}
          </div>
        ) : (
          <div
            className="no-treasure-found"
            style={{
              textAlign: "center",
            }}
          >
            <h2>Nothing in thy chest!</h2>
            <p>
              <b
                style={{
                  color: "#fcfcce",
                }}
              >
                You have no possessed treasures yet!
              </b>
            </p>
            <a href="/treasures" className="button">
              View Treasures You May Want To Possess
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default PossessedTreasures;
