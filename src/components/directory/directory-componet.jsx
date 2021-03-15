import React from 'react';
import './directory-styles.scss'
import MenuItem from '../menu-item/menu-item.componet';
import { createStructuredSelector } from "reselect";
import { selectDirectorSections } from '../../redux/directory/directory.selector.js';
import { connect } from 'react-redux'
const Directory = ({ sections }) => {
    return (
        <div className='directory-menu' >
            {
                sections.map(({ id, ...otherSection }) => {
                    return <MenuItem key={id} {...otherSection} subtitle='SHOPE NOW'></MenuItem>
                })
            }

        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorSections
})

export default connect(mapStateToProps, null)(Directory);