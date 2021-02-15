import React, { Component } from 'react';

const List = (props) => (
    <ul>
        {
            props.items.map((item, i) => {
                return <li key={i}>{item.name}</li>
            })
        }
    </ul>
)

class Home extends Component {
    constructor() {
        super();
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
            items: items.data
        }))
    }

    render() {
        return(
            <div>
                {this.state.done  ? (
                    <List items={[...this.state.items]} />
                ) : (
                    <p>Cargando resultados...</p>
                )}
            </div>
        )
    }
}

export default Home