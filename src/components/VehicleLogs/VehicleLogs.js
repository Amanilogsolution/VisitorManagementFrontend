import React, { useEffect, useState } from 'react'
import Home from '../Home';
import VehicleEntry from './VehicleEntry';
import VehicleReturn from './VehicleReturn';
import { DedicatedVehicle,DedicatedVehicleStatus } from '../../api/index';
import { MdLibraryBooks } from 'react-icons/md';



function VehicleLogs() {
    const [Vehicle, setVehicle] = useState([]);
    const [data,setData]=useState({
        status:'',
        route:''
    })
    // const [route,setRoute]=useState('')


    useEffect(() => {
        async function fetchMyAPI() {
            const result = await DedicatedVehicle(localStorage.getItem('warehouseId'))
            console.log(result)
            setVehicle(result)
          
        }
        fetchMyAPI()
    }, [])

    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = `${data.route}`
         alert(data.route)
    }

    const handleChange = async(e) => {
        e.preventDefault()
        console.log(e.target.value)
        const result = await DedicatedVehicleStatus(localStorage.getItem('warehouseId'),e.target.value)
        console.log(result)
        result==''?setData({...data,status:'In',route:'vehicleentry'}):setData({...data,status:'Out',route:'vehiclereturn'})

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
                                    <select className="form-control" id='select-vehicle' onChange={handleChange} style={{ marginLeft: "-10px", width: "103%", marginTop: "-6px" }}>
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
                                    <input type="text" className="form-control" id="Closeby" defaultValue={data.status} />

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
