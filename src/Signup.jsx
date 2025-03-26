import React from 'react'

const Signup = () => {
  return (

<>
 <div className="container p-5">
 
  <div className="row">
    <div className="col-md-6 m-auto">
      <div className="card bg-dark text-white">
        <div className="card-body">
          <form action="/saveform">
          <h4 className='text-center p-3 bg-warning text-dark border rounded'>Sign Up</h4><br />
            <label htmlFor="">Enter Your Username</label>
            <input type="text" placeholder='enter your username' className='form-control' /><br />
            <label htmlFor="">Enter Your Email</label>
            <input type="email" placeholder='enter your email' className='form-control' /><br />
            <label htmlFor="">Enter Your Password</label>
            <input type="text" placeholder='enter your password' className='form-control' /><br />
            <label htmlFor="">Enter Your Contact No</label>
            <input type="text" placeholder='enter your contact no' className='form-control' /><br />
            <div className="text-center"><button className='btn btn-warning px-4'>Sign Up</button></div>
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