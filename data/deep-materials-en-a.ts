import type { DeepMaterial } from "@/data/deep-materials";

export const deepMaterialsEnA: DeepMaterial[] = [
  {
    slug: "pecahan",
    title: "Fractions",
    level: "Elementary School",
    subject: "Arithmetic",
    track: "Regular",
    summary: "Understanding fractions as parts of a whole, points on the number line, quotients, ratios, and the foundation of fraction operations.",
    readingTime: "35–45 minutes",
    difficulty: "Basic",
    visualization: "fraction",
    prerequisites: ["Whole numbers", "Basic multiplication and division", "The idea of equal-sized parts"],
    objectives: [
      "Explain the meaning of the numerator and denominator.",
      "Determine equivalent fractions with reasoning rather than memorized rules.",
      "Compare two fractions.",
      "Add and subtract fractions by understanding common denominators.",
      "Connect fractions with the number line and division."
    ],
    conceptMap: ["Parts of a whole", "Equivalent fractions", "Number line", "Comparison", "Operations", "Decimals and percentages"],
    motivation: [
      "Fractions arise whenever a quantity can no longer be expressed as a whole number—for example, half a liter, three quarters of an hour, or two out of five equal parts.",
      "The main goal of this chapter is not to memorize rules, but to understand that a fraction is a number. Because it is a number, a fraction can be placed on the number line, compared with other numbers, and used in arithmetic operations."
    ],
    intuition: [
      "The denominator tells us into how many equal parts one whole is divided. The numerator tells us how many of those parts are being considered.",
      "Two fractions may look different while representing the same point on the number line. This is the central idea behind equivalent fractions."
    ],
    notation: [
      { symbol: "$\\frac{a}{b}$", meaning: "a fraction with numerator $a$ and denominator $b\\neq0$" },
      { symbol: "$a:b$", meaning: "$a$ divided by $b$" },
      { symbol: "$\\frac{a}{b}=\\frac{c}{d}$", meaning: "two fractions that represent the same number" }
    ],
    definitions: [
      { title: "Fraction", body: "For an integer $a$ and a nonzero integer $b$, the expression $\\frac{a}{b}$ represents the quotient of $a$ by $b$." },
      { title: "Equivalent Fractions", body: "The fractions $\\frac{a}{b}$ and $\\frac{c}{d}$ are equivalent when they represent the same number." },
      { title: "Fraction in Lowest Terms", body: "The fraction $\\frac{a}{b}$ is in lowest terms when $\\gcd(a,b)=1$." }
    ],
    theorems: [
      {
        title: "Equivalent-Fraction Property",
        statement: "For $k\\neq0$, $\\frac{a}{b}=\\frac{ak}{bk}$.",
        proof: [
          "Since $\\frac{k}{k}=1$ for $k\\neq0$, multiplying a number by $\\frac{k}{k}$ does not change its value.",
          "Therefore $\\frac{a}{b}\\cdot\\frac{k}{k}=\\frac{ak}{bk}=\\frac{a}{b}$."
        ],
        why: "This explains why the numerator and denominator may both be multiplied by the same nonzero number when finding a common denominator."
      },
      {
        title: "Cross-Multiplication Comparison Criterion",
        statement: "For $b,d>0$, $\\frac{a}{b}<\\frac{c}{d}$ if and only if $ad<bc$.",
        proof: [
          "Since $bd>0$, multiplying both sides of the inequality by $bd$ preserves the direction of the inequality.",
          "Thus $\\frac{a}{b}<\\frac{c}{d}$ gives $ad<bc$. The same steps can be reversed, so the two statements are equivalent."
        ],
        why: "This criterion compares fractions without first converting them to decimals."
      }
    ],
    examples: [
      {
        title: "Finding an Equivalent Fraction",
        problem: "Find a fraction with denominator $20$ that is equivalent to $\\frac{3}{5}$.",
        solution: ["Since $5\\cdot4=20$, multiply the numerator by $4$ as well.", "Thus $\\frac{3}{5}=\\frac{12}{20}$."]
      },
      {
        title: "Comparing Fractions",
        problem: "Compare $\\frac{5}{8}$ and $\\frac{3}{5}$.",
        solution: ["Compute the cross-products: $5\\cdot5=25$ and $3\\cdot8=24$.", "Since $25>24$, we have $\\frac{5}{8}>\\frac{3}{5}$."]
      },
      {
        title: "Adding Unlike Fractions",
        problem: "Compute $\\frac{2}{3}+\\frac{5}{12}$.",
        solution: ["The least common denominator is $12$.", "$\\frac{2}{3}=\\frac{8}{12}$, so $\\frac{8}{12}+\\frac{5}{12}=\\frac{13}{12}=1\\frac{1}{12}$."]
      }
    ],
    mistakes: [
      "Adding denominators when adding fractions, for example claiming $\\frac12+\\frac13=\\frac25$.",
      "Comparing fractions only by the size of their numerators while ignoring the denominators.",
      "Trying to simplify a fraction by subtracting the same number from the numerator and denominator."
    ],
    related: ["Ratios and Proportions", "Decimals", "Percentages", "Proportional Reasoning"],
    references: ["OpenStax, Prealgebra 2e — Fractions."]
  },
  {
    slug: "persamaan-linear",
    title: "Linear Equations",
    level: "Junior High School",
    subject: "Algebra",
    track: "Regular",
    summary: "Linear equations as equality statements, equivalent operations, line graphs, and elementary systems of linear equations.",
    readingTime: "45–60 minutes",
    difficulty: "Basic–Intermediate",
    visualization: "linear",
    prerequisites: ["Number operations", "The distributive property", "Basic Cartesian coordinates"],
    objectives: [
      "Distinguish expressions, equations, and identities.",
      "Solve one-variable linear equations using equivalent transformations.",
      "Model word problems with equations.",
      "Interpret the solution of a two-equation system as an intersection point."
    ],
    conceptMap: ["Equality", "Equivalent transformations", "One-variable equations", "Mathematical modeling", "Line graphs", "Systems of equations"],
    motivation: [
      "An equation states that two expressions have the same value. Solving an equation means finding all variable values that make the equality true.",
      "The key idea in algebra is not mechanically 'moving terms across the equals sign', but applying valid operations to both sides so that the solution set remains unchanged."
    ],
    intuition: [
      "Think of an equation as a balance scale. If the same valid operation is applied to both sides, the balance is preserved.",
      "For a system of two linear equations, each equation represents a line. A common solution is a point lying on both lines."
    ],
    notation: [
      { symbol: "$ax+b=c$", meaning: "a one-variable linear equation with $a\\neq0$" },
      { symbol: "$S$", meaning: "the solution set" },
      { symbol: "$\\begin{cases}a_1x+b_1y=c_1\\\\a_2x+b_2y=c_2\\end{cases}$", meaning: "a system of two linear equations" }
    ],
    definitions: [
      { title: "Equation", body: "An equation is a statement that two expressions have equal values for certain values of the variables." },
      { title: "Solution", body: "A solution of an equation is a variable value that makes the equation true." },
      { title: "Equivalent Equations", body: "Two equations are equivalent when they have the same solution set." }
    ],
    theorems: [
      {
        title: "Addition Principle",
        statement: "The equation $A=B$ is equivalent to $A+C=B+C$.",
        proof: [
          "If $A=B$, adding the same value $C$ to both sides gives $A+C=B+C$.",
          "Conversely, from $A+C=B+C$, subtract $C$ from both sides to recover $A=B$."
        ],
        why: "This is the formal reason we may add or subtract the same term on both sides of an equation."
      },
      {
        title: "Multiplication Principle",
        statement: "For $k\\neq0$, the equation $A=B$ is equivalent to $kA=kB$.",
        proof: [
          "If $A=B$, multiplying both sides by $k$ gives $kA=kB$.",
          "Conversely, because $k\\neq0$, dividing both sides by $k$ recovers $A=B$."
        ],
        why: "The condition $k\\neq0$ matters. Multiplication by zero destroys information and can change the solution set."
      }
    ],
    examples: [
      {
        title: "One-Variable Equation",
        problem: "Solve $3(2x-1)-5=4x+6$.",
        solution: ["Expand the left side: $6x-3-5=4x+6$.", "Thus $6x-8=4x+6$, so $2x=14$ and $x=7$."]
      },
      {
        title: "Age Model",
        problem: "A is five years older than B. Their ages add to $31$. Determine both ages.",
        solution: ["Let B's age be $x$, so A's age is $x+5$.", "$x+(x+5)=31$ gives $2x=26$, so B is $13$ and A is $18$."]
      },
      {
        title: "A System of Two Equations",
        problem: "Solve $x+y=5$ and $2x-y=1$.",
        solution: ["Add the equations to eliminate $y$: $3x=6$.", "Hence $x=2$ and $y=3$."]
      }
    ],
    mistakes: [
      "Changing signs while 'moving terms' without understanding the equivalent operation being applied.",
      "Dividing by an expression that may be zero without checking that case.",
      "Assuming any two lines have exactly one solution; lines may be parallel or coincident."
    ],
    related: ["Linear Functions", "Systems of Equations", "Inequalities", "Matrices"],
    references: ["OpenStax, Elementary Algebra 2e — Linear Equations."]
  },
  {
    slug: "fungsi",
    title: "Functions",
    level: "Senior High School",
    subject: "Algebra",
    track: "Regular",
    summary: "Functions as mappings, domain and codomain, composition, inverses, graphs, and injective-surjective properties.",
    readingTime: "60–75 minutes",
    difficulty: "Intermediate",
    visualization: "function",
    prerequisites: ["Sets", "Relations", "Equations and inequalities", "Cartesian coordinates"],
    objectives: [
      "Explain a function as a rule that assigns each domain element exactly one codomain element.",
      "Determine the domain and range of a function.",
      "Compute compositions and determine when an inverse exists.",
      "Analyze a graph through algebraic properties of the function."
    ],
    conceptMap: ["Mapping", "Domain–codomain–range", "Graph", "Composition", "Injective", "Surjective", "Inverse"],
    motivation: [
      "Functions model how one quantity depends on another. Nearly all of calculus is built on the concept of a function.",
      "The notation $f(x)$ does not mean multiplication of $f$ and $x$; it denotes the output of the function $f$ at input $x$."
    ],
    intuition: [
      "A function can be viewed as a machine: every valid input must produce exactly one output.",
      "An inverse runs the machine backward. For the reverse process to remain a function, no two different original inputs may produce the same output."
    ],
    notation: [
      { symbol: "$f:A\\to B$", meaning: "a function from domain $A$ to codomain $B$" },
      { symbol: "$\\operatorname{Im}(f)$", meaning: "the range or image of the function" },
      { symbol: "$(g\\circ f)(x)=g(f(x))$", meaning: "the composition of $g$ after $f$" }
    ],
    definitions: [
      { title: "Function", body: "A function $f:A\\to B$ assigns each $x\\in A$ exactly one element $f(x)\\in B$." },
      { title: "Injective Function", body: "A function $f$ is injective if $f(x_1)=f(x_2)$ implies $x_1=x_2$." },
      { title: "Surjective Function", body: "A function $f:A\\to B$ is surjective if every $y\\in B$ has at least one $x\\in A$ with $f(x)=y$." }
    ],
    theorems: [
      {
        title: "Criterion for the Existence of an Inverse",
        statement: "A function $f:A\\to B$ has an inverse function $f^{-1}:B\\to A$ if and only if $f$ is bijective.",
        proof: [
          "If $f^{-1}$ exists and $f(x_1)=f(x_2)$, then $x_1=f^{-1}(f(x_1))=f^{-1}(f(x_2))=x_2$, so $f$ is injective. For every $y\\in B$, $y=f(f^{-1}(y))$, so $f$ is surjective.",
          "Conversely, if $f$ is bijective, every $y\\in B$ has exactly one preimage $x\\in A$. Define $f^{-1}(y)=x$. Uniqueness of the preimage makes this definition a function."
        ],
        why: "This theorem explains why one-to-one and onto conditions must be checked before an inverse formula can be defined."
      },
      {
        title: "Composition of Injective Functions",
        statement: "If $f:A\\to B$ and $g:B\\to C$ are injective, then $g\\circ f$ is injective.",
        proof: [
          "Take $x_1,x_2\\in A$ and suppose $(g\\circ f)(x_1)=(g\\circ f)(x_2)$.",
          "Because $g$ is injective, $f(x_1)=f(x_2)$. Because $f$ is injective, $x_1=x_2$.",
          "Therefore $g\\circ f$ is injective."
        ],
        why: "This property is frequently used to build more complicated injective functions from simpler ones."
      }
    ],
    examples: [
      {
        title: "Domain of a Rational Function",
        problem: "Determine the domain of $f(x)=\\frac{x+1}{x^2-4}$.",
        solution: ["The denominator cannot be zero, so $x^2-4\\neq0$.", "Thus $x\\neq\\pm2$, and the domain is $\\mathbb R\\setminus\\{-2,2\\}$."]
      },
      {
        title: "Composition",
        problem: "If $f(x)=2x+1$ and $g(x)=x^2$, determine $(g\\circ f)(x)$.",
        solution: ["Substitute $f(x)$ into $g$.", "$(g\\circ f)(x)=g(2x+1)=(2x+1)^2$."]
      },
      {
        title: "Inverse of a Linear Function",
        problem: "Find the inverse of $f(x)=3x-5$.",
        solution: ["Write $y=3x-5$ and solve for $x$.", "$x=\\frac{y+5}{3}$, so $f^{-1}(x)=\\frac{x+5}{3}$."]
      }
    ],
    mistakes: [
      "Treating the codomain and range as the same concept.",
      "Ignoring the domain when finding an inverse or composition.",
      "Assuming that $f^{-1}(x)$ means $1/f(x)$."
    ],
    related: ["Function Graphs", "Trigonometry", "Limits", "Derivatives", "Transformations"],
    references: ["OpenStax, Precalculus 2e — Functions."]
  },
  {
    slug: "trigonometri",
    title: "Trigonometry",
    level: "Senior High School",
    subject: "Trigonometry",
    track: "Regular",
    summary: "Trigonometry through the unit circle, fundamental identities, graphs, equations, and the laws of sines and cosines.",
    readingTime: "75–90 minutes",
    difficulty: "Intermediate",
    visualization: "trig",
    prerequisites: ["Triangle similarity", "Pythagorean theorem", "Functions and graphs"],
    objectives: [
      "Define sine and cosine using the unit circle.",
      "Derive the Pythagorean identity.",
      "Use angle-sum and angle-difference identities.",
      "Solve elementary trigonometric equations.",
      "Use the laws of sines and cosines."
    ],
    conceptMap: ["Angles", "Unit circle", "Sine–cosine", "Identities", "Graphs", "Equations", "Triangles"],
    motivation: [
      "Trigonometry connects angles with coordinates, lengths, and periodic motion.",
      "The unit circle gives definitions that extend beyond right triangles and apply to every real angle."
    ],
    intuition: [
      "As a point moves around the unit circle, its horizontal coordinate is the cosine and its vertical coordinate is the sine.",
      "Trigonometric identities are not isolated formulas; many arise from circle geometry and rotational structure."
    ],
    notation: [
      { symbol: "$\\sin\\theta,\\cos\\theta$", meaning: "the vertical and horizontal coordinates on the unit circle" },
      { symbol: "$\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$", meaning: "the tangent, defined when $\\cos\\theta\\neq0$" },
      { symbol: "$2\\pi$", meaning: "one full revolution in radians" }
    ],
    definitions: [
      { title: "Sine and Cosine", body: "If $P=(x,y)$ is the point on the unit circle determined by an angle $\\theta$ measured from the positive $x$-axis, then $\\cos\\theta=x$ and $\\sin\\theta=y$." },
      { title: "Tangent", body: "When $\\cos\\theta\\neq0$, define $\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$." }
    ],
    theorems: [
      {
        title: "Pythagorean Identity",
        statement: "$\\sin^2\\theta+\\cos^2\\theta=1$ for every $\\theta$.",
        proof: [
          "The point $P=(\\cos\\theta,\\sin\\theta)$ lies on the unit circle.",
          "The equation of the unit circle is $x^2+y^2=1$. Substituting $x=\\cos\\theta$ and $y=\\sin\\theta$ gives the identity."
        ],
        why: "This identity is the source of many other trigonometric transformations."
      },
      {
        title: "Cosine Difference Formula",
        statement: "$\\cos(\\alpha-\\beta)=\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta$.",
        proof: [
          "Take unit vectors $u=(\\cos\\alpha,\\sin\\alpha)$ and $v=(\\cos\\beta,\\sin\\beta)$.",
          "By the dot product, $u\\cdot v=\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta$.",
          "The angle between $u$ and $v$ is $\\alpha-\\beta$, and $\\|u\\|=\\|v\\|=1$, so $u\\cdot v=\\cos(\\alpha-\\beta)$.",
          "Equating the two expressions for the dot product gives the desired formula."
        ],
        why: "This formula underlies the sum-and-difference, double-angle, and many simplification identities."
      }
    ],
    examples: [
      {
        title: "Identity Simplification",
        problem: "Simplify $\\frac{1-\\cos^2x}{\\sin x}$ for $\\sin x\\neq0$.",
        solution: ["Use $1-\\cos^2x=\\sin^2x$.", "Then $\\frac{\\sin^2x}{\\sin x}=\\sin x$."]
      },
      {
        title: "Basic Trigonometric Equation",
        problem: "Solve $2\\sin x=1$ for $0\\le x<2\\pi$.",
        solution: ["We obtain $\\sin x=\\frac12$.", "On this interval, $x=\\frac\\pi6$ or $x=\\frac{5\\pi}{6}$."]
      },
      {
        title: "Law of Cosines",
        problem: "A triangle has sides $a=5$, $b=7$, with included angle $C=60^\\circ$. Find side $c$.",
        solution: ["Use $c^2=a^2+b^2-2ab\\cos C$.", "$c^2=25+49-70\\cdot\\frac12=39$, so $c=\\sqrt{39}$."]
      }
    ],
    mistakes: [
      "Mixing degree and radian measure.",
      "Dividing by $\\sin x$ or $\\cos x$ without checking whether it can be zero.",
      "Memorizing identities without checking the domain conditions of the functions involved."
    ],
    related: ["Periodic Functions", "Vectors", "Complex Numbers", "Calculus"],
    references: ["OpenStax, Precalculus 2e — Trigonometric Functions."]
  }
];
