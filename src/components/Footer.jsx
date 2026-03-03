import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glass">
        <div className="footer__content">
          <div className="footer__left">
            <h2>Artem Khloptsev</h2>
            <p>Frontend Developer • Software Engineering Student</p>
            <span>tema324756@gmail.com</span>
          </div>

          <div className="footer__socials">
            <a
              href="https://github.com/danserot"
              target="_blank"
              rel="noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 .1 2 .7 2.5 1.1.1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0C17.9 3 19 3.3 19 3.3c.6 1.5.2 2.7.1 3 .8.9 1.2 2 1.2 3.3 0 4.7-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/artem-khloptsev-a37533384/"
              target="_blank"
              rel="noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.9 3.86 6 2.5 6S0 4.9 0 3.5 1.12 1 2.5 1 4.98 2.1 4.98 3.5zM.2 8h4.6v14H.2V8zm7.4 0h4.4v2h.1c.6-1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.7V22h-4.6v-6.4c0-1.5 0-3.5-2.1-3.5-2.1 0-2.4 1.6-2.4 3.3V22H7.6V8z" />
              </svg>
            </a>

            <a
              href="https://t.me/@ArtemKhloptsev"
              target="_blank"
              rel="noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M9.04 16.57 8.9 20.4c.5 0 .7-.2.9-.5l2.2-2.1 4.6 3.3c.8.4 1.3.2 1.5-.7l2.7-12.7c.3-1.1-.4-1.6-1.3-1.3L1.5 9.4C.4 9.8.4 10.4 1.3 10.7l4.6 1.4 10.7-6.8c.5-.3 1-.1.6.2" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} Artem Khloptsev
      </div>
    </footer>
  );
}
