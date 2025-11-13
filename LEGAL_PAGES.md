# Legal Pages Setup

## Overview
This document describes the legal pages that have been created for Habbt to comply with Play Store requirements and general legal best practices.

## Pages Created

### 1. Privacy Policy (`/privacy`)
**Location:** `src/pages/PrivacyPolicy.tsx`
**URL:** `https://habbt.app/privacy`

A comprehensive Privacy Policy that covers:
- Information collection (account, habits, check-ins, device data)
- How information is used
- Information sharing practices
- Data security measures
- Data retention policies
- User rights (access, deletion, opt-out)
- Children's privacy (COPPA compliance)
- International data transfers
- California Privacy Rights (CCPA)
- European Privacy Rights (GDPR)
- Contact information

### 2. Terms of Service (`/terms`)
**Location:** `src/pages/TermsOfService.tsx`
**URL:** `https://habbt.app/terms`

A complete Terms of Service document covering:
- Agreement to terms
- Service description
- User accounts and responsibilities
- Acceptable use policies
- User content ownership and licensing
- Intellectual property rights
- Social features and habit circles
- Subscription and payment (currently free)
- Disclaimers (service availability, health/medical)
- Limitation of liability
- Indemnification
- Third-party services
- Modifications to the app
- Changes to terms
- Governing law
- Contact information

## Features

✅ **Fully Responsive:** Both pages are mobile-friendly and work on all devices
✅ **Accessible:** Proper semantic HTML and navigation
✅ **Linked from Footer:** Easy access from any page
✅ **Professional Styling:** Consistent with the rest of the landing page
✅ **Play Store Compliant:** Covers all required legal disclosures

## Contact Information

Both pages include your contact email: **mustafakhann050@gmail.com**

## URLs for Play Store

When submitting to the Play Store, you'll need to provide:
- **Privacy Policy URL:** `https://habbt.app/privacy`
- **Terms of Service URL:** `https://habbt.app/terms`

## Customization Notes

The legal documents are comprehensive and ready to use, but you may want to review and customize:

1. **Governing Law:** The Terms of Service uses a generic jurisdiction clause. If you have a specific legal jurisdiction, you can update Section 15 of the Terms.

2. **Business Address:** If you have a physical business address, you can add it to the contact sections (currently only email and website are shown).

3. **Third-Party Services:** Review Section 12 of Terms and Section 2.3 of Privacy Policy to ensure all third-party services (like Google OAuth) are accurately described.

4. **Data Processing:** If you use any analytics services (Google Analytics, etc.), you should mention them in the Privacy Policy.

## Testing

To test the pages locally:
```bash
npm run dev
```

Then visit:
- `http://localhost:3000/privacy`
- `http://localhost:3000/terms`

## Deployment

After deploying to production, ensure:
1. Both pages are accessible at the URLs above
2. The footer links work correctly
3. The pages are indexed by search engines (optional but recommended)

## Legal Disclaimer

⚠️ **Important:** While these legal documents are comprehensive and follow best practices, they are templates. It's recommended that you:
- Review them with a legal professional familiar with your jurisdiction
- Ensure they accurately reflect your app's data practices
- Update them as your app evolves

## Next Steps

1. ✅ Legal pages created
2. ✅ Routing configured
3. ✅ Footer links added
4. ⏭️ Deploy to production
5. ⏭️ Submit URLs to Play Store
6. ⏭️ Review with legal counsel (recommended)

