import { useCallback } from 'react';

/**
 * Public page for requesting deletion of all personal data.
 * Two options are offered:
 *   1️⃣ Open the mobile app via a deep‑link.
 *   2️⃣ Send a pre‑filled email to support.
 */
export default function DeleteData() {
    // --------------------------------------------------------------
    // 1️⃣ Deep‑link to the mobile app
    // --------------------------------------------------------------
    const openApp = useCallback(() => {
        const url = 'habbt://delete-account?type=data';
        window.location.href = url;
    }, []);

    // --------------------------------------------------------------
    // 2️⃣ Pre‑filled email draft
    // --------------------------------------------------------------
    const sendEmail = useCallback(() => {
        const subject = encodeURIComponent('Request for Personal Data Deletion');
        const body = encodeURIComponent(
            `Hello Habbt Team,%0D%0A%0D%0A` +
            `I would like to request the deletion of all personal data associated with my account, ` +
            `in accordance with GDPR / COPPA.%0D%0A%0D%0A` +
            `Please confirm once the deletion is complete.%0D%0A%0D%0A` +
            `Thank you.`
        );
        const mailto = `mailto:support@habbt.com?subject=${subject}&body=${body}`;
        window.location.href = mailto;
    }, []);

    // --------------------------------------------------------------
    // 3️⃣ UI interaction – native prompt to choose action
    // --------------------------------------------------------------
    const handleRequest = useCallback(() => {
        const choice = window.prompt(
            'Type "app" to open the app, "email" to send an email, or cancel to do nothing.'
        );
        if (choice === 'app') openApp();
        else if (choice === 'email') sendEmail();
    }, [openApp, sendEmail]);

    // --------------------------------------------------------------
    // Render the page
    // --------------------------------------------------------------
    return (
        <div className="min-h-screen bg-background text-text flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">
                Request Deletion of Your Personal Data
            </h1>
            <p className="text-lg mb-6 text-center max-w-2xl">
                Under GDPR and the Google Play Families policy you have the right to have all personal data we store about you permanently removed. You can start the process from the app or by sending us an email.
            </p>
            <button
                onClick={handleRequest}
                className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition"
            >
                Request Data Deletion
            </button>
            <p className="mt-4 text-sm text-gray-400">
                If the button does not work, you can also email us directly at{' '}
                <a href="mailto:support@habbt.com" className="underline">
                    support@habbt.com
                </a>
                .
            </p>
        </div>
    );
}
