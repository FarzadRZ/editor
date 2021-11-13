(function(t){function e(e){for(var i,r,s=e[0],c=e[1],l=e[2],m=0,d=[];m<s.length;m++)r=s[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i,a,o,r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Setting"),n("Preview"),n("Edit")],1)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setting"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.dropdown,expression:"dropdown"}],staticClass:"setting__dropdown",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.dropdown=e.target.multiple?n:n[0]},t.loadTemplate]}},[n("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("History")]),t._l(t.templates,(function(e,i){return n("option",{key:i},[t._v(t._s(e.name))])}))],2),n("div",{staticClass:"setting__btn",on:{click:function(e){t.showModal=!0}}},[t._v("Save")]),t.showModal?n("div",{staticClass:"setting__modal"},[n("h6",[t._v("Choose a template name")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.templateName,expression:"templateName"}],attrs:{placeholder:"Template Name"},domProps:{value:t.templateName},on:{input:function(e){e.target.composing||(t.templateName=e.target.value)}}}),n("input",{attrs:{type:"submit",value:"SUBMIT"},on:{click:t.saveSnippet}})]):t._e()])},u=[],m=n("5530"),d=(n("b0c0"),n("e9c4"),n("2f62")),p={name:"Setting",data:function(){return{templateName:"",showModal:!1,dropdown:""}},computed:Object(m["a"])({},Object(d["b"])({content:function(t){return t.content},templates:function(t){return t.templates}})),methods:{saveSnippet:function(){this.showModal=!1;var t={},e=this.content;t[this.templateName]=e,t[this.templateName]["name"]=this.templateName;var n=JSON.parse(localStorage.getItem("templates")),i=Object(m["a"])(Object(m["a"])({},n),t);localStorage.setItem("templates",JSON.stringify(i)),this.$store.dispatch("getTemplates")},loadTemplate:function(){this.$store.dispatch("selectedTemplate",this.dropdown)}}},f=p,h=n("2877"),v=Object(h["a"])(f,l,u,!1,null,null,null),g=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"preview",staticClass:"preview"},[n("iframe",{attrs:{id:"preview"}})])},_=[],E=(n("99af"),{name:"Preview",computed:Object(m["a"])({},Object(d["b"])({content:function(t){return t.content},minimization:function(t){return t.minimization}})),methods:{setContent:function(){var t="<html><head><style>".concat(this.content.css,"</style></head><body>").concat(this.content.html,"<","script",">").concat(this.content.js,"</","script","></body></html>"),e=document.getElementById("preview").contentWindow.document;e.location.reload(),e.open(),e.write(t),e.close()}},watch:{content:function(){this.setContent()},minimization:function(){this.minimization?this.$refs.preview.style.height="calc(100vh - 103px)":this.$refs.preview.style.height="calc(100vh - 404px)"}}}),T=E,y=Object(h["a"])(T,b,_,!1,null,null,null),w=y.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"editor",staticClass:"edit"},[n("div",{staticClass:"edit__heading"},[n("span",{staticClass:"edit__heading-btn",on:{click:t.toggleMinimize}},[t._v(t._s(t.minimize?"Maximize":"Minimize"))]),n("span",{staticClass:"edit__heading-btn",on:{click:t.runEditor}},[t._v("Run")])]),t._m(0)])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit__body"},[n("textarea",{attrs:{id:"jsEditor"}}),n("textarea",{attrs:{id:"htmlEditor"}}),n("textarea",{attrs:{id:"cssEditor"}})])}],j=n("56b3"),N=(n("a7be"),n("0109"),n("f9d4"),n("d69f"),n("7b00"),{name:"Edit",data:function(){return{minimize:!1}},computed:Object(m["a"])({},Object(d["b"])({templates:function(t){return t.templates},selectedTemplate:function(t){return t.selectedTemplate}})),methods:{runEditor:function(){var t={css:o.getValue(),js:i.getValue(),html:a.getValue()};this.$store.dispatch("runEditor",t)},toggleMinimize:function(){this.minimize=!this.minimize,this.$store.dispatch("minimize",this.minimize),this.minimize?this.$refs.editor.style.height="40px":this.$refs.editor.style.height="341px"},editorUpdating:function(){console.log("updating bashi yecha")}},watch:{selectedTemplate:function(){o.setValue(this.templates[this.selectedTemplate].css),i.setValue(this.templates[this.selectedTemplate].js),a.setValue(this.templates[this.selectedTemplate].html)}},mounted:function(){i=j["fromTextArea"](document.getElementById("jsEditor"),{lineNumbers:!0,theme:"dracula",mode:"javascript"}),a=j["fromTextArea"](document.getElementById("htmlEditor"),{lineNumbers:!0,theme:"dracula",mode:"htmlmixed"}),o=j["fromTextArea"](document.getElementById("cssEditor"),{lineNumbers:!0,theme:"dracula",mode:"css"})},created:function(){var t=this,e=!1;document.onkeyup=function(t){17==t.keyCode&&(e=!1)},document.onkeydown=function(n){if(17==n.keyCode&&(e=!0),83==n.keyCode&&1==e)return t.runEditor(),!1}}}),x=N,M=Object(h["a"])(x,O,S,!1,null,null,null),C=M.exports,z={name:"App",components:{Setting:g,Preview:w,Edit:C},mounted:function(){this.$store.dispatch("getTemplates")}},I=z,P=(n("5c0b"),Object(h["a"])(I,s,c,!1,null,null,null)),$=P.exports;r["a"].use(d["a"]);var k=new d["a"].Store({mutations:{SET_CONTENT:function(t,e){r["a"].set(t,"content",e)},SET_TEMPLATES:function(t,e){r["a"].set(t,"templates",e)},SELECTED_TEMPLATE:function(t,e){r["a"].set(t,"selectedTemplate",e)},SET_MINIMIZATION:function(t,e){r["a"].set(t,"minimization",e)}},actions:{runEditor:function(t,e){var n=t.commit;n("SET_CONTENT",e)},getTemplates:function(t){var e=t.commit,n=localStorage.getItem("templates");e("SET_TEMPLATES",JSON.parse(n))},selectedTemplate:function(t,e){var n=t.commit;n("SELECTED_TEMPLATE",e)},minimize:function(t,e){var n=t.commit;n("SET_MINIMIZATION",e)}}});r["a"].config.productionTip=!1,new r["a"]({store:k,render:function(t){return t($)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.9326c6c8.js.map