(function(){"use strict";var t={8942:function(t,e,a){var i=a(7195),r=function(){var t=this,e=t._self._c;return e("router-view")},s=[],n=(a(6229),a(7330),a(2062),a(7658),{beforeCreate(){const t=new URLSearchParams(window.location.search).get("code");t?this.$store.dispatch("setLoggedIn"):this.$router.push({name:"login"})}}),l=n,o=a(1001),c=(0,o.Z)(l,r,s,!1,null,null,null),u=c.exports,p=a(2241),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"overflow-y-auto overflow-hidden"},[e("div",{staticClass:"py-8 px-12 flex flex-col gap-16"},[e("TrendingPlaylist"),e("PlayListGroup",{attrs:{groupTitle:"Recommended"}}),e("PlayListGroup",{attrs:{groupTitle:"Recommended"}}),e("PlayListGroup",{attrs:{groupTitle:"Recommended"}})],1)])},f=[],m=function(){var t=this,e=t._self._c;return e("div",{},[e("div",{staticClass:"flex items-center justify-between mb-12 px-4"},[e("h2",{staticClass:"uppercase font-bold text-xl"},[t._v(t._s(t.groupTitle))]),e("router-link",{staticClass:"text-secondary text-base",attrs:{to:""}},[t._v("See All")])],1),e("div",{staticClass:"max-w-[100%] max-y-[100%] overflow-auto"},[e("ul",{staticClass:"flex",class:"vertical"===t.direction?"flex-col gap-1":"gap-10"},t._l(t.playlist,(function({title:a,artist:i,thumb:r},s){return e("li",{key:s,staticClass:"flex gap-8 items-center cursor-pointer group-hover py-4 px-4 rounded-xl",class:"vertical"===t.direction?"flex-row":"flex-col"},[e("img",{staticClass:"rounded-[10%]",style:"vertical"===t.direction?"min-width: 80px;":"min-width: 200px",attrs:{src:r,title:a,alt:""}}),e("div",[e("div",{staticClass:"font-bold text-xl"},[t._v(t._s(a))]),e("div",{staticClass:"text-lg text-secondary"},[t._v(t._s(i))])])])})),0)])])},h=[],g={name:"PlayListGroup",props:["groupTitle","link","direction"],data(){return{playlist:[{title:"Back to Her Men",artist:"Demien Rice",thumb:"https://ik.imagekit.io/kurniadev/thumb.png?updatedAt=1693472807210"},{title:"Back to Her Men",artist:"Demien Rice",thumb:"https://ik.imagekit.io/kurniadev/thumb.png?updatedAt=1693472807210"},{title:"Back to Her Men",artist:"Demien Rice",thumb:"https://ik.imagekit.io/kurniadev/thumb.png?updatedAt=1693472807210"},{title:"Back to Her Men",artist:"Demien Rice",thumb:"https://ik.imagekit.io/kurniadev/thumb.png?updatedAt=1693472807210"},{title:"Back to Her Men",artist:"Demien Rice",thumb:"https://ik.imagekit.io/kurniadev/thumb.png?updatedAt=1693472807210"},{title:"Back to Her Men",artist:"Demien Rice",thumb:"https://ik.imagekit.io/kurniadev/thumb.png?updatedAt=1693472807210"}]}}},v=g,x=(0,o.Z)(v,m,h,!1,null,null,null),y=x.exports,b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-start gap-14"},[e("img",{staticClass:"thumbnail w-[260px] rounded-[20px] shadow-[0px_38px_67px_-29px_#9b6cf166]",attrs:{src:t.trendImage}}),t._m(0)])},_=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col gap-7"},[e("span",{staticClass:"bg-secondary text-base py-2 px-6 rounded-[30px] tracking-wider w-max"},[t._v("Playlist")]),e("h1",{staticClass:"uppercase font-extrabold text-[48px]"},[t._v("Most trending in Indonesia")]),e("p",{staticClass:"text-secondary leading-tight text-2xl"},[t._v(" Boost your mood with Indonesia's trendiest playlist! Immerse yourself in the perfect blend of traditional and modern beats that are sweeping the nation. ")]),e("button",{staticClass:"bg-main neon-shadow py-4 px-12 text-2xl font-medium rounded-[60px] w-max"},[t._v("Play")])])}],k=a.p+"img/trending.c59678bd.png",C=a.p+"img/neon-light.71d6f8ed.svg",P={name:"TrendingPlaylist",data(){return{trendImage:k,neonLight:C}}},w=P,L=(0,o.Z)(w,b,_,!1,null,null,null),T=L.exports,S={props:["code"],components:{TrendingPlaylist:T,PlayListGroup:y}},Z=S,I=(0,o.Z)(Z,d,f,!1,null,null,null),R=I.exports,B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-screen flex flex-col items-center justify-center"},[t.isLoggedIn?e("a",{staticClass:"py-4 px-9 bg-main rounded-[64px]",attrs:{href:"/"}},[t._v("Home")]):e("a",{staticClass:"py-4 px-9 bg-main rounded-[64px]",attrs:{href:t.auth_url}},[t._v("Login")])])},O=[],j={data(){return{client_id:"9a18f40f9c7a4e659e079864b76f5838",redirect_uri:"https://kurnia-dev.github.io/muplay/"}},computed:{auth_url(){return`https://accounts.spotify.com/authorize?client_id=${this.client_id}&response_type=code&redirect_uri=${this.redirect_uri}`},code(){return new URLSearchParams(window.location.search).get("code")}},beforeCreate(){this.$store.state.isLoggedIn&&this.$router.push({name:"home",params:{code:this.code},props:!0})}},F=j,A=(0,o.Z)(F,B,O,!1,null,null,null),H=A.exports,M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex flex-col overflow-hidden h-[100vh]",attrs:{id:"app"}},[e("div",{staticClass:"flex gap-[10%] basis-auto grow-0 shrink-0 h-[calc(100vh-130px)]"},[e("SidebarLeft"),e("router-view")],1),e("TrackPlayer")],1)},D=[],$=function(){var t=this,e=t._self._c;return e("aside",{staticClass:"basis-[30%] flex-shrink-0 max-w-[400px] py-8 px-12 flex flex-col gap-[6rem] relative h-full overflow-auto"},[e("div",{staticClass:"flex flex-col gap-6 sticky top-0 bg-[var(--body-bg)] pb-5"},[e("SidebarNavButton",{attrs:{iconSrc:t.icons.home,title:"Home",text:"Home",href:"/"}}),e("SidebarNavButton",{attrs:{iconSrc:t.icons.search,title:"Search",text:"Search a song",href:"/search"}})],1),e("PlayListGroup",{attrs:{groupTitle:"Recently Played",direction:"vertical"}})],1)},G=[],U=a.p+"img/home.8249e089.svg",N=a.p+"img/search.ed0b4f25.svg",V=function(){var t=this,e=t._self._c;return e("router-link",{staticClass:"flex gap-10 rounded-[30px] text-xl text-secondary items-center py-4 px-9",class:t.path==t.href?"active":"",attrs:{to:t.href}},[e("img",{attrs:{src:t.iconSrc,title:t.title,alt:""}}),t._v(" "+t._s(t.text)+" ")])},z=[],q={name:"SidebarNavButtons",props:["iconSrc","title","text","href"],data(){return{path:location.pathname}},methods:{changePath(){this.path=location.pathname,alert(this.path)}}},E=q,J=(0,o.Z)(E,V,z,!1,null,null,null),K=J.exports,Q={name:"SidebarLeft",data(){return{icons:{home:U,search:N}}},components:{SidebarNavButton:K,PlayListGroup:y}},W=Q,X=(0,o.Z)(W,$,G,!1,null,null,null),Y=X.exports,tt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex justify-between items-center grow-0 h-max max-h-[130px] shrink-0 basis-[max-content] w-full py-4 px-12"},[e("TrackInfo"),e("TrackControler"),e("TrackRightControl"),e("img",{staticClass:"absolute left-0 -z-10 rotate-90",attrs:{src:t.neonLight,alt:""}})],1)},et=[],at=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex gap-10 items-center justify-center"},[e("img",{staticClass:"w-[80]",attrs:{id:"track-thumbnail",alt:t.alt,src:t.thumbUrl}}),e("div",{},[e("span",{staticClass:"block text-xl font-bold text-main",attrs:{id:"track-title"}},[t._v(" "+t._s(t.title)+" ")]),e("span",{staticClass:"block text-lg text-secondary",attrs:{id:"track-artist"}},[t._v(" "+t._s(t.artist)+" ")])]),e("img",{staticClass:"nonDraggableImage cursor-pointer",attrs:{src:t.isFavorite?t.favFilled:t.favOutline,alt:"",title:t.isFavorite?"Remove Favorite":"Set Favorite"}})])},it=[],rt=a.p+"img/fav-filled.70d4229e.svg",st=a.p+"img/fav-outline.996f7e76.svg",nt={name:"TrackInfo",data(){return{lastPlayed:this.$store.state.lastPlayed,favFilled:rt,favOutline:st}},computed:{thumbUrl(){return this.lastPlayed.thumb},title(){return this.lastPlayed.title},artist(){return this.lastPlayed.artist},alt(){return this.title+" - "+this.artist},isFavorite(){return this.lastPlayed.isFavorite}}},lt=nt,ot=(0,o.Z)(lt,at,it,!1,null,null,null),ct=ot.exports,ut=function(){var t=this,e=t._self._c;return e("div",[e("div",{ref:"progress",staticClass:"flex gap-8 items-center"},[e("span",[t._v(t._s(t.playPostion))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.playPostion,expression:"playPostion"}],staticClass:"w-[300px]",attrs:{type:"range",min:"0",value:"0",max:t.duration},domProps:{value:t.playPostion},on:{__r:function(e){t.playPostion=e.target.value}}}),e("span",[t._v(t._s(t.duration))])]),e("div",{ref:"controls",staticClass:"flex gap-11 items-center justify-center py-4 px-3"},[e("audio",{attrs:{src:t.src}}),e("img",{ref:"shuffle",attrs:{alt:"",src:t.icons.shuffle},on:{click:t.play}}),e("img",{ref:"prev-song",attrs:{alt:"",src:t.icons.prevSong},on:{click:t.play}}),e("img",{ref:"play-pause",staticClass:"neon-shadow rounded-full bg-[#9B6CF1]",attrs:{alt:"",src:t.icons.playPause},on:{click:t.play}}),e("img",{ref:"next-song",attrs:{alt:"",src:t.icons.nextSong},on:{click:t.play}}),e("img",{ref:"repeat",attrs:{alt:"",src:t.icons.repeat},on:{click:t.play}})])])},pt=[],dt=a.p+"img/shuffle.91562fea.svg",ft=a.p+"img/prev-song.97a9f018.svg",mt=a.p+"img/next-song.4e6659b9.svg",ht=a.p+"img/play.cd4b0c17.svg",gt=a.p+"img/repeat.47ea5661.svg",vt={name:"TrackControler",data(){return{src:"",duration:"3:29",playPostion:"0:00",icons:{shuffle:dt,prevSong:ft,nextSong:mt,playPause:ht,repeat:gt}}}},xt=vt,yt=(0,o.Z)(xt,ut,pt,!1,null,null,null),bt=yt.exports,_t=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex gap-5"},[e("img",{attrs:{src:t.trackListIcon,alt:"",title:"View all track"}}),e("img",{attrs:{src:t.volumeIcon,alt:"",title:"Adjust Volume"}})])},kt=[],Ct=a.p+"img/playlist.808d55eb.svg",Pt=a.p+"img/volume.bb5be617.svg",wt={name:"TrackRightControl",data(){return{trackListIcon:Ct,volumeIcon:Pt}}},Lt=wt,Tt=(0,o.Z)(Lt,_t,kt,!1,null,null,null),St=Tt.exports,Zt={name:"TrackPlayer",data(){return{neonLight:C}},components:{TrackInfo:ct,TrackControler:bt,TrackRightControl:St}},It=Zt,Rt=(0,o.Z)(It,tt,et,!1,null,null,null),Bt=Rt.exports,Ot={components:{SidebarLeft:Y,TrackPlayer:Bt}},jt=Ot,Ft=(0,o.Z)(jt,M,D,!1,null,null,null),At=Ft.exports,Ht=function(){var t=this,e=t._self._c;return e("div")},Mt=[],Dt={name:"SearchView"},$t=Dt,Gt=(0,o.Z)($t,Ht,Mt,!1,null,null,null),Ut=Gt.exports;i.ZP.use(p.ZP);const Nt=[{path:"/",component:At,children:[{path:"",name:"home",component:R,meta:{requiresAuth:!0}},{path:"/search",name:"search",component:Ut}]},{path:"/login",name:"login",component:H}],Vt=new p.ZP({mode:"history",base:"/muplay/",routes:Nt});var zt=Vt,qt=a(408);i.ZP.use(qt.ZP);var Et=new qt.ZP.Store({state:{lastPlayed:{thumb:"https://ik.imagekit.io/kurniadev/thumb.png?updatedAt=1693472807210",title:"Back to Her Men",artist:"Demien Rice",isFavorite:!1},isLoggedIn:!1},mutations:{lastPlayedUpdated(t,e){t.lastPlayed=e},hasLogin(t){t.isLoggedIn=!0}},actions:{setLoggedIn({commit:t}){t("hasLogin")},setLastPlayed({commit:t},e){t("lastPlayedUpdated",e)}}});i.ZP.config.productionTip=!1,new i.ZP({router:zt,store:Et,render:t=>t(u)}).$mount("#app")}},e={};function a(i){var r=e[i];if(void 0!==r)return r.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,i,r,s){if(!i){var n=1/0;for(u=0;u<t.length;u++){i=t[u][0],r=t[u][1],s=t[u][2];for(var l=!0,o=0;o<i.length;o++)(!1&s||n>=s)&&Object.keys(a.O).every((function(t){return a.O[t](i[o])}))?i.splice(o--,1):(l=!1,s<n&&(n=s));if(l){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[i,r,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/muplay/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,s,n=i[0],l=i[1],o=i[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(o)var u=o(a)}for(e&&e(i);c<n.length;c++)s=n[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},i=self["webpackChunkmuplay"]=self["webpackChunkmuplay"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(8942)}));i=a.O(i)})();
//# sourceMappingURL=app.4117163c.js.map