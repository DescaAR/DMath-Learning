import type { BookSection, BookSubject } from "@/data/book-curricula";

type SectionSeed=[slug:string,title:string,keyIdeas:string[]];
type UnitSeed=[title:string,sections:SectionSeed[]];
type SubjectSeed={
  slug:BookSubject["slug"];
  title:string;
  subtitle:string;
  level:string;
  source:string;
  sourceYear:string;
  units:UnitSeed[];
};

const s=(unit:number,index:number,seed:SectionSeed):BookSection=>{
  const [slug,title,keyIdeas]=seed;
  return{
    number:unit+"."+index,
    slug,
    title,
    sourceTitle:"DMath Learning",
    summary:"Submateri "+title+" mencakup "+keyIdeas.join(", ")+".",
    keyIdeas,
  };
};

const seeds:SubjectSeed[]=[
  {
    "slug": "riset-operasi",
    "title": "Riset Operasi",
    "subtitle": "Optimisasi, pengambilan keputusan, jaringan, sistem stokastik, simulasi, dan pemodelan kuantitatif untuk masalah terstruktur.",
    "level": "Kuliah · Terapan",
    "source": "Hamdy A. Taha, Operations Research: An Introduction, 10th ed., Global Edition",
    "sourceYear": "2017",
    "units": [
      [
        "Pemodelan dan Fondasi Optimisasi",
        [
          [
            "or-pengantar",
            "Hakikat Riset Operasi",
            [
              "decision science",
              "model matematika",
              "objective",
              "constraints",
              "validation"
            ]
          ],
          [
            "or-proses-studi",
            "Tahapan Studi Riset Operasi",
            [
              "problem definition",
              "data",
              "modeling",
              "solution",
              "implementation"
            ]
          ],
          [
            "or-model-deterministik-stokastik",
            "Model Deterministik dan Stokastik",
            [
              "deterministic model",
              "stochastic model",
              "parameters",
              "uncertainty",
              "assumptions"
            ]
          ],
          [
            "or-linearitas",
            "Asumsi Linearitas dan Struktur Model",
            [
              "proportionality",
              "additivity",
              "divisibility",
              "certainty",
              "linearity"
            ]
          ],
          [
            "or-lp-formulasi",
            "Formulasi Program Linear",
            [
              "decision variables",
              "objective function",
              "constraints",
              "nonnegativity",
              "feasible region"
            ]
          ],
          [
            "or-lp-grafik",
            "Solusi Grafik Program Linear",
            [
              "feasible region",
              "corner points",
              "iso-profit",
              "maximization",
              "minimization"
            ]
          ],
          [
            "or-lp-aplikasi",
            "Pemodelan Aplikasi Program Linear",
            [
              "production planning",
              "blending",
              "investment",
              "workforce",
              "resource allocation"
            ]
          ]
        ]
      ],
      [
        "Simplex, Dualitas, dan Sensitivitas",
        [
          [
            "or-standard-form",
            "Bentuk Standar dan Bentuk Kanonik LP",
            [
              "slack variables",
              "surplus variables",
              "standard form",
              "basis",
              "basic solution"
            ]
          ],
          [
            "or-simplex-geometri",
            "Geometri Titik Ekstrem dan Solusi Basis",
            [
              "extreme point",
              "basic feasible solution",
              "polyhedron",
              "basis",
              "optimality"
            ]
          ],
          [
            "or-simplex",
            "Metode Simplex",
            [
              "pivot",
              "entering variable",
              "leaving variable",
              "tableau",
              "optimality"
            ]
          ],
          [
            "or-big-m",
            "Metode Big-M",
            [
              "artificial variables",
              "penalty",
              "initial basis",
              "feasibility",
              "simplex"
            ]
          ],
          [
            "or-two-phase",
            "Metode Dua Fase",
            [
              "phase I",
              "phase II",
              "artificial variables",
              "feasibility",
              "initialization"
            ]
          ],
          [
            "or-simplex-kasus-khusus",
            "Kasus Khusus pada Simplex",
            [
              "degeneracy",
              "alternative optima",
              "unboundedness",
              "infeasibility",
              "cycling"
            ]
          ],
          [
            "or-dualitas",
            "Dualitas Program Linear",
            [
              "primal",
              "dual",
              "weak duality",
              "strong duality",
              "complementary slackness"
            ]
          ],
          [
            "or-dual-simplex",
            "Dual Simplex",
            [
              "dual feasibility",
              "primal infeasibility",
              "pivot",
              "reoptimization",
              "algorithm"
            ]
          ],
          [
            "or-sensitivity",
            "Analisis Sensitivitas",
            [
              "shadow price",
              "allowable range",
              "RHS change",
              "objective coefficient",
              "post-optimality"
            ]
          ],
          [
            "or-parametric-lp",
            "Program Linear Parametrik",
            [
              "parameter",
              "objective perturbation",
              "RHS perturbation",
              "basis stability",
              "piecewise solution"
            ]
          ]
        ]
      ],
      [
        "Transportasi, Assignment, dan Optimisasi Jaringan",
        [
          [
            "or-transportation-model",
            "Model Transportasi",
            [
              "supply",
              "demand",
              "transportation tableau",
              "balanced model",
              "cost minimization"
            ]
          ],
          [
            "or-transportation-initial",
            "Solusi Awal Transportasi",
            [
              "northwest corner",
              "least cost",
              "Vogel approximation",
              "basic feasible solution",
              "degeneracy"
            ]
          ],
          [
            "or-transportation-optimal",
            "Optimalisasi Model Transportasi",
            [
              "MODI",
              "u-v method",
              "stepping stone",
              "reduced cost",
              "optimality"
            ]
          ],
          [
            "or-assignment",
            "Model Assignment",
            [
              "one-to-one assignment",
              "cost matrix",
              "binary decision",
              "balanced assignment",
              "optimization"
            ]
          ],
          [
            "or-hungarian",
            "Metode Hungarian",
            [
              "row reduction",
              "column reduction",
              "zero covering",
              "assignment",
              "optimality"
            ]
          ],
          [
            "or-network-foundations",
            "Model Jaringan dan Representasi Graf",
            [
              "nodes",
              "arcs",
              "flow",
              "capacity",
              "network model"
            ]
          ],
          [
            "or-mst",
            "Minimum Spanning Tree",
            [
              "spanning tree",
              "Prim",
              "Kruskal",
              "edge weights",
              "connectivity"
            ]
          ],
          [
            "or-shortest-path",
            "Masalah Jalur Terpendek",
            [
              "shortest path",
              "Dijkstra",
              "Bellman-Ford",
              "network distance",
              "routing"
            ]
          ],
          [
            "or-max-flow",
            "Aliran Maksimum dan Minimum Cut",
            [
              "flow conservation",
              "capacity",
              "augmenting path",
              "max-flow min-cut",
              "cut"
            ]
          ],
          [
            "or-cpm-pert",
            "CPM dan PERT",
            [
              "activity network",
              "critical path",
              "earliest time",
              "slack",
              "project scheduling"
            ]
          ],
          [
            "or-min-cost-flow",
            "Minimum-Cost Flow",
            [
              "flow balance",
              "arc cost",
              "capacity",
              "network simplex",
              "transshipment"
            ]
          ]
        ]
      ],
      [
        "Optimisasi Diskret dan Pemrograman Sasaran",
        [
          [
            "or-integer-model",
            "Formulasi Integer Programming",
            [
              "integer variables",
              "binary variables",
              "logical constraints",
              "fixed charge",
              "set covering"
            ]
          ],
          [
            "or-branch-bound",
            "Branch-and-Bound",
            [
              "relaxation",
              "branching",
              "bounding",
              "incumbent",
              "fathoming"
            ]
          ],
          [
            "or-cutting-plane",
            "Cutting-Plane",
            [
              "LP relaxation",
              "valid inequality",
              "fractional solution",
              "cut",
              "integer hull"
            ]
          ],
          [
            "or-logical-constraints",
            "Kendala Logika dengan Variabel Biner",
            [
              "either-or",
              "if-then",
              "indicator",
              "big-M modeling",
              "binary logic"
            ]
          ],
          [
            "or-goal-programming",
            "Goal Programming",
            [
              "deviation variables",
              "multiple goals",
              "target",
              "priority",
              "achievement function"
            ]
          ],
          [
            "or-weighted-goal",
            "Weighted Goal Programming",
            [
              "weights",
              "trade-off",
              "deviation minimization",
              "normalization",
              "multiple criteria"
            ]
          ],
          [
            "or-preemptive-goal",
            "Preemptive Goal Programming",
            [
              "lexicographic priorities",
              "priority levels",
              "goal hierarchy",
              "sequential optimization",
              "deviations"
            ]
          ],
          [
            "or-constraint-programming",
            "Pengantar Constraint Programming",
            [
              "constraint satisfaction",
              "domain",
              "propagation",
              "search",
              "feasibility"
            ]
          ]
        ]
      ],
      [
        "Heuristik, Metaheuristik, dan Traveling Salesperson",
        [
          [
            "or-heuristic",
            "Heuristik dan Kualitas Solusi",
            [
              "heuristic",
              "near-optimal",
              "search space",
              "solution quality",
              "runtime"
            ]
          ],
          [
            "or-greedy-local-search",
            "Greedy dan Local Search",
            [
              "greedy",
              "neighborhood",
              "local optimum",
              "improvement move",
              "initial solution"
            ]
          ],
          [
            "or-tabu",
            "Tabu Search",
            [
              "tabu list",
              "aspiration",
              "memory",
              "neighborhood search",
              "diversification"
            ]
          ],
          [
            "or-simulated-annealing",
            "Simulated Annealing",
            [
              "temperature",
              "acceptance probability",
              "cooling schedule",
              "local minima",
              "stochastic search"
            ]
          ],
          [
            "or-genetic-algorithm",
            "Genetic Algorithm",
            [
              "population",
              "fitness",
              "selection",
              "crossover",
              "mutation"
            ]
          ],
          [
            "or-tsp-model",
            "Traveling Salesperson Problem",
            [
              "Hamiltonian tour",
              "subtour",
              "distance matrix",
              "integer model",
              "routing"
            ]
          ],
          [
            "or-tsp-exact",
            "Algoritma Eksak TSP",
            [
              "branch-and-bound",
              "cutting plane",
              "subtour elimination",
              "lower bound",
              "exact optimization"
            ]
          ],
          [
            "or-tsp-heuristics",
            "Heuristik TSP",
            [
              "nearest neighbor",
              "2-opt",
              "reversal",
              "tour improvement",
              "metaheuristic"
            ]
          ]
        ]
      ],
      [
        "Dynamic Programming dan Keputusan Sekuensial",
        [
          [
            "or-dp-principle",
            "Prinsip Optimalitas Dynamic Programming",
            [
              "state",
              "stage",
              "decision",
              "value function",
              "Bellman principle"
            ]
          ],
          [
            "or-dp-forward-backward",
            "Rekursi Maju dan Mundur",
            [
              "forward recursion",
              "backward recursion",
              "boundary condition",
              "value recursion",
              "policy"
            ]
          ],
          [
            "or-dp-knapsack",
            "Dynamic Programming untuk Knapsack",
            [
              "capacity state",
              "item decision",
              "recurrence",
              "integer resource",
              "optimal value"
            ]
          ],
          [
            "or-dp-replacement",
            "Model Penggantian Peralatan",
            [
              "age state",
              "replacement decision",
              "lifecycle cost",
              "horizon",
              "policy"
            ]
          ],
          [
            "or-dp-investment",
            "Model Investasi Multitahap",
            [
              "budget allocation",
              "stage",
              "return",
              "resource constraint",
              "optimal allocation"
            ]
          ],
          [
            "or-dp-inventory",
            "Dynamic Programming untuk Inventory",
            [
              "stock state",
              "order decision",
              "holding cost",
              "shortage cost",
              "recursion"
            ]
          ],
          [
            "or-curse-dimensionality",
            "Curse of Dimensionality",
            [
              "state dimension",
              "computational explosion",
              "approximation",
              "decomposition",
              "complexity"
            ]
          ],
          [
            "or-probabilistic-dp",
            "Dynamic Programming Probabilistik",
            [
              "random transition",
              "expected reward",
              "stochastic state",
              "Bellman expectation",
              "finite horizon"
            ]
          ],
          [
            "or-mdp",
            "Markov Decision Process",
            [
              "state",
              "action",
              "transition probability",
              "reward",
              "policy"
            ]
          ],
          [
            "or-policy-iteration",
            "Policy Iteration dan Discounting",
            [
              "policy evaluation",
              "policy improvement",
              "discount factor",
              "stationary policy",
              "MDP"
            ]
          ]
        ]
      ],
      [
        "Inventory, Forecasting, dan Supply Chain",
        [
          [
            "or-inventory-foundations",
            "Fondasi Model Inventory",
            [
              "demand",
              "lead time",
              "holding cost",
              "ordering cost",
              "shortage"
            ]
          ],
          [
            "or-eoq",
            "Model EOQ Klasik",
            [
              "economic order quantity",
              "setup cost",
              "holding cost",
              "cycle",
              "optimal lot"
            ]
          ],
          [
            "or-eoq-discount",
            "EOQ dengan Diskon Harga",
            [
              "price break",
              "purchase cost",
              "quantity discount",
              "feasible EOQ",
              "total cost"
            ]
          ],
          [
            "or-multiitem-inventory",
            "Inventory Multi-Item dengan Kendala",
            [
              "multiple items",
              "storage constraint",
              "resource allocation",
              "Lagrange multiplier",
              "EOQ"
            ]
          ],
          [
            "or-dynamic-inventory",
            "Inventory Dinamik",
            [
              "time-varying demand",
              "lot sizing",
              "setup",
              "holding",
              "dynamic horizon"
            ]
          ],
          [
            "or-probabilistic-inventory",
            "Inventory Probabilistik",
            [
              "safety stock",
              "service level",
              "reorder point",
              "random demand",
              "lead-time demand"
            ]
          ],
          [
            "or-newsvendor",
            "Model Newsvendor",
            [
              "single period",
              "underage cost",
              "overage cost",
              "critical fractile",
              "demand distribution"
            ]
          ],
          [
            "or-forecast-moving-average",
            "Moving Average untuk Forecasting",
            [
              "time series",
              "moving average",
              "window",
              "smoothing",
              "forecast"
            ]
          ],
          [
            "or-exponential-smoothing",
            "Exponential Smoothing",
            [
              "smoothing parameter",
              "level",
              "recursive forecast",
              "forecast error",
              "time series"
            ]
          ],
          [
            "or-regression-forecast",
            "Forecasting dengan Regresi",
            [
              "trend",
              "predictors",
              "regression forecast",
              "residual",
              "prediction"
            ]
          ]
        ]
      ],
      [
        "Keputusan di Bawah Ketidakpastian dan Proses Markov",
        [
          [
            "or-decision-certainty",
            "Keputusan di Bawah Kepastian",
            [
              "alternatives",
              "criteria",
              "payoff",
              "deterministic decision",
              "AHP"
            ]
          ],
          [
            "or-ahp",
            "Analytic Hierarchy Process",
            [
              "pairwise comparison",
              "priority vector",
              "consistency",
              "hierarchy",
              "multi-criteria"
            ]
          ],
          [
            "or-decision-risk",
            "Keputusan di Bawah Risiko",
            [
              "expected value",
              "probability",
              "decision tree",
              "utility",
              "risk"
            ]
          ],
          [
            "or-decision-uncertainty",
            "Keputusan di Bawah Ketidakpastian",
            [
              "maximax",
              "maximin",
              "minimax regret",
              "Laplace criterion",
              "Hurwicz"
            ]
          ],
          [
            "or-game-theory",
            "Permainan Dua Pemain Zero-Sum",
            [
              "payoff matrix",
              "saddle point",
              "pure strategy",
              "minimax",
              "zero-sum"
            ]
          ],
          [
            "or-mixed-strategy",
            "Strategi Campuran",
            [
              "mixed strategy",
              "expected payoff",
              "randomization",
              "game value",
              "linear programming"
            ]
          ],
          [
            "or-markov-chain",
            "Rantai Markov",
            [
              "transition matrix",
              "state",
              "Markov property",
              "n-step transition",
              "Chapman-Kolmogorov"
            ]
          ],
          [
            "or-markov-classification",
            "Klasifikasi State Rantai Markov",
            [
              "communicating classes",
              "recurrent",
              "transient",
              "periodicity",
              "absorbing"
            ]
          ],
          [
            "or-markov-steady",
            "Distribusi Stasioner dan Mean Return Time",
            [
              "stationary distribution",
              "ergodic chain",
              "steady state",
              "return time",
              "long-run"
            ]
          ],
          [
            "or-markov-first-passage",
            "First-Passage dan Absorbing Chains",
            [
              "hitting time",
              "first passage",
              "absorbing state",
              "fundamental matrix",
              "absorption probability"
            ]
          ]
        ]
      ],
      [
        "Antrean dan Simulasi",
        [
          [
            "or-queue-foundations",
            "Fondasi Model Antrean",
            [
              "arrival process",
              "service process",
              "queue discipline",
              "capacity",
              "performance measures"
            ]
          ],
          [
            "or-birth-death",
            "Proses Birth–Death",
            [
              "birth rate",
              "death rate",
              "state probabilities",
              "continuous-time Markov chain",
              "balance equations"
            ]
          ],
          [
            "or-mm1",
            "Model M/M/1",
            [
              "Poisson arrivals",
              "exponential service",
              "utilization",
              "Little's law",
              "waiting time"
            ]
          ],
          [
            "or-mmc",
            "Model Multi-Server M/M/c",
            [
              "multiple servers",
              "Erlang C",
              "utilization",
              "queue length",
              "waiting probability"
            ]
          ],
          [
            "or-mg1",
            "Model M/G/1 dan Formula Pollaczek–Khinchine",
            [
              "general service",
              "service variance",
              "P-K formula",
              "mean waiting",
              "single server"
            ]
          ],
          [
            "or-queue-decisions",
            "Model Keputusan pada Antrean",
            [
              "service cost",
              "waiting cost",
              "capacity decision",
              "aspiration level",
              "trade-off"
            ]
          ],
          [
            "or-monte-carlo",
            "Simulasi Monte Carlo",
            [
              "random sampling",
              "uncertainty propagation",
              "estimation",
              "replication",
              "Monte Carlo"
            ]
          ],
          [
            "or-discrete-event",
            "Discrete-Event Simulation",
            [
              "event",
              "clock",
              "state variables",
              "event list",
              "simulation logic"
            ]
          ],
          [
            "or-random-generation",
            "Pembangkitan Bilangan dan Variabel Acak",
            [
              "pseudo-random",
              "inverse transform",
              "sampling",
              "distribution generation",
              "random seed"
            ]
          ],
          [
            "or-simulation-output",
            "Analisis Output Simulasi",
            [
              "replication",
              "warm-up",
              "confidence interval",
              "variance",
              "simulation experiment"
            ]
          ]
        ]
      ],
      [
        "Optimisasi Nonlinear dan Metode Lanjut",
        [
          [
            "or-unconstrained-opt",
            "Optimisasi Tak Berkendala",
            [
              "gradient",
              "Hessian",
              "stationary point",
              "convexity",
              "second-order condition"
            ]
          ],
          [
            "or-newton-opt",
            "Metode Newton untuk Optimisasi",
            [
              "Newton step",
              "Hessian",
              "quadratic model",
              "local convergence",
              "line search"
            ]
          ],
          [
            "or-gradient-method",
            "Metode Gradien",
            [
              "steepest descent",
              "step size",
              "gradient",
              "line search",
              "convergence"
            ]
          ],
          [
            "or-equality-constrained",
            "Optimisasi dengan Kendala Kesamaan",
            [
              "Lagrange multiplier",
              "constraint qualification",
              "stationarity",
              "equality constraints",
              "KKT"
            ]
          ],
          [
            "or-kkt",
            "Kondisi Karush–Kuhn–Tucker",
            [
              "KKT",
              "inequality constraint",
              "complementary slackness",
              "dual feasibility",
              "stationarity"
            ]
          ],
          [
            "or-quadratic-programming",
            "Quadratic Programming",
            [
              "quadratic objective",
              "convex QP",
              "active constraints",
              "KKT",
              "portfolio"
            ]
          ],
          [
            "or-separable-programming",
            "Separable Programming",
            [
              "separable function",
              "piecewise linear approximation",
              "nonlinear optimization",
              "LP approximation",
              "breakpoints"
            ]
          ],
          [
            "or-interior-point",
            "Pengantar Interior-Point dan Karmarkar",
            [
              "interior point",
              "barrier",
              "central path",
              "Karmarkar",
              "polynomial-time"
            ]
          ],
          [
            "or-chance-constrained",
            "Chance-Constrained Programming",
            [
              "probabilistic constraint",
              "risk level",
              "uncertain parameter",
              "feasibility probability",
              "stochastic optimization"
            ]
          ]
        ]
      ]
    ]
  },
  {
    "slug": "statistika-terapan",
    "title": "Statistika Terapan & Analisis Data",
    "subtitle": "Dari perancangan studi dan eksplorasi data hingga inferensi, regresi, ANOVA, dan desain eksperimen.",
    "level": "Kuliah · Statistika",
    "source": "R. Lyman Ott & Michael Longnecker, An Introduction to Statistical Methods and Data Analysis, 6th ed.",
    "sourceYear": "2010",
    "units": [
      [
        "Berpikir Statistik dan Merancang Studi",
        [
          [
            "sta-peran-statistika",
            "Statistika dan Metode Ilmiah",
            [
              "research question",
              "population",
              "sample",
              "variation",
              "evidence"
            ]
          ],
          [
            "sta-problem-design",
            "Merumuskan Masalah dan Tujuan Penelitian",
            [
              "research objective",
              "response",
              "explanatory variable",
              "parameter",
              "hypothesis"
            ]
          ],
          [
            "sta-observational",
            "Studi Observasional",
            [
              "observational study",
              "confounding",
              "association",
              "causality",
              "bias"
            ]
          ],
          [
            "sta-survey-sampling",
            "Desain Sampling untuk Survei",
            [
              "simple random sample",
              "stratified sampling",
              "cluster sampling",
              "sampling frame",
              "nonresponse"
            ]
          ],
          [
            "sta-experiment",
            "Eksperimen dan Randomisasi",
            [
              "experimental unit",
              "treatment",
              "randomization",
              "replication",
              "control"
            ]
          ],
          [
            "sta-experimental-design",
            "Prinsip Dasar Desain Eksperimen",
            [
              "blocking",
              "randomization",
              "replication",
              "factor",
              "response"
            ]
          ],
          [
            "sta-data-ethics",
            "Kualitas Data, Bias, dan Etika Interpretasi",
            [
              "measurement error",
              "selection bias",
              "missing data",
              "reproducibility",
              "communication"
            ]
          ]
        ]
      ],
      [
        "Deskripsi Data dan Fondasi Probabilitas",
        [
          [
            "sta-data-types",
            "Tipe Data dan Struktur Dataset",
            [
              "categorical",
              "quantitative",
              "cross-sectional",
              "longitudinal",
              "coding"
            ]
          ],
          [
            "sta-graphical",
            "Visualisasi Satu Variabel",
            [
              "histogram",
              "bar chart",
              "stem-and-leaf",
              "dotplot",
              "distribution shape"
            ]
          ],
          [
            "sta-central",
            "Ukuran Pemusatan",
            [
              "mean",
              "median",
              "mode",
              "trimmed mean",
              "robustness"
            ]
          ],
          [
            "sta-variability",
            "Ukuran Penyebaran",
            [
              "variance",
              "standard deviation",
              "range",
              "IQR",
              "coefficient of variation"
            ]
          ],
          [
            "sta-boxplot",
            "Boxplot dan Pencilan",
            [
              "quartiles",
              "IQR",
              "outlier",
              "five-number summary",
              "boxplot"
            ]
          ],
          [
            "sta-multivariable-description",
            "Deskripsi Banyak Variabel dan Korelasi",
            [
              "scatterplot",
              "correlation",
              "association",
              "covariance",
              "group comparison"
            ]
          ],
          [
            "sta-probability-laws",
            "Hukum Probabilitas Dasar",
            [
              "sample space",
              "event",
              "addition rule",
              "conditional probability",
              "independence"
            ]
          ],
          [
            "sta-bayes",
            "Formula Bayes",
            [
              "Bayes theorem",
              "prior probability",
              "posterior probability",
              "likelihood",
              "diagnostic testing"
            ]
          ],
          [
            "sta-random-variable",
            "Variabel Acak dan Distribusi",
            [
              "discrete",
              "continuous",
              "pmf",
              "pdf",
              "cdf"
            ]
          ],
          [
            "sta-common-distributions",
            "Distribusi Binomial, Poisson, Eksponensial, dan Normal",
            [
              "binomial",
              "Poisson",
              "exponential",
              "normal",
              "parameters"
            ]
          ],
          [
            "sta-sampling-distribution",
            "Random Sampling dan Distribusi Sampling",
            [
              "sampling distribution",
              "sample mean",
              "standard error",
              "CLT",
              "normal approximation"
            ]
          ]
        ]
      ],
      [
        "Inferensi Satu Populasi",
        [
          [
            "sta-estimation-mean",
            "Estimasi Rata-rata Populasi",
            [
              "point estimate",
              "confidence interval",
              "standard error",
              "margin of error",
              "mean"
            ]
          ],
          [
            "sta-sample-size-estimation",
            "Ukuran Sampel untuk Estimasi",
            [
              "margin of error",
              "confidence level",
              "variance",
              "sample size",
              "precision"
            ]
          ],
          [
            "sta-test-mean",
            "Uji Hipotesis Rata-rata",
            [
              "null hypothesis",
              "alternative",
              "test statistic",
              "p-value",
              "decision"
            ]
          ],
          [
            "sta-significance-power",
            "Signifikansi, Galat Tipe I/II, dan Power",
            [
              "alpha",
              "beta",
              "power",
              "effect size",
              "practical significance"
            ]
          ],
          [
            "sta-t-inference",
            "Inferensi Mean dengan Varians Tidak Diketahui",
            [
              "t distribution",
              "degrees of freedom",
              "confidence interval",
              "t test",
              "normality"
            ]
          ],
          [
            "sta-bootstrap",
            "Bootstrap untuk Sampel Kecil",
            [
              "resampling",
              "bootstrap distribution",
              "standard error",
              "percentile interval",
              "simulation"
            ]
          ],
          [
            "sta-median-inference",
            "Inferensi Median",
            [
              "median",
              "sign test",
              "nonparametric",
              "confidence interval",
              "order statistics"
            ]
          ],
          [
            "sta-normality-assessment",
            "Pemeriksaan Normalitas",
            [
              "QQ plot",
              "normal probability plot",
              "goodness of fit",
              "skewness",
              "model checking"
            ]
          ]
        ]
      ],
      [
        "Perbandingan Populasi dan Metode Nonparametrik",
        [
          [
            "sta-two-independent",
            "Dua Sampel Independen",
            [
              "difference of means",
              "pooled variance",
              "Welch test",
              "confidence interval",
              "independence"
            ]
          ],
          [
            "sta-wilcoxon-rank-sum",
            "Wilcoxon Rank-Sum",
            [
              "rank",
              "Mann-Whitney",
              "nonparametric",
              "location shift",
              "independent samples"
            ]
          ],
          [
            "sta-paired",
            "Data Berpasangan",
            [
              "paired difference",
              "matched pairs",
              "paired t test",
              "within-subject",
              "confidence interval"
            ]
          ],
          [
            "sta-signed-rank",
            "Wilcoxon Signed-Rank",
            [
              "signed rank",
              "paired nonparametric",
              "symmetry",
              "median shift",
              "rank"
            ]
          ],
          [
            "sta-variance-one",
            "Inferensi Varians Satu Populasi",
            [
              "chi-square",
              "variance",
              "confidence interval",
              "normal population",
              "test"
            ]
          ],
          [
            "sta-variance-two",
            "Membandingkan Dua Varians",
            [
              "F distribution",
              "variance ratio",
              "F test",
              "confidence interval",
              "normality"
            ]
          ],
          [
            "sta-many-variances",
            "Membandingkan Banyak Varians",
            [
              "homogeneity",
              "variance components",
              "robustness",
              "test",
              "assumptions"
            ]
          ],
          [
            "sta-sample-size-comparison",
            "Ukuran Sampel untuk Perbandingan",
            [
              "power",
              "effect size",
              "allocation",
              "precision",
              "sample size"
            ]
          ]
        ]
      ],
      [
        "ANOVA dan Perbandingan Multipel",
        [
          [
            "sta-anova-oneway",
            "ANOVA Satu Arah",
            [
              "between groups",
              "within groups",
              "F statistic",
              "treatment mean",
              "ANOVA table"
            ]
          ],
          [
            "sta-crd-model",
            "Model Completely Randomized Design",
            [
              "fixed effects",
              "error term",
              "independence",
              "normality",
              "equal variance"
            ]
          ],
          [
            "sta-anova-diagnostics",
            "Diagnostik Asumsi ANOVA",
            [
              "residual",
              "normality",
              "homoscedasticity",
              "independence",
              "transformation"
            ]
          ],
          [
            "sta-kruskal-wallis",
            "Kruskal–Wallis",
            [
              "ranks",
              "nonparametric ANOVA",
              "group comparison",
              "H statistic",
              "location"
            ]
          ],
          [
            "sta-linear-contrast",
            "Kontras Linear",
            [
              "contrast",
              "coefficients",
              "orthogonality",
              "planned comparison",
              "standard error"
            ]
          ],
          [
            "sta-familywise-error",
            "Family-Wise Error Rate",
            [
              "multiple testing",
              "FWER",
              "Type I error",
              "simultaneous inference",
              "multiplicity"
            ]
          ],
          [
            "sta-fisher-lsd",
            "Fisher LSD dan Prosedur Pairwise",
            [
              "LSD",
              "pairwise comparison",
              "ANOVA gatekeeping",
              "mean difference",
              "error rate"
            ]
          ],
          [
            "sta-tukey",
            "Prosedur Tukey",
            [
              "studentized range",
              "all pairwise",
              "simultaneous interval",
              "familywise error",
              "mean comparison"
            ]
          ],
          [
            "sta-dunnett-scheffe",
            "Dunnett dan Scheffé",
            [
              "control comparison",
              "all contrasts",
              "simultaneous inference",
              "conservative procedure",
              "post hoc"
            ]
          ]
        ]
      ],
      [
        "Data Kategorik",
        [
          [
            "sta-proportion-one",
            "Inferensi Proporsi Satu Populasi",
            [
              "proportion",
              "binomial",
              "confidence interval",
              "z test",
              "exact method"
            ]
          ],
          [
            "sta-proportion-two",
            "Perbandingan Dua Proporsi",
            [
              "difference in proportions",
              "pooled estimate",
              "confidence interval",
              "z test",
              "risk difference"
            ]
          ],
          [
            "sta-chi-square-gof",
            "Chi-Square Goodness-of-Fit",
            [
              "observed counts",
              "expected counts",
              "chi-square",
              "degrees of freedom",
              "multinomial"
            ]
          ],
          [
            "sta-contingency",
            "Tabel Kontingensi: Independensi dan Homogenitas",
            [
              "contingency table",
              "independence",
              "homogeneity",
              "chi-square",
              "expected frequency"
            ]
          ],
          [
            "sta-association",
            "Ukuran Kekuatan Asosiasi",
            [
              "phi",
              "Cramer's V",
              "association",
              "effect size",
              "contingency"
            ]
          ],
          [
            "sta-odds-ratio",
            "Odds dan Odds Ratio",
            [
              "odds",
              "odds ratio",
              "2x2 table",
              "confidence interval",
              "interpretation"
            ]
          ],
          [
            "sta-stratified-contingency",
            "Menggabungkan Tabel 2×2 Berstrata",
            [
              "stratification",
              "confounding",
              "Mantel-Haenszel",
              "common odds ratio",
              "adjustment"
            ]
          ]
        ]
      ],
      [
        "Regresi Linear dan General Linear Model",
        [
          [
            "sta-simple-regression",
            "Regresi Linear Sederhana",
            [
              "slope",
              "intercept",
              "least squares",
              "residual",
              "linear model"
            ]
          ],
          [
            "sta-regression-inference",
            "Inferensi Parameter Regresi",
            [
              "standard error",
              "t test",
              "confidence interval",
              "slope",
              "intercept"
            ]
          ],
          [
            "sta-prediction",
            "Prediksi dan Prediction Interval",
            [
              "mean response",
              "new observation",
              "prediction interval",
              "confidence band",
              "uncertainty"
            ]
          ],
          [
            "sta-lack-fit",
            "Lack-of-Fit dan Diagnostik Regresi",
            [
              "lack of fit",
              "pure error",
              "residual plot",
              "linearity",
              "model adequacy"
            ]
          ],
          [
            "sta-calibration",
            "Inverse Regression dan Kalibrasi",
            [
              "calibration",
              "inverse prediction",
              "unknown concentration",
              "regression",
              "uncertainty"
            ]
          ],
          [
            "sta-correlation",
            "Korelasi dan Inferensinya",
            [
              "Pearson correlation",
              "association",
              "test",
              "confidence interval",
              "linearity"
            ]
          ],
          [
            "sta-multiple-regression",
            "Regresi Linear Berganda",
            [
              "design matrix",
              "partial slope",
              "least squares",
              "multiple predictors",
              "R-squared"
            ]
          ],
          [
            "sta-glm",
            "General Linear Model",
            [
              "matrix model",
              "least squares",
              "projection",
              "estimable function",
              "ANOVA"
            ]
          ],
          [
            "sta-subset-tests",
            "Uji Subset Koefisien Regresi",
            [
              "partial F test",
              "nested models",
              "reduced model",
              "full model",
              "hypothesis"
            ]
          ],
          [
            "sta-logistic",
            "Regresi Logistik",
            [
              "logit",
              "odds",
              "binary response",
              "maximum likelihood",
              "classification"
            ]
          ],
          [
            "sta-model-selection",
            "Seleksi Variabel",
            [
              "forward selection",
              "backward elimination",
              "stepwise",
              "AIC idea",
              "parsimony"
            ]
          ],
          [
            "sta-model-formulation",
            "Formulasi Model dan Transformasi",
            [
              "interaction",
              "polynomial term",
              "transformation",
              "hierarchy",
              "model specification"
            ]
          ],
          [
            "sta-regression-diagnostics",
            "Diagnostik Model Regresi",
            [
              "leverage",
              "influence",
              "Cook distance",
              "residual",
              "multicollinearity"
            ]
          ]
        ]
      ],
      [
        "Desain Eksperimen dan ANCOVA",
        [
          [
            "sta-factorial",
            "Struktur Perlakuan Faktorial",
            [
              "factor",
              "level",
              "main effect",
              "interaction",
              "factorial design"
            ]
          ],
          [
            "sta-unbalanced-factorial",
            "Faktorial dengan Replikasi Tidak Sama",
            [
              "unbalanced data",
              "least squares means",
              "interaction",
              "ANOVA",
              "estimability"
            ]
          ],
          [
            "sta-replication-number",
            "Menentukan Banyak Replikasi",
            [
              "power",
              "effect size",
              "variance",
              "replication",
              "design"
            ]
          ],
          [
            "sta-rcbd",
            "Randomized Complete Block Design",
            [
              "block",
              "treatment",
              "randomization",
              "block effect",
              "ANOVA"
            ]
          ],
          [
            "sta-latin-square",
            "Latin Square Design",
            [
              "row block",
              "column block",
              "treatment",
              "orthogonality",
              "randomization"
            ]
          ],
          [
            "sta-friedman",
            "Uji Friedman",
            [
              "blocked ranks",
              "nonparametric",
              "treatments",
              "block",
              "rank sum"
            ]
          ],
          [
            "sta-ancova",
            "Analysis of Covariance",
            [
              "covariate",
              "adjusted mean",
              "regression adjustment",
              "treatment",
              "ANCOVA"
            ]
          ],
          [
            "sta-multiple-covariates",
            "ANCOVA dengan Banyak Kovariat",
            [
              "multiple covariates",
              "adjustment",
              "parallel slopes",
              "design",
              "general linear model"
            ]
          ],
          [
            "sta-extrapolation",
            "Masalah Ekstrapolasi dalam ANCOVA",
            [
              "covariate range",
              "overlap",
              "extrapolation",
              "adjusted comparison",
              "validity"
            ]
          ]
        ]
      ],
      [
        "Random, Mixed, Repeated, dan Unbalanced Designs",
        [
          [
            "sta-random-effects",
            "Model Random Effects",
            [
              "random factor",
              "variance component",
              "expected mean square",
              "ANOVA",
              "population of levels"
            ]
          ],
          [
            "sta-mixed-effects",
            "Model Mixed Effects",
            [
              "fixed effect",
              "random effect",
              "interaction",
              "variance component",
              "mixed model"
            ]
          ],
          [
            "sta-ems",
            "Expected Mean Squares",
            [
              "EMS",
              "ANOVA denominator",
              "variance component",
              "random structure",
              "F test"
            ]
          ],
          [
            "sta-nested",
            "Nested Factors",
            [
              "nested design",
              "hierarchy",
              "variance component",
              "experimental unit",
              "ANOVA"
            ]
          ],
          [
            "sta-split-plot",
            "Split-Plot Design",
            [
              "whole plot",
              "subplot",
              "two error strata",
              "randomization",
              "factorial"
            ]
          ],
          [
            "sta-repeated-measures",
            "Repeated Measures",
            [
              "within-subject correlation",
              "time factor",
              "subject effect",
              "covariance",
              "longitudinal"
            ]
          ],
          [
            "sta-crossover",
            "Crossover Design",
            [
              "period",
              "sequence",
              "carryover",
              "within-subject",
              "treatment"
            ]
          ],
          [
            "sta-missing-block",
            "Blocked Design dengan Data Hilang",
            [
              "missing observation",
              "adjustment",
              "block design",
              "bias",
              "ANOVA"
            ]
          ],
          [
            "sta-bibd",
            "Balanced Incomplete Block Design",
            [
              "BIBD",
              "block size",
              "replication",
              "pair balance",
              "incomplete block"
            ]
          ],
          [
            "sta-unbalanced-design",
            "ANOVA untuk Desain Tidak Seimbang",
            [
              "unbalanced",
              "sum of squares",
              "estimability",
              "missing cells",
              "general linear model"
            ]
          ]
        ]
      ]
    ]
  },
  {
    "slug": "statistika-matematika",
    "title": "Statistika Matematika",
    "subtitle": "Fondasi probabilitas dan teori inferensi statistik dari variabel acak hingga likelihood, sufficiency, optimal testing, robust methods, dan Bayesian.",
    "level": "Kuliah · Statistika",
    "source": "Robert V. Hogg, Joseph W. McKean & Allen T. Craig, Introduction to Mathematical Statistics, 8th ed.",
    "sourceYear": "2019",
    "units": [
      [
        "Probabilitas, Variabel Acak, dan Ekspektasi",
        [
          [
            "stm-set-prob",
            "Himpunan dan Fungsi Himpunan",
            [
              "set operations",
              "set function",
              "sigma algebra idea",
              "event",
              "measurability"
            ]
          ],
          [
            "stm-prob-axioms",
            "Aksioma Probabilitas",
            [
              "probability measure",
              "countable additivity",
              "event",
              "complement",
              "continuity"
            ]
          ],
          [
            "stm-counting",
            "Aturan Pencacahan untuk Probabilitas",
            [
              "permutation",
              "combination",
              "sample space",
              "counting",
              "equiprobable"
            ]
          ],
          [
            "stm-conditional",
            "Probabilitas Bersyarat",
            [
              "conditional probability",
              "Bayes",
              "partition",
              "total probability",
              "conditioning"
            ]
          ],
          [
            "stm-independence",
            "Independensi",
            [
              "independent events",
              "mutual independence",
              "pairwise independence",
              "factorization",
              "product rule"
            ]
          ],
          [
            "stm-random-variable",
            "Variabel Acak",
            [
              "random variable",
              "distribution function",
              "measurability",
              "discrete",
              "continuous"
            ]
          ],
          [
            "stm-discrete-rv",
            "Variabel Acak Diskret",
            [
              "pmf",
              "cdf",
              "support",
              "transformation",
              "expectation"
            ]
          ],
          [
            "stm-continuous-rv",
            "Variabel Acak Kontinu",
            [
              "pdf",
              "cdf",
              "quantile",
              "transformation",
              "integration"
            ]
          ],
          [
            "stm-expectation",
            "Ekspektasi dan Momen",
            [
              "expectation",
              "moment",
              "variance",
              "MGF",
              "law of unconscious statistician"
            ]
          ],
          [
            "stm-inequalities",
            "Ketaksamaan Probabilistik Penting",
            [
              "Markov inequality",
              "Chebyshev inequality",
              "Jensen inequality",
              "Cauchy-Schwarz",
              "tail bound"
            ]
          ]
        ]
      ],
      [
        "Distribusi Multivariat dan Transformasi",
        [
          [
            "stm-joint-distribution",
            "Distribusi Bersama",
            [
              "joint pmf",
              "joint pdf",
              "joint cdf",
              "support",
              "two variables"
            ]
          ],
          [
            "stm-marginal",
            "Distribusi Marginal",
            [
              "marginalization",
              "sum/integral",
              "joint distribution",
              "support",
              "consistency"
            ]
          ],
          [
            "stm-joint-expectation",
            "Ekspektasi Bersama dan Kovarians",
            [
              "joint expectation",
              "covariance",
              "correlation",
              "cross moment",
              "dependence"
            ]
          ],
          [
            "stm-bivariate-transform",
            "Transformasi Dua Variabel Acak",
            [
              "Jacobian",
              "change of variables",
              "one-to-one transform",
              "joint density",
              "support"
            ]
          ],
          [
            "stm-conditional-distribution",
            "Distribusi dan Ekspektasi Bersyarat",
            [
              "conditional density",
              "conditional expectation",
              "iterated expectation",
              "conditional variance",
              "regression function"
            ]
          ],
          [
            "stm-independent-rv",
            "Independensi Variabel Acak",
            [
              "joint factorization",
              "independence",
              "functions of independent variables",
              "convolution",
              "product measure"
            ]
          ],
          [
            "stm-correlation",
            "Koefisien Korelasi",
            [
              "correlation",
              "covariance",
              "linear association",
              "Cauchy-Schwarz",
              "uncorrelated"
            ]
          ],
          [
            "stm-multivariate",
            "Banyak Variabel Acak",
            [
              "random vector",
              "joint distribution",
              "covariance matrix",
              "marginal",
              "conditional"
            ]
          ],
          [
            "stm-linear-combinations",
            "Kombinasi Linear Variabel Acak",
            [
              "linear combination",
              "mean",
              "variance",
              "covariance",
              "normal combination"
            ]
          ]
        ]
      ],
      [
        "Keluarga Distribusi Penting",
        [
          [
            "stm-binomial-family",
            "Binomial, Geometrik, dan Negative Binomial",
            [
              "Bernoulli",
              "binomial",
              "geometric",
              "negative binomial",
              "counting trials"
            ]
          ],
          [
            "stm-multinomial",
            "Distribusi Multinomial dan Hipergeometrik",
            [
              "multinomial",
              "hypergeometric",
              "sampling without replacement",
              "category counts",
              "combinatorics"
            ]
          ],
          [
            "stm-poisson",
            "Distribusi Poisson",
            [
              "Poisson",
              "rare event",
              "rate",
              "additivity",
              "limit"
            ]
          ],
          [
            "stm-gamma",
            "Distribusi Gamma",
            [
              "gamma",
              "shape",
              "scale",
              "waiting time",
              "moments"
            ]
          ],
          [
            "stm-chi-square",
            "Distribusi Chi-Square",
            [
              "chi-square",
              "sum of squares",
              "degrees of freedom",
              "gamma relation",
              "inference"
            ]
          ],
          [
            "stm-beta",
            "Distribusi Beta",
            [
              "beta",
              "unit interval",
              "shape parameters",
              "moments",
              "prior"
            ]
          ],
          [
            "stm-normal",
            "Distribusi Normal",
            [
              "normal",
              "standardization",
              "MGF",
              "closure",
              "tail"
            ]
          ],
          [
            "stm-multivariate-normal",
            "Distribusi Normal Multivariat",
            [
              "multivariate normal",
              "covariance matrix",
              "marginal normal",
              "conditional normal",
              "quadratic form"
            ]
          ],
          [
            "stm-t-f",
            "Distribusi t dan F",
            [
              "Student t",
              "F distribution",
              "ratio",
              "degrees of freedom",
              "normal sample"
            ]
          ],
          [
            "stm-mixture",
            "Distribusi Campuran",
            [
              "mixture",
              "latent variable",
              "component distribution",
              "mixing weights",
              "contamination"
            ]
          ]
        ]
      ],
      [
        "Inferensi Dasar, Monte Carlo, dan Bootstrap",
        [
          [
            "stm-sampling-statistics",
            "Sampling dan Statistik",
            [
              "random sample",
              "statistic",
              "sampling distribution",
              "estimator",
              "parameter"
            ]
          ],
          [
            "stm-point-estimator",
            "Estimator Titik dan Sifat Dasarnya",
            [
              "bias",
              "variance",
              "MSE",
              "consistency idea",
              "estimator"
            ]
          ],
          [
            "stm-confidence",
            "Confidence Interval",
            [
              "confidence coefficient",
              "pivot",
              "coverage",
              "interval estimator",
              "uncertainty"
            ]
          ],
          [
            "stm-ci-differences",
            "Interval untuk Perbedaan Mean dan Proporsi",
            [
              "difference",
              "standard error",
              "two sample",
              "confidence interval",
              "independence"
            ]
          ],
          [
            "stm-order-statistics",
            "Order Statistics",
            [
              "order statistic",
              "minimum",
              "maximum",
              "sample quantile",
              "joint density"
            ]
          ],
          [
            "stm-hypothesis-testing",
            "Pengantar Uji Hipotesis",
            [
              "null",
              "alternative",
              "critical region",
              "Type I",
              "Type II"
            ]
          ],
          [
            "stm-pvalue",
            "p-Value dan Signifikansi Teramati",
            [
              "p-value",
              "test statistic",
              "significance",
              "evidence",
              "decision"
            ]
          ],
          [
            "stm-chi-square-tests",
            "Uji Chi-Square",
            [
              "goodness of fit",
              "independence",
              "expected count",
              "chi-square",
              "degrees of freedom"
            ]
          ],
          [
            "stm-monte-carlo",
            "Metode Monte Carlo",
            [
              "simulation",
              "random generation",
              "Monte Carlo estimate",
              "standard error",
              "accept-reject"
            ]
          ],
          [
            "stm-bootstrap-procedure",
            "Prosedur Bootstrap",
            [
              "resampling",
              "bootstrap distribution",
              "bootstrap SE",
              "percentile interval",
              "bootstrap test"
            ]
          ]
        ]
      ],
      [
        "Konvergensi dan Teori Asimtotik",
        [
          [
            "stm-conv-prob",
            "Konvergensi dalam Probabilitas",
            [
              "convergence in probability",
              "consistency",
              "epsilon criterion",
              "random sequence",
              "WLLN"
            ]
          ],
          [
            "stm-conv-dist",
            "Konvergensi dalam Distribusi",
            [
              "weak convergence",
              "distribution function",
              "limit law",
              "continuity point",
              "Slutsky"
            ]
          ],
          [
            "stm-op-op",
            "Bounded in Probability dan Notasi Op/op",
            [
              "bounded in probability",
              "Op",
              "op",
              "stochastic order",
              "asymptotic comparison"
            ]
          ],
          [
            "stm-delta-method",
            "Delta Method",
            [
              "Taylor expansion",
              "asymptotic normality",
              "transformation",
              "variance approximation",
              "delta method"
            ]
          ],
          [
            "stm-mgf-technique",
            "Teknik MGF untuk Konvergensi",
            [
              "MGF",
              "pointwise convergence",
              "uniqueness",
              "limiting distribution",
              "moments"
            ]
          ],
          [
            "stm-clt",
            "Central Limit Theorem",
            [
              "CLT",
              "standardization",
              "iid sum",
              "normal limit",
              "sampling distribution"
            ]
          ],
          [
            "stm-multivariate-asymptotics",
            "Asimtotik Multivariat",
            [
              "multivariate convergence",
              "Cramer-Wold",
              "covariance",
              "delta method",
              "vector statistic"
            ]
          ]
        ]
      ],
      [
        "Maximum Likelihood dan Efisiensi",
        [
          [
            "stm-likelihood",
            "Fungsi Likelihood dan Log-Likelihood",
            [
              "likelihood",
              "log-likelihood",
              "parameter",
              "sample",
              "identifiability"
            ]
          ],
          [
            "stm-mle",
            "Maximum Likelihood Estimation",
            [
              "MLE",
              "score",
              "critical point",
              "invariance",
              "numerical maximization"
            ]
          ],
          [
            "stm-fisher-information",
            "Fisher Information",
            [
              "score variance",
              "expected information",
              "observed information",
              "curvature",
              "precision"
            ]
          ],
          [
            "stm-cramer-rao",
            "Rao–Cramér Lower Bound",
            [
              "Cramer-Rao",
              "unbiased estimator",
              "variance bound",
              "information",
              "efficiency"
            ]
          ],
          [
            "stm-mle-asymptotic",
            "Sifat Asimtotik MLE",
            [
              "consistency",
              "asymptotic normality",
              "efficiency",
              "regularity",
              "information"
            ]
          ],
          [
            "stm-likelihood-tests",
            "Likelihood-Based Tests",
            [
              "likelihood ratio",
              "Wald test",
              "score test",
              "asymptotic chi-square",
              "nested hypotheses"
            ]
          ],
          [
            "stm-multiparameter-estimation",
            "Estimasi Multiparameter",
            [
              "parameter vector",
              "information matrix",
              "profile likelihood",
              "covariance",
              "joint estimation"
            ]
          ],
          [
            "stm-multiparameter-testing",
            "Pengujian Multiparameter",
            [
              "composite hypothesis",
              "restriction",
              "likelihood ratio",
              "degrees of freedom",
              "nuisance parameter"
            ]
          ],
          [
            "stm-em",
            "Algoritma EM",
            [
              "latent variable",
              "E-step",
              "M-step",
              "incomplete data",
              "monotone likelihood"
            ]
          ]
        ]
      ],
      [
        "Sufficiency, Completeness, dan Keluarga Eksponensial",
        [
          [
            "stm-estimator-quality",
            "Ukuran Kualitas Estimator",
            [
              "bias",
              "MSE",
              "risk",
              "efficiency",
              "comparison"
            ]
          ],
          [
            "stm-sufficient",
            "Statistik Cukup",
            [
              "sufficiency",
              "conditional distribution",
              "information reduction",
              "statistic",
              "parameter"
            ]
          ],
          [
            "stm-factorization",
            "Teorema Faktorisasi Neyman–Fisher",
            [
              "factorization theorem",
              "sufficient statistic",
              "likelihood",
              "data reduction",
              "factorization"
            ]
          ],
          [
            "stm-completeness",
            "Completeness",
            [
              "complete statistic",
              "zero expectation",
              "uniqueness",
              "family",
              "estimation"
            ]
          ],
          [
            "stm-rao-blackwell",
            "Rao–Blackwell Improvement",
            [
              "conditional expectation",
              "sufficient statistic",
              "variance reduction",
              "convex loss",
              "estimator"
            ]
          ],
          [
            "stm-lehmann-scheffe",
            "Teorema Lehmann–Scheffé",
            [
              "complete sufficient",
              "UMVU",
              "uniqueness",
              "unbiased estimator",
              "optimality"
            ]
          ],
          [
            "stm-exponential-family",
            "Keluarga Eksponensial",
            [
              "natural parameter",
              "natural statistic",
              "partition function",
              "sufficiency",
              "canonical form"
            ]
          ],
          [
            "stm-minimal-sufficiency",
            "Minimal Sufficiency",
            [
              "minimal sufficient",
              "likelihood ratio criterion",
              "data reduction",
              "equivalence classes",
              "statistic"
            ]
          ],
          [
            "stm-ancillary",
            "Statistik Ancillary dan Independensi",
            [
              "ancillary statistic",
              "Basu theorem",
              "complete sufficient",
              "independence",
              "nuisance"
            ]
          ]
        ]
      ],
      [
        "Uji Hipotesis Optimal",
        [
          [
            "stm-neyman-pearson",
            "Lemma Neyman–Pearson",
            [
              "simple hypotheses",
              "likelihood ratio",
              "most powerful",
              "size",
              "power"
            ]
          ],
          [
            "stm-most-powerful",
            "Most Powerful Tests",
            [
              "power function",
              "critical region",
              "size alpha",
              "likelihood ratio",
              "optimality"
            ]
          ],
          [
            "stm-ump",
            "Uniformly Most Powerful Tests",
            [
              "UMP",
              "monotone likelihood ratio",
              "one-sided hypothesis",
              "power",
              "exponential family"
            ]
          ],
          [
            "stm-lrt",
            "Likelihood Ratio Tests",
            [
              "generalized likelihood ratio",
              "composite hypothesis",
              "critical value",
              "Wilks theorem",
              "nested model"
            ]
          ],
          [
            "stm-normal-mean-tests",
            "Optimal Tests untuk Mean Normal",
            [
              "normal mean",
              "known variance",
              "unknown variance",
              "t statistic",
              "likelihood ratio"
            ]
          ],
          [
            "stm-normal-variance-tests",
            "Uji Varians Normal",
            [
              "chi-square",
              "F statistic",
              "variance hypothesis",
              "likelihood ratio",
              "normal sample"
            ]
          ],
          [
            "stm-sequential-test",
            "Sequential Probability Ratio Test",
            [
              "SPRT",
              "sequential sampling",
              "likelihood ratio boundary",
              "expected sample size",
              "Type I/II"
            ]
          ],
          [
            "stm-minimax-classification",
            "Minimax dan Klasifikasi",
            [
              "decision rule",
              "loss",
              "risk",
              "minimax",
              "classification"
            ]
          ]
        ]
      ],
      [
        "Normal Linear Models dan ANOVA",
        [
          [
            "stm-linear-model",
            "Normal Linear Model",
            [
              "design matrix",
              "normal errors",
              "least squares",
              "projection",
              "rank"
            ]
          ],
          [
            "stm-oneway-anova",
            "One-Way ANOVA",
            [
              "treatment means",
              "F test",
              "sum of squares",
              "normal model",
              "contrast"
            ]
          ],
          [
            "stm-noncentral",
            "Distribusi Noncentral Chi-Square dan F",
            [
              "noncentrality",
              "power",
              "quadratic form",
              "noncentral F",
              "noncentral chi-square"
            ]
          ],
          [
            "stm-multiple-comparisons",
            "Perbandingan Multipel",
            [
              "Tukey",
              "simultaneous inference",
              "familywise error",
              "contrast",
              "mean comparison"
            ]
          ],
          [
            "stm-twoway-anova",
            "Two-Way ANOVA dan Interaksi",
            [
              "two factors",
              "main effect",
              "interaction",
              "ANOVA",
              "balanced design"
            ]
          ],
          [
            "stm-regression-normal",
            "Regresi dalam Normal Linear Model",
            [
              "least squares",
              "MLE",
              "slope",
              "normal errors",
              "inference"
            ]
          ],
          [
            "stm-ls-geometry",
            "Geometri Least Squares",
            [
              "projection",
              "column space",
              "orthogonality",
              "hat matrix",
              "residual"
            ]
          ],
          [
            "stm-quadratic-forms",
            "Quadratic Forms dan Distribusinya",
            [
              "quadratic form",
              "idempotent matrix",
              "chi-square",
              "rank",
              "normal vector"
            ]
          ]
        ]
      ],
      [
        "Nonparametrik, Robust, dan Bayesian",
        [
          [
            "stm-sign-test",
            "Median dan Sign Test",
            [
              "median",
              "binomial sign",
              "nonparametric",
              "confidence interval",
              "location"
            ]
          ],
          [
            "stm-signed-rank",
            "Wilcoxon Signed-Rank",
            [
              "signed rank",
              "symmetry",
              "paired data",
              "nonparametric",
              "efficiency"
            ]
          ],
          [
            "stm-mann-whitney",
            "Mann–Whitney–Wilcoxon",
            [
              "two samples",
              "ranks",
              "location shift",
              "U statistic",
              "nonparametric"
            ]
          ],
          [
            "stm-rank-efficiency",
            "Asymptotic Relative Efficiency",
            [
              "ARE",
              "asymptotic variance",
              "rank test",
              "comparison",
              "efficiency"
            ]
          ],
          [
            "stm-kendall-spearman",
            "Kendall Tau dan Spearman Rho",
            [
              "rank correlation",
              "Kendall tau",
              "Spearman rho",
              "association",
              "nonparametric"
            ]
          ],
          [
            "stm-robust-location",
            "Robust Location Estimation",
            [
              "influence",
              "breakdown",
              "M-estimator",
              "median",
              "contamination"
            ]
          ],
          [
            "stm-robust-linear",
            "Robust Linear Model",
            [
              "robust regression",
              "outlier",
              "M-estimation",
              "influence",
              "residual"
            ]
          ],
          [
            "stm-bayesian-prior-posterior",
            "Prior, Likelihood, dan Posterior",
            [
              "prior",
              "likelihood",
              "posterior",
              "Bayes theorem",
              "normalization"
            ]
          ],
          [
            "stm-bayesian-estimation",
            "Estimasi Bayesian",
            [
              "posterior mean",
              "posterior median",
              "loss function",
              "Bayes estimator",
              "credible interval"
            ]
          ],
          [
            "stm-bayesian-testing",
            "Pengujian Bayesian",
            [
              "posterior odds",
              "Bayes factor",
              "hypothesis",
              "loss",
              "decision"
            ]
          ],
          [
            "stm-gibbs",
            "Gibbs Sampler",
            [
              "MCMC",
              "conditional distribution",
              "Markov chain",
              "sampling",
              "posterior"
            ]
          ],
          [
            "stm-empirical-bayes",
            "Empirical Bayes",
            [
              "hyperparameter",
              "marginal likelihood",
              "shrinkage",
              "hierarchical model",
              "estimation"
            ]
          ]
        ]
      ]
    ]
  },
  {
    "slug": "matematika-diskrit",
    "title": "Matematika Diskrit",
    "subtitle": "Logika, pembuktian, struktur diskret, algoritma, teori bilangan, pencacahan, relasi, graf, pohon, aljabar Boolean, dan model komputasi.",
    "level": "Kuliah · Diskrit",
    "source": "Kenneth H. Rosen, Discrete Mathematics and Its Applications, 8th ed.",
    "sourceYear": "2019",
    "units": [
      [
        "Logika dan Argumen Formal",
        [
          [
            "md-logika-proposisi",
            "Logika Proposisional",
            [
              "proposition",
              "truth value",
              "connective",
              "truth table",
              "compound proposition"
            ]
          ],
          [
            "md-aplikasi-logika",
            "Aplikasi Logika Proposisional",
            [
              "specification",
              "logic puzzle",
              "bit operation",
              "search",
              "reasoning"
            ]
          ],
          [
            "md-ekuivalensi-logika",
            "Ekuivalensi Logika",
            [
              "logical equivalence",
              "De Morgan",
              "tautology",
              "contradiction",
              "normal form"
            ]
          ],
          [
            "md-predikat-kuantor",
            "Predikat dan Kuantor",
            [
              "predicate",
              "universal quantifier",
              "existential quantifier",
              "domain",
              "negation"
            ]
          ],
          [
            "md-kuantor-bertingkat",
            "Kuantor Bertingkat",
            [
              "nested quantifier",
              "order of quantifiers",
              "translation",
              "negation",
              "counterexample"
            ]
          ],
          [
            "md-aturan-inferensi",
            "Aturan Inferensi",
            [
              "modus ponens",
              "modus tollens",
              "universal instantiation",
              "valid argument",
              "fallacy"
            ]
          ],
          [
            "md-pengantar-bukti",
            "Pengantar Pembuktian",
            [
              "direct proof",
              "counterexample",
              "existence",
              "uniqueness",
              "theorem"
            ]
          ],
          [
            "md-metode-bukti",
            "Metode dan Strategi Pembuktian",
            [
              "contrapositive",
              "contradiction",
              "cases",
              "equivalence",
              "proof strategy"
            ]
          ]
        ]
      ],
      [
        "Himpunan, Fungsi, Barisan, dan Matriks Diskrit",
        [
          [
            "md-himpunan",
            "Himpunan",
            [
              "set",
              "subset",
              "power set",
              "Cartesian product",
              "set-builder"
            ]
          ],
          [
            "md-operasi-himpunan",
            "Operasi Himpunan",
            [
              "union",
              "intersection",
              "difference",
              "complement",
              "set identity"
            ]
          ],
          [
            "md-fungsi",
            "Fungsi",
            [
              "domain",
              "codomain",
              "image",
              "injective",
              "surjective"
            ]
          ],
          [
            "md-barisan-jumlah",
            "Barisan dan Penjumlahan",
            [
              "sequence",
              "summation",
              "geometric sequence",
              "recurrence",
              "finite sum"
            ]
          ],
          [
            "md-kardinalitas",
            "Kardinalitas Himpunan",
            [
              "finite",
              "countable",
              "uncountable",
              "bijection",
              "Cantor diagonal"
            ]
          ],
          [
            "md-matriks",
            "Matriks dalam Struktur Diskrit",
            [
              "matrix",
              "zero-one matrix",
              "Boolean matrix",
              "relation representation",
              "matrix operation"
            ]
          ]
        ]
      ],
      [
        "Algoritma dan Kompleksitas",
        [
          [
            "md-algoritma",
            "Konsep Algoritma",
            [
              "algorithm",
              "input",
              "output",
              "correctness",
              "pseudocode"
            ]
          ],
          [
            "md-search-sort",
            "Pencarian dan Pengurutan",
            [
              "linear search",
              "binary search",
              "sorting",
              "comparison",
              "invariant"
            ]
          ],
          [
            "md-growth",
            "Pertumbuhan Fungsi",
            [
              "Big-O",
              "Big-Omega",
              "Big-Theta",
              "asymptotic growth",
              "comparison"
            ]
          ],
          [
            "md-complexity",
            "Kompleksitas Algoritma",
            [
              "time complexity",
              "space complexity",
              "worst case",
              "average case",
              "tractability"
            ]
          ],
          [
            "md-algorithm-proof",
            "Pembuktian Kebenaran Algoritma",
            [
              "loop invariant",
              "precondition",
              "postcondition",
              "termination",
              "correctness"
            ]
          ]
        ]
      ],
      [
        "Teori Bilangan dan Kriptografi Diskrit",
        [
          [
            "md-divisibility",
            "Keterbagian dan Aritmetika Modular",
            [
              "divisibility",
              "congruence",
              "modulus",
              "remainder",
              "properties"
            ]
          ],
          [
            "md-integer-algorithms",
            "Representasi Integer dan Algoritma",
            [
              "base expansion",
              "binary",
              "Euclidean algorithm",
              "modular exponentiation",
              "integer arithmetic"
            ]
          ],
          [
            "md-primes-gcd",
            "Bilangan Prima dan FPB",
            [
              "prime",
              "gcd",
              "Euclidean algorithm",
              "Bezout",
              "factorization"
            ]
          ],
          [
            "md-congruence-solving",
            "Menyelesaikan Kongruensi",
            [
              "linear congruence",
              "inverse",
              "CRT",
              "system of congruences",
              "modular equation"
            ]
          ],
          [
            "md-congruence-applications",
            "Aplikasi Kongruensi",
            [
              "hashing",
              "check digit",
              "pseudorandom",
              "calendar arithmetic",
              "modular model"
            ]
          ],
          [
            "md-cryptography",
            "Kriptografi Dasar",
            [
              "classical cipher",
              "public key",
              "RSA",
              "modular exponentiation",
              "security"
            ]
          ]
        ]
      ],
      [
        "Induksi, Rekursi, dan Kebenaran Program",
        [
          [
            "md-induksi",
            "Induksi Matematika",
            [
              "base case",
              "inductive hypothesis",
              "inductive step",
              "identity",
              "divisibility"
            ]
          ],
          [
            "md-induksi-kuat",
            "Induksi Kuat dan Well-Ordering",
            [
              "strong induction",
              "well-ordering",
              "recursive structure",
              "existence",
              "factorization"
            ]
          ],
          [
            "md-definisi-rekursif",
            "Definisi Rekursif dan Induksi Struktural",
            [
              "recursive definition",
              "structural induction",
              "strings",
              "trees",
              "basis-recursion"
            ]
          ],
          [
            "md-algoritma-rekursif",
            "Algoritma Rekursif",
            [
              "recursion",
              "base case",
              "recursive call",
              "stack",
              "divide and conquer"
            ]
          ],
          [
            "md-program-correctness",
            "Kebenaran Program",
            [
              "Hoare logic idea",
              "loop invariant",
              "partial correctness",
              "termination",
              "verification"
            ]
          ]
        ]
      ],
      [
        "Pencacahan dan Probabilitas Diskrit",
        [
          [
            "md-counting-basic",
            "Dasar Pencacahan",
            [
              "sum rule",
              "product rule",
              "inclusion idea",
              "division rule",
              "tree diagram"
            ]
          ],
          [
            "md-pigeonhole",
            "Prinsip Pigeonhole",
            [
              "pigeonhole",
              "generalized pigeonhole",
              "existence",
              "distribution",
              "extremal argument"
            ]
          ],
          [
            "md-permutation-combination",
            "Permutasi dan Kombinasi",
            [
              "permutation",
              "combination",
              "r-permutation",
              "r-combination",
              "binomial coefficient"
            ]
          ],
          [
            "md-binomial-identities",
            "Koefisien Binomial dan Identitas",
            [
              "Pascal identity",
              "binomial theorem",
              "combinatorial proof",
              "Vandermonde",
              "symmetry"
            ]
          ],
          [
            "md-generalized-counting",
            "Permutasi dan Kombinasi Tergeneralisasi",
            [
              "multiset",
              "repetition",
              "stars and bars",
              "multinomial",
              "identical objects"
            ]
          ],
          [
            "md-generate-combinations",
            "Membangkitkan Permutasi dan Kombinasi",
            [
              "lexicographic generation",
              "next permutation",
              "combination generation",
              "algorithm",
              "enumeration"
            ]
          ],
          [
            "md-discrete-probability",
            "Pengantar Probabilitas Diskrit",
            [
              "finite probability",
              "event",
              "uniform sample space",
              "counting probability",
              "complement"
            ]
          ],
          [
            "md-probability-theory",
            "Teori Probabilitas Diskrit",
            [
              "conditional probability",
              "independence",
              "total probability",
              "Bayes",
              "random experiment"
            ]
          ],
          [
            "md-bayes",
            "Teorema Bayes",
            [
              "Bayes theorem",
              "prior",
              "posterior",
              "partition",
              "conditional probability"
            ]
          ],
          [
            "md-expectation-variance",
            "Ekspektasi dan Varians Diskrit",
            [
              "expected value",
              "linearity",
              "variance",
              "indicator variable",
              "random variable"
            ]
          ]
        ]
      ],
      [
        "Rekurensi, Fungsi Pembangkit, dan Inclusion–Exclusion",
        [
          [
            "md-recurrence-app",
            "Aplikasi Relasi Rekurensi",
            [
              "recurrence",
              "modeling",
              "Fibonacci",
              "counting",
              "dynamic process"
            ]
          ],
          [
            "md-linear-recurrence",
            "Menyelesaikan Rekurensi Linear",
            [
              "characteristic equation",
              "homogeneous recurrence",
              "particular solution",
              "initial conditions",
              "closed form"
            ]
          ],
          [
            "md-divide-conquer-recurrence",
            "Rekurensi Divide-and-Conquer",
            [
              "divide and conquer",
              "recurrence",
              "Master theorem idea",
              "recursive tree",
              "complexity"
            ]
          ],
          [
            "md-generating-function",
            "Fungsi Pembangkit",
            [
              "ordinary generating function",
              "coefficient extraction",
              "recurrence",
              "convolution",
              "formal power series"
            ]
          ],
          [
            "md-inclusion-exclusion",
            "Prinsip Inclusion–Exclusion",
            [
              "union cardinality",
              "overlap",
              "alternating sum",
              "counting",
              "derangement"
            ]
          ],
          [
            "md-pie-applications",
            "Aplikasi Inclusion–Exclusion",
            [
              "derangement",
              "surjection",
              "restricted arrangement",
              "sieve",
              "counting"
            ]
          ]
        ]
      ],
      [
        "Relasi, Ekuivalensi, dan Poset",
        [
          [
            "md-relations",
            "Relasi dan Sifat-sifatnya",
            [
              "relation",
              "reflexive",
              "symmetric",
              "antisymmetric",
              "transitive"
            ]
          ],
          [
            "md-nary",
            "Relasi n-ary dan Aplikasi",
            [
              "database relation",
              "tuple",
              "n-ary relation",
              "projection",
              "join idea"
            ]
          ],
          [
            "md-relation-representation",
            "Representasi Relasi",
            [
              "zero-one matrix",
              "digraph",
              "relation matrix",
              "composition",
              "path"
            ]
          ],
          [
            "md-closure",
            "Closure Relasi",
            [
              "reflexive closure",
              "symmetric closure",
              "transitive closure",
              "Warshall",
              "reachability"
            ]
          ],
          [
            "md-equivalence",
            "Relasi Ekuivalensi",
            [
              "equivalence relation",
              "equivalence class",
              "partition",
              "quotient set",
              "congruence"
            ]
          ],
          [
            "md-partial-order",
            "Partial Ordering",
            [
              "poset",
              "comparable",
              "minimal",
              "maximal",
              "lattice idea"
            ]
          ],
          [
            "md-hasse",
            "Diagram Hasse dan Struktur Poset",
            [
              "Hasse diagram",
              "cover relation",
              "topological order",
              "chain",
              "antichain"
            ]
          ]
        ]
      ],
      [
        "Graf dan Algoritma Graf",
        [
          [
            "md-graph-model",
            "Graf dan Model Graf",
            [
              "vertex",
              "edge",
              "graph model",
              "adjacency",
              "degree"
            ]
          ],
          [
            "md-graph-types",
            "Terminologi dan Jenis Graf",
            [
              "simple graph",
              "multigraph",
              "directed graph",
              "bipartite",
              "complete graph"
            ]
          ],
          [
            "md-graph-representation",
            "Representasi dan Isomorfisma Graf",
            [
              "adjacency matrix",
              "adjacency list",
              "incidence",
              "isomorphism",
              "invariant"
            ]
          ],
          [
            "md-connectivity",
            "Keterhubungan Graf",
            [
              "path",
              "connected component",
              "vertex cut",
              "edge cut",
              "connectivity"
            ]
          ],
          [
            "md-euler-hamilton",
            "Lintasan Euler dan Hamilton",
            [
              "Euler trail",
              "Euler circuit",
              "Hamilton path",
              "Hamilton cycle",
              "degree condition"
            ]
          ],
          [
            "md-shortest-path",
            "Masalah Jalur Terpendek",
            [
              "weighted graph",
              "Dijkstra",
              "shortest path",
              "distance",
              "routing"
            ]
          ],
          [
            "md-planar",
            "Graf Planar",
            [
              "planarity",
              "Euler formula",
              "face",
              "Kuratowski idea",
              "embedding"
            ]
          ],
          [
            "md-coloring",
            "Pewarnaan Graf",
            [
              "vertex coloring",
              "chromatic number",
              "map coloring",
              "scheduling",
              "conflict graph"
            ]
          ]
        ]
      ],
      [
        "Pohon dan Struktur Hierarkis",
        [
          [
            "md-trees",
            "Pengantar Pohon",
            [
              "tree",
              "rooted tree",
              "leaf",
              "internal vertex",
              "unique path"
            ]
          ],
          [
            "md-tree-applications",
            "Aplikasi Pohon",
            [
              "decision tree",
              "expression tree",
              "hierarchy",
              "binary tree",
              "prefix code"
            ]
          ],
          [
            "md-tree-traversal",
            "Traversal Pohon",
            [
              "preorder",
              "inorder",
              "postorder",
              "DFS",
              "recursive traversal"
            ]
          ],
          [
            "md-spanning-tree",
            "Spanning Tree",
            [
              "spanning tree",
              "DFS tree",
              "BFS tree",
              "connectivity",
              "cycle removal"
            ]
          ],
          [
            "md-mst",
            "Minimum Spanning Tree",
            [
              "weighted tree",
              "Kruskal",
              "Prim",
              "cut property",
              "greedy"
            ]
          ]
        ]
      ],
      [
        "Aljabar Boolean dan Model Komputasi",
        [
          [
            "md-boolean-functions",
            "Fungsi Boolean",
            [
              "Boolean variable",
              "Boolean function",
              "truth table",
              "duality",
              "identity"
            ]
          ],
          [
            "md-boolean-representation",
            "Representasi Fungsi Boolean",
            [
              "sum of products",
              "product of sums",
              "minterm",
              "maxterm",
              "normal form"
            ]
          ],
          [
            "md-logic-gates",
            "Logic Gates",
            [
              "AND gate",
              "OR gate",
              "NOT gate",
              "circuit",
              "Boolean expression"
            ]
          ],
          [
            "md-circuit-minimization",
            "Minimisasi Rangkaian",
            [
              "Karnaugh idea",
              "Boolean simplification",
              "cost",
              "equivalent circuit",
              "logic design"
            ]
          ],
          [
            "md-languages-grammars",
            "Bahasa dan Grammar",
            [
              "alphabet",
              "string",
              "formal language",
              "grammar",
              "derivation"
            ]
          ],
          [
            "md-finite-state-output",
            "Finite-State Machine dengan Output",
            [
              "state",
              "transition",
              "output",
              "Mealy",
              "Moore"
            ]
          ],
          [
            "md-finite-state-recognition",
            "Finite-State Machine dan Pengenalan Bahasa",
            [
              "automaton",
              "accepting state",
              "regular language",
              "transition",
              "recognition"
            ]
          ],
          [
            "md-turing-machine",
            "Mesin Turing",
            [
              "tape",
              "state",
              "transition function",
              "computability",
              "algorithmic model"
            ]
          ]
        ]
      ]
    ]
  },
  {
    "slug": "kalkulus-stokastik",
    "title": "Kalkulus Stokastik",
    "subtitle": "Martingale, Brownian motion, integrasi Itô, diffusions, perubahan ukuran, proses lompatan, dan aplikasi probabilistik.",
    "level": "Kuliah Lanjut · Probabilitas",
    "source": "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications",
    "sourceYear": "2014–2023",
    "units": [
      [
        "Ekspektasi Bersyarat dan Martingale Diskrit",
        [
          [
            "ks-prob-space",
            "Ruang Probabilitas, Sigma-Algebra, dan Informasi",
            [
              "probability space",
              "sigma algebra",
              "measurable random variable",
              "information",
              "filtration"
            ]
          ],
          [
            "ks-conditional-expectation",
            "Ekspektasi Bersyarat",
            [
              "conditional expectation",
              "sub-sigma-algebra",
              "measurability",
              "tower property",
              "projection"
            ]
          ],
          [
            "ks-filtration",
            "Filtrasi dan Proses Adapted",
            [
              "filtration",
              "adapted process",
              "information flow",
              "measurability",
              "time"
            ]
          ],
          [
            "ks-martingale",
            "Martingale Diskrit",
            [
              "martingale",
              "fair game",
              "conditional mean",
              "adapted",
              "integrability"
            ]
          ],
          [
            "ks-sub-super",
            "Submartingale dan Supermartingale",
            [
              "submartingale",
              "supermartingale",
              "drift",
              "conditional inequality",
              "process"
            ]
          ],
          [
            "ks-stopping-time",
            "Stopping Time",
            [
              "stopping time",
              "optional time",
              "filtration",
              "hitting time",
              "adapted"
            ]
          ],
          [
            "ks-optional-sampling",
            "Optional Sampling Theorem",
            [
              "optional stopping",
              "bounded stopping time",
              "martingale",
              "expectation",
              "conditions"
            ]
          ],
          [
            "ks-martingale-convergence",
            "Teorema Konvergensi Martingale",
            [
              "martingale convergence",
              "uniform integrability",
              "L1",
              "almost sure",
              "boundedness"
            ]
          ],
          [
            "ks-square-integrable",
            "Martingale Kuadrat-Integrabel",
            [
              "L2 martingale",
              "orthogonal increments",
              "variance",
              "predictable quadratic variation",
              "convergence"
            ]
          ],
          [
            "ks-random-walk-integral",
            "Integral terhadap Random Walk",
            [
              "stochastic sum",
              "predictable integrand",
              "random walk",
              "martingale transform",
              "discrete integral"
            ]
          ],
          [
            "ks-maximal-inequality",
            "Ketaksamaan Maksimal",
            [
              "Doob inequality",
              "maximum process",
              "L2 bound",
              "martingale",
              "tail probability"
            ]
          ]
        ]
      ],
      [
        "Brownian Motion dan Limit Random Walk",
        [
          [
            "ks-limit-independent",
            "Limit Jumlah Variabel Independen",
            [
              "CLT",
              "invariance principle",
              "scaling",
              "partial sums",
              "weak limit"
            ]
          ],
          [
            "ks-mvn",
            "Normal Multivariat",
            [
              "Gaussian vector",
              "covariance matrix",
              "linear transformation",
              "independence",
              "density"
            ]
          ],
          [
            "ks-random-walk-limit",
            "Random Walk Menuju Brownian Motion",
            [
              "Donsker idea",
              "diffusive scaling",
              "random walk",
              "functional limit",
              "continuity"
            ]
          ],
          [
            "ks-brownian-definition",
            "Definisi Brownian Motion",
            [
              "independent increments",
              "Gaussian increments",
              "continuity",
              "stationarity of increments",
              "Wiener process"
            ]
          ],
          [
            "ks-brownian-construction",
            "Konstruksi Brownian Motion",
            [
              "finite-dimensional distributions",
              "continuity",
              "Gaussian process",
              "construction",
              "consistency"
            ]
          ],
          [
            "ks-brownian-properties",
            "Sifat Dasar Brownian Motion",
            [
              "martingale",
              "Markov process",
              "Gaussian process",
              "self-similarity",
              "scaling"
            ]
          ],
          [
            "ks-brownian-computation",
            "Perhitungan dengan Brownian Motion",
            [
              "hitting probability",
              "reflection principle",
              "maximum",
              "Gaussian increments",
              "conditioning"
            ]
          ],
          [
            "ks-quadratic-variation",
            "Quadratic Variation",
            [
              "quadratic variation",
              "partition",
              "Brownian motion",
              "finite variation contrast",
              "Ito calculus"
            ]
          ],
          [
            "ks-multidimensional-bm",
            "Brownian Motion Multidimensi",
            [
              "independent coordinates",
              "covariance",
              "radial process",
              "multidimensional diffusion",
              "Gaussian"
            ]
          ],
          [
            "ks-heat-generator",
            "Persamaan Panas dan Generator",
            [
              "heat equation",
              "generator",
              "semigroup",
              "Brownian expectation",
              "PDE"
            ]
          ]
        ]
      ],
      [
        "Integrasi Stokastik dan Formula Itô",
        [
          [
            "ks-stoch-calculus",
            "Mengapa Kalkulus Stokastik Berbeda",
            [
              "nondifferentiability",
              "quadratic variation",
              "random integrator",
              "Ito integral",
              "finite variation"
            ]
          ],
          [
            "ks-simple-process",
            "Integral Proses Sederhana",
            [
              "simple adapted process",
              "Ito sum",
              "isometry",
              "Brownian increments",
              "predictability"
            ]
          ],
          [
            "ks-ito-integral",
            "Integral Itô",
            [
              "Ito integral",
              "L2 limit",
              "adapted integrand",
              "Ito isometry",
              "martingale"
            ]
          ],
          [
            "ks-ito-isometry",
            "Isometri Itô",
            [
              "Ito isometry",
              "second moment",
              "L2 convergence",
              "integrand",
              "variance"
            ]
          ],
          [
            "ks-ito-formula",
            "Formula Itô Satu Dimensi",
            [
              "Ito formula",
              "quadratic variation",
              "drift term",
              "diffusion term",
              "chain rule"
            ]
          ],
          [
            "ks-ito-multivariable",
            "Formula Itô Multivariabel",
            [
              "gradient",
              "Hessian",
              "covariation",
              "multidimensional Brownian",
              "Ito formula"
            ]
          ],
          [
            "ks-diffusions",
            "Proses Difusi",
            [
              "SDE",
              "drift",
              "diffusion coefficient",
              "strong solution",
              "generator"
            ]
          ],
          [
            "ks-covariation",
            "Covariation dan Aturan Produk",
            [
              "quadratic covariation",
              "product rule",
              "cross variation",
              "semimartingale",
              "Ito calculus"
            ]
          ],
          [
            "ks-several-bm",
            "Beberapa Brownian Motion",
            [
              "correlated Brownian",
              "covariance matrix",
              "vector stochastic integral",
              "independence",
              "SDE system"
            ]
          ]
        ]
      ],
      [
        "Martingale Kontinu dan Feynman–Kac",
        [
          [
            "ks-local-martingale",
            "Local Martingale",
            [
              "localizing sequence",
              "local martingale",
              "stopping",
              "integrability",
              "semimartingale"
            ]
          ],
          [
            "ks-continuous-martingale",
            "Martingale Kontinu",
            [
              "continuous martingale",
              "quadratic variation",
              "time change",
              "localization",
              "representation"
            ]
          ],
          [
            "ks-bessel",
            "Proses Bessel",
            [
              "Bessel process",
              "radial Brownian motion",
              "Ito formula",
              "dimension",
              "SDE"
            ]
          ],
          [
            "ks-feynman-kac",
            "Formula Feynman–Kac",
            [
              "PDE",
              "expectation",
              "potential",
              "diffusion",
              "boundary-terminal condition"
            ]
          ],
          [
            "ks-binomial-approx",
            "Aproksimasi Binomial",
            [
              "binomial tree",
              "Brownian scaling",
              "discrete approximation",
              "option pricing",
              "convergence"
            ]
          ]
        ]
      ],
      [
        "Perubahan Ukuran, Girsanov, dan Keuangan",
        [
          [
            "ks-absolute-cont-measure",
            "Ukuran yang Absolut Kontinu",
            [
              "absolute continuity",
              "Radon-Nikodym derivative",
              "density process",
              "equivalent measures",
              "probability measure"
            ]
          ],
          [
            "ks-drift-change",
            "Memberi Drift pada Brownian Motion",
            [
              "drift",
              "exponential martingale",
              "measure change",
              "Brownian motion",
              "density"
            ]
          ],
          [
            "ks-girsanov",
            "Teorema Girsanov",
            [
              "Girsanov theorem",
              "change of measure",
              "drift transformation",
              "exponential martingale",
              "Novikov idea"
            ]
          ],
          [
            "ks-risk-neutral",
            "Ukuran Risk-Neutral",
            [
              "risk-neutral measure",
              "discounted asset",
              "martingale",
              "no-arbitrage",
              "pricing"
            ]
          ],
          [
            "ks-black-scholes",
            "Formula Black–Scholes",
            [
              "geometric Brownian motion",
              "option",
              "Black-Scholes formula",
              "normal cdf",
              "pricing"
            ]
          ],
          [
            "ks-bs-pde",
            "Persamaan Black–Scholes dan Pendekatan Martingale",
            [
              "Black-Scholes PDE",
              "hedging",
              "martingale pricing",
              "Feynman-Kac",
              "replication"
            ]
          ],
          [
            "ks-martingale-pricing",
            "Pricing dengan Martingale",
            [
              "conditional expectation",
              "discounting",
              "claim",
              "equivalent martingale measure",
              "pricing"
            ]
          ],
          [
            "ks-martingale-representation",
            "Teorema Representasi Martingale",
            [
              "martingale representation",
              "Brownian filtration",
              "stochastic integral",
              "hedging",
              "completeness"
            ]
          ]
        ]
      ],
      [
        "Proses Lompatan dan Lévy",
        [
          [
            "ks-levy",
            "Proses Lévy",
            [
              "stationary increments",
              "independent increments",
              "cadlag",
              "Lévy process",
              "characteristic exponent"
            ]
          ],
          [
            "ks-poisson",
            "Proses Poisson",
            [
              "Poisson process",
              "exponential waiting time",
              "independent increments",
              "counting process",
              "rate"
            ]
          ],
          [
            "ks-compound-poisson",
            "Compound Poisson Process",
            [
              "jump size",
              "compound Poisson",
              "random sum",
              "intensity",
              "distribution"
            ]
          ],
          [
            "ks-poisson-integral",
            "Integrasi terhadap Compound Poisson",
            [
              "jump integral",
              "compensator idea",
              "compound Poisson",
              "stochastic sum",
              "process"
            ]
          ],
          [
            "ks-jump-change-measure",
            "Perubahan Ukuran pada Proses Lompatan",
            [
              "likelihood ratio",
              "Poisson intensity",
              "measure change",
              "jump process",
              "martingale"
            ]
          ],
          [
            "ks-generalized-poisson",
            "Generalized Poisson Processes",
            [
              "Poisson random measure",
              "jump intensity",
              "infinite activity idea",
              "compensation",
              "Lévy"
            ]
          ],
          [
            "ks-levy-khinchin",
            "Karakterisasi Lévy–Khintchine",
            [
              "characteristic exponent",
              "drift",
              "Gaussian part",
              "Lévy measure",
              "infinitely divisible"
            ]
          ],
          [
            "ks-levy-integral",
            "Integral terhadap Proses Lévy",
            [
              "Lévy integral",
              "jump measure",
              "compensated integral",
              "stochastic integration",
              "semimartingale"
            ]
          ],
          [
            "ks-stable-process",
            "Proses Stabil Simetris",
            [
              "stable law",
              "self-similarity",
              "heavy tail",
              "jump process",
              "characteristic function"
            ]
          ]
        ]
      ],
      [
        "Fractional Brownian Motion dan Fungsi Harmonik",
        [
          [
            "ks-fbm",
            "Fractional Brownian Motion",
            [
              "Hurst parameter",
              "Gaussian process",
              "self-similarity",
              "stationary increments",
              "long memory"
            ]
          ],
          [
            "ks-fbm-integral",
            "Representasi Integral Fractional Brownian Motion",
            [
              "kernel representation",
              "Brownian motion",
              "Gaussian integral",
              "Hurst",
              "covariance"
            ]
          ],
          [
            "ks-fbm-simulation",
            "Simulasi Fractional Brownian Motion",
            [
              "simulation",
              "covariance",
              "increments",
              "numerical generation",
              "sample path"
            ]
          ],
          [
            "ks-dirichlet",
            "Masalah Dirichlet Probabilistik",
            [
              "harmonic function",
              "boundary data",
              "Brownian exit time",
              "Dirichlet problem",
              "expectation"
            ]
          ],
          [
            "ks-h-process",
            "h-Processes",
            [
              "Doob h-transform",
              "conditioning",
              "harmonic function",
              "Markov process",
              "change of measure"
            ]
          ],
          [
            "ks-time-change",
            "Time Change",
            [
              "random time change",
              "quadratic variation",
              "Brownian representation",
              "clock",
              "process"
            ]
          ],
          [
            "ks-complex-brownian",
            "Complex Brownian Motion",
            [
              "planar Brownian motion",
              "complex process",
              "harmonic function",
              "conformal idea",
              "stochastic path"
            ]
          ]
        ]
      ]
    ]
  },
  {
    "slug": "teori-ukuran-probabilitas",
    "title": "Teori Ukuran dan Peluang",
    "subtitle": "Fondasi rigor untuk ukuran, integral Lebesgue, ruang Lp, teori peluang modern, teorema limit, martingale, proses Markov, dan proses stokastik.",
    "level": "Kuliah Lanjut · Analisis & Peluang",
    "source": "Krishna B. Athreya & Soumendra N. Lahiri, Measure Theory and Probability Theory",
    "sourceYear": "2006",
    "units": [
      [
        "Sigma-Algebra dan Konstruksi Ukuran",
        [
          [
            "tup-classes-sets",
            "Kelas Himpunan dan Sigma-Algebra",
            [
              "algebra of sets",
              "sigma algebra",
              "pi system",
              "lambda system",
              "Borel sets"
            ]
          ],
          [
            "tup-measures",
            "Ukuran dan Countable Additivity",
            [
              "measure",
              "countable additivity",
              "continuity from below",
              "continuity from above",
              "null set"
            ]
          ],
          [
            "tup-outer-measure",
            "Outer Measure",
            [
              "outer measure",
              "covering",
              "Caratheodory measurability",
              "subadditivity",
              "construction"
            ]
          ],
          [
            "tup-extension",
            "Teorema Perluasan Carathéodory",
            [
              "premeasure",
              "extension theorem",
              "sigma-finite",
              "uniqueness",
              "generated sigma algebra"
            ]
          ],
          [
            "tup-lebesgue-stieltjes",
            "Ukuran Lebesgue–Stieltjes",
            [
              "distribution function",
              "Lebesgue-Stieltjes measure",
              "interval",
              "extension",
              "real line"
            ]
          ],
          [
            "tup-lebesgue-measure",
            "Ukuran Lebesgue",
            [
              "Lebesgue measure",
              "Borel measure",
              "translation invariance",
              "null set",
              "completion"
            ]
          ],
          [
            "tup-complete-measure",
            "Kelengkapan Ruang Ukur",
            [
              "complete measure",
              "completion",
              "null subset",
              "measurable set",
              "measure space"
            ]
          ]
        ]
      ],
      [
        "Fungsi Terukur dan Integral Lebesgue",
        [
          [
            "tup-measurable-functions",
            "Fungsi Terukur",
            [
              "measurable function",
              "preimage",
              "Borel measurable",
              "simple function",
              "limit"
            ]
          ],
          [
            "tup-induced-measure",
            "Ukuran Terinduksi dan Fungsi Distribusi",
            [
              "pushforward",
              "distribution",
              "random variable",
              "cdf",
              "induced measure"
            ]
          ],
          [
            "tup-simple-integral",
            "Integral Fungsi Sederhana",
            [
              "simple function",
              "nonnegative integral",
              "indicator",
              "linearity",
              "monotonicity"
            ]
          ],
          [
            "tup-lebesgue-integral",
            "Integral Lebesgue",
            [
              "Lebesgue integral",
              "positive and negative parts",
              "integrability",
              "absolute integrability",
              "expectation"
            ]
          ],
          [
            "tup-riemann-lebesgue",
            "Integral Riemann dan Lebesgue",
            [
              "Riemann integrability",
              "Lebesgue integrability",
              "measure zero",
              "comparison",
              "examples"
            ]
          ],
          [
            "tup-mct",
            "Monotone Convergence Theorem",
            [
              "MCT",
              "monotone sequence",
              "nonnegative functions",
              "limit-integral interchange",
              "measure"
            ]
          ],
          [
            "tup-fatou",
            "Lemma Fatou",
            [
              "Fatou lemma",
              "liminf",
              "lower bound",
              "nonnegative functions",
              "integration"
            ]
          ],
          [
            "tup-dct",
            "Dominated Convergence Theorem",
            [
              "DCT",
              "dominating function",
              "almost everywhere",
              "integrability",
              "limit interchange"
            ]
          ],
          [
            "tup-egorov-lusin",
            "Teorema Egorov dan Lusin",
            [
              "almost uniform convergence",
              "Egorov",
              "Lusin",
              "approximation",
              "measurable function"
            ]
          ],
          [
            "tup-uniform-integrability",
            "Uniform Integrability",
            [
              "uniform integrability",
              "L1 convergence",
              "tails",
              "Vitali idea",
              "family of random variables"
            ]
          ]
        ]
      ],
      [
        "Ruang Lp, Banach, dan Hilbert",
        [
          [
            "tup-holder",
            "Ketaksamaan Hölder",
            [
              "Holder inequality",
              "conjugate exponents",
              "Lp",
              "integral",
              "duality"
            ]
          ],
          [
            "tup-minkowski",
            "Ketaksamaan Minkowski",
            [
              "Minkowski inequality",
              "triangle inequality",
              "Lp norm",
              "normed space",
              "integral"
            ]
          ],
          [
            "tup-lp",
            "Ruang Lp",
            [
              "Lp space",
              "equivalence a.e.",
              "norm",
              "completeness",
              "integrability"
            ]
          ],
          [
            "tup-lp-dual",
            "Dualitas Lp",
            [
              "dual space",
              "conjugate exponent",
              "linear functional",
              "representation",
              "Lp"
            ]
          ],
          [
            "tup-banach",
            "Ruang Banach",
            [
              "Banach space",
              "Cauchy sequence",
              "completeness",
              "norm",
              "operator"
            ]
          ],
          [
            "tup-hilbert",
            "Ruang Hilbert",
            [
              "inner product",
              "Hilbert space",
              "orthogonality",
              "projection",
              "complete"
            ]
          ],
          [
            "tup-riesz-fischer",
            "Teorema Riesz–Fischer",
            [
              "Riesz-Fischer",
              "completeness",
              "L2",
              "Fourier coefficients",
              "series"
            ]
          ],
          [
            "tup-linear-transformations",
            "Operator Linear pada Ruang Fungsi",
            [
              "bounded operator",
              "linear transformation",
              "operator norm",
              "continuity",
              "dual"
            ]
          ]
        ]
      ],
      [
        "Radon–Nikodym, Ukuran Bertanda, dan Diferensiasi",
        [
          [
            "tup-radon-nikodym",
            "Teorema Radon–Nikodym",
            [
              "absolute continuity",
              "Radon-Nikodym derivative",
              "density",
              "measure",
              "representation"
            ]
          ],
          [
            "tup-signed-measure",
            "Ukuran Bertanda",
            [
              "signed measure",
              "Jordan decomposition",
              "Hahn decomposition",
              "total variation",
              "variation measure"
            ]
          ],
          [
            "tup-bounded-variation",
            "Fungsi Bounded Variation",
            [
              "bounded variation",
              "Jordan decomposition",
              "variation",
              "monotone functions",
              "Stieltjes"
            ]
          ],
          [
            "tup-absolute-cont-function",
            "Fungsi Absolut Kontinu",
            [
              "absolute continuity",
              "derivative a.e.",
              "fundamental theorem",
              "integral representation",
              "variation"
            ]
          ],
          [
            "tup-lebesgue-differentiation",
            "Teorema Diferensiasi Lebesgue",
            [
              "Lebesgue differentiation",
              "averages",
              "density points",
              "a.e.",
              "local behavior"
            ]
          ],
          [
            "tup-singular-distribution",
            "Distribusi Singular dan Fungsi Cantor",
            [
              "Cantor set",
              "Cantor function",
              "singular measure",
              "cdf",
              "zero derivative"
            ]
          ]
        ]
      ],
      [
        "Product Measure, Fubini, Konvolusi, dan Transformasi",
        [
          [
            "tup-product-space",
            "Ruang Produk dan Ukuran Produk",
            [
              "product sigma algebra",
              "product measure",
              "rectangle",
              "construction",
              "sigma finite"
            ]
          ],
          [
            "tup-tonelli",
            "Teorema Tonelli",
            [
              "Tonelli",
              "nonnegative function",
              "iterated integral",
              "product measure",
              "measurability"
            ]
          ],
          [
            "tup-fubini",
            "Teorema Fubini",
            [
              "Fubini",
              "integrable function",
              "iterated integral",
              "product space",
              "section"
            ]
          ],
          [
            "tup-higher-products",
            "Produk Orde Lebih Tinggi",
            [
              "finite products",
              "product measure",
              "iterated integral",
              "random vectors",
              "dimension"
            ]
          ],
          [
            "tup-convolution-measure",
            "Konvolusi Ukuran dan Fungsi",
            [
              "convolution",
              "measure",
              "L1 function",
              "sum of independent variables",
              "smoothing"
            ]
          ],
          [
            "tup-laplace-generating",
            "Generating Function dan Transformasi Laplace",
            [
              "Laplace transform",
              "generating function",
              "moment",
              "convolution",
              "transform"
            ]
          ],
          [
            "tup-fourier-series",
            "Deret Fourier",
            [
              "Fourier coefficient",
              "orthogonality",
              "L2",
              "trigonometric system",
              "convergence"
            ]
          ],
          [
            "tup-fourier-transform",
            "Transformasi Fourier",
            [
              "Fourier transform",
              "L1",
              "convolution theorem",
              "frequency",
              "characteristic function"
            ]
          ],
          [
            "tup-plancherel",
            "Teorema Plancherel",
            [
              "Plancherel",
              "L2 Fourier transform",
              "isometry",
              "density",
              "Hilbert space"
            ]
          ]
        ]
      ],
      [
        "Ruang Probabilitas dan Independensi",
        [
          [
            "tup-kolmogorov-model",
            "Model Probabilitas Kolmogorov",
            [
              "probability space",
              "axioms",
              "event",
              "probability measure",
              "random experiment"
            ]
          ],
          [
            "tup-random-vectors",
            "Variabel Acak dan Vektor Acak",
            [
              "measurable map",
              "distribution",
              "random vector",
              "expectation",
              "law"
            ]
          ],
          [
            "tup-kolmogorov-consistency",
            "Teorema Konsistensi Kolmogorov",
            [
              "finite-dimensional distribution",
              "stochastic process",
              "consistency",
              "extension",
              "path space"
            ]
          ],
          [
            "tup-independent-events",
            "Event dan Variabel Acak Independen",
            [
              "independence",
              "sigma algebra",
              "random variables",
              "factorization",
              "product probability"
            ]
          ],
          [
            "tup-borel-cantelli",
            "Lemma Borel–Cantelli",
            [
              "Borel-Cantelli",
              "limsup events",
              "independence",
              "infinitely often",
              "series probability"
            ]
          ],
          [
            "tup-tail-zero-one",
            "Tail Sigma-Algebra dan Hukum 0–1 Kolmogorov",
            [
              "tail sigma algebra",
              "zero-one law",
              "independence",
              "tail event",
              "probability"
            ]
          ]
        ]
      ],
      [
        "Hukum Bilangan Besar, Renewal, dan Ergodik",
        [
          [
            "tup-wlln",
            "Weak Law of Large Numbers",
            [
              "WLLN",
              "sample mean",
              "convergence in probability",
              "variance",
              "iid"
            ]
          ],
          [
            "tup-slln",
            "Strong Law of Large Numbers",
            [
              "SLLN",
              "almost sure convergence",
              "sample mean",
              "iid",
              "Kolmogorov"
            ]
          ],
          [
            "tup-series-independent",
            "Deret Variabel Acak Independen",
            [
              "random series",
              "three-series idea",
              "almost sure convergence",
              "independence",
              "partial sums"
            ]
          ],
          [
            "tup-mz-slln",
            "Kolmogorov dan Marcinkiewicz–Zygmund SLLN",
            [
              "strong law",
              "moment condition",
              "normalization",
              "independent variables",
              "rate"
            ]
          ],
          [
            "tup-renewal",
            "Teori Renewal",
            [
              "renewal process",
              "interarrival",
              "renewal function",
              "renewal equation",
              "limit theorem"
            ]
          ],
          [
            "tup-wald",
            "Persamaan Wald",
            [
              "stopping time",
              "random sum",
              "expectation",
              "Wald equation",
              "iid increments"
            ]
          ],
          [
            "tup-ergodic",
            "Teorema Ergodik",
            [
              "stationary process",
              "ergodicity",
              "time average",
              "Birkhoff",
              "measure preserving"
            ]
          ],
          [
            "tup-lil",
            "Law of the Iterated Logarithm",
            [
              "iterated logarithm",
              "partial sums",
              "almost sure fluctuation",
              "normalization",
              "limit envelope"
            ]
          ]
        ]
      ],
      [
        "Konvergensi Distribusi, Fungsi Karakteristik, dan CLT",
        [
          [
            "tup-weak-convergence",
            "Konvergensi Lemah",
            [
              "weak convergence",
              "distribution",
              "bounded continuous function",
              "cdf",
              "probability measure"
            ]
          ],
          [
            "tup-tightness",
            "Tightness dan Helly–Bray",
            [
              "tightness",
              "subsequence",
              "Helly-Bray",
              "relative compactness",
              "probability measure"
            ]
          ],
          [
            "tup-skorohod",
            "Teorema Skorohod dan Continuous Mapping",
            [
              "Skorohod representation",
              "continuous mapping theorem",
              "weak convergence",
              "coupling",
              "random variable"
            ]
          ],
          [
            "tup-moment-method",
            "Metode Momen",
            [
              "moments",
              "moment problem",
              "distribution convergence",
              "uniqueness",
              "Carleman"
            ]
          ],
          [
            "tup-characteristic",
            "Fungsi Karakteristik",
            [
              "characteristic function",
              "Fourier transform",
              "distribution",
              "moment",
              "independence"
            ]
          ],
          [
            "tup-inversion",
            "Formula Inversi",
            [
              "inversion formula",
              "characteristic function",
              "distribution recovery",
              "Fourier",
              "continuity point"
            ]
          ],
          [
            "tup-levy-continuity",
            "Teorema Kontinuitas Lévy–Cramér",
            [
              "characteristic convergence",
              "weak convergence",
              "continuity theorem",
              "limit distribution",
              "Fourier"
            ]
          ],
          [
            "tup-lindeberg-feller",
            "CLT Lindeberg–Feller",
            [
              "triangular array",
              "Lindeberg condition",
              "CLT",
              "normalization",
              "variance"
            ]
          ],
          [
            "tup-stable-laws",
            "Distribusi Stabil dan Infinitely Divisible",
            [
              "stable law",
              "infinite divisibility",
              "characteristic exponent",
              "sum stability",
              "Levy"
            ]
          ],
          [
            "tup-clt-refinements",
            "Penyempurnaan CLT",
            [
              "Berry-Esseen",
              "Edgeworth expansion",
              "large deviations",
              "functional CLT",
              "Brownian bridge"
            ]
          ]
        ]
      ],
      [
        "Ekspektasi Bersyarat dan Martingale",
        [
          [
            "tup-cond-expectation",
            "Ekspektasi Bersyarat",
            [
              "conditional expectation",
              "sub-sigma-algebra",
              "L1",
              "projection idea",
              "tower property"
            ]
          ],
          [
            "tup-cond-convergence",
            "Konvergensi untuk Ekspektasi Bersyarat",
            [
              "conditional convergence",
              "uniform integrability",
              "L1",
              "martingale",
              "domination"
            ]
          ],
          [
            "tup-cond-probability",
            "Probabilitas Bersyarat Modern",
            [
              "regular conditional idea",
              "conditional probability",
              "sigma algebra",
              "event",
              "expectation"
            ]
          ],
          [
            "tup-martingale",
            "Martingale Waktu Diskrit",
            [
              "martingale",
              "filtration",
              "adapted",
              "conditional expectation",
              "fair game"
            ]
          ],
          [
            "tup-stopping",
            "Stopping Time dan Optional Stopping",
            [
              "stopping time",
              "optional stopping",
              "martingale",
              "boundedness",
              "expectation"
            ]
          ],
          [
            "tup-martingale-inequalities",
            "Ketaksamaan Martingale",
            [
              "Doob inequality",
              "submartingale",
              "maximal bound",
              "Lp",
              "tail probability"
            ]
          ],
          [
            "tup-martingale-convergence",
            "Konvergensi Martingale",
            [
              "martingale convergence",
              "almost sure",
              "L1",
              "uniform integrability",
              "upcrossing"
            ]
          ],
          [
            "tup-random-walk-app",
            "Aplikasi Martingale pada Random Walk",
            [
              "random walk",
              "hitting time",
              "gambler ruin",
              "optional stopping",
              "harmonic function"
            ]
          ]
        ]
      ],
      [
        "Rantai Markov dan Proses Waktu Kontinu",
        [
          [
            "tup-markov-discrete",
            "Rantai Markov Diskrit",
            [
              "Markov property",
              "transition kernel",
              "state space",
              "Chapman-Kolmogorov",
              "classification"
            ]
          ],
          [
            "tup-harris",
            "Harris Chains dan Regenerasi",
            [
              "Harris recurrence",
              "regeneration",
              "minorization",
              "iid cycles",
              "ergodic theorem"
            ]
          ],
          [
            "tup-feller",
            "Feller Markov Chains",
            [
              "Feller property",
              "Polish space",
              "transition operator",
              "weak convergence",
              "invariant measure"
            ]
          ],
          [
            "tup-mcmc",
            "Markov Chain Monte Carlo",
            [
              "MCMC",
              "invariant distribution",
              "Metropolis idea",
              "ergodicity",
              "Monte Carlo"
            ]
          ],
          [
            "tup-brownian",
            "Brownian Motion",
            [
              "Wiener process",
              "Gaussian increments",
              "continuity",
              "scaling",
              "Markov"
            ]
          ],
          [
            "tup-brownian-properties",
            "Sifat dan Hitting Time Brownian Motion",
            [
              "reflection",
              "hitting time",
              "maximum",
              "quadratic variation idea",
              "harmonicity"
            ]
          ],
          [
            "tup-ctmc",
            "Continuous-Time Jump Markov Chains",
            [
              "holding time",
              "generator",
              "jump chain",
              "transition semigroup",
              "continuous time"
            ]
          ]
        ]
      ],
      [
        "Bootstrap, Dependensi, dan Branching Process",
        [
          [
            "tup-bootstrap",
            "Fondasi Bootstrap",
            [
              "resampling",
              "empirical distribution",
              "bootstrap statistic",
              "consistency",
              "standard error"
            ]
          ],
          [
            "tup-bootstrap-validity",
            "Validitas dan Akurasi Bootstrap",
            [
              "bootstrap consistency",
              "second-order correctness",
              "lattice",
              "heavy tail",
              "approximation"
            ]
          ],
          [
            "tup-dependent-bootstrap",
            "Bootstrap untuk Data Dependenden",
            [
              "dependence",
              "block bootstrap",
              "moving blocks",
              "time series",
              "resampling"
            ]
          ],
          [
            "tup-mixing",
            "Proses Mixing",
            [
              "alpha mixing",
              "rho mixing",
              "dependence decay",
              "stationary sequence",
              "limit theorem"
            ]
          ],
          [
            "tup-mixing-clt",
            "CLT untuk Proses Mixing",
            [
              "mixing condition",
              "CLT",
              "dependence",
              "variance",
              "stationary process"
            ]
          ],
          [
            "tup-branching",
            "Branching Process Bienaymé–Galton–Watson",
            [
              "offspring distribution",
              "extinction",
              "generating function",
              "criticality",
              "population process"
            ]
          ],
          [
            "tup-multitype-branching",
            "Branching Process Multitype",
            [
              "types",
              "mean matrix",
              "Perron-Frobenius",
              "extinction",
              "growth"
            ]
          ],
          [
            "tup-continuous-branching",
            "Branching Process Waktu Kontinu",
            [
              "continuous time",
              "birth-death",
              "branching property",
              "embedding",
              "population"
            ]
          ]
        ]
      ]
    ]
  }
];

export const newAcademicSubjects:BookSubject[]=seeds.map((subject)=>({
  slug:subject.slug,
  title:subject.title,
  subtitle:subject.subtitle,
  level:subject.level,
  source:subject.source,
  sourceYear:subject.sourceYear,
  curriculumVersion:"DMath Curriculum v1",
  chapters:subject.units.map(([title,sections],unitIndex)=>({
    number:String(unitIndex+1),
    title,
    sourceTitle:"DMath Learning Curriculum",
    sections:sections.map((section,sectionIndex)=>s(unitIndex+1,sectionIndex+1,section)),
  })),
}));
