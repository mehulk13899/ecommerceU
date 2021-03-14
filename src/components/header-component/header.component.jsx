import React from 'react'
import { Link } from "react-router-dom";
import "./header.component.styles.scss";
import { auth } from "../../firebase/firebase-utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selector'
import { selectCurrentUser } from '../../redux/user/user.selector'
function HeaderComponent({ currentUser, hidden }) {
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
                <CartIcon></CartIcon>
            </div>
            {
                hidden ? null : <CartDropDown></CartDropDown>
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps, null)(HeaderComponent)
