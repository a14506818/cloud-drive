(this["webpackJsonpfirebase-auth"]=this["webpackJsonpfirebase-auth"]||[]).push([[0],{85:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r.n(c),a=r(27),s=r.n(a),i=r(19),o=r.n(i),l=r(26),d=r(10),u=r(99),j=r(91),b=r(94),h=r(92),p=r(14),O=r(61),f=(r(74),r(87),r(86),O.a.initializeApp({apiKey:"AIzaSyAxx-gYzVGy-P6fKHaTKJG-8A0XVn-Z5Bc",authDomain:"auth-dev-843fd.firebaseapp.com",projectId:"auth-dev-843fd",storageBucket:"auth-dev-843fd.appspot.com",messagingSenderId:"1024816887195",appId:"1:1024816887195:web:df3c3ecdf70928e62a9d3e"})),x=f.firestore(),m={folders:x.collection("folders"),files:x.collection("files"),formatDoc:function(e){return Object(p.a)({id:e.id},e.data())},getCurrentTimestamp:O.a.firestore.FieldValue.serverTimestamp},v=f.storage(),g=f.auth(),w=r(2),y=n.a.createContext();function N(){return Object(c.useContext)(y)}function F(e){var t=e.children,r=Object(c.useState)(),n=Object(d.a)(r,2),a=n[0],s=n[1],i=Object(c.useState)(!0),o=Object(d.a)(i,2),l=o[0],u=o[1];Object(c.useEffect)((function(){return g.onAuthStateChanged((function(e){s(e),u(!1)}))}),[]);var j={currentUser:a,signup:function(e,t){return g.createUserWithEmailAndPassword(e,t)},login:function(e,t){return g.signInWithEmailAndPassword(e,t)},logout:function(){return g.signOut()},resetPassword:function(e){return g.sendPasswordResetEmail(e)},updateEmail:function(e){return a.updateEmail(e)},updatePassword:function(e){return a.updatePassword(e)}};return Object(w.jsx)(y.Provider,{value:j,children:!l&&t})}var k=r(13),S=r(11),I=r(90);function P(e){var t=e.children;return Object(w.jsx)(I.a,{className:"d-flex align-items-center justify-content-center ",style:{minHeight:"100vh",maxWidth:"500px",flexDirection:"column"},children:t})}function C(){var e=Object(c.useRef)(),t=Object(c.useRef)(),r=Object(c.useRef)(),n=N().signup,a=Object(c.useState)(""),s=Object(d.a)(a,2),i=s[0],p=s[1],O=Object(c.useState)(!1),f=Object(d.a)(O,2),x=f[0],m=f[1],v=Object(k.g)();function g(){return(g=Object(l.a)(o.a.mark((function c(a){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(a.preventDefault(),t.current.value===r.current.value){c.next=3;break}return c.abrupt("return",p("Password do not match"));case 3:return c.prev=3,p(""),m(!0),c.next=8,n(e.current.value,t.current.value);case 8:v.push("/"),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(3),p("Failed to create an account");case 14:m(!1);case 15:case"end":return c.stop()}}),c,null,[[3,11]])})))).apply(this,arguments)}return Object(w.jsxs)(P,{children:[Object(w.jsx)(u.a,{className:"w-100",children:Object(w.jsxs)(u.a.Body,{children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),i&&Object(w.jsx)(j.a,{variant:"danger",children:i}),Object(w.jsxs)(b.a,{onSubmit:function(e){return g.apply(this,arguments)},children:[Object(w.jsxs)(b.a.Group,{id:"email",children:[Object(w.jsx)(b.a.Label,{children:"Email"}),Object(w.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(w.jsxs)(b.a.Group,{id:"password",children:[Object(w.jsx)(b.a.Label,{children:"Password"}),Object(w.jsx)(b.a.Control,{type:"password",ref:t,required:!0})]}),Object(w.jsxs)(b.a.Group,{id:"password-confirm",children:[Object(w.jsx)(b.a.Label,{children:"Password Confirmation"}),Object(w.jsx)(b.a.Control,{type:"password",ref:r,required:!0})]}),Object(w.jsx)(h.a,{className:"w-100",type:"submit",disabled:x,children:"Sign Up"})]})]})}),Object(w.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(w.jsx)(S.b,{to:"/login",children:"Log In"})]})]})}function L(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),r=t[0],n=t[1],a=N(),s=a.currentUser,i=a.logout,b=Object(k.g)();function p(){return(p=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(""),e.prev=1,e.next=4,i();case 4:b.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(w.jsxs)(P,{children:[Object(w.jsx)(u.a,{children:Object(w.jsxs)(u.a.Body,{style:{textAlign:"center"},children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Profile"}),r&&Object(w.jsx)(j.a,{variant:"danger",children:r}),Object(w.jsx)("strong",{children:"Email: "})," ",s.email,Object(w.jsx)(S.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"}),Object(w.jsx)(S.b,{to:"/",className:"btn btn-secondary w-100 mt-3",children:"Back"})]})}),Object(w.jsx)("div",{className:"w-100 text-center mt-2",children:Object(w.jsx)(h.a,{variant:"link",onClick:function(){return p.apply(this,arguments)},children:"Log Out"})})]})}function E(){var e=Object(c.useRef)(),t=Object(c.useRef)(),r=N().login,n=Object(c.useState)(""),a=Object(d.a)(n,2),s=a[0],i=a[1],p=Object(c.useState)(!1),O=Object(d.a)(p,2),f=O[0],x=O[1],m=Object(k.g)();function v(){return(v=Object(l.a)(o.a.mark((function c(n){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,i(""),x(!0),c.next=6,r(e.current.value,t.current.value);case 6:m.push("/"),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(1),i("Failed to log in");case 12:x(!1);case 13:case"end":return c.stop()}}),c,null,[[1,9]])})))).apply(this,arguments)}return Object(w.jsxs)(P,{children:[Object(w.jsx)(u.a,{className:"w-100",children:Object(w.jsxs)(u.a.Body,{children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(w.jsx)(j.a,{variant:"danger",children:s}),Object(w.jsxs)(b.a,{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(w.jsxs)(b.a.Group,{id:"email",children:[Object(w.jsx)(b.a.Label,{children:"Email"}),Object(w.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(w.jsxs)(b.a.Group,{id:"password",children:[Object(w.jsx)(b.a.Label,{children:"Password"}),Object(w.jsx)(b.a.Control,{type:"password",ref:t,required:!0})]}),Object(w.jsx)(h.a,{className:"w-100",type:"submit",disabled:f,children:"Log In"})]}),Object(w.jsx)("div",{className:"w-100 text-center mt-3",children:Object(w.jsx)(S.b,{to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(w.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(w.jsx)(S.b,{to:"/signup",children:"Sign Up"})]})]})}function A(){var e=Object(c.useRef)(),t=Object(c.useRef)(),r=Object(c.useRef)(),n=N(),a=n.currentUser,s=n.updateEmail,i=n.updatePassword,p=Object(c.useState)(""),O=Object(d.a)(p,2),f=O[0],x=O[1],m=Object(c.useState)(!1),v=Object(d.a)(m,2),g=v[0],y=v[1],F=Object(k.g)();function I(){return(I=Object(l.a)(o.a.mark((function c(n){var l;return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(n.preventDefault(),t.current.value===r.current.value){c.next=3;break}return c.abrupt("return",x("Password do not match"));case 3:l=[],x(""),y(!0),e.current.value!==a.email&&l.push(s(e.current.value)),t.current.value&&l.push(i(t.current.value)),Promise.all(l).then((function(){F.push("/user")})).catch((function(){x("Failed to update account")})).finally((function(){y(!1)}));case 9:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return Object(w.jsxs)(P,{children:[Object(w.jsx)(u.a,{className:"w-100",children:Object(w.jsxs)(u.a.Body,{children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),f&&Object(w.jsx)(j.a,{variant:"danger",children:f}),Object(w.jsxs)(b.a,{onSubmit:function(e){return I.apply(this,arguments)},children:[Object(w.jsxs)(b.a.Group,{id:"email",children:[Object(w.jsx)(b.a.Label,{children:"Email"}),Object(w.jsx)(b.a.Control,{type:"email",ref:e,required:!0,defaultValue:a.email})]}),Object(w.jsxs)(b.a.Group,{id:"password",children:[Object(w.jsx)(b.a.Label,{children:"Password"}),Object(w.jsx)(b.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(w.jsxs)(b.a.Group,{id:"password-confirm",children:[Object(w.jsx)(b.a.Label,{children:"Password Confirmation"}),Object(w.jsx)(b.a.Control,{type:"password",ref:r,placeholder:"Leave blank to keep the same"})]}),Object(w.jsx)(h.a,{className:"w-100",type:"submit",disabled:g,children:"Update"})]})]})}),Object(w.jsx)("div",{className:"w-100 text-center mt-2",children:Object(w.jsx)(S.b,{to:"/user",children:"Cancel"})})]})}function B(){var e=Object(c.useRef)(),t=N().resetPassword,r=Object(c.useState)(""),n=Object(d.a)(r,2),a=n[0],s=n[1],i=Object(c.useState)(""),p=Object(d.a)(i,2),O=p[0],f=p[1],x=Object(c.useState)(!1),m=Object(d.a)(x,2),v=m[0],g=m[1];function y(){return(y=Object(l.a)(o.a.mark((function r(c){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),r.prev=1,f(""),s(""),g(!0),r.next=7,t(e.current.value);case 7:f("Check your inbox for further instructions"),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),s("Failed to reset password");case 13:g(!1);case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))).apply(this,arguments)}return Object(w.jsxs)(P,{children:[Object(w.jsx)(u.a,{className:"w-100",children:Object(w.jsxs)(u.a.Body,{children:[Object(w.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),a&&Object(w.jsx)(j.a,{variant:"danger",children:a}),O&&Object(w.jsx)(j.a,{variant:"success",children:O}),Object(w.jsxs)(b.a,{onSubmit:function(e){return y.apply(this,arguments)},children:[Object(w.jsxs)(b.a.Group,{id:"email",children:[Object(w.jsx)(b.a.Label,{children:"Email"}),Object(w.jsx)(b.a.Control,{type:"email",ref:e,required:!0})]}),Object(w.jsx)(h.a,{className:"w-100",type:"submit",disabled:v,children:"Reset Password"})]}),Object(w.jsx)("div",{className:"w-100 text-center mt-3",children:Object(w.jsx)(S.b,{to:"/login",children:"Log In"})})]})}),Object(w.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(w.jsx)(S.b,{to:"/signup",children:"Sign Up"})]})]})}var U=r(68);function R(e){var t=e.component,r=Object(U.a)(e,["component"]),c=N().currentUser;return Object(w.jsx)(k.b,Object(p.a)(Object(p.a)({},r),{},{render:function(e){return c?Object(w.jsx)(t,Object(p.a)({},e)):Object(w.jsx)(k.a,{to:"/login"})}}))}var D=r(96),G=r(95);function q(){return Object(w.jsxs)(D.a,{bg:"light",expand:"",children:[Object(w.jsx)(D.a.Brand,{as:S.b,to:"/",children:"AppleSheep Drive"}),Object(w.jsx)(G.a,{children:Object(w.jsx)(G.a.Link,{as:S.b,to:"/user",children:"Profile"})})]})}var W=r(41),T=r(93),z=r(35),H=r(36),V="sf",J="uf",K="scfo",M="scfi",_={name:"Root",id:null,path:[]};function X(e,t){var r=t.type,c=t.payload;switch(r){case V:return{folderId:c.folderId,folder:c.folder,childFolders:[],childFiles:[]};case J:return Object(p.a)(Object(p.a)({},e),{},{folder:c.folder});case K:return Object(p.a)(Object(p.a)({},e),{},{childFolders:c.childFolders});case M:return Object(p.a)(Object(p.a)({},e),{},{childFiles:c.childFiles});default:return e}}function Y(e){var t=e.currentFolder,r=Object(c.useState)(!1),n=Object(d.a)(r,2),a=n[0],s=n[1],i=Object(c.useState)(""),o=Object(d.a)(i,2),l=o[0],u=o[1],j=N().currentUser;function p(){s(!1)}return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(h.a,{onClick:function(){s(!0)},variant:"outline-success",size:"sm",children:Object(w.jsx)(z.a,{icon:H.d})}),Object(w.jsx)(T.a,{show:a,onHide:p,children:Object(w.jsxs)(b.a,{onSubmit:function(e){if(e.preventDefault(),null!==t){var r=Object(W.a)(t.path);t!==_&&r.push({name:t.name,id:t.id}),m.folders.add({name:l,parentId:t.id,userId:j.uid,path:r,createAt:m.getCurrentTimestamp()}),u(""),p()}},children:[Object(w.jsx)(T.a.Body,{children:Object(w.jsxs)(b.a.Group,{children:[Object(w.jsx)(b.a.Label,{children:"Folder Name"}),Object(w.jsx)(b.a.Control,{type:"text",required:!0,value:l,onChange:function(e){return u(e.target.value)}})]})}),Object(w.jsxs)(T.a.Footer,{children:[Object(w.jsx)(h.a,{variant:"secondary",onClick:p,children:"Close"}),Object(w.jsx)(h.a,{variant:"success",type:"submit",children:"Add Folder"})]})]})})]})}var Z=r(98),Q=r(97),$=r(100);function ee(e){var t=e.currentFolder,r=Object(c.useState)([]),n=Object(d.a)(r,2),a=n[0],i=n[1],o=N().currentUser;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("label",{className:"btn btn-outline-success btn-sm m-0 mr-2",children:[Object(w.jsx)(z.a,{icon:H.b}),Object(w.jsx)("input",{type:"file",onChange:function(e){var r=e.target.files[0];if(t&&r){var c=Object(Z.a)();i((function(e){return[].concat(Object(W.a)(e),[{id:c,name:r.name,progress:0,error:!1}])}));var n=t===_?"/".concat(r.name):"".concat(t.path.map((function(e){return e.name})).join("/"),"/").concat(t.name,"/").concat(r.name);console.log(n);var a=v.ref("/files/".concat(o.uid,"/").concat(n)).put(r);a.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes;i((function(e){return e.map((function(e){return e.id===c?Object(p.a)(Object(p.a)({},e),{},{progress:t}):e}))}))}),(function(){i((function(e){return e.map((function(e){return e.id===c?Object(p.a)(Object(p.a)({},e),{},{error:!0}):e}))}))}),(function(){a.snapshot.ref.getDownloadURL().then((function(e){console.log(e),m.files.where("name","==",r.name).where("userId","==",o.uid).where("folderId","==",t.id).get().then((function(c){var n=c.docs[0];n?n.ref.update({url:e}):m.files.add({url:e,name:r.name,createAt:m.getCurrentTimestamp(),folderId:t.id,userId:o.uid})})),i((function(e){return e.filter((function(e){return e.id!==c}))}))}))}))}},style:{opacity:0,position:"absolute",left:"-99999px"}})]}),a&&s.a.createPortal(Object(w.jsx)("div",{style:{position:"absolute",bottom:"1rem",right:"1rem",maxWidth:"250px"},children:a.map((function(e){return Object(w.jsxs)(Q.a,{onClose:function(){i((function(t){return t.filter((function(t){return t.id!==e.id}))}))},children:[Object(w.jsx)(Q.a.Header,{className:"text-truncate w-100 d-block",closeButton:e.error,children:e.name}),Object(w.jsx)(Q.a.Body,{children:Object(w.jsx)($.a,{animated:!e.error,variant:e.error?"danger":"primary",now:e.error?100:100*e.progress,label:e.error?"Error":Math.round(100*e.progress)+"%"})})]},e.id)}))}),document.body)]})}var te=r(101);function re(e){var t=e.currentFolder,r=t===_?[]:[_];return t&&(r=[].concat(Object(W.a)(r),Object(W.a)(t.path))),Object(w.jsxs)(te.a,{className:"flex-grow-1",listProps:{className:"bg-white pl-0 m-0"},children:[r.map((function(e,t){return Object(w.jsx)(te.a.Item,{linkAs:S.b,linkProps:{to:{pathname:e.id?"/folder/".concat(e.id):"/",state:{folder:Object(p.a)(Object(p.a)({},e),{},{path:r.slice(1,t)})}}},className:"text-truncate d-inline-blok",style:{maxWidth:"150px"},children:e.name},e.id)})),t&&Object(w.jsx)(te.a.Item,{className:"text-truncate d-inline-blok",style:{maxWidth:"200px"},active:!0,children:t.name})]})}function ce(e){var t=e.folder;return Object(w.jsxs)(h.a,{as:S.b,to:{pathname:"/folder/".concat(t.id),state:{folder:t}},variant:"outline-dark",className:"text-truncate w-100",children:[Object(w.jsx)(z.a,{icon:H.c,className:"mr-2"}),t.name]})}function ne(e){var t=e.file;return Object(w.jsxs)("a",{href:t.url,target:"_blank",className:"btn btn-outline-dark text-truncate w-100",children:[Object(w.jsx)(z.a,{icon:H.a,className:"mr-2"}),t.name]})}function ae(){var e=Object(k.i)().folderId,t=Object(k.h)().state,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=N().currentUser,n=Object(c.useReducer)(X,{folderId:e,folder:t,childFolders:[],childFiles:[]}),a=Object(d.a)(n,2),s=a[0],i=a[1];return Object(c.useEffect)((function(){i({type:V,payload:{folderId:e,folder:t}})}),[e,t]),Object(c.useEffect)((function(){if(null===e)return i({type:J,payload:{folder:_}});m.folders.doc(e).get().then((function(e){i({type:J,payload:{folder:m.formatDoc(e)}})})).catch((function(){i({type:J,payload:{folder:_}})}))}),[e]),Object(c.useEffect)((function(){return m.folders.where("parentId","==",e).where("userId","==",r.uid).orderBy("createAt").onSnapshot((function(e){i({type:K,payload:{childFolders:e.docs.map(m.formatDoc)}})}))}),[e,r]),Object(c.useEffect)((function(){return m.files.where("folderId","==",e).where("userId","==",r.uid).orderBy("createAt").onSnapshot((function(e){i({type:M,payload:{childFiles:e.docs.map(m.formatDoc)}})}))}),[e,r]),s}(e,(void 0===t?{}:t).folder),n=r.folder,a=r.childFolders,s=r.childFiles;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(q,{}),Object(w.jsxs)(I.a,{fluid:!0,children:[Object(w.jsxs)("div",{className:"d-flex align-items-center",children:[Object(w.jsx)(re,{currentFolder:n}),Object(w.jsx)(ee,{currentFolder:n}),Object(w.jsx)(Y,{currentFolder:n})]}),Object(w.jsx)("div",{children:"Folders:"}),a&&Object(w.jsx)("div",{className:"d-flex flex-wrap",children:a.map((function(e){return Object(w.jsx)("div",{style:{maxWidth:"250px"},className:"p-2",children:Object(w.jsx)(ce,{folder:e})},e.id)}))}),Object(w.jsx)("hr",{style:{border:"5px",color:"red"}}),Object(w.jsx)("div",{children:"Files:"}),s&&Object(w.jsx)("div",{className:"d-flex flex-wrap",children:s.map((function(e){return Object(w.jsx)("div",{style:{maxWidth:"250px"},className:"p-2",children:Object(w.jsx)(ne,{file:e})},e.id)}))})]})]})}var se=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(S.a,{children:Object(w.jsx)(F,{children:Object(w.jsxs)(k.d,{children:[Object(w.jsx)(k.b,{path:"/signup",component:C}),Object(w.jsx)(k.b,{path:"/login",component:E}),Object(w.jsx)(k.b,{path:"/forgot-password",component:B}),Object(w.jsx)(R,{path:"/user",component:L}),Object(w.jsx)(R,{path:"/update-profile",component:A}),Object(w.jsx)(R,{exact:!0,path:"/",component:ae}),Object(w.jsx)(R,{exact:!0,path:"/folder/:folderId",component:ae})]})})})})};r(84);s.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(se,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.e1e1686a.chunk.js.map