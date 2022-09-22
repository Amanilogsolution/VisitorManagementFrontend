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
    console.log(docNo,vehNo,vehType,driverName,contactNo,remarks,wh,cust,entry_by,tpt_mode)
    const url = `https://vmbackend.awlinternational.com/api/vehicleentry`
    return axios.post(url,{docNo,vehNo,vehType,driverName,contactNo,remarks,wh,cust,entry_by,tpt_mode}).then(response => response.data).catch(error => console.log(error));
}

export const UploadData = async (data) => {
    const url = `https://vmbackend.awlinternational.com/api/FileUpload`
    return axios.post(url, data).then(res => res.data).catch(err => console.log(err))
}


// export const Sms = async (number,visitor_name,company_name) => {
//     console.log('ApI',number,visitor_name,company_name)
//     const text =  `${visitor_name} from ${company_name} Came to Meet you`;
//     const url = `http://192.168.146.19:3000/91${number}/sendText/`
//     return axios.post(url, {text}).then(response => response.data).catch(error => console.log(error));
// }