import ShopActionTypes from './shop.types';
import {firestore,converCollectionSnapshotToMap} from '../../firebase/firebase.util';


export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionFailure = error =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
})

export const fetchCollectionsStartAsync = ()=> {
    return dispatch=>{

        const collectionRef = firestore.collection('collections');

        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot=>{
            const collectionsMap = converCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionsMap))   
        }).catch(error=> dispatch(fetchCollectionFailure(error.message)))
    }
}