import{_,o as f,c as m,a as e,w as d,b as i,d as v,r as u,e as h,f as g,F as $}from"./index-fS7jccdT.js";const L={data(){return{changePage:!1}},methods:{aboutUS(){this.$router.push("/").then(()=>{const t=document.querySelector("#aboutUS");t&&t.scrollIntoView({behavior:"smooth"})})},newInfo(){this.$router.push("/").then(()=>{const t=document.querySelector("#newInfo");t&&t.scrollIntoView({behavior:"smooth"})})},products(){this.$router.push("/").then(()=>{const t=document.querySelector("#products");t&&t.scrollIntoView({behavior:"smooth"})})},contact(){this.$router.push("/").then(()=>{const t=document.querySelector("#contact");t&&t.scrollIntoView({behavior:"smooth"})})}},mounted(){const t=document.querySelector(".headerBtn i"),n=document.querySelector(".menuList"),c=document.querySelector("header"),l=document.querySelectorAll("section[id]"),r=document.querySelectorAll(".menuList li a");t.addEventListener("click",()=>{t.classList.toggle("bi-x-lg"),n.classList.toggle("showMenuList"),r.forEach(o=>{o.addEventListener("click",()=>{n.classList.remove("showMenuList"),t.classList.remove("bi-x-lg"),o.scrollIntoView({behavior:"smooth"})})})}),window.addEventListener("scroll",()=>{const o=window.scrollY;o>500?(c.classList.add("bgActive"),c.style.transition="1s"):c.classList.remove("bgActive"),l.forEach(s=>{const a=s.offsetTop-150,p=s.offsetHeight,w=s.getAttribute("id"),b=document.querySelector(`.menuList li a[href*='${w}']`);o>a&&o<=a+p?b.classList.add("active"):b.classList.remove("active")})})}},y={class:"container"},x={class:"header"},S=e("h1",null,[e("a",{href:"#",class:"logo"},"logo")],-1),k={class:"menuList"},C=e("span",null,null,-1),I=e("span",null,null,-1),q=e("span",null,null,-1),V=e("span",null,null,-1),E=v('<div class="headerIcons text-nowrap"><i class="bi bi-heart-fill headerLove"></i><i class="bi bi-cart-plus-fill headerCart"></i></div><button class="headerBtn" type="button"><i class="bi bi-list"></i></button>',2);function N(t,n,c,l,r,o){return f(),m("header",null,[e("div",y,[e("div",x,[S,e("ul",k,[e("li",null,[e("a",{href:"#aboutUS",onClick:n[0]||(n[0]=d((...s)=>o.aboutUS&&o.aboutUS(...s),["prevent"])),class:"text-nowrap"},[i("關於我們"),C])]),e("li",null,[e("a",{href:"#newInfo",onClick:n[1]||(n[1]=d((...s)=>o.newInfo&&o.newInfo(...s),["prevent"])),class:"text-nowrap"},[i("最新資訊"),I])]),e("li",null,[e("a",{href:"#products",onClick:n[2]||(n[2]=d((...s)=>o.products&&o.products(...s),["prevent"])),class:"text-nowrap"},[i("服務項目"),q])]),e("li",null,[e("a",{href:"#contact",onClick:n[3]||(n[3]=d((...s)=>o.contact&&o.contact(...s),["prevent"])),class:"text-nowrap"},[i("幸福所在"),V])])]),E])])])}const T=_(L,[["render",N]]),A={mounted(){document.querySelector(".footerTop").addEventListener("click",()=>{window.scrollTo(0,0)})}},F={class:"p-md-4 p-3"},U={class:"container"},B={class:"row row-cols-md-3 row-cols-1"},R={class:"col"},M=e("p",null,"Designer: Sunny",-1),j=e("p",null,"Engineer： Zack",-1),z={style:{cursor:"pointer"}},D=e("i",{class:"bi bi-person-fill-lock fs-3"},null,-1),H=e("span",null,"後台",-1),P=e("p",{style:{"font-size":"15px"}},[e("i",{class:"bi bi-c-circle-fill"}),i(" 2024『結好婚』 此網站僅做為個人學習使用，非商業用途 ")],-1),Y=v('<div class="col d-flex align-items-md-center justify-content-center order-lg-1 order-2"><i class="bi bi-arrow-up-square-fill footerTop" style="cursor:pointer;"></i></div><div class="col d-flex justify-content-md-center align-item-md-center order-lg-2 order-1"><ul class="socialIcons list-unstyled"><li><a href=""><i class="bi bi-facebook"></i></a></li><li><a href=""><i class="bi bi-instagram"></i></a></li><li><a href=""><i class="bi bi-line"></i></a></li></ul></div>',2);function Z(t,n,c,l,r,o){const s=u("RouterLink");return f(),m("footer",F,[e("div",U,[e("div",B,[e("div",R,[M,j,e("p",z,[h(s,{to:"/login",class:"text-white text-decoration-underline"},{default:g(()=>[D,H]),_:1})]),P]),Y])])])}const G=_(A,[["render",Z]]),J={components:{NavbarComponent:T,FooterComponent:G}};function K(t,n,c,l,r,o){const s=u("NavbarComponent"),a=u("RouterView"),p=u("FooterComponent");return f(),m($,null,[h(s),h(a),h(p)],64)}const Q=_(J,[["render",K]]);export{Q as default};
