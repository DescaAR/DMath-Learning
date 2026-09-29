import type { ProblemTranslation } from "@/data/problem-translations-en";

export const problemTranslationsEnD: Record<string, ProblemTranslation> = {
  "LA-BD-076": {
    title:"Dimension Decomposition for a Projection", subchapter:"Rank–Nullity", difficulty:"Advanced", type:"Proof", estimatedTime:"12 minutes",
    concepts:["projection","image","kernel","direct sum"],
    problem:"Let $P:V\\to V$ be linear and satisfy $P^2=P$. Prove that $V=\\ker P\\oplus\\operatorname{im}P$.",
    hint1:"For $v\\in V$, try $v=(v-Pv)+Pv$.", hint2:"Show that the intersection of the kernel and image contains only zero.",
    known:"$P$ is idempotent: $P^2=P$.", target:"Prove the direct-sum decomposition.", idea:"Split every vector into the part killed by the projection and the part preserved by it.",
    solution:[
      "For every $v\\in V$, $P(v-Pv)=Pv-P^2v=0$, so $v-Pv\\in\\ker P$, while $Pv\\in\\operatorname{im}P$.",
      "Thus every $v$ belongs to $\\ker P+\\operatorname{im}P$.",
      "If $x\\in\\ker P\\cap\\operatorname{im}P$, then $x=Py$ for some $y$ and also $Px=0$.",
      "But $Px=P^2y=Py=x$, so $x=0$.",
      "Therefore the sum is direct."
    ],
    answer:"$V=\\ker P\\oplus\\operatorname{im}P$.",
    mistake:"Proving only that every vector is a sum, without proving uniqueness or trivial intersection.",
    insight:"A projection always decomposes the space into its image and kernel."
  },
  "LA-BD-077": {
    title:"Dimension of the Image of an Idempotent Operator", subchapter:"Rank–Nullity", difficulty:"Advanced", type:"Concept", estimatedTime:"8 minutes",
    concepts:["projection","dimension","rank-nullity"],
    problem:"If $P^2=P$ on an $n$-dimensional space and $\\dim\\ker P=k$, determine $\\dim\\operatorname{im}P$.",
    hint1:"Use Rank–Nullity.", hint2:"$n=k+\\operatorname{rank}(P)$.",
    known:"The domain has dimension $n$ and nullity $k$.", target:"Compute the rank.", idea:"Apply Rank–Nullity.",
    solution:["Rank–Nullity gives $n=\\dim\\ker P+\\dim\\operatorname{im}P$.","Substituting $\\dim\\ker P=k$ gives $\\dim\\operatorname{im}P=n-k$."],
    answer:"$\\dim\\operatorname{im}P=n-k$.",
    mistake:"Thinking idempotence changes the Rank–Nullity formula.",
    insight:"Idempotence gives the direct-sum structure; the dimension relation still comes from Rank–Nullity."
  },
  "LA-BD-078": {
    title:"The Solution Set of Ax=b", subchapter:"Subspace Bases", difficulty:"Advanced", type:"Concept", estimatedTime:"10 minutes",
    concepts:["affine solution set","null space","particular solution"],
    problem:"If $Ax=b$ is consistent and $x_0$ is one particular solution, explain why every solution has the form $x_0+z$ with $z\\in\\ker A$.",
    hint1:"Compare two solutions of the same system.", hint2:"If $Ax=b$ and $Ax_0=b$, then $A(x-x_0)=0$.",
    known:"$Ax_0=b$ and the system is consistent.", target:"Describe the complete solution set.", idea:"Subtract a particular solution from a general solution.",
    solution:[
      "If $x$ is another solution, then $Ax=b=Ax_0$, so $A(x-x_0)=0$.",
      "Hence $z=x-x_0\\in\\ker A$ and $x=x_0+z$.",
      "Conversely, if $z\\in\\ker A$, then $A(x_0+z)=Ax_0+Az=b+0=b$.",
      "Thus the solution set is exactly $x_0+\\ker A$."
    ],
    answer:"All solutions are $x_0+\\ker A$.",
    mistake:"Calling the solution set of a nonhomogeneous system a subspace; in general it is affine, not a subspace.",
    insight:"The number of degrees of freedom in a consistent nonhomogeneous system equals the nullity of the matrix."
  },
  "LA-BD-079": {
    title:"Dimension of a Consistent Solution Set", subchapter:"Rank–Nullity", difficulty:"Advanced", type:"Computation", estimatedTime:"8 minutes",
    concepts:["affine dimension","rank","nullity"],
    problem:"A $4\\times7$ matrix $A$ has rank $3$. If $Ax=b$ is consistent, how many free parameters does the solution have?",
    hint1:"The number of free parameters equals the nullity of $A$.", hint2:"Use $7=3+\\operatorname{nullity}(A)$.",
    known:"There are $7$ columns and the rank is $3$.", target:"Compute the number of free parameters.", idea:"Apply Rank–Nullity to $A:\\mathbb R^7\\to\\mathbb R^4$.",
    solution:[
      "The domain of the matrix transformation is $\\mathbb R^7$.",
      "Rank–Nullity gives $7=3+\\operatorname{nullity}(A)$.",
      "Hence the nullity is $4$.",
      "Since the system is consistent, its solution set is a translate of the kernel and has four free parameters."
    ],
    answer:"There are $4$ free parameters.",
    mistake:"Using the number of rows, $4$, as the domain dimension.",
    insight:"The number of variables, not the number of equations, determines the domain dimension."
  },
  "LA-BD-080": {
    title:"Column Independence and the Homogeneous System", subchapter:"Linear Independence", difficulty:"Advanced", type:"Proof", estimatedTime:"10 minutes",
    concepts:["columns","homogeneous system","independence"],
    problem:"Prove that the columns of a matrix $A$ are linearly independent if and only if $Ax=0$ has only the trivial solution.",
    hint1:"Write $Ax$ as a linear combination of the columns of $A$.", hint2:"The coefficients are the components of $x$.",
    known:"$A=[a_1\\ \\cdots\\ a_n]$.", target:"Connect column independence with the kernel.", idea:"Use $Ax=x_1a_1+\\cdots+x_na_n$.",
    solution:[
      "Write $A=[a_1\\ \\cdots\\ a_n]$. For $x=(x_1,\\ldots,x_n)^T$, $Ax=x_1a_1+\\cdots+x_na_n$.",
      "If the columns are linearly independent, $Ax=0$ forces every $x_i=0$.",
      "Conversely, if $Ax=0$ has only the trivial solution, every linear relation $\\sum x_ia_i=0$ has all coefficients zero.",
      "Therefore the columns are linearly independent."
    ],
    answer:"Proved.",
    mistake:"Confusing row independence with solutions of $Ax=0$ without checking the relevant dimensions.",
    insight:"The kernel of a matrix records all linear relations among its columns."
  },
  "LA-BD-081": {
    title:"A False Three-Subspace Inclusion–Exclusion Formula", subchapter:"Dimension", difficulty:"Very Advanced", type:"Counterexample", estimatedTime:"15 minutes",
    concepts:["three subspaces","dimension formula","counterexample"],
    problem:"Is it always true that $\\dim(U+V+W)=\\dim U+\\dim V+\\dim W-\\dim(U\\cap V)-\\dim(U\\cap W)-\\dim(V\\cap W)+\\dim(U\\cap V\\cap W)$? If not, give a counterexample.",
    hint1:"Set-cardinality inclusion–exclusion does not carry over directly to dimensions of three subspaces.", hint2:"In $\\mathbb R^2$, try three distinct lines through the origin.",
    known:"The proposed formula resembles inclusion–exclusion.", target:"Test its validity and provide a counterexample.", idea:"Use three distinct one-dimensional subspaces of a plane.",
    solution:[
      "Take $U=\\operatorname{span}(e_1)$, $V=\\operatorname{span}(e_2)$, and $W=\\operatorname{span}(e_1+e_2)$ in $\\mathbb R^2$.",
      "Each subspace has dimension $1$. Every pairwise intersection is $\\{0\\}$, as is the triple intersection.",
      "The right-hand side of the proposed formula equals $1+1+1=3$.",
      "But $U+V+W=\\mathbb R^2$, so the left-hand side equals $2$.",
      "Therefore the formula is false in general."
    ],
    answer:"No. Three distinct lines through the origin in $\\mathbb R^2$ give a counterexample.",
    mistake:"Applying set inclusion–exclusion mechanically to dimensions of three subspaces.",
    insight:"Subspace dimension satisfies modular identities, not the full set-theoretic inclusion–exclusion formula."
  },
  "LA-BD-082": {
    title:"When Does the Three-Subspace Formula Hold?", subchapter:"Dimension", difficulty:"Very Advanced", type:"Concept", estimatedTime:"15 minutes",
    concepts:["modular law","subspaces","dimension"],
    problem:"Give one sufficient condition under which the inclusion–exclusion-style dimension formula for three subspaces does hold.",
    hint1:"A strong condition is to make the sum direct.", hint2:"The simplest sufficient condition is $U\\oplus V\\oplus W$.",
    known:"The formula is not valid in general.", target:"Provide a valid sufficient condition.", idea:"Choose a strong condition that makes all intersections trivial.",
    solution:[
      "A simple sufficient condition is that $U\\oplus V\\oplus W$ be a direct sum.",
      "Then all pairwise and triple intersections are $\\{0\\}$.",
      "Moreover, $\\dim(U+V+W)=\\dim U+\\dim V+\\dim W$.",
      "The proposed inclusion–exclusion expression then reduces exactly to this identity."
    ],
    answer:"For example, it is sufficient that $U\\oplus V\\oplus W$ be a direct sum.",
    mistake:"Giving a condition that is necessary but not sufficient.",
    insight:"A sufficient condition need not be weakest possible; it must simply be correct and justified."
  },
  "LA-BD-083": {
    title:"Fixed-Point Space of a Projection", subchapter:"Rank–Nullity", difficulty:"Very Advanced", type:"Proof", estimatedTime:"13 minutes",
    concepts:["projection","fixed points","image"],
    problem:"If $P^2=P$, prove that the fixed-point space $F=\\{v:Pv=v\\}$ equals $\\operatorname{im}P$.",
    hint1:"If $v=Pu$, use idempotence.", hint2:"If $Pv=v$, then $v$ is visibly the image of a vector.",
    known:"$P$ is idempotent.", target:"Prove equality of two subspaces.", idea:"Prove both inclusions.",
    solution:[
      "If $v\\in\\operatorname{im}P$, then $v=Pu$ for some $u$. Hence $Pv=P^2u=Pu=v$, so $v\\in F$.",
      "Conversely, if $v\\in F$, then $Pv=v$, so $v$ is the image of itself and belongs to $\\operatorname{im}P$.",
      "Therefore $F=\\operatorname{im}P$."
    ],
    answer:"$F=\\operatorname{im}P$.",
    mistake:"Confusing the fixed-point space with the kernel.",
    insight:"The image of a projection is exactly the part of the space left unchanged by that projection."
  },
  "LA-BD-084": {
    title:"An Operator with Equal Kernel and Image", subchapter:"Rank–Nullity", difficulty:"Very Advanced", type:"Concept", estimatedTime:"12 minutes",
    concepts:["kernel=image","dimension","nilpotent"],
    problem:"Let $T:V\\to V$ be linear on a finite-dimensional space and suppose $\\ker T=\\operatorname{im}T$. What can be concluded about $\\dim V$?",
    hint1:"Let the common dimension be $r$.", hint2:"Use Rank–Nullity.",
    known:"The kernel and image are the same subspace.", target:"Determine the parity of $\\dim V$.", idea:"Rank and nullity are equal.",
    solution:["Let $r=\\dim\\ker T=\\dim\\operatorname{im}T$.","Rank–Nullity gives $\\dim V=r+r=2r$.","Therefore $\\dim V$ must be even."],
    answer:"$\\dim V$ is even.",
    mistake:"Concluding that $T=0$ merely because its kernel equals its image.",
    insight:"Nonzero examples exist, such as a direct sum of nilpotent Jordan blocks of size $2$."
  },
  "LA-BD-085": {
    title:"Constructing an Operator with Equal Kernel and Image", subchapter:"Rank–Nullity", difficulty:"Very Advanced", type:"Construction", estimatedTime:"16 minutes",
    concepts:["linear operator","kernel","image","construction"],
    problem:"Construct a nonzero linear operator $T:\\mathbb R^4\\to\\mathbb R^4$ such that $\\ker T=\\operatorname{im}T$.",
    hint1:"Pair the basis vectors into two chains of length $2$.", hint2:"Try $T(e_1)=0,T(e_2)=e_1,T(e_3)=0,T(e_4)=e_3$.",
    known:"Both rank and nullity must be $2$.", target:"Give an explicit operator and verify the property.", idea:"Use two nilpotent blocks of size $2$.",
    solution:[
      "Define $T(e_1)=0$, $T(e_2)=e_1$, $T(e_3)=0$, and $T(e_4)=e_3$.",
      "The image is spanned by $e_1,e_3$.",
      "For $x=ae_1+be_2+ce_3+de_4$, we have $T(x)=be_1+de_3$.",
      "Thus $T(x)=0$ exactly when $b=d=0$, so the kernel is also spanned by $e_1,e_3$.",
      "The operator is nonzero because $T(e_2)=e_1\\neq0$."
    ],
    answer:"One construction is $T(e_2)=e_1$, $T(e_4)=e_3$, and $T(e_1)=T(e_3)=0$.",
    mistake:"Using the zero operator; its image is zero while its kernel is the entire space.",
    insight:"The condition $\\ker T=\\operatorname{im}T$ implies $T^2=0$."
  },
  "LA-BD-086": {
    title:"When the Image Is Contained in the Kernel", subchapter:"Rank–Nullity", difficulty:"Very Advanced", type:"Proof", estimatedTime:"13 minutes",
    concepts:["nilpotent","rank bound","kernel"],
    problem:"If $T:V\\to V$ is linear and $\\operatorname{im}T\\subseteq\\ker T$, prove that $\\operatorname{rank}(T)\\le\\frac12\\dim V$.",
    hint1:"Compare the dimensions of the image and kernel.", hint2:"Use Rank–Nullity.",
    known:"The image is a subspace of the kernel.", target:"Prove the rank bound.", idea:"Inclusion gives an inequality of dimensions.",
    solution:[
      "From $\\operatorname{im}T\\subseteq\\ker T$, we get $\\operatorname{rank}(T)\\le\\operatorname{nullity}(T)$.",
      "Rank–Nullity gives $\\dim V=\\operatorname{rank}(T)+\\operatorname{nullity}(T)$.",
      "Since nullity is at least rank, $\\dim V\\ge2\\operatorname{rank}(T)$.",
      "Hence $\\operatorname{rank}(T)\\le\\frac12\\dim V$."
    ],
    answer:"$\\operatorname{rank}(T)\\le\\frac12\\dim V$.",
    mistake:"Reversing the inequality when comparing dimensions of nested subspaces.",
    insight:"The condition $\\operatorname{im}T\\subseteq\\ker T$ is equivalent to $T^2=0$."
  },
  "LA-BD-087": {
    title:"A Lower Bound for the Dimension of an Intersection", subchapter:"Dimension", difficulty:"Very Advanced", type:"Proof", estimatedTime:"12 minutes",
    concepts:["intersection","dimension inequality"],
    problem:"If $U,W\\subseteq V$ and $\\dim V=n$, prove that $\\dim(U\\cap W)\\ge\\dim U+\\dim W-n$.",
    hint1:"Start from the dimension formula for $U+W$.", hint2:"Use $\\dim(U+W)\\le n$.",
    known:"The dimension formula for a sum of two subspaces.", target:"Prove a lower bound for the dimension of the intersection.", idea:"Rearrange the dimension formula and bound the dimension of the sum.",
    solution:[
      "$\\dim(U+W)=\\dim U+\\dim W-\\dim(U\\cap W)$.",
      "Since $U+W\\subseteq V$, $\\dim(U+W)\\le n$.",
      "Therefore $\\dim U+\\dim W-\\dim(U\\cap W)\\le n$.",
      "Rearranging gives $\\dim(U\\cap W)\\ge\\dim U+\\dim W-n$."
    ],
    answer:"Proved.",
    mistake:"Assuming the lower bound must always be positive; if the right-hand side is negative, the only effective lower bound is nonnegativity.",
    insight:"If two subspaces are collectively too large, they are forced to have a nontrivial intersection."
  },
  "LA-BD-088": {
    title:"Nontrivial Intersection Forced by Dimension", subchapter:"Dimension", difficulty:"Very Advanced", type:"Proof", estimatedTime:"10 minutes",
    concepts:["intersection","dimension forcing"],
    problem:"If $U,W\\subseteq V$ satisfy $\\dim U+\\dim W>\\dim V$, prove that $U\\cap W\\neq\\{0\\}$.",
    hint1:"Use the lower bound for the dimension of an intersection.", hint2:"Show that $\\dim(U\\cap W)>0$.",
    known:"The sum of the two dimensions exceeds the ambient dimension.", target:"Prove the intersection is nontrivial.", idea:"Apply the dimension inequality.",
    solution:[
      "From the previous result, $\\dim(U\\cap W)\\ge\\dim U+\\dim W-\\dim V$.",
      "The right-hand side is positive by assumption.",
      "Hence $\\dim(U\\cap W)>0$.",
      "A positive-dimensional subspace contains a nonzero vector."
    ],
    answer:"$U\\cap W\\neq\\{0\\}$.",
    mistake:"Using an argument about infinite set cardinality instead of vector-space dimension.",
    insight:"This is a linear-algebra version of the pigeonhole principle."
  },
  "LA-BD-089": {
    title:"Dimension of the Kernel of a Composition", subchapter:"Rank–Nullity", difficulty:"Very Advanced", type:"Proof", estimatedTime:"16 minutes",
    concepts:["composition","kernel","dimension inequality"],
    problem:"For linear maps $T:U\\to V$ and $S:V\\to W$ between finite-dimensional spaces, prove that $\\dim\\ker(S\\circ T)\\le\\dim\\ker T+\\dim\\ker S$.",
    hint1:"Restrict $T$ to $\\ker(S\\circ T)$.", hint2:"The image of this restriction lies in $\\ker S$.",
    known:"A composition of two linear maps.", target:"Bound the dimension of the kernel of the composition.", idea:"Apply Rank–Nullity to $T|_{\\ker(ST)}$.",
    solution:[
      "Define $R=T|_{\\ker(ST)}:\\ker(ST)\\to V$.",
      "The kernel of $R$ is $\\ker T$, since $\\ker T\\subseteq\\ker(ST)$.",
      "If $x\\in\\ker(ST)$, then $S(Tx)=0$, so $Tx\\in\\ker S$. Hence $\\operatorname{im}R\\subseteq\\ker S$.",
      "Rank–Nullity for $R$ gives $\\dim\\ker(ST)=\\dim\\ker T+\\dim\\operatorname{im}R$.",
      "Since $\\dim\\operatorname{im}R\\le\\dim\\ker S$, the desired inequality follows."
    ],
    answer:"$\\dim\\ker(ST)\\le\\dim\\ker T+\\dim\\ker S$.",
    mistake:"Writing $\\ker(ST)=\\ker T+\\ker S$, even though the kernels may live in different spaces.",
    insight:"Restricting a transformation is a powerful way to prove dimension inequalities."
  },
  "LA-BD-090": {
    title:"Rank of a Composition Is Bounded by the Ranks of Its Factors", subchapter:"Rank–Nullity", difficulty:"Very Advanced", type:"Proof", estimatedTime:"12 minutes",
    concepts:["composition","rank","image"],
    problem:"Prove that $\\operatorname{rank}(S\\circ T)\\le\\min\\{\\operatorname{rank}S,\\operatorname{rank}T\\}$.",
    hint1:"The image of the composition is $S(\\operatorname{im}T)$.", hint2:"It is contained in $\\operatorname{im}S$ and is the image of a subspace of dimension $\\operatorname{rank}T$.",
    known:"$T:U\\to V$ and $S:V\\to W$ are linear.", target:"Prove both rank bounds.", idea:"Use image inclusion and the fact that image dimension cannot exceed domain dimension.",
    solution:[
      "$\\operatorname{im}(ST)=S(\\operatorname{im}T)\\subseteq\\operatorname{im}S$, so $\\operatorname{rank}(ST)\\le\\operatorname{rank}S$.",
      "The restriction $S|_{\\operatorname{im}T}$ has domain $\\operatorname{im}T$ and image $\\operatorname{im}(ST)$.",
      "The dimension of an image cannot exceed the dimension of the domain, hence $\\operatorname{rank}(ST)\\le\\dim\\operatorname{im}T=\\operatorname{rank}T$.",
      "Combining the two bounds gives the result."
    ],
    answer:"$\\operatorname{rank}(ST)\\le\\min\\{\\operatorname{rank}S,\\operatorname{rank}T\\}$.",
    mistake:"Assuming that the rank of a composition is the product of the ranks.",
    insight:"The rank can drop sharply when much of $\\operatorname{im}T$ lies inside $\\ker S$."
  },
  "LA-BD-091": {
    title:"A Sylvester-Type Rank Inequality", subchapter:"Rank–Nullity", difficulty:"Very Advanced", type:"Proof", estimatedTime:"18 minutes",
    concepts:["rank inequality","composition","kernel"],
    problem:"For $T:U\\to V$ and $S:V\\to W$, with $V$ finite-dimensional, prove that $\\operatorname{rank}(ST)\\ge\\operatorname{rank}T+\\operatorname{rank}S-\\dim V$.",
    hint1:"Restrict $S$ to $\\operatorname{im}T$.", hint2:"The kernel of the restriction is $\\operatorname{im}T\\cap\\ker S$.",
    known:"A composition and the finite dimension of the intermediate space $V$.", target:"Prove a lower bound for the rank of the composition.", idea:"Apply Rank–Nullity to $S|_{\\operatorname{im}T}$ and bound the intersection.",
    solution:[
      "Let $R=S|_{\\operatorname{im}T}:\\operatorname{im}T\\to W$. Its image is $\\operatorname{im}(ST)$.",
      "Its kernel is $\\operatorname{im}T\\cap\\ker S$.",
      "Rank–Nullity gives $\\operatorname{rank}(ST)=\\operatorname{rank}T-\\dim(\\operatorname{im}T\\cap\\ker S)$.",
      "The intersection lies in $\\ker S$, so its dimension is at most $\\operatorname{nullity}S=\\dim V-\\operatorname{rank}S$.",
      "Therefore $\\operatorname{rank}(ST)\\ge\\operatorname{rank}T-(\\dim V-\\operatorname{rank}S)$."
    ],
    answer:"$\\operatorname{rank}(ST)\\ge\\operatorname{rank}T+\\operatorname{rank}S-\\dim V$.",
    mistake:"Using the wrong domain dimension when computing the nullity of $S$.",
    insight:"This is the operator form of Sylvester's rank inequality."
  },
  "LA-BD-092": {
    title:"Constructing a Basis Containing Prescribed Vectors", subchapter:"Basis Extension", difficulty:"Very Advanced", type:"Construction", estimatedTime:"15 minutes",
    concepts:["basis extension","prescribed vectors"],
    problem:"In $\\mathbb R^4$, construct a basis containing $v_1=(1,1,0,0)$ and $v_2=(0,1,1,0)$.",
    hint1:"First verify that the two prescribed vectors are linearly independent.", hint2:"Add standard basis vectors that introduce the fourth coordinate and another new direction.",
    known:"The two prescribed vectors must be retained.", target:"Add two vectors to obtain a basis.", idea:"Use $e_3$ and $e_4$, then test linear independence.",
    solution:[
      "The vectors $v_1,v_2$ are linearly independent because neither is a scalar multiple of the other.",
      "Add $e_3=(0,0,1,0)$ and $e_4=(0,0,0,1)$.",
      "Suppose $av_1+bv_2+ce_3+de_4=0$.",
      "The fourth coordinate gives $d=0$, the first gives $a=0$, the second gives $b=0$, and the third gives $c=0$.",
      "Thus the four vectors are linearly independent and form a basis of $\\mathbb R^4$."
    ],
    answer:"One basis is $\\{(1,1,0,0),(0,1,1,0),(0,0,1,0),(0,0,0,1)\\}$.",
    mistake:"Adding two vectors without checking whether one lies in the span of the prescribed vectors.",
    insight:"The Basis Extension Theorem guarantees that this construction is always possible for an initially independent set."
  },
  "LA-BD-093": {
    title:"Constructing a Basis Adapted to a Subspace", subchapter:"Basis Extension", difficulty:"Very Advanced", type:"Construction", estimatedTime:"16 minutes",
    concepts:["subspace basis","extension","quotient intuition"],
    problem:"In $\\mathbb R^4$, let $W=\\{(x,y,z,w):x+y+z+w=0\\}$. Find a basis of $\\mathbb R^4$ whose first three vectors form a basis of $W$.",
    hint1:"Construct three independent vectors whose coordinate sums are zero.", hint2:"Then add one vector outside $W$.",
    known:"$W$ is a three-dimensional hyperplane.", target:"Construct a basis adapted to the subspace.", idea:"Choose a natural basis for the kernel of the coordinate-sum functional.",
    solution:[
      "Take $w_1=(1,-1,0,0)$, $w_2=(0,1,-1,0)$, and $w_3=(0,0,1,-1)$. All three lie in $W$.",
      "A relation $aw_1+bw_2+cw_3=0$ gives successively $a=0$, then $b=0$, then $c=0$, so they are linearly independent.",
      "Since $W$ has dimension $3$, they form a basis of $W$.",
      "Take $v=(1,0,0,0)$, which lies outside $W$ because its coordinate sum is $1$.",
      "The Basis Extension Theorem gives that $w_1,w_2,w_3,v$ is a basis of $\\mathbb R^4$."
    ],
    answer:"One basis is $\\{(1,-1,0,0),(0,1,-1,0),(0,0,1,-1),(1,0,0,0)\\}$.",
    mistake:"Choosing a fourth vector that also lies in $W$.",
    insight:"A basis adapted to a subspace is useful for producing block-structured matrix representations."
  },
  "LA-BD-094": {
    title:"Every Hyperplane Is a Functional Kernel", subchapter:"Subspace Bases", difficulty:"Very Advanced", type:"Proof", estimatedTime:"15 minutes",
    concepts:["hyperplane","dual space","kernel"],
    problem:"Prove that every $(n-1)$-dimensional subspace $W$ of an $n$-dimensional space $V$ is the kernel of a nonzero linear functional.",
    hint1:"Take a basis of $W$ and extend it by one vector.", hint2:"Define a functional that extracts the coefficient of the added vector.",
    known:"$W$ has codimension $1$.", target:"Construct $f\\in V^*$ with $\\ker f=W$.", idea:"Use a basis adapted to $W$.",
    solution:[
      "Take a basis $w_1,\\ldots,w_{n-1}$ of $W$ and extend it by $v$ to a basis of $V$.",
      "Every $x\\in V$ has a unique representation $x=\\sum a_iw_i+bv$.",
      "Define $f(x)=b$.",
      "The map $f$ is linear and nonzero because $f(v)=1$.",
      "We have $f(x)=0$ exactly when $b=0$, which is exactly when $x\\in W$.",
      "Thus $\\ker f=W$."
    ],
    answer:"Every hyperplane is the kernel of a nonzero linear functional.",
    mistake:"Choosing an arbitrary functional without ensuring that its kernel is exactly $W$.",
    insight:"Hyperplanes and one-dimensional directions in the dual space are closely related through annihilators."
  },
  "LA-BD-095": {
    title:"Dimension of the Annihilator", subchapter:"Dimension", difficulty:"Very Advanced", type:"Proof", estimatedTime:"18 minutes",
    concepts:["annihilator","dual space","dimension"],
    problem:"For a subspace $W\\subseteq V$ with $V$ finite-dimensional, define $W^0=\\{f\\in V^*:f(w)=0\\text{ for all }w\\in W\\}$. Prove that $\\dim W^0=\\dim V-\\dim W$.",
    hint1:"Take a basis of $W$ and extend it to a basis of $V$.", hint2:"Use the dual basis and identify which functionals vanish on $W$.",
    known:"The annihilator is a subspace of the dual space.", target:"Compute its dimension.", idea:"Use an adapted dual basis.",
    solution:[
      "Take a basis $w_1,\\ldots,w_k$ of $W$ and extend it to a basis $w_1,\\ldots,w_k,v_{k+1},\\ldots,v_n$ of $V$.",
      "Let $\\varphi_1,\\ldots,\\varphi_n$ be the corresponding dual basis.",
      "For $j>k$, $\\varphi_j(w_i)=0$ for every $i\\le k$, so $\\varphi_{k+1},\\ldots,\\varphi_n\\in W^0$.",
      "If $f\\in W^0$, write $f=\\sum c_i\\varphi_i$. Evaluating at $w_i$ gives $c_i=0$ for $i\\le k$.",
      "Hence $W^0=\\operatorname{span}\\{\\varphi_{k+1},\\ldots,\\varphi_n\\}$, and this basis has $n-k$ elements."
    ],
    answer:"$\\dim W^0=\\dim V-\\dim W$.",
    mistake:"Thinking the annihilator is a subspace of $V$ rather than of $V^*$.",
    insight:"The codimension of a subspace equals the dimension of the independent functionals that annihilate it."
  },
  "LA-BD-096": {
    title:"Challenge: A Square-Zero Operator", subchapter:"Rank–Nullity", difficulty:"Challenge", type:"Proof", estimatedTime:"20 minutes",
    concepts:["nilpotent","rank bound","construction"],
    problem:"Let $T:V\\to V$ be linear, satisfy $T^2=0$, and suppose $\\dim V=2m+1$. Prove that $\\dim\\ker T\\ge m+1$.",
    hint1:"$T^2=0$ implies $\\operatorname{im}T\\subseteq\\ker T$.", hint2:"Combine this with Rank–Nullity.",
    known:"The image is contained in the kernel and the space has odd dimension.", target:"Prove a lower bound for the nullity.", idea:"Rank cannot exceed nullity.",
    solution:[
      "From $T^2=0$, for every $v$ we have $T(Tv)=0$, so $Tv\\in\\ker T$. Hence $\\operatorname{im}T\\subseteq\\ker T$.",
      "Let $r=\\operatorname{rank}T$ and $k=\\operatorname{nullity}T$. The inclusion gives $r\\le k$.",
      "Rank–Nullity gives $2m+1=r+k\\le2k$.",
      "Thus $k\\ge\\frac{2m+1}{2}=m+\\frac12$.",
      "Since $k$ is an integer, $k\\ge m+1$."
    ],
    answer:"$\\dim\\ker T\\ge m+1$.",
    mistake:"Rounding $m+\\frac12$ downward.",
    insight:"Odd dimension strengthens the basic bound $k\\ge\\frac12\\dim V$."
  },
  "LA-BD-097": {
    title:"Challenge: Two Large Subspaces Must Intersect", subchapter:"Dimension", difficulty:"Challenge", type:"Proof", estimatedTime:"20 minutes",
    concepts:["dimension forcing","intersection","extremal"],
    problem:"Let $V$ have dimension $2n+1$, and let $U,W\\subseteq V$ each have dimension $n+1$. Prove that $U\\cap W$ contains a nonzero vector.",
    hint1:"Use the lower bound for the dimension of an intersection.", hint2:"$(n+1)+(n+1)-(2n+1)=1$.",
    known:"Each subspace has dimension slightly larger than half the ambient dimension.", target:"Prove the intersection is nontrivial.", idea:"The total dimensions force overlap.",
    solution:[
      "The dimension formula gives $\\dim(U\\cap W)=\\dim U+\\dim W-\\dim(U+W)$.",
      "Since $U+W\\subseteq V$, $\\dim(U+W)\\le2n+1$.",
      "Therefore $\\dim(U\\cap W)\\ge(n+1)+(n+1)-(2n+1)=1$.",
      "Hence the intersection has dimension at least one and contains a nonzero vector."
    ],
    answer:"$U\\cap W\\neq\\{0\\}$.",
    mistake:"Trying to justify the conclusion using infinite cardinalities instead of vector-space dimension.",
    insight:"This is a linear analogue of the pigeonhole principle: two subspaces that are too large must overlap."
  },
  "LA-BD-098": {
    title:"Challenge: A Basis Adapted to Two Subspaces", subchapter:"Basis Extension", difficulty:"Challenge", type:"Construction", estimatedTime:"25 minutes",
    concepts:["adapted basis","intersection","sum"],
    problem:"Let $U,W\\subseteq V$ be finite-dimensional. Prove that there is a basis $B$ of $U+W$ containing a basis of $U\\cap W$, and that the remaining parts can be chosen to extend that common basis to bases of $U$ and $W$.",
    hint1:"Start with a basis of the intersection.", hint2:"Extend that basis separately inside $U$ and $W$, then combine the extensions.",
    known:"Basis extension is available in each subspace.", target:"Construct a basis adapted simultaneously to $U$, $W$, and their intersection.", idea:"Use the intersection basis as the common block, then add directions unique to each subspace.",
    solution:[
      "Take a basis $z_1,\\ldots,z_r$ of $U\\cap W$.",
      "Extend it to a basis $z_1,\\ldots,z_r,u_1,\\ldots,u_p$ of $U$.",
      "Separately, extend it to a basis $z_1,\\ldots,z_r,w_1,\\ldots,w_q$ of $W$.",
      "The union $B=\\{z_i,u_j,w_k\\}$ spans $U+W$.",
      "For independence, suppose a linear combination of the union is zero. Move the combination of the $u_j$ to one side and the combination of the $w_k$ to the other; the resulting vector lies in both $U$ and $W$, hence in $U\\cap W$.",
      "Because each extended list is a basis, all coefficients of the $u_j$ and $w_k$ must be zero, and then all coefficients of the $z_i$ are zero as well.",
      "Thus $B$ is a basis of $U+W$ with the required structure."
    ],
    answer:"Such an adapted basis always exists.",
    mistake:"Simply joining arbitrary bases of $U$ and $W$ without accounting for the basis of the intersection that would be duplicated.",
    insight:"The same construction proves $\\dim(U+W)=\\dim U+\\dim W-\\dim(U\\cap W)$."
  },
  "LA-BD-099": {
    title:"Challenge: Characterization of a Direct Sum", subchapter:"Dimension", difficulty:"Challenge", type:"Proof", estimatedTime:"22 minutes",
    concepts:["direct sum","unique representation","intersection"],
    problem:"Prove that $V=U\\oplus W$ if and only if every $v\\in V$ has a unique representation $v=u+w$ with $u\\in U$ and $w\\in W$.",
    hint1:"For the forward direction, use $U\\cap W=\\{0\\}$.", hint2:"For the reverse direction, use uniqueness of the representation of the zero vector.",
    known:"By definition, $V=U\\oplus W$ means $V=U+W$ and $U\\cap W=\\{0\\}$.", target:"Prove equivalence with unique representation.", idea:"The difference of two representations lies in the intersection.",
    solution:[
      "Assume $V=U\\oplus W$. Existence of a representation follows from $V=U+W$.",
      "If $v=u_1+w_1=u_2+w_2$, then $u_1-u_2=w_2-w_1$. The left side lies in $U$ and the right side in $W$, so this vector lies in $U\\cap W=\\{0\\}$. Hence $u_1=u_2$ and $w_1=w_2$.",
      "Conversely, assume every vector has a unique representation. Existence gives $V=U+W$.",
      "If $x\\in U\\cap W$, then $0=0+0=x+(-x)$ gives two representations of zero with components in $U$ and $W$.",
      "Uniqueness forces $x=0$, so the intersection is trivial. Therefore $V=U\\oplus W$."
    ],
    answer:"The two conditions are equivalent.",
    mistake:"Proving only existence without connecting uniqueness to the triviality of the intersection.",
    insight:"A direct sum is precisely a decomposition into unique block coordinates."
  },
  "LA-BD-100": {
    title:"Challenge: A Unique Isomorphism Between Two Ordered Bases", subchapter:"Basis", difficulty:"Challenge", type:"Proof", estimatedTime:"25 minutes",
    concepts:["basis","isomorphism","linear map"],
    problem:"Let $B=(v_1,\\ldots,v_n)$ and $C=(w_1,\\ldots,w_n)$ be two ordered bases of $V$. Prove that there is exactly one linear isomorphism $T:V\\to V$ such that $T(v_i)=w_i$ for every $i$.",
    hint1:"A linear transformation is determined by its values on a basis.", hint2:"For invertibility, construct the reverse map sending $w_i$ to $v_i$.",
    known:"The two bases have the same number of vectors.", target:"Prove existence, uniqueness, and invertibility of $T$.", idea:"Define $T$ through coordinates relative to the basis.",
    solution:[
      "For $v=\\sum a_iv_i$, define $T(v)=\\sum a_iw_i$. Uniqueness of coordinates relative to $B$ makes this definition well defined.",
      "The definition is linear and clearly satisfies $T(v_i)=w_i$.",
      "If $S$ is another linear map with $S(v_i)=w_i$, then for $v=\\sum a_iv_i$, linearity gives $S(v)=\\sum a_iS(v_i)=\\sum a_iw_i=T(v)$. Hence $S=T$.",
      "Define $R$ by $R(w_i)=v_i$ and extend linearly. The compositions $RT$ and $TR$ are identity maps because they fix all vectors of the corresponding bases.",
      "Thus $R=T^{-1}$ and $T$ is an isomorphism."
    ],
    answer:"There is exactly one linear isomorphism sending the ordered basis $B$ to the ordered basis $C$.",
    mistake:"Defining $T$ only on basis vectors without explaining the linear extension to all of $V$.",
    insight:"Any two bases of the same finite-dimensional space are coordinate systems related by a unique linear isomorphism."
  }
};
