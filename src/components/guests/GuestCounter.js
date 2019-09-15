import React from 'react'

const GuestCounter = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Guest</th>
            <th>Invited</th>
            <th>Attending</th>
          </tr>
          <tr>
            <th>Non-Veg</th>
            <td>10</td>
            <td>5</td>
          </tr>
          <tr>
            <th>Vegan</th>
            <td>10</td>
            <td>5</td>
          </tr><tr>
            <th>Pescetarians</th>
            <td>10</td>
            <td>5</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>10</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default GuestCounter
