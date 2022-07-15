"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[949],{2287:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(3117),i=(a(7294),a(3905)),r=a(3234),s=a.n(r);const o={title:"Lambdas",sidebar_position:16},d=void 0,l={unversionedId:"logic/Lambdas",id:"logic/Lambdas",title:"Lambdas",description:"Lambda binding is available as an extension to the theory of arrays.",source:"@site/docs/01 - logic/16 - Lambdas.md",sourceDirName:"01 - logic",slug:"/logic/Lambdas",permalink:"/z3guide/docs/logic/Lambdas",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs/01 - logic/16 - Lambdas.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{title:"Lambdas",sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Quantifiers",permalink:"/z3guide/docs/logic/Quantifiers"},next:{title:"Recursive Functions",permalink:"/z3guide/docs/logic/Recursive Functions"}},c={},u=[{value:"Syntax and Semantics",id:"syntax-and-semantics",level:2},{value:"Inlining definitions using Lambda",id:"inlining-definitions-using-lambda",level:2},{value:"Lambdas as Arrays",id:"lambdas-as-arrays",level:2},{value:"From First-Order to limited Higher-Order",id:"from-first-order-to-limited-higher-order",level:2}],m={toc:u};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Lambda binding is available as an extension to the theory of arrays."),(0,i.kt)("h2",{id:"syntax-and-semantics"},"Syntax and Semantics"),(0,i.kt)("p",null,"Lambda expressions use syntax similar to quantifiers. It is of the form:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(lambda ((x X) (y Y) (z Z)) t)\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"x y z")," are lambda bound variables and ",(0,i.kt)("inlineCode",{parentName:"p"},"t")," is an expression that can contain the bound variables. "),(0,i.kt)("p",null,"The laws of lambda calculus apply.\nThe simplifier performs $\\beta$ reduction."),(0,i.kt)(s(),{input:{code:"(declare-const a Int)\n(declare-const b Int)\n(declare-const c Int)\n(simplify (select (lambda ((x Int) (y Int) (z Int)) (+ x (* z y))) a b c))",result:{output:"(+ a (* b c))\n",error:"",status:"z3-ran",hash:"ae3b21f8a43f51e16d677bfac671908836433271"}},mdxType:"Z3CodeBlock"}),(0,i.kt)("p",null,"Other rules $\\alpha$ (renaming) and $\\eta$ (extensionality) are enforced by the solver."),(0,i.kt)("h2",{id:"inlining-definitions-using-lambda"},"Inlining definitions using Lambda"),(0,i.kt)("p",null,"The main utility of lambdas in Z3 is for introducing inline definitions as the following ",(0,i.kt)("inlineCode",{parentName:"p"},"memset")," example illustrates."),(0,i.kt)(s(),{input:{code:"(declare-const m (Array Int Int))\n(declare-const m1 (Array Int Int))\n(declare-const z Int)\n(define-fun memset ((lo Int) (hi Int) (y Int) (m (Array Int Int))) \n                   (Array Int Int) \n           (lambda ((x Int)) (if (and (<= lo x) (<= x hi)) y (m x))))\n(assert (= m1 (memset 1 700 z m)))\n(assert (not (= (select m1 6) z)))\n(check-sat)",result:{output:"unsat\n",error:"",status:"z3-ran",hash:"d88d646d2d46f0439187e71470a116ee79f4f483"}},mdxType:"Z3CodeBlock"}),(0,i.kt)("p",null,"Note that the type of ",(0,i.kt)("inlineCode",{parentName:"p"},"(lambda ((x Int)) (if (and (<= lo x) (<= x hi)) y (m x)))")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"(Array Int Int)"),". "),(0,i.kt)("h2",{id:"lambdas-as-arrays"},"Lambdas as Arrays"),(0,i.kt)("p",null,"Thus, the type of a lambda expression is an array where the domain of the\narray are the argument types and the range is the sort of the body of the lambda expression."),(0,i.kt)("p",null,"Thus, in z3 arrays are synonymous with function spaces. You can transition between arrays and\nfunctions using ",(0,i.kt)("inlineCode",{parentName:"p"},"as-array")," to convert a function to an array and using function macros to treat an array as a function.\nThe example also illustrates a subtle use of recursive function declarations.\nFunctions declared using ",(0,i.kt)("inlineCode",{parentName:"p"},"define-fun-rec")," are expanded on demand and therefore the function symbols are available as arguments to ",(0,i.kt)("inlineCode",{parentName:"p"},"as-array"),".\nThis contrasts functinos declared using ",(0,i.kt)("inlineCode",{parentName:"p"},"define-fun")," that are treated as macros that are expanded at parse time. Their function symbols cannot be passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"as-array"),"."),(0,i.kt)(s(),{input:{code:"(declare-fun f (Int) Int)\n(push)\n(assert (not (=  (select (_ as-array f) 0) (f 0))))\n(check-sat)\n(pop)\n(push)\n(declare-const a (Array Int Int))\n(define-fun-rec f2 ((x Int)) Int (select a x))\n(assert (not (= (select a 0) (select (_ as-array f2) 0))))\n(check-sat)\n(pop)",result:{output:"unsat\nunsat\n",error:"",status:"z3-ran",hash:"825e4c1025ea44de1365434ea62de56b9494012b"}},mdxType:"Z3CodeBlock"}),(0,i.kt)("h2",{id:"from-first-order-to-limited-higher-order"},"From First-Order to limited Higher-Order"),(0,i.kt)("p",null,"There is limited true higher order reasoning. One basic example that ",(0,i.kt)("em",{parentName:"p"},"does")," work thanks to model construction of MBQI instantiation procedure\nis establishing a second-order definition for equality."),(0,i.kt)(s(),{input:{code:"(declare-const x Int)\n(declare-const y Int)\n(assert (forall ((q (Array Int Bool))) (= (q x) (q y))))\n(assert (not (= x y)))\n(check-sat)",result:{output:"unsat\n",error:"",status:"z3-ran",hash:"d4b145e518d3f0f32e6f9d1c63275f3de42c3aa2"}},mdxType:"Z3CodeBlock"}),(0,i.kt)("p",null,"During instantiation, z3 determines to instantiate ",(0,i.kt)("inlineCode",{parentName:"p"},"q")," with the term ",(0,i.kt)("inlineCode",{parentName:"p"},"(lambda ((z Int)) (= x z))")," and therefore it infers the fact ",(0,i.kt)("inlineCode",{parentName:"p"},"(= (= x x) (= x y))"),".\nNote that the example illustrates using an array as a function application. We wrote ",(0,i.kt)("inlineCode",{parentName:"p"},"(q x)")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"(select q x)")," for the array ",(0,i.kt)("inlineCode",{parentName:"p"},"q"),".\nIt is a feature that is supported as a convenience: the parser performs a best-effort coercions to insert ",(0,i.kt)("inlineCode",{parentName:"p"},"select")," automatically."))}p.isMDXComponent=!0}}]);