import logo from './logo.svg';
import './App.css';
import { BigPhotoViewer } from './BigPhotoViewer/BigPhotoViewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1>Photo Viewer</h1>
        <BigPhotoViewer src="https://picsum.photos/id/102/900/600"></BigPhotoViewer>
      </main>
    </div>
  );
}

export default App;
