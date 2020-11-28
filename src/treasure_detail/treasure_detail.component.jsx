import React from 'react'
import '../global/css/general_css.css'

class TreasureDetailComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
    return (
      <div>
        <h1>
          Treasure Detail Page
        </h1>
        <hr></hr>
        <h2>
          Sword of The Humans
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, facilis! Corporis voluptatem debitis molestiae? Fuga maxime rem sint cupiditate provident aperiam accusantium praesentium culpa incidunt, ad neque earum facere vel!Nemo, nesciunt, quod quisquam eveniet dolorum excepturi numquam assumenda minima eligendi odit dolore necessitatibus natus perspiciatis dignissimos quos accusamus nam rerum tempora molestias? Ipsa perspiciatis dolor molestiae deserunt obcaecati vero.
        </p>
        <p>
          $50
        </p>
        <form name="possess_treasure" method = "Post">
          <input type="text" hidden='true' value = "sword-of-the-human"/>
          <input
              style={{
                border: "none",
              }}
              type='submit' className="button" name="submit" value="Possess At Once!" />
        </form>
      </div>
    )
  }
}

export default TreasureDetailComponent