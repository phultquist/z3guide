"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[239],{3307:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var s=t(3117),i=(t(7294),t(3905));t(3234);const a={title:"Cores and Satisfying Subsets",sidebar_position:5},r="Enumeration of Minimal Unsatisfiable Cores and Maximal Satisfying Subsets",o={unversionedId:"Programming Z3/Using Z3 from Python/Cores and Satisfying Subsets",id:"Programming Z3/Using Z3 from Python/Cores and Satisfying Subsets",title:"Cores and Satisfying Subsets",description:"This tutorial illustrates how to use Z3 for extracting all minimal unsatisfiable cores",source:"@site/docs/07 - Programming Z3/01 - Using Z3 from Python/05 - Cores and Satisfying Subsets.md",sourceDirName:"07 - Programming Z3/01 - Using Z3 from Python",slug:"/Programming Z3/Using Z3 from Python/Cores and Satisfying Subsets",permalink:"/z3guide/docs/Programming Z3/Using Z3 from Python/Cores and Satisfying Subsets",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs/07 - Programming Z3/01 - Using Z3 from Python/05 - Cores and Satisfying Subsets.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Cores and Satisfying Subsets",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Fixedpoints",permalink:"/z3guide/docs/Programming Z3/Using Z3 from Python/Fixedpoints"},next:{title:"User Propagators",permalink:"/z3guide/docs/Programming Z3/Using Z3 from Python/User Propagator"}},l={},u=[{value:"Origin",id:"origin",level:2},{value:"Z3py Features",id:"z3py-features",level:2},{value:"Idea of the Algorithm",id:"idea-of-the-algorithm",level:2}],f={toc:u};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,s.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"enumeration-of-minimal-unsatisfiable-cores-and-maximal-satisfying-subsets"},"Enumeration of Minimal Unsatisfiable Cores and Maximal Satisfying Subsets"),(0,i.kt)("p",null,"This tutorial illustrates how to use Z3 for extracting all minimal unsatisfiable cores\ntogether with all maximal satisfying subsets. "),(0,i.kt)("h2",{id:"origin"},"Origin"),(0,i.kt)("p",null,"The algorithm that we describe next\nrepresents the essence of the core extraction procedure by Liffiton and Malik and independently\nby Previti and Marques-Silva:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.iwu.edu/~mliffito/publications/cpaior13_liffiton_MARCO.pdf"},"Enumerating Infeasibility: Finding Multiple MUSes Quickly"),"\nMark H. Liffiton and Ammar Malik\nin ",(0,i.kt)("em",{parentName:"p"},"Proc. 10",(0,i.kt)("sup",null,"th")," International Conference on Integration of Artificial\nIntelligence (AI) and Operations Research (OR) techniques in Constraint Programming")," (CPAIOR-2013), 160-175, May 2013."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://logos.ucd.ie/wiki/doku.php?id=emus"},"Partial MUS Enumeration"),"\nAlessandro Previti, Joao Marques-Silva\nin ",(0,i.kt)("i",null,"Proc. AAAI-2013")," July 2013"),(0,i.kt)("h2",{id:"z3py-features"},"Z3py Features"),(0,i.kt)("p",null,"This implementation contains no tuning.\nIt was contributed by Mark Liffiton and it is a simplification of one of the versions available from\n",(0,i.kt)("a",{parentName:"p",href:"http://sun.iwu.edu/~mliffito/marco/"},"his Marco Polo Web site"),".\nCode for eMUS is also [",(0,i.kt)("a",{parentName:"p",href:"http://logos.ucd.ie/wiki/doku.php?id=emus"},"available"),".\nThe example illustrates the following features of Z3's Python-based API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using assumptions to track unsatisfiable cores."),(0,i.kt)("li",{parentName:"ul"},"Using multiple solvers and passing constraints between them."),(0,i.kt)("li",{parentName:"ul"},"Calling the C-based API from Python. Not all API functions are supported over the Python\nwrappers. This example shows how to get a unique integer identifier of an AST,\nwhich can be used as a key in a hash-table.")),(0,i.kt)("h2",{id:"idea-of-the-algorithm"},"Idea of the Algorithm"),(0,i.kt)("p",null,"The main idea of the algorithm is to maintain two\nlogical contexts and exchange information between them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("em",null,"MapSolver")," is used to enumerate sets of clauses that are not already\nsupersets of an existing unsatisfiable core and not already a subset of a maximal satisfying assignment.\nThe ",(0,i.kt)("em",null,"MapSolver")," uses one unique atomic predicate per ",(0,i.kt)("em",null,"soft")," clause, so it enumerates\nsets of atomic predicates. For each minimal unsatisfiable core, say, represented by predicates"),(0,i.kt)("em",null,"p",(0,i.kt)("sub",null,"1"),", p",(0,i.kt)("sub",null,"2"),", p",(0,i.kt)("sub",null,"5")),", the ",(0,i.kt)("em",null,"MapSolver")," contains the clause ",(0,i.kt)("em",null," \xac p",(0,i.kt)("sub",null,"1")," \u2228 \xac p",(0,i.kt)("sub",null,"2")," \u2228 \xac p",(0,i.kt)("sub",null,"5")),". For each maximal satisfiable subset, say, represented by predicats",(0,i.kt)("em",null,"p",(0,i.kt)("sub",null,"2"),", p",(0,i.kt)("sub",null,"3"),", p",(0,i.kt)("sub",null,"5")),", the",(0,i.kt)("em",null,"MapSolver")," contains a clause corresponding to the disjunction of all literals not in the maximal satisfiable subset, ",(0,i.kt)("em",null,"p",(0,i.kt)("sub",null,"1")," \u2228 p",(0,i.kt)("sub",null,"4")," \u2228 p",(0,i.kt)("sub",null,"6")),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("em",null,"SubsetSolver")," contains a set\nof soft clauses (clauses with the unique indicator atom occurring negated).\nThe ",(0,i.kt)("em",null,"MapSolver")," feeds it a set of clauses (the indicator atoms).\nRecall that these are not already a superset of an existing minimal\nunsatisfiable core, or a subset of a maximal satisfying assignment.\nIf asserting these atoms makes the ",(0,i.kt)("em",null,"SubsetSolver")," context infeasible,\nthen it finds a minimal unsatisfiable subset corresponding to these atoms.\nIf asserting the atoms is consistent with the ",(0,i.kt)("em",null,"SubsetSolver"),", then\nit extends this set of atoms maximally to a satisfying set."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\n\ndef main():\n    x, y = Reals(\'x y\')\n    constraints = [x > 2, x < 1, x < 0, Or(x + y > 0, y < 0), Or(y >= 0, x >= 0), Or(y < 0, x < 0), Or(y > 0, x < 0)]\n    csolver = SubsetSolver(constraints)\n    msolver = MapSolver(n=csolver.n)\n    for orig, lits in enumerate_sets(csolver, msolver):\n        output = "%s %s" % (orig, lits)\n        print(output)\n\n\ndef get_id(x):\n    return Z3_get_ast_id(x.ctx.ref(),x.as_ast())\n\n\ndef MkOr(clause):\n    if clause == []:\n       return False\n    else:\n       return Or(clause)\n\nclass SubsetSolver:\n   constraints = []\n   n = 0\n   s = Solver()\n   varcache = {}\n   idcache = {}\n\n   def __init__(self, constraints):\n       self.constraints = constraints\n       self.n = len(constraints)\n       for i in range(self.n):\n           self.s.add(Implies(self.c_var(i), constraints[i]))\n\n   def c_var(self, i):\n       if i not in self.varcache:\n          v = Bool(str(self.constraints[abs(i)]))\n          self.idcache[get_id(v)] = abs(i)\n          if i >= 0:\n             self.varcache[i] = v\n          else:\n             self.varcache[i] = Not(v)\n       return self.varcache[i]\n\n   def check_subset(self, seed):\n       assumptions = self.to_c_lits(seed)\n       return (self.s.check(assumptions) == sat)\n        \n   def to_c_lits(self, seed):\n       return [self.c_var(i) for i in seed]\n\n   def complement(self, aset):\n       return set(range(self.n)).difference(aset)\n\n   def seed_from_core(self):\n       core = self.s.unsat_core()\n       return [self.idcache[get_id(x)] for x in core]\n\n   def shrink(self, seed):       \n       current = set(seed)\n       for i in seed:\n          if i not in current:\n             continue\n          current.remove(i)\n          if not self.check_subset(current):\n             current = set(self.seed_from_core())\n          else:\n             current.add(i)\n       return current\n\n   def grow(self, seed):\n       current = seed\n       for i in self.complement(current):\n           current.append(i)\n           if not self.check_subset(current):\n              current.pop()\n       return current\n\n\n\nclass MapSolver:\n   def __init__(self, n):\n       """Initialization.\n             Args:\n            n: The number of constraints to map.\n       """\n       self.solver = Solver()\n       self.n = n\n       self.all_n = set(range(n))  # used in complement fairly frequently\n\n   def next_seed(self):\n       """Get the seed from the current model, if there is one.\n    \n            Returns:\n            A seed as an array of 0-based constraint indexes.\n       """\n       if self.solver.check() == unsat:\n            return None\n       seed = self.all_n.copy()  # default to all True for "high bias"\n       model = self.solver.model()\n       for x in model:\n           if is_false(model[x]):\n              seed.remove(int(x.name()))\n       return list(seed)\n\n   def complement(self, aset):\n       """Return the complement of a given set w.r.t. the set of mapped constraints."""\n       return self.all_n.difference(aset)\n\n   def block_down(self, frompoint):\n       """Block down from a given set."""\n       comp = self.complement(frompoint)\n       self.solver.add( MkOr( [Bool(str(i)) for i in comp] ) )\n\n   def block_up(self, frompoint):\n       """Block up from a given set."""\n       self.solver.add( MkOr( [Not(Bool(str(i))) for i in frompoint] ) )\n    \n\n\ndef enumerate_sets(csolver, map):\n    """Basic MUS/MCS enumeration, as a simple example."""\n    while True:\n        seed = map.next_seed()\n        if seed is None:\n           return\n        if csolver.check_subset(seed):\n           MSS = csolver.grow(seed)\n           yield ("MSS", csolver.to_c_lits(MSS))\n           map.block_down(MSS)\n        else:\n           MUS = csolver.shrink(seed)\n           yield ("MUS", csolver.to_c_lits(MUS))\n           map.block_up(MUS)\n\nmain()\n\n')))}m.isMDXComponent=!0}}]);