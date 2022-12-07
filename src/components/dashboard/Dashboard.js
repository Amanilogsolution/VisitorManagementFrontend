import './dashboard.scss';
import Home from '../Home';
import {DashboardWarehouseStatus} from '../../api/index'
import React,{useEffect,useState} from 'react'
import Footer from '../footer/Footer';


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
            </div>
            
         {/* <Footer/> */}
        </>
    )
}

export default Dashboard;