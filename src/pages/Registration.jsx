import React from 'react';

const Registration = () => {
  return (
    <div className="registration-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              All India Open<br />
              Sales & Distribution<br />
              <span className="highlight">Challenge 2025</span>
            </h1>
            <p className="hero-subtitle">
              Unleash Your Sales Instincts.<br />
              Redefine Distribution Excellence.
            </p>
          </div>
          
          <div className="challenge-info">
            <div className="info-card">
              <h3>About the Challenge</h3>
              <p>Step into the ultimate test of sales mastery!</p>
              <p>
                The All India Open Sales & Distribution Challenge 2025 
                is a nationwide 8-level online simulation competition that 
                challenges participants to make smart, data-driven, and customer-
                centric business decisions—just like real-world sales leaders do.
              </p>
            </div>

            <div className="info-card">
              <h3>Who Can Participate</h3>
              <ul>
                <li>Sales & Marketing Professionals</li>
                <li>MBA / Management Students</li>
                <li>Entrepreneurs & Channel Partners</li>
                <li>FMCG, Consumer Goods, Industrial & B2B Enthusiasts</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Why Participate</h3>
              <ul>
                <li>Experience real-world sales decision-making</li>
                <li>Compete with india's top sales talent</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Format Section */}
      <section className="format-section">
        <div className="container">
          <div className="format-grid">
            <div className="format-content">
              <h2>Competition Format</h2>
              <h3>An 8-Level Online Simulation Challenge</h3>
              <ol className="challenge-levels">
                <li>Market Entry & Positioning</li>
                <li>Channel Partner Selection</li>
                <li>Sales Forecasting & Demand Planning</li>
                <li>Route-to-Market Optimization</li>
                <li>Pricing & Promotion Strategy</li>
                <li>Channel Conflict Resolution</li>
                <li>Tech-enabled Sales Execution</li>
                <li>Business Growth Plan Presentation</li>
              </ol>
            </div>

            <div className="dates-section">
              <h2>Key Dates</h2>
              <div className="date-item">
                <h4>Registrations Open</h4>
                <p>20 November 2025</p>
              </div>
              <div className="date-item">
                <h4>Simulation Challenge Begins</h4>
                <p>30 November 2025</p>
              </div>

              <div className="register-info">
                <h2>How to Register</h2>
                <p className="register-description">Complete the registration form with the following required information:</p>
                
                <div className="registration-steps">
                  <div className="step-item">
                    <span className="step-number">1</span>
                    <span>Select Participation Type</span>
                  </div>
                  <div className="step-item">
                    <span className="step-number">2</span>
                    <span>Enter Participant Names</span>
                  </div>
                  <div className="step-item">
                    <span className="step-number">3</span>
                    <span>Provide Team Name</span>
                  </div>
                  <div className="step-item">
                    <span className="step-number">4</span>
                    <span>Enter Leader's Email Address</span>
                  </div>
                  <div className="step-item">
                    <span className="step-number">5</span>
                    <span>Fill Institute Details</span>
                  </div>
                  <div className="step-item">
                    <span className="step-number">6</span>
                    <span>Enter Course and Batch</span>
                  </div>
                  <div className="step-item">
                    <span className="step-number">7</span>
                    <span>Choose Preferred Slot</span>
                  </div>
                </div>

                <div className="register-button-container">
                  <a 
                    href="https://forms.gle/jM5ooRjBqUtyizuq6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="register-button"
                  >
                    Start Registration Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        <div className="container">
          <h2>Awards & Recognition</h2>
          <div className="awards-grid">
            <div className="award-card">
              <h3>Top 10 Teams</h3>
              <p>National Recognition & Certificates of Excellence</p>
            </div>
            <div className="award-card">
              <h3>Top 5 Teams</h3>
              <p>Receive a <strong>"Tales of Sales"</strong> by Priyaranjan Kumar</p>
            </div>
            <div className="award-card">
              <h3>Top 3 B-School Teams/Individuals</h3>
              <p>Receive personal mentoring by Priyaranjan Kumar for Placement Interview Preparation & Career Readiness</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 sm:py-8 text-xs sm:text-sm text-gray-600 border-t border-gray-200 bg-white/50">
        © 2025 atkind. All rights reserved. <br />
        Powered by <a href="https://atkind.com" className="text-blue-600 font-medium hover:text-blue-800">atkind.com</a>
      </footer>

      <style jsx>{`
        .registration-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%);
          color: #0f172a;
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="a" cx="50%" cy="50%" r="50%"><stop offset="0%" style="stop-color:rgba(59,130,246,0.1);stop-opacity:1" /><stop offset="100%" style="stop-color:rgba(59,130,246,0);stop-opacity:0" /></radialGradient></defs><circle cx="200" cy="200" r="100" fill="url(%23a)"/><circle cx="800" cy="300" r="150" fill="url(%23a)"/><circle cx="400" cy="700" r="120" fill="url(%23a)"/></svg>');
          opacity: 0.3;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: stretch;
          position: relative;
          z-index: 1;
        }

        .hero-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .highlight {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 2rem;
        }

        .challenge-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          height: 100%;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.1);
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .info-card h3 {
          color: #3b82f6;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .info-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .info-card li {
          padding: 0.25rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .info-card li::before {
          content: '•';
          color: #3b82f6;
          position: absolute;
          left: 0;
        }

        /* Format Section */
        .format-section {
          padding: 4rem 0;
          background: white;
        }

        .format-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: stretch;
          max-width: 1200px;
          margin: 0 auto;
        }

        .format-content {
          display: flex;
          flex-direction: column;
        }

        .format-content h2 {
          color: #1e293b;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        .format-content h3 {
          color: #475569;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .challenge-levels {
          list-style: none;
          padding: 0;
          counter-reset: step-counter;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .challenge-levels li {
          counter-increment: step-counter;
          background: #f8fafc;
          padding: 1rem;
          margin-bottom: 0.75rem;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
          position: relative;
          padding-left: 3rem;
          flex-grow: 1;
          display: flex;
          align-items: center;
        }

        .challenge-levels li::before {
          content: counter(step-counter);
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          background: #3b82f6;
          color: white;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
        }

        .dates-section {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          color: #0f172a;
          padding: 2rem;
          border-radius: 16px;
          border: 2px solid #e2e8f0;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .date-item {
          margin-bottom: 2rem;
        }

        .register-info {
          margin-top: auto;
          padding-top: 2rem;
          border-top: 1px solid rgba(59, 130, 246, 0.2);
        }

        .register-description {
          margin-bottom: 1.5rem;
          font-weight: 500;
          color: #475569;
        }

        .registration-steps {
          margin-bottom: 2rem;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
          color: #374151;
        }

        .step-number {
          background: #3b82f6;
          color: white;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: bold;
          flex-shrink: 0;
        }

        .register-button-container {
          text-align: center;
          margin-top: 1.5rem;
        }

        .register-button {
          display: inline-block;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          padding: 1rem 2rem;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        .register-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
          color: white;
          text-decoration: none;
        }

        .register-button:active {
          transform: translateY(0);
        }

        .dates-section h2 {
          color: #3b82f6;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        /* Awards Section */
        .awards-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
        }

        .awards-section h2 {
          text-align: center;
          color: #1e293b;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 3rem;
        }

        .awards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          align-items: stretch;
        }

        .award-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .award-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .award-card h3 {
          color: #3b82f6;
          font-size: 1.375rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .award-card p {
          flex-grow: 1;
        }

        /* Footer */
        footer {
          padding: 1.5rem 0;
          background: rgba(255, 255, 255, 0.5);
          border-top: 1px solid #e5e7eb;
          text-align: center;
          font-size: 0.875rem;
          color: #6b7280;
        }

        footer a {
          color: #2563eb;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        footer a:hover {
          color: #1d4ed8;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1.125rem;
          }

          .format-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .awards-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .container {
            padding: 0 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.75rem;
          }

          .format-content h2 {
            font-size: 2rem;
          }

          .awards-section h2 {
            font-size: 2rem;
          }

          .hero-section {
            padding: 2rem 0;
          }

          .format-section {
            padding: 2rem 0;
          }

          .awards-section {
            padding: 2rem 0;
          }

          .info-card {
            padding: 1rem;
          }

          .award-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Registration;