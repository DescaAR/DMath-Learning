import type { BookLessonContent } from "@/data/book-content-types";
import { graphDefinitionsContent } from "@/data/graph-definitions-content";
import { euclideanDivisionContent } from "@/data/euclidean-division-content";
import { supremumApplicationsContent } from "@/data/supremum-applications-content";
import { preciseLimitContent } from "@/data/precise-limit-content";
import { groupAxiomsContent } from "@/data/group-axioms-content";
import { linearSubspacesContent } from "@/data/linear-subspaces-content";
import { complexPlaneSetsContent } from "@/data/complex-plane-sets-content";
import { linearFirstOrderContent } from "@/data/linear-first-order-content";
import { bisectionContent } from "@/data/bisection-content";
import { newtonMethodContent } from "@/data/newton-method-content";
import { nestedQuantifiersContent } from "@/data/nested-quantifiers-content";
import { graphicalLinearProgrammingContent } from "@/data/graphical-lp-content";
import { neymanPearsonContent } from "@/data/neyman-pearson-content";
import { conditionalExpectationContent } from "@/data/conditional-expectation-content";
import { regressionInferenceContent } from "@/data/regression-inference-content";
import { metricSpacesContent } from "@/data/metric-spaces-content";
import { analyticGeometryContent } from "@/data/analytic-geometry-content";
import { optimizationContent } from "@/data/optimization-content";
import { probabilityDensityContent } from "@/data/probability-density-content";
import { centralTendencyContent } from "@/data/central-tendency-content";
import { modelingContent } from "@/data/modeling-content";
import { pointEstimationContent } from "@/data/point-estimation-content";
import { primeFactorizationContent } from "@/data/prime-factorization-content";
import { inclusionExclusionContent } from "@/data/inclusion-exclusion-content";
import { inferenceRulesContent } from "@/data/inference-rules-content";
import { topologicalContinuityContent } from "@/data/topological-continuity-content";
import { exactDifferentialContent } from "@/data/exact-differential-content";
import { curatedSectionExercises } from "@/data/curated-section-exercises";
import { academicEnrichment } from "@/data/academic-enrichment";
import { realAnalysisContentA } from "@/data/real-analysis-book-content-a";
import { realAnalysisContentB } from "@/data/real-analysis-book-content-b";
import { complexAnalysisContentA } from "@/data/complex-analysis-book-content-a";
import { complexAnalysisContentB } from "@/data/complex-analysis-book-content-b";
import { additionalBookContent } from "@/data/additional-book-content";
import { expandedBookContent } from "@/data/expanded-book-content";
import { numericalAnalysisContent } from "@/data/numerical-analysis-content";
import { newAcademicContent } from "@/data/new-academic-content";
import { abstractAlgebraContentA } from "@/data/abstract-algebra-book-content-a";
import { abstractAlgebraContentB } from "@/data/abstract-algebra-book-content-b";
import { abstractAlgebraContentC9 } from "@/data/abstract-algebra-book-content-c9";
import { abstractAlgebraContentC10 } from "@/data/abstract-algebra-book-content-c10";
import { abstractAlgebraContentC11 } from "@/data/abstract-algebra-book-content-c11";
import { abstractAlgebraContentD12 } from "@/data/abstract-algebra-book-content-d12";
import { abstractAlgebraContentD13 } from "@/data/abstract-algebra-book-content-d13";
import { abstractAlgebraContentD14 } from "@/data/abstract-algebra-book-content-d14";
import { measureProbabilityContentA } from "@/data/measure-probability-content-a";
import { measureProbabilityContentB } from "@/data/measure-probability-content-b";
import { measureProbabilityContentC } from "@/data/measure-probability-content-c";
import { measureProbabilityContentD } from "@/data/measure-probability-content-d";

export const bookSectionContent:Record<string,BookLessonContent>={
  ...realAnalysisContentA,
  ...realAnalysisContentB,
  ...complexAnalysisContentA,
  ...complexAnalysisContentB,
  ...additionalBookContent,
  ...expandedBookContent,
  ...numericalAnalysisContent,
  ...newAcademicContent,
  ...abstractAlgebraContentA,
  ...abstractAlgebraContentB,
  ...abstractAlgebraContentC9,
  ...abstractAlgebraContentC10,
  ...abstractAlgebraContentC11,
  ...abstractAlgebraContentD12,
  ...abstractAlgebraContentD13,
  ...abstractAlgebraContentD14,
  ...measureProbabilityContentA,
  ...measureProbabilityContentB,
  ...measureProbabilityContentC,
  ...measureProbabilityContentD,
  // This carefully authored lesson supersedes the generated graph overview.
  "gt-definitions":graphDefinitionsContent,
  // Full proof of the division algorithm supersedes the generic number-theory page.
  "nt-euclid-division":euclideanDivisionContent,
  // Replace an unproved square-root assertion and short density arguments with full proofs.
  "aplikasi-supremum":supremumApplicationsContent,
  // A complete epsilon-delta calculus lesson replaces the short generic generated entry.
  "calc-precise-limit":preciseLimitContent,
  // Dedicated, fully proved group-axiom lesson replaces the generated summary.
  "alg-groups":groupAxiomsContent,
  // Proof-based linear subspace lesson supersedes generic matrix curriculum text.
  "la-subspaces":linearSubspacesContent,
  // Dedicated complex-plane topology with formal proofs and explicit domain distinctions.
  "himpunan-di-bidang-kompleks":complexPlaneSetsContent,
  // Dedicated integrating-factor derivation, existence and uniqueness for first-order ODEs.
  "de-linear-first":linearFirstOrderContent,
  // Rigorous bisection lesson replaces generic numerical-analysis summary.
  "num-bisection":bisectionContent,
  // Fully proved Newton method with exact local convergence hypotheses and actual solutions.
  "num-newton":newtonMethodContent,
  // Quantifier scope, witness dependence and logically exact counterexamples.
  "md-kuantor-bertingkat":nestedQuantifiersContent,
  // Proof-based graphical linear programming replaces the generated operations-research summary.
  "or-lp-grafik":graphicalLinearProgrammingContent,
  // Full hypothesis-testing proof and actual worked solutions replace the generated rubric.
  "stm-neyman-pearson":neymanPearsonContent,
  // Measure-theoretic conditional expectation, rigorous proofs and actual worked solutions.
  "ks-conditional-expectation":conditionalExpectationContent,
  // Regression coefficient inference with exact hypotheses, proofs, and actual solutions.
  "sta-regression-inference":regressionInferenceContent,
  // Complete metric-space foundations with exact quantifiers and counterexamples.
  "ruang-metrik":metricSpacesContent,
  // Complete coordinate geometry: lines, circles, tangency, and focus-directrix parabolas.
  "calc-app-conics-basics":analyticGeometryContent,
  // Dedicated one-variable optimization with endpoint, convexity and differentiability cases.
  "calc-optimization":optimizationContent,
  // Dedicated continuous probability: normalized densities, CDFs, moments and conditioning.
  "calc-probability":probabilityDensityContent,
  // Descriptive statistics with complete least-squares and median proofs.
  "sta-central":centralTendencyContent,
  // Scenario-based mathematical modeling with exact risk, identifiability and proofs.
  "or-model-deterministik-stokastik":modelingContent,
  // Authored statistical point estimation: bias, MSE, consistency and worked problems.
  "stm-point-estimator":pointEstimationContent,
  // Fully proved prime factorization and actual original-problem replacements.
  "nt-primes":primeFactorizationContent,
  // Rigorous inclusion–exclusion and eight fully solved non-rubric problems.
  "komb-inclusion-exclusion":inclusionExclusionContent,
  // Validity, countermodels, quantifier side conditions and complete original exercises.
  "md-aturan-inferensi":inferenceRulesContent,
  // Topological preimages, two-way continuity proofs and solved exercises.
  "kontinuitas-topologis":topologicalContinuityContent,
  // Exact differential equations with domain-aware theorems and complete solutions.
  "de-exact":exactDifferentialContent,
};

export function getBookSectionContent(sectionSlug:string):BookLessonContent|null{
  const content=bookSectionContent[sectionSlug];
  if(!content)return null;
  // The authored exact-equations lesson already incorporates and fully solves the
  // original enrichment exercise; avoid duplicating its older short solution.
  if(sectionSlug==="de-exact")return content;
  const enrichment=academicEnrichment[sectionSlug];
  const curatedExercises=curatedSectionExercises[sectionSlug]??[];
  if(!enrichment&&curatedExercises.length===0)return content;
  // Preserve existing definitions and formal results. New, independently authored
  // results are placed before explanatory notes, and are part of chapter numbering.
  const substantive=content.formal.filter(item=>item.kind!=="note");
  const notes=content.formal.filter(item=>item.kind==="note");
  return {
    ...content,
    intro:enrichment?[...content.intro.slice(0,1),...enrichment.intro,...content.intro.slice(1)]:content.intro,
    formal:enrichment?[...substantive,...enrichment.formal,...notes]:content.formal,
    exercises:[...curatedExercises,...(enrichment?.exercises??[]),...content.exercises],
  };
}
