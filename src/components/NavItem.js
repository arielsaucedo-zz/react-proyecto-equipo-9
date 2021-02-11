import React from 'react'

function NavItem(props){
    return (
      <li className={props.claseLi}>
        <a className={props.claseA} href='/' id={props.idA}>
          <i className='fas fa-fw'>{props.fontAwe}</i>
          <span className={props.claseSpan}> {props.contenidoSpan}</span>
          <img className={props.claseImg} src={props.SrcImg} width={props.wImg} alt=''></img>
        </a>
      </li>
    );
}

export default NavItem