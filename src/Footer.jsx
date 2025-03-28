import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {


const[data,setData]=useState([
    {
        id:1,
        name:'CONTACT US',
        desc1:'123 Second Street Fifth',
        desc2: 'Avenue,',
        desc3:' Manhattan, New York' ,
        desc4:'+987 654 3210'
    },{
        id:2,
        name:'ADDITIONAL LINKS',
        desc1:<NavLink className='text-decoration-none text-white' to='/about'>About us</NavLink>,
        desc2:'Terms and conditions',
        desc3:'Privacy policy',
        desc4:'News',
        desc5:<NavLink className='text-decoration-none text-white' to='/contact'>Contact us</NavLink>
    },
    {
        id:3,
        name:'SERVICE',
        desc1:'Data Recovery',
        desc2:'Computer repair',
        desc3:'Mobile service',
        desc4:'Network solution',
        desc5:'Technical support'
    },
    {
        id:4,
        name:'ABOUT LIGHTEN',
        desc1:'Tincidunt elit magnis nulla',
        desc2:'facilisis. Dolor Sapien nunc',
        desc3:'amet ultrices,'
    }
])
  return (
     <>
          <div className="container-fluid bg-dark">
        <div className="container text-center text-light">
            <div className="row">
                <div className="col-md-6 offset-md-4 p-5">
                    <ul className='sociel d-flex '>
                        <li className='list-unstyled mx-4'><a href="https://www.facebook.com/" target='blank'><i className='fab fa-facebook-f text-light'></i></a></li>
                        <li className='list-unstyled mx-4'><a href="https://x.com/?lang=en" target='blank'><i className='fab fa-twitter text-light'></i></a></li>
                        <li className='list-unstyled mx-4'><a href="http://instagram.com/ " target='blank'><i className='fab fa-instagram text-light'></i></a></li>
                        <li className='list-unstyled mx-4'><a href="https://www.linkedin.com/" target='blank'><i className='fab fa-linkedin text-light'></i></a></li>
                    </ul>
                </div>
            </div>         
        </div>
        <div className="container pb-5">
            <div className="row">
               {
                data.map((val,index)=>{
                    return(
                        <div className="col-md-3" key={index}>
                        <h4 className='text-light'>{val.name}</h4><br />
                        <p className='text-light lh-1'>{val.desc1}</p>
                        <p className='text-light lh-1'>{val.desc2}</p>
                        <p className='text-light lh-1'>{val.desc3}</p>
                        <p className='text-light lh-1'>{val.desc4}</p>
                        <p className='text-light'>{val.desc5}</p>                         
                    </div>
                    )
                })
            }
            </div>
        </div>
             </div> 
             <p className='p-3 bg-warning text-center'>Copyright 2019 All Right Reserved By Free html Templates Distributed By ThemeWagon</p>
          </>
  )
}

export default Footer