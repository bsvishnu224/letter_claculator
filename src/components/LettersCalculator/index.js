// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  userInput = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {searchInput} = this.state
    let count = searchInput.length
    return (
      <div className="container">
        <div>
          <h1>Calculate the Letters you enter</h1>
          <label for="input">Enter the phrase</label>
          <input
            id="input"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.userInput}
          />
          <p className="count">No.of letters: {count}</p>
        </div>
        <div>
          <img
            className="img"
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
