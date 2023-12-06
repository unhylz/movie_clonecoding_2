import TVList from './TVList.jsx'
import { tvs } from '../tvDummy.js';
import "./TVList.css";

function TVs() {
  return (
    <div className="app-container">
      {
        tvs.results.map((tvs) => {
          return (
            <TVList
            key={tvs.id}
            title={tvs.name}
            poster_path={tvs.poster_path}
            vote_average={tvs.vote_average}
            overview={tvs.overview}
            />
          )
        })
      }
    </div>
  );
}

export default TVs;