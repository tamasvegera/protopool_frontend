(function(t){function e(e){for(var n,r,c=e[0],o=e[1],l=e[2],v=0,d=[];v<c.length;v++)r=c[v],i[r]&&d.push(i[r][0]),i[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";var n=a("c21b"),i=a.n(n);i.a},"05ee":function(t,e,a){"use strict";var n=a("32f6"),i=a.n(n);i.a},"307c":function(t,e,a){"use strict";var n=a("ef14"),i=a.n(n);i.a},"32f6":function(t,e,a){},"71a2":function(t,e,a){"use strict";var n=a("d0c5"),i=a.n(n);i.a},"73b2":function(t,e,a){"use strict";var n=a("a5f4"),i=a.n(n);i.a},"902e":function(t,e,a){},a5f4:function(t,e,a){},b68d:function(t,e,a){},b812:function(t,e,a){t.exports=a.p+"img/microcoin.cb9db43c.png"},bd39:function(t,e,a){"use strict";var n=a("902e"),i=a.n(n);i.a},c21b:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"header"},[t._m(0),a("div",{staticClass:"warn"},[a("Warning")],1)]),a("div",{staticClass:"content"},[a("MinerCheck"),a("RealTimeData"),a("PoolParameters"),a("MinerExample"),a("Donate")],1),a("div",{staticClass:"footer"},[t._v("\n        Pool created by vegtamas ©2018\n    ")])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headline"},[n("div",{staticClass:"brand color-light"},[n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:a("b812"),alt:"microcoin pool"}}),n("span",{staticClass:"microcoin"},[t._v("MicroCoin")]),t._v(" "),n("span",{staticClass:"pool"},[t._v("Pool")])])]),n("div",{staticClass:"nav"},[n("a",{staticClass:"color-light",attrs:{href:"https://microcoin.hu"}},[t._v("MicroCoin")]),n("a",{staticClass:"color-light",attrs:{href:"https://discord.gg/AmhKKcs"}},[t._v("Discord channel")])])])}],r=a("c665"),c=a("dc0a"),o=a("d328"),l=a("11d9"),u=a("9ab4"),v=a("60a3"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"miner-check"},[a("div",{staticClass:"title"},[t._v("\n        Mining statistics\n    ")]),a("div",{staticClass:"check-form"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",size:"28",placeholder:"Pre-dash of your account number"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}}),a("button",{attrs:{type:"button"},on:{click:t.check}},[t._v("Check")])])])},f=[],p=a("aa9a"),h=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.account="",t}return Object(p["a"])(e,[{key:"check",value:function(t){alert(this.account)}}]),Object(c["a"])(e,t),e}(v["b"]);h=u["a"]([v["a"]],h);var m=h,b=m,_=(a("bd39"),a("2877")),C=Object(_["a"])(b,d,f,!1,null,"4143af25",null);C.options.__file="MinerCheck.vue";var y,j=C.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"warning"},[a("div",{staticClass:"serious"},[t._v("\n        The pool is under development, so use it only at your OWN RISK!\n        We don't take any responsibility for any losses.\n        You accept it by connecting to the pool.\n    ")]),t._v("\n    For using the pool you need an account. You can request it for free at "),a("a",{attrs:{href:"https://discord.gg/AmhKKcs"}},[t._v("Discord")]),t._v(".\n")])}],x=Object(v["a"])(y=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(v["b"]))||y,k=x,w=(a("307c"),Object(_["a"])(k,O,g,!1,null,"4431de26",null));w.options.__file="Warning.vue";var P=w.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"parameters"},[a("div",{staticClass:"title"},[t._v("\n        Parameters\n    ")]),a("table",[a("tbody",t._l(t.parameters,function(e){return a("tr",[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.value))])])}))])])},D=[],E=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.parameters=[{name:"Payout",value:"every block after confirmation"},{name:"Confirmation time",value:"10 blocks"},{name:"Algorithm",value:"Pascal"},{name:"TxFee",value:"0.0001 MCC"},{name:"CPU, GPU, RIG (diff: 2)",value:"pool.microcoin.hu:3333"},{name:"Nicehash (diff: 32)",value:"pool.microcoin.hu:3334"},{name:"Username",value:"pre-dash of your account number"},{name:"Password",value:"pool fee in percentage. Valid values: 2-100. Any text or invalid value will set the fee to default 2%."}],t}return Object(c["a"])(e,t),e}(v["b"]);E=u["a"]([v["a"]],E);var $=E,T=$,N=(a("73b2"),Object(_["a"])(T,M,D,!1,null,"64a3fa32",null));N.options.__file="PoolParameters.vue";var R,S=N.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"miner-example"},[a("div",{staticClass:"title"},[t._v("\n            Claymore Dual miner example\n        ")]),a("div",{staticClass:"code"},[a("code",[t._v("\n                EthDcrMiner64.exe -epool eu1.ethermine.org:4444 -ewal 0x64c20f4899aa0389c35a6a64dbefe7d1ce5683e3\n                -epsw x\n                -dcoin pasc -dpool stratum+tcp://pool.microcoin.hu:3333 -dwal xxxxxx -dpsw 5 -dcri 100\n            ")])]),a("div",{staticClass:"warning color-primary"},[t._v("\n            Don't forget to define the algo as Pascal as you can see in the example.\n        ")])]),a("div",{staticClass:"miner-example"},[a("div",{staticClass:"title"},[t._v("\n            SGminer example\n        ")]),a("div",{staticClass:"code"},[a("code",[t._v("\n                sgminer -k pascal -o stratum+tcp://pool.microcoin.hu:3333 -u 1234 -p 5 -I 21 -w 64 -g 2\n            ")])])])])}],K=Object(v["a"])(R=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(v["b"]))||R,I=K,J=(a("d3ae"),Object(_["a"])(I,W,A,!1,null,"7ffd1ac0",null));J.options.__file="MinerExample.vue";var U,G,B=J.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"donate"},[a("div",{staticClass:"title"},[t._v("\n        Donate\n    ")]),a("ul",{staticClass:"addresses"},[a("li",[t._v("\n            MCC: 318291-67\n        ")]),a("li",[t._v("\n            BTC: 16sfNdwCJUMsKLsBHbNoNeDWee6odtkiJC\n        ")])])])}],q=(U=Object(v["a"])(),U(G=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(v["b"]))||G),z=q,H=(a("05ee"),Object(_["a"])(z,F,Y,!1,null,"7be125b8",null));H.options.__file="Donate.vue";var L=H.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"realtime-data"},[a("div",{staticClass:"data-item"},[a("div",{staticClass:"key"},[t._v("\n            Algorithm\n        ")]),a("div",{staticClass:"value"},[t._v("\n            "+t._s(t.data.algorithm)+"\n        ")])]),a("div",{staticClass:"data-item"},[a("div",{staticClass:"key"},[t._v("\n            Network hashrate\n        ")]),a("div",{staticClass:"value"},[t._v("\n            "+t._s(t.data.nethash)+"\n        ")])]),a("div",{staticClass:"data-item"},[a("div",{staticClass:"key"},[t._v("\n            Pool hashrate\n        ")]),a("div",{staticClass:"value"},[t._v("\n            "+t._s(t.data.poolhash)+"\n        ")])]),a("div",{staticClass:"data-item"},[a("div",{staticClass:"key"},[t._v("\n            Workers\n        ")]),a("div",{staticClass:"value"},[t._v("\n            "+t._s(t.data.workers)+"\n        ")])]),a("div",{staticClass:"data-item"},[a("div",{staticClass:"key"},[t._v("\n            Pool fee\n        ")]),a("div",{staticClass:"value"},[t._v("\n            "+t._s(t.data.fee)+"\n        ")])]),a("div",{staticClass:"data-item"},[a("div",{staticClass:"key"},[t._v("\n            Payout period\n        ")]),a("div",{staticClass:"value"},[t._v("\n            "+t._s(t.data.period)+"\n        ")])])])},Q=[],X=(a("96cf"),a("3040")),Z=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.data={algorithm:"",nethash:"",poolhash:"",workers:"",fee:"",period:""},t}return Object(p["a"])(e,[{key:"mounted",value:function(){var t=this;this.timer=setInterval(function(){t.loadData().then()},1e3)}},{key:"beforeDestroy",value:function(){clearInterval(this.timer)}},{key:"loadData",value:function(){var t=Object(X["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("./test.json").then(function(t){return t.json()});case 2:for(a in e=t.sent,this.data)e[a]&&(this.data[a]=e[a]);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),Object(c["a"])(e,t),e}(v["b"]);Z=u["a"]([v["a"]],Z);var tt=Z,et=tt,at=(a("71a2"),Object(_["a"])(et,V,Q,!1,null,"45de68cb",null));at.options.__file="RealTimeData.vue";var nt=at.exports,it=function(t){function e(){return Object(r["a"])(this,e),Object(o["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(v["b"]);it=u["a"]([Object(v["a"])({components:{Donate:L,Warning:P,PoolParameters:S,MinerCheck:j,MinerExample:B,RealTimeData:nt}})],it);var st=it,rt=st,ct=(a("034f"),Object(_["a"])(rt,i,s,!1,null,null,null));ct.options.__file="App.vue";var ot=ct.exports;n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(ot)}}).$mount("#app")},d0c5:function(t,e,a){},d3ae:function(t,e,a){"use strict";var n=a("b68d"),i=a.n(n);i.a},ef14:function(t,e,a){}});
//# sourceMappingURL=app.c0b5969c.js.map