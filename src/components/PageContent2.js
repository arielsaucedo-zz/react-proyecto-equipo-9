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
            
            <div className='h-100 mb-4 col-lg-8'>
                {/** Last Product in DB */}
                <LastProductDB />

                {/** Last Product in DB */}
                <LastUserDB />
            </div>
        </div>
    )
}

export default PageContent2