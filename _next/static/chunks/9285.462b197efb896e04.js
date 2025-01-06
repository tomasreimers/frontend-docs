"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9285],{49285:function(e,t,i){i.d(t,{diagram:function(){return Y}});var r=i(58222),n=i(68227),s=i(88749),a=i(45625),l=function(){var e=(0,r.eW)(function(e,t,i,r){for(i=i||{},r=e.length;r--;i[e[r]]=t);return i},"o"),t=[1,3],i=[1,4],n=[1,5],s=[1,6],a=[5,6,8,9,11,13,31,32,33,34,35,36,44,62,63],l=[1,18],h=[2,7],o=[1,22],c=[1,23],u=[1,24],d=[1,25],y=[1,26],p=[1,27],_=[1,20],g=[1,28],E=[1,29],R=[62,63],m=[5,8,9,11,13,31,32,33,34,35,36,44,51,53,62,63],f=[1,47],I=[1,48],S=[1,49],b=[1,50],k=[1,51],N=[1,52],T=[1,53],x=[53,54],A=[1,64],v=[1,60],w=[1,61],W=[1,62],q=[1,63],$=[1,65],O=[1,69],C=[1,70],L=[1,67],M=[1,68],F=[5,8,9,11,13,31,32,33,34,35,36,44,62,63],D={trace:(0,r.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,directive:4,NEWLINE:5,RD:6,diagram:7,EOF:8,acc_title:9,acc_title_value:10,acc_descr:11,acc_descr_value:12,acc_descr_multiline_value:13,requirementDef:14,elementDef:15,relationshipDef:16,requirementType:17,requirementName:18,STRUCT_START:19,requirementBody:20,ID:21,COLONSEP:22,id:23,TEXT:24,text:25,RISK:26,riskLevel:27,VERIFYMTHD:28,verifyType:29,STRUCT_STOP:30,REQUIREMENT:31,FUNCTIONAL_REQUIREMENT:32,INTERFACE_REQUIREMENT:33,PERFORMANCE_REQUIREMENT:34,PHYSICAL_REQUIREMENT:35,DESIGN_CONSTRAINT:36,LOW_RISK:37,MED_RISK:38,HIGH_RISK:39,VERIFY_ANALYSIS:40,VERIFY_DEMONSTRATION:41,VERIFY_INSPECTION:42,VERIFY_TEST:43,ELEMENT:44,elementName:45,elementBody:46,TYPE:47,type:48,DOCREF:49,ref:50,END_ARROW_L:51,relationship:52,LINE:53,END_ARROW_R:54,CONTAINS:55,COPIES:56,DERIVES:57,SATISFIES:58,VERIFIES:59,REFINES:60,TRACES:61,unqString:62,qString:63,$accept:0,$end:1},terminals_:{2:"error",5:"NEWLINE",6:"RD",8:"EOF",9:"acc_title",10:"acc_title_value",11:"acc_descr",12:"acc_descr_value",13:"acc_descr_multiline_value",19:"STRUCT_START",21:"ID",22:"COLONSEP",24:"TEXT",26:"RISK",28:"VERIFYMTHD",30:"STRUCT_STOP",31:"REQUIREMENT",32:"FUNCTIONAL_REQUIREMENT",33:"INTERFACE_REQUIREMENT",34:"PERFORMANCE_REQUIREMENT",35:"PHYSICAL_REQUIREMENT",36:"DESIGN_CONSTRAINT",37:"LOW_RISK",38:"MED_RISK",39:"HIGH_RISK",40:"VERIFY_ANALYSIS",41:"VERIFY_DEMONSTRATION",42:"VERIFY_INSPECTION",43:"VERIFY_TEST",44:"ELEMENT",47:"TYPE",49:"DOCREF",51:"END_ARROW_L",53:"LINE",54:"END_ARROW_R",55:"CONTAINS",56:"COPIES",57:"DERIVES",58:"SATISFIES",59:"VERIFIES",60:"REFINES",61:"TRACES",62:"unqString",63:"qString"},productions_:[0,[3,3],[3,2],[3,4],[4,2],[4,2],[4,1],[7,0],[7,2],[7,2],[7,2],[7,2],[7,2],[14,5],[20,5],[20,5],[20,5],[20,5],[20,2],[20,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[27,1],[27,1],[27,1],[29,1],[29,1],[29,1],[29,1],[15,5],[46,5],[46,5],[46,2],[46,1],[16,5],[16,5],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[18,1],[18,1],[23,1],[23,1],[25,1],[25,1],[45,1],[45,1],[48,1],[48,1],[50,1],[50,1]],performAction:(0,r.eW)(function(e,t,i,r,n,s,a){var l=s.length-1;switch(n){case 4:this.$=s[l].trim(),r.setAccTitle(this.$);break;case 5:case 6:this.$=s[l].trim(),r.setAccDescription(this.$);break;case 7:this.$=[];break;case 13:r.addRequirement(s[l-3],s[l-4]);break;case 14:r.setNewReqId(s[l-2]);break;case 15:r.setNewReqText(s[l-2]);break;case 16:r.setNewReqRisk(s[l-2]);break;case 17:r.setNewReqVerifyMethod(s[l-2]);break;case 20:this.$=r.RequirementType.REQUIREMENT;break;case 21:this.$=r.RequirementType.FUNCTIONAL_REQUIREMENT;break;case 22:this.$=r.RequirementType.INTERFACE_REQUIREMENT;break;case 23:this.$=r.RequirementType.PERFORMANCE_REQUIREMENT;break;case 24:this.$=r.RequirementType.PHYSICAL_REQUIREMENT;break;case 25:this.$=r.RequirementType.DESIGN_CONSTRAINT;break;case 26:this.$=r.RiskLevel.LOW_RISK;break;case 27:this.$=r.RiskLevel.MED_RISK;break;case 28:this.$=r.RiskLevel.HIGH_RISK;break;case 29:this.$=r.VerifyType.VERIFY_ANALYSIS;break;case 30:this.$=r.VerifyType.VERIFY_DEMONSTRATION;break;case 31:this.$=r.VerifyType.VERIFY_INSPECTION;break;case 32:this.$=r.VerifyType.VERIFY_TEST;break;case 33:r.addElement(s[l-3]);break;case 34:r.setNewElementType(s[l-2]);break;case 35:r.setNewElementDocRef(s[l-2]);break;case 38:r.addRelationship(s[l-2],s[l],s[l-4]);break;case 39:r.addRelationship(s[l-2],s[l-4],s[l]);break;case 40:this.$=r.Relationships.CONTAINS;break;case 41:this.$=r.Relationships.COPIES;break;case 42:this.$=r.Relationships.DERIVES;break;case 43:this.$=r.Relationships.SATISFIES;break;case 44:this.$=r.Relationships.VERIFIES;break;case 45:this.$=r.Relationships.REFINES;break;case 46:this.$=r.Relationships.TRACES}},"anonymous"),table:[{3:1,4:2,6:t,9:i,11:n,13:s},{1:[3]},{3:8,4:2,5:[1,7],6:t,9:i,11:n,13:s},{5:[1,9]},{10:[1,10]},{12:[1,11]},e(a,[2,6]),{3:12,4:2,6:t,9:i,11:n,13:s},{1:[2,2]},{4:17,5:l,7:13,8:h,9:i,11:n,13:s,14:14,15:15,16:16,17:19,23:21,31:o,32:c,33:u,34:d,35:y,36:p,44:_,62:g,63:E},e(a,[2,4]),e(a,[2,5]),{1:[2,1]},{8:[1,30]},{4:17,5:l,7:31,8:h,9:i,11:n,13:s,14:14,15:15,16:16,17:19,23:21,31:o,32:c,33:u,34:d,35:y,36:p,44:_,62:g,63:E},{4:17,5:l,7:32,8:h,9:i,11:n,13:s,14:14,15:15,16:16,17:19,23:21,31:o,32:c,33:u,34:d,35:y,36:p,44:_,62:g,63:E},{4:17,5:l,7:33,8:h,9:i,11:n,13:s,14:14,15:15,16:16,17:19,23:21,31:o,32:c,33:u,34:d,35:y,36:p,44:_,62:g,63:E},{4:17,5:l,7:34,8:h,9:i,11:n,13:s,14:14,15:15,16:16,17:19,23:21,31:o,32:c,33:u,34:d,35:y,36:p,44:_,62:g,63:E},{4:17,5:l,7:35,8:h,9:i,11:n,13:s,14:14,15:15,16:16,17:19,23:21,31:o,32:c,33:u,34:d,35:y,36:p,44:_,62:g,63:E},{18:36,62:[1,37],63:[1,38]},{45:39,62:[1,40],63:[1,41]},{51:[1,42],53:[1,43]},e(R,[2,20]),e(R,[2,21]),e(R,[2,22]),e(R,[2,23]),e(R,[2,24]),e(R,[2,25]),e(m,[2,49]),e(m,[2,50]),{1:[2,3]},{8:[2,8]},{8:[2,9]},{8:[2,10]},{8:[2,11]},{8:[2,12]},{19:[1,44]},{19:[2,47]},{19:[2,48]},{19:[1,45]},{19:[2,53]},{19:[2,54]},{52:46,55:f,56:I,57:S,58:b,59:k,60:N,61:T},{52:54,55:f,56:I,57:S,58:b,59:k,60:N,61:T},{5:[1,55]},{5:[1,56]},{53:[1,57]},e(x,[2,40]),e(x,[2,41]),e(x,[2,42]),e(x,[2,43]),e(x,[2,44]),e(x,[2,45]),e(x,[2,46]),{54:[1,58]},{5:A,20:59,21:v,24:w,26:W,28:q,30:$},{5:O,30:C,46:66,47:L,49:M},{23:71,62:g,63:E},{23:72,62:g,63:E},e(F,[2,13]),{22:[1,73]},{22:[1,74]},{22:[1,75]},{22:[1,76]},{5:A,20:77,21:v,24:w,26:W,28:q,30:$},e(F,[2,19]),e(F,[2,33]),{22:[1,78]},{22:[1,79]},{5:O,30:C,46:80,47:L,49:M},e(F,[2,37]),e(F,[2,38]),e(F,[2,39]),{23:81,62:g,63:E},{25:82,62:[1,83],63:[1,84]},{27:85,37:[1,86],38:[1,87],39:[1,88]},{29:89,40:[1,90],41:[1,91],42:[1,92],43:[1,93]},e(F,[2,18]),{48:94,62:[1,95],63:[1,96]},{50:97,62:[1,98],63:[1,99]},e(F,[2,36]),{5:[1,100]},{5:[1,101]},{5:[2,51]},{5:[2,52]},{5:[1,102]},{5:[2,26]},{5:[2,27]},{5:[2,28]},{5:[1,103]},{5:[2,29]},{5:[2,30]},{5:[2,31]},{5:[2,32]},{5:[1,104]},{5:[2,55]},{5:[2,56]},{5:[1,105]},{5:[2,57]},{5:[2,58]},{5:A,20:106,21:v,24:w,26:W,28:q,30:$},{5:A,20:107,21:v,24:w,26:W,28:q,30:$},{5:A,20:108,21:v,24:w,26:W,28:q,30:$},{5:A,20:109,21:v,24:w,26:W,28:q,30:$},{5:O,30:C,46:110,47:L,49:M},{5:O,30:C,46:111,47:L,49:M},e(F,[2,14]),e(F,[2,15]),e(F,[2,16]),e(F,[2,17]),e(F,[2,34]),e(F,[2,35])],defaultActions:{8:[2,2],12:[2,1],30:[2,3],31:[2,8],32:[2,9],33:[2,10],34:[2,11],35:[2,12],37:[2,47],38:[2,48],40:[2,53],41:[2,54],83:[2,51],84:[2,52],86:[2,26],87:[2,27],88:[2,28],90:[2,29],91:[2,30],92:[2,31],93:[2,32],95:[2,55],96:[2,56],98:[2,57],99:[2,58]},parseError:(0,r.eW)(function(e,t){if(t.recoverable)this.trace(e);else{var i=Error(e);throw i.hash=t,i}},"parseError"),parse:(0,r.eW)(function(e){var t=this,i=[0],n=[],s=[null],a=[],l=this.table,h="",o=0,c=0,u=0,d=a.slice.call(arguments,1),y=Object.create(this.lexer),p={yy:{}};for(var _ in this.yy)Object.prototype.hasOwnProperty.call(this.yy,_)&&(p.yy[_]=this.yy[_]);y.setInput(e,p.yy),p.yy.lexer=y,p.yy.parser=this,void 0===y.yylloc&&(y.yylloc={});var g=y.yylloc;a.push(g);var E=y.options&&y.options.ranges;function lex(){var e;return"number"!=typeof(e=n.pop()||y.lex()||1)&&(e instanceof Array&&(e=(n=e).pop()),e=t.symbols_[e]||e),e}"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,r.eW)(function(e){i.length=i.length-2*e,s.length=s.length-e,a.length=a.length-e},"popStack"),(0,r.eW)(lex,"lex");for(var R,m,f,I,S,b,k,N,T,x={};;){if(f=i[i.length-1],this.defaultActions[f]?I=this.defaultActions[f]:(null==R&&(R=lex()),I=l[f]&&l[f][R]),void 0===I||!I.length||!I[0]){var A="";for(b in T=[],l[f])this.terminals_[b]&&b>2&&T.push("'"+this.terminals_[b]+"'");A=y.showPosition?"Parse error on line "+(o+1)+":\n"+y.showPosition()+"\nExpecting "+T.join(", ")+", got '"+(this.terminals_[R]||R)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==R?"end of input":"'"+(this.terminals_[R]||R)+"'"),this.parseError(A,{text:y.match,token:this.terminals_[R]||R,line:y.yylineno,loc:g,expected:T})}if(I[0]instanceof Array&&I.length>1)throw Error("Parse Error: multiple actions possible at state: "+f+", token: "+R);switch(I[0]){case 1:i.push(R),s.push(y.yytext),a.push(y.yylloc),i.push(I[1]),R=null,m?(R=m,m=null):(c=y.yyleng,h=y.yytext,o=y.yylineno,g=y.yylloc,u>0&&u--);break;case 2:if(k=this.productions_[I[1]][1],x.$=s[s.length-k],x._$={first_line:a[a.length-(k||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(k||1)].first_column,last_column:a[a.length-1].last_column},E&&(x._$.range=[a[a.length-(k||1)].range[0],a[a.length-1].range[1]]),void 0!==(S=this.performAction.apply(x,[h,c,o,p.yy,I[1],s,a].concat(d))))return S;k&&(i=i.slice(0,-1*k*2),s=s.slice(0,-1*k),a=a.slice(0,-1*k)),i.push(this.productions_[I[1]][0]),s.push(x.$),a.push(x._$),N=l[i[i.length-2]][i[i.length-1]],i.push(N);break;case 3:return!0}}return!0},"parse")},P={EOF:1,parseError:(0,r.eW)(function(e,t){if(this.yy.parser)this.yy.parser.parseError(e,t);else throw Error(e)},"parseError"),setInput:(0,r.eW)(function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,r.eW)(function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},"input"),unput:(0,r.eW)(function(e){var t=e.length,i=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===r.length?this.yylloc.first_column:0)+r[r.length-i.length].length-i[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},"unput"),more:(0,r.eW)(function(){return this._more=!0,this},"more"),reject:(0,r.eW)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,r.eW)(function(e){this.unput(this.match.slice(e))},"less"),pastInput:(0,r.eW)(function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,r.eW)(function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,r.eW)(function(){var e=this.pastInput(),t=Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},"showPosition"),test_match:(0,r.eW)(function(e,t){var i,r,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),(r=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],i=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var s in n)this[s]=n[s];return!1},"test_match"),next:(0,r.eW)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var e,t,i,r,n=this._currentRules(),s=0;s<n.length;s++)if((i=this._input.match(this.rules[n[s]]))&&(!t||i[0].length>t[0].length)){if(t=i,r=s,this.options.backtrack_lexer){if(!1!==(e=this.test_match(i,n[s])))return e;if(!this._backtrack)return!1;t=!1;continue}if(!this.options.flex)break}return t?!1!==(e=this.test_match(t,n[r]))&&e:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,r.eW)(function(){return this.next()||this.lex()},"lex"),begin:(0,r.eW)(function(e){this.conditionStack.push(e)},"begin"),popState:(0,r.eW)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,r.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,r.eW)(function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},"topState"),pushState:(0,r.eW)(function(e){this.begin(e)},"pushState"),stateStackSize:(0,r.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,r.eW)(function(e,t,i,r){switch(i){case 0:return"title";case 1:return this.begin("acc_title"),9;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),11;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 48:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:return 5;case 9:case 10:case 11:break;case 12:return 8;case 13:return 6;case 14:return 19;case 15:return 30;case 16:return 22;case 17:return 21;case 18:return 24;case 19:return 26;case 20:return 28;case 21:return 31;case 22:return 32;case 23:return 33;case 24:return 34;case 25:return 35;case 26:return 36;case 27:return 37;case 28:return 38;case 29:return 39;case 30:return 40;case 31:return 41;case 32:return 42;case 33:return 43;case 34:return 44;case 35:return 55;case 36:return 56;case 37:return 57;case 38:return 58;case 39:return 59;case 40:return 60;case 41:return 61;case 42:return 47;case 43:return 49;case 44:return 51;case 45:return 54;case 46:return 53;case 47:this.begin("string");break;case 49:return"qString";case 50:return t.yytext=t.yytext.trim(),62}},"anonymous"),rules:[/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:$)/i,/^(?:requirementDiagram\b)/i,/^(?:\{)/i,/^(?:\})/i,/^(?::)/i,/^(?:id\b)/i,/^(?:text\b)/i,/^(?:risk\b)/i,/^(?:verifyMethod\b)/i,/^(?:requirement\b)/i,/^(?:functionalRequirement\b)/i,/^(?:interfaceRequirement\b)/i,/^(?:performanceRequirement\b)/i,/^(?:physicalRequirement\b)/i,/^(?:designConstraint\b)/i,/^(?:low\b)/i,/^(?:medium\b)/i,/^(?:high\b)/i,/^(?:analysis\b)/i,/^(?:demonstration\b)/i,/^(?:inspection\b)/i,/^(?:test\b)/i,/^(?:element\b)/i,/^(?:contains\b)/i,/^(?:copies\b)/i,/^(?:derives\b)/i,/^(?:satisfies\b)/i,/^(?:verifies\b)/i,/^(?:refines\b)/i,/^(?:traces\b)/i,/^(?:type\b)/i,/^(?:docref\b)/i,/^(?:<-)/i,/^(?:->)/i,/^(?:-)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[\w][^\r\n\{\<\>\-\=]*)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},unqString:{rules:[],inclusive:!1},token:{rules:[],inclusive:!1},string:{rules:[48,49],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,50],inclusive:!0}}};function Parser(){this.yy={}}return D.lexer=P,(0,r.eW)(Parser,"Parser"),Parser.prototype=D,D.Parser=Parser,new Parser}();l.parser=l;var h=[],o={},c=new Map,u={},d=new Map,y=(0,r.eW)((e,t)=>(c.has(e)||c.set(e,{name:e,type:t,id:o.id,text:o.text,risk:o.risk,verifyMethod:o.verifyMethod}),o={},c.get(e)),"addRequirement"),p=(0,r.eW)(()=>c,"getRequirements"),_=(0,r.eW)(e=>{void 0!==o&&(o.id=e)},"setNewReqId"),g=(0,r.eW)(e=>{void 0!==o&&(o.text=e)},"setNewReqText"),E=(0,r.eW)(e=>{void 0!==o&&(o.risk=e)},"setNewReqRisk"),R=(0,r.eW)(e=>{void 0!==o&&(o.verifyMethod=e)},"setNewReqVerifyMethod"),m=(0,r.eW)(e=>(d.has(e)||(d.set(e,{name:e,type:u.type,docRef:u.docRef}),r.cM.info("Added new requirement: ",e)),u={},d.get(e)),"addElement"),f=(0,r.eW)(()=>d,"getElements"),I=(0,r.eW)(e=>{void 0!==u&&(u.type=e)},"setNewElementType"),S=(0,r.eW)(e=>{void 0!==u&&(u.docRef=e)},"setNewElementDocRef"),b=(0,r.eW)((e,t,i)=>{h.push({type:e,src:t,dst:i})},"addRelationship"),k=(0,r.eW)(()=>h,"getRelationships"),N=(0,r.eW)(()=>{h=[],o={},c=new Map,u={},d=new Map,(0,r.ZH)()},"clear"),T={RequirementType:{REQUIREMENT:"Requirement",FUNCTIONAL_REQUIREMENT:"Functional Requirement",INTERFACE_REQUIREMENT:"Interface Requirement",PERFORMANCE_REQUIREMENT:"Performance Requirement",PHYSICAL_REQUIREMENT:"Physical Requirement",DESIGN_CONSTRAINT:"Design Constraint"},RiskLevel:{LOW_RISK:"Low",MED_RISK:"Medium",HIGH_RISK:"High"},VerifyType:{VERIFY_ANALYSIS:"Analysis",VERIFY_DEMONSTRATION:"Demonstration",VERIFY_INSPECTION:"Inspection",VERIFY_TEST:"Test"},Relationships:{CONTAINS:"contains",COPIES:"copies",DERIVES:"derives",SATISFIES:"satisfies",VERIFIES:"verifies",REFINES:"refines",TRACES:"traces"},getConfig:(0,r.eW)(()=>(0,r.nV)().req,"getConfig"),addRequirement:y,getRequirements:p,setNewReqId:_,setNewReqText:g,setNewReqRisk:E,setNewReqVerifyMethod:R,setAccTitle:r.GN,getAccTitle:r.eu,setAccDescription:r.U$,getAccDescription:r.Mx,addElement:m,getElements:f,setNewElementType:I,setNewElementDocRef:S,addRelationship:b,getRelationships:k,clear:N},x=(0,r.eW)(e=>`

  marker {
    fill: ${e.relationColor};
    stroke: ${e.relationColor};
  }

  marker.cross {
    stroke: ${e.lineColor};
  }

  svg {
    font-family: ${e.fontFamily};
    font-size: ${e.fontSize};
  }

  .reqBox {
    fill: ${e.requirementBackground};
    fill-opacity: 1.0;
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${e.requirementTextColor};
  }
  .reqLabelBox {
    fill: ${e.relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${e.relationColor};
    stroke-width: 1;
  }
  .relationshipLabel {
    fill: ${e.relationLabelColor};
  }

`,"getStyles"),A={CONTAINS:"contains",ARROW:"arrow"},v={ReqMarkers:A,insertLineEndings:(0,r.eW)((e,t)=>{let i=e.append("defs").append("marker").attr("id",A.CONTAINS+"_line_ending").attr("refX",0).attr("refY",t.line_height/2).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("g");i.append("circle").attr("cx",t.line_height/2).attr("cy",t.line_height/2).attr("r",t.line_height/2).attr("fill","none"),i.append("line").attr("x1",0).attr("x2",t.line_height).attr("y1",t.line_height/2).attr("y2",t.line_height/2).attr("stroke-width",1),i.append("line").attr("y1",0).attr("y2",t.line_height).attr("x1",t.line_height/2).attr("x2",t.line_height/2).attr("stroke-width",1),e.append("defs").append("marker").attr("id",A.ARROW+"_line_ending").attr("refX",t.line_height).attr("refY",.5*t.line_height).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("path").attr("d",`M0,0
      L${t.line_height},${t.line_height/2}
      M${t.line_height},${t.line_height/2}
      L0,${t.line_height}`).attr("stroke-width",1)},"insertLineEndings")},w={},W=0,q=(0,r.eW)((e,t)=>e.insert("rect","#"+t).attr("class","req reqBox").attr("x",0).attr("y",0).attr("width",w.rect_min_width+"px").attr("height",w.rect_min_height+"px"),"newRectNode"),$=(0,r.eW)((e,t,i)=>{let r=w.rect_min_width/2,n=e.append("text").attr("class","req reqLabel reqTitle").attr("id",t).attr("x",r).attr("y",w.rect_padding).attr("dominant-baseline","hanging"),s=0;i.forEach(e=>{0==s?n.append("tspan").attr("text-anchor","middle").attr("x",w.rect_min_width/2).attr("dy",0).text(e):n.append("tspan").attr("text-anchor","middle").attr("x",w.rect_min_width/2).attr("dy",.75*w.line_height).text(e),s++});let a=1.5*w.rect_padding+s*w.line_height*.75;return e.append("line").attr("class","req-title-line").attr("x1","0").attr("x2",w.rect_min_width).attr("y1",a).attr("y2",a),{titleNode:n,y:a}},"newTitleNode"),O=(0,r.eW)((e,t,i,r)=>{let n=e.append("text").attr("class","req reqLabel").attr("id",t).attr("x",w.rect_padding).attr("y",r).attr("dominant-baseline","hanging"),s=0,a=[];return i.forEach(e=>{let t=e.length;for(;t>30&&s<3;){let i=e.substring(0,30);t=(e=e.substring(30,e.length)).length,a[a.length]=i,s++}if(3==s){let e=a[a.length-1];a[a.length-1]=e.substring(0,e.length-4)+"..."}else a[a.length]=e;s=0}),a.forEach(e=>{n.append("tspan").attr("x",w.rect_padding).attr("dy",w.line_height).text(e)}),n},"newBodyNode"),C=(0,r.eW)((e,t,i,r)=>{let n=t.node().getTotalLength(),s=t.node().getPointAtLength(.5*n),a="rel"+W;W++;let l=e.append("text").attr("class","req relationshipLabel").attr("id",a).attr("x",s.x).attr("y",s.y).attr("text-anchor","middle").attr("dominant-baseline","middle").text(r),h=l.node().getBBox();e.insert("rect","#"+a).attr("class","req reqLabelBox").attr("x",s.x-h.width/2).attr("y",s.y-h.height/2).attr("width",h.width).attr("height",h.height).attr("fill","white").attr("fill-opacity","85%")},"addEdgeLabel"),L=(0,r.eW)(function(e,t,i,s,a){let l=i.edge(V(t.src),V(t.dst)),h=(0,n.jvg)().x(function(e){return e.x}).y(function(e){return e.y}),o=e.insert("path","#"+s).attr("class","er relationshipLine").attr("d",h(l.points)).attr("fill","none");t.type==a.db.Relationships.CONTAINS?o.attr("marker-start","url("+r.SY.getUrl(w.arrowMarkerAbsolute)+"#"+t.type+"_line_ending)"):(o.attr("stroke-dasharray","10,7"),o.attr("marker-end","url("+r.SY.getUrl(w.arrowMarkerAbsolute)+"#"+v.ReqMarkers.ARROW+"_line_ending)")),C(e,o,w,`<<${t.type}>>`)},"drawRelationshipFromLayout"),M=(0,r.eW)((e,t,i)=>{e.forEach((e,n)=>{n=V(n),r.cM.info("Added new requirement: ",n);let s=i.append("g").attr("id",n),a="req-"+n,l=q(s,a),h=[],o=$(s,n+"_title",[`<<${e.type}>>`,`${e.name}`]);h.push(o.titleNode),h.push(O(s,n+"_body",[`Id: ${e.id}`,`Text: ${e.text}`,`Risk: ${e.risk}`,`Verification: ${e.verifyMethod}`],o.y));let c=l.node().getBBox();t.setNode(n,{width:c.width,height:c.height,shape:"rect",id:n})})},"drawReqs"),F=(0,r.eW)((e,t,i)=>{e.forEach((e,r)=>{let n=V(r),s=i.append("g").attr("id",n),a="element-"+n,l=q(s,a),h=[],o=$(s,a+"_title",["<<Element>>",`${r}`]);h.push(o.titleNode),h.push(O(s,a+"_body",[`Type: ${e.type||"Not Specified"}`,`Doc Ref: ${e.docRef||"None"}`],o.y));let c=l.node().getBBox();t.setNode(n,{width:c.width,height:c.height,shape:"rect",id:n})})},"drawElements"),D=(0,r.eW)((e,t)=>(e.forEach(function(e){let i=V(e.src),r=V(e.dst);t.setEdge(i,r,{relationship:e})}),e),"addRelationships"),P=(0,r.eW)(function(e,t){t.nodes().forEach(function(i){void 0!==i&&void 0!==t.node(i)&&(e.select("#"+i),e.select("#"+i).attr("transform","translate("+(t.node(i).x-t.node(i).width/2)+","+(t.node(i).y-t.node(i).height/2)+" )"))})},"adjustEntities"),V=(0,r.eW)(e=>e.replace(/\s/g,"").replace(/\./g,"_"),"elementString"),Y={parser:l,db:T,renderer:{draw:(0,r.eW)((e,t,i,l)=>{let h;w=(0,r.nV)().requirement;let o=w.securityLevel;"sandbox"===o&&(h=(0,n.Ys)("#i"+t));let c="sandbox"===o?(0,n.Ys)(h.nodes()[0].contentDocument.body):(0,n.Ys)("body"),u=c.select(`[id='${t}']`);v.insertLineEndings(u,w);let d=new a.k({multigraph:!1,compound:!1,directed:!0}).setGraph({rankdir:w.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}}),y=l.db.getRequirements(),p=l.db.getElements(),_=l.db.getRelationships();M(y,d,u),F(p,d,u),D(_,d),(0,s.bK)(d),P(u,d),_.forEach(function(e){L(u,e,d,t,l)});let g=w.rect_padding,E=u.node().getBBox(),R=E.width+2*g,m=E.height+2*g;(0,r.v2)(u,m,R,w.useMaxWidth),u.attr("viewBox",`${E.x-g} ${E.y-g} ${R} ${m}`)},"draw")},styles:x}}}]);