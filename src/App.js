import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import Header from './components/header'; // Import the Header component

// Sample data for images
const imageList = [
  { id: 1, src: 'https://www.medaldash.com/cdn/shop/files/3FBD2D5D-A1E2-49BA-BAF1-54D8AF83E4C9.png?v=1706123341&width=360', caption: 'Snoopy Run' },
  { id: 2, src: 'https://www.medaldash.com/cdn/shop/files/preview_images/09bec56c469443a0b268d1dbcdf3f8e6.thumbnail.0000000000.jpg?v=1707330402&width=533', caption: 'Running with my Peeps' },
  { id: 3, src: 'https://www.medaldash.com/cdn/shop/files/1F1DB665-6F63-4EA2-BCDC-7CF5EA3C0571.jpg?v=1711655424&width=360', caption: 'Godzilla X Kong: The Titan Challenge' },
  { id: 4, src: 'https://www.medaldash.com/cdn/shop/files/142B9E8D-218D-49C1-B195-364D8B956769.jpg?v=1706287511&width=360', caption: "Snoopy's Lucky" },
  // Add more images as needed
];

function App() {
  return (
    <div className="App">
      <Header /> {/* Use the Header component */}
      <div className="image-grid">
        {imageList.map(image => (
          <div key={image.id} className="image-tile">
            <Link to="/SecondPage"><img src={image.src} alt={`Image ${image.id}`} /></Link>
            <div className="image-caption">{image.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
