import React, { useState } from 'react';
import Home from '../Home';
import {VehicleEntry} from  '../../api/index';

function Vehicle() {

    const [mandatoryfield, setMandatoryfield] = useState(false);
    const handleClick = async (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true
        const EntryType = document.getElementById('entry_type').value;
        const Document_no = document.getElementById('Document_no').value;
        const PartyName = document.getElementById('party_name').value;
        const Vehicle_no = document.getElementById('vehicle_no').value;
        const vehicle_type = document.getElementById('vehicle_type').value;
        const driver_name = document.getElementById('driver_name').value;
        const contact_no = document.getElementById('contact_no').value;
        const remark = document.getElementById('remark').value;
  
        if (!EntryType || !PartyName || !Vehicle_no  || !vehicle_type || !driver_name || !contact_no) {
            setMandatoryfield(true)
        }
        else {
            const result = await VehicleEntry(Document_no, Vehicle_no, vehicle_type, driver_name, contact_no, remark,localStorage.getItem('warehouseId'),PartyName,localStorage.getItem('userName'),EntryType)
            if (result) {
                alert("Entry Done Successfully")
                window.location.href = '/Dashboard';
            }
        }
    }
  return (
    <>
    <div className="generatorlogcontainer">
        <Home />
        <div>
            <div className="col-md-6 mt-5 mb-5" style={{ margin: "auto" }}>
                <div className="card" >
                    <header className="card-header">
                        <h4 className="card-title mt-2">Vehicle Entry</h4>
                    </header>
                    <article className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Entry Type </label>
                                <select className="form-control" id='entry_type'   >
                                    <option defaultValue hidden>Choose ...</option>
                                    <option value="IN">IN</option>      
                                    <option value="OUT">OUT</option>
                                </select>                          
                            </div>
                            <div className="form-group">
                                <label>Document Number </label>
                                <input type="text" className="form-control" id="Document_no" />
                            </div>
                            <div className="form-group">
                                <label>Party Name </label>
                                <input type="text" className="form-control" id="party_name" />
                            </div>
                            
                            <div className="form-row">
                               <div className="form-group col-md-6">
                                    <label>Vehicle Number </label>
                                    <input type="text" className="form-control" id='vehicle_no' />
                                </div>
                                
                                <div className="form-group col-md-6">
                                <label>Vehicle Type :</label>
                                <select className="form-control" id='vehicle_type' >
                                    <option defaultValue hidden>Choose ...</option>
                                    <option value="14 Ft">14 Ft</option>
                                    <option value="17 Ft">17 Ft</option>
                                    <option value="18/19 Ft">18/19 Ft</option>
                                    <option value="20 Ft">20 Ft</option>
                                    <option value="20 Ft CNTR">20 Ft CNTR</option>
                                    <option value="20 Ft Trailer">20 Ft Trailer</option>
                                    <option value="22 Ft">22 Ft</option>
                                    <option value="24 Ft">24 Ft</option>
                                    <option value="28 Ft">28 Ft</option>
                                    <option value="32 Ft">32 Ft</option>
                                    <option value="32 Ft MA">32 Ft MA</option>
                                    <option value="Ca40 Ft CNTRr">40 Ft CNTR</option>
                                    <option value="40 Ft HQ">40 Ft HQ</option>
                                    <option value="40 Ft Trailer">40 Ft Trailer</option>
                                    <option value="45 Ft CNTR">45 Ft CNTR</option>
                                    <option value="55 Ft">55 Ft</option>
                                    <option value="909">909</option>
                                    <option value="Biker">Biker</option>
                                    <option value="By Hand">By Hand</option>
                                    <option value="By Train">By Train</option>
                                    <option value="Champion">Champion</option>
                                    <option value="Courier">Courier</option>
                                    <option value="ECCO">ECCO</option>
                                    <option value="Mahindra Pickup">Mahindra Pickup</option>
                                    <option value="Minimum">Minimum</option>
                                    <option value="Omni">Omni</option>
                                    <option value="TATA 407">TATA 407</option>
                                    <option value="TATA 608">TATA 608</option>
                                    <option value="TATA ACE">TATA ACE</option>
                                    <option value="TAXI">TAXI</option>
                                </select>
                                <br/>
                            </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Driver Name  </label>
                                    <input type="text" className="form-control" id='driver_name' />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Contact No</label>
                                    <input type="tel" className="form-control" id='contact_no'
                                     maxLength={10}
                                    />

                                </div>
                            </div>
                         
                            <div className="form-group">
                                <label>Remarks</label>
                                <textarea className="form-control" type="text" id='remark' />
                            </div>
                            {
                                mandatoryfield
                                    ? <p style={{ color: "red" }}>Please! fill the field...</p> : null
                            }
                            <div className="form-group">
                                <button type="submit" id="submitBtn" onClick={handleClick} className="btn btn-primary mr-4">Submit</button>
                                <button type="submit" className="btn btn-secondary ">Reset</button>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default Vehicle
