import Container from "components/UI/Container/Container";
import React from 'react';

const Policy = () => {
  return (
    <Container>
      <div className="policy">
        <h1>Privacy Policy</h1>
        <p>
          Say It Right ("we", "us", or "our") respects your privacy and is committed to protecting your personal
          data. This privacy policy explains how we collect, use, and share your personal data when you use our Say
          It Right mobile application (the "App").
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Personal data: name, email, location, IP address.</li>
          <li>Usage data: App activity, logs, diagnostic information.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>Provide you access to the App and its features.</li>
          <li>Improve our App and services.</li>
          <li>Communicate with you about the App.</li>
          <li>Enforce our terms and conditions and prevent fraud.</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          We may share your information with third-party service providers to facilitate our services. We may also
          share your information if required by law.
        </p>

        <h2>Data Retention</h2>
        <p>
          We will retain your information only for as long as necessary to fulfill the purposes outlined in this
          policy. You can request to delete your information at any time.
        </p>

        <h2>Security</h2>
        <p>
          We take reasonable measures to protect your personal data from unauthorized access or disclosure.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. We will notify you of any changes by posting the new policy
          on this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this policy, please contact us at support@sayitright.app.
        </p>

        <p>
          By using our App, you agree to the terms of this privacy policy.
        </p>
      </div>
    </Container>
  );
};

export default Policy;
