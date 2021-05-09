import React from 'react';
import './shoppage.styles.scss';
import CollectionsOverview from '../../components/collections-overview/collections.overview';
import { Route} from 'react-router-dom';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import { selectIsCollectionFetch } from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/spinner/withspinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);


const mapStateToProps = state => ({
    isFetching : selectIsCollectionFetch(state)
})

const mapDispatchToProps = dispatch =>({
    updateCollections: () =>dispatch(fetchCollectionsStartAsync())
})


class Shoppage extends React.Component {

    componentDidMount(){
        this.props.updateCollections()    
    }

     render(){  
         const {isFetching} = this.props;  
        return(
            <div className='shoppage'>    
                <Route exact path='/shop' render={(props)=><CollectionOverviewWithSpinner isLoading={isFetching} {...props} />}  />
            </div>
        )
     } 
}


export default connect(mapStateToProps,mapDispatchToProps)(Shoppage);