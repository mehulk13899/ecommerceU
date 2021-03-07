import React from 'react'
import { Link } from "react-router-dom";
import "./header.component.styles.scss";
import { auth } from "../../firebase/firebase-utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from 'react-redux';
function HeaderComponent({ currentUser }) {
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
                    currentUser ? <Link className='option' onClick={() => auth.signOut()}>SIGN OUT </Link> : <Link className='option' to='/sign'>SIGN</Link>
                }

            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(HeaderComponent)
