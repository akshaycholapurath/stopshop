import React from 'react';
import CollectionItem from '../collection-item/collectionitem';
import './previewcollection.styles.scss';

const CollectionPreview = ({title,items})=>{
    return(
        <div className="collection-preview">
            <h2 className="title">{title.toUpperCase()}</h2>
            <div className="preview">
                {
                    items.filter((item,idx)=>idx<4).map(({id,...otheritems})=>
                         (          
                            <CollectionItem key={id} {...otheritems} />               
                        )
                    )
                }
            </div>
        </div>
    )
}


export default CollectionPreview;