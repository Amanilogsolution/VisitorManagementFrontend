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
    console.log(uid_id,uid_pass)
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

export const UploadData = async (images) => {
    console.log(images)
    const url = `https://vmbackend.awlinternational.com/api/FileUpload`
    return axios.post(url, images).then(res => res.data).catch(err => console.log(err))
}

export const DashboardWarehouseStatus = async (date,warehouseid) => {
    const url = `https://vmbackend.awlinternational.com/api/dashboardwarehousestatus`
    return axios.post(url, {date,warehouseid}).then(res => res.data).catch(err => console.log(err))
}

export const DashboardVisitorStatus = async (startdate,enddate,warehouseid) => {
    const url = `https://vmbackend.awlinternational.com/api/dashboardvisitorstatus`
    return axios.post(url, {startdate,enddate,warehouseid}).then(res => res.data).catch(err => console.log(err))
}

export const DashboardVehicleInStatus = async (startdate,enddate,warehouseid) => {
    const url = `https://vmbackend.awlinternational.com/api/dashboardvehicleinstatus`
    return axios.post(url, {startdate,enddate,warehouseid}).then(res => res.data).catch(err => console.log(err))
}

export const DashboardVehicleOutStatus = async (startdate,enddate,warehouseid) => {
    const url = `https://vmbackend.awlinternational.com/api/dashboardvehicleoutstatus`
    return axios.post(url, {startdate,enddate,warehouseid}).then(res => res.data).catch(err => console.log(err))
}

export const DashboardDieselLitreMonth = async (startdate,enddate,warehouseid) => {
    const url = `https://vmbackend.awlinternational.com/api/dashboarddiesellitremonth`
    return axios.post(url, {startdate,enddate,warehouseid}).then(res => res.data).catch(err => console.log(err))
}

export const DashboardDieselAmountMonth = async (startdate,enddate,warehouseid) => {
    const url = `https://vmbackend.awlinternational.com/api/dashboarddieselamountmonth`
    return axios.post(url, {startdate,enddate,warehouseid}).then(res => res.data).catch(err => console.log(err))
}

export const DashboardGeneratorInstanceMonth = async (startdate,enddate,warehouseid) => {
    const url = `https://vmbackend.awlinternational.com/api/dashboardgeneratorinstancemonth`
    return axios.post(url, {startdate,enddate,warehouseid}).then(res => res.data).catch(err => console.log(err))
}

export const DashboardGeneratorTotalUnitMonth = async (startdate,enddate,warehouseid) => {
    const url = `https://vmbackend.awlinternational.com/api/dashboardgeneratortotalunitmonth`
    return axios.post(url, {startdate,enddate,warehouseid}).then(res => res.data).catch(err => console.log(err))
}

// Guards //

export const insertguard = async (location,Guardname,Guardid,Phoneno,vendorid,vendorname,Guardjoiningdate,LocationName,DateOfBirth,Shift) => {
    console.log('API',location,Guardname,Guardid,Phoneno,vendorid,vendorname,Guardjoiningdate,LocationName)
    const url = `https://vmbackend.awlinternational.com/api/insertguard`
    return axios.post(url,{location,Guardname,Guardid,Phoneno,vendorid,vendorname,Guardjoiningdate,LocationName,DateOfBirth,Shift}).then(response => response.data).catch(error => console.log(error));
}

export const TotalGuard = async () => {
    const url = `https://vmbackend.awlinternational.com/api/totalguard`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const SelectedGuards = async (sno) => {
    const url = `https://vmbackend.awlinternational.com/api/SelectedGuards`
    return axios.post(url,{sno}).then(response => response.data).catch(error => console.log(error));
}

export const DeactiveGuards = async (sno,status) => {
    const url = `https://vmbackend.awlinternational.com/api/deactiveguards`
    return axios.post(url,{sno,status}).then(response => response.data).catch(error => console.log(error));
}

export const InsertGuardLogin = async (Location,Guardname,date,time,status,guardid,userid,locationname) => {
    const url = `https://vmbackend.awlinternational.com/api/insertGuardLogin`
    return axios.post(url,{Location,Guardname,date,time,status,guardid,userid,locationname}).then(response => response.data).catch(error => console.log(error));
}

export const GetguardmasterLogout = async (warehouse_id) => {
    const url = `https://vmbackend.awlinternational.com/api/getguardmasterlogout`
    return axios.post(url,{warehouse_id}).then(response => response.data).catch(error => console.log(error));
}

export const GetguardmasterLogin = async (warehouse_id) => {
    const url = `https://vmbackend.awlinternational.com/api/getguardmasterlogin`
    return axios.post(url,{warehouse_id}).then(response => response.data).catch(error => console.log(error));
}

export const UpdateGuard = async (Location,Guardname,date,time,status,guardid,userid) => {
    console.log(Location,Guardname,date,time,status,guardid,userid)
    const url = `https://vmbackend.awlinternational.com/api/updateguard`
    return axios.post(url,{Location,Guardname,date,time,status,guardid,userid}).then(response => response.data).catch(error => console.log(error));
}
export const ActiveLocation = async () => {
    const url = `https://vmbackend.awlinternational.com/api/activelocation`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const updateGuardDetails = async (sno,Guardname,Phoneno,Guardjoiningdate,DateOfBirth,Shift) => {
    const url = `https://vmbackend.awlinternational.com/api/updateGuardDetails`
    return axios.post(url,{sno,Guardname,Phoneno,Guardjoiningdate,DateOfBirth,Shift}).then(response => response.data).catch(error => console.log(error));
}

// Location

export const TotalVendor = async () => {
    const url = `https://vmbackend.awlinternational.com/api/TotalVendor`
    return axios.post(url).then(response => response.data).catch(error => console.log(error));
}

export const TotalGuardsHistory = async (startDate,endDate) => {
    const url = `https://vmbackend.awlinternational.com/api/totalguardshistory`
    return axios.post(url,{startDate,endDate}).then(response => response.data).catch(error => console.log(error));
}

export const DedicatedVehicle = async (wh) => {
    const url = `http://192.168.146.136:8004/api/dedicatedvehicle`
    return axios.post(url,{wh}).then(response => response.data).catch(error => console.log(error));
}

export const DedicatedVehicleStatus = async (wh) => {
    const url = `http://localhost:8004/api/dedicatedvehiclestatus`
    return axios.post(url,{wh}).then(response => response.data).catch(error => console.log(error));
}









