import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none prose-headings:font-semibold prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing or using Habbt ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, then you may not access or use the App.
            </p>
            <p className="mb-4">
              These Terms apply to all users of the App, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">1.1 Eligibility</h3>
            <p className="mb-4">
              You must be at least 13 years old to use the App. By agreeing to these Terms, you represent and warrant that you are at least 13 years of age. If you are under 13, you may not use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p className="mb-4">
              Habbt is a mobile application that enables users to track, manage, and build habits. The App provides features including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Creating and managing personal habits</li>
              <li>Tracking habit completion and progress</li>
              <li>Viewing statistics and analytics</li>
              <li>Participating in habit circles (social features)</li>
              <li>Setting reminders and notifications</li>
              <li>Earning achievements and milestones</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.1 Account Creation</h3>
            <p className="mb-4">
              To use certain features of the App, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Account Security</h3>
            <p className="mb-4">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.3 Account Termination</h3>
            <p className="mb-4">
              You may delete your account at any time through the App's settings. We reserve the right to suspend or terminate your account if you violate these Terms or engage in any fraudulent, abusive, or illegal activity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Use the App for any illegal purpose or in violation of any laws</li>
              <li>Violate or infringe upon the rights of others, including intellectual property rights</li>
              <li>Transmit any harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to the App or its systems</li>
              <li>Interfere with or disrupt the App or servers connected to the App</li>
              <li>Use automated systems (bots, scrapers) to access the App without permission</li>
              <li>Impersonate any person or entity or falsely state your affiliation with any person or entity</li>
              <li>Collect or store personal data about other users without their consent</li>
              <li>Use the App to spam, harass, or harm other users</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.1 Ownership</h3>
            <p className="mb-4">
              You retain ownership of any content you create, upload, or share through the App ("User Content"). By using the App, you grant us a worldwide, non-exclusive, royalty-free license to use, store, display, reproduce, and distribute your User Content solely for the purpose of providing and improving the App.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.2 Content Responsibility</h3>
            <p className="mb-4">
              You are solely responsible for your User Content. You represent and warrant that you have all necessary rights to your User Content and that it does not violate any laws or infringe upon the rights of any third party.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">5.3 Content Removal</h3>
            <p className="mb-4">
              We reserve the right to remove any User Content that violates these Terms or that we determine is harmful, offensive, or inappropriate, without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="mb-4">
              The App and its original content, features, and functionality are owned by Habbt and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the App without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Social Features and Habit Circles</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">7.1 Habit Circles</h3>
            <p className="mb-4">
              The App allows users to create and join "habit circles" to build habits together with friends and family. When you join a circle, other members may see your progress and participation.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">7.2 Circle Conduct</h3>
            <p className="mb-4">
              You agree to respect other circle members and maintain a positive, supportive environment. Harassment, bullying, or inappropriate behavior will not be tolerated and may result in removal from circles or account termination.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">7.3 Circle Privacy</h3>
            <p className="mb-4">
              Information shared within habit circles is visible to all circle members. Do not share sensitive or private information in circles unless you are comfortable with all members seeing it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Subscription and Payment</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">8.1 Free Service</h3>
            <p className="mb-4">
              The App is currently available free of charge. We reserve the right to introduce premium features or subscription plans in the future.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">8.2 Future Premium Features</h3>
            <p className="mb-4">
              If we introduce premium features or subscriptions, we will provide clear information about pricing, billing cycles, and cancellation policies. You will have the opportunity to review and accept any additional terms before purchasing.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">8.3 Refunds</h3>
            <p className="mb-4">
              Refund policies for any future paid features will be clearly stated at the time of purchase and will comply with applicable consumer protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Disclaimers</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">9.1 Service Availability</h3>
            <p className="mb-4">
              The App is provided "as is" and "as available." We do not guarantee that the App will be available at all times, uninterrupted, secure, or error-free. We may experience downtime for maintenance, updates, or technical issues.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">9.2 Health and Medical Disclaimer</h3>
            <p className="mb-4">
              The App is designed for habit tracking and personal development purposes only. It is not intended to diagnose, treat, cure, or prevent any disease or medical condition. The App does not provide medical, health, or professional advice. Always consult with qualified healthcare professionals for medical concerns.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">9.3 No Warranties</h3>
            <p className="mb-4">
              We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the App will meet your requirements or that the operation of the App will be uninterrupted or error-free.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Habbt and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your use or inability to use the App</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from the App</li>
              <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the App</li>
              <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the App</li>
            </ul>
            <p className="mb-4">
              Our total liability to you for all claims arising from or related to the App shall not exceed the amount you paid us, if any, in the twelve (12) months preceding the claim, or $100, whichever is greater.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
            <p className="mb-4">
              You agree to defend, indemnify, and hold harmless Habbt and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your access to or use of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party right, including without limitation any intellectual property right or privacy right</li>
              <li>Your User Content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Third-Party Services</h2>
            <p className="mb-4">
              The App may integrate with third-party services, including but not limited to Google OAuth for authentication. Your use of third-party services is subject to their respective terms of service and privacy policies. We are not responsible for the practices of third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Modifications to the App</h2>
            <p className="mb-4">
              We reserve the right to modify, suspend, or discontinue the App or any part thereof at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date. We may also notify you via email or through the App. Your continued use of the App after such modifications constitutes your acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Habbt operates, without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be resolved through good faith negotiations, and if necessary, through binding arbitration or in the appropriate courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">16. Severability</h2>
            <p className="mb-4">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">17. Entire Agreement</h2>
            <p className="mb-4">
              These Terms constitute the entire agreement between you and Habbt regarding the use of the App and supersede all prior agreements and understandings, whether written or oral.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">18. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us:
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

