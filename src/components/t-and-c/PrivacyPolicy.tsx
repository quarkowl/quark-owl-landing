import * as React from 'react';
import './tc.css';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="tcroot">
      <div className="tccontainer">
        <span className="tcHeader">1. Data Controller</span>
        <p>
          The controller of your personal data is Quark Owl, registered at
          Niemczańska 33/6, 50-561 Wrocław, Poland (NIP 6842546731). You can
          contact us regarding data protection at:{' '}
          <strong>contact@quarkowl.com</strong>.
        </p>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">2. Definitions</span>
        <ul>
          <li>
            <strong>Personal Data</strong> — any information relating to an
            identified or identifiable natural person.
          </li>
          <li>
            <strong>QuarkOwl / We / Us</strong> — Quark Owl.
          </li>
          <li>
            <strong>You / User</strong> — any natural person whose Personal Data
            we process.
          </li>
          <li>
            <strong>GDPR</strong> — Regulation (EU) 2016/679 of the European
            Parliament and of the Council of 27 April 2016.
          </li>
          <li>
            <strong>Website</strong> — our website and its subpages.
          </li>
          <li>
            <strong>Cookies</strong> — small text files stored on your device by
            the Website.
          </li>
        </ul>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">3. Data We Collect</span>
        <p>
          We may collect the following categories of personal data:
        </p>
        <ul>
          <li>
            <strong>Contact form data</strong> — name, email address, and message
            content submitted through the Website contact form.
          </li>
          <li>
            <strong>Usage data</strong> — information collected automatically via
            cookies and analytics tools, such as IP address, browser type, pages
            visited, and time spent on the Website.
          </li>
          <li>
            <strong>Publicly available data</strong> — information obtained from
            public sources such as social media profiles.
          </li>
        </ul>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">4. Legal Basis for Processing (GDPR Art. 6)</span>
        <p>We process your personal data on the following legal bases:</p>
        <ul>
          <li>
            <strong>Consent (Art. 6(1)(a))</strong> — for storing cookies on your
            device and collecting analytics data.
          </li>
          <li>
            <strong>Performance of a contract (Art. 6(1)(b))</strong> — to respond
            to your enquiries submitted via the contact form and to provide our
            services.
          </li>
          <li>
            <strong>Legitimate interest (Art. 6(1)(f))</strong> — for website
            security, fraud prevention, statistical analysis, and direct marketing
            of our own services.
          </li>
          <li>
            <strong>Legal obligation (Art. 6(1)(c))</strong> — for tax and
            accounting purposes as required by law.
          </li>
        </ul>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">5. Data Sharing</span>
        <p>
          We may share your data with trusted third parties who assist us in
          operating the Website and providing our services, including:
        </p>
        <ul>
          <li>Hosting and cloud computing providers</li>
          <li>Analytics services (e.g., Google Analytics)</li>
          <li>Accounting and legal service providers</li>
          <li>
            Law enforcement or regulatory authorities where required by
            applicable law
          </li>
        </ul>
        <p>
          We do not sell your personal data to third parties.
        </p>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">6. International Data Transfers</span>
        <p>
          Some of our service providers may be located outside the European
          Economic Area (EEA). Where data is transferred outside the EEA, we
          ensure appropriate safeguards are in place, such as Standard
          Contractual Clauses approved by the European Commission, or adequacy
          decisions.
        </p>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">7. Data Retention</span>
        <p>
          We retain your personal data only for as long as necessary to fulfil
          the purposes for which it was collected:
        </p>
        <ul>
          <li>
            <strong>Contact form submissions</strong> — retained for up to 12
            months after your enquiry is resolved, unless a business relationship
            is established.
          </li>
          <li>
            <strong>Analytics data</strong> — retained in accordance with our
            analytics provider's policies (typically 26 months for Google
            Analytics).
          </li>
          <li>
            <strong>Contractual data</strong> — retained for the duration of the
            contract and for the statutory limitation period thereafter.
          </li>
          <li>
            <strong>Tax and accounting records</strong> — retained as required by
            applicable law.
          </li>
        </ul>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">8. Your Rights (GDPR Art. 15–21)</span>
        <p>
          Under the GDPR, you have the following rights regarding your personal
          data:
        </p>
        <ul>
          <li>
            <strong>Right of access (Art. 15)</strong> — obtain confirmation of
            whether we process your data and request a copy.
          </li>
          <li>
            <strong>Right to rectification (Art. 16)</strong> — request
            correction of inaccurate or incomplete data.
          </li>
          <li>
            <strong>Right to erasure (Art. 17)</strong> — request deletion of
            your data where there is no compelling reason for continued
            processing.
          </li>
          <li>
            <strong>Right to restriction (Art. 18)</strong> — request that we
            limit how we use your data.
          </li>
          <li>
            <strong>Right to data portability (Art. 20)</strong> — receive your
            data in a structured, commonly used format.
          </li>
          <li>
            <strong>Right to object (Art. 21)</strong> — object to processing
            based on legitimate interests or direct marketing.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{' '}
          <strong>contact@quarkowl.com</strong>. We will respond within 30 days.
        </p>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">9. Cookies Policy</span>
        <p>
          We use cookies on the Website to ensure its proper functioning, to
          maintain sessions, and for statistical and analytical purposes. We use
          Google Analytics to collect and analyse aggregated usage data. You can
          manage your cookie preferences through your browser settings. Disabling
          cookies may affect the functionality of the Website.
        </p>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">10. Supervisory Authority</span>
        <p>
          If you believe that your data protection rights have been violated, you
          have the right to lodge a complaint with the President of the Personal
          Data Protection Office (UODO) in Poland, or with the supervisory
          authority in your country of residence.
        </p>
      </div>

      <div className="tccontainer">
        <strong>Last updated: 27 February 2026.</strong>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
