import "./Slidepage.css"
import React from "react"
import Header from "../Header/Header.jsx"
import Gallery from "../Gallery/Gallery.jsx"
import Footer from "../Footer/Footer.jsx"
import GalleryItemDescription from "../GalleryItemDescription/GalleryItemDescription.jsx"

const SlidePage = () => {
    
    
    return (
        <section id="slide-page">
            <Header/>
            <GalleryItemDescription/>
            <Footer/>
        </section>
    )
}

export default SlidePage