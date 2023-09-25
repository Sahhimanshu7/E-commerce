import { useState } from 'react';
import Login from '../Components/SignIn/Login';
import SignUp from '../Components/SignIn/Signup';
import '../Components/SignIn/CSS/signIn.css';
import { Link } from "react-router-dom";

const SigIn = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [showLoginSignUp, setSowLoginSignUp] = useState(true);

    function loginClicked(){
        setIsLogin(true);
        setSowLoginSignUp(false);
    }
    function signupClicked(){
        setIsSignUp(true);
        setSowLoginSignUp(false);
    }
    return(
        <div className="main-box">
            <div className="left-side">
                <div className='left-header'>
                    <h1 className='first-word'>Welcome, </h1>
                    <h1 className='second-word'>to</h1>
                    <h1 className='third-word'>E-commerce.com</h1>
                </div>
            </div>
            <div className="right-side">
                {showLoginSignUp ? 
                <div className='login-signup'>
                    <button onClick={loginClicked}>
                        Login
                    </button>
                    <button onClick={signupClicked}>
                        Sign Up
                    </button>
                </div>
                :
                " "
                }
                <div className='login-user-seller'>
                    {isLogin ? 
                    <Login />
                :
                " "
                }
                </div>
                <div className='signup-user-seller'>
                    {isSignUp ? 
                    <SignUp />
                :
                " "
                }
                </div>
                <div>
                    <Link to='/'>
                    <button>Back to homepage</button>
                    </Link>
                </div>
            </div>

        </div>
    )
};

export default SigIn;