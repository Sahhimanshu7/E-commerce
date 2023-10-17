import { useState } from 'react';
import SignupSeller from './SignupSeller';
import SignupUser from './SignupUser';

const SignUp = () =>{
    const [isSignupUser, setIsSignupUser] = useState(false);
    const [isOptionSelected, setIsOptionSelected] = useState(false);

    function signupUserSelect(){
        setIsSignupUser(true);
        setIsOptionSelected(true);
    }

    function signupSeller(){
        setIsSignupUser(false);
        setIsOptionSelected(true);
    }
    return(
        <>
        {isOptionSelected ?
        <>
        {isSignupUser ? 
            <div className='signup-user'>
                <SignupUser />
            </div>
            :
            <div className='signup-seller'>
                <SignupSeller />
            </div>
        }
        </>
        :
        <div className = "signup">
            <button onClick={signupUserSelect}>
                Sign Up as user
            </button>
            <button onClick={signupSeller}>
                Sign Up as seller
            </button>
        </div>
        }
        </>
    )
}

export default SignUp;