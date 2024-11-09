import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <Header/>
        <main style={{ minHeight: "75vh" ,  "background-color": "#E3C39D" , "paddingTop" : "1%"}}>{children}</main>
        <Footer/>
    </>
  )
}

export default Layout