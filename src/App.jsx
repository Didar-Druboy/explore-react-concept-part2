import './App.css'
import Counter from './counter'
import Users from './Users'
import User from './User'

function App() {
  function handleClick(){
    alert("button clicked")
  }
  const handleButton2 = () => {
    alert("button 2 clicked")
  }
  const addFour = (num) => {
    alert('4 + ' + num + ' makes ' + (num+4))
  }
  const addFive = (num) => {
    alert('5 + ' + num + ' makes ' + (num+5))
  }
  return (
    <>
      <h2>React cor concept Part-2</h2> 
      <hr />
      <Counter></Counter> 
      <hr />
      <Users></Users>
      <hr />
      <User></User>
      <hr />
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleButton2}>CLick 2</button>
      <button onClick={function(){addFour(5)}}>Add four</button>
      <button onClick={()=>{addFive(7)}}>Add five</button>
      
    </>
  )
}

export default App
