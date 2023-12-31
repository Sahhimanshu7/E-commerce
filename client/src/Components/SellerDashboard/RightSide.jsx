import axios from 'axios';
import {  useEffect, useState } from 'react';
import { v4 } from "uuid";
import {
    ref,
    uploadBytes,
    getDownloadURL
  } from "firebase/storage";
import { storage } from '../../firebase';

export const About = ({id, sellerProp}) =>{
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState();
    const [imageEdit, showImageEdit] = useState(false);
    
    console.log(sellerProp);
    
    useEffect(()=>{
      if(sellerProp){
        setImageUrls(sellerProp.profileImage);
      }
    },[])
    

    const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
        axios.put('/api/seller/uploadProfileImg/',{
          sellerID:id,
          profileImage: url
        }).then((res) => console.log(res))
        .catch((error)=>{ console.log(error)});
      });
    });
  };

  
 
    return(
        <div className="About">
            <div className='image-view'>
              <div className='profile-image'>
                <img src={imageUrls} alt = ' ' />
              </div>
              <button className='change-profile-image'>Edit</button>
            </div>
            <div className="image-upload">
                    <input
                type="file"
                onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                }}
              />
              <button onClick={uploadFile}> Upload Image</button>
      
            </div>
        </div>
    )
}

export const NewOrders = ({props}) =>{
    return (
        <div>New orders</div>
    )
}

export const CreateProduct = ({props}) =>{
    return(
        <div>Create Products</div>
    )
}

export const ProductsListed = ({props}) =>{
    return(
        <div>Products Listed</div>
    )
}

export const PendingOrders = ({props}) =>{
    return(
        <div>Pending Orders</div>
    )
}

export const ProductsSold = ({props}) =>{
    return(
        <div>Products sold</div>
    )
}