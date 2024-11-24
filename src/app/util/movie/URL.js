import axios from "axios";

// 인기 영화를 가져오는 비동기 함수

export async function fetchFeaturedMovie(apiKey) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`);
    console.log(response.data.results[0]);
    return response.data.results[0];
  } catch (error) {
    console.error('Error fetching featured movie:', error);
    throw error;
  }
}

// 인기 영화의 URL을 가져오는 함수
export function getURL4PopularMovies(apiKey, page = 1) {
  return `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${page}`;
}

// 최신 개봉 영화의 URL을 가져오는 함수
export function getURL4ReleaseMovies(apiKey, page = 2) {
  return `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko-KR&page=${page}`;
}

// 특정 장르의 영화 URL을 가져오는 함수
export function getURL4GenreMovies(apiKey, genre, page = 1) {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}&language=ko-KR&page=${page}`;
}
