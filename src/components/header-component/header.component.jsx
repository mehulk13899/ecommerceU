import React from 'react'
import { Link } from "react-router-dom";
import "./header.component.styles.scss";
import { firebase, auth } from "../../firebase/firebase-utils";



import { ReactComponent as Logo } from "../../assets/crown.svg";
function HeaderComponent({ current_user }) {
    console.log(current_user);
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'></Logo>
            </Link>
            <div className='options'>
                <Link className='option' to='/'>HOME</Link>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/'>CONTACTS</Link>
                {
                    current_user ? <Link className='option' onClick={() => auth.signOut()}>SIGN OUT </Link> : <Link className='option' to='/sign'>SIGN</Link>
                }

            </div>
        </div>
    )
}
export default HeaderComponent
