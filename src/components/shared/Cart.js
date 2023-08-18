import React, { useContext} from 'react';

//context
import { CartContext } from '../../context/CartContextProvider';

//helper
import { shorten } from '../../helpers/functions';

//icons
import trashIcon from '../../assets/icons/trash.svg';

//style
import styles from "./Cart.module.css"
const Cart = (props) => {
    const{title, price, quantity, image} = props.data;
    const{dispatch} = useContext(CartContext);

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt='product' />
            <div className={styles.data}>
                <h5>{shorten(title)}</h5>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {quantity === 1 ?
                 <button onClick={()=> dispatch({type: "REMOVE_ITEM", payload: props.data})}><img src={trashIcon} alt='trash' width={"20px"} /></button>:
                 <button onClick={()=> dispatch({type: "DECREASE_ITEM", payload: props.data})}>-</button>
                }
                <button onClick={()=> dispatch({type: "INCREASE_ITEM", payload: props.data})}>+</button>
            </div>
                
        </div>
    );
};

export default Cart;