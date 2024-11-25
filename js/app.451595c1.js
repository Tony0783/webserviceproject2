(function(){"use strict";var e={7535:function(e,t,o){var n=o(5130),i=o(6768);const a={id:"app"};function l(e,t,o,n,l,r){const s=(0,i.g2)("HeaderComponent"),u=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",a,[(0,i.bF)(s),(0,i.bF)(u)])}var r=o(4232);const s={id:"container"},u={class:"header-left"},c={class:"logo"},d={class:"nav-links desktop-nav"},v={class:"header-right"};function g(e,t,o,n,a,l){const g=(0,i.g2)("font-awesome-icon"),p=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",s,[(0,i.Lk)("header",{class:(0,r.C4)(["app-header",{scrolled:n.isScrolled}])},[(0,i.Lk)("div",u,[(0,i.Lk)("div",c,[(0,i.bF)(p,{to:"/"},{default:(0,i.k6)((()=>[(0,i.bF)(g,{icon:["fas","ticket"],style:{height:"100%",color:"#E50914"}})])),_:1})]),(0,i.Lk)("nav",d,[(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.bF)(p,{to:"/"},{default:(0,i.k6)((()=>t[3]||(t[3]=[(0,i.eW)("홈")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(p,{to:"/popular"},{default:(0,i.k6)((()=>t[4]||(t[4]=[(0,i.eW)("대세 콘텐츠")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(p,{to:"/wishlist"},{default:(0,i.k6)((()=>t[5]||(t[5]=[(0,i.eW)("내가 찜한 리스트")]))),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(p,{to:"/search"},{default:(0,i.k6)((()=>t[6]||(t[6]=[(0,i.eW)("찾아보기")]))),_:1})])])])]),(0,i.Lk)("div",v,[n.isLoggedIn?((0,i.uX)(),(0,i.CE)("button",{key:0,class:"icon-button",onClick:t[0]||(t[0]=(...e)=>n.handleLogout&&n.handleLogout(...e))},[(0,i.bF)(g,{icon:["fas","user"]}),t[7]||(t[7]=(0,i.eW)(" Logout "))])):((0,i.uX)(),(0,i.Wv)(p,{key:1,to:"/sign-in",class:"icon-button"},{default:(0,i.k6)((()=>[(0,i.bF)(g,{icon:["fas","user"]}),t[8]||(t[8]=(0,i.eW)(" Sign In "))])),_:1})),(0,i.Lk)("button",{class:"icon-button mobile-menu-button",onClick:t[1]||(t[1]=(...e)=>n.toggleMobileMenu&&n.toggleMobileMenu(...e))},[(0,i.bF)(g,{icon:["fas","bars"]})])])],2),(0,i.Lk)("div",{class:(0,r.C4)(["mobile-nav",{open:n.isMobileMenuOpen}])},[(0,i.Lk)("button",{class:"close-button",onClick:t[2]||(t[2]=(...e)=>n.toggleMobileMenu&&n.toggleMobileMenu(...e))},[(0,i.bF)(g,{icon:["fas","times"]})]),(0,i.Lk)("nav",null,[(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.bF)(p,{to:"/",onClick:n.toggleMobileMenu},{default:(0,i.k6)((()=>t[9]||(t[9]=[(0,i.eW)("홈")]))),_:1},8,["onClick"])]),(0,i.Lk)("li",null,[(0,i.bF)(p,{to:"/popular",onClick:n.toggleMobileMenu},{default:(0,i.k6)((()=>t[10]||(t[10]=[(0,i.eW)("대세 콘텐츠")]))),_:1},8,["onClick"])]),(0,i.Lk)("li",null,[(0,i.bF)(p,{to:"/wishlist",onClick:n.toggleMobileMenu},{default:(0,i.k6)((()=>t[11]||(t[11]=[(0,i.eW)("내가 찜한 리스트")]))),_:1},8,["onClick"])]),(0,i.Lk)("li",null,[(0,i.bF)(p,{to:"/search",onClick:n.toggleMobileMenu},{default:(0,i.k6)((()=>t[12]||(t[12]=[(0,i.eW)("찾아보기")]))),_:1},8,["onClick"])])])])],2)])}o(4114);var p=o(144),h=o(1387),m=o(5234);const k=(0,m.nY)("auth",{state:()=>({isLoggedIn:!!localStorage.getItem("TMDb-Key")}),actions:{login(e){localStorage.setItem("TMDb-Key",e),this.isLoggedIn=!0},logout(){localStorage.removeItem("TMDb-Key"),this.isLoggedIn=!1}}});var f=o(292),w=o(2353),b=o(8950);b.Yv.add(w.MjD,w.X46,w.ycA,w.ckx,w.GRI);var L={name:"HeaderComponent",components:{FontAwesomeIcon:f.gc},setup(){const e=(0,p.KR)(!1),t=(0,p.KR)(!1),o=(0,h.rd)(),n=k(),a=()=>{e.value=window.scrollY>50},l=()=>{n.logout(),o.push("/sign-in")},r=()=>{t.value=!t.value};return(0,i.sV)((()=>{window.addEventListener("scroll",a)})),(0,i.hi)((()=>{window.removeEventListener("scroll",a)})),{isScrolled:e,isMobileMenuOpen:t,isLoggedIn:n.isLoggedIn,handleLogout:l,toggleMobileMenu:r}}},y=o(1241);const C=(0,y.A)(L,[["render",g],["__scopeId","data-v-690902b0"]]);var M=C,K={name:"App",components:{HeaderComponent:M}};const E=(0,y.A)(K,[["render",l]]);var I=E;const R={class:"home"},_={key:1,class:"loading-banner"};function W(e,t,o,n,a,l){const r=(0,i.g2)("Banner"),s=(0,i.g2)("MovieRow");return(0,i.uX)(),(0,i.CE)("div",R,[n.featuredMovie?((0,i.uX)(),(0,i.Wv)(r,{key:0,movie:n.featuredMovie},null,8,["movie"])):((0,i.uX)(),(0,i.CE)("div",_,"로딩 중...")),(0,i.bF)(s,{key:"popular",title:"인기 영화",fetchUrl:n.getUniqueUrl(n.popularMoviesUrl)},null,8,["fetchUrl"]),(0,i.bF)(s,{key:"romanceMovies",title:"로맨스 영화",fetchUrl:n.getUniqueUrl(n.romanceMoviesUrl)},null,8,["fetchUrl"]),(0,i.bF)(s,{key:"actionMovies",title:"액션 영화",fetchUrl:n.getUniqueUrl(n.actionMoviesUrl)},null,8,["fetchUrl"])])}const P={class:"banner-content"};function S(e,t,o,n,a,l){return o.movie?((0,i.uX)(),(0,i.CE)("div",{key:0,class:"banner",style:(0,r.Tr)({backgroundImage:`url(${l.backdropUrl})`})},[(0,i.Lk)("div",P,[(0,i.Lk)("h1",null,(0,r.v_)(o.movie.title),1),(0,i.Lk)("p",null,(0,r.v_)(o.movie.overview),1),t[0]||(t[0]=(0,i.Lk)("button",{class:"play-btn title-btn"},"재생",-1)),t[1]||(t[1]=(0,i.Lk)("button",{class:"info-btn title-btn"},"상세 정보",-1))])],4)):(0,i.Q3)("",!0)}var X={name:"BannerComponent",props:{movie:{type:Object,required:!0}},computed:{backdropUrl(){return this.movie?`https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`:""}}};const A=(0,y.A)(X,[["render",S],["__scopeId","data-v-168d04ae"]]);var T=A;const U={class:"movie-row"},F=["disabled"],O={class:"slider-window",ref:"sliderWindow"},V=["onClick"],q=["src","alt"],j={key:0,class:"wishlist-indicator"},x={class:"movie-title"},$=["disabled"],D={key:0,class:"error-message"};function z(e,t,o,n,a,l){return(0,i.uX)(),(0,i.CE)("div",U,[(0,i.Lk)("h2",null,(0,r.v_)(o.title),1),(0,i.Lk)("div",{class:"slider-container",onWheel:t[2]||(t[2]=(...e)=>n.handleWheel&&n.handleWheel(...e)),onTouchstart:t[3]||(t[3]=(...e)=>n.handleTouchStart&&n.handleTouchStart(...e)),onTouchmove:t[4]||(t[4]=(...e)=>n.handleTouchMove&&n.handleTouchMove(...e)),onTouchend:t[5]||(t[5]=(...e)=>n.handleTouchEnd&&n.handleTouchEnd(...e)),onMousemove:t[6]||(t[6]=(...e)=>n.handleMouseMove&&n.handleMouseMove(...e)),onMouseleave:t[7]||(t[7]=(...e)=>n.handleMouseLeave&&n.handleMouseLeave(...e))},[(0,i.Lk)("button",{class:"slider-button left",onClick:t[0]||(t[0]=e=>n.slide("left")),style:(0,r.Tr)({opacity:n.showButtons&&!n.atLeftEdge?1:0}),disabled:n.atLeftEdge}," < ",12,F),(0,i.Lk)("div",O,[(0,i.Lk)("div",{class:"movie-slider",ref:"slider",style:(0,r.Tr)({transform:`translateX(${-n.scrollAmount}px)`})},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.movies,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:"movie-card",onClick:t=>n.toggleWishlist(e)},[(0,i.Lk)("img",{src:n.getImageUrl(e.poster_path),alt:e.title||"No Image"},null,8,q),n.isInWishlist(e.id)?((0,i.uX)(),(0,i.CE)("div",j,"👍")):(0,i.Q3)("",!0),(0,i.Lk)("div",x,(0,r.v_)(e.title),1)],8,V)))),128))],4)],512),(0,i.Lk)("button",{class:"slider-button right",onClick:t[1]||(t[1]=e=>n.slide("right")),style:(0,r.Tr)({opacity:n.showButtons&&!n.atRightEdge?1:0}),disabled:n.atRightEdge}," > ",12,$)],32),0===n.movies.length?((0,i.uX)(),(0,i.CE)("p",D,"영화를 불러올 수 없습니다.")):(0,i.Q3)("",!0)])}var Q=o(4373);o(8992),o(4520),o(7550);const B=(0,p.KR)([]);function H(){const e=localStorage.getItem("movieWishlist");e&&(B.value=JSON.parse(e))}function G(){localStorage.setItem("movieWishlist",JSON.stringify(B.value))}function J(e){const t=B.value.findIndex((t=>t.id===e.id));-1===t?B.value.push(e):B.value=B.value.filter((t=>t.id!==e.id)),G()}function N(e){return B.value.some((t=>t.id===e))}H();var Y={name:"MovieRow",props:{title:{type:String,required:!0},fetchUrl:{type:String,required:!0}},setup(e){const t=(0,p.KR)([]),o=(0,p.KR)(null),n=(0,p.KR)(null),a=(0,p.KR)(0),l=(0,p.KR)(!1),r=(0,p.KR)(!1),s=(0,p.KR)(0),u=(0,p.KR)(0),c=(0,p.KR)(0),d=(0,p.KR)(null),v=async()=>{d.value&&d.value.cancel("Request canceled by new request."),d.value=Q.A.CancelToken.source();try{t.value=[];const o=await Q.A.get(e.fetchUrl,{cancelToken:d.value.token});o.data&&Array.isArray(o.data.results)?t.value=o.data.results:(console.warn("Invalid API response:",o.data),t.value=[])}catch(o){Q.A.isCancel(o)?console.log("Previous request canceled:",o.message):(console.error("영화 데이터를 가져오는 중 오류 발생:",o.message||o),t.value=[])}},g=()=>{o.value&&n.value&&(c.value=Math.max(0,o.value.scrollWidth-n.value.clientWidth))},h=(e,t=null)=>{const o=t||.8*n.value.clientWidth;a.value="left"===e?Math.max(0,a.value-o):Math.min(c.value,a.value+o)},m=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/placeholder-image.jpg",k=()=>l.value=!0,f=()=>l.value=!1,w=e=>{if(r.value)return;r.value=!0;const t=e.deltaY>0?"right":"left";h(t),setTimeout((()=>{r.value=!1}),500)},b=e=>{s.value=e.touches[0].clientX,u.value=e.touches[0].clientX},L=e=>{u.value=e.touches[0].clientX},y=()=>{const e=s.value-u.value,t=50;if(Math.abs(e)>t){const t=e>0?"right":"left";h(t,Math.abs(e))}};return(0,i.sV)((()=>{v(),g(),window.addEventListener("resize",g)})),(0,i.wB)((()=>e.fetchUrl),(async()=>{await v()}),{immediate:!0}),{movies:t,slider:o,sliderWindow:n,scrollAmount:a,maxScroll:c,atLeftEdge:(0,i.EW)((()=>a.value<=0)),atRightEdge:(0,i.EW)((()=>a.value>=c.value)),showButtons:l,getImageUrl:m,slide:h,handleMouseMove:k,handleMouseLeave:f,handleWheel:w,handleTouchStart:b,handleTouchMove:L,handleTouchEnd:y,toggleWishlist:J,isInWishlist:N}}};const Z=(0,y.A)(Y,[["render",z],["__scopeId","data-v-7d4679b0"]]);var ee=Z,te={name:"HomeMain",components:{Banner:T,MovieRow:ee},setup(){const e=localStorage.getItem("TMDb-Key");if(!e)return console.error("API 키가 없습니다. 로그인 후 다시 시도해 주세요."),{};const t=(0,p.KR)(null),o=(0,p.KR)(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR`),n=(0,p.KR)(`https://api.themoviedb.org/3/discover/movie?api_key=${e}&with_genres=10749&language=ko-KR`),a=(0,p.KR)(`https://api.themoviedb.org/3/discover/movie?api_key=${e}&with_genres=28&language=ko-KR`),l=e=>`${e}&t=${(new Date).getTime()}`,r=async()=>{try{const e=await fetch(l(o.value)),n=await e.json();t.value=n.results[0]}catch(e){console.error("Error fetching featured movie:",e)}},s=()=>{const e=document.querySelector(".app-header");window.scrollY>50?e?.classList.add("scrolled"):e?.classList.remove("scrolled")};return(0,i.sV)((()=>{r(),window.addEventListener("scroll",s)})),(0,i.xo)((()=>{window.removeEventListener("scroll",s)})),{featuredMovie:t,popularMoviesUrl:o,romanceMoviesUrl:n,actionMoviesUrl:a,getUniqueUrl:l}}};const oe=(0,y.A)(te,[["render",W],["__scopeId","data-v-266191e6"]]);var ne=oe;const ie={class:"popular-container"},ae={class:"view-toggle"};function le(e,t,o,n,a,l){const s=(0,i.g2)("MovieGrid"),u=(0,i.g2)("MovieInfiniteScroll");return(0,i.uX)(),(0,i.CE)("div",ie,[(0,i.Lk)("div",ae,[(0,i.Lk)("button",{onClick:t[0]||(t[0]=e=>n.setView("grid")),class:(0,r.C4)({active:"grid"===n.currentView})},"Grid View",2),(0,i.Lk)("button",{onClick:t[1]||(t[1]=e=>n.setView("list")),class:(0,r.C4)({active:"list"===n.currentView})},"List View",2)]),"grid"===n.currentView?((0,i.uX)(),(0,i.Wv)(s,{key:0,fetchUrl:n.fetchURL,apiKey:n.apiKey},null,8,["fetchUrl","apiKey"])):(0,i.Q3)("",!0),"list"===n.currentView?((0,i.uX)(),(0,i.Wv)(u,{key:1,apiKey:n.apiKey,genreCode:"28"},null,8,["apiKey"])):(0,i.Q3)("",!0)])}const re={class:"movie-grid",ref:"gridContainer"},se=["onMouseup"],ue=["src","alt"],ce={key:1,class:"placeholder"},de={class:"movie-title"},ve={key:2,class:"wishlist-indicator"},ge={key:0,class:"pagination"},pe=["disabled"],he=["disabled"];function me(e,t,o,n,a,l){return(0,i.uX)(),(0,i.CE)("div",re,[(0,i.Lk)("div",{class:(0,r.C4)(["grid-container",n.currentView])},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.visibleMovieGroups,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t,class:(0,r.C4)(["movie-row",{full:e.length===n.rowSize}])},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:"movie-card",onMouseup:t=>n.handleToggleWishlist(e)},[e.poster_path?((0,i.uX)(),(0,i.CE)("img",{key:0,src:n.getImageUrl(e.poster_path),alt:e.title},null,8,ue)):((0,i.uX)(),(0,i.CE)("div",ce,"이미지 없음")),(0,i.Lk)("div",de,(0,r.v_)(e.title),1),n.checkIsInWishlist(e.id)?((0,i.uX)(),(0,i.CE)("div",ve,"👍")):(0,i.Q3)("",!0)],40,se)))),128))],2)))),128))],2),n.totalPages>1?((0,i.uX)(),(0,i.CE)("div",ge,[(0,i.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>n.prevPage&&n.prevPage(...e)),disabled:1===n.currentPage},"< 이전",8,pe),(0,i.Lk)("span",null,(0,r.v_)(n.currentPage)+" / "+(0,r.v_)(n.totalPages),1),(0,i.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>n.nextPage&&n.nextPage(...e)),disabled:n.currentPage===n.totalPages},"다음 >",8,he)])):(0,i.Q3)("",!0)],512)}o(8872);var ke={name:"MovieGrid",props:{fetchUrl:{type:String,required:!0},apiKey:{type:String,required:!0}},setup(e){const t=(0,p.KR)([]),o=(0,p.KR)(1),n=(0,p.KR)(4),a=(0,p.KR)(20),l=(0,p.KR)("grid"),r=(0,p.KR)(null),s=(0,p.KR)(window.innerWidth<=768),u=async()=>{if(!e.apiKey)return alert("API Key가 설정되지 않았습니다. 설정을 확인해주세요."),void console.error("API Key is not defined.");try{const n=await Q.A.get(e.fetchUrl,{params:{api_key:e.apiKey,language:"ko-KR",page:o.value}});t.value=n.data.results}catch(n){console.error("Error fetching movies:",n),alert("영화를 가져오는 중 오류가 발생했습니다. API Key와 URL을 확인하세요.")}},c=e=>`https://image.tmdb.org/t/p/w300${e}`,d=(0,i.EW)((()=>{const e=(o.value-1)*a.value,i=e+a.value,l=t.value.slice(e,i);return l.reduce(((e,t,o)=>{const i=Math.floor(o/n.value);return e[i]||(e[i]=[]),e[i].push(t),e}),[])})),v=(0,i.EW)((()=>Math.ceil(t.value.length/a.value))),g=()=>{o.value<v.value&&(o.value++,u())},h=()=>{o.value>1&&(o.value--,u())},m=e=>J(e),k=e=>N(e),f=()=>{s.value=window.innerWidth<=768};return(0,i.sV)((async()=>{await u(),window.addEventListener("resize",f)})),(0,i.hi)((()=>{window.removeEventListener("resize",f)})),{movies:t,currentPage:o,rowSize:n,moviesPerPage:a,currentView:l,gridContainer:r,visibleMovieGroups:d,totalPages:v,nextPage:g,prevPage:h,getImageUrl:c,handleToggleWishlist:m,checkIsInWishlist:k,isMobile:s}}};const fe=(0,y.A)(ke,[["render",me],["__scopeId","data-v-2f7b648d"]]);var we=fe;const be={class:"movie-grid",ref:"gridContainer"},Le=["onMouseup"],ye=["src","alt"],Ce={class:"movie-title"},Me={key:0,class:"wishlist-indicator"},Ke={ref:"loadingTrigger",class:"loading-trigger"},Ee={key:0,class:"loading-indicator"},Ie={key:1,class:"no-movies-message"};function Re(e,t,o,n,a,l){return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("div",be,[(0,i.Lk)("div",{class:(0,r.C4)(["grid-container",n.currentView])},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.visibleMovieGroups,((e,t)=>((0,i.uX)(),(0,i.CE)("div",{key:t,class:(0,r.C4)(["movie-row",{full:e.length===n.rowSize}])},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:"movie-card",onMouseup:t=>n.handleToggleWishlist(e)},[(0,i.Lk)("img",{src:n.getImageUrl(e.poster_path),alt:e.title,loading:"lazy"},null,8,ye),(0,i.Lk)("div",Ce,(0,r.v_)(e.title),1),n.checkIsInWishlist(e.id)?((0,i.uX)(),(0,i.CE)("div",Me,"👍")):(0,i.Q3)("",!0)],40,Le)))),128))],2)))),128))],2),(0,i.Lk)("div",Ke,[n.isLoading?((0,i.uX)(),(0,i.CE)("div",Ee,t[1]||(t[1]=[(0,i.Lk)("div",{class:"spinner"},null,-1),(0,i.Lk)("span",null,"로딩 중...",-1)]))):n.hasMore||0!==n.movies.length?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("div",Ie,t[2]||(t[2]=[(0,i.Lk)("p",null,"해당 조건에 맞는 영화가 없습니다.",-1)])))],512),n.showTopButton?((0,i.uX)(),(0,i.CE)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>n.scrollToTopAndReset&&n.scrollToTopAndReset(...e)),class:"top-button","aria-label":"맨 위로 이동"}," Top ")):(0,i.Q3)("",!0)],512)])}var _e={name:"MovieInfiniteScroll",props:{genreCode:String,apiKey:String,sortingOrder:{type:String,default:"popularity.desc"},voteAverage:{type:Number,default:-1},language:{type:String,default:"ko-KR"}},setup(e){const t=(0,p.KR)([]),o=(0,p.KR)(1),n=(0,p.KR)(4),a=(0,p.KR)(!1),l=(0,p.KR)(window.innerWidth<=768),r=(0,p.KR)("grid"),s=(0,p.KR)(!0),u=(0,p.KR)(!1),c=(0,p.KR)(null),d=(0,p.KR)(null),v=(0,p.KR)(null),g=()=>{v.value=new IntersectionObserver((e=>{e[0].isIntersecting&&!a.value&&s.value&&h()}),{rootMargin:"100px",threshold:.1}),d.value&&v.value.observe(d.value)},h=async()=>{if(!a.value&&s.value){a.value=!0;try{const n={api_key:e.apiKey,language:"all"!==e.language?e.language:"ko-KR",page:o.value,with_genres:e.genreCode&&"0"!==e.genreCode?e.genreCode:void 0,sort_by:e.sortingOrder,"vote_average.gte":e.voteAverage>0?e.voteAverage:void 0};console.log("Fetching Movies with Params:",n);const i=await Q.A.get("https://api.themoviedb.org/3/discover/movie",{params:n}),a=i.data.results;a&&0!==a.length?(t.value=[...t.value,...a],o.value++):(1===o.value&&(t.value=[]),s.value=!1)}catch(n){console.error("Error fetching movies:",n)}finally{a.value=!1}}},m=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/assets/default-movie-poster.jpg",k=(0,i.EW)((()=>t.value.reduce(((e,t,o)=>{const i=Math.floor(o/n.value);return e[i]||(e[i]=[]),e[i].push(t),e}),[])));(0,i.wB)([()=>e.genreCode,()=>e.sortingOrder,()=>e.voteAverage,()=>e.language],(()=>{y()}));const f=()=>{l.value=window.innerWidth<=768,w()},w=()=>{if(c.value){const e=c.value.offsetWidth,t=l.value?100:300,o=l.value?10:15;n.value=Math.floor(e/(t+o))}},b=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;u.value=e>300},L=()=>{window.scrollTo({top:0,behavior:"smooth"})},y=()=>{t.value=[],o.value=1,s.value=!0,h()},C=e=>{J(e)},M=e=>N(e);return(0,i.sV)((()=>{g(),h(),f(),window.addEventListener("resize",f),window.addEventListener("scroll",b)})),(0,i.hi)((()=>{window.removeEventListener("resize",f),window.removeEventListener("scroll",b),v.value&&v.value.disconnect()})),{movies:t,currentPage:o,rowSize:n,isLoading:a,isMobile:l,currentView:r,hasMore:s,showTopButton:u,gridContainer:c,loadingTrigger:d,visibleMovieGroups:k,fetchMovies:h,getImageUrl:m,scrollToTopAndReset:L,handleToggleWishlist:C,checkIsInWishlist:M}}};const We=(0,y.A)(_e,[["render",Re],["__scopeId","data-v-f9fd7b48"]]);var Pe=We;function Se(e,t=1){const o=`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=${t}`;return console.log("Popular Movies URL:",o),o}var Xe={name:"HomePopular",components:{MovieGrid:we,MovieInfiniteScroll:Pe},setup(){const e=(0,p.KR)("grid"),t=localStorage.getItem("TMDb-Key");if(!t)return void console.error("API 키가 없습니다. 로그인 후 다시 시도해 주세요.");const o=Se(t),n=t=>{e.value=t};return{currentView:e,setView:n,fetchURL:o,apiKey:t}}};const Ae=(0,y.A)(Xe,[["render",le],["__scopeId","data-v-47a7fef9"]]);var Te=Ae;function Ue(e,t,o,n,a,l){const r=(0,i.g2)("MovieWishlist");return(0,i.uX)(),(0,i.Wv)(r)}const Fe={class:"movie-grid",ref:"gridContainer"},Oe=["onClick"],Ve=["src","alt"],qe={class:"movie-title"},je={key:0,class:"empty-wishlist"},xe={key:1,class:"pagination"},$e=["disabled"],De=["disabled"];function ze(e,t,o,n,a,l){return(0,i.uX)(),(0,i.CE)("div",Fe,[(0,i.Lk)("div",{class:(0,r.C4)(["grid-container",n.currentView])},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.visibleWishlistMovies,((e,o)=>((0,i.uX)(),(0,i.CE)("div",{key:o,class:(0,r.C4)(["movie-row",{full:e.length===n.rowSize}])},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.id,class:"movie-card",onClick:t=>n.toggleWishlist(e)},[(0,i.Lk)("img",{src:n.getImageUrl(e.poster_path),alt:e.title},null,8,Ve),(0,i.Lk)("div",qe,(0,r.v_)(e.title),1),t[2]||(t[2]=(0,i.Lk)("div",{class:"wishlist-indicator"},"👍",-1))],8,Oe)))),128))],2)))),128))],2),0===n.wishlistMovies.length?((0,i.uX)(),(0,i.CE)("div",je," 위시리스트가 비어 있습니다. ")):(0,i.Q3)("",!0),n.totalPages>1?((0,i.uX)(),(0,i.CE)("div",xe,[(0,i.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>n.prevPage&&n.prevPage(...e)),disabled:1===n.currentPage},"< 이전",8,$e),(0,i.Lk)("span",null,(0,r.v_)(n.currentPage)+" / "+(0,r.v_)(n.totalPages),1),(0,i.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>n.nextPage&&n.nextPage(...e)),disabled:n.currentPage===n.totalPages},"다음 >",8,De)])):(0,i.Q3)("",!0)],512)}var Qe=o(3606),Be={name:"MovieWishlist",setup(){const e=(0,p.KR)(null),t=(0,p.KR)(4),o=(0,p.KR)(20),n=(0,p.KR)(1),a=(0,p.KR)(window.innerWidth<=768),l=(0,p.KR)("grid"),r=(0,p.KR)([]),s=(0,p.KR)([]);let u;const c=()=>{r.value=B.value||[],v()},d=()=>{if(e.value){const n=e.value.offsetWidth,i=window.innerHeight-e.value.offsetTop,l=a.value?90:220,r=a.value?150:330,s=a.value?10:15,u=-10;t.value=Math.floor(n/(l+s));const c=Math.floor(i/(r+u));o.value=t.value*c,v()}},v=()=>{const e=(n.value-1)*o.value,i=e+o.value,a=r.value.slice(e,i);s.value=a.reduce(((e,o,n)=>{const i=Math.floor(n/t.value);return e[i]||(e[i]=[]),e[i].push(o),e}),[])},g=()=>{n.value<w.value&&(n.value++,v())},h=()=>{n.value>1&&(n.value--,v())},m=()=>{a.value=window.innerWidth<=768,d()},k=e=>{B.value.includes(e)?B.value=B.value.filter((t=>t.id!==e.id)):B.value.push(e),c()},f=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/placeholder-image.jpg",w=(0,p.KR)(0);return(0,i.nT)((()=>{w.value=Math.ceil(r.value.length/o.value)})),(0,i.sV)((()=>{c(),m(),window.addEventListener("resize",m),u=new Qe.A((()=>d())),e.value&&u.observe(e.value)})),(0,i.hi)((()=>{window.removeEventListener("resize",m),e.value&&u.unobserve(e.value),u.disconnect()})),{gridContainer:e,rowSize:t,moviesPerPage:o,currentPage:n,isMobile:a,currentView:l,wishlistMovies:r,visibleWishlistMovies:s,totalPages:w,nextPage:g,prevPage:h,handleResize:m,toggleWishlist:k,getImageUrl:f}}};const He=(0,y.A)(Be,[["render",ze],["__scopeId","data-v-4720f8aa"]]);var Ge=He,Je={name:"HomeWishlistComponent",components:{MovieWishlist:Ge}};const Ne=(0,y.A)(Je,[["render",Ue],["__scopeId","data-v-4cf7d73c"]]);var Ye=Ne;const Ze={key:0,class:"container-search"},et={class:"container-search-bar"},tt={class:"content-search"};function ot(e,t,o,n,a,l){const r=(0,i.g2)("MovieSearch"),s=(0,i.g2)("MovieInfiniteScroll");return n.isLoggedIn?((0,i.uX)(),(0,i.CE)("div",Ze,[(0,i.Lk)("div",et,[(0,i.bF)(r,{onChangeOptions:n.changeOptions},null,8,["onChangeOptions"])]),(0,i.Lk)("div",tt,[(0,i.bF)(s,{apiKey:n.apiKey,genreCode:n.genreId,sortingOrder:n.sortId,voteEverage:n.ageId},null,8,["apiKey","genreCode","sortingOrder","voteEverage"])])])):(0,i.Q3)("",!0)}const nt={class:"dropdown-container"},it=["onClick"],at={class:"select-items"},lt=["onClick"];function rt(e,t,o,a,l,s){return(0,i.uX)(),(0,i.CE)("div",nt,[t[1]||(t[1]=(0,i.Lk)("label",null,"선호하는 설정을 선택하세요",-1)),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.dropdownEntries,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.key,class:"custom-select"},[(0,i.Lk)("div",{class:"select-selected",onClick:t=>a.toggleDropdown(e.key)},(0,r.v_)(a.selectedOptions[e.key]),9,it),(0,i.bo)((0,i.Lk)("div",at,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.options,(t=>((0,i.uX)(),(0,i.CE)("div",{key:t,onClick:o=>a.selectOption(e.key,t)},(0,r.v_)(t),9,lt)))),128))],512),[[n.aG,a.activeDropdown===e.key]])])))),128)),(0,i.Lk)("button",{class:"clear-options",onClick:t[0]||(t[0]=(...e)=>a.clearOptions&&a.clearOptions(...e))},"초기화")])}o(1454);var st={name:"MovieSearch",emits:["changeOptions"],setup(e,{emit:t}){const o={originalLanguage:["장르 (전체)","Action","Adventure","Comedy","Crime","Family"],translationLanguage:["평점 (전체)","9~10","8~9","7~8","6~7","5~6","4~5","4점 이하"],sorting:["언어 (전체)","영어","한국어"]},n={originalLanguage:"장르 (전체)",translationLanguage:"평점 (전체)",sorting:"언어 (전체)"},a=(0,p.KR)({...n}),l=(0,p.KR)(null),r=(0,i.EW)((()=>Object.entries(o).map((([e,t])=>({key:e,options:t}))))),s=e=>{l.value=l.value===e?null:e},u=(e,o)=>{a.value={...a.value,[e]:o},l.value=null,t("changeOptions",a.value)},c=()=>{a.value={...n},t("changeOptions",a.value)};return{selectedOptions:a,activeDropdown:l,dropdownEntries:r,toggleDropdown:s,selectOption:u,clearOptions:c}}};const ut=(0,y.A)(st,[["render",rt],["__scopeId","data-v-7e770fc9"]]);var ct=ut,dt={name:"HomeSearch",components:{MovieSearch:ct,MovieInfiniteScroll:Pe},setup(){const e=(0,h.rd)(),t=(0,p.KR)(!1),o=(0,p.KR)(localStorage.getItem("TMDb-Key"));(0,i.sV)((()=>{o.value?t.value=!0:e.push("/signin")}));const n=(0,p.KR)("28"),a=(0,p.KR)(-1),l=(0,p.KR)("all"),r={"장르 (전체)":0,Action:28,Adventure:12,Comedy:35,Crime:80,Family:10751},s={"언어 (전체)":"all","영어":"en","한국어":"ko"},u={"평점 (전체)":-1,"9~10":9,"8~9":8,"7~8":7,"6~7":6,"5~6":5,"4~5":4,"4점 이하":-2},c=e=>{n.value=`${r[e.originalLanguage]}`,a.value=u[e.translationLanguage],l.value=s[e.sorting]};return{isLoggedIn:t,apiKey:o,genreId:n,ageId:a,sortId:l,changeOptions:c}}};const vt=(0,y.A)(dt,[["render",ot],["__scopeId","data-v-ffb9aa1c"]]);var gt=vt;const pt={class:"sign-in"},ht={key:0,class:"container"},mt={id:"phone"},kt={id:"content-wrapper"},ft=["disabled"],wt={class:"input"},bt={class:"input"},Lt={class:"input"},yt=["disabled"],Ct={key:1,class:"logout-container"};function Mt(e,t,o,a,l,s){return(0,i.uX)(),(0,i.CE)("div",pt,[t[23]||(t[23]=(0,i.Lk)("div",{class:"bg-image"},null,-1)),a.isLoggedIn?((0,i.uX)(),(0,i.CE)("div",Ct,[(0,i.Lk)("h2",null,"Welcome, "+(0,r.v_)(a.email),1),(0,i.Lk)("button",{onClick:t[13]||(t[13]=(...e)=>a.handleLogout&&a.handleLogout(...e))},"Logout")])):((0,i.uX)(),(0,i.CE)("div",ht,[(0,i.Lk)("div",mt,[(0,i.Lk)("div",kt,[(0,i.Lk)("div",{class:(0,r.C4)(["card",{hidden:!a.isLoginVisible}]),id:"login"},[(0,i.Lk)("form",{onSubmit:t[6]||(t[6]=(0,n.D$)(((...e)=>a.handleLogin&&a.handleLogin(...e)),["prevent"]))},[t[16]||(t[16]=(0,i.Lk)("h1",null,"Sign in",-1)),(0,i.Lk)("div",{class:(0,r.C4)(["input",{active:a.isEmailFocused||a.email}])},[(0,i.bo)((0,i.Lk)("input",{id:"email",type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>a.email=e),onFocus:t[1]||(t[1]=e=>a.focusInput("email")),onBlur:t[2]||(t[2]=e=>a.blurInput("email")),required:""},null,544),[[n.Jo,a.email]]),t[14]||(t[14]=(0,i.Lk)("label",{for:"email"},"Username or Email",-1))],2),(0,i.Lk)("div",{class:(0,r.C4)(["input",{active:a.isPasswordFocused||a.password}])},[(0,i.bo)((0,i.Lk)("input",{id:"password",type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>a.password=e),onFocus:t[4]||(t[4]=e=>a.focusInput("password")),onBlur:t[5]||(t[5]=e=>a.blurInput("password")),required:""},null,544),[[n.Jo,a.password]]),t[15]||(t[15]=(0,i.Lk)("label",{for:"password"},"Password",-1))],2),(0,i.Lk)("button",{disabled:!a.isLoginFormValid},"Login",8,ft)],32),(0,i.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:t[7]||(t[7]=(...e)=>a.toggleCard&&a.toggleCard(...e))},t[17]||(t[17]=[(0,i.eW)(" Don't have an account? "),(0,i.Lk)("b",null,"Sign up",-1)]))],2),(0,i.Lk)("div",{class:(0,r.C4)(["card",{hidden:a.isLoginVisible}]),id:"register"},[(0,i.Lk)("form",{onSubmit:t[11]||(t[11]=(0,n.D$)(((...e)=>a.handleRegister&&a.handleRegister(...e)),["prevent"]))},[t[21]||(t[21]=(0,i.Lk)("h1",null,"Sign up",-1)),(0,i.Lk)("div",wt,[(0,i.bo)((0,i.Lk)("input",{id:"register-email",type:"email","onUpdate:modelValue":t[8]||(t[8]=e=>a.registerEmail=e),required:""},null,512),[[n.Jo,a.registerEmail]]),t[18]||(t[18]=(0,i.Lk)("label",{for:"register-email"},"Email",-1))]),(0,i.Lk)("div",bt,[(0,i.bo)((0,i.Lk)("input",{id:"register-password",type:"password","onUpdate:modelValue":t[9]||(t[9]=e=>a.registerPassword=e),required:""},null,512),[[n.Jo,a.registerPassword]]),t[19]||(t[19]=(0,i.Lk)("label",{for:"register-password"},"Password",-1))]),(0,i.Lk)("div",Lt,[(0,i.bo)((0,i.Lk)("input",{id:"confirm-password",type:"password","onUpdate:modelValue":t[10]||(t[10]=e=>a.confirmPassword=e),required:""},null,512),[[n.Jo,a.confirmPassword]]),t[20]||(t[20]=(0,i.Lk)("label",{for:"confirm-password"},"Confirm Password",-1))]),(0,i.Lk)("button",{disabled:!a.isRegisterFormValid},"Register",8,yt)],32),(0,i.Lk)("a",{href:"javascript:void(0)",id:"gotologin",class:"account-check",onClick:t[12]||(t[12]=(...e)=>a.toggleCard&&a.toggleCard(...e))},t[22]||(t[22]=[(0,i.eW)(" Already have an account? "),(0,i.Lk)("b",null,"Sign in",-1)]))],2)])])]))])}o(2577);const Kt={users:JSON.parse(localStorage.getItem("users"))||[],tryLogin(e,t){return new Promise(((o,n)=>{const i=this.users.find((o=>o.email===e&&o.password===t));i?(localStorage.setItem("TMDb-Key",i.apiKey),o({message:"로그인 성공",apiKey:i.apiKey})):n(new Error("아이디 또는 비밀번호가 잘못되었습니다."))}))},tryRegister(e,t){return new Promise(((o,n)=>{if(this.users.some((t=>t.email===e)))n(new Error("이미 존재하는 아이디입니다."));else{const n=`key-${Math.random().toString(36).substr(2,16)}`,i={email:e,password:t,apiKey:n};this.users.push(i),localStorage.setItem("users",JSON.stringify(this.users)),o({message:"회원가입 성공",apiKey:n})}}))}};var Et=Kt,It={name:"SignIn",setup(){const e=(0,h.rd)(),t=k(),o=(0,p.KR)(!0),n=(0,p.KR)(""),a=(0,p.KR)(""),l=(0,p.KR)(""),r=(0,p.KR)(""),s=(0,p.KR)(""),u=(0,p.KR)(!1),c=(0,p.KR)(!1),d=(0,i.EW)((()=>n.value&&a.value)),v=(0,i.EW)((()=>l.value&&r.value&&s.value&&r.value===s.value)),g=async()=>{try{const o=await Et.tryLogin(n.value,a.value);if(!o)throw new Error("로그인에 실패했습니다.");t.login(a.value),alert("로그인 성공!"),e.push("/main")}catch(o){alert("로그인 실패: "+o.message),console.error(o)}},m=async()=>{try{const e=await Et.tryRegister(l.value,r.value);if(!e)throw new Error("회원가입에 실패했습니다.");alert("회원가입 성공! 로그인 화면으로 이동합니다."),o.value=!0}catch(e){alert("회원가입 실패: "+e.message),console.error(e)}},f=()=>{t.logout(),n.value="",a.value="",alert("로그아웃 성공!")},w=()=>{o.value=!o.value},b=e=>{"email"===e&&(u.value=!0),"password"===e&&(c.value=!0)},L=e=>{"email"===e&&(u.value=!1),"password"===e&&(c.value=!1)};return{isLoginVisible:o,email:n,password:a,registerEmail:l,registerPassword:r,confirmPassword:s,isEmailFocused:u,isPasswordFocused:c,isLoginFormValid:d,isRegisterFormValid:v,isLoggedIn:t.isLoggedIn,handleLogin:g,handleRegister:m,handleLogout:f,toggleCard:w,focusInput:b,blurInput:L}}};const Rt=(0,y.A)(It,[["render",Mt],["__scopeId","data-v-4df18538"]]);var _t=Rt;const Wt=()=>!!localStorage.getItem("TMDb-Key"),Pt=[{path:"/",redirect:"/main"},{path:"/main",name:"HomeMain",component:ne,meta:{requiresAuth:!0}},{path:"/popular",name:"HomePopular",component:Te,meta:{requiresAuth:!0}},{path:"/wishlist",name:"HomeWishlist",component:Ye,meta:{requiresAuth:!0}},{path:"/search",name:"HomeSearch",component:gt,meta:{requiresAuth:!0}},{path:"/sign-in",name:"SignIn",component:_t}],St=(0,h.aE)({history:(0,h.LA)(),routes:Pt});St.beforeEach(((e,t,o)=>{e.meta.requiresAuth&&!Wt()?o({path:"/sign-in",query:{redirect:e.fullPath}}):o()}));var Xt=St,At=o(7411);o(7917);const Tt=(0,n.Ef)(I),Ut=(0,m.Ey)();Tt.use(Ut),Tt.use(Xt),Tt.use(At.Ay),Tt.mount("#app")}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,i,a){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],a=e[c][2];for(var r=!0,s=0;s<n.length;s++)(!1&a||l>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(r=!1,a<l&&(l=a));if(r){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,i,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,l=n[0],r=n[1],s=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(i in r)o.o(r,i)&&(o.m[i]=r[i]);if(s)var c=s(o)}for(t&&t(n);u<l.length;u++)a=l[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=self["webpackChunkmy_vue_project"]=self["webpackChunkmy_vue_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(7535)}));n=o.O(n)})();
//# sourceMappingURL=app.451595c1.js.map