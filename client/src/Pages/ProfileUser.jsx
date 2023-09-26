import { useState } from 'react';
import axios from 'axios';

const ProfileUser = () =>{
    const [image, setImage] = useState("");
    function convertToBase64(e){
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage(reader.result);
            axios.post("/api/auth/login/user", {
                profileImage:Image
            })
        };
        reader.onerror = error => {
            console.log("Error",error);
        };
    }
    return(
        <div className="profile-user">
            <div className="right-side">
                <input 
                    accept="image/*"
                    type="file"
                    onChange={convertToBase64}
                />
                {image === "" || image === null ? "" : <img width={100} height={100} src={image} alt=''/>}
                
            </div>
            <div className="left-side">

            </div>
        </div>
    )
}

export default ProfileUser;