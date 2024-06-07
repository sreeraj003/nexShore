
import { useCallback, useState } from 'react';
import axios from "axios"
import './App.css'

function App() {
  const [from, setFrom] = useState()
  const [to, setTo] = useState()
  const [data, setData] = useState("")
  const handleClick = useCallback(async (e) => {
    e.preventDefault()
    console.log(from);
    await axios.get(import.meta.env.VITE_API + `checkFlight/?from=${from}&& to=${to}`).then(res => setData(res.data))
  }, [from, to])

  const backgroundStyle = {
    backgroundImage: 'url(https://blog.aci.aero/wp-content/uploads/2019/03/shutterstock_745544935.jpg)',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: '#fff',
    padding: '20px',
    outerWidth: '100%'
  };

  const formStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: '20px',
    borderRadius: '10px'
  };
  console.log(data);
  return (


    <div style={backgroundStyle}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="https://static.vecteezy.com/system/resources/previews/000/620/372/original/aircraft-airplane-airline-logo-label-journey-air-travel-airliner-symbol-vector-illustration.jpg" alt="Logo" className="logo" />
          Airline Details
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <h1 className="text-center mt-5">Know your Travelling details</h1>
        <form id="distanceForm" className="mt-4" style={formStyle}>
          <div className="form-group">
            <label htmlFor="fromAirport">From Airport</label>
            <input type="text" value={from} onChange={(value) => setFrom(value.target.value)} className="form-control" id="fromAirport" placeholder="Enter Departure Airport" required />
          </div>
          <div className="form-group">
            <label htmlFor="toAirport">To Airport</label>
            <input type="text" value={to} onChange={e => setTo(e.target.value)} className="form-control" id="toAirport" placeholder="Enter Destination Airport" required />
          </div>
          <button onClick={(e) => handleClick(e)} className=" btn btn-primary">Fetch</button>
        </form>
        {
          data ? data.map((el, ind) => (
            < div className='dataCard' key={ind}>
              <div className="row">
                {el.airLine[0].name} <br />
                {el.airline}
              </div>
            </div>
          ))
            : ""
        }
      </div>
    </div >
  );
}

export default App
