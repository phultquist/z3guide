"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[353],{8926:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=i(3117),n=(i(7294),i(3905)),r=i(7689);const a={title:"Bitvectors",sidebar_position:6},o=void 0,c={unversionedId:"Bitvectors",id:"Bitvectors",title:"Bitvectors",description:"Modern CPUs and main-stream programming languages use arithmetic over fixed-size bit-vectors. The theory of bit-vectors allows modeling the precise semantics of unsigned and of signed two-complements arithmetic. There are a large number of supported functions and relations over bit-vectors. They are summarized on Z3's documentation link here! of the binary APIs and they are summarized on the SMT-LIB link here!  web-site. We will not try to give a comprehensive overview here, but touch on some of the main features.",source:"@site/docs/06 - Bitvectors.md",sourceDirName:".",slug:"/Bitvectors",permalink:"/rise4fun/docs/Bitvectors",draft:!1,editUrl:"https://github.com/microsoft/rise4fun/tree/main/website/docs/06 - Bitvectors.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Bitvectors",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Division",permalink:"/rise4fun/docs/Arithmetic/division"},next:{title:"Arrays",permalink:"/rise4fun/docs/arrays"}},l={},d=[{value:"Basic Bitvector Arithmetic",id:"basic-bitvector-arithmetic",level:3},{value:"Bitwise Operations",id:"bitwise-operations",level:3},{value:"Predicates over Bitvectors",id:"predicates-over-bitvectors",level:3}],b={toc:d};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,s.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Modern CPUs and main-stream programming languages use arithmetic over fixed-size bit-vectors. The theory of bit-vectors allows modeling the precise semantics of unsigned and of signed two-complements arithmetic. There are a large number of supported functions and relations over bit-vectors. They are summarized on Z3's documentation link here! of the binary APIs and they are summarized on the SMT-LIB link here!  web-site. We will not try to give a comprehensive overview here, but touch on some of the main features."),(0,n.kt)("p",null,"In contrast to programming languages, such as C, C++, C#, Java, there is no distinction between signed and unsigned bit-vectors as numbers. Instead, the theory of bit-vectors provides special signed versions of arithmetical operations where it makes a difference whether the bit-vector is treated as signed or unsigned."),(0,n.kt)("p",null,"Z3 supports Bitvectors of arbitrary size. (","_"," BitVec n) is the sort of bitvectors whose length is n. Bitvector literals may be defined using binary, decimal and hexadecimal notation. In the binary and hexadecimal cases, the bitvector size is inferred from the number of characters. For example, the bitvector literal #b010 in binary format is a bitvector of size 3, and the bitvector literal #x0a0 in hexadecimal format is a bitvector of size 12. The size must be specified for bitvector literals in decimal format. For example, (","_"," bv10 32) is a bitvector of size 32 that representes the numeral 10. By default, Z3 display bitvectors in hexadecimal format if the bitvector size is a multiple of 4, and in binary otherwise. The command (set-option pp.bv-literals false) can be used to force Z3 to display bitvector literals in decimal format."),(0,n.kt)(r.Z,{input:{code:"(display #b0100)\n(display (_ bv20 8))\n(display (_ bv20 7))\n(display #x0a) \n(set-option pp.bv-literals false)\n(display #b0100)\n(display (_ bv20 8))\n(display (_ bv20 7))\n(display #x0a) ",result:{output:'#x4\n#x14\n#b0010100\n#x0a\n(error "line 5 column 12: invalid command argument, keyword expected")\n#x4\n#x14\n#b0010100\n#x0a\n',error:"",status:"z3-ran",hash:"11a4affd184012d26b931a3df86d7a0533555d1b"}},mdxType:"Z3CodeBlock"}),(0,n.kt)("h3",{id:"basic-bitvector-arithmetic"},"Basic Bitvector Arithmetic"),(0,n.kt)(r.Z,{input:{code:"(simplify (bvadd #x07 #x03)) ; addition\n(simplify (bvsub #x07 #x03)) ; subtraction\n(simplify (bvneg #x07)) ; unary minus\n(simplify (bvmul #x07 #x03)) ; multiplication\n(simplify (bvurem #x07 #x03)) ; unsigned remainder\n(simplify (bvsrem #x07 #x03)) ; signed remainder\n(simplify (bvsmod #x07 #x03)) ; signed modulo\n(simplify (bvshl #x07 #x03)) ; shift left\n(simplify (bvlshr #xf0 #x03)) ; unsigned (logical) shift right\n(simplify (bvashr #xf0 #x03)) ; signed (arithmetical) shift right",result:{output:"#x0a\n#x04\n#xf9\n#x15\n#x01\n#x01\n#x01\n#x38\n#x1e\n#xfe\n",error:"",status:"z3-ran",hash:"9ef59ea4052a228bc5724a5299ccbfeb8c302799"}},mdxType:"Z3CodeBlock"}),(0,n.kt)("h3",{id:"bitwise-operations"},"Bitwise Operations"),(0,n.kt)(r.Z,{input:{code:"(simplify (bvor #x6 #x3))   ; bitwise or\n(simplify (bvand #x6 #x3))  ; bitwise and\n(simplify (bvnot #x6)) ; bitwise not\n(simplify (bvnand #x6 #x3)) ; bitwise nand\n(simplify (bvnor #x6 #x3)) ; bitwise nor\n(simplify (bvxnor #x6 #x3)) ; bitwise xnor",result:{output:"#x7\n#x2\n#x9\n#xd\n#x8\n#xa\n",error:"",status:"z3-ran",hash:"73f319439deb928248f5afb91a981ac81165e14e"}},mdxType:"Z3CodeBlock"}),(0,n.kt)("p",null,"We can prove a bitwise version of deMorgan's law"),(0,n.kt)(r.Z,{input:{code:"(declare-const x (_ BitVec 64))\n(declare-const y (_ BitVec 64))\n(assert (not (= (bvand (bvnot x) (bvnot y)) (bvnot (bvor x y)))))\n(check-sat)",result:{output:"unsat\n",error:"",status:"z3-ran",hash:"ade2adbf6c52cd2923b7deef2c100489c94db8f3"}},mdxType:"Z3CodeBlock"}),(0,n.kt)("p",null,"Let us illustrate a simple property of bit-wise arithmetic. There is a fast way to check that fixed size numbers are powers of two. It turns out that a bit-vector x is a power of two or zero if and only if x & (x - 1) is zero, where & represents the bitwise and. We check this for four bits below."),(0,n.kt)(r.Z,{input:{code:"(define-fun is-power-of-two ((x (_ BitVec 4))) Bool \n  (= #x0 (bvand x (bvsub x #x1))))\n(declare-const a (_ BitVec 4))\n(assert \n (not (= (is-power-of-two a) \n         (or (= a #x0) \n             (= a #x1) \n             (= a #x2) \n             (= a #x4) \n             (= a #x8)))))\n(check-sat)",result:{output:"unsat\n",error:"",status:"z3-ran",hash:"36bc8c228ba78be23472d8472ca54457f85cc18f"}},mdxType:"Z3CodeBlock"}),(0,n.kt)("h3",{id:"predicates-over-bitvectors"},"Predicates over Bitvectors"),(0,n.kt)(r.Z,{input:{code:"(simplify (bvule #x0a #xf0))  ; unsigned less or equal\n(simplify (bvult #x0a #xf0))  ; unsigned less than\n(simplify (bvuge #x0a #xf0))  ; unsigned greater or equal\n(simplify (bvugt #x0a #xf0))  ; unsigned greater than\n(simplify (bvsle #x0a #xf0))  ; signed less or equal\n(simplify (bvslt #x0a #xf0))  ; signed less than\n(simplify (bvsge #x0a #xf0))  ; signed greater or equal\n(simplify (bvsgt #x0a #xf0))  ; signed greater than",result:{output:"true\ntrue\nfalse\nfalse\nfalse\nfalse\ntrue\ntrue\n",error:"",status:"z3-ran",hash:"a95b6fbb0eae637a502d8467829470ae85028210"}},mdxType:"Z3CodeBlock"}),(0,n.kt)("p",null,"Signed comparison, such as bvsle, takes the sign bit of bitvectors into account for comparison, while unsigned comparison treats the bitvector as unsigned (treats the bitvector as a natural number)."),(0,n.kt)(r.Z,{input:{code:"(declare-const a (_ BitVec 4))\n(declare-const b (_ BitVec 4))\n(assert (not (= (bvule a b) (bvsle a b))))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun b () (_ BitVec 4)\n    #x6)\n  (define-fun a () (_ BitVec 4)\n    #x8)\n)\n",error:"",status:"z3-ran",hash:"75305b48b1c366bc5714ac79de43426753c2227f"}},mdxType:"Z3CodeBlock"}))}u.isMDXComponent=!0}}]);