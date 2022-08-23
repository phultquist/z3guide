"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7968],{2669:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=t(3117),r=(t(7294),t(3905)),d=t(7634),o=t.n(d);const a={title:"Guess the Secret Formula",sidebar_position:2},c=void 0,i={unversionedId:"Guess the Secret Formula",id:"Guess the Secret Formula",title:"Guess the Secret Formula",description:"The following lists a few puzzles. The challenge",source:"@site/docs-playground/02 - Guess the Secret Formula.md",sourceDirName:".",slug:"/Guess the Secret Formula",permalink:"/z3guide/playground/Guess the Secret Formula",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-playground/02 - Guess the Secret Formula.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Guess the Secret Formula",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Freeform Editing",permalink:"/z3guide/playground/Freeform Editing"}},u={},l=[],b={toc:l};function v(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following lists a few puzzles. The challenge\nis to ",(0,r.kt)("em",{parentName:"p"},"guess")," a hidden formula. You are provided only the\nfree variables in the formula and you can only enter a candidate\nformula. As long as there are values for the free variables that evaluate\nthe secret formula and yours differently, the puzzle wizard provides\ncounter-examples."),(0,r.kt)(o(),{input:{lang:"z3-duo",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Int)",result:{output:"(declare-const x Int)\n(assert (= (mod x 2) 0))"},githubRepo:"Z3Prover/z3",editable:!0,readonly:!1,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,r.kt)(o(),{input:{lang:"z3-duo",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Int)",result:{output:"(declare-const x Int)\n(assert (or (and (< 0 x) (<= x 7)) (= x 11)))"},githubRepo:"Z3Prover/z3",editable:!0,readonly:!1,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,r.kt)(o(),{input:{lang:"z3-duo",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x Int)",result:{output:"(declare-const x Int)\n(assert (and (> x 0) (= (mod x 2) 0)))"},githubRepo:"Z3Prover/z3",editable:!0,readonly:!1,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,r.kt)(o(),{input:{lang:"z3-duo",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x (_ BitVec 32))",result:{output:"(declare-const x (_ BitVec 32))\n(assert (= (bvand x (bvsub x (_ bv1 32))) (_ bv0 32)))"},githubRepo:"Z3Prover/z3",editable:!0,readonly:!1,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,r.kt)(o(),{input:{lang:"z3-duo",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const queen1 (_ BitVec 4))\n(declare-const queen2 (_ BitVec 4))\n(declare-const queen3 (_ BitVec 4))\n(declare-const queen4 (_ BitVec 4))",result:{output:"(declare-const queen1 (_ BitVec 4))\n(declare-const queen2 (_ BitVec 4))\n(declare-const queen3 (_ BitVec 4))\n(declare-const queen4 (_ BitVec 4))\n\n\n(define-fun single_bit ((x (_ BitVec 4))) Bool\n   (or (= x (_ bv1 4)) (= x (_ bv2 4))(= x (_ bv4 4))(= x (_ bv8 4))))\n\n(assert (single_bit queen1))\n(assert (single_bit queen2))\n(assert (single_bit queen3))\n(assert (single_bit queen4))\n\n; no vertical\n(assert (= (_ bv0 4) (bvand queen1 queen2)))\n(assert (= (_ bv0 4) (bvand queen1 queen3)))\n(assert (= (_ bv0 4) (bvand queen1 queen4)))\n(assert (= (_ bv0 4) (bvand queen2 queen3)))\n(assert (= (_ bv0 4) (bvand queen2 queen4)))\n(assert (= (_ bv0 4) (bvand queen3 queen4)))\n\n; no diagonal\n(assert (= (_ bv0 4) (bvand queen1 (bvlshr queen2 (_ bv1 4)))))\n(assert (= (_ bv0 4) (bvand queen1 (bvlshr queen3 (_ bv2 4)))))\n(assert (= (_ bv0 4) (bvand queen1 (bvlshr queen4 (_ bv3 4)))))\n(assert (= (_ bv0 4) (bvand queen2 (bvlshr queen3 (_ bv1 4)))))\n(assert (= (_ bv0 4) (bvand queen2 (bvlshr queen4 (_ bv2 4)))))\n(assert (= (_ bv0 4) (bvand queen3 (bvlshr queen4 (_ bv1 4)))))\n\n(assert (= (_ bv0 4) (bvand queen1 (bvshl queen2 (_ bv1 4)))))\n(assert (= (_ bv0 4) (bvand queen1 (bvshl queen3 (_ bv2 4)))))\n(assert (= (_ bv0 4) (bvand queen1 (bvshl queen4 (_ bv3 4)))))\n(assert (= (_ bv0 4) (bvand queen2 (bvshl queen3 (_ bv1 4)))))\n(assert (= (_ bv0 4) (bvand queen2 (bvshl queen4 (_ bv2 4)))))\n(assert (= (_ bv0 4) (bvand queen3 (bvshl queen4 (_ bv1 4)))))"},githubRepo:"Z3Prover/z3",editable:!0,readonly:!1,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,r.kt)(o(),{input:{lang:"z3-duo",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x (_ BitVec 32))",result:{output:"; count number of 1's in a bit-vector\n;int popcount_32 (unsigned int v) { \n;  v = v - ((v >> 1) & 0x55555555); \n;  v = (v & 0x33333333) + ((v >> 2) & 0x33333333); \n;  v = ((v + (v >> 4) & 0xF0F0F0F) * 0x1010101) >> 24; \n;  return(v); \n;} \n\n(declare-const x (_ BitVec 32))\n(declare-const y (_ BitVec 32))\n\n(define-fun pcLine1 ((x (_ BitVec 32))) (_ BitVec 32)\n   (bvsub x (bvand (bvlshr x #x00000001) #x55555555)))\n\n(define-fun pcLine2 ((x (_ BitVec 32))) (_ BitVec 32)\n   (bvadd (bvand x #x33333333) (bvand (bvlshr x #x00000002) #x33333333)))\n\n(define-fun pcLine3 ((x (_ BitVec 32))) (_ BitVec 32)\n   (bvlshr (bvmul (bvand (bvadd (bvlshr x #x00000004) x) #x0f0f0f0f) #x01010101) #x00000018))\n\n\n(assert (= y (pcLine3 (pcLine2 (pcLine1 x)))))"},githubRepo:"Z3Prover/z3",editable:!0,readonly:!1,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,r.kt)(o(),{input:{lang:"z3-duo",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const x0 (_ BitVec 3))\n(declare-const x1 (_ BitVec 3))\n(declare-const x2 (_ BitVec 3))\n(declare-const x3 (_ BitVec 3))\n(declare-const x4 (_ BitVec 3))\n(declare-const x5 (_ BitVec 3))\n(declare-const x6 (_ BitVec 3))\n(declare-const x7 (_ BitVec 3))",result:{output:"; Gray codes\n(declare-const x0 (_ BitVec 3))\n(declare-const x1 (_ BitVec 3))\n(declare-const x2 (_ BitVec 3))\n(declare-const x3 (_ BitVec 3))\n(declare-const x4 (_ BitVec 3))\n(declare-const x5 (_ BitVec 3))\n(declare-const x6 (_ BitVec 3))\n(declare-const x7 (_ BitVec 3))\n\n(define-fun single_bit ((x (_ BitVec 3))) Bool\n   (or (= x (_ bv1 3)) (= x (_ bv2 3))(= x (_ bv4 3))))\n\n(assert (distinct x0 x1 x2 x3 x4 x5 x6 x7))\n(assert (single_bit (bvxor x0 x1)))\n(assert (single_bit (bvxor x1 x2)))\n(assert (single_bit (bvxor x2 x3)))\n(assert (single_bit (bvxor x3 x4)))\n(assert (single_bit (bvxor x4 x5)))\n(assert (single_bit (bvxor x5 x6)))\n(assert (single_bit (bvxor x6 x7)))\n(assert (single_bit (bvxor x7 x0)))"},githubRepo:"Z3Prover/z3",editable:!0,readonly:!1,showLineNumbers:!0},mdxType:"CustomCodeBlock"}),(0,r.kt)(o(),{input:{lang:"z3-duo",highlight:"clojure",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const d0 Int)\n(declare-const d1 Int)\n(declare-const d2 Int)\n(declare-const d3 Int)\n(declare-const d4 Int)\n(declare-const d5 Int)\n(declare-const d6 Int)\n(declare-const d7 Int)\n(declare-const d8 Int)\n(declare-const d9 Int)\n(declare-const d10 Int)\n(declare-const d11 Int)\n(declare-const d12 Int)\n(declare-const d13 Int)\n(declare-const d14 Int)\n(declare-const d15 Int)\n(assert (<= 0 d0 9))\n(assert (<= 0 d1 9))\n(assert (<= 0 d2 9))\n(assert (<= 0 d3 9))\n(assert (<= 0 d4 9))\n(assert (<= 0 d5 9))\n(assert (<= 0 d6 9))\n(assert (<= 0 d7 9))\n(assert (<= 0 d8 9))\n(assert (<= 0 d9 9))\n(assert (<= 0 d10 9))\n(assert (<= 0 d11 9))\n(assert (<= 0 d12 9))\n(assert (<= 0 d13 9))\n(assert (<= 0 d14 9))\n(assert (<= 0 d15 9))",result:{output:"(declare-const d0 Int)\n(declare-const d1 Int)\n(declare-const d2 Int)\n(declare-const d3 Int)\n(declare-const d4 Int)\n(declare-const d5 Int)\n(declare-const d6 Int)\n(declare-const d7 Int)\n(declare-const d8 Int)\n(declare-const d9 Int)\n(declare-const d10 Int)\n(declare-const d11 Int)\n(declare-const d12 Int)\n(declare-const d13 Int)\n(declare-const d14 Int)\n(declare-const d15 Int)\n(assert (<= 0 d0 9))\n(assert (<= 0 d1 9))\n(assert (<= 0 d2 9))\n(assert (<= 0 d3 9))\n(assert (<= 0 d4 9))\n(assert (<= 0 d5 9))\n(assert (<= 0 d6 9))\n(assert (<= 0 d7 9))\n(assert (<= 0 d8 9))\n(assert (<= 0 d9 9))\n(assert (<= 0 d10 9))\n(assert (<= 0 d11 9))\n(assert (<= 0 d12 9))\n(assert (<= 0 d13 9))\n(assert (<= 0 d14 9))\n(assert (<= 0 d15 9))\n\n(define-fun even ((c Int)) Int\n      (if (>= (* 2 c) 10) (+ (mod (* 2 c) 10) (div (* 2 c) 10)) (* 2 c)))\n(define-fun odd ((c Int)) Int c)\n      \n(assert (let\n\t      ((digits (+ (even d0) (odd d1) (even d2) (odd d3) (even d4)\n\t                 (odd d5) (even d6) (odd d7) (even d8) (odd d9)\n\t\t\t (even d10) (odd d11) (even d12) (odd d13) (even d14)\n\t\t\t d15)))\n\t      (= (mod digits 10) 0)))\n\n\n\t      \n;4-5-7-8-4-2-3-0-1-3-7-6-9-2-1\n; Starting with the first digit, multiply every second digit by 2:\n; 8-5-14-8-8-2-6-0-2-3-14-6-18-2-2\n; Every time you have a two-digit number, just add those digits together for a one-digit result:\n; 8-5-5-8-8-2-6-0-2-3-5-6-9-2-2\n; Finally, add all the numbers together:\n; 8 + 5 + 5 + 8 + 8 + 2 + 6 + 0 + 2 + 3 + 5 + 6 + 9 + 2 + 2 = 71\n; When this number is added to the check digit, then the result must be an even multiple of 10. In this case:\n; 71 + 9 = 80"},githubRepo:"Z3Prover/z3",editable:!0,readonly:!1,showLineNumbers:!0},mdxType:"CustomCodeBlock"}))}v.isMDXComponent=!0}}]);