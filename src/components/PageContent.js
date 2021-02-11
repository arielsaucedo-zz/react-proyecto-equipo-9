import React from 'react'
import Card from './Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faDollarSign, faUserCheck } from "@fortawesome/free-solid-svg-icons";

function PageContent () {
    return (
        /** Content Row */
        <div className='row'>
            {/**Amount of Products in DB */}
            <div className="col-md-4 mb-4">
                <Card 
                    claseCard='card border-left-primary shadow h-100 py-2'
                    claseCardBody='card-body'
                    claseCardRow='row no-gutters align-items-center'
                    claseCol1='col mr-2'
                    claseText='text-xs font-weight-bold text-primary text-uppercase mb-1'
                    textText=' roducts in Data Base'
                    textH='135'
                    claseH='h5 mb-0 font-weight-bold text-gray-800'
                    claseCol2='col-auto'
                    claseFA='fas fa-2x text-gray-300'
                    fontAwe={<FontAwesomeIcon icon={faClipboardList} />}
                />
            </div>
            
            <div className="col-md-4 mb-4">
                <Card 
                        claseCard='card border-left-success shadow h-100 py-2'
                        claseCardBody='card-body'
                        claseCardRow='row no-gutters align-items-center'
                        claseCol1='col mr-2'
                        claseText='text-xs font-weight-bold text-success text-uppercase mb-1'
                        textText=' Amount in products'
                        textH='$546.456'
                        claseH='h5 mb-0 font-weight-bold text-gray-800'
                        claseCol2='col-auto'
                        claseFA='fas fa-2x text-gray-300'
                        fontAwe={<FontAwesomeIcon icon={faDollarSign} />}
                    />
            </div>

            <div className="col-md-4 mb-4">
                <Card 
                        claseCard='card border-left-primary shadow h-100 py-2'
                        claseCardBody='card-body'
                        claseCardRow='row no-gutters align-items-center'
                        claseCol1='col mr-2'
                        claseText='text-xs font-weight-bold text-warning text-uppercase mb-1'
                        textText=' Users quantity'
                        textH='38'
                        claseH='h5 mb-0 font-weight-bold text-gray-800'
                        claseCol2='col-auto'
                        claseFA='fas fa-2x text-gray-300'
                        fontAwe={<FontAwesomeIcon icon={faUserCheck} />}
                    />
            </div>
        </div>
    )
}

export default PageContent