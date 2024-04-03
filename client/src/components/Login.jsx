import React, { useState } from 'react'
import { Navigate, Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import axios from "axios"

const Login = () => {
  const { currentUser, setCurrentUser, PORT } = useAuth();

  if (currentUser) {
    return <Navigate to="/" />;
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const user = await axios.post(`${PORT}/api/auth/user/login-user`, {
        email: email,
        password: password
      })
      setCurrentUser(user);
      return <Navigate to='/' />
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  return (
    <section className='w-[100vw] h-[85vh] lg:h-[95vh] flex-row overflow-hidden'>
      <div>
        {error && (
          <div className='rounded-lg md:w-[500px] bg-red-400'>
            <p className='text-center text-white'>Couldn't login Try Again</p>
          </div>
        )}
      </div>
      <div className='relative lg:top-[25vh] top-[20vh] lg:left-[30vw] left-[20vw] border-4 ring-slate-950 lg:w-[30vw] w-[60vw] p-4 rounded-lg shadow'>
        <div>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
            Sign in to your account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 pt-2">Your email.</label>
              <input type='email' name='email' id='email' 
              onChange={(e) => setEmail(e.target.value)}
              placeholder='yourname@organization.com' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none" required={true}/>
            </div>
            <div>
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input type='password' name='password' 
              onChange={(e) => setPassword(e.target.value)}
              placeholder='********' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none" required={true}/>
            </div>
            
            <div>
              <button type='submit' className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login</button>       
            </div>
            
          </form>
          <div className='my-4 lg:flex justify-between lg:mr-2'>
            <p className="text-sm font-light text-gray-500">Don't have an account yet?</p> 
            <Link to='/register'>
              <button className="font-medium text-primary-600 hover:underline">Sign Up</button>
            </Link>
             
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login