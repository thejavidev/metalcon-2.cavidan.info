import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer';
import { AnimatePresence } from 'framer-motion';



const Layout = ({children }) => {
 
  return (
    <>
      
      <Header />
     
        {children}
 
      <Footer  />
    </>
  )
}

export default Layout
