import{m as s}from"./modal-zhVd5Gm4.js";import{_ as a,o as c,c as d,a as e,t as l}from"./index-olWomzGW.js";const i={props:["articleModal"],mixins:[s],data(){return{tempArticleModal:{}}},watch:{articleModal(){this.tempArticleModal=this.articleModal}}},r={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},n={class:"modal-dialog modal-dialog-scrollable modal-dialog-centered"},m={class:"modal-content"},_={class:"modal-header bg-lilac"},p={class:"modal-title fs-5 text-white",id:"exampleModalLabel"},h=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),b={class:"modal-body"},M={class:"d-block text-center mb-3",style:{color:"#9999cc"}},x={class:"card bg-transparent border-0"},u=["src"],f={class:"card-body"},g=["innerHTML"];function v(o,y,A,L,t,k){return c(),d("div",r,[e("div",n,[e("div",m,[e("div",_,[e("h1",p,l(t.tempArticleModal.title),1),h]),e("div",b,[e("small",M,l(o.$filters.date(t.tempArticleModal.create_at)),1),e("div",x,[e("img",{src:t.tempArticleModal.imageUrl,class:"rounded-3 bg-cover",height:"350px;"},null,8,u),e("div",f,[e("p",{class:"card-text mb-0",style:{color:"#9966cc","text-align":"justify"},innerHTML:t.tempArticleModal.content},null,8,g)])])])])])],512)}const N=a(i,[["render",v]]);export{N};
