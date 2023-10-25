"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[860],{2860:function(e,t,r){r.r(t),r.d(t,{default:function(){return O}});var s=r(5671),i=r(3144),n=r(136),o=r(3668),u=r(2791),a=r(885),l=r(184),c=function(e){var t=e.status,r=e.updateStatus,s=(0,u.useState)(!1),i=(0,a.Z)(s,2),n=i[0],o=i[1],c=(0,u.useState)(t),d=(0,a.Z)(c,2),p=d[0],h=d[1];(0,u.useEffect)((function(){h(t)}),[t]);return(0,l.jsx)("div",{children:n?(0,l.jsx)("div",{children:(0,l.jsx)("input",{onChange:function(e){return h(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),r(p)},value:p})}):(0,l.jsx)("div",{children:(0,l.jsx)("span",{onDoubleClick:function(){o(!0)},children:t||"------"})})})},d=r(4353),p=function(e){var t=e.profile,r=e.isOwner,s=e.updatePhoto;return(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:(null===t||void 0===t?void 0:t.photos.large)||d,alt:"avatar"}),r&&(0,l.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files;t&&t[0]&&s(t[0])}})]})},h=r(1413),f=r(7865),j=r(1134),x=r(6836),g=r(4695),v=x.Ry({FullName:x.Z_().required(),AboutMe:x.Z_().required(),lookingForAJob:x.O7().default(!0).required(),LookingForAJobDescription:x.Z_(),contacts:x.Ry({facebook:x.Z_().url(),github:x.Z_().url(),instagram:x.Z_().url(),mainLink:x.Z_().url(),twitter:x.Z_().url(),vk:x.Z_().url(),website:x.Z_().url(),youtube:x.Z_().url()})}),b=function(e){var t,r=e.profile,s=e.editModeHandler,i=e.updateDescription,n=e.getUserProfile,o=(0,j.cI)({resolver:(0,g.X)(v)}),u=o.register,a=o.handleSubmit,c=o.formState.errors;return(0,l.jsxs)("div",{children:[(0,l.jsx)(f.z,{title:"Save",callback:a((function(e){var t=(0,h.Z)({userId:r.userId,photos:r.photos},e);i(t).then((function(){s(!1),n(r.userId)}))}))}),(0,l.jsxs)("form",{children:[(0,l.jsxs)("label",{children:[(0,l.jsx)("strong",{children:"Full name: "}),(0,l.jsx)("input",(0,h.Z)({defaultValue:r.fullName},u("FullName")))]}),(0,l.jsx)("p",{children:null===(t=c.FullName)||void 0===t?void 0:t.message}),(0,l.jsxs)("label",{children:[(0,l.jsx)("strong",{children:"About me: "}),(0,l.jsx)("input",(0,h.Z)({defaultValue:r.aboutMe},u("AboutMe")))]}),(0,l.jsxs)("label",{children:[(0,l.jsx)("strong",{children:"Looking for a job: "}),(0,l.jsx)("input",(0,h.Z)({type:"checkbox",checked:r.lookingForAJob},u("lookingForAJob")))]}),(0,l.jsxs)("label",{children:[(0,l.jsx)("strong",{children:"Description: "}),(0,l.jsx)("input",(0,h.Z)({defaultValue:r.lookingForAJobDescription},u("LookingForAJobDescription")))]}),(0,l.jsxs)("label",{children:[" ",(0,l.jsx)("strong",{children:"Contacts: "}),Object.keys(r.contacts).map((function(e,t){var s;return(0,l.jsxs)("div",{children:[(0,l.jsxs)("label",{children:[(0,l.jsxs)("strong",{children:[e,": "]}),(0,l.jsx)("input",(0,h.Z)({defaultValue:r.contacts[e]},u("contacts.".concat(e))))]}),(0,l.jsx)("p",{children:null===(s=c.contacts)||void 0===s?void 0:s[e].message})]},t)}))]})]})]})},m=function(e){var t=e.profile,r=e.editModeHandler,s=e.isOwner;return t?(0,l.jsxs)("div",{children:[s&&(0,l.jsx)(f.z,{title:"Edit description",callback:function(){return r(!0)}}),(0,l.jsxs)("div",{children:[(0,l.jsx)("strong",{children:"Full name: "})," ",t.fullName]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("strong",{children:"About me: "}),t.aboutMe]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("strong",{children:"Looking for a job: "})," ",t.lookingForAJob?"Yes":"No"]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("strong",{children:"Description: "}),t.lookingForAJobDescription]}),(0,l.jsxs)("div",{children:[" ",(0,l.jsx)("strong",{children:"Contacts: "})," ",Object.keys(t.contacts).map((function(e,r){return(0,l.jsxs)("div",{children:[(0,l.jsxs)("strong",{children:[e,":"]})," ",t.contacts[e]]},r)}))]})]}):null},P=function(e){var t=e.isOwner,r=e.profile,s=e.updateDescription,i=e.getUserProfile,n=(0,u.useState)(!1),o=(0,a.Z)(n,2),c=o[0],d=o[1],p=function(e){d(e)};return(0,l.jsx)("div",{children:t&&c?(0,l.jsx)(b,{profile:r,editModeHandler:p,updateDescription:s,getUserProfile:i}):(0,l.jsx)(m,{profile:r,editModeHandler:p,isOwner:t})})},k=function(e){var t=e.profile,r=e.status,s=e.updateStatus,i=e.isOwner,n=e.updatePhoto,o=e.updateDescription,u=e.getUserProfile;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{children:[(0,l.jsx)(p,{profile:t,updatePhoto:n,isOwner:i}),(0,l.jsx)(c,{status:r,updateStatus:s}),(0,l.jsx)(P,{profile:t,isOwner:i,updateDescription:o,getUserProfile:u})]})})},D=r(3041),Z=r(364),A=function(e){return(0,l.jsx)("div",{children:e.posts.map((function(e){return(0,l.jsx)("div",{children:e.post},e.id)}))})},w=(0,Z.$j)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(){e((0,D.q2)())},updateNewPostText:function(t){e((0,D.o4)(t))}}}))((function(e){var t=e.addPost,r=e.updateNewPostText,s=e.profilePage,i=s.newPostMessage,n=s.posts;return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:"My posts"}),(0,l.jsx)("textarea",{value:i,onChange:function(e){var t=e.currentTarget.value;r(t)}}),(0,l.jsx)(f.z,{title:"Add post",callback:t}),(0,l.jsx)(A,{posts:n})]})})),y=function(e){var t=e.profile,r=e.status,s=e.updateStatus,i=e.isOwner,n=e.updatePhoto,o=e.updateDescription,u=e.getUserProfile;return(0,l.jsxs)("div",{children:[(0,l.jsx)(k,{profile:t,status:r,updateStatus:s,isOwner:i,updatePhoto:n,updateDescription:o,getUserProfile:u}),(0,l.jsx)(w,{})]})},S=r(9271),U=r(7284),F=r(7781),_=function(e){(0,n.Z)(r,e);var t=(0,o.Z)(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userID;e||(this.props.autorizedUserID?e=this.props.autorizedUserID:this.props.history.push("/Login")),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){e.match.params.userID!==this.props.match.params.userID&&this.refreshProfile()}},{key:"render",value:function(){return(0,l.jsx)(y,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userID,updatePhoto:this.props.updatePhoto,updateDescription:this.props.updateDescription,getUserProfile:this.props.getUserProfile})}}]),r}(u.Component),O=(0,F.qC)((0,Z.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorizedUserID:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:D.et,getStatus:D.lR,updateStatus:D.Nf,updatePhoto:D.tU,updateDescription:D.YW}),S.EN,U.D)(_)},7865:function(e,t,r){r.d(t,{z:function(){return i}});r(2791);var s=r(184),i=function(e){var t=e.title,r=e.callback;return(0,s.jsx)("button",{onClick:r,children:t})}},7284:function(e,t,r){r.d(t,{D:function(){return c}});var s=r(1413),i=r(5987),n=(r(2791),r(9271)),o=r(364),u=r(184),a=["isAuth"],l=function(e){return{isAuth:e.auth.isAuth}};function c(e){return(0,o.$j)(l)((function(t){t.isAuth;var r=(0,i.Z)(t,a);return t.isAuth?(0,u.jsx)(e,(0,s.Z)({},r)):(0,u.jsx)(n.l_,{to:"/Login"})}))}},4353:function(e,t,r){e.exports=r.p+"static/media/user.a6143582309785dca610.png"}}]);
//# sourceMappingURL=860.bdb192ab.chunk.js.map