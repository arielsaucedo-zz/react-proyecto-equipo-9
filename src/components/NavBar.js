import {React,} from 'react'
import NavItem from './NavItem'
import NavItemExt from './NavItemExt'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea, faTachometerAlt, faFolder, faTable } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
    
  function NavBar(){
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/*  Sidebar - Brand  */}
            <Link to='/' className="sidebar-brand d-flex align-items-center justify-content-center">
                <img className="w-25" src="/images/kalitero-logo-k-wht.png" alt="Logo - Kalítero" />
			</Link>
            
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
                Link='/'
            />

            {/* Divider */}
            <hr className="sidebar-divider"></hr>

            {/* Heading */}
            <div className="sidebar-heading">Actions</div>

            {/* Nav Item - Pages */}
            <NavItemExt 
                claseLi='nav-item'
                claseA='nav-link collapsed'
                idA=''
                fontAwe={<FontAwesomeIcon icon={faFolder} />}
                claseSpan=''
                contenidoSpan='Pages'
                claseImg=''
                SrcImg=''
                wImg=''
                Link='http://localhost:3000/'
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
                Link='/tables'
            />

            {/* Divider */}
			<hr className="sidebar-divider d-none d-md-block"></hr>
        </ul>
    )
}

export default NavBar