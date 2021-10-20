import logo from './logo.svg';
import './App.css';
import { BigPhotoViewer } from './BigPhotoViewer/BigPhotoViewer';
import { LittlePhotoSelector } from './LittlePhotoSelector/LittlePhotoSelector';
import { imageUrls } from './UrlGenerator';
import { useState } from 'react';

function App() {

  const [selectedUrl, setSelectedUrl] = useState(imageUrls[0]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1>Photo Viewer</h1>
        <BigPhotoViewer src={selectedUrl}/>
        <p>Viewing url: {selectedUrl}</p>
        {imageUrls.map((src) => 
          <LittlePhotoSelector key={src} src={src} active={src === selectedUrl} onClick={() => {setSelectedUrl(src)}}/>
        )}
      </main>
    </div>
  );
}

export default App;