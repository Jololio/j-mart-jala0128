import React from 'react'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = ({updateCart}) => {
    const { product } = useLocation().state

    return (
    <div style={styles.productWrapper} className="page">
        <div style={styles.imgWrapper}>
            <img style={styles.img} src={product.img_url} alt={product.item_name}/>
        </div>
        <div className="product-info-wrapper">
            <h1 style={styles.productName}>{product.item_name}</h1>
            <h2 style={styles.productMeta(true)}>${product.item_price}</h2>
            <h2 style={styles.productMeta(false)}>Product Description:</h2>
            <p>{product.item_desc}</p>
            <button onClick={()=>{
                let cart = JSON.parse(localStorage.getItem('cart'))
                cart.push(product)
                localStorage.setItem('cart', JSON.stringify(cart))
                updateCart(cart)
                toast.success("Product has been added to cart!")
        }}>Add to Cart!</button>
        </div>
    </div>)
}

const styles = {
    productWrapper: { 
        marginTop: 40,
        display: "flex",
        flexDirection: "row",
    },
    imgWrapper: {
        height: "400px",
        marginRight: "20px",
        marginLeft: "10px" 
    },
    img: { height: "100%" },
    productName: { fontSize: "28px" },
    productMeta: (isGreen) => ({ 
        fontSize: "22px",
        color: isGreen ? "green" : "inherit"
 })
}

export default ProductPage