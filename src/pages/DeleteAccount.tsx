

export default function DeleteAccount() {
    return (
        <div className="min-h-screen bg-background text-text flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">Delete Your Account</h1>
            <p className="text-lg mb-6 text-center max-w-2xl">
                This action will permanently remove your Habbt account and all data associated with it. The deletion cannot be undone.
            </p>
            {/* Deep‑link button – opens the mobile app where the user confirms deletion */}
            <a
                href="habbt://delete-account"
                className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
            >
                Delete Account in App
            </a>
            <p className="mt-4 text-sm text-gray-400">
                If you prefer to delete via the web, please contact support at <a href="mailto:mustafakhann050@gmail.com" className="underline">mustafakhann050@gmail.com</a>.
            </p>
        </div>
    );
}
