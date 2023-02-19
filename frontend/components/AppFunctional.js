// IMPORTANT-- SWITCH THE X AND Y FOR THE COORDINATES, THEY'RE WRONG LOL!!! ALSO, EVERY TIME YOU PRESS ANY DIRECTION YOU WILL GAIN OR LOSE 1, OR 3

/*
I need to go and create a function that makes the string for the steps part. You will need an if statement to figure out if it is one or not. If it is one, it will return a constructed string for the steps
*/

import React,{useState} from 'react'
import axios from 'axios'

// Suggested initial states
let x = 2
let y = 2
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at
const arrXY = [  
  '(1, 1)', '(2, 1)', '(3, 1)',
  '(1, 2)', '(2, 2)', '(3, 2)',
  '(1, 3)', '(2, 3)', '(3, 3)']



export default function AppFunctional(props) {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
  const [index, setIndex]=useState(initialIndex);
  const [email, setEmail]=useState(initialEmail);
  const [steps, setSteps]=useState(initialSteps);
  const [message, setMessage]=useState(initialMessage);
  
  // const x = arrXY.split('')
  function getXY() {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
    if(index===0){
      return (`(1,1)`);
    } else if (index === 1){
      return('(2,1)');
    } else if (index === 2){
      return('(3,1)');
    } else if (index === 3){
      return('(1,2)');
    } else if (index === 4){
      return ('(2,2)');
    } else if (index === 5){
      return('(3,2)');
    } else if (index === 6){
      return('(1,3)');
    } else if (index === 7){
      return('(2,3)');
    } else if (index === 8){
      return('(3,3)');
    } 
  }
  function getXYMessage() {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
    return `Coordinates ${getXY()}`
  }
  function reset() {
    // Use this helper to reset all states to their initial values.
    setIndex(initialIndex);
    setEmail(initialEmail);
    setMessage(initialMessage);
    setSteps(initialSteps);
     x=2
     y=2
  }

  function getNextIndex(direction) {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // If the direction of choice gets picked, I want it to check if the arrXY[index] exist, well the characters that look like this(2,2), if not, return the previous index and update the message state
    if(direction === 'left'){
      setMessage(initialMessage)
      if(index === 0 || index === 3|| index === 6){
        setMessage("You can't go left");
      }
        else{ setIndex(index-1);
          setSteps(steps+1);
          x= x - 1
        }

    }
    if(direction==='right'){
      setMessage(initialMessage)
       if(index === 2 || index === 5 || index === 8){
      setMessage("You can't go right");
    }
      else {setIndex(index+1);
         setSteps(steps + 1)
        x= x + 1
        console.log(x)
        }
    }
    if(direction ==='up'){
      setMessage(initialMessage)
      if(index === 0 || index === 1|| index === 2){
        setMessage("You can't go up");
      }
        else {setIndex(index-3);
        setSteps(steps+1);
        y= y - 1
        }
    }
    if(direction === 'down'){
      setMessage(initialMessage)
      if(index === 6 || index === 7|| index === 8){
        setMessage("You can't go down");
      }
        else {setIndex(index+3)
          setSteps(steps + 1);
          y= y + 1
        }
    }
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.

  }

  function onChange(evt) {
    evt.preventDefault();
    // You will need this to update the value of the input.
    setEmail(evt.target.value);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    // Use a POST request to send a payload to the server.
    axios.post('http://localhost:9000/api/result', { 'x': x, 'y': y, 'steps': steps, 'email': email
    })
    .then(res => {
      setMessage(res.data.message);
      setEmail(initialEmail);
    })
    .catch(err => setMessage(err.response.data.message));
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{`${getXYMessage()}`}</h3>
        <h3 id="steps">You moved {steps} times</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === index ? ' active' : ''}`}>
              {idx === index ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={()=>getNextIndex('left')}>LEFT</button>
        <button id="up" onClick={()=>getNextIndex('up')}>UP</button>
        <button id="right" onClick={()=>getNextIndex('right')}>RIGHT</button>
        <button id="down" onClick={()=>getNextIndex('down')}>DOWN</button>
        <button id="reset" onClick={reset} >reset</button>
      </div>
      <form onSubmit={onSubmit}>
        <input id="email" type="email" placeholder="type email" value ={email} onChange={onChange}></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
