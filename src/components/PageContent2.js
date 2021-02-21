import React from 'react'
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import LastUserDB from './LastUserDB'
import LastUserDetailDB from './LastUserDetailDB'
import LastProductDB from './LastProductDB'
import LastProductDetailDB from './LastProductDetailDB';
import ListOfCategories from './ListOfCategories'

function PageContent2 () {
    let params = useParams()
    return (
        <Router>
            {/** Content Row */}
                <div className='row'>
                    {/**Categories in DB */}
                    <ListOfCategories />
                    
                    <div className='h-100 mb-4 col-lg-8'>
                        <Switch>
                            <Route exact path="/">
                                {/** Last Product in DB */}
                                <LastProductDB
                                userId={params.id}
                                />
                                {/** Last Product in DB */}
                                <LastUserDB />
                            </Route>
                            
                            <Route exact path="/products/:id">
                                {/** Last Product Detail in DB */}
                                <LastProductDetailDB />
                                {/** Last Product in DB */}
                                <LastUserDB />
                            </Route>

                            <Route exact path="/users/:id">
                                {/** Last Product in DB */}
                                <LastProductDB />
                                {/** Last Product Detail in DB */}
                                <LastUserDetailDB />
                            </Route>                       
                        </Switch>
                    </div>
                </div>
        </Router>
    )
}

export default PageContent2