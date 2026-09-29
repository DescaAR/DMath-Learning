import type { DeepMaterial } from "@/data/deep-materials";

export const deepMaterialsEnB: DeepMaterial[] = [
  {
    slug: "integral-riemann",
    title: "Riemann Integral",
    level: "University",
    subject: "Real Analysis",
    track: "University",
    summary: "Partitions, Riemann sums, Darboux sums, integrability criteria, and the fundamental properties of the Riemann integral.",
    readingTime: "90–120 minutes",
    difficulty: "Intermediate–Advanced",
    visualization: "riemann",
    prerequisites: ["Supremum and infimum", "Sequences and limits", "Continuity", "Compactness of closed intervals"],
    objectives: [
      "Define partitions, mesh size, Riemann sums, and Darboux sums.",
      "Explain the Darboux criterion for integrability.",
      "Prove that every continuous function on a closed interval is Riemann integrable.",
      "Use linearity and monotonicity properties of the integral."
    ],
    conceptMap: ["Partitions", "Lower sums", "Upper sums", "Riemann sums", "Integrability", "Continuity", "Integral"],
    motivation: [
      "The Riemann integral formalizes the idea of area by summing increasingly fine rectangular approximations.",
      "In analysis, the main issue is not merely computing an integral, but proving that the limiting approximation actually exists and is independent of the chosen sample points."
    ],
    intuition: [
      "Lower sums approximate area from below, while upper sums approximate it from above. A function is integrable when the gap between the two can be made arbitrarily small.",
      "Uniform continuity on a closed interval lets us control the oscillation of a function on sufficiently short subintervals."
    ],
    notation: [
      { symbol: "$P=\\{x_0,\\ldots,x_n\\}$", meaning: "a partition of the interval $[a,b]$" },
      { symbol: "$\\|P\\|=\\max_i(x_i-x_{i-1})$", meaning: "the norm or mesh of the partition" },
      { symbol: "$L(f,P),U(f,P)$", meaning: "the lower and upper Darboux sums" }
    ],
    definitions: [
      { title: "Partition", body: "A partition $P$ of $[a,b]$ is a finite set $a=x_0<x_1<\\cdots<x_n=b$." },
      { title: "Darboux Sums", body: "If $m_i=\\inf_{[x_{i-1},x_i]}f$ and $M_i=\\sup_{[x_{i-1},x_i]}f$, then $L(f,P)=\\sum m_i\\Delta x_i$ and $U(f,P)=\\sum M_i\\Delta x_i$." },
      { title: "Riemann Integrable", body: "A bounded function $f:[a,b]\\to\\mathbb R$ is Riemann integrable when its lower and upper integrals are equal." }
    ],
    theorems: [
      {
        title: "Darboux Criterion",
        statement: "A bounded function $f:[a,b]\\to\\mathbb R$ is Riemann integrable if and only if for every $\\varepsilon>0$ there exists a partition $P$ such that $U(f,P)-L(f,P)<\\varepsilon$.",
        proof: [
          "Assume $f$ is integrable with integral $I$. From the definition of the lower integral as a supremum, choose a partition $P_1$ with $I-L(f,P_1)<\\varepsilon/2$. From the definition of the upper integral as an infimum, choose $P_2$ with $U(f,P_2)-I<\\varepsilon/2$.",
          "Take the common refinement $P=P_1\\cup P_2$. Refinement increases lower sums and decreases upper sums, so $U(f,P)-L(f,P)<\\varepsilon$.",
          "Conversely, suppose the Darboux gap can be made smaller than every positive $\\varepsilon$. The lower integral never exceeds the upper integral. If their difference were positive, choosing $\\varepsilon$ smaller than that difference would contradict the assumed existence of such a partition.",
          "Therefore the lower and upper integrals are equal."
        ],
        why: "This criterion turns the supremum–infimum definition into a practical tool for proving integrability."
      },
      {
        title: "Continuity Implies Riemann Integrability",
        statement: "Every continuous function $f:[a,b]\\to\\mathbb R$ is Riemann integrable.",
        proof: [
          "Because $[a,b]$ is compact and $f$ is continuous, $f$ is uniformly continuous.",
          "Let $\\varepsilon>0$. There exists $\\delta>0$ such that $|x-y|<\\delta$ implies $|f(x)-f(y)|<\\varepsilon/(b-a)$.",
          "Choose a partition with mesh less than $\\delta$. On every subinterval, the oscillation satisfies $M_i-m_i<\\varepsilon/(b-a)$.",
          "Hence $U(f,P)-L(f,P)=\\sum(M_i-m_i)\\Delta x_i<\\frac{\\varepsilon}{b-a}\\sum\\Delta x_i=\\varepsilon$.",
          "The Darboux criterion now shows that $f$ is Riemann integrable."
        ],
        why: "This theorem guarantees that the continuous functions most commonly encountered in calculus do indeed possess Riemann integrals."
      },
      {
        title: "Linearity of the Integral",
        statement: "If $f,g$ are integrable on $[a,b]$ and $\\alpha,\\beta\\in\\mathbb R$, then $\\alpha f+\\beta g$ is integrable and $\\int_a^b(\\alpha f+\\beta g)=\\alpha\\int_a^b f+\\beta\\int_a^b g$.",
        proof: [
          "For Riemann sums on the same tagged partition, linearity of finite sums gives $S(\\alpha f+\\beta g)=\\alpha S(f)+\\beta S(g)$.",
          "As the mesh tends to zero, $S(f)$ and $S(g)$ converge to their respective integrals.",
          "Linearity of limits yields the stated identity."
        ],
        why: "Linearity allows complicated integrands to be decomposed into simpler components."
      }
    ],
    examples: [
      {
        title: "Constant Function",
        problem: "Prove directly that $f(x)=c$ is integrable on $[a,b]$.",
        solution: ["On every subinterval, the supremum and infimum are both $c$.", "Thus $U(f,P)=L(f,P)=c(b-a)$ for every partition $P$, so the integral equals $c(b-a)$."]
      },
      {
        title: "The Function $x^2$",
        problem: "Compute $\\int_0^1x^2\\,dx$ as a limit of right-endpoint Riemann sums.",
        solution: ["Use the uniform partition with right endpoints $x_i=i/n$.", "$S_n=\\sum_{i=1}^n(i/n)^2(1/n)=\\frac{1}{n^3}\\frac{n(n+1)(2n+1)}6$.", "Taking the limit as $n\\to\\infty$ gives $\\frac13$."]
      },
      {
        title: "A Function with One Discontinuity",
        problem: "Explain why $f(x)=0$ for $x\\neq0$ and $f(0)=1$ is integrable on $[-1,1]$.",
        solution: ["On every subinterval that does not contain $0$, the oscillation is zero.", "Choose one very short subinterval containing $0$. The entire upper–lower sum gap comes only from the length of that subinterval.", "The gap can be made smaller than every $\\varepsilon>0$, so the function is integrable and its integral is $0$."]
      }
    ],
    mistakes: [
      "Assuming every bounded function is automatically Riemann integrable.",
      "Confusing the Riemann integral with one particular Riemann sum.",
      "Using ordinary pointwise continuity in an argument that requires uniform control over the whole interval."
    ],
    related: ["Darboux Integral", "Uniform Continuity", "Fundamental Theorem of Calculus", "Convergence of Functions"],
    references: ["Stephen Abbott, Understanding Analysis, 2nd ed., Springer, 2015."]
  },
  {
    slug: "prinsip-pigeonhole",
    title: "Pigeonhole Principle",
    level: "University",
    subject: "Combinatorics",
    track: "University",
    summary: "The basic and generalized pigeonhole principles, choosing the right boxes, existence proofs, and combinatorial applications.",
    readingTime: "55–70 minutes",
    difficulty: "Intermediate",
    visualization: "pigeonhole",
    prerequisites: ["Sets", "Functions", "Ceiling function", "Basic contradiction arguments"],
    objectives: [
      "State the pigeonhole principle in its basic and generalized forms.",
      "Identify the objects and boxes in non-routine problems.",
      "Construct existence proofs using the pigeonhole principle.",
      "Combine the pigeonhole principle with modular arithmetic, geometry, and counting."
    ],
    conceptMap: ["Objects", "Boxes", "Density", "Ceiling", "Existence", "Contradiction", "Applications"],
    motivation: [
      "The pigeonhole principle looks simple, but its power lies in choosing the right 'boxes'.",
      "It proves that a particular configuration must occur without requiring us to identify that configuration explicitly."
    ],
    intuition: [
      "If more objects are placed into fewer boxes, at least one box must receive more than one object.",
      "The generalized form measures average density. If $N$ objects are distributed among $k$ boxes, at least one box contains at least $\\lceil N/k\\rceil$ objects."
    ],
    notation: [
      { symbol: "$\\lceil x\\rceil$", meaning: "the smallest integer greater than or equal to $x$" },
      { symbol: "$N$", meaning: "the number of objects" },
      { symbol: "$k$", meaning: "the number of boxes" }
    ],
    definitions: [
      { title: "Basic Pigeonhole Principle", body: "If $n+1$ objects are placed into $n$ boxes, at least one box contains at least two objects." },
      { title: "Generalized Pigeonhole Principle", body: "If $N$ objects are placed into $k$ boxes, at least one box contains at least $\\lceil N/k\\rceil$ objects." }
    ],
    theorems: [
      {
        title: "Generalized Pigeonhole Principle",
        statement: "When $N$ objects are distributed among $k$ boxes, some box contains at least $\\lceil N/k\\rceil$ objects.",
        proof: [
          "Assume every box contains at most $\\lceil N/k\\rceil-1$ objects.",
          "Then the total number of objects is at most $k(\\lceil N/k\\rceil-1)$.",
          "Because $\\lceil N/k\\rceil-1<N/k$, this total is strictly less than $N$.",
          "This contradicts the fact that there are $N$ objects. Therefore at least one box contains at least $\\lceil N/k\\rceil$ objects."
        ],
        why: "The generalized form gives a quantitative lower bound rather than merely guaranteeing two objects in one box."
      },
      {
        title: "Two Integers Have Difference Divisible by $n$",
        statement: "Among any $n+1$ integers, there are two that are congruent modulo $n$.",
        proof: [
          "Every integer belongs to exactly one of the $n$ residue classes modulo $n$.",
          "Place the $n+1$ integers into $n$ boxes according to their residue classes.",
          "The pigeonhole principle puts two integers in the same box, so their difference is divisible by $n$."
        ],
        why: "This application shows how residue classes can serve as the boxes."
      }
    ],
    examples: [
      {
        title: "Birth Months",
        problem: "What is the minimum number of people that guarantees at least two were born in the same month?",
        solution: ["There are $12$ months, which serve as the boxes.", "With $13$ people, the pigeonhole principle guarantees that two share a birth month."]
      },
      {
        title: "Residues Modulo $10$",
        problem: "Prove that among $11$ integers there are two whose difference is divisible by $10$.",
        solution: ["Use the $10$ residue classes modulo $10$ as boxes.", "Eleven integers enter ten boxes, so two have the same residue."]
      },
      {
        title: "A Geometric Distance",
        problem: "Five points are placed in a square of side length $2$. Prove that two points are at distance at most $\\sqrt2$.",
        solution: ["Divide the square into four unit squares.", "Among five points, two lie in the same unit square.", "The diameter of a unit square is $\\sqrt2$, so the distance between those two points is at most $\\sqrt2$."]
      }
    ],
    mistakes: [
      "Choosing boxes that are too coarse or too fine to produce a strong enough conclusion.",
      "Forgetting the ceiling function in the generalized form.",
      "Assuming the pigeonhole principle tells us which box is crowded; it guarantees only existence."
    ],
    related: ["Modular Arithmetic", "Extremal Principle", "Counting", "Introductory Ramsey Theory"],
    references: ["Ronald L. Graham, Donald E. Knuth, Oren Patashnik, Concrete Mathematics, 2nd ed."]
  },
  {
    slug: "spektrum-graf",
    title: "Graph Spectra",
    level: "University",
    subject: "Graph Theory",
    track: "University",
    summary: "Adjacency matrices, Laplacians, distance matrices, spectra, characteristic polynomials, and structural information encoded by eigenvalues.",
    readingTime: "80–100 minutes",
    difficulty: "Intermediate–Advanced",
    visualization: "spectrum",
    prerequisites: ["Introductory graph theory", "Matrices", "Determinants", "Eigenvalues and eigenvectors"],
    objectives: [
      "Construct the adjacency and Laplacian matrices of a graph.",
      "Determine the spectrum of simple graph matrices.",
      "Prove fundamental spectral properties of undirected graphs.",
      "Connect spectra with degree, connectivity, and graph structure."
    ],
    conceptMap: ["Graph", "Adjacency matrix", "Laplacian", "Distance matrix", "Eigenvalue", "Characteristic polynomial", "Spectrum"],
    motivation: [
      "Spectral graph theory translates combinatorial structure into linear-algebraic objects.",
      "Eigenvalues can reveal global information that is not always obvious from a graph drawing, including connectivity and regularity."
    ],
    intuition: [
      "The adjacency matrix records which pairs of vertices are adjacent, while the Laplacian combines degree and adjacency information.",
      "A spectrum acts like an algebraic fingerprint. Nonisomorphic graphs can be cospectral, but many important properties can still be inferred from eigenvalues."
    ],
    notation: [
      { symbol: "$A(G)$", meaning: "the adjacency matrix of $G$" },
      { symbol: "$L(G)=D(G)-A(G)$", meaning: "the Laplacian matrix" },
      { symbol: "$\\operatorname{Spec}(A)$", meaning: "the multiset of eigenvalues of $A$" }
    ],
    definitions: [
      { title: "Adjacency Spectrum", body: "The adjacency spectrum of a graph $G$ is the multiset of all eigenvalues of $A(G)$, counted with algebraic multiplicity." },
      { title: "Laplacian", body: "For a simple graph $G$, the Laplacian matrix is $L=D-A$, where $D$ is the diagonal degree matrix." },
      { title: "Distance Matrix", body: "The distance matrix $D(G)$ has entries $d_{ij}=d(v_i,v_j)$, the length of a shortest path between $v_i$ and $v_j$." }
    ],
    theorems: [
      {
        title: "The Spectrum of an Undirected Graph Is Real",
        statement: "If $G$ is a simple undirected graph, every eigenvalue of $A(G)$ is real.",
        proof: [
          "The adjacency matrix of an undirected graph is real symmetric because $a_{ij}=a_{ji}$.",
          "The spectral theorem for real symmetric matrices guarantees that all eigenvalues are real and that the matrix is orthogonally diagonalizable."
        ],
        why: "Reality of the spectrum allows direct use of real eigenvalue techniques without passing to complex scalars."
      },
      {
        title: "Zero Is Always a Laplacian Eigenvalue",
        statement: "For every graph $G$, $0$ is an eigenvalue of $L(G)$ with eigenvector $\\mathbf1$.",
        proof: [
          "The sum of each row of $L=D-A$ equals the degree of the vertex minus the number of its neighbors, hence zero.",
          "Therefore $L\\mathbf1=\\mathbf0$, so $\\mathbf1$ is an eigenvector for eigenvalue $0$."
        ],
        why: "The multiplicity of the zero Laplacian eigenvalue is directly related to the number of connected components."
      },
      {
        title: "Trace of the Adjacency Matrix",
        statement: "For a simple loopless graph, the sum of all adjacency eigenvalues is $0$.",
        proof: [
          "Every diagonal entry of $A(G)$ is zero, so $\\operatorname{tr}(A)=0$.",
          "The trace of a matrix equals the sum of its eigenvalues counted with algebraic multiplicity.",
          "Hence the sum of all adjacency eigenvalues is $0$."
        ],
        why: "The trace identity gives a quick consistency check when computing a spectrum."
      }
    ],
    examples: [
      {
        title: "Complete Graph $K_3$",
        problem: "Determine the adjacency spectrum of $K_3$.",
        solution: ["$A(K_3)=J-I$.", "The vector $\\mathbf1$ has eigenvalue $2$, while every vector orthogonal to $\\mathbf1$ has eigenvalue $-1$.", "Thus the spectrum is $\\{2,-1,-1\\}$."]
      },
      {
        title: "Path $P_3$",
        problem: "Determine the characteristic polynomial of the adjacency matrix of $P_3$.",
        solution: ["Use $A=\\begin{pmatrix}0&1&0\\\\1&0&1\\\\0&1&0\\end{pmatrix}$.", "$\\det(\\lambda I-A)=\\lambda(\\lambda^2-2)$.", "The eigenvalues are $\\sqrt2,0,-\\sqrt2$."]
      },
      {
        title: "Laplacian and Connectivity",
        problem: "For a connected simple graph, what is the multiplicity of the Laplacian eigenvalue $0$?",
        solution: ["In general, the multiplicity of $0$ equals the number of connected components.", "A connected graph has one component, so the multiplicity is $1$."]
      }
    ],
    mistakes: [
      "Mixing up adjacency, Laplacian, signless Laplacian, and distance spectra.",
      "Forgetting eigenvalue multiplicities.",
      "Assuming two cospectral graphs must be isomorphic."
    ],
    related: ["Linear Algebra", "Graph Energy", "Distance Spectrum", "Spectral Radius"],
    references: ["D. Cvetković, P. Rowlinson, S. Simić, An Introduction to the Theory of Graph Spectra, Cambridge University Press."]
  },
  {
    slug: "teori-bilangan-olimpiade-smp",
    title: "Junior High Olympiad Number Theory",
    level: "Junior High Olympiad",
    subject: "Number Theory",
    track: "Olympiad",
    summary: "Divisibility, gcd and lcm, prime numbers, factorization, elementary congruences, digit patterns, and problem-solving strategies.",
    readingTime: "80–100 minutes",
    difficulty: "Intermediate–Advanced",
    visualization: "modclock",
    prerequisites: ["Integer arithmetic", "Factors and multiples", "Powers"],
    objectives: [
      "Use the Euclidean algorithm and elementary Bézout identities.",
      "Solve divisibility and digit problems with congruences.",
      "Use prime factorization for gcd, lcm, and divisor-counting problems.",
      "Develop concise but complete olympiad arguments."
    ],
    conceptMap: ["Divisibility", "GCD", "Prime factorization", "Congruence", "Digits", "Diophantine equations"],
    motivation: [
      "Olympiad number theory problems often look like numerical puzzles, but their structure comes from divisibility and residues.",
      "Modular arithmetic discards irrelevant information while preserving the patterns that matter."
    ],
    intuition: [
      "The congruence $a\\equiv b\\pmod m$ means that $a$ and $b$ leave the same remainder when divided by $m$.",
      "The Euclidean algorithm works because the common divisors of $a$ and $b$ are exactly the common divisors of $b$ and the remainder when $a$ is divided by $b$."
    ],
    notation: [
      { symbol: "$a\\mid b$", meaning: "$a$ divides $b$" },
      { symbol: "$\\gcd(a,b)$", meaning: "greatest common divisor" },
      { symbol: "$a\\equiv b\\pmod m$", meaning: "$m\\mid(a-b)$" }
    ],
    definitions: [
      { title: "Divisibility", body: "For an integer $a\\neq0$, we write $a\\mid b$ if there exists $k\\in\\mathbb Z$ such that $b=ak$." },
      { title: "Congruence", body: "We write $a\\equiv b\\pmod m$ if $m\\mid(a-b)$." },
      { title: "Prime Number", body: "An integer $p>1$ is prime if its only positive divisors are $1$ and $p$." }
    ],
    theorems: [
      {
        title: "Euclidean Algorithm",
        statement: "If $a=bq+r$, then $\\gcd(a,b)=\\gcd(b,r)$.",
        proof: [
          "If $d$ divides both $a$ and $b$, then $d$ also divides $a-bq=r$.",
          "Conversely, if $d$ divides both $b$ and $r$, then $d$ divides $bq+r=a$.",
          "Therefore the sets of common divisors of $(a,b)$ and $(b,r)$ are identical, so their gcds are equal."
        ],
        why: "This theorem yields a highly efficient algorithm for computing gcds."
      },
      {
        title: "Congruence Is Preserved by Addition and Multiplication",
        statement: "If $a\\equiv b\\pmod m$ and $c\\equiv d\\pmod m$, then $a+c\\equiv b+d\\pmod m$ and $ac\\equiv bd\\pmod m$.",
        proof: [
          "There exist integers $r,s$ such that $a-b=rm$ and $c-d=sm$.",
          "For addition, $(a+c)-(b+d)=(r+s)m$.",
          "For multiplication, $ac-bd=a(c-d)+d(a-b)=a(sm)+d(rm)$, which is a multiple of $m$."
        ],
        why: "This property lets us replace large integers by small residues during computations."
      }
    ],
    examples: [
      {
        title: "Last Digit",
        problem: "Determine the last digit of $7^{2026}$.",
        solution: ["The last digits of powers of $7$ cycle as $7,9,3,1$ with period $4$.", "Since $2026\\equiv2\\pmod4$, the last digit matches that of $7^2$, namely $9$."]
      },
      {
        title: "Greatest Common Divisor",
        problem: "Compute $\\gcd(2026,748)$.",
        solution: ["$2026=2(748)+530$.", "$748=1(530)+218$, $530=2(218)+94$, $218=2(94)+30$, $94=3(30)+4$, $30=7(4)+2$, $4=2(2)$.", "Hence the gcd is $2$."]
      },
      {
        title: "Divisibility",
        problem: "Prove that $n^3-n$ is divisible by $6$ for every $n\\in\\mathbb Z$.",
        solution: ["Factor $n^3-n=n(n-1)(n+1)$.", "Among three consecutive integers, one is divisible by $3$ and at least one is even.", "Therefore their product is divisible by $6$."]
      }
    ],
    mistakes: [
      "Dividing both sides of a congruence without checking whether the divisor is invertible modulo $m$.",
      "Using a small numerical pattern as a general proof without justification.",
      "Ignoring signs and the zero case in divisibility statements."
    ],
    related: ["Elementary CRT", "Diophantine Equations", "Fermat's Little Theorem", "Digit Patterns"],
    references: ["Titu Andreescu, Dorin Andrica, Number Theory: Structures, Examples, and Problems."]
  }
];
