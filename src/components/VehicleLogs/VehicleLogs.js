import React, { useEffect, useState } from 'react'
import Home from '../Home';
import VehicleEntry from './VehicleEntry';
import VehicleReturn from './VehicleReturn';
// import { Warehousecheckopen } from '../../api/index';


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

    return (
        <>
            <div className="warehousecontainer">
                <Home />
                {
                    warehouse ? <VehicleReturn date={date} /> : <VehicleEntry />
                }
            </div>
        </>
    )
}

export default VehicleLogs
