export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="wrap">
          <a className="brand" href="#top"><span>&#10022;</span>SiteGlow</a>
          <div className="nav-links">
            <a href="#work">Work</a><a href="#how">How it works</a><a href="#includes">What you get</a><a href="#pricing">Pricing</a>
          </div>
          <a className="btn" href="#pricing">Get a free preview</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="wrap">
          <span className="pill"><i></i> Taking 4 new projects this month</span>
          <h1>Your work is better<br />than <em>your website.</em></h1>
          <p>SiteGlow rebuilds the homepage of local service businesses &mdash; one page, one flat price,
            and nothing else on your site is touched.</p>
          <div className="hero-actions">
            <a className="btn big lime" href="#pricing">See a free preview of your site</a>
            <a className="btn big ghost" href="#work">See a before &amp; after</a>
          </div>
          <p className="hero-note">No contract &middot; You see the rebuild before you pay a cent</p>
        </div>
      </header>

      <section className="sec" id="work">
        <div className="wrap">
          <div className="case-top">
            <div className="sec-head" style={{marginBottom: "0"}}>
              <p className="eyebrow">CASE STUDY / FDE INTERVIEW HANDBOOK</p>
              <h2>Same content.<br /><em>Twice the visitors.</em></h2>
              <p>The business was never the problem &mdash; the first impression was. We rebuilt one page and
                left every URL, link, and word of copy intact.</p>
            </div>
            <div className="stat-card">
              <b>+107%</b>
              <small>VISITORS</small>
              <i>after the refresh went live</i>
            </div>
          </div>

          <div className="compare">
            <article className="shot before">
              <div className="shot-label"><b>BEFORE</b><small>The homepage we found</small></div>
              <div className="chrome"><i></i><i></i><i></i><span>fdehandbook.com</span></div>
              <figure><img src="/sg-1.png" alt="The previous homepage: dated template layout with crowded chrome and competing buttons" /></figure>
              <ul><li>Generic template look &mdash; reads as a 2015 contractor site</li><li>Heavy chrome and stock badges crowding the real message</li><li>Primary action competes with four other buttons</li><li>Nothing in the first screen tells you why to trust it</li></ul>
            </article>
            <article className="shot after">
              <div className="shot-label"><b>AFTER</b><small>Rebuilt by SiteGlow</small></div>
              <div className="chrome"><i></i><i></i><i></i><span>fdehandbook.com</span></div>
              <figure><img src="/sg-2.png" alt="The rebuilt homepage: single headline, one primary action, live proof above the fold" /></figure>
              <ul><li>One clear headline and a single primary action</li><li>Live proof &mdash; open roles, last-updated date &mdash; above the fold</li><li>Persistent sidebar so every section is one click away</li><li>Fast, quiet layout that reads the same on a phone</li></ul>
            </article>
          </div>

          <div className="results"><div className="up"><small>VISITORS</small><b>+107%</b><p>Measured against the equivalent period before launch</p></div><div className=""><small>PAGES REBUILT</small><b>1</b><p>Homepage only &mdash; the rest of the site untouched</p></div><div className=""><small>CONTENT LOST</small><b>None</b><p>Every service, link, and contact detail carried across</p></div><div className=""><small>URLS CHANGED</small><b>0</b><p>Existing indexed paths preserved, so rankings hold</p></div></div>
        </div>
      </section>

      <section className="sec tint" id="how">
        <div className="wrap">
          <div className="sec-head center">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>Three steps. <em>One week.</em></h2>
            <p>You never pay for something you haven't seen.</p>
          </div>
          <div className="steps"><article className="step"><span>1</span><h3>We find you</h3><p>We look for local businesses with strong reviews and a homepage that undersells them. No cold list, no spam &mdash; you get contacted only if we think we can help.</p></article><article className="step"><span>2</span><h3>You see it first</h3><p>We rebuild your homepage and send you a live preview link. Nothing is published, nothing is charged, and you can say no.</p></article><article className="step"><span>3</span><h3>It goes live</h3><p>Approve it and we ship. Same domain, same URLs, same content &mdash; your existing search traffic lands exactly where it did before.</p></article></div>
        </div>
      </section>

      <section className="sec" id="includes">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">WHAT YOU GET</p>
            <h2>Everything that matters.<br /><em>Nothing that doesn't.</em></h2>
          </div>
          <div className="includes"><div><i>&#10003;</i><span>A rebuilt homepage, designed around your best work</span></div><div><i>&#10003;</i><span>Mobile layout that actually works on a phone</span></div><div><i>&#10003;</i><span>Every existing page, link, and URL preserved</span></div><div><i>&#10003;</i><span>Your phone, email, and quote form wired up</span></div><div><i>&#10003;</i><span>Fast load times &mdash; no plugin bloat</span></div><div><i>&#10003;</i><span>One round of revisions after the preview</span></div></div>
        </div>
      </section>

      <section className="sec tint" id="pricing">
        <div className="wrap">
          <div className="price-grid">
            <div className="price-card">
              <span className="tag">HOMEPAGE REFRESH</span>
              <div className="amount">$399<small>flat, one time</small></div>
              <ul>
                <li>Full homepage rebuild</li>
                <li>Mobile layout included</li>
                <li>All existing pages and URLs preserved</li>
                <li>One revision round after preview</li>
                <li>Live in about a week</li>
              </ul>
              <a className="btn lime" href="mailto:hello@siteglow.co?subject=Free%20homepage%20preview">Request a free preview &rarr;</a>
            </div>
            <div className="price-side">
              <h3>No deposit. No retainer.<br />No subscription.</h3>
              <p>We build the preview first. If you don't like it, you walk away and it costs you nothing.
                If you do, it's $399 and your site is live within the week.</p>
              <p>Hosting, domain, and email stay exactly where they are &mdash; we don't move anything or lock you in.</p>
              <div className="quote">
                <p>&ldquo;Nothing about the business changed. The same people found the same page &mdash; they just stopped leaving.&rdquo;</p>
                <small>SITEGLOW</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <h2>Want to see <em>your</em> homepage rebuilt?</h2>
          <p>Send us your URL. We'll send back a live preview &mdash; free, no obligation.</p>
          <a className="btn big lime" href="mailto:hello@siteglow.co?subject=Free%20homepage%20preview">Request a free preview</a>
          <a className="btn big ghost" href="#work">See the before &amp; after again</a>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <span>&#10022; SiteGlow &middot; Homepage refreshes for local service businesses</span>
          <span><a href="mailto:hello@siteglow.co">hello@siteglow.co</a></span>
        </div>
      </footer>
    </>
  );
}
