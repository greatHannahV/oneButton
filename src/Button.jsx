import { useState } from 'react'

function Button() {
  const [count2, setCount2] = useState(0)
  function handleCount2() {
    setCount2((count2) => count2 + 1)
  }
  return (
    <div>
      <h1>And here</h1>
      <p>{count2}</p>

      <button onClick={handleCount2}>Click</button>
    </div>
  )
}

export default Button
