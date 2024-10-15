import React from 'react'
import './BackDrop.css'
import ReactDOM from 'react-dom'

const backdropRoot = document.getElementById('backdrop-root')
const BackDrop = (props) => {
  return ReactDOM.createPortal(
    <div className='backDrop'>
      {props.children}
    </div>, backdropRoot)
}

export default BackDrop