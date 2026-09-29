import type { ProblemTranslation } from "@/data/problem-translations-en";

export const problemTranslationsEnC: Record<string, ProblemTranslation> = {
  "LA-BD-051": {
    title:"Dimension of an Evaluation Kernel", subchapter:"Rank–Nullity", difficulty:"Advanced", type:"Proof", estimatedTime:"12 minutes",
    concepts:["linear functional","kernel","rank-nullity"],
    problem:"Define $T:\\mathcal P_4\\to\\mathbb R$ by $T(p)=p(1)$. Determine $\\dim\\ker T$ and prove your answer.",
    hint1:"Show that $T$ is linear and surjective.", hint2:"Apply Rank–Nullity to the five-dimensional domain.",
    known:"$\\dim\\mathcal P_4=5$ and $T(p)=p(1)$.", target:"Determine the dimension of the evaluation kernel.",
    idea:"Evaluation at one point is a nonzero linear functional, so its rank is $1$.",
    solution:[
      "For $p,q\\in\\mathcal P_4$ and scalars $a,b$, $T(ap+bq)=ap(1)+bq(1)=aT(p)+bT(q)$, so $T$ is linear.",
      "The map is surjective because for every $c\\in\\mathbb R$, the constant polynomial $p(x)=c$ satisfies $T(p)=c$.",
      "Hence $\\operatorname{rank}(T)=1$.",
      "Rank–Nullity gives $5=\\dim\\ker T+1$.",
      "Therefore $\\dim\\ker T=4$."
    ],
    answer:"$\\dim\\ker T=4$.", mistake:"Assuming that the evaluation kernel contains only the zero polynomial.",
    insight:"The kernel of evaluation at $a$ consists exactly of polynomials divisible by $x-a$."
  },
  "LA-BD-052": {
    title:"Basis of the Kernel of Two Evaluations", subchapter:"Subspace Bases", difficulty:"Advanced", type:"Construction", estimatedTime:"13 minutes",
    concepts:["polynomials","linear constraints","basis"],
    problem:"Find a basis of $W=\\{p\\in\\mathcal P_4:p(0)=p(1)=0\\}$.",
    hint1:"Use the factor $x(x-1)$.", hint2:"Write $p(x)=x(x-1)q(x)$ with $q\\in\\mathcal P_2$.",
    known:"The polynomial has roots $0$ and $1$.", target:"Construct a basis of the subspace.", idea:"Use the Factor Theorem.",
    solution:[
      "The conditions $p(0)=p(1)=0$ imply that both $x$ and $x-1$ divide $p$.",
      "Since these factors are relatively prime, $x(x-1)$ divides $p$.",
      "Thus $p=x(x-1)q$ for some $q\\in\\mathcal P_2$.",
      "Using the basis $\\{1,x,x^2\\}$ of $\\mathcal P_2$, we obtain the basis $\\{x(x-1),x^2(x-1),x^3(x-1)\\}$."
    ],
    answer:"One basis is $\\{x(x-1),x^2(x-1),x^3(x-1)\\}$ and the dimension is $3$.",
    mistake:"Subtracting two from the dimension without checking that the two constraints are independent.",
    insight:"Factorization often gives a more natural basis than coefficient elimination."
  },
  "LA-BD-053": {
    title:"Intersection of Two Functional Kernels", subchapter:"Dimension", difficulty:"Advanced", type:"Proof", estimatedTime:"13 minutes",
    concepts:["kernel","linear functional","codimension"],
    problem:"Let $f,g:V\\to\\mathbb F$ be linearly independent functionals on an $n$-dimensional space. Prove that $\\dim(\\ker f\\cap\\ker g)=n-2$.",
    hint1:"Combine them into $T:V\\to\\mathbb F^2$.", hint2:"Show that $T(v)=(f(v),g(v))$ has rank $2$.",
    known:"$f$ and $g$ are independent elements of the dual space.", target:"Determine the dimension of the intersection of the kernels.",
    idea:"Use the combined map and Rank–Nullity.",
    solution:[
      "Define $T(v)=(f(v),g(v))$.",
      "Its kernel is exactly $\\ker f\\cap\\ker g$.",
      "If $\\operatorname{rank}(T)<2$, the image is contained in a one-dimensional subspace of $\\mathbb F^2$. Then there is a nonzero pair $(a,b)$ annihilating the image, which gives $af+bg=0$.",
      "This contradicts the linear independence of $f$ and $g$, so $\\operatorname{rank}(T)=2$.",
      "Rank–Nullity gives $n=\\dim\\ker T+2$."
    ],
    answer:"$\\dim(\\ker f\\cap\\ker g)=n-2$.",
    mistake:"Assuming that two kernels always reduce the dimension by two without requiring the functionals to be independent.",
    insight:"The codimension of an intersection of kernels equals the rank of the corresponding system of linear constraints."
  },
  "LA-BD-054": {
    title:"Dimension and Basis of a Quotient Space", subchapter:"Dimension", difficulty:"Advanced", type:"Concept", estimatedTime:"10 minutes",
    concepts:["quotient space","dimension","basis extension"],
    problem:"Let $W\\subseteq V$, where $V$ is finite-dimensional. If $\\dim V=n$ and $\\dim W=k$, determine $\\dim(V/W)$ and explain how to construct a basis.",
    hint1:"Extend a basis of $W$ to a basis of $V$.", hint2:"The cosets of the additional vectors form a basis of the quotient.",
    known:"$W$ is a subspace of $V$ with known dimension.", target:"Determine the dimension of the quotient space.", idea:"Use basis extension.",
    solution:[
      "Take a basis $w_1,\\ldots,w_k$ of $W$ and extend it to a basis $w_1,\\ldots,w_k,v_{k+1},\\ldots,v_n$ of $V$.",
      "In $V/W$, the cosets $v_{k+1}+W,\\ldots,v_n+W$ span because the components along the $w_i$ vanish modulo $W$.",
      "If a linear combination of these cosets is zero, the corresponding linear combination of the $v_j$ lies in $W$. Linear independence of the extended basis forces all coefficients to be zero.",
      "Therefore these cosets form a basis of the quotient."
    ],
    answer:"$\\dim(V/W)=n-k$.",
    mistake:"Thinking of a quotient as simply deleting elements set-theoretically, so that its dimension cannot be read from a basis.",
    insight:"The formula describes quotienting as removing the directions contained in $W$."
  },
  "LA-BD-055": {
    title:"Basis of Polynomials with Zero Integral", subchapter:"Subspace Bases", difficulty:"Advanced", type:"Construction", estimatedTime:"12 minutes",
    concepts:["integral functional","kernel","basis"],
    problem:"Find a basis of $W=\\{p\\in\\mathcal P_3:\\int_0^1p(x)\\,dx=0\\}$.",
    hint1:"Integration is a nonzero linear functional.", hint2:"Write $p(x)=a+bx+cx^2+dx^3$ and use the single linear constraint.",
    known:"$\\dim\\mathcal P_3=4$.", target:"Construct a basis of the kernel of the integral functional.", idea:"Solve the constraint for the constant coefficient.",
    solution:[
      "For $p=a+bx+cx^2+dx^3$, the zero-integral condition is $a+\\frac b2+\\frac c3+\\frac d4=0$.",
      "Thus $a=-\\frac b2-\\frac c3-\\frac d4$.",
      "Hence $p=b(x-\\frac12)+c(x^2-\\frac13)+d(x^3-\\frac14)$.",
      "The three generating polynomials are linearly independent because they have distinct highest degrees."
    ],
    answer:"A basis is $\\{x-\\frac12,x^2-\\frac13,x^3-\\frac14\\}$; the dimension is $3$.",
    mistake:"Assuming that zero integral forces the polynomial to be identically zero.",
    insight:"The kernel of any nonzero linear functional is a hyperplane."
  },
  "LA-BD-056": {
    title:"Basis of Polynomials with Derivative Zero at 0", subchapter:"Subspace Bases", difficulty:"Advanced", type:"Construction", estimatedTime:"10 minutes",
    concepts:["derivative functional","kernel","basis"],
    problem:"Find a basis of $W=\\{p\\in\\mathcal P_4:p'(0)=0\\}$.",
    hint1:"Write a general polynomial and differentiate it.", hint2:"The condition removes only the coefficient of $x$.",
    known:"$p(x)=a_0+a_1x+\\cdots+a_4x^4$.", target:"Construct a basis of the subspace.", idea:"Identify the coefficient constraint.",
    solution:[
      "$p'(x)=a_1+2a_2x+3a_3x^2+4a_4x^3$.",
      "The condition $p'(0)=0$ gives $a_1=0$.",
      "Hence every element of $W$ is a linear combination of $1,x^2,x^3,x^4$.",
      "These monomials are linearly independent."
    ],
    answer:"A basis is $\\{1,x^2,x^3,x^4\\}$ and the dimension is $4$.",
    mistake:"Removing every positive-power term instead of only the $x$ term.",
    insight:"Differentiation followed by evaluation at a fixed point is a linear functional on a polynomial space."
  },
  "LA-BD-057": {
    title:"Dimension of a Space of Linear Maps", subchapter:"Dimension", difficulty:"Advanced", type:"Proof", estimatedTime:"15 minutes",
    concepts:["linear maps","basis","dimension"],
    problem:"If $\\dim V=n$ and $\\dim W=m$, prove that $\\dim\\mathcal L(V,W)=mn$.",
    hint1:"Choose bases $v_1,\\ldots,v_n$ and $w_1,\\ldots,w_m$.", hint2:"Construct elementary maps $E_{ij}$ sending $v_j$ to $w_i$ and all other basis vectors to zero.",
    known:"Two finite-dimensional vector spaces.", target:"Determine the dimension of the space of all linear maps.", idea:"Use one parameter for each domain–codomain basis pair.",
    solution:[
      "Choose bases $v_1,\\ldots,v_n$ of $V$ and $w_1,\\ldots,w_m$ of $W$.",
      "For each $i,j$, define $E_{ij}(v_j)=w_i$ and $E_{ij}(v_k)=0$ for $k\\neq j$, then extend linearly.",
      "Every $T\\in\\mathcal L(V,W)$ is determined by $T(v_j)=\\sum_i a_{ij}w_i$, so $T=\\sum_{i,j}a_{ij}E_{ij}$.",
      "If $\\sum c_{ij}E_{ij}=0$, evaluating at each $v_j$ gives $\\sum_i c_{ij}w_i=0$, hence every $c_{ij}=0$.",
      "Thus $\\{E_{ij}\\}$ is a basis containing $mn$ maps."
    ],
    answer:"$\\dim\\mathcal L(V,W)=mn$.",
    mistake:"Claiming the dimension is $m+n$ by merely adding the dimensions of the domain and codomain.",
    insight:"An $m\\times n$ matrix appears because a linear map has $mn$ coordinate parameters relative to chosen bases."
  },
  "LA-BD-058": {
    title:"Constructing the Dual Basis", subchapter:"Coordinates", difficulty:"Advanced", type:"Construction", estimatedTime:"14 minutes",
    concepts:["dual basis","coordinate functionals"],
    problem:"If $B=(v_1,\\ldots,v_n)$ is a basis of $V$, construct the dual basis $B^*=(\\varphi_1,\\ldots,\\varphi_n)$ and prove its defining properties.",
    hint1:"Define $\\varphi_i$ to extract the $i$th coordinate.", hint2:"Use $\\varphi_i(v_j)=\\delta_{ij}$.",
    known:"Every vector has unique coordinates relative to $B$.", target:"Construct a basis of $V^*$.", idea:"Use coordinate extraction as a linear functional.",
    solution:[
      "For $v=\\sum_j a_jv_j$, define $\\varphi_i(v)=a_i$.",
      "Uniqueness of coordinates makes this definition well defined, and linearity of coordinates makes each $\\varphi_i$ linear.",
      "Clearly $\\varphi_i(v_j)=\\delta_{ij}$.",
      "If $\\sum c_i\\varphi_i=0$, evaluation at $v_j$ gives $c_j=0$, so these functionals are linearly independent.",
      "Since $\\dim V^*=\\dim V=n$, they form a basis of the dual space."
    ],
    answer:"The dual basis is characterized by $\\varphi_i(v_j)=\\delta_{ij}$.",
    mistake:"Thinking the dual basis consists of vectors in $V$ rather than functionals in $V^*$.",
    insight:"Coordinates are precisely the values of the dual-basis functionals."
  },
  "LA-BD-059": {
    title:"Dimension of the Dual Space", subchapter:"Dimension", difficulty:"Advanced", type:"Proof", estimatedTime:"12 minutes",
    concepts:["dual space","dimension"],
    problem:"Prove that if $V$ is finite-dimensional, then $\\dim V^*=\\dim V$.",
    hint1:"Use a dual basis.", hint2:"If $\\dim V=n$, construct the $n$ coordinate functionals.",
    known:"$V^*$ is the space of all linear functionals $V\\to\\mathbb F$.", target:"Prove equality of the two dimensions.", idea:"Construct an explicit basis of the dual space.",
    solution:[
      "Take a basis $B=(v_1,\\ldots,v_n)$ of $V$.",
      "Construct coordinate functionals $\\varphi_i$ satisfying $\\varphi_i(v_j)=\\delta_{ij}$.",
      "The preceding construction shows that $\\varphi_1,\\ldots,\\varphi_n$ are linearly independent.",
      "For every $f\\in V^*$ and $v=\\sum a_jv_j$, we have $f(v)=\\sum a_jf(v_j)=\\sum_i f(v_i)\\varphi_i(v)$.",
      "Thus $f=\\sum_i f(v_i)\\varphi_i$, so the dual basis spans $V^*$."
    ],
    answer:"$\\dim V^*=n=\\dim V$.",
    mistake:"Using equality of dimensions as an assumption before proving that the dual basis spans.",
    insight:"Equal dimensions do not produce a canonical isomorphism $V\\cong V^*$ without additional structure."
  },
  "LA-BD-060": {
    title:"A Proper Subspace Has Smaller Dimension", subchapter:"Dimension", difficulty:"Advanced", type:"Proof", estimatedTime:"9 minutes",
    concepts:["proper subspace","dimension","basis extension"],
    problem:"If $W$ is a proper subspace of a finite-dimensional space $V$, prove that $\\dim W<\\dim V$.",
    hint1:"Take a basis of $W$ and choose $v\\in V\\setminus W$.", hint2:"Adjoin $v$ to the basis of $W$.",
    known:"$W\\neq V$.", target:"Prove the strict dimension inequality.", idea:"A basis of $W$ can be extended by at least one vector.",
    solution:[
      "Take a basis $w_1,\\ldots,w_k$ of $W$.",
      "Since $W$ is proper, choose $v\\in V\\setminus W=V\\setminus\\operatorname{span}\\{w_i\\}$.",
      "The set $w_1,\\ldots,w_k,v$ is linearly independent.",
      "Hence $V$ contains a linearly independent set with $k+1$ vectors, so $\\dim V\\ge k+1$.",
      "Therefore $\\dim W=k<\\dim V$."
    ],
    answer:"$\\dim W<\\dim V$.",
    mistake:"Using only $\\dim W\\le\\dim V$ without explaining why equality is impossible.",
    insight:"In finite dimensions, inclusion together with equal dimension forces equality of subspaces."
  },
  "LA-BD-061": {
    title:"Equal Dimension Plus Inclusion Implies Equality", subchapter:"Dimension", difficulty:"Advanced", type:"Proof", estimatedTime:"8 minutes",
    concepts:["subspace equality","dimension"],
    problem:"If $U\\subseteq W$ and $\\dim U=\\dim W<\\infty$, prove that $U=W$.",
    hint1:"Assume the inclusion is proper.", hint2:"Use the theorem that a proper subspace has smaller dimension.",
    known:"Subspace inclusion and equality of finite dimensions.", target:"Prove equality of subspaces.", idea:"Contradict the proper-subspace dimension theorem.",
    solution:[
      "Suppose $U\\neq W$. Since $U\\subseteq W$, $U$ is then a proper subspace of $W$.",
      "The proper-subspace theorem gives $\\dim U<\\dim W$.",
      "This contradicts the assumption $\\dim U=\\dim W$.",
      "Therefore $U=W$."
    ],
    answer:"$U=W$.", mistake:"Assuming equal dimensions alone imply equality without an inclusion.", insight:"This criterion is often the fastest way to prove that two subspaces are equal."
  },
  "LA-BD-062": {
    title:"Dimension of a Direct Sum of Three Subspaces", subchapter:"Dimension", difficulty:"Advanced", type:"Proof", estimatedTime:"13 minutes",
    concepts:["direct sum","union of bases","dimension"],
    problem:"If $V=U_1\\oplus U_2\\oplus U_3$, prove that $\\dim V=\\dim U_1+\\dim U_2+\\dim U_3$.",
    hint1:"Choose a basis of each subspace.", hint2:"Show that the union of the three bases is linearly independent and spanning.",
    known:"Every vector of $V$ has a unique representation $u_1+u_2+u_3$.", target:"Prove the dimension formula.", idea:"Combine bases of the direct-sum components.",
    solution:[
      "Choose a basis $B_i$ of each $U_i$.",
      "Since $V=U_1+U_2+U_3$, the union $B_1\\cup B_2\\cup B_3$ spans $V$.",
      "If a linear combination of the union is zero, group it as $u_1+u_2+u_3=0$ with $u_i\\in U_i$.",
      "Uniqueness of representation in a direct sum forces $u_1=u_2=u_3=0$.",
      "Linear independence of each $B_i$ then forces every coefficient to be zero.",
      "Thus the union is a basis of $V$, and its size is the sum of the sizes of the three bases."
    ],
    answer:"$\\dim V=\\dim U_1+\\dim U_2+\\dim U_3$.",
    mistake:"Applying the formula to a sum of subspaces that is not direct.",
    insight:"The same argument extends to any finite direct sum."
  },
  "LA-BD-063": {
    title:"Basis of Upper-Triangular Matrices", subchapter:"Subspace Bases", difficulty:"Advanced", type:"Construction", estimatedTime:"9 minutes",
    concepts:["upper triangular matrices","basis","dimension"],
    problem:"Determine the dimension of the space of upper-triangular $n\\times n$ matrices and give a natural basis.",
    hint1:"Count positions $(i,j)$ with $i\\le j$.", hint2:"Use $E_{ij}$ for $i\\le j$.",
    known:"Entries below the main diagonal must be zero.", target:"Construct a basis and count its size.", idea:"Use one matrix unit for every allowed position.",
    solution:[
      "An upper-triangular matrix may have arbitrary entries exactly in positions with $i\\le j$.",
      "The matrix units $E_{ij}$ with $i\\le j$ span the space and are linearly independent.",
      "There are $n$ allowed positions in the first row, $n-1$ in the second, and so on down to $1$.",
      "Thus the total is $n+(n-1)+\\cdots+1=\\frac{n(n+1)}2$."
    ],
    answer:"The dimension is $\\frac{n(n+1)}2$, with basis $\\{E_{ij}:i\\le j\\}$.",
    mistake:"Using all $E_{ij}$ and thereby including matrices that are not upper triangular.",
    insight:"The upper-triangular and symmetric subspaces have the same dimension even though they are different subspaces."
  },
  "LA-BD-064": {
    title:"Matrices Whose Row Sums Are Zero", subchapter:"Subspace Bases", difficulty:"Advanced", type:"Construction", estimatedTime:"12 minutes",
    concepts:["linear constraints","matrices","dimension"],
    problem:"Determine the dimension of the subspace $W\\subset M_{2\\times3}(\\mathbb R)$ whose matrices have every row sum equal to zero.",
    hint1:"Each length-$3$ row with zero sum has two free parameters.", hint2:"The two row constraints are independent.",
    known:"The matrix has six entries and two independent row-sum equations.", target:"Determine the dimension and construct a basis.", idea:"Parametrize each row separately.",
    solution:[
      "Write the matrix as $\\begin{pmatrix}a&b&-a-b\\\\c&d&-c-d\\end{pmatrix}$.",
      "There are four free parameters $a,b,c,d$.",
      "A basis is obtained by turning on one parameter at a time: $\\begin{pmatrix}1&0&-1\\\\0&0&0\\end{pmatrix}$, $\\begin{pmatrix}0&1&-1\\\\0&0&0\\end{pmatrix}$, $\\begin{pmatrix}0&0&0\\\\1&0&-1\\end{pmatrix}$, $\\begin{pmatrix}0&0&0\\\\0&1&-1\\end{pmatrix}$.",
      "These four matrices are linearly independent and span $W$."
    ],
    answer:"$\\dim W=4$.",
    mistake:"Subtracting only one dimension because 'row sum zero' is incorrectly treated as a single global condition.",
    insight:"Each independent linear constraint lowers the dimension by one."
  },
  "LA-BD-065": {
    title:"Basis Criterion via the Determinant", subchapter:"Basis", difficulty:"Advanced", type:"Proof", estimatedTime:"12 minutes",
    concepts:["determinant","basis","invertibility"],
    problem:"For vectors $v_1,\\ldots,v_n\\in\\mathbb R^n$, prove that they form a basis if and only if the matrix $A=[v_1\\ \\cdots\\ v_n]$ satisfies $\\det A\\neq0$.",
    hint1:"Connect linear independence of the columns with the kernel of the matrix.", hint2:"Use the equivalence between invertibility and nonzero determinant.",
    known:"The columns of $A$ are the vectors under consideration.", target:"Connect the basis condition with the determinant.", idea:"Basis $\\Leftrightarrow$ independent columns $\\Leftrightarrow$ $A$ invertible.",
    solution:[
      "The vectors $v_1,\\ldots,v_n$ are linearly independent exactly when $A\\mathbf c=0$ has only the trivial solution.",
      "This is equivalent to $\\ker A=\\{0\\}$, so $A$ is injective.",
      "Since $A:\\mathbb R^n\\to\\mathbb R^n$, injectivity is equivalent to invertibility.",
      "A square matrix is invertible if and only if its determinant is nonzero.",
      "In an $n$-dimensional space, $n$ linearly independent vectors automatically form a basis."
    ],
    answer:"Proved.",
    mistake:"Trying to use a determinant test for a non-square matrix.",
    insight:"The determinant is a basis test precisely when the number of vectors equals the dimension of the coordinate space."
  },
  "LA-BD-066": {
    title:"Basis and Change-of-Coordinates Matrix", subchapter:"Coordinates", difficulty:"Advanced", type:"Computation", estimatedTime:"14 minutes",
    concepts:["change of basis","coordinates","matrix"],
    problem:"In $\\mathbb R^2$, let $B=((1,1),(1,-1))$ and $C=((2,0),(1,1))$. Determine the matrix $P_{C\\leftarrow B}$ that sends $[v]_B$ to $[v]_C$.",
    hint1:"Column $j$ is $[b_j]_C$.", hint2:"Find the coordinates of $(1,1)$ and $(1,-1)$ relative to $C$.",
    known:"Two ordered bases $B$ and $C$.", target:"Construct the change-of-coordinates matrix.", idea:"Write each old basis vector in the new basis.",
    solution:[
      "For $b_1=(1,1)$, solve $a(2,0)+b(1,1)=(1,1)$. The second coordinate gives $b=1$, then $2a+1=1$, so $a=0$. Thus $[b_1]_C=(0,1)$.",
      "For $b_2=(1,-1)$, the second coordinate gives $b=-1$, then $2a-1=1$, so $a=1$. Thus $[b_2]_C=(1,-1)$.",
      "These coordinate vectors form the columns of the change-of-coordinates matrix."
    ],
    answer:"$P_{C\\leftarrow B}=\\begin{pmatrix}0&1\\\\1&-1\\end{pmatrix}$.",
    mistake:"Placing the coordinate vectors as rows instead of columns.",
    insight:"Every change-of-basis matrix is invertible because it converts bijectively between two coordinate systems."
  },
  "LA-BD-067": {
    title:"Inverse of a Change-of-Basis Matrix", subchapter:"Coordinates", difficulty:"Advanced", type:"Proof", estimatedTime:"10 minutes",
    concepts:["change of basis","inverse","coordinates"],
    problem:"Prove that $P_{B\\leftarrow C}=(P_{C\\leftarrow B})^{-1}$ for two ordered bases $B,C$ of a finite-dimensional space.",
    hint1:"Compose the two coordinate changes.", hint2:"Changing from $B$ to $C$ and then back to $B$ must give the identity.",
    known:"The two matrices represent inverse coordinate maps.", target:"Prove the inverse relationship.", idea:"Use composition of coordinate transformations.",
    solution:[
      "For every $v$, $[v]_C=P_{C\\leftarrow B}[v]_B$.",
      "Also $[v]_B=P_{B\\leftarrow C}[v]_C$.",
      "Substitution gives $[v]_B=P_{B\\leftarrow C}P_{C\\leftarrow B}[v]_B$ for every coordinate vector $[v]_B$.",
      "Every vector of $\\mathbb F^n$ appears as the coordinate vector of some $v$, so $P_{B\\leftarrow C}P_{C\\leftarrow B}=I$.",
      "The reverse composition similarly gives the identity."
    ],
    answer:"$P_{B\\leftarrow C}=(P_{C\\leftarrow B})^{-1}$.",
    mistake:"Confusing the direction of the arrows in change-of-basis notation.",
    insight:"The arrow notation $C\\leftarrow B$ helps track the domain and codomain of the coordinate map."
  },
  "LA-BD-068": {
    title:"Bases for a Sum and Intersection", subchapter:"Dimension", difficulty:"Advanced", type:"Computation", estimatedTime:"12 minutes",
    concepts:["sum","intersection","dimension"],
    problem:"In $\\mathbb R^4$, let $U=\\operatorname{span}\\{e_1,e_2,e_3\\}$ and $W=\\operatorname{span}\\{e_2,e_3,e_4\\}$. Find bases of $U\\cap W$ and $U+W$.",
    hint1:"Inspect which coordinates must vanish in each subspace.", hint2:"The common directions are $e_2,e_3$.",
    known:"Two coordinate subspaces of $\\mathbb R^4$.", target:"Find bases for the intersection and sum.", idea:"Use the standard-basis structure.",
    solution:[
      "Vectors in $U$ have the form $(a,b,c,0)$, while vectors in $W$ have the form $(0,d,e,f)$.",
      "To lie in both, the first and fourth coordinates must vanish. Hence $U\\cap W=\\operatorname{span}\\{e_2,e_3\\}$.",
      "The combined set $\\{e_1,e_2,e_3,e_4\\}$ spans $U+W$ and is the standard basis of $\\mathbb R^4$.",
      "Therefore $U+W=\\mathbb R^4$."
    ],
    answer:"A basis of $U\\cap W$ is $\\{e_2,e_3\\}$ and a basis of $U+W$ is $\\{e_1,e_2,e_3,e_4\\}$.",
    mistake:"Taking the union of the two bases as a basis of the intersection.",
    insight:"The dimension formula verifies the result: $3+3-2=4$."
  },
  "LA-BD-069": {
    title:"A Hyperplane Given by aᵀx=0", subchapter:"Rank–Nullity", difficulty:"Advanced", type:"Proof", estimatedTime:"12 minutes",
    concepts:["hyperplane","rank","nullity"],
    problem:"If $a\\in\\mathbb R^n$ is nonzero, prove that $W=\\{x\\in\\mathbb R^n:a^Tx=0\\}$ has dimension $n-1$.",
    hint1:"Define the functional $T(x)=a^Tx$.", hint2:"Since $a\\neq0$, $T$ is not the zero map.",
    known:"One nontrivial homogeneous linear equation.", target:"Prove the dimension of the hyperplane.", idea:"Use the kernel of a nonzero functional.",
    solution:[
      "Define $T:\\mathbb R^n\\to\\mathbb R$ by $T(x)=a^Tx$.",
      "The map is linear and nonzero because $a\\neq0$; if $a_j\\neq0$, then $T(e_j)=a_j\\neq0$.",
      "A nonzero subspace of $\\mathbb R$ is all of $\\mathbb R$, so the image has dimension $1$.",
      "The kernel of $T$ is exactly $W$.",
      "Rank–Nullity gives $n=\\dim W+1$."
    ],
    answer:"$\\dim W=n-1$.",
    mistake:"Saying 'one equation lowers the dimension by one' without checking that the equation is nontrivial.",
    insight:"Every nonzero linear functional defines a hyperplane through its kernel."
  },
  "LA-BD-070": {
    title:"Kernel of Two Independent Equations", subchapter:"Rank–Nullity", difficulty:"Advanced", type:"Computation", estimatedTime:"11 minutes",
    concepts:["rank","nullity","linear constraints"],
    problem:"In $\\mathbb R^5$, determine the dimension of the solution set of $x_1+x_2+x_3+x_4+x_5=0$ and $x_1-x_2=0$.",
    hint1:"Show that the two constraint rows are linearly independent.", hint2:"The rank of the system is $2$.",
    known:"Two homogeneous equations in five variables.", target:"Compute the dimension of the solution space.", idea:"Apply Rank–Nullity to the constraint matrix.",
    solution:[
      "The constraint matrix has rows $(1,1,1,1,1)$ and $(1,-1,0,0,0)$.",
      "The two rows are not scalar multiples, so they are independent and the matrix has rank $2$.",
      "The constraint map sends $\\mathbb R^5$ to $\\mathbb R^2$ with rank $2$.",
      "Therefore the nullity is $5-2=3$."
    ],
    answer:"The solution space has dimension $3$.",
    mistake:"Subtracting the number of equations without first checking that the equations are independent.",
    insight:"The number of equations need not equal the rank; the relevant quantity is the number of independent constraints."
  },
  "LA-BD-071": {
    title:"Finding a Basis from a Parametric Description", subchapter:"Subspace Bases", difficulty:"Advanced", type:"Construction", estimatedTime:"11 minutes",
    concepts:["parametric form","basis","independence"],
    problem:"Let $W=\\{(s+t,2s-t,s,3t):s,t\\in\\mathbb R\\}$. Find a basis and the dimension of $W$.",
    hint1:"Separate the coefficients of $s$ and $t$.", hint2:"$W=\\operatorname{span}\\{(1,2,1,0),(1,-1,0,3)\\}$.",
    known:"A parametric representation with two parameters.", target:"Determine whether the two generators are linearly independent.", idea:"Separate the parameters and test independence.",
    solution:[
      "$(s+t,2s-t,s,3t)=s(1,2,1,0)+t(1,-1,0,3)$.",
      "If $a(1,2,1,0)+b(1,-1,0,3)=0$, the third coordinate gives $a=0$ and the fourth gives $b=0$.",
      "Thus the two vectors are linearly independent and span $W$."
    ],
    answer:"A basis is $\\{(1,2,1,0),(1,-1,0,3)\\}$ and the dimension is $2$.",
    mistake:"Assuming that the number of parameters always equals the dimension without checking independence of the parametric generators.",
    insight:"Redundant parameters can make the dimension smaller than the number of parameters."
  },
  "LA-BD-072": {
    title:"Basis from Linear Constraints", subchapter:"Subspace Bases", difficulty:"Advanced", type:"Computation", estimatedTime:"13 minutes",
    concepts:["constraints","parameterization","basis"],
    problem:"Find a basis of $W=\\{(x,y,z,w)\\in\\mathbb R^4:x+y=0,\\ z-w=0\\}$.",
    hint1:"Use $y=-x$ and $w=z$.", hint2:"Separate the parameters $x$ and $z$.",
    known:"Two independent constraints.", target:"Construct a basis.", idea:"Parametrize directly.",
    solution:[
      "From $x+y=0$, we get $y=-x$, and from $z-w=0$, we get $w=z$.",
      "Hence $(x,y,z,w)=x(1,-1,0,0)+z(0,0,1,1)$.",
      "The two vectors are linearly independent because their supports occur in separate coordinate blocks."
    ],
    answer:"A basis is $\\{(1,-1,0,0),(0,0,1,1)\\}$ and the dimension is $2$.",
    mistake:"Using the wrong sign in the second constraint.",
    insight:"Constraints acting on separate coordinate blocks often produce a particularly natural basis."
  },
  "LA-BD-073": {
    title:"Dimension of the Span of Trigonometric Functions", subchapter:"Dimension", difficulty:"Advanced", type:"Proof", estimatedTime:"13 minutes",
    concepts:["function space","linear independence","trigonometric functions"],
    problem:"Prove that $\\{1,\\sin x,\\cos x\\}$ is linearly independent as a family of functions $\\mathbb R\\to\\mathbb R$.",
    hint1:"Suppose $a+b\\sin x+c\\cos x=0$ for every $x$.", hint2:"Evaluate at convenient points such as $0,\\pi/2,\\pi$.",
    known:"The functional identity holds for every $x$.", target:"Show that all coefficients vanish.", idea:"Evaluate the identity at strategically chosen points.",
    solution:[
      "Suppose $a+b\\sin x+c\\cos x=0$ for every $x$.",
      "At $x=0$, we obtain $a+c=0$.",
      "At $x=\\pi$, we obtain $a-c=0$. Hence $a=c=0$.",
      "At $x=\\pi/2$, we obtain $a+b=0$, so $b=0$.",
      "Therefore only the trivial relation exists."
    ],
    answer:"The set is linearly independent and its span has dimension $3$.",
    mistake:"Claiming independence merely because the three functions look different.",
    insight:"Evaluation at carefully chosen points can reduce function independence to a small linear system."
  },
  "LA-BD-074": {
    title:"Independence of Exponential Functions", subchapter:"Linear Independence", difficulty:"Advanced", type:"Proof", estimatedTime:"14 minutes",
    concepts:["function space","independence","exponential functions"],
    problem:"Prove that $\\{e^x,e^{2x}\\}$ is linearly independent as a family of real-valued functions.",
    hint1:"Suppose $ae^x+be^{2x}=0$ for every $x$.", hint2:"Divide by $e^x$, which never vanishes.",
    known:"$e^x>0$ for every real $x$.", target:"Show that the coefficients in the relation are zero.", idea:"Factor out a nonzero function.",
    solution:[
      "Suppose $ae^x+be^{2x}=0$ for every $x$.",
      "Since $e^x\\neq0$, divide by $e^x$ to get $a+be^x=0$ for every $x$.",
      "At $x=0$, $a+b=0$; at $x=\\ln2$, $a+2b=0$.",
      "Subtracting the equations gives $b=0$, and then $a=0$."
    ],
    answer:"$\\{e^x,e^{2x}\\}$ is linearly independent.",
    mistake:"Dividing by an expression that could be zero; here it is valid because $e^x$ is always positive.",
    insight:"For larger families of exponential functions, a Wronskian or Vandermonde argument can be used."
  },
  "LA-BD-075": {
    title:"Dimension of a Simple Differential-Equation Solution Space", subchapter:"Dimension", difficulty:"Advanced", type:"Concept", estimatedTime:"12 minutes",
    concepts:["solution space","differential equation","basis"],
    problem:"In the space of twice-differentiable functions, show that the solution set of $y''=0$ is a two-dimensional vector space and find a basis.",
    hint1:"Integrate the equation twice.", hint2:"Every solution has the form $y(x)=ax+b$.",
    known:"The homogeneous linear differential equation $y''=0$.", target:"Describe the solution set as a vector space.", idea:"Find the general solution and identify the free parameters.",
    solution:[
      "From $y''=0$, we obtain $y'=a$ for some constant $a$.",
      "Integrating once more gives $y=ax+b$.",
      "Thus the solution space is $\\{ax+b:a,b\\in\\mathbb R\\}=\\operatorname{span}\\{x,1\\}$.",
      "The functions $1$ and $x$ are linearly independent."
    ],
    answer:"A basis is $\\{1,x\\}$ and the dimension is $2$.",
    mistake:"Assuming that a function space is automatically infinite-dimensional even when restricted by a differential equation.",
    insight:"Many solution spaces of linear $n$th-order ODEs have dimension $n$ under suitable regularity assumptions."
  }
};
