import React, { Component } from 'react'
import Leftbx from './Leftbx'
import './Mainpg.css'
import Rtbox from './Rtbox'
import sunny from './sunny.gif'


const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const s3 = {
  borderRadius: "0px 20px 20px 0px",
}
const imgboxes = [
  {
    id: "1",
    time: "12:00 AM",
    period: "AFTERNOON",
    x: <b>--</b>,
    color: "black",
  },
  {
    id: "2",
    time: "04:00 AM",
    period: "MORNING",
    x: <b>--</b>,
  },
  {
    id: "3",
    time: "08:00 AM",
    period: "MORNING",
    x: <b>--</b>,
  },
  {
    id: "4",
    time: "12:00 PM",
    period: "MIDDAY",
    x: <b>--</b>,
  },
  {
    id: "5",
    time: "04:00 AM",
    period: "NOON",
    x: <b>--</b>,
  },
  {
    id: "6",
    time: "08:00 PM",
    period: "EVENING",
    x: <b>--</b>,
  },
  {
    id: "7",
    time: "11:00 PM",
    period: "NIGHT",
    x: <b>--</b>,
  },
]
const styles = [
  { backgroundColor: 'darkslategrey', color: 'white' },
  { backgroundColor: '#1a2238', color: 'white', border: "#1a2238" },
  { backgroundColor: '#425664', color: 'white', border: '#425664' },
  { backgroundColor: '#fab162', color: 'black', border: '#fab162' },
  { backgroundColor: '#fb9039', color: 'white', border: '#fb9039' },
  { backgroundColor: '#fab162', color: 'white', border: '#fab162' },
  { backgroundColor: '#425664', color: 'white', border: '#425664' },
  { backgroundColor: '#566e7f', color: 'white', border: '#566e7f' },

];

const headings = ["Location :", "Region :", "Country :", "Time Zone:"]
export default class Mainpg extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dt: new Date(),
    };
  }
  componentDidMount() {
    setInterval(() => { this.setState({ dt: new Date() }) })
  }

  render() {
    return (<>
      <div>
        <div class="split left">
          <h1 className='name'>{this.state.dt.toLocaleTimeString()}</h1>
          <b className='dt'>{weekday[this.state.dt.getDay()]} , {month[this.state.dt.getMonth()]} {this.state.dt.getDate()} , {this.state.dt.getFullYear()}</b>
          <br></br>

          {
            imgboxes.map(
              (item) => {
                return (<>
                  <div style={{ display: "inline-flex", paddingLeft: "30px" }}>
                    <div className='imgbox' style={styles[item.id]}>
                      <center>
                        <p key={item.id}>{item.time}</p>
                        <p>{item.period}</p>
                        <p>{item.x}</p>
                      </center>
                    </div>

                  </div>
                </>)
              }
            )
          }
          <div style={{ display: 'inline-flex' }}>
            <div className='lbx'>
              <Leftbx /><hr></hr>
              <Leftbx /><hr></hr>
              <Leftbx /><hr></hr>
              <Leftbx /><br></br>
            </div>

            <div className='sty'>
              <Rtbox />
            </div>
          </div>

        </div>
        <div class="split right">

          <i class="map marker alternate icon" style={{ position: "relative", top: "0px", left: '33px', fontSize: "20px" }}></i>
          <input style={{ borderRadius: "80px 0px 0px 80px", backgroundColor: 'white', paddingLeft: "33px", width: "200px", height: "40px", border: "0px " }} type="text" placeholder="Search your city" />
          <div class="ui button" style={s3}><i class="search link icon" style={{ color: 'black', fontSize: "20px", marginRight: '2px' }}></i></div>

          <div className='imafield'>

            <i class="map marker alternate icon" style={{ fontSize: "25px", paddingTop: "5px" }}> </i>  -----
            <img src={sunny} alt='none' className='giff'></img>
            <hr className='hr'></hr>
            <br></br>
            <br></br>
            <center className='dash'>
              --
            </center>
          </div>
          <div className='imgdwn'>
            {
              headings.map(item => {
                return (
                  <b key={"index"} className="let">  {item} ----- <br></br> </b>
                )
              })
            }

          </div>

        </div>
      </div>


    </>)
  }
}

