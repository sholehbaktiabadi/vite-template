import React, { Component } from "react";
import Navbar from "../component/nav";
import { Footer } from "../component/footer";

const Layout=({props})=>{
    
    return(
        <>
        <Navbar/>
        {props}
        <Footer/>
        </>
    )
}

export default Layout