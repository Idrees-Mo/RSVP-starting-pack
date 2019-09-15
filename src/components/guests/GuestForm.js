import React from 'react'

const GuestForm = () => {
  return (
    <div className="invite-section">
      <h1>Invite Someone</h1>
      <form >
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="Phone" name="phone" />
        <p className="options-label">Dietary</p>
        <div className="options">
          <label className="container">Non-veg
        <input type="radio" name="dietary" Value='Non-Veg' />
            <span className="checkmark"></span>
          </label>
          <label className="container">Vegan
        <input type="radio" name="dietary" Value='Vegan' />
            <span className="checkmark"></span>
          </label>
          <label className="container">Pascatarian
        <input type="radio" name="dietary" Value='Pesacatarian' />
            <span className="checkmark"></span>
          </label>
        </div>
        <input type="submit" value="Add Guest" className="btn" />
      </form>
    </div>
  )
}

export default GuestForm
