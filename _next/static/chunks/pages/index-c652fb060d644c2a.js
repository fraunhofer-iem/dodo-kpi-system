(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(27)}])},27:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var a=n(5893),i=n(7294),o=n(9777),r=n(6243),s=n(4733),l=n(9109),c=n.n(l),d={primary:function(e){return e?"primary:hover":"primary"},neutral:function(e){return e?"neutral:hover":"neutral"},anchor:function(e){return e?"anchor:hover":"anchor"}};function u(e){var t,n,o=(0,s.MS)().theme,r=(0,i.useState)(!1),l=r[0],u=r[1],h=d[e.context](l),p=null!==(t=e.action)&&void 0!==t?t:function(){},m=null!==(n=e.cxtAction)&&void 0!==n?n:function(){},f=o.button[h].css();return e.width&&(f.width=e.width),e.display&&(f.display=e.display),e.align&&(f.textAlign=e.align),e.padding&&(f.padding=e.padding),e.href?(0,a.jsx)("a",{className:c().btn,style:f,onMouseOver:function(){return u(!0)},onMouseLeave:function(){return u(!1)},onContextMenu:function(e){m(),e.preventDefault()},href:e.href,children:e.children}):(0,a.jsx)("button",{className:c().btn,style:f,onMouseOver:function(){return u(!0)},onMouseLeave:function(){return u(!1)},onClick:p,onContextMenu:function(e){m(),e.preventDefault()},type:e.type,disabled:e.disabled,children:e.children})}var h=n(5676),p=n.n(h);function m(e){var t,n=(0,s.MS)().theme.card.card.css();return n.width=null!==(t=e.width)&&void 0!==t?t:"auto",e.height&&(n.height=e.height),e.margin&&(n.margin=e.margin),(0,a.jsx)("div",{className:p().card,style:n,children:e.children})}function f(e){var t=(0,s.MS)().theme;return(0,a.jsxs)("div",{className:p().cardControls,style:t.card.dismissal.css(),children:[e.action&&(0,a.jsx)(u,{type:"button",context:"neutral",action:function(){return e.action()},children:"\u2501"}),e.dismiss&&(0,a.jsx)("div",{style:{float:"right"},children:(0,a.jsx)(u,{type:"button",context:"neutral",action:function(){return e.dismiss()},children:"\xd7"})})]})}function g(e){var t=(0,i.useState)(),n=t[0],o=t[1],s=(0,i.useState)(!1),l=s[0],c=s[1];return e.descriptionControl(o),(0,a.jsx)("div",{style:{position:"absolute",bottom:0,left:0,width:"100%"},children:(0,a.jsxs)(m,{width:"100%",height:l?"75vh":"150px",margin:"0",children:[(0,a.jsx)(f,{action:function(){return c(!l)}}),(0,a.jsx)(r.Z,{options:{createElement:function(t,n){for(var o=arguments.length,r=new Array(o>2?o-2:0),s=2;s<o;s++)r[s-2]=arguments[s];return"br"===t?(0,a.jsx)("br",{},n.key):"a"===t?n.href.endsWith(".md")?(0,a.jsx)(u,{context:"anchor",display:"inline",padding:"0",action:function(){return e.simulateTap(n.href.split(".")[0])},children:r},n.key):(0,a.jsx)(u,{context:"anchor",display:"inline",padding:"0",href:n.href,children:r},n.key):i.createElement(t,n,r)}},children:n?n.data("description"):e.readme})]})})}var b=n(9058),v=n.n(b),y=n(9142),w=n.n(y),_=n(578),C=n.n(_),T=function(e){e&&(e("core","nodeExpansion",(function(){this.nodes().forEach((function(e){e.data("expanded",!1),e.incomers().length&&e.style("visibility","hidden"),e.outgoers().length&&e.style("shape","diamond")}))})),e("collection","expanded",(function(){if(this.length>0){var e=this[0];return!!e.isNode()&&e.data("expanded")}})),e("collection","expand",(function(){if(this.length>0){var e=this[0];e.isNode()&&e.outgoers().length&&(e.data("expanded",!0),e.style("shape","ellipse"),e.outgoers("edge").forEach((function(e){e.style("visibility","visible"),e.target().style("visibility","visible")})))}})),e("collection","collapse",(function(){if(this.length>0){var e=this[0];e.isNode()&&(e.data("expanded",!1),e.outgoers("edge").forEach((function(t){e.style("shape","diamond");var n=t.target();n.style("visibility","hidden"),n.incomers("edge").forEach((function(t){var a=t.source();e.same(a)||a.data("expanded")&&n.style("visibility","visible")})),t.style("visibility","hidden"),n.collapse()})))}})))};"undefined"!==typeof cytoscape&&T(cytoscape);var k=T,x=n(9636);function D(e){var t=(0,i.useRef)(null),n=(0,i.useRef)(),o=(0,i.useRef)(),r=e.elements,s=e.layout,l=e.stylesheet;return(0,i.useEffect)((function(){(0,x.tg)(n.current,e)||(v().use(w()),o.current=v()({container:t.current,layout:s,elements:r,style:l}),o.current.nodes("$node > node").forEach((function(e){e.data("layout")&&e.descendants().layout(e.data("layout")).run()})),o.current.fit(),Object.getPrototypeOf(o.current).popper||v().use(C()),Object.getPrototypeOf(o.current).nodeExpansion||v().use(k),n.current=e);return e.cy&&e.cy(o.current),function(){var t;(0,x.tg)(n.current,e)||(null===(t=o.current)||void 0===t||t.destroy())}})),(0,a.jsx)("div",{ref:t,style:{width:"100%",height:"100%"}})}var R=n(2122),F=n.n(R);function j(e){var t=(0,s.MS)().theme.layout.container.css();return(0,a.jsx)("div",{className:F().container,style:t,children:e.children})}var I=n(9008);function M(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(I.default,{children:(0,a.jsx)("title",{children:e.title})}),(0,a.jsx)(j,{children:e.children})]})}var O=JSON.parse('{"readme":"# Overview\\nThis repository contains a domain specific application of the fundamental data model for KPI-based Process Management.\\nThe domain we illustrate here is DevOps.\\n## Data Model\\n","title":"KPI-based Process Management","layout":{"name":"dagre"},"nodes":[{"id":"TechnicalDebt","name":"Technical Debt","description":"# Technical Debt\\n\\n## Description\\nTechnical debt describes the effect, which occurs when we as developers take too many shortcuts in a row. Code is added now, which needs fixing or editing later and causes more work overall. This often occurs if the feature deadline and shipping something is more important than doing the thing right.\\\\\\nIts immediate effect on a project is that it becomes more complex and entangled and that adding new features takes increased time. Thus, the goal is to reduce technical debt, or even better, don\'t let it buildup.\\\\\\nAs outlined in the paper [\\"Technical Debt: From Metaphor to Theory and Practice\\"](https://ieeexplore.ieee.org/abstract/document/6336722) there is a lot of hidden technical debt. This is especially tricky to estimate and consider, since it has no direct effect. Examples of this are software architecture or technology choices (which might have been correct at the time they were made, but they were never revisited). These hidden debts are exceedingly difficult to measure with automated tools, so we try to approximate them by observing the behavior of the product development. Does the time to complete a feature steadily increase? If you add a new feature how many files did you have to change? We propose that you can approximate these hidden parts of technical debt if we observe the development behavior and interpret it correctly. \\n\\n \\n\\n## Calculation\\n\\n\\n## Related Data\\n* [Coupling of Components](CouplingOfComponents.md) we assume this value to increase over time.\\n* [Time Idea to Market](TimeIdeaToMarket.md) the time idea to market is expected to increase over time.\\n* [Release Cycle](ReleaseCycle.md) is expected to increase.\\n* [Development Focus](DevelopmentFocus.md) we measure how many feature vs bugs vs security tickets are closed with every release. The number of feature tickets is expected to decrease.\\n* [Complexity of Pull Requests](PullRequestComplexity.md) "},{"id":"DevelopmentFocus","name":"Development Focus","description":"# Development Focus\\n\\n## Description\\n\\nDevelopment Focus describes the combination of the Developer Spread and the type of tasks the developers work on.\\\\\\nE.g. the Developer Focus tells us that a Developer spends 60% time on this project. Of these 60% they spend 30% on bug fixes, 30% on code reviews, and 30% on new features.\\n\\n## Calculation Developer Spread\\n\\n[Explanation](DevSpreadCalculation.md)\\n\\n## Calculation Issue Label Priorities\\n\\n[Explanation](LabelPrioritiesCalculation.md)\\n\\n## Data\\n\\n- [Issues](Issue.md) the tags, the assignee and the creation and closing date\\n- [Developer](Developer.md) the name/id to cross reference with tickets\\n- [Projects](Project.md)\\n- [Organization](Organization.md)\\n- [Developer Spread](DeveloperSpread.md)\\n- [Commits](Commit.md) the login and the timestamp\\n- [Labels](Label.md) the tag of a lable\\n\\n## Need for additional Input / Interpretation\\n* For further interpretation this data can be compared with the planned time distribution. This information can then be used to identify unplanned work.\\n"},{"id":"DeveloperSpread","name":"Developer Spread","description":"# Developer Spread\\n\\n## Description\\n\\nThe developer spread is used to estimate how focused the developers are on a single project. If developers contribute to many different projects on the same day/week /sprint they must switch contexts regularly, which is not good. Many context switches might indicate unplanned work or improper resource planning.\\nTo calculate the developer spread, we analyze the contributions of the developers over a fixed period and count the number of projects they contribute to (with commits, issues, code reviews, ...).\\n\\n## Calculation\\n\\n- We look at every organization\'s repository and store all commits of all project members, who had contributed to that project.\\n  - The `timestamp` and the `developer login` identify a commit in a repository.\\n- The **average spread** is calculated for every single project member of the organization in the first place:\\n\\n  - If `Dev1` committed in `Repo A`, `Repo B` and `Repo C` on `02.03.21`, that would lead to a spread of **3** for that single date.\\n  - We calculate **average spread values** for the time intervals `days`, `weeks`, `sprints` (two week intervals) and `months`.\\n  - Assume the following example activity tables for `Dev1`, where letters _A, B, C_ and _D_ denote the contributed repositories and the last row denotes the `day Spread`:\\n\\n    - Week 1:\\n      | Mo | Tu | We | Th | Fr |\\n      |----:|----:|----:|----:|----:|\\n      | A | A | B | B | A |\\n      | - | C | - | - | B |\\n      | 1 | 2 | 1 | 1 | 2 |\\n\\n      Week 2:\\n      | Mo | Tu | We | Th | Fr |\\n      |----:|----:|----:|----:|----:|\\n      | A | B | B | D | A |\\n      | C | D | - | - | B |\\n      | 2 | 2 | 1 | 1 | 2 |\\n\\n    - **week spread** for _week 1_ is **3**, as there were contributions to different repositories _A, B, C_.\\n    - **week spread** for _week 2_ is **4**, as there were contributions to different repositories _A, B, C, D_.\\n    - **avg week spread** then is `(3+4)/2 = 3.5`\\n\\n  - The same computation holds for the over time intervals.\\n\\n- Then, **average organization spread** for every time interval is calculated by _summing up all project member\'s interval spread values in a category_ and set that in relation to _a weight propotional to the contribution amount for a project member_.\\n- Additionally, a repository related calculation shows the **average project spread**:\\n  - Therefore, the precomputed category spread values for all project members, who contributed to the specified repository, are being collected.\\n  - If there is an intersection of commit time intervals for different developers, they are added together.\\n  - Then, the average spread for every time slot value is calculated in relation to the amount of developers.\\n  - Finally, the average spread for every time interval in relation to the amount of time interval values is calculated.\\n- [Implementation](../../src/database/statistics/developerFocus.service.ts)\\n## Data\\n\\n- [Developer](Developer.md) the name/id to cross reference with tickets\\n- [Projects](Project.md)\\n- [Organization](Organization.md)\\n- [Issues](Issue.md) the tags and the assignee\\n\\n## Need for additional Input / Interpretation\\n* For further interpretation this data can be compared with the planned time distribution. This information can then be used to identify unplanned work."},{"id":"CouplingOfComponents","name":"Coupling of Components","description":"# Coupling of Components\\n\\n## Description\\nCoupling of components measures how tightly coupled the code base is. The higher the value the harder it is to make changes to the codebase.\\\\\\nThis coupling can be calculated with static analyses. The disadvantage of this approach is that every analysis must be tailored to each project or at least to every programming language / framework. So, we decided to approximate this by analyzing pull requests from feature branches towards dev or main.\\\\\\nThe idea is to count which files repeatedly appear together in a pull request. We then assume that a change in File A also needs a change in File B, thus they are coupled.\\n\\n## Calculation\\nIterate all pull requests, store file combinations inside a hash map. If the same combination occurs again update the counter.\\n\\n\\n## Data\\n* [Pull Requests](PullRequests.md) - utilizes fileName/fileId to identify files"},{"id":"BugHandling","name":"Bug Handling","description":""},{"id":"FaultCorrectionCapability","name":"Fault Correction Capability","description":"# Fault Correction Capability\\n\\n## Description\\nThe Fault Correction Capability describes the development team\'s capability to respond to bug reports. In more detail, it assesses the rate of faults corrected within the time frame the organization aims to adhere to for fault correction.  \\nFor this qualitative indicator we take all issues labeled `bug` (or some other equivalent label) into consideration that have been resolved since the previous release.\\n\\n## Calculation\\n```\\n(release, issues[label = \\"bug\\", state = \\"closed\\"], T_bug) => {\\n    bugs = [ bug for bug in issues \\n             if bug.closed_at <= release.created_at and \\n                bug.closed_at >= release.previous().created_at ]\\n\\n    bugs_corrected_in_time = [ bug for bug in bugs\\n                               if bug.closed_at - bug.created_at <= T_bug ]\\n\\n    return |bugs_corrected_in_time| / | bugs | \\n}\\n```\\n\\n## Related Data\\n- [Issues](Issue.md): `label`, `state`, `created_at`, `closed_at`\\n- [Release](Release.md): `created_at`, `previous` which is currently not part of the schema\\n\\n### Notes\\nI want to put it up to debate if the capability should be calculated using the issue creation and close time. That way, left-over faults will always reduce the capability of future sprints.  \\nA different approach would be to take the respective pull requests and instead take the branch creation time as starting point for the capability. That way, it\'s only the implementation time that is assessed with this KPI."},{"id":"FaultCorrectionEfficiency","name":"Fault Correction Efficiency","description":"# Fault Correction Efficiency\\n\\n## Description\\nThe Fault Correction Efficiency describes the development team\'s capability to respond to bug reports. In more detail, it assesses if a single fault was corrected within the time frame the organization aims to adhere to for fault corrections.  \\nWe calculate this qualitative indicator for resolved issues labeled `bug` (or some other equivalent label).  \\nA value greater than 1 indicates that the fault was not corrected within the desired time. A value less than 1 indicates that the fault was corrected within the desired time.\\n\\n## Calculation\\n```\\n(issue[label = \\"bug\\", state=\\"closed\\"], T_bugfix) => {\\n    return (issue.closed_at - issue.created_at) / T_bugfix\\n}\\n```\\n\\n## Related data\\n- [Issues](Issue.md): `label`, `state`, `created_at`, `closed_at`"},{"id":"FaultCorrectionRate","name":"Fault Correction Rate","description":"# Fault Correction Rate\\n\\n## Description\\n\\nThe Fault Correction Rate describes the development team\'s capability to respond to bug reports.  \\nIt is a quantitative indicator for which we consider all issues labeled `bug` (or some other equivalent tag) that existed at the time of a release.  \\nThe Fault Correction Rate is the amount of closed `bug` issues divided by the total amount of `bug` issues.\\n\\n## Calculation\\n```\\n(release, issues) => {\\n    closed_bugs = issues[ label = bug, state = closed, closed_at <= release.created_at, closed_at >= release.previous().created_at ] \\n    open_bugs = issues[ label = bug, state = open, created_at <= release.created_at ]\\n\\n    return |closed_bugs| / |closed_bugs| + |open_bugs|\\n}\\n```\\n\\n## Related Data\\n\\n- [Issues](Issue.md): `label`, `state`, `created_at`, `closed_at`\\n- [Release](Release.md): `created_at`, `previous` which is currently not part of the schema"},{"id":"MeanFaultCorrectionCapability","name":"Mean Fault Correction Capability","description":""},{"id":"MeanFaultCorrectionEfficiency","name":"Mean Fault Correction Efficiency","description":"# Mean Fault Correction Efficiency\\n\\n## Description\\n\\nThe Mean Fault Correction Efficiency describes the development team\'s capability to respond to bug reports. It assesses if faults were generally corrected within the time frame the organization aims to adhere to for fault corrections.\\nWe calculate this qualitative indicator as the average [Fault Correction Efficiency](FaultCorrectionEfficiency.md) of all issues labeled `bug` (or some other equivalent label) that have been resolved since the previous release.  \\nA value greater than 1 indicates that faults were not corrected within the desired time. A value less than 1 indicates that faults were corrected within the desired time.\\n\\n## Calculation\\n\\n```\\n(release, issues[label = \\"bug\\", state=\\"closed\\"]) => {\\n    bugs = [ bug for bug in issues \\n             if bug.closed_at <= release.created_at and \\n                bug.closed_at >= release.previous().created_at ]\\n                \\n    fault_correction_efficiencies = [faultCorrectionEfficiency(bug) for bug in bugs]\\n    \\n    return avg(fault_correction_efficiencies)\\n}\\n```\\n\\n## Related data\\n- [Issues](Issue.md): `label`, `state`, `closed_at`\\n- [Release](Release.md): `created_at`, `previous` which is currently not part of the schema\\n- [Fault Correction Efficiency](FaultCorrectionEfficiency.md)"},{"id":"MeanFaultCorrectionRate","name":"Mean Fault Correction Rate","description":""},{"id":"MeanTimeToResolution","name":"Mean Time to Resolution","description":"# Mean Time to Resolution\\n\\n## Description\\nThe Mean Time to Resolution describes the development team\'s capability to respond to tickets. It assesses the overall time it took to resolve tickets.  \\nWe calculate this information point for resolved issues with a given label.\\n\\n## Calculation\\n```\\n(issues[label = \\"labelName\\", state=\\"closed\\"], T_bugfix) => {\\n    return avg([timeToResolution(labelName) for bug in issues])\\n}\\n```\\n\\n## Calculation Issue Label Priorities\\n\\n- We look at every organization\'s repository and store all issues for that project.\\n- Then, we filter out all issues, which are **labeled** and which are **assigned** to a project member.\\n  - Issues have default labels such as `bug`, `enhancement` or `documentation`.\\n  - Also, organization\'s own labels are taken into account.\\n- For every project member, we want to monitor, how much time does a completion of a certain kind of ticket (i.e. tickets with the same label) takes **in average**, expressed in time intervals `days`, `weeks`, `sprints` and `months`:\\n\\n  - The calculation period is ranged from the earliest creation date until the current date of computation, as not every issue is closed yet.\\n  - The issues are then divided among the time intervals `days`, `weeks`, `sprints` and `months` relating to their duration time.\\n  - Assume `Dev1` has the following ticket timeline, where the first row is the _creation date_ and the last row is the _closing date_:\\n\\n    - | bug      | feature  | bug      |\\n      | -------- | -------- | -------- |\\n      | ticket 1 | ticket 2 | ticket 3 |\\n      | 01.10.21 | 01.10.21 | 03.10.21 |\\n      | 14.10.21 | 21.10.21 | -        |\\n    - Let\'s assume, the compuation date is the **30.10.21**, then the period is from **01.10.21 - 30.10.21**.\\n    - This leads to intervals of **30 days**, **4 weeks**, **2 sprints** and **1 month**.\\n\\n    - To calculate e.g. the **bug avarage** for `Dev1`, we add 14 days for _ticket 1_ and 27 days for _ticket 3_ and got `(14+27)/2 = 20.5` days per bug fix or we add 2 weeks for _(ticket 1 & ticket 3)_ and again 2 weeks for _(ticket 1 & ticket 3)_ and 2 times 1 week for _ticket 3_ and get `(2+2+1+1)/2 = 3` weeks per bug fix.\\n\\n  - The same calculation holds for the other labels and time intervals.\\n\\n- Then, the **average completion time** for each ticket label for the **whole organization** or **one project** is being calculated; all _average comletition times_ per project member per label kind are being summed up and set in relation to a _weight propotional to ticket amount of the project member_.\\n\\n\\n## Related Data\\n- [Issues](Issue.md): `label`, `state`\\n- [Time To Resolution](TimeToResolution.md)\\n"},{"id":"OverallMeanTimeToResolution","name":"Overall Mean Time to Resolution","description":"# Overall Mean Time To Resolution\\r\\n\\r\\n## Description\\r\\n\\r\\nThe overall mean time to resolution calculates the [mean time to resolution](MeanTimeToResolution.md) for every kind of issue label, a repository contains.\\r\\n\\r\\n## Related Data\\r\\n\\r\\n- [Issues](Issue.md): `label`, `created_at`, `closed_at`\\r\\n- [Time To Resolution](TimeToResolution.md)\\r\\n- [Mean Time To Resolution](MeanTimeToResolution.md)\\r\\n"},{"id":"MaturityIndex","name":"Maturity Index","description":""},{"id":"AvgChangesPerFile","name":"Average Changes per File","description":""},{"id":"ChangesPerFile","name":"Changes per File","description":""},{"id":"CodeStructure","name":"Code Structure","description":""},{"id":"entities","children":[{"id":"Developer","name":"Developer","description":"# Developer\\n\\n## Description\\nA central entity, because our goal is to assess how people actually work inside the given development process.\\n"},{"id":"Organisation","name":"Organisation","description":""},{"id":"Issue","name":"Issue","description":"# Issue\\n\\n## Description\\nIssues are our data source to gather information about the planned work inside a project. We can use the issue tags to distinguish different tasks (bug, feature, security).\\n\\nCorresponding [Database Schema](../../src/database/schemas/issueWithEvents.schema.ts)"},{"id":"Label","name":"Label","description":"# Lable\\n\\n## Description\\n\\nLabels provide information on the kind of a ticket or an issue. E.g., an issue with the lable `bug` indentifies, that there is a problem in some code and the assignee will probably spent time on a bug fix.\\n\\nCorresponding [Database Schema](../../src/database/schemas/labels.schema.ts)\\n"},{"id":"PullRequest","name":"Pull Request","description":""},{"id":"Release","name":"Release","description":"# Release\\n\\n## Description\\n\\nWe want to know which tickets and pull requests are included in every release. Need to agument the current data model.\\n\\nCorresponding [Database Schema](../../src/database/schemas/releases.schema.ts)\\n"},{"id":"Repository","name":"Repository","description":""},{"id":"File","name":"File","description":""}]}],"edges":[{"source":"MaturityIndex","target":"BugHandling"},{"source":"MaturityIndex","target":"CodeStructure"},{"source":"MaturityIndex","target":"TechnicalDebt"},{"source":"TechnicalDebt","target":"DevelopmentFocus"},{"source":"CodeStructure","target":"CouplingOfComponents"},{"source":"CouplingOfComponents","target":"ChangesPerFile"},{"source":"CodeStructure","target":"AvgChangesPerFile"},{"source":"CodeStructure","target":"ChangesPerFile"},{"source":"DevelopmentFocus","target":"DeveloperSpread"},{"source":"TechnicalDebt","target":"CouplingOfComponents"},{"source":"TechnicalDebt","target":"OverallMeanTimeToResolution"},{"source":"OverallMeanTimeToResolution","target":"MeanTimeToResolution"},{"source":"MeanFaultCorrectionCapability","target":"FaultCorrectionCapability"},{"source":"MeanFaultCorrectionEfficiency","target":"FaultCorrectionEfficiency"},{"source":"MeanFaultCorrectionRate","target":"FaultCorrectionRate"},{"source":"BugHandling","target":"MeanFaultCorrectionCapability"},{"source":"BugHandling","target":"MeanFaultCorrectionEfficiency"},{"source":"BugHandling","target":"MeanFaultCorrectionRate"},{"source":"Organisation","target":"Developer"},{"source":"Organisation","target":"Repository"},{"source":"Repository","target":"Developer"},{"source":"Repository","target":"Issue"},{"source":"Repository","target":"Release"},{"source":"Repository","target":"PullRequest"},{"source":"Repository","target":"File"},{"source":"Issue","target":"Label"},{"source":"PullRequest","target":"Developer"},{"source":"PullRequest","target":"Issue"},{"source":"PullRequest","target":"File"},{"source":"Release","target":"PullRequest"}]}');function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){P(e,t,n[t])}))}return e}var S=function(e){var t=e.id,n=e.label,a=e.kind,i=e.additionalAttributes;return{data:E({id:"".concat(t),label:"".concat(n),kind:"".concat(a),entity:"".concat(t)},i)}};function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){A(e,t,n[t])}))}return e}var B=(0,o.Z)((function(e){var t,n=(0,s.MS)().theme,o=(0,i.useRef)(),r=(0,i.useRef)(),l=e.setTippy,c=[];O.hasOwnProperty("nodes")&&O.nodes.forEach((function(e){var t,n;c.push(S({id:e.id,label:null!==(n=e.name)&&void 0!==n?n:"",additionalAttributes:{description:e.description,layout:e.layout,hidden:e.hidden}})),null===(t=e.children)||void 0===t||t.forEach((function(t){c.push(S({id:t.id,label:t.name,additionalAttributes:{description:t.description,parent:e.id}}))}))})),O.hasOwnProperty("edges")&&O.edges.forEach((function(e){c.push(function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,o={data:q({id:"".concat(e,"-").concat(t),source:e,target:t,directed:n},a)};return void 0!==i&&(o.style=i),o}(e.source,e.target,e.directed,{label:e.label,sourceLabel:e.sourceLabel,targetLabel:e.targetLabel,straight:e.straight,arrowShape:e.arrowShape},e.style))}));var d=(0,i.useCallback)((function(e){r.current!=e&&(O.hasOwnProperty("center")&&e.center(e.getElementById(O.center)),e.on("mouseover","node",(function(e){var t=e.target;t.isParent()||(l(t.id(),{content:(0,a.jsx)(a.Fragment,{}),popperRef:t.popperRef(),dispose:function(){return t.data("hover",!1)},tippyProps:{placement:"right"}}),t.data("hover",!0))})),e.on("mouseout","node",(function(e){var t=e.target;t.isParent()||l(t.id(),{content:void 0,popperRef:void 0})})),e.on("tap",(function(){e.nodes().removeData("tapped"),o.current(void 0)})),e.on("tap","node",(function(t){var n=t.target;n.isParent()||(n.data("tapped")?(n.removeData("tapped"),o.current(void 0)):(e.nodes().removeData("tapped"),n.data("tapped",!0),o.current(n)))})),r.current=e)}),[l]),u=(0,i.useCallback)((function(e){o.current=e}),[]),h=(0,i.useCallback)((function(e){r.current.getElementById(e).emit("tap")}),[]);return(0,a.jsxs)(M,{title:O.title,children:[(0,a.jsx)("div",{style:{height:"calc(100vh - 150px)",width:"100%"},children:(0,a.jsx)(D,{cy:d,elements:c,layout:O.layout,stylesheet:null===(t=n.cytoscape)||void 0===t?void 0:t.canvas})}),(0,a.jsx)(g,{readme:O.readme,descriptionControl:u,simulateTap:h})]})})),N=B},9109:function(e){e.exports={btn:"Button_btn__gZGom"}},5676:function(e){e.exports={card:"Card_card__MdBWe",cardControls:"Card_cardControls__DVxR9",cardDismissal:"Card_cardDismissal__wcfQg",cardTitle:"Card_cardTitle__AvJG5",cardSubTitle:"Card_cardSubTitle__guPa3",cardImage:"Card_cardImage__eebwX",cardBody:"Card_cardBody__S_jTh",cardAction:"Card_cardAction__1KmJE"}},2122:function(e){e.exports={container:"Container_container__6kKex"}}},function(e){e.O(0,[856,780,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);