import React from 'react';
import './shoppage.styles.scss';
import CollectionsOverview from '../../components/collections-overview/collections.overview';
import {Route} from 'react-router-dom';
import CollectionPage from '../category/collectionpage';

const Shoppage =({match})=> {
    
        return(
            <div className='shoppage'>
                <h1>Collections</h1>
                <Route exact path={`${match.path}`} component={CollectionsOverview}  />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />                   
            </div>

        )
    
}


export default Shoppage;