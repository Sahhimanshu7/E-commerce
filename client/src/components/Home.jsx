import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Home = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />
  }

  return (
    <div>Home</div>
  )
}

export default Home