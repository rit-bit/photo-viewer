import logo from './logo.svg';
import './App.css';
import { BigPhotoViewer } from './BigPhotoViewer/BigPhotoViewer';
import { LittlePhotoSelector } from './LittlePhotoSelector/LittlePhotoSelector';
import { imageUrls } from './UrlGenerator';
import { useState } from 'react';

function App() {

  const [selectedUrl, setSelectedUrl] = useState(imageUrls[0]);
  const [photosInLine, setPhotosInLine] = useState(3);

  function changePhotosInLine() {
    const newPhotosInLine = photosInLine <= 4 ? photosInLine + 1 : 3;
    setPhotosInLine(newPhotosInLine);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-main">
          <img src="https://res.cloudinary.com/dgx8goyms/images/f_auto,q_auto/v1603174722/softwire-logo/softwire-logo.png" className="Sw-logo" alt="softwire logo"/>
          <img src={logo} className="App-logo" alt="react logo" />
        </div>
      </header>
      <main>
        <h1>Photo Viewer</h1>
        <BigPhotoViewer id="Big-photo-viewer" src={selectedUrl}/>
        <p>Viewing url: {selectedUrl}</p>
        <div className="photos-in-line-div">
          <button id="photos-in-line-button" onClick={changePhotosInLine}>
            <img src="https://static.thenounproject.com/png/110306-200.png" alt="grid view icon" width="30px"/>
            {" " + photosInLine}
            </button>
          </div>
        <div className="Thumbnail-container">
          {imageUrls.map((src) => 
            <LittlePhotoSelector
            key={src}
            src={src}
            active={src === selectedUrl} 
            onClick={() => {setSelectedUrl(src)}}
            size={photosInLine}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;