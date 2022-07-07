import React from 'react'
import ProductCard from '../components/products/ProductCard'

const CartScreen = ({cart, updateCart}) => {
    
    let totalCartPrice = 0
    cart.forEach(product => {
        totalCartPrice += Number(product.item_price)
    })

    return (
        <div className="cart-wrapper page">
            <div className="cart-product-container">
                {cart.map((product, index) => <ProductCard updateCart={updateCart} index={index} product={product} onCart={true}/>)}
            </div>
            <div className="cart-total-container">
                <h2>Total Item Amount: {cart.length}</h2>
                <h1>Total Cart Price: ${totalCartPrice.toFixed(2)}</h1>
            </div>
        </div>
    )
}

export default CartScreen