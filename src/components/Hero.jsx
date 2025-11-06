import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[80vh] py-24">
            <div className="">
              <span className="inline-flex items-center gap-2 text-orange-400 font-medium bg-white/5 rounded-full px-3 py-1 ring-1 ring-white/10">Modern IT Solutions</span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Accelerate your digital transformation
              </h1>
              <p className="mt-5 text-white/80 text-lg max-w-xl">
                We design, build, and scale robust software and cloud infrastructure so you can move faster with confidence.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium transition">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/10 hover:bg-white/5 text-white font-medium transition">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent" />
    </section>
  );
};

export default Hero;
