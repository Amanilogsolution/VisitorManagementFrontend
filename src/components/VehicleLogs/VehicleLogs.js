import React, { useEffect, useState } from 'react'
import Home from '../Home';
import VehicleEntry from './VehicleEntry';
import VehicleReturn from './VehicleReturn';
import { DedicatedVehicle,DedicatedVehicleStatus } from '../../api/index';
import { MdLibraryBooks } from 'react-icons/md';



function VehicleLogs() {
    const [warehouse, setWarehouse] = useState(false);
    const [Vehicle, setVehicle] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
            const result = await DedicatedVehicle(localStorage.getItem('warehouseId'))
            console.log(result)
            setVehicle(result)
            // if (result) {
            //     setWarehouse(true)
            //     console.log(result.date)
            //     setDate(result.date)
            // }
        }
        fetchMyAPI()
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        warehouse ? alert("hlo") : alert("bye")
    }

    return (
        <>
            <div className="warehousecontainer ">
                <Home />
                <div className='position-absolute w-50' style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                    <div className="card ">
                        <header className="card-header">
                            <h4 className="card-title mt-2 text-light">Vehicle Log Entry<MdLibraryBooks style={{ margin: "0 0 5px 4px" }} /></h4>
                        </header>
                        <article className="card-body">
                            <form>
                                <div className="form-group" style={{ marginTop: "-10px" }} id='select'>
                                    <h2>Select Vehicle</h2>
                                    <select className="form-control" id='select-vehicle' style={{ marginLeft: "-10px", width: "103%", marginTop: "-6px" }}>
                                        <option value='' hidden>Choose ...</option>
                                        {
                                            Vehicle.map((ele) => (
                                                <option key={ele.ID} value={ele.VehNo}>{ele.VehType}   Vehicle No :-{ele.VehNo}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-group" style={{ marginTop: "-10px" }} id='select'>
                                    <h3>Status</h3>
                                    <select className="form-control" id='meeting_with' style={{ marginLeft: "-10px", width: "103%", marginTop: "-6px" }}>
                                        <option value='' hidden>Choose ...</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button type="submit" onClick={handleClick} id="submitBtn" className="btn btn-primary mr-2">Update</button>
                                    <input type="reset" style={{ background: "gray", marginTop: "2px" }} className="btn btn-secondary mt-1 " value='Reset' />                                                                           </div> {/* form-group// */}
                            </form>
                        </article> {/* card-body end .// */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default VehicleLogs
