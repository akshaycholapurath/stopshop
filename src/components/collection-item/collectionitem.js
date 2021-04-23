import React from 'react';
import './collectionitem.styles.scss';
import CustomButton from '../custombutton/custombutton';
import { addItem } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch=>({
    addItem : item=> dispatch(addItem(item))
})



const CollectionItem = ({item,addItem})=>{
    const {name,imageUrl,price} = item;

    return(
        <div className="collection-item">
            <div className="image"
                style={{backgroundImage:`url(${imageUrl})`}} >
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton 
                onClick={()=>addItem(item)}
                className="custom-button" 
                inverted>
                    ADD TO CART
                </CustomButton>         
        </div>
    )
}

export default connect(null,mapDispatchToProps)(CollectionItem);

