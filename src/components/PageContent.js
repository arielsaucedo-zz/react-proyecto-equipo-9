import React from 'react'
import CardProducts from './CardProducts';
import CardUsers from './CardUsers';
import CardCategories from './CardCategories';

function PageContent () {
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