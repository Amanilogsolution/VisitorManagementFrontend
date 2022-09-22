import './navbar.scss';
import Logo from "../../images/logo.png"
import Warehouselogo from '../../images/warehouse.png'
import React from 'react'
function Navbar({ openSidebar }) {

    const handlelogout = () => {
        localStorage.clear();
        window.location.href = '/'
    }
    return (
        <>
            <nav className="navbar navcontainer navbar-expand-lg navbar-light  text-white">
                <a className="navbar-brand text-white navlogo" href="#" ><img src={Logo} /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={openSidebar}>
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse  navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto navlinks">
                        <li className="nav-item navlink ">
                            <a className="nav-link" href="Dashboard">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item navlink ">
                            <a className="nav-link" href="VisitorLogBook">Visitor Entry</a>
                        </li>
                        <li className="nav-item navlink ">
                            <a className="nav-link" href="Vehicle">Vehicle Entry</a>
                        </li>
                        <li className="nav-item dropdown navlink">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                LogBook
                            </a>
                            <div className="dropdown-menu ml-5 " aria-labelledby="navbarDropdown">
                                <a className="dropdown-item text-dark" href="/GeneratorLogBook">Generator LogBook</a>
                                <a className="dropdown-item text-dark" href="/DieselLog">Diesel LogBook</a>
                                <a className="dropdown-item text-dark" href="Warehouse"> Open/Close Warehouse LogBook</a>
                            </div>
                        </li>

                    </ul>
                    <ul className="profilediv">
                       <li className="warehouseplace" ><span className='staricon'><img src={Warehouselogo}/></span> {localStorage.getItem("Warehouse")}</li>&nbsp;
                        <li className="profilelink" onClick={handlelogout} > 
                        Logout
                        </li>
                    </ul>
                </div>
            </nav>




        </>
    )
}

export default Navbar;