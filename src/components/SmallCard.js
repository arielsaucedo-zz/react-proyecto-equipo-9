import React from 'react'

function SmallCard (props) {
    return(
        <div className={props.claseSmCard}>
            <div className={props.claseSmCard2}>
                <div className={props.claseSmCardBody}>
                    {props.smCardTxt}
                </div>
            </div>
        </div>
    )
}

export default SmallCard