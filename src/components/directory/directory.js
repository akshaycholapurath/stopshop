import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import MenuItem from '../menuitem/menuitem';
import "./directory.styles.scss";

const mapStateToProps = state =>({
sections: selectDirectorySections(state)
})

const Directory =({sections})=>{
 

    return(
        <div className='menu'>
            {sections.map(section => (
                <MenuItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl}/>           
            ))}
        </div>     
    )
    
}


export default connect(mapStateToProps,null)(Directory);