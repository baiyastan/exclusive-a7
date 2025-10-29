import React, {useState, useEffect} from 'react'
import Banner from '../components/Banner/Banner'
import ProductList from '../components/ProductList/ProductList'
import { apiClient } from '../axios/apiClient'

function Home() {
  const [product, setProduct] = useState([])

  async function getProduct() {
    try {
      const res = await apiClient.get("/products")
      console.log(res);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getProduct()
  }, [])
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  )
}

export default Home
