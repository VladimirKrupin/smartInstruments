(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8c24"],{"8b48":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("CContainer",{staticClass:"d-flex content-center min-vh-100"},[s("CRow",[s("CCol",[s("CCardGroup",[s("CCard",{staticClass:"p-2"},[s("CCardBody",[s("CForm",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("h1",[t._v("Login")]),s("p",{staticClass:"text-muted"},[t._v("Sign In to your account")]),s("CInput",{attrs:{placeholder:"Username",autocomplete:"username email"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[s("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}]),model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),s("CInput",{attrs:{placeholder:"Password",type:"password",autocomplete:"curent-password"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[s("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}]),model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),s("CRow",[s("CCol",{staticClass:"text-left d-flex justify-content-between ",attrs:{col:"12"}},[s("div",{staticClass:"d-flex"},[s("CButton",{staticClass:"px-4",attrs:{disabled:!!this.disabled&&"disabled",type:"submit",color:"primary"}},[t._v("Login")]),this.disabled?s("span",{staticClass:"loader ml-2"}):t._e()],1),s("CButton",{attrs:{color:"link",to:"register"}},[t._v("Register")])],1)],1)],1),t.error?s("div",{staticClass:"alert alert-danger mt-4",attrs:{col:"12"}},[t._v(t._s(t.error))]):t._e()],1)],1)],1)],1)],1)],1)},r=[],o=s("8aa50"),n=s.n(o),l={data:function(){return{form:{email:"",password:""},error:null,disabled:!1,loader:!0}},methods:{submit:function(){var t=this;this.error=null,this.disabled=!0,n.a.auth().signInWithEmailAndPassword(this.form.email,this.form.password).then((function(e){localStorage.setItem("access_token",e.user.l),t.$router.push({name:"Dashboard"})}))["catch"]((function(e){t.disabled=!1,t.error=e.message}))}}},i=l,c=s("2877"),d=Object(c["a"])(i,a,r,!1,null,null,null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0e8c24.4c35fa38.js.map