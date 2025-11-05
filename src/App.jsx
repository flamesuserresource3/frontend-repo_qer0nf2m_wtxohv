import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import AuthSection from './components/AuthSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <AuthSection />

        <section id="how" className="py-20 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">How it works</h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-600">
              Connect your Instagram, showcase insights, discover or be discovered. Launch your next collab in a few guided steps.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3 text-left">
              {[
                { t: 'Connect', d: 'Link your Instagram safely and privately.' },
                { t: 'Showcase', d: 'Your verified insights power your profile.' },
                { t: 'Collaborate', d: 'Brands and creators match and launch.' },
              ].map((it, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 p-6">
                  <div className="h-10 w-10 rounded-lg bg-rose-600/10 text-rose-700 grid place-items-center font-semibold">{idx + 1}</div>
                  <h3 className="mt-4 font-semibold">{it.t}</h3>
                  <p className="mt-2 text-sm text-slate-600">{it.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Simple pricing</h2>
            <p className="mt-3 text-slate-600">Start free. Upgrade when you grow.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { name: 'Starter', price: 'Free', features: ['Core profile', 'Basic insights'] },
                { name: 'Pro', price: '$19/mo', features: ['Full insights', 'Priority matching'] },
                { name: 'Teams', price: '$49/mo', features: ['Seats for brands', 'Advanced filters'] },
              ].map((p) => (
                <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <div className="mt-2 text-3xl font-semibold">{p.price}</div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {p.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                  <a href="#get-started" className="mt-6 inline-block w-full rounded-md bg-slate-900 text-white py-2.5 hover:bg-slate-800 transition-colors">Choose {p.name}</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-rose-500 to-rose-700" />
            <span className="font-semibold">Collab Cart</span>
          </div>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Collab Cart. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#benefits" className="text-slate-600 hover:text-slate-900">Benefits</a>
            <a href="#how" className="text-slate-600 hover:text-slate-900">How it works</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
