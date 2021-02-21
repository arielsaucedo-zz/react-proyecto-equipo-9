import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

class CardUsers extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            done: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/users')
        .then(result=>result.json())
        .then(items=>this.setState({
            done: true,
            items
        }))
    }

    render() {
        return(
            <div className='card border-left-primary shadow h-100 py-2'>
                <div className='card-body'>
                    <div className=''>
                        <div className='col mr-2'>
                            <div className='text-xs font-weight-bold text-warning text-uppercase mb-1'>
                                Users Quantity
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                {   
                                    this.state.done  ? (
                                    this.state.items.meta.count
                                    ) : (
                                        <p>Cargando resultados...</p>
                                    )
                                }
                            </div>
                        </div>
                        <div className='col-auto'>
                            <i className='fas fa-2x text-gray-300'><FontAwesomeIcon icon={faUserCheck} /></i>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default CardUsers