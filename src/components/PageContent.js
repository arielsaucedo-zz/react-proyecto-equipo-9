import React from 'react'
import Card from './Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faDollarSign, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import CardProducts from './CardProducts';
import CardUsers from './CardUsers';
import CardCategories from './CardCategories';

function PageContent () {
    fetch('http://localhost:3000/api/products')
        .then(Response => Response.json())
        .then(json => console.log(json))
    return (
        /** Content Row */
        <div className='row'>
            {/**Amount of Products in DB */}
            <div className="col-md-4 mb-4">
                <CardProducts/>
            </div>
            
            <div className="col-md-4 mb-4">
                <CardCategories />
            </div>

            <div className="col-md-4 mb-4">
                <CardUsers />
            </div>
        </div>
    )
}

export default PageContent