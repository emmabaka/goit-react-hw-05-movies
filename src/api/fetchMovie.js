import axios from 'axios';

async function fetchMovie() {
  const res = await axios.get(
    'search/movie?query=movie&api_key=e9d0a81ada840dc5591eec7d6bc6424f'
  );
  const data = await res;
  return data;
}

export default fetchMovie;
