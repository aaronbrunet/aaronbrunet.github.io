(this.webpackJsonptip=this.webpackJsonptip||[]).push([[0],{30:function(e,t,a){e.exports=a(42)},35:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),i=a.n(l),c=(a(35),a(20)),s=a(8),o=a(21),u=a(22),m=a(26),p=a(3),h=a(6),d=a(7);function v(){var e=Object(h.a)(["\n    text-align: ",";\n"]);return v=function(){return e},e}var b=d.a.input(v(),(function(e){return e.value<1?"center":"right"})),f=function(e){var t=Object(n.useState)(""),a=Object(p.a)(t,2),l=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"entry-bar"},r.a.createElement("div",{className:"entry-field"},r.a.createElement("span",{className:"money"},""!==l&&0!==l?"$":""),r.a.createElement(b,{className:"entry",type:"number",name:"bill",placeholder:"What's the damage?",value:l,onChange:function(t){return function(t){var a=t;i(a),e.eval(a,e.count,null)}(t.target.value)}}),r.a.createElement("span",{className:"edit reset hide",onClick:function(t){i(""),e.reset()}},"X"))))},g=a(53),E=a(15);function N(){var e=Object(h.a)(["\n  transform: ",";\n"]);return N=function(){return e},e}var F=d.a.span(N(),(function(e){return!0===e.edit?"rotate(0deg)":"rotate(135deg)"})),j=Object(E.a)({root:{height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus,&:hover,&$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(g.a),O=function(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),l=a[0],i=a[1],c=Object(n.useState)("custom"),s=Object(p.a)(c,2),o=s[0],u=s[1],m=Object(n.useState)(!1),h=Object(p.a)(m,2),d=h[0],v=h[1];function b(e){var t=e.target.name,a=e.target.value;l===t?f(!0,t,0):f(!1,t,a),v(!1)}var f=function(t,a,n){!0===t?(i(!a),e.calculate(0)):(i(a),e.calculate(n))},g=e.tips;return r.a.createElement("div",{className:"tips"},g.map((function(e,t){return r.a.createElement("button",{onClick:b,active:l===e+"-"+t?"true":"false",className:l===e+"-"+t?"active":"",name:e+"-"+t,key:e,value:parseFloat(e/100)},e,"%")})),r.a.createElement("button",{onClick:"Custom"===o?null:b,className:l===o+"-4"?"active":"",name:o+"-4",value:isNaN(o)?"custom":parseFloat(o/100)},o>0?o:"custom","%"),r.a.createElement(F,{edit:d,className:d?"edit active":"edit",onClick:function(){return v((function(e){return!e}))}},d?"\u2714":"\u270f"),r.a.createElement(j,{defaultValue:25,valueLabelDisplay:"auto",step:1,min:0,max:100,name:"btn-test",onChange:function(e,t){u(parseFloat(t))},className:d?"slider":"slider hidden"}))};function y(){var e=Object(h.a)(["\n    background-color: ",";\n"]);return y=function(){return e},e}function _(){var e=Object(h.a)(["\n    opacity: ",";    \n"]);return _=function(){return e},e}var S=d.a.h1(_(),(function(e){return"0.00"===e.value?".5":"1"})),k=d.a.span(y(),(function(e){return e.toggle?"#F34040":"#FFBB36"})),x=function(e){var t=Object(n.useState)(!0),a=Object(p.a)(t,2),l=a[0],i=a[1],c=Object(n.useState)(!1),s=Object(p.a)(c,2),o=s[0],u=s[1],m=Object(n.useState)(1),h=Object(p.a)(m,2),d=h[0],v=h[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bill"},r.a.createElement("div",{className:"people"},r.a.createElement("input",{className:"",type:"number",min:"1","min-step":"1",placeholder:"1",value:d,onChange:function(t){var a=t.target.value;v(a),e.headcount(e.bill,a)}}),r.a.createElement("p",null,d>1?"people":"person")),r.a.createElement("div",{className:"bill-display"},l?r.a.createElement("div",{className:"total"},r.a.createElement(S,{className:"tip",value:e.tip},"$",e.tip," tip"),r.a.createElement(S,{className:"final",value:e.bill_tip},"$",e.bill_tip)):r.a.createElement("div",{className:"each"},r.a.createElement(S,{className:"tip",value:e.tip_share},"$",e.tip_share," tip"),r.a.createElement(S,{className:"final",value:e.share},"$",e.share)),r.a.createElement(k,{toggle:l,className:e.count>1?"toggle":"toggle disabled",onClick:function(){return i((function(e){return!e}))}},l?"Total":"Each")),r.a.createElement("div",{className:"round small-container"},r.a.createElement("button",{className:o?"active nearest":"nearest",onClick:function(){u((function(e){return!e})),e.rounding(!o)}},"Nearest $"))))},w=(a(40),a(41),[10,15,18,20]),C=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).headcount=function(t,a){e.setState({count:a}),e.eval(t,a,null)},e.rounding=function(t){e.setState({roundUp:t}),e.eval(null,null,t)},e.eval=function(t,a,n){var r,l,i;if(r=null!==t?t:e.state.bill,l=null!==a?a:e.state.count,i=null!==n?n:e.state.roundUp,r>0){r=parseFloat(r);var c=parseFloat(e.state.tip),s=parseFloat(e.state.bill_tip);try{s=r+(c=r*parseFloat(e.state.percent)),i&&(c=(s=e.roundUp(s))-r);var o=s/l,u=c/l;e.setState({bill:r.toFixed(2),bill_tip:s.toFixed(2),tip:c.toFixed(2),tip_share:u.toFixed(2),share:o.toFixed(2)})}catch(m){e.setState({bill_tip:"error"})}}},e.calculate=function(t){var a;a=t>0?parseFloat(t):0;var n=parseFloat(e.state.bill),r=parseFloat(e.state.tip),l=parseFloat(e.state.bill),i=parseFloat(e.state.share);try{l=n+(r=n*a),e.state.roundUp&&(r=(l=e.roundUp(l))-n),i=l/e.state.count;var c=r/e.state.count;e.setState({bill_tip:l.toFixed(2).toString(),tip:r.toFixed(2).toString(),tip_share:c.toFixed(2),share:i.toFixed(2),percent:a})}catch(s){e.setState({bill_tip:"error"})}},e.reset=function(){e.setState({bill:"0.00",bill_tip:"0.00",share:"0.00",tip:"0.00",tip_share:"0.00",percent:0})},e.state={bill:"0.00",bill_tip:"0.00",share:"0.00",tip:"0.00",tip_share:"0.00",count:1,percent:0,roundUp:!1},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"roundUp",value:function(e){var t=e;return t=Math.ceil(t)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"A Friendly Tip"),r.a.createElement("p",null,"Tired of fighting with friends over who pays what, and how much tip to leave?",r.a.createElement("br",null),r.a.createElement("br",null),"Fight no longer!",r.a.createElement("br",null),"\u2026about that.")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"controls"},r.a.createElement(f,{eval:this.eval,count:this.state.count,reset:this.reset}),r.a.createElement(O,{tips:w,calculate:this.calculate,reset:this.reset})),r.a.createElement(x,{headcount:this.headcount,count:this.state.count,bill:this.state.bill,bill_tip:this.state.bill_tip,tip:this.state.tip,tip_share:this.state.tip_share,share:this.state.share,rounding:this.rounding}))),r.a.createElement("div",{className:"bottom"},r.a.createElement("p",null,"Created by Aaron Brunet 2020")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.8a680dca.chunk.js.map