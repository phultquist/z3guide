"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3327],{6617:(i,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>n});var s=t(7462),r=(t(7294),t(3905));t(7634);const l={title:"Simplifiers Summary",sidebar_position:7},p=void 0,a={unversionedId:"strategies/simplifiers-summary",id:"strategies/simplifiers-summary",title:"Simplifiers Summary",description:"Simplifier bit-blast",source:"@site/docs-smtlib/03 - strategies/07 - simplifiers-summary.md",sourceDirName:"03 - strategies",slug:"/strategies/simplifiers-summary",permalink:"/z3guide/docs/strategies/simplifiers-summary",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/03 - strategies/07 - simplifiers-summary.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Simplifiers Summary",sidebar_position:7},sidebar:"smtlibSidebar",previous:{title:"Tactics Summary",permalink:"/z3guide/docs/strategies/summary"},next:{title:"Introduction",permalink:"/z3guide/docs/optimization/intro"}},o={},n=[{value:"Simplifier bit-blast",id:"simplifier-bit-blast",level:2},{value:"Description",id:"description",level:3},{value:"Simplifier bit2int",id:"simplifier-bit2int",level:2},{value:"Description",id:"description-1",level:3},{value:"Simplifier bound-simplifier",id:"simplifier-bound-simplifier",level:2},{value:"Description",id:"description-2",level:3},{value:"Simplifier bv-slice",id:"simplifier-bv-slice",level:2},{value:"Description",id:"description-3",level:3},{value:"Simplifier card2bv",id:"simplifier-card2bv",level:2},{value:"Description",id:"description-4",level:3},{value:"Simplifier cheap-fourier-motzkin",id:"simplifier-cheap-fourier-motzkin",level:2},{value:"Description",id:"description-5",level:3},{value:"Simplifier demodulator",id:"simplifier-demodulator",level:2},{value:"Description",id:"description-6",level:3},{value:"Simplifier distribute-forall",id:"simplifier-distribute-forall",level:2},{value:"Description",id:"description-7",level:3},{value:"Simplifier dom-simplify",id:"simplifier-dom-simplify",level:2},{value:"Description",id:"description-8",level:3},{value:"Simplifier elim-predicates",id:"simplifier-elim-predicates",level:2},{value:"Description",id:"description-9",level:3},{value:"Simplifier elim-term-ite",id:"simplifier-elim-term-ite",level:2},{value:"Description",id:"description-10",level:3},{value:"Simplifier elim-unconstrained",id:"simplifier-elim-unconstrained",level:2},{value:"Description",id:"description-11",level:3},{value:"Simplifier euf-completion",id:"simplifier-euf-completion",level:2},{value:"Description",id:"description-12",level:3},{value:"Simplifier propagate-bv-bounds",id:"simplifier-propagate-bv-bounds",level:2},{value:"Description",id:"description-13",level:3},{value:"Simplifier propagate-ineqs",id:"simplifier-propagate-ineqs",level:2},{value:"Description",id:"description-14",level:3},{value:"Simplifier propagate-values",id:"simplifier-propagate-values",level:2},{value:"Description",id:"description-15",level:3},{value:"Simplifier pull-nested-quantifiers",id:"simplifier-pull-nested-quantifiers",level:2},{value:"Description",id:"description-16",level:3},{value:"Simplifier push-app-ite-conservative",id:"simplifier-push-app-ite-conservative",level:2},{value:"Description",id:"description-17",level:3},{value:"Simplifier push-app-ite",id:"simplifier-push-app-ite",level:2},{value:"Description",id:"description-18",level:3},{value:"Simplifier ng-push-app-ite-conservative",id:"simplifier-ng-push-app-ite-conservative",level:2},{value:"Description",id:"description-19",level:3},{value:"Simplifier ng-push-app-ite",id:"simplifier-ng-push-app-ite",level:2},{value:"Description",id:"description-20",level:3},{value:"Simplifier qe-light",id:"simplifier-qe-light",level:2},{value:"Description",id:"description-21",level:3},{value:"Simplifier reduce-args",id:"simplifier-reduce-args",level:2},{value:"Description",id:"description-22",level:3},{value:"Simplifier refine-injectivity",id:"simplifier-refine-injectivity",level:2},{value:"Description",id:"description-23",level:3},{value:"Simplifier simplify",id:"simplifier-simplify",level:2},{value:"Description",id:"description-24",level:3},{value:"Simplifier solve-eqs",id:"simplifier-solve-eqs",level:2},{value:"Description",id:"description-25",level:3}],m={toc:n};function c(i){let{components:e,...t}=i;return(0,r.kt)("wrapper",(0,s.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"simplifier-bit-blast"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-bit-blast"},"bit-blast")),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"reduce bit-vector expressions into SAT."),(0,r.kt)("h2",{id:"simplifier-bit2int"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-bit2int"},"bit2int")),(0,r.kt)("h3",{id:"description-1"},"Description"),(0,r.kt)("p",null,"simplify bit2int expressions."),(0,r.kt)("h2",{id:"simplifier-bound-simplifier"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-bound-simplifier"},"bound-simplifier")),(0,r.kt)("h3",{id:"description-2"},"Description"),(0,r.kt)("p",null,"Simplify arithmetical expressions modulo bounds."),(0,r.kt)("h2",{id:"simplifier-bv-slice"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-bv-slice"},"bv-slice")),(0,r.kt)("h3",{id:"description-3"},"Description"),(0,r.kt)("p",null,"simplify using bit-vector slices."),(0,r.kt)("h2",{id:"simplifier-card2bv"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-card2bv"},"card2bv")),(0,r.kt)("h3",{id:"description-4"},"Description"),(0,r.kt)("p",null,"convert pseudo-boolean constraints to bit-vectors."),(0,r.kt)("h2",{id:"simplifier-cheap-fourier-motzkin"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-cheap-fourier-motzkin"},"cheap-fourier-motzkin")),(0,r.kt)("h3",{id:"description-5"},"Description"),(0,r.kt)("p",null,"eliminate variables from quantifiers using partial Fourier-Motzkin elimination."),(0,r.kt)("h2",{id:"simplifier-demodulator"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-demodulator"},"demodulator")),(0,r.kt)("h3",{id:"description-6"},"Description"),(0,r.kt)("p",null,"extracts equalities from quantifiers and applies them to simplify."),(0,r.kt)("h2",{id:"simplifier-distribute-forall"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-distribute-forall"},"distribute-forall")),(0,r.kt)("h3",{id:"description-7"},"Description"),(0,r.kt)("p",null,"distribute forall over conjunctions."),(0,r.kt)("h2",{id:"simplifier-dom-simplify"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-dom-simplify"},"dom-simplify")),(0,r.kt)("h3",{id:"description-8"},"Description"),(0,r.kt)("p",null,"apply dominator simplification rules."),(0,r.kt)("h2",{id:"simplifier-elim-predicates"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-elim-predicates"},"elim-predicates")),(0,r.kt)("h3",{id:"description-9"},"Description"),(0,r.kt)("p",null,"eliminate predicates, macros and implicit definitions."),(0,r.kt)("h2",{id:"simplifier-elim-term-ite"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-elim-term-ite"},"elim-term-ite")),(0,r.kt)("h3",{id:"description-10"},"Description"),(0,r.kt)("p",null,"eliminate if-then-else term by hoisting them top top-level."),(0,r.kt)("h2",{id:"simplifier-elim-unconstrained"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-elim-unconstrained"},"elim-unconstrained")),(0,r.kt)("h3",{id:"description-11"},"Description"),(0,r.kt)("p",null,"eliminate unconstrained variables."),(0,r.kt)("h2",{id:"simplifier-euf-completion"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-euf-completion"},"euf-completion")),(0,r.kt)("h3",{id:"description-12"},"Description"),(0,r.kt)("p",null,"simplify modulo congruence closure."),(0,r.kt)("h2",{id:"simplifier-propagate-bv-bounds"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-propagate-bv-bounds"},"propagate-bv-bounds")),(0,r.kt)("h3",{id:"description-13"},"Description"),(0,r.kt)("p",null,"propagate bit-vector bounds by simplifying implied or contradictory bounds."),(0,r.kt)("h2",{id:"simplifier-propagate-ineqs"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-propagate-ineqs"},"propagate-ineqs")),(0,r.kt)("h3",{id:"description-14"},"Description"),(0,r.kt)("p",null,"propagate ineqs/bounds, remove subsumed inequalities."),(0,r.kt)("h2",{id:"simplifier-propagate-values"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-propagate-values"},"propagate-values")),(0,r.kt)("h3",{id:"description-15"},"Description"),(0,r.kt)("p",null,"propagate constants."),(0,r.kt)("h2",{id:"simplifier-pull-nested-quantifiers"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-pull-nested-quantifiers"},"pull-nested-quantifiers")),(0,r.kt)("h3",{id:"description-16"},"Description"),(0,r.kt)("p",null,"pull nested quantifiers to top-level."),(0,r.kt)("h2",{id:"simplifier-push-app-ite-conservative"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-push-app-ite-conservative"},"push-app-ite-conservative")),(0,r.kt)("h3",{id:"description-17"},"Description"),(0,r.kt)("p",null,"Push functions over if-then else."),(0,r.kt)("h2",{id:"simplifier-push-app-ite"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-push-app-ite"},"push-app-ite")),(0,r.kt)("h3",{id:"description-18"},"Description"),(0,r.kt)("p",null,"Push functions over if-then else."),(0,r.kt)("h2",{id:"simplifier-ng-push-app-ite-conservative"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-ng-push-app-ite-conservative"},"ng-push-app-ite-conservative")),(0,r.kt)("h3",{id:"description-19"},"Description"),(0,r.kt)("p",null,"Push functions over if-then-else within non-ground terms only."),(0,r.kt)("h2",{id:"simplifier-ng-push-app-ite"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-ng-push-app-ite"},"ng-push-app-ite")),(0,r.kt)("h3",{id:"description-20"},"Description"),(0,r.kt)("p",null,"Push functions over if-then-else within non-ground terms only."),(0,r.kt)("h2",{id:"simplifier-qe-light"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-qe-light"},"qe-light")),(0,r.kt)("h3",{id:"description-21"},"Description"),(0,r.kt)("p",null,"apply light-weight quantifier elimination."),(0,r.kt)("h2",{id:"simplifier-reduce-args"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-reduce-args"},"reduce-args")),(0,r.kt)("h3",{id:"description-22"},"Description"),(0,r.kt)("p",null,"reduce the number of arguments of function applications, when for all occurrences of a function f the i-th is a value."),(0,r.kt)("h2",{id:"simplifier-refine-injectivity"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-refine-injectivity"},"refine-injectivity")),(0,r.kt)("h3",{id:"description-23"},"Description"),(0,r.kt)("p",null,"refine injectivity axioms."),(0,r.kt)("h2",{id:"simplifier-simplify"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-simplify"},"simplify")),(0,r.kt)("h3",{id:"description-24"},"Description"),(0,r.kt)("p",null,"apply simplification rules."),(0,r.kt)("h2",{id:"simplifier-solve-eqs"},"Simplifier ",(0,r.kt)("a",{parentName:"h2",href:"https://microsoft.github.io/z3guide/docs/strategies/summary/#tactic-solve-eqs"},"solve-eqs")),(0,r.kt)("h3",{id:"description-25"},"Description"),(0,r.kt)("p",null,"solve for variables."))}c.isMDXComponent=!0}}]);