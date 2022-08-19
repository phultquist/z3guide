"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9976],{8805:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var i=n(3117),a=(n(7294),n(3905));n(504);const l={title:"Formula Simplification",sidebar_position:4},r=void 0,o={unversionedId:"Example Scripts/Formula Simplification",id:"Example Scripts/Formula Simplification",title:"Formula Simplification",description:"Built-in simplification",source:"@site/docs-programming/03 - Example Scripts/04 - Formula Simplification.md",sourceDirName:"03 - Example Scripts",slug:"/Example Scripts/Formula Simplification",permalink:"/z3guide/programming/Example Scripts/Formula Simplification",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-programming/03 - Example Scripts/04 - Formula Simplification.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Formula Simplification",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SPACER",permalink:"/z3guide/programming/Example Scripts/SPACER"},next:{title:"Parameters",permalink:"/z3guide/programming/Parameters"}},s={},m=[{value:"Built-in simplification",id:"built-in-simplification",level:2},{value:"Developing simplification using Z3",id:"developing-simplification-using-z3",level:2}],p={toc:m};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"built-in-simplification"},"Built-in simplification"),(0,a.kt)("p",null,"Z3 exposes some built-in methods for formula simplification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method from SMTLIB"),(0,a.kt)("th",{parentName:"tr",align:null},"Method from Python"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"simplify")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"simplify(..)")),(0,a.kt)("td",{parentName:"tr",align:null},"performs rewriting simplification")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(apply ctx-simplify)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Tactic('ctx-simplify').apply(..)")),(0,a.kt)("td",{parentName:"tr",align:null},"maintains Boolean skeleton of formula but removes sub-formulas that are subsumed by context. It uses a syntactic equality check on expressions to determine subsumption.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(apply ctx-solver-simplify)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Tactic('ctx-solver-simplify').apply(..)")),(0,a.kt)("td",{parentName:"tr",align:null},"uses solver calls to determine context subsumption.")))),(0,a.kt)("h2",{id:"developing-simplification-using-z3"},"Developing simplification using Z3"),(0,a.kt)("p",null,"In the following we outline a procedure for extracting a simplified\nCNF representation of a formula."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom z3 import *\n\ndef is_atom(t):\n    if not is_bool(t):\n        return False\n    if not is_app(t):\n        return False\n    k = t.decl().kind()\n    if k == Z3_OP_AND or k == Z3_OP_OR or k == Z3_OP_IMPLIES:\n        return False\n    if k == Z3_OP_EQ and t.arg(0).is_bool():\n        return False\n    if k == Z3_OP_TRUE or k == Z3_OP_FALSE or k == Z3_OP_XOR or k == Z3_OP_NOT:\n        return False\n    return True\n\ndef atoms(fml):\n    visited = set([])\n    atms = set([])\n    def atoms_rec(t, visited, atms):\n        if t in visited:\n            return\n        visited |= { t }\n        if is_atom(t):\n            atms |= { t }\n        for s in t.children():\n            atoms_rec(s, visited, atms)\n    atoms_rec(fml, visited, atms)\n    return atms\n\ndef atom2literal(m, a):\n    if is_true(m.eval(a)):\n        return a\n    return Not(a)\n\n")),(0,a.kt)("p",null,"Extract subset of atoms used to satisfy the negation\nof a formula."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"snot is a solver for Not(fml)"),(0,a.kt)("li",{parentName:"ul"},"s    is a solver for fml"),(0,a.kt)("li",{parentName:"ul"},"m    is a model for Not(fml)")),(0,a.kt)("p",null,"evaluate each atom in ",(0,a.kt)("inlineCode",{parentName:"p"},"fml")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"m")," and create\nliterals corresponding to the sign of the evaluation.\nIf the model evaluates atoms to false, the literal is\nnegated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def implicant(atoms, s, snot):\n    m = snot.model()\n    lits = [atom2literal(m, a) for a in atoms]\n    is_sat = s.check(lits)\n    assert is_sat == unsat\n    core = s.unsat_core()\n    return Or([mk_not(c) for c in core])\n\n")),(0,a.kt)("p",null,"Extract a CNF representation of ",(0,a.kt)("inlineCode",{parentName:"p"},"fml"),"\nThe procedure uses two solvers\nEnumerate models for ",(0,a.kt)("inlineCode",{parentName:"p"},"Not(fml)"),"\nUse the enumerated model to identify literals\nthat imply ",(0,a.kt)("inlineCode",{parentName:"p"},"Not(fml)"),"\nThe CNF of ",(0,a.kt)("inlineCode",{parentName:"p"},"fml")," is a conjunction of the\nnegation of these literals."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\ndef to_cnf(fml):\n    atms = atoms(fml)\n    s = Solver()\n    snot = Solver()\n    snot.add(Not(fml))\n    s.add(fml)\n\n    while sat == snot.check():\n        clause = implicant(atms, s, snot)\n        yield clause\n        snot.add(clause)\n\n        \na, b, c, = Bools('a b c')\nfml = Or(And(a, b), And(Not(a), c))\n\nfor clause in to_cnf(fml):\n    print(clause)\n    \n\n\n")))}u.isMDXComponent=!0}}]);