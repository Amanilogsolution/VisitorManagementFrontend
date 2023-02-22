import React from 'react'
import Home from '../Home';
import { InsertDedicatedVEhicle } from '../../api/index';
import { FaTruck } from 'react-icons/fa';



function VehicleOut() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const outdate = document.getElementById('outdate').value;
    const touch_point = document.getElementById('touch_point').value;
    const start_time = document.getElementById('start_time').value;
    const start_reading = document.getElementById('start_reading').value;
    const remark = document.getElementById('remark').value;

    if (!outdate || !start_time || !start_reading || !remark) {
      alert('Please Enter the Mandatory Field')
    }
    else {
      let wh=localStorage.getItem('warehouseId');
      let VEH_NO= localStorage.getItem('vehicleNum')
      let StartEntryBy= localStorage.getItem('userId')
      const insert = await InsertDedicatedVEhicle(wh,VEH_NO,outdate,start_time,start_reading,StartEntryBy,remark,touch_point)
      if (insert === 'inserted') {
        alert('Data Inserted')
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
              <h4 className="card-title text-light">{localStorage.getItem('vehicleType')}<FaTruck className='mx-2' /></h4>
            </header>
            <article className="card-body">
              <form autoComplete='off'>
                <div className='row'>
                  <div className="form-group col-md-6">
                    <label htmlFor='outdate'> Date </label>
                    <input type="date" id="outdate" className="form-control" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor='touch_point'>Touch Point</label>
                    <input type="number" className="form-control" id='touch_point' />
                  </div>
                </div>
                <div className='row'>
                  <div className="form-group col-md-6">
                    <label htmlFor='start_time'>Start Time</label>
                    <input type="time" className="form-control" id='start_time' />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor='start_reading'>Start Reading</label>
                    <input type="text" className="form-control" id="start_reading" />
                  </div>

                </div>

                <div className="form-group" >
                  <label htmlFor='remark'>Remarks</label>
                  <textarea className="form-control" type="text" id='remark' rows='3' />
                </div>

                <div className="form-group">
                  <button type="submit" id="submitBtn" className="btn btn-primary mr-2" onClick={handleSubmit}>Submit</button>
                  <button type="reset" className="btn btn-secondary ">Reset</button>
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
