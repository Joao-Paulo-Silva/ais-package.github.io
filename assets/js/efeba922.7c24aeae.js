"use strict";(self.webpackChunkais_project_github_io=self.webpackChunkais_project_github_io||[]).push([[5307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(f,s(s({ref:t},u),{},{components:n})):i.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:1,title:"Multiclass",sidebar_label:"Multiclass",lastUpdatedAt:"2025/04/04",author:"Jo\xe3o Paulo"},s=void 0,l={unversionedId:"advanced-guides/Utils/Multiclass",id:"version-0.2.x/advanced-guides/Utils/Multiclass",title:"Multiclass",description:"This file contains internal utility functions designed to simplify data manipulation and processing in multiclass classification scenarios within the AISP package.",source:"@site/versioned_docs/version-0.2.x/advanced-guides/Utils/Multiclass.md",sourceDirName:"advanced-guides/Utils",slug:"/advanced-guides/Utils/Multiclass",permalink:"/ais-package.github.io/docs/advanced-guides/Utils/Multiclass",draft:!1,tags:[],version:"0.2.x",lastUpdatedBy:"Jo\xe3o Paulo",lastUpdatedAt:1744077074,formattedLastUpdatedAt:"Apr 8, 2025",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Multiclass",sidebar_label:"Multiclass",lastUpdatedAt:"2025/04/04",author:"Jo\xe3o Paulo"},sidebar:"tutorialSidebar",previous:{title:"Metrics",permalink:"/ais-package.github.io/docs/advanced-guides/Utils/Metrics"},next:{title:"About us",permalink:"/ais-package.github.io/docs/About us"}},o={},c=[{value:"Function slice_index_list_by_class(...)",id:"function-slice_index_list_by_class",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This file contains internal utility functions designed to simplify data manipulation and processing in multiclass classification scenarios within the AISP package."),(0,a.kt)("h3",{id:"function-slice_index_list_by_class"},"Function slice_index_list_by_class(...)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def slice_index_list_by_class(classes: Union[npt.NDArray, list], y: npt.NDArray) -> dict\n")),(0,a.kt)("p",null,"The function ",(0,a.kt)("inlineCode",{parentName:"p"},"slice_index_list_by_class(...)"),", separates the indices of the lines \\\naccording to the output class, to loop through the sample array, only in positions where \\\nthe output is the class being trained."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"classes"))," (",(0,a.kt)("inlineCode",{parentName:"li"},"list or npt.NDArray"),"): list with unique classes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"y"))," (npt.NDArray): Receives a ",(0,a.kt)("inlineCode",{parentName:"li"},"y"),"[",(0,a.kt)("inlineCode",{parentName:"li"},"N sample"),"]"," array with the output classes of the ",(0,a.kt)("inlineCode",{parentName:"li"},"X")," sample array.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"dict: A dictionary with the list of array positions(",(0,a.kt)("inlineCode",{parentName:"li"},"y"),"), with the classes as key.")))}d.isMDXComponent=!0}}]);