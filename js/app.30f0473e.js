(function(){"use strict";var e={7653:function(e,i,t){var a=t(3751),o=t(641);const n={id:"app"};function l(e,i,t,a,l,r){const s=(0,o.g2)("HeaderComponent"),u=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",n,[(0,o.bF)(s),(0,o.bF)(u)])}var r=t(33);const s={id:"container"},u={class:"header-left"},c={class:"logo"},d={class:"nav-links desktop-nav"},v={class:"header-right"};function g(e,i,t,a,n,l){const g=(0,o.g2)("font-awesome-icon"),p=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",s,[(0,o.Lk)("header",{class:(0,r.C4)(["app-header",{scrolled:a.isScrolled}])},[(0,o.Lk)("div",u,[(0,o.Lk)("div",c,[(0,o.bF)(p,{to:"/"},{default:(0,o.k6)((()=>[(0,o.bF)(g,{icon:["fas","ticket"],style:{height:"100%",color:"#E50914"}})])),_:1})]),(0,o.Lk)("nav",d,[(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.bF)(p,{to:"/"},{default:(0,o.k6)((()=>i[3]||(i[3]=[(0,o.eW)("홈")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(p,{to:"/popular"},{default:(0,o.k6)((()=>i[4]||(i[4]=[(0,o.eW)("대세 콘텐츠")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(p,{to:"/wishlist"},{default:(0,o.k6)((()=>i[5]||(i[5]=[(0,o.eW)("내가 찜한 리스트")]))),_:1})]),(0,o.Lk)("li",null,[(0,o.bF)(p,{to:"/search"},{default:(0,o.k6)((()=>i[6]||(i[6]=[(0,o.eW)("찾아보기")]))),_:1})])])])]),(0,o.Lk)("div",v,[(0,o.Lk)("button",{class:"icon-button",onClick:i[0]||(i[0]=(...e)=>a.removeKey&&a.removeKey(...e))},[(0,o.bF)(g,{icon:["fas","user"]})]),(0,o.Lk)("button",{class:"icon-button mobile-menu-button",onClick:i[1]||(i[1]=(...e)=>a.toggleMobileMenu&&a.toggleMobileMenu(...e))},[(0,o.bF)(g,{icon:["fas","bars"]})])])],2),(0,o.Lk)("div",{class:(0,r.C4)(["mobile-nav",{open:a.isMobileMenuOpen}])},[(0,o.Lk)("button",{class:"close-button",onClick:i[2]||(i[2]=(...e)=>a.toggleMobileMenu&&a.toggleMobileMenu(...e))},[(0,o.bF)(g,{icon:["fas","times"]})]),(0,o.Lk)("nav",null,[(0,o.Lk)("ul",null,[(0,o.Lk)("li",null,[(0,o.bF)(p,{to:"/",onClick:a.toggleMobileMenu},{default:(0,o.k6)((()=>i[7]||(i[7]=[(0,o.eW)("홈")]))),_:1},8,["onClick"])]),(0,o.Lk)("li",null,[(0,o.bF)(p,{to:"/popular",onClick:a.toggleMobileMenu},{default:(0,o.k6)((()=>i[8]||(i[8]=[(0,o.eW)("대세 콘텐츠")]))),_:1},8,["onClick"])]),(0,o.Lk)("li",null,[(0,o.bF)(p,{to:"/wishlist",onClick:a.toggleMobileMenu},{default:(0,o.k6)((()=>i[9]||(i[9]=[(0,o.eW)("내가 찜한 리스트")]))),_:1},8,["onClick"])]),(0,o.Lk)("li",null,[(0,o.bF)(p,{to:"/search",onClick:a.toggleMobileMenu},{default:(0,o.k6)((()=>i[10]||(i[10]=[(0,o.eW)("찾아보기")]))),_:1},8,["onClick"])])])])],2)])}t(4114);var p=t(953),m=t(5220),h=t(1273),k=t(6188),f=t(7107);f.Yv.add(k.MjD,k.X46,k.ycA,k.ckx,k.GRI);var w={name:"HeaderComponent",components:{FontAwesomeIcon:h.gc},setup(){const e=(0,p.KR)(!1),i=(0,p.KR)(!1),t=(0,m.rd)(),a=()=>{e.value=window.scrollY>50},n=()=>{localStorage.removeItem("TMDb-Key"),t.push("/sign-in")},l=()=>{i.value=!i.value};return(0,o.sV)((()=>{window.addEventListener("scroll",a)})),(0,o.hi)((()=>{window.removeEventListener("scroll",a)})),{isScrolled:e,isMobileMenuOpen:i,removeKey:n,toggleMobileMenu:l}}},b=t(6262);const y=(0,b.A)(w,[["render",g],["__scopeId","data-v-26cbb121"]]);var L=y,C={name:"App",components:{HeaderComponent:L}};const K=(0,b.A)(C,[["render",l]]);var E=K;const M={class:"home"},I={class:"banner"},R={class:"banner-content"},_={key:0,class:"movie-sliders"},P={class:"movie-row"},S=["src","alt"],X={key:1,class:"movie-sliders"},W={class:"movie-row"},A=["src","alt"],F={key:2,class:"movie-sliders"},O={class:"movie-row"},V=["src","alt"];function T(e,i,t,a,n,l){return(0,o.uX)(),(0,o.CE)("div",M,[(0,o.Lk)("div",I,[(0,o.Lk)("div",R,[(0,o.Lk)("h1",null,(0,r.v_)(a.featuredMovie?.title||"영화 제목"),1),(0,o.Lk)("p",null,(0,r.v_)(a.featuredMovie?.overview||"영화 줄거리가 여기에 표시됩니다."),1),i[0]||(i[0]=(0,o.Lk)("div",{class:"banner-buttons"},[(0,o.Lk)("button",null,"재생"),(0,o.Lk)("button",null,"상세 정보")],-1))]),(0,o.Lk)("div",{class:"banner-image",style:(0,r.Tr)({backgroundImage:a.featuredMovie?.backdrop_path?`url(https://image.tmdb.org/t/p/original${a.featuredMovie.backdrop_path})`:"none"})},null,4)]),a.popularMovies.length?((0,o.uX)(),(0,o.CE)("section",_,[i[1]||(i[1]=(0,o.Lk)("h2",null,"인기 영화",-1)),(0,o.Lk)("div",P,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.popularMovies,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"movie-card"},[(0,o.Lk)("img",{src:a.getImageUrl(e.poster_path),alt:e.title},null,8,S),(0,o.Lk)("p",null,(0,r.v_)(e.title),1)])))),128))])])):(0,o.Q3)("",!0),a.newReleases.length?((0,o.uX)(),(0,o.CE)("section",X,[i[2]||(i[2]=(0,o.Lk)("h2",null,"최신 영화",-1)),(0,o.Lk)("div",W,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.newReleases,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"movie-card"},[(0,o.Lk)("img",{src:a.getImageUrl(e.poster_path),alt:e.title},null,8,A),(0,o.Lk)("p",null,(0,r.v_)(e.title),1)])))),128))])])):(0,o.Q3)("",!0),a.actionMovies.length?((0,o.uX)(),(0,o.CE)("section",F,[i[3]||(i[3]=(0,o.Lk)("h2",null,"액션 영화",-1)),(0,o.Lk)("div",O,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.actionMovies,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"movie-card"},[(0,o.Lk)("img",{src:a.getImageUrl(e.poster_path),alt:e.title},null,8,V),(0,o.Lk)("p",null,(0,r.v_)(e.title),1)])))),128))])])):(0,o.Q3)("",!0)])}var U=t(4335);async function j(e){try{const i=await U.A.get(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR`);return console.log(i.data.results[0]),i.data.results[0]}catch(i){throw console.error("Error fetching featured movie:",i),i}}function $(e,i=1){return`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=${i}`}function x(e,i=2){return`https://api.themoviedb.org/3/movie/now_playing?api_key=${e}&language=ko-KR&page=${i}`}function z(e,i,t=1){return`https://api.themoviedb.org/3/discover/movie?api_key=${e}&with_genres=${i}&language=ko-KR&page=${t}`}var q={name:"HomeMain",setup(){const e="b4dd7d0ce31fa1fb024fd2f2e48e4135",i=(0,p.KR)(null),t=(0,p.KR)([]),a=(0,p.KR)([]),n=(0,p.KR)([]),l=async()=>{try{i.value=await j(e);const o=await fetch($(e));t.value=(await o.json()).results;const l=await fetch(x(e));a.value=(await l.json()).results;const r=await fetch(z(e,"28"));n.value=(await r.json()).results}catch(o){console.error("영화를 가져오는 중 오류 발생:",o)}},r=e=>`https://image.tmdb.org/t/p/w300${e||""}`;return(0,o.sV)((()=>{l()})),{featuredMovie:i,popularMovies:t,newReleases:a,actionMovies:n,getImageUrl:r}}};const D=(0,b.A)(q,[["render",T],["__scopeId","data-v-4be8604e"]]);var H=D;const Q={class:"popular-container"},G={class:"view-toggle"};function J(e,i,t,a,n,l){const s=(0,o.g2)("MovieGrid"),u=(0,o.g2)("MovieInfiniteScroll");return(0,o.uX)(),(0,o.CE)("div",Q,[(0,o.Lk)("div",G,[(0,o.Lk)("button",{onClick:i[0]||(i[0]=e=>a.setView("grid")),class:(0,r.C4)({active:"grid"===a.currentView})},"Grid View",2),(0,o.Lk)("button",{onClick:i[1]||(i[1]=e=>a.setView("list")),class:(0,r.C4)({active:"list"===a.currentView})},"List View",2)]),"grid"===a.currentView?((0,o.uX)(),(0,o.Wv)(s,{key:0,fetchUrl:a.fetchURL,apiKey:a.apiKey},null,8,["fetchUrl","apiKey"])):(0,o.Q3)("",!0),"list"===a.currentView?((0,o.uX)(),(0,o.Wv)(u,{key:1,apiKey:a.apiKey,genreCode:"28"},null,8,["apiKey"])):(0,o.Q3)("",!0)])}const B={class:"movie-grid",ref:"gridContainer"},N=["onMouseup"],Y=["src","alt"],Z={key:1,class:"placeholder"},ee={class:"movie-title"},ie={key:2,class:"wishlist-indicator"},te={key:0,class:"pagination"},ae=["disabled"],oe=["disabled"];function ne(e,i,t,a,n,l){return(0,o.uX)(),(0,o.CE)("div",B,[(0,o.Lk)("div",{class:(0,r.C4)(["grid-container",a.currentView])},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.visibleMovieGroups,((e,i)=>((0,o.uX)(),(0,o.CE)("div",{key:i,class:(0,r.C4)(["movie-row",{full:e.length===a.rowSize}])},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"movie-card",onMouseup:i=>a.handleToggleWishlist(e)},[e.poster_path?((0,o.uX)(),(0,o.CE)("img",{key:0,src:a.getImageUrl(e.poster_path),alt:e.title},null,8,Y)):((0,o.uX)(),(0,o.CE)("div",Z,"이미지 없음")),(0,o.Lk)("div",ee,(0,r.v_)(e.title),1),a.checkIsInWishlist(e.id)?((0,o.uX)(),(0,o.CE)("div",ie,"👍")):(0,o.Q3)("",!0)],40,N)))),128))],2)))),128))],2),a.totalPages>1?((0,o.uX)(),(0,o.CE)("div",te,[(0,o.Lk)("button",{onClick:i[0]||(i[0]=(...e)=>a.prevPage&&a.prevPage(...e)),disabled:1===a.currentPage},"< 이전",8,ae),(0,o.Lk)("span",null,(0,r.v_)(a.currentPage)+" / "+(0,r.v_)(a.totalPages),1),(0,o.Lk)("button",{onClick:i[1]||(i[1]=(...e)=>a.nextPage&&a.nextPage(...e)),disabled:a.currentPage===a.totalPages},"다음 >",8,oe)])):(0,o.Q3)("",!0)],512)}t(8992),t(8872),t(4520),t(7550);const le=(0,p.KR)([]);function re(){const e=localStorage.getItem("movieWishlist");e&&(le.value=JSON.parse(e))}function se(){localStorage.setItem("movieWishlist",JSON.stringify(le.value))}function ue(e){const i=le.value.findIndex((i=>i.id===e.id));-1===i?le.value.push(e):le.value=le.value.filter((i=>i.id!==e.id)),se()}function ce(e){return le.value.some((i=>i.id===e))}re();var de={name:"MovieGrid",props:{fetchUrl:{type:String,required:!0},apiKey:{type:String,required:!0}},setup(e){const i=(0,p.KR)([]),t=(0,p.KR)(1),a=(0,p.KR)(4),n=(0,p.KR)(20),l=(0,p.KR)("grid"),r=(0,p.KR)(null),s=(0,p.KR)(window.innerWidth<=768),u=async()=>{if(!e.apiKey)return alert("API Key가 설정되지 않았습니다. 설정을 확인해주세요."),void console.error("API Key is not defined.");try{const a=await U.A.get(e.fetchUrl,{params:{api_key:e.apiKey,language:"ko-KR",page:t.value}});i.value=a.data.results}catch(a){console.error("Error fetching movies:",a),alert("영화를 가져오는 중 오류가 발생했습니다. API Key와 URL을 확인하세요.")}},c=e=>`https://image.tmdb.org/t/p/w300${e}`,d=(0,o.EW)((()=>{const e=(t.value-1)*n.value,o=e+n.value,l=i.value.slice(e,o);return l.reduce(((e,i,t)=>{const o=Math.floor(t/a.value);return e[o]||(e[o]=[]),e[o].push(i),e}),[])})),v=(0,o.EW)((()=>Math.ceil(i.value.length/n.value))),g=()=>{t.value<v.value&&(t.value++,u())},m=()=>{t.value>1&&(t.value--,u())},h=e=>ue(e),k=e=>ce(e),f=()=>{s.value=window.innerWidth<=768};return(0,o.sV)((async()=>{await u(),window.addEventListener("resize",f)})),(0,o.hi)((()=>{window.removeEventListener("resize",f)})),{movies:i,currentPage:t,rowSize:a,moviesPerPage:n,currentView:l,gridContainer:r,visibleMovieGroups:d,totalPages:v,nextPage:g,prevPage:m,getImageUrl:c,handleToggleWishlist:h,checkIsInWishlist:k,isMobile:s}}};const ve=(0,b.A)(de,[["render",ne],["__scopeId","data-v-2f7b648d"]]);var ge=ve;const pe={class:"movie-grid",ref:"gridContainer"},me=["onMouseup"],he=["src","alt"],ke={class:"movie-title"},fe={key:0,class:"wishlist-indicator"},we={ref:"loadingTrigger",class:"loading-trigger"},be={key:0,class:"loading-indicator"},ye={key:1,class:"no-movies-message"};function Le(e,i,t,a,n,l){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("div",pe,[(0,o.Lk)("div",{class:(0,r.C4)(["grid-container",a.currentView])},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.visibleMovieGroups,((e,i)=>((0,o.uX)(),(0,o.CE)("div",{key:i,class:(0,r.C4)(["movie-row",{full:e.length===a.rowSize}])},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"movie-card",onMouseup:i=>a.handleToggleWishlist(e)},[(0,o.Lk)("img",{src:a.getImageUrl(e.poster_path),alt:e.title,loading:"lazy"},null,8,he),(0,o.Lk)("div",ke,(0,r.v_)(e.title),1),a.checkIsInWishlist(e.id)?((0,o.uX)(),(0,o.CE)("div",fe,"👍")):(0,o.Q3)("",!0)],40,me)))),128))],2)))),128))],2),(0,o.Lk)("div",we,[a.isLoading?((0,o.uX)(),(0,o.CE)("div",be,i[1]||(i[1]=[(0,o.Lk)("div",{class:"spinner"},null,-1),(0,o.Lk)("span",null,"로딩 중...",-1)]))):a.hasMore||0!==a.movies.length?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("div",ye,i[2]||(i[2]=[(0,o.Lk)("p",null,"해당 조건에 맞는 영화가 없습니다.",-1)])))],512),a.showTopButton?((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:i[0]||(i[0]=(...e)=>a.scrollToTopAndReset&&a.scrollToTopAndReset(...e)),class:"top-button","aria-label":"맨 위로 이동"}," Top ")):(0,o.Q3)("",!0)],512)])}var Ce={name:"MovieInfiniteScroll",props:{genreCode:String,apiKey:String,sortingOrder:{type:String,default:"popularity.desc"},voteAverage:{type:Number,default:-1},language:{type:String,default:"all"}},setup(e){const i=(0,p.KR)([]),t=(0,p.KR)(1),a=(0,p.KR)(4),n=(0,p.KR)(!1),l=(0,p.KR)(window.innerWidth<=768),r=(0,p.KR)("grid"),s=(0,p.KR)(!0),u=(0,p.KR)(!1),c=(0,p.KR)(null),d=(0,p.KR)(null),v=(0,p.KR)(null),g=()=>{v.value=new IntersectionObserver((e=>{e[0].isIntersecting&&!n.value&&s.value&&m()}),{rootMargin:"100px",threshold:.1}),d.value&&v.value.observe(d.value)},m=async()=>{if(!n.value&&s.value){n.value=!0;try{const a={api_key:e.apiKey,language:"all"!==e.language?e.language:"ko-KR",page:t.value,with_genres:"0"!==e.genreCode?e.genreCode:void 0,sort_by:e.sortingOrder,"vote_average.gte":e.voteAverage>0?e.voteAverage:void 0},o=await U.A.get("https://api.themoviedb.org/3/discover/movie",{params:a}),n=o.data.results;n&&0!==n.length?(i.value=[...i.value,...n],t.value++):(1===t.value&&(i.value=[]),s.value=!1)}catch(a){console.error("Error fetching movies:",a)}finally{n.value=!1}}},h=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/assets/default-movie-poster.jpg",k=(0,o.EW)((()=>i.value.reduce(((e,i,t)=>{const o=Math.floor(t/a.value);return e[o]||(e[o]=[]),e[o].push(i),e}),[])));(0,o.wB)([()=>e.genreCode,()=>e.sortingOrder,()=>e.voteAverage,()=>e.language],(()=>{L()}));const f=()=>{l.value=window.innerWidth<=768,w()},w=()=>{if(c.value){const e=c.value.offsetWidth,i=l.value?100:300,t=l.value?10:15;a.value=Math.floor(e/(i+t))}},b=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;u.value=e>300},y=()=>{window.scrollTo({top:0,behavior:"smooth"})},L=()=>{i.value=[],t.value=1,s.value=!0,m()},C=e=>{ue(e)},K=e=>ce(e);return(0,o.sV)((()=>{g(),m(),f(),window.addEventListener("resize",f),window.addEventListener("scroll",b)})),(0,o.hi)((()=>{window.removeEventListener("resize",f),window.removeEventListener("scroll",b),v.value&&v.value.disconnect()})),{movies:i,currentPage:t,rowSize:a,isLoading:n,isMobile:l,currentView:r,hasMore:s,showTopButton:u,gridContainer:c,loadingTrigger:d,visibleMovieGroups:k,fetchMovies:m,getImageUrl:h,scrollToTopAndReset:y,handleToggleWishlist:C,checkIsInWishlist:K}}};const Ke=(0,b.A)(Ce,[["render",Le],["__scopeId","data-v-d70f7ab8"]]);var Ee=Ke,Me={name:"HomePopular",components:{MovieGrid:ge,MovieInfiniteScroll:Ee},setup(){const e=(0,p.KR)("grid"),i="b4dd7d0ce31fa1fb024fd2f2e48e4135",t=$(i),a=i=>{e.value=i};return{currentView:e,setView:a,fetchURL:t,apiKey:i}}};const Ie=(0,b.A)(Me,[["render",J],["__scopeId","data-v-787f5dc6"]]);var Re=Ie;function _e(e,i,t,a,n,l){const r=(0,o.g2)("MovieWishlist");return(0,o.uX)(),(0,o.Wv)(r)}const Pe={class:"movie-grid",ref:"gridContainer"},Se=["onClick"],Xe=["src","alt"],We={class:"movie-title"},Ae={key:0,class:"empty-wishlist"},Fe={key:1,class:"pagination"},Oe=["disabled"],Ve=["disabled"];function Te(e,i,t,a,n,l){return(0,o.uX)(),(0,o.CE)("div",Pe,[(0,o.Lk)("div",{class:(0,r.C4)(["grid-container",a.currentView])},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.visibleWishlistMovies,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{key:t,class:(0,r.C4)(["movie-row",{full:e.length===a.rowSize}])},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.id,class:"movie-card",onClick:i=>a.toggleWishlist(e)},[(0,o.Lk)("img",{src:a.getImageUrl(e.poster_path),alt:e.title},null,8,Xe),(0,o.Lk)("div",We,(0,r.v_)(e.title),1),i[2]||(i[2]=(0,o.Lk)("div",{class:"wishlist-indicator"},"👍",-1))],8,Se)))),128))],2)))),128))],2),0===a.wishlistMovies.length?((0,o.uX)(),(0,o.CE)("div",Ae," 위시리스트가 비어 있습니다. ")):(0,o.Q3)("",!0),a.totalPages>1?((0,o.uX)(),(0,o.CE)("div",Fe,[(0,o.Lk)("button",{onClick:i[0]||(i[0]=(...e)=>a.prevPage&&a.prevPage(...e)),disabled:1===a.currentPage},"< 이전",8,Oe),(0,o.Lk)("span",null,(0,r.v_)(a.currentPage)+" / "+(0,r.v_)(a.totalPages),1),(0,o.Lk)("button",{onClick:i[1]||(i[1]=(...e)=>a.nextPage&&a.nextPage(...e)),disabled:a.currentPage===a.totalPages},"다음 >",8,Ve)])):(0,o.Q3)("",!0)],512)}var Ue=t(3591),je={name:"MovieWishlist",setup(){const e=(0,p.KR)(null),i=(0,p.KR)(4),t=(0,p.KR)(20),a=(0,p.KR)(1),n=(0,p.KR)(window.innerWidth<=768),l=(0,p.KR)("grid"),r=(0,p.KR)([]),s=(0,p.KR)([]);let u;const c=()=>{r.value=le.value||[],v()},d=()=>{if(e.value){const a=e.value.offsetWidth,o=window.innerHeight-e.value.offsetTop,l=n.value?90:220,r=n.value?150:330,s=n.value?10:15,u=-10;i.value=Math.floor(a/(l+s));const c=Math.floor(o/(r+u));t.value=i.value*c,v()}},v=()=>{const e=(a.value-1)*t.value,o=e+t.value,n=r.value.slice(e,o);s.value=n.reduce(((e,t,a)=>{const o=Math.floor(a/i.value);return e[o]||(e[o]=[]),e[o].push(t),e}),[])},g=()=>{a.value<w.value&&(a.value++,v())},m=()=>{a.value>1&&(a.value--,v())},h=()=>{n.value=window.innerWidth<=768,d()},k=e=>{le.value.includes(e)?le.value=le.value.filter((i=>i.id!==e.id)):le.value.push(e),c()},f=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/placeholder-image.jpg",w=(0,p.KR)(0);return(0,o.nT)((()=>{w.value=Math.ceil(r.value.length/t.value)})),(0,o.sV)((()=>{c(),h(),window.addEventListener("resize",h),u=new Ue.A((()=>d())),e.value&&u.observe(e.value)})),(0,o.hi)((()=>{window.removeEventListener("resize",h),e.value&&u.unobserve(e.value),u.disconnect()})),{gridContainer:e,rowSize:i,moviesPerPage:t,currentPage:a,isMobile:n,currentView:l,wishlistMovies:r,visibleWishlistMovies:s,totalPages:w,nextPage:g,prevPage:m,handleResize:h,toggleWishlist:k,getImageUrl:f}}};const $e=(0,b.A)(je,[["render",Te],["__scopeId","data-v-4720f8aa"]]);var xe=$e,ze={name:"HomeWishlistComponent",components:{MovieWishlist:xe}};const qe=(0,b.A)(ze,[["render",_e],["__scopeId","data-v-4cf7d73c"]]);var De=qe;const He={class:"container-search"},Qe={class:"container-search-bar"},Ge={class:"content-search"};function Je(e,i,t,a,n,l){const r=(0,o.g2)("MovieSearch"),s=(0,o.g2)("MovieInfiniteScroll");return(0,o.uX)(),(0,o.CE)("div",He,[(0,o.Lk)("div",Qe,[(0,o.bF)(r,{onChangeOptions:a.changeOptions},null,8,["onChangeOptions"])]),(0,o.Lk)("div",Ge,[(0,o.bF)(s,{apiKey:a.apiKey,genreCode:a.genreId,sortingOrder:a.sortId,voteEverage:a.ageId},null,8,["apiKey","genreCode","sortingOrder","voteEverage"])])])}const Be={class:"dropdown-container"},Ne=["onClick"],Ye={class:"select-items"},Ze=["onClick"];function ei(e,i,t,n,l,s){return(0,o.uX)(),(0,o.CE)("div",Be,[i[1]||(i[1]=(0,o.Lk)("label",null,"선호하는 설정을 선택하세요",-1)),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.dropdownEntries,(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.key,class:"custom-select"},[(0,o.Lk)("div",{class:"select-selected",onClick:i=>n.toggleDropdown(e.key)},(0,r.v_)(n.selectedOptions[e.key]),9,Ne),(0,o.bo)((0,o.Lk)("div",Ye,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.options,(i=>((0,o.uX)(),(0,o.CE)("div",{key:i,onClick:t=>n.selectOption(e.key,i)},(0,r.v_)(i),9,Ze)))),128))],512),[[a.aG,n.activeDropdown===e.key]])])))),128)),(0,o.Lk)("button",{class:"clear-options",onClick:i[0]||(i[0]=(...e)=>n.clearOptions&&n.clearOptions(...e))},"초기화")])}t(1454);var ii={name:"MovieSearch",emits:["changeOptions"],setup(e,{emit:i}){const t={originalLanguage:["장르 (전체)","Action","Adventure","Comedy","Crime","Family"],translationLanguage:["평점 (전체)","9~10","8~9","7~8","6~7","5~6","4~5","4점 이하"],sorting:["언어 (전체)","영어","한국어"]},a={originalLanguage:"장르 (전체)",translationLanguage:"평점 (전체)",sorting:"언어 (전체)"},n=(0,p.KR)({...a}),l=(0,p.KR)(null),r=(0,o.EW)((()=>Object.entries(t).map((([e,i])=>({key:e,options:i}))))),s=e=>{l.value=l.value===e?null:e},u=(e,t)=>{n.value={...n.value,[e]:t},l.value=null,i("changeOptions",n.value)},c=()=>{n.value={...a},i("changeOptions",n.value)};return{selectedOptions:n,activeDropdown:l,dropdownEntries:r,toggleDropdown:s,selectOption:u,clearOptions:c}}};const ti=(0,b.A)(ii,[["render",ei],["__scopeId","data-v-7e770fc9"]]);var ai=ti,oi={name:"HomeSearch",components:{MovieSearch:ai,MovieInfiniteScroll:Ee},setup(){const e=(0,p.KR)("b4dd7d0ce31fa1fb024fd2f2e48e4135"),i=(0,p.KR)("28"),t=(0,p.KR)(-1),a=(0,p.KR)("all"),o={"장르 (전체)":0,Action:28,Adventure:12,Comedy:35,Crime:80,Family:10751},n={"언어 (전체)":"all","영어":"en","한국어":"ko"},l={"평점 (전체)":-1,"9~10":9,"8~9":8,"7~8":7,"6~7":6,"5~6":5,"4~5":4,"4점 이하":-2},r=e=>{i.value=`${o[e.originalLanguage]}`,t.value=l[e.translationLanguage],a.value=n[e.sorting]};return{apiKey:e,genreId:i,ageId:t,sortId:a,changeOptions:r}}};const ni=(0,b.A)(oi,[["render",Je],["__scopeId","data-v-92d6f798"]]);var li=ni;const ri={class:"sign-in"},si={class:"container"},ui={id:"phone"},ci={id:"content-wrapper"},di=["disabled"],vi={class:"input"},gi={class:"input"},pi={class:"input"},mi=["disabled"];function hi(e,i,t,n,l,s){return(0,o.uX)(),(0,o.CE)("div",ri,[i[22]||(i[22]=(0,o.Lk)("div",{class:"bg-image"},null,-1)),(0,o.Lk)("div",si,[(0,o.Lk)("div",ui,[(0,o.Lk)("div",ci,[(0,o.Lk)("div",{class:(0,r.C4)(["card",{hidden:!n.isLoginVisible}]),id:"login"},[(0,o.Lk)("form",{onSubmit:i[6]||(i[6]=(0,a.D$)(((...e)=>n.handleLogin&&n.handleLogin(...e)),["prevent"]))},[i[15]||(i[15]=(0,o.Lk)("h1",null,"Sign in",-1)),(0,o.Lk)("div",{class:(0,r.C4)(["input",{active:n.isEmailFocused||n.email}])},[(0,o.bo)((0,o.Lk)("input",{id:"email",type:"email","onUpdate:modelValue":i[0]||(i[0]=e=>n.email=e),onFocus:i[1]||(i[1]=e=>n.focusInput("email")),onBlur:i[2]||(i[2]=e=>n.blurInput("email")),required:""},null,544),[[a.Jo,n.email]]),i[13]||(i[13]=(0,o.Lk)("label",{for:"email"},"Username or Email",-1))],2),(0,o.Lk)("div",{class:(0,r.C4)(["input",{active:n.isPasswordFocused||n.password}])},[(0,o.bo)((0,o.Lk)("input",{id:"password",type:"password","onUpdate:modelValue":i[3]||(i[3]=e=>n.password=e),onFocus:i[4]||(i[4]=e=>n.focusInput("password")),onBlur:i[5]||(i[5]=e=>n.blurInput("password")),required:""},null,544),[[a.Jo,n.password]]),i[14]||(i[14]=(0,o.Lk)("label",{for:"password"},"Password",-1))],2),(0,o.Lk)("button",{disabled:!n.isLoginFormValid},"Login",8,di)],32),(0,o.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:i[7]||(i[7]=(...e)=>n.toggleCard&&n.toggleCard(...e))},i[16]||(i[16]=[(0,o.eW)(" Don't have an account? "),(0,o.Lk)("b",null,"Sign up",-1)]))],2),(0,o.Lk)("div",{class:(0,r.C4)(["card",{hidden:n.isLoginVisible}]),id:"register"},[(0,o.Lk)("form",{onSubmit:i[11]||(i[11]=(0,a.D$)(((...e)=>n.handleRegister&&n.handleRegister(...e)),["prevent"]))},[i[20]||(i[20]=(0,o.Lk)("h1",null,"Sign up",-1)),(0,o.Lk)("div",vi,[(0,o.bo)((0,o.Lk)("input",{id:"register-email",type:"email","onUpdate:modelValue":i[8]||(i[8]=e=>n.registerEmail=e),required:""},null,512),[[a.Jo,n.registerEmail]]),i[17]||(i[17]=(0,o.Lk)("label",{for:"register-email"},"Email",-1))]),(0,o.Lk)("div",gi,[(0,o.bo)((0,o.Lk)("input",{id:"register-password",type:"password","onUpdate:modelValue":i[9]||(i[9]=e=>n.registerPassword=e),required:""},null,512),[[a.Jo,n.registerPassword]]),i[18]||(i[18]=(0,o.Lk)("label",{for:"register-password"},"Password",-1))]),(0,o.Lk)("div",pi,[(0,o.bo)((0,o.Lk)("input",{id:"confirm-password",type:"password","onUpdate:modelValue":i[10]||(i[10]=e=>n.confirmPassword=e),required:""},null,512),[[a.Jo,n.confirmPassword]]),i[19]||(i[19]=(0,o.Lk)("label",{for:"confirm-password"},"Confirm Password",-1))]),(0,o.Lk)("button",{disabled:!n.isRegisterFormValid},"Register",8,mi)],32),(0,o.Lk)("a",{href:"javascript:void(0)",id:"gotologin",class:"account-check",onClick:i[12]||(i[12]=(...e)=>n.toggleCard&&n.toggleCard(...e))},i[21]||(i[21]=[(0,o.eW)(" Already have an account? "),(0,o.Lk)("b",null,"Sign in",-1)]))],2)])])])])}t(2577);const ki={users:JSON.parse(localStorage.getItem("users"))||[],tryLogin(e,i){return new Promise(((t,a)=>{const o=this.users.find((t=>t.email===e&&t.password===i));o?(localStorage.setItem("TMDb-Key",o.apiKey),t({message:"로그인 성공",apiKey:o.apiKey})):a(new Error("아이디 또는 비밀번호가 잘못되었습니다."))}))},tryRegister(e,i){return new Promise(((t,a)=>{if(this.users.some((i=>i.email===e)))a(new Error("이미 존재하는 아이디입니다."));else{const a=`key-${Math.random().toString(36).substr(2,16)}`,o={email:e,password:i,apiKey:a};this.users.push(o),localStorage.setItem("users",JSON.stringify(this.users)),t({message:"회원가입 성공",apiKey:a})}}))}};var fi=ki,wi={name:"SignIn",setup(){const e=(0,m.rd)(),i=(0,p.KR)(!0),t=(0,p.KR)(""),a=(0,p.KR)(""),n=(0,p.KR)(""),l=(0,p.KR)(""),r=(0,p.KR)(""),s=(0,p.KR)(!1),u=(0,p.KR)(!1),c=(0,o.EW)((()=>t.value&&a.value)),d=(0,o.EW)((()=>n.value&&l.value&&r.value&&l.value===r.value)),v=async()=>{try{const i=await fi.tryLogin(t.value,a.value);if(!i||!i.apiKey)throw new Error("API 키가 반환되지 않았습니다.");localStorage.setItem("TMDb-Key",i.apiKey),console.log("로그인 성공, 저장된 API 키:",i.apiKey),alert("로그인 성공!"),e.push("/main")}catch(i){alert("로그인 실패: "+i.message),console.error(i)}},g=async()=>{try{const e=await fi.tryRegister(n.value,l.value);alert(e),i.value=!0}catch(e){alert("회원가입 실패: "+e.message),console.error(e)}},h=()=>{i.value=!i.value},k=e=>{"email"===e&&(s.value=!0),"password"===e&&(u.value=!0)},f=e=>{"email"===e&&(s.value=!1),"password"===e&&(u.value=!1)};return{isLoginVisible:i,email:t,password:a,registerEmail:n,registerPassword:l,confirmPassword:r,isEmailFocused:s,isPasswordFocused:u,isLoginFormValid:c,isRegisterFormValid:d,handleLogin:v,handleRegister:g,toggleCard:h,focusInput:k,blurInput:f}}};const bi=(0,b.A)(wi,[["render",hi],["__scopeId","data-v-4ae6409d"]]);var yi=bi;const Li=()=>!!localStorage.getItem("TMDb-Key"),Ci=[{path:"/",redirect:"/main"},{path:"/main",name:"HomeMain",component:H,meta:{requiresAuth:!0}},{path:"/popular",name:"HomePopular",component:Re,meta:{requiresAuth:!0}},{path:"/wishlist",name:"HomeWishlist",component:De,meta:{requiresAuth:!0}},{path:"/search",name:"HomeSearch",component:li,meta:{requiresAuth:!0}},{path:"/sign-in",name:"SignIn",component:yi}],Ki=(0,m.aE)({history:(0,m.LA)(),routes:Ci});Ki.beforeEach(((e,i,t)=>{e.meta.requiresAuth&&!Li()?t({path:"/sign-in",query:{redirect:e.fullPath}}):t()}));var Ei=Ki,Mi=t(5246);t(7917);const Ii=(0,a.Ef)(E);Ii.use(Ei),Ii.use(Mi.Ay),Ii.mount("#app")}},i={};function t(a){var o=i[a];if(void 0!==o)return o.exports;var n=i[a]={exports:{}};return e[a].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(i,a,o,n){if(!a){var l=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],n=e[c][2];for(var r=!0,s=0;s<a.length;s++)(!1&n||l>=n)&&Object.keys(t.O).every((function(e){return t.O[e](a[s])}))?a.splice(s--,1):(r=!1,n<l&&(l=n));if(r){e.splice(c--,1);var u=o();void 0!==u&&(i=u)}}return i}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,o,n]}}(),function(){t.d=function(e,i){for(var a in i)t.o(i,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:i[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};t.O.j=function(i){return 0===e[i]};var i=function(i,a){var o,n,l=a[0],r=a[1],s=a[2],u=0;if(l.some((function(i){return 0!==e[i]}))){for(o in r)t.o(r,o)&&(t.m[o]=r[o]);if(s)var c=s(t)}for(i&&i(a);u<l.length;u++)n=l[u],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(c)},a=self["webpackChunkmy_vue_project"]=self["webpackChunkmy_vue_project"]||[];a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(7653)}));a=t.O(a)})();
//# sourceMappingURL=app.30f0473e.js.map