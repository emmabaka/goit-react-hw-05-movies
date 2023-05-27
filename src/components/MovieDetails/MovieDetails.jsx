import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import fetchMovieDetails from 'api/fetchMovieDetails';
import { VscTriangleLeft } from 'react-icons/vsc';
import css from './MovieDetails.module.css';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const locationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    fetchMovieDetails('details', movieId).then(res => setMovie(res));
  }, [movieId]);

  return (
    <section className={css.movie}>
      <div className="container">
   
          <Link className={css.back} to={locationRef.current}>
            <VscTriangleLeft /> Go back
          </Link>
    
        <div>
          <img
            src={movie.poster_path && IMAGES_BASE_URL + movie.poster_path}
            alt={movie.title}
          />
          <div>
            <h2>{movie.title}</h2>
            <p>Score: {Math.round(movie.popularity) + '%'}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres?.map(item => item.name).join(', ')}</p>
          </div>
        </div>
        <div>
          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default MovieDetails;
