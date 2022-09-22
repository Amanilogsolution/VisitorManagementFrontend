import './slider.scss';
import React, { useState } from 'react';
import Icon from '../../images/logo.png';
import Desiel from '../../images/deisel.png';
import Generator from '../../images/generator.png';
import Warehouselogo from '../../images/warehouse.png';
import Logbook from '../../images/logbook.png';
import Truck from '../../images/truck.svg';
function Slider({ slider, openSidebar }) {
    const [show, setShow] = useState(false)

    const togglediv = () => {
        setShow(!show);

    }
    const handlelogout = () => {
        localStorage.clear();
        window.location.href = '/'
    }
    return (
        <>
            <div className={slider ? "slidercontaineropen" : "slidercontainer"}>
                <div className="closebox">
                    <span onClick={openSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="red"><path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" /></svg></span>
                    <div className="userdetail">
                        <p className="name">
                      
                        {localStorage.getItem("userName")}</p>
                        <p className="warehouse">{localStorage.getItem("Warehouse")}</p>
                    </div>
                    <div className="imgdiv">
                        <img src={Icon} alt="Icon" />
                    </div>
                </div>
                <div className="bottomdiv">
                    <ul className="listitems">
                        <li className="listitem">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                            </svg>&nbsp;
                            <a href='Dashboard'>Home</a></li>
                        <li className="listitem"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-binoculars" viewBox="0 0 16 16">
                            <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z" />
                        </svg>&nbsp;
                            <a href="VisitorLogBook">Visitor Entry</a></li>
                            <li className="listitem"><img src={Truck} alt="Truck Icon" style={{ height: "18px", width: "18px" }}/>
                               &nbsp;
                            <a href="Vehicle">Vehicle Entry</a></li>
                        <li className="listitem outerlist" onClick={togglediv} >
                        <img src={Logbook} style={{ height: "16px", width: "16px" }} alt="LogBook"/>&nbsp;
                        LogBook
                            <span id="innerspan" style={{ fontSize: "23px", transform: "rotate(180deg)" }}> &nbsp;&#94;</span>
                            {show ?
                                <ul className="innerlistes">
                                    <a href="/GeneratorLogBook"><li className="innerliste">
                                        <img src={Generator} style={{ height: "16px", width: "16px" }} alt="Generator" />&nbsp;
                                        Generator LogBook</li></a>
                                    <a href="/DieselLog"> <li className="innerliste" style={{ width: "100%" }}>
                                        <img src={Desiel} style={{ height: "16px", width: "16px" }} alt="Diesel"/>&nbsp;
                                        Desiel LogBook</li></a>
                                    <a href="Warehouse"><li className="innerliste">
                                        <img src={Warehouselogo} style={{ height: "16px", width: "16px" }} alt="Wharehouselogo" />&nbsp;
                                        Warehouse LogBook</li></a>
                                </ul>
                                : null
                            }
                        </li>
                    </ul>
                    <ul className="bottomlists">
                        <li className="bottomlist arrow" onClick={handlelogout} > Logout
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Slider;