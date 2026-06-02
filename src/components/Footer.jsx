import "../styles/footer.css";
import { useLanguage } from "../languages";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer__glass">
        <div className="footer__content">
          <div className="footer__left">
            <h2>Artem Khloptsev</h2>
            <p>{t.footer.role}</p>
            <span>tema324756@gmail.com</span>
          </div>

          <div className="footer__socials">
            <a
              href="https://github.com/danserot"
              target="_blank"
              rel="noreferrer">
              <img src="/icons/github.svg" alt="GitHub" />
            </a>

            <a
              href="https://www.linkedin.com/in/artem-khloptsev-a37533384/"
              target="_blank"
              rel="noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" />
            </a>

            <a
              href="https://t.me/@ArtemKhloptsev"
              target="_blank"
              rel="noreferrer">
              <img src="/icons/telegram.svg" alt="Telegram" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} Artem Khloptsev. {t.footer.rights}
      </div>
    </footer>
  );
}
