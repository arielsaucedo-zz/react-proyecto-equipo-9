import React from 'react'
import NavItem from './NavItem'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import dummyAvatar from './dummy-avatar.jpg'

function TopBar () {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/**<!-- Sidebar Toggle (Topbar) --> */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <FontAwesomeIcon icon={faBars} />
            </button>

            {/**<!-- Topbar Navbar --> */}
            <ul className="navbar-nav ml-auto">
                <NavItem 
                    claseLi='nav-item dropdown no-arrow mx-1'
                    claseA='nav-link dropdown-toggle'
                    idA='alertsDropdown'
                    fontAwe={<FontAwesomeIcon icon={faBell} />}
                    claseSpan='badge badge-danger badge-counter'
                    contenidoSpan='3+'
                    claseImg=''
                    SrcImg=''
                    wImg=''
                />

                {/**<!-- Nav Item - Messages --> */}
                <NavItem 
                    claseLi='nav-item dropdown no-arrow mx-1'
                    claseA='nav-link dropdown-toggle'
                    idA='messagesDropdown'
                    fontAwe={<FontAwesomeIcon icon={faEnvelope} />}
                    claseSpan='badge badge-danger badge-counter'
                    contenidoSpan='7'
                    claseImg=''
                    SrcImg=''
                    wImg=''
                />

                <div className="topbar-divider d-none d-sm-block"></div>

                {/**<!-- Nav Item - User Information --> */}

                <NavItem 
                    claseLi='nav-item dropdown no-arrow'
                    claseA='nav-link dropdown-toggle'
                    idA='userDropdown'
                    claseSpan='mr-2 d-none d-lg-inline text-gray-600 small'
                    contenidoSpan='Walter White'
                    claseImg='img-profile rounded-circle'
                    SrcImg={dummyAvatar}
                    wImg='60'
                />
            </ul>
        </nav>
    )
}

export default TopBar