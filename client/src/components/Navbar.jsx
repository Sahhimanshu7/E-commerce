import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <nav className='bg-blue-600 border rounded-lg w-full m-x-10 m-y-10 flex px-10 py-2 justify-between'>
      <Link to="/">
        <h1 className='text-lg text-white font-mono font-extrabold'>E-Commerce</h1>
      </Link>
      <div className='lg:flex justify-between lg:w-[30vw] hidden
      '>
        <Link to="/" className='flex justify-center'>
          <HomeIcon className='text-white'/>
          <p className='text-[16px] font-mono text-white'>Home</p>
        </Link>
        <Link to="#" className='flex'>
          <ShoppingCartIcon className='text-white'/>
          <p className='text-[16px] font-mono text-white'>Cart</p>
        </Link>
        <Link to="#" className='flex'>
          <ManageAccountsIcon className='text-white'/>
          <p className='text-[16px] font-mono text-white'>Account</p>
        </Link>
      </div>
      {!mobileNav && 
      <div className='lg:hidden'>
        <button 
          onClick={(e) => {
            setMobileNav(true);
          }}
        >
          <MenuIcon className='text-white' sx={{ fontSize: 25 }}/>
        </button>    
      </div>
}
      {mobileNav && 
      <div className='lg:hidden flex-row absolute ring-6 p-10 bg-slate-900 bg-opacity-85 w-full h-full top-0 left-0 justify-center'>
        <button
          onClick={(e) => {
            setMobileNav(false);
          }}
        >
          <CloseIcon className='text-white absolute top-3 right-8' sx={{ fontSize: 35 }}/>
        </button> 
        <Link to="/" className='flex justify-center w-full my-4 mt-20'>
          <HomeIcon className='text-white' sx={{ fontSize: 35 }}/>
          <p className='text-[25px] font-mono text-white mx-4'>Home</p>
        </Link>
        <Link to="#" className='flex justify-center w-full my-4'>
          <ShoppingCartIcon className='text-white' sx={{ fontSize: 35 }}/>
          <p className='text-[25px] font-mono text-white mx-4'>Cart</p>
        </Link>
        <Link to="#" className='flex justify-center w-full my-4'>
          <ManageAccountsIcon className='text-white' sx={{ fontSize: 35 }}/>
          <p className='text-[25px] font-mono text-white mx-4'>Account</p>
        </Link>
      </div>
}
    </nav>
  )
}

export default Navbar