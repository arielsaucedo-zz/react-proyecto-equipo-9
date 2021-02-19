import React, { Component } from 'react';  

class Respuesta2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            done: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/productsExtra/lastProductDB') 
        .then(result=>result.json())
        .then(items=>this.setState({
            done: true,
            items
        }))
    }

    render() {
        return(
            <tbody>
                {
                    this.state.done ? (
                         this.state.items.data.map((item, i) => {
                            return <tr key= {'tr' + i}>
                                        <td key= {item.name + i} >{item.name}</td>
                                        <td key= {item.image + i} > {item.image} </td>
                                        <td key= {item.description + i} >{item.description}</td>
                                        <td key= {item.price + i} >${item.price}</td>
                                        <td key= {item.created_at + i} >{item.created_at}</td>
                                    </tr>
                            }
                        )
                    ) : (
                        <tr>
                            <td>
                                Cargando resultados...
                            </td>
                        </tr>
                    )
                }
            </tbody>
        )
    }
}

export default Respuesta2