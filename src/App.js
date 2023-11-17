
import './App.css';
import { movies } from './components/Moviedata';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Poster from './components/Poster';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Poster />
      <Movies />
     
    </div>
  );
}

export default App;
