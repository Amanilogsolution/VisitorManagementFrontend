import './generatorlog.scss'
import React,{useState} from 'react'
import Home from '../Home';
import { GeneratorEntry } from '../../api/index'
import { MdLibraryBooks } from 'react-icons/md';
import Footer from '../footer/Footer';

function GeneratorLog() {
    const [mandatoryfield, setMandatoryfield] = useState(false);


    const handleClick = async (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        const date = document.getElementById('date').value;
        const starttime = document.getElementById('starttime').value;
        const startreading = document.getElementById('startreading').value;
        const endtime = document.getElementById('endtime').value;
        const endreading = document.getElementById('endreading').value;
        if (!date || !starttime || !startreading || !endtime || !endreading) {
            setMandatoryfield(true);
        }
        else {
            const result = await GeneratorEntry(localStorage.getItem('userName'),localStorage.getItem('warehouseId'),date,starttime,startreading,endtime,endreading)
            if (result) {
                alert("Saved Successfully")
                window.location.href = '/Dashboard';
            }
        }
    }

    return (
        <>
            <div className="generatorlogcontainer">
                <Home />

                <div>
                    {/* <div className="row justify-content-center mt-2 mb-5" style={{ width: "100%" }}> */}
                    <div className="col-md-6" style={{ margin: "100px auto" }} >
                        <div className="card" >
                            <header className="card-header" >
                                <h4 className="card-title mt-1 text-light">Generator Log Book Entry <MdLibraryBooks style={{margin:"0 0 5px 0"}}/></h4>
                            </header>

                            <article className="card-body">
                                <form>

                                    <div className="form-group"style={{marginTop:"-12px"}}>
                                        <label>Date </label>
                                        <input type="Date" className="form-control" id='date' />
                                    </div> {/* form-group end.// */}
                                    <div className="form-group" style={{marginTop:"-10px"}}>
                                        <label>Start Time</label>
                                        <input type="time" className="form-control" placeholder="Start Time" id="starttime" />
                                    </div>

                                    <div className="form-group"  style={{marginTop:"-10px"}}>
                                        <label>Start Reading</label>
                                        <input type="number" className="form-control" placeholder="Reading" id="startreading" />
                                    </div> {/* form-group end.// */}

                                    {/* <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>City</label>
                                            <input type="text" className="form-control" />
                                        </div> 
                                        <div className="form-group col-md-6">
                                            <label>Country</label>
                                            <select id="inputState" className="form-control">
                                                <option> Choose...</option>
                                                <option>Uzbekistan</option>
                                                <option>Russia</option>
                                                <option selected>United States</option>
                                                <option>India</option>
                                                <option>Afganistan</option>
                                            </select>
                                        </div> 
                                    </div> form-row.// */}

                                    <div className="form-group" style={{marginTop:"-10px"}}>
                                        <label>End Time</label>
                                        <input className="form-control" type="time" id='endtime' />
                                    </div>
                                    <div className="form-group"  style={{marginTop:"-10px"}}>
                                        <label>End Reading</label>
                                        <input className="form-control" type="number" placeholder="Reading" id='endreading' />
                                    </div>
                                    {
                                        mandatoryfield
                                            ? <p style={{ color: "red" }}>Please! fill the field...</p> : null
                                    }
                                    <div className="form-group">
                                        <button type="submit" onClick={handleClick} id="submitBtn" className="btn btn-primary mr-2">Submit</button>
                                        <input type="reset" style={{background:"gray",marginTop:"2px"}} className="btn btn-secondary" value='Reset' />
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>

                </div></div>
            {/* </div> */}
            {/* </div> */}
            {/* <Footer/> */}
        </>
    )
}

export default GeneratorLog;