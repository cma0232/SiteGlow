const services = ["Up to 3 existing pages", "Mobile responsive", "One revision round", "Production-ready build"];

const faqs = [
  ["Is this a full redesign?", "It’s a focused visual refresh. We keep your existing content and basic functionality, then dramatically improve the presentation."],
  ["What if my site has custom features?", "We’ll check before starting. Stores, logins, custom booking, databases, and complex integrations need a separate quote."],
  ["Do I pay before seeing anything?", "No. First, you get a limited homepage concept. If you like the direction, the $399 project begins."],
  ["Who owns the finished website?", "You do. You receive the production-ready source and build, and we can help with a straightforward launch."],
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="SiteGlow home"><span className="brand-mark">S</span>SiteGlow</a>
        <nav aria-label="Primary navigation">
          <a href="#how">How it works</a>
          <a href="#included">What’s included</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button button-small" href="mailto:hello@siteglow.studio?subject=Free website refresh concept">Get a free concept</a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Make your business shine online.</div>
          <h1>Your business grew up.<br /><em>Your website can too.</em></h1>
          <p className="lead">We turn dated small-business websites into sharp, mobile-friendly sites for <strong>$399 flat</strong>—without changing what already works.</p>
          <div className="hero-actions">
            <a className="button" href="mailto:hello@siteglow.studio?subject=Free website refresh concept">See your site refreshed <span>↗</span></a>
            <a className="text-link" href="#included">See what $399 includes <span>↓</span></a>
          </div>
          <div className="proof-line">
            <div><strong>3</strong><span>pages refreshed</span></div>
            <div><strong>1</strong><span>revision included</span></div>
            <div><strong>14</strong><span>day bug warranty</span></div>
          </div>
        </div>

        <div className="transformation" aria-label="Example of a dated website transformed into a modern website">
          <div className="before site-card">
            <div className="browser-bar"><i /><i /><i /><span>BEFORE</span></div>
            <div className="old-logo">JOHNSON &amp; SONS</div>
            <div className="old-nav">HOME&nbsp;&nbsp; SERVICES&nbsp;&nbsp; ABOUT&nbsp;&nbsp; CONTACT</div>
            <div className="old-hero"><b>Quality Work Since 1987</b><small>Call us today for all your home repair needs!</small><button>CLICK HERE</button></div>
            <div className="old-columns"><span /><span /><span /></div>
          </div>
          <div className="after site-card">
            <div className="browser-bar"><i /><i /><i /><span>AFTER</span></div>
            <div className="new-nav"><b>JOHNSON<span>+</span>SONS</b><small>Services&nbsp;&nbsp;&nbsp; Our work&nbsp;&nbsp;&nbsp; About</small></div>
            <div className="new-hero"><span>TRUSTED SINCE 1987</span><b>Home repairs,<br />done right.</b><small>Dependable craftsmanship for the place that matters most.</small><button>Get a free estimate →</button></div>
            <div className="new-stats"><span><b>37+</b>Years local</span><span><b>4.9</b>Google rating</span><span><b>800+</b>Jobs completed</span></div>
          </div>
          <div className="lift-badge">GLOW UP <span>✦</span></div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="shell"><span>Built for local businesses that deserve better online</span><b>HANDYMEN</b><b>LANDSCAPERS</b><b>PAINTERS</b><b>PLUMBERS</b><b>ROOFERS</b></div>
      </section>

      <section className="how shell" id="how">
        <div className="section-heading">
          <p className="kicker">THE NO-DRAMA REDESIGN</p>
          <h2>See the lift <em>before</em><br />you spend a dollar.</h2>
          <p>No long discovery process. No vague estimate. No $5,000 leap of faith.</p>
        </div>
        <div className="steps">
          <article><span>01</span><div className="step-icon">⌁</div><h3>Send your current site</h3><p>We check that your site is a good fit: simple, functional, and ready for a visual upgrade.</p></article>
          <article><span>02</span><div className="step-icon">✦</div><h3>Get a free concept</h3><p>We create enough of the homepage for you to clearly see the new direction.</p></article>
          <article><span>03</span><div className="step-icon">↗</div><h3>Love it? We finish it.</h3><p>Pay $399, get up to three refreshed pages, one revision, and launch-ready files.</p></article>
        </div>
      </section>

      <section className="included" id="included">
        <div className="shell included-grid">
          <div className="price-card">
            <p>THE COMPLETE REFRESH</p>
            <div className="price"><sup>$</sup>399</div>
            <span>one flat price</span>
            <a className="button light" href="mailto:hello@siteglow.studio?subject=Free website refresh concept">Get your free concept <span>↗</span></a>
            <small>No payment until you approve the direction.</small>
          </div>
          <div className="included-copy">
            <p className="kicker">WHAT YOU GET</p>
            <h2>Everything needed to look<br /><em>credible, clear, and current.</em></h2>
            <div className="feature-grid">
              {services.map((item) => <div key={item}><i>✓</i>{item}</div>)}
              <div><i>✓</i>Modern visual design</div><div><i>✓</i>Clear call-to-action hierarchy</div>
              <div><i>✓</i>Existing content reused</div><div><i>✓</i>Basic accessibility cleanup</div>
              <div><i>✓</i>Simple launch assistance</div><div><i>✓</i>14-day bug warranty</div>
            </div>
            <div className="boundary"><b>Same business. Same content. Same basic functionality.</b><span>This isn’t a rebrand or custom software build. New features get a new quote—so the refresh stays fast and affordable.</span></div>
          </div>
        </div>
      </section>

      <section className="fit shell">
        <div><p className="kicker">BUILT FOR THE OVERLOOKED</p><h2>Your work already earns trust.<br /><em>Your website should too.</em></h2></div>
        <div className="quote"><span>“</span><p>I know my website looks old.<br />I just don’t want a <b>$5,000 redesign.</b></p><small>— Pretty much every great local business owner</small></div>
      </section>

      <section className="faq shell" id="faq">
        <div><p className="kicker">STRAIGHT ANSWERS</p><h2>Good questions.<br /><em>Simple answers.</em></h2><p className="faq-note">Still unsure if your site fits? Send it over. A quick “not a fit” costs nothing.</p></div>
        <div className="faq-list">{faqs.map(([q,a], index) => <details key={q} open={index === 0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <div><p className="kicker">YOUR SITE, ONLY BETTER</p><h2>Ready to see the<br /><em>before → after?</em></h2></div>
          <div><p>Send us your current website. We’ll tell you if it’s a fit and create a free refresh concept.</p><a className="button light" href="mailto:hello@siteglow.studio?subject=Free website refresh concept">Make my site glow <span>↗</span></a></div>
        </div>
      </section>

      <footer className="shell"><a className="brand" href="#top"><span className="brand-mark">S</span>SiteGlow</a><p>Better websites for good local businesses.</p><span>© 2026 SiteGlow Studio</span></footer>
    </main>
  );
}
