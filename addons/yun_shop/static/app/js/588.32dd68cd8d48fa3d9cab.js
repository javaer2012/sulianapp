webpackJsonp([588],{BRSj:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"\n#helpcenter table td[data-v-0be6758a] {\n  border-style: solid !important;\n}\n#helpcenter .fade-enter-active[data-v-0be6758a],\n#helpcenter .fade-leave-active[data-v-0be6758a] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n#helpcenter .fade-enter[data-v-0be6758a],\n#helpcenter .fade-leave-to[data-v-0be6758a] {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n#helpcenter .list[data-v-0be6758a] {\n  margin-top: 0.625rem;\n}\n#helpcenter .list ul[data-v-0be6758a] {\n    background-color: #fff;\n}\n#helpcenter .list ul li[data-v-0be6758a] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      height: 2.5rem;\n      line-height: 2.5rem;\n      padding: 0 0.875rem;\n      font-size: 15px;\n      border-bottom: solid 0.0625rem #ebebeb;\n}\n#helpcenter .list i[data-v-0be6758a] {\n    font-size: 1.5rem;\n    color: #c9c9c9;\n    line-height: 2.5rem;\n}\n#helpcenter .sver[data-v-0be6758a] {\n  margin-top: 0.625rem;\n  background-color: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 2.5rem;\n  line-height: 2.5rem;\n  padding: 0 0.875rem;\n  font-size: 15px;\n}\n#helpcenter .sver ul[data-v-0be6758a] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n#helpcenter .sver i[data-v-0be6758a]:first-child {\n    font-size: 1.25rem;\n    margin-right: 0.625rem;\n    color: #666;\n}\n#helpcenter .sver i[data-v-0be6758a] {\n    font-size: 1.5rem;\n    color: #c9c9c9;\n    line-height: 2.5rem;\n}\n#helpcenter .message[data-v-0be6758a] {\n  width: 100%;\n  position: absolute;\n  background: #fff;\n  top: 0;\n  min-height: 100%;\n  overflow: hidden;\n  z-index: 999;\n}\n#helpcenter .message .msgbox[data-v-0be6758a] {\n    line-height: 1.25rem;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-top: 0.625rem;\n}\n#helpcenter .message header[data-v-0be6758a] {\n    height: 2.5rem;\n    width: 100%;\n    line-height: 2.5rem;\n    font-size: 14px;\n    font-weight: bolder;\n    position: relative;\n    border-bottom: solid 0.0625rem #ebebeb;\n}\n#helpcenter .message header .icon[data-v-0be6758a] {\n      position: absolute;\n      display: block;\n      float: left;\n      width: 0.65rem;\n      height: 0.65rem;\n      border: solid 0.1rem rgba(0, 0, 0, 0.5);\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      border-right: transparent;\n      border-top: transparent;\n      margin: 0.9375rem;\n}\n",""])},imtf:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Pexp"),i=n("Tg7E"),s={data:function(){return{dataget:[],title:[],msgarr:[],msg:"",sharedata:"",cservice:"",showbox:!1}},methods:{show:function(e){this.msg=this.msgarr[e],this.showbox=!0},getData:function(){var e=this;$http.get("plugin.help-center.api.share.index").then(function(t){1==t.result&&(e.sharedata=t.data.data,e.initShare())})},initShare:function(){var e=this;console.log(document.location.href);var t=document.location.href;$http.post("member.member.wxJsSdkConfig",{url:t}).then(function(t){1==t.result&&(e.initCservice(t.data.shop.cservice),e.share(t.data))},function(e){console.log(e)})},share:function(e){var t=this;wx.config(e.config),wx.ready(function(){var n=t.sharedata.title?t.sharedata.title:e.shop.name,a=document.location.href+"&share_tag=2";a=t.fun.isMid(a,e.info.uid);var s=t.sharedata.icon?t.sharedata.icon:e.shop.logo,r=t.sharedata.description?t.sharedata.description:e.shop.copyright;wx.showOptionMenu(),wx.onMenuShareTimeline({title:n,link:a,imgUrl:s,success:function(){Object(i.Toast)("分享成功")},cancel:function(){Object(i.Toast)("取消分享")}}),wx.onMenuShareAppMessage({title:n,desc:r,link:a,imgUrl:s,type:"link",dataUrl:"",success:function(){Object(i.Toast)("分享成功")},cancel:function(){Object(i.Toast)("取消分享")}})})},initCservice:function(e){this.fun.isTextEmpty(e)?this.fun.isTextEmpty(this.$store.state.temp.mailInfo)||this.fun.isTextEmpty(this.$store.state.temp.mailInfo.cservice)||(this.cservice=this.$store.state.temp.mailInfo.cservice):this.cservice=e},hide:function(){this.showbox=!1}},activated:function(){(0===this.$route.params.key||this.$route.params.key)&&this.title.length>0&&this.show(this.$route.params.key)},created:function(){var e=this;$http.get("plugin.help-center.api.content.info").then(function(t){e.dataget=t.data.set_data,e.dataget.map(function(t){e.title.push(t.title),e.msgarr.push(t.content),e.msg=e.msgarr[0]}),(0===e.$route.params.key||e.$route.params.key)&&e.show(e.$route.params.key)}),this.getData(),this.initCservice("")},components:{cTitle:a.a}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"helpcenter"}},[n("c-title",{attrs:{hide:!1,text:"帮助中心"}}),e._v(" "),n("div",{staticStyle:{height:"40px"}}),e._v(" "),n("div",{staticClass:"list"},[n("ul",e._l(e.title,function(t,a){return n("li",{key:a,on:{click:function(t){return e.show(a)}}},[n("span",[e._v(e._s(t))]),e._v(" "),n("i",{staticClass:"fa fa-angle-right"})])}),0)]),e._v(" "),n("transition",{attrs:{name:"fade"}},[e.showbox?n("div",{staticClass:"message",style:{width:3==this.fun.getPhoneEnv()?"375px":"100%"}},[n("header",[n("span",{staticClass:"icon",on:{click:e.hide}}),e._v("帮助详情")]),e._v(" "),n("div",{staticClass:"msgbox",domProps:{innerHTML:e._s(e.msg)}})]):e._e()]),e._v(" "),n("a",{attrs:{href:e.cservice}},[e._m(0)])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"sver"},[t("ul",[t("li",[t("i",{staticClass:"iconfont icon-kefu"})]),this._v(" "),t("li",[this._v("人工客服1")])]),this._v(" "),t("i",{staticClass:"fa fa-angle-right"})])}]};var o=n("VU/8")(s,r,!1,function(e){n("yS2j")},"data-v-0be6758a",null);t.default=o.exports},yS2j:function(e,t,n){var a=n("BRSj");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("be8ffd44",a,!0,{})}});