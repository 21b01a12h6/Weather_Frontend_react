import React from 'react'
import './Mainpg.css'
import sunrise from './sunrise.jpg'
import sunset from './sunset.jpg'
const Leftbx = () => {
  return (
    <div>

      <div className='first'>
        
        <b>--/--/-----</b>
        <p style={{ float: "right", fontWeight: "bold", paddingRight: "50px" }}>Min: -- </p>
        <p style={{ float: "right", fontWeight: "bold", paddingRight: "20px" }}>Max: -- </p><br></br><br></br>
        
        <div style={{ display: "flex" }}>
          <img src={sunrise} className='sunrise' /> <p style={{ fontSize: '19px', paddingLeft: '16px' }}>----</p>
          <div style={{ display: "flex", paddingLeft: "100px" }}>
            <img src={sunset} width="40px" height="40px" /> <p style={{ fontSize: '19px', paddingLeft: '16px', marginTop: "1px" }}>----</p>
          </div>

        </div>




      </div>
    </div>

  )
}

export default Leftbx
