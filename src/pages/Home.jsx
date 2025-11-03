import React, {useState, useEffect} from 'react'
import Banner from '../components/Banner/Banner'
import ProductList from '../components/ProductList/ProductList'
import { apiClient } from '../axios/apiClient'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../redux/thunk/thunk'

function Home() {

  const {items, loading, error} = useSelector((state) => state.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct())
  }, [])

  console.log(items);
  
  return (
    <div>
      <Banner />
      <ProductList />
      
    </div>
  )
}

export default Home
