import { useState } from 'react'
import './App.css'
import HeadBar from './component/HeadBar/headbar'
import Animation from './component/Animation/animation'
import Card from './component/Card/card'
import AI from './component/AI/ai'
import Footer from  './component/Footer/footer'

function App() {
 return (
    <div className="App">
      <div className="headBar">
        <HeadBar />
      </div>

      <div className="animation">
        <Animation />
      </div>

      <div className="body">
        <Card />
      </div>

      <div className="aiSection">
        <AI />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
