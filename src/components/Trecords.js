import React, { Component } from 'react';

class Trecords extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            done: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/productsExtra/')
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
                        <td key= {item.description + i} >{item.description}</td>
                        <td key= {item.quantity + i} >{item.quantity}</td>
                        <td key= {item.price + i} >${item.price}</td>
                        <td key= {item.discount + i} >{item.discount}%</td>
                        <td key= {item.Category.name + i} >{item.Category.name}</td>
                    </tr>
                })
                ) : (
                    <p>Cargando resultados...</p>
                 )
            }
        </tbody>
        )
    }
}

export default Trecords

