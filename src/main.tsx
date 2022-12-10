import React from 'react'
import ReactDOM from 'react-dom/client'
import RatingComponent from "./RatingComponent";
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RatingComponent />
  </React.StrictMode>,
)
