import logo from './logo.svg';
import './App.css';
import { BigPhotoViewer } from './BigPhotoViewer/BigPhotoViewer';
import { LittlePhotoSelector } from './LittlePhotoSelector/LittlePhotoSelector';
import { imageUrls } from './UrlGenerator';
import { useState } from 'react';

function App() {

  let [selectedUrl, setSelectedUrl] = useState(imageUrls[0]);

  function thumbnailClicked(url) {
    setSelectedUrl(url);
    console.log(`clicked on url ${url}`);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1>Photo Viewer</h1>
        <BigPhotoViewer src={selectedUrl}></BigPhotoViewer>
        <p>Viewing url: {selectedUrl}</p>
        {imageUrls.map(function(src, index) {
          return <LittlePhotoSelector key={index} src={src} onClick={() => thumbnailClicked(src)}></LittlePhotoSelector>
        })}
      </main>
    </div>
  );
}

export default App;
