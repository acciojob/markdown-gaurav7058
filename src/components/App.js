import React, { useState } from 'react'
import "../styles/App.css"
export default function App() {
    const [markDown,setMarkDown]=useState("");
  return (
      <div className="app">
        <div className="textarea">
            <h1>Markdown Editor</h1>
            <textarea name="" id="" className='textarea' value={markDown} onChange={(e)=>setMarkDown(e.target.value)}></textarea>
        </div>
        <div className="preview">
            <h1>Markdown Preview</h1>
           <h2>{markDown}</h2> 
        </div>
      </div>
  )
}
