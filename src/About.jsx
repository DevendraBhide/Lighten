import React, { useState } from 'react'

const About = () => {
  const [data1, setData1]=useState([
      {
        id:1,
        img:'1.png',
        ctitle:'Data Recovery',
        ctext:'Perspiciatis eos quos totam cum minima autPerspiciatis eos quos'
  
      },
      {
        id:2,
        img:'2.png',
        ctitle:'Computer repair',
        ctext:'Perspiciatis eos quos totam cum minima autPerspiciatis eos quos'
  
      },
      {
        id:3,
        img:'3.png',
        ctitle:'Mobile service',
        ctext:'Perspiciatis eos quos totam cum minima autPerspiciatis eos quos'
  
      },
      {
        id:4,
        img:'4.png',
        ctitle:'Network solutions',
        ctext:'Perspiciatis eos quos totam cum minima autPerspiciatis eos quos'
  
      }
    ])


    const [data2,setData2]=useState([
        {
          id:1,
          img:'service1.png',
          ctitle:'Fast service',
          ctext:'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea'
    
        }, {
          id:2,
          img:'service2.png',
          ctitle:'Secure payments',
          ctext:'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea'
    
        }, {
          id:3,
          img:'service3.png',
          ctitle:'Expert team',
          ctext:'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea'
    
        }, {
          id:4,
          img:'service4.png',
          ctitle:'Affordable services',
          ctext:'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea'
    
        }, {
          id:5,
          img:'service5.png',
          ctitle:'90 Days warranty',
          ctext:'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea'
    
        }, {
          id:6,
          img:'service6.png',
          ctitle:'Award winning',
          ctext:'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea'
    
        },
    
      ])
  return (
<>
 <div className="container-fluid bg-warning text-center p-5">
    <h1>ABOUT</h1>
 </div>
 <div className="container p-5">
  <div className="row my-5">
    <div className="col-md-6"><img src="pc_layout.png" className='img-fluid' alt="" /></div>
    <div className="col-md-6">
      <h3 className='fw-bold'>Who is Lighten</h3>
      <p className='lh-sm'>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
      <p className='lh-sm'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  </div>
 </div>

 <div className="container-fluid">
    <div className="container">
        <p className='text-center' style={{fontSize:'50px', fontWeight:600}}> <span className='text-warning'>WHY </span>CHOOSE US</p>
      <p className='text-center' style={{fontSize:'30px'}}>Fastest repair service with best price!</p>
    </div>
    </div><br />

   <div className="container-fluid bg-warning shadow mb-5">
   <div className="container bg-light shadow-lg ">
    <div className="row">
{
data1.map((val,index)=>{
  return(
    
   <div className="col-md-3 card home_card_1 text-center p-2 py-5 "  key={index}>
   <div><img src={val.img} className="text-center img-fluid"  alt="..."/></div>
   <div className="card-body">
     <h4 className="card-title"> {val.ctitle}</h4>
     <p className="card-text">{val.ctext}</p>
     
   </div>
 </div>
  )
})

}
</div>
 <div className="btns text-center "><button className="btn btn-lg px-4 my-5  btn-outline-warning text-dark">Read More</button> </div> 
  </div>
   </div>
   <br />


   <div className="container-fluid">
    <div className="container">
        <p className='text-center' style={{fontSize:'50px', fontWeight:600}}> <span className='text-warning'>SERVICE </span>PROGRESS</p>
      <p className='text-center' style={{fontSize:'30px'}}>Easy and effective way to get your device repair</p>
    </div>
    </div><br />
    
   <div className="container  ">
    <div className="row d-flex">
     
{
  data2.map((val,index)=>{
    return(
      <div className=" col-md-4 col-lg-4 col-xl-4  text-center p-3 "key={index}>
        <div className="card home_card_2 shadow-lg p-3">
  <div> <img  src={val.img} className=" pt-3 "  alt="..."/></div>
   <div className="card-body">
     <h5 className="card-title"> {val.ctitle}</h5>
     <p className="card-text">{val.ctext}</p>
     </div>
     </div>
     </div>
  )
})
}
</div>
</div>
<br /><br />  
</>
  )
}

export default About