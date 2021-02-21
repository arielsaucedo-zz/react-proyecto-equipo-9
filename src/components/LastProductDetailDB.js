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

    const trunc = (x, posiciones = 0) => {
        let s = x.toString()
        let l = s.length
        let decimalLength = s.indexOf('.') + 1
  
        if (l - decimalLength <= posiciones) {
           return x
        }
        // Parte decimal del número
        let isNeg = x < 0
        let decimal = x % 1
        let entera = isNeg ? Math.ceil(x) : Math.floor(x)

        let decimalFormated = Math.floor(
           Math.abs(decimal) * Math.pow(10, posiciones)
        )

        let num = 0
        let finalNum
        num = x
        num = num.toString().replace(/\./g,',') //12.6 => 12,6 -------   12000.98 => 12000,98
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.'); //89,000.21
        num = num.split('').reverse().join('').replace(/^[\.]/,''); //12.000,98
        
        finalNum = num 

        return finalNum
    }

    return (
        <div className="col-lg-12 mb-4">
            <div className="card shadow h-100 mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Last product detail in Data Base: <span className='text-dark'>{product.data.name}</span></h6>
                </div>
                <div className="card-body container">
                    <div style={{width: 644}, {height:392}}>
                        
                        <div className='m-5'>
                            <h5><strong className='text-primary'><u>Description:</u> </strong> {product.data.description}</h5>

                            <h5><strong className='text-primary'><u>Category:</u> </strong> {product.data.Category.name}</h5>

                            <h5><strong className='text-primary'><u>List Price:</u> </strong>$ {trunc(product.data.price)}</h5>

                            <h5><strong className='text-primary'><u>Sell Price:</u> </strong>$ {trunc(parseFloat(product.data.price - (product.data.price * product.data.discount /100)).toFixed(2))}</h5>

                            <h5><strong className='text-primary'><u>Discount:</u> </strong>{product.data.discount} %</h5>

                            <h5><strong className='text-primary'><u>Stock:</u> </strong>{product.data.quantity} Un.</h5>

                            <h5><strong className='text-primary'><u>Created Date:</u> </strong>{product.data.created_at}</h5>

                            <h5><strong className='text-primary'><u>Change Date:</u> </strong>{product.data.updated_at}</h5>
                        </div>
                
                    </div>
                    <br></br>
                    <Link to="/" className="ml-4"> Back </Link>
                </div>
            </div>
        </div>
    )
}

export default LastProductDetailDB