import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../preview-collection/preview-collection';

import './collections.overview.styles.scss';


const mapStateToProps = state =>({
    collections: selectCollectionsForPreview(state)
})

const CollectionsOverview = ({collections})=>{
    return(
        <div className='collections-overview'>
            {
               collections.map(({id,...otherprops })=>(
                    <CollectionPreview  key={id} {...otherprops} />
            ))
            }
        </div>
    )
}

export default connect(mapStateToProps,null)(CollectionsOverview);