import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

const AddToCart = () => {
  const cartSelector = useSelector((state) =>state.cart.items);
  console.log(cartSelector.length);
  return (
    <>
      {/* <h6> products-id pg</h6> */}
      <div className="cart">
        <Link to="/cartlist">
         <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" className="cart-icon" alt="cart" />
         <span className="cart-count">{cartSelector.length?cartSelector.length:0}</span>
        </Link>
     
    </div>
    </>
  )
}

export default AddToCart
