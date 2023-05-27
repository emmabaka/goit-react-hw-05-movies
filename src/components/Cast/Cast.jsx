import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieDetails from 'api/fetchMovieDetails';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails('cast', movieId).then(res => setCast(res));
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.cast?.map(item => (
          <li key={item.id}>
            <img
              src={item.profile_path && IMAGES_BASE_URL + item.profile_path}
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>Charachter: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
