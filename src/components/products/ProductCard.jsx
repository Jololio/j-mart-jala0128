import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product, onCart, index, updateCart}) => {

  return (
    <div style={styles.productWrapper}>
        <img src={product.img_url} style={styles.productImage} alt={product.item_name}/>
        <div>
            <h2>{product.item_name}</h2>
            <Link to={`/product-page/${product.item_id}`} state={{product}}>
              <button>View Item</button>
            </Link>
            {onCart && <button onClick={() => {
                let cart = JSON.parse(localStorage.getItem('cart'))
                cart.splice(index, 1)
                localStorage.setItem('cart', JSON.stringify(cart))
                updateCart(cart)
              }}>X</button>}
        </div>
    </div>
  )
}

const styles = {
  productImage: {
    width: 200,
  },
  productWrapper: {
    padding: 20,
    height: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  }
}

export default ProductCard