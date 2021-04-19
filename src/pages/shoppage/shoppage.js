import React,{Component} from 'react';
import './shoppage.styles.scss';
import{ SHOP_DATA} from './shopdata';
import CollectionPreview from '../../components/preview-collection/preview-collection';



class Shoppage extends Component {
    constructor(props){
        super(props);
        this.state={
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className='shoppage'>
                <h1>Collections</h1>
                {
                    collections.map(({id,...otherprops })=>(
                            <CollectionPreview  key={id} {...otherprops} />
                    ))
                }            
            </div>

        )
    }
}


export default Shoppage;