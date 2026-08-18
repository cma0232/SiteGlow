import "./aga-handyman.css";

export const metadata = {
  title: "AGA Handyman Services",
  description:
    "We are a family owned limited liability business with over 20 years of experience in the service industry. We offer competitive service at a reasonable price for Kirkland, Bellevue, Redmond, Bothell, Woodinville, Sammamish, and Issaquah.",
  // Unsolicited concept — keep it out of search results (playbook §20)
  robots: { index: false, follow: false },
};

/**
 * Every string below is verbatim from agahandyman.com.
 * Layout, typography and hierarchy changed. Copy did not.
 */
const SERVICES = [
  "remodel work",
  "pressure washing",
  "fence & deck repair",
  "drywall repair",
  "painting",
  "flooring installation & repair",
  "gutter cleaning",
  "furniture assembly",
  "electrical & plumbing fixture replacements",
  "appliance installation",
  "junk hauling",
];

const CITIES = [
  "Kirkland",
  "Bellevue",
  "Redmond",
  "Bothell",
  "Woodinville",
  "Sammamish",
  "Issaquah",
];

const PHONE = "425-626-1277";
const EMAIL = "service@agahandyman.com";

export default function AgaHandyman() {
  return (
    <main className="aga">
      <div className="aga-tag">
        Concept redesign by <b>SiteGlow</b> — not affiliated with or endorsed by
        AGA Handyman Services
      </div>

      <header className="aga-head">
        <div className="wrap aga-nav">
          <a href="#top">
            <img
              className="aga-logo"
              src="/aga-logo.png"
              alt="AGA Handyman Services"
            />
          </a>
          <a className="aga-btn aga-btn-solid" href={`tel:+1${PHONE.replaceAll("-", "")}`}>
            {PHONE}
          </a>
        </div>
      </header>

      <div className="wrap">
        <section className="aga-hero-copy" id="top">
          <h1>
            We provide services ranging from small chores to{" "}
            <em>bathroom remodels.</em>
          </h1>
          <p className="aga-hero-sub">
            We are a family owned limited liability business.
          </p>
          <div className="aga-acts">
            <a
              className="aga-btn aga-btn-solid aga-btn-lg"
              href={`tel:+1${PHONE.replaceAll("-", "")}`}
            >
              {PHONE}
            </a>
            <a className="aga-btn aga-btn-line aga-btn-lg" href="#contact">
              {EMAIL}
            </a>
          </div>
        </section>
      </div>

      <div className="aga-band">
        <img src="/aga-hero.jpg" alt="Crew framing a roof" />
      </div>

      <div className="wrap">
        <section className="aga-creds">
          <div className="aga-cred">
            <div className="aga-numline">
              <span className="sm">with over</span>
              <span className="num">20</span>
              <span className="sm">years</span>
            </div>
            <div className="aga-lab">of experience in the service industry.</div>
          </div>
          <div className="aga-cred">
            <div className="aga-lab">
              Our General Contractor business <b>(AGAHAHS837PT)</b> is
            </div>
            <div className="aga-big">
              licensed, bonded,
              <br />
              and insured.
            </div>
          </div>
          <div className="aga-cred">
            <div className="aga-lab">
              We work with reliable sub-contractors that are
            </div>
            <div className="aga-big">fully insured.</div>
          </div>
        </section>
      </div>

      <section className="aga-services">
        <div className="wrap">
          <h2 className="aga-seclab">Specialty services include</h2>
          <div className="aga-rows">
            {SERVICES.map((service, i) => (
              <div className="aga-row" key={service}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <span className="t">{service}</span>
              </div>
            ))}
            <div className="aga-row more">
              <span className="n">12</span>
              <span className="t">and much more</span>
            </div>
          </div>
        </div>
      </section>

      <section className="aga-statement">
        <div className="wrap">
          <p>
            Rest assured your projects are our top priority and will be performed
            with <b>integrity and professionalism.</b>
          </p>
        </div>
      </section>

      <section className="aga-area">
        <div className="wrap">
          <p className="lead">
            We offer competitive service at a reasonable price for
          </p>
          <p className="aga-cities">
            {CITIES.map((city, i) => (
              <span key={city}>
                {i === CITIES.length - 1 ? <em>and </em> : null}
                {city}
                {i < CITIES.length - 1 ? <i>,</i> : null}{" "}
              </span>
            ))}
          </p>
        </div>
      </section>

      <section className="aga-contact" id="contact">
        <div className="wrap">
          <h2 className="aga-seclab">
            Please contact us for more information
            <br />
            via our inquiry form
          </h2>

          <div className="aga-cgrid">
            <div>
              <div className="aga-dblock">
                <div className="k">You may call or text us at</div>
                <a className="v" href={`tel:+1${PHONE.replaceAll("-", "")}`}>
                  {PHONE}
                </a>
              </div>
              <div className="aga-dblock">
                <div className="k">Email us:</div>
                <a
                  className="v"
                  href={`mailto:${EMAIL}`}
                  style={{ fontSize: "clamp(18px,2vw,22px)" }}
                >
                  {EMAIL}
                </a>
              </div>
            </div>

            {/* Demo form — no submit handler. Wire to their inbox before launch. */}
            <form className="aga-form" action={`mailto:${EMAIL}`} method="post">
              <div className="aga-g2">
                <div className="aga-f">
                  <label htmlFor="aga-name">Name*</label>
                  <input id="aga-name" name="name" required />
                </div>
                <div className="aga-f">
                  <label htmlFor="aga-phone">Contact Number:*</label>
                  <input id="aga-phone" name="phone" type="tel" required />
                </div>
              </div>
              <div className="aga-g2">
                <div className="aga-f">
                  <label htmlFor="aga-email">Email Address*</label>
                  <input id="aga-email" name="email" type="email" required />
                </div>
                <div className="aga-f">
                  <label htmlFor="aga-loc">Location / Address:*</label>
                  <input id="aga-loc" name="location" required />
                </div>
              </div>
              <div className="aga-f" style={{ marginBottom: 0 }}>
                <label htmlFor="aga-svc">Requested service(s):*</label>
                <textarea id="aga-svc" name="services" required />
              </div>
              <button
                className="aga-btn aga-btn-solid aga-btn-lg"
                style={{ width: "100%", marginTop: 28 }}
                type="submit"
              >
                Send Message
              </button>
              <p className="aga-privacy">
                Your information collected is for internal use only and will not
                be shared with any outside parties.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="aga-foot">
        <div className="wrap aga-foot-in">
          <span className="aga-thanks">
            Thank you for visiting AGA Handyman Services.
          </span>
          <span className="aga-foot-r">
            <a href={`tel:+1${PHONE.replaceAll("-", "")}`}>{PHONE}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span>AGAHAHS837PT</span>
          </span>
        </div>
      </footer>

      <div className="aga-callbar">
        <a className="a" href={`tel:+1${PHONE.replaceAll("-", "")}`}>
          {PHONE}
        </a>
        <a className="b" href={`mailto:${EMAIL}`}>
          Email us
        </a>
      </div>
    </main>
  );
}
