import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-28 md:pt-32 pb-16 md:pb-24 grid md:grid-cols-12 items-center gap-10">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900"
            >
              Connect creators and brands with real Instagram insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg md:text-xl text-slate-700 max-w-2xl"
            >
              Collab Cart makes collaborations effortless. Showcase verified audience data and get discovered by the brands that match your vibe.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#get-started" className="px-6 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                Get started free
              </a>
              <a href="#benefits" className="px-6 py-3 rounded-md bg-white/70 backdrop-blur border border-slate-200 text-slate-900 hover:bg-white transition-colors">
                Explore benefits
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {['#F43F5E','#FB7185','#FDA4AF','#FECACA'].map((c, i) => (
                  <div key={i} className="h-9 w-9 rounded-full ring-2 ring-white" style={{ backgroundColor: c }} />
                ))}
              </div>
              <p className="text-sm text-slate-600">
                Trusted by growing creators and bold brands worldwide
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
