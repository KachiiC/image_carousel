import React, {useState} from 'react'
// CSS
import './ImageSlider.css'


const ImageSlider = ({ images }) => { 
    const [imageIndex, setImageIndex] = useState(1); 


    const nextImage = () => {
      (imageIndex === images.length - 3) ? 
          setImageIndex(0):setImageIndex(prevWord => prevWord + 1);
    }

    const previousImage = () => {
        (imageIndex === 0) ? 
          setImageIndex(images.length - 3):setImageIndex(prevWord => prevWord - 1);
    }

    const displayedImages = (
      <div>
        <img 
          src={images[imageIndex]} 
          alt="this-pic" 
          className="carousel-image"
        />
        <img 
          src={images[imageIndex + 1]} 
          alt="this-pic" 
          className="carousel-image"
        />
        <img 
          src={images[imageIndex + 2]} 
          alt="this-pic" 
          className="carousel-image"
        />
      </div>
    )
  
    return (
        <>
        <h1>Images</h1>
        <div>
        {displayedImages}
          <button onClick={previousImage} className="toggle-button"> Previous </button>
          <button onClick={nextImage} className="toggle-button"> Next </button>
        </div>
        </>
    );
    
  };
  
  export default ImageSlider;