import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../routes/Routes'
import Header from './Header'
import Footer from './Footer'


const Layout = () => {
  return (
   <BrowserRouter>
    <Route render = { 
        (props) => (
            <div>
               <div className="main">
                    <Header {...props} />
                    <div className = "container--fluid"> 
                        <Routes/>
                    </div>
                    <Footer/>
               </div>
            </div>
        )
    }
     />
       
    
   </BrowserRouter>
  )
}

export default Layout