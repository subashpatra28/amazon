import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className="checkout__ad"
                    src="https://dkemhji6i1k0x.cloudfront.net/000_clients/489816/page/489816udYiX0wU.jpg"
                    alt=""
                />
                <div>
                    <h4 className='checkout__greeting'>
                        Hello, {user ? user?.email : 'Guest please sign in to checkout!'}
                    </h4>
                    <h2 className="checkout__title">
                        {basket.length ? 'Your Shopping Basket' : 'Your Shopping Basket is empty.'}
                    </h2>
                    {
                        basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="checkout__subtotal">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout