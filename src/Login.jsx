import  Axios  from 'axios';
import React, { useState } from 'react'

const Login = () => {
const[data,setData]=useState({username:'',userpass:''})

  const dataHandler=(e)=>{
    const{name,value}=e.target;
    setData({...data,[name]:value})
  }

  const datalogin=(e)=>{
    e.preventDefault();
    console.log(data);
    
  }
  return (
<>
<div className="container p-5"> 
 <div className="row">
   <div className="col-md-6 m-auto">
     <div className="card bg-dark text-white">
       <div className="card-body">
         <form action="" onSubmit={(e)=>datalogin(e)}>
         <h4 className='text-center p-3 bg-warning text-dark border rounded'>Login</h4><br />

              <label htmlFor="">Enter Your Username</label>
           <input type="text" name='username' value={data.username} onChange={(e)=>dataHandler(e)} placeholder='enter your username' className='form-control' required/><br />
           <label htmlFor="">Enter Your Password</label>
           <input type="text" name='userpass' value={data.userpass} onChange={(e)=>dataHandler(e)} placeholder='enter your password' className='form-control' required/><br />
            
           <div className="text-center"><button className='btn btn-warning px-4'>Login</button></div>
         </form>
       </div>
     </div>
   </div>
 </div>
</div>
</>)
}

export default Login