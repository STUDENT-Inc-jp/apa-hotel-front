(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[783],{62442:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(95380);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,s.Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},53905:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(95380);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,s.Z)("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]])},9883:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(95380);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,s.Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},4737:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(95380);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,s.Z)("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]])},82549:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(95380);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,s.Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},62601:function(e,t,n){"use strict";var s,r;e.exports=(null==(s=n.g.process)?void 0:s.env)&&"object"==typeof(null==(r=n.g.process)?void 0:r.env)?n.g.process:n(58960)},31877:function(e,t,n){Promise.resolve().then(n.bind(n,51203)),Promise.resolve().then(n.bind(n,19003))},51203:function(e,t,n){"use strict";n.r(t),n.d(t,{CustomInfo:function(){return y}});var s=n(57437),r=n(2265),i=n(86110),a=n(93023),l=n(9883),o=n(95380);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let c=(0,o.Z)("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);var u=n(4737),d=n(82549),f=n(62442),m=n(53905),p=n(51908),h=n(66672),v=n(62621),x=n(23699);function y(){let{toast:e}=(0,v.pm)(),{customInfo:t,addCustomInfo:n,updateCustomInfo:o,deleteCustomInfo:y}=function(){let[e,t]=(0,r.useState)(x.d),{toast:n}=(0,v.pm)();return{customInfo:e,addCustomInfo:(e,s)=>{let r={id:"custom-".concat(Date.now()),category:e,items:s.map(e=>({...e,id:"".concat(Date.now(),"-").concat(e.id)}))};t(e=>[...e,r]),n({title:"追加完了",description:"固有情報を追加しました"})},updateCustomInfo:e=>{t(t=>t.map(t=>t.id===e.id?e:t)),n({title:"更新完了",description:"固有情報を更新しました"})},deleteCustomInfo:e=>{t(t=>t.filter(t=>t.id!==e)),n({title:"削除完了",description:"固有情報を削除しました"})}}}(),[g,j]=(0,r.useState)(!1),[N,b]=(0,r.useState)(null),[w,T]=(0,r.useState)({category:"",items:[{id:"0",value:""}]}),[S,k]=(0,r.useState)(null),C=()=>{S?k({...S,items:[...S.items,{id:"new-".concat(Date.now()),value:""}]}):T({...w,items:[...w.items,{id:"new-".concat(Date.now()),value:""}]})},E=e=>{S?k({...S,items:S.items.filter(t=>t.id!==e)}):T({...w,items:w.items.filter(t=>t.id!==e)})},I=(e,t)=>{S?k({...S,items:S.items.map(n=>n.id===e?{...n,value:t}:n)}):T({...w,items:w.items.map(n=>n.id===e?{...n,value:t}:n)})},O=e=>{k({...e}),b(e.id)},z=()=>{!S||!S.category||S.items.some(e=>!e.value)||(o(S),b(null),k(null))},A=e=>{y(e)};return(0,s.jsxs)(i.Zb,{children:[(0,s.jsxs)(i.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,s.jsx)(i.ll,{className:"text-xl font-bold",children:"固有情報"}),!g&&!N&&(0,s.jsxs)(a.z,{variant:"outline",size:"sm",onClick:()=>j(!0),children:[(0,s.jsx)(l.Z,{className:"mr-2 h-4 w-4"}),"追加"]})]}),(0,s.jsxs)(i.aY,{className:"space-y-4",children:[g&&(0,s.jsxs)("div",{className:"space-y-4 border p-4 rounded-lg",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(h._,{children:"カテゴリ"}),(0,s.jsx)(p.I,{value:w.category,onChange:e=>T({...w,category:e.target.value}),placeholder:"例: 営業時間"})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)(h._,{children:"項目"}),(0,s.jsxs)(a.z,{variant:"ghost",size:"sm",onClick:C,children:[(0,s.jsx)(c,{className:"h-4 w-4 mr-2"}),"項目を追加"]})]}),w.items.map((e,t)=>(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)(p.I,{value:e.value,onChange:t=>I(e.id,t.target.value),placeholder:"項目 ".concat(t+1)}),w.items.length>1&&(0,s.jsx)(a.z,{variant:"ghost",size:"icon",onClick:()=>E(e.id),children:(0,s.jsx)(u.Z,{className:"h-4 w-4"})})]},e.id))]}),(0,s.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,s.jsxs)(a.z,{variant:"outline",size:"sm",onClick:()=>{j(!1),T({category:"",items:[{id:"0",value:""}]})},children:[(0,s.jsx)(d.Z,{className:"mr-2 h-4 w-4"}),"キャンセル"]}),(0,s.jsxs)(a.z,{size:"sm",onClick:()=>{!w.category||w.items.some(e=>!e.value)||(n(w.category,w.items),j(!1),T({category:"",items:[{id:"0",value:""}]}))},disabled:!w.category||w.items.some(e=>!e.value),children:[(0,s.jsx)(f.Z,{className:"mr-2 h-4 w-4"}),"追加"]})]})]}),t.map(e=>(0,s.jsx)("div",{className:"border p-4 rounded-lg",children:N===e.id&&S?(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(h._,{children:"カテゴリ"}),(0,s.jsx)(p.I,{value:S.category,onChange:e=>k({...S,category:e.target.value})})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)(h._,{children:"項目"}),(0,s.jsxs)(a.z,{variant:"ghost",size:"sm",onClick:C,children:[(0,s.jsx)(c,{className:"h-4 w-4 mr-2"}),"項目を追加"]})]}),S.items.map((e,t)=>(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)(p.I,{value:e.value,onChange:t=>I(e.id,t.target.value),placeholder:"項目 ".concat(t+1)}),S.items.length>1&&(0,s.jsx)(a.z,{variant:"ghost",size:"icon",onClick:()=>E(e.id),children:(0,s.jsx)(u.Z,{className:"h-4 w-4"})})]},e.id))]}),(0,s.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,s.jsxs)(a.z,{variant:"outline",size:"sm",onClick:()=>{b(null),k(null)},children:[(0,s.jsx)(d.Z,{className:"mr-2 h-4 w-4"}),"キャンセル"]}),(0,s.jsxs)(a.z,{size:"sm",onClick:z,disabled:!S.category||S.items.some(e=>!e.value),children:[(0,s.jsx)(f.Z,{className:"mr-2 h-4 w-4"}),"保存"]})]})]}):(0,s.jsx)("div",{className:"space-y-2",children:(0,s.jsxs)("div",{className:"flex justify-between items-start",children:[(0,s.jsxs)("div",{className:"space-y-2 flex-1",children:[(0,s.jsx)("h3",{className:"font-medium",children:e.category}),(0,s.jsx)("ul",{className:"space-y-1",children:e.items.map(e=>(0,s.jsx)("li",{className:"text-sm text-muted-foreground",children:e.value},e.id))})]}),(0,s.jsxs)("div",{className:"flex gap-2 ml-4",children:[(0,s.jsx)(a.z,{variant:"ghost",size:"sm",onClick:()=>O(e),children:(0,s.jsx)(m.Z,{className:"h-4 w-4"})}),(0,s.jsx)(a.z,{variant:"ghost",size:"sm",onClick:()=>A(e.id),children:(0,s.jsx)(u.Z,{className:"h-4 w-4"})})]})]})})},e.id))]})]})}},19003:function(e,t,n){"use strict";n.r(t),n.d(t,{CompanyInfo:function(){return g}});var s=n(57437),r=n(2265),i=n(51920),a=n(86110),l=n(93023),o=n(53905),c=n(49727);function u(e){let{label:t,value:n}=e;return(0,s.jsxs)("div",{className:"flex flex-col space-y-1",children:[(0,s.jsx)("p",{className:"text-sm font-medium text-muted-foreground",children:t}),(0,s.jsx)("p",{className:"text-sm font-medium",children:n})]})}var d=n(51908),f=n(66672),m=n(9883),p=n(4737),h=n(82549),v=n(62442);function x(e){let{initialData:t,onSave:n,onCancel:i}=e,[a,o]=(0,r.useState)(t),c=e=>{o({...a,respondents:a.respondents.filter((t,n)=>n!==e)})},u=(e,t)=>{let n=[...a.respondents];n[e]=t,o({...a,respondents:n})};return(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),n(a)},className:"space-y-4",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(f._,{htmlFor:"name",children:"ホテル名"}),(0,s.jsx)(d.I,{id:"name",value:a.name,onChange:e=>o({...a,name:e.target.value}),required:!0})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)(f._,{children:"回答担当者"}),(0,s.jsxs)(l.z,{type:"button",variant:"outline",size:"sm",onClick:()=>{o({...a,respondents:[...a.respondents,""]})},children:[(0,s.jsx)(m.Z,{className:"h-4 w-4 mr-2"}),"担当者を追加"]})]}),(0,s.jsx)("div",{className:"space-y-2",children:a.respondents.map((e,t)=>(0,s.jsxs)("div",{className:"flex gap-2",children:[(0,s.jsx)(d.I,{value:e,onChange:e=>u(t,e.target.value),placeholder:"担当者 ".concat(t+1),required:!0}),a.respondents.length>1&&(0,s.jsx)(l.z,{type:"button",variant:"ghost",size:"icon",onClick:()=>c(t),children:(0,s.jsx)(p.Z,{className:"h-4 w-4"})})]},t))})]}),(0,s.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,s.jsxs)(l.z,{type:"button",variant:"outline",size:"sm",onClick:i,children:[(0,s.jsx)(h.Z,{className:"h-4 w-4 mr-2"}),"キャンセル"]}),(0,s.jsxs)(l.z,{type:"submit",size:"sm",children:[(0,s.jsx)(v.Z,{className:"h-4 w-4 mr-2"}),"保存"]})]})]})}var y=n(62621);function g(){let{user:e}=(0,i.useAuth)(),{toast:t}=(0,y.pm)(),n=c.PH.find(t=>t.id===(null==e?void 0:e.hotelId)),[d,f]=(0,r.useState)(!1),[m,p]=(0,r.useState)(null);if(!n)return(0,s.jsx)("div",{children:"ホテル情報が見つかりません。"});let h=async e=>{t({title:"保存完了",description:"ホテル情報を更新しました"}),f(!1),p(null)};return(0,s.jsxs)(a.Zb,{children:[(0,s.jsxs)(a.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,s.jsx)(a.ll,{className:"text-xl font-bold",children:"基本情報"}),(0,s.jsxs)(l.z,{variant:"outline",size:"sm",onClick:()=>{p({name:n.name,respondents:n.respondents}),f(!0)},children:[(0,s.jsx)(o.Z,{className:"mr-2 h-4 w-4"}),"編集"]})]}),(0,s.jsx)(a.aY,{className:"space-y-4",children:d&&m?(0,s.jsx)(x,{initialData:m,onSave:h,onCancel:()=>{f(!1),p(null)}}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u,{label:"ホテル名",value:n.name}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)("p",{className:"text-sm font-medium text-muted-foreground",children:"回答担当者"}),(0,s.jsx)("div",{className:"space-y-1",children:n.respondents.map((e,t)=>(0,s.jsx)("p",{className:"text-sm font-medium",children:e},t))})]})]})})]})}},93023:function(e,t,n){"use strict";n.d(t,{z:function(){return c}});var s=n(57437),r=n(2265),i=n(67256),a=n(39213),l=n(39311);let o=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=r.forwardRef((e,t)=>{let{className:n,variant:r,size:a,asChild:c=!1,...u}=e,d=c?i.g7:"button";return(0,s.jsx)(d,{className:(0,l.cn)(o({variant:r,size:a,className:n})),ref:t,...u})});c.displayName="Button"},86110:function(e,t,n){"use strict";n.d(t,{Ol:function(){return l},Zb:function(){return a},aY:function(){return u},eW:function(){return d},ll:function(){return o}});var s=n(57437),r=n(2265),i=n(39311);let a=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...r})});a.displayName="Card";let l=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",n),...r})});l.displayName="CardHeader";let o=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("h3",{ref:t,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",n),...r})});o.displayName="CardTitle";let c=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("p",{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",n),...r})});c.displayName="CardDescription";let u=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,i.cn)("p-6 pt-0",n),...r})});u.displayName="CardContent";let d=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",n),...r})});d.displayName="CardFooter"},51908:function(e,t,n){"use strict";n.d(t,{I:function(){return a}});var s=n(57437),r=n(2265),i=n(39311);let a=r.forwardRef((e,t)=>{let{className:n,type:r,...a}=e;return(0,s.jsx)("input",{type:r,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:t,...a})});a.displayName="Input"},66672:function(e,t,n){"use strict";n.d(t,{_:function(){return c}});var s=n(57437),r=n(2265),i=n(36743),a=n(39213),l=n(39311);let o=(0,a.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(i.f,{ref:t,className:(0,l.cn)(o(),n),...r})});c.displayName=i.f.displayName},62621:function(e,t,n){"use strict";n.d(t,{pm:function(){return f}});var s=n(2265);let r=0,i=new Map,a=e=>{if(i.has(e))return;let t=setTimeout(()=>{i.delete(e),u({type:"REMOVE_TOAST",toastId:e})},1e6);i.set(e,t)},l=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:n}=t;return n?a(n):e.toasts.forEach(e=>{a(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},o=[],c={toasts:[]};function u(e){c=l(c,e),o.forEach(e=>{e(c)})}function d(e){let{...t}=e,n=(r=(r+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>u({type:"DISMISS_TOAST",toastId:n});return u({type:"ADD_TOAST",toast:{...t,id:n,open:!0,onOpenChange:e=>{e||s()}}}),{id:n,dismiss:s,update:e=>u({type:"UPDATE_TOAST",toast:{...e,id:n}})}}function f(){let[e,t]=s.useState(c);return s.useEffect(()=>(o.push(t),()=>{let e=o.indexOf(t);e>-1&&o.splice(e,1)}),[e]),{...e,toast:d,dismiss:e=>u({type:"DISMISS_TOAST",toastId:e})}}},51920:function(e,t,n){"use strict";n.r(t),n.d(t,{AuthProvider:function(){return m},useAuth:function(){return p}});var s=n(57437),r=n(2265),i=n(24033),a=n(62601);let l={BASE_URL:a.env.NEXT_PUBLIC_API_URL||"http://localhost:5000/api",ENDPOINTS:{AUTH:{LOGIN:"/users/login",LOGOUT:"/users/logout",ME:"/users/me"},REVIEWS:{BASE:"/reviews",DETAIL:e=>"/reviews/".concat(e)},HOTELS:{INFO:e=>"/hotels/".concat(e),CUSTOM_INFO:e=>"/hotels/".concat(e,"/custom-info")}}};async function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=localStorage.getItem("token"),s={"Content-Type":"application/json",...n&&{Authorization:"Bearer ".concat(n)},...t.headers},r=await fetch("".concat(l.BASE_URL).concat(e),{...t,headers:s});if(!r.ok){let e=await r.json();throw Error(e.message||"API request failed")}return r.json()}async function c(e,t){return o(l.ENDPOINTS.AUTH.LOGIN,{method:"POST",body:JSON.stringify({email:e,password:t})})}async function u(){return o(l.ENDPOINTS.AUTH.ME)}async function d(){return o(l.ENDPOINTS.AUTH.LOGOUT,{method:"POST"})}let f=(0,r.createContext)({user:null,login:async()=>{},logout:async()=>{},isLoading:!0});function m(e){let{children:t}=e,[n,a]=(0,r.useState)(null),[l,o]=(0,r.useState)(!0),m=(0,i.useRouter)();(0,r.useEffect)(()=>{let e=async()=>{let e=localStorage.getItem("token");if(!e){o(!1);return}try{let e=await u();a(e),m.push("/dashboard")}catch(e){localStorage.removeItem("token")}finally{o(!1)}};e()},[m]);let p=async(e,t)=>{let{user:n,token:s}=await c(e,t);localStorage.setItem("token",s),a(n),m.push("/dashboard")},h=async()=>{try{await d()}finally{a(null),localStorage.removeItem("token"),m.push("/login")}};return(0,s.jsx)(f.Provider,{value:{user:n,login:p,logout:h,isLoading:l},children:t})}let p=()=>(0,r.useContext)(f)},49727:function(e,t,n){"use strict";n.d(t,{PH:function(){return s}});let s=[{id:"hotel-1",name:"グランドホテル東京",respondents:["山田太郎","佐藤花子","鈴木一郎"]}]},23699:function(e,t,n){"use strict";n.d(t,{_:function(){return s},d:function(){return r}});let s=[{id:"1",content:"部屋は清潔でしたが、チェックインに時間がかかりすぎました。",rating:3,date:"2024-03-14",status:"completed",aiResponse:"この度はご不便をおかけし、申し訳ございませんでした。チェックイン時の待ち時間短縮に向けて、手続きの効率化を進めております。今後ともご愛顧賜りますようお願い申し上げます。",editedResponse:"この度はご不便をおかけし、誠に申し訳ございませんでした。チェックイン時の待ち時間短縮は当ホテルの重要課題として認識しており、現在手続きの効率化を進めております。お客様のご指摘を真摯に受け止め、より良いサービスの提供に努めてまいります。今後ともご愛顧賜りますようお願い申し上げます。",respondentName:"山田太郎"}],r=[{id:"1",category:"営業時間",items:[{id:"1-1",value:"24時間営業"},{id:"1-2",value:"レストラン: 6:00-23:00"},{id:"1-3",value:"スパ: 10:00-22:00"}]},{id:"2",category:"温泉情報",items:[{id:"2-1",value:"白銀の湯 (内湯)"},{id:"2-2",value:"満月の湯 (露天風呂)"},{id:"2-3",value:"効能: 神経痛、筋肉痛"}]}]},39311:function(e,t,n){"use strict";n.d(t,{cn:function(){return i}});var s=n(57042),r=n(74769);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.m6)((0,s.W)(t))}},58960:function(e){!function(){var t={229:function(e){var t,n,s,r=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var o=[],c=!1,u=-1;function d(){c&&s&&(c=!1,s.length?o=s.concat(o):u=-1,o.length&&f())}function f(){if(!c){var e=l(d);c=!0;for(var t=o.length;t;){for(s=o,o=[];++u<t;)s&&s[u].run();u=-1,t=o.length}s=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];o.push(new m(e,t)),1!==o.length||c||l(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function s(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,s),a=!1}finally{a&&delete n[e]}return i.exports}s.ab="//";var r=s(229);e.exports=r}()},24033:function(e,t,n){e.exports=n(20290)},42210:function(e,t,n){"use strict";n.d(t,{F:function(){return r},e:function(){return i}});var s=n(2265);function r(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function i(...e){return s.useCallback(r(...e),e)}},36743:function(e,t,n){"use strict";n.d(t,{f:function(){return l}});var s=n(2265),r=n(9381),i=n(57437),a=s.forwardRef((e,t)=>(0,i.jsx)(r.WV.label,{...e,ref:t,onMouseDown:t=>{let n=t.target;n.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));a.displayName="Label";var l=a},9381:function(e,t,n){"use strict";n.d(t,{WV:function(){return l},jH:function(){return o}});var s=n(2265),r=n(54887),i=n(67256),a=n(57437),l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=s.forwardRef((e,n)=>{let{asChild:s,...r}=e,l=s?i.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(l,{...r,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function o(e,t){e&&r.flushSync(()=>e.dispatchEvent(t))}},67256:function(e,t,n){"use strict";n.d(t,{g7:function(){return a}});var s=n(2265),r=n(42210),i=n(57437),a=s.forwardRef((e,t)=>{let{children:n,...r}=e,a=s.Children.toArray(n),o=a.find(c);if(o){let e=o.props.children,n=a.map(t=>t!==o?t:s.Children.count(e)>1?s.Children.only(null):s.isValidElement(e)?e.props.children:null);return(0,i.jsx)(l,{...r,ref:t,children:s.isValidElement(e)?s.cloneElement(e,void 0,n):null})}return(0,i.jsx)(l,{...r,ref:t,children:n})});a.displayName="Slot";var l=s.forwardRef((e,t)=>{let{children:n,...i}=e;if(s.isValidElement(n)){let e,a;let l=(e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?n.props.ref:n.props.ref||n.ref;return s.cloneElement(n,{...function(e,t){let n={...t};for(let s in t){let r=e[s],i=t[s],a=/^on[A-Z]/.test(s);a?r&&i?n[s]=(...e)=>{i(...e),r(...e)}:r&&(n[s]=r):"style"===s?n[s]={...r,...i}:"className"===s&&(n[s]=[r,i].filter(Boolean).join(" "))}return{...e,...n}}(i,n.props),ref:t?(0,r.F)(t,l):l})}return s.Children.count(n)>1?s.Children.only(null):null});l.displayName="SlotClone";var o=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function c(e){return s.isValidElement(e)&&e.type===o}}},function(e){e.O(0,[449,971,864,744],function(){return e(e.s=31877)}),_N_E=e.O()}]);