(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6565)}])},6565:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var i=n(5893),r=n(7294),o=n(9777),a=n(6243),s=n(132),l=n(7756),d=n.n(l),c={primary:function(e){return e?"primary:hover":"primary"},neutral:function(e){return e?"neutral:hover":"neutral"},anchor:function(e){return e?"anchor:hover":"anchor"}};function u(e){var t,n,o=(0,s.MS)().theme,a=(0,r.useState)(!1),l=a[0],u=a[1],g=c[e.context](l),p=null!==(t=e.action)&&void 0!==t?t:function(){},v=null!==(n=e.cxtAction)&&void 0!==n?n:function(){},h=o.button[g].css();return e.width&&(h.width=e.width),e.display&&(h.display=e.display),e.align&&(h.textAlign=e.align),e.padding&&(h.padding=e.padding),e.href?(0,i.jsx)("a",{className:d().btn,style:h,onMouseOver:function(){return u(!0)},onMouseLeave:function(){return u(!1)},onContextMenu:function(e){v(),e.preventDefault()},href:e.href,children:e.children}):(0,i.jsx)("button",{className:d().btn,style:h,onMouseOver:function(){return u(!0)},onMouseLeave:function(){return u(!1)},onClick:p,onContextMenu:function(e){v(),e.preventDefault()},type:e.type,disabled:e.disabled,children:e.children})}var g=n(4224),p=n.n(g);function v(e){var t,n=(0,s.MS)().theme.card.card.css();return n.width=null!==(t=e.width)&&void 0!==t?t:"auto",e.height&&(n.height=e.height),e.margin&&(n.margin=e.margin),(0,i.jsx)("div",{className:p().card,style:n,children:e.children})}function h(e){var t=(0,s.MS)().theme;return(0,i.jsxs)("div",{className:p().cardControls,style:t.card.dismissal.css(),children:[e.action&&(0,i.jsx)(u,{type:"button",context:"neutral",action:function(){return e.action()},children:"\u2501"}),e.dismiss&&(0,i.jsx)("div",{style:{float:"right"},children:(0,i.jsx)(u,{type:"button",context:"neutral",action:function(){return e.dismiss()},children:"\xd7"})})]})}function f(e){var t=(0,r.useState)(),n=t[0],o=t[1],s=(0,r.useState)(!1),l=s[0],d=s[1];return e.descriptionControl(o),(0,i.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"100%"},children:(0,i.jsxs)(v,{width:"100%",height:l?"75vh":"150px",margin:"0",children:[(0,i.jsx)(h,{action:function(){return d(!l)}}),(0,i.jsx)(a.Z,{options:{createElement:function(t,n){for(var o=arguments.length,a=new Array(o>2?o-2:0),s=2;s<o;s++)a[s-2]=arguments[s];return"br"===t?(0,i.jsx)("br",{},n.key):"a"===t?n.href.endsWith(".md")?(0,i.jsx)(u,{context:"anchor",display:"inline",padding:"0",action:function(){return e.simulateTap(n.href.split(".")[0])},children:a},n.key):(0,i.jsx)(u,{context:"anchor",display:"inline",padding:"0",href:n.href,children:a},n.key):r.createElement(t,n,a)}},children:n?n.data("description"):e.readme})]})})}var y=n(9058),m=n.n(y),x=n(9142),b=n.n(x),T=n(578),C=n.n(T);function A(e,t,n,i){if(e.data("".concat(i,"Label"))){var r=n.x1+n.w/2,o=n.y1+n.h/2,a=5*e.data("".concat(i,"Label")).length;5==a&&(a+=5),t.x<r&&e.style("".concat(i,"-text-margin-x"))!=="-".concat(a,"px")&&e.style("".concat(i,"-text-margin-x"),"-".concat(a,"px")),t.x>=r&&e.style("".concat(i,"-text-margin-x"))!=="".concat(a,"px")&&e.style("".concat(i,"-text-margin-x"),"".concat(a,"px")),t.y<=o&&e.style("".concat(i,"-text-margin-y"))!=="-".concat(7,"px")&&e.style("".concat(i,"-text-margin-y"),"-".concat(7,"px")),t.y>o&&e.style("".concat(i,"-text-margin-y"))!=="".concat(7,"px")&&e.style("".concat(i,"-text-margin-y"),"".concat(7,"px"))}}var D=function(e){e&&(e("core","nodeExpansion",(function(){this.nodes().forEach((function(e){e.data("expanded",!1),e.incomers().length&&e.style("visibility","hidden"),e.outgoers().length&&e.style("shape","diamond")}))})),e("collection","expanded",(function(){if(this.length>0){var e=this[0];return!!e.isNode()&&e.data("expanded")}})),e("collection","expand",(function(){if(this.length>0){var e=this[0];e.isNode()&&e.outgoers().length&&(e.data("expanded",!0),e.style("shape","ellipse"),e.outgoers("edge").forEach((function(e){e.style("visibility","visible"),e.target().style("visibility","visible")})))}})),e("collection","collapse",(function(){if(this.length>0){var e=this[0];e.isNode()&&(e.data("expanded",!1),e.outgoers("edge").forEach((function(t){e.style("shape","diamond");var n=t.target();n.style("visibility","hidden"),n.incomers("edge").forEach((function(t){var i=t.source();e.same(i)||i.data("expanded")&&n.style("visibility","visible")})),t.style("visibility","hidden"),n.collapse()})))}})))};"undefined"!==typeof cytoscape&&D(cytoscape);var I=D,S=function(e){e&&e("core","labelPositioning",(function(){this.on("position","node",(function(e){e.target.forEach((function(e){e.isChild()&&function(e){var t=8*e.data("label").length,n=e.boundingBox({}),i=[{x1:n.x1,x2:n.x1+t,y1:n.y1,y2:n.y1+25,vAlign:"top",hAlign:"left",yMargin:20,xMargin:t},{x1:n.x2-t,x2:n.x2,y1:n.y1,y2:n.y1+25,vAlign:"top",hAlign:"right",yMargin:20,xMargin:-t},{x1:n.x1,x2:n.x1+t,y1:n.y2-25,y2:n.y2,vAlign:"bottom",hAlign:"left",yMargin:-20,xMargin:t},{x1:n.x2-t,x2:n.x2,y1:n.y2-25,y2:n.y2,vAlign:"bottom",hAlign:"right",yMargin:-20,xMargin:-t}],r=!0,o=!1,a=void 0;try{for(var s,l=function(t,n){var i=n.value,r=!0;if(e.children().forEach((function(e){var t=e.boundingBox({});(t.x1>=i.x1&&t.x1<=i.x2&&t.y1>=i.y1&&t.y1<=i.y2||t.x2>=i.x1&&t.x2<=i.x2&&t.y1>=i.y1&&t.y1<=i.y2||t.x1>=i.x1&&t.x1<=i.x2&&t.y2>=i.y1&&t.y2<=i.y2||t.x2>=i.x1&&t.x2<=i.x2&&t.y2>=i.y1&&t.y2<=i.y2)&&(r=!1)})),r)return e.style("text-valign",i.vAlign),e.style("text-halign",i.hAlign),e.style("text-margin-y",i.yMargin),e.style("text-margin-x",i.xMargin),"break"},d=i[Symbol.iterator]();!(r=(s=d.next()).done);r=!0){if("break"===l(d,s))break}}catch(c){o=!0,a=c}finally{try{r||null==d.return||d.return()}finally{if(o)throw a}}}(e.parent()),e.connectedEdges("edge").forEach((function(e){A(e,e.sourceEndpoint(),e.source().boundingBox({}),"source"),A(e,e.targetEndpoint(),e.target().boundingBox({}),"target")}))}))})),this.nodes().emit("position")}))},R=n(482);function O(e){var t=(0,r.useRef)(null),n=(0,r.useRef)(),o=(0,r.useRef)(),a=e.elements,s=e.layout,l=e.stylesheet;return(0,r.useEffect)((function(){(0,R.tg)(n.current,e)||(m().use(b()),o.current=m()({container:t.current,layout:s,elements:a,style:l}),o.current.nodes("$node > node").forEach((function(e){e.data("layout")&&e.descendants().layout(e.data("layout")).run()})),o.current.fit(),Object.getPrototypeOf(o.current).popper||m().use(C()),Object.getPrototypeOf(o.current).nodeExpansion||m().use(I),Object.getPrototypeOf(o.current).labelPositioning||m().use(S),n.current=e);return e.cy&&e.cy(o.current),function(){var t;(0,R.tg)(n.current,e)||(null===(t=o.current)||void 0===t||t.destroy())}})),(0,i.jsx)("div",{ref:t,style:{width:"100%",height:"100%"}})}var M=n(377),P=n.n(M);function w(e){var t=(0,s.MS)().theme.layout.container.css();return(0,i.jsx)("div",{className:P().container,style:t,children:e.children})}var k=n(9008);function _(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k.default,{children:(0,i.jsx)("title",{children:e.title})}),(0,i.jsx)(w,{children:e.children})]})}var j=JSON.parse('{"readme":"# Overview\\nThis repository contains a domain specific application of the fundamental data model for KPI-based Process Management.\\nThe domain we illustrate here is DevOps.\\n## Data Model\\n","title":"KPI-based Process Management","layout":{"name":"dagre"},"nodes":[{"id":"TechnicalDebtIndex","name":"Technical Debt Index","description":""},{"id":"AvgTechnicalDebtIndex","name":"Average Technical Debt Index","description":""},{"id":"DevelopmentFocusIndex","name":"Development Focus Index","description":"0..1\\nhigh = TBD;\\nlow = TBD\\n"},{"id":"AvgDeveloperSpread","name":"Average of Developer Spread","description":"Distinguish into multiple KPIs for:\\nIssues, Commits, Code Reviews/Pull Requests\\n"},{"id":"StdDevDeveloperSpread","name":"StdDev of Developer Spread","description":"Distinguish into multiple KPIs for:\\nIssues, Commits, Code Reviews/Pull Requests\\n"},{"id":"IndividualDeveloperSpread","name":"Individual Developer Spread","description":"Distinguish into multiple KPIs for:\\nIssues, Commits, Code Reviews/Pull Requests\\n"},{"id":"RepositoriesWithDeveloperActivity","name":"Repositories with Developer Activity","description":""},{"id":"OverallCouplingIndex","name":"Overall Coupling-Index","description":""},{"id":"CouplingIndex","name":"Coupling-Index","description":"0..1\\nhigh = components are highly coupled;\\nlow = components are loosely coupled\\n"},{"id":"AvgCoupling","name":"Average of Coupling-Index","description":""},{"id":"StdDevCoupling","name":"StdDev of Coupling-Index","description":""},{"id":"AvgFilesChangedTogether","name":"Average of Files changed together","description":""},{"id":"StdDevFilesChangedTogether","name":"StdDev of Files changed together","description":""},{"id":"AddFilesChanged","name":"Additional Files Changed","description":""},{"id":"ChangesPerFile","name":"Changes per File","description":""},{"id":"AvgChangesPerFile","name":"Average Changes per File","description":""},{"id":"StdDevChangesPerFile","name":"StdDev of Changes per File","description":""},{"id":"ActiveCode","name":"Active Code","description":"0..1\\nhigh = all components are under development;\\nlow = only few components are under development\\n"},{"id":"OverallMTTRIndex","name":"Overall MTTR-Index","description":""},{"id":"OverallMTTR","name":"Overall Mean Time to Resolution","description":"Combines times of the individual kinds\\n"},{"id":"AvgOverallMTTR","name":"Average of Overall Mean Time to Resolution","description":""},{"id":"StdDevOverallMTTR","name":"StdDev of Overall Mean Time to Resolution","description":""},{"id":"OverallMTTR","name":"Overall Mean Time to Resolution","description":"Combines times of the individual kinds\\n"},{"id":"MTTR","name":"Mean Time to Resolution","description":"Distinguish into multiple KPIs for ticket kinds\\n"},{"id":"TTR","name":"Time to Resolution","description":""},{"id":"Issues","name":"Issues/Tickets","description":""},{"id":"ResolutionRate","name":"ResolutionRate","description":"Distinguish into multiple KPIs for ticket kinds\\n"},{"id":"ResolutionCapability","name":"Resolution Capability","description":""},{"id":"ResolutionEfficiency","name":"Resolution Efficiency","description":"Distinguish into multiple KPIs for ticket kinds\\n"},{"id":"PullRequestSpread","name":"Pull Request Spread","description":"0..1\\nhigh = pull requests are wiedly spread among the release cycle;\\nlow = pull requests are clustered on a few days\\n"},{"id":"WIP","name":"Open Ticket Rate/Work in Progress","description":"Tickets that are accepted for a release cycle, but aren\'t finished\\n"},{"id":"UnassignedTicketRate","name":"Unassigned Ticket Rate","description":""},{"id":"AssignmentTime","name":"Assignment Time","description":""},{"id":"AvgAssignmentTime","name":"Average Assignment Time","description":""},{"id":"AssigneesCount","name":"Assignees Count (until close)","description":""},{"id":"AvgAssigneesCount","name":"Average Assignees Count (until close)","description":""},{"id":"MaturityIndex","name":"MI/HI","description":""}],"edges":[{"source":"MaturityIndex","target":"OverallCouplingIndex"},{"source":"MaturityIndex","target":"OverallMTTRIndex"},{"source":"MaturityIndex","target":"DevelopmentFocusIndex"},{"source":"OverallCouplingIndex","target":"AvgCoupling"},{"source":"OverallCouplingIndex","target":"StdDevCoupling"},{"source":"AvgCoupling","target":"StdDevCoupling"},{"source":"OverallMTTRIndex","target":"AvgOverallMTTR"},{"source":"OverallMTTRIndex","target":"StdDevOverallMTTR"},{"source":"AvgOverallMTTR","target":"StdDevOverallMTTR"},{"source":"AvgCoupling","target":"CouplingIndex"},{"source":"StdDevCoupling","target":"CouplingIndex"},{"source":"AvgOverallMTTR","target":"OverallMTTR"},{"source":"StdDevOverallMTTR","target":"OverallMTTR"},{"source":"CouplingIndex","target":"AvgFilesChangedTogether"},{"source":"CouplingIndex","target":"StdDevFilesChangedTogether"},{"source":"CouplingIndex","target":"TechnicalDebtIndex"},{"source":"OverallMTTR","target":"TechnicalDebtIndex"},{"source":"TechnicalDebtIndex","target":"AvgTechnicalDebtIndex"},{"source":"AvgFilesChangedTogether","target":"AddFilesChanged"},{"source":"AvgFilesChangedTogether","target":"StdDevFilesChangedTogether"},{"source":"StdDevFilesChangedTogether","target":"AddFilesChanged"},{"source":"AddFilesChanged","target":"ChangesPerFile"},{"source":"ChangesPerFile","target":"AvgChangesPerFile"},{"source":"ChangesPerFile","target":"StdDevChangesPerFile"},{"source":"AvgChangesPerFile","target":"StdDevChangesPerFile"},{"source":"AvgChangesPerFile","target":"ActiveCode"},{"source":"StdDevChangesPerFile","target":"ActiveCode"},{"source":"MTTR","target":"OverallMTTR"},{"source":"TTR","target":"MTTR"},{"source":"Issues","target":"TTR"},{"source":"ResolutionRate","target":"Issues"},{"source":"ResolutionCapability","target":"Issues"},{"source":"ResolutionEfficiency","target":"Issues"},{"source":"PullRequestSpread","target":"Issues"},{"source":"WIP","target":"Issues"},{"source":"UnassignedTicketRate","target":"Issues"},{"source":"AssignmentTime","target":"Issues"},{"source":"AvgAssignmentTime","target":"AssignmentTime"},{"source":"AssigneesCount","target":"Issues"},{"source":"AvgAssigneesCount","target":"AssigneesCount"},{"source":"AvgDeveloperSpread","target":"DevelopmentFocusIndex"},{"source":"AvgDeveloperSpread","target":"StdDevDeveloperSpread"},{"source":"StdDevDeveloperSpread","target":"DevelopmentFocusIndex"},{"source":"IndividualDeveloperSpread","target":"AvgDeveloperSpread"},{"source":"IndividualDeveloperSpread","target":"StdDevDeveloperSpread"},{"source":"RepositoriesWithDeveloperActivity","target":"IndividualDeveloperSpread"}]}');function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){F(e,t,n[t])}))}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){N(e,t,n[t])}))}return e}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function K(e){return function(e){if(Array.isArray(e))return L(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var q=function(e,t){var n,i,r,o,a,s,l,d,c,u,g,p,v,h,f,y,m,x,b=[],T={};e.hasOwnProperty("children")?(e=e,T.layout=e.layout,e.children.forEach((function(t){var n;(n=b).push.apply(n,K(q(t,e.id)))}))):(e=e,T.description=null!==(m=e.description)&&void 0!==m?m:"",T.hinge=e.hinge,T.parent=t,T.shape=null!==(x=e.shape)&&void 0!==x?x:"rectangle");return T.hidden=e.hidden,T.colorDark=null===(n=e.theme)||void 0===n||null===(i=n.dark)||void 0===i?void 0:i.color,T.borderDark=null===(r=e.theme)||void 0===r||null===(o=r.dark)||void 0===o?void 0:o.border,T.backgroundDark=null===(a=e.theme)||void 0===a||null===(s=a.dark)||void 0===s?void 0:s.background,T.backgroundDarkHover=new R.Il(0,0,0,0,null===(l=e.theme)||void 0===l||null===(d=l.dark)||void 0===d?void 0:d.background).brighten(.1).rgba(),T.colorLight=null===(c=e.theme)||void 0===c||null===(u=c.light)||void 0===u?void 0:u.color,T.borderLight=null===(g=e.theme)||void 0===g||null===(p=g.light)||void 0===p?void 0:p.border,T.backgroundLight=null===(v=e.theme)||void 0===v||null===(h=v.light)||void 0===h?void 0:h.background,T.backgroundLightHover=new R.Il(0,0,0,0,null===(f=e.theme)||void 0===f||null===(y=f.light)||void 0===y?void 0:y.background).brighten(.1).rgba(),b.push(function(e){var t=e.id,n=e.label,i=e.kind,r=e.additionalAttributes;return{data:E({id:"".concat(t),label:null!==n&&void 0!==n?n:"",kind:"".concat(i),entity:"".concat(t)},r)}}({id:e.id,label:e.name,additionalAttributes:T})),b},W=(0,o.Z)((function(e){var t,n=(0,s.MS)().theme,o=(0,r.useRef)(),a=(0,r.useRef)(),l=e.setTippy,d=[],c=j;c.hasOwnProperty("nodes")&&c.nodes.forEach((function(e){var t;(t=d).push.apply(t,K(q(e)))})),c.hasOwnProperty("edges")&&c.edges.forEach((function(e){var t;d.push(function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,o={data:B({id:"".concat(e,"-").concat(t),source:e,target:t,directed:n},i)};return void 0!==r&&(o.style=r),o}(e.source,e.target,e.directed,{label:e.label,sourceLabel:e.sourceLabel,targetLabel:e.targetLabel,straight:e.straight,arrowShape:e.arrowShape,lineStyle:null!==(t=e.lineStyle)&&void 0!==t?t:"solid"},e.style))}));var u=(0,r.useCallback)((function(e){a.current!=e&&(e.labelPositioning(),c.hasOwnProperty("center")&&e.center(e.getElementById(c.center)),e.on("mouseover","node",(function(e){var t=e.target;t.isParent()||(l(t.id(),{content:(0,i.jsx)(i.Fragment,{}),popperRef:t.popperRef(),dispose:function(){return t.data("hover",!1)},tippyProps:{placement:"right"}}),t.data("hover",!0))})),e.on("mouseout","node",(function(e){var t=e.target;t.isParent()||l(t.id(),{content:void 0,popperRef:void 0})})),e.on("tap",(function(){e.nodes().removeData("tapped"),o.current(void 0)})),e.on("tap","node",(function(t){var n=t.target;n.isParent()||(n.data("tapped")?(n.removeData("tapped"),o.current(void 0)):(e.nodes().removeData("tapped"),n.data("tapped",!0),o.current(n)))})),a.current=e)}),[l,c]),g=(0,r.useCallback)((function(e){o.current=e}),[]),p=(0,r.useCallback)((function(e){a.current.getElementById(e).emit("tap")}),[]);return(0,i.jsxs)(_,{title:c.title,children:[(0,i.jsx)("div",{style:{height:"calc(100vh - 150px)",width:"100%"},children:(0,i.jsx)(O,{cy:u,elements:d,layout:c.layout,stylesheet:null===(t=n.cytoscape)||void 0===t?void 0:t.canvas})}),(0,i.jsx)(f,{readme:c.readme,descriptionControl:g,simulateTap:p})]})})),U=W},7756:function(e){e.exports={btn:"Button_btn__gZGom"}},4224:function(e){e.exports={card:"Card_card__MdBWe",cardControls:"Card_cardControls__DVxR9",cardDismissal:"Card_cardDismissal__wcfQg",cardTitle:"Card_cardTitle__AvJG5",cardSubTitle:"Card_cardSubTitle__guPa3",cardImage:"Card_cardImage__eebwX",cardBody:"Card_cardBody__S_jTh",cardAction:"Card_cardAction__1KmJE"}},377:function(e){e.exports={container:"Container_container__6kKex"}}},function(e){e.O(0,[856,719,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);