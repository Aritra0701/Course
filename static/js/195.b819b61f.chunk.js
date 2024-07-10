"use strict";(self.webpackChunkcourse=self.webpackChunkcourse||[]).push([[195],{3195:(e,n,o)=>{o.r(n),o.d(n,{default:()=>h});var a=o(5043),t=o(3003),i=o(3216),r=o(69),s=o(6446),m=o(9252),l=o(2110),c=o(6591),d=o(6494),u=o(5865),p=o(8230),A=o(1906),x=o(8513),g=o(579);const h=function(){const[e,n]=(0,a.useState)({email:"",name:"",comment:""}),[o,h]=(0,a.useState)(""),{id:v}=(0,i.g)();console.log(v);const{details:C}=(0,t.d4)((e=>e.Details)),{comment:f}=(0,t.d4)((e=>e.Details));console.log(f),console.log(C);const j=(0,t.wA)();let M,y;(0,a.useEffect)((()=>{j((0,r.ZX)(v)),j((0,r.iU)(v))}),[j,v]),console.log(o);const b=a=>{M=a.target.name,y=a.target.value,"name"===M&&(0===y.length?(h({...o,name:"Name is Required"}),n({...e,name:""})):(h({...o,name:""}),n({...e,name:y}))),"email"===M&&(0===y.length?(h({...o,email:"Email is Required"}),n({...e,email:""})):(h({...o,email:""}),n({...e,email:y}))),"comment"===M&&(0===y.length?(h({...o,comment:"Comment is Required"}),n({...e,comment:""})):(h({...o,comment:""}),n({...e,comment:y})))};return(0,g.jsx)(s.A,{children:(0,g.jsxs)(m.A,{sx:{marginTop:"80px"},children:[(0,g.jsxs)(l.A,{children:[(0,g.jsx)(c.A,{component:"img",alt:"",image:(0,x.et)(C._id),sx:{height:"300px",objectFit:"cover"}}),(0,g.jsxs)(d.A,{children:[(0,g.jsx)(u.A,{variant:"h5",textAlign:"center",children:C.title}),(0,g.jsx)(u.A,{dangerouslySetInnerHTML:{__html:C.postText},variant:"body2",sx:{marginTop:"10px"}})]})]}),(0,g.jsx)(s.A,{children:Array.isArray(f)&&f.map(((e,n)=>(0,g.jsxs)("div",{children:[(0,g.jsx)(u.A,{variant:"h5",children:e.name}),(0,g.jsx)(u.A,{variant:"h5",children:e.comment})]})))}),(0,g.jsxs)(s.A,{component:"form",sx:{marginTop:"30px",padding:"20px",border:"1px solid #ccc",borderRadius:"5px"},onSubmit:o=>{o.preventDefault(),h((()=>{let n={};return e.name||(n.name="Name is Required"),e.email||(n.email="Email is Required"),e.comment||(n.comment="Comment is Required"),n})());const a={name:e.name,email:e.email,comment:e.comment};j((0,r.VV)({id:v,payload:a})).then((()=>j((0,r.iU)(v)))),n({name:"",email:"",comment:""})},children:[(0,g.jsx)(u.A,{variant:"h5",textAlign:"center",children:" Leave a Reply"}),(0,g.jsx)(p.A,{id:"name",name:"name",label:"Name",fullWidth:!0,variant:"outlined",value:e.name,onChange:b,sx:{marginTop:"10px"}}),(0,g.jsxs)("span",{style:{color:"red"},children:[" ",o.name," "]}),(0,g.jsx)(p.A,{id:"email",name:"email",label:"Enter the Email",fullWidth:!0,variant:"outlined",value:e.email,onChange:b,sx:{marginTop:"10px"}}),(0,g.jsxs)("span",{style:{color:"red"},children:[" ",o.email," "]}),(0,g.jsx)(p.A,{id:"comment",name:"comment",label:"Comment",fullWidth:!0,variant:"outlined",value:e.comment,onChange:b,sx:{marginTop:"10px"}}),(0,g.jsxs)("span",{style:{color:"red"},children:[" ",o.comment," "]}),(0,g.jsx)(A.A,{type:"submit",variant:"contained",sx:{marginTop:"20px"},children:"Submit"})]})]})})}},6494:(e,n,o)=>{o.d(n,{A:()=>g});var a=o(8168),t=o(8587),i=o(5043),r=o(8387),s=o(8606),m=o(4535),l=o(2876),c=o(7056),d=o(2400);function u(e){return(0,d.Ay)("MuiCardContent",e)}(0,c.A)("MuiCardContent",["root"]);var p=o(579);const A=["className","component"],x=(0,m.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),g=i.forwardRef((function(e,n){const o=(0,l.A)({props:e,name:"MuiCardContent"}),{className:i,component:m="div"}=o,c=(0,t.A)(o,A),d=(0,a.A)({},o,{component:m}),g=(e=>{const{classes:n}=e;return(0,s.A)({root:["root"]},u,n)})(d);return(0,p.jsx)(x,(0,a.A)({as:m,className:(0,r.A)(g.root,i),ownerState:d,ref:n},c))}))},6591:(e,n,o)=>{o.d(n,{A:()=>v});var a=o(8587),t=o(8168),i=o(5043),r=o(8387),s=o(8606),m=o(2876),l=o(4535),c=o(7056),d=o(2400);function u(e){return(0,d.Ay)("MuiCardMedia",e)}(0,c.A)("MuiCardMedia",["root","media","img"]);var p=o(579);const A=["children","className","component","image","src","style"],x=(0,l.Ay)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e,{isMediaComponent:a,isImageComponent:t}=o;return[n.root,a&&n.media,t&&n.img]}})((e=>{let{ownerState:n}=e;return(0,t.A)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},n.isMediaComponent&&{width:"100%"},n.isImageComponent&&{objectFit:"cover"})})),g=["video","audio","picture","iframe","img"],h=["picture","img"],v=i.forwardRef((function(e,n){const o=(0,m.A)({props:e,name:"MuiCardMedia"}),{children:i,className:l,component:c="div",image:d,src:v,style:C}=o,f=(0,a.A)(o,A),j=-1!==g.indexOf(c),M=!j&&d?(0,t.A)({backgroundImage:'url("'.concat(d,'")')},C):C,y=(0,t.A)({},o,{component:c,isMediaComponent:j,isImageComponent:-1!==h.indexOf(c)}),b=(e=>{const{classes:n,isMediaComponent:o,isImageComponent:a}=e,t={root:["root",o&&"media",a&&"img"]};return(0,s.A)(t,u,n)})(y);return(0,p.jsx)(x,(0,t.A)({className:(0,r.A)(b.root,l),as:c,role:!j&&d?"img":void 0,ref:n,style:M,ownerState:y,src:j?d||v:void 0},f,{children:i}))}))},2110:(e,n,o)=>{o.d(n,{A:()=>h});var a=o(8168),t=o(8587),i=o(5043),r=o(8387),s=o(8606),m=o(4535),l=o(2876),c=o(3336),d=o(7056),u=o(2400);function p(e){return(0,u.Ay)("MuiCard",e)}(0,d.A)("MuiCard",["root"]);var A=o(579);const x=["className","raised"],g=(0,m.Ay)(c.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({overflow:"hidden"}))),h=i.forwardRef((function(e,n){const o=(0,l.A)({props:e,name:"MuiCard"}),{className:i,raised:m=!1}=o,c=(0,t.A)(o,x),d=(0,a.A)({},o,{raised:m}),u=(e=>{const{classes:n}=e;return(0,s.A)({root:["root"]},p,n)})(d);return(0,A.jsx)(g,(0,a.A)({className:(0,r.A)(u.root,i),elevation:m?8:void 0,ref:n,ownerState:d},c))}))}}]);
//# sourceMappingURL=195.b819b61f.chunk.js.map