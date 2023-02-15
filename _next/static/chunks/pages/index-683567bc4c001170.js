(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1464:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(9831)}])},9831:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return w}});var t=s(5893),n=s(9008),a=s.n(n);s(7294);function i(e){var r=e.children;return(0,t.jsx)("div",{className:"max-w-3xl mx-auto px-8",children:r})}function l(e){switch(e.status){case"new":return(0,t.jsx)("span",{className:"mr-2 font-semibold text-rose-500 uppercase",children:"New"});case"review":return(0,t.jsx)("span",{className:"mr-2 font-semibold text-rose-500 uppercase",children:"Under review"});default:return null}}function c(e){var r=e.book,s=e.pages;return(0,t.jsxs)(t.Fragment,{children:["In ",r,null!=s&&(0,t.jsxs)(t.Fragment,{children:[" ","(pp. ",s,")"]})]})}function o(e){var r=e.file;return(0,t.jsx)("a",{href:"/papers/".concat(r),className:"text-indigo-600 hover:text-indigo-800 focus:text-indigo-800",children:"PDF"})}function d(e){var r=e.title,s=e.authors,n=e.year,a=e.book,i=e.pages,d=e.file,h=e.status;return(0,t.jsxs)(t.Fragment,{children:[null!=h&&(0,t.jsx)(l,{status:h}),s," (",n,"). ",r,".",null!=a&&(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)(c,{book:a,pages:"published"!=h?null:i}),"."]}),"published"===h&&null!=d&&(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)(o,{file:d}),"."]})]})}function h(e,r){if(null==e)return{};var s,t,n=function(e,r){if(null==e)return{};var s,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)s=a[t],r.indexOf(s)>=0||(n[s]=e[s]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)s=a[t],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}function u(e){var r=e.children,s=h(e,["children"]);return(0,t.jsx)("span",{className:"px-2 py-1 rounded bg-gradient-to-r text-xs font-semibold ".concat(s.className),children:r})}var x=JSON.parse('{"d":[{"type":"thesis","title":"Online Scheduling in Replicated Storage Systems","authors":"Dugois, A.","year":2024,"book":null,"pages":null,"file":"","status":"new","private":true},{"type":"journal","title":"A Markov Chain Monte Carlo Approach to Cost Matrix Generation for Scheduling Performance Evaluation","authors":"Canon, L.-C., Dugois, A., El Sayah, M., & H\xe9am, P.-C.","year":2022,"book":"Future Generation Computer Systems","pages":"136-150","file":"","status":"new","private":true},{"type":"conference","title":"Hector: A Framework to Implement and Evaluate Scheduling Strategies in Key-Value Stores","authors":"Canon, L.-C., Dugois, A., Marchal, L., & Rivi\xe8re, E.","year":2023,"book":"CCGRID 2023","pages":"","file":"","status":"new","private":true},{"type":"journal","title":"A Scheduling Framework for Distributed Key-Value Stores and its Application to Tail Latency Minimization","authors":"Ben Mokhtar, S., Canon, L.-C., Dugois, A., Marchal, L., & Rivi\xe8re, E.","year":2023,"book":"Journal of Scheduling","pages":"","file":"","status":"review","private":false},{"type":"conference","title":"Bounding the Flow Time in Online Scheduling with Structured Processing Sets","authors":"Canon, L.-C., Dugois, A., & Marchal, L.","year":2022,"book":"IPDPS 2022","pages":"136-150","file":"conference_canon2022.pdf","status":"published","private":false},{"type":"report","title":"Bounding the Flow Time in Online Scheduling with Structured Processing Sets (extended version)","authors":"Canon, L.-C., Dugois, A., & Marchal, L.","year":2022,"book":null,"pages":null,"file":"report_canon2022.pdf","status":"published","private":false},{"type":"conference","title":"Taming Tail Latency in Key-Value Stores: a Scheduling Perspective","authors":"Ben Mokhtar, S., Canon, L.-C., Dugois, A., Marchal, L., & Rivi\xe8re, E.","year":2021,"book":"Euro-Par 2021","pages":"136-150","file":"conference_benmokhtar2021.pdf","status":"published","private":false},{"type":"report","title":"Taming Tail Latency in Key-Value Stores: a Scheduling Perspective (extended version)","authors":"Ben Mokhtar, S., Canon, L.-C., Dugois, A., Marchal, L., & Rivi\xe8re, E.","year":2021,"book":null,"pages":null,"file":"report_benmokhtar2021.pdf","status":"published","private":false}]}');function p(e){switch(e.type){case"thesis":return(0,t.jsx)(u,{className:"from-slate-700 to-slate-900 text-slate-50",children:"PhD Thesis"});case"journal":return(0,t.jsx)(u,{className:"from-pink-300 to-violet-400 text-black",children:"Journal"});case"conference":return(0,t.jsx)(u,{className:"from-emerald-300 to-sky-400 text-black",children:"Conference"});case"report":return(0,t.jsx)(u,{className:"from-amber-300 to-orange-500 text-black",children:"Report"});default:return null}}function m(){return(0,t.jsx)("ul",{children:x.d.map((function(e,r){return!e.private&&(0,t.jsxs)("li",{className:"flex items-start py-3 border-b border-slate-200",children:[(0,t.jsx)("div",{className:"flex-1 pr-4 text-sm text-justify",children:(0,t.jsx)(d,{title:e.title,authors:e.authors,year:e.year,book:e.book,pages:e.pages,file:e.file,status:e.status})}),(0,t.jsx)("div",{className:"w-24 hidden md:block",children:(0,t.jsx)(p,{type:e.type})})]},r)}))})}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=function(){var r=Object.assign({p:"p",a:"a"},e.components);return(0,t.jsxs)(r.p,{children:["Drop me an email at ",(0,t.jsx)(r.a,{href:"mailto:anthony.dugois@ens-lyon.fr",children:"anthony.dugois@ens-lyon.fr"})," or download my CV (",(0,t.jsx)(r.a,{href:"/files/fr.pdf",children:"french"})," or ",(0,t.jsx)(r.a,{href:"/files/en.pdf",children:"english"}),")"]})},s=e.components||{},n=s.wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,{})})):r()};var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=function(){var r=Object.assign({p:"p",a:"a",em:"em"},e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"Hi there \ud83d\udc4b"}),"\n",(0,t.jsxs)(r.p,{children:["I am a PhD Candidate at ENS Lyon in the field of Computer Science.\nI work in the ROMA team at the LIP laboratory under supervision of\n",(0,t.jsx)(r.a,{href:"http://perso.ens-lyon.fr/loris.marchal/",children:"Loris Marchal"})," (ENS Lyon, CNRS) and\n",(0,t.jsx)(r.a,{href:"http://lccanon.free.fr/",children:"Louis-Claude Canon"})," (Univ. Franche-Comt\xe9, FEMTO-ST)."]}),"\n",(0,t.jsxs)(r.p,{children:["My main research interests are ",(0,t.jsx)(r.em,{children:"scheduling problems"}),", ",(0,t.jsx)(r.em,{children:"online optimization"})," and ",(0,t.jsx)(r.em,{children:"distributed storage systems"}),"."]})]})},s=e.components||{},n=s.wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,{})})):r()};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=function(){var r=Object.assign({p:"p",a:"a"},e.components);return(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://orcid.org/0000-0001-9784-9841",children:"ORCID"})," \xb7 ",(0,t.jsx)(r.a,{href:"https://scholar.google.com/citations?hl=fr&user=zDRg7b4AAAAJ",children:"Google Scholar"})," \xb7 ",(0,t.jsx)(r.a,{href:"https://dblp.org/pid/300/9053.html",children:"dblp"})," \xb7 ",(0,t.jsx)(r.a,{href:"https://github.com/anthonydugois",children:"GitHub"})," \xb7 ",(0,t.jsx)(r.a,{href:"https://www.linkedin.com/in/anthonydugois/",children:"LinkedIn"})]})},s=e.components||{},n=s.wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,{})})):r()};var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=function(){var r=Object.assign({p:"p"},e.components);return(0,t.jsx)(r.p,{children:"My research focuses on scheduling problems, a particular class of optimization problems.\nThese problems aim at assigning jobs to a set of resources (e.g., computer processors) in such a way that a\ngiven objective function is minimized.\nI study more specifically online scheduling in distributed storage systems, where scheduling decisions must be taken\nwithout knowing the complete workload."})},s=e.components||{},n=s.wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,{})})):r()};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=function(){var r=Object.assign({p:"p"},e.components);return(0,t.jsx)(r.p,{children:"In addition to my research activities, I work as a teaching assistant (up to 64 hours per year).\nCovered topics include parallel algorithms, distributed programs, logic, networks and\nsystem programming.\nCourses are taught in French (fr) or English (en)."})},s=e.components||{},n=s.wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,{})})):r()};function v(){return"February 2023"}var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=function(){var r=Object.assign({p:"p",a:"a"},e.components);return(0,t.jsxs)(r.p,{children:["Last update: ",(0,t.jsx)(v,{})," \xb7 Sources: ",(0,t.jsx)(r.a,{href:"https://github.com/anthonydugois/anthonydugois.github.io",children:"https://github.com/anthonydugois/anthonydugois.github.io"})]})},s=e.components||{},n=s.wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,{})})):r()};var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=function(){var r=Object.assign({p:"p",a:"a",em:"em"},e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a(),{children:[(0,t.jsx)("title",{children:"Anthony Dugois \u2014 PhD Candidate in Computer Science"}),(0,t.jsx)("meta",{name:"description",content:"Personal website of Anthony Dugois."})]}),"\n",(0,t.jsx)("section",{className:"pt-12 md:pt-44 pb-6 md:pb-12",children:(0,t.jsxs)(i,{children:[(0,t.jsx)("h1",{className:"font-semibold text-4xl mb-2",children:"Anthony Dugois"}),(0,t.jsx)("div",{className:"text-2xl text-slate-700 mb-4",children:(0,t.jsxs)(r.p,{children:["PhD Candidate in Computer Science ",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)("span",{className:"text-red-600 font-bold",children:["Looking for a Post-Doc! \u2192 ",(0,t.jsx)(r.a,{href:"mailto:anthony.dugois@ens-lyon.fr",children:"anthony.dugois@ens-lyon.fr"})]})]})}),(0,t.jsx)("div",{className:"text-lg md:text-xl md:text-justify md:leading-relaxed",children:(0,t.jsx)(b,{components:{p:function(e){return(0,t.jsx)(r.p,{className:"py-1",children:e.children})},a:function(e){return(0,t.jsx)(r.a,{href:e.href,className:"text-indigo-600 underline underline-offset-4 decoration-2 decoration-indigo-200 hover:no-underline hover:text-indigo-800 focus:no-underline focus:text-indigo-800",children:e.children})},em:function(e){return(0,t.jsx)(r.em,{className:"not-italic text-slate-600",children:e.children})}}})})]})}),"\n",(0,t.jsx)("section",{className:"pb-6 md:pb-12",children:(0,t.jsx)(i,{children:(0,t.jsxs)("div",{className:"px-4 py-4 rounded-md text-sm text-center bg-slate-100 text-slate-900",children:[(0,t.jsx)(f,{components:{a:function(e){return(0,t.jsx)(r.a,{href:e.href,className:"text-indigo-600 hover:text-indigo-800 focus:text-indigo-800",children:e.children})}}}),(0,t.jsx)("div",{className:"mt-1 italic",children:(0,t.jsx)(j,{components:{a:function(e){return(0,t.jsx)(r.a,{href:e.href,className:"underline underline-offset-2 hover:no-underline focus:no-underline",children:e.children})}}})})]})})}),"\n",(0,t.jsx)("section",{className:"py-6 md:py-12",children:(0,t.jsxs)(i,{children:[(0,t.jsx)("h2",{className:"text-2xl md:text-3xl font-semibold mb-2",children:"Research"}),(0,t.jsx)("div",{className:"text-base md:text-lg md:text-justify md:leading-relaxed",children:(0,t.jsx)(g,{})}),(0,t.jsx)("h3",{className:"text-xl md:text-2xl font-semibold mt-6 md:mt-12 mb-1",children:(0,t.jsx)(r.p,{children:"Scientific Publications"})}),(0,t.jsx)("div",{className:"text-base font-normal italic text-slate-600 mb-2",children:(0,t.jsx)(r.p,{children:"Authors are listed in lexicographic order."})}),(0,t.jsx)(m,{})]})}),"\n",(0,t.jsx)("section",{className:"py-6 md:py-12",children:(0,t.jsxs)(i,{children:[(0,t.jsx)("h2",{className:"text-2xl md:text-3xl font-semibold mb-2",children:"Teaching"}),(0,t.jsx)("div",{className:"text-base md:text-lg md:text-justify md:leading-relaxed",children:(0,t.jsx)(y,{})}),(0,t.jsx)("div",{className:"mt-8 overflow-auto",children:(0,t.jsxs)("table",{className:"w-full min-w-[44rem] border-collapse",children:[(0,t.jsx)("thead",{className:"text-left font-semibold text-sm",children:(0,t.jsxs)("tr",{className:"border-t-2 border-b border-slate-900",children:[(0,t.jsx)("th",{className:"py-1 pr-2 w-auto",children:"Year"}),"\n",(0,t.jsx)("th",{className:"py-1 px-2 w-auto",children:"Topic"}),"\n",(0,t.jsx)("th",{className:"py-1 px-2 w-auto",children:"Type"}),"\n",(0,t.jsx)("th",{className:"py-1 px-2 w-auto",children:"Level"}),"\n",(0,t.jsx)("th",{className:"py-1 pl-2 w-auto",children:"Location"})]})}),(0,t.jsxs)("tbody",{className:"text-left font-normal text-sm align-top",children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowSpan:2,className:"pt-1 pr-2",children:"2022-2023"}),"\n",(0,t.jsxs)("td",{className:"pt-1 px-2",children:[(0,t.jsx)("abbr",{title:"Basics of Computer Programming",children:"Bases de la Programmation"})," (fr)"]}),"\n",(0,t.jsxs)("td",{className:"pt-1 px-2",children:[(0,t.jsx)("abbr",{title:"Travaux Dirig\xe9s (Tutorials)",children:"TD"}),"/",(0,t.jsx)("abbr",{title:"Travaux Pratiques (Practical Work)",children:"TP"})]}),"\n",(0,t.jsx)("td",{className:"pt-1 px-2",children:(0,t.jsx)("abbr",{title:"Licence 1 (Bachelor's degree)",children:"L1"})}),"\n",(0,t.jsx)("td",{className:"pt-1 pl-2",children:(0,t.jsx)("abbr",{title:"Universit\xe9 de Franche-Comt\xe9",children:"UFC"})})]}),(0,t.jsxs)("tr",{className:"border-b border-slate-900",children:[(0,t.jsxs)("td",{className:"py-1 px-2",children:[(0,t.jsx)("abbr",{title:"Networks",children:"R\xe9seaux"})," (fr)"]}),"\n",(0,t.jsx)("td",{className:"py-1 px-2",children:(0,t.jsx)("abbr",{title:"Travaux Pratiques (Practical Work)",children:"TP"})}),"\n",(0,t.jsx)("td",{className:"py-1 px-2",children:(0,t.jsx)("abbr",{title:"Master 1 (Master's degree)",children:"M1"})}),"\n",(0,t.jsx)("td",{className:"py-1 pl-2",children:(0,t.jsx)("abbr",{title:"Universit\xe9 de Franche-Comt\xe9",children:"UFC"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowSpan:2,className:"pt-1 pr-2",children:"2021-2022"}),"\n",(0,t.jsxs)("td",{className:"pt-1 px-2",children:[(0,t.jsx)("abbr",{title:"Logic Circuits & Networks",children:"Circuits Logiques et R\xe9seaux"})," (fr)"]}),"\n",(0,t.jsxs)("td",{className:"pt-1 px-2",children:[(0,t.jsx)("abbr",{title:"Travaux Dirig\xe9s (Tutorials)",children:"TD"}),"/",(0,t.jsx)("abbr",{title:"Travaux Pratiques (Practical Work)",children:"TP"})]}),"\n",(0,t.jsx)("td",{className:"pt-1 px-2",children:(0,t.jsx)("abbr",{title:"Licence 3 (Bachelor's degree)",children:"L3"})}),"\n",(0,t.jsx)("td",{className:"pt-1 pl-2",children:(0,t.jsx)("abbr",{title:"\xc9cole Normale Sup\xe9rieure de Lyon",children:"ENSL"})})]}),(0,t.jsxs)("tr",{className:"border-b border-slate-900",children:[(0,t.jsx)("td",{className:"py-1 px-2",children:"Parallel and Distributed Algorithms & Programs (en)"}),"\n",(0,t.jsxs)("td",{className:"py-1 px-2",children:[(0,t.jsx)("abbr",{title:"Travaux Dirig\xe9s (Tutorials)",children:"TD"}),"/",(0,t.jsx)("abbr",{title:"Travaux Pratiques (Practical Work)",children:"TP"})]}),"\n",(0,t.jsx)("td",{className:"py-1 px-2",children:(0,t.jsx)("abbr",{title:"Master 1 (Master's degree)",children:"M1"})}),"\n",(0,t.jsx)("td",{className:"py-1 pl-2",children:(0,t.jsx)("abbr",{title:"\xc9cole Normale Sup\xe9rieure de Lyon",children:"ENSL"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{rowSpan:2,className:"pt-1 pr-2",children:"2020-2021"}),"\n",(0,t.jsxs)("td",{className:"pt-1 px-2",children:[(0,t.jsx)("abbr",{title:"Architecture, System & Networks",children:"Architecture, Syst\xe8me et R\xe9seaux"})," (fr)"]}),"\n",(0,t.jsxs)("td",{className:"pt-1 px-2",children:[(0,t.jsx)("abbr",{title:"Travaux Dirig\xe9s (Tutorials)",children:"TD"}),"/",(0,t.jsx)("abbr",{title:"Travaux Pratiques (Practical Work)",children:"TP"})]}),"\n",(0,t.jsx)("td",{className:"pt-1 px-2",children:(0,t.jsx)("abbr",{title:"Licence 3 (Bachelor's degree)",children:"L3"})}),"\n",(0,t.jsx)("td",{className:"pt-1 pl-2",children:(0,t.jsx)("abbr",{title:"\xc9cole Normale Sup\xe9rieure de Lyon",children:"ENSL"})})]}),(0,t.jsxs)("tr",{className:"border-b-2 border-slate-900",children:[(0,t.jsx)("td",{className:"py-1 px-2",children:"Integrated Project (en)"}),"\n",(0,t.jsxs)("td",{className:"py-1 px-2",children:[(0,t.jsx)("abbr",{title:"Travaux Dirig\xe9s (Tutorials)",children:"TD"}),"/",(0,t.jsx)("abbr",{title:"Travaux Pratiques (Practical Work)",children:"TP"})]}),"\n",(0,t.jsx)("td",{className:"py-1 px-2",children:(0,t.jsx)("abbr",{title:"Master 1 (Master's degree)",children:"M1"})}),"\n",(0,t.jsx)("td",{className:"py-1 pl-2",children:(0,t.jsx)("abbr",{title:"\xc9cole Normale Sup\xe9rieure de Lyon",children:"ENSL"})})]})]})]})})]})}),"\n",(0,t.jsx)("footer",{className:"pt-12 md:pt-32 pb-6 md:pb-12",children:(0,t.jsx)(i,{children:(0,t.jsx)("div",{className:"text-sm text-center text-slate-500",children:(0,t.jsx)(N,{components:{a:function(e){return(0,t.jsx)(r.a,{href:e.href,className:"underline underline-offset-2 hover:no-underline focus:no-underline",children:e.children})}}})})})})]})},s=e.components||{},n=s.wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(r,{})})):r()}},9008:function(e,r,s){e.exports=s(5443)}},function(e){e.O(0,[774,888,179],(function(){return r=1464,e(e.s=r);var r}));var r=e.O();_N_E=r}]);