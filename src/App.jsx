import { useCallback, useState } from 'react';
import Counter from './components/Counter';
import List from './components/List';
import Calculating from './components/calculating';
import InputFocus from './components/InputFocus';

function App() {

  const [count, setCount] = useState(0)

  const onClick = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  return (

    <div>
      <h2>App = {count}</h2>
      <button onClick={onClick}>click</button>
      <List value={"list"} click={onClick} />
      <Counter/>
      <Calculating />

      <InputFocus />

    </div>
    
  )
}

export default App
