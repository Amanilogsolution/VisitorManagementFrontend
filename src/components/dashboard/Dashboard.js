import './dashboard.scss';
import Home from '../Home';
import {DashboardWarehouseStatus} from '../../api/index'
import React,{useEffect,useState} from 'react'


const Dashboard = () => {
    const [warehouseStatus,setWarehouseStatus] = useState() 

    useEffect( async() =>{
        var myDate = new Date();
        var day = myDate.getDate();
        var month = myDate.getMonth() + 1;
        var year = myDate.getFullYear();
        if (month < 10) month = "0" + month;
        if (day < 10) day = "0" + day;
        var startDate = year + "-" + month + "-" + day;

        const warehouselogs = await DashboardWarehouseStatus(startDate,localStorage.getItem('warehouseId'))
        if(warehouselogs.msg_flag == "open"){
            setWarehouseStatus('Warehouse Open at ' + warehouselogs.openingat+'AM')

        }else{
            setWarehouseStatus('Warehouse Close At'  + warehouselogs.closegat+'PM')


        }
        console.log(warehouselogs)

    },[] )
    return (
        <>
            <div className="dashboardcont">

                <Home />
                <h1>Welcome to AWL India</h1>

                <div class="row ml-5 mt-5">
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body d-flex justify-content-center">
                                <h5 class="card-title">{warehouseStatus}</h5> &nbsp;
                                <div class="dot" style={{height:"25px",width:"25px",backgroundColor:"light-green",borderRadius:"50%"}}></div>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard;