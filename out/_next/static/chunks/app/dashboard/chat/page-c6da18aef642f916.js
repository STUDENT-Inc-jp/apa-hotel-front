(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[331],{23157:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(95380);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s.Z)("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},6141:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(95380);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s.Z)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},53905:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(95380);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s.Z)("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]])},55340:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(95380);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s.Z)("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]])},82549:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var s=n(95380);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,s.Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},44994:function(e,t,n){Promise.resolve().then(n.bind(n,80751))},80751:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var s=n(57437);function a(){return(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-2xl font-bold tracking-tight",children:"レビュー返答作成"}),(0,s.jsx)("p",{className:"text-muted-foreground",children:"レビューに対するAI回答を生成できます"})]})}var r=n(2265),l=n(93023),i=n(55771),o=n(58094),c=n(66672),d=n(86110),u=n(51920),f=n(49727);function m(e){let{onSubmit:t}=e,{user:n}=(0,u.useAuth)(),a=f.PH.find(e=>e.id===(null==n?void 0:n.hotelId)),[m,h]=(0,r.useState)(""),[p,x]=(0,r.useState)(""),[y,N]=(0,r.useState)("");return(0,s.jsxs)(d.Zb,{children:[(0,s.jsx)(d.Ol,{className:"pb-2",children:(0,s.jsx)(d.ll,{className:"text-lg",children:"レビュー回答生成"})}),(0,s.jsx)(d.aY,{children:(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),m&&p&&y&&(t({content:m,rating:parseInt(p,10),respondentName:y}),h(""),x(""),N(""))},className:"space-y-4",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(c._,{htmlFor:"content",children:"レビュー内容"}),(0,s.jsx)(i.g,{id:"content",value:m,onChange:e=>h(e.target.value),placeholder:"レビュー内容を入力してください",className:"h-32"})]}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(c._,{htmlFor:"rating",children:"評価"}),(0,s.jsxs)(o.Ph,{value:p,onValueChange:x,children:[(0,s.jsx)(o.i4,{id:"rating",children:(0,s.jsx)(o.ki,{placeholder:"評価を選択してください"})}),(0,s.jsx)(o.Bw,{children:[5,4,3,2,1].map(e=>(0,s.jsxs)(o.Ql,{value:e.toString(),children:["★".repeat(e)," (",e,")"]},e))})]})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(c._,{htmlFor:"respondentName",children:"回答担当者"}),(0,s.jsxs)(o.Ph,{value:y,onValueChange:N,children:[(0,s.jsx)(o.i4,{id:"respondentName",children:(0,s.jsx)(o.ki,{placeholder:"担当者を選択してください"})}),(0,s.jsx)(o.Bw,{children:null==a?void 0:a.respondents.map(e=>(0,s.jsx)(o.Ql,{value:e,children:e},e))})]})]})]}),(0,s.jsx)(l.z,{type:"submit",className:"w-full",disabled:!m||!p||!y,children:"AI回答を生成"})]})})]})}var h=n(23618),p=n(9884);function x(){let{selectedReview:e,createReview:t,saveReview:n}=(0,p.D)();return(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsx)(a,{}),(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsx)(m,{onSubmit:t}),e&&(0,s.jsx)(h.L,{review:e,onSaveEdit:n})]})]})}},66672:function(e,t,n){"use strict";n.d(t,{_:function(){return c}});var s=n(57437),a=n(2265),r=n(36743),l=n(39213),i=n(39311);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)(r.f,{ref:t,className:(0,i.cn)(o(),n),...a})});c.displayName=r.f.displayName},58094:function(e,t,n){"use strict";n.d(t,{Bw:function(){return p},Ph:function(){return d},Ql:function(){return y},i4:function(){return f},ki:function(){return u}});var s=n(57437),a=n(2265),r=n(55748),l=n(83523),i=n(9224),o=n(62442),c=n(39311);let d=r.fC;r.ZA;let u=r.B4,f=a.forwardRef((e,t)=>{let{className:n,children:a,...i}=e;return(0,s.jsxs)(r.xz,{ref:t,className:(0,c.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",n),...i,children:[a,(0,s.jsx)(r.JO,{asChild:!0,children:(0,s.jsx)(l.Z,{className:"h-4 w-4 opacity-50"})})]})});f.displayName=r.xz.displayName;let m=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)(r.u_,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",n),...a,children:(0,s.jsx)(i.Z,{className:"h-4 w-4"})})});m.displayName=r.u_.displayName;let h=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)(r.$G,{ref:t,className:(0,c.cn)("flex cursor-default items-center justify-center py-1",n),...a,children:(0,s.jsx)(l.Z,{className:"h-4 w-4"})})});h.displayName=r.$G.displayName;let p=a.forwardRef((e,t)=>{let{className:n,children:a,position:l="popper",...i}=e;return(0,s.jsx)(r.h_,{children:(0,s.jsxs)(r.VY,{ref:t,className:(0,c.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===l&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",n),position:l,...i,children:[(0,s.jsx)(m,{}),(0,s.jsx)(r.l_,{className:(0,c.cn)("p-1","popper"===l&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:a}),(0,s.jsx)(h,{})]})})});p.displayName=r.VY.displayName;let x=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)(r.__,{ref:t,className:(0,c.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",n),...a})});x.displayName=r.__.displayName;let y=a.forwardRef((e,t)=>{let{className:n,children:a,...l}=e;return(0,s.jsxs)(r.ck,{ref:t,className:(0,c.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...l,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(r.wU,{children:(0,s.jsx)(o.Z,{className:"h-4 w-4"})})}),(0,s.jsx)(r.eT,{children:a})]})});y.displayName=r.ck.displayName;let N=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,s.jsx)(r.Z0,{ref:t,className:(0,c.cn)("-mx-1 my-1 h-px bg-muted",n),...a})});N.displayName=r.Z0.displayName},51920:function(e,t,n){"use strict";n.r(t),n.d(t,{AuthProvider:function(){return m},useAuth:function(){return h}});var s=n(57437),a=n(2265),r=n(24033),l=n(62601);let i={BASE_URL:l.env.NEXT_PUBLIC_API_URL||"http://localhost:5000/api",ENDPOINTS:{AUTH:{LOGIN:"/users/login",LOGOUT:"/users/logout",ME:"/users/me"},REVIEWS:{BASE:"/reviews",DETAIL:e=>"/reviews/".concat(e)},HOTELS:{INFO:e=>"/hotels/".concat(e),CUSTOM_INFO:e=>"/hotels/".concat(e,"/custom-info")}}};async function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=localStorage.getItem("token"),s={"Content-Type":"application/json",...n&&{Authorization:"Bearer ".concat(n)},...t.headers},a=await fetch("".concat(i.BASE_URL).concat(e),{...t,headers:s});if(!a.ok){let e=await a.json();throw Error(e.message||"API request failed")}return a.json()}async function c(e,t){return o(i.ENDPOINTS.AUTH.LOGIN,{method:"POST",body:JSON.stringify({email:e,password:t})})}async function d(){return o(i.ENDPOINTS.AUTH.ME)}async function u(){return o(i.ENDPOINTS.AUTH.LOGOUT,{method:"POST"})}let f=(0,a.createContext)({user:null,login:async()=>{},logout:async()=>{},isLoading:!0});function m(e){let{children:t}=e,[n,l]=(0,a.useState)(null),[i,o]=(0,a.useState)(!0),m=(0,r.useRouter)();(0,a.useEffect)(()=>{let e=async()=>{let e=localStorage.getItem("token");if(!e){o(!1);return}try{let e=await d();l(e),m.push("/dashboard")}catch(e){localStorage.removeItem("token")}finally{o(!1)}};e()},[m]);let h=async(e,t)=>{let{user:n,token:s}=await c(e,t);localStorage.setItem("token",s),l(n),m.push("/dashboard")},p=async()=>{try{await u()}finally{l(null),localStorage.removeItem("token"),m.push("/login")}};return(0,s.jsx)(f.Provider,{value:{user:n,login:h,logout:p,isLoading:i},children:t})}let h=()=>(0,a.useContext)(f)},49727:function(e,t,n){"use strict";n.d(t,{PH:function(){return s}});let s=[{id:"hotel-1",name:"グランドホテル東京",respondents:["山田太郎","佐藤花子","鈴木一郎"]}]}},function(e){e.O(0,[449,535,601,602,971,864,744],function(){return e(e.s=44994)}),_N_E=e.O()}]);