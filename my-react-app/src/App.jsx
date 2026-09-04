 import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="container">
        <h1 className="title">3D Image Gallery</h1>
        <div className="image-grid">
          <div className="card">
            <img src="https://w0.peakpx.com/wallpaper/165/863/HD-wallpaper-fire-tiger-3d-abstrat-background-black-cool-nice-tigers-thumbnail.jpg" alt="Tiger" />
            <div className="layer">Tiger</div>
          </div>
        </div>
       </div>
    </>
  )
}

export default App