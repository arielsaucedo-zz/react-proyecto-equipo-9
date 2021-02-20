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

    console.log(user)

    return (
        <div className="col-lg-12 mb-4">
            <div className="card shadow h-100 mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Last User detail in Data Base: {user.data.user.first_name} {user.data.user.last_name}</h6>
                </div>
                <div className="card-body">
                    <div style={{width: 644}, {height:392}}>
                        
                        <p>First Name: {user.data.user.first_name}</p>

                        <p>Last Name: {user.data.user.last_name}</p>

                        <p>User Name: {user.data.user.user_name}</p>
                    
                        <p>Created Date: {user.data.user.created_at}</p>
                
                    </div>
                    <br></br>
                    <Link to="/" className="ml-4"> Back </Link>
                </div>
            </div>
        </div>
    )
}

export default LastUserDetailDB