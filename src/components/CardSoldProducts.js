import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";

class CardSoldProducts extends Component {
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

    render() {
        return(
            <div className='card border-left-info shadow h-100 py-2'>
                <div className='card-body'>
                    <div className=''>
                        <div className='col mr-2'>
                            <div className='text-xs font-weight-bold text-info text-uppercase mb-1'>
                                Total Sold Products
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {   
                                    this.state.done  ? (
                                    this.state.items.data.soldProductos
                                    ) : (
                                        <p>Cargando resultados...</p>
                                    )
                                }
                            </div>
                        </div>
                        <div className='col-auto'>
                            <i className='fas fa-2x text-gray-300'><FontAwesomeIcon icon={faHandHoldingUsd} /></i>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default CardSoldProducts