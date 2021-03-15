import React from 'react'
import './button-component.styles.scss';
function ButtonComponent({ children, isGoogleButton, inverted, ...otherProps }) {
    return (
        <div>
            <button className={`${inverted ? 'inverted' : ''} ${isGoogleButton ? 'google_Button' : ''} custom-button`} {...otherProps}>
                {children}
            </button>
        </div >
    )
}

export default ButtonComponent

