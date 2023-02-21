import React from 'react'
import axios from 'axios'

// Suggested initial states
const initialX = 2
const initialY = 2
const initialMessage =''
const initialEmail =''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at

const initialState = {
  message: initialMessage,
  email: initialEmail,
  index: initialIndex,
  steps: initialSteps,
  x: initialX,
  y: initialY,
}
export default class AppClass extends React.Component {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
  constructor(){
  super();
  this.state = {
    message:initialMessage,
    email:initialEmail,
    index:initialIndex,
    steps:initialSteps,
    xx:initialX,
    yy:initialY
  }
}
  getXY = () => {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
    if(this.state.index === 0){
      return('(1,1)')
    } else if (this.state.index === 1) {
      return ('(2,1)')
    } else if (this.state.index === 2){
      return ('(3,1)')
    } else if (this.state.index === 3){
      return('(1,2)')
    } else if (this.state.index === 4){
      return('(2,2)')
    } else if (this.state.index === 5){
      return('(3,2)')
    } else if (this.state.index === 6){
      return('(1,3)')
    } else if (this.state.index === 7){
      return('(2,3)')
    } else if (this.state.index === 8){
      return('(3,3)')
    }
  }
  getXYMessage = () => {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
    return `Coordinates ${this.getXY()}`
  }

  reset = (evt) => {
    console.log(this.state.email)
    // Use this helper to reset all states to their initial values.
    console.log(this.state.email)
    this.setState({email: initialEmail})
    this.setState({message: initialMessage})
    this.setState({index: initialIndex})
    this.setState({steps: initialSteps})
    this.setState({xx: initialX})
    this.setState({yy: initialY})
  }

  getNextIndex = (direction) => {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
    if(direction === 'left'){
      this.setState({message: initialMessage})
        if(this.state.index === 0 || this.state.index === 3 || this.state.index === 6){
          this.setState({message: this.state.message="You can't go left"});
        } else {
          this.setState({index: this.state.index -1})
          this.setState({steps: this.state.steps +1})
          this.setState({xx: this.state.xx -1}) 
        }
    }
    if(direction === 'right'){
      this.setState({message: initialMessage})
        if(this.state.index === 2 || this.state.index === 5 || this.state.index === 8){
          this.setState({message: this.state.message="You can't go right"});
        } else {
          this.setState({index: this.state.index +1})
          this.setState({steps: this.state.steps +1})
          this.setState({xx: this.state.xx +1})
        }
    }

    if(direction === 'up'){
      this.setState({message: initialMessage})
        if(this.state.index === 0 || this.state.index === 1 || this.state.index === 2){
          this.setState({message: this.state.message="You can't go up"});
        } else {
          this.setState({index: this.state.index -3})
          this.setState({steps: this.state.steps +1})
          this.setState({yy: this.state.yy -1})
        }
    }

    if(direction === 'down'){
      this.setState({message: initialMessage})
        if(this.state.index === 6 || this.state.index === 7 || this.state.index === 8){
          this.setState({message: this.state.message="You can't go down"});
        } else {
          this.setState({index: this.state.index +3})
          this.setState({steps: this.state.steps +1})
          this.setState({yy: this.state.yy +1})
        }
    }
  }
  stepMessage = () => {
    if(this.state.steps === 1){
      return `You moved ${this.state.steps} time`
    }
    return `You moved ${this.state.steps} times`
  }

  onChange = (evt) => {
    // You will need this to update the value of the input.
    evt.preventDefault();
    this.setState({email: evt.target.value})
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    // Use a POST request to send a payload to the server.
    axios.post('http://localhost:9000/api/result', {
      'x': this.state.xx,
      'y': this.state.yy,
      'steps': this.state.steps,
      'email': this.state.email
    })
    .then(res => {
      this.setState({message: res.data.message})
      this.setState({email: initialEmail});
    })
    .catch(err => this.setState({message: err.response.data.message}))
  }

  render() {
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">{this.getXYMessage()}</h3>
          <h3 id="steps">{this.stepMessage()}</h3>
        </div>
        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div key={idx} className={`square${idx === this.state.index ? ' active' : ''}`}>
                {idx === this.state.index ? 'B' : null}
              </div>
            ))
          }
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick = { ()=>this.getNextIndex('left')}>LEFT</button>
          <button id="up" onClick={()=>this.getNextIndex('up')}>UP</button>
          <button id="right" onClick={()=>this.getNextIndex('right')}>RIGHT</button>
          <button id="down" onClick={()=>this.getNextIndex('down')}>DOWN</button>
          <button id="reset" onClick={this.reset}>reset</button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input id="email" type="email" placeholder="type email"  onChange={this.onChange}></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
