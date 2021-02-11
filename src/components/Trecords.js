import React from 'react'

function Trecords (props) {
    return(
        <tbody>
            {props.records.map((rec,i) => {
            return <tr key= {'tr' + i}>
                <td key= {rec.Name + i} >{rec.Name}</td>
                <td key= {rec.Description + i} >{rec.Description}</td>
                <td key= {rec.Price + i} >{rec.Price}</td>
                <td>
                    <ul>
                        {rec.Categories.map((cate,i) => {
                            return <li key= {cate + i} >{cate}</li>
                        })}
                    </ul>
                </td>
                <td>
                    <ul>
                        {rec.Colors.map((color,i) => {
                            return <li key= {color.colorName + i} ><span key={color.colorName + i} className={color.colorClase}>{color.colorName}</span></li>
                        })}
                    </ul>
                </td>
                <td>{rec.Stock}</td>
            </tr>
            })}
        </tbody>
    )
}
export default Trecords