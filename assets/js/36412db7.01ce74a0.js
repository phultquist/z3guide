"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[920],{306:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=i(3117),n=(i(7294),i(3905)),r=i(3234),o=i.n(r);const a={},d=void 0,c={unversionedId:"Z3 JavaScript/test",id:"Z3 JavaScript/test",title:"test",description:"Run Z3 in JS bindings",source:"@site/docs/08 - Z3 JavaScript/01 - test.md",sourceDirName:"08 - Z3 JavaScript",slug:"/Z3 JavaScript/test",permalink:"/z3guide/docs/Z3 JavaScript/test",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs/08 - Z3 JavaScript/01 - test.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/z3guide/docs/Programming Z3/reference/Introduction"},next:{title:"This file is to contain more tests",permalink:"/z3guide/docs/Z3 JavaScript/more tests"}},u={},l=[{value:"Run Z3 in JS bindings",id:"run-z3-in-js-bindings",level:3}],p={toc:l};function m(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,s.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"run-z3-in-js-bindings"},"Run Z3 in JS bindings"),(0,n.kt)(o(),{input:{lang:"z3-js",highlight:"js",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"const x = Z3.Int.const('x');\n\nconst solver = new Z3.Solver();\nsolver.add(Z3.And(x.ge(0), x.le(9)));\nawait solver.check();",result:{output:"sat",error:"",status:"z3-ran",hash:"2b1c231e6ec41ff2dd18b22070a7efef9d791385"}},mdxType:"CustomCodeBlock"}))}m.isMDXComponent=!0}}]);