(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1464:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4206)}])},4206:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return B}});var n=r(5893),t=r(9008),a=r.n(t);r(7294);var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=function(){var s=Object.assign({p:"p",a:"a"},e.components);return(0,n.jsxs)(s.p,{children:["Say hello at ",(0,n.jsx)(s.a,{href:"mailto:anthony.dugois@univ-fcomte.fr",children:"anthony.dugois@univ-fcomte.fr"})," or download my CV\n(",(0,n.jsx)(s.a,{href:"/files/fr.pdf",children:"french"})," or ",(0,n.jsx)(s.a,{href:"/files/en.pdf",children:"english"}),")."]})},r=e.components||{},t=r.wrapper;return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,{})})):s()};var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=function(){var s=Object.assign({p:"p",a:"a"},e.components);return(0,n.jsxs)(s.p,{children:["Find me on ",(0,n.jsx)(s.a,{href:"https://orcid.org/0000-0001-9784-9841",children:"ORCID"}),", ",(0,n.jsx)(s.a,{href:"https://scholar.google.com/citations?hl=fr&user=zDRg7b4AAAAJ",children:"Google\nScholar"}),",\n",(0,n.jsx)(s.a,{href:"https://dblp.org/pid/300/9053.html",children:"dblp"}),", ",(0,n.jsx)(s.a,{href:"https://github.com/anthonydugois",children:"GitHub"})," and\n",(0,n.jsx)(s.a,{href:"https://www.linkedin.com/in/anthonydugois/",children:"LinkedIn"}),"."]})},r=e.components||{},t=r.wrapper;return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,{})})):s()};function c(e){var s=e.children;return(0,n.jsx)("h1",{className:"font-semibold text-2xl",children:s})}function o(e){var s=e.children;return(0,n.jsx)("div",{className:"mt-1 text-base",children:s})}function d(e){var s=e.children;return(0,n.jsx)("div",{className:"px-4 py-2 rounded-md bg-red-50 border-2 border-red-500 text-red-700 text-center text-sm font-medium",children:s})}function h(e){var s=e.title,r=e.subtitle,t=e.hint;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{children:s}),(0,n.jsx)(o,{children:r}),(0,n.jsx)("div",{className:"mt-4 pt-4 text-sm border-t border-zinc-200",children:(0,n.jsx)(l,{components:{a:function(e){var s=e.children,r=e.href;return(0,n.jsx)("a",{href:r,className:"text-blue-600 hover:text-blue-700",children:s})}}})}),(0,n.jsx)("div",{className:"mt-2 text-sm italic",children:(0,n.jsx)(i,{components:{a:function(e){var s=e.children,r=e.href;return(0,n.jsx)("a",{href:r,className:"text-blue-600 hover:text-blue-700",children:s})}}})}),t&&(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsx)(d,{children:t})})]})}function p(e){var s=e.children,r=e.className;return(0,n.jsx)("section",{className:"".concat(null!==r&&void 0!==r?r:""),children:s})}function x(e){var s=e.children,r=e.className;return(0,n.jsx)("h2",{className:"text-2xl font-bold ".concat(null!==r&&void 0!==r?r:""),children:s})}function u(e){var s=e.children,r=e.className;return(0,n.jsx)("h3",{className:"text-xl font-medium ".concat(null!==r&&void 0!==r?r:""),children:s})}function m(e){var s=e.children,r=e.className;return(0,n.jsx)("div",{className:"text-justify text-xl leading-relaxed font-normal text-zinc-800 ".concat(null!==r&&void 0!==r?r:""),children:(0,n.jsx)("div",{className:"section-content",children:s})})}function j(e){var s=e.children;return(0,n.jsx)("div",{className:"max-w-4xl lg:px-20",children:s})}function g(e){var s=null,r="bg-amber-50 text-amber-900";switch(e.status){case"new":s="New",r="bg-emerald-50 text-emerald-900";break;case"review":s="Under review",r="bg-amber-50 text-amber-900"}return s?(0,n.jsx)("span",{className:"mr-2 font-medium text-xs uppercase ".concat(r),children:s}):null}function b(e){var s=e.book,r=e.pages;return(0,n.jsxs)(n.Fragment,{children:["In ",s,null!=r&&(0,n.jsxs)(n.Fragment,{children:[" (pp. ",r,")"]})]})}function f(e){var s=e.pdf;return(0,n.jsx)("a",{href:"/papers/".concat(s),className:"text-blue-600 hover:text-blue-700",children:"PDF"})}function v(e){var s=e.doi;return(0,n.jsx)("a",{href:s,className:"text-blue-600 hover:text-blue-700",children:"DOI"})}function N(e){var s=e.title,r=e.authors,t=e.year,a=e.book,i=e.pages,l=e.pdf,c=e.doi,o=e.status;return(0,n.jsxs)(n.Fragment,{children:[null!=o&&(0,n.jsx)(g,{status:o}),r," (",t,"). ",s,".",null!=a&&(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)(b,{book:a,pages:"published"!=o?null:i}),"."]}),("published"===o||"new"===o||"review"===o)&&null!=c&&c.length>0&&(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)(v,{doi:c}),"."]}),("published"===o||"new"===o||"review"===o)&&null!=l&&l.length>0&&(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)(f,{pdf:l}),"."]})]})}var y=JSON.parse('{"q":[{"type":"journal","title":"A Markov Chain Monte Carlo Approach to Cost Matrix Generation for Scheduling Performance Evaluation","authors":"Canon, L.-C., Dugois, A., El Sayah, M., & H\xe9am, P.-C.","year":2022,"book":"Future Generation Computer Systems","pages":"136-150","pdf":"","doi":"","status":"new","private":true},{"type":"conference","title":"Low-Cost Algorithms for the Restricted Assignment Problem on Intervals of Machines","authors":"Canon, L.-C., Dugois, A., & Marchal, L.","year":2023,"book":"ICPP 2023","pages":"","pdf":"conference_canon2023b.pdf","doi":"","status":"review","private":true},{"type":"journal","title":"A Scheduling Framework for Distributed Key-Value Stores and its Application to Tail Latency Minimization","authors":"Ben Mokhtar, S., Canon, L.-C., Dugois, A., Marchal, L., & Rivi\xe8re, E.","year":2023,"book":"Journal of Scheduling","pages":"","pdf":"journal_benmokhtar2023.pdf","doi":"","status":"new","private":false},{"type":"thesis","title":"Scheduling in Distributed Storage Systems","authors":"Dugois, A.","year":2023,"book":null,"pages":null,"pdf":"phd-thesis.pdf","doi":"","status":"published","private":false},{"type":"conference","title":"Hector: A Framework to Design and Evaluate Scheduling Strategies in Persistent Key-Value Stores","authors":"Canon, L.-C., Dugois, A., Marchal, L., & Rivi\xe8re, E.","year":2023,"book":"ICPP 2023","pages":"535-545","pdf":"conference_canon2023a.pdf","doi":"https://doi.org/10.1145/3605573.3605614","status":"published","private":false},{"type":"conference","title":"Bounding the Flow Time in Online Scheduling with Structured Processing Sets","authors":"Canon, L.-C., Dugois, A., & Marchal, L.","year":2022,"book":"IPDPS 2022","pages":"683-693","pdf":"conference_canon2022.pdf","doi":"https://doi.org/10.1109/IPDPS53621.2022.00072","status":"published","private":false},{"type":"report","title":"Bounding the Flow Time in Online Scheduling with Structured Processing Sets (extended version)","authors":"Canon, L.-C., Dugois, A., & Marchal, L.","year":2022,"book":null,"pages":null,"pdf":"report_canon2022.pdf","doi":"","status":"published","private":false},{"type":"conference","title":"Taming Tail Latency in Key-Value Stores: a Scheduling Perspective","authors":"Ben Mokhtar, S., Canon, L.-C., Dugois, A., Marchal, L., & Rivi\xe8re, E.","year":2021,"book":"Euro-Par 2021","pages":"136-150","pdf":"conference_benmokhtar2021.pdf","doi":"https://doi.org/10.1007/978-3-030-85665-6_9","status":"published","private":false},{"type":"report","title":"Taming Tail Latency in Key-Value Stores: a Scheduling Perspective (extended version)","authors":"Ben Mokhtar, S., Canon, L.-C., Dugois, A., Marchal, L., & Rivi\xe8re, E.","year":2021,"book":null,"pages":null,"pdf":"report_benmokhtar2021.pdf","doi":"","status":"published","private":false}]}');function w(e){var s=null,r=null;switch(e.type){case"thesis":s="Thesis",r="bg-yellow-600";break;case"journal":s="Journal",r="bg-rose-600";break;case"conference":s="Conference",r="bg-sky-600";break;case"report":s="Report",r="bg-slate-600"}return s?(0,n.jsxs)("div",{className:"font-bold text-sm text-zinc-900 flex items-center",children:[(0,n.jsx)("div",{className:"flex-1 text-right",children:s}),(0,n.jsx)("div",{className:"ml-2 w-2 h-2 rounded-full ".concat(r)})]}):null}function k(){return(0,n.jsx)("ul",{children:y.q.map((function(e,s){return!e.private&&(0,n.jsxs)("li",{className:"ref flex items-center my-2 py-4 px-6 rounded-lg",children:[(0,n.jsx)("div",{className:"w-24 hidden md:block",children:(0,n.jsx)(w,{type:e.type})}),(0,n.jsx)("div",{className:"flex-1 md:pl-6 text-justify text-sm leading-relaxed text-zinc-700",children:(0,n.jsx)(N,{title:e.title,authors:e.authors,year:e.year,book:e.book,pages:e.pages,pdf:e.pdf,doi:e.doi,status:e.status})})]},s)}))})}function S(e){var s=e.lang,r=e.label,t=e.abbr;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("abbr",{title:t,children:r})," (",s,")"]})}function P(e){switch(e.type){case"td":return(0,n.jsx)("abbr",{title:"Travaux Dirig\xe9s (Tutorials)",children:"TD"});case"tp":return(0,n.jsx)("abbr",{title:"Travaux Pratiques (Practical Work)",children:"TP"});case"both":return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("abbr",{title:"Travaux Dirig\xe9s (Tutorials)",children:"TD"}),"/",(0,n.jsx)("abbr",{title:"Travaux Pratiques (Practical Work)",children:"TP"})]});default:return null}}function C(e){switch(e.level){case"l1":return(0,n.jsx)("abbr",{title:"Licence 1 (Bachelor's degree)",children:"L1"});case"l2":return(0,n.jsx)("abbr",{title:"Licence 2 (Bachelor's degree)",children:"L2"});case"l3":return(0,n.jsx)("abbr",{title:"Licence 3 (Bachelor's degree)",children:"L3"});case"m1":return(0,n.jsx)("abbr",{title:"Master 1 (Master's degree)",children:"M1"});case"m2":return(0,n.jsx)("abbr",{title:"Master 2 (Master's degree)",children:"M2"});default:return null}}function L(e){switch(e.location){case"ensl":return(0,n.jsx)("abbr",{title:"\xc9cole Normale Sup\xe9rieure de Lyon",children:"ENSL"});case"ufc":return(0,n.jsx)("abbr",{title:"Universit\xe9 de Franche-Comt\xe9",children:"UFC"});default:return null}}function A(){return(0,n.jsxs)("table",{className:"w-full min-w-[38rem] border-collapse",children:[(0,n.jsx)("thead",{className:"text-left font-medium text-sm text-zinc-900",children:(0,n.jsxs)("tr",{className:"border-t-2 border-b border-zinc-600",children:[(0,n.jsx)("th",{className:"py-2 pr-2 w-auto",children:"Year"}),(0,n.jsx)("th",{className:"py-2 px-2 w-auto",children:"Topic"}),(0,n.jsx)("th",{className:"py-2 px-2 w-auto",children:"Type"}),(0,n.jsx)("th",{className:"py-2 px-2 w-auto",children:"Level"}),(0,n.jsx)("th",{className:"py-2 pl-2 w-auto",children:"Location"})]})}),(0,n.jsxs)("tbody",{className:"text-left font-normal text-sm text-zinc-700 align-top",children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{rowSpan:5,className:"pt-2 pr-2",children:"2023-2024"}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(S,{lang:"fr",label:"Bases de la Programmation",abbr:"Basics of Computer Programming"})}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(P,{type:"both"})}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(C,{level:"l1"})}),(0,n.jsx)("td",{className:"pt-2 pl-2",children:(0,n.jsx)(L,{location:"ufc"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(S,{lang:"fr",label:"Web Avanc\xe9",abbr:"Advanced Web Programming"})}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(P,{type:"tp"})}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(C,{level:"l3"})}),(0,n.jsx)("td",{className:"pt-2 pl-2",children:(0,n.jsx)(L,{location:"ufc"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(S,{lang:"fr",label:"R\xe9seaux",abbr:"Networks"})}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(P,{type:"tp"})}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(C,{level:"m1"})}),(0,n.jsx)("td",{className:"pt-2 pl-2",children:(0,n.jsx)(L,{location:"ufc"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(S,{lang:"fr",label:"Compilation & Interpr\xe9tation",abbr:"Compilers & Interpreters"})}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(P,{type:"tp"})}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(C,{level:"m1"})}),(0,n.jsx)("td",{className:"pt-2 pl-2",children:(0,n.jsx)(L,{location:"ufc"})})]}),(0,n.jsxs)("tr",{className:"border-b border-zinc-600",children:[(0,n.jsx)("td",{className:"py-2 px-2",children:(0,n.jsx)(S,{lang:"fr",label:"Test Fonctionnel",abbr:"End-to-End Testing"})}),(0,n.jsx)("td",{className:"py-2 px-2",children:(0,n.jsx)(P,{type:"tp"})}),(0,n.jsx)("td",{className:"py-2 px-2",children:(0,n.jsx)(C,{level:"m2"})}),(0,n.jsx)("td",{className:"py-2 pl-2",children:(0,n.jsx)(L,{location:"ufc"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{rowSpan:2,className:"pt-2 pr-2",children:"2022-2023"}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(S,{lang:"fr",label:"Bases de la Programmation",abbr:"Basics of Computer Programming"})}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(P,{type:"both"})}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(C,{level:"l1"})}),(0,n.jsx)("td",{className:"pt-2 pl-2",children:(0,n.jsx)(L,{location:"ufc"})})]}),(0,n.jsxs)("tr",{className:"border-b border-zinc-600",children:[(0,n.jsx)("td",{className:"py-2 px-2",children:(0,n.jsx)(S,{lang:"fr",label:"R\xe9seaux",abbr:"Networks"})}),(0,n.jsx)("td",{className:"py-2 px-2",children:(0,n.jsx)(P,{type:"tp"})}),(0,n.jsx)("td",{className:"py-2 px-2",children:(0,n.jsx)(C,{level:"m1"})}),(0,n.jsx)("td",{className:"py-2 pl-2",children:(0,n.jsx)(L,{location:"ufc"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{rowSpan:2,className:"pt-2 pr-2",children:"2021-2022"}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(S,{lang:"fr",label:"Circuits Logiques et R\xe9seaux",abbr:"Logic Circuits & Networks"})}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(P,{type:"both"})}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(C,{level:"l3"})}),(0,n.jsx)("td",{className:"pt-2 pl-2",children:(0,n.jsx)(L,{location:"ensl"})})]}),(0,n.jsxs)("tr",{className:"border-b border-zinc-600",children:[(0,n.jsx)("td",{className:"py-2 px-2",children:(0,n.jsx)(S,{lang:"en",label:"Parallel and Distributed Algorithms & Programs",abbr:"Parallel and Distributed Algorithms & Programs"})}),(0,n.jsx)("td",{className:"py-2 px-2",children:(0,n.jsx)(P,{type:"both"})}),(0,n.jsx)("td",{className:"py-2 px-2",children:(0,n.jsx)(C,{level:"m1"})}),(0,n.jsx)("td",{className:"py-2 pl-2",children:(0,n.jsx)(L,{location:"ensl"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{rowSpan:2,className:"pt-2 pr-2",children:"2020-2021"}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(S,{lang:"fr",label:"Architecture, Syst\xe8me et R\xe9seaux",abbr:"Architecture, System & Networks"})}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(P,{type:"both"})}),(0,n.jsx)("td",{className:"pt-2 px-2",children:(0,n.jsx)(C,{level:"l3"})}),(0,n.jsx)("td",{className:"pt-2 pl-2",children:(0,n.jsx)(L,{location:"ensl"})})]}),(0,n.jsxs)("tr",{className:"border-b-2 border-zinc-600",children:[(0,n.jsx)("td",{className:"py-2 px-2",children:(0,n.jsx)(S,{lang:"en",label:"Integrated Project",abbr:"Integrated Project"})}),(0,n.jsx)("td",{className:"py-2 px-2",children:(0,n.jsx)(P,{type:"both"})}),(0,n.jsx)("td",{className:"py-2 px-2",children:(0,n.jsx)(C,{level:"m1"})}),(0,n.jsx)("td",{className:"py-2 pl-2",children:(0,n.jsx)(L,{location:"ensl"})})]})]})]})}function F(e){var s=e.label,r=e.description;return(0,n.jsxs)("li",{className:"tile border border-zinc-100-50 p-6",children:[(0,n.jsx)("div",{className:"font-medium",children:s}),(0,n.jsx)("div",{className:"mt-1 text-sm text-justify",children:r})]})}function T(e){var s=e.children;return(0,n.jsx)("ul",{className:"grid grid-cols-2 gap-4",children:s})}var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=function(){var s=Object.assign({p:"p",em:"em",a:"a"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Bonjour ! \ud83d\udc4b"}),"\n",(0,n.jsxs)(s.p,{children:["I am a Teaching and Research Assistant (",(0,n.jsx)(s.em,{children:"Attach\xe9 Temporaire d'Enseignement et de\nRecherche"}),") at Universit\xe9 de Franche-Comt\xe9, in the marvelous city of Besan\xe7on. I teach various\ncourses in Computer Science, such as basics of programming, networks, as well as compilers and\ninterpreters."]}),"\n",(0,n.jsxs)(s.p,{children:["I was previously a PhD student at \xc9cole Normale Sup\xe9rieure de Lyon, where I worked under supervision\nof ",(0,n.jsx)(s.a,{href:"http://perso.ens-lyon.fr/loris.marchal/",children:"Loris Marchal"})," and\n",(0,n.jsx)(s.a,{href:"http://lccanon.free.fr/",children:"Louis-Claude Canon"})," in the Laboratoire de l'Informatique du Parall\xe9lisme."]}),"\n",(0,n.jsxs)(s.p,{children:["My research interests include ",(0,n.jsx)(s.em,{children:"scheduling algorithms"}),", ",(0,n.jsx)(s.em,{children:"optimization in parallel computing"})," and\n",(0,n.jsx)(s.em,{children:"distributed storage systems"}),". I have also a keen interest in ",(0,n.jsx)(s.em,{children:"approximation theory"}),"."]})]})},r=e.components||{},t=r.wrapper;return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,{})})):s()};var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=function(){var s=Object.assign({p:"p"},e.components);return(0,n.jsx)(s.p,{children:"I study scheduling problems arising in distributed, replicated and persistent storage systems. The\nobjective is to derive guarantees on response time and load balancing of these systems in an online\ncontext, that is to say, without any prior knowledge of the workload."})},r=e.components||{},t=r.wrapper;return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,{})})):s()};var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=function(){var s=Object.assign({p:"p"},e.components);return(0,n.jsx)(s.p,{children:"In addition to my research activities, I work as a teaching assistant. Covered topics include\nparallel algorithms, distributed programs, logic, networks, programming, and compilers. Courses are\ntaught in French (fr) or English (en)."})},r=e.components||{},t=r.wrapper;return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,{})})):s()};var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=function(){var s=Object.assign({p:"p"},e.components);return(0,n.jsx)(s.p,{children:"In an effort to make my experiments fully reproducible, all pieces of software used to generate the results of my\npublications are available and open."})},r=e.components||{},t=r.wrapper;return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,{})})):s()};var M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=function(){var s=Object.assign({p:"p",a:"a"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["In my spare time, I volunteer with the ",(0,n.jsx)(s.a,{href:"https://climatefresk.org/",children:"Climate Fresk"})," to help raising\npublic awareness of the mechanisms that are at the root of climate change."]}),"\n",(0,n.jsx)(s.p,{children:"I also enjoy experimenting with various recipes in my kitchen (who doesn't love food?) and relaxing\nin nature during long running sessions."})]})},r=e.components||{},t=r.wrapper;return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,{})})):s()};function _(){return"January 2024"}var z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=function(){var s=Object.assign({p:"p",a:"a"},e.components);return(0,n.jsxs)(s.p,{children:["Last update: ",(0,n.jsx)(_,{})," \xb7 Sources:\n",(0,n.jsx)(s.a,{href:"https://github.com/anthonydugois/anthonydugois.github.io",children:"https://github.com/anthonydugois/anthonydugois.github.io"})]})},r=e.components||{},t=r.wrapper;return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,{})})):s()};var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=function(){var s=Object.assign({p:"p",a:"a"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Anthony Dugois \u2014 PhD Candidate in Computer Science"}),(0,n.jsx)("meta",{name:"description",content:"Anthony Dugois' personal page."})]}),"\n",(0,n.jsxs)("div",{className:"relative px-12 py-10 sm:px-24 sm:py-20",children:[(0,n.jsx)("header",{className:"mb-20 lg:w-72 lg:fixed",children:(0,n.jsx)(h,{title:"Anthony Dugois",subtitle:"PhD in Computer Science",hint:!1})}),(0,n.jsxs)("main",{className:"lg:pl-72",children:[(0,n.jsx)(p,{children:(0,n.jsx)(j,{children:(0,n.jsx)(m,{children:(0,n.jsx)(D,{})})})}),(0,n.jsx)(p,{className:"mt-24",children:(0,n.jsxs)(j,{children:[(0,n.jsx)(x,{className:"mb-4",children:"Research"}),(0,n.jsx)(m,{children:(0,n.jsx)(I,{})}),(0,n.jsx)(u,{className:"mt-12",children:"Scientific Publications"}),(0,n.jsx)("div",{className:"mt-1 mb-6 text-lg text-zinc-700",children:(0,n.jsx)(s.p,{children:"Authors appear in alphabetical order."})}),(0,n.jsx)(k,{})]})}),(0,n.jsx)(p,{className:"mt-24",children:(0,n.jsxs)(j,{children:[(0,n.jsx)(x,{className:"mb-4",children:"Teaching"}),(0,n.jsx)(m,{children:(0,n.jsx)(O,{})}),(0,n.jsx)("div",{className:"mt-8 overflow-auto",children:(0,n.jsx)(A,{})})]})}),(0,n.jsx)(p,{className:"mt-24",children:(0,n.jsxs)(j,{children:[(0,n.jsx)(x,{className:"mb-4",children:"Software"}),(0,n.jsx)(m,{children:(0,n.jsx)(E,{})}),(0,n.jsx)("div",{className:"mt-8",children:(0,n.jsxs)(T,{children:[(0,n.jsx)(F,{label:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.a,{href:"https://github.com/anthonydugois/apache-cassandra-se",children:"Hector"})}),description:(0,n.jsx)(n.Fragment,{children:" A framework built on top of Apache Cassandra to design, implement and evaluate scheduling algorithms in an industry-standard system."})}),(0,n.jsx)(F,{label:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.a,{href:"https://github.com/anthonydugois/hector-benchmarking",children:"Hector Benchmarking"})}),description:(0,n.jsx)(n.Fragment,{children:' Experiments performed in the ICPP paper entitled "Hector: A Framework to Design and Evaluate Scheduling Strategies in Persistent Key-Value Stores".'})}),(0,n.jsx)(F,{label:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.a,{href:"https://doi.org/10.6084/m9.figshare.19123139.v1",children:"Theoretical Throughput Estimator"})}),description:(0,n.jsx)(n.Fragment,{children:' Experiments performed in the IPDPS paper entitled "Bounding the Flow Time in Online Scheduling with Structured Processing Sets".'})}),(0,n.jsx)(F,{label:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.a,{href:"https://doi.org/10.6084/m9.figshare.21750605.v1",children:"Key-Value Store Simulator"})}),description:(0,n.jsx)(n.Fragment,{children:' Experiments performed in the Euro-Par paper entitled "Taming Tail Latency in Key-Value Stores: a Scheduling Perspective".'})})]})})]})}),(0,n.jsx)(p,{className:"mt-24",children:(0,n.jsxs)(j,{children:[(0,n.jsx)(x,{className:"mb-4",children:"Interests"}),(0,n.jsx)(m,{children:(0,n.jsx)(M,{})})]})})]}),(0,n.jsx)("footer",{className:"lg:pl-72 mt-24",children:(0,n.jsx)(j,{children:(0,n.jsx)("div",{className:"text-base text-zinc-500",children:(0,n.jsx)(z,{components:{a:function(e){var r=e.children,t=e.href;return(0,n.jsx)(s.a,{href:t,className:"underline underline-offset-2",children:r})}}})})})})]})]})},r=e.components||{},t=r.wrapper;return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(s,{})})):s()}},9008:function(e,s,r){e.exports=r(5443)}},function(e){e.O(0,[774,888,179],(function(){return s=1464,e(e.s=s);var s}));var s=e.O();_N_E=s}]);