import React from 'react'
import '../global/css/general_css.css'
import "./treasure.css"
import SingleTreasure from './single_treasure.component'
import { Link } from 'react-router-dom'


class TreasureComponent extends React.Component {
  constructor(props) {
    super()
    this.state = {
      treasures: [
        {
          name: "Bow Of Archilles",
          feature: "Pierces even the armor of Hephaestus",
          detail: "Forged in the darkest pits of hades and cleansed in the fiery marbles of olympus, this bow has seen the two extremes of the world and holds their secrets within it golden core. Used by archilles to lay waste to troy and send the enemy scampering for safety with its never ending barrage of arrows which can pierce through the heavens itself ",
          price: 10
        },
        {
          name: "Bolt of Amadioha",
          feature: "Destroys all in its path.",
          detail: "From the hidden lands in southern Nigeria, an eternal being took rest and ruled over the people with justice and fairness. Legend say his eyes flashed like lightening upon sighting injustice and despots and his arm glistened like fine silver under the rays of the morning sun in battle. Upon restoring balance to the region he was never seen again but bequeated his Bolt of justice to the willing to continue his lagacy.",
          price: 100
        },
        {
          name: "Sword of Alexandar The Great",
          feature: "Cuts through all matter, even diamond and titanium",
          detail: "In all his many wars and conquests no sword proved as reliable, deadly and precise and the one he wielded since he was of age under the tutelage of Aristotle in Macedonia. No one knows the origin of the sword but it is rumored to be forged by the gods themselves. The balance is perfect, the edges cut to all bar nothing. And its wielder is granted superhuman reflexes and nigh omipotence on the battle ground",
          price: 98
        },
        {
          name: "Potion of Nightingale",
          feature: "Heals and grants omnipotence to one who possesses it",
          detail: "The world wars of fairly recent history showed us what carnage we were capable of when we unleashed our inner demons. Pain was rife, blood was recklessly spilt and limbs were detached freely. Nightingale a gifted healer discovered the potion and wielding its powers was able to restore torn limbs and cure deathly injuries. The source is unknown but it is often credited to her genius. In no small way did the potion grant the allies victory over their foes.",
          price: 300
        },
        {
          name: "Rage of Athena",
          feature: "Infinite durability to one who possesses it",
          details: "Heracles, Pagasus, Aries, kratos are all but a few of the gods and beings who have wielded this potent rage and caused their enemies to turn in flight for their safety. Athena a beautiful goddess has mastered the art of comforting distressed gods and sentient being in pain and seeking for revenge. Her method allowed her extract the essence of their pain and store them in a special golden gourd. Any who touches the gourd is granted this rage and its powers to deploy at will during battle and scatter the enemies as the falling leaves in autumn",
          price: 130
        },
        {
          name: "Army of Cleopatra",
          feature: "Cuts all opposition who stands in its way",
          details: "Little is known of the battles that Cleopatra fought because no one can truly say if there was a battle or not. The plains and valleys they were fought upon bear no evidence and she was not known to have an army. But the legends disputes these. Cleopatra owned an army of sentient beings who were invisible to plain eyes. Their sword stripped the souls of the enemy and converts them to her soldiers while their bodies evaporated into nothingness. These soldiers were sealed in the tomb of the first pharoah until she unearthed them and took control of their trident. Own this trident and you command the army of cleopatra",
          price: 150
        },
        {
          name: "Herb of Nwanyi'Asaba",
          feature: "Endows the possessor with nigh omni-science and nigh-infinite knowledge",
          details: "Knowledge has never been distributed fairly. A few know too much and others know too little. But even in the few that know too much Nwanyi'Asaba stood out as she communed with spirits, undead and gods themselves. Her knowledge knows no bounds as she can tell the furthest point of the universe and the beings in control in that region as she could name the smallest particle inside a quark. Take her herb and you'll know a little of what her mind holds. But even that little put you in the league of gods and spirits alike",
          price: 320
        }

      ]
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
          Welcome Courageous One!
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
              key={treasure.name}
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