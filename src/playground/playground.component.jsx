import { useEffect, useState } from "react";
import React from "react";

function PlaygroundComponents() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    setCount(20);

    return () => {
      setCount(count + 1);
    };
  }, []);

  let handleOnClick = () => {
    setCount(count++);
  };

  return (
    <div>
      <h1 id="header"></h1>
      <h2>You just hit this button {count} times</h2>
      <div className="button" onClick={handleOnClick}>
        Click Here!
      </div>
    </div>
  );
}

class PlaygroundComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("component did mount ");
    this.setState({ count: 40 });
  }

  componentDidUpdate(oldProps, oldState) {
    console.log("component did update ");
    // this.setState({ count: 30 });
  }

  handleOnClick = () => {
    console.log("clicked this button");
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1 id="header"></h1>
        <h2>You just hit this button {this.state.count} times</h2>
        <div className="button" onClick={this.handleOnClick}>
          Click Here!
        </div>
      </div>
    );
  }
}
export default PlaygroundComponent;
