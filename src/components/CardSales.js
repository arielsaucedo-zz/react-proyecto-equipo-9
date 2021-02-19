import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

class CardSales extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            done: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/productsExtra/soldProducts')
        .then(result=>result.json())
        .then(items=>this.setState({
            done: true,
            items
        }))
    }

    trunc (x, posiciones = 0) {
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
        // Parte decimal como número entero
        // Ejemplo: parte decimal = 0.77
        // decimalFormated = 0.77 * (10^posiciones)
        // si posiciones es 2 ==> 0.77 * 100
        // si posiciones es 3 ==> 0.77 * 1000
        let decimalFormated = Math.floor(
           Math.abs(decimal) * Math.pow(10, posiciones)
        )
        // Sustraemos del número original la parte decimal
        // y le sumamos la parte decimal que hemos formateado
        /* let finalNum = entera +
           ((decimalFormated / Math.pow(10, posiciones)) * (isNeg ? -1 : 1)) */
        
        let num = 0
        let finalNum
        num = x
        num = num.toString().replace(/\./g,',') //12.6 => 12,6 -------   12000.98 => 12000,98
        num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.'); //89,000.21
        num = num.split('').reverse().join('').replace(/^[\.]/,''); //12.000,98
        
        finalNum = num 

        return finalNum
     }

    render() {
        return(
            <div className='card border-left-info shadow h-100 py-2'>
                <div className='card-body'>
                    <div className=''>
                        <div className='col mr-2'>
                            <div className='text-xs font-weight-bold text-info text-uppercase mb-1'>
                                Current Total Sales
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {   
                                    this.state.done  ? (
                                    this.trunc(this.state.items.data.totalSales)
                                    ) : (
                                        <p>Cargando resultados...</p>
                                    )
                                }
                            </div>
                        </div>
                        <div className='col-auto'>
                            <i className='fas fa-2x text-gray-300'><FontAwesomeIcon icon={faDollarSign} /></i>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default CardSales