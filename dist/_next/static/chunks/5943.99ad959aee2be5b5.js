"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5943],{5943:function(e,t,s){s.d(t,{diagram:function(){return v}});var i=s(1504),a=s(5625),o=s(4218),r=s(5478),d=s(7936);s(7484),s(7967),s(7856),s(1644),s(9354);let l="rect",n="rectWithTitle",c="statediagram",p=`${c}-state`,g="transition",b=`${g} note-edge`,u=`${c}-note`,h=`${c}-cluster`,y=`${c}-cluster-alt`,f="parent",w="note",m="----",x=`${m}${w}`,D=`${m}${f}`,$="fill:none",T="fill: #333",S="text",k="normal",N={},A=0;function stateDomId(e="",t=0,s="",i=m){let a=null!==s&&s.length>0?`${i}${s}`:"";return`state-${e}${a}-${t}`}let setupNode=(e,t,s,a,o,d)=>{var c;let g=s.id,m=null==(c=a[g])?"":c.classes?c.classes.join(" "):"";if("root"!==g){let t=l;!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==i.D&&(t=s.type),N[g]||(N[g]={id:g,shape:t,description:r.e.sanitizeText(g,(0,r.c)()),classes:`${m} ${p}`});let a=N[g];s.description&&(Array.isArray(a.description)?(a.shape=n,a.description.push(s.description)):a.description.length>0?(a.shape=n,a.description===g?a.description=[s.description]:a.description=[a.description,s.description]):(a.shape=l,a.description=s.description),a.description=r.e.sanitizeTextOrArray(a.description,(0,r.c)())),1===a.description.length&&a.shape===n&&(a.shape=l),!a.type&&s.doc&&(r.l.info("Setting cluster for ",g,getDir(s)),a.type="group",a.dir=getDir(s),a.shape=s.type===i.a?"divider":"roundedWithTitle",a.classes=a.classes+" "+h+" "+(d?y:""));let o={labelStyle:"",shape:a.shape,labelText:a.description,classes:a.classes,style:"",id:g,dir:a.dir,domId:stateDomId(g,A),type:a.type,padding:15};if(o.centerLabel=!0,s.note){let t={labelStyle:"",shape:"note",labelText:s.note.text,classes:u,style:"",id:g+x+"-"+A,domId:stateDomId(g,A,w),type:a.type,padding:15},i={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:a.classes,style:"",id:g+D,domId:stateDomId(g,A,f),type:"group",padding:0};A++;let r=g+D;e.setNode(r,i),e.setNode(t.id,t),e.setNode(g,o),e.setParent(g,r),e.setParent(t.id,r);let d=g,l=t.id;"left of"===s.note.position&&(d=t.id,l=g),e.setEdge(d,l,{arrowhead:"none",arrowType:"",style:$,labelStyle:"",classes:b,arrowheadStyle:T,labelpos:"c",labelType:S,thickness:k})}else e.setNode(g,o)}t&&"root"!==t.id&&(r.l.trace("Setting node ",g," to be child of its parent ",t.id),e.setParent(g,t.id)),s.doc&&(r.l.trace("Adding nodes children "),setupDoc(e,s,s.doc,a,o,!d))},setupDoc=(e,t,s,a,o,d)=>{r.l.trace("items",s),s.forEach(s=>{switch(s.stmt){case i.b:case i.D:setupNode(e,t,s,a,o,d);break;case i.S:{setupNode(e,t,s.state1,a,o,d),setupNode(e,t,s.state2,a,o,d);let i={id:"edge"+A,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:$,labelStyle:"",label:r.e.sanitizeText(s.description,(0,r.c)()),arrowheadStyle:T,labelpos:"c",labelType:S,thickness:k,classes:g};e.setEdge(s.state1.id,s.state2.id,i,A),A++}}})},getDir=(e,t=i.c)=>{let s=t;if(e.doc)for(let t=0;t<e.doc.length;t++){let i=e.doc[t];"dir"===i.stmt&&(s=i.value)}return s},draw=async function(e,t,s,i){let n;r.l.info("Drawing state diagram (v2)",t),N={},i.db.getDirection();let{securityLevel:p,state:g}=(0,r.c)(),b=g.nodeSpacing||50,u=g.rankSpacing||50;r.l.info(i.db.getRootDocV2()),i.db.extract(i.db.getRootDocV2()),r.l.info(i.db.getRootDocV2());let h=i.db.getStates(),y=new a.k({multigraph:!0,compound:!0}).setGraph({rankdir:getDir(i.db.getRootDocV2()),nodesep:b,ranksep:u,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});setupNode(y,void 0,i.db.getRootDocV2(),h,i.db,!0),"sandbox"===p&&(n=(0,o.Ys)("#i"+t));let f="sandbox"===p?(0,o.Ys)(n.nodes()[0].contentDocument.body):(0,o.Ys)("body"),w=f.select(`[id="${t}"]`),m=f.select("#"+t+" g");await (0,d.r)(m,y,["barb"],c,t),r.u.insertTitle(w,"statediagramTitleText",g.titleTopMargin,i.db.getDiagramTitle());let x=w.node().getBBox(),D=x.width+16,$=x.height+16;w.attr("class",c);let T=w.node().getBBox();(0,r.i)(w,$,D,g.useMaxWidth);let S=`${T.x-8} ${T.y-8} ${D} ${$}`;r.l.debug(`viewBox ${S}`),w.attr("viewBox",S);let k=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(let e of k){let t=e.getBBox(),s=document.createElementNS("http://www.w3.org/2000/svg",l);s.setAttribute("rx",0),s.setAttribute("ry",0),s.setAttribute("width",t.width),s.setAttribute("height",t.height),e.insertBefore(s,e.firstChild)}},v={parser:i.p,db:i.d,renderer:{setConf:function(e){let t=Object.keys(e);for(let s of t)e[s]},getClasses:function(e,t){return t.db.extract(t.db.getRootDocV2()),t.db.getClasses()},draw},styles:i.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,i.d.clear()}}}}]);