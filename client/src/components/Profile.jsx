import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Profile = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div>Profile</div>
  )
}

export default Profile