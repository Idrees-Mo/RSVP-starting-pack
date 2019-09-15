import React from 'react'

const GuestFilter = () => {
  return (
    <div className="toggle">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <p className="lead">Show attending only!</p>
    </div>
  )
}

export default GuestFilter
