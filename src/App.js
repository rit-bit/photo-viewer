import logo from './logo.svg';
import './App.css';
import { BigPhotoViewer } from './BigPhotoViewer/BigPhotoViewer';
import { LittlePhotoSelector } from './LittlePhotoSelector/LittlePhotoSelector';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1>Photo Viewer</h1>
        <BigPhotoViewer src="https://picsum.photos/id/102/900/600"></BigPhotoViewer>
        <LittlePhotoSelector src="https://picsum.photos/seed/a11/900/600"></LittlePhotoSelector>
      </main>
    </div>
  );
}

export default App;
