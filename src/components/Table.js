import React from 'react'
import Trec from './Tr'
import Trecords from './Trecords'

function Table (props) {
    let objTr = ['Name', 'Description', 'Quantity','Price', 'Discount', 'Category']
    
    return(
        /**DataTales Example */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%">
                        <thead>
                            <Trec
                                Tr = {objTr}
                            />
                        </thead>
                        <Trecords />
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table