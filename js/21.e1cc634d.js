(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{a203:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row q-gutter-y-md dev-tools_container"},[n("div",{staticClass:"col-12"},[n("q-btn",{staticClass:"full-width",attrs:{color:"primary",label:"СopyToClipboard","no-caps":""},on:{click:function(t){return e.copyRequest()}}})],1),e.startPending&&!e.pending?n("div",[e._v("CopyResult: "+e._s(e.result))]):e._e()])},s=[],a=n("e4fd"),c=n("ef77"),l=Object(a["defineComponent"])({name:"CopyToCLipboard",setup(){const e=Object(a["ref"])(!1),t=Object(a["ref"])(!1),n=Object(a["ref"])(!0),{setData:o}=Object(c["b"])(n);Object(c["a"])("dev_setCopyResult",(e=>{t.value=!1,o(e)}));const s=()=>{e.value=!0,Object(c["f"])("webCopyToClipboard","Copy this text pls =/")};return{startPending:e,pending:t,result:n,copyRequest:s}}}),r=l,i=n("2877"),p=n("9c40"),u=n("eebe"),d=n.n(u),b=Object(i["a"])(r,o,s,!1,null,null,null);t["default"]=b.exports;d()(b,"components",{QBtn:p["a"]})}}]);