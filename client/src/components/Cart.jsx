import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Cart = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div>Cart</div>
  )
}

export default Cart