
    export function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-cta">
        <h2 className="footer-cta-title">Ready to get started?</h2>
        <button className="footer-cta-btn">contact us</button>
      </section>

      <section className="footer-bottom">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">myteam</div>
            <nav className="footer-nav">
              <a className="footer-link" href="/">home</a>
              <a className="footer-link" href="/about">about</a>
            </nav>
          </div>

          <div className="footer-address">
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us : 949-833-7432</p>
          </div>

          <div className="footer-meta">
            <div className="footer-socials">
              <span>f</span>
              <span>p</span>
              <span>t</span>
            </div>
            <p className="footer-copy">
              Coffeerights to all 2026. All Rights Reserved
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}

