import './diesellog.scss'
import React, { useState } from 'react'
import Home from '../Home';
import { DieselEntry } from '../../api/index'
import { MdLibraryBooks } from 'react-icons/md';
import Footer from '../footer/Footer';

const DieselLog = () => {
    const [mandatoryfield, setMandatoryfield] = useState(false);

    const handleClick = async (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        const DATE = document.getElementById('date').value;
        const invoice_no = document.getElementById('invoice_no').value;
        const party_name = document.getElementById('party_name').value;
        const qtyin_liter = document.getElementById('qtyin_liter').value;
        const rate_per_liter = document.getElementById('rate_per_liter').value;
        const person_name = document.getElementById('person_name').value;
        const out_time = document.getElementById('out_time').value;
        const in_time = document.getElementById('in_time').value;
        const TotalAmount = document.getElementById('TotalAmount').value;

        if (!DATE || !invoice_no || !party_name || !qtyin_liter || !rate_per_liter || !person_name || !out_time || !in_time || !TotalAmount) {
            setMandatoryfield(true)

        }
        else {
            const result = await DieselEntry(localStorage.getItem('userName'),localStorage.getItem('warehouseId'),DATE,invoice_no,party_name,qtyin_liter,rate_per_liter,person_name,out_time,in_time,TotalAmount)
            if (result) {
                alert("Saved Successfully")
                window.location.href = '/Dashboard';
            }
        }


    }
    return (
        <>
            <div className="diesellogcontainer">
                <Home />
                <div>
                    <div className="col-md-6" style={{ margin: "100px auto" }}>
                        <div className="card">
                            <header className="card-header">

                                <h4 className="card-title mt-2 text-light">Diesel Log Entry<MdLibraryBooks style={{margin:"0 0 5px 4px"}}/></h4>
                            </header>


                            <article className="card-body">
                                <form>
                                   <div className='row' style={{marginTop:"-10px"}}>
                                    <div className="form-group col-md-6">
                                        <label>Date </label>
                                        <input type="Date" className="form-control" id="date" />
                                    </div> {/* form-group end.// */}
                                    <div className="form-group col-md-6" >
                                        <label>Invoice no.</label>
                                        <input type="text" className="form-control" id="invoice_no" />
                                    </div>
                                    </div>

                                    <div className="form-group" style={{marginTop:"-10px"}}>
                                        <label>Party Name</label>
                                        <input type="text" className="form-control" placeholder="" id="party_name" />
                                    </div> {/* form-group end.// */}

                                    <div className="form-row"  style={{marginTop:"-10px"}}>
                                        <div className="col form-group">
                                            <label>Qty in Liter</label>
                                            <input className="form-control" type="number" id="qtyin_liter" />
                                        </div>
                                        <div className="col form-group">
                                            <label>Rate per Liter</label>
                                            <input className="form-control" type="number" id="rate_per_liter" />
                                        </div>
                                    </div>
                                    <div className='row' style={{marginTop:"-10px"}}>
                                    <div className="form-group col-md-6">
                                        <label>Total Amount</label>
                                        <input className="form-control" type="number" id="TotalAmount" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Person Name</label>
                                        <input className="form-control" type="text" id="person_name" />
                                    </div>
                                    </div>

                                    <div className="form-row"  style={{marginTop:"-10px"}}>
                                        <div className="col form-group">
                                            <label>Out Time</label>
                                            <input className="form-control" type="time" id="out_time" />
                                        </div>
                                        <div className="col form-group">
                                            <label>In Time</label>
                                            <input className="form-control" type="time" id="in_time" />
                                        </div>
                                    </div>
                                    {
                                        mandatoryfield
                                            ? <p style={{ color: "red" }}>Please! fill the field...</p> : null
                                    }
                                    <div className="form-group">
                                        <button type="submit" onClick={handleClick} id="submitBtn" className="btn btn-primary mr-2">Submit</button>
                                        <input type="reset" style={{background:"gray",marginTop:"2px"}}className="btn btn-secondary mt-1 " value='Reset' />                                                                           </div> {/* form-group// */}
                                </form>
                            </article> {/* card-body end .// */}


                        </div>

                    </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default DieselLog;