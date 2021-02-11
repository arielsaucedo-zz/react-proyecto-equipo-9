import React from 'react'

function Card (props) {
    return(
        <div className={props.claseCard}>
            <div className={props.claseCardBody}>
                <div className={props.claseRow}>
                    <div className={props.claseCol1}>
                        <div className={props.claseText}>{props.textText}</div>
                        <div className={props.claseH}>{props.textH}</div>
                    </div>
                    <div className={props.claseCol2}>
                        <i className={props.claseFA}>{props.fontAwe}</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card