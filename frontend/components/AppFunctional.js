// IMPORTANT-- SWITCH THE X AND Y FOR THE COORDINATES, THEY'RE WRONG LOL!!! ALSO, EVERY TIME YOU PRESS ANY DIRECTION YOU WILL GAIN OR LOSE 1, OR 3

/*
I need to go and create a function that makes the string for the steps part. You will need an if statement to figure out if it is one or not. If it is one, it will return a constructed string for the steps
*/

// import React,{useState} from 'react'
// import axios from 'axios'

// // Suggested initial states
// let x = 2
// let y = 2
// const initialMessage = ''
// const initialEmail = ''
// const initialSteps = 0
// const initialIndex = 4 // the index the "B" is at
// const arrXY = [  
//   '(1, 1)', '(2, 1)', '(3, 1)',
//   '(1, 2)', '(2, 2)', '(3, 2)',
//   '(1, 3)', '(2, 3)', '(3, 3)']



// export default function AppFunctional(props) {
//   // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
//   // You can delete them and build your own logic from scratch.
//   const [index, setIndex]=useState(initialIndex);
//   const [email, setEmail]=useState(initialEmail);
//   const [steps, setSteps]=useState(initialSteps);
//   const [message, setMessage]=useState(initialMessage);
  
//   // const x = arrXY.split('')
//   function getXY() {
//     // It it not necessary to have a state to track the coordinates.
//     // It's enough to know what index the "B" is at, to be able to calculate them.
//     if(index===0){
//       return (`(1, 1)`);
//     } else if (index === 1){
//       return('(2, 1)');
//     } else if (index === 2){
//       return('(3, 1)');
//     } else if (index === 3){
//       return('(1, 2)');
//     } else if (index === 4){
//       return ('(2, 2)');
//     } else if (index === 5){
//       return('(3, 2)');
//     } else if (index === 6){
//       return('(1, 3)');
//     } else if (index === 7){
//       return('(2, 3)');
//     } else if (index === 8){
//       return('(3, 3)');
//     } 
//   }
//   function getXYMessage() {
//     // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
//     // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
//     // returns the fully constructed string.
//     return `Coordinates ${getXY()}`
//   }
//   function reset() {
//     // Use this helper to reset all states to their initial values.
//     setIndex(initialIndex);
//     setEmail(initialEmail);
//     setMessage(initialMessage);
//     setSteps(initialSteps);
//      x=2
//      y=2
//   }

//   function getNextIndex(direction) {
//     // This helper takes a direction ("left", "up", etc) and calculates what the next index
//     // If the direction of choice gets picked, I want it to check if the arrXY[index] exist, well the characters that look like this(2,2), if not, return the previous index and update the message state
//     if(direction === 'left'){
//       setMessage(initialMessage)
//       if(index === 0 || index === 3|| index === 6){
//         setMessage("You can't go left");
//       }
//         else{ setIndex(index-1);
//           setSteps(steps+1);
//           x= x - 1
//         }

//     }
//     if(direction==='right'){
//       setMessage(initialMessage)
//        if(index === 2 || index === 5 || index === 8){
//       setMessage("You can't go right");
//     }
//       else {setIndex(index+1);
//          setSteps(steps + 1)
//         x= x + 1
//         }
//     }
//     if(direction ==='up'){
//       setMessage(initialMessage)
//       if(index === 0 || index === 1|| index === 2){
//         setMessage("You can't go up");
//       }
//         else {setIndex(index-3);
//         setSteps(steps+1);
//         y= y - 1
//         }
//     }
//     if(direction === 'down'){
//       setMessage(initialMessage)
//       if(index === 6 || index === 7|| index === 8){
//         setMessage("You can't go down");
//       }
//         else {setIndex(index+3)
//           setSteps(steps + 1);
//           y= y + 1
//         }
//     }
//     // of the "B" would be. If the move is impossible because we are at the edge of the grid,
//     // this helper should return the current index unchanged.

//   }
//   function stepMessage(){
//     if(steps === 1){
//       return `You moved ${steps} time`
//     }
//     return `You moved ${steps} times`
//   }

//   function onChange(evt) {
//     evt.preventDefault();
//     // You will need this to update the value of the input.
//     setEmail(evt.target.value);
//   }

//   function onSubmit(evt) {
//     evt.preventDefault();
//     // Use a POST request to send a payload to the server.
//     axios.post('http://localhost:9000/api/result', { 'x': x, 'y': y, 'steps': steps, 'email': email
//     })
//     .then(res => {
//       setMessage(res.data.message);
//       console.log(message);
//       setEmail(initialEmail);
//     })
//     .catch(err => {
//       setMessage(err.response.data.message)
//       setEmail(initialEmail);
//     });
//     console.log(message);
//   }

//   return (
//     <div id="wrapper" className={props.className}>
//       <div className="info">
//         <h3 id="coordinates">{`${getXYMessage()}`}</h3>
//         <h3 id="steps">{stepMessage()}</h3>
//       </div>
//       <div id="grid">
//         {
//           [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
//             <div key={idx} className={`square${idx === index ? ' active' : ''}`}>
//               {idx === index ? 'B' : null}
//             </div>
//           ))
//         }
//       </div>
//       <div className="info">
//         <h3 id="message">{`${message}`}</h3>
//       </div>
//       <div id="keypad">
//         <button id="left" onClick={()=>getNextIndex('left')}>LEFT</button>
//         <button id="up" onClick={()=>getNextIndex('up')}>UP</button>
//         <button id="right" onClick={()=>getNextIndex('right')}>RIGHT</button>
//         <button id="down" onClick={()=>getNextIndex('down')}>DOWN</button>
//         <button id="reset" onClick={reset}>reset</button>
//       </div>
//       <form onSubmit={onSubmit}>
//         <input id="email" type="email" placeholder="type email" value ={email} onChange={onChange}></input>
//         <input id="submit" type="submit"></input>
//       </form>
//     </div>
//   )
// }
import React, { useState } from 'react';
import axios from 'axios';

// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // (2,2) center

const URL = "http://localhost:9000/api/result";

export default function AppFunctional(props) {

  const [message, setMessage] = useState(initialMessage);
  const [email, setEmail] = useState(initialEmail);
  const [steps, setSteps] = useState(initialSteps);
  const [index, setIndex] = useState(initialIndex);

// Returns coordinates string displayed at top of screen
function getXYMessage() {
  const coordinates = getXY();
  return `Coordinates (${coordinates.x}, ${coordinates.y})`
}

// Resets all values to initial
function reset() {
  setEmail(initialEmail)
  setIndex(initialIndex);
  setSteps(initialSteps);
  setMessage(initialMessage);
}

  // returns separate X and Y values as an object based on the current index
  function getXY() {
    const xyArray = [
      { x: 1, y: 1},
      { x: 2, y: 1},
      { x: 3, y: 1},
      { x: 1, y: 2},
      { x: 2, y: 2},
      { x: 3, y: 2},
      { x: 1, y: 3},
      { x: 2, y: 3},
      { x: 3, y: 3},
    ]
    return xyArray[index];
  }
  

  // Move B to the left, or change the message to error if it cant be moved
  function moveLeft() {
    let idx = index;

    if(index !== 0 && index !== 3 && index !== 6) {
      idx = idx - 1;
      setSteps(steps + 1);
    } else {
      setMessage("You can't go left");
    }

    return idx;
  }

  // Move B to the right, or change the message to error if it cant be moved
  function moveRight() {
    let idx = index;

    if(index !== 2 && index !== 5 && index !== 8) {
      idx = idx + 1;
      setSteps(steps + 1);
    } else {
      setMessage("You can't go right");
    }

    return idx;
  }
    // Move B up, or change the message to error if it cant be moved
  function moveUp() {
    let idx = index;
    if(index > 2) {
      idx -= 3;
      setSteps(steps + 1);
    } else {
      setMessage("You can't go up");
    }
    return idx;
  }

  // Move B down, or change the message to error if it cant be moved
  function moveDown() {
    let idx = index;
    if(index < 6) {
      idx += 3;
      setSteps(steps + 1);
    } else {
      setMessage("You can't go down");
    }
    return idx;
  }

  function move(evt, direction) {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
    evt.preventDefault();

    setMessage(initialMessage);

    if(direction === "left") {
      setIndex(moveLeft());
    } else if(direction === "right") {
      setIndex(moveRight());
    } else if(direction === "up") {
      setIndex(moveUp());
    } else if(direction === "down") {
      setIndex(moveDown());
    }
  }



  // Updates value of the email input.
  function onChange(evt) {
    const { value } = evt.target;
    setEmail(value);
    if(email === "foo@bar.baz") {
      throw console.error("Forbidden")
    }
  }


 // Submits information to an API containing the current
  // index, number of steps, and valid email.
  function onSubmit(evt) {
    // Use a POST request to send a payload to the server.
    evt.preventDefault();
    const coordinate = getXY();
    const newSubmission = {
      x: coordinate.x,
      y: coordinate.y,
      steps: steps,
      email: email,
    }


    axios.post(URL, newSubmission)
      .then(res => {
        setMessage(res.data.message);
      })
      .catch(err => {
        console.log(err);
        setMessage(err.response.data.message);
      });
    
      setEmail(initialEmail);
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{getXYMessage()}</h3>
        <h3 id="steps">You moved {steps} time{steps !== 1 ? "s" : ""}</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
<div key={idx} 
                 className={`square${idx === index ? ' active' : ''}`} >
                {idx === index ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={(e) => move(e, "left")}>LEFT</button>
        <button id="up" onClick={(e) => move(e, "up")}>UP</button>
        <button id="right" onClick={(e) => move(e, "right")}>RIGHT</button>
        <button id="down" onClick={(e) => move(e, "down")}>DOWN</button>
        <button id="reset" onClick={reset}>reset</button>
      </div>
      <form onSubmit={onSubmit}>
        <input 
          id="email" 
          type="email" 
          placeholder="type email"
          onChange={(e) => onChange(e)}
          value={email}
        />
        <input 
          id="submit" 
          type="submit"
        />
      </form>
    </div>
  )
 }
