"use strict";(self["webpackChunkhmtoutiao"]=self["webpackChunkhmtoutiao"]||[]).push([[397],{2397:function(t,e,a){a.r(e),a.d(e,{default:function(){return U}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("van-nav-bar",{staticClass:"page-nav-bar",attrs:{fixed:""}},[a("van-button",{staticClass:"search_btn",attrs:{slot:"title",type:"info",size:"small",round:"",icon:"search",to:"/search"},slot:"title"},[t._v("搜索")])],1),a("van-tabs",{staticClass:"channel-tabs",attrs:{animated:"",swipeable:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._l(t.channels,(function(t){return a("van-tab",{key:t.id,attrs:{title:t.name}},[a("Article",{attrs:{obj:t}})],1)})),a("div",{staticClass:"placeholder",attrs:{slot:"nav-right"},slot:"nav-right"}),a("div",{staticClass:"more-btn",attrs:{slot:"nav-right"},on:{click:t.moreChannels},slot:"nav-right"},[a("i",{staticClass:"iconfont icon-gengduo"})])],2),a("van-popup",{style:{height:"100%"},attrs:{closeable:"",round:"","close-icon-position":"top-left",position:"bottom"},model:{value:t.isChannelShow,callback:function(e){t.isChannelShow=e},expression:"isChannelShow"}},[a("ChannelEdit",{attrs:{myChannels:t.channels,active:t.active},on:{updateActive:t.onUpdateChange}})],1)],1)},n=[],i=a(6165),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"channel-edit"},[a("van-cell",[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(" 我的频道 ")]),a("van-button",{attrs:{plain:"",round:"",size:"mini"},on:{click:function(e){t.iconState=!t.iconState}}},[t._v(t._s(t.iconState?"完成":"编辑"))])],1),a("van-grid",{attrs:{gutter:10}},t._l(t.myChannels,(function(e,s){return a("van-grid-item",{key:s,staticClass:"grid-item",on:{click:function(a){return t.onMyChannelBtn(e,s)}}},[a("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.iconState&&!t.fiexdChannels.includes(e.id),expression:"iconState && !fiexdChannels.includes(value.id)"}],attrs:{slot:"icon",name:"clear"},slot:"icon"}),a("span",{class:{activecss:s===t.active},attrs:{slot:"text"},slot:"text"},[t._v(t._s(e.name))])],1)})),1),a("van-cell",[a("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(" 频道推荐 ")])]),a("van-grid",{attrs:{gutter:10,direction:"horizontal"}},t._l(t.recommendChannels,(function(e){return a("van-grid-item",{key:e.id,staticClass:"grid-itemMore",attrs:{icon:"plus",text:e.name},on:{click:function(a){return t.onAddChannel(e)}}})})),1)],1)},r=[],c=a(5972);const o=()=>(0,c.Z)({method:"get",url:"/v1_0/channels"}),h=t=>(0,c.Z)({method:"patch",url:"/v1_0/user/channels",data:{channels:[t]}}),d=t=>(0,c.Z)({method:"DELETE",url:`/v1_0/user/channels/${t}`});var u=a(4665),v=a(5922),m={props:{myChannels:{type:Array,required:!0},active:{type:Number,required:!0}},data(){return{allChannels:[],iconState:!1,fiexdChannels:[0]}},created(){this.getChannels()},methods:{async getChannels(){try{const{data:t}=await o();this.allChannels=t.data.channels}catch(t){console.log("请求失败",t)}},async onAddChannel(t){if(this.myChannels.push(t),this.user)try{await h({id:t.id,seq:this.myChannels.length})}catch(e){this.$toast("保存失败，请稍后重试")}else(0,v.LS)("TOUTIAO_CHANNELS",this.myChannels)},onMyChannelBtn(t,e){if(this.iconState){if(this.fiexdChannels.includes(e))return;this.myChannels.splice(e,1),e<=this.active&&this.$emit("updateActive",this.active-1,!0),this.deleteChannel(t)}else this.$emit("updateActive",e)},async deleteChannel(t){if(this.user)try{await d(t.id)}catch(e){this.$toast("删除失败，请稍后重试")}else(0,v.LS)("TOUTIAO_CHANNELS",this.myChannels)}},computed:{...(0,u.rn)(["user"]),recommendChannels(){return this.allChannels.filter((t=>!this.myChannels.find((e=>e.id===t.id))))}}},f=m,p=a(1001),C=(0,p.Z)(f,l,r,!1,null,"0f8c5c02",null),g=C.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-list"},[a("van-pull-refresh",{attrs:{"success-text":t.newSuccessText,"success-duration":"700"},on:{refresh:t.onRefresh},model:{value:t.isNewLoading,callback:function(e){t.isNewLoading=e},expression:"isNewLoading"}},[a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了",offset:"450","error.sync":"error","error-text":"请求失败，点击重新加载"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t,e){return a("ArticleItem",{key:e,attrs:{article:t}})})),1)],1)],1)},y=[],w=a(4234),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-cell",{attrs:{to:"/article/"+t.article.art_id}},[a("div",{staticClass:"title van-multi-ellipsis--l2",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.article.title))]),a("div",{attrs:{slot:"label"},slot:"label"},[3===t.article.cover.type?a("div",{staticClass:"cover-wrap"},t._l(t.article.cover.images,(function(t,e){return a("div",{key:e,staticClass:"cover-item"},[a("van-image",{staticClass:"cover-item-img",attrs:{slot:"default",fit:"cover",src:t},slot:"default"})],1)})),0):t._e(),a("div",{staticClass:"laber-info"},[a("span",[t._v(t._s(t.article.aut_name))]),a("span",[t._v(t._s(t.article.comm_count)+"条评论")]),a("span",[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])]),1===t.article.cover.type?a("van-image",{staticClass:"right-img",attrs:{slot:"default",fit:"cover",src:t.article.cover.images[0]},slot:"default"}):t._e()],1)},x=[],S={props:{article:Object,required:!0}},k=S,A=(0,p.Z)(k,b,x,!1,null,"06cd5370",null),Z=A.exports,L={props:{obj:{type:Object,required:!0}},data(){return{list:[],loading:!1,finished:!1,timestamp:null,error:!1,isNewLoading:!1,newSuccessText:""}},methods:{async onLoad(){try{const{data:t}=await(0,w.Zz)({channel_id:this.obj.id,timestamp:this.timestamp||Date.now()}),{results:e}=t.data;this.list.push(...e),this.loading=!1,e.length?this.timestamp=t.data.pre_timestamp:this.finished=!0}catch(t){this.error=!0,this.loading=!1}},async onRefresh(){try{const{data:t}=await(0,w.Zz)({channel_id:this.obj.id,timestamp:Date.now()}),e=t.data.results;this.list.unshift(...e),this.isNewLoading=!1,this.newSuccessText=`刷新成功，更新了${e.length}条新闻`}catch(t){this.isNewLoading=!1,this.newSuccessText="刷新失败，请重试"}}},components:{ArticleItem:Z}},N=L,$=(0,p.Z)(N,_,y,!1,null,"3b44602c",null),E=$.exports,T={name:"Home",data(){return{active:0,channels:[],isChannelShow:!1}},computed:{...(0,u.rn)(["user"])},components:{Article:E,ChannelEdit:g},created(){this.loadUserChannel()},methods:{async loadUserChannel(){try{let t=[];if(this.user){const{data:e}=await(0,i.Ff)();t=e.data.channels}else{const e=(0,v.rV)("TOUTIAO_CHANNELS");if(e)t=e;else{const{data:e}=await(0,i.Ff)();t=e.data.channels}}this.channels=t}catch(t){this.$toast("获取频道数据失败")}},moreChannels(){this.isChannelShow=!0},onUpdateChange(t,e=!1){this.active=t,this.isChannelShow=e}}},O=T,z=(0,p.Z)(O,s,n,!1,null,"9fedac84",null),U=z.exports},4234:function(t,e,a){a.d(e,{KR:function(){return l},PQ:function(){return i},Q1:function(){return c},Vz:function(){return o},Zz:function(){return n},q7:function(){return r}});var s=a(5972);const n=t=>(0,s.Z)({method:"get",url:"/v1_0/articles",params:t}),i=t=>(0,s.Z)({method:"get",url:`/v1_0/articles/${t}`}),l=t=>(0,s.Z)({method:"post",url:"/v1_0/article/collections",data:{target:t}}),r=t=>(0,s.Z)({method:"delete",url:`/v1_0/article/collections/${t}`}),c=t=>(0,s.Z)({method:"post",url:"/v1_0/article/likings",data:{target:t}}),o=t=>(0,s.Z)({method:"delete",url:`/v1_0/article/likings/${t}`})}}]);
//# sourceMappingURL=397-legacy.3a2af1a1.js.map