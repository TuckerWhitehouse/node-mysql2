"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5003],{4304:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var r=s(5893),i=s(1151);const t={},l="MySQL Server API",c={id:"documentation/mysql-server",title:"MySQL Server API",description:"Server",source:"@site/docs/documentation/mysql-server.mdx",sourceDirName:"documentation",slug:"/documentation/mysql-server",permalink:"/node-mysql2/zh-CN/docs/documentation/mysql-server",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/documentation/mysql-server.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Extra Features",permalink:"/node-mysql2/zh-CN/docs/documentation/extras"},next:{title:"Prepared Statements",permalink:"/node-mysql2/zh-CN/docs/documentation/prepared-statements"}},d={},o=[{value:"Server",id:"server",level:2},{value:"Events",id:"events",level:3},{value:"Connection",id:"connection",level:2},{value:"Events",id:"events-1",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"mysql-server-api",children:"MySQL Server API"}),"\n",(0,r.jsx)(n.h2,{id:"server",children:"Server"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"createServer()"})," - creates server instance"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Server.listen"})," - listen port / unix socket (same arguments as ",(0,r.jsx)(n.a,{href:"https://nodejs.org/api/net.html#net_server_listen_port_host_backlog_callback",children:"net.Server.listen"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"connect"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"new incoming connection."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"connection",children:"Connection"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"serverHandshake({ serverVersion, protocolVersion, connectionId, statusFlags, characterSet, capabilityFlags })"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"send server handshake initialisation packet, wait handshake response and start listening for commands"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"writeOk({ affectedRows: num, insertId: num })"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["send ",(0,r.jsx)(n.a,{href:"https://dev.mysql.com/doc/internals/en/overview.html#packet-OK_Packet",children:"OK packet"})," to client"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"writeEof(warnings, statusFlags)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"send EOF packet"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"writeTextResult(rows, fields)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["write query result to client. Rows and fields are in the same format as in ",(0,r.jsx)(n.code,{children:"connection.query"})," callback."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"writeColumns(fields)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"write fields + EOF packets."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"writeTextRow(row)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"write array (not hash!) of values as result row"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"TODO:"})," binary protocol"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"events-1",children:"Events"}),"\n",(0,r.jsxs)(n.p,{children:["Every command packet received by the server will be emitted as a ",(0,r.jsx)(n.strong,{children:"packet"})," event with the parameters:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"packet:"})," Packet","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The packet itself"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"knownCommand:"})," boolean","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"is this command known to the server"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"*commandCode:"})," number","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"the parsed command code (first byte)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In addition special events are emitted for ",(0,r.jsx)(n.a,{href:"https://dev.mysql.com/doc/internals/en/text-protocol.html",children:"commands"})," received from the client. If no listener is present a fallback behavior will be invoked."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"quit()"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Default: close the connection"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"init_db(schemaName: string)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Default: return OK"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"query(sql: string)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Please attach a listener to this. Default: return HA_ERR_INTERNAL_ERROR"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"field_list(table: string, fields: string)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Default: return ER_WARN_DEPRECATED_SYNTAX"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ping()"})," - Default: return OK"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var r=s(7294);const i={},t=r.createContext(i);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);