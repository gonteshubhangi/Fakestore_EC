import React from 'react'
import './Navbar.css'

import { NavLink ,Link,useNavigate} from 'react-router-dom'
import AddToCart from './AddToCart'
const Navbar = () => {
  const navigate= useNavigate()

  const handlelogout=()=>{
    localStorage.removeItem('login');
    navigate('/login');
  }
  return (
    <>
    <header className='header'>
      <div className='container'>
    <div className='logo'><span>Shopi</span></div>
    <nav className='nav'>
        <ul className=''>
            <li className=""><NavLink to ="/" >Home</NavLink></li>
           
             {/* <li className=''><NavLink to ="/">Electronics</NavLink></li> */}
             {/* <li className='list'><Link to ="/">Furnitures</Link></li> */}
              {/* <li className='list'><NavLink to ="/">Toys</NavLink></li>  */}
            {/* <li className=''><NavLink to ="/dashboard">dashboard</NavLink></li> */}
            <li className=''><Link to ="/products">Products</Link></li>   
           
            <li className=''><Link to ="/cartlist">My Orders</Link></li>   
             <li className=''><Link to ="/myaccount">My Account</Link></li>    
        </ul>
    </nav>  
     <div className='action-nav'>
      <button className='logout_btn' onClick={handlelogout} style={{padding:"7.5px", borderRadius:"7px",outline:"5px" ,border:"none",background:"lightgrey",color:"white"}}>Logout</button>
    </div>
        <AddToCart/>

    </div>
   </header>
    </>
  )
}

export default Navbar

