import React,{ useContext} from 'react';
import { Link } from 'react-router-dom';

//context
import { CartContext } from '../context/CartContextProvider';

//component
import Cart from './shared/Cart';

//styles
import styles from "./ShopCart.module.css"

const ShopCart = () => {
    const{state , dispatch}= useContext(CartContext);

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
            {state.selectedItems.map(item=> <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemsCounter > 0 &&
                <div className={styles.payments}>
                    <p><span>Total Items: </span>{state.itemsCounter}</p>
                    <p><span>Total Payments: </span>{state.total} $</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={()=> dispatch({type: "CHECKOUT"})}>check out</button>
                        <button className={styles.checkout} onClick={()=> dispatch({type: "CLEAR"})}>clear</button>
                    </div>
                </div>
            }

            {
            !state.checkout && state.itemsCounter === 0 &&
                <div className={styles.complete}>
                <h3>Want to Buy?</h3>
                <Link to='/products'>Go to shop</Link>
            </div>
            }
            
            {
            state.checkout && <div className={styles.complete}>
                <h3>Checked Out Successfully!</h3>
                <Link to='/products'>Buy More</Link>
            </div>
            }
            
        </div>
    );
};

export default ShopCart;