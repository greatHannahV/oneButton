import { useState } from 'react'

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
