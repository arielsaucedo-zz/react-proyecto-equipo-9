import React, { Component } from 'react';

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
            <div className="mh-100 mb-4 col-lg-4 align-item-stretch">						
                <div className="card shadow h-100 mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {
                                this.state.done ? (
                                    this.state.items.meta.countByCategory.map((item,i) => {
                                        return <div key={item.name + i} className='col-lg-12 mb-4'>
                                                    <div key={item.name + i} className='card bg-info text-white shadow'>
                                                        <div key={item.name + i} className='card-body'>
                                                        <strong>{i=i+1}.- {item.name}</strong>
                                                            <ul key={item.name + i}>
                                                                <li key={item.name + i}>
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