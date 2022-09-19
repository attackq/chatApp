import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">DoChat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/13298639/pexels-photo-13298639.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
        <span>Alex</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar