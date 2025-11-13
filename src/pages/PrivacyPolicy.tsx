import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Habbt ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our mobile application and website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application Habbt (the "App") and visit our website at https://habbt.app/ (the "Website").
            </p>
            <p className="mb-4">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access or use our App or Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">2.1 Information You Provide to Us</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and profile picture (if you choose to provide one).</li>
              <li><strong>Habit Data:</strong> We collect information about the habits you create, track, and manage, including habit names, descriptions, categories, frequencies, and completion status.</li>
              <li><strong>Check-in Data:</strong> We collect information about your habit check-ins, including dates, times, status (completed, missed, or skipped), and any notes you add.</li>
              <li><strong>Social Features:</strong> If you use our social features (such as habit circles), we collect information about your participation, including circle memberships and shared habits.</li>
              <li><strong>Communication Data:</strong> If you contact us for support, we collect your contact information and the content of your communications.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Device Information:</strong> We collect information about your device, including device type, operating system, unique device identifiers, and mobile network information.</li>
              <li><strong>Usage Data:</strong> We collect information about how you interact with our App, including features used, time spent in the App, and navigation patterns.</li>
              <li><strong>Log Data:</strong> We automatically collect log information when you use our App, including IP address, access times, app crashes, and performance data.</li>
              <li><strong>Location Data:</strong> We do not collect precise location data. However, we may collect general location information based on your IP address.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">2.3 Information from Third Parties</h3>
            <p className="mb-4">
              If you choose to sign in using Google OAuth, we receive your name, email address, and profile picture from Google. We use this information to create and manage your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide, maintain, and improve our App and services</li>
              <li>Process and manage your account and user profile</li>
              <li>Enable you to track and manage your habits</li>
              <li>Calculate and display your progress, streaks, and statistics</li>
              <li>Enable social features, including habit circles and sharing</li>
              <li>Send you notifications and reminders about your habits (if enabled)</li>
              <li>Respond to your inquiries, comments, and requests</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations and enforce our terms</li>
              <li>Analyze usage patterns to improve user experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. How We Share Your Information</h2>
            <p className="mb-4">We do not sell your personal information. We may share your information only in the following circumstances:</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">4.1 With Your Consent</h3>
            <p className="mb-4">
              We share your information when you explicitly consent to sharing, such as when you join a habit circle or share a habit with other users.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Service Providers</h3>
            <p className="mb-4">
              We may share your information with third-party service providers who perform services on our behalf, such as cloud hosting, data analytics, and customer support. These service providers are contractually obligated to protect your information and use it only for the purposes we specify.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Legal Requirements</h3>
            <p className="mb-4">
              We may disclose your information if required by law, court order, or government regulation, or if we believe disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.4 Business Transfers</h3>
            <p className="mb-4">
              In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change in ownership or control of your personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Encryption of data in transit using SSL/TLS</li>
              <li>Secure authentication and authorization mechanisms</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and employee training</li>
            </ul>
            <p className="mb-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
            <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information:</p>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">7.1 Access and Portability</h3>
            <p className="mb-4">
              You can access and export your data through the App's settings. You may request a copy of your personal information in a portable format.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">7.2 Correction and Deletion</h3>
            <p className="mb-4">
              You can update your account information at any time through the App. You can delete your account and associated data through the App's settings.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">7.3 Opt-Out</h3>
            <p className="mb-4">
              You can opt out of push notifications through your device settings or the App's notification settings. You can also opt out of certain data collection features.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">7.4 Do Not Track</h3>
            <p className="mb-4">
              Our App does not respond to "Do Not Track" signals. However, you can control tracking through your device settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
            <p className="mb-4">
              Our App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our App, you consent to the transfer of your information to these countries.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. California Privacy Rights</h2>
            <p className="mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The right to know what personal information we collect, use, disclose, and sell</li>
              <li>The right to delete your personal information</li>
              <li>The right to opt-out of the sale of your personal information (we do not sell personal information)</li>
              <li>The right to non-discrimination for exercising your privacy rights</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact us at <a href="mailto:mustafakhann050@gmail.com" className="text-blue-600 hover:underline">mustafakhann050@gmail.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. European Privacy Rights</h2>
            <p className="mb-4">
              If you are located in the European Economic Area (EEA), you have certain rights under the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to rectify inaccurate data</li>
              <li>The right to erasure ("right to be forgotten")</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact us at <a href="mailto:mustafakhann050@gmail.com" className="text-blue-600 hover:underline">mustafakhann050@gmail.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We may also notify you via email or through the App. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:mustafakhann050@gmail.com" className="text-blue-600 hover:underline">mustafakhann050@gmail.com</a></p>
              <p className="mb-0"><strong>Website:</strong> <a href="https://habbt.app" className="text-blue-600 hover:underline">https://habbt.app</a></p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

