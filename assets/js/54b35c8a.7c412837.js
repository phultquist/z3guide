"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4627],{8665:(i,e,t)=>{t.r(e),t.d(e,{assets:()=>n,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var r=t(7462),l=(t(7294),t(3905));t(7634);const s={title:"Simplifier Summary",sidebar_position:6},p=void 0,a={unversionedId:"strategies/simplifiers",id:"strategies/simplifiers",title:"Simplifier Summary",description:"Simplifier bit-blaster",source:"@site/docs-smtlib/03 - strategies/06 - simplifiers.md",sourceDirName:"03 - strategies",slug:"/strategies/simplifiers",permalink:"/z3guide/docs/strategies/simplifiers",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/03 - strategies/06 - simplifiers.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Simplifier Summary",sidebar_position:6},sidebar:"smtlibSidebar",previous:{title:"Tactics Summary",permalink:"/z3guide/docs/strategies/summary"},next:{title:"Introduction",permalink:"/z3guide/docs/optimization/intro"}},n={},o=[{value:"Simplifier bit-blaster",id:"simplifier-bit-blaster",level:2},{value:"Description",id:"description",level:3},{value:"Simplifier pull-nested-quantifiers",id:"simplifier-pull-nested-quantifiers",level:2},{value:"Description",id:"description-1",level:3},{value:"Simplifier refine-injectivity",id:"simplifier-refine-injectivity",level:2},{value:"Description",id:"description-2",level:3},{value:"Simplifier simplify",id:"simplifier-simplify",level:2},{value:"Description",id:"description-3",level:3},{value:"Simplifier bound-simplifier",id:"simplifier-bound-simplifier",level:2},{value:"Description",id:"description-4",level:3},{value:"Simplifier card2bv",id:"simplifier-card2bv",level:2},{value:"Description",id:"description-5",level:3},{value:"Simplifier demodulator",id:"simplifier-demodulator",level:2},{value:"Description",id:"description-6",level:3},{value:"Simplifier distribute-forall",id:"simplifier-distribute-forall",level:2},{value:"Description",id:"description-7",level:3},{value:"Simplifier dom-simplify",id:"simplifier-dom-simplify",level:2},{value:"Description",id:"description-8",level:3},{value:"Simplifier elim-predicates",id:"simplifier-elim-predicates",level:2},{value:"Description",id:"description-9",level:3},{value:"Simplifier elim-unconstrained",id:"simplifier-elim-unconstrained",level:2},{value:"Description",id:"description-10",level:3},{value:"Simplifier euf-completion",id:"simplifier-euf-completion",level:2},{value:"Description",id:"description-11",level:3},{value:"Simplifier propagate-bv-bounds",id:"simplifier-propagate-bv-bounds",level:2},{value:"Description",id:"description-12",level:3},{value:"Simplifier propagate-ineqs",id:"simplifier-propagate-ineqs",level:2},{value:"Description",id:"description-13",level:3},{value:"Simplifier propagate-values",id:"simplifier-propagate-values",level:2},{value:"Description",id:"description-14",level:3},{value:"Simplifier reduce-args",id:"simplifier-reduce-args",level:2},{value:"Description",id:"description-15",level:3},{value:"Simplifier solve-eqs",id:"simplifier-solve-eqs",level:2},{value:"Description",id:"description-16",level:3}],m={toc:o};function d(i){let{components:e,...t}=i;return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"simplifier-bit-blaster"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-bit-blaster"},"bit-blaster")),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"reduce bit-vector expressions into SAT."),(0,l.kt)("h2",{id:"simplifier-pull-nested-quantifiers"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-pull-nested-quantifiers"},"pull-nested-quantifiers")),(0,l.kt)("h3",{id:"description-1"},"Description"),(0,l.kt)("p",null,"pull nested quantifiers to top-level."),(0,l.kt)("h2",{id:"simplifier-refine-injectivity"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-refine-injectivity"},"refine-injectivity")),(0,l.kt)("h3",{id:"description-2"},"Description"),(0,l.kt)("p",null,"refine injectivity axioms."),(0,l.kt)("h2",{id:"simplifier-simplify"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-simplify"},"simplify")),(0,l.kt)("h3",{id:"description-3"},"Description"),(0,l.kt)("p",null,"apply simplification rules."),(0,l.kt)("h2",{id:"simplifier-bound-simplifier"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-bound-simplifier"},"bound-simplifier")),(0,l.kt)("h3",{id:"description-4"},"Description"),(0,l.kt)("p",null,"Simplify arithmetical expressions modulo bounds."),(0,l.kt)("h2",{id:"simplifier-card2bv"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-card2bv"},"card2bv")),(0,l.kt)("h3",{id:"description-5"},"Description"),(0,l.kt)("p",null,"convert pseudo-boolean constraints to bit-vectors."),(0,l.kt)("h2",{id:"simplifier-demodulator"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-demodulator"},"demodulator")),(0,l.kt)("h3",{id:"description-6"},"Description"),(0,l.kt)("p",null,"extracts equalities from quantifiers and applies them to simplify."),(0,l.kt)("h2",{id:"simplifier-distribute-forall"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-distribute-forall"},"distribute-forall")),(0,l.kt)("h3",{id:"description-7"},"Description"),(0,l.kt)("p",null,"distribute forall over conjunctions."),(0,l.kt)("h2",{id:"simplifier-dom-simplify"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-dom-simplify"},"dom-simplify")),(0,l.kt)("h3",{id:"description-8"},"Description"),(0,l.kt)("p",null,"apply dominator simplification rules."),(0,l.kt)("h2",{id:"simplifier-elim-predicates"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-elim-predicates"},"elim-predicates")),(0,l.kt)("h3",{id:"description-9"},"Description"),(0,l.kt)("p",null,"eliminate predicates."),(0,l.kt)("h2",{id:"simplifier-elim-unconstrained"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-elim-unconstrained"},"elim-unconstrained")),(0,l.kt)("h3",{id:"description-10"},"Description"),(0,l.kt)("p",null,"eliminate unconstrained variables."),(0,l.kt)("h2",{id:"simplifier-euf-completion"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-euf-completion"},"euf-completion")),(0,l.kt)("h3",{id:"description-11"},"Description"),(0,l.kt)("p",null,"simplify modulo congruence closure."),(0,l.kt)("h2",{id:"simplifier-propagate-bv-bounds"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-propagate-bv-bounds"},"propagate-bv-bounds")),(0,l.kt)("h3",{id:"description-12"},"Description"),(0,l.kt)("p",null,"propagate bit-vector bounds by simplifying implied or contradictory bounds."),(0,l.kt)("h2",{id:"simplifier-propagate-ineqs"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-propagate-ineqs"},"propagate-ineqs")),(0,l.kt)("h3",{id:"description-13"},"Description"),(0,l.kt)("p",null,"propagate ineqs/bounds, remove subsumed inequalities."),(0,l.kt)("h2",{id:"simplifier-propagate-values"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-propagate-values"},"propagate-values")),(0,l.kt)("h3",{id:"description-14"},"Description"),(0,l.kt)("p",null,"propagate constants."),(0,l.kt)("h2",{id:"simplifier-reduce-args"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-reduce-args"},"reduce-args")),(0,l.kt)("h3",{id:"description-15"},"Description"),(0,l.kt)("p",null,"reduce the number of arguments of function applications, when for all occurrences of a function f the i-th is a value."),(0,l.kt)("h2",{id:"simplifier-solve-eqs"},"Simplifier ",(0,l.kt)("a",{parentName:"h2",href:"../summary/#tactic-solve-eqs"},"solve-eqs")),(0,l.kt)("h3",{id:"description-16"},"Description"),(0,l.kt)("p",null,"solve for variables."))}d.isMDXComponent=!0}}]);