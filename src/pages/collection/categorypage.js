import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selector';
import CollectionPage from './collectionpage';
import WithSpinner from '../../components/spinner/withspinner';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const mapStateToProps = state=>({
    isCollectionLoaded: selectIsCollectionLoaded(state)
})

const mapDispatchToProps = dispatch =>({
    updateCollections: ()=> dispatch(fetchCollectionsStartAsync())
})


class CategoryPage extends React.Component{

    componentDidMount(){
        this.props.updateCollections()    
    }

    render(){
        const {match,isCollectionLoaded} = this.props;
        return(
            <Route path={`${match.path}`} render={(props)=><CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryPage);