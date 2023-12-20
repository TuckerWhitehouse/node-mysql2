"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8193],{6161:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(5893),s=t(1151),o=t(4866),a=t(5162);const l={},c="Connect Over Socks",u={id:"examples/connect-over-socks",title:"Connect Over Socks",description:"",source:"@site/docs/examples/connect-over-socks.mdx",sourceDirName:"examples",slug:"/examples/connect-over-socks",permalink:"/node-mysql2/docs/examples/connect-over-socks",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/connect-over-socks.mdx",tags:[],version:"current",frontMatter:{},sidebar:"examples",previous:{title:"Binlog Watcher",permalink:"/node-mysql2/docs/examples/binlog-watcher"},next:{title:"Execute",permalink:"/node-mysql2/docs/examples/execute"}},i={},d=[];function m(e){const n={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"connect-over-socks",children:"Connect Over Socks"}),"\n",(0,r.jsx)(o.Z,{children:(0,r.jsx)(a.Z,{value:"index.js",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"'use strict';\n\nconst mysql = require('mysql2');\nconst SocksConnection = require('socksjs');\n\n// const socksProxy = new SocksConnection({ port: 3306 });\n// const conn = mysql.createConnection({\n//   stream: socksProxy,\n// });\n\n// conn.query(\"select 1+1\", function(err, rows, fields) {\n//   console.log(err, rows, fields);\n// });\n\nconst conn1 = mysql.createPool({\n  debug: 1,\n  stream: function () {\n    return new SocksConnection({ port: 3306 });\n  },\n});\n\nconn1.execute('select sleep(1.1) as www', (err, rows, fields) => {\n  console.log(err, rows, fields);\n});\n\nconn1.execute('select sleep(1) as qqq', (err, rows, fields) => {\n  console.log(err, rows, fields);\n});\n\nconn1.execute('select sleep(1) as qqq', (err, rows, fields) => {\n  console.log(err, rows, fields);\n});\n"})})})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var r=t(6905);const s={tabItem:"tabItem_Ymn6"};var o=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(7294),s=t(6905),o=t(2466),a=t(6550),l=t(469),c=t(1980),u=t(7392),i=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=m(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,d]=f({queryString:t,groupId:s}),[b,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,i.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),v=(()=>{const e=u??b;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var h=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),i=e=>{const n=e.currentTarget,t=c.indexOf(n),s=l[t].value;s!==r&&(u(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:i,...o,className:(0,s.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...n}),(0,x.jsx)(w,{...e,...n})]})}function k(e){const n=(0,h.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var r=t(7294);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);