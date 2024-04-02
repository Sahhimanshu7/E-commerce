import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const createProduct = () => {
  const { currentUser, PORT } = useAuth();

  if(!currentUser) {
    return <Navigate to="/" />
  }

  const [selectedImage, setSelectedImage] = useState();
  const [productName, setproductName] = useState("");
  const [brand, setbrand] = useState("");
  const [originalPrice, setoriginalPrice] = useState();
  const [finalPrice, setfinalPrice] = useState();
  const [sellerName, setsellerName] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState([]);
  const [ageGroup, setageGroup] = useState([]);

  const createdBy = currentUser.data.email;

  const country = currentUser.data.country;

  const options = [
    { value: '1-13', label: '1-13' },
    { value: '13-18', label: '13-18' },
    { value: '19-25', label: '19-25' },
    { value: '26-40', label: '26-40' },
    { value: '41-', label: '41-' },
    { value: 'all', label: 'all'}
  ];

  const catOptions = [
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Cosmetics and body care', label: 'Costemics and body care' },
    { value: 'Food and beverage', label: 'Food and beverage' },
    { value: 'Health and wellness', label: 'Health and wellness' },
    { value: 'Household items', label: 'Household items' },
    { value: 'Media', label: 'Media' },
    { value: 'Petcare', label: 'Petcare' },
    { value: 'Office equipment', label: 'Office equipment' }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault();

    let ageGroupArray = [];
    ageGroup.map(elem => {
      ageGroupArray.push(elem.value);
    });

    try {
      const productUpload = await axios.post(`${PORT}/api/products/create-product`, {
        productName: productName,
        brand: brand,
        originalPrice: originalPrice,
        finalPrice: finalPrice,
        sellerName: sellerName,
        description: description,
        category: category,
        ageGroup: ageGroupArray,
        country: country,
        createdBy: createdBy
      });
      if (selectedImage) {
        await imageUpload(productUpload);
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  const imageUpload = async (productUpload) => {
    const contentType = {
      headers: { "content-type": "multipart/form-data" }
    };
    const imageUpload = await axios.put(`${PORT}/api/products/upload-image`, {
      image: selectedImage,
      _id: productUpload.data._id
    }, 
    contentType)
  }

  const animatedComponents = makeAnimated();

  return (
    <section className='md:m-4 m-2 overflow-x-hidden w-full'>
      <div>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center md:-translate-x-16'>Create a new product for sale.</h1>
      </div>
      <div className='md:relative left-[20vw] my-8 w-[90vw]'>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>

              {selectedImage ? (
                <div>
                  <CloseIcon className='text-white relative top-10 left-52' sx={{ fontSize: 35 }}
                  onClick={() => setSelectedImage(null)}
                  />
                  <img
                    alt="not found"
                    accepts="image/*"
                    width={"250px"}
                    src={URL.createObjectURL(selectedImage)}
                    className="rounded-lg"
                  />
                </div>
              ) :
              (
                <div>
                  <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                      setSelectedImage(event.target.files[0]);
                    }}
                  />
                </div>
              )
              }
              
            </div>
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
              <p className="block mb-2 text-sm font-medium text-gray-900">Select Age Groups</p>
              <Select 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full md:w-[600px] p-2.5 outline-none" required={true}
                options={options} 
                components={animatedComponents}
                isMulti
                onChange={(e) => setageGroup(e)}
              />
            </div>
            <div>
              <p className="block mb-2 text-sm font-medium text-gray-900">Category</p>
              <Select 
                required={true}
                options={catOptions} 
                onChange={e => setcategory(e.value)}
              />
            </div>
            <div>
              <button type='submit' className="w-full md:w-[600px] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create</button>       
            </div>
            
          </form>
      </div>
      <div>
        <button className="md:relative left-[20vw] w-[90vw] md:w-[600px] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Cancel</button>
      </div>
    </section>
  )
}

export default createProduct