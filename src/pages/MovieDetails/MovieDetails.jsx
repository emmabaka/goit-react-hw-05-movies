import { Suspense, useEffect, useRef, useState } from 'react';
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
    fetchMovieDetails('details', movieId)
      .then(res => setMovie(res))
  }, [movieId]);

  return (
    <section className={css.movie}>
      <div className="container">
        <Link className={css.back} to={locationRef.current}>
          <VscTriangleLeft /> Go back
        </Link>

        <div>
          <img
            src={
              movie?.poster_path
                ? IMAGES_BASE_URL + movie.poster_path
                : 'https://cdn.pixabay.com/photo/2017/05/13/09/04/question-mark-2309040_1280.jpg'
            }
            alt={movie?.title}
            width={200}
            height={300}
          />
          <div>
            <h2>{movie?.title}</h2>
            <p>
              Score:{' '}
              {movie?.popularity
                ? Math.round(movie?.popularity) + '%'
                : 'No results'}
            </p>
            <h3>Overview</h3>
            <p>{movie?.overview ? movie?.overview : 'No results'}</p>
            <h3>Genres</h3>
            <p>
              {movie?.genres
                ? movie?.genres?.map(item => item.name).join(', ')
                : 'No results'}
            </p>
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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

export default MovieDetails;
