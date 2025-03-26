import React from 'react'

const Contact = () => {
  return (
 <>
 <div className="container-fluid bg-warning text-center p-5">
    <h1>CONTACT US</h1>
 </div>
 <div className="container p-5">
 <div className="row">
  <div className="col-md-6">
  <input type="text" placeholder='Your Name' className='w-100 my-3 ps-3 border border-warning border-2' style={{height:'60px'}}/>
  </div>
  <div className="col-md-6">
     <input type="email" placeholder='Email' className='w-100 my-3 ps-3 border border-warning border-2' style={{height:'60px'}} />
     </div>
     <div className="col-md-12">
     <input type="number" placeholder='Phone' className='w-100 my-3 ps-3 border border-warning border-2' style={{height:'60px'}} />
     </div>
     <div className="col-md-12">
      <textarea name="message"  placeholder='message' className='w-100 my-3 ps-3 border border-warning border-2' style={{height:'100px'}}></textarea>
     </div>
     <div className="col-md-12 text-center">
      <button className='mt-3 px-5 py-1 h-100 border border-none bg-black text-light '>Send</button>
     </div>
 </div>
 </div>
 </>

)
}

export default Contact