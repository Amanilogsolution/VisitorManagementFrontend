import './slider.scss';
import React, { useState } from 'react';
import Icon from '../../images/logo.png';
import Desiel from '../../images/deisel.png';
import Generator from '../../images/generator.png';
import Warehouselogo from '../../images/warehouse.png';
import Logbook from '../../images/logbook.png';
import Truck from '../../images/truck.svg';
import { ImHome,ImEnter } from 'react-icons/im';
import { FaTruck,FaBook } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';
import { TbLogout } from 'react-icons/tb';

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
                        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" fill="white"><path d="M12.45 37.65 10.35 35.55 21.9 24 10.35 12.45 12.45 10.35 24 21.9 35.55 10.35 37.65 12.45 26.1 24 37.65 35.55 35.55 37.65 24 26.1Z" /></svg></span>
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
                           
                            <a href='Dashboard'><a id="a"><ImHome style={{margin:'0 10px 6px 2px'}}/>Home</a></a></li>
                        <li className="listitem">
                            <a href="VisitorLogBook" ><a id="a"><ImEnter style={{margin:'0 9px 6px 0'}}/>Visitor Entry</a></a></li>
                        <li className="listitem">
                
                            <a href="Vehicle"><a id="a"><FaTruck style={{margin:'0 8px 6px 2px'}} />Vehicle Entry</a></a></li>
                        <li className="listitem outerlist" onClick={togglediv}>
                            <a><a id="a"><FaBook style={{margin:'0 9px 6px 2px'}}/>LogBook<AiFillCaretDown style={{margin:'0 10px 0 4px'}}/></a></a>
                            {show ?
                                <ul className="innerlistes">
                                    <a href="/GeneratorLogBook"><li className="innerliste">
                                    <a id="a">Generator LogBook</a></li></a>
                                    <a href="/DieselLog"> <li className="innerliste" style={{ width: "100%" }}>
                                    <a id="a">Desiel LogBook</a></li></a>
                                    <a href="Warehouse"><li className="innerliste">
                                    <a id="a"> Warehouse LogBook</a></li></a>
                                </ul>
                                : null
                            }
                        </li>
                    </ul>
                    <ul className="bottomlists">
                        <li className="bottomlist arrow" onClick={handlelogout} > Logout <TbLogout style={{ margin: "2px 6px 2px 4px", fontSize: "21px" }}/>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Slider;