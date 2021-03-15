import React from 'react'
import "./form.styles.scss";
function FormComponent({ handle_change, label, ...otherProps }) {
    return (
        <div className="group">

            <input className='form-input' onChange={handle_change} {...otherProps} />
            {
                label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}</label> : null
            }
        </div>
    )
}

export default FormComponent
