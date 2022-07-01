"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[115],{3127:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(3117),r=(n(7294),n(3905)),l=n(7689);const a={title:"Strings and Sequences",sidebar_position:9},i=void 0,o={unversionedId:"guide/Sequences",id:"guide/Sequences",title:"Strings and Sequences",description:"Introduction",source:"@site/docs/guide/09 - Sequences.md",sourceDirName:"guide",slug:"/guide/Sequences",permalink:"/rise4fun/docs/guide/Sequences",draft:!1,editUrl:"https://github.com/microsoft/rise4fun/tree/main/website/docs/guide/09 - Sequences.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Strings and Sequences",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Datatypes",permalink:"/rise4fun/docs/guide/Datatypes"},next:{title:"Regular Expressions",permalink:"/rise4fun/docs/guide/Regular Expressions"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Strings",id:"strings",level:2},{value:"Built-in types and constants",id:"built-in-types-and-constants",level:3},{value:"String literals",id:"string-literals",level:3},{value:"Operations",id:"operations",level:2},{value:"Examples",id:"examples",level:2},{value:"Operations",id:"operations-1",level:2},{value:"Examples",id:"examples-1",level:2}],c={toc:d};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,s.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"This section describes Z3's handling of strings and sequences.\nStrings are represented as a sequence of Characters. The default character sort is Unicode.\nYou can reason about regular expressions of sequences. Regular expressions are described in the next secion.\nZ3 offers built-in support for\nusing string constants and dedicated solvers for checking\nsatisfiability over constraints using strings and sequences.\nNote that the (current) specialized solver is able to establish\nsatisfiability for a non-trivial class of formulas, but is far from\na decision procedure even for fragments of string equalities that can be decided:\nZ3 only solves string equalities using an incomplete\nheuristic solver\nand the full combination of lengths and sequences\n(and regular expressions) is not decidable anyway.\nIn Z3, strings are a special case of sequences, and for the case of Unicode strings,\nand regular expressions over Unicode strings seeks to implement the ",(0,r.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/theories-UnicodeStrings.shtml"},"SMTLIB2 standard"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"TBDs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"update documentation to use new names"),(0,r.kt)("li",{parentName:"ul"},"add notes about regex capabilities (comparing regex)"),(0,r.kt)("li",{parentName:"ul"},"update reference to z3str3")),(0,r.kt)("h2",{id:"strings"},"Strings"),(0,r.kt)("h3",{id:"built-in-types-and-constants"},"Built-in types and constants"),(0,r.kt)("p",null,"The name ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," is a built-in name for the String sort.\nString literals can furthermore be entered directly as literals\ndelimited by quotes. The following example asks whether there are\nstrings ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," that concatenate to ",(0,r.kt)("inlineCode",{parentName:"p"},'"abc"'),"\nfollowed by ",(0,r.kt)("inlineCode",{parentName:"p"},"b"),"."),(0,r.kt)(l.Z,{input:{code:'(declare-const a String)\n(declare-const b String)\n(assert (= (str.++ b a) (str.++ "abc" b)))\n(check-sat)\n(get-model)',result:{output:'sat\n(\n  (define-fun b () String\n    "")\n  (define-fun a () String\n    "abc")\n)\n',error:"",status:"z3-ran",hash:"93b6b783a9051c38eb7ef587ad2cc6af129d637e"}},mdxType:"Z3CodeBlock"}),(0,r.kt)("h3",{id:"string-literals"},"String literals"),(0,r.kt)("p",null,"Z3 follows the proposed SMT-LIB2.5 format for string\nliterals. Thus, strings are enclosed using double quotes. A sequence\nof two adjacent double quotes within a string literal is used as the\nescape sequence for a quote. So for example ",(0,r.kt)("inlineCode",{parentName:"p"},'"quote ""me"" on this"'),"\ncorresponds to the string ",(0,r.kt)("inlineCode",{parentName:"p"},'quote "me" on this'),". Other\ncharacters are treated as part of the string. For example, a newline within a string\nis treated as a new-line character. "),(0,r.kt)("p",null,"To represent non-ASCII characters the SMTLIB2 standard uses unicode escape sequences.\nThe escape sequences are of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"\\u{d\u2080}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\u{d\u2081d\u2080}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\u{d\u2082d\u2081d\u2080}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\u{d\u2083d\u2082d\u2081d\u2080}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\u{d\u2084d\u2083d\u2082d\u2081d\u2080}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\ud\u2083d\u2082d\u2081d\u2080"),"\nwhere ",(0,r.kt)("inlineCode",{parentName:"p"},"d")," is a hexidecimal digit."),(0,r.kt)("p",null,"The following example shows\nthree ways to enter the newline character."),(0,r.kt)(l.Z,{input:{code:'(define-const a String "\\u{a}")\n(define-const b String "\n")\n(define-const c String "\\n")   ; this is not a newline character but \\ followed by n\n(simplify (= a b))\n(simplify (= a c))\n(simplify (str.++ a b c))',result:{output:'true\nfalse\n"\\u{a}\\u{a}\\n"\n',error:"Aborted(Assertion failed)\n/home/runner/work/rise4fun/rise4fun/website/node_modules/z3-solver/build/z3-built.js:4652\n      throw ex;\n      ^\n\nRuntimeError: Aborted(Assertion failed)\n    at abort (/home/runner/work/rise4fun/rise4fun/website/node_modules/z3-solver/build/z3-built.js:6174:11)\n    at assert (/home/runner/work/rise4fun/rise4fun/website/node_modules/z3-solver/build/z3-built.js:5291:5)\n    at Worker.worker.onmessage (/home/runner/work/rise4fun/rise4fun/website/node_modules/z3-solver/build/z3-built.js:6689:13)\n    at Worker.<anonymous> (/home/runner/work/rise4fun/rise4fun/website/node_modules/z3-solver/build/z3-built.js:6712:20)\n    at Worker.emit (node:events:527:28)\n    at MessagePort.<anonymous> (node:internal/worker:232:53)\n    at MessagePort.[nodejs.internal.kHybridDispatch] (node:internal/event_target:643:20)\n    at MessagePort.exports.emitMessage (node:internal/per_context/messageport:23:28)\n",status:"z3-failed",hash:"b45a02df8db0cc91f19bbd5d4b4171080c3fb487"}},mdxType:"Z3CodeBlock"}),(0,r.kt)("h2",{id:"operations"},"Operations"),(0,r.kt)("p",null,"Let us start out with a summary of available string operations."),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Operation"),(0,r.kt)("td",null,"Brief description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.++ a b c)")),(0,r.kt)("td",null,"String concatenation of one or more strings")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.len s)")),(0,r.kt)("td",null,"String length. Returns an integer.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.substr s offset length)")),(0,r.kt)("td",null,"Retrieves substring of ",(0,r.kt)("tt",null,"s")," at ",(0,r.kt)("tt",null,"offset"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.indexof s sub)")),(0,r.kt)("td",null,"Retrieves first position of ",(0,r.kt)("tt",null,"sub")," in ",(0,r.kt)("tt",null,"s"),", -1 if there are no occurrences")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.indexof s sub offset)")),(0,r.kt)("td",null,"Retrieves first position of ",(0,r.kt)("tt",null,"sub")," at or after ",(0,r.kt)("tt",null,"offset")," in ",(0,r.kt)("tt",null,"s"),", -1 if there are no occurrences")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.at s offset)")),(0,r.kt)("td",null,"Substring of length 1 at ",(0,r.kt)("tt",null,"offset")," in ",(0,r.kt)("tt",null,"s"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.contains s sub)")),(0,r.kt)("td",null,"Does ",(0,r.kt)("tt",null,"s")," contain the substring ",(0,r.kt)("tt",null,"sub"),"?")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.prefixof pre s)")),(0,r.kt)("td",null,"Is ",(0,r.kt)("tt",null,"pre")," a prefix of ",(0,r.kt)("tt",null,"s"),"?")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.suffixof suf s)")),(0,r.kt)("td",null,"Is ",(0,r.kt)("tt",null,"suf")," a suffix of ",(0,r.kt)("tt",null,"s"),"?")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.replace s src dst)")),(0,r.kt)("td",null,"Replace the first occurrence of ",(0,r.kt)("tt",null,"src")," by ",(0,r.kt)("tt",null,"dst")," in ",(0,r.kt)("tt",null,"s"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.to_int s)")),(0,r.kt)("td",null,"Retrieve integer encoded by string ",(0,r.kt)("tt",null,"s")," (ground rewriting only).")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.from_int i)")),(0,r.kt)("td",null,"Retrieve string encoding of integer ",(0,r.kt)("tt",null,"i")," (ground rewriting only).")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.< s1 s2)")),(0,r.kt)("td",null,"Lexicographic string less than")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.<= s1 s2)")),(0,r.kt)("td",null,"Lexicographic string less or equal to.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(_ char ch)")),(0,r.kt)("td",null,"Unit string from unicode character code.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.is_digit s)")),(0,r.kt)("td",null,"A predicate whether string is a one of the digits 0 to 9.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.to_code s)")),(0,r.kt)("td",null,"Convert string of length one to the character code (an integer). Produce -1 if the string is not of length 1")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.from_code i)")),(0,r.kt)("td",null,"Convert an integer in the range of valid unicodes to a string of length one"))),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"(str.indexof s offset)")," is shorthand for ",(0,r.kt)("inlineCode",{parentName:"p"},"(str.indexof s offset 0)"),".\nAlso, note that  ",(0,r.kt)("inlineCode",{parentName:"p"},"(str.at s i)")," is the empty string or sequence for indices that are either negative or beyond\n",(0,r.kt)("inlineCode",{parentName:"p"},"(- (str.len s) 1)"),". Furthermore ",(0,r.kt)("inlineCode",{parentName:"p"},"(str.substr s offset length)")," is empty\nwhen the offset is outside the range of positions in ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," is negative or\n",(0,r.kt)("inlineCode",{parentName:"p"},"offset+length")," exceeds the length of ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),". "),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Basic string operations"),(0,r.kt)(l.Z,{input:{code:'(simplify (str.++ (str.at "abc" 1) (str.at "abc" 0)))\n(simplify (str.indexof "abcabc" "a"))\n(simplify (str.indexof "abcabc" "a" 1))\n(simplify (str.substr "xxabcyy" 2 3))',result:{output:'"ba"\n0\n3\n"abc"\n',error:"",status:"z3-ran",hash:"99a0c89bf62abc87e497529ae99ae5caddfc9829"}},mdxType:"Z3CodeBlock"}),(0,r.kt)("p",null,"A string cannot overlap with two different characters."),(0,r.kt)(l.Z,{input:{code:'(declare-const a String)\n(assert (= (str.++ a "b") (str.++ "a" a)))\n(check-sat)',result:{output:"unsat\n",error:"",status:"z3-ran",hash:"07c6163577ac0c86387c2aff5799c3dd6a545a87"}},mdxType:"Z3CodeBlock"}),(0,r.kt)("p",null,"Strings ",(0,r.kt)("tt",null,"a, b, c")," can have a non-trivial overlap."),(0,r.kt)(l.Z,{input:{code:'(declare-const a String)\n(declare-const b String)\n(declare-const c String)\n(assert (= (str.++ a b) "abcd"))\n(assert (= (str.++ b c) "cdef"))\n(assert (not (= b "")))\n(check-sat)',result:{output:"sat\n",error:"",status:"z3-ran",hash:"d41c4742b543095f8dfba3ecd5e6e8dd6619214c"}},mdxType:"Z3CodeBlock"}),(0,r.kt)("p",null,"There is a solution to ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," of length at most 2."),(0,r.kt)(l.Z,{input:{code:'(declare-const a String)\n(declare-const b String)\n(assert (= (str.++ "abc" a) (str.++ b "cef")))\n(assert (<= (str.len a) 2))\n(check-sat)',result:{output:"sat\n",error:"",status:"z3-ran",hash:"60dde1bcc671bdd09afee3c6a3d639d31d01018b"}},mdxType:"Z3CodeBlock"}),(0,r.kt)("p",null,"There is a solution to ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),' that is not a sequence of "a"\'s.'),(0,r.kt)(l.Z,{input:{code:'(declare-const a String)\n(declare-const b String)\n(declare-const c String)\n(assert (= (str.++ a "ab" b) (str.++ b "ba" c)))\n(assert (= c (str.++ a b)))\n(assert (not (= (str.++ a "a") (str.++ "a" a))))\n(check-sat)\n(get-model)',result:{output:'sat\n(\n  (define-fun b () String\n    "")\n  (define-fun a () String\n    "b")\n  (define-fun c () String\n    "b")\n)\n',error:"",status:"z3-ran",hash:"68c42632d84f4784ba8d97f64a2f820ef477c1e5"}},mdxType:"Z3CodeBlock"}),(0,r.kt)("p",null,"Contains is transitive."),(0,r.kt)(l.Z,{input:{code:"(declare-const a String)\n(declare-const b String)\n(declare-const c String)\n(assert (str.contains a b))\n(assert (str.contains b c))\n(assert (not (str.contains a c)))\n(check-sat)",result:{output:"unsat\n",error:"",status:"z3-ran",hash:"049ba84bda0129166c42946564c131812ed4adb9"}},mdxType:"Z3CodeBlock"}),(0,r.kt)("p",null,"But containment is not a linear order."),(0,r.kt)(l.Z,{input:{code:"(declare-const a String)\n(declare-const b String)\n(declare-const c String)\n(assert (str.contains a b))\n(assert (str.contains a c))\n(assert (not (str.contains b c)))\n(assert (not (str.contains c b)))\n(check-sat)\n(get-model)",result:{output:'sat\n(\n  (define-fun b () String\n    "A")\n  (define-fun a () String\n    "BCA")\n  (define-fun c () String\n    "B")\n)\n',error:"",status:"z3-ran",hash:"ba2d001d91b10780e3e6967f9733747769e31453"}},mdxType:"Z3CodeBlock"}),(0,r.kt)("p",null,"Any string is equal to the prefix and suffix that add up to a its length."),(0,r.kt)(l.Z,{input:{code:"(declare-const a String)\n(declare-const b String)\n(declare-const c String)\n(assert (str.prefixof b a))\n(assert (str.suffixof c a))\n(assert (= (str.len a) (+ (str.len b) (str.len c))))\n(assert (not (= a (str.++ b c))))\n(check-sat)",result:{output:"unsat\n",error:"",status:"z3-ran",hash:"cdf0bc90036bac64c79dcfb43ab1cfde0b9e2f0b"}},mdxType:"Z3CodeBlock"}),(0,r.kt)("h1",{id:"sequences"},"Sequences"),(0,r.kt)("p",null,"The sort constructor ",(0,r.kt)("inlineCode",{parentName:"p"},"Seq")," can be used to create sequences over any base sort.\nFor example, a sequence of integers is ",(0,r.kt)("inlineCode",{parentName:"p"},"(Seq Int)"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"(Seq (_ BitVec 8))"),"\nis the definition of ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,r.kt)("h2",{id:"operations-1"},"Operations"),(0,r.kt)("p",null,"Most string operations have corresponding sequence variants. In addition, there are operations\nto create a unit sequence and the empty sequence over any base sort."),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Operation"),(0,r.kt)("td",null,"Brief description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(seq.unit elem)")),(0,r.kt)("td",null,"Sequence with a single element ",(0,r.kt)("tt",null,"elem"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(as seq.empty (Seq Int))")),(0,r.kt)("td",null,"The empty sequence of integers.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(seq.++ a b c)")),(0,r.kt)("td",null,"Concatenation of one or more sequences.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(seq.len s)")),(0,r.kt)("td",null,"Sequence length. Returns an integer.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(seq.extract s offset length)")),(0,r.kt)("td",null,"Retrieves sub-sequence of ",(0,r.kt)("tt",null,"s")," at ",(0,r.kt)("tt",null,"offset"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(seq.indexof s sub)")),(0,r.kt)("td",null,"Retrieves first position of ",(0,r.kt)("tt",null,"sub")," in ",(0,r.kt)("tt",null,"s"),", -1 if there are no occurrences")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(seq.indexof s sub offset)")),(0,r.kt)("td",null,"Retrieves first position of ",(0,r.kt)("tt",null,"sub")," at or after ",(0,r.kt)("tt",null,"offset")," in ",(0,r.kt)("tt",null,"s"),", -1 if there are no occurrences")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(seq.at s offset)")),(0,r.kt)("td",null,"Sub-sequence of length 1 at ",(0,r.kt)("tt",null,"offset")," in ",(0,r.kt)("tt",null,"s"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(seq.nth s offset)")),(0,r.kt)("td",null,"Element at ",(0,r.kt)("tt",null,"offset")," in ",(0,r.kt)("tt",null,"s"),". If ",(0,r.kt)("tt",null,"offset")," is out of bounds the result is under-specified. In other words, it is treated as a fresh variable.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(seq.contains s sub)")),(0,r.kt)("td",null,"Does ",(0,r.kt)("tt",null,"s")," contain the sub-sequence ",(0,r.kt)("tt",null,"sub"),"?")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(seq.prefixof pre s)")),(0,r.kt)("td",null,"Is ",(0,r.kt)("tt",null,"pre")," a prefix of ",(0,r.kt)("tt",null,"s"),"?")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(seq.suffixof suf s)")),(0,r.kt)("td",null,"Is ",(0,r.kt)("tt",null,"suf")," a suffix of ",(0,r.kt)("tt",null,"s"),"?")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(seq.replace s src dst)")),(0,r.kt)("td",null,"Replace the first occurrence of ",(0,r.kt)("tt",null,"src")," by ",(0,r.kt)("tt",null,"dst")," in ",(0,r.kt)("tt",null,"s"),"."))),(0,r.kt)("h2",{id:"examples-1"},"Examples"),(0,r.kt)("p",null,"When inserting ",(0,r.kt)("inlineCode",{parentName:"p"},"b")," at or after position 8, but before the length of the string, which is at least 10,\nthen the resulting string has the same length, and either character 8 or 9 are unchanged."),(0,r.kt)(l.Z,{input:{code:"(declare-const s (Seq Int))\n(declare-const t (Seq Int))\n(declare-const j Int)\n(declare-const b Int)\n\n(assert (<= 10 (seq.len s)))\n(assert (<= 8 j))\n(assert (< j (seq.len s)))\n(assert (= t (seq.++ (seq.extract s 0 j) (seq.unit b) (seq.extract s (+ j 1) (- (seq.len s) j 1)))))\n(push)\n(assert (not (= (seq.unit b) (seq.at t j))))\n(check-sat)\n(pop)\n(push)\n(assert (not (= (seq.len s) (seq.len t))))\n(check-sat)\n(pop)\n(push)\n(assert (not (= (seq.at s 8) (seq.at t 8))))\n(assert (not (= (seq.at s 9) (seq.at t 9))))\n(check-sat)\n(pop)",result:{output:"unsat\nunsat\nunsat\n",error:"",status:"z3-ran",hash:"e18d8cb3ea78211094a9608a8e2857b665ab8019"}},mdxType:"Z3CodeBlock"}))}k.isMDXComponent=!0}}]);