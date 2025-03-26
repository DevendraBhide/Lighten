import React, { useState } from 'react'



const Blog = () => {
  const[data,SetData]=useState([
    {
      id:1,
      img:'1.jpg',
      head:'Live With Music',
      date:'20 March',
      comment:'comment',
      desc:`It is a long established fact that a reader will be distracted 
      by the readable content of a page when looking at its layout. The point 
      of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, `
    },
    {
      id:1,
      img:'2.jpg',
      head:'Best Music',
      date:'20 March',
      comment:'comment',
      desc:`It is a long established fact that a reader will be distracted 
      by the readable content of a page when looking at its layout. The point 
      of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, `
    },
    {
      id:1,
      img:'3.jpg',
      head:'Live With Music',
      date:'20 March',
      comment:'comment',
      desc:`It is a long established fact that a reader will be distracted 
      by the readable content of a page when looking at its layout. The point 
      of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, `
    },
    {
      id:1,
      img:'2.jpg',
      head:'Live With Music',
      date:'20 March',
      comment:'comment',
      desc:`It is a long established fact that a reader will be distracted 
      by the readable content of a page when looking at its layout. The point 
      of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, `
    },
    {
      id:1,
      img:'3.jpg',
      head:'Live With Music',
      date:'20 March',
      comment:'comment',
      desc:`It is a long established fact that a reader will be distracted 
      by the readable content of a page when looking at its layout. The point 
      of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, `
    },
    {
      id:1,
      img:'1.jpg',
      head:'Live With Music',
      date:'20 March',
      comment:'comment',
      desc:`It is a long established fact that a reader will be distracted 
      by the readable content of a page when looking at its layout. The point 
      of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, `
    },
  ])
  return (
<> 
<div className="container-fluid bg-warning p-5 text-center fw-bolder"><h1>BLOG</h1></div>

<div className="container py-5">
  <div className="text p-5 text-center" style={{fontSize:'20px'}}>It is a long established fact that a reader will be distracted by the readable <br />
  content of a page when looking at its layout. The point of using Lorem</div>

<div className="row">
  {
data.map((val,index)=>{
  return(
    <div className="col-md-4" key={index}>
    <div className="card my-3 shadow">
      <img className='card-img-top' src={val.img} alt="" />
      <div className="card-body">
        <h4>{val.head}</h4>
        <p className='text-danger'style={{fontSize:'16px'}}><span className='me-3'>March 20</span><span>Comment</span></p>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
      </div>
    </div>
  </div>
  )
})
  }
 
</div>
</div>
</> 
)
}

export default Blog