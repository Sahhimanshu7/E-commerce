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
          <div >
            {products.map((category, index) => (
              <div key={index}>
                {category.map((prod, keys) => (
                  <div key={keys}>
                    {prod.productName}
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

// products.length > 0 && 
//         products[0].map((p) => {
//           console.log(p);
//         })