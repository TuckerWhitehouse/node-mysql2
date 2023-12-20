"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8806],{7372:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=s(5893),t=s(1151),o=s(4442);const r={slug:"/documentation",title:"Introduction"},l="Documentation",c={id:"documentation/index",title:"Introduction",description:"MySQL2 aims to be a drop in replacement for node-mysql.",source:"@site/docs/documentation/00-index.mdx",sourceDirName:"documentation",slug:"/documentation",permalink:"/node-mysql2/docs/documentation",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/documentation/00-index.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"/documentation",title:"Introduction"},sidebar:"docs",previous:{title:"Stability Badges",permalink:"/node-mysql2/docs/stability-badges"},next:{title:"Authentication Switch Request",permalink:"/node-mysql2/docs/documentation/authentication-switch"}},d={},a=[{value:"Examples",id:"examples",level:2},{value:"Known incompatibilities with <code>node-mysql</code>",id:"known-incompatibilities-with-node-mysql",level:2},{value:"Other Resources",id:"other-resources",level:2},{value:"Benchmarks",id:"benchmarks",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.V,{title:"Documentation"}),"\n",(0,i.jsx)(n.h1,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsxs)(n.p,{children:["MySQL2 aims to be a drop in replacement for ",(0,i.jsx)(n.a,{href:"https://github.com/mysqljs/mysql",children:"node-mysql"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["If you see any API incompatibilities with ",(0,i.jsx)(n.code,{children:"node-mysql"}),", please report via github issue."]})})}),"\n",(0,i.jsxs)(n.p,{children:["Not only ",(0,i.jsx)(n.code,{children:"Node-MySQL2"})," offers better performance over ",(0,i.jsx)(n.code,{children:"node-mysql"}),", we also support these additional features."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/documentation/prepared-statements",children:"Prepared Statements"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/documentation/promise-wrapper",children:"Promise Wrapper"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/documentation/authentication-switch",children:"Authentication Switch"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/documentation/extras",children:"More Features"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/documentation/mysql-server",children:"MySQL Server"})}),"\n",(0,i.jsx)(n.li,{children:"Pooling"}),"\n",(0,i.jsx)(n.li,{children:"SSL"}),"\n",(0,i.jsx)(n.li,{children:"MySQL Compression"}),"\n",(0,i.jsx)(n.li,{children:"Binary Log Protocol Client"}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["Please check these ",(0,i.jsx)(n.a,{href:"/docs/examples",children:"examples"})," for ",(0,i.jsx)(n.strong,{children:"MySQL2"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h2,{id:"known-incompatibilities-with-node-mysql",children:["Known incompatibilities with ",(0,i.jsx)(n.code,{children:"node-mysql"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"zeroFill"})," flag is ignored in type conversion.\nYou need to check corresponding field's zeroFill flag and convert to string manually if this is of importance to you."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"DECIMAL"})," and ",(0,i.jsx)(n.code,{children:"NEWDECIMAL"})," types always returned as ",(0,i.jsx)(n.code,{children:"string"})," unless you pass this config option:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"{\n  decimalNumbers: true,\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This option could lose precision on the number as Javascript Number is a Float!"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"other-resources",children:"Other Resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://dev.mysql.com/doc/internals/en/client-server-protocol.html",children:"Wire protocol documentation"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/mysqljs/mysql",children:"node-mysql"})," - Most popular node.js mysql client library"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/mscdex/node-mariasql/",children:"node-mariasql"})," - Bindings to libmariasql. One of the fastest clients"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/Sannis/node-mysql-libmysqlclient",children:"node-libmysqlclient"})," - Bindings to libmysqlclient"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/siddontang/go-mysql",children:"go-mysql"})," - MySQL Go client (prepared statements, binlog protocol, server)"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"benchmarks",children:"Benchmarks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://gist.github.com/sidorares/ffe9ee9c423f763e3b6b",children:"https://gist.github.com/sidorares/ffe9ee9c423f763e3b6b"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"npm run benchmarks"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/mscdex/node-mysql-benchmarks",children:"node-mysql-benchmarks"})}),"\n",(0,i.jsxs)(n.li,{children:["try to run example ",(0,i.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/tree/master/benchmarks",children:"benchmarks"})," on your system"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4442:(e,n,s)=>{s.d(n,{V:()=>o});var i=s(5742),t=s(5893);const o=e=>{let{title:n}=e;return(0,t.jsx)(i.Z,{children:(0,t.jsx)("title",{children:n})})}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>r});var i=s(7294);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);