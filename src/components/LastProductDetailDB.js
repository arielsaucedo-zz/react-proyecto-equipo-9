import {React, useState, useEffect} from 'react'
import {Link, useParams} from "react-router-dom"

function LastProductDetailDB () {
    let params = useParams();

    const [product, setProduct] = useState({
        "meta": {
            "status": null
        },
        "data": {
            "id": null,
            "name": "g",
            "description": "",
            "created_at": "",
            "updated_at": "",
            "quantity": null,
            "price": "",
            "discount":null,
            "image": "",
            "category_id": null,
            "Category": {
                "name": ""
            }
        }
    }, []);

    useEffect(function(){
        fetch(`http://localhost:3000/api/products/${params.id}`)
        .then(result=>result.json())
        .then(json => {setProduct(json)})
    }, [])

    console.log(product)

    return (
        <div className="col-lg-12 mb-4">
            <div className="card shadow h-100 mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Last product detail in Data Base: {product.data.name}</h6>
                </div>
                <div className="card-body">
                    <div style={{width: 644}, {height:392}}>
                        
                        <p>Description: {product.data.description}</p>

                        <p>Categoryn: {product.data.Category.name}</p>

                        <p>Price: {product.data.price}</p>
                    
                        <p>Discount: {product.data.discount}</p>
                    
                        <p>Created Date: {product.data.created_at}</p>
                
                    </div>
                    <br></br>
                    <Link to="/" className="ml-4"> Back </Link>
                </div>
            </div>
        </div>
    )
}

export default LastProductDetailDB