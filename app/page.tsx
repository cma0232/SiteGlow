
/* ── Change this one line to update the contact address everywhere ── */
const CONTACT_EMAIL = "hello@siteglow.co";

const MAILTO =
  `mailto:${CONTACT_EMAIL}` +
  `?subject=${encodeURIComponent("Free website concept")}` +
  `&body=${encodeURIComponent("Hi,\n\nHere's my website: \n\nWhat I don't like about it: \n\nThanks!")}`;

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap nav">
          <a className="logo" href="#top"><span className="orb"></span> SiteGlow</a>
          <nav className="navlinks">
            <a href="#what">What you get</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="btn btn-gold" href="#start">Get a free concept</a>
        </div>
      </header>

      {/* HERO */}
      <div className="hero" id="top">
        <div className="wrap">
          <div className="pill"><span className="dotlive"></span> Taking on new small-business projects this month</div>
          <h1>Your business is better than <span className="serif">your website</span>.</h1>
          <p className="lede">I redesign outdated small-business websites into modern, mobile-friendly sites. Same content, same phone number, same way customers reach you &mdash; it just finally looks like the quality of your work. <b>$399 flat.</b></p>
          <div className="hero-actions">
            <a className="btn btn-gold btn-lg" href="#start">Show me a free concept</a>
            <a className="btn btn-line btn-lg" href="#how">How it works</a>
          </div>
          <p className="microcopy">You see a redesigned version of your own homepage before you pay anything.</p>

          <div className="hero-strip">
            <div className="hs"><div className="t">$399 flat</div><div className="s">No hourly billing, no surprises</div></div>
            <div className="hs"><div className="t">Free concept first</div><div className="s">See it before you decide</div></div>
            <div className="hs"><div className="t">About a week</div><div className="s">Not a three-month project</div></div>
            <div className="hs"><div className="t">You own it</div><div className="s">Your domain, your site, your files</div></div>
          </div>
        </div>
      </div>

      {/* PROBLEM */}
      <section className="problem">
        <div className="wrap">
          <div className="sec-head">
            <div className="kicker">The gap</div>
            <h2>The work is great. The website is from <span className="serif">2012</span>.</h2>
            <p>Most small businesses don't have a bad website. They have an old one &mdash; and a redesign quote that made it easy to keep putting off.</p>
          </div>
          <div className="p3">
            <div className="pcard">
              <div className="q">&ldquo;I know it looks dated, but it works.&rdquo;</div>
              <p>It does work. It also loses you the customer who compared you against three other companies on their phone at 9pm.</p>
            </div>
            <div className="pcard">
              <div className="q">&ldquo;I got quoted $5,000.&rdquo;</div>
              <p>Because agencies quote full rebuilds. You don't need a rebuild. You need the same site to stop looking twelve years old.</p>
            </div>
            <div className="pcard">
              <div className="q">&ldquo;I don't want to redo everything.&rdquo;</div>
              <p>You won't. Your content, your phone number, your booking link and your search rankings all stay exactly where they are.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section id="what">
        <div className="wrap">
          <div className="sec-head">
            <div className="kicker">The offer</div>
            <h2>What <span className="serif">$399</span> gets you</h2>
            <p>One flat price. Up to three of your existing pages, rebuilt to look like a business worth calling.</p>
          </div>
          <div className="two">
            <div className="panel">
              <h3>Included</h3>
              <p className="ph">Everything below is part of the flat $399.</p>
              <div className="list">
                <div className="li"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#12B76A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Up to <b style={{fontWeight: "700"}}>3 existing pages</b> fully redesigned</div>
                <div className="li"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#12B76A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Modern layout, spacing, typography and colour system</div>
                <div className="li"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#12B76A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> A hero section that says what you do in three seconds</div>
                <div className="li"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#12B76A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Services, gallery and reviews presented properly</div>
                <div className="li"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#12B76A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Obvious call / text / quote buttons on every screen</div>
                <div className="li"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#12B76A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Properly responsive on phones &mdash; where most of your traffic is</div>
                <div className="li"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#12B76A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Your existing phone, email, forms and booking links preserved</div>
                <div className="li"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#12B76A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Your existing page titles and URLs kept so search rankings survive</div>
                <div className="li"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#12B76A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> One round of revisions</div>
                <div className="li"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#12B76A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Source files and production build handed to you</div>
                <div className="li"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#12B76A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Launch help, plus a 14-day bug warranty after go-live</div>
              </div>
            </div>

            <div className="panel dim">
              <h3>Not included</h3>
              <p className="ph">This is a visual refresh, not a rebuild. These are separate projects.</p>
              <div className="list">
                <div className="li no"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9AA2B6" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg> Online stores &amp; payments</div>
                <div className="li no"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9AA2B6" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg> Logins, accounts, customer portals</div>
                <div className="li no"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9AA2B6" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg> Custom booking or scheduling systems</div>
                <div className="li no"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9AA2B6" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg> Databases and backends</div>
                <div className="li no"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9AA2B6" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg> Logo design and rebranding</div>
                <div className="li no"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9AA2B6" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg> Writing all-new copy from scratch</div>
                <div className="li no"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9AA2B6" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg> Large SEO campaigns</div>
                <div className="li no"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9AA2B6" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg> Ten new pages of content</div>
                <div className="li no"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9AA2B6" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg> Recovering lost domain or hosting accounts</div>
                <div className="li no"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#9AA2B6" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg> Ongoing maintenance retainers</div>
              </div>
              <div className="rule">If you need something on this list, I'll tell you upfront and quote it separately. <b>A bug is a fix. A change is a quote.</b></div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW */}
      <section id="how" style={{background: "var(--bg-soft)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)"}}>
        <div className="wrap">
          <div className="sec-head">
            <div className="kicker">How it works</div>
            <h2>You see it <span className="serif">before</span> you pay</h2>
            <p>No deposit, no discovery call, no proposal deck. I do the work first and you decide from something real.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="n">1</div>
              <h3>Send me your site</h3>
              <p>One email with your website address. That's the whole intake.</p>
            </div>
            <div className="step hi">
              <div className="n">2</div>
              <h3>I build a free concept</h3>
              <p>Within a couple of days you get a link to your homepage, redesigned with your real content. Free, no strings.</p>
            </div>
            <div className="step">
              <div className="n">3</div>
              <h3>You like it &rarr; $399</h3>
              <p>If it's not for you, say no and keep the link. If it is, it's $399 flat and I finish the agreed pages.</p>
            </div>
            <div className="step">
              <div className="n">4</div>
              <h3>Launch &amp; handoff</h3>
              <p>I help put it live on your existing domain, hand over the files, and fix any launch bugs for 14 days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="price" id="pricing">
        <div className="wrap">
          <div className="sec-head">
            <div className="kicker">Pricing</div>
            <h2>One price. <span className="serif">No meetings about the price.</span></h2>
            <p>Small businesses shouldn't need a procurement process to get a decent-looking website.</p>
          </div>
          <div className="pricecard">
            <span className="tag">Website Refresh</span>
            <div className="amount"><span>$</span>399</div>
            <div className="flat">flat &mdash; up to 3 pages, one revision round</div>
            <div className="pl">
              <div className="li"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#12B76A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Free concept before you commit</div>
              <div className="li"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#12B76A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Nothing due until you've seen it</div>
              <div className="li"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#12B76A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> You keep your domain, hosting and files</div>
              <div className="li"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#12B76A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 14-day post-launch bug warranty</div>
            </div>
            <a className="btn btn-dark btn-lg" style={{width: "100%", marginTop: "30px"}} href="#start">Get my free concept</a>
            <p className="pnote">Hosting, domain renewal and any third-party services are billed by those providers directly &mdash; in your name, on your accounts. I never need your passwords.</p>
          </div>
        </div>
      </section>

      {/* FIT */}
      <section>
        <div className="wrap">
          <div className="sec-head">
            <div className="kicker">Fit</div>
            <h2>Am I the right person for this?</h2>
            <p>I'd rather tell you no in one email than take your money for the wrong project.</p>
          </div>
          <div className="fit-grid">
            <div className="fit good">
              <h3><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#12B76A" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Great fit</h3>
              <div className="list">
                <div className="li">You run a real local service business &mdash; trades, home services, repair, cleaning, care</div>
                <div className="li">Your site is mostly information: who you are, what you do, how to reach you</div>
                <div className="li">Customers contact you by calling, texting, emailing or filling in a form</div>
                <div className="li">Your content is already written &mdash; it just looks bad</div>
                <div className="li">You have good reviews and the website doesn't reflect them</div>
              </div>
            </div>
            <div className="fit bad">
              <h3><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9AA2B6" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg> Not a fit</h3>
              <div className="list">
                <div className="li no">You sell products online and need the store to keep working</div>
                <div className="li no">Customers log in to accounts or a portal</div>
                <div className="li no">You run custom booking, scheduling or payment logic</div>
                <div className="li no">You have hundreds of pages or a complex plugin setup</div>
                <div className="li no">Your website is already good &mdash; then there's nothing here worth $399</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="wrap" style={{maxWidth: "840px"}}>
          <div className="sec-head">
            <div className="kicker">Questions</div>
            <h2>The things people actually ask</h2>
          </div>

          <details open>
            <summary>Why is it only $399?</summary>
            <p>Because the scope is fixed and narrow. I'm not rebuilding your business logic, writing new copy or running a discovery process &mdash; I'm taking content that already exists and making it look current. That's a few hours of focused work with a system I've already built, not a three-month agency engagement.</p>
          </details>
          <details>
            <summary>Do I really pay nothing until I've seen it?</summary>
            <p>Correct. I build a free concept of your homepage using your own content and send you a link. If you don't like it, that's the end of it &mdash; no invoice, no follow-up sequence. Payment only happens after you've decided you want it.</p>
          </details>
          <details>
            <summary>Will I lose my Google ranking?</summary>
            <p>No &mdash; protecting that is part of the job. Your existing URLs, page titles and meta descriptions carry over, your text content stays, and the pages stay crawlable. An ugly site that ranks well is worth more than a pretty one that doesn't, and I won't trade one for the other.</p>
          </details>
          <details>
            <summary>Will my phone number, form and booking link still work?</summary>
            <p>Yes. That's the core promise: same business, same content, same basic functionality &mdash; a much better-looking website. Before launch I go through every existing link, button and form on the old site and confirm it still works on the new one.</p>
          </details>
          <details>
            <summary>Do I have to move hosting?</summary>
            <p>Usually not. If your current host can serve the new site, we keep it. If it can't, I'll show you a simple option &mdash; set up in your name, on your account, so you're never locked in to me. You keep your domain either way, and I never ask for your registrar password.</p>
          </details>
          <details>
            <summary>How long does it take?</summary>
            <p>The free concept lands within a couple of days. Once you say go, the finished pages, revisions and launch typically wrap up inside a week.</p>
          </details>
          <details>
            <summary>What if something breaks after launch?</summary>
            <p>If the refresh broke something that used to work, I fix it free for 14 days. If you want something new added, that's a change &mdash; I'll quote it separately so there are never surprise charges.</p>
          </details>
          <details>
            <summary>What do I actually own at the end?</summary>
            <p>Your domain, your hosting account, the finished site, and the source files. If you ever want another developer to take over, they can &mdash; nothing is locked to me.</p>
          </details>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final" id="start">
        <div className="wrap">
          <div className="kicker" style={{color: "var(--gold)"}}>Start here</div>
          <h2>Send me your website. I'll send back <span className="serif">what it could look like</span>.</h2>
          <p>One line is enough &mdash; just paste your web address. No call, no form, no commitment.</p>
          <a className="emailbig" href={MAILTO}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
            <span>{CONTACT_EMAIL}</span>
          </a>
          <p style={{marginTop: "22px", fontSize: "14.5px", color: "#7C8497"}}>Typical reply time: same day.</p>
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <span style={{display: "flex", alignItems: "center", gap: "9px", color: "#fff", fontWeight: "700"}}><span className="orb" style={{width: "18px", height: "18px", boxShadow: "0 0 14px rgba(255,176,32,.5)"}}></span> SiteGlow</span>
          <span>&copy; {new Date().getFullYear()} SiteGlow &middot; $399 website refresh for small businesses</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </footer>
    </>
  );
}
