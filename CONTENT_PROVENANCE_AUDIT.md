# DMath Learning — Content Provenance Audit

Audit date: 2026-10-01

This document records the current provenance review of exercise and problem datasets in the DMath Learning repository. It is an editorial risk-control document, not a legal opinion.

## Status vocabulary

- **dmath-original** — the item was created specifically for DMath Learning and is not based on distinctive wording from an identified third-party source.
- **user-provided-adapted** — the starting problem was supplied by the user and the DMath version was rewritten, reparameterized, or restructured.
- **public-domain** — public-domain status has been verified.
- **licensed** — a compatible licence or explicit permission has been verified.
- **competition-reference** — a named competition problem whose permitted use and attribution have been reviewed.
- **review-required** — provenance is not sufficiently documented to claim one of the statuses above.

When provenance is uncertain, **review-required is the default**.

## Repository scan

### Basis & Dimension problem bank

Files:
- `data/basis-problems-a.ts`
- `data/basis-problems-b.ts`
- `data/basis-problems-c.ts`
- `data/basis-problems-d.ts`

Current size: 100 problems.

Automated repository scan found no explicit source, reference, named-competition, or provenance fields in these four files. This is useful evidence that the public data do not claim a third-party source, but absence of a source label is **not proof of originality**.

**Current audit status: review-required.**

Action:
- Retain the problems while provenance is reviewed.
- Do not add claims such as “from Putnam”, “from ON-MIPA”, or a textbook exercise number without verification.
- When a problem is confirmed as independently created, add `provenance: "dmath-original"`.

### General material practice bank

Files:
- `data/material-practice.ts`
- `data/material-practice-extra.ts`

The inspected problems use short, generic mathematical prompts and do not contain explicit third-party source attributions. Strings such as “ON-MIPA” in the extra file identify a learning category, not a claimed problem source.

**Current audit status: review-required by default; low textual-risk items may be upgraded to dmath-original after editorial confirmation.**

Action:
- Use the newly supported `provenance` and `sourceNote` fields.
- Avoid assuming that a mathematically standard prompt is original merely because no source is stored.

### Olympiad hubs

File:
- `data/olympiad-hubs.ts`

The current scan found the term ON-MIPA as a pathway/title label. It did not find IMO, Putnam, AIME, AMC, or Shortlist attribution in the inspected dataset.

**Current audit status: review-required unless an item is explicitly known to have been created for DMath Learning.**

Action:
- Named competition attribution requires verification before publication.
- Competition year/problem number must not be guessed.
- Original DMath olympiad problems should be marked `dmath-original`.

### Integral Riemann worked exercises

File:
- `data/integral-riemann-worked-exercises.ts`

These exercises were developed in the user-provided exercise workflow and several were modified or reparameterized during preparation for DMath Learning. The repository itself does not currently store a source citation for each original prompt.

**Current audit status: user-provided-adapted at dataset level, with source verification still required for any item intended to be represented as fully original.**

Action:
- Do not attribute these exercises to a textbook, university exam, or competition unless the underlying source is known.
- Continue modifying parameters, structure, wording, and solution presentation where appropriate.
- A future per-item provenance pass should distinguish independently created items from adaptations.

### Digital-book lesson exercises

Files include:
- `data/real-analysis-book-content-*.ts`
- `data/complex-analysis-book-content-*.ts`
- `data/additional-book-content.ts`
- `data/expanded-book-content.ts`
- `data/numerical-analysis-content.ts`

The curriculum has been decoupled from one-to-one source chapter numbering. References are used for terminology and coverage checks rather than as a page-by-page blueprint.

**Current audit status:**
- Existing generated lesson exercises: review-required unless prior authorship is documented.
- New Numerical Analysis lesson exercises: dmath-original.
- Textbook exercise sets must not be imported verbatim.

### Numerical Analysis

Reference:
Richard L. Burden and J. Douglas Faires, *Numerical Analysis*, 9th ed.

The DMath Numerical Analysis curriculum was built as nine independent DMath learning units. The reference is used for coverage verification only. The textbook's exercise wording, examples, figures, tables, pseudocode, chapter numbering, and page structure are not to be reproduced.

**Current audit status: dmath-original for newly generated DMath examples/exercises; reference-only for topic coverage.**

## Schema changes completed

The repository now supports optional provenance metadata for:
- `BookExercise`
- general problem-bank `Problem`
- `MaterialPracticeProblem`
- `OlympiadProblem`

Supported statuses are defined in `data/book-content-types.ts`.

## Publication rule

No item may be presented as an official competition problem, a textbook exercise, or a fully original DMath problem unless its provenance supports that claim.

For monetization-readiness:
1. `review-required` items should be audited before being promoted as premium/original content.
2. Third-party figures, scans, tables, and screenshots must not be copied without permission or compatible licensing.
3. References remain “References and Further Reading”.
4. The public DMath Curriculum must remain independent from the table of contents of any single source.
5. If a source prohibits commercial use, DMath must use only the underlying mathematical ideas and independently develop the expression, examples, exercises, proofs, visuals, and curriculum structure.


### Six new academic fields

Added on 2026-10-01 as independent DMath Curriculum subjects:
- Operations Research
- Applied Statistics & Data Analysis
- Mathematical Statistics
- Discrete Mathematics
- Stochastic Calculus
- Measure Theory & Probability

The uploaded books are used as coverage and terminology references only. Their exercise sets, case studies, figures, tables, screenshots, distinctive examples, and source chapter numbering are not copied into DMath Learning. Newly generated DMath examples and exercises for these subjects use dmath-original provenance.
