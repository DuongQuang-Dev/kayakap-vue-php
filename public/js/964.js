(self.webpackChunk=self.webpackChunk||[]).push([[964],{97235:function(t,r,e){var i=e(40857),s=e(86656),n=e(6061),o=e(3070).f;t.exports=function(t){var r=i.Symbol||(i.Symbol={});s(r,t)||o(r,t,{value:n.f(t)})}},1156:function(t,r,e){var i=e(45656),s=e(8006).f,n={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return o&&"[object Window]"==n.call(t)?function(t){try{return s(t)}catch(t){return o.slice()}}(t):s(i(t))}},6061:function(t,r,e){var i=e(5112);r.f=i},41817:function(t,r,e){"use strict";var i=e(82109),s=e(19781),n=e(17854),o=e(86656),a=e(70111),c=e(3070).f,l=e(99920),u=n.Symbol;if(s&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(f[r]=!0),r};l(p,u);var m=p.prototype=u.prototype;m.constructor=p;var g=m.toString,d="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,r=g.call(t);if(o(f,t))return"";var e=d?r.slice(7,-1):r.replace(v,"$1");return""===e?void 0:e}}),i({global:!0,forced:!0},{Symbol:p})}},82526:function(t,r,e){"use strict";var i=e(82109),s=e(17854),n=e(35005),o=e(31913),a=e(19781),c=e(30133),l=e(43307),u=e(47293),f=e(86656),p=e(43157),m=e(70111),g=e(19670),d=e(47908),v=e(45656),y=e(57593),b=e(79114),h=e(70030),w=e(81956),C=e(8006),S=e(1156),_=e(25181),x=e(31236),E=e(3070),O=e(55296),R=e(68880),j=e(31320),k=e(72309),P=e(6200),T=e(3501),$=e(69711),N=e(5112),F=e(6061),z=e(97235),D=e(58003),I=e(29909),J=e(42092).forEach,U=P("hidden"),W="Symbol",A=N("toPrimitive"),B=I.set,G=I.getterFor(W),L=Object.prototype,Q=s.Symbol,Y=n("JSON","stringify"),Z=x.f,q=E.f,H=S.f,K=O.f,M=k("symbols"),V=k("op-symbols"),X=k("string-to-symbol-registry"),tt=k("symbol-to-string-registry"),rt=k("wks"),et=s.QObject,it=!et||!et.prototype||!et.prototype.findChild,st=a&&u((function(){return 7!=h(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,r,e){var i=Z(L,r);i&&delete L[r],q(t,r,e),i&&t!==L&&q(L,r,i)}:q,nt=function(t,r){var e=M[t]=h(Q.prototype);return B(e,{type:W,tag:t,description:r}),a||(e.description=r),e},ot=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},at=function(t,r,e){t===L&&at(V,r,e),g(t);var i=y(r,!0);return g(e),f(M,i)?(e.enumerable?(f(t,U)&&t[U][i]&&(t[U][i]=!1),e=h(e,{enumerable:b(0,!1)})):(f(t,U)||q(t,U,b(1,{})),t[U][i]=!0),st(t,i,e)):q(t,i,e)},ct=function(t,r){g(t);var e=v(r),i=w(e).concat(pt(e));return J(i,(function(r){a&&!lt.call(e,r)||at(t,r,e[r])})),t},lt=function(t){var r=y(t,!0),e=K.call(this,r);return!(this===L&&f(M,r)&&!f(V,r))&&(!(e||!f(this,r)||!f(M,r)||f(this,U)&&this[U][r])||e)},ut=function(t,r){var e=v(t),i=y(r,!0);if(e!==L||!f(M,i)||f(V,i)){var s=Z(e,i);return!s||!f(M,i)||f(e,U)&&e[U][i]||(s.enumerable=!0),s}},ft=function(t){var r=H(v(t)),e=[];return J(r,(function(t){f(M,t)||f(T,t)||e.push(t)})),e},pt=function(t){var r=t===L,e=H(r?V:v(t)),i=[];return J(e,(function(t){!f(M,t)||r&&!f(L,t)||i.push(M[t])})),i};(c||(j((Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=$(t),e=function(t){this===L&&e.call(V,t),f(this,U)&&f(this[U],r)&&(this[U][r]=!1),st(this,r,b(1,t))};return a&&it&&st(L,r,{configurable:!0,set:e}),nt(r,t)}).prototype,"toString",(function(){return G(this).tag})),j(Q,"withoutSetter",(function(t){return nt($(t),t)})),O.f=lt,E.f=at,x.f=ut,C.f=S.f=ft,_.f=pt,F.f=function(t){return nt(N(t),t)},a&&(q(Q.prototype,"description",{configurable:!0,get:function(){return G(this).description}}),o||j(L,"propertyIsEnumerable",lt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:Q}),J(w(rt),(function(t){z(t)})),i({target:W,stat:!0,forced:!c},{for:function(t){var r=String(t);if(f(X,r))return X[r];var e=Q(r);return X[r]=e,tt[e]=r,e},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(f(tt,t))return tt[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,r){return void 0===r?h(t):ct(h(t),r)},defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:ut}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:pt}),i({target:"Object",stat:!0,forced:u((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(d(t))}}),Y)&&i({target:"JSON",stat:!0,forced:!c||u((function(){var t=Q();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}))},{stringify:function(t,r,e){for(var i,s=[t],n=1;arguments.length>n;)s.push(arguments[n++]);if(i=r,(m(r)||void 0!==t)&&!ot(t))return p(r)||(r=function(t,r){if("function"==typeof i&&(r=i.call(this,t,r)),!ot(r))return r}),s[1]=r,Y.apply(null,s)}});Q.prototype[A]||R(Q.prototype,A,Q.prototype.valueOf),D(Q,W),T[U]=!0},1402:function(t){t.exports="/images/logo-sm.png?2c12af685035e4b0f0310c516ecac99c"},95964:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return n}});var i=[function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{staticClass:"bg-primary"},[i("div",{staticClass:"text-primary text-center p-4"},[i("h5",{staticClass:"text-white font-size-20"},[t._v("Free Register")]),t._v(" "),i("p",{staticClass:"text-white-50"},[t._v("Get your account now.")]),t._v(" "),i("a",{staticClass:"logo logo-admin",attrs:{href:"/"}},[i("img",{attrs:{src:e(1402),height:"24",alt:"logo"}})])])])}],s=(e(82526),e(41817),{page:{title:"Register",meta:[{name:"description",content:e(23789).W}]},data:function(){return{username:"",email:"",password:"",regError:null,tryingToRegister:!1,isRegisterError:!1,registerSuccess:!1}},methods:{tryToRegisterIn:function(){var t=this;return this.tryingToRegister=!0,this.regError=null,this.$store.dispatch("register",{name:this.username,email:this.email,password:this.password,password_confirmation:this.password}).then((function(r,e){t.tryingToRegister=!1,t.isRegisterError=!1,t.registerSuccess=!0,t.registerSuccess&&t.$router.push({name:"login"})})).catch((function(r){t.tryingToRegister=!1,t.regError=r||"",t.isRegisterError=!0}))}}}),n=(0,e(51900).Z)(s,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"account-pages my-5 pt-5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8 col-lg-6 col-xl-5"},[e("div",{staticClass:"card overflow-hidden"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body p-4"},[e("div",{staticClass:"p-3"},[e("b-alert",{staticClass:"mt-3",attrs:{variant:"success",dismissible:""},model:{value:t.registerSuccess,callback:function(r){t.registerSuccess=r},expression:"registerSuccess"}},[t._v("Registration successfull.")]),t._v(" "),e("b-alert",{staticClass:"mt-3",attrs:{variant:"danger",dismissible:""},model:{value:t.isRegisterError,callback:function(r){t.isRegisterError=r},expression:"isRegisterError"}},[t._v(t._s(t.regError))]),t._v(" "),e("b-form",{staticClass:"form-horizontal mt-4",on:{submit:function(r){return r.preventDefault(),t.tryToRegisterIn.apply(null,arguments)}}},[e("b-form-group",{attrs:{id:"username-group",label:"Username","label-for":"username"}},[e("b-form-input",{attrs:{id:"username",type:"text",placeholder:"Enter name"},model:{value:t.username,callback:function(r){t.username=r},expression:"username"}})],1),t._v(" "),e("b-form-group",{attrs:{id:"email-group",label:"Email address","label-for":"email"}},[e("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Enter email"},model:{value:t.email,callback:function(r){t.email=r},expression:"email"}})],1),t._v(" "),e("b-form-group",{attrs:{id:"password-group",label:"Password","label-for":"password"}},[e("b-form-input",{attrs:{id:"password",type:"password",placeholder:"Enter password"},model:{value:t.password,callback:function(r){t.password=r},expression:"password"}})],1),t._v(" "),e("div",{staticClass:"form-group mb-0 text-center"},[e("div",{staticClass:"col-12 text-right"},[e("b-button",{staticClass:"w-md",attrs:{type:"submit",variant:"primary"}},[t._v("Register")])],1)]),t._v(" "),e("div",{staticClass:"form-group mt-2 mb-0 row"},[e("div",{staticClass:"col-12 mt-4"},[e("p",{staticClass:"mb-0"},[t._v("\n                      By registering you agree to the Competition\n                      "),e("a",{staticClass:"text-primary",attrs:{href:"#"}},[t._v("Terms of Use")])])])])],1)],1)])]),t._v(" "),e("div",{staticClass:"mt-5 text-center"},[e("p",[t._v("\n            Already have an account ?\n            "),e("router-link",{staticClass:"font-weight-medium text-primary",attrs:{tag:"a",to:"/login"}},[t._v("Login")])],1),t._v(" "),e("p",[t._v("\n            ©"+t._s((new Date).getFullYear())+" \n            "),e("i",{staticClass:"mdi mdi-heart text-danger"}),t._v(" by Competition Organizer\n          ")])])])])])])}),i,!1,null,null,null).exports}}]);