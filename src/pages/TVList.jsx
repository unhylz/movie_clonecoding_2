const URL = "https://image.tmdb.org/t/p/w1280";

function TVList({title, poster_path, vote_average, overview}) {
    return (
      <div className="tv">
        <div className="tv-container">
          <img src={URL + poster_path} alt="tv 프로그램 포스터"/>
          <div className="tv-info">
              <h4>{title}</h4>
              <span>{vote_average}</span>
          </div>
          <div className="tv-detail">
            <h4>{title}</h4>
            <div>{overview}</div>
          </div>
        </div>
      </div>
    )
  }

export default TVList