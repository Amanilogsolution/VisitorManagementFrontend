import React, { useEffect, useState } from 'react'
import Home from '../Home';
import { DedicatedVehicle } from '../../api/index';
import { MdLibraryBooks } from 'react-icons/md';



function VehicleLogs() {
    const [Vehicle, setVehicle] = useState([]);
 


    useEffect(() => {
        async function fetchMyAPI() {
            const result = await DedicatedVehicle(localStorage.getItem('warehouseId'))
            setVehicle(result)
        }
        fetchMyAPI()
    }, [])



    return (
        <>
            <div className="warehousecontainer ">
                <Home />
                <div className='position-absolute w-50' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                    <div className="card ">
                        <header className="card-header">
                            <h4 className="card-title mt-2 text-light">{localStorage.getItem('vehicleType')}<MdLibraryBooks className='mx-2' /></h4>
                        </header>
                        {/* <article className="card-body">
                                <form>
                                    <div className='row'>
                                    <div className="form-group col-md-6">
                                        <label>Entry Date </label>
                                        <input type="date" id="entrydate" className="form-control" style={{width:"103%"}}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Visitor Name </label>
                                        <input type="Text" className="form-control" id='visitor_name' style={{width:"103%"}}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Company Name</label>
                                        <input type="text" className="form-control" id="company_name" style={{width:"103%"}}/>
                                    </div>
                                    <div className="form-group col-md-6" id='select'>
                                        <label>Purpose</label>
                                        <select className="form-control" id='meeting_with' style={{marginLeft:"-10px",width:"103%",marginTop:"-6px"}}>
                                            <option defaultValue hidden>Choose ...</option>
                                            <option value='Vendor' >Vendor</option>
                                            <option value='Customer' >Customer</option>
                                            <option value='Interview' >Interview</option>
                                            <option value='Delivery' >Delivery</option>
                                            <option value='Other' >Other</option>
                                        </select>
                                        <br/>
                                    </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>No of Visitors</label>
                                            <input type="number" className="form-control" id='no_of_visitor' />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Contact No</label>
                                            <input type="tel" className="form-control" id='contact_no'
                                             maxLength={10}/>
                                        </div>
                                    </div>

                                <div className='row'>
                                    <div className="form-group col-md-6">
                                        <label>Email Id:</label>
                                        <input className="form-control" type="email" id='email_id'style={{width:"103%"}} />
                                    </div>
                               
                                    <div className="form-group col-md-6" id='select'>
                                        <label>To Meet</label>
                                        <select className="form-control" id='meeting_with'  style={{marginLeft:"-10px",width:"103%",marginTop:"-6px"}}>
                                            <option defaultValue hidden>Choose ...</option>
                                        {selectdata.map((ele)=>(
                                            <option key={ele.UserID} value={ele.UserID}>{ele.Name}</option>
                                            ))}
                                        </select>
                                        <br/>
                                </div>
                                    
                                    </div>
                                    <div className="form-group"style={{marginTop:"-30px"}}>
                                        <label>Remarks</label>
                                        <textarea className="form-control" type="text" id='remark' />
                                    </div>
                                    {
                                        mandatoryfield
                                            ? <p style={{ color: "red" }}>Please! fill the field...</p> : null
                                    }
                                    <div className="form-group">
                                        <button type="submit" id="submitBtn" onClick={handleClick} className="btn btn-primary mr-2">Submit</button>
                                        <button type="submit" className="btn btn-secondary ">Reset</button>
                                    </div>
                                </form>
                            </article> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default VehicleLogs
