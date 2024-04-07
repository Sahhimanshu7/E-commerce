import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const { currentUser, PORT } = useAuth();

  const [products, setProducts] = useState([]);
  
  console.log(currentUser);
  if (!currentUser) {
    return <Navigate to="/login" />
  }

  useEffect(() => {
    const getProducts = async() => {
      try {
        const product = await axios.get(`${PORT}/api/products/load-homepage/${currentUser.data.country}/${currentUser.data.yearOfBirth}`);
        setProducts(product.data)
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();    
  },[])

  console.log(products);
  return (
    <div>
      {
        products.length > 0 ? (
          <div className="">
            {products.map((category, index) => (
              <div key={index} className="flex flex-wrap ml-2">
                {category.map((prod, keys) => (
                  <div key={keys} className="flex">
                    {!prod.productName && (
                      <div className="w-[100vw] text-gray-600 md:pl-0 pl-8">
                        {prod}
                        <br />
                      </div>
                    )
                    }
                    
                    {prod.productName && (
                      <div className=""> 
                        <div className="border p-2 w-[210px] m-2 rounded-lg bg-slate-200 shadow-xl md:ml-0 ml-20">
                          <div>
                            <img src={`${PORT}/api/products/show-image/${prod.photoURL}`} alt="Product Image" 
                            className="w-[180px] h-[180px] rounded-lg m-1"
                            />
                          </div>
                          <div>
                            <p>{prod.productName}</p>
                            <p>{prod.finalPrice}</p>
                            <p>{prod.brand}</p>
                            <p>{prod.sellerName}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )
        :
        (
        <p>Loading... </p>
        )
      }
    </div>
  )
}

export default Home