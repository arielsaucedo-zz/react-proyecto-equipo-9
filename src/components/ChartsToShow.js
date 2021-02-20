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
        <div className='container'>

                <div id="chart_div"></div>

        </div>
    )
}

export default LastProductDetailDB