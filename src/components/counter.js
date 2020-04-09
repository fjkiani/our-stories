import React, { useState } from "react"

const counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="counter">
      <h3>Share this</h3>
      <h3>likes {count}</h3>
      <button onClick={() => setCount(count + 1)}>support level</button>
    </div>
  )
}

export default counter
