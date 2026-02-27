import * as React from 'react';
import './tc.css';

const TAndC: React.FC = () => {
  return (
    <section className="tcroot">
      <div className="tccontainer">
        <span className="tcHeader">1. Acceptance of Terms</span>
        <p>
          By accessing and using the QuarkOwl website ("Website"), you agree to
          be bound by these Terms &amp; Conditions. If you do not agree with any
          part of these terms, you must not use the Website.
        </p>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">2. Definitions</span>
        <ul>
          <li>
            <strong>QuarkOwl / We / Us</strong> — Quark Owl, registered at
            Niemczańska 33/6, 50-561 Wrocław, Poland (NIP 6842546731).
          </li>
          <li>
            <strong>You / User</strong> — any person accessing or using the
            Website.
          </li>
          <li>
            <strong>Website</strong> — the website operated by QuarkOwl and all
            its subpages.
          </li>
          <li>
            <strong>Services</strong> — software development, consulting, and
            related services offered by QuarkOwl.
          </li>
        </ul>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">3. Use of the Website</span>
        <p>
          You agree to use the Website only for lawful purposes and in a manner
          that does not infringe the rights of, or restrict or inhibit the use
          and enjoyment of the Website by, any third party. Prohibited behaviour
          includes, but is not limited to:
        </p>
        <ul>
          <li>Attempting to gain unauthorised access to the Website or its systems.</li>
          <li>Using the Website to transmit malicious software or harmful content.</li>
          <li>Scraping, data mining, or any automated collection of data from the Website without prior written consent.</li>
        </ul>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">4. Intellectual Property</span>
        <p>
          All content on the Website, including but not limited to text, graphics,
          logos, images, and software, is the property of QuarkOwl or its
          licensors and is protected by applicable intellectual property laws.
          You may not reproduce, distribute, modify, or create derivative works
          from any content on the Website without our prior written permission.
        </p>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">5. Contact Form &amp; Personal Data</span>
        <p>
          When you submit information through the contact form on the Website,
          you consent to us processing that data to respond to your enquiry. The
          collection, use, and protection of your personal data is governed by
          our Privacy Policy, which forms part of these Terms.
        </p>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">6. Third-Party Links</span>
        <p>
          The Website may contain links to third-party websites or services that
          are not owned or controlled by QuarkOwl. We have no control over, and
          assume no responsibility for, the content, privacy policies, or
          practices of any third-party websites. You access third-party websites
          at your own risk.
        </p>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">7. Disclaimer of Warranties</span>
        <p>
          The Website and its content are provided on an "as is" and "as
          available" basis without warranties of any kind, either express or
          implied. QuarkOwl does not warrant that the Website will be
          uninterrupted, error-free, or free of viruses or other harmful
          components.
        </p>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">8. Limitation of Liability</span>
        <p>
          To the fullest extent permitted by law, QuarkOwl shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages, or any loss of profits, data, or goodwill arising out of or
          in connection with your use of the Website. Our total liability for
          any claim arising under these Terms shall not exceed the amount paid by
          you, if any, for accessing the Website.
        </p>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">9. Changes to These Terms</span>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be
          effective immediately upon posting on the Website. Your continued use
          of the Website after any changes constitutes your acceptance of the
          revised Terms.
        </p>
      </div>

      <div className="tccontainer">
        <span className="tcHeader">10. Governing Law</span>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of England and Wales. Any disputes arising under or in connection
          with these Terms shall be subject to the exclusive jurisdiction of the
          courts of England and Wales.
        </p>
      </div>

      <div className="tccontainer">
        <strong>Last updated: 27 February 2026.</strong>
      </div>
    </section>
  );
};

export default TAndC;
