import React, { Component } from 'react';

class CardProducts extends Component {
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
            items: items.data
        }))
    }

    render(props) {
        return(
            <div className={props.claseCard}>
                <div className={props.claseCardBody}>
                    <div className={props.claseRow}>
                        <div className={props.claseCol1}>
                            <div className={props.claseText}>{props.textText}</div>
                            <div className={props.claseH}>
                            {   
                                this.state.done  ? (
                                props.items.meta.count
                                ) : (
                                    <p>Cargando resultados...</p>
                                )
                            }
                            </div>
                        </div>
                        <div className={props.claseCol2}>
                            <i className={props.claseFA}>{props.fontAwe}</i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardProducts