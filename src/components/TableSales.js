import React from 'react'
import Trec from './Tr'
import TrecordsSales from './TrecordsSales'

function TableSales (props) {
    let objTr = ['Name', 'Description', 'Sold Quantity','Sold Price', 'Created Date']
    
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
                        <TrecordsSales />
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableSales