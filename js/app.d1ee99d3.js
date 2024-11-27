(function(){"use strict";var e={239:function(e,t,o){var l=o(5130),a=o(6768);const i={id:"app"};function n(e,t,o,l,n,s){const r=(0,a.g2)("HeaderComponent"),u=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.bF)(r),(0,a.bF)(u)])}var s=o(4232);const r={id:"container"},u={class:"header-left"},c={class:"logo"},d={class:"nav-links desktop-nav"},v={class:"header-right"};function g(e,t,o,l,i,n){const g=(0,a.g2)("font-awesome-icon"),p=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",r,[(0,a.Lk)("header",{class:(0,s.C4)(["app-header",{scrolled:l.isScrolled}])},[(0,a.Lk)("div",u,[(0,a.Lk)("div",c,[(0,a.bF)(p,{to:"/"},{default:(0,a.k6)((()=>[(0,a.bF)(g,{icon:["fas","ticket"],style:{height:"100%",color:"#E50914"}})])),_:1})]),(0,a.Lk)("nav",d,[(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[(0,a.bF)(p,{to:"/"},{default:(0,a.k6)((()=>t[3]||(t[3]=[(0,a.eW)("홈")]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(p,{to:"/popular"},{default:(0,a.k6)((()=>t[4]||(t[4]=[(0,a.eW)("대세 콘텐츠")]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(p,{to:"/wishlist"},{default:(0,a.k6)((()=>t[5]||(t[5]=[(0,a.eW)("내가 찜한 리스트")]))),_:1})]),(0,a.Lk)("li",null,[(0,a.bF)(p,{to:"/search"},{default:(0,a.k6)((()=>t[6]||(t[6]=[(0,a.eW)("찾아보기")]))),_:1})])])])]),(0,a.Lk)("div",v,[l.isLoggedIn?((0,a.uX)(),(0,a.CE)("button",{key:0,class:"icon-button",onClick:t[0]||(t[0]=(...e)=>l.handleLogout&&l.handleLogout(...e))},[(0,a.bF)(g,{icon:["fas","user"]}),t[7]||(t[7]=(0,a.eW)(" Logout "))])):((0,a.uX)(),(0,a.Wv)(p,{key:1,to:"/sign-in",class:"icon-button"},{default:(0,a.k6)((()=>[(0,a.bF)(g,{icon:["fas","user"]}),t[8]||(t[8]=(0,a.eW)(" Sign In "))])),_:1})),(0,a.Lk)("button",{class:"icon-button mobile-menu-button",onClick:t[1]||(t[1]=(...e)=>l.toggleMobileMenu&&l.toggleMobileMenu(...e))},[(0,a.bF)(g,{icon:["fas","bars"]})])])],2),(0,a.Lk)("div",{class:(0,s.C4)(["mobile-nav",{open:l.isMobileMenuOpen}])},[(0,a.Lk)("button",{class:"close-button",onClick:t[2]||(t[2]=(...e)=>l.toggleMobileMenu&&l.toggleMobileMenu(...e))},[(0,a.bF)(g,{icon:["fas","times"]})]),(0,a.Lk)("nav",null,[(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[(0,a.bF)(p,{to:"/",onClick:l.toggleMobileMenu},{default:(0,a.k6)((()=>t[9]||(t[9]=[(0,a.eW)("홈")]))),_:1},8,["onClick"])]),(0,a.Lk)("li",null,[(0,a.bF)(p,{to:"/popular",onClick:l.toggleMobileMenu},{default:(0,a.k6)((()=>t[10]||(t[10]=[(0,a.eW)("대세 콘텐츠")]))),_:1},8,["onClick"])]),(0,a.Lk)("li",null,[(0,a.bF)(p,{to:"/wishlist",onClick:l.toggleMobileMenu},{default:(0,a.k6)((()=>t[11]||(t[11]=[(0,a.eW)("내가 찜한 리스트")]))),_:1},8,["onClick"])]),(0,a.Lk)("li",null,[(0,a.bF)(p,{to:"/search",onClick:l.toggleMobileMenu},{default:(0,a.k6)((()=>t[12]||(t[12]=[(0,a.eW)("찾아보기")]))),_:1},8,["onClick"])])])])],2)])}o(4114);var p=o(144),h=o(1387),m=o(5234);const f=(0,m.nY)("auth",{state:()=>({isLoggedIn:!!localStorage.getItem("TMDb-Key")}),actions:{login(e){localStorage.setItem("TMDb-Key",e),this.isLoggedIn=!0},logout(){localStorage.removeItem("TMDb-Key"),this.isLoggedIn=!1}}});var k=o(292),b=o(2353),w=o(8950);w.Yv.add(b.MjD,b.X46,b.ycA,b.ckx,b.GRI);var y={name:"HeaderComponent",components:{FontAwesomeIcon:k.gc},setup(){const e=(0,p.KR)(!1),t=(0,p.KR)(!1),o=(0,h.rd)(),l=f(),i=()=>{e.value=window.scrollY>50},n=()=>{l.logout(),o.push("/sign-in")},s=()=>{t.value=!t.value};return(0,a.sV)((()=>{window.addEventListener("scroll",i)})),(0,a.hi)((()=>{window.removeEventListener("scroll",i)})),{isScrolled:e,isMobileMenuOpen:t,isLoggedIn:l.isLoggedIn,handleLogout:n,toggleMobileMenu:s}}},L=o(1241);const C=(0,L.A)(y,[["render",g],["__scopeId","data-v-690902b0"]]);var M=C,K={name:"App",components:{HeaderComponent:M}};const E=(0,L.A)(K,[["render",n]]);var I=E;const R={class:"home"},_={key:1,class:"loading-banner"};function S(e,t,o,l,i,n){const s=(0,a.g2)("Banner"),r=(0,a.g2)("MovieRow");return(0,a.uX)(),(0,a.CE)("div",R,[l.featuredMovie?((0,a.uX)(),(0,a.Wv)(s,{key:0,movie:l.featuredMovie},null,8,["movie"])):((0,a.uX)(),(0,a.CE)("div",_,"로딩 중...")),(0,a.bF)(r,{key:"popular",title:"인기 영화",fetchUrl:l.getUniqueUrl(l.popularMoviesUrl)},null,8,["fetchUrl"]),(0,a.bF)(r,{key:"romanceMovies",title:"로맨스 영화",fetchUrl:l.getUniqueUrl(l.romanceMoviesUrl)},null,8,["fetchUrl"]),(0,a.bF)(r,{key:"actionMovies",title:"액션 영화",fetchUrl:l.getUniqueUrl(l.actionMoviesUrl)},null,8,["fetchUrl"]),(0,a.bF)(r,{key:"comedy",title:"코미디 영화",fetchUrl:l.getUniqueUrl(l.comedyMoviesUrl)},null,8,["fetchUrl"])])}const W={class:"banner-content"},P={key:0,class:"movie-rating"},A={key:1,class:"movie-release-date"},X={key:2,class:"movie-genres"};function U(e,t,o,l,i,n){return o.movie?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"banner",style:(0,s.Tr)({backgroundImage:`url(${n.backdropUrl})`})},[(0,a.Lk)("div",W,[(0,a.Lk)("h1",null,(0,s.v_)(o.movie.title),1),(0,a.Lk)("p",null,(0,s.v_)(o.movie.overview),1),o.movie.vote_average?((0,a.uX)(),(0,a.CE)("div",P," 평점: "+(0,s.v_)(o.movie.vote_average)+" / 10 ",1)):(0,a.Q3)("",!0),o.movie.release_date?((0,a.uX)(),(0,a.CE)("div",A," 개봉일: "+(0,s.v_)(n.formattedReleaseDate),1)):(0,a.Q3)("",!0),n.genres&&n.genres.length>0?((0,a.uX)(),(0,a.CE)("div",X," 장르: "+(0,s.v_)(n.genres.join(", ")),1)):(0,a.Q3)("",!0),t[0]||(t[0]=(0,a.Lk)("button",{class:"play-btn title-btn"},"재생",-1)),t[1]||(t[1]=(0,a.Lk)("button",{class:"info-btn title-btn"},"상세 정보",-1))])],4)):(0,a.Q3)("",!0)}o(1454);var F={name:"BannerComponent",props:{movie:{type:Object,required:!0}},computed:{backdropUrl(){return this.movie?`https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`:""},formattedReleaseDate(){if(this.movie.release_date){const e=new Date(this.movie.release_date);return e.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}return null},genres(){return this.movie.genres&&this.movie.genres.length>0?this.movie.genres.map((e=>e.name)):[]}}};const T=(0,L.A)(F,[["render",U],["__scopeId","data-v-e3f8c8d6"]]);var V=T;const O={class:"movie-row"},q=["disabled"],j={class:"slider-window",ref:"sliderWindow"},x=["onClick"],D=["src","alt"],$={key:0,class:"wishlist-indicator"},Q={class:"movie-title"},z=["disabled"],G={key:0,class:"error-message"};function H(e,t,o,l,i,n){return(0,a.uX)(),(0,a.CE)("div",O,[(0,a.Lk)("h2",null,(0,s.v_)(o.title),1),(0,a.Lk)("div",{class:"slider-container",onWheel:t[2]||(t[2]=(...e)=>l.handleWheel&&l.handleWheel(...e)),onTouchstart:t[3]||(t[3]=(...e)=>l.handleTouchStart&&l.handleTouchStart(...e)),onTouchmove:t[4]||(t[4]=(...e)=>l.handleTouchMove&&l.handleTouchMove(...e)),onTouchend:t[5]||(t[5]=(...e)=>l.handleTouchEnd&&l.handleTouchEnd(...e)),onMousemove:t[6]||(t[6]=(...e)=>l.handleMouseMove&&l.handleMouseMove(...e)),onMouseleave:t[7]||(t[7]=(...e)=>l.handleMouseLeave&&l.handleMouseLeave(...e))},[(0,a.Lk)("button",{class:"slider-button left",onClick:t[0]||(t[0]=e=>l.slide("left")),style:(0,s.Tr)({opacity:l.showButtons&&!l.atLeftEdge?1:0}),disabled:l.atLeftEdge}," < ",12,q),(0,a.Lk)("div",j,[(0,a.Lk)("div",{class:"movie-slider",ref:"slider",style:(0,s.Tr)({transform:`translateX(${-l.scrollAmount}px)`})},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(l.movies,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card",onClick:t=>l.toggleWishlist(e)},[(0,a.Lk)("img",{src:l.getImageUrl(e.poster_path),alt:e.title||"No Image"},null,8,D),l.isInWishlist(e.id)?((0,a.uX)(),(0,a.CE)("div",$,"👍")):(0,a.Q3)("",!0),(0,a.Lk)("div",Q,(0,s.v_)(e.title),1)],8,x)))),128))],4)],512),(0,a.Lk)("button",{class:"slider-button right",onClick:t[1]||(t[1]=e=>l.slide("right")),style:(0,s.Tr)({opacity:l.showButtons&&!l.atRightEdge?1:0}),disabled:l.atRightEdge}," > ",12,z)],32),0===l.movies.length?((0,a.uX)(),(0,a.CE)("p",G,"영화를 불러올 수 없습니다.")):(0,a.Q3)("",!0)])}var B=o(4373);o(8992),o(4520),o(7550);const J=(0,p.KR)([]);function N(){const e=localStorage.getItem("movieWishlist");e&&(J.value=JSON.parse(e))}function Y(){localStorage.setItem("movieWishlist",JSON.stringify(J.value))}function Z(e){const t=J.value.findIndex((t=>t.id===e.id));-1===t?J.value.push(e):J.value=J.value.filter((t=>t.id!==e.id)),Y()}function ee(e){return J.value.some((t=>t.id===e))}N();var te={name:"MovieRow",props:{title:{type:String,required:!0},fetchUrl:{type:String,required:!0}},setup(e){const t=(0,p.KR)([]),o=(0,p.KR)(null),l=(0,p.KR)(null),i=(0,p.KR)(0),n=(0,p.KR)(!1),s=(0,p.KR)(!1),r=(0,p.KR)(0),u=(0,p.KR)(0),c=(0,p.KR)(0),d=(0,p.KR)(null),v=async()=>{d.value&&d.value.cancel("Request canceled by new request."),d.value=B.A.CancelToken.source();try{t.value=[];const o=await B.A.get(e.fetchUrl,{cancelToken:d.value.token});o.data&&Array.isArray(o.data.results)?t.value=o.data.results:(console.warn("Invalid API response:",o.data),t.value=[])}catch(o){B.A.isCancel(o)?console.log("Previous request canceled:",o.message):(console.error("영화 데이터를 가져오는 중 오류 발생:",o.message||o),t.value=[])}},g=()=>{o.value&&l.value&&(c.value=Math.max(0,o.value.scrollWidth-l.value.clientWidth))},h=(e,t=null)=>{const o=t||.8*l.value.clientWidth;i.value="left"===e?Math.max(0,i.value-o):Math.min(c.value,i.value+o)},m=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/placeholder-image.jpg",f=()=>n.value=!0,k=()=>n.value=!1,b=e=>{if(s.value)return;s.value=!0;const t=e.deltaY>0?"right":"left";h(t),setTimeout((()=>{s.value=!1}),500)},w=e=>{r.value=e.touches[0].clientX,u.value=e.touches[0].clientX},y=e=>{u.value=e.touches[0].clientX},L=()=>{const e=r.value-u.value,t=50;if(Math.abs(e)>t){const t=e>0?"right":"left";h(t,Math.abs(e))}};return(0,a.sV)((()=>{v(),g(),window.addEventListener("resize",g)})),(0,a.wB)((()=>e.fetchUrl),(async()=>{await v()}),{immediate:!0}),{movies:t,slider:o,sliderWindow:l,scrollAmount:i,maxScroll:c,atLeftEdge:(0,a.EW)((()=>i.value<=0)),atRightEdge:(0,a.EW)((()=>i.value>=c.value)),showButtons:n,getImageUrl:m,slide:h,handleMouseMove:f,handleMouseLeave:k,handleWheel:b,handleTouchStart:w,handleTouchMove:y,handleTouchEnd:L,toggleWishlist:Z,isInWishlist:ee}}};const oe=(0,L.A)(te,[["render",H],["__scopeId","data-v-7d4679b0"]]);var le=oe,ae={name:"HomeMain",components:{Banner:V,MovieRow:le},setup(){const e=localStorage.getItem("TMDb-Key");if(!e)return console.error("API 키가 없습니다. 로그인 후 다시 시도해 주세요."),{};const t=(0,p.KR)(null),o=(0,p.KR)(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR`),l=(0,p.KR)(`https://api.themoviedb.org/3/discover/movie?api_key=${e}&with_genres=10749&language=ko-KR`),i=(0,p.KR)(`https://api.themoviedb.org/3/discover/movie?api_key=${e}&with_genres=28&language=ko-KR`),n=(0,p.KR)(`https://api.themoviedb.org/3/discover/movie?api_key=${e}&with_genres=35&language=ko-KR`),s=e=>`${e}&t=${(new Date).getTime()}`,r=async()=>{try{const e=await fetch(s(o.value)),l=await e.json();t.value=l.results[0]}catch(e){console.error("Error fetching featured movie:",e)}},u=()=>{const e=document.querySelector(".app-header");window.scrollY>50?e?.classList.add("scrolled"):e?.classList.remove("scrolled")};return(0,a.sV)((()=>{r(),window.addEventListener("scroll",u)})),(0,a.xo)((()=>{window.removeEventListener("scroll",u)})),{featuredMovie:t,popularMoviesUrl:o,romanceMoviesUrl:l,actionMoviesUrl:i,comedyMoviesUrl:n,getUniqueUrl:s}}};const ie=(0,L.A)(ae,[["render",S],["__scopeId","data-v-1d8d816e"]]);var ne=ie;const se={class:"popular-container"},re={class:"view-toggle"};function ue(e,t,o,l,i,n){const r=(0,a.g2)("MovieGrid"),u=(0,a.g2)("MovieInfiniteScroll");return(0,a.uX)(),(0,a.CE)("div",se,[(0,a.Lk)("div",re,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=e=>l.setView("grid")),class:(0,s.C4)({active:"grid"===l.currentView})},"Grid View",2),(0,a.Lk)("button",{onClick:t[1]||(t[1]=e=>l.setView("list")),class:(0,s.C4)({active:"list"===l.currentView})},"List View",2)]),"grid"===l.currentView?((0,a.uX)(),(0,a.Wv)(r,{key:0,fetchUrl:l.fetchURL,apiKey:l.apiKey},null,8,["fetchUrl","apiKey"])):(0,a.Q3)("",!0),"list"===l.currentView?((0,a.uX)(),(0,a.Wv)(u,{key:1,apiKey:l.apiKey,genreCode:"28"},null,8,["apiKey"])):(0,a.Q3)("",!0)])}const ce={class:"movie-grid",ref:"gridContainer"},de=["onMouseup"],ve=["src","alt"],ge={key:1,class:"placeholder"},pe={class:"movie-title"},he={key:2,class:"wishlist-indicator"},me={key:0,class:"pagination"},fe=["disabled"],ke=["disabled"];function be(e,t,o,l,i,n){return(0,a.uX)(),(0,a.CE)("div",ce,[(0,a.Lk)("div",{class:(0,s.C4)(["grid-container",l.currentView])},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(l.visibleMovieGroups,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:(0,s.C4)(["movie-row",{full:e.length===l.rowSize}])},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card",onMouseup:t=>l.handleToggleWishlist(e)},[e.poster_path?((0,a.uX)(),(0,a.CE)("img",{key:0,src:l.getImageUrl(e.poster_path),alt:e.title},null,8,ve)):((0,a.uX)(),(0,a.CE)("div",ge,"이미지 없음")),(0,a.Lk)("div",pe,(0,s.v_)(e.title),1),l.checkIsInWishlist(e.id)?((0,a.uX)(),(0,a.CE)("div",he,"👍")):(0,a.Q3)("",!0)],40,de)))),128))],2)))),128))],2),l.totalPages>1?((0,a.uX)(),(0,a.CE)("div",me,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>l.prevPage&&l.prevPage(...e)),disabled:1===l.currentPage},"< 이전",8,fe),(0,a.Lk)("span",null,(0,s.v_)(l.currentPage)+" / "+(0,s.v_)(l.totalPages),1),(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>l.nextPage&&l.nextPage(...e)),disabled:l.currentPage===l.totalPages},"다음 >",8,ke)])):(0,a.Q3)("",!0)],512)}o(8872);var we={name:"MovieGrid",props:{fetchUrl:{type:String,required:!0},apiKey:{type:String,required:!0}},setup(e){const t=(0,p.KR)([]),o=(0,p.KR)(1),l=(0,p.KR)(4),i=(0,p.KR)(20),n=(0,p.KR)("grid"),s=(0,p.KR)(null),r=(0,p.KR)(window.innerWidth<=768),u=async()=>{if(!e.apiKey)return alert("API Key가 설정되지 않았습니다. 설정을 확인해주세요."),void console.error("API Key is not defined.");try{const l=await B.A.get(e.fetchUrl,{params:{api_key:e.apiKey,language:"ko-KR",page:o.value}});t.value=l.data.results}catch(l){console.error("Error fetching movies:",l),alert("영화를 가져오는 중 오류가 발생했습니다. API Key와 URL을 확인하세요.")}},c=e=>`https://image.tmdb.org/t/p/w300${e}`,d=(0,a.EW)((()=>{const e=(o.value-1)*i.value,a=e+i.value,n=t.value.slice(e,a);return n.reduce(((e,t,o)=>{const a=Math.floor(o/l.value);return e[a]||(e[a]=[]),e[a].push(t),e}),[])})),v=(0,a.EW)((()=>Math.ceil(t.value.length/i.value))),g=()=>{o.value<v.value&&(o.value++,u())},h=()=>{o.value>1&&(o.value--,u())},m=e=>Z(e),f=e=>ee(e),k=()=>{r.value=window.innerWidth<=768};return(0,a.sV)((async()=>{await u(),window.addEventListener("resize",k)})),(0,a.hi)((()=>{window.removeEventListener("resize",k)})),{movies:t,currentPage:o,rowSize:l,moviesPerPage:i,currentView:n,gridContainer:s,visibleMovieGroups:d,totalPages:v,nextPage:g,prevPage:h,getImageUrl:c,handleToggleWishlist:m,checkIsInWishlist:f,isMobile:r}}};const ye=(0,L.A)(we,[["render",be],["__scopeId","data-v-2f7b648d"]]);var Le=ye;const Ce={class:"movie-grid",ref:"gridContainer"},Me=["onMouseup"],Ke=["src","alt"],Ee={class:"movie-title"},Ie={key:0,class:"wishlist-indicator"},Re={ref:"loadingTrigger",class:"loading-trigger"},_e={key:0,class:"loading-indicator"},Se={key:1,class:"no-movies-message"};function We(e,t,o,l,i,n){return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("div",Ce,[(0,a.Lk)("div",{class:(0,s.C4)(["grid-container",l.currentView])},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(l.visibleMovieGroups,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:(0,s.C4)(["movie-row",{full:e.length===l.rowSize}])},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card",onMouseup:t=>l.handleToggleWishlist(e)},[(0,a.Lk)("img",{src:l.getImageUrl(e.poster_path),alt:e.title,loading:"lazy"},null,8,Ke),(0,a.Lk)("div",Ee,(0,s.v_)(e.title),1),l.checkIsInWishlist(e.id)?((0,a.uX)(),(0,a.CE)("div",Ie,"👍")):(0,a.Q3)("",!0)],40,Me)))),128))],2)))),128))],2),(0,a.Lk)("div",Re,[l.isLoading?((0,a.uX)(),(0,a.CE)("div",_e,t[1]||(t[1]=[(0,a.Lk)("div",{class:"spinner"},null,-1),(0,a.Lk)("span",null,"로딩 중...",-1)]))):l.hasMore||0!==l.movies.length?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",Se,t[2]||(t[2]=[(0,a.Lk)("p",null,"해당 조건에 맞는 영화가 없습니다.",-1)])))],512),l.showTopButton?((0,a.uX)(),(0,a.CE)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>l.scrollToTopAndReset&&l.scrollToTopAndReset(...e)),class:"top-button","aria-label":"맨 위로 이동"}," Top ")):(0,a.Q3)("",!0)],512)])}var Pe={name:"MovieInfiniteScroll",props:{genreCode:String,apiKey:String,sortingOrder:{type:String,default:"popularity.desc"},voteAverage:{type:Number,default:-1},language:{type:String,default:"en"}},setup(e){const t=(0,p.KR)([]),o=(0,p.KR)(1),l=(0,p.KR)(4),i=(0,p.KR)(!1),n=(0,p.KR)(window.innerWidth<=768),s=(0,p.KR)("grid"),r=(0,p.KR)(!0),u=(0,p.KR)(!1),c=(0,p.KR)(null),d=(0,p.KR)(null),v=(0,p.KR)(null),g=()=>{v.value=new IntersectionObserver((e=>{e[0].isIntersecting&&!i.value&&r.value&&h()}),{rootMargin:"100px",threshold:.1}),d.value&&v.value.observe(d.value)},h=async()=>{if(!i.value&&r.value){i.value=!0;try{const l={api_key:e.apiKey,language:e.language&&"all"!==e.language?e.language:"en",page:o.value,with_genres:e.genreCode&&"0"!==e.genreCode?e.genreCode:void 0,sort_by:e.sortingOrder??"popularity.desc","vote_average.gte":e.voteAverage>0?e.voteAverage:void 0};console.log("Fetching Movies with Params:",l);const a=await B.A.get("https://api.themoviedb.org/3/discover/movie",{params:l}),i=a.data.results;i&&0!==i.length?(t.value=[...t.value,...i],o.value++):(1===o.value&&(t.value=[]),r.value=!1)}catch(l){console.error("Error fetching movies:",l)}finally{i.value=!1}}},m=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/assets/default-movie-poster.jpg",f=(0,a.EW)((()=>t.value.reduce(((e,t,o)=>{const a=Math.floor(o/l.value);return e[a]||(e[a]=[]),e[a].push(t),e}),[])));(0,a.wB)([()=>e.genreCode,()=>e.sortingOrder,()=>e.voteAverage,()=>e.language],(()=>{L()}));const k=()=>{n.value=window.innerWidth<=768,b()},b=()=>{if(c.value){const e=c.value.offsetWidth,t=n.value?100:300,o=n.value?10:15;l.value=Math.floor(e/(t+o))}},w=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;u.value=e>300},y=()=>{window.scrollTo({top:0,behavior:"smooth"})},L=()=>{t.value=[],o.value=1,r.value=!0,h()},C=e=>{Z(e)},M=e=>ee(e);return(0,a.sV)((()=>{g(),h(),k(),window.addEventListener("resize",k),window.addEventListener("scroll",w)})),(0,a.hi)((()=>{window.removeEventListener("resize",k),window.removeEventListener("scroll",w),v.value&&v.value.disconnect()})),{movies:t,currentPage:o,rowSize:l,isLoading:i,isMobile:n,currentView:s,hasMore:r,showTopButton:u,gridContainer:c,loadingTrigger:d,visibleMovieGroups:f,fetchMovies:h,getImageUrl:m,scrollToTopAndReset:y,handleToggleWishlist:C,checkIsInWishlist:M}}};const Ae=(0,L.A)(Pe,[["render",We],["__scopeId","data-v-b5ed6130"]]);var Xe=Ae;function Ue(e,t=1){const o=`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=${t}`;return console.log("Popular Movies URL:",o),o}var Fe={name:"HomePopular",components:{MovieGrid:Le,MovieInfiniteScroll:Xe},setup(){const e=(0,p.KR)("grid"),t=localStorage.getItem("TMDb-Key");if(!t)return void console.error("API 키가 없습니다. 로그인 후 다시 시도해 주세요.");const o=Ue(t),l=t=>{e.value=t};return{currentView:e,setView:l,fetchURL:o,apiKey:t}}};const Te=(0,L.A)(Fe,[["render",ue],["__scopeId","data-v-d216319e"]]);var Ve=Te;function Oe(e,t,o,l,i,n){const s=(0,a.g2)("MovieWishlist");return(0,a.uX)(),(0,a.Wv)(s)}const qe={class:"movie-grid",ref:"gridContainer"},je=["onClick"],xe=["src","alt"],De={class:"movie-title"},$e={key:0,class:"empty-wishlist"},Qe={key:1,class:"pagination"},ze=["disabled"],Ge=["disabled"];function He(e,t,o,l,i,n){return(0,a.uX)(),(0,a.CE)("div",qe,[(0,a.Lk)("div",{class:(0,s.C4)(["grid-container",l.currentView])},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(l.visibleWishlistMovies,((e,o)=>((0,a.uX)(),(0,a.CE)("div",{key:o,class:(0,s.C4)(["movie-row",{full:e.length===l.rowSize}])},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"movie-card",onClick:t=>l.toggleWishlist(e)},[(0,a.Lk)("img",{src:l.getImageUrl(e.poster_path),alt:e.title},null,8,xe),(0,a.Lk)("div",De,(0,s.v_)(e.title),1),t[2]||(t[2]=(0,a.Lk)("div",{class:"wishlist-indicator"},"👍",-1))],8,je)))),128))],2)))),128))],2),0===l.wishlistMovies.length?((0,a.uX)(),(0,a.CE)("div",$e," 위시리스트가 비어 있습니다. ")):(0,a.Q3)("",!0),l.totalPages>1?((0,a.uX)(),(0,a.CE)("div",Qe,[(0,a.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>l.prevPage&&l.prevPage(...e)),disabled:1===l.currentPage},"< 이전",8,ze),(0,a.Lk)("span",null,(0,s.v_)(l.currentPage)+" / "+(0,s.v_)(l.totalPages),1),(0,a.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>l.nextPage&&l.nextPage(...e)),disabled:l.currentPage===l.totalPages},"다음 >",8,Ge)])):(0,a.Q3)("",!0)],512)}var Be=o(3606),Je={name:"MovieWishlist",setup(){const e=(0,p.KR)(null),t=(0,p.KR)(4),o=(0,p.KR)(20),l=(0,p.KR)(1),i=(0,p.KR)(window.innerWidth<=768),n=(0,p.KR)("grid"),s=(0,p.KR)([]),r=(0,p.KR)([]);let u;const c=()=>{s.value=J.value||[],v()},d=()=>{if(e.value){const l=e.value.offsetWidth,a=window.innerHeight-e.value.offsetTop,n=i.value?90:220,s=i.value?150:330,r=i.value?10:15,u=-10;t.value=Math.floor(l/(n+r));const c=Math.floor(a/(s+u));o.value=t.value*c,v()}},v=()=>{const e=(l.value-1)*o.value,a=e+o.value,i=s.value.slice(e,a);r.value=i.reduce(((e,o,l)=>{const a=Math.floor(l/t.value);return e[a]||(e[a]=[]),e[a].push(o),e}),[])},g=()=>{l.value<b.value&&(l.value++,v())},h=()=>{l.value>1&&(l.value--,v())},m=()=>{i.value=window.innerWidth<=768,d()},f=e=>{J.value.includes(e)?J.value=J.value.filter((t=>t.id!==e.id)):J.value.push(e),c()},k=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/placeholder-image.jpg",b=(0,p.KR)(0);return(0,a.nT)((()=>{b.value=Math.ceil(s.value.length/o.value)})),(0,a.sV)((()=>{c(),m(),window.addEventListener("resize",m),u=new Be.A((()=>d())),e.value&&u.observe(e.value)})),(0,a.hi)((()=>{window.removeEventListener("resize",m),e.value&&u.unobserve(e.value),u.disconnect()})),{gridContainer:e,rowSize:t,moviesPerPage:o,currentPage:l,isMobile:i,currentView:n,wishlistMovies:s,visibleWishlistMovies:r,totalPages:b,nextPage:g,prevPage:h,handleResize:m,toggleWishlist:f,getImageUrl:k}}};const Ne=(0,L.A)(Je,[["render",He],["__scopeId","data-v-4720f8aa"]]);var Ye=Ne,Ze={name:"HomeWishlistComponent",components:{MovieWishlist:Ye}};const et=(0,L.A)(Ze,[["render",Oe],["__scopeId","data-v-4cf7d73c"]]);var tt=et;const ot={key:0,class:"container-search"},lt={class:"container-search-bar"},at=["value"],it=["value"],nt={class:"content-search"};function st(e,t,o,i,n,r){const u=(0,a.g2)("MovieInfiniteScroll");return i.isLoggedIn?((0,a.uX)(),(0,a.CE)("div",ot,[(0,a.Lk)("div",lt,[(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.selectedGenre=e),onChange:t[1]||(t[1]=(...e)=>i.applyFilters&&i.applyFilters(...e)),class:"filter-select"},[t[5]||(t[5]=(0,a.Lk)("option",{value:"0"},"장르 (전체)",-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.genreCode,((e,t)=>((0,a.uX)(),(0,a.CE)("option",{key:t,value:e},(0,s.v_)(t),9,at)))),128))],544),[[l.u1,i.selectedGenre]]),(0,a.bo)((0,a.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>i.selectedVoteAverage=e),onChange:t[3]||(t[3]=(...e)=>i.applyFilters&&i.applyFilters(...e)),class:"filter-select"},[t[6]||(t[6]=(0,a.Lk)("option",{value:""},"평점 (전체)",-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.voteAverages,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e,value:e},(0,s.v_)(e)+" 이상 ",9,it)))),128))],544),[[l.u1,i.selectedVoteAverage]]),(0,a.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>i.resetFilters&&i.resetFilters(...e)),class:"reset-button"},"초기화")]),(0,a.Lk)("div",nt,[(0,a.bF)(u,{apiKey:i.apiKey,genreCode:i.selectedGenre,voteAverage:i.selectedVoteAverage},null,8,["apiKey","genreCode","voteAverage"])])])):(0,a.Q3)("",!0)}var rt={name:"HomeSearch",components:{MovieInfiniteScroll:Xe},setup(){const e=(0,h.rd)(),t=(0,p.KR)(!1),o=(0,p.KR)(localStorage.getItem("TMDb-Key"));(0,a.sV)((()=>{o.value?t.value=!0:e.push("/signin");const a=JSON.parse(localStorage.getItem("selectedOptions"));a&&(l.value=a.genreId||"0",i.value=a.voteAverage||"")})),(0,a.nT)((()=>{localStorage.getItem("TMDb-Key")?t.value=!0:(t.value=!1,e.push("/signin"))}));const l=(0,p.KR)("0"),i=(0,p.KR)(""),n={Action:28,Adventure:12,Comedy:35,Crime:80,Drama:18,Family:10751,Fantasy:14,Horror:27,Romance:10749,"Science Fiction":878,Thriller:53},s=[5,6,7,8,9],r=()=>{localStorage.setItem("selectedOptions",JSON.stringify({genreId:l.value,voteAverage:i.value}))},u=()=>{l.value="0",i.value="",r()};return{isLoggedIn:t,apiKey:o,selectedGenre:l,selectedVoteAverage:i,genreCode:n,voteAverages:s,applyFilters:r,resetFilters:u}}};const ut=(0,L.A)(rt,[["render",st],["__scopeId","data-v-b7332d98"]]);var ct=ut;const dt={class:"sign-in"},vt={key:0,class:"container"},gt={id:"phone"},pt={id:"content-wrapper"},ht=["disabled"],mt={class:"input"},ft={class:"input"},kt={class:"input"},bt=["disabled"],wt={key:1,class:"logout-container"};function yt(e,t,o,i,n,r){return(0,a.uX)(),(0,a.CE)("div",dt,[t[28]||(t[28]=(0,a.Lk)("div",{class:"bg-image"},null,-1)),i.isLoggedIn?((0,a.uX)(),(0,a.CE)("div",wt,[(0,a.Lk)("h2",null,"Welcome, "+(0,s.v_)(i.email),1),(0,a.Lk)("button",{onClick:t[13]||(t[13]=(...e)=>i.handleLogout&&i.handleLogout(...e))},"Logout")])):((0,a.uX)(),(0,a.CE)("div",vt,[(0,a.Lk)("div",gt,[(0,a.Lk)("div",pt,[(0,a.Lk)("div",{class:(0,s.C4)(["card",{hidden:!i.isLoginVisible}]),id:"login"},[(0,a.Lk)("form",{onSubmit:t[6]||(t[6]=(0,l.D$)(((...e)=>i.handleLogin&&i.handleLogin(...e)),["prevent"]))},[t[18]||(t[18]=(0,a.Lk)("h1",null,"Sign in",-1)),(0,a.Lk)("div",{class:(0,s.C4)(["input",{active:i.isEmailFocused||i.email}])},[(0,a.bo)((0,a.Lk)("input",{id:"email",type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>i.email=e),onFocus:t[1]||(t[1]=e=>i.focusInput("email")),onBlur:t[2]||(t[2]=e=>i.blurInput("email")),required:""},null,544),[[l.Jo,i.email]]),t[14]||(t[14]=(0,a.Lk)("label",{for:"email"},"Username or Email",-1)),t[15]||(t[15]=(0,a.Lk)("span",{class:"focus-effect"},null,-1))],2),(0,a.Lk)("div",{class:(0,s.C4)(["input",{active:i.isPasswordFocused||i.password}])},[(0,a.bo)((0,a.Lk)("input",{id:"password",type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>i.password=e),onFocus:t[4]||(t[4]=e=>i.focusInput("password")),onBlur:t[5]||(t[5]=e=>i.blurInput("password")),required:""},null,544),[[l.Jo,i.password]]),t[16]||(t[16]=(0,a.Lk)("label",{for:"password"},"Password",-1)),t[17]||(t[17]=(0,a.Lk)("span",{class:"focus-effect"},null,-1))],2),(0,a.Lk)("button",{disabled:!i.isLoginFormValid},"Login",8,ht)],32),(0,a.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:t[7]||(t[7]=(...e)=>i.toggleCard&&i.toggleCard(...e))},t[19]||(t[19]=[(0,a.eW)(" Don't have an account? "),(0,a.Lk)("b",null,"Sign up",-1)]))],2),(0,a.Lk)("div",{class:(0,s.C4)(["card",{hidden:i.isLoginVisible}]),id:"register"},[(0,a.Lk)("form",{onSubmit:t[11]||(t[11]=(0,l.D$)(((...e)=>i.handleRegister&&i.handleRegister(...e)),["prevent"]))},[t[26]||(t[26]=(0,a.Lk)("h1",null,"Sign up",-1)),(0,a.Lk)("div",mt,[(0,a.bo)((0,a.Lk)("input",{id:"register-email",type:"email","onUpdate:modelValue":t[8]||(t[8]=e=>i.registerEmail=e),required:""},null,512),[[l.Jo,i.registerEmail]]),t[20]||(t[20]=(0,a.Lk)("label",{for:"register-email"},"Email",-1)),t[21]||(t[21]=(0,a.Lk)("span",{class:"focus-effect"},null,-1))]),(0,a.Lk)("div",ft,[(0,a.bo)((0,a.Lk)("input",{id:"register-password",type:"password","onUpdate:modelValue":t[9]||(t[9]=e=>i.registerPassword=e),required:""},null,512),[[l.Jo,i.registerPassword]]),t[22]||(t[22]=(0,a.Lk)("label",{for:"register-password"},"Password",-1)),t[23]||(t[23]=(0,a.Lk)("span",{class:"focus-effect"},null,-1))]),(0,a.Lk)("div",kt,[(0,a.bo)((0,a.Lk)("input",{id:"confirm-password",type:"password","onUpdate:modelValue":t[10]||(t[10]=e=>i.confirmPassword=e),required:""},null,512),[[l.Jo,i.confirmPassword]]),t[24]||(t[24]=(0,a.Lk)("label",{for:"confirm-password"},"Confirm Password",-1)),t[25]||(t[25]=(0,a.Lk)("span",{class:"focus-effect"},null,-1))]),(0,a.Lk)("button",{disabled:!i.isRegisterFormValid},"Register",8,bt)],32),(0,a.Lk)("a",{href:"javascript:void(0)",id:"gotologin",class:"account-check",onClick:t[12]||(t[12]=(...e)=>i.toggleCard&&i.toggleCard(...e))},t[27]||(t[27]=[(0,a.eW)(" Already have an account? "),(0,a.Lk)("b",null,"Sign in",-1)]))],2)])])]))])}o(2577);const Lt={users:JSON.parse(localStorage.getItem("users"))||[],tryLogin(e,t){return new Promise(((o,l)=>{const a=this.users.find((o=>o.email===e&&o.password===t));a?(localStorage.setItem("TMDb-Key",a.apiKey),o({message:"로그인 성공",apiKey:a.apiKey})):l(new Error("아이디 또는 비밀번호가 잘못되었습니다."))}))},tryRegister(e,t){return new Promise(((o,l)=>{if(this.users.some((t=>t.email===e)))l(new Error("이미 존재하는 아이디입니다."));else{const l=`key-${Math.random().toString(36).substr(2,16)}`,a={email:e,password:t,apiKey:l};this.users.push(a),localStorage.setItem("users",JSON.stringify(this.users)),o({message:"회원가입 성공",apiKey:l})}}))}};var Ct=Lt,Mt={name:"SignIn",setup(){const e=(0,h.rd)(),t=f(),o=(0,p.KR)(!0),l=(0,p.KR)(""),i=(0,p.KR)(""),n=(0,p.KR)(""),s=(0,p.KR)(""),r=(0,p.KR)(""),u=(0,p.KR)(!1),c=(0,p.KR)(!1),d=(0,a.EW)((()=>l.value&&i.value)),v=(0,a.EW)((()=>n.value&&s.value&&r.value&&s.value===r.value)),g=async()=>{try{const o=await Ct.tryLogin(l.value,i.value);if(!o)throw new Error("로그인에 실패했습니다.");t.login(i.value),alert("로그인 성공!"),e.push("/main")}catch(o){alert("로그인 실패: "+o.message),console.error(o)}},m=async()=>{try{const e=await Ct.tryRegister(n.value,s.value);if(!e)throw new Error("회원가입에 실패했습니다.");alert("회원가입 성공! 로그인 화면으로 이동합니다."),o.value=!0}catch(e){alert("회원가입 실패: "+e.message),console.error(e)}},k=()=>{t.logout(),l.value="",i.value="",alert("로그아웃 성공!")},b=()=>{o.value=!o.value},w=e=>{"email"===e&&(u.value=!0),"password"===e&&(c.value=!0)},y=e=>{"email"===e&&(u.value=!1),"password"===e&&(c.value=!1)};return{isLoginVisible:o,email:l,password:i,registerEmail:n,registerPassword:s,confirmPassword:r,isEmailFocused:u,isPasswordFocused:c,isLoginFormValid:d,isRegisterFormValid:v,isLoggedIn:t.isLoggedIn,handleLogin:g,handleRegister:m,handleLogout:k,toggleCard:b,focusInput:w,blurInput:y}}};const Kt=(0,L.A)(Mt,[["render",yt],["__scopeId","data-v-2a3a561c"]]);var Et=Kt;const It=()=>!!localStorage.getItem("TMDb-Key"),Rt=[{path:"/",redirect:"/main"},{path:"/main",name:"HomeMain",component:ne,meta:{requiresAuth:!0}},{path:"/popular",name:"HomePopular",component:Ve,meta:{requiresAuth:!0}},{path:"/wishlist",name:"HomeWishlist",component:tt,meta:{requiresAuth:!0}},{path:"/search",name:"HomeSearch",component:ct,meta:{requiresAuth:!0}},{path:"/sign-in",name:"SignIn",component:Et}],_t=(0,h.aE)({history:(0,h.LA)(),routes:Rt});_t.beforeEach(((e,t,o)=>{e.meta.requiresAuth&&!It()?o({path:"/sign-in",query:{redirect:e.fullPath}}):o()}));var St=_t,Wt=o(7411);o(7917);const Pt=(0,l.Ef)(I),At=(0,m.Ey)();Pt.use(At),Pt.use(St),Pt.use(Wt.Ay),Pt.mount("#app")}},t={};function o(l){var a=t[l];if(void 0!==a)return a.exports;var i=t[l]={exports:{}};return e[l].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,l,a,i){if(!l){var n=1/0;for(c=0;c<e.length;c++){l=e[c][0],a=e[c][1],i=e[c][2];for(var s=!0,r=0;r<l.length;r++)(!1&i||n>=i)&&Object.keys(o.O).every((function(e){return o.O[e](l[r])}))?l.splice(r--,1):(s=!1,i<n&&(n=i));if(s){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[l,a,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var l in t)o.o(t,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,l){var a,i,n=l[0],s=l[1],r=l[2],u=0;if(n.some((function(t){return 0!==e[t]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(r)var c=r(o)}for(t&&t(l);u<n.length;u++)i=n[u],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},l=self["webpackChunkmy_vue_project"]=self["webpackChunkmy_vue_project"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=o.O(void 0,[504],(function(){return o(239)}));l=o.O(l)})();
//# sourceMappingURL=app.d1ee99d3.js.map