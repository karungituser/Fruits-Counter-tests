// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  onEatMangoButton = () => {
    this.setState(prevState => ({key1: prevState.key1 + 1}))
  }

  onEatBananaButton = () => {
    this.setState(prevState => ({key2: prevState.key2 + 1}))
  }

  render() {
    const {key1, key2} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate <span>{key1}</span> mangoes <span>{key2}</span> bananas
          </h1>
          <div className="fruit-button-container">
            <div className="container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-image"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.onEatMangoButton}
              >
                Eat Mango
              </button>
            </div>
            <div className="container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="fruit-image"
                alt="banana"
              />
              <button
                className="button"
                type="button"
                onClick={this.onEatBananaButton}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
