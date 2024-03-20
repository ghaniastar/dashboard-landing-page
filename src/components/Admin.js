import React from 'react'

const Admin = () => {
  return (
    <div>
       <div class="wrapper">
        
        <div class="text-center mt-4 name">
            Admin
        </div>
        <form class="p-3 mt-3">
        <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="email" name="email" id="pwd" placeholder="Email"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"/>
            </div>
            <button class="btn mt-3">Sign in</button>
        </form>
        <div class="text-center fs-6">
            <a href="#">Forget password?</a> or <a href="#">Sign up</a>
        </div>
    </div>
    </div>
  )
}

export default Admin