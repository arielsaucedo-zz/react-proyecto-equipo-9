import React, { Component } from 'react';

class LastProductDB extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            done: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/usersExtra/lastUserDB')
        .then(result=>result.json())
        .then(item=>this.setState({
            done: true,
            item
        }))
    }

    render() {
        return(
            <div className="col-lg-12">
                {
                     this.state.done ? (
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Last user in Data Dase: {this.state.item.data.first_name + ' ' + this.state.item.data.last_name} </h6>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 400}} src={this.state.item.data.image} alt=""/>
                                </div>
                                <p>{this.state.item.data.description}</p>
                                <a target="_blank" rel="nofollow" href={this.state.item.data.detail}>View product detail</a>
                            </div>
                        </div>
                    ) : (
                        <p>Cargando resultados...</p>
                    )
                }
            </div>
        )
    }
}

export default LastProductDB