import React from "react";
import './menu-item.styles.scss'

const MenuItem = ({ title, subtitle, imageUrl, size }) => {
    return (
        <div style={{
            backgroundImage: `URL(${imageUrl})`
        }} className={`${size} menu-item`}>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>{subtitle}</span>
            </div>
        </div>
    )
}

export default MenuItem;