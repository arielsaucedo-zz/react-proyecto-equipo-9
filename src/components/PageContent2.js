import React from 'react'
import dummyProduct from './product_dummy.svg'
import SmallCard from './SmallCard'

function PageContent2 () {
    return (
        /** Content Row */
        <div className='row'>
            {/** Last Product in DB */}
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 400}} src={dummyProduct} alt=""/>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                        <a target="_blank" rel="nofollow" href="/">View product detail</a>
                    </div>
                </div>
            </div>

            {/**Categories in DB */}
            <div className="col-lg-6 mb-4">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <SmallCard
                                claseSmCard='col-lg-6 mb-4'
                                claseSmCard2='card bg-info text-white shadow'
                                claseSmCardBody='card-body'
                                smCardTxt='Category 01'
                            />
                            <SmallCard
                                claseSmCard='col-lg-6 mb-4'
                                claseSmCard2='card bg-info text-white shadow'
                                claseSmCardBody='card-body'
                                smCardTxt='Category 02'
                            />
                            <SmallCard
                                claseSmCard='col-lg-6 mb-4'
                                claseSmCard2='card bg-info text-white shadow'
                                claseSmCardBody='card-body'
                                smCardTxt='Category 03'
                            />
                            <SmallCard
                                claseSmCard='col-lg-6 mb-4'
                                claseSmCard2='card bg-info text-white shadow'
                                claseSmCardBody='card-body'
                                smCardTxt='Category 04'
                            />
                            <SmallCard
                                claseSmCard='col-lg-6 mb-4'
                                claseSmCard2='card bg-info text-white shadow'
                                claseSmCardBody='card-body'
                                smCardTxt='Category 05'
                            />
                            <SmallCard
                                claseSmCard='col-lg-6 mb-4'
                                claseSmCard2='card bg-info text-white shadow'
                                claseSmCardBody='card-body'
                                smCardTxt='Category 06'
                            />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PageContent2