import React from 'react'
import Clip from '../img/clip.svg'
import Picture from '../img/picture.svg'

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={Clip} alt="" />
        <input type="file" id="fileImg" style={{display: 'none'}} />
        <label htmlFor="fileImg">
          <img src={Picture} alt="" />
        </label>
        <button>Send </button>
      </div>
    </div>
  )
}

export default Input