"use strict";(self["webpackChunkhmtoutiao"]=self["webpackChunkhmtoutiao"]||[]).push([[292],{4292:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-nav-bar",{staticClass:"page-nav-bar",attrs:{title:"登录"}},[s("van-icon",{attrs:{slot:"left",name:"arrow-left",size:"16"},on:{click:function(e){return t.$router.push({path:"/layout/my"})}},slot:"left"})],1),s("van-form",{ref:"loginUser",on:{submit:t.onSubmit}},[s("van-field",{attrs:{name:"mobile",placeholder:"请输入手机号",rules:t.loginRules.mobile,maxlength:"11"},model:{value:t.user.mobile,callback:function(e){t.$set(t.user,"mobile",e)},expression:"user.mobile"}},[s("i",{staticClass:"iconfont icon-shouji",attrs:{slot:"left-icon"},slot:"left-icon"})]),s("van-field",{attrs:{type:"password",name:"密码",placeholder:"请输入验证码",rules:t.loginRules.code,maxlength:"6"},scopedSlots:t._u([{key:"button",fn:function(){return[t.showTime?s("van-count-down",{attrs:{time:6e4,format:"ss 秒"},on:{finish:function(e){t.showTime=!1}}}):s("van-button",{staticClass:"yanzhengma",attrs:{round:"",size:"small",type:"primary","native-type":"button"},on:{click:t.Onsend}},[t._v("获取验证码")])]},proxy:!0}]),model:{value:t.user.code,callback:function(e){t.$set(t.user,"code",e)},expression:"user.code"}},[s("i",{staticClass:"iconfont icon-yanzhengma",attrs:{slot:"left-icon"},slot:"left-icon"})]),s("div",{staticStyle:{margin:"16px"}},[s("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("登录")])],1)],1)],1)},a=[],n=s(6165),i={name:"Login",data(){return{user:{mobile:"",code:""},loginRules:{mobile:[{required:!0,message:"请填写用户名"},{pattern:/^1[3|4|5|6|7|8|9][0-9]{9}$/,message:"用户名格式错误"}],code:[{required:!0,message:"请填写用户名"},{pattern:/^\d{6}$/,message:"验证码格式错误"}]},showTime:!1}},methods:{async onSubmit(){const t=this.user;this.$toast.loading({message:"登录中...",forbidClick:!0,duration:0});try{const e=await(0,n.x4)(t),s=e.data.data;this.$toast.success("登录成功"),this.$store.commit("setUser",s.token),localStorage.setItem("refresh_token",s.refresh_token),this.$router.back()}catch(err){400===err.response.status?this.$toast.fail("手机号或验证码错误"):this.$toast.fail("登录失败，请稍后重试")}},async Onsend(){try{await this.$refs.loginUser.validate("mobile")}catch(err){return console.log("验证失败",err)}this.showTime=!0;try{await(0,n.Z3)(this.user.mobile),this.$toast.success("发送成功")}catch{this.showTime=!1,429===err.response.status?this.$toast("发送频繁，请稍后重试"):this.$toast("发送失败，请稍后重试")}}}},r=i,l=s(1001),c=(0,l.Z)(r,o,a,!1,null,"6fd120d7",null),u=c.exports}}]);
//# sourceMappingURL=292.93b5b27a.js.map