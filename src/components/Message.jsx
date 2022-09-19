import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/13298639/pexels-photo-13298639.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load " alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://images.pexels.com/photos/13298639/pexels-photo-13298639.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
      </div>
    </div>
  )
}

export default Message