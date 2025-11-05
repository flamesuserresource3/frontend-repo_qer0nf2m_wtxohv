import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ShieldCheck } from 'lucide-react';

export default function AuthSection() {
  const [mode, setMode] = useState('creator');

  return (
    <section id="get-started" className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-slate-50" aria-labelledby="auth-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <h2 id="auth-heading" className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Jump in with a beautiful, simple login
          </h2>
          <div className="hidden sm:flex items-center gap-2 p-1 rounded-lg bg-slate-100">
            <button
              onClick={() => setMode('creator')}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors flex items-center gap-2 ${
                mode === 'creator' ? 'bg-white shadow text-slate-900' : 'text-slate-600'
              }`}
            >
              <User className="h-4 w-4" /> Creator
            </button>
            <button
              onClick={() => setMode('admin')}
              className={`px-3 py-1.5 rounded-md text-sm transition-colors flex items-center gap-2 ${
                mode === 'admin' ? 'bg-white shadow text-slate-900' : 'text-slate-600'
              }`}
            >
              <ShieldCheck className="h-4 w-4" /> Admin
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm overflow-hidden">
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-rose-200/40 blur-3xl pointer-events-none" />
            <div className="flex items-center gap-2 text-sm">
              <span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-2 py-0.5 text-rose-700">Secure</span>
              <span className="text-slate-500">SSO-ready</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-900">{mode === 'creator' ? 'Creator' : 'Admin'} login</h3>

            <div className="mt-6">
              <AnimatePresence mode="wait">
                {mode === 'creator' ? (
                  <motion.form
                    key="creator"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Email</label>
                      <input type="email" required placeholder="you@creator.com" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Password</label>
                      <input type="password" required placeholder="••••••••" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                    </div>
                    <button className="w-full rounded-md bg-slate-900 text-white py-2.5 hover:bg-slate-800 transition-colors">Sign in</button>
                    <button className="w-full rounded-md bg-white border border-slate-300 text-slate-900 py-2.5 hover:bg-slate-50 transition-colors">Continue with Google</button>
                  </motion.form>
                ) : (
                  <motion.form
                    key="admin"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Work email</label>
                      <input type="email" required placeholder="you@brand.com" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">Password</label>
                      <input type="password" required placeholder="••••••••" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700">2FA code</label>
                      <input type="text" placeholder="123 456" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                    </div>
                    <button className="w-full rounded-md bg-slate-900 text-white py-2.5 hover:bg-slate-800 transition-colors">Sign in</button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm"
          >
            <h4 className="text-xl font-semibold text-slate-900">For brands and creators</h4>
            <p className="mt-3 text-slate-600">
              One account, two worlds. Creators showcase verified insights. Brands discover exact-fit partners and launch campaigns in a click.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>• Privacy-first Instagram data connection</li>
              <li>• Clean dashboards for both sides</li>
              <li>• Simple onboarding with instant value</li>
              <li>• Clear milestones and payouts</li>
            </ul>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Creator demo</p>
                <p className="mt-1 font-medium">See your insights in seconds</p>
                <a href="#benefits" className="mt-2 inline-block text-rose-600 hover:text-rose-700">Explore →</a>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-sm text-slate-500">Admin demo</p>
                <p className="mt-1 font-medium">Review candidates effortlessly</p>
                <a href="#benefits" className="mt-2 inline-block text-rose-600 hover:text-rose-700">Explore →</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
