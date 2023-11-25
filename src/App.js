
import './App.css';
import Favourite from './components/Favourite';
import { movies } from './components/Moviedata';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Poster from './components/Poster';



function App() {
  return (
    <div className="App">
      <Navbar />
    {/*  <Movies />*/}
    <Favourite />
     
    </div>
  );
}

export default App;
