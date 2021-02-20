import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LastUserDB from './LastUserDB'
import LastUserDetailDB from './LastUserDetailDB'
import LastProductDB from './LastProductDB'
import LastProductDetailDB from './LastProductDetailDB';
import ListOfCategories from './ListOfCategories'


function PageContent2 () {
    return (
        <Router>
            <Switch>
            {/** Content Row */}
                <div className='row'>
                    {/**Categories in DB */}
                    <ListOfCategories />
                    
                    <div className='h-100 mb-4 col-lg-8'>
                        <Route exact path="/">
                            {/** Last Product in DB */}
                            <LastProductDB />
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

                        
                    </div>
                </div>
            </Switch>
        </Router>
    )
}

export default PageContent2