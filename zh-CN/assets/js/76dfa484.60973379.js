"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3433],{7345:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var r=s(5893),t=s(1151),o=s(4866),a=s(5162),l=s(4442);const c={slug:"/examples",title:"Introduction"},i="Examples",u={id:"examples/index",title:"Introduction",description:"Simple SELECT",source:"@site/docs/examples/00-index.mdx",sourceDirName:"examples",slug:"/examples",permalink:"/node-mysql2/zh-CN/docs/examples",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/00-index.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{slug:"/examples",title:"Introduction"},sidebar:"examples",next:{title:"Binlog Watcher",permalink:"/node-mysql2/zh-CN/docs/examples/binlog-watcher"}},d={},m=[{value:"Simple <code>SELECT</code>",id:"simple-select",level:2},{value:"Prepared Statement and Parameters",id:"prepared-statement-and-parameters",level:2},{value:"Connecting over encrypted connection",id:"connecting-over-encrypted-connection",level:2},{value:"Simple MySQL proxy server",id:"simple-mysql-proxy-server",level:2},{value:"Examples using MySQL server API",id:"examples-using-mysql-server-api",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.V,{title:"Examples"}),"\n",(0,r.jsx)(n.h1,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.h2,{id:"simple-select",children:["Simple ",(0,r.jsx)(n.code,{children:"SELECT"})]}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{value:"Promise",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\nconst connection = await mysql.createConnection({\n  user: 'test',\n  database: 'test',\n});\n\nconst [rows] = await connection.query('SELECT 1+1 AS `test1`');\n// ...\n"})})}),(0,r.jsx)(a.Z,{value:"Callback",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst connection = mysql.createConnection({\n  user: 'test',\n  database: 'test',\n});\n\nconnection.query('SELECT 1+1 AS `test1`', (err, rows) => {\n  // ...\n});\n"})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"prepared-statement-and-parameters",children:"Prepared Statement and Parameters"}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{value:"Promise",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\nconst connection = await mysql.createConnection({\n  user: 'test',\n  database: 'test',\n});\n\nconst [rows] = await connection.execute('SELECT 1+? AS `test1`', [10]);\n// ...\n"})})}),(0,r.jsx)(a.Z,{value:"Callback",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst connection = mysql.createConnection({\n  user: 'test',\n  database: 'test',\n});\n\nconnection.execute('SELECT 1+? as test1', [10], (err, rows) => {\n  // ...\n});\n"})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"connecting-over-encrypted-connection",children:"Connecting over encrypted connection"}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{value:"Promise",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import fs from 'fs';\nimport mysql from 'mysql2/promise';\n\nconst connection = await mysql.createConnection({\n  user: 'test',\n  database: 'test',\n  ssl: {\n    key: fs.readFileSync('./certs/client-key.pem'),\n    cert: fs.readFileSync('./certs/client-cert.pem'),\n  },\n});\n\nconsole.log(await connection.query('SELECT 1+1 AS `test1`'));\n"})})}),(0,r.jsx)(a.Z,{value:"Callback",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const fs = require('fs');\nconst mysql = require('mysql2');\n\nconst connection = mysql.createConnection({\n  user: 'test',\n  database: 'test',\n  ssl: {\n    key: fs.readFileSync('./certs/client-key.pem'),\n    cert: fs.readFileSync('./certs/client-cert.pem'),\n  },\n});\n\nconnection.query('SELECT 1+1 AS `test1`', console.log);\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["You can use 'Amazon RDS' string as value to ssl property to connect to Amazon RDS mysql over ssl (in that case ",(0,r.jsx)(n.a,{href:"https://s3.amazonaws.com/rds-downloads/mysql-ssl-ca-cert.pem",children:"https://s3.amazonaws.com/rds-downloads/mysql-ssl-ca-cert.pem"})," CA cert is used)"]}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(a.Z,{value:"Promise",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  const connection = await mysql.createConnection({\n    user: 'foo',\n    password: 'bar',\n    host: 'db.id.ap-southeast-2.rds.amazonaws.com',\n    ssl: 'Amazon RDS',\n  });\n\n  const [res] = await connection.query(\"SHOW `status` LIKE 'Ssl_cipher'\");\n\n  console.log(res);\n  connection.end();\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,r.jsx)(a.Z,{value:"Callback",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst connection = mysql.createConnection({\n  user: 'foo',\n  password: 'bar',\n  host: 'db.id.ap-southeast-2.rds.amazonaws.com',\n  ssl: 'Amazon RDS',\n});\n\nconnection.query(\"SHOW `status` LIKE 'Ssl_cipher'\", (err, res) => {\n  console.log(err, res);\n  connection.end();\n});\n"})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"simple-mysql-proxy-server",children:"Simple MySQL proxy server"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\nconst server = mysql.createServer();\nserver.listen(3307);\nserver.on('connection', (conn) => {\n  console.log('connection');\n\n  conn.serverHandshake({\n    protocolVersion: 10,\n    serverVersion: 'node.js rocks',\n    connectionId: 1234,\n    statusFlags: 2,\n    characterSet: 8,\n    capabilityFlags: 0xffffff,\n  });\n\n  conn.on('field_list', (table, fields) => {\n    console.log('field list:', table, fields);\n    conn.writeEof();\n  });\n\n  const remote = mysql.createConnection({\n    user: 'root',\n    database: 'dbname',\n    host: 'server.example.com',\n    password: 'secret',\n  });\n\n  conn.on('query', (sql) => {\n    console.log(`proxying query: ${sql}`);\n    remote.query(sql, function (err) {\n      // overloaded args, either (err, result :object)\n      // or (err, rows :array, columns :array)\n      if (Array.isArray(arguments[1])) {\n        // response to a 'select', 'show' or similar\n        const rows = arguments[1],\n          columns = arguments[2];\n        console.log('rows', rows);\n        console.log('columns', columns);\n        conn.writeTextResult(rows, columns);\n      } else {\n        // response to an 'insert', 'update' or 'delete'\n        const result = arguments[1];\n        console.log('result', result);\n        conn.writeOk(result);\n      }\n    });\n  });\n\n  conn.on('end', remote.end.bind(remote));\n});\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"examples-using-mysql-server-api",children:"Examples using MySQL server API"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/sidorares/mysql-pg-proxy",children:"MySQL-pg-proxy"})," - MySQL to Postgres proxy server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/sidorares/mysqlite.js",children:"MySQLite.js"})," - MySQL server with JS-only (emscripten compiled) sqlite backend."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/eugeneware/sql-engine",children:"SQL-engine"})," - MySQL server with LevelDB backend."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/sidorares/mysql-osquery-proxy",children:"MySQL-osquery-proxy"})," - Connect to ",(0,r.jsx)(n.a,{href:"https://osquery.io/",children:"facebook osquery"})," using MySQL client"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/implydata/plyql",children:"PlyQL"})," - Connect to ",(0,r.jsx)(n.a,{href:"https://druid.io/",children:"Druid"})," using MySQL client"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>a});s(7294);var r=s(6905);const t={tabItem:"tabItem_Ymn6"};var o=s(5893);function a(e){let{children:n,hidden:s,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,a),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>q});var r=s(7294),t=s(6905),o=s(2466),a=s(6550),l=s(469),c=s(1980),i=s(7392),u=s(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:s}=e;const t=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function y(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,o=m(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[i,d]=h({queryString:s,groupId:t}),[y,x]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,u.Nk)(s);return[t,(0,r.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:t}),f=(()=>{const e=i??y;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),x(e)}),[d,x,o]),tabValues:o}}var x=s(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(5893);function g(e){let{className:n,block:s,selectedValue:r,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),u=e=>{const n=e.currentTarget,s=c.indexOf(n),t=l[s].value;t!==r&&(i(n),a(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,t.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:t}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function j(e){const n=y(e);return(0,b.jsxs)("div",{className:(0,t.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function q(e){const n=(0,x.Z)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(n))}},4442:(e,n,s)=>{s.d(n,{V:()=>o});var r=s(5742),t=s(5893);const o=e=>{let{title:n}=e;return(0,t.jsx)(r.Z,{children:(0,t.jsx)("title",{children:n})})}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var r=s(7294);const t={},o=r.createContext(t);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);