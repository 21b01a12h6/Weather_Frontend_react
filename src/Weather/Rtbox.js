import React from 'react'
import './Mainpg.css'
import sunrise from './sunrise.jpg'
import sunset from './sunset.jpg'
const Rtbox = () => {
  return (<div style={{ marginRight: '50px' }}>
    <div >

      <div className='rtbx'>
        <center style={{ marginTop: '5px' }}>
          <b className='word'>Current Weather</b>
        </center>
        <i class="map marker alternate icon" style={{ fontSize: "25px", paddingTop: "5px" }}> </i>
        <b>---</b>

        <div>
          <div style={{ display: 'flex' }}>
            <img src={sunrise} className='sunrise2' />
            <div style={{ display: 'flex',flexDirection:'column', paddingLeft: '20px',paddingTop:"20px"}}>
              <p style={{fontSize: '25px',lineHeight:'0.5px'  }}>Sunrise</p>
                <p style={{ fontSize: '19px'}}>----</p>
            </div>
            <div style={{marginLeft:"90px", display: 'flex' }}>
            <img src={sunset} width='70px'height='70px'/>
           < div style={{ display: 'flex',flexDirection:'column', paddingLeft: '20px',paddingTop:"20px"}}>
              <p style={{fontSize: '25px',lineHeight:'0.5px'  }}>Sunrise</p>
                <p style={{ fontSize: '19px'}}>----</p>
            </div>
            </div>
          </div>
        </div>
        
        <div className='sbox'>
          <center>
          <p style={{paddingTop:'8px',paddingLeft:'15px'}}>WindSpeed: -- km/h</p>
          </center>
        </div>

        <div className='sbox1'>
          <center>
          <p  style={{paddingTop:'8px',paddingLeft:'15px'}}>Wind Degree: ---</p>
          </center>
        </div>

        <div style={{ display: 'inline-flex' }}>
          <div className='sbox2'>
            <center><p  style={{paddingTop:'8px',paddingLeft:'15px'}}>Wind Direction:--</p></center>


          </div>
          <div className='sbox3'>
            <center>
            <p  style={{paddingTop:'8px',paddingLeft:'15px'}}>Humidity:--</p>
            </center>
          </div>
        </div>
        <div style={{ display: 'inline-flex' }}>
          <div className='sbox4'>
            <center>
            <p  style={{paddingTop:'8px',paddingLeft:'15px'}}>Latitude:----</p>
            </center>
          </div>
          <div className='sbox5'>
            <center>
            <p  style={{paddingTop:'8px',paddingLeft:'15px'}}>Longitude:----</p>
            </center>


          </div>
        </div>
        <div className='sbox6'>
          <center>
          <p  style={{paddingTop:'8px',paddingLeft:'15px'}}>Local Time:-----------</p>
          </center>
        </div>

      </div>
    </div>
  </div>)
}

export default Rtbox
