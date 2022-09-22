import React, { useEffect, useState } from 'react';
import Home from '../Home';
import { VisiterEntry, Allemployee,Sms,EmployeeAlerts } from '../../api/index'

function Visitor() {
    const [selectdata, setSelectdata] = useState([]);
    const [mandatoryfield, setMandatoryfield] = useState(false);
  const [number,setNumber] = useState()
    const [meeting_with,setMeetingWith] = useState('');
    
    
    useEffect(() => {
        async function fetchMyAPI() {
            const result = await Allemployee(localStorage.getItem("warehouseId"));
       
            setSelectdata(result)
        }
        fetchMyAPI()
    }, [])

    const handleClick = async (e) => {
        document.getElementById('submitBtn').disabled = true

        e.preventDefault();
        const visitor_name = document.getElementById('visitor_name').value;
        const company_name = document.getElementById('company_name').value;
        const email_id = document.getElementById('email_id').value;
        const no_of_visitor = document.getElementById('no_of_visitor').value;
        const contact_no = document.getElementById('contact_no').value;
        const remark = document.getElementById('remark').value;

        // const sms = await Sms(number,visitor_name,company_name)

        if (!visitor_name || !company_name || !no_of_visitor  || !contact_no) {
            setMandatoryfield(true)
        }
        else {
            const result = await VisiterEntry(localStorage.getItem('userName'), localStorage.getItem('warehouseId'), visitor_name, company_name, email_id, no_of_visitor, meeting_with, contact_no, remark)
        

            if (result) {

                alert("Entry Done Successfully")
                window.location.href = '/Dashboard';
            }
       
        }   

    }

    const handleChange = async(e) => {
        const name =e.target.value;
        setMeetingWith(name)
        const details = await EmployeeAlerts(localStorage.getItem('warehouseId'),name)
        const number = details.PERSMOBILE
      
        if(number.length === 10){
            setNumber(number)
        }else{
            const str = number.toString()
          const concatinate = str.slice(str.length-10)
          setNumber(concatinate)
  
        }
    }

    return (
         <>
            <div className="generatorlogcontainer">
                <Home />
                <div>
                    <div className="col-md-6 mt-5 mb-5" style={{ margin: "auto" }}>
                        <div className="card" >
                            <header className="card-header">
                                <h4 className="card-title mt-2">Visitor Entry</h4>
                            </header>
                            <article className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Visitor Name </label>
                                        <input type="Text" className="form-control" id='visitor_name' />
                                    </div>
                                    <div className="form-group">
                                        <label>Company Name </label>
                                        <input type="text" className="form-control" id="company_name" />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>No of Visitors</label>
                                            <input type="number" className="form-control" id='no_of_visitor' />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Contact No</label>
                                            <input type="tel" className="form-control" id='contact_no'
                                             maxLength={10}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email Id:</label>
                                        <input className="form-control" type="email" id='email_id' />
                                    </div>
                                    <div className="form-group">
                                        <label>To Meet</label>
                                        <select className="form-control" id='meeting_with' onChange={handleChange}>
                                            <option defaultValue hidden>Choose ...</option>
                                        {selectdata.map((ele)=>(
                                            <option key={ele.UserID} value={ele.UserID}>{ele.Name}</option>
                                            ))}
                                        </select>
                                        <br/>
                                    </div>
                                    <div className="form-group">
                                        <label>Remarks</label>
                                        <textarea className="form-control" type="text" id='remark' />
                                    </div>
                                    {
                                        mandatoryfield
                                            ? <p style={{ color: "red" }}>Please! fill the field...</p> : null
                                    }
                                    <div className="form-group">
                                        <button type="submit" id="submitBtn" onClick={handleClick} className="btn btn-primary mr-4">Submit</button>
                                        <button type="submit" className="btn btn-secondary ">Reset</button>
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Visitor
