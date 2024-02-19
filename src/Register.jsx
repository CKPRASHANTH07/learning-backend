import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className='flex bg-slate-900 w-full h-screen items-center justify-center font-sans'>
    <div className=' flex flex-col space-y-6 bg-white w-fit h-fit p-10 px-20 items-start justify-center rounded-xl shadow-cyan-800 shadow-2xl'>
    <h1 className='text-4xl font-bold '>Register</h1>
    <div>
    <p>Name</p>
    <input className='w-80 h-10 border-2 border-b-slate-700 pl-2'></input>
    </div>

    <div>
    <p>Email</p>
    <input className='w-80 h-10 border-2 border-b-slate-700 pl-2'></input>
    </div>
    
    <div>
    <p>password</p>
    <input className='w-80 h-10 border-2 border-b-slate-700 pl-2'></input>
    </div>
    
    <div className='flex flex-col space-y-6'>
    <Link to='/home' className=' w-80 h-10 bg-green-700 text-center rounded-xl p-1 hover:animate-pulse'>Create Account</Link>

    <Link to='/' className=' w-80 h-10 border-2 border-black text-center p-1 rounded-xl hover:animate-pulse  bg-slate-300'>Login</Link>
    </div>
    </div>
</div>
  )
}

export default Register