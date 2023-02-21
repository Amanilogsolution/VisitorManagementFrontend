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

    const handleClick = (e) =>{
        e.preventDefault();
        warehouse ? alert("hlo") : alert("bye")
    }

    return (
        <>
            <div className="warehousecontainer position-relative">
                <Home />
                <div className="col-md-6" style={{ margin: "200px auto 0px"}}>
                <div className="card">
                            <header className="card-header">
                                <h4 className="card-title mt-2 text-light">Vehicle Log Entry<MdLibraryBooks style={{margin:"0 0 5px 4px"}}/></h4>
                            </header>
                            <article className="card-body">
                                <form>
                                    <div className="form-group" style={{marginTop:"-10px"}}>
                                        <h2>Select Vehicle</h2>
                                        <input type="text" className="form-control" placeholder="" id="party_name" />
                                    </div> 
                                    <div className="form-group" style={{marginTop:"-10px"}}>
                                        <h3>Status</h3>
                                        <input type="text" className="form-control" placeholder="" id="party_name" />
                                    </div> 
                                    <div className="form-group">
                                        <button type="submit" onClick={handleClick} id="submitBtn" className="btn btn-primary mr-2">Update</button>
                                        <input type="reset" style={{background:"gray",marginTop:"2px"}} className="btn btn-secondary mt-1 " value='Reset' />                                                                           </div> {/* form-group// */}
                                </form>
                            </article> {/* card-body end .// */}
                        </div>
                        </div>
             
            </div>
        </>
    )
}

export default VehicleLogs
