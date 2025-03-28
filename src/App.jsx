 import React from 'react'
 import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Blog from './Blog';
import About from './About';
import Contact from './Contact';
import Signup from './Signup';
import Login from './Login';
import './App.css';
import Layout from './Layout';
 const App = () => {
   return (

    <>
    <Router>
      
    <Routes>
       <Route  path='/' element={<Layout/>}>
       <Route index element={<Home/>}></Route>
       <Route  path='/about' element={<About/>}></Route>
       <Route  path='/product' element={<Product/>}></Route>
       <Route  path='/blog' element={<Blog/>}></Route>
       <Route  path='/contact' element={<Contact/>}></Route>
       <Route  path='/signup' element={<Signup/>}></Route>
       <Route  path='/login' element={<Login/>}></Route>
       </Route>

    </Routes>
    </Router>
    </>
    )
 }
 
 export default App