import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { clearAllItem, removeItem } from './redux/slice'
import { useNavigate } from 'react-router-dom'
const CartList = () => {
    const cartSelector = useSelector((state)=>state.cart.items)
    console.log(cartSelector);
    const [cartItems,setCartItems] = useState(cartSelector)
    useEffect(()=>{
        setCartItems(cartSelector)
    },[cartSelector])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const manageQty =(id, q)=>{
        // console.log(id,q);
        let quantity = parseInt(q) > 1 ? parseInt (q): 1
        const cartTempItm = cartSelector.map((item)=>{
            return item.id == id?
            {...item,quantity}:item
        })
        // console.log(cartTempItm[0]);
        setCartItems(cartTempItm)

    }
    const handlePlaceOrder =()=>{
        localStorage.clear();
        dispatch(clearAllItem());
        alert("Order Placed");
        navigate("/products")
        // navigate("/")
    }

return(<>
        <div className="cart-container">
            <div className="cart-header">
                <h2>Your Cart Items</h2>
                <span>{cartItems.length} items</span>
            </div>
            {
                cartItems.length > 0 ? cartItems.map((item)=>(
                    <div key={item.id} className='cart-item'>
                      <div className="item-info">
                        <img src={item.images[0]} style={{width:"100px"}} />
                        <div className='item-details'>
                            <h4>{item.title}</h4>
                            {/* <p>{item.name}</p> */}
                        </div>
                      </div>
                      <div className='item-action'>
                        <div style={{display:"flex"}}>
                            <input onChange={(e)=>manageQty(item.id,e.target.value)} value={item.quantity?item.quantity:1}    type="number" placeholder='Enter Qty' style={{margin:"15px"}} />
                            <div>
                            <span className='price'>
                            ${(item.quantity?item.price * item.quantity:item.price).toFixed(2)}
                            </span>
                            <button  onClick={()=>dispatch(removeItem(item))} className='cl-btn'>Remove</button>
                            </div>
                        </div>
                      </div>
                    </div>
                )) 
                : null
            }
            <div className='cart-txt'  style={{color:"#000"}}>
                Total : ${(cartItems.reduce((sum,item)=>item.quantity? sum + item.price*item.quantity : sum+item.price,0)).toFixed(2) }
            </div>
            <button  onClick={handlePlaceOrder} className='btn-PO'>Place Order</button>
        </div>

 </>
)}

export default CartList
