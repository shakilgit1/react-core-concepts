import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';

function App() {
  function handleClick() {
    alert('button clicked');
  }
  const button2 = () => {
     alert('button 2 clicked')
  }
  const thirdButton = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h3>React core concepts part 2</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={button2}>Click 2</button>
      <button onClick={() => {
         alert ('num 3 button')}}>Click 3</button>
      <button onClick={() => thirdButton(5)}>Click 2</button>
    
     
    </>
  )
}

export default App
