<template>
  <div class="popular-container">
    <!-- 뷰 토글 버튼 -->
    <div class="view-toggle">
      <button @click="setView('grid')" :class="{ active: currentView === 'grid' }">Grid View</button>
      <button @click="setView('list')" :class="{ active: currentView === 'list' }">List View</button>
    </div>

    <!-- Movie Grid 컴포넌트 -->
    <MovieGrid v-if="currentView === 'grid'" :fetchUrl="fetchURL" :apiKey="apiKey" />

    <!-- Movie Infinite Scroll 컴포넌트 -->
    <MovieInfiniteScroll v-if="currentView === 'list'" :apiKey="apiKey" genreCode="28" />
  </div>
</template>

<script>
import { ref } from "vue";
import MovieGrid from "../../../views/views/movie-grid.component.vue";
import MovieInfiniteScroll from "../../../views/views/movie-infinite-scroll.component.vue";
import { getURL4PopularMovies } from "../../../util/movie/URL";

export default {
  name: "HomePopular",
  components: {
    MovieGrid,
    MovieInfiniteScroll,
  },
  setup() {
    const currentView = ref("grid");

    // 하드코딩된 API 키
    const apiKey = "b4dd7d0ce31fa1fb024fd2f2e48e4135";

    // API URL 생성
    const fetchURL = getURL4PopularMovies(apiKey);

    const setView = (view) => {
      currentView.value = view;
    };

    return {
      currentView,
      setView,
      fetchURL,
      apiKey,
    };
  },
};
</script>

<style scoped>
.view-toggle {
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
}

.view-toggle button {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 15px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 4px;
}

.view-toggle button.active {
  background-color: #535bf2;
}
</style>
