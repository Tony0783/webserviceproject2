import { createRouter, createWebHistory } from 'vue-router';

// 페이지 컴포넌트 import
import HomeMain from '../app/components/home/main/home-main.component.vue';
import HomePopular from '../app/components/home/popular/home-popular.component.vue';
import HomeWishlist from '../app/components/home/wishlist/home-wishlist.component.vue';
import HomeSearch from '../app/components/search/home-search.component.vue';
import SignIn from '../app/components/sign-in/sign-in.component.vue';

// 로그인 상태 확인 함수
const isLoggedIn = () => {
  // Local Storage에서 로그인 상태 확인 (API 키가 저장되어 있는지 확인)
  return !!localStorage.getItem('TMDb-Key');
};

const routes = [
  // 기본 경로를 '/main'으로 리다이렉션
  { path: '/', redirect: '/main' },
  // '/main'을 메인 페이지로 설정
  { path: '/main', name: 'HomeMain', component: HomeMain, meta: { requiresAuth: true } },
  { path: '/popular', name: 'HomePopular', component: HomePopular, meta: { requiresAuth: true } },
  { path: '/wishlist', name: 'HomeWishlist', component: HomeWishlist, meta: { requiresAuth: true } },
  { path: '/search', name: 'HomeSearch', component: HomeSearch, meta: { requiresAuth: true } },
  { path: '/sign-in', name: 'SignIn', component: SignIn },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 전역 가드 추가: 로그인 여부 확인
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    // 로그인이 필요하지만 로그인되지 않은 경우, /sign-in으로 리다이렉트
    next({ path: '/sign-in', query: { redirect: to.fullPath } });
  } else {
    // 조건이 충족되면 정상적으로 이동
    next();
  }
});

export default router;
