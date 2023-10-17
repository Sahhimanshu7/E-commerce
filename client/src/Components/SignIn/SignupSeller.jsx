import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function SignupSeller() {
    const {register, handleSubmit} = useForm();

    const onSubmit = (e) =>{
        const firstName = e.firstName;
        const lastName = e.lastName;
        const companyName = e.companyName;
        const sellerID = e.sellerID;
        const password = e.password;
        const companyEmail = e.companyEmail;
        const country = e.country;
        const description = e.description;

        axios.post('/api/auth/signup/seller',{
            firstName:firstName,
            lastName:lastName,
            companyName: companyName,
            companyEmail:companyEmail,
            sellerID: sellerID,
            password: password,
            country: country,
            description: description
        }).then((response) =>{
            console.log(response);
        }).catch(e =>{
            console.log(e);
        })
    }
  return (
    <div className='signup-seller-form'>
        <div className='form-header'>
            <h1>Sign-Up for seller Account</h1>
        </div>
        <form onSubmit = {handleSubmit(onSubmit)} className = "form-signup">
            <input {...register("firstName",
            {required:"PLease enter your first name"})} className='enter' placeholder='first name' />
            <input {...register("lastName",
            {required:"PLease enter your last name"})} className='enter' placeholder='last name' />
            <input {...register("companyName",
            {required:"PLease enter your company name"})} className='enter' placeholder='Company name' />
            <input {...register("companyEmail",
            {required:"PLease enter your company email"})} className='enter' type='email' placeholder='Company email' />
            <input {...register("sellerID",
            { required:"Please enter your seller id"})} className="enter" placeholder = "Create seller ID"/>
            <input {...register("password",
            {required:"Please enter your password."})} type="password" className="enter" placeholder = "Password......."/>
            <input {...register("country",
            {required:"PLease enter your country"})} className='enter' placeholder='Country of recidency' />
            <input {...register("description",
            {required:"PLease enter your description"})} className='desc enter' placeholder='Description(short)' />
    
            <input type="submit" value="Sign Up" className="submit submit-signup"/>
        </form>
    </div>
  )
}
