import React from 'react'

function Trec (props) {
    return(
        <tr>
            {props.Tr.map((rec,i) => <th key= {rec + i} >{rec}</th>)}
        </tr>
    )
}
export default Trec