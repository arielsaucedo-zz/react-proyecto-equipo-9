import React from 'react'
import Trec from './Tr'
import Trecords from './Trecords'

function Table (props) {
    let objTr = ['Name', 'Description', 'Price', 'Categories', 'Colors', 'Stock']
    
    let arrCategories = [1,2,3]
    let listOfCategories = []
    let objCategory = {
        Name : 'Category',
        catValue : ''
    }
    arrCategories.forEach(element => {
        objCategory.catValue = element
        listOfCategories.push(objCategory.Name + (objCategory.catValue > 9 ? ' ' : ' 0') + objCategory.catValue  )
    });

    let listOfColors = [
        {colorName: 'Red', colorClase: 'text-danger'}, 
        {colorName: 'Blue', colorClase: 'text-primary'}, 
        {colorName: 'Green', colorClase: 'text-success'}
    ]

    let listOfRecords =[
        {
        Name : 'Tiger Nixon',
        Description : 'System Architect',
        Price : '$320,800',
        Categories : listOfCategories,
        Colors : listOfColors,
        Stock : 245
        },
        {
        Name : 'Jane Doe',
        Description : 'Fullstack developer	',
        Price : '$320,800',
        Categories : listOfCategories,
        Colors : listOfColors,
        Stock : 245
        }
    ]
    console.log(listOfRecords[0].Colors);
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
                        <tfoot>
                            <Trec
                                Tr = {objTr}
                            />
                        </tfoot>
                        <Trecords 
                            records = {listOfRecords}
                        />
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table