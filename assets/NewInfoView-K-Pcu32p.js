import{N as f}from"./NewInfoModal-4pyCgR3N.js";import{_ as v,r as l,o as i,c as n,e as a,a as t,F as r,g,b as x,t as d,w}from"./index-fS7jccdT.js";import"./modal-zhVd5Gm4.js";var A={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"getmarried",BASE_URL:"/vite_week8_20240323_test/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:_,VITE_PATH:p}=A,b={components:{NewsModal:f},data(){return{isLoading:!0,remoteArticles:[],tempArticle:{}}},methods:{getArticles(){this.$http(`${_}/api/${p}/articles`).then(s=>{this.remoteArticles=s.data.articles})},openInfo(s){this.tempArticle=s,this.$http(`${_}/api/${p}/article/${this.tempArticle.id}`).then(c=>{this.tempArticle=c.data.article,this.$refs.news.show()})}},mounted(){this.getArticles(),setTimeout(()=>{this.isLoading=!1},1e3)}},V={class:"info"},E=t("div",{class:"infoHeader"},null,-1),L={class:"container"},N=t("h3",{class:"text-center textTitle"},[t("span",null,"♥"),x("最新資訊"),t("span",null,"♥"),t("small",{class:"d-block textSmall"}," NEWS ")],-1),T={class:"position-relative pt-3 pb-5"},$={class:"row justify-content-center g-3 g-md-6"},k={class:"col-md-5"},I=["src"],S={class:"col-md-6 d-flex flex-column justify-content-center"},y={class:"fw-bold text-center mb-4 fs-2"},M={class:"text-truncate fs-3 text-center"},R=["onClick"];function B(s,c,D,U,o,m){const h=l("VLoading"),u=l("NewsModal");return i(),n(r,null,[a(h,{active:o.isLoading},null,8,["active"]),t("div",V,[a(u,{ref:"news","article-modal":o.tempArticle},null,8,["article-modal"]),E,t("div",L,[N,t("div",T,[(i(!0),n(r,null,g(o.remoteArticles,e=>(i(),n("div",{class:"mb-7",key:e.id},[t("div",$,[t("div",k,[t("img",{src:e.imageUrl,alt:"",class:"img-fluid rounded-3 h-100 bg-cover"},null,8,I)]),t("div",S,[t("h3",y,d(e.title),1),t("p",M,d(e.description),1),t("button",{class:"btn btn-outline-lilac fw-bold mx-auto text-nowrap px-md-5 px-3",type:"button",onClick:w(C=>m.openInfo(e),["prevent"])}," 詳細內容 ",8,R)])])]))),128))])])])],64)}const F=v(b,[["render",B]]);export{F as default};
