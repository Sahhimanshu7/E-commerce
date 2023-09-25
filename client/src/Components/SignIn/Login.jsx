import { useState } from "react";
import LoginUser from "./LoginUser";
import LoginSeller from "./LoginSeller";

const Login = () =>{
    const [isLoginUser, setIsLoginUser] = useState(false);
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    function loginUserSelect(){
        setIsLoginUser(true);
        setIsOptionSelected(true);
    }
    function loginSellerSelect(){
        setIsLoginUser(false);
        setIsOptionSelected(true);
    }

    return(
        <>
        {isOptionSelected ? 
        <>
        {isLoginUser ? 
            <div className="login-user">
                <LoginUser />
            </div>
            :
            <div className="login-seller">
                <LoginSeller />
            </div>
            }
        </>
        :
        <div className = "login">
            <button onClick={loginUserSelect}>
                Login as user
            </button>
            <button onClick={loginSellerSelect}>
                Login as seller
            </button>
        </div>
        }
        </>
    )
}

export default Login;