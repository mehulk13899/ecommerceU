import React from 'react'
import './button-component.styles.scss';
function ButtonComponent({ children, isGoogleButton, ...otherProps }) {
    return (
        <div>
            <button className={`${isGoogleButton ? 'google_Button' : ''} custom-button`} {...otherProps}>
                {children}
            </button>
        </div >
    )
}

export default ButtonComponent

