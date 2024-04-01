import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const createProduct = () => {
  const { currentUser, PORT } = useAuth();

  if(!currentUser) {
    return <Navigate to="/" />
  }

  const [productName, setproductName] = useState("");
  const [brand, setbrand] = useState("");
  const [originalPrice, setoriginalPrice] = useState();
  const [finalPrice, setfinalPrice] = useState();
  const [sellerName, setsellerName] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState([]);
  const [ageGroup, setageGroup] = useState([]);
  const [country, setcountry] = useState("");

  const createdBy = currentUser.data.email;

  return (
    <section className='m-4'>
      <div>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center'>Create a new product for sale.</h1>
      </div>
      <div className='md:relative left-[20vw] my-8'>
        <form className="space-y-4 md:space-y-6">
            <div>
              <label for="productName" className="block mb-2 text-sm font-medium text-gray-900 pt-2">Name of the product.</label>
              <input type='text' name='productName' id='productName' placeholder='Name' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[600px] p-2.5 outline-none" required={true}
              onChange={(e) => setproductName(e.target.value)}
              />
            </div>
            <div>
              <label for="brand" className="block mb-2 text-sm font-medium text-gray-900">Brand Name</label>
              <input type='text'
              onChange={(e) => setbrand(e.target.value)}
              name='brand' placeholder='Brand name' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[600px] p-2.5 outline-none" required={true}/>
            </div>
            <div>
              <label for="finalPrice" className="block mb-2 text-sm font-medium text-gray-900">Final Price</label>
              <input type='number' name='finalPrice' placeholder='$' 
              onChange={(e) => setfinalPrice(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[600px] p-2.5 outline-none" required={true}/>
            </div>
            <div>
              <label for="originalPrice" className="block mb-2 text-sm font-medium text-gray-900">Original Price (optional)</label>
              <input type='number' name='originalPrice' placeholder='$' 
              onChange={(e) => setoriginalPrice(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[600px] p-2.5 outline-none" required={false}/>
            </div>
            <div>
              <label for="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
              <textarea type='text' name='description' placeholder="Description" 
              onChange={e => setdescription(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[600px] p-2.5 outline-none" required={true}/>
            </div>
            <div>
              <label for="sellerName" className="block mb-2 text-sm font-medium text-gray-900">Name of the Seller.</label>
              <input type='text' name='sellerName' placeholder="John Doe" 
              onChange={e => setsellerName(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[600px] p-2.5 outline-none" required={true}/>
            </div>
            <div>
              <button type='submit' className="w-full md:w-[600px] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create</button>       
            </div>
            
          </form>
      </div>
      <div>
        <button className="md:relative left-[20vw] w-full md:w-[600px] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</button>
      </div>
    </section>
  )
}

export default createProduct