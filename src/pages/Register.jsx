import React from 'react';
import addSvg from '../img/add-user.svg'

const Register = () => {
  return (
      <div className='formContainer'>
          <div className='formWrapper'>
              <span className="logo">DoChat</span>
              <span className="title">Register</span>
              <form >
                  <input type="text" placeholder='display name' />
                  <input type="email" placeholder='email'/>
                  <input type="password" placeholder='password'/>
                  <label htmlFor="filePick">
                      <img className="imgPick" src={addSvg} alt=""/>
                      <span>Add an avatar</span>
                  </label>
                  <input type="file" style={{display: 'none '}} id="filePick"/>
                    <button>Sign Up</button>
              </form>
              <p>You do have an account? Login</p>
          </div>
      </div>
  )
}

export default Register