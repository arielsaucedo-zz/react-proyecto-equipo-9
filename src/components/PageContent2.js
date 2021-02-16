import React from 'react'
import LastUserDB from './LastUserDB'
import LastProductDB from './LastProductDB'
import ListOfCategories from './ListOfCategories'

function PageContent2 () {
    return (
        /** Content Row */
        <div className='row'>
            {/**Categories in DB */}
            <ListOfCategories />
            
            <div className='col-lg-9 mh-100 my-auto'>
                {/** Last Product in DB */}
                <LastProductDB />

                {/** Last Product in DB */}
                <LastUserDB />
            </div>
        </div>
    )
}

export default PageContent2