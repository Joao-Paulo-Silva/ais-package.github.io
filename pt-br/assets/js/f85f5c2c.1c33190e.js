"use strict";(self.webpackChunkais_project_github_io=self.webpackChunkais_project_github_io||[]).push([[6062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},774:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={id:"cell",title:"Cell",sidebar_label:"Cell - Memory B-cell",sidebar_position:2,pagination_next:null,keywords:["Binary","classifying","affinity threshold","Real-Valued","classifying","anomalies","K-Nearest Neighbors"],lastUpdatedAt:"2025/04/05",author:"Jo\xe3o Paulo"},o="Cell - C\xe9lula-B de memoria",i={unversionedId:"aisp-techniques/Clonal Selection Algorithms/AIRS/cell",id:"version-0.2.x/aisp-techniques/Clonal Selection Algorithms/AIRS/cell",title:"Cell",description:"Representa uma c\xe9lula-B de memoria.",source:"@site/i18n/pt-br/docusaurus-plugin-content-docs/version-0.2.x/aisp-techniques/Clonal Selection Algorithms/AIRS/Cell.md",sourceDirName:"aisp-techniques/Clonal Selection Algorithms/AIRS",slug:"/aisp-techniques/Clonal Selection Algorithms/AIRS/cell",permalink:"/pt-br/docs/aisp-techniques/Clonal Selection Algorithms/AIRS/cell",draft:!1,tags:[],version:"0.2.x",lastUpdatedBy:"Jo\xe3o Paulo",lastUpdatedAt:1744073319,formattedLastUpdatedAt:"8 de abr. de 2025",sidebarPosition:2,frontMatter:{id:"cell",title:"Cell",sidebar_label:"Cell - Memory B-cell",sidebar_position:2,pagination_next:null,keywords:["Binary","classifying","affinity threshold","Real-Valued","classifying","anomalies","K-Nearest Neighbors"],lastUpdatedAt:"2025/04/05",author:"Jo\xe3o Paulo"},sidebar:"tutorialSidebar",previous:{title:"ABR - Artificial Recognition Ball",permalink:"/pt-br/docs/aisp-techniques/Clonal Selection Algorithms/AIRS/abr"}},s={},u=[{value:"Construtor _Cell:",id:"construtor-_cell",level:2},{value:"Fun\xe7\xe3o hyper_clonal_mutate(...)",id:"fun\xe7\xe3o-hyper_clonal_mutate",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cell---c\xe9lula-b-de-memoria"},"Cell - C\xe9lula-B de memoria"),(0,a.kt)("p",null,"Representa uma c\xe9lula-B de memoria."),(0,a.kt)("h2",{id:"construtor-_cell"},"Construtor _Cell:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class _Cell(\n    self,\n    size: Optional[int] = None,\n    vector: Optional[npt.NDArray] = None,\n    algorithm: Literal[\n        "continuous-features", "binary-features"\n    ] = "continuous-features",\n) -> None\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Attributes:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"size"))," (",(0,a.kt)("inlineCode",{parentName:"li"},"Optional[int]"),"): O n\xfamero de caracter\xedsticas do vetor. Se ",(0,a.kt)("inlineCode",{parentName:"li"},"vector")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"None"),", um vetor aleat\xf3rio \xe9 gerado. Defaults to None."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"vector"))," (",(0,a.kt)("inlineCode",{parentName:"li"},"Optional[npt.NDArray]"),"): Um vetor de caracter\xedsticas da c\xe9lula. Defaults to None."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"algorithm"))," (",(0,a.kt)("inlineCode",{parentName:"li"},'Literal["continuous-features", "binary-features"]'),'): O tipo de algoritmo para amostras cont\xednuas ou bin\xe1rias. Defaults to "continuous-features".')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"fun\xe7\xe3o-hyper_clonal_mutate"},"Fun\xe7\xe3o hyper_clonal_mutate(...)"),(0,a.kt)("p",null,"Realiza a clonagem de N caracter\xedsticas a partir das caracter\xedsticas de uma c\xe9lula, gerando um conjunto de vetores mutados."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def hyper_clonal_mutate(self, n: int) -> npt.NDArray\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Os par\xe2metros de entrada s\xe3o:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"n")," (",(0,a.kt)("inlineCode",{parentName:"li"},"int"),"):N\xfamero de clones a serem gerados a partir de muta\xe7\xf5es na c\xe9lula original.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"npt.NDArray"),": Um array contendo N vetores mutados da c\xe9lula original.")))}m.isMDXComponent=!0}}]);