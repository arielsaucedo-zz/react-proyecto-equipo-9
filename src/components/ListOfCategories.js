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
            <div className="mh-100 m-auto col-lg-3">						
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {
                                this.state.done ? (
                                    this.state.items.meta.countByCategory.map(item => {
                                        return <div className='col-lg-12 mb-4'>
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
        )
    }
}

export default ListOfCategories