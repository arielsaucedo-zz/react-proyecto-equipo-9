import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faDollarSign, faUserCheck } from "@fortawesome/free-solid-svg-icons";

class ListOfCategories extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            done: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/products')
        .then(result=>result.json())
        .then(items=>this.setState({
            done: true,
            items 
        }))
    }

    render() {
        return(
            <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        {
                            this.state.done ? (
                                this.state.items.meta.countByCategory.map(item => {
                                    return <div className='col-lg-6 mb-4'>
                                                <div className='card bg-info text-white shadow'>
                                                    <div className='card-body'>
                                                    <strong>{item.name}</strong>
                                                        <ul>
                                                            <li>
                                                                Cantidad de Productos: {item.productCount}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                })
                             ) : (
                                <p>Cargando resultados...</p>
                             )
                        }
                    </div>
                </div>
            </div>
        </div>
/*             <div className='card border-left-success shadow h-100 py-2'>
                <div className='card-body'>
                    <div className=''>
                        <div className='col mr-2'>
                            <div className='text-xs font-weight-bold text-success text-uppercase mb-1'>
                                Categories in Data Base
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {   
                                    this.state.done  ? (
                                    this.state.items.meta.countByCategory.length
                                    ) : (
                                        <p>Cargando resultados...</p>
                                    )
                                }
                            </div>
                        </div>
                        <div className='col-auto'>
                            <i className='fas fa-2x text-gray-300'><FontAwesomeIcon icon={faClipboardList} /></i>
                        </div> 
                    </div>
                </div>
            </div> */
        )
    }
}

export default ListOfCategories