"use client";

import { useEffect, useMemo, useState } from "react";
import type { MaterialExploration } from "@/data/material-explorations";
import { RichMath } from "@/components/RichMath";
import { useLanguage } from "@/components/LanguageProvider";

export function MaterialExplorationLab({
  explorations,
  storageKey,
}: {
  explorations: MaterialExploration[];
  storageKey: string;
}) {
  const { language } = useLanguage();
  const en = language === "en";
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [hydrated, setHydrated] = useState(false);
  const key = "dmath:exploration:" + storageKey;

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(key);
      if (saved) setChecked(JSON.parse(saved));
    } catch {}
    setHydrated(true);
  }, [key]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(checked));
    } catch {}
  }, [checked, hydrated, key]);

  const totalTasks = useMemo(
    () => explorations.reduce((sum, item) => sum + item.tasks.length, 0),
    [explorations]
  );
  const doneTasks = Object.values(checked).filter(Boolean).length;

  return (
    <section className="exploration-lab book-section" id="eksplorasi">
      <div className="section-number">12</div>
      <div className="exploration-head">
        <div>
          <span className="eyebrow">{en ? "Exploration Project" : "Proyek Eksplorasi"}</span>
          <h2>{en ? "Explore the idea, do not only read it." : "Eksplorasi idenya, jangan hanya dibaca."}</h2>
          <p>{en
            ? "Complete the investigation tasks and use the expected outcome only after you have formed your own explanation."
            : "Kerjakan langkah eksplorasi dan buka hasil yang diharapkan setelah kamu mencoba membangun penjelasan sendiri."}</p>
        </div>
        <div className="exploration-progress">
          <strong>{doneTasks}/{totalTasks}</strong>
          <span>{en ? "tasks done" : "tugas selesai"}</span>
        </div>
      </div>

      <div className="exploration-list">
        {explorations.map((item, explorationIndex) => (
          <article className="exploration-card" key={explorationIndex}>
            <div className="exploration-card-head">
              <span>{String(explorationIndex + 1).padStart(2, "0")}</span>
              <div>
                <h3>{en ? item.title.en : item.title.id}</h3>
                <p><RichMath>{en ? item.goal.en : item.goal.id}</RichMath></p>
              </div>
            </div>

            <div className="exploration-tasks">
              {item.tasks.map((task, taskIndex) => {
                const taskKey = explorationIndex + ":" + taskIndex;
                return (
                  <label className={"exploration-task" + (checked[taskKey] ? " done" : "")} key={taskKey}>
                    <input
                      type="checkbox"
                      checked={Boolean(checked[taskKey])}
                      onChange={(event) => setChecked((prev) => ({ ...prev, [taskKey]: event.target.checked }))}
                    />
                    <span className="exploration-check">{checked[taskKey] ? "✓" : taskIndex + 1}</span>
                    <span><RichMath>{en ? task.en : task.id}</RichMath></span>
                  </label>
                );
              })}
            </div>

            <details className="exploration-reveal">
              <summary>{en ? "Expected mathematical insight" : "Hasil pemahaman yang diharapkan"}</summary>
              <p><RichMath>{en ? item.expected.en : item.expected.id}</RichMath></p>
            </details>

            <div className="exploration-extension">
              <strong>{en ? "Extension challenge" : "Tantangan lanjutan"}</strong>
              <p><RichMath>{en ? item.extension.en : item.extension.id}</RichMath></p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
