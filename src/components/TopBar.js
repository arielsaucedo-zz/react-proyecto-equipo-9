import {React,} from 'react'
import NavItem from './NavItem'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import dummyAvatar from './avatar-default.jpg'

    function TopBar () {

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/**<!-- Sidebar Toggle (Topbar) --> */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <FontAwesomeIcon icon={faBars} />
            </button>

            {/**<!-- Topbar Navbar --> */}
            <ul className="navbar-nav ml-auto">

                <div className="topbar-divider d-none d-sm-block"></div>

                {/**<!-- Nav Item - User Information --> */}

                <NavItem 
                    claseLi='nav-item dropdown no-arrow'
                    claseA='nav-link dropdown-toggle'
                    idA='userDropdown'
                    claseSpan='mr-2 d-none d-lg-inline text-gray-600 small'
                    contenidoSpan='Administrador'
                    claseImg='img-profile rounded-circle'
                    SrcImg={dummyAvatar}
                    wImg='60'
                    Link='/'
                />
            </ul>
        </nav>
    )
}

export default TopBar