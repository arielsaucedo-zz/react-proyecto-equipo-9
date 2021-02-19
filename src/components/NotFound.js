import React from 'react'
import {Link} from "react-router-dom"
import Footer from './Footer';
import NavBar from './NavBar';
import TopBar from './TopBar';

function NotFound(){
    return(
        <div id="wrapper">
            <NavBar />
            <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <div className="container-fluid">
                
                
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 1000}} src="/images/404.jpg" alt=""/>

                <div>
                    <Link to="/" className="ml-4"> Volver a la página de inicio! </Link>
                </div>

                </div>
            </div>
            <Footer />
            </div>
        </div>
        )

}

export default NotFound