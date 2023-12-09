import "./Gallery.css"
import React from "react";
import GalleryItem from "../GalleryItem/GalleryItem.jsx";

const Gallery = () => {
    return (
        <>
            <section className="gallery">
                <section className="gallery-items-container">
                <GalleryItem></GalleryItem>
                <GalleryItem></GalleryItem>
                <GalleryItem></GalleryItem>
                <GalleryItem></GalleryItem>
                <GalleryItem></GalleryItem>
                <GalleryItem></GalleryItem>
                <GalleryItem></GalleryItem>
                <GalleryItem></GalleryItem>
                <GalleryItem></GalleryItem>
                </section>
            </section>
        </>
    )
}

export default Gallery