import React, { useEffect, useState } from 'react'
import Home from '../Home';
import { DedicatedVehicleOutStatus, UpdateDedicatedVEhicle } from '../../api/index';
import { FaTruck } from 'react-icons/fa';



function VehicleOut() {
  const [Vehicledata, setVehicledata] = useState([]);



  useEffect(() => {
    async function fetchMyAPI() {
      const result = await DedicatedVehicleOutStatus(localStorage.getItem('warehouseId'), localStorage.getItem('vehicleNum'))
      setVehicledata(result)
      console.log(result)
    }
    fetchMyAPI()
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const outdate = document.getElementById('outdate').value;
    const return_time = document.getElementById('return_time').value;
    const return_reading = document.getElementById('return_reading').value;
    const remark = document.getElementById('remark').value;

    if (!outdate || !return_time || !return_reading || !remark) {
      alert('Please Enter the Mandatory Field')
    }
    else {
      let wh = localStorage.getItem('warehouseId');
      let VEH_NO = localStorage.getItem('vehicleNum')
      let Returnentryby = localStorage.getItem('userId')
      const update = await UpdateDedicatedVEhicle(wh, VEH_NO, return_time, return_reading, Returnentryby, remark)
      if (update === 'updated') {
        alert('Data Updated');
        window.location.href='./vehiclelogs'
      }
      else {
        alert('Server Not Response')
      }
    }
  }

  return (
    <>
      <div className="warehousecontainer ">
        <Home />
        <div className='position-absolute col-md-6' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
          <div className="card ">
            <header className="card-header">
              <h4 className="card-title  text-light">{localStorage.getItem('vehicleType')}<FaTruck className='mx-2' /></h4>
            </header>
            <article className="card-body">
              <form autoComplete='off'>
                <h3>Planned Touch Points:- {Vehicledata.TOUCH_POINT}</h3>
                <h3>Date:- {Vehicledata.date}</h3>
                <div className='row'>
                  <div className="form-group col">
                    <label htmlFor='outdate'> Date </label>
                    <input type="date" id="outdate" className="form-control" disabled defaultValue={Vehicledata.date} />
                  </div>
                  <div className="form-group col">
                    <label htmlFor='outdate'> Complete Touch Points </label>
                    <input type="number" id="outdate" className="form-control"/>
                  </div>

                </div>

                <div className='row'>
                  <div className="form-group col-md-6">
                    <label htmlFor='return_time'>Return Time</label>
                    <input type="time" className="form-control" id='return_time' />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor='return_reading'>Return Reading</label>
                    <input type="text" className="form-control" id="return_reading" defaultValue={Vehicledata.RETURN_READING} />
                  </div>

                </div>

                <div className="form-group" >
                  <label htmlFor='remark'>Remarks</label>
                  <textarea className="form-control" type="text" id='remark' rows='3' defaultValue={Vehicledata.REMARKS} />
                </div>

                <div className="form-group">
                  <button type="submit" id="submitBtn" className="btn btn-primary mr-2" onClick={handleSubmit}>Update</button>
                </div>
              </form>
            </article>
          </div>
        </div>

      </div>
    </>
  )
}

export default VehicleOut
