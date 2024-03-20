import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../card/Card'

const SignIn = () => {
  return (
    <div className='bg-info p-5'>
   <h1 className='d-flex justify-content-center p-5'>Sign in to dashboard</h1>
  
<div class="container text-center">
  <div class="row d-flex justify-content-center row-cols-4">
    
    <div class="card m-1">
  <div class="card-details">
    <p class="text-title">Admin</p>
    <p class="text-body">Please sign in to access administrative features.</p>
  </div>
  <Link to='/admin'><button class="card-button">Get Started</button></Link>
</div>

   
    
    <div class="card m-1">
  <div class="card-details">
    <p class="text-title">Podcaster</p>
    <p class="text-body"> Please sign in to manage your podcast.</p>
  </div>
  <Link to='/podcaster'><button class="card-button">Get Started</button></Link>
</div>
    
    <div class="card m-1">
  <div class="card-details">
    <p class="text-title">User</p>
    <p class="text-body">Please sign in to access your account.</p>
  </div>
 <Link to='/user'> <button class="card-button">Get Started</button></Link>
</div>
  </div>
</div>




    </div>
  )
}

export default SignIn