import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fetchMovies from 'api/fetchMovies';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchMovies('trending').then(res => setTrending(res));
  }, []);

  return (
    <main>
      <section>
        <div className="container">
          <ul>
            {trending &&
              trending.map(item => (
                <li key={item.id}>
                  <Link
                    key={item.id}
                    to={`/movies/${item.id}`}
                    state={{ from: location }}
                  >
                    {item.title ?? item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
