import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//helper
import { shorten, isInCart, quantityCount } from '../../helpers/functions';

//context
import { CartContext } from '../../context/CartContextProvider';

//icons
import trashIcon from '../../assets/icons/trash.svg'

//style
import styles from "./Product.module.css";

const Product = ({productDetails}) => {

const{state, dispatch}= useContext(CartContext)

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productDetails.image} style={{width: "200px"}} alt='product'/>
            <h3>{shorten(productDetails.title)}</h3>
            <p>{`${productDetails.price}$`}</p>
            <div className={styles.linkContainer}>
                <Link to={`/product/${productDetails.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                {quantityCount(state, productDetails.id) === 1 && <button className={styles.smallButton} onClick={()=> dispatch({type: "REMOVE_ITEM", payload: productDetails})}><img src={trashIcon} alt='trash' /></button>}
                {quantityCount(state, productDetails.id) > 1 && <button className={styles.smallButton} onClick={()=> dispatch({type: "DECREASE_ITEM", payload: productDetails})}>-</button>}
                {quantityCount(state, productDetails.id) > 0 && <span className={styles.counter}>{quantityCount(state, productDetails.id)}</span>}
                {isInCart(state, productDetails.id) ? 
                    <button className={styles.smallButton} onClick={()=> dispatch({type: "INCREASE_ITEM", payload: productDetails})}>+</button>:
                    <button onClick={()=> dispatch({type: "ADD_ITEM", payload: productDetails})}>Add to cart</button>}
                </div>
            </div>
        </div>
    );
};

export default Product;