import Axios  from 'axios';
import React, { useState } from 'react'

const Signup = () => {

  // const[data,setData]=useState({username:'',useremail:'',userpass:'',usercontact:''})

  // const datahandler=(e)=>{
  //   const{name,value}=e.target;
  //   setData({...data,[name]:value})

  // }

  // const saveform=async(e)=>{
  //   e.preventDefault();
  //   console.log(data)
  //   const API_BASE_URL = import.meta.env.VITE_API_URL;
  //   await Axios.post(`${API_BASE_URL}/Signup`,data)
  //   .then(response => console.log(response.data))
  //   .catch(error => console.error("Error:", error));

  //   setData({username:'',useremail:'',userpass:'',usercontact:''});
  //   alert("Sign UP successfuly!!! you can login now")
  //   window.location.href='/login'
  // }

  const saveform=()=>{
    alert("Sign UP successfuly!!! you can login now")
    window.location.href='/login'
  }
  return (

<>
 <div className="container p-5">
 
  <div className="row">
    <div className="col-md-6 m-auto">
      <div className="card bg-dark text-white">
        <div className="card-body">
          <form action="/login"  onSubmit={(e)=>saveform(e)}>
          <h4 className='text-center p-3 bg-warning text-dark border rounded'>Sign Up</h4><br />
            <label htmlFor="">Enter Your Username</label>
            <input type="text" name='username' /* value={data.username} onChange={(e)=>datahandler(e)}*/ placeholder='enter your username' className='form-control' required/><br />
            <label htmlFor="">Enter Your Email</label>

            <input type="email" name='useremail'/* value={data.useremail} onChange={(e)=>datahandler(e)}*/ placeholder='enter your email' className='form-control' required /><br />
            <label htmlFor="">Enter Your Password</label>

            <input type="text" name='userpass' /*value={data.userpass} onChange={(e)=>datahandler(e)}*/ placeholder='enter your password' className='form-control'required/><br />
            <label htmlFor="">Enter Your Contact No</label>

            <input type="text" name='usercontact' /*value={data.usercontact} onChange={(e)=>datahandler(e)}*/ placeholder='enter your contact no' className='form-control' required/><br />

            <div className="text-center"><button type='submit' className='btn btn-warning px-4'>Sign Up</button></div>
          </form>
        </div>
      </div>
    </div>
  </div>
 </div>
</>
)
}

export default Signup