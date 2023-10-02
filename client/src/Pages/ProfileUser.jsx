import React, { useState } from "react";
import axios from "axios";

const ProfileUser = () =>{
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) =>{
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', selectedFile); 
        const userID = localStorage.getItem("loggedInUser_id");

        // try {
        //     // Send formData to server for processing
        //     const response = await axios.put(`/api/user/images/profileImage/:${userID}`,formData);
        //     console.log("Image uploaded successfully: ",response.data);
        // }catch(error){
        //     console.log('Error uploading image: ',error);
        // }
        try {
            // Send formData to server for processing
            const response = await axios.post(`/api/user/images/profileImage/${userID}`,formData);
            console.log("Image uploaded successfully: ",response.data);
        }catch(error){
            console.log('Error uploading image: ',error);
        }
    };

    return(
        <div className="profile-user">
            <div className="right-side">
                <form onSubmit = {handleSubmit}>
                    <input type = "file" accept="image/*" onChange={handleFileChange}/>
                    <button type="submit">Upload</button>
                </form> 
               
            </div>
            <div className="left-side">

            </div>
        </div>
    )
}

export default ProfileUser;