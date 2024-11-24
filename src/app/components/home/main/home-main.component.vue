<template>
  <div class="home">
    <!-- 배너 섹션: featuredMovie가 로드되었을 때만 렌더링 -->
    <div v-if="featuredMovie" class="banner">
      <div class="banner-content">
        <h1>{{ featuredMovie?.title || "영화 제목" }}</h1>
        <p>{{ featuredMovie?.overview || "영화 줄거리가 여기에 표시됩니다." }}</p>
        <div class="banner-buttons">
          <button class="play-button">재생</button>
          <button class="info-button">상세 정보</button>
        </div>
      </div>
      <div
        class="banner-image"
        :style="{
          backgroundImage: featuredMovie?.backdrop_path
            ? `url(https://image.tmdb.org/t/p/original${featuredMovie.backdrop_path})`
            : 'none',
        }"
      ></div>
    </div>
    <div v-else class="loading-banner">로딩 중...</div>

    <!-- MovieRow 컴포넌트 -->
    <div class="movie-rows-container">
      <MovieRow title="인기 영화" :fetchUrl="popularMoviesUrl" />
      <MovieRow title="최신 영화" :fetchUrl="newReleasesUrl" />
      <MovieRow title="액션 영화" :fetchUrl="actionMoviesUrl" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import MovieRow from '../../../views/home-main/movie-row.component.vue';

export default {
  name: 'HomeMain',
  components: {
    MovieRow
  },
  setup() {
    const apiKey = 'b4dd7d0ce31fa1fb024fd2f2e48e4135';
    const featuredMovie = ref(null);

    // URL 설정
    const popularMoviesUrl = ref(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`);
    const newReleasesUrl = ref(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko-KR`);
    const actionMoviesUrl = ref(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28&language=ko-KR`);

    // 인기 영화 데이터 로드
    const loadFeaturedMovie = async () => {
      try {
        const response = await fetch(popularMoviesUrl.value);
        const data = await response.json();
        featuredMovie.value = data.results[0]; // 첫 번째 영화 설정
      } catch (error) {
        console.error('Error fetching featured movie:', error);
      }
    };

    // 스크롤 이벤트 리스너
    const scrollListener = () => {
      const header = document.querySelector('.app-header');
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }
    };

    // 컴포넌트 마운트 시 호출
    onMounted(() => {
      loadFeaturedMovie();
      window.addEventListener('scroll', scrollListener);
    });

    // 컴포넌트 언마운트 시 호출
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', scrollListener);
    });

    return {
      featuredMovie,
      popularMoviesUrl,
      newReleasesUrl,
      actionMoviesUrl
    };
  }
};
</script>

<style scoped>
.home {
  background-color: #121212;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.banner {
  position: relative;
  width: 100%;
  height: 60vh;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 4%;
}

.banner-content {
  position: absolute;
  z-index: 10;
  padding: 15px;
  max-width: 30%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

.banner-content h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}

.banner-content p {
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 20px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}

.banner-buttons {
  display: flex;
  gap: 10px;
}

.play-button {
  background-color: #e50914;
  border: none;
  color: white;
  padding: 8px 20px;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.play-button:hover {
  background-color: #f40612;
}

.info-button {
  background-color: rgba(51, 51, 51, 0.8);
  border: none;
  color: white;
  padding: 8px 20px;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.info-button:hover {
  background-color: #e6e6e6;
  color: black;
}

.banner-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.4);
}

.movie-rows-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.movie-sliders {
  padding: 15px 4%;
}

.movie-sliders h2 {
  font-size: 1.6rem;
  margin-bottom: 15px;
}

.movie-row {
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  padding-bottom: 10px;
}

.movie-card {
  flex: 0 0 auto;
  width: 100%;
  text-align: center;
  color: white;
  transition: transform 0.3s;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-card img {
  width: 100%;
  border-radius: 4px;
}

.movie-card p {
  font-size: 0.75rem;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 로딩 메시지 스타일 */
.loading-banner {
  text-align: center;
  font-size: 18px;
  color: #888;
  margin: 30px 0;
}
</style>
