import { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import './login.css'
const Login = () => {
  const navigate = useNavigate()
    const login=()=>{
          //----- console.log("Login button clicked");  

        localStorage.setItem('login', true)
            // -----console.log("Login set to:", localStorage.getItem('login'));  

        navigate('/')
    }
    useEffect(()=>{
        let isLogin = localStorage.getItem('login');
            // -----console.log("Checking login status:", isLogin);  

        if(isLogin){
            navigate('/')
        }

    },[navigate])

  return (<>

    <div className="login">
      <form onSubmit={(e) => e.preventDefault()} className="login_form">
        <h3 style={{marginBottom:"10px"}}>Login Form</h3>
       <input  className="login_input" type="text" placeholder="Username"/><br></br>
       <input className="login_input" type="text" placeholder="******"/> <br></br>
       <button className="login_btn" type="button" onClick={login}>Login</button>      
      </form>
    </div>
    </>
  )
}

export default Login
