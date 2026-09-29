import Link from "next/link";
import { DeepMaterial } from "@/data/deep-materials";
import { MathVisualization } from "@/components/MathVisualizations";
import { RichMath } from "@/components/RichMath";

function RichParagraph({ text }: { text: string }) {
  return <p><RichMath>{text}</RichMath></p>;
}

export function DeepMaterialPage({ material }: { material: DeepMaterial }) {
  return (
    <>
      <section className="chapter-hero">
        <div className="container narrow">
          <div className="breadcrumb">
            <Link href="/materi">Materi</Link>
            <span>/</span>
            <span>{material.level}</span>
            <span>/</span>
            <strong>{material.title}</strong>
          </div>
          <span className="eyebrow">{material.track} · {material.subject}</span>
          <h1>{material.title}</h1>
          <p>{material.summary}</p>
          <div className="chapter-meta">
            <span>{material.level}</span>
            <span>{material.subject}</span>
            <span>{material.difficulty}</span>
            <span>{material.readingTime}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article-layout">
          <aside className="toc material-toc">
            <strong>Isi Materi</strong>
            <a href="#overview">Overview</a>
            <a href="#prasyarat">Prasyarat</a>
            <a href="#tujuan">Tujuan Pembelajaran</a>
            <a href="#peta">Peta Konsep</a>
            <a href="#motivasi">Motivasi & Intuisi</a>
            <a href="#notasi">Notasi</a>
            <a href="#definisi">Definisi Formal</a>
            <a href="#teorema">Teorema & Bukti</a>
            <a href="#contoh">Worked Examples</a>
            <a href="#kesalahan">Kesalahan Umum</a>
            <a href="#koneksi">Koneksi</a>
            <a href="#referensi">Referensi</a>
          </aside>

          <article className="article deep-article">
            <section id="overview">
              <span className="eyebrow">Overview</span>
              <h2>Gambaran besar materi</h2>
              <RichParagraph text={material.summary} />
              <MathVisualization kind={material.visualization} />
            </section>

            <section id="prasyarat" className="content-box prerequisite-box">
              <strong>Prasyarat</strong>
              <ul>
                {material.prerequisites.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section id="tujuan">
              <span className="eyebrow">Tujuan Pembelajaran</span>
              <h2>Setelah mempelajari bab ini</h2>
              <ul className="check-list">
                {material.objectives.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section id="peta">
              <span className="eyebrow">Peta Konsep</span>
              <h2>Alur konsep</h2>
              <div className="concept-map">
                {material.conceptMap.map((item, index) => (
                  <div className="concept-node" key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                    {index < material.conceptMap.length - 1 && <i aria-hidden="true">→</i>}
                  </div>
                ))}
              </div>
            </section>

            <section id="motivasi">
              <span className="eyebrow">Motivasi & Intuisi</span>
              <h2>Mengapa konsep ini dibutuhkan?</h2>
              {material.motivation.map((p) => <RichParagraph key={p} text={p} />)}
              <div className="intuition-grid">
                {material.intuition.map((p, index) => (
                  <div className="intuition-card" key={p}>
                    <span className="card-index">Intuisi {index + 1}</span>
                    <RichParagraph text={p} />
                  </div>
                ))}
              </div>
            </section>

            <section id="notasi">
              <span className="eyebrow">Notasi</span>
              <h2>Simbol yang digunakan</h2>
              <div className="notation-table">
                {material.notation.map((item) => (
                  <div className="notation-row" key={item.symbol}>
                    <div className="notation-symbol"><RichMath>{item.symbol}</RichMath></div>
                    <div className="notation-meaning"><RichMath>{item.meaning}</RichMath></div>
                  </div>
                ))}
              </div>
            </section>

            <section id="definisi">
              <span className="eyebrow">Definisi Formal</span>
              <h2>Bahasa matematis yang presisi</h2>
              <div className="stacked-boxes">
                {material.definitions.map((definition, index) => (
                  <div className="definition-box numbered-box" key={definition.title}>
                    <div className="box-kicker">Definisi {index + 1}</div>
                    <strong>{definition.title}</strong>
                    <RichParagraph text={definition.body} />
                  </div>
                ))}
              </div>
            </section>

            <section id="teorema">
              <span className="eyebrow">Teorema & Bukti</span>
              <h2>Hasil utama, lengkap dengan pembuktian</h2>
              <div className="theorem-stack">
                {material.theorems.map((theorem, index) => (
                  <div className="theorem-suite" key={theorem.title}>
                    <div className="theorem-box">
                      <div className="box-kicker">Teorema {index + 1}</div>
                      <strong>{theorem.title}</strong>
                      <RichParagraph text={theorem.statement} />
                    </div>
                    <div className="proof-box proof-detailed">
                      <div className="box-kicker">Bukti</div>
                      {theorem.proof.map((step, stepIndex) => (
                        <div className="proof-step" key={step}>
                          <span>{stepIndex + 1}</span>
                          <RichParagraph text={step} />
                        </div>
                      ))}
                      <p className="proof-end">■</p>
                    </div>
                    <div className="why-box">
                      <strong>Mengapa teorema ini penting?</strong>
                      <RichParagraph text={theorem.why} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="contoh">
              <span className="eyebrow">Worked Examples</span>
              <h2>Dari konsep menuju penyelesaian</h2>
              <div className="example-stack">
                {material.examples.map((example, index) => (
                  <div className="example-suite" key={example.title}>
                    <div className="example-box">
                      <div className="box-kicker">Contoh {index + 1}</div>
                      <strong>{example.title}</strong>
                      <RichParagraph text={example.problem} />
                    </div>
                    <div className="solution-box content-box">
                      <strong>Pembahasan</strong>
                      {example.solution.map((step, stepIndex) => (
                        <div className="solution-step" key={step}>
                          <span>{stepIndex + 1}</span>
                          <RichParagraph text={step} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="kesalahan" className="content-box warning-box">
              <strong>Kesalahan Umum</strong>
              <ul>
                {material.mistakes.map((item) => <li key={item}><RichMath>{item}</RichMath></li>)}
              </ul>
            </section>

            <section id="koneksi">
              <span className="eyebrow">Keterhubungan Konsep</span>
              <h2>Materi terkait</h2>
              <div className="subjects">
                {material.related.map((item) => <span key={item}>{item}</span>)}
              </div>
            </section>

            <section id="referensi">
              <span className="eyebrow">Referensi</span>
              <h2>Bacaan lanjutan</h2>
              <ol className="reference-list">
                {material.references.map((reference) => <li key={reference}>{reference}</li>)}
              </ol>
            </section>

            <section className="next-learning-block">
              <div>
                <span className="eyebrow">Lanjutkan</span>
                <h2>Uji pemahaman, jangan berhenti di membaca.</h2>
                <p>Latihan dan bank soal untuk materi ini akan terus ditambah secara terkurasi. Bab yang sudah memiliki bank soal lengkap ditautkan langsung dari halaman Bank Soal.</p>
              </div>
              <div className="actions">
                <Link href="/bank-soal" className="btn primary">Buka Bank Soal</Link>
                <Link href="/materi" className="btn secondary">Materi Lain</Link>
              </div>
            </section>
          </article>
        </div>
      </section>
    </>
  );
}
