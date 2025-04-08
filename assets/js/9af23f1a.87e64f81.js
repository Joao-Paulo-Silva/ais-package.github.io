"use strict";(self.webpackChunkais_project_github_io=self.webpackChunkais_project_github_io||[]).push([[213],{3905:(a,e,t)=>{t.d(e,{Zo:()=>N,kt:()=>h});var s=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function p(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,s)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,s,n=function(a,e){if(null==a)return{};var t,s,n={},p=Object.keys(a);for(s=0;s<p.length;s++)t=p[s],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(s=0;s<p.length;s++)t=p[s],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var l=s.createContext({}),i=function(a){var e=s.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},N=function(a){var e=i(a.components);return s.createElement(l.Provider,{value:e},a.children)},c="mdxType",o={inlineCode:"code",wrapper:function(a){var e=a.children;return s.createElement(s.Fragment,{},e)}},k=s.forwardRef((function(a,e){var t=a.components,n=a.mdxType,p=a.originalType,l=a.parentName,N=r(a,["components","mdxType","originalType","parentName"]),c=i(t),k=n,h=c["".concat(l,".").concat(k)]||c[k]||o[k]||p;return t?s.createElement(h,m(m({ref:e},N),{},{components:t})):s.createElement(h,m({ref:e},N))}));function h(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var p=t.length,m=new Array(p);m[0]=k;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=a,r[c]="string"==typeof a?a:n,m[1]=r;for(var i=2;i<p;i++)m[i]=t[i];return s.createElement.apply(null,m)}return s.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4189:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>m,default:()=>o,frontMatter:()=>p,metadata:()=>r,toc:()=>i});var s=t(7462),n=(t(7294),t(3905));const p={sidebar_position:1,title:"Metrics",sidebar_label:"Metrics",lastUpdatedAt:"2025/04/04",author:"Jo\xe3o Paulo"},m=void 0,r={unversionedId:"advanced-guides/Utils/Metrics",id:"version-0.2.x/advanced-guides/Utils/Metrics",title:"Metrics",description:"The metrics file provides utilities to measure, analyze, and compare the performance of the package's algorithms in a standardized way.",source:"@site/versioned_docs/version-0.2.x/advanced-guides/Utils/Metrics.md",sourceDirName:"advanced-guides/Utils",slug:"/advanced-guides/Utils/Metrics",permalink:"/ais-package.github.io/docs/advanced-guides/Utils/Metrics",draft:!1,tags:[],version:"0.2.x",lastUpdatedBy:"Jo\xe3o Paulo",lastUpdatedAt:1744077074,formattedLastUpdatedAt:"Apr 8, 2025",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Metrics",sidebar_label:"Metrics",lastUpdatedAt:"2025/04/04",author:"Jo\xe3o Paulo"},sidebar:"tutorialSidebar",previous:{title:"Artificial Immune Recognition System",permalink:"/ais-package.github.io/docs/advanced-guides/Base Classes Reference/csa/Classifier"},next:{title:"Multiclass",permalink:"/ais-package.github.io/docs/advanced-guides/Utils/Multiclass"}},l={},i=[{value:"Function accuracy_score(...)",id:"function-accuracy_score",level:3}],N={toc:i},c="wrapper";function o(a){let{components:e,...t}=a;return(0,n.kt)(c,(0,s.Z)({},N,t,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The metrics file provides utilities to measure, analyze, and compare the performance of the package's algorithms in a standardized way."),(0,n.kt)("h3",{id:"function-accuracy_score"},"Function accuracy_score(...)"),(0,n.kt)("p",null,"Function to calculate precision accuracy based on lists of true labels and\npredicted labels."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def accuracy_score(\n    y_true: Union[npt.NDArray, list],\n    y_pred: Union[npt.NDArray, list]\n) -> float\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Accuracy Equation:")),(0,n.kt)("p",null,"The accuracy is defined by the following formula:"),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mtext",{parentName:"mrow"},"Accuracy"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mrow",{parentName:"mfrac"},(0,n.kt)("munderover",{parentName:"mrow"},(0,n.kt)("mo",{parentName:"munderover"},"\u2211"),(0,n.kt)("mrow",{parentName:"munderover"},(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mn",{parentName:"mrow"},"1")),(0,n.kt)("mi",{parentName:"munderover"},"n")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"y"),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mover",{parentName:"msub",accent:"true"},(0,n.kt)("mi",{parentName:"mover"},"y"),(0,n.kt)("mo",{parentName:"mover"},"^")),(0,n.kt)("mi",{parentName:"msub"},"i")),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("mi",{parentName:"mfrac"},"n")),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mfrac",{parentName:"mrow"},(0,n.kt)("mtext",{parentName:"mfrac"},"Correct\xa0Predictions"),(0,n.kt)("mtext",{parentName:"mfrac"},"Total\xa0Number"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{ \\text{Accuracy} = \\frac{\\sum_{i=1}^{n} (y_i = \\hat{y}_i)}{n} = \\frac{\\text{Correct Predictions}}{\\text{Total Number}} }")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"2.18em",verticalAlign:"-0.686em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord"},"Accuracy")),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.494em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.6897em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mop"},(0,n.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"\u2211"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8043em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.4003em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"),(0,n.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.2029em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2997em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord accent"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6944em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")),(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.1944em"}},(0,n.kt)("span",{parentName:"span",className:"mord"},"^")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1944em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))),(0,n.kt)("span",{parentName:"span",className:"mclose"},")")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,n.kt)("span",{parentName:"span",className:"mfrac"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.3714em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord"},"Total\xa0Number")))),(0,n.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,n.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord text"},(0,n.kt)("span",{parentName:"span",className:"mord"},"Correct\xa0Predictions"))))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})))))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Term Definitions")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"y"),(0,n.kt)("mi",{parentName:"msub"},"i"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"y_i")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))))))),": the true label for instance i (y_true)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mover",{parentName:"msub",accent:"true"},(0,n.kt)("mi",{parentName:"mover"},"y"),(0,n.kt)("mo",{parentName:"mover"},"^")),(0,n.kt)("mi",{parentName:"msub"},"i"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\hat{y}_i")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord accent"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6944em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"y")),(0,n.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,n.kt)("span",{parentName:"span",className:"accent-body",style:{left:"-0.1944em"}},(0,n.kt)("span",{parentName:"span",className:"mord"},"^")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1944em"}},(0,n.kt)("span",{parentName:"span"}))))),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3117em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0359em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"})))))))))),": the predicted label for instance i (y_pred).")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"y_true"))," (",(0,n.kt)("inlineCode",{parentName:"li"},"Union[npt.NDArray, list]"),"): Ground truth (correct) labels.\nExpected to be of the same length as ",(0,n.kt)("inlineCode",{parentName:"li"},"y_pred"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"y_pred"))," (",(0,n.kt)("inlineCode",{parentName:"li"},"Union[npt.NDArray, list]"),"): Predicted labels. Expected to\nbe of the same length as ",(0,n.kt)("inlineCode",{parentName:"li"},"y_true"),".")),(0,n.kt)("p",null,"Returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Accuracy"))," (",(0,n.kt)("inlineCode",{parentName:"li"},"float"),"): The ratio of correct predictions to the total\nnumber of predictions.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Raises"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ValueError"),": If ",(0,n.kt)("inlineCode",{parentName:"li"},"y_true")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"y_pred")," are empty or if they do not have the same length.")),(0,n.kt)("hr",null))}o.isMDXComponent=!0}}]);