import React from 'react'
import './login.css'
import {AiFillEye} from 'react-icons/ai'
const data= ()=>{

}

const Login = () => {
  return (
    <div className='container'>
        <h1>Login Form</h1>
        <input type="text"  id="saman" placeholder='Enter user id' />
        <input type="password" id='saman-1' placeholder='enter password'/>
        <AiFillEye/>
       
        <button onClick={()=>{
            const userId= document.getElementById("saman").value;
            const password= document.getElementById("saman-1").value;
           //save credentials to local storage
           sessionStorage.setItem('userId',userId);
           sessionStorage.setItem('password',password);
           console.log('Credentials saved:', userId, password);
            alert("you are now login to the page");
            // alert("your name is "+" "+userId );
            // alert("your password is "+" "+password );

        }}>Login</button>
        <h3 id='name'></h3>
        <h3 id='pass'></h3>
    </div>
  )
}
 
export default Login;