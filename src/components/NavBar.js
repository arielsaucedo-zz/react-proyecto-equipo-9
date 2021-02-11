import React from 'react'
import NavItem from './NavItem'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea, faChartLine, faTachometerAlt, faFolder, faTable } from "@fortawesome/free-solid-svg-icons";

function NavBar(){
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/*  Sidebar - Brand  */}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
                    <i className='fas fa-chart-line'><FontAwesomeIcon icon={faChartLine} /></i>
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>
            
            {/* Divider */}
            <hr className="sidebar-divider my-0"></hr>
            
            {/** Nav Item - Dashboard  */}
            <NavItem 
                claseLi='nav-item active'
                claseA='nav-link'
                idA=''
                fontAwe={<FontAwesomeIcon icon={faTachometerAlt} />}
                claseSpan=''
                contenidoSpan='Dashboard'
                claseImg=''
                SrcImg=''
                wImg=''
            />

            {/* Divider */}
            <hr className="sidebar-divider"></hr>

            {/* Heading */}
            <div className="sidebar-heading">Actions</div>

            {/* Nav Item - Pages */}
            <NavItem 
                claseLi='nav-item'
                claseA='nav-link collapsed'
                idA=''
                fontAwe={<FontAwesomeIcon icon={faFolder} />}
                claseSpan=''
                contenidoSpan='Pages'
                claseImg=''
                SrcImg=''
                wImg=''
            />

            {/* Nav Item - Charts */}
            <NavItem 
                claseLi='nav-item'
                claseA='nav-link'
                idA=''
                fontAwe={<FontAwesomeIcon icon={faChartArea} />}
                claseSpan=''
                contenidoSpan='Charts'
                claseImg=''
                SrcImg=''
                wImg=''
            />

            {/* Nav Item - Tables */}
            <NavItem 
                claseLi='nav-item'
                claseA='nav-link'
                idA=''
                fontAwe={<FontAwesomeIcon icon={faTable} />}
                claseSpan=''
                contenidoSpan='Tables'
                claseImg=''
                SrcImg=''
                wImg=''
            />

            {/* Divider */}
			<hr className="sidebar-divider d-none d-md-block"></hr>
        </ul>
    )
}

export default NavBar