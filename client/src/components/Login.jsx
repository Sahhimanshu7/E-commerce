import React, { useState } from 'react'
import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const { currentUser, setCurrentUser } = useAuth();

  if (currentUser) {
    return <Navigate to="/" />;
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted ! " + email + password);
  }

  return (
    <section className='w-[100vw] h-[85vh] bg-black lg:h-[95vh] m-0'>
      <div className=''>
        <div>
          <h1>
            Sign in to your account
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label for="email">Your email.</label>
              <input type='email' name='email' id='email' />
            </div>
            <div>
              <label for="password">Password</label>
              <input type='password' name='password' placeholder='********' />
            </div>
            <div>
              <button type='submit'>Login</button>       
            </div>
            <div>
                <p>Don't have an account yet?</p> 
                <button>Sign Up</button> 
              </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login