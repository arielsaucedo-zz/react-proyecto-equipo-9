import {React, useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom"

function LastUserDetailDB () {
    let params = useParams();

    const [user, setUser] = useState({
        "meta": {
            "status": null
        },
        "data": {
            "user": {
                "id": null,
                "first_name": "",
                "last_name": "",
                "user_name": "",
                "image_avatar": "",
                "created_at": "",
                "updated_at": ""
            }
        }
    }, []);

    useEffect(function(){
        fetch(`http://localhost:3000/api/users/${params.id}`)
        .then(result=>result.json())
        .then(json => {setUser(json)})
    }, [])


    return (
        <div className="col-lg-12 mb-4">
            <div className="card shadow h-100 mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Last User detail in Data Base: <span className='text-dark'>{user.data.user.first_name} {user.data.user.last_name}</span></h6>
                </div>
                <div className="card-body container">
                    <div style={{width: 644}, {height:392}}>

                        <div className='m-5'>
                            <h5><strong className='text-primary'><u>First Name:</u> </strong> {user.data.user.first_name}</h5>

                            <h5><strong className='text-primary'><u>Last Name:</u> </strong> {user.data.user.last_name}</h5>

                            <h5><strong className='text-primary'><u>User Name:</u> </strong> {user.data.user.user_name}</h5>

                            <h5><strong className='text-primary'><u>Created Date:</u> </strong>{user.data.user.created_at}</h5>

                            <h5><strong className='text-primary'><u>Change Date:</u> </strong>{user.data.user.updated_at}</h5>
                        </div>
                
                    </div>
                    <br></br>
                    <Link to="/" className="ml-4"> Back </Link>
                </div>
            </div>
        </div>
    )
}

export default LastUserDetailDB