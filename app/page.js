export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="main-wrapper">
      <div className="container">

        {/* Header */}
        <header className="header">
          <div className="logo">
            <div className="logo-mark">KHR</div>
            <div>
              <div className="logo-text">SORLASTE Technologies</div>
              <div className="logo-sub">
                KHR Engine • Data Center Power Innovation
              </div>
            </div>
          </div>

          <nav className="nav">
            <a href="#problem">Problem</a>
            <a href="#solution">Solution</a>
            <a href="#model">KHR Model</a>
            <a href="#business">Business</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        {/* Hero */}
        <section>
          <p className="kicker">Advance Energy Regeneration</p>
          <h1 className="hero-title">
            Digitizing Power Itself.
          </h1>
          <p className="hero-sub">
            A patent-pending electromagnetic regeneration system that turns
            waste into usable power in real time — designed for racks, servers,
            and off-grid, high-reliability environments.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Talk with the Founder
            </a>
            <a href="#solution" className="btn-ghost">
              How KHR Works
            </a>
          </div>

          <p className="hero-note">
            ⚡ Built for AI, cloud, and mission-critical workloads.
          </p>
        </section>

        {/* Problem */}
        <section id="problem">
          <div className="section-header">
            <p className="kicker">Problem</p>
            <h2 className="section-title">High Energy Use & Inefficiency</h2>
            <p className="section-sub">
              Servers consume massive amounts of energy and create waste heat,
              driving up costs and carbon impact.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title">Massive Power Draw</h3>
            <p className="card-body">
              AI and cloud racks constantly pull large amounts of power even
              when workloads fluctuate.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title">Wasted Energy</h3>
            <p className="card-body">
              Inefficiency converts unused capacity into heat requiring additional cooling.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title">High Costs</h3>
            <p className="card-body">
              Server power can account for up to 40% of data center consumption.
            </p>
          </div>
        </section>

        {/* Solution */}
        <section id="solution">
          <div className="section-header">
            <p className="kicker">Solution</p>
            <h2 className="section-title">The SORLASTE KHR Engine</h2>
            <p className="section-sub">
              A continuous Kick–Hold–Recovery cycle that captures and reuses energy.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title">Kick Phase</h3>
            <p className="card-body">
              Initializes the cycle and powers rack-level compute nodes.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title">Hold Phase</h3>
            <p className="card-body">
              Maintains stable output while analyzing power flows.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title">Recovery Phase</h3>
            <p className="card-body">
              Captures energy normally wasted as heat and recycles it.
            </p>
          </div>
        </section>

        {/* Business Model */}
        <section id="business">
          <div className="section-header">
            <p className="kicker">Business Model</p>
            <h2 className="section-title">OEM Licensing & Integrations</h2>
            <p className="section-sub">
              Designed to align with how power systems are purchased today.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title">OEM Licensing Strategy</h3>
            <p className="card-body">
              Licensing to server manufacturers and integrators.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title">Revenue Streams</h3>
            <p className="card-body">
              Per-unit licensing, integration fees, deployment SLAs.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="section-header">
            <p className="kicker">Contact</p>
            <h2 className="section-title">Founder</h2>
          </div>

          <div className="contact-block">
            <p><strong>James Ray – Founder</strong></p>
            <p>7406 Garners Ferry Road<br />Columbia, SC 29209</p>
            <p><strong>Email:</strong> jray@sorlastetechnologies.com</p>
            <p><strong>Phone:</strong> (803) 354-6749</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <span>© {year} SORLASTE Technologies</span>
          <span>MVP site – built with Next.js</span>
        </footer>
      </div>
    </main>
  );
}
