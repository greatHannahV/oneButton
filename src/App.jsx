import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  function handleCount() {
    setCount(count + 1)
  }
  return (
    <div className="bodyCount">
      <h1>You can increase you number here</h1>
      <p>{count}</p>
      <button onClick={handleCount}>Click</button>
    </div>
  )
}

export default App
