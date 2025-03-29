import React, { use, useEffect, useState } from 'react'

const Home = () => {

  const [data1, setData1] = useState([
    {
      id: 1,
      img: '1.png',
      ctitle: 'Data Recovery',
      ctext: 'Perspiciatis eos quos totam cum minima autPerspiciatis eos quos'

    },
    {
      id: 2,
      img: '2.png',
      ctitle: 'Computer repair',
      ctext: 'Perspiciatis eos quos totam cum minima autPerspiciatis eos quos'

    },
    {
      id: 3,
      img: '3.png',
      ctitle: 'Mobile service',
      ctext: 'Perspiciatis eos quos totam cum minima autPerspiciatis eos quos'

    },
    {
      id: 4,
      img: '4.png',
      ctitle: 'Network solutions',
      ctext: 'Perspiciatis eos quos totam cum minima autPerspiciatis eos quos'

    }
  ])

  const [data2, setData2] = useState([
    {
      id: 1,
      img: 'service1.png',
      ctitle: 'Fast service',
      ctext: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea'

    }, {
      id: 2,
      img: 'service2.png',
      ctitle: 'Secure payments',
      ctext: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea'

    }, {
      id: 3,
      img: 'service3.png',
      ctitle: 'Expert team',
      ctext: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea'

    }, {
      id: 4,
      img: 'service4.png',
      ctitle: 'Affordable services',
      ctext: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea'

    }, {
      id: 5,
      img: 'service5.png',
      ctitle: '90 Days warranty',
      ctext: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea'

    }, {
      id: 6,
      img: 'service6.png',
      ctitle: 'Award winning',
      ctext: 'Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea'

    },

  ])

  const [data3, setdata3] = useState([
    {
      id: 1,
      img: 'p1.png',
      title: 'Norton Internet Security',
      price: '$25'

    },
    {
      id: 2,
      img: 'p2.png',
      title: 'Norton Internet Security',
      price: '$25'

    }, {
      id: 3,
      img: 'p5.png',
      title: 'Norton Internet Security',
      price: '$25'

    },
    {
      id: 4,
      img: 'p4.png',
      title: 'Norton Internet Security',
      price: '$25'

    },
    {
      id: 5,
      img: 'p5.png',
      title: 'Norton Internet Security',
      price: '$25'

    },
    {
      id: 6,
      img: 'p2.png',
      title: 'Norton Internet Security',
      price: '$25'

    },
    {
      id: 7,
      img: 'p6.png',
      title: 'Norton Internet Security',
      price: '$25'

    },
    {
      id: 8,
      img: 'p7.png',
      title: 'Norton Internet Security',
      price: '$25'

    },
  ])
  const [data4, Setcarousel] = useState([
    {
      id: 1,
      img: 'lllll.png',
      head: 'Jone Due',
      date: '12/02/2019',
      text1: `You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am`,
      text2: 'really satisfied with my first laptop service.',

    },
    {
      id: 2,
      img: 'lllll.png',
      head: 'Jone Due',
      date: '12/02/2019',
      text1: 'You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am',
      text2: 'really satisfied with my first laptop service.',

    },
    {
      id: 3,
      img: 'lllll.png',
      head: 'Jone Due',
      date: '12/02/2019',
      text1: 'You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. I am',
      text2: 'really satisfied with my first laptop service.',

    }
  ])
  const headingStyle = {
    fontSize: window.innerWidth < 768 ? "2rem" : "4rem"
    // textAlign: "center"
    
}


  return (
    <>
      <div className="container-fluid">
        {/* <div className="container-fluid"> */}
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          {/* <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src="banner1.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption " style={{ position: 'absolute', top: 0 }}>
                              <p className='text-start lh-1' style={headingStyle}>OUR <br /> <span style={{ fontWeight: "bold" }}>LATEST</span><br /> <span style={{ color: "yellow" }}>PRODUCT</span></p>

{/*                 <p className='text-start lh-1' style={{ fontSize: '85px' }}  >OUR <br /><span className='fw-bold'>LATEST </span><br /><span className='text-warning fw-bold'>PRODUCT</span></p> */}
                <p className='text-start '> It is a long established fact that a
                  <br /> reader will be distracted by the readable content of a page
                </p>
                <div className="text-start"><button className='btn bg-warning text-white px-3 border-1 rounded'>see more Products</button></div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="banner1.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="banner1.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className=' '>Third slide label</h5>
                <p className=''>It is a long established fact that a <br />
                  reader will be distracted by the readable content of a page

                  .</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon " aria-hidden="true" style={{ position: 'absolute', bottom: 10, left: 10 }}></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" style={{ position: 'absolute', bottom: 10, left: 100 }} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" style={{ position: 'absolute', bottom: 0, left: 0 }}></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* </div> */}
      <br /><br />

      <div className="container-fluid">
        <div className="container">
          <p className='text-center' style={{ fontSize: '50px', fontWeight: 600 }}> <span className='text-warning'>WHY </span>CHOOSE US</p>
          <p className='text-center' style={{ fontSize: '30px' }}>Fastest repair service with best price!</p>
        </div>
      </div><br />

      <div className="container-fluid bg-warning shadow mb-5">
        <div className="container bg-light shadow-lg ">
          <div className="row">
            {
              data1.map((val, index) => {
                return (

                  <div className="col-md-3 card home_card_1 text-center p-2 py-5 " key={index}>
                    <div><img src={val.img} className="text-center img-fluid" alt="..." /></div>
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
          <p className='text-center' style={{ fontSize: '50px', fontWeight: 600 }}> <span className='text-warning'>SERVICE </span>PROGRESS</p>
          <p className='text-center' style={{ fontSize: '30px' }}>Easy and effective way to get your device repair</p>
        </div>
      </div><br />

      <div className="container  ">
        <div className="row d-flex">

          {
            data2.map((val, index) => {
              return (
                <div className=" col-md-4 col-lg-4 col-xl-4  text-center p-3 " key={index}>
                  <div className="card home_card_2 shadow p-3">
                    <div> <img src={val.img} className=" pt-3 " alt="..." /></div>
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

      <div className="container-fluid">
        <div className="container ">
          <p style={{ fontSize: '50px', fontWeight: 600 }}> <span className='text-warning'>OUR </span>PRODUCTS</p>
          <p style={{ fontSize: '25px' }}>We package the products with best services to make you a happy customer.</p>
        </div>
      </div><br />
      <br />
      <div className="container-fluid  shadow-lg products">
        <div className="containr-fluid bg-light bg-opacity-50 mb-2">
          <div className="container py-5">
            <div className="row">
              {
                data3.map((val, index) => {
                  return (
                    <div className="col-md-3 my-2 " key={index}>
                      <div className="card home_card_3 bg-dark-subtle">
                        <img src={val.img} className="card-img-top p-3" alt="..." />
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
          </div></div>


        <div className="container-fluid bg-light bg-opacity-50 py-5 mb-5">
          <h1 className='m-4'>What Clients Say? </h1>
          <br />
          <div className="carousel slide" id='carousel_slide' data-bs-ride="carousel" data-bs-interval='2000' >
            <div className="carousel-indicators my-1">
              <button type="button" data-bs-target="#carousel_slide" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">1</button>
              <button type="button" data-bs-target="#carousel_slide" data-bs-slide-to="1" aria-label="Slide 2" >2</button>
              <button type="button" data-bs-target="#carousel_slide" data-bs-slide-to="2" aria-label="Slide 3">3</button>
            </div>
            <div className="carousel-inner container" >
              {
                data4.map((val, index) => {
                  return (
                    <div className={`carousel-item  ${index === 0 ? 'active' : ''}`}
                      key={index}>
                      <div className="row">
                        <div className="col-md-2 pt-3"><img src={val.img} alt="slide" /></div>
                        <div className="col-md-5 pt-5"><i> <h3>{val.head} <br /></h3>{val.date}</i></div>
                        <div className="col-md-12 lh-1 my-4"><p>{val.text1}</p><p>{val.text2}</p> </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            </div>
          </div>
          <div className="container mt-5 bg-warning pb-3 pt-5">
            <div className="row ">
              <div className="col-md-7 ps-4"><h3 className='text-white fw-bolder'>REQUEST A FREE QUOTE <img className='call' src="calll.png" alt="" /></h3>
              <p className='fs-5'>Get answers and advice from people you want it from.</p>
              </div>
              <div className="col-md-5 text-center"><button className='btn bg-dark text-light border rounded-pill ' style={{paddingLeft:'100px',paddingRight:'100px'}}><h3>Get Quote </h3></button></div>
            </div>
          </div>
       
      </div>
      <div className="container-fluid"><img className='img-fluid' src="mapimg.jpg" alt="" /></div>

    </>)
}

export default Home
