import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <>
    <div className='container'>
      <div className="section" style={{ textAlign: 'center', padding: '50px' }}>
      <h1 className="title">Welcome to E-Commerce Store</h1>
      <p className="subtitle">Your one-stop shop for amazing products</p>
      <button className='browse_btn' onClick={() => window.location.href = '/products'}>
        Browse Products
      </button>
    </div>
    </div>
    </>
  )
}

export default Home
