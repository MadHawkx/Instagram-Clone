(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[0],{30:function(e,a,s){},31:function(e,a,s){},36:function(e,a,s){},37:function(e,a,s){},38:function(e,a,s){},39:function(e,a,s){},40:function(e,a,s){"use strict";s.r(a);var t=s(3),n=s(5),c=s.n(n),i=s(21),r=s.n(i),l=(s(30),s(31),s(14)),o=s(22),m=s(13),d=s.n(m),u=s(19),j=s(10),p=s(12);p.a.initializeApp({apiKey:"AIzaSyCzPGqgKWP6VWZDLKglg41aD0bcdHc90U0",authDomain:"instagram-clone-94a2e.firebaseapp.com",projectId:"instagram-clone-94a2e",storageBucket:"instagram-clone-94a2e.appspot.com",messagingSenderId:"1033305039287",appId:"1:1033305039287:web:21d2067e06d337f273c832",measurementId:"G-01P7Q7NN1G"});var b=p.a.firestore(),g=p.a.auth(),_=p.a.storage(),h=Object(n.createContext)(),x=function(e){var a=c.a.useState(!1),s=Object(j.a)(a,2),n=s[0],i=s[1],r=c.a.useState(null),l=Object(j.a)(r,2),o=l[0],m=l[1],x=c.a.useState(!0),O=Object(j.a)(x,2),f=O[0],v=O[1],N=c.a.useState([]),C=Object(j.a)(N,2),w=C[0],y=C[1],S=function(){var e=Object(u.a)(d.a.mark((function e(a){var s,t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.username,t=a.email,n=a.password,e.prev=1,e.next=4,g.createUserWithEmailAndPassword(t,n);case 4:e.sent.user.updateProfile({displayName:s}),i(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}(),P=function(){var e=Object(u.a)(d.a.mark((function e(a){var s,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.email,t=a.password,e.prev=1,e.next=4,g.signInWithEmailAndPassword(s,t);case 4:e.sent,i(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}();c.a.useEffect((function(){g.onAuthStateChanged((function(e){m(e),v(!1)})),b.collection("posts").orderBy("currentTime","desc").onSnapshot((function(e){y(e.docs.map((function(e){return{id:e.id,caption:e.data().caption,image:e.data().image,username:e.data().username}})))}))}));return Object(t.jsx)(h.Provider,{value:{model:n,openModel:function(){i(!0)},closeModel:function(){i(!1)},register:S,login:P,user:o,loader:f,logout:function(){g.signOut().then((function(){alert("Logged out"),m(null)})).catch((function(e){alert(e)}))},create:function(e){var a=e.caption,s=e.image;_.ref("images/".concat(s.name)).put(s).on("state_changed",(function(e){var a=e.bytesTransferred/e.totalBytes*100;console.log(a)}),(function(e){console.log(e)}),(function(){_.ref("images").child(s.name).getDownloadURL().then((function(e){b.collection("posts").add({caption:a,image:e,username:o.displayName,currentTime:p.a.firestore.FieldValue.serverTimestamp()})}))}))},posts:w,addComment:function(e){var a=e.id,s=e.comment;b.collection("posts").doc(a).collection("comments").add({comment:s,username:o.displayName,currentTime:p.a.firestore.FieldValue.serverTimestamp()})}},children:e.children})},O=function(e){console.log("")},f=function(){var e=c.a.useContext(h),a=e.openModel,s=e.user,n=e.loader,i=e.logout,r=function(){a()},m=function(){i()};return Object(t.jsxs)("div",{className:"Navbar__main",children:[Object(t.jsx)("div",{className:"Navbar__first",children:Object(t.jsx)("div",{className:"Navbar__first__logo",children:Object(t.jsx)("img",{src:"https://raw.githubusercontent.com/shakilkhan12/Y-InstagramClone/master/public/images/instagramLogo.png",alt:""})})}),Object(t.jsx)("div",{className:"Navbar__middle",children:Object(t.jsxs)("div",{className:"Navbar__middle-search",children:[Object(t.jsx)("input",{className:"Navbar__search",type:"text",placeholder:"Search",onChange:O}),Object(t.jsx)(l.c,{className:"Navbar__search--icon"})]})}),Object(t.jsxs)("div",{className:"Navbar__last",children:[Object(t.jsx)("li",{children:Object(t.jsx)(o.a,{className:"Navbar__last--icons"})}),Object(t.jsx)("li",{children:Object(t.jsx)(l.d,{className:"Navbar__last--icons"})}),Object(t.jsx)("li",{children:Object(t.jsx)(l.a,{className:"Navbar__last--icons"})}),Object(t.jsx)("li",{children:Object(t.jsx)(l.b,{className:"Navbar__last--icons"})}),Object(t.jsx)("li",{children:n?"...":!n&&s?Object(t.jsxs)("p",{className:"Navbar__last--login",children:[s.displayName,"/",Object(t.jsx)("span",{onClick:m,children:"logout"})]}):Object(t.jsx)("p",{className:"Navbar__last--login",onClick:r,children:"Register/Login"})})]})]})},v=s(16),N=s(15),C=(s(36),s(23)),w=function(){var e=c.a.useContext(h),a=e.model,s=e.closeModel,n=e.register,i=e.login,r=c.a.useState({Register:!0,Login:!1}),l=Object(j.a)(r,2),o=l[0],m=l[1],d=c.a.useState({username:"",email:"",password:""}),u=Object(j.a)(d,2),p=u[0],b=u[1],g=function(){m(Object(N.a)(Object(N.a)({},o),{},{Register:!o.Register,Login:!o.Login}))},_=function(e){b(Object(N.a)(Object(N.a)({},p),{},Object(v.a)({},e.target.name,e.target.value)))};return a?Object(t.jsx)("div",{className:"Model__main",children:Object(t.jsxs)("div",{className:"Model__container",children:[Object(t.jsx)("p",{className:"Model__container--txt",children:"Login/Register to Instagram"}),Object(t.jsx)("div",{children:Object(t.jsx)(C.a,{className:"Model__form--close",onClick:function(){s()}})}),o.Register?Object(t.jsx)("div",{className:"Model__form",children:Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(p),b({username:"",email:"",password:""})},children:[Object(t.jsx)("div",{className:"Model__form--group",children:Object(t.jsx)("img",{src:"https://raw.githubusercontent.com/shakilkhan12/Y-InstagramClone/master/public/images/instagramLogo.png",alt:""})}),Object(t.jsx)("div",{className:"Model__form--group",children:Object(t.jsx)("input",{type:"text",name:"username",className:"Model__input",placeholder:"Username...",onChange:_,value:p.username,required:!0})}),Object(t.jsx)("div",{className:"Model__form--group",children:Object(t.jsx)("input",{type:"email",name:"email",className:"Model__input",placeholder:"Email...",onChange:_,value:p.email,required:!0})}),Object(t.jsx)("div",{className:"Model__form--group",children:Object(t.jsx)("input",{type:"password",name:"password",className:"Model__input",placeholder:"Password...",onChange:_,value:p.password,required:!0})}),Object(t.jsx)("div",{className:"Model__form--group",children:Object(t.jsx)("input",{type:"submit",value:"Register",className:"btn btn-smart"})}),Object(t.jsx)("div",{className:"Model__form--group",children:Object(t.jsx)("span",{onClick:g,children:"Already Have an account? Login!"})})]})}):Object(t.jsx)("div",{className:"Model__form",children:Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i(p),b({username:"",email:"",password:""})},children:[Object(t.jsx)("div",{className:"Model__form--group",children:Object(t.jsx)("img",{src:"https://raw.githubusercontent.com/shakilkhan12/Y-InstagramClone/master/public/images/instagramLogo.png",alt:""})}),Object(t.jsx)("div",{className:"Model__form--group",children:Object(t.jsx)("input",{type:"email",name:"email",className:"Model__input",placeholder:"Email...",onChange:_,value:p.email,required:!0})}),Object(t.jsx)("div",{className:"Model__form--group",children:Object(t.jsx)("input",{type:"password",name:"password",className:"Model__input",placeholder:"Password...",onChange:_,value:p.password,required:!0})}),Object(t.jsx)("div",{className:"Model__form--group",children:Object(t.jsx)("input",{type:"submit",value:"Login",className:"btn btn-smart"})}),Object(t.jsx)("div",{className:"Model__form--group",children:Object(t.jsx)("span",{onClick:g,children:"Create A new Account?"})})]})})]})}):""},y=(s(37),function(){var e=c.a.useState([{id:1,image:"/images/wp2057612.png",name:"Lorem Ipsum"},{id:2,image:"/images/wallpapersden.com_kame-house-dragon-ball-z_3032x1706.jpg",name:"Lorem Ipsum"},{id:3,image:"/images/wp3873982-kids-see-ghosts-wallpapers.jpg",name:"Lorem Ipsum"},{id:4,image:"/images/wp1859934.jpg",name:"Lorem Ipsum"},{id:5,image:"/images/wallhaven-8oxmr2_1920x1080.png",name:"Lorem Ipsum"},{id:6,image:"/images/wallhaven-nk7e66_1920x1080.png",name:"Lorem Ipsum"},{id:7,image:"/images/wp6430810-your-name-anime-hd-wallpapers.jpg",name:"Lorem Ipsum"},{id:8,image:"/images/wallhaven-9m5r9k_1920x1080.png",name:"Lorem Ipsum"}]),a=Object(j.a)(e,1)[0];return Object(t.jsx)("div",{className:"Stories",children:a.map((function(e){return Object(t.jsxs)("div",{className:"Stories__info",children:[Object(t.jsx)("div",{className:"Stories__img",children:Object(t.jsx)("span",{children:Object(t.jsx)("img",{src:e.image,alt:"hello"})})}),Object(t.jsx)("div",{className:"Stories__name",children:e.name})]},e.id)}))})}),S=(s(38),s(24)),P=function(){var e=c.a.useContext(h),a=e.create,s=e.user,n=c.a.useState(""),i=Object(j.a)(n,2),r=i[0],l=i[1],o=c.a.useState(""),m=Object(j.a)(o,2),d=m[0],u=m[1];return null!=s?Object(t.jsxs)("div",{className:"Posts",children:[Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({caption:r,image:d}),l(""),u(""),document.getElementsByClassName("Post__upload--file--details")[0].innerHTML=""},children:[Object(t.jsx)("div",{className:"Posts__form",children:Object(t.jsx)("input",{type:"text",className:"Posts__input--1",placeholder:"Create a New Post",required:!0,onChange:function(e){return l(e.target.value)},value:r})}),Object(t.jsxs)("div",{className:"Posts__upload",children:[Object(t.jsxs)("div",{className:"Posts__input--2",children:[Object(t.jsx)("label",{htmlFor:"Post__upload--file",children:Object(t.jsx)(S.a,{className:"Posts__icon"})}),Object(t.jsx)("input",{type:"file",id:"Post__upload--file",className:"Post__upload--file",onChange:function(e){u(e.target.files[0]),void 0===e.target.files[0]?document.getElementsByClassName("Post__upload--file--details")[0].innerHTML="":document.getElementsByClassName("Post__upload--file--details")[0].innerHTML=e.target.files[0].name},required:!0})]}),Object(t.jsx)("div",{className:"Posts__submit",children:Object(t.jsx)("input",{type:"submit",value:"Upload",className:"btn-submit"})})]})]}),Object(t.jsx)("p",{className:"Post__upload--file--details"})]}):""},M=function(){var e=c.a.useContext(h),a=e.loader,s=e.user,n=!a&&s?s.displayName:"";return Object(t.jsxs)("div",{className:"Sidebar",children:[!a&&s&&null!=n?Object(t.jsxs)("div",{className:"Sidebar__user",children:[Object(t.jsx)("div",{className:"Sidebar__user--avatar",children:n[0]}),Object(t.jsx)("div",{className:"Sidebar__user--name",children:n})]}):"",Object(t.jsxs)("div",{className:"Sidebar__list",children:[Object(t.jsx)("h3",{children:"Suggestions for you"}),Object(t.jsx)("div",{className:"Sidebar__list--user"})]})]})},L=(s(39),function(e){var a=c.a.useContext(h),s=a.loader,n=a.user,i=a.addComment,r=c.a.useState(""),l=Object(j.a)(r,2),o=l[0],m=l[1],d=c.a.useState([]),u=Object(j.a)(d,2),p=u[0],g=u[1];return c.a.useEffect((function(){b.collection("posts").doc(e.id).collection("comments").orderBy("currentTime","desc").onSnapshot((function(e){g(e.docs.map((function(e){return e.data()})))}))})),Object(t.jsxs)("div",{className:"Comments",children:[p.map((function(e){return Object(t.jsxs)("div",{className:"Comments__main",children:[Object(t.jsx)("div",{className:"Comments__main--name",children:e.username}),Object(t.jsx)("div",{className:"Comments__main--comment",children:e.comment})]},e.id)})),Object(t.jsx)("div",{className:"Comments__section",children:!s&&n?Object(t.jsx)("form",{onSubmit:function(a){a.preventDefault(),i({id:e.id,comment:o}),m("")},children:Object(t.jsx)("input",{type:"text",className:"Comments__input",placeholder:"Add a comment...",onChange:function(e){return m(e.target.value)},value:o})}):""})]})}),k=function(){var e=c.a.useContext(h).posts;return Object(t.jsx)(t.Fragment,{children:e.map((function(e){return Object(t.jsxs)("div",{className:"PostsDisplay",id:e.id,children:[Object(t.jsxs)("div",{className:"PostsDisplay__Header",children:[Object(t.jsx)("div",{className:"PostsDisplay__Header--avatar",children:e.username[0]}),Object(t.jsx)("div",{className:"PostsDisplay__Header--username",children:e.username})]}),Object(t.jsx)("div",{className:"PostsDisplay__image",children:Object(t.jsx)("img",{src:e.image,alt:e.image})}),Object(t.jsx)(L,{id:e.id})]})}))})},I=function(){return Object(t.jsxs)(x,{className:"App",children:[Object(t.jsx)(f,{}),Object(t.jsxs)("div",{className:"container",children:[Object(t.jsx)(y,{}),Object(t.jsx)(P,{}),Object(t.jsx)(k,{}),Object(t.jsx)(M,{})]}),Object(t.jsx)(w,{})]})},D=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,41)).then((function(a){var s=a.getCLS,t=a.getFID,n=a.getFCP,c=a.getLCP,i=a.getTTFB;s(e),t(e),n(e),c(e),i(e)}))};r.a.render(Object(t.jsx)(c.a.StrictMode,{children:Object(t.jsx)(I,{})}),document.getElementById("root")),D()}},[[40,1,2]]]);
//# sourceMappingURL=main.407c3755.chunk.js.map