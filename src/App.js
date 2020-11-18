import React, {useState} from 'react'
// CSS
import "./App.css"
// Components
import ImageSlider from './Components/ImageSlider'


const App = () => {

  const [query, setQuery] = useState(""); 
  const [images, setImages] = useState([]); 
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = (e) => {
      e.preventDefault();
      fetch(
        `https://pixabay.com/api/?key=18866569-6f34f2906812f25069d16a3da&q=${query}`
      ) 
        .then((response) => response.json())
        .then(({ hits }) => hits.map(({ webformatURL }) => webformatURL)) 
        .then(setImages)
        .then(setShowResults(true));
    };


    return (
        <div className="app">
          <form onSubmit={handleSubmit}>
              <input type="text" onChange={(e) => setQuery(e.target.value)} />
              <input type="submit" value="Search" />
          </form>
            { showResults && (
              <ImageSlider images={images} />
            )}
        </div>
    )
}


export default App
