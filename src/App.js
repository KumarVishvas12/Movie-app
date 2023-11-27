
import './App.css';
import Favourite from './components/Favourite';
import { movies } from './components/Moviedata';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Poster from './components/Poster';
import { BrowserRouter as Router, Switch, Route, Routes, BrowserRouter } from 'react-router-dom';



function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
   
    <>
    
    <Route path='/' Component={Movies}/>
    <Route path='/favourites' Component={Favourite} />
    </>
   
   
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
