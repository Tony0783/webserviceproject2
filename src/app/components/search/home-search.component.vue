<template>
  <div class="container-search" v-if="isLoggedIn">
    <div class="container-search-bar">
      <!-- MovieSearch 컴포넌트 사용 -->
      <MovieSearch @changeOptions="changeOptions" />
    </div>
    <div class="content-search">
      <!-- MovieInfiniteScroll 컴포넌트 사용 -->
      <MovieInfiniteScroll
        :apiKey="apiKey"
        :genreCode="genreId"
        :sortingOrder="sortId"
        :voteEverage="ageId"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import MovieSearch from '../../views/search/movie-search.component.vue';
import MovieInfiniteScroll from '../../views/views/movie-infinite-scroll.component.vue';

export default {
  name: 'HomeSearch',
  components: {
    MovieSearch,
    MovieInfiniteScroll,
  },
  setup() {
    const router = useRouter();

    // 로그인 여부 확인
    const isLoggedIn = ref(false);

    // API 키 로컬 스토리지에서 가져오기
    const apiKey = ref(localStorage.getItem('TMDb-Key'));

    // API 키가 없는 경우 로그인 페이지로 이동
    onMounted(() => {
      if (!apiKey.value) {
        router.push('/signin'); // 로그인 페이지로 리다이렉트
      } else {
        isLoggedIn.value = true; // 로그인 되어 있는 경우에만 페이지 접근 허용
      }
    });

    const genreId = ref('28');
    const ageId = ref(-1);
    const sortId = ref('all');

    // 각 코드 매핑 설정
    const genreCode = {
      '장르 (전체)': 0,
      'Action': 28,
      'Adventure': 12,
      'Comedy': 35,
      'Crime': 80,
      'Family': 10751,
    };

    const sortingCode = {
      '언어 (전체)': 'all',
      '영어': 'en',
      '한국어': 'ko',
    };

    const ageCode = {
      '평점 (전체)': -1,
      '9~10': 9,
      '8~9': 8,
      '7~8': 7,
      '6~7': 6,
      '5~6': 5,
      '4~5': 4,
      '4점 이하': -2,
    };

    // 옵션 변경 핸들러
    const changeOptions = (options) => {
      genreId.value = `${genreCode[options.originalLanguage]}`;
      ageId.value = ageCode[options.translationLanguage];
      sortId.value = sortingCode[options.sorting];
    };

    return {
      isLoggedIn,
      apiKey,
      genreId,
      ageId,
      sortId,
      changeOptions,
    };
  },
};
</script>

<style scoped>
.container-search {
  margin-top: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.container-search-bar {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.content-search {
  width: 100%;
}
</style>
