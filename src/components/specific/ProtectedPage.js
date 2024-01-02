import React from 'react'
import './Home.css'

function ProtectedPage() {
  return (
    <div className="">
      <h1 className="title">Welcome to My Protected Page</h1>
      <p className="description">This is a protected page that a user can only access if they successfully sign in.</p>
      <div className="animation-box">
        <span className="animated-element">🌟</span>
      </div>
    </div>
  )
}

export default ProtectedPage
