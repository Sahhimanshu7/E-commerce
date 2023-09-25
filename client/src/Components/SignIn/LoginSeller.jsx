import { useForm } from "react-hook-form";

const LoginSeller = () =>{
    const {register,handleSubmit} = useForm();
    const onSubmit = (d) =>{
        alert(JSON.stringify(d));
    }
    return(
        <div className="login-user-form">
            <div className="form-header">
                <h1>Log - In for Seller Account</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input {...register("userID",
                { required:"Please enter your user id"})} className="enter"/>
                <input {...register("password",
                {required:"Please enter your password."})} type="password" className="enter"/>
                <input type="submit" value="Login" className="submit"/>
            </form>
        </div>
    );
}
export default LoginSeller;