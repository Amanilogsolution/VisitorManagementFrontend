import React, { useEffect, useState } from 'react'
import Home from '../Home';
import VehicleEntry from './VehicleEntry';
import VehicleReturn from './VehicleReturn';
// import { Warehousecheckopen } from '../../api/index';
import { MdLibraryBooks } from 'react-icons/md';



function VehicleLogs() {
    const [warehouse, setWarehouse] = useState(false);
    // const [date ,setDate] =useState();

    useEffect(() => {
        async function fetchMyAPI() {
            // const result = await Warehousecheckopen(localStorage.getItem('warehouseId'))
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
                <div className=" position-absolute w-50" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%' }}>
                    <div className="card">
                        <header className="card-header">
                            <h4 className="card-title mt-2 text-light">Vehicle Log Entry<MdLibraryBooks className='mx-2' /></h4>
                        </header>
                        <article className="card-body">
                            <form>
                                <div className="form-group" >
                                    <label htmlFor='select_vehicle'>Select Vehicle</label>
                                    <select className="form-control" id='select_vehicle' >
                                        <option value='' hidden>Choose ...</option>
                                    </select>
                                </div>
                                <div className="form-group" >
                                    <label htmlFor='status'>Status</label>
                                    <select className="form-control" id='status' >
                                        <option value='' hidden>Choose ...</option>
                                    </select>
                                </div>
                                <div className="card-footer d-flex justify-content-end">
                                    <button type="submit" onClick={handleClick} id="submitBtn" className="btn btn-primary mr-2">Update</button>
                                    <button type="reset" className="btn btn-secondary" >Reset</button>
                                </div> 
                            </form>
                        </article>
                    </div>
                </div>

            </div>
        </>
    )
}

export default VehicleLogs
