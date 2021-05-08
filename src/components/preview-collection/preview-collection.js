import React from 'react';
import CollectionItem from '../collection-item/collectionitem';
import './previewcollection.styles.scss';
import{ withRouter} from 'react-router-dom';

const CollectionPreview = ({title,items,history,routeName})=>{
    return(
        <div className="collection-preview">
            <h2 onClick={()=>history.push(`${routeName}`)} className="title">{title.toUpperCase()}</h2>
            <div className="preview">
                {
                    items.filter((item,idx)=>idx<4).map(item=>
                         (          
                            <CollectionItem key={item.id} item={item}/>               
                        )
                    )
                }
            </div>
        </div>
    )
}


export default withRouter(CollectionPreview);