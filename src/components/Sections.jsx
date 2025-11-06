import React from 'react';
import { CheckCircle2, Shield, Zap, Cloud, Cpu, Boxes } from 'lucide-react';

const SectionTitle = ({ eyebrow, title, subtitle, id }) => (
  <div id={id} className="mx-auto max-w-3xl text-center">
    {eyebrow && (
      <span className="inline-block text-orange-400 font-medium tracking-wide uppercase">{eyebrow}</span>
    )}
    <h2 className="mt-2 text-3xl sm:text-4xl font-bold">{title}</h2>
    {subtitle && <p className="mt-3 text-white/70">{subtitle}</p>}
  </div>
);

const About = () => (
  <section className="py-20 bg-gradient-to-b from-transparent to-black/20" id="about">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="About Us"
        title="Engineering excellence, delivered"
        subtitle="We are a team of seasoned engineers, designers, and cloud architects helping ambitious teams ship reliable software faster."
      />
      <div className="mt-10 grid md:grid-cols-3 gap-6 text-white/80">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <Shield className="h-6 w-6 text-orange-500" />
          <h3 className="mt-3 font-semibold text-white">Security-first mindset</h3>
          <p className="mt-2">From architecture to deployment, we bake security into every layer.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <Zap className="h-6 w-6 text-orange-500" />
          <h3 className="mt-3 font-semibold text-white">Velocity with quality</h3>
          <p className="mt-2">Lean processes and automated pipelines keep quality high and cycles short.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <Cloud className="h-6 w-6 text-orange-500" />
          <h3 className="mt-3 font-semibold text-white">Cloud-native experts</h3>
          <p className="mt-2">We leverage modern cloud platforms to build scalable, resilient systems.</p>
        </div>
      </div>
    </div>
  </section>
);

const Products = () => (
  <section className="py-20" id="products">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Our Product"
        title="Tools that power your business"
        subtitle="Battle-tested accelerators that reduce time-to-value across web, mobile, and cloud."
      />
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {["Observability Kit", "Auth & Identity", "Cloud Cost Guard"].map((name, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">{name}</h3>
              <Boxes className="h-6 w-6 text-orange-500" />
            </div>
            <p className="mt-2 text-white/70">Prebuilt modules you can adopt quickly, then customize to fit your needs.</p>
            <a href="#contact" className="mt-4 inline-block text-orange-400 hover:text-orange-300">Request a demo →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-20" id="services">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Our Services"
        title="End-to-end technology partnership"
        subtitle="From discovery to scale, we meet you where you are and deliver outcomes."
      />
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          { title: 'Custom Software', desc: 'Full-stack apps with robust APIs and delightful UIs.', icon: Cpu },
          { title: 'Cloud & DevOps', desc: 'CI/CD, IaC, Kubernetes, and observability done right.', icon: Cloud },
          { title: 'AI Integration', desc: 'Practical ML, embeddings, and automation to unlock value.', icon: Zap }
        ].map((s, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <s.icon className="h-6 w-6 text-orange-500" />
            <h3 className="mt-3 text-white font-semibold">{s.title}</h3>
            <p className="mt-2 text-white/70">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a href="#contact" className="px-6 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium transition">Book a strategy call</a>
        <a href="#products" className="px-6 py-3 rounded-md border border-white/10 hover:bg-white/5 text-white font-medium transition">See our product</a>
      </div>
    </div>
  </section>
);

const WhyUs = () => (
  <section className="py-20" id="why">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Why choose us"
        title="We obsess over your success"
        subtitle="Our principles keep projects on track and outcomes measurable."
      />
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          'Outcome-focused roadmaps',
          'Transparent communication',
          'Senior-level delivery',
          'Security and compliance',
          'Proactive cost control',
          'Long-term partnership'
        ].map((point, i) => (
          <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5">
            <CheckCircle2 className="h-5 w-5 text-orange-500 mt-0.5" />
            <p className="text-white/80">{point}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactCTA = () => (
  <section className="py-20" id="contact">
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-orange-600/20 to-orange-500/10 p-10 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold">Ready to build something great?</h3>
        <p className="mt-3 text-white/80">Tell us about your goals and we’ll propose a clear, actionable plan.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="mailto:hello@flamesit.co" className="px-6 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium transition">Contact us</a>
          <a href="#services" className="px-6 py-3 rounded-md border border-white/10 hover:bg-white/5 text-white font-medium transition">View services</a>
        </div>
      </div>
    </div>
  </section>
);

const Sections = () => {
  return (
    <>
      <About />
      <Products />
      <Services />
      <WhyUs />
      <ContactCTA />
    </>
  );
};

export default Sections;
