<template>
  <div class="movie-grid" ref="gridContainer">
    <div :class="['grid-container', currentView]">
      <div
        v-for="(movieGroup, index) in visibleMovieGroups"
        :key="index"
        :class="['movie-row', { full: movieGroup.length === rowSize }]"
      >
        <div
          v-for="movie in movieGroup"
          :key="movie.id"
          class="movie-card"
          @mouseup="handleToggleWishlist(movie)"
        >
          <img
            v-if="movie.poster_path"
            :src="getImageUrl(movie.poster_path)"
            :alt="movie.title"
          />
          <div v-else class="placeholder">이미지 없음</div>
          <div class="movie-title">{{ movie.title }}</div>
          <div
            v-if="checkIsInWishlist(movie.id)"
            class="wishlist-indicator"
          >👍</div>
        </div>
      </div>
    </div>
    <div class="pagination" v-if="totalPages > 1">
      <button @click="prevPage" :disabled="currentPage === 1">&lt; 이전</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">다음 &gt;</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from "vue";
import axios from "axios";
import { toggleWishlist, isInWishlist } from "../../util/movie/wishlist.js";

export default {
  name: "MovieGrid",
  props: {
    fetchUrl: {
      type: String,
      required: true,
    },
    apiKey: {
      type: String,
      required: true, // API 키를 반드시 부모 컴포넌트에서 전달받도록 설정
    },
  },
  setup(props) {
    const movies = ref([]);
    const currentPage = ref(1);
    const rowSize = ref(4);
    const moviesPerPage = ref(20);
    const currentView = ref("grid");
    const gridContainer = ref(null);
    const isMobile = ref(window.innerWidth <= 768); // 모바일 여부 확인 변수

    const fetchMovies = async () => {
      if (!props.apiKey) {
        alert("API Key가 설정되지 않았습니다. 설정을 확인해주세요.");
        console.error("API Key is not defined.");
        return;
      }

      try {
        const response = await axios.get(props.fetchUrl, {
          params: {
            api_key: props.apiKey,
            language: "ko-KR",
            page: currentPage.value,
          },
        });
        movies.value = response.data.results;
      } catch (error) {
        console.error("Error fetching movies:", error);
        alert("영화를 가져오는 중 오류가 발생했습니다. API Key와 URL을 확인하세요.");
      }
    };

    const getImageUrl = (path) => `https://image.tmdb.org/t/p/w300${path}`;
    const visibleMovieGroups = computed(() => {
      const startIndex = (currentPage.value - 1) * moviesPerPage.value;
      const endIndex = startIndex + moviesPerPage.value;
      const paginatedMovies = movies.value.slice(startIndex, endIndex);

      return paginatedMovies.reduce((resultArray, item, index) => {
        const groupIndex = Math.floor(index / rowSize.value);
        if (!resultArray[groupIndex]) resultArray[groupIndex] = [];
        resultArray[groupIndex].push(item);
        return resultArray;
      }, []);
    });

    const totalPages = computed(() =>
      Math.ceil(movies.value.length / moviesPerPage.value)
    );

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
        fetchMovies();
      }
    };

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
        fetchMovies();
      }
    };

    const handleToggleWishlist = (movie) => toggleWishlist(movie);
    const checkIsInWishlist = (movieId) => isInWishlist(movieId);

    const handleResize = () => {
      isMobile.value = window.innerWidth <= 768; // 모바일 여부 업데이트
    };

    onMounted(async () => {
      await fetchMovies();
      window.addEventListener("resize", handleResize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      movies,
      currentPage,
      rowSize,
      moviesPerPage,
      currentView,
      gridContainer,
      visibleMovieGroups,
      totalPages,
      nextPage,
      prevPage,
      getImageUrl,
      handleToggleWishlist,
      checkIsInWishlist,
      isMobile, // 반환하여 UI 로직에서도 사용할 수 있도록 함
    };
  },
};
</script>

<style scoped>
.movie-grid {
  width: 100%;
  margin-top: 30px;
}

.movie-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.movie-card {
  width: 200px;
  margin: 10px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-title {
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
}

.wishlist-indicator {
  font-size: 20px;
  color: #f39c12;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  padding: 8px 15px;
  background-color: #2069ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #bbb;
  cursor: not-allowed;
}

.placeholder {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eaeaea;
  color: #555;
  font-size: 16px;
}
</style>
