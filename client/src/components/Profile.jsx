import { Link, Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import axios from "axios";
import { useState } from "react";

const Profile = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const [imageURL, setImageURL] = useState("");

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  const country = currentUser.data.country;

  const getCountryFlag = async (country) => {
    await axios.get(`https://restcountries.com/v3.1/name/${country}`)
      .then(e => {
        setImageURL(e.data[0].flags.png)
      });
  }

  getCountryFlag(country);
  
  const handleLogout = (e) => {
    setCurrentUser(null);
    return <Navigate to="/" />;
  }

  return (
    <section className="bg-gray-200 h-full m-2 rounded-lg p-2 space-y-4">
      <div className="md:flex md:justify-between mx-2">
        <div>
          <p className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">Welcome, {currentUser.data.name}</p>
          <p className="my-3 text-[20px]">Location : {country.toUpperCase()} <img src={imageURL} className="w-[20px] h-[20px] inline-block"/></p> 
        </div>
        <div className="flex justify-between align-top mx-4">
          <div className="md:mx-8">
            <button
            onClick={(e) => handleLogout(e)}
            className="font-medium text-white border-2 border-blue-400 p-2 bg-blue-700 rounded-2xl outline-none"
            >Logout</button>
          </div>
          
          <div>
            <Link to='/create-product'>
              <button
              className="font-medium text-white border-2 border-blue-400 p-2 bg-blue-700 rounded-2xl outline-none"
              >Add Product to sell</button>
            </Link>
            
          </div>
        </div>
      </div>
      <div>
        Products Bought
      </div>
      <div>
        Products Sold
      </div>
      <div>
        Bought in progress
      </div>
      <div>
        Sold in Progress
      </div>
    </section>
  )
}

export default Profile