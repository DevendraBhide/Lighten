import  axios  from 'axios'
import React, { useState } from 'react'

const Contact = () => {

//    const[data,setData]=useState({username:'', useremail:'',userphone:'',usermsg:''});
//    // console.log(data);
//  const savedata=(e)=>{
      
//       // alert("helo")
//       console.log(e.target.value)
//       console.log(e.target.name)
// setData({...data,[e.target.name] : e.target.value})

//    }

//    const saveform=async(e)=>{
//       e.preventDefault()
//       // alert('success')
//       console.log(data)
//       // const API_BASE_URL = import.meta.env.VITE_API_URL  ;
//       await axios.post(`http://localhost:3000/api/Contact`,data)
//       .then(response => console.log(response.data))
//       .catch(error => console.error("Error:", error));

//       setData({username:'', useremail:'',userphone:'',usermsg:''});

//       alert('Messege Sent');
//       window.location.href='/'
   // }

   const saveform=()=>{
      alert('Messege Sent');
            window.location.href='/'
   }

  return (
 <>
 <div className="container-fluid bg-warning text-center p-5">
    <h1>CONTACT US</h1>
 </div>
 <div className="container p-5">
<form action=""  onSubmit={(e)=>saveform(e)}>
 <div className="row">
  <div className="col-md-6">
  <input type="text" placeholder='Your Name' name='username' /*value={data.username}  onChange={(e)=>savedata(e)}*/ className='w-100 my-3 ps-3 border border-warning border-2' required style={{height:'60px'}}/>
  </div>
  <div className="col-md-6">
     <input type="email" placeholder='Email' name='useremail' /* value={data.useremail} onChange={(e)=>savedata(e)}*/ className='w-100 my-3 ps-3 border border-warning border-2' required style={{height:'60px'}} />
     </div>
     <div className="col-md-12">
     <input type="number" placeholder='Phone' name='userphone' /* value={data.userphone} onChange={(e)=>savedata(e)}*/ className='w-100 my-3 ps-3 border border-warning border-2' required style={{height:'60px'}} />
     </div>
     <div className="col-md-12">
      <textarea name="usermsg"  placeholder='message' /*value={data.usermsg} onChange={(e)=>savedata(e)}*/ className='w-100 my-3 ps-3 border border-warning border-2' required style={{height:'100px'}}></textarea>
     </div>
     <div className="col-md-12 text-center">
      <button type='submit' className='mt-3 px-5 py-1 h-100 border border-none bg-black text-light '>Send</button>
     </div>
     </div>
     </form>
 </div>

 </>

)
}

export default Contact;