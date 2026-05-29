import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Protected =(props) =>{
    const { Cmp } = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
    //------ console.log("Protected check - login:", login);  

        if(!login) {
    //---- console.log("No login, redirecting to /login");  

            navigate('/login')
        }
    });
    return(
        <div>
            <Cmp/>
        </div>
    )
}
export default Protected