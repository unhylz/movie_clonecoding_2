import Movies from './pages/Movies.jsx'
import { movies } from './movieDummy.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Home from './pages/Home';
import TV from './pages/TV';
import Celeb from './pages/Celebrity';
import MovieDetail from './pages/MovieDetail.jsx';
import NotFound from "./pages/NotFound";
import Login from "./pages/Login.jsx"

function MovieList() {
  return (
    <div className="app-container">
      {
        movies.results.map((movie) => {
          return (
            <Movies 
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            overview={movie.overview}
            />
          )
        })
      }
    </div>
  );
}

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />      
          <Route path="/Movies" element={<MovieList/>} />
          <Route path="/MovieDetail/:title" element={<MovieDetail />} />
          <Route path="/tvs" element={<TV/>} />
          <Route path="/celebs" element={<Celeb/>} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;