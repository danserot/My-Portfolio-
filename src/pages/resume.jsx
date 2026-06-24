import CursorParticles from "../components/CursorParticles";
import Footer from "../components/Footer";
import Header from "../components/header";
import { useLanguage } from "../languages";
import "../styles/resume.css";

const RESUME_PATH = "/Artem%20Khloptsev%20CV.pdf";
const RESUME_VIEW_PATH = `${RESUME_PATH}#view=FitH&toolbar=1&navpanes=0`;

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 5h5v5m0-5-9 9M19 13v6H5V5h6" />
    </svg>
  );
}

export default function Resume() {
  const { t } = useLanguage();
  const resume = t.resume;

  return (
    <div className="resume-page">
      <Header />

      <main className="resume">
        <header className="resume__header">
          <div>
            <h1>{resume.title}</h1>
            <p>{resume.subtitle}</p>
          </div>

          <div className="resume__actions">
            <a
              className="resume__button resume__button--primary"
              href={RESUME_PATH}
              download="Artem Khloptsev CV.pdf">
              <DownloadIcon />
              {resume.downloadAction}
            </a>
            <a
              className="resume__button resume__button--secondary"
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer">
              <ExternalLinkIcon />
              {resume.openAction}
            </a>
          </div>
        </header>

        <section className="resume__viewer" aria-label={resume.viewerTitle}>
          <object
            data={RESUME_VIEW_PATH}
            type="application/pdf"
            title={resume.viewerTitle}>
            <div className="resume__fallback">
              <p>{resume.fallback}</p>
              <a href={RESUME_PATH} target="_blank" rel="noreferrer">
                {resume.openAction}
              </a>
            </div>
          </object>
        </section>
      </main>

      <Footer />
      <CursorParticles />
    </div>
  );
}
