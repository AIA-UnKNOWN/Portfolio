(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(4),i=c.n(n),r=(c(10),c(11),c(12),c(0));var o=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("span",{className:"top-gold-bar"}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsxs)("div",{className:"me",children:[Object(r.jsxs)("p",{className:"name",children:[Object(r.jsx)("span",{className:"highlight-letter",children:"A"}),"jboy ",Object(r.jsx)("span",{className:"highlight-letter",children:"I"}),"an ",Object(r.jsx)("span",{className:"highlight-letter",children:"A"}),"bordo"]}),Object(r.jsx)("p",{className:"developer",children:"Software Developer"}),Object(r.jsx)("p",{className:"description",children:"With many real world experiences worked at startup as a remote developer"}),Object(r.jsx)("a",{href:"#my-projects",className:"see-projects-button",children:"See Projects"})]}),Object(r.jsx)("div",{className:"image-container",children:Object(r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",alt:"My profile"})})]})]})},l=(c(14),[{name:"Frontend",stacks:["HTML","CSS","SASS","Javascript","ReactJS"]},{name:"Backend",stacks:["NodeJS","Express","PHP","Laravel","MySQL"]},{name:"Mobile Development",stacks:["React Native"]},{name:"Other Techonologies",stacks:["Webpack","Jest","Firebase","Github","Gitlab","Git","Figma"]}]);var d=function(){var e=l;function t(e,t){e.classList.add(t)}function c(e,t){e.style.transform="translateX(-50%) scaleY(".concat(t,")")}return Object(s.useEffect)((function(){var e=window.innerHeight/100*80,s=document.querySelector(".timeline"),a=document.querySelectorAll(".stack:nth-child(even)"),n=document.querySelectorAll(".stack:nth-child(odd)"),i=document.querySelectorAll(".dot"),r=i[i.length-1].offsetTop;window.addEventListener("scroll",(function(){var i=s.getBoundingClientRect().top;if(i<=e){var o=e-i;c(s,o<=r?o:r)}a.forEach((function(c){c.getBoundingClientRect().top<=e&&t(c,"popup-from-left")})),n.forEach((function(c){c.getBoundingClientRect().top<=e&&t(c,"popup-from-right")}))}))}),[]),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"tech-stacks",children:[Object(r.jsx)("p",{className:"title",children:"Tech Stacks"}),Object(r.jsxs)("div",{className:"stacks",children:[Object(r.jsx)("div",{className:"timeline"}),e.map((function(e){return Object(r.jsxs)("div",{className:"stack",children:[Object(r.jsx)("div",{className:"dot"}),Object(r.jsx)("p",{className:"stack-title",children:e.name}),Object(r.jsx)("div",{className:"languages",children:e.stacks.map((function(e){return Object(r.jsx)("span",{className:"lang",children:e},e)}))})]},e.name)}))]})]})})},j=c(5),m=(c(15),[{name:"Cryptocurrency Converter",description:"This app converts a cryptocurrency value into another cryptocurrency.",stacks:["HTML","CSS","Javascript","Webpack"],image:"".concat(window.location.href,"/images/cryptocurrency-converter.png"),url:"https://aia-unknown.github.io/cryptocurrency-converter/"},{name:"Word Count Tracker",description:"This app is used by my partner in her work as an author/writer that tracks how many word counts she wrote in a specific day.",stacks:["HTML","CSS","SASS","Javascript","ReactJS","Laravel","MySQL"],image:"".concat(window.location.href,"/images/word-count-tracker.png"),url:"#"},{name:"Project 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",stacks:["HTML","CSS","Javascript","ReactJS","MySQL"],image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN26hOftzocJIhBD4xrhROdm8fcchqALyBwQ&usqp=CAU",url:"#"}]);var h=function(){var e=Object(s.useState)(m),t=Object(j.a)(e,2),c=t[0];return t[1],Object(s.useEffect)((function(){var e=window.innerHeight/100*80,t=document.querySelectorAll(".project");window.addEventListener("scroll",(function(){t.forEach((function(t){var c;t.getBoundingClientRect().top<=e&&(c="popup",t.classList.add(c))}))}))})),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{id:"my-projects",className:"my-projects",children:[Object(r.jsx)("p",{className:"title",children:"Projects"}),Object(r.jsx)("div",{className:"projects",children:c.map((function(e){return Object(r.jsxs)("div",{className:"project",children:[Object(r.jsxs)("div",{className:"image-container",children:[Object(r.jsx)("img",{src:e.image,alt:e.name}),Object(r.jsx)("div",{className:"on-hover",children:Object(r.jsx)("a",{href:e.url,target:"_blank",children:"Visit Site"})})]}),Object(r.jsx)("p",{className:"name",children:e.name}),Object(r.jsx)("p",{className:"description",children:e.description}),Object(r.jsx)("div",{className:"stacks",children:e.stacks.map((function(e){return Object(r.jsx)("span",{className:"stack",children:e},e)}))})]},e.name)}))})]})})};c(16),c(17);var u=function(){return Object(r.jsxs)("form",{onSubmit:function(e){var t;t=e,alert("Email Sent"),t.preventDefault()},className:"form",children:[Object(r.jsxs)("div",{className:"fields",children:[Object(r.jsxs)("div",{className:"input",children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{children:"Name"}),Object(r.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"Your name"})]}),Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{children:"Email"}),Object(r.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Your email"})]})]}),Object(r.jsxs)("div",{className:"textarea",children:[Object(r.jsx)("label",{children:"Message"}),Object(r.jsx)("textarea",{name:"message",id:"message",placeholder:"Leave a message to reach me out!"})]})]}),Object(r.jsx)("button",{type:"submit",children:"Send"})]})};var p=function(){return Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"contact",children:[Object(r.jsx)("p",{className:"title",children:"Contact Me"}),Object(r.jsx)(u,{})]})})},b=(c(18),c(3));var x=function(){return Object(r.jsx)("div",{className:"footer",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("p",{className:"copyright",children:"Ajboy Ian Abordo | \xa9 Copyright 2021"}),Object(r.jsxs)("div",{className:"social-medias",children:[Object(r.jsx)("a",{href:"#",target:"_blank",children:Object(r.jsx)(b.a,{className:"facebook-icon"})}),Object(r.jsx)("a",{href:"#",target:"_blank",children:Object(r.jsx)(b.b,{className:"twitter-icon"})})]})]})})};var O=function(){return Object(s.useEffect)((function(){var e=document.querySelector(".App");window.addEventListener("scroll",(function(){e.style.backgroundPositionY="".concat(.1*-window.scrollY,"px")}))}),[]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{}),Object(r.jsx)(d,{}),Object(r.jsx)(h,{}),Object(r.jsx)(p,{}),Object(r.jsx)(x,{})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),f()}],[[19,1,2]]]);
//# sourceMappingURL=main.ad0b1176.chunk.js.map