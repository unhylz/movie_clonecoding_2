import { useNavigate } from 'react-router-dom';

const URL = "https://image.tmdb.org/t/p/w1280";

function Movies({title, poster_path, vote_average, overview}) {

  const navigate = useNavigate();

  const onClickMovie = () => {
    // Movie를 클릭했을 때, 해당 영화의 상세 페이지로 이동합니다.
    navigate(`/MovieDetail/${title}`, {
      state: {
        title: title,
        poster: poster_path
      },
    });
  };


    return (
      <div className="movie">
        <div className="movie-container">
          <img src={URL + poster_path} alt="영화 포스터" onClick={onClickMovie}/>
          <div className="movie-info">
              <h4>{title}</h4>
              <span>{vote_average}</span>
          </div>
          <div className="movie-detail">
            <h4>{title}</h4>
            <div>{overview}</div>
          </div>
        </div>
      </div>
    )
  }

export default Movies