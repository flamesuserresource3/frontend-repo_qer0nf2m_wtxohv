import { motion } from 'framer-motion';
import { Rocket, Star, Users, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Rocket,
    title: 'Faster brand deals',
    desc: 'Match with brands that fit your audience and close partnerships in days, not weeks.'
  },
  {
    icon: Star,
    title: 'Verified IG insights',
    desc: 'Showcase reach, engagement, and audience data with privacy-safe, verified metrics.'
  },
  {
    icon: Users,
    title: 'Smart matchmaking',
    desc: 'Our relevance engine aligns creator niche and brand goals for higher ROI.'
  },
  {
    icon: Shield,
    title: 'Secure & transparent',
    desc: 'Clear deliverables, milestones, and payment checkpoints keep everyone protected.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm text-rose-700">Why Collab Cart</span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Benefits for creators and brands
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A clean, modern platform designed to help you start better partnerships with confidence.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 text-white grid place-items-center shadow-md">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{b.desc}</p>
              <div className="absolute inset-0 -z-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(120px_120px_at_20%_20%,rgba(244,63,94,0.12),transparent)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
