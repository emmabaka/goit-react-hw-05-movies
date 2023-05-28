import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieDetails from 'api/fetchMovieDetails';
const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails('cast', movieId)
      .then(res => setCast(res))
      .catch(e => setCast([]));
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast?.cast?.length === 0 || !cast ? (
          <p>We don`t have information about cast for this movie</p>
        ) : (
          cast.cast?.map(item => (
            <li key={item.id}>
              <img
                src={
                  item.profile_path
                    ? IMAGES_BASE_URL + item.profile_path
                    : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
                }
                alt={item.name}
                width={200}
                height={300}
              />
              <p>{item.name}</p>
              <p>Charachter: {item.character}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cast;
