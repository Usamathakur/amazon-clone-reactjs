import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';

import Subtotal from './Subtotal'
import {useStateValue} from "./StateProvider";

function Checkout(){
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" 
                src="https://blog.optimizely.com/wp-content/uploads/2014/01/Original-Sony-banner.jpg" 
            alt=""></img>
            {basket?.length === 0 ? (
                <div>
                    <h2>Shopping Basket is Empty</h2>
                    <p>You have no items in the basket!</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket?.map(item => (
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        
                        />
                    ))}
                    
                </div>
            )}
            </div>
             {basket.length > 0 && (
                 <div className="checkout__right">
                     <h1>Subtotal</h1>
                     <Subtotal/>
                 </div>
             )}               
        </div>
    )
}
export default Checkout;