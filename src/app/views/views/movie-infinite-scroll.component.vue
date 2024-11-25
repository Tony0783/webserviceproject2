<template>
  <div>
    <div class="movie-grid" ref="gridContainer">
      <div :class="['grid-container', currentView]">
        <div
          v-for="(movieGroup, index) in visibleMovieGroups"
          :key="index"
          :class="['movie-row', { 'full': movieGroup.length === rowSize }]"
        >
          <div
            v-for="movie in movieGroup"
            :key="movie.id"
            class="movie-card"
            @mouseup="handleToggleWishlist(movie)"
          >
            <img
              :src="getImageUrl(movie.poster_path)"
              :alt="movie.title"
              loading="lazy"
            />
            <div class="movie-title">{{ movie.title }}</div>
            <div v-if="checkIsInWishlist(movie.id)" class="wishlist-indicator">👍</div>
          </div>
        </div>
      </div>

      <div ref="loadingTrigger" class="loading-trigger">
        <div v-if="isLoading" class="loading-indicator">
          <div class="spinner"></div>
          <span>로딩 중...</span>
        </div>
        <div v-else-if="!hasMore && movies.length === 0" class="no-movies-message">
          <p>해당 조건에 맞는 영화가 없습니다.</p>
        </div>
      </div>

      <button
        v-if="showTopButton"
        @click="scrollToTopAndReset"
        class="top-button"
        aria-label="맨 위로 이동"
      >
        Top
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import axios from 'axios';
import { toggleWishlist, isInWishlist } from '../../util/movie/wishlist';

export default {
  name: 'MovieInfiniteScroll',
  props: {
    genreCode: String,
    apiKey: String,
    sortingOrder: { type: String, default: 'popularity.desc' },
    voteAverage: { type: Number, default: -1 },
    language: { type: String, default: 'ko-KR' }
  },
  setup(props) {
    const movies = ref([]);
    const currentPage = ref(1);
    const rowSize = ref(4);
    const isLoading = ref(false);
    const isMobile = ref(window.innerWidth <= 768);
    const currentView = ref('grid');
    const hasMore = ref(true);
    const showTopButton = ref(false);
    const gridContainer = ref(null);
    const loadingTrigger = ref(null);
    const observer = ref(null);

    // Intersection Observer 설정
    const setupIntersectionObserver = () => {
      observer.value = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLoading.value && hasMore.value) {
          fetchMovies();
        }
      }, { rootMargin: '100px', threshold: 0.1 });

      if (loadingTrigger.value) {
        observer.value.observe(loadingTrigger.value);
      }
    };

    const fetchMovies = async () => {
      if (isLoading.value || !hasMore.value) return;

      isLoading.value = true;

      try {
        const params = {
          api_key: props.apiKey,
          language: props.language !== 'all' ? props.language : 'ko-KR',
          page: currentPage.value,
          with_genres: props.genreCode && props.genreCode !== '0' ? props.genreCode : undefined,
          sort_by: props.sortingOrder,
          'vote_average.gte': props.voteAverage > 0 ? props.voteAverage : undefined,
        };

        console.log("Fetching Movies with Params:", params); // API 요청의 매개변수 출력 (디버깅용)
        
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', { params });
        const newMovies = response.data.results;

        if (!newMovies || newMovies.length === 0) {
          if (currentPage.value === 1) {
            movies.value = [];
          }
          hasMore.value = false;
        } else {
          movies.value = [...movies.value, ...newMovies];
          currentPage.value++;
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        isLoading.value = false;
      }
    };

    const getImageUrl = (path) => {
      return path ? `https://image.tmdb.org/t/p/w300${path}` : '/assets/default-movie-poster.jpg';
    };

    const visibleMovieGroups = computed(() => {
      return movies.value.reduce((resultArray, item, index) => {
        const groupIndex = Math.floor(index / rowSize.value);
        if (!resultArray[groupIndex]) {
          resultArray[groupIndex] = [];
        }
        resultArray[groupIndex].push(item);
        return resultArray;
      }, []);
    });

    watch(
      [() => props.genreCode, () => props.sortingOrder, () => props.voteAverage, () => props.language],
      () => {
        resetMovies();
      }
    );

    const handleResize = () => {
      isMobile.value = window.innerWidth <= 768;
      calculateLayout();
    };

    const calculateLayout = () => {
      if (gridContainer.value) {
        const containerWidth = gridContainer.value.offsetWidth;
        const movieCardWidth = isMobile.value ? 100 : 300;
        const horizontalGap = isMobile.value ? 10 : 15;
        rowSize.value = Math.floor(containerWidth / (movieCardWidth + horizontalGap));
      }
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      showTopButton.value = scrollTop > 300;
    };

    const scrollToTopAndReset = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const resetMovies = () => {
      movies.value = [];
      currentPage.value = 1;
      hasMore.value = true;
      fetchMovies();
    };

    const handleToggleWishlist = (movie) => {
      toggleWishlist(movie);
    };

    const checkIsInWishlist = (movieId) => isInWishlist(movieId);

    onMounted(() => {
      setupIntersectionObserver();
      fetchMovies();
      handleResize();
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (observer.value) observer.value.disconnect();
    });

    return {
      movies,
      currentPage,
      rowSize,
      isLoading,
      isMobile,
      currentView,
      hasMore,
      showTopButton,
      gridContainer,
      loadingTrigger,
      visibleMovieGroups,
      fetchMovies,
      getImageUrl,
      scrollToTopAndReset,
      handleToggleWishlist,
      checkIsInWishlist,
    };
  }
};
</script>

<style scoped>
.movie-grid {
  width: 100%;
  margin-bottom: 40px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

.top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #E50914;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-indicator {
  text-align: center;
  margin-top: 20px;
}

.no-movies-message {
  text-align: center;
  font-size: 18px;
  color: red;
}
</style>
