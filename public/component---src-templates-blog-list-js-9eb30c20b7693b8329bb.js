(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0/Pd":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("MUpH"),o=n("vOnD"),c=n("ibEc"),l=n("kOA+"),d=n.n(l);function s(){var e=Object(i.a)(["\n    margin: 0;\n  "]);return s=function(){return e},e}function m(){var e=Object(i.a)(["\n    border-radius: 0;\n    font-size: 1rem;\n    min-height: auto;\n    min-width: auto;\n    padding: .2rem .5rem;\n    margin-bottom: .7rem;\n  "]);return m=function(){return e},e}function g(){var e=Object(i.a)(["\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 2rem 1rem;\n  "]);return g=function(){return e},e}var u=Object(o.c)(d.a).withConfig({displayName:"styled__PostItemLink",componentId:"sc-1w5cmwb-0"})(["color:var(--texts);display:flex;text-decoration:none;body#grid &{background-color:var(--background);}&:hover{color:var(--higlight);}"]),p=o.c.section.withConfig({displayName:"styled__PostItemWrapper",componentId:"sc-1w5cmwb-1"})(["align-items:center;border-bottom:1px solid var(--borders);display:flex;padding:2rem 3rem;width:100%;body#grid &{border:none;padding:2rem 1rem;flex-direction:column;justify-content:center;}",""],c.a.lessThan("large")(g())),f=o.c.div.withConfig({displayName:"styled__PostItemTag",componentId:"sc-1w5cmwb-2"})(["align-items:center;margin-left:2rem;background:",";border-radius:50%;color:var(--postColor);display:flex;font-size:1.3rem;font-weight:700;justify-content:center;min-height:90px;min-width:90px;text-transform:uppercase;"," body#grid &{margin-bottom:1.5rem;}"],(function(e){return e.background?e.background:"var(--higlight)"}),c.a.lessThan("large")(m())),b=o.c.div.withConfig({displayName:"styled__PostItemInfo",componentId:"sc-1w5cmwb-3"})(["display:flex;flex-direction:column;margin-left:1.5rem;",""],c.a.lessThan("large")(s())),h=o.c.time.withConfig({displayName:"styled__PostItemData",componentId:"sc-1w5cmwb-4"})(["font-size:0.9rem;"]),v=o.c.h1.withConfig({displayName:"styled__PostItemTitle",componentId:"sc-1w5cmwb-5"})(["font-size:1.6rem;font-weight:700;margin:0.2rem 0 0.5rem;body#grid &{line-height:1.1;margin:0.8rem 0;}"]),y=o.c.p.withConfig({displayName:"styled__PostItemDescription",componentId:"sc-1w5cmwb-6"})(["font-size:1.2rem;font-weight:300;line-height:1.2;"]);t.a=function(e){var t=e.slug,n=e.background,r=e.category,i=e.date,o=e.timeToRead,c=e.title,l=e.description;return a.a.createElement(u,{to:t,cover:!0,direction:"right",bg:"var(--background)",duration:.6},a.a.createElement(p,null,a.a.createElement(f,{background:n},r),a.a.createElement(b,null,a.a.createElement(h,null,i," minutes of reading ",o),a.a.createElement(v,null,c),a.a.createElement(y,null,l))))}},Zttt:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("/d1K"),o=n("/hDo"),c=n("plVc"),l=n("MUpH"),d=n("vOnD"),s=n("ibEc");function m(){var e=Object(l.a)(["\n    padding: 4.125rem 0 3rem 0;\n  "]);return m=function(){return e},e}function g(){var e=Object(l.a)(["\n    flex-direction: column;\n  "]);return g=function(){return e},e}var u=d.c.section.withConfig({displayName:"styled__LayoutWrapper",componentId:"sc-119k7r-0"})(["display:flex;",""],s.a.lessThan("large")(g())),p=d.c.main.withConfig({displayName:"styled__LayoutMain",componentId:"sc-119k7r-1"})(['background:var(--background);min-height:100vh;padding:0 3.75rem 0 20rem;transition:background,color 0.5s;width:100%;body#grid &{grid-template-areas:"posts" "pagination";}',""],s.a.lessThan("large")(m())),f=n("lEpx");t.a=function(e){var t=e.children;return a.a.createElement(u,null,a.a.createElement(f.a,null),a.a.createElement(c.TransitionPortal,{level:"top"},a.a.createElement(i.a,null)),a.a.createElement(p,null,t),a.a.createElement(c.TransitionPortal,{level:"top"},a.a.createElement(o.a,null)))}},eWDE:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return h}));var r=n("q1tI"),a=n.n(r),i=n("Zttt"),o=n("vrFN"),c=n("0/Pd"),l=n("kOA+"),d=n.n(l),s=n("MUpH"),m=n("vOnD"),g=n("ibEc");function u(){var e=Object(s.a)(["\n    font-size: .8rem;\n    padding: 1rem;\n  "]);return u=function(){return e},e}var p=m.c.section.withConfig({displayName:"styled__PaginationWrapper",componentId:"yo2rsq-0"})(["align-items:center;border-top:1px solidvar(--borders);color:var(--texts);display:flex;padding:2.5rem 5rem;justify-content:space-between;"," a{color:var(--texts);text-decoration:none;transition:color 0.5s;&:hover{color:var(--higlight);}}"],g.a.lessThan("large")(u())),f=function(e){var t=e.isFirst,n=e.isLast,r=e.currentPage,i=e.numPages,o=e.prevPages,c=e.nextPages;return a.a.createElement(p,null,!t&&a.a.createElement(d.a,{to:o,cover:!0,direction:"left",bg:"var(--background)",duration:.6},"Página Anterior"),a.a.createElement("p",null,r," de ",i),!n&&a.a.createElement(d.a,{to:c,cover:!0,direction:"right",bg:"var(--background)",duration:.6},"Próxima Página →"))},b=m.c.section.withConfig({displayName:"styled__ListWrapper",componentId:"jwa7he-0"})(["body#grid &{background-color:var(--borders);border:1px solid var(--borders);display:grid;grid-area:posts;grid-gap:1px;grid-template-columns:repeat(auto-fit,minmax(380px,1fr));}"]),h="2345564771";t.default=function(e){var t=e.data.allMarkdownRemark.edges,n=e.pageContext,r=n.currentPage,l=n.numPages,d=1===r,s=r===l,m=r-1==1?"/":"/page/"+(r-1),g="/page/"+(r+1);return a.a.createElement(i.a,null,a.a.createElement(o.a,{title:"Home"}),a.a.createElement(b,null,t.map((function(e){var t=e.node,n=t.frontmatter,r=n.background,i=n.category,o=n.date,l=n.description,d=n.title,s=t.timeToRead,m=t.fields.slug;return a.a.createElement(c.a,{slug:m,background:r,category:i,date:o,timeToRead:s,title:d,description:l})}))),a.a.createElement(f,{isFirst:d,isLast:s,currentPage:r,numPages:l,prevPages:m,nextPages:g}))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-9eb30c20b7693b8329bb.js.map