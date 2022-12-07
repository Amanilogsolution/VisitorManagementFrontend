import axios from 'axios';

export const GeneratorEntry = async (entry_by,warehouse,DATE,StartTime,StartReading,EndTime,EndReading) => {
    const url = `https://vmbackend.awlinternational.com/api/generatorentry`
    return axios.post(url, {entry_by,warehouse,DATE,StartTime,StartReading,EndTime,EndReading}).then(response => response.data).catch(error => console.log(error));
}

export const DieselEntry = async (entry_by,warehouse,DATE,invoice_no,party_name,qtyin_liter,rate_per_liter,person_name,out_time,in_time,TotalAmount) => {
    const url = `https://vmbackend.awlinternational.com/api/dieselentry`
    return axios.post(url, {entry_by,warehouse,DATE,invoice_no,party_name,qtyin_liter,rate_per_liter,person_name,out_time,in_time,TotalAmount}).then(response => response.data).catch(error => console.log(error));
}

export const VisiterEntry = async (entry_by,wharehouse,visitor_name,company_name,email_id,no_of_visitor,meeting_with,contact_no,remark) => {
    const url = `https://vmbackend.awlinternational.com/api/visiterentry`
    return axios.post(url, {entry_by,wharehouse,visitor_name,company_name,email_id,no_of_visitor,meeting_with,contact_no,remark}).then(response => response.data).catch(error => console.log(error));
}

export const Allemployee = async (Warehouse) =>{
    const url = `https://vmbackend.awlinternational.com/api/allemployee`
    return axios.post(url,{Warehouse}).then(response => response.data).catch(error => console.log(error));
}

export const UserLogin = async (uid_id,uid_pass) => {
    const url = `https://vmbackend.awlinternational.com/api/loginuser`
    return axios.post(url, {uid_id,uid_pass}).then(response => response.data).catch(error => console.log(error));
}

export const Warehousecheckopen = async (Warehouse) =>{
    const url = `https://vmbackend.awlinternational.com/api/warehousecheckopen`
    return axios.post(url,{Warehouse}).then(response => response.data).catch(error => console.log(error));
}

export const Warehouseopen = async (entry_by,wharehouse,date,opening_time,opened_by,awl_person_open,warehouse_id,uploadimage) =>{
    const url = `https://vmbackend.awlinternational.com/api/warehouseopen`
    return axios.post(url,{entry_by,wharehouse,date,opening_time,opened_by,awl_person_open,warehouse_id,uploadimage}).then(response => response.data).catch(error => console.log(error));
}

export const Warehouseclose = async (date,closing_time,closed_by,awl_person_close,wharehouse,uploadimage) =>{
    const url = `https://vmbackend.awlinternational.com/api/warehouseclose`
    return axios.post(url,{date,closing_time,closed_by,awl_person_close,wharehouse,uploadimage}).then(response => response.data).catch(error => console.log(error));
}

export const warehouseLastclose = async (Warehouse) =>{
    const url = `https://vmbackend.awlinternational.com/api/warehouseLastclose`
    return axios.post(url,{Warehouse}).then(response => response.data).catch(error => console.log(error));
}

export const EmployeeAlerts = async (Warehouse,UserID) =>{
    console.log(Warehouse,UserID)
    const url = `https://vmbackend.awlinternational.com/api/employeeDetails`
    return axios.post(url,{Warehouse,UserID}).then(response => response.data).catch(error => console.log(error));
}

export const VehicleEntry = async (docNo,vehNo,vehType,driverName,contactNo,remarks,wh,cust,entry_by,tpt_mode) =>{
    const url = `https://vmbackend.awlinternational.com/api/vehicleentry`
    return axios.post(url,{docNo,vehNo,vehType,driverName,contactNo,remarks,wh,cust,entry_by,tpt_mode}).then(response => response.data).catch(error => console.log(error));
}

export const UploadData = async (data) => {
    const url = `https://vmbackend.awlinternational.com/api/FileUpload`
    return axios.post(url, data).then(res => res.data).catch(err => console.log(err))
}

export const DashboardWarehouseStatus = async (date,warehouseid) => {
    const url = `http://localhost:8004/api/dashboardwarehousestatus`
    return axios.post(url, {date,warehouseid}).then(res => res.data).catch(err => console.log(err))
}

export const DashboardVisitorStatus = async (startdate,enddate,warehouseid) => {
    const url = `http://localhost:8004/api/dashboardvisitorstatus`
    return axios.post(url, {startdate,enddate,warehouseid}).then(res => res.data).catch(err => console.log(err))
}

export const DashboardVehicleInStatus = async (startdate,enddate,warehouseid) => {
    const url = `http://localhost:8004/api/dashboardvehicleinstatus`
    return axios.post(url, {startdate,enddate,warehouseid}).then(res => res.data).catch(err => console.log(err))
}

export const DashboardVehicleOutStatus = async (startdate,enddate,warehouseid) => {
    const url = `http://localhost:8004/api/dashboardvehicleoutstatus`
    return axios.post(url, {startdate,enddate,warehouseid}).then(res => res.data).catch(err => console.log(err))
}

export const DashboardDieselLitreMonth = async (startdate,enddate,warehouseid) => {
    const url = `http://localhost:8004/api/dashboarddiesellitremonth`
    return axios.post(url, {startdate,enddate,warehouseid}).then(res => res.data).catch(err => console.log(err))
}

export const DashboardDieselAmountMonth = async (startdate,enddate,warehouseid) => {
    const url = `http://localhost:8004/api/dashboarddieselamountmonth`
    return axios.post(url, {startdate,enddate,warehouseid}).then(res => res.data).catch(err => console.log(err))
}

export const DashboardGeneratorInstanceMonth = async (startdate,enddate,warehouseid) => {
    const url = `http://localhost:8004/api/dashboardgeneratorinstancemonth`
    return axios.post(url, {startdate,enddate,warehouseid}).then(res => res.data).catch(err => console.log(err))
}

export const DashboardGeneratorTotalUnitMonth = async (startdate,enddate,warehouseid) => {
    const url = `http://localhost:8004/api/dashboardgeneratortotalunitmonth`
    return axios.post(url, {startdate,enddate,warehouseid}).then(res => res.data).catch(err => console.log(err))
}

// Guards //

export const insertguard = async (location,Guardname,Guardid,Phoneno,vendorid,vendorname,Guardjoiningdate,LocationName,DateOfBirth,Shift) => {
    console.log('API',location,Guardname,Guardid,Phoneno,vendorid,vendorname,Guardjoiningdate,LocationName)
    const url = `https://vendorportalbackend.awlworldwide.com/api/insertguard`
    return axios.post(url,{location,Guardname,Guardid,Phoneno,vendorid,vendorname,Guardjoiningdate,LocationName,DateOfBirth,Shift}).then(response => response.data).catch(error => console.log(error));
}

export const TotalGuard = async () => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/totalguard`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const DeactiveGuards = async (sno,status) => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/deactiveguards`
    return axios.post(url,{sno,status}).then(response => response.data).catch(error => console.log(error));
}

export const InsertGuardLogin = async (Location,Guardname,date,time,status,guardid,userid,locationname) => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/insertGuardLogin`
    return axios.post(url,{Location,Guardname,date,time,status,guardid,userid,locationname}).then(response => response.data).catch(error => console.log(error));
}

export const GetguardmasterLogout = async () => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/getguardmasterlogout`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const GetguardmasterLogin = async () => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/getguardmasterlogin`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const UpdateGuard = async (Location,Guardname,date,time,status,guardid,userid) => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/updateguard`
    return axios.post(url,{Location,Guardname,date,time,status,guardid,userid}).then(response => response.data).catch(error => console.log(error));
}
export const ActiveLocation = async () => {
    const url = `https://vendorportalbackend.awlworldwide.com/api/activelocation`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}







