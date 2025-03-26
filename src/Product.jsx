import React, { useState } from 'react'

const Product = () => {
  const[data3,setdata3]=useState([
    {
      id:1,
      img:'p1.png',
      title:'Norton Internet Security',
      price:'$25'
  
    },
    {
      id:2,
      img:'p2.png',
      title:'Norton Internet Security',
      price:'$25'
  
    }, {
      id:3,
      img:'p5.png',
      title:'Norton Internet Security',
      price:'$25'
  
    },
    {
      id:4,
      img:'p4.png',
      title:'Norton Internet Security',
      price:'$25'
  
    },
    {
      id:5,
      img:'p5.png',
      title:'Norton Internet Security',
      price:'$25'
  
    },
    {
      id:6,
      img:'p2.png',
      title:'Norton Internet Security',
      price:'$25'
  
    },
    {
      id:7,
      img:'p6.png',
      title:'Norton Internet Security',
      price:'$25'
  
    },
    {
      id:8,
      img:'p7.png',
      title:'Norton Internet Security',
      price:'$25'
  
    },
    {
      id:9,
      img:'p4.png',
      title:'Norton Internet Security',
      price:'$25'
  
    },
    {
      id:10,
      img:'p5.png',
      title:'Norton Internet Security',
      price:'$25'
  
    },
    {
      id:11,
      img:'p2.png',
      title:'Norton Internet Security',
      price:'$25'
  
    },
    {
      id:12,
      img:'p6.png',
      title:'Norton Internet Security',
      price:'$25'
  
    },
  ])
  return (
<>
<div className="container-fluid bg-warning text-center p-5">
    <h1>OUR PRODUCT</h1>
 </div>
<div className="container-fluid text-center p-5">
<p className='fs-5'>We package the products with best services to make you a happy customer.</p>
</div>
 
<div className="container-fluid py-5 shadow-lg">
  <div className="container">
    <div className="row">
      {
        data3.map((val,index)=>{
          return(
            <div className="col-md-3 my-2 home_card_3 " key={index}>
        <div className="card  bg-dark-subtle">
        <img src={val.img} className="card-img-top p-3" alt="..."/>
          <div className="card-body">
            <div className="card-title text-center lh-1">
           <p>{val.title}</p>
           <p className='fw-bold fs-5'>{val.price}</p>
            </div>
          </div>
        </div>
      </div>
          )
        })
      }
    </div>
  </div>
</div>
 

</> 

)
}

export default Product