import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovieDetails from 'api/fetchMovieDetails';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails('review', movieId).then(res => setReviews(res));
  }, [movieId]);

  return (
    <div>
      {reviews?.results?.length === 0 || !reviews ? (
        <p>We don`t have any reviews for this movie</p>
      ) : (
        <ul>
          {reviews.results?.map(item => (
            <li key={item.id}>
              <p>Author: {item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Reviews;
