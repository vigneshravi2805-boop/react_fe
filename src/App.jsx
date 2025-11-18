import { useState } from 'react'
import reactLogo from '/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Frontend Application</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="sample-image-container">
        <h2>Sample Image</h2>
        <img src="/sample-image.svg" alt="Sample" className="sample-image" />
      </div>
      <p className="read-the-docs">
        Click on the React logo to learn more about React
      </p>
    </div>
  )
}

export default App

