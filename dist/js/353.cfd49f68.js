"use strict";(self["webpackChunkhmtoutiao"]=self["webpackChunkhmtoutiao"]||[]).push([[353],{4353:function(t,e,s){s.r(e),s.d(e,{default:function(){return ot}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"article-container"},[s("van-nav-bar",{staticClass:"page-nav-bar",attrs:{"left-arrow":"",title:"朝日头条"},on:{"click-left":t.onClickLeft}}),s("div",{staticClass:"main-wrap"},[t.loading?s("div",{staticClass:"loading-wrap"},[s("van-loading",{attrs:{color:"#3296fa",vertical:""}},[t._v("加载中")])],1):t.article.title?s("div",{staticClass:"article-detail"},[s("h1",{staticClass:"article-title"},[t._v(t._s(t.article.title))]),s("van-cell",{staticClass:"user-info",attrs:{center:"",border:!1}},[s("van-image",{staticClass:"avatar",attrs:{slot:"icon",round:"",fit:"cover",src:t.article.aut_photo},slot:"icon"}),s("div",{staticClass:"user-name",attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.article.aut_name))]),s("div",{staticClass:"publish-date",attrs:{slot:"label"},slot:"label"},[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))]),s("FollowUser",{attrs:{userId:t.article.aut_id},model:{value:t.article.is_followed,callback:function(e){t.$set(t.article,"is_followed",e)},expression:"article.is_followed"}})],1),s("div",{ref:"article-content",staticClass:"article-content markdown-body",domProps:{innerHTML:t._s(t.article.content)}}),s("van-divider",[t._v("正文结束")]),s("van-cell",{attrs:{title:"全部评论"}}),s("CommentList",{attrs:{source:t.article.art_id,list:t.commentList},on:{changeNum:t.commentNum,replyClick:t.onReplyClick}}),s("div",{staticClass:"article-bottom"},[s("van-button",{staticClass:"comment-btn",attrs:{type:"default",round:"",size:"small"},on:{click:function(e){t.isPostShow=!0}}},[t._v("写评论")]),s("van-icon",{attrs:{name:"comment-o",info:t.commentNumber,color:"#777"}}),s("CollectArticle",{attrs:{articleId:t.article.art_id},model:{value:t.article.is_collected,callback:function(e){t.$set(t.article,"is_collected",e)},expression:"article.is_collected"}}),s("LikeArticle",{attrs:{articleId:t.article.art_id},model:{value:t.article.like_count,callback:function(e){t.$set(t.article,"like_count",e)},expression:"article.like_count"}}),s("van-icon",{attrs:{name:"share",color:"#777777"}})],1),s("van-popup",{attrs:{position:"bottom"},model:{value:t.isPostShow,callback:function(e){t.isPostShow=e},expression:"isPostShow"}},[s("CommentPost",{attrs:{target:t.article.art_id},on:{postSuccess:t.OnPostSuccess}})],1)],1):404===t.errStatus?s("div",{staticClass:"error-wrap"},[s("van-icon",{attrs:{name:"failure"}}),s("p",{staticClass:"text"},[t._v("该资源不存在或已删除！")])],1):s("div",{staticClass:"error-wrap"},[s("van-icon",{attrs:{name:"failure"}}),s("p",{staticClass:"text"},[t._v("内容加载失败！")]),s("van-button",{staticClass:"retry-btn",on:{click:t.readfileDetail}},[t._v("点击重试")])],1)]),s("van-popup",{style:{height:"90%"},attrs:{position:"bottom"},model:{value:t.isReplyShow,callback:function(e){t.isReplyShow=e},expression:"isReplyShow"}},[t.isReplyShow?s("CommentReply",{attrs:{comment:t.currentComment},on:{close:function(e){t.isReplyShow=!1}}}):t._e()],1)],1)},a=[],o=s(4234),n=s(8871),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.value?s("van-button",{staticClass:"follow-btn",attrs:{round:"",size:"small",loading:t.loading},on:{click:t.onFocus}},[t._v("已关注 ")]):s("van-button",{staticClass:"follow-btn",attrs:{type:"info",color:"#3296fa",round:"",size:"small",icon:"plus",loading:t.loading},on:{click:t.onFocus}},[t._v("关注 ")])},c=[],r=s(6165),m={props:{value:{type:Boolean,required:!0},userId:{type:[Number,String,Object],required:!0}},data(){return{loading:!1}},methods:{async onFocus(){this.loading=!0;try{this.value?(await(0,r.Gs)(this.userId),this.$toast.success("取消关注")):(await(0,r.fA)(this.userId),this.$toast.success("关注成功")),this.$emit("input",!this.value)}catch(t){t.response&&400===t.response.status?this.$toast("您不能关注自己！"):this.$toast("操作失败，请重试！")}this.loading=!1}}},u=m,d=s(1001),h=(0,d.Z)(u,l,c,!1,null,"a6d8e69a",null),p=h.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("van-button",{class:{collected:t.value},attrs:{icon:t.value?"star":"star-o",loading:t.loading},on:{click:t.onCollect}})},f=[],_={props:{value:{type:Boolean,required:!0},articleId:{type:[Number,String],required:!0}},data(){return{loading:!1}},methods:{async onCollect(){this.loading=!0;try{this.value?(await(0,o.q7)(this.articleId),this.$toast.success("取消收藏")):(await(0,o.KR)(this.articleId),this.$toast.success("收藏成功")),this.$emit("input",!this.value)}catch(t){this.$toast("收藏失败，请重试")}this.loading=!1}}},g=_,b=(0,d.Z)(g,v,f,!1,null,"22ac25e7",null),C=b.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("van-button",{class:{liked:1===t.value},attrs:{icon:1===t.value?"good-job":"good-job-o",loading:t.loading},on:{click:t.onLike}})},k=[],w={props:{value:{type:[Number,String],required:!0},articleId:{type:[Number,String,Object],required:!0}},data(){return{loading:!1}},methods:{async onLike(){this.loading=!0;try{1===this.value?(await(0,o.Q1)(this.articleId),this.$toast.success("取消点赞"),this.$emit("input",0)):(await(0,o.Vz)(this.articleId),this.$toast.success("点赞成功"),this.$emit("input",1))}catch(t){this.$toast("点赞失败，请重试！")}this.loading=!1}}},$=w,S=(0,d.Z)($,y,k,!1,null,"5d852a11",null),L=S.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("van-list",{attrs:{"immediate-check":!1,finished:t.finished,"finished-text":"没有更多了",error:t.error,"error-text":"加载失败，请重试！"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e,i){return s("CommentItem",{key:i,attrs:{comment:e},on:{replyClick:function(e){return t.$emit("replyClick",e)}}})})),1)},I=[],x=s(5972);const Z=t=>(0,x.Z)({method:"get",url:"/v1_0/comments",params:t}),N=t=>(0,x.Z)({method:"post",url:"/v1_0/comment/likings",data:{target:t}}),q=t=>(0,x.Z)({method:"delete",url:`/v1_0/comment/likings/${t}`}),R=t=>(0,x.Z)({method:"post",url:"/v1_0/comments",data:t});var j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("van-cell",{staticClass:"comment-item"},[s("van-image",{staticClass:"avatar",attrs:{slot:"icon",round:"",fit:"cover",src:t.comment.aut_photo},slot:"icon"}),s("div",{staticClass:"title-wrap",attrs:{slot:"title"},slot:"title"},[s("div",{staticClass:"user-name"},[t._v(t._s(t.comment.aut_name))]),s("van-button",{staticClass:"like-btn",class:{liked:t.comment.is_liking},attrs:{icon:t.comment.is_liking?"good-job":"good-job-o",loading:t.commentLoading},on:{click:t.onCommentLike}},[t._v(t._s(t.comment.like_count||""))])],1),s("div",{attrs:{slot:"label"},slot:"label"},[s("p",{staticClass:"comment-content"},[t._v(t._s(t.comment.content))]),s("div",{staticClass:"bottom-info"},[s("span",{staticClass:"comment-pubdate"},[t._v(t._s(t._f("relativeTime")(t.comment.pubdate)))]),s("van-button",{staticClass:"reply-btn",attrs:{round:""},on:{click:function(e){return t.$emit("replyClick",t.comment)}}},[t._v("回复 "+t._s(t.comment.reply_count))])],1)])],1)},E=[],z={props:{comment:{type:Object,required:!0}},data(){return{commentLoading:!1}},methods:{async onCommentLike(){this.commentLoading=!0;try{this.comment.is_liking?(await q(this.comment.com_id),this.comment.like_count--,this.$toast.success("取消点赞")):(await N(this.comment.com_id),this.comment.like_count++,this.$toast.success("点赞成功")),this.comment.is_liking=!this.comment.is_liking}catch(t){this.$toast("点赞失败，请重试")}this.commentLoading=!1}}},O=z,A=(0,d.Z)(O,j,E,!1,null,"68f1889f",null),F=A.exports,D={data(){return{loading:!1,finished:!1,offset:null,limit:10,error:!1}},props:{source:{type:[Number,String],required:!0},list:{type:Array,default:()=>[]},type:{type:String,validator(t){return["a","c"].includes(t)},default:"a"}},created(){this.loading=!0,this.onLoad()},methods:{async onLoad(){try{const{data:t}=await Z({type:this.type,source:this.source,offset:this.offset,limit:this.limit});this.list.push(...t.data.results),this.$emit("changeNum",t.data.total_count),this.loading=!1,results.length?this.offset=t.data.last_id:this.finished=!0}catch(t){this.error=!0,this.loading=!1}}},components:{CommentItem:F}},Q=D,T=(0,d.Z)(Q,P,I,!1,null,"64347efe",null),B=T.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment-post"},[s("van-field",{staticClass:"post-field",attrs:{rows:"3",autosize:"",type:"textarea",maxlength:"50",placeholder:"请输入留言","show-word-limit":""},model:{value:t.message,callback:function(e){t.message="string"===typeof e?e.trim():e},expression:"message"}}),s("van-button",{staticClass:"post-btn",attrs:{disabled:!t.message.length},on:{click:t.onPost}},[t._v(" 发布 ")])],1)},U=[],V={props:{target:{type:[Number,String],required:!0}},inject:{articleId:{type:[Number,String],default:null}},data(){return{message:""}},methods:{async onPost(){this.$toast.loading({message:"发布中...",forbidClick:!0,duration:0});try{const{data:t}=await R({target:this.target,content:this.message,art_id:this.articleId});this.$emit("postSuccess",t.data),this.message="",this.$toast.success("发布成功")}catch(t){this.$toast.fail("发布失败")}}}},G=V,H=(0,d.Z)(G,K,U,!1,null,"7262240c",null),M=H.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment-reply"},[s("van-nav-bar",[s("div",{staticClass:"title",attrs:{slot:"title"},slot:"title"},[t._v(" "+t._s(t.comment.reply_count>0?t.comment.reply_count+"条回复":"暂无回复")+" ")]),s("van-icon",{staticClass:"close",attrs:{slot:"left",name:"cross"},on:{click:function(e){return t.$emit("close")}},slot:"left"})],1),s("div",{staticClass:"scroll-warp"},[s("CommentItem",{attrs:{comment:t.comment}}),s("van-cell",{attrs:{title:"全部回复"}}),s("CommentList",{attrs:{list:t.commentList,source:t.comment.com_id,type:"c"}})],1),s("div",{staticClass:"post-wrap"},[s("van-button",{staticClass:"post-btn",attrs:{size:"small",round:""},on:{click:function(e){t.isPostShow=!0}}},[t._v("写评论")])],1),s("van-popup",{attrs:{position:"bottom"},model:{value:t.isPostShow,callback:function(e){t.isPostShow=e},expression:"isPostShow"}},[s("CommentPost",{attrs:{target:t.comment.com_id},on:{postSuccess:t.OnPostSuccess}})],1)],1)},W=[],X={props:{comment:{type:Object,required:!0}},data(){return{isPostShow:!1,commentList:[]}},components:{CommentItem:F,CommentList:B,CommentPost:M},methods:{OnPostSuccess(t){this.comment.reply_count++,this.isPostShow=!1,this.commentList.unshift(t.new_obj)}}},Y=X,tt=(0,d.Z)(Y,J,W,!1,null,"0bcf09ba",null),et=tt.exports,st={name:"Detail",props:{articleId:{type:[Number,String],required:!0}},data(){return{article:{},loading:!0,errStatus:0,followLoading:!1,commentNumber:0,isPostShow:!1,commentList:[],isReplyShow:!1,currentComment:{}}},provide(){return{articleId:this.articleId}},created(){this.readfileDetail()},methods:{async readfileDetail(){this.loading=!0;try{const{data:t}=await(0,o.PQ)(this.articleId);this.article=t.data,setTimeout((()=>{this.previewImage()}),0)}catch(t){console.log(t.response),t.response&&404===t.response.status&&(this.errStatus=404)}this.loading=!1},onClickLeft(){this.$router.back()},previewImage(){const t=this.$refs["article-content"],e=t.querySelectorAll("img"),s=[];e.forEach(((t,e)=>{s.push(t.src),t.onclick=()=>{(0,n.ImagePreview)({images:s,startPosition:e})}}))},commentNum(t){this.commentNumber=t},OnPostSuccess(t){this.isPostShow=!1,this.commentList.unshift(t.new_obj)},onReplyClick(t){this.currentComment=t,this.isReplyShow=!0}},components:{FollowUser:p,CollectArticle:C,LikeArticle:L,CommentList:B,CommentPost:M,CommentReply:et}},it=st,at=(0,d.Z)(it,i,a,!1,null,"7c8ce92d",null),ot=at.exports},4234:function(t,e,s){s.d(e,{KR:function(){return n},PQ:function(){return o},Q1:function(){return c},Vz:function(){return r},Zz:function(){return a},q7:function(){return l}});var i=s(5972);const a=t=>(0,i.Z)({method:"get",url:"/v1_0/articles",params:t}),o=t=>(0,i.Z)({method:"get",url:`/v1_0/articles/${t}`}),n=t=>(0,i.Z)({method:"post",url:"/v1_0/article/collections",data:{target:t}}),l=t=>(0,i.Z)({method:"delete",url:`/v1_0/article/collections/${t}`}),c=t=>(0,i.Z)({method:"post",url:"/v1_0/article/likings",data:{target:t}}),r=t=>(0,i.Z)({method:"delete",url:`/v1_0/article/likings/${t}`})}}]);
//# sourceMappingURL=353.cfd49f68.js.map