import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import fetchMovies from 'api/fetchMovies';
import css from './Movies.module.css'

const Movies = () => {
  const [filter, setFilter] = useState('');
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();
  const searchMovies = params.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    setFilter(searchMovies);
    fetchMovies('search', filter).then(res => setMovies(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handleSubmit = e => {
    e.preventDefault();
    setFilter(searchMovies);
    e.target.value = '';
  };

  const updateQuery = e => {
    const value = e.target.value;
    console.log(e.target.value);
    if (value === '') {
      return setParams({});
    }
    setParams({ query: value });
  };

  return (
    <section>
      <div className="container">
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            onChange={updateQuery}
            value={searchMovies}
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {movies.map(item => (
            <li key={item.id}>
              <Link
                key={item.id}
                to={`/movies/${item.id}`}
                state={{ from: location }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Movies;
