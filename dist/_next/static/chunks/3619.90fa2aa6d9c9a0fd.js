"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3619],{3619:function(t,e,r){r.d(e,{diagram:function(){return L}});var i=r(5478),a=r(4218);r(7484),r(7967),r(7856);var c=function(){var o=function(t,e,r,i){for(r=r||{},i=t.length;i--;r[t[i]]=e);return r},t=[1,3],e=[1,6],r=[1,4],i=[1,5],a=[2,5],c=[1,12],s=[5,7,13,19,21,23,24,26,28,31,36,39,46],n=[7,13,19,21,23,24,26,28,31,36,39],l=[7,12,13,19,21,23,24,26,28,31,36,39],h=[7,13,46],m=[1,42],u=[1,41],y=[7,13,29,32,34,37,46],g=[1,55],p=[1,56],d=[1,57],b=[7,13,32,34,41,46],f={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,GG:5,document:6,EOF:7,":":8,DIR:9,options:10,body:11,OPT:12,NL:13,line:14,statement:15,commitStatement:16,mergeStatement:17,cherryPickStatement:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,section:24,branchStatement:25,CHECKOUT:26,ref:27,BRANCH:28,ORDER:29,NUM:30,CHERRY_PICK:31,COMMIT_ID:32,STR:33,COMMIT_TAG:34,EMPTYSTR:35,MERGE:36,COMMIT_TYPE:37,commitType:38,COMMIT:39,commit_arg:40,COMMIT_MSG:41,NORMAL:42,REVERSE:43,HIGHLIGHT:44,ID:45,";":46,$accept:0,$end:1},terminals_:{2:"error",5:"GG",7:"EOF",8:":",9:"DIR",12:"OPT",13:"NL",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"section",26:"CHECKOUT",28:"BRANCH",29:"ORDER",30:"NUM",31:"CHERRY_PICK",32:"COMMIT_ID",33:"STR",34:"COMMIT_TAG",35:"EMPTYSTR",36:"MERGE",37:"COMMIT_TYPE",39:"COMMIT",41:"COMMIT_MSG",42:"NORMAL",43:"REVERSE",44:"HIGHLIGHT",45:"ID",46:";"},productions_:[0,[3,2],[3,3],[3,4],[3,5],[6,0],[6,2],[10,2],[10,1],[11,0],[11,2],[14,2],[14,1],[15,1],[15,1],[15,1],[15,2],[15,2],[15,1],[15,1],[15,1],[15,2],[25,2],[25,4],[18,3],[18,5],[18,5],[18,5],[18,5],[17,2],[17,4],[17,4],[17,4],[17,6],[17,6],[17,6],[17,6],[17,6],[17,6],[17,8],[17,8],[17,8],[17,8],[17,8],[17,8],[16,2],[16,3],[16,3],[16,5],[16,5],[16,3],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,3],[16,5],[16,5],[16,5],[16,5],[16,5],[16,5],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,7],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[40,0],[40,1],[38,1],[38,1],[38,1],[27,1],[27,1],[4,1],[4,1],[4,1]],performAction:function(t,e,r,i,a,c,s){var n=c.length-1;switch(a){case 2:return c[n];case 3:return c[n-1];case 4:return i.setDirection(c[n-3]),c[n-1];case 6:i.setOptions(c[n-1]),this.$=c[n];break;case 7:c[n-1]+=c[n],this.$=c[n-1];break;case 9:this.$=[];break;case 10:c[n-1].push(c[n]),this.$=c[n-1];break;case 11:this.$=c[n-1];break;case 16:this.$=c[n].trim(),i.setAccTitle(this.$);break;case 17:case 18:this.$=c[n].trim(),i.setAccDescription(this.$);break;case 19:i.addSection(c[n].substr(8)),this.$=c[n].substr(8);break;case 21:i.checkout(c[n]);break;case 22:i.branch(c[n]);break;case 23:i.branch(c[n-2],c[n]);break;case 24:i.cherryPick(c[n],"",void 0);break;case 25:i.cherryPick(c[n-2],"",c[n]);break;case 26:case 28:i.cherryPick(c[n-2],"","");break;case 27:i.cherryPick(c[n],"",c[n-2]);break;case 29:i.merge(c[n],"","","");break;case 30:i.merge(c[n-2],c[n],"","");break;case 31:i.merge(c[n-2],"",c[n],"");break;case 32:i.merge(c[n-2],"","",c[n]);break;case 33:i.merge(c[n-4],c[n],"",c[n-2]);break;case 34:i.merge(c[n-4],"",c[n],c[n-2]);break;case 35:i.merge(c[n-4],"",c[n-2],c[n]);break;case 36:i.merge(c[n-4],c[n-2],c[n],"");break;case 37:i.merge(c[n-4],c[n-2],"",c[n]);break;case 38:i.merge(c[n-4],c[n],c[n-2],"");break;case 39:i.merge(c[n-6],c[n-4],c[n-2],c[n]);break;case 40:i.merge(c[n-6],c[n],c[n-4],c[n-2]);break;case 41:i.merge(c[n-6],c[n-4],c[n],c[n-2]);break;case 42:i.merge(c[n-6],c[n-2],c[n-4],c[n]);break;case 43:i.merge(c[n-6],c[n],c[n-2],c[n-4]);break;case 44:i.merge(c[n-6],c[n-2],c[n],c[n-4]);break;case 45:i.commit(c[n]);break;case 46:i.commit("","",i.commitType.NORMAL,c[n]);break;case 47:i.commit("","",c[n],"");break;case 48:i.commit("","",c[n],c[n-2]);break;case 49:i.commit("","",c[n-2],c[n]);break;case 50:i.commit("",c[n],i.commitType.NORMAL,"");break;case 51:i.commit("",c[n-2],i.commitType.NORMAL,c[n]);break;case 52:i.commit("",c[n],i.commitType.NORMAL,c[n-2]);break;case 53:i.commit("",c[n-2],c[n],"");break;case 54:i.commit("",c[n],c[n-2],"");break;case 55:i.commit("",c[n-4],c[n-2],c[n]);break;case 56:i.commit("",c[n-4],c[n],c[n-2]);break;case 57:i.commit("",c[n-2],c[n-4],c[n]);break;case 58:i.commit("",c[n],c[n-4],c[n-2]);break;case 59:i.commit("",c[n],c[n-2],c[n-4]);break;case 60:i.commit("",c[n-2],c[n],c[n-4]);break;case 61:i.commit(c[n],"",i.commitType.NORMAL,"");break;case 62:i.commit(c[n],"",i.commitType.NORMAL,c[n-2]);break;case 63:i.commit(c[n-2],"",i.commitType.NORMAL,c[n]);break;case 64:i.commit(c[n-2],"",c[n],"");break;case 65:i.commit(c[n],"",c[n-2],"");break;case 66:i.commit(c[n],c[n-2],i.commitType.NORMAL,"");break;case 67:i.commit(c[n-2],c[n],i.commitType.NORMAL,"");break;case 68:i.commit(c[n-4],"",c[n-2],c[n]);break;case 69:i.commit(c[n-4],"",c[n],c[n-2]);break;case 70:i.commit(c[n-2],"",c[n-4],c[n]);break;case 71:i.commit(c[n],"",c[n-4],c[n-2]);break;case 72:i.commit(c[n],"",c[n-2],c[n-4]);break;case 73:i.commit(c[n-2],"",c[n],c[n-4]);break;case 74:i.commit(c[n-4],c[n],c[n-2],"");break;case 75:i.commit(c[n-4],c[n-2],c[n],"");break;case 76:i.commit(c[n-2],c[n],c[n-4],"");break;case 77:i.commit(c[n],c[n-2],c[n-4],"");break;case 78:i.commit(c[n],c[n-4],c[n-2],"");break;case 79:i.commit(c[n-2],c[n-4],c[n],"");break;case 80:i.commit(c[n-4],c[n],i.commitType.NORMAL,c[n-2]);break;case 81:i.commit(c[n-4],c[n-2],i.commitType.NORMAL,c[n]);break;case 82:i.commit(c[n-2],c[n],i.commitType.NORMAL,c[n-4]);break;case 83:i.commit(c[n],c[n-2],i.commitType.NORMAL,c[n-4]);break;case 84:i.commit(c[n],c[n-4],i.commitType.NORMAL,c[n-2]);break;case 85:i.commit(c[n-2],c[n-4],i.commitType.NORMAL,c[n]);break;case 86:i.commit(c[n-6],c[n-4],c[n-2],c[n]);break;case 87:i.commit(c[n-6],c[n-4],c[n],c[n-2]);break;case 88:i.commit(c[n-6],c[n-2],c[n-4],c[n]);break;case 89:i.commit(c[n-6],c[n],c[n-4],c[n-2]);break;case 90:i.commit(c[n-6],c[n-2],c[n],c[n-4]);break;case 91:i.commit(c[n-6],c[n],c[n-2],c[n-4]);break;case 92:i.commit(c[n-4],c[n-6],c[n-2],c[n]);break;case 93:i.commit(c[n-4],c[n-6],c[n],c[n-2]);break;case 94:i.commit(c[n-2],c[n-6],c[n-4],c[n]);break;case 95:i.commit(c[n],c[n-6],c[n-4],c[n-2]);break;case 96:i.commit(c[n-2],c[n-6],c[n],c[n-4]);break;case 97:i.commit(c[n],c[n-6],c[n-2],c[n-4]);break;case 98:i.commit(c[n],c[n-4],c[n-2],c[n-6]);break;case 99:i.commit(c[n-2],c[n-4],c[n],c[n-6]);break;case 100:i.commit(c[n],c[n-2],c[n-4],c[n-6]);break;case 101:i.commit(c[n-2],c[n],c[n-4],c[n-6]);break;case 102:i.commit(c[n-4],c[n-2],c[n],c[n-6]);break;case 103:i.commit(c[n-4],c[n],c[n-2],c[n-6]);break;case 104:i.commit(c[n-2],c[n-4],c[n-6],c[n]);break;case 105:i.commit(c[n],c[n-4],c[n-6],c[n-2]);break;case 106:i.commit(c[n-2],c[n],c[n-6],c[n-4]);break;case 107:i.commit(c[n],c[n-2],c[n-6],c[n-4]);break;case 108:i.commit(c[n-4],c[n-2],c[n-6],c[n]);break;case 109:i.commit(c[n-4],c[n],c[n-6],c[n-2]);break;case 110:this.$="";break;case 111:this.$=c[n];break;case 112:this.$=i.commitType.NORMAL;break;case 113:this.$=i.commitType.REVERSE;break;case 114:this.$=i.commitType.HIGHLIGHT}},table:[{3:1,4:2,5:t,7:e,13:r,46:i},{1:[3]},{3:7,4:2,5:t,7:e,13:r,46:i},{6:8,7:a,8:[1,9],9:[1,10],10:11,13:c},o(s,[2,117]),o(s,[2,118]),o(s,[2,119]),{1:[2,1]},{7:[1,13]},{6:14,7:a,10:11,13:c},{8:[1,15]},o(n,[2,9],{11:16,12:[1,17]}),o(l,[2,8]),{1:[2,2]},{7:[1,18]},{6:19,7:a,10:11,13:c},{7:[2,6],13:[1,22],14:20,15:21,16:23,17:24,18:25,19:[1,26],21:[1,27],23:[1,28],24:[1,29],25:30,26:[1,31],28:[1,35],31:[1,34],36:[1,33],39:[1,32]},o(l,[2,7]),{1:[2,3]},{7:[1,36]},o(n,[2,10]),{4:37,7:e,13:r,46:i},o(n,[2,12]),o(h,[2,13]),o(h,[2,14]),o(h,[2,15]),{20:[1,38]},{22:[1,39]},o(h,[2,18]),o(h,[2,19]),o(h,[2,20]),{27:40,33:m,45:u},o(h,[2,110],{40:43,32:[1,46],33:[1,48],34:[1,44],37:[1,45],41:[1,47]}),{27:49,33:m,45:u},{32:[1,50],34:[1,51]},{27:52,33:m,45:u},{1:[2,4]},o(n,[2,11]),o(h,[2,16]),o(h,[2,17]),o(h,[2,21]),o(y,[2,115]),o(y,[2,116]),o(h,[2,45]),{33:[1,53]},{38:54,42:g,43:p,44:d},{33:[1,58]},{33:[1,59]},o(h,[2,111]),o(h,[2,29],{32:[1,60],34:[1,62],37:[1,61]}),{33:[1,63]},{33:[1,64],35:[1,65]},o(h,[2,22],{29:[1,66]}),o(h,[2,46],{32:[1,68],37:[1,67],41:[1,69]}),o(h,[2,47],{32:[1,71],34:[1,70],41:[1,72]}),o(b,[2,112]),o(b,[2,113]),o(b,[2,114]),o(h,[2,50],{34:[1,73],37:[1,74],41:[1,75]}),o(h,[2,61],{32:[1,78],34:[1,76],37:[1,77]}),{33:[1,79]},{38:80,42:g,43:p,44:d},{33:[1,81]},o(h,[2,24],{34:[1,82]}),{32:[1,83]},{32:[1,84]},{30:[1,85]},{38:86,42:g,43:p,44:d},{33:[1,87]},{33:[1,88]},{33:[1,89]},{33:[1,90]},{33:[1,91]},{33:[1,92]},{38:93,42:g,43:p,44:d},{33:[1,94]},{33:[1,95]},{38:96,42:g,43:p,44:d},{33:[1,97]},o(h,[2,30],{34:[1,99],37:[1,98]}),o(h,[2,31],{32:[1,101],34:[1,100]}),o(h,[2,32],{32:[1,102],37:[1,103]}),{33:[1,104],35:[1,105]},{33:[1,106]},{33:[1,107]},o(h,[2,23]),o(h,[2,48],{32:[1,108],41:[1,109]}),o(h,[2,52],{37:[1,110],41:[1,111]}),o(h,[2,62],{32:[1,113],37:[1,112]}),o(h,[2,49],{32:[1,114],41:[1,115]}),o(h,[2,54],{34:[1,116],41:[1,117]}),o(h,[2,65],{32:[1,119],34:[1,118]}),o(h,[2,51],{37:[1,120],41:[1,121]}),o(h,[2,53],{34:[1,122],41:[1,123]}),o(h,[2,66],{34:[1,125],37:[1,124]}),o(h,[2,63],{32:[1,127],37:[1,126]}),o(h,[2,64],{32:[1,129],34:[1,128]}),o(h,[2,67],{34:[1,131],37:[1,130]}),{38:132,42:g,43:p,44:d},{33:[1,133]},{33:[1,134]},{33:[1,135]},{33:[1,136]},{38:137,42:g,43:p,44:d},o(h,[2,25]),o(h,[2,26]),o(h,[2,27]),o(h,[2,28]),{33:[1,138]},{33:[1,139]},{38:140,42:g,43:p,44:d},{33:[1,141]},{38:142,42:g,43:p,44:d},{33:[1,143]},{33:[1,144]},{33:[1,145]},{33:[1,146]},{33:[1,147]},{33:[1,148]},{33:[1,149]},{38:150,42:g,43:p,44:d},{33:[1,151]},{33:[1,152]},{33:[1,153]},{38:154,42:g,43:p,44:d},{33:[1,155]},{38:156,42:g,43:p,44:d},{33:[1,157]},{33:[1,158]},{33:[1,159]},{38:160,42:g,43:p,44:d},{33:[1,161]},o(h,[2,36],{34:[1,162]}),o(h,[2,37],{37:[1,163]}),o(h,[2,35],{32:[1,164]}),o(h,[2,38],{34:[1,165]}),o(h,[2,33],{37:[1,166]}),o(h,[2,34],{32:[1,167]}),o(h,[2,59],{41:[1,168]}),o(h,[2,72],{32:[1,169]}),o(h,[2,60],{41:[1,170]}),o(h,[2,83],{37:[1,171]}),o(h,[2,73],{32:[1,172]}),o(h,[2,82],{37:[1,173]}),o(h,[2,58],{41:[1,174]}),o(h,[2,71],{32:[1,175]}),o(h,[2,57],{41:[1,176]}),o(h,[2,77],{34:[1,177]}),o(h,[2,70],{32:[1,178]}),o(h,[2,76],{34:[1,179]}),o(h,[2,56],{41:[1,180]}),o(h,[2,84],{37:[1,181]}),o(h,[2,55],{41:[1,182]}),o(h,[2,78],{34:[1,183]}),o(h,[2,79],{34:[1,184]}),o(h,[2,85],{37:[1,185]}),o(h,[2,69],{32:[1,186]}),o(h,[2,80],{37:[1,187]}),o(h,[2,68],{32:[1,188]}),o(h,[2,74],{34:[1,189]}),o(h,[2,75],{34:[1,190]}),o(h,[2,81],{37:[1,191]}),{33:[1,192]},{38:193,42:g,43:p,44:d},{33:[1,194]},{33:[1,195]},{38:196,42:g,43:p,44:d},{33:[1,197]},{33:[1,198]},{33:[1,199]},{33:[1,200]},{38:201,42:g,43:p,44:d},{33:[1,202]},{38:203,42:g,43:p,44:d},{33:[1,204]},{33:[1,205]},{33:[1,206]},{33:[1,207]},{33:[1,208]},{33:[1,209]},{33:[1,210]},{38:211,42:g,43:p,44:d},{33:[1,212]},{33:[1,213]},{33:[1,214]},{38:215,42:g,43:p,44:d},{33:[1,216]},{38:217,42:g,43:p,44:d},{33:[1,218]},{33:[1,219]},{33:[1,220]},{38:221,42:g,43:p,44:d},o(h,[2,39]),o(h,[2,41]),o(h,[2,40]),o(h,[2,42]),o(h,[2,44]),o(h,[2,43]),o(h,[2,100]),o(h,[2,101]),o(h,[2,98]),o(h,[2,99]),o(h,[2,103]),o(h,[2,102]),o(h,[2,107]),o(h,[2,106]),o(h,[2,105]),o(h,[2,104]),o(h,[2,109]),o(h,[2,108]),o(h,[2,97]),o(h,[2,96]),o(h,[2,95]),o(h,[2,94]),o(h,[2,92]),o(h,[2,93]),o(h,[2,91]),o(h,[2,90]),o(h,[2,89]),o(h,[2,88]),o(h,[2,86]),o(h,[2,87])],defaultActions:{7:[2,1],13:[2,2],18:[2,3],36:[2,4]},parseError:function(t,e){if(e.recoverable)this.trace(t);else{var r=Error(t);throw r.hash=e,r}},parse:function(t){var e=this,r=[0],i=[],a=[null],c=[],s=this.table,n="",l=0,h=0,m=c.slice.call(arguments,1),u=Object.create(this.lexer),y={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(y.yy[g]=this.yy[g]);u.setInput(t,y.yy),y.yy.lexer=u,y.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var p=u.yylloc;c.push(p);var d=u.options&&u.options.ranges;"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var b,f,k,$,x,_,E,w,T={};;){if(f=r[r.length-1],this.defaultActions[f]?k=this.defaultActions[f]:(null==b&&(b=function(){var t;return"number"!=typeof(t=i.pop()||u.lex()||1)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}()),k=s[f]&&s[f][b]),void 0===k||!k.length||!k[0]){var L="";for(x in w=[],s[f])this.terminals_[x]&&x>2&&w.push("'"+this.terminals_[x]+"'");L=u.showPosition?"Parse error on line "+(l+1)+":\n"+u.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(L,{text:u.match,token:this.terminals_[b]||b,line:u.yylineno,loc:p,expected:w})}if(k[0]instanceof Array&&k.length>1)throw Error("Parse Error: multiple actions possible at state: "+f+", token: "+b);switch(k[0]){case 1:r.push(b),a.push(u.yytext),c.push(u.yylloc),r.push(k[1]),b=null,h=u.yyleng,n=u.yytext,l=u.yylineno,p=u.yylloc;break;case 2:if(_=this.productions_[k[1]][1],T.$=a[a.length-_],T._$={first_line:c[c.length-(_||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(_||1)].first_column,last_column:c[c.length-1].last_column},d&&(T._$.range=[c[c.length-(_||1)].range[0],c[c.length-1].range[1]]),void 0!==($=this.performAction.apply(T,[n,h,l,y.yy,k[1],a,c].concat(m))))return $;_&&(r=r.slice(0,-1*_*2),a=a.slice(0,-1*_),c=c.slice(0,-1*_)),r.push(this.productions_[k[1]][0]),a.push(T.$),c.push(T._$),E=s[r[r.length-2]][r[r.length-1]],r.push(E);break;case 3:return!0}}return!0}};function Parser(){this.yy={}}return f.lexer={EOF:1,parseError:function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,r=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===i.length?this.yylloc.first_column:0)+i[i.length-r.length].length-r[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var r,i,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],r=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack)for(var c in a)this[c]=a[c];return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,r,i,a=this._currentRules(),c=0;c<a.length;c++)if((r=this._input.match(this.rules[a[c]]))&&(!e||r[0].length>e[0].length)){if(e=r,i=c,this.options.backtrack_lexer){if(!1!==(t=this.test_match(r,a[c])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,a[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,r,i){switch(r){case 0:return this.begin("acc_title"),19;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),21;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:case 29:case 33:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 13;case 8:case 9:break;case 10:return 5;case 11:return 39;case 12:return 32;case 13:return 37;case 14:return 41;case 15:return 42;case 16:return 43;case 17:return 44;case 18:return 34;case 19:return 28;case 20:return 29;case 21:return 36;case 22:return 31;case 23:return 26;case 24:case 25:return 9;case 26:return 8;case 27:return"CARET";case 28:this.begin("options");break;case 30:return 12;case 31:return 35;case 32:this.begin("string");break;case 34:return 33;case 35:return 30;case 36:return 45;case 37:return 7}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:TB\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},options:{rules:[29,30],inclusive:!1},string:{rules:[33,34],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,32,35,36,37,38],inclusive:!0}}},Parser.prototype=f,f.Parser=Parser,new Parser}();c.parser=c;let s=(0,i.c)().gitGraph.mainBranchName,n=(0,i.c)().gitGraph.mainBranchOrder,l={},h=null,m={};m[s]={name:s,order:n};let u={};u[s]=h;let y=s,g="LR",p=0;function getId(){return(0,i.x)({length:7})}let d={},checkout=function(t){if(void 0===u[t=i.e.sanitizeText(t,(0,i.c)())]){let e=Error('Trying to checkout branch which is not yet created. (Help try using "branch '+t+'")');throw e.hash={text:"checkout "+t,token:"checkout "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+t+'"']},e}{y=t;let e=u[y];h=l[e]}};function upsert(t,e,r){let i=t.indexOf(e);-1===i?t.push(r):t.splice(i,1,r)}let getCommitsArray=function(){let t=Object.keys(l).map(function(t){return l[t]});return t.forEach(function(t){i.l.debug(t.id)}),t.sort((t,e)=>t.seq-e.seq),t},b={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},f={getConfig:()=>(0,i.c)().gitGraph,setDirection:function(t){g=t},setOptions:function(t){i.l.debug("options str",t),t=(t=t&&t.trim())||"{}";try{d=JSON.parse(t)}catch(t){i.l.error("error while parsing gitGraph options",t.message)}},getOptions:function(){return d},commit:function(t,e,r,a){i.l.debug("Entering commit:",t,e,r,a),e=i.e.sanitizeText(e,(0,i.c)()),t=i.e.sanitizeText(t,(0,i.c)()),a=i.e.sanitizeText(a,(0,i.c)());let c={id:e||p+"-"+getId(),message:t,seq:p++,type:r||b.NORMAL,tag:a||"",parents:null==h?[]:[h.id],branch:y};h=c,l[c.id]=c,u[y]=c.id,i.l.debug("in pushCommit "+c.id)},branch:function(t,e){if(void 0===u[t=i.e.sanitizeText(t,(0,i.c)())])u[t]=null!=h?h.id:null,m[t]={name:t,order:e?parseInt(e,10):null},checkout(t),i.l.debug("in createBranch");else{let e=Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+t+'")');throw e.hash={text:"branch "+t,token:"branch "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+t+'"']},e}},merge:function(t,e,r,a){t=i.e.sanitizeText(t,(0,i.c)()),e=i.e.sanitizeText(e,(0,i.c)());let c=l[u[y]],s=l[u[t]];if(y===t){let e=Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},e}if(void 0!==c&&c){if(void 0===u[t]){let e=Error('Incorrect usage of "merge". Branch to be merged ('+t+") does not exist");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+t]},e}if(void 0!==s&&s){if(c===s){let e=Error('Incorrect usage of "merge". Both branches have same head');throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},e}if(e&&void 0!==l[e]){let i=Error('Incorrect usage of "merge". Commit with id:'+e+" already exists, use different custom Id");throw i.hash={text:"merge "+t+e+r+a,token:"merge "+t+e+r+a,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+t+" "+e+"_UNIQUE "+r+" "+a]},i}}else{let e=Error('Incorrect usage of "merge". Branch to be merged ('+t+") has no commits");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},e}}else{let e=Error('Incorrect usage of "merge". Current branch ('+y+")has no commits");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},e}let n={id:e||p+"-"+getId(),message:"merged branch "+t+" into "+y,seq:p++,parents:[null==h?null:h.id,u[t]],branch:y,type:b.MERGE,customType:r,customId:!!e,tag:a||""};h=n,l[n.id]=n,u[y]=n.id,i.l.debug(u),i.l.debug("in mergeBranch")},cherryPick:function(t,e,r){if(i.l.debug("Entering cherryPick:",t,e,r),t=i.e.sanitizeText(t,(0,i.c)()),e=i.e.sanitizeText(e,(0,i.c)()),r=i.e.sanitizeText(r,(0,i.c)()),!t||void 0===l[t]){let r=Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw r.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},r}let a=l[t],c=a.branch;if(a.type===b.MERGE){let r=Error('Incorrect usage of "cherryPick". Source commit should not be a merge commit');throw r.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},r}if(!e||void 0===l[e]){if(c===y){let r=Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw r.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},r}let s=l[u[y]];if(void 0===s||!s){let r=Error('Incorrect usage of "cherry-pick". Current branch ('+y+")has no commits");throw r.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},r}let n={id:p+"-"+getId(),message:"cherry-picked "+a+" into "+y,seq:p++,parents:[null==h?null:h.id,a.id],branch:y,type:b.CHERRY_PICK,tag:r??"cherry-pick:"+a.id};h=n,l[n.id]=n,u[y]=n.id,i.l.debug(u),i.l.debug("in cherryPick")}},checkout,prettyPrint:function(){i.l.debug(l);let t=getCommitsArray()[0];!function prettyPrintCommitHistory(t){let e=t.reduce((t,e)=>t.seq>e.seq?t:e,t[0]),r="";t.forEach(function(t){t===e?r+="	*":r+="	|"});let a=[r,e.id,e.seq];for(let t in u)u[t]===e.id&&a.push(t);if(i.l.debug(a.join(" ")),e.parents&&2==e.parents.length){let r=l[e.parents[0]];upsert(t,e,r),t.push(l[e.parents[1]])}else{if(0==e.parents.length)return;let r=l[e.parents];upsert(t,e,r)}prettyPrintCommitHistory(t=function(t,e){let r=Object.create(null);return t.reduce((t,i)=>{let a=e(i);return r[a]||(r[a]=!0,t.push(i)),t},[])}(t,t=>t.id))}([t])},clear:function(){l={},h=null;let t=(0,i.c)().gitGraph.mainBranchName,e=(0,i.c)().gitGraph.mainBranchOrder;(u={})[t]=null,(m={})[t]={name:t,order:e},y=t,p=0,(0,i.t)()},getBranchesAsObjArray:function(){let t=Object.values(m).map((t,e)=>null!==t.order?t:{...t,order:parseFloat(`0.${e}`,10)}).sort((t,e)=>t.order-e.order).map(({name:t})=>({name:t}));return t},getBranches:function(){return u},getCommits:function(){return l},getCommitsArray,getCurrentBranch:function(){return y},getDirection:function(){return g},getHead:function(){return h},setAccTitle:i.s,getAccTitle:i.g,getAccDescription:i.a,setAccDescription:i.b,setDiagramTitle:i.q,getDiagramTitle:i.r,commitType:b},k={},$={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},x={},_={},E=[],w=0,T="LR",clear=()=>{x={},_={},k={},w=0,E=[],T="LR"},drawText=t=>{let e=document.createElementNS("http://www.w3.org/2000/svg","text");for(let r of"string"==typeof t?t.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(t)?t:[]){let t=document.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","0"),t.setAttribute("class","row"),t.textContent=r.trim(),e.appendChild(t)}return e},drawCommits=(t,e,r)=>{let a=(0,i.c)().gitGraph,c=t.append("g").attr("class","commit-bullets"),s=t.append("g").attr("class","commit-labels"),n=0;"TB"===T&&(n=30);let l=Object.keys(e),h=l.sort((t,r)=>e[t].seq-e[r].seq);h.forEach(t=>{let i=e[t],l="TB"===T?n+10:x[i.branch].pos,h="TB"===T?x[i.branch].pos:n+10;if(r){let t;let e=void 0!==i.customType&&""!==i.customType?i.customType:i.type;switch(e){case $.NORMAL:t="commit-normal";break;case $.REVERSE:t="commit-reverse";break;case $.HIGHLIGHT:t="commit-highlight";break;case $.MERGE:t="commit-merge";break;case $.CHERRY_PICK:t="commit-cherry-pick";break;default:t="commit-normal"}if(e===$.HIGHLIGHT){let e=c.append("rect");e.attr("x",h-10),e.attr("y",l-10),e.attr("height",20),e.attr("width",20),e.attr("class",`commit ${i.id} commit-highlight${x[i.branch].index%8} ${t}-outer`),c.append("rect").attr("x",h-6).attr("y",l-6).attr("height",12).attr("width",12).attr("class",`commit ${i.id} commit${x[i.branch].index%8} ${t}-inner`)}else if(e===$.CHERRY_PICK)c.append("circle").attr("cx",h).attr("cy",l).attr("r",10).attr("class",`commit ${i.id} ${t}`),c.append("circle").attr("cx",h-3).attr("cy",l+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${i.id} ${t}`),c.append("circle").attr("cx",h+3).attr("cy",l+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${i.id} ${t}`),c.append("line").attr("x1",h+3).attr("y1",l+1).attr("x2",h).attr("y2",l-5).attr("stroke","#fff").attr("class",`commit ${i.id} ${t}`),c.append("line").attr("x1",h-3).attr("y1",l+1).attr("x2",h).attr("y2",l-5).attr("stroke","#fff").attr("class",`commit ${i.id} ${t}`);else{let r=c.append("circle");if(r.attr("cx",h),r.attr("cy",l),r.attr("r",i.type===$.MERGE?9:10),r.attr("class",`commit ${i.id} commit${x[i.branch].index%8}`),e===$.MERGE){let e=c.append("circle");e.attr("cx",h),e.attr("cy",l),e.attr("r",6),e.attr("class",`commit ${t} ${i.id} commit${x[i.branch].index%8}`)}if(e===$.REVERSE){let e=c.append("path");e.attr("d",`M ${h-5},${l-5}L${h+5},${l+5}M${h-5},${l+5}L${h+5},${l-5}`).attr("class",`commit ${t} ${i.id} commit${x[i.branch].index%8}`)}}}if("TB"===T?_[i.id]={x:h,y:n+10}:_[i.id]={x:n+10,y:l},r){if(i.type!==$.CHERRY_PICK&&(i.customId&&i.type===$.MERGE||i.type!==$.MERGE)&&a.showCommitLabel){let t=s.append("g"),e=t.insert("rect").attr("class","commit-label-bkg"),r=t.append("text").attr("x",n).attr("y",l+25).attr("class","commit-label").text(i.id),c=r.node().getBBox();if(e.attr("x",n+10-c.width/2-2).attr("y",l+13.5).attr("width",c.width+4).attr("height",c.height+4),"TB"===T&&(e.attr("x",h-(c.width+16+5)).attr("y",l-12),r.attr("x",h-(c.width+16)).attr("y",l+c.height-12)),"TB"!==T&&r.attr("x",n+10-c.width/2),a.rotateCommitLabel){if("TB"===T)r.attr("transform","rotate(-45, "+h+", "+l+")"),e.attr("transform","rotate(-45, "+h+", "+l+")");else{let e=-7.5-(c.width+10)/25*9.5,r=10+c.width/25*8.5;t.attr("transform","translate("+e+", "+r+") rotate(-45, "+n+", "+l+")")}}}if(i.tag){let t=s.insert("polygon"),e=s.append("circle"),r=s.append("text").attr("y",l-16).attr("class","tag-label").text(i.tag),a=r.node().getBBox();r.attr("x",n+10-a.width/2);let c=a.height/2,m=l-19.2;t.attr("class","tag-label-bkg").attr("points",`
          ${n-a.width/2-2},${m+2}
          ${n-a.width/2-2},${m-2}
          ${n+10-a.width/2-4},${m-c-2}
          ${n+10+a.width/2+4},${m-c-2}
          ${n+10+a.width/2+4},${m+c+2}
          ${n+10-a.width/2-4},${m+c+2}`),e.attr("cx",n-a.width/2+2).attr("cy",m).attr("r",1.5).attr("class","tag-hole"),"TB"===T&&(t.attr("class","tag-label-bkg").attr("points",`
            ${h},${n+2}
            ${h},${n-2}
            ${h+10},${n-c-2}
            ${h+10+a.width+4},${n-c-2}
            ${h+10+a.width+4},${n+c+2}
            ${h+10},${n+c+2}`).attr("transform","translate(12,12) rotate(45, "+h+","+n+")"),e.attr("cx",h+2).attr("cy",n).attr("transform","translate(12,12) rotate(45, "+h+","+n+")"),r.attr("x",h+5).attr("y",n+3).attr("transform","translate(14,14) rotate(45, "+h+","+n+")"))}}(n+=50)>w&&(w=n)})},hasOverlappingCommits=(t,e,r)=>{let i=Object.keys(r),a=i.filter(i=>r[i].branch===e.branch&&r[i].seq>t.seq&&r[i].seq<e.seq);return a.length>0},findLane=(t,e,r=0)=>{let i=t+Math.abs(t-e)/2;if(r>5)return i;if(E.every(t=>Math.abs(t-i)>=10))return E.push(i),i;let a=Math.abs(t-e);return findLane(t,e-a/5,r+1)},drawArrow=(t,e,r,i)=>{let a;let c=_[e.id],s=_[r.id],n=hasOverlappingCommits(e,r,i),l="",h="",m=0,u=0,y=x[r.branch].index;if(n){l="A 10 10, 0, 0, 0,",h="A 10 10, 0, 0, 1,",m=10,u=10,y=x[r.branch].index;let t=c.y<s.y?findLane(c.y,s.y):findLane(s.y,c.y),e=c.x<s.x?findLane(c.x,s.x):findLane(s.x,c.x);a="TB"===T?c.x<s.x?`M ${c.x} ${c.y} L ${e-m} ${c.y} ${h} ${e} ${c.y+u} L ${e} ${s.y-m} ${l} ${e+u} ${s.y} L ${s.x} ${s.y}`:`M ${c.x} ${c.y} L ${e+m} ${c.y} ${l} ${e} ${c.y+u} L ${e} ${s.y-m} ${h} ${e-u} ${s.y} L ${s.x} ${s.y}`:c.y<s.y?`M ${c.x} ${c.y} L ${c.x} ${t-m} ${l} ${c.x+u} ${t} L ${s.x-m} ${t} ${h} ${s.x} ${t+u} L ${s.x} ${s.y}`:`M ${c.x} ${c.y} L ${c.x} ${t+m} ${h} ${c.x+u} ${t} L ${s.x-m} ${t} ${l} ${s.x} ${t-u} L ${s.x} ${s.y}`}else"TB"===T?(c.x<s.x&&(l="A 20 20, 0, 0, 0,",h="A 20 20, 0, 0, 1,",m=20,u=20,y=x[r.branch].index,a=`M ${c.x} ${c.y} L ${s.x-m} ${c.y} ${h} ${s.x} ${c.y+u} L ${s.x} ${s.y}`),c.x>s.x&&(l="A 20 20, 0, 0, 0,",h="A 20 20, 0, 0, 1,",m=20,u=20,y=x[e.branch].index,a=`M ${c.x} ${c.y} L ${c.x} ${s.y-m} ${h} ${c.x-u} ${s.y} L ${s.x} ${s.y}`),c.x===s.x&&(y=x[e.branch].index,a=`M ${c.x} ${c.y} L ${c.x+m} ${c.y} ${l} ${c.x+u} ${s.y+m} L ${s.x} ${s.y}`)):(c.y<s.y&&(l="A 20 20, 0, 0, 0,",m=20,u=20,y=x[r.branch].index,a=`M ${c.x} ${c.y} L ${c.x} ${s.y-m} ${l} ${c.x+u} ${s.y} L ${s.x} ${s.y}`),c.y>s.y&&(l="A 20 20, 0, 0, 0,",m=20,u=20,y=x[e.branch].index,a=`M ${c.x} ${c.y} L ${s.x-m} ${c.y} ${l} ${s.x} ${c.y-u} L ${s.x} ${s.y}`),c.y===s.y&&(y=x[e.branch].index,a=`M ${c.x} ${c.y} L ${c.x} ${s.y-m} ${l} ${c.x+u} ${s.y} L ${s.x} ${s.y}`));t.append("path").attr("d",a).attr("class","arrow arrow"+y%8)},drawArrows=(t,e)=>{let r=t.append("g").attr("class","commit-arrows");Object.keys(e).forEach(t=>{let i=e[t];i.parents&&i.parents.length>0&&i.parents.forEach(t=>{drawArrow(r,e[t],i,e)})})},drawBranches=(t,e)=>{let r=(0,i.c)().gitGraph,a=t.append("g");e.forEach((t,e)=>{let i=e%8,c=x[t.name].pos,s=a.append("line");s.attr("x1",0),s.attr("y1",c),s.attr("x2",w),s.attr("y2",c),s.attr("class","branch branch"+i),"TB"===T&&(s.attr("y1",30),s.attr("x1",c),s.attr("y2",w),s.attr("x2",c)),E.push(c);let n=t.name,l=drawText(n),h=a.insert("rect"),m=a.insert("g").attr("class","branchLabel"),u=m.insert("g").attr("class","label branch-label"+i);u.node().appendChild(l);let y=l.getBBox();h.attr("class","branchLabelBkg label"+i).attr("rx",4).attr("ry",4).attr("x",-y.width-4-(!0===r.rotateCommitLabel?30:0)).attr("y",-y.height/2+8).attr("width",y.width+18).attr("height",y.height+4),u.attr("transform","translate("+(-y.width-14-(!0===r.rotateCommitLabel?30:0))+", "+(c-y.height/2-1)+")"),"TB"===T&&(h.attr("x",c-y.width/2-10).attr("y",0),u.attr("transform","translate("+(c-y.width/2-5)+", 0)")),"TB"!==T&&h.attr("transform","translate(-19, "+(c-y.height/2)+")")})},L={parser:c,db:f,renderer:{draw:function(t,e,r,c){clear();let s=(0,i.c)(),n=s.gitGraph;i.l.debug("in gitgraph renderer",t+"\n","id:",e,r),k=c.db.getCommits();let l=c.db.getBranchesAsObjArray();T=c.db.getDirection();let h=(0,a.Ys)(`[id="${e}"]`),m=0;l.forEach((t,e)=>{let r=drawText(t.name),i=h.append("g"),a=i.insert("g").attr("class","branchLabel"),c=a.insert("g").attr("class","label branch-label");c.node().appendChild(r);let s=r.getBBox();x[t.name]={pos:m,index:e},m+=50+(n.rotateCommitLabel?40:0)+("TB"===T?s.width/2:0),c.remove(),a.remove(),i.remove()}),drawCommits(h,k,!1),n.showBranches&&drawBranches(h,l),drawArrows(h,k),drawCommits(h,k,!0),i.u.insertTitle(h,"gitTitleText",n.titleTopMargin,c.db.getDiagramTitle()),(0,i.y)(void 0,h,n.diagramPadding,n.useMaxWidth??s.useMaxWidth)}},styles:t=>`
  .commit-id,
  .commit-msg,
  .branch-label {
    fill: lightgrey;
    color: lightgrey;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  ${[0,1,2,3,4,5,6,7].map(e=>`
        .branch-label${e} { fill: ${t["gitBranchLabel"+e]}; }
        .commit${e} { stroke: ${t["git"+e]}; fill: ${t["git"+e]}; }
        .commit-highlight${e} { stroke: ${t["gitInv"+e]}; fill: ${t["gitInv"+e]}; }
        .label${e}  { fill: ${t["git"+e]}; }
        .arrow${e} { stroke: ${t["git"+e]}; }
        `).join("\n")}

  .branch {
    stroke-width: 1;
    stroke: ${t.lineColor};
    stroke-dasharray: 2;
  }
  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}
  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }
  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}
  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }
  .tag-hole { fill: ${t.textColor}; }

  .commit-merge {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }
  .commit-reverse {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
    stroke-width: 3;
  }
  .commit-highlight-outer {
  }
  .commit-highlight-inner {
    stroke: ${t.primaryColor};
    fill: ${t.primaryColor};
  }

  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}
  .gitTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
`}}}]);