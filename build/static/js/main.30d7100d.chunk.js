(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},55:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(3),s=c.n(a),i=c(35),r=c.n(i),o=(c(44),c(10)),l=(c(45),c(46),c(8)),j=c(17),d=c(31);d.a.initializeApp({apiKey:"AIzaSyBj1-lxJiMIizOIeXo_7P7ADKPkLYEB4TU",authDomain:"clone-4ce19.firebaseapp.com",databaseURL:"https://clone-4ce19.firebaseio.com",projectId:"clone-4ce19",storageBucket:"clone-4ce19.appspot.com",messagingSenderId:"437855005187",appId:"1:437855005187:web:334e598f8b46076d4ebc36",measurementId:"G-F64HW6B48W"});var h=d.a.auth();var b=function(){var e=Object(l.f)(),t=Object(a.useState)(""),c=Object(o.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)(""),d=Object(o.a)(r,2),b=d[0],u=d[1];return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)(j.b,{to:"/",children:Object(n.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(n.jsxs)("div",{className:"login__container",children:[Object(n.jsx)("h1",{children:"Sign In"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("h5",{children:"Email"}),Object(n.jsx)("input",{value:s,onChange:function(e){return i(e.target.value)},type:"email"}),Object(n.jsx)("h5",{children:"Password"}),Object(n.jsx)("input",{value:b,onChange:function(e){return u(e.target.value)},type:"password"}),Object(n.jsx)("button",{onClick:function(t){t.preventDefault(),h.signInWithEmailAndPassword(s,b).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signInButton",children:"Sign In"})]}),Object(n.jsx)("p",{children:"Agree to Terms and Condition"}),Object(n.jsx)("button",{onClick:function(t){t.preventDefault(),h.createUserWithEmailAndPassword(s,b).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})},u=(c(55),c(36)),m=c.n(u),O=c(37),p=c.n(O),x=Object(a.createContext)(),g=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(n.jsx)(x.Provider,{value:Object(a.useReducer)(t,c),children:s})},_=function(){return Object(a.useContext)(x)};var v=function(){var e=_(),t=Object(o.a)(e,2),c=t[0],a=c.basket,s=c.user;return t[1],Object(n.jsxs)("nav",{className:"header",children:[Object(n.jsx)(j.b,{to:"/",children:Object(n.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})}),Object(n.jsxs)("div",{className:"header__search",children:[Object(n.jsx)("input",{type:"text",className:"header__searchInput"}),Object(n.jsx)(m.a,{className:"header__searchIcon"})]}),Object(n.jsx)("div",{className:"header__nav",children:Object(n.jsx)(j.b,{to:!s&&"/login",className:"header__link",children:Object(n.jsxs)("div",{onClick:function(){s&&h.signOut()},className:"header__option",children:[Object(n.jsxs)("span",{className:"header_optionLineOne",children:["Hello ",s]}),Object(n.jsxs)("span",{className:"header_optionLineTwo",children:[s?"Sign Out":"Sign In"," "]})]})})}),Object(n.jsx)("div",{className:"header__nav",children:Object(n.jsx)(j.b,{to:"/",className:"header__link",children:Object(n.jsxs)("div",{className:"header__option",children:[Object(n.jsx)("span",{className:"header_optionLineOne",children:"Returns"}),Object(n.jsx)("span",{className:"header_optionLineTwo",children:"& Orders"})]})})}),Object(n.jsx)("div",{className:"header__nav",children:Object(n.jsx)(j.b,{to:"/",className:"header__link",children:Object(n.jsxs)("div",{className:"header__option",children:[Object(n.jsx)("span",{className:"header_optionLineOne",children:"Your"}),Object(n.jsx)("span",{className:"header_optionLineTwo",children:"Prime"})]})})}),Object(n.jsx)(j.b,{to:"/checkout",className:"header__link",children:Object(n.jsxs)("div",{className:"header__optionBasket",children:[Object(n.jsx)(p.a,{}),Object(n.jsx)("span",{className:"header_optionLineTwo header__basketCount",children:null===a||void 0===a?void 0:a.length})]})})]})};c(57),c(58);var f=function(e){var t=e.id,c=e.title,a=e.image,s=e.price,i=e.rating,r=_(),l=Object(o.a)(r,2),j=(l[0].basket,l[1]);return Object(n.jsxs)("div",{className:"checkoutProduct",children:[Object(n.jsx)("img",{className:"checkoutProduct__image",src:a}),Object(n.jsxs)("div",{className:"checkoutProduct__info",children:[Object(n.jsx)("p",{className:"checkoutProduct__title",children:c}),Object(n.jsxs)("p",{className:"checkoutProduct__price",children:[Object(n.jsx)("small",{children:"$"}),Object(n.jsx)("strong",{children:s})]}),Object(n.jsx)("div",{className:"checkoutProduct__rating",children:Array(i).fill().map((function(e,t){return Object(n.jsx)("p",{children:"\u2b50"})}))}),Object(n.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove From Basket"})]})]})};c(59),c(60);var N=function(){return Object(n.jsx)("div",{className:"subtotal",children:Object(n.jsx)("button",{children:"Proceed to Checkout"})})};var k=function(){var e=_(),t=Object(o.a)(e,1)[0].basket;return Object(n.jsxs)("div",{className:"checkout",children:[Object(n.jsxs)("div",{className:"checkout__left",children:[Object(n.jsx)("img",{className:"checkout__ad",src:"https://blog.optimizely.com/wp-content/uploads/2014/01/Original-Sony-banner.jpg",alt:""}),0===(null===t||void 0===t?void 0:t.length)?Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Shopping Basket is Empty"}),Object(n.jsx)("p",{children:"You have no items in the basket!"})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{className:"checkout__title",children:"Your Shopping Basket"}),null===t||void 0===t?void 0:t.map((function(e){return Object(n.jsx)(f,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),t.length>0&&Object(n.jsxs)("div",{className:"checkout__right",children:[Object(n.jsx)("h1",{children:"Subtotal"}),Object(n.jsx)(N,{})]})]})};c(62);var S=function(e){var t=e.id,c=e.title,a=e.image,s=e.price,i=e.rating,r=_(),l=Object(o.a)(r,2),j=(l[0].basket,l[1]);return Object(n.jsxs)("div",{className:"product",children:[Object(n.jsxs)("div",{className:"product__info",children:[Object(n.jsx)("p",{children:c}),Object(n.jsxs)("p",{className:"product__price",children:[Object(n.jsx)("small",{children:"$"}),Object(n.jsx)("strong",{children:s})]}),Object(n.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e){return Object(n.jsx)("p",{children:"\u2b50"})}))})]}),Object(n.jsx)("img",{src:a,alt:""}),Object(n.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{id:t,title:c,image:a,price:s,rating:i}})},children:"Add to Basket"})]})};c(63);var C=function(){return Object(n.jsxs)("div",{className:"home",children:[Object(n.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(n.jsxs)("div",{className:"home__row",children:[Object(n.jsx)(S,{id:"121",title:"Icebox Watch: Collection",price:11.96,rating:5,image:"https://ecommercephotographyindia.com/assets/img/gallery/thumbnail/watch/6.jpg"}),Object(n.jsx)(S,{id:"121",title:"Icebox Watch: Box",price:11.96,rating:5,image:"https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/da7e84a96b73c5cde82b46ab32c25765.jpg"})]}),Object(n.jsxs)("div",{className:"home__row",children:[Object(n.jsx)(S,{id:"121",title:"Icebox Watch: Combo of Three",price:11.96,rating:5,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShVfrlMaGMg4MdajvqFL1shv_ZZQtIgnBzFQ&usqp=CAU"}),Object(n.jsx)(S,{id:"121",title:"Icebox Watch: Pump Design",price:11.96,rating:5,image:"https://i.pinimg.com/736x/4f/c9/47/4fc947c6636135f5378572e4212aa315.jpg"}),Object(n.jsx)(S,{id:"121",title:"Icebox Watch: Slaughter Chain",price:11.96,rating:5,image:"https://fashionista.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTQ5NDc0OTA0MDcxMjE4ODM1/mc-6.jpg"})]})]})};var w=function(){var e=_(),t=Object(o.a)(e,2),c=(t[0].user,t[1]);return Object(a.useEffect)((function(){var e=h.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),Object(n.jsx)(j.a,{children:Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)(l.c,{children:[Object(n.jsxs)(l.a,{path:"/checkout",children:[Object(n.jsx)(v,{}),Object(n.jsx)(k,{})]}),Object(n.jsx)(l.a,{path:"/login",children:Object(n.jsx)(b,{})}),Object(n.jsxs)(l.a,{path:"/",children:[Object(n.jsx)(v,{}),Object(n.jsx)(C,{})]})]})})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,76)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))},E=c(21),I=c(22),y=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(I.a)(Object(I.a)({},e),{},{user:t.user});case"ADD_TO_BASKET":return Object(I.a)(Object(I.a)({},e),{},{basket:[].concat(Object(E.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=Object(E.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===t.id}));return n>=0?c.splice(n,1):console.warn("cant remove product"),Object(I.a)(Object(I.a)({},e),{},{basket:c});default:return e}};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(g,{initialState:{basket:[],user:null},reducer:y,children:Object(n.jsx)(w,{})})}),document.getElementById("root")),A()}},[[65,1,2]]]);
//# sourceMappingURL=main.30d7100d.chunk.js.map