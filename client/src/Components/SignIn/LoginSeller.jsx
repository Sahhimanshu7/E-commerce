import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const LoginSeller = () =>{
    const navigate = useNavigate();
    const {register,handleSubmit} = useForm();
    const onSubmit = (e) =>{
         // Make a post request to the /api/auth/login/user
         const userID = e.userID;
         const password = e.password;
 
         axios.post("/api/auth/login/seller", {
             userID : userID,
             password : password
         })
         .then((response) => {
             navigate('/');
         }).catch(e => {
             console.log(e);
         });
        
    }
    return(
        <div className="login-user-form">
            <div className="form-header">
                <h1>Log - In for Seller Account</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input {...register("userID",
                { required:"Please enter your user id"})} className="enter" placeholder = "Username......."/>
                <input {...register("password",
                {required:"Please enter your password."})} type="password" className="enter" placeholder = "Password......."/>
                <input type="submit" value="Login" className="submit"/>
            </form>
        </div>
    );
}
export default LoginSeller;