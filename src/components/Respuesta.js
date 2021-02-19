import React from 'react'
import Trec from './Tr'
import Respuesta2 from './Respuesta2'
import {Link} from "react-router-dom"


function Respuesta(props) {
    let objTr = ['Name', 'Image URL', 'Description','Price', 'Created Date']

    return(

        /* DIBUJO LA TABLA */
        /* PASO LOS TITULOS */
        /* INSTANCIO LA TABLA CON DATOS */

        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%">
                        
                        <thead>
                            <Trec
                                Tr = {objTr}
                            />
                        </thead>
                        
                        <Respuesta2 />
    
                    </table>
                
                    <div>
                        <Link to="/" className="ml-4"> Volver a la página de inicio! </Link>
                    </div>

                </div>
            </div>
        </div>
        
    )
}


export default Respuesta;