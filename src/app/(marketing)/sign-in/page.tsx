export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white shadow-lg">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Sign In</h1>
        <p className="text-slate-500 mb-6">Choose your portal to continue.</p>
        {/* Portal selector: Client / Partner */}
        <div className="flex gap-3 mb-8">
          <button className="flex-1 py-3 rounded-xl border-2 border-brand font-semibold text-brand hover:bg-brand hover:text-white transition-colors">
            Client
          </button>
          <button className="flex-1 py-3 rounded-xl border-2 border-slate-200 font-semibold text-slate-600 hover:border-brand hover:text-brand transition-colors">
            Partner
          </button>
        </div>
        {/* Auth form placeholder */}
        <p className="text-center text-sm text-slate-400">Auth form coming soon</p>
      </div>
    </div>
  );
}
