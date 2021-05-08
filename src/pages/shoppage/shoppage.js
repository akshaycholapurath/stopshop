import React from 'react';
import './shoppage.styles.scss';
import CollectionsOverview from '../../components/collections-overview/collections.overview';
import { Route} from 'react-router-dom';
import CollectionPage from '../collection/collectionpage';

const Shoppage =({match})=> {
        
        return(
            <div className='shoppage'>    
                <Route exact path='/shop' component={CollectionsOverview}  />
            </div>
        ) 
}


export default Shoppage;