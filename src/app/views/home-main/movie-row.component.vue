<template>
  <div class="movie-row">
    <h2>{{ title }}</h2>
    <div
      class="slider-container"
      @wheel="handleWheel"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <button
        class="slider-button left"
        @click="slide('left')"
        :style="{ opacity: showButtons && !atLeftEdge ? 1 : 0 }"
        :disabled="atLeftEdge"
      >
        &lt;
      </button>
      <div class="slider-window" ref="sliderWindow">
        <div
          class="movie-slider"
          ref="slider"
          :style="{ transform: `translateX(${-scrollAmount}px)` }"
        >
          <div
            v-for="movie in movies"
            :key="movie.id"
            class="movie-card"
            @click="toggleWishlist(movie)"
          >
            <img :src="getImageUrl(movie.poster_path)" :alt="movie.title || 'No Image'" />
            <div v-if="isInWishlist(movie.id)" class="wishlist-indicator">👍</div>
            <div class="movie-title">{{ movie.title }}</div>
          </div>
        </div>
      </div>
      <button
        class="slider-button right"
        @click="slide('right')"
        :style="{ opacity: showButtons && !atRightEdge ? 1 : 0 }"
        :disabled="atRightEdge"
      >
        &gt;
      </button>
    </div>
    <p v-if="movies.length === 0" class="error-message">영화를 불러올 수 없습니다.</p>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
import axios from "axios";
import { toggleWishlist, isInWishlist } from "../../util/movie/wishlist"; // 경로를 실제 위치에 맞게 수정

export default {
  name: "MovieRow",
  props: {
    title: {
      type: String,
      required: true,
    },
    fetchUrl: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const movies = ref([]); // 영화 데이터
    const slider = ref(null);
    const sliderWindow = ref(null);
    const scrollAmount = ref(0);
    const showButtons = ref(false);
    const isScrolling = ref(false);
    const touchStartX = ref(0);
    const touchEndX = ref(0);

    const maxScroll = ref(0); // 최대 스크롤 값

    // 영화 데이터를 API에서 가져오기
    const fetchMovies = async () => {
      try {
        const response = await axios.get(props.fetchUrl);
        if (response.data && Array.isArray(response.data.results)) {
          movies.value = response.data.results;
        } else {
          console.warn("Invalid API response:", response.data);
          movies.value = [];
        }
      } catch (error) {
        console.error("영화 데이터를 가져오는 중 오류 발생:", error.message || error);
        movies.value = [];
      }
    };

    // 최대 스크롤 값 계산
    const calculateMaxScroll = () => {
      if (slider.value && sliderWindow.value) {
        maxScroll.value = Math.max(
          0,
          slider.value.scrollWidth - sliderWindow.value.clientWidth
        );
      }
    };

    // 슬라이드 동작
    const slide = (direction, amount = null) => {
      const slideAmount = amount || sliderWindow.value.clientWidth * 0.8;
      if (direction === "left") {
        scrollAmount.value = Math.max(0, scrollAmount.value - slideAmount);
      } else {
        scrollAmount.value = Math.min(maxScroll.value, scrollAmount.value + slideAmount);
      }
    };

    // 이미지 URL 생성
    const getImageUrl = (path) => {
      return path ? `https://image.tmdb.org/t/p/w300${path}` : "/placeholder-image.jpg";
    };

    // 이벤트 핸들러
    const handleMouseMove = () => (showButtons.value = true);
    const handleMouseLeave = () => (showButtons.value = false);

    const handleWheel = (event) => {
      if (isScrolling.value) return;

      isScrolling.value = true;
      const direction = event.deltaY > 0 ? "right" : "left";
      slide(direction);

      setTimeout(() => {
        isScrolling.value = false;
      }, 500);
    };

    const handleTouchStart = (event) => {
      touchStartX.value = event.touches[0].clientX;
      touchEndX.value = event.touches[0].clientX;
    };

    const handleTouchMove = (event) => {
      touchEndX.value = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const touchDiff = touchStartX.value - touchEndX.value;
      const minSwipeDistance = 50;

      if (Math.abs(touchDiff) > minSwipeDistance) {
        const direction = touchDiff > 0 ? "right" : "left";
        slide(direction, Math.abs(touchDiff));
      }
    };

    // 컴포넌트 마운트 시 초기화
    onMounted(() => {
      fetchMovies();
      calculateMaxScroll();
      window.addEventListener("resize", calculateMaxScroll);
    });

    // fetchUrl 변경 시 영화 데이터 다시 로드
    watch(() => props.fetchUrl, fetchMovies);

    return {
      movies,
      slider,
      sliderWindow,
      scrollAmount,
      maxScroll,
      atLeftEdge: computed(() => scrollAmount.value <= 0),
      atRightEdge: computed(() => scrollAmount.value >= maxScroll.value),
      showButtons,
      getImageUrl,
      slide,
      handleMouseMove,
      handleMouseLeave,
      handleWheel,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      toggleWishlist,
      isInWishlist,
    };
  },
};
</script>

<style scoped>
/* 스타일은 동일 */
</style>
