<template>
  <div class="home">
    <!-- 배너 섹션 -->
    <div class="banner">
      <div class="banner-content">
        <h1>{{ featuredMovie?.title || "영화 제목" }}</h1>
        <p>{{ featuredMovie?.overview || "영화 줄거리가 여기에 표시됩니다." }}</p>
        <div class="banner-buttons">
          <button>재생</button>
          <button>상세 정보</button>
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

    <!-- 영화 슬라이더 섹션 -->
    <section v-if="popularMovies.length" class="movie-sliders">
      <h2>인기 영화</h2>
      <div class="movie-row">
        <div
          v-for="movie in popularMovies"
          :key="movie.id"
          class="movie-card"
        >
          <img
            :src="getImageUrl(movie.poster_path)"
            :alt="movie.title"
          />
          <p>{{ movie.title }}</p>
        </div>
      </div>
    </section>

    <section v-if="newReleases.length" class="movie-sliders">
      <h2>최신 영화</h2>
      <div class="movie-row">
        <div
          v-for="movie in newReleases"
          :key="movie.id"
          class="movie-card"
        >
          <img
            :src="getImageUrl(movie.poster_path)"
            :alt="movie.title"
          />
          <p>{{ movie.title }}</p>
        </div>
      </div>
    </section>

    <section v-if="actionMovies.length" class="movie-sliders">
      <h2>액션 영화</h2>
      <div class="movie-row">
        <div
          v-for="movie in actionMovies"
          :key="movie.id"
          class="movie-card"
        >
          <img
            :src="getImageUrl(movie.poster_path)"
            :alt="movie.title"
          />
          <p>{{ movie.title }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import {
  fetchFeaturedMovie,
  getURL4PopularMovies,
  getURL4ReleaseMovies,
  getURL4GenreMovies,
} from "../../../util/movie/URL";

export default {
  name: "HomeMain",
  setup() {
    const apiKey = "b4dd7d0ce31fa1fb024fd2f2e48e4135";
    const featuredMovie = ref(null);
    const popularMovies = ref([]);
    const newReleases = ref([]);
    const actionMovies = ref([]);

    // API 호출
    const fetchMovies = async () => {
      try {
        // 배너 영화
        featuredMovie.value = await fetchFeaturedMovie(apiKey);

        // 인기 영화
        const popularResponse = await fetch(getURL4PopularMovies(apiKey));
        popularMovies.value = (await popularResponse.json()).results;

        // 최신 영화
        const newReleasesResponse = await fetch(getURL4ReleaseMovies(apiKey));
        newReleases.value = (await newReleasesResponse.json()).results;

        // 액션 영화
        const actionResponse = await fetch(
          getURL4GenreMovies(apiKey, "28")
        );
        actionMovies.value = (await actionResponse.json()).results;
      } catch (error) {
        console.error("영화를 가져오는 중 오류 발생:", error);
      }
    };

    const getImageUrl = (path) =>
      `https://image.tmdb.org/t/p/w300${path || ""}`;

    onMounted(() => {
      fetchMovies();
    });

    return {
      featuredMovie,
      popularMovies,
      newReleases,
      actionMovies,
      getImageUrl,
    };
  },
};
</script>

<style scoped>
.home {
  background-color: #141414;
  color: white;
  font-family: Arial, sans-serif;
  min-height: 100vh;
}

.banner {
  position: relative;
  height: 70vh;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
}

.banner-content {
  position: absolute;
  z-index: 10;
  padding: 20px;
  max-width: 40%;
}

.banner-content h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.banner-content p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

.banner-buttons button {
  background-color: rgba(51, 51, 51, 0.5);
  border: none;
  color: white;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 5px;
}

.banner-buttons button:hover {
  background-color: #e6e6e6;
  color: black;
}

.banner-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
}

.movie-sliders {
  padding: 20px;
}

.movie-sliders h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.movie-row {
  display: flex;
  gap: 10px;
  overflow-x: auto;
}

.movie-card {
  flex: 0 0 auto;
  width: 150px;
  text-align: center;
  color: white;
}

.movie-card img {
  width: 100%;
  border-radius: 5px;
}

.movie-card p {
  font-size: 0.9rem;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
