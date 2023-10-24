import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import '../Components/SellerDashboard/sellerdashboard.css'
import { useState } from 'react'
import { About, CreateProduct, NewOrders, PendingOrders, ProductsListed, ProductsSold } from '../Components/SellerDashboard/RightSide';

export default function SellerDashboard({props}) {
    const [option, setOption] = useState('about');
    const [seller, setSeller] = useState()

    const {id} = useParams(); 

    async function getSeller(){

    try {
        await axios.post('/api/seller/getSeller/',{
            sellerID:id
        }).then(e => setSeller(e.data))
        .catch(error => console.log(error));
    } catch (error) {
        console.log(error);
    }
    }
    getSeller();
    const RenderFunction = () =>{
        if(option === "about"){
            return <About id={id} sellerProp = {seller}/>
        }else if(option === "newOrders"){
            return <NewOrders />
        }else if(option === "createProduct"){
            return <CreateProduct />
        }else if(option === "productsListed"){
            return <ProductsListed />
        }else if(option === "pendingOrders"){
            return <PendingOrders />
        }else if(option === "productsSold"){
            return <ProductsSold />
        }
        else{
            return "Error";
        }
    }
        useEffect(()=>{
            
        },[option])
  return (
    <div className='seller-dashboard'>
        <div className='left-side-sd'>
            <h1>Dashboard</h1>
            <button onClick={(e)=> setOption("about")}>About</button>
            <button onClick={(e) => setOption("newOrders")}>New orders</button>
            <button onClick={(e)=> setOption("createProduct")}>Create a new product</button>
            <button onClick={(e)=> setOption("productsListed")}>Products Listed</button>
            <button onClick={(e)=>setOption("pendingOrders")}>Pending Orders</button>
            <button onClick={(e)=>setOption("productsSold")}>Products Sold</button>
        </div>
        <div className='right-side-sd'>
            <RenderFunction />
        </div>
    </div>
  )
}
