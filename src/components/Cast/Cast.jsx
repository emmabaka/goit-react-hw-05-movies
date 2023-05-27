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
  console.log(cast);
  return (
    <div>
      <ul>
        {cast.cast?.map(item => (
          <li>
            <img src={IMAGES_BASE_URL + item.profile_path} alt={item.name} />
            <p>{item.name}</p>
            <p>Charachter: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
