import type { DeepMaterial } from "@/data/deep-materials";

export const deepMaterialsEnC: DeepMaterial[] = [
  {
    slug: "kombinatorika-olimpiade-sma",
    title: "Senior High Olympiad Combinatorics",
    level: "Senior High Olympiad",
    subject: "Combinatorics",
    track: "Olympiad",
    summary: "Counting, bijections, double counting, the pigeonhole principle, inclusion–exclusion, recurrences, invariants, coloring, and the extremal principle.",
    readingTime: "100–130 minutes",
    difficulty: "Advanced",
    visualization: "combinatorics",
    prerequisites: ["Multiplication principle", "Combinations and permutations", "Proof logic"],
    objectives: [
      "Choose an appropriate counting model.",
      "Use bijections and double counting to prove identities.",
      "Use inclusion–exclusion and recurrence relations.",
      "Apply invariants, coloring, and the extremal principle to non-routine problems."
    ],
    conceptMap: ["Counting", "Bijection", "Double counting", "Pigeonhole", "Inclusion–exclusion", "Recurrence", "Invariant", "Extremal"],
    motivation: [
      "Olympiad combinatorics is not merely about applying formulas such as $nCr$. The main challenge is to find a representation that exposes the structure of the problem.",
      "Many of the most elegant proofs arise by counting the same collection of objects in two different ways."
    ],
    intuition: [
      "A bijection proves that two sets have the same size by pairing their elements one-to-one.",
      "An invariant is a quantity that remains unchanged throughout a process, while a monovariant always moves in one direction."
    ],
    notation: [
      { symbol: "$\\binom{n}{k}$", meaning: "the number of ways to choose $k$ objects from $n$ objects" },
      { symbol: "$|A|$", meaning: "the cardinality of the set $A$" },
      { symbol: "$A\\triangle B$", meaning: "the symmetric difference of $A$ and $B$" }
    ],
    definitions: [
      { title: "Bijection", body: "A bijection is a function that is both injective and surjective. In counting arguments, it gives a one-to-one correspondence between two classes of objects." },
      { title: "Invariant", body: "An invariant is a quantity or property that remains unchanged throughout a sequence of allowed operations." },
      { title: "Extremal Principle", body: "A strategy that selects a smallest, largest, leftmost, rightmost, or otherwise extreme object in order to force additional structure." }
    ],
    theorems: [
      {
        title: "Pascal's Identity",
        statement: "$\\binom{n}{k}=\\binom{n-1}{k}+\\binom{n-1}{k-1}$.",
        proof: [
          "Count the ways to choose $k$ people from $n$ people by distinguishing one particular person, say A.",
          "Selections that do not contain A are counted by $\\binom{n-1}{k}$.",
          "Selections that contain A are determined by choosing the remaining $k-1$ people from the other $n-1$, giving $\\binom{n-1}{k-1}$.",
          "The two cases are disjoint and cover all possibilities, so their sum gives Pascal's identity."
        ],
        why: "This identity underlies Pascal's triangle, binomial recurrences, and many combinatorial counting arguments."
      },
      {
        title: "Two-Set Inclusion–Exclusion Principle",
        statement: "$|A\\cup B|=|A|+|B|-|A\\cap B|$.",
        proof: [
          "The sum $|A|+|B|$ counts every element of $A\\cap B$ twice.",
          "Subtract $|A\\cap B|$ once so that every element of $A\\cup B$ is counted exactly once."
        ],
        why: "This is the basic mechanism for correcting overcounting."
      },
      {
        title: "Handshaking Lemma",
        statement: "For every finite simple graph, $\\sum_{v\\in V}\\deg(v)=2|E|$.",
        proof: [
          "Count incidence pairs $(v,e)$ for which the vertex $v$ is an endpoint of the edge $e$.",
          "Counting by vertices gives $\\sum_v\\deg(v)$.",
          "Counting by edges gives $2|E|$, since every edge has exactly two endpoints.",
          "Both counts enumerate the same set of incidence pairs."
        ],
        why: "This is a classic example of double counting and an essential tool in graph combinatorics."
      }
    ],
    examples: [
      {
        title: "Binary Strings",
        problem: "How many binary strings of length $8$ contain exactly three $1$s?",
        solution: ["Choose the positions of the three $1$s among the eight positions.", "The number is $\\binom83=56$."]
      },
      {
        title: "Inclusion–Exclusion",
        problem: "How many integers $1\\le n\\le100$ are divisible by $2$ or $5$?",
        solution: ["There are $50$ multiples of $2$, $20$ multiples of $5$, and $10$ multiples of $10$.", "Hence the total is $50+20-10=60$."]
      },
      {
        title: "Parity Invariant",
        problem: "A board contains integers. In one move, two numbers $a,b$ are replaced by $a+1,b+1$. What remains invariant modulo $2$?",
        solution: ["The total sum increases by $2$ at every move.", "Therefore the parity of the total sum is invariant."]
      }
    ],
    mistakes: [
      "Using permutations when order is irrelevant.",
      "Applying inclusion–exclusion but forgetting higher-order intersection terms.",
      "Claiming an invariant without proving that every allowed operation preserves it."
    ],
    related: ["Graph Theory", "Generating Functions", "Recurrences", "Probability"],
    references: ["Miklós Bóna, A Walk Through Combinatorics, 4th ed."]
  },
  {
    slug: "aljabar-linear-onmipa",
    title: "ON-MIPA Linear Algebra",
    level: "University Olympiad / ON-MIPA",
    subject: "Linear Algebra",
    track: "ON-MIPA",
    summary: "Vector spaces, bases, linear transformations, rank-nullity, eigenvalues, minimal polynomials, invariant subspaces, inner products, and competition strategies.",
    readingTime: "120–160 minutes",
    difficulty: "Advanced",
    visualization: "onmipa-linear",
    prerequisites: ["Introductory linear algebra", "Polynomials", "Formal proof techniques"],
    objectives: [
      "Use dimension as an algebraic counting tool.",
      "Exploit kernels, images, rank-nullity, and invariance.",
      "Analyze operators through eigenvalues and polynomials.",
      "Solve proof and construction problems at competition level."
    ],
    conceptMap: ["Vector spaces", "Dimension", "Linear maps", "Kernel–Image", "Eigenvalues", "Invariant subspaces", "Inner product"],
    motivation: [
      "ON-MIPA problems often reward structural arguments rather than long row-reduction calculations.",
      "Dimension, rank-nullity, invariance, and operator polynomials frequently turn lengthy computations into short proofs."
    ],
    intuition: [
      "A linear transformation is completely determined by what it does to a basis.",
      "The kernel measures directions collapsed to zero, while the image measures output directions that are actually reached."
    ],
    notation: [
      { symbol: "$\\mathcal L(V,W)$", meaning: "the vector space of all linear maps from $V$ to $W$" },
      { symbol: "$\\ker T$", meaning: "the kernel of $T$" },
      { symbol: "$\\operatorname{im}T$", meaning: "the image or range of $T$" }
    ],
    definitions: [
      { title: "Invariant Subspace", body: "A subspace $U\\subseteq V$ is invariant under $T$ if $T(U)\\subseteq U$." },
      { title: "Eigenvalue", body: "A scalar $\\lambda$ is an eigenvalue of $T$ if there exists $v\\neq0$ such that $Tv=\\lambda v$." },
      { title: "Minimal Polynomial", body: "The monic polynomial of smallest degree $m_T$ satisfying $m_T(T)=0$ is called the minimal polynomial of $T$." }
    ],
    theorems: [
      {
        title: "Rank–Nullity Theorem",
        statement: "If $V$ is finite-dimensional and $T:V\\to W$ is linear, then $\\dim V=\\dim\\ker T+\\dim\\operatorname{im}T$.",
        proof: [
          "Take a basis $u_1,\\ldots,u_k$ of $\\ker T$ and extend it to a basis $u_1,\\ldots,u_k,v_1,\\ldots,v_r$ of $V$.",
          "The vectors $Tv_1,\\ldots,Tv_r$ span $\\operatorname{im}T$: the image of any basis expansion loses the $u_j$ terms because $Tu_j=0$.",
          "They are also linearly independent. If $\\sum a_iTv_i=0$, then $\\sum a_iv_i\\in\\ker T$, but it also lies in the span of the $v_i$. Uniqueness of coordinates in the extended basis forces every $a_i=0$.",
          "Thus $\\dim\\operatorname{im}T=r$, while $\\dim V=k+r$."
        ],
        why: "This theorem is often the first tool to use when the size of a kernel or image is known."
      },
      {
        title: "Eigenvectors for Distinct Eigenvalues Are Linearly Independent",
        statement: "Eigenvectors corresponding to distinct eigenvalues are linearly independent.",
        proof: [
          "Proceed by induction on the number of eigenvectors. The case of one vector is immediate.",
          "Assume $v_1,\\ldots,v_n$ satisfy $\\sum a_iv_i=0$ and correspond to distinct eigenvalues $\\lambda_i$.",
          "Apply $T-\\lambda_nI$ to eliminate the last term, obtaining $\\sum_{i=1}^{n-1}a_i(\\lambda_i-\\lambda_n)v_i=0$.",
          "By the induction hypothesis and the inequalities $\\lambda_i\\neq\\lambda_n$, we get $a_1=\\cdots=a_{n-1}=0$, and then $a_n=0$."
        ],
        why: "This gives an immediate bound on the number of distinct eigenvalues and often leads directly to diagonalizability arguments."
      },
      {
        title: "Cayley–Hamilton Theorem",
        statement: "Every square matrix $A$ satisfies its own characteristic polynomial: $\\chi_A(A)=0$.",
        proof: [
          "A competition-level proof may use the adjugate identity $(tI-A)\\operatorname{adj}(tI-A)=\\chi_A(t)I$ as a polynomial matrix identity.",
          "Write $\\operatorname{adj}(tI-A)=B_0+B_1t+\\cdots+B_{n-1}t^{n-1}$ and compare coefficients.",
          "Combining the resulting coefficient relations after substituting $t=A$ yields $\\chi_A(A)=0$."
        ],
        why: "Cayley–Hamilton reduces high powers of an operator to combinations of lower powers and connects naturally to the minimal polynomial."
      }
    ],
    examples: [
      {
        title: "Nilpotent Operator",
        problem: "If $T^3=0$, which eigenvalues can $T$ have?",
        solution: ["If $Tv=\\lambda v$, then $T^3v=\\lambda^3v$.", "Since $T^3=0$ and $v\\neq0$, we get $\\lambda^3=0$, hence $\\lambda=0$."]
      },
      {
        title: "Injective if and only if Surjective",
        problem: "If $T:V\\to V$ is linear on a finite-dimensional space, prove that $T$ is injective if and only if it is surjective.",
        solution: ["$T$ is injective exactly when $\\dim\\ker T=0$.", "Rank-nullity then gives $\\dim\\operatorname{im}T=\\dim V$, which is equivalent to surjectivity."]
      },
      {
        title: "Idempotent Operator",
        problem: "If $T^2=T$, prove that $V=\\ker T\\oplus\\operatorname{im}T$.",
        solution: ["For $v\\in V$, write $v=(v-Tv)+Tv$.", "$T(v-Tv)=Tv-T^2v=0$, so the first part lies in the kernel and the second in the image.", "If $x$ lies in both, write $x=Ty$ and note that $Tx=0$, while $Tx=T^2y=Ty=x$; hence $x=0$."]
      }
    ],
    mistakes: [
      "Forcing determinant computations onto problems that are much faster with dimension or kernel arguments.",
      "Assuming every operator has an eigenbasis without checking diagonalizability.",
      "Using rank-nullity without specifying that the domain is finite-dimensional."
    ],
    related: ["Basis and Dimension", "Abstract Algebra", "Complex Analysis", "Linear Combinatorics"],
    references: [
      "Sheldon Axler, Linear Algebra Done Right, 4th ed., Springer, 2024.",
      "Gilbert Strang, Introduction to Linear Algebra, 6th ed., 2023.",
      "Stephen H. Friedberg, Arnold J. Insel, Lawrence E. Spence, Linear Algebra, 5th ed., Pearson, 2022."
    ]
  },
  {
    slug: "analisis-real-onmipa",
    title: "ON-MIPA Real Analysis",
    level: "University Olympiad / ON-MIPA",
    subject: "Real Analysis",
    track: "ON-MIPA",
    summary: "Completeness, sequences, series, continuity, uniform continuity, differentiation, Riemann/Darboux integration, and uniform convergence.",
    readingTime: "140–180 minutes",
    difficulty: "Advanced",
    visualization: "real-analysis",
    prerequisites: ["Calculus", "Logic and proof techniques", "Suprema and infima"],
    objectives: [
      "Use completeness of the real numbers in proofs.",
      "Construct epsilon–N and epsilon–delta arguments.",
      "Distinguish pointwise convergence from uniform convergence.",
      "Combine compactness, continuity, and uniform continuity.",
      "Solve ON-MIPA-style analysis problems."
    ],
    conceptMap: ["Completeness", "Sequences", "Limits", "Continuity", "Compactness", "Riemann integration", "Uniform convergence"],
    motivation: [
      "Real analysis explains why the procedures of calculus are valid. University competitions test the ability to use definitions with precision.",
      "Many problems that initially look computational become short once the correct structural theorem is identified."
    ],
    intuition: [
      "The statement $a_n\\to L$ means that the tail of the sequence eventually lies inside every neighborhood of $L$, no matter how small.",
      "Uniform convergence requires one index $N$ to work simultaneously for every point in the domain."
    ],
    notation: [
      { symbol: "$a_n\\to L$", meaning: "the sequence $a_n$ converges to $L$" },
      { symbol: "$\\sup A,\\inf A$", meaning: "the supremum and infimum of a set" },
      { symbol: "$f_n\\rightrightarrows f$", meaning: "uniform convergence" }
    ],
    definitions: [
      { title: "Convergence of a Sequence", body: "$a_n\\to L$ if for every $\\varepsilon>0$ there exists $N$ such that $n\\ge N$ implies $|a_n-L|<\\varepsilon$." },
      { title: "Uniform Continuity", body: "A function $f:A\\to\\mathbb R$ is uniformly continuous if for every $\\varepsilon>0$ there exists $\\delta>0$ that works for all $x,y\\in A$." },
      { title: "Uniform Convergence", body: "$f_n\\to f$ uniformly on $A$ if for every $\\varepsilon>0$ there exists $N$ such that $n\\ge N$ implies $|f_n(x)-f(x)|<\\varepsilon$ for all $x\\in A$." }
    ],
    theorems: [
      {
        title: "Every Convergent Sequence Is Bounded",
        statement: "Every convergent real sequence is bounded.",
        proof: [
          "Suppose $a_n\\to L$. Take $\\varepsilon=1$. There exists $N$ such that $n\\ge N$ implies $|a_n-L|<1$.",
          "For $n\\ge N$, we have $|a_n|\\le|L|+1$.",
          "For the finitely many initial terms $a_1,\\ldots,a_{N-1}$, take the maximum of their absolute values. The maximum of this number and $|L|+1$ bounds the whole sequence."
        ],
        why: "This theorem is often the first step in controlling products, quotients, or subsequences."
      },
      {
        title: "Heine–Cantor Theorem",
        statement: "If $f$ is continuous on the compact interval $[a,b]$, then $f$ is uniformly continuous.",
        proof: [
          "Assume $f$ is not uniformly continuous. Then there exist $\\varepsilon_0>0$ and pairs $x_n,y_n\\in[a,b]$ with $|x_n-y_n|<1/n$ but $|f(x_n)-f(y_n)|\\ge\\varepsilon_0$.",
          "Compactness gives a subsequence $x_{n_k}\\to x\\in[a,b]$.",
          "Since $|x_{n_k}-y_{n_k}|\\to0$, we also have $y_{n_k}\\to x$.",
          "Continuity gives $f(x_{n_k})\\to f(x)$ and $f(y_{n_k})\\to f(x)$, so their difference tends to zero, contradicting the lower bound $\\varepsilon_0$."
        ],
        why: "Heine–Cantor turns local continuity into uniform global control on compact sets."
      },
      {
        title: "A Uniform Limit of Continuous Functions Is Continuous",
        statement: "If every $f_n$ is continuous on $A$ and $f_n\\to f$ uniformly, then $f$ is continuous on $A$.",
        proof: [
          "Fix $x_0\\in A$ and let $\\varepsilon>0$.",
          "Choose $N$ such that $|f_N(x)-f(x)|<\\varepsilon/3$ for all $x\\in A$.",
          "Continuity of $f_N$ at $x_0$ gives $\\delta>0$ such that $|x-x_0|<\\delta$ implies $|f_N(x)-f_N(x_0)|<\\varepsilon/3$.",
          "Apply the triangle inequality to $|f(x)-f(x_0)|$ and insert $f_N(x)$ and $f_N(x_0)$. Each of the three terms is less than $\\varepsilon/3$.",
          "Therefore $f$ is continuous at $x_0$. Since $x_0$ was arbitrary, $f$ is continuous on $A$."
        ],
        why: "This theorem explains why uniform convergence is substantially stronger than pointwise convergence."
      }
    ],
    examples: [
      {
        title: "Direct Proof that $1/n\\to0$",
        problem: "Prove directly from the definition that $1/n\\to0$.",
        solution: ["Let $\\varepsilon>0$ and choose $N>1/\\varepsilon$.", "If $n\\ge N$, then $0<1/n\\le1/N<\\varepsilon$.", "Thus $|1/n-0|<\\varepsilon$."]
      },
      {
        title: "Failure of Uniform Continuity",
        problem: "Prove that $f(x)=x^2$ is not uniformly continuous on $\\mathbb R$.",
        solution: ["Take $x_n=n$ and $y_n=n+1/n$.", "$|x_n-y_n|=1/n\\to0$, but $|y_n^2-x_n^2|=2+1/n^2\\to2$.", "This contradicts a necessary consequence of uniform continuity."]
      },
      {
        title: "Pointwise but Not Uniform Convergence",
        problem: "Analyze $f_n(x)=x^n$ on $[0,1]$.",
        solution: ["For $0\\le x<1$, $x^n\\to0$, while $f_n(1)=1$.", "The pointwise limit is $f(x)=0$ for $x<1$ and $f(1)=1$.", "This limit is discontinuous while every $f_n$ is continuous. Since a uniform limit of continuous functions must be continuous, the convergence is not uniform."]
      }
    ],
    mistakes: [
      "Reversing the order of quantifiers in the definitions of pointwise and uniform convergence.",
      "Using compactness without checking closedness and boundedness in $\\mathbb R$.",
      "Assuming that the existence of a convergent subsequence implies convergence of the entire sequence."
    ],
    related: ["Riemann Integral", "Metric Spaces", "Complex Analysis", "Introductory Functional Analysis"],
    references: ["Stephen Abbott, Understanding Analysis, 2nd ed., Springer, 2015."]
  }
];
