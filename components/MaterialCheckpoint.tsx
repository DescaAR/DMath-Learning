"use client";

import { useState } from "react";
import type { MaterialQuiz } from "@/data/material-supplements";
import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";

export function MaterialCheckpoint({ quiz }: { quiz: MaterialQuiz[] }) {
  const { language } = useLanguage();
  const en = language === "en";
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const score = quiz.reduce((total, item, index) => total + (answers[index] === item.answer ? 1 : 0), 0);
  const answered = Object.keys(answers).length;

  return (
    <section className="material-checkpoint" id="checkpoint">
      <div className="checkpoint-head">
        <div>
          <span className="eyebrow">{en ? "Knowledge Check" : "Cek Pemahaman"}</span>
          <h2>{en ? "Test the core ideas before moving on." : "Uji ide utama sebelum lanjut."}</h2>
          <p>{en ? "Choose an answer. Feedback appears immediately." : "Pilih jawaban. Umpan balik muncul langsung."}</p>
        </div>
        <div className="checkpoint-score">
          <strong>{score}/{quiz.length}</strong>
          <span>{en ? "correct" : "benar"}</span>
        </div>
      </div>

      <div className="checkpoint-list">
        {quiz.map((item, index) => {
          const selected = answers[index];
          const hasAnswered = selected !== undefined;
          return (
            <article className="checkpoint-card" key={index}>
              <div className="checkpoint-number">{String(index + 1).padStart(2, "0")}</div>
              <h3><RichMath>{en ? item.question.en : item.question.id}</RichMath></h3>
              <div className="checkpoint-options">
                {item.options.map((option, optionIndex) => {
                  const isSelected = selected === optionIndex;
                  const isCorrect = optionIndex === item.answer;
                  const stateClass = hasAnswered
                    ? isCorrect
                      ? " correct"
                      : isSelected
                        ? " wrong"
                        : ""
                    : isSelected
                      ? " selected"
                      : "";

                  return (
                    <button
                      key={optionIndex}
                      className={"checkpoint-option" + stateClass}
                      type="button"
                      onClick={() => setAnswers((prev) => ({ ...prev, [index]: optionIndex }))}
                    >
                      <span>{String.fromCharCode(65 + optionIndex)}</span>
                      <RichMath>{en ? option.en : option.id}</RichMath>
                    </button>
                  );
                })}
              </div>

              {hasAnswered && (
                <div className={"checkpoint-feedback " + (selected === item.answer ? "success" : "error")}>
                  <strong>{selected === item.answer ? (en ? "Correct." : "Benar.") : (en ? "Not quite." : "Belum tepat.")}</strong>
                  <p><RichMath>{en ? item.explanation.en : item.explanation.id}</RichMath></p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {answered === quiz.length && (
        <div className="checkpoint-complete">
          <strong>
            {score === quiz.length
              ? (en ? "Excellent — all core checks passed." : "Bagus — semua cek konsep berhasil.")
              : (en ? "Review the explanations, then try the questions again." : "Baca kembali penjelasannya, lalu coba jawab ulang.")}
          </strong>
          <button type="button" onClick={() => setAnswers({})}>{en ? "Try Again" : "Ulangi"}</button>
        </div>
      )}
    </section>
  );
}
