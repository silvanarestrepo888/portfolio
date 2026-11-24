import { CONTACT_EMAIL, LINKEDIN_URL, VOICE_URL } from '@/data/content';

/** Closing line (change #18): a direct invitation and the address, no form. */
export function Footer() {
  return (
    <footer id="contact" className="ea-section ea-surface-noir ea-on-dark ea-foot" aria-labelledby="contact-heading">
      <div className="ea-container ea-grid">
        <div className="ea-foot__main">
          <h2 id="contact-heading" className="ea-t-display ea-foot__statement">
            Building something that needs to be felt?
            <br />
            Let&rsquo;s talk.
          </h2>
          <a className="ea-t-title-1 ea-foot__email" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <a className="ea-t-title-2 ea-t-italic ea-foot__voice" href={VOICE_URL} target="_blank" rel="noopener noreferrer">
            My design voice <span aria-hidden="true">↗</span>
          </a>
          <ul className="ea-foot__links">
            <li>
              <a className="ea-t-label ea-foot__link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
          <p className="ea-t-label ea-foot__credit">© 2026 Silvana Restrepo</p>
        </div>
      </div>
    </footer>
  );
}
