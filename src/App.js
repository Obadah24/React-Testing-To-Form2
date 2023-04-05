import React from 'react'
import { useEffect } from 'react'
export const useCounter = () => {
  const [count2, setCount2] = React.useState(0)
  const increment = () => setCount2(count2 + 1)
  const descriment = () => setCount2(count2 - 1)
  return {count2, increment, descriment}
}
export default function App(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [count, setCount] = React.useState(0)
  const [amount, setAmount] = React.useState(0)
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 3000)
  },[])
  return (
    <>
      <ul>
        {props.Skills.map((skill) => {
        return <li key={skill}>{skill}</li>
        })}
      </ul>
      {
        isLoggedIn ? (
          <button>Start Learning</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )
      }
      <div>
        <h1 title='counter'>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <input title='amount' type='number' name='amount' value={amount} onChange={(e) => setAmount(parseInt(e.target.value))}/>
        <button onClick={() => setCount(amount)}>Set</button>
      </div>
      <form>
        <h1>Little Lemon Restaurant</h1>
        <h2>HomePage</h2>
        <p>All Fields are mandatory</p>
        <span title='Close'>X</span>
        <img src='#' alt='a person with a laptop'></img>
        <div data-testid='custom-element'>Custom HTML element</div>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' placeholder='Fullname' value='Vishwas' onChange={() => {}}/>
        </div>
        <div>
          <label htmlFor='job-location'>Name</label>
          <select id='job-location'>
          <option value=''>Slecte a country</option>
          <option value='US'>United States</option>
          <option value='GB'>United Kingdom</option>
          <option value='CA'>Canada</option>
          <option value='IN'>India</option>
          <option value='AU'>Australia</option>
          </select>
        </div>
        <div>
          <label>
          <input type='Checkbox' id='terms'/>I gree to the terms  and conditions</label>
            <button>Submit</button>
        </div>
      </form>
    </>
  )
}
