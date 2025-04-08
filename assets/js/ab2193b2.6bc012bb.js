"use strict";(self.webpackChunkais_project_github_io=self.webpackChunkais_project_github_io||[]).push([[8752],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6706:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:1,lastUpdatedAt:"2023/05/30",author:"Jo\xe3o Paulo",last_update:{date:"2023/05/30",author:"Jo\xe3o Paulo"}},o="Artificial Immune Systems Package.",s={unversionedId:"intro",id:"version-0.1.x/intro",title:"Artificial Immune Systems Package.",description:"---",source:"@site/versioned_docs/version-0.1.x/intro.md",sourceDirName:".",slug:"/intro",permalink:"/ais-package.github.io/docs/0.1.x/intro",draft:!1,tags:[],version:"0.1.x",lastUpdatedBy:"Jo\xe3o Paulo",lastUpdatedAt:1685404800,formattedLastUpdatedAt:"May 30, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,lastUpdatedAt:"2023/05/30",author:"Jo\xe3o Paulo",last_update:{date:"2023/05/30",author:"Jo\xe3o Paulo"}},sidebar:"tutorialSidebar",next:{title:"Instalation",permalink:"/ais-package.github.io/docs/0.1.x/Getting Started/instalation"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Algorithms implemented:",id:"algorithms-implemented",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"artificial-immune-systems-package"},"Artificial Immune Systems Package."),(0,n.kt)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{src:a(651).Z,width:"224",height:"120"}),"  ")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"AISP")," is a Python package of immunoinspired techniques that apply metaphors from the vertebrate immune system to pattern recognition and optimization tasks. Conceived as an open-source package of artificial immune systems, AISP emerged from a research project initiated in ",(0,n.kt)("strong",{parentName:"p"},"2022")," at the Instituto Federal do Norte de Minas Gerais - Campus Salinas (",(0,n.kt)("strong",{parentName:"p"},"IFNMG - Salinas"),"). Its distribution is governed by the GNU Lesser General Public License v3.0 (LGPLv3)."),(0,n.kt)("h3",{id:"algorithms-implemented"},"Algorithms implemented:"),(0,n.kt)("blockquote",null,(0,n.kt)("ul",{parentName:"blockquote",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,n.kt)("a",{parentName:"li",href:"/docs/aisp-techniques/Negative%20Selection/"},(0,n.kt)("strong",{parentName:"a"},"Negative Selection."))),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("em",{parentName:"li"},"Clonal Selection Algorithms.")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("em",{parentName:"li"},"Dendritic Cells.")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("em",{parentName:"li"},"Immune Network Theory.")))))}u.isMDXComponent=!0},651:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/logo-7b415c6841a3ed8a760eff38ecd996b8.svg"}}]);