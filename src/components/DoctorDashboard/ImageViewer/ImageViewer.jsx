import React, { useState, useRef } from 'react';

import Image1 from '../../assets/image1.jpg';
import Image2 from '../../assets/image2.jpg';
import Image3 from '../../assets/image3.jpg';
import './ImageViewer.css';

const ImageViewer = () => {
    // Define an array of image objects
    const images = [
        { src: Image1 },
        { src: Image2 },
        { src: Image3 },
        // Add more image objects as needed
    ];

    // State to track the index of the current image
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [zoomLevel, setZoomLevel] = useState(100);

    // Function to display the next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to display the previous image
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Reference to the image element
    const imgRef = useRef();

    // Function to toggle fullscreen
    const toggleFullscreen = () => {
        if (imgRef.current.requestFullscreen) {
            imgRef.current.requestFullscreen();
        } else if (imgRef.current.mozRequestFullScreen) { // Firefox
            imgRef.current.mozRequestFullScreen();
        } else if (imgRef.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
            imgRef.current.webkitRequestFullscreen();
        } else if (imgRef.current.msRequestFullscreen) { // IE/Edge
            imgRef.current.msRequestFullscreen();
        }
    };

    return (
        <div>
            <div className='container'>
                <img
                    ref={imgRef}
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    style={{ height: "400px", cursor: "zoom-in" }}
                    onClick={toggleFullscreen}
                />
            </div>
            <div className='container mt-4'>
                <button className='btn' onClick={prevImage}>Previous</button>
                <button className='btn' onClick={nextImage}>Next</button>
            </div>
        </div>
    );
};

export default ImageViewer;
