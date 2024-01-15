"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4965],{4965:function(e,t,r){r.r(t),r.d(t,{SandpackNode:function(){return J}});var n=r(1869),i=Object.create,s=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,c=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,__defNormalProp=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,__commonJS=(e,t)=>function(){return t||(0,e[a(e)[0]])((t={exports:{}}).exports,t),t.exports},__copyProps=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of a(t))d.call(e,i)||i===r||s(e,i,{get:()=>t[i],enumerable:!(n=o(t,i))||n.enumerable});return e},__toESM=(e,t,r)=>(r=null!=e?i(c(e)):{},__copyProps(!t&&e&&e.__esModule?r:s(r,"default",{value:e,enumerable:!0}),e)),__publicField=(e,t,r)=>(__defNormalProp(e,"symbol"!=typeof t?t+"":t,r),r),__accessCheck=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},__privateGet=(e,t,r)=>(__accessCheck(e,t,"read from private field"),r?r.call(e):t.get(e)),__privateAdd=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},__privateSet=(e,t,r,n)=>(__accessCheck(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),__privateMethod=(e,t,r)=>(__accessCheck(e,t,"access private method"),r),l=__commonJS({"../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/pad.js"(e,t){t.exports=function(e,t){var r="000000000"+e;return r.substr(r.length-t)}}}),h=__commonJS({"../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/fingerprint.browser.js"(e,t){var r=l(),n=Object.keys("object"==typeof window?window:self).length,i=r(((navigator.mimeTypes?navigator.mimeTypes.length:0)+navigator.userAgent.length).toString(36)+n.toString(36),4);t.exports=function(){return i}}}),u=__commonJS({"../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/lib/getRandomValue.browser.js"(e,t){var r,n="undefined"!=typeof window&&(window.crypto||window.msCrypto)||"undefined"!=typeof self&&self.crypto;r=n?function(){return Math.abs(n.getRandomValues(new Uint32Array(1))[0]/4294967295)}:Math.random,t.exports=r}}),p=__commonJS({"../../node_modules/.pnpm/cuid@2.1.8/node_modules/cuid/index.js"(e,t){var r=h(),n=l(),i=u(),s=0;function randomBlock(){return n((1679616*i()<<0).toString(36),4)}function safeCounter(){return s=s<1679616?s:0,++s-1}function cuid3(){return"c"+new Date().getTime().toString(36)+n(safeCounter().toString(36),4)+r()+(randomBlock()+randomBlock())}cuid3.slug=function(){var e=new Date().getTime().toString(36),t=safeCounter().toString(36).slice(-4),n=r().slice(0,1)+r().slice(-1),i=randomBlock().slice(-2);return e.slice(-2)+t+n+i},cuid3.isCuid=function(e){return"string"==typeof e&&!!e.startsWith("c")},cuid3.isSlug=function(e){if("string"!=typeof e)return!1;var t=e.length;return t>=7&&t<=10},cuid3.fingerprint=r,t.exports=cuid3}}),m=__commonJS({"../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/createDeferredExecutor.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.createDeferredExecutor=void 0,e.createDeferredExecutor=function(){let executor=(e,t)=>{executor.state="pending",executor.resolve=t=>"pending"!==executor.state?void 0:(executor.result=t,e(t instanceof Promise?t:Promise.resolve(t).then(e=>(executor.state="fulfilled",e)))),executor.reject=e=>{if("pending"===executor.state)return queueMicrotask(()=>{executor.state="rejected"}),t(executor.rejectionReason=e)}};return executor}}}),f=__commonJS({"../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/DeferredPromise.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DeferredPromise=void 0;var t=m(),r=class extends Promise{#e;resolve;reject;constructor(e=null){let r=(0,t.createDeferredExecutor)();super((t,n)=>{r(t,n),e?.(r.resolve,r.reject)}),this.#e=r,this.resolve=this.#e.resolve,this.reject=this.#e.reject}get state(){return this.#e.state}get rejectionReason(){return this.#e.rejectionReason}then(e,t){return this.#t(super.then(e,t))}catch(e){return this.#t(super.catch(e))}finally(e){return this.#t(super.finally(e))}#t(e){return Object.defineProperties(e,{resolve:{configurable:!0,value:this.resolve},reject:{configurable:!0,value:this.reject}})}};e.DeferredPromise=r}}),v=__commonJS({"../../node_modules/.pnpm/@open-draft+deferred-promise@2.1.0/node_modules/@open-draft/deferred-promise/build/index.js"(e){var t=e&&e.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),r=e&&e.__exportStar||function(e,r){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(r,n)||t(r,e,n)};Object.defineProperty(e,"__esModule",{value:!0}),r(m(),e),r(f(),e)}}),w=__commonJS({"../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/MemoryLeakError.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.MemoryLeakError=void 0;var t=class extends Error{emitter;type;count;constructor(e,t,r){super(`Possible EventEmitter memory leak detected. ${r} ${t.toString()} listeners added. Use emitter.setMaxListeners() to increase limit`),this.emitter=e,this.type=t,this.count=r,this.name="MaxListenersExceededWarning"}};e.MemoryLeakError=t}}),_=__commonJS({"../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/Emitter.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Emitter=void 0;var t,r,n,i,s,o,a,c,d,l,h,u=w(),p=class{constructor(){__privateAdd(this,i),__privateAdd(this,o),__privateAdd(this,c),__privateAdd(this,l),__privateAdd(this,t,void 0),__privateAdd(this,r,void 0),__privateAdd(this,n,void 0),__privateSet(this,t,new Map),__privateSet(this,r,p.defaultMaxListeners),__privateSet(this,n,!1)}static listenerCount(e,t){return e.listenerCount(t)}setMaxListeners(e){return __privateSet(this,r,e),this}getMaxListeners(){return __privateGet(this,r)}eventNames(){return Array.from(__privateGet(this,t).keys())}emit(e,...t){let r=__privateMethod(this,i,s).call(this,e);return r.forEach(e=>{e.apply(this,t)}),r.length>0}addListener(e,o){__privateMethod(this,l,h).call(this,"newListener",e,o);let a=__privateMethod(this,i,s).call(this,e).concat(o);if(__privateGet(this,t).set(e,a),__privateGet(this,r)>0&&this.listenerCount(e)>__privateGet(this,r)&&!__privateGet(this,n)){__privateSet(this,n,!0);let t=new u.MemoryLeakError(this,e,this.listenerCount(e));console.warn(t)}return this}on(e,t){return this.addListener(e,t)}once(e,t){return this.addListener(e,__privateMethod(this,c,d).call(this,e,t))}prependListener(e,r){let n=__privateMethod(this,i,s).call(this,e);if(n.length>0){let i=[r].concat(n);__privateGet(this,t).set(e,i)}else __privateGet(this,t).set(e,n.concat(r));return this}prependOnceListener(e,t){return this.prependListener(e,__privateMethod(this,c,d).call(this,e,t))}removeListener(e,r){let n=__privateMethod(this,i,s).call(this,e);return n.length>0&&(__privateMethod(this,o,a).call(this,n,r),__privateGet(this,t).set(e,n),__privateMethod(this,l,h).call(this,"removeListener",e,r)),this}off(e,t){return this.removeListener(e,t)}removeAllListeners(e){return e?__privateGet(this,t).delete(e):__privateGet(this,t).clear(),this}listeners(e){return Array.from(__privateMethod(this,i,s).call(this,e))}listenerCount(e){return __privateMethod(this,i,s).call(this,e).length}rawListeners(e){return this.listeners(e)}};t=new WeakMap,r=new WeakMap,n=new WeakMap,i=new WeakSet,s=function(e){return __privateGet(this,t).get(e)||[]},o=new WeakSet,a=function(e,t){let r=e.indexOf(t);return r>-1&&e.splice(r,1),[]},c=new WeakSet,d=function(e,t){let onceListener=(...r)=>{this.removeListener(e,onceListener),t.apply(this,r)};return onceListener},l=new WeakSet,h=function(e,t,r){this.emit(e,...[t,r])},__publicField(p,"defaultMaxListeners",10),e.Emitter=p}}),g=__commonJS({"../../node_modules/.pnpm/strict-event-emitter@0.4.3/node_modules/strict-event-emitter/lib/index.js"(e){var t=e&&e.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),r=e&&e.__exportStar||function(e,r){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(r,n)||t(r,e,n)};Object.defineProperty(e,"__esModule",{value:!0}),r(_(),e),r(w(),e)}}),y=__toESM(p()),b=/(%?)(%([sdjo]))/g;function format(e,...t){if(0===t.length)return e;let r=0,n=e.replace(b,(e,n,i,s)=>{let o=t[r],a=function(e,t){switch(t){case"s":return e;case"d":case"i":return Number(e);case"j":return JSON.stringify(e);case"o":{if("string"==typeof e)return e;let t=JSON.stringify(e);if("{}"===t||"[]"===t||/^\[object .+?\]$/.test(t))return e;return t}}}(o,s);return n?e:(r++,a)});return r<t.length&&(n+=` ${t.slice(r).join(" ")}`),n=n.replace(/%{2,2}/g,"%")}var S=class extends Error{constructor(e,...t){super(e),this.message=e,this.name="Invariant Violation",this.message=format(e,...t),function(e){if(!e.stack)return;let t=e.stack.split("\n");t.splice(1,2),e.stack=t.join("\n")}(this)}},invariant=(e,t,...r)=>{if(!e)throw new S(t,...r)};invariant.as=(e,t,r,...n)=>{if(!t){let t=null!=e.prototype.name,i=t?new e(format(r,n)):e(format(r,n));throw i}};var P=__toESM(v()),E=window.localStorage.CSB_EMULATOR_DEBUG,k="\x1b[36;1m",L={preview:"\x1b[33;1m",emulator:"\x1b[35;1m",runtime:k,bridge:"\x1b[34m","runtime:worker":k};function createDebug(e){return function(t,...r){if("true"===E){let n=t.replace(/\[.+\]:/,"");console.debug(`${L[e]}${e}:${t.includes("sender")?`[32;1msender`:t.includes("receiver")?`[31mreceiver`:""}[0m:${n}`,...r)}}}var j=createDebug("emulator"),x=class{constructor(e){this.target=e,this.emitter=new EventTarget,this.channel=new MessageChannel,this.receiverPort=this.channel.port1;let t=new P.DeferredPromise,handshakeListener=e=>{"internal/ready"===e.data.type&&(j("[message-sender]: runtime is ready"),t.resolve())};window.addEventListener("message",handshakeListener),t.then(()=>{window.removeEventListener("message",handshakeListener)}),this.receiverReadyPromise=t,this.receiverPort.onmessage=e=>{let t=e.data;null!=t.type&&(j('[message-sender]: emitting "%s" event...',t.type,t.payload),this.emitter.dispatchEvent(new MessageEvent(t.type,{data:t.payload})))}}emitter;channel;receiverPort;receiverReadyPromise;async handshake(){let e=new P.DeferredPromise;await this.receiverReadyPromise,j("[message-sender]: sending handshake"),this.target.postMessage({type:"internal/handshake"},"*",[this.channel.port2]),this.on("internal/handshake/done",()=>{e.resolve(),clearTimeout(t)});let t=setTimeout(()=>{e.reject(Error("MessageSender: Handshake timeout"))},5e3);return e}on(e,t,r){j('[message-sender]: add listener "%s"',e),this.emitter.addEventListener(e,e=>{e instanceof MessageEvent&&t(e)},r)}off(e,t,r){this.emitter.removeEventListener(e,t,r)}async send(e,...t){let r=new P.DeferredPromise,n=(0,y.default)(),i=t[0]||{};j('[message-sender]: send "%s" (%s)',e,n,i),this.receiverPort.postMessage({type:e,payload:{operationId:n,payload:i}}),j('[message-sender]: adding done listener for "%s" (%s)',e,n);let handleOperationDone=t=>{let{data:i}=t;if(i.operationId===n){let t=i.listenerPayload||{};j('[message-sender]: resolving "%s (%s) promise!',e,n),r.resolve({...t,operationId:i.operationId})}},handleOperationFailed=t=>{let{data:i}=t;i.operationId===n&&(j('[message-sender]: rejecting "%s (%s) promise!',e,n),r.reject(i.error))};return this.on("internal/operation/done",handleOperationDone),this.on("internal/operation/failed",handleOperationFailed),r.finally(()=>{this.emitter.removeEventListener("internal/operation/done",handleOperationDone),this.emitter.removeEventListener("internal/operation/failed",handleOperationFailed)})}},M=__toESM(v()),I=__toESM(p()),C=class{constructor(e){this.channel=e}async init(e){await this.channel.send("fs/init",{files:e})}async readFile(e,t){let r=await this.channel.send("fs/readFile",{path:e,encoding:t}).catch(t=>{throw Error(format('Failed to read file at path "%s"',e),{cause:t})});if(!r)throw Error("File not found");return r.data}async writeFile(e,t,r){let n;let i=!1;"object"==typeof r?(n=r.encoding,i=!!r.recursive):"string"==typeof r&&(n=r),await this.channel.send("fs/writeFile",{path:e,content:t,encoding:n,recursive:i}).catch(t=>{throw Error(format('Failed to write file at path "%s"',e),{cause:t})})}async readdir(e){let t=await this.channel.send("fs/readdir",{path:e}).catch(t=>{throw Error(format('Failed to read directory at path "%s"',e),{cause:t})});if(!t)throw Error("Directory not found");return t.data}async mkdir(e,t){let r=!!t?.recursive;await this.channel.send("fs/mkdir",{path:e,recursive:r}).catch(t=>{throw Error(format('Failed to make directory at path "%s"',e),{cause:t})})}async stat(e){let t=await this.channel.send("fs/stat",{path:e}).catch(t=>{throw Error(format('Failed to stat file at path "%s"',e),{cause:t})});if(!t)throw Error("File not found");return t.data}async rm(e,t){let{force:r,recursive:n}=t||{};await this.channel.send("fs/rm",{path:e,force:r,recursive:n}).catch(t=>{throw Error(format('Failed to remove file at path "%s"',e),{cause:t})})}async watch(e,t,r){let n=(0,I.default)();return await this.channel.send("fs/watch",{watcherId:n,includes:e,excludes:t}),this.channel.on("fs/watch-event",({data:e})=>{if(e.watcherId===n&&r){let t={...e};delete t.watcherId,r(t)}}),{dispose:()=>this.channel.send("fs/unwatch",{watcherId:n})}}},O=__toESM(g()),F=class{constructor(e){this.channel=e}create(){return new D(this.channel)}},D=class{constructor(e){this.channel=e,this.state="running",this.stdout=new O.Emitter,this.stderr=new O.Emitter,this.stdin={write:e=>{if(!this.id)throw Error("Failed to write to stdin, no process is currently running");return this.channel.send("shell/stdin",{data:e,workerId:this.id})}},this.forwardStdEvents()}id;state;stdout;stderr;stdin;forwardStdEvents(){this.channel.on("worker/tty",e=>{let{data:t}=e;if(t.workerId===this.id)switch(t.payload.type){case"out":this.stdout.emit("data",t.payload.data);break;case"err":this.stderr.emit("data",t.payload.data)}})}async runCommand(e,t,r={}){invariant(!this.id,'Failed to run "runCommand" on a ShellProcess: there is already a process running.');let n=await this.channel.send("shell/runCommand",{command:e,args:t,options:r});return invariant(n,'Failed to run "runCommand" on a ShellProcess: was not able to retrieve a running process.'),this.id=n.id,this.state="running",n}async on(e,t){switch(e){case"progress":this.channel.on("worker/progress",({data:e})=>{t(e.status)});return;case"exit":this.channel.on("worker/exit",({data:e})=>{e.workerId===this.id&&t(e.exitCode,e.error)});return}}async kill(){invariant(this.id,'Failed to run "kill" on a ShellProcess: there is no process running. Did you forget to run it?'),this.state="idle",await this.channel.send("shell/exit",{id:this.id}).catch(e=>{throw Error(format('Failed to kill shell with ID "%s"',this.id),{cause:e})}),this.id=void 0}},A=__toESM(v()),N=class{constructor(e){this.channel=e}async waitFor(e,t,r=2e4){let n=new A.DeferredPromise,i=setTimeout(()=>{n.reject()},r),s=await this.channel.send("preview/get/info",e).catch(t=>{n.reject(Error(format('Failed to look up preview information for shell ID "%s" (port: %d)',e.sourceShellId,e.port)))}),o=s&&t(s);return o&&n.resolve({url:s.url,port:s.port,sourceShellId:s.sourceShellId}),this.channel.on("preview/port/ready",({data:e})=>{!o&&t(e)&&n.resolve({url:e.url,port:e.port,sourceShellId:e.sourceShellId})}),n.finally(()=>{clearTimeout(i)})}async getByShellId(e,t){return this.waitFor({sourceShellId:e},t=>t.sourceShellId===e,t).catch(t=>{throw Error(format('Failed to get shell by ID "%s"',e),{cause:t})})}async waitForPort(e,t){return this.waitFor({port:e},t=>t.port===e,t).catch(t=>{throw Error(format("Failed to await port %d",e),{cause:t})})}},T=createDebug("emulator"),R=class{constructor(e){this.options=e,invariant(this.options.iframe,'Failed to create a Nodebox: expected "iframe" argument to be a reference to an <iframe> element but got %j',this.options.iframe),this.url=this.options.runtimeUrl||"https://nodebox-runtime.codesandbox.io",this.isConnected=!1}channel=null;isConnected;url;fileSystemApi=null;shellApi=null;previewApi=null;async connect(){let{iframe:e,cdnUrl:t}=this.options;T("[message-sender]: Connecting to node emulator...");let r=new M.DeferredPromise;this.url||r.reject(Error("Nodebox URL is missing. Did you forget to provide it when creating this Nodebox instance?")),invariant(e.contentWindow,"Failed to create a MessageChannel with the Nodebox iframe: no content window found"),this.channel=new x(e.contentWindow);let n=new M.DeferredPromise;return e.setAttribute("src",this.url),e.addEventListener("load",()=>{n.resolve()},{once:!0}),e.addEventListener("error",e=>{n.reject(e.error)},{once:!0}),await n,T("[message-sender]: IFrame loaded..."),await this.channel.handshake(),T("[message-sender]: Handshake completed..."),this.channel.send("connect",{cdnUrl:t}),this.channel.on("runtime/ready",()=>{r.resolve()}),r.then(()=>{T("[message-sender]: Connected to runtime..."),this.isConnected=!0})}get fs(){return invariant(this.isConnected,'Failed to access the File System API: consumer is not connected. Did you forget to run "connect()"?'),this.fileSystemApi||(this.fileSystemApi=new C(this.channel)),this.fileSystemApi}get shell(){return invariant(this.isConnected,'Failed to access the Shell API: consumer is not connected. Did you forget to run "connect()"?'),this.shellApi||(this.shellApi=new F(this.channel)),this.shellApi}get preview(){return invariant(this.isConnected,'Failed to access the Preview API: consumer is not connected. Did you forget to run "connect()"?'),this.previewApi||(this.previewApi=new N(this.channel)),this.previewApi}},U=r(2308),W=r(7757);r(4430),r(8471);var setPreviewIframeProperties=function(e,t){e.style.border="0",e.style.width=t.width||"100%",e.style.height=t.height||"100%",e.style.overflow="hidden",e.allow="cross-origin-isolated"},G=[{code:(function(e){var t=e.scope,r=window.history.__proto__,n=[],i=0,dispatchMessage=function(e){parent.postMessage({type:"urlchange",url:e,back:i>0,forward:i<n.length-1,channelId:t.channelId},"*")};Object.assign(window.history,{go:function(e){var t=i+e;if(t>=0&&t<=n.length-1){var s=n[i=t],o=s.url,a=s.state;r.replaceState.call(window.history,a,"",o),dispatchMessage(document.location.href),window.dispatchEvent(new PopStateEvent("popstate",{state:a}))}},back:function(){window.history.go(-1)},forward:function(){window.history.go(1)},pushState:function(e,t,s){r.replaceState.call(window.history,e,t,s),n.splice(i+1),n.push({url:s,state:e}),i=n.length-1,dispatchMessage(document.location.href)},replaceState:function(e,t,s){r.replaceState.call(window.history,e,t,s),n[i]={state:e,url:s},dispatchMessage(document.location.href)}}),window.addEventListener("message",function(e){var t=e.data;"urlback"===t.type?history.back():"urlforward"===t.type?history.forward():"refresh"===t.type&&document.location.reload()})}).toString(),id:"historyListener"},{code:"function consoleHook({ scope }) {"+W.c+"\n};",id:"consoleHook"},{code:(function(e){var t,r=e.scope,n=0;function sendResizeEvent(){var e=function(){if("undefined"==typeof window)return 0;var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.offsetHeight)}();n!==e&&window.parent.postMessage({type:"resize",height:e,codesandbox:!0,channelId:r.channelId},"*"),n=e}sendResizeEvent(),new MutationObserver(function(){void 0===t&&(sendResizeEvent(),t=setTimeout(function(){t=void 0},300))}).observe(document,{attributes:!0,childList:!0,subtree:!0}),setInterval(sendResizeEvent,300)}).toString(),id:"watchResize"}],injectScriptToIframe=function(e,t){G.forEach(function(r){var n,i=r.code,s=r.id;null===(n=e.contentWindow)||void 0===n||n.postMessage({uid:s,type:"INJECT_AND_INVOKE",code:"exports.activate = ".concat(i),scope:{channelId:t}},"*")})},J=function(e){function SandpackNode(t,r,i){void 0===i&&(i={});var s=e.call(this,t,r,(0,n.h)((0,n.h)({},i),{bundlerURL:i.bundlerURL}))||this;return s._modulesCache=new Map,s.messageChannelId=(0,W.g)(),s._initPromise=null,s.emitter=new W.E,s.manageIframes(t),s.emulator=new R({iframe:s.emulatorIframe,runtimeUrl:s.options.bundlerURL}),s.updateSandbox(r),s}return(0,n.g)(SandpackNode,e),SandpackNode.prototype._init=function(e){return(0,n._)(this,void 0,void 0,function(){return(0,n.a)(this,function(t){switch(t.label){case 0:return[4,this.emulator.connect()];case 1:return t.sent(),[4,this.emulator.fs.init(e)];case 2:return t.sent(),[4,this.globalListeners()];case 3:return t.sent(),[2]}})})},SandpackNode.prototype.compile=function(e){return(0,n._)(this,void 0,void 0,function(){var t,r;return(0,n.a)(this,function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),this.status="initializing",this.dispatch({type:"start",firstLoad:!0}),this._initPromise||(this._initPromise=this._init(e)),[4,this._initPromise];case 1:return n.sent(),this.dispatch({type:"connected"}),[4,this.createShellProcessFromTask(e)];case 2:return t=n.sent().id,[4,this.createPreviewURLFromId(t)];case 3:return n.sent(),[4,this.setLocationURLIntoIFrame()];case 4:return n.sent(),this.dispatchDoneMessage(),[3,6];case 5:return r=n.sent(),this.dispatch({type:"action",action:"notification",notificationType:"error",title:(0,W.a)(r)}),this.dispatch({type:"done",compilatonError:!0}),[3,6];case 6:return[2]}})})},SandpackNode.prototype.createShellProcessFromTask=function(e){return(0,n._)(this,void 0,void 0,function(){var t,r,i=this;return(0,n.a)(this,function(s){switch(s.label){case 0:return t=(0,W.r)(e["/package.json"]),this.emulatorCommand=(0,W.b)(t),this.emulatorShellProcess=this.emulator.shell.create(),[4,this.emulatorShellProcess.on("exit",function(e){i.dispatch({type:"action",action:"notification",notificationType:"error",title:(0,n.c)("Error: process.exit(".concat(e,") called."))})})];case 1:return s.sent(),[4,this.emulatorShellProcess.on("progress",function(e){var t,r;if("command_running"===e.state||"starting_command"===e.state){i.dispatch({type:"shell/progress",data:(0,n.h)((0,n.h)({},e),{command:[null===(t=i.emulatorCommand)||void 0===t?void 0:t[0],null===(r=i.emulatorCommand)||void 0===r?void 0:r[1].join(" ")].join(" ")})}),i.status="installing-dependencies";return}i.dispatch({type:"shell/progress",data:e})})];case 2:return s.sent(),this.emulatorShellProcess.stdout.on("data",function(e){i.dispatch({type:"stdout",payload:{data:e,type:"out"}})}),this.emulatorShellProcess.stderr.on("data",function(e){i.dispatch({type:"stdout",payload:{data:e,type:"err"}})}),[4,(r=this.emulatorShellProcess).runCommand.apply(r,this.emulatorCommand)];case 3:return[2,s.sent()]}})})},SandpackNode.prototype.createPreviewURLFromId=function(e){var t;return(0,n._)(this,void 0,void 0,function(){var r;return(0,n.a)(this,function(n){switch(n.label){case 0:return this.iframePreviewUrl=void 0,[4,this.emulator.preview.getByShellId(e)];case 1:return r=n.sent().url,this.iframePreviewUrl=r+(null!==(t=this.options.startRoute)&&void 0!==t?t:""),[2]}})})},SandpackNode.prototype.manageIframes=function(e){var t;if("string"==typeof e){var r=document.querySelector(e);(0,n.n)(r,"The element '".concat(e,"' was not found")),this.iframe=document.createElement("iframe")}else this.iframe=e;setPreviewIframeProperties(this.iframe,this.options),(0,n.n)(this.iframe.parentNode,"The given iframe does not have a parent."),this.emulatorIframe=document.createElement("iframe"),this.emulatorIframe.classList.add("sp-bridge-frame"),null===(t=this.iframe.parentNode)||void 0===t||t.appendChild(this.emulatorIframe)},SandpackNode.prototype.setLocationURLIntoIFrame=function(){return(0,n._)(this,void 0,void 0,function(){return(0,n.a)(this,function(e){switch(e.label){case 0:if(!this.iframePreviewUrl)return[3,2];return[4,function(e,t){return(0,n._)(this,void 0,void 0,function(){var r,i,s;return(0,n.a)(this,function(o){return r=e.contentWindow,(0,n.n)(r,"Failed to await preview iframe: no content window found"),i=0,[2,new Promise(function(r,o){var triesToSetUrl=function(){var onLoadPage=function(){clearTimeout(s),i=20,r(),e.removeEventListener("load",onLoadPage)};if(i>=20){o((0,n.c)("Could not able to connect to preview."));return}e.setAttribute("src",t),s=setTimeout(function(){triesToSetUrl(),e.removeEventListener("load",onLoadPage)},9e4),i+=1,e.addEventListener("load",onLoadPage)};e.addEventListener("error",function(){return o(Error("Iframe error"))}),e.addEventListener("abort",function(){return o(Error("Aborted"))}),triesToSetUrl()})]})})}(this.iframe,this.iframePreviewUrl)];case 1:e.sent(),e.label=2;case 2:return[2]}})})},SandpackNode.prototype.dispatchDoneMessage=function(){this.status="done",this.dispatch({type:"done",compilatonError:!1}),this.iframePreviewUrl&&this.dispatch({type:"urlchange",url:this.iframePreviewUrl,back:!1,forward:!1})},SandpackNode.prototype.globalListeners=function(){return(0,n._)(this,void 0,void 0,function(){var e=this;return(0,n.a)(this,function(t){switch(t.label){case 0:return window.addEventListener("message",function(t){"PREVIEW_LOADED"===t.data.type&&injectScriptToIframe(e.iframe,e.messageChannelId),"urlchange"===t.data.type&&t.data.channelId===e.messageChannelId?e.dispatch({type:"urlchange",url:t.data.url,back:t.data.back,forward:t.data.forward}):t.data.channelId===e.messageChannelId&&e.dispatch(t.data)}),[4,this.emulator.fs.watch(["*"],[".next","node_modules","build","dist","vendor",".config",".vuepress"],function(t){return(0,n._)(e,void 0,void 0,function(){var e,r,i,s,o;return(0,n.a)(this,function(n){switch(n.label){case 0:if(!t)return[2];return r="newPath"in(e=t)?e.newPath:"path"in e?e.path:"",[4,this.emulator.fs.stat(r)];case 1:if("file"!==n.sent().type)return[2,null];n.label=2;case 2:switch(n.trys.push([2,10,,11]),e.type){case"change":case"create":return[3,3];case"remove":return[3,5];case"rename":return[3,6];case"close":return[3,8]}return[3,9];case 3:return[4,this.emulator.fs.readFile(e.path,"utf8")];case 4:return i=n.sent(),this.dispatch({type:"fs/change",path:e.path,content:i}),this._modulesCache.set(e.path,(0,W.w)(i)),[3,9];case 5:return this.dispatch({type:"fs/remove",path:e.path}),this._modulesCache.delete(e.path),[3,9];case 6:return this.dispatch({type:"fs/remove",path:e.oldPath}),this._modulesCache.delete(e.oldPath),[4,this.emulator.fs.readFile(e.newPath,"utf8")];case 7:return s=n.sent(),this.dispatch({type:"fs/change",path:e.newPath,content:s}),this._modulesCache.set(e.newPath,(0,W.w)(s)),[3,9];case 8:return[3,9];case 9:return[3,11];case 10:return o=n.sent(),this.dispatch({type:"action",action:"notification",notificationType:"error",title:(0,W.a)(o)}),[3,11];case 11:return[2]}})})})];case 1:return t.sent(),[2]}})})},SandpackNode.prototype.restartShellProcess=function(){var e;return(0,n._)(this,void 0,void 0,function(){return(0,n.a)(this,function(t){switch(t.label){case 0:if(!(this.emulatorShellProcess&&this.emulatorCommand))return[3,3];return this.dispatch({type:"start",firstLoad:!0}),this.status="initializing",[4,this.emulatorShellProcess.kill()];case 1:return t.sent(),null===(e=this.iframe)||void 0===e||e.removeAttribute("attr"),this.emulator.fs.rm("/node_modules/.vite",{recursive:!0,force:!0}),[4,this.compile(Object.fromEntries(this._modulesCache))];case 2:t.sent(),t.label=3;case 3:return[2]}})})},SandpackNode.prototype.updateSandbox=function(e){var t,r=this,n=(0,W.f)(e.files);if((null===(t=this.emulatorShellProcess)||void 0===t?void 0:t.state)==="running"){Object.entries(n).forEach(function(e){var t=e[0],n=e[1];r._modulesCache.get(t)&&(0,W.r)(n)===(0,W.r)(r._modulesCache.get(t))||r.emulator.fs.writeFile(t,n,{recursive:!0})});return}this.dispatch({codesandbox:!0,modules:n,template:e.template,type:"compile"}),Object.entries(n).forEach(function(e){var t=e[0],n=e[1];r._modulesCache.set(t,(0,W.w)(n))})},SandpackNode.prototype.dispatch=function(e){var t,r;return(0,n._)(this,void 0,void 0,function(){return(0,n.a)(this,function(n){switch(n.label){case 0:switch(e.type){case"compile":return[3,1];case"refresh":return[3,2];case"urlback":case"urlforward":return[3,4];case"shell/restart":return[3,5];case"shell/openPreview":return[3,6]}return[3,7];case 1:return this.compile(e.modules),[3,8];case 2:return[4,this.setLocationURLIntoIFrame()];case 3:return n.sent(),[3,8];case 4:return null===(r=null===(t=this.iframe)||void 0===t?void 0:t.contentWindow)||void 0===r||r.postMessage(e,"*"),[3,8];case 5:return this.restartShellProcess(),[3,8];case 6:return window.open(this.iframePreviewUrl,"_blank"),[3,8];case 7:this.emitter.dispatch(e),n.label=8;case 8:return[2]}})})},SandpackNode.prototype.listen=function(e){return this.emitter.listener(e)},SandpackNode.prototype.destroy=function(){this.emulatorIframe.remove(),this.emitter.cleanup()},SandpackNode}(U.S)}}]);