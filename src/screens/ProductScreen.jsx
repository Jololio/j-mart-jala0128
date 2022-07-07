import React,{useEffect, useState} from 'react'
import axios from 'axios'
import ProductCard from '../components/products/ProductCard'

const ProductScreen = () => {
    const [allProducts, setAllProducts] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const getData = () => {
        axios
            .get(`http://localhost:6969/allItems`)
            .then((res) => setAllProducts(res.data))
    }

    const searchFilter = () => {
        let filteredArr = allProducts.filter((elem) => {
            return (
                elem.item_name.toLowerCase().includes(searchInput.toLocaleLowerCase())
            )
        })
        setAllProducts(filteredArr)
      }

    useEffect(()=>{
        getData()
    }, [])

  return (
    <div className="products_wrapper page">
        <div className='searchbar'>
            <input placeholder={"Search for products here!"} onChange={(e) => setSearchInput(e.target.value)} value={searchInput}/>
            <button onClick={searchFilter}>Search</button>
            <button onClick={() => {
                getData()
                setSearchInput('')
            }}>Clear</button>
        </div>
        <div style={styles.productWrapper}>
            {
                allProducts.map((product, index)=>{
                    return <ProductCard product={product} onCart={false} key={index}/>
                })
            }
        </div>
    </div>
  )
}

const styles = {
    productWrapper: {
    display: "flex"
  }
}

export default ProductScreen