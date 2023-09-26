import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const LoginUser = () =>{
    const navigate = useNavigate();
    const {register,handleSubmit} = useForm();

    const onSubmit = (e) =>{

        // Make a post request to the /api/auth/login/user
        const userID = e.userID;
        const password = e.password;

        axios.post("/api/auth/login/user", {
            userID : userID,
            password : password
        })
        .then((response) => {
            console.log(response.data);
            localStorage.setItem('loggedInUserName', response.data.firstName);
            localStorage.setItem('loggedInUserCountry',response.data.country);
            localStorage.setItem('isUserLoggedIn', true);
            localStorage.setItem('loggedInUserID',response.data.userID);
            navigate('/');
        }).catch(e => {
            console.log(e);
        });
       

    }
    
    return(
        <div className="login-user-form">
            <div className="form-header">
                <h1>Log - In for User Account</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input {...register("userID",
                { required:"Please enter your user id"})} className="enter" placeholder ="Username......."/>
                <input {...register("password",
                {required:"Please enter your password."})} type="password" className="enter" placeholder="Password........"/>
                <input type="submit" value="Login" className="submit"/>
            </form>
        </div>
    );
}
export default LoginUser;