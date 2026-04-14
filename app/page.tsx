"use client";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  const glowOn = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 52px rgba(168,85,247,0.55), 0 4px 16px rgba(0,0,0,0.5)";
  };
  const glowOff = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(168,85,247,0.35), 0 2px 8px rgba(0,0,0,0.4)";
  };
  const cardGlowOn = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(168,85,247,0.08)";
  };
  const cardGlowOff = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.boxShadow = "none";
  };
  const ctaGlowOn = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(168,85,247,0.2)";
  };
  const ctaGlowOff = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.boxShadow = "none";
  };

  return (
    <main className="bg-black text-white min-h-screen font-sans overflow-x-hidden">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/5 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://i.imgur.com/PeuKUbQ.png" alt="Nyx Labs Logo" className="h-8 w-auto object-contain" />
          <span className="text-white font-bold tracking-widest text-sm uppercase">NYX LABS</span>
        </div>
        <div className="flex items-center gap-8">
          {["Work", "Services", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-white/40 hover:text-white transition-colors duration-200 tracking-wide font-medium">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-8 py-36 max-w-5xl mx-auto text-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(168,85,247,0.18) 0%, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 w-[600px] h-[300px] rounded-full"
          style={{ filter: "blur(80px)", background: "rgba(168,85,247,0.10)" }}
        />

        <div ref={heroRef}>
          <div className="inline-flex items-center gap-2 border border-purple-500/30 rounded-full px-4 py-1.5 mb-10 bg-purple-500/5">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs text-purple-400 tracking-widest uppercase">Available for new projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl tracking-tight leading-none mb-6">
            <span className="font-light text-white/60">We Turn Traffic</span>
            <br />
            <span className="font-extrabold text-white">Into </span>
            <span
              className="font-extrabold"
              style={{
                background: "linear-gradient(135deg, #a855f7 0%, #c084fc 50%, #e879f9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Revenue
            </span>
          </h1>

          <p className="text-white/45 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            <span className="text-white/70 font-medium">Nyx Labs</span> (Next Yield eXecution) builds websites
            designed to convert <span className="text-white/70 font-medium">visitors into paying clients.</span>
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shubhamchohan911@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block font-semibold px-9 py-4 rounded-xl text-sm tracking-wide text-white transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #c026d3 100%)",
              boxShadow: "0 0 32px rgba(168,85,247,0.35), 0 2px 8px rgba(0,0,0,0.4)",
            }}
            onMouseEnter={glowOn}
            onMouseLeave={glowOff}
          >
            Get a Website
          </a>
          <p className="text-white/20 text-xs mt-5 tracking-wide">Trusted by founders and growth-stage businesses</p>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="px-8 py-20 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-purple-500 text-xs tracking-widest uppercase mb-3 font-medium">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold">Selected Work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="group border border-white/5 rounded-2xl p-8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-purple-500/20 transition-all duration-300 cursor-pointer"
              onMouseEnter={cardGlowOn}
              onMouseLeave={cardGlowOff}
            >
              <div className="aspect-video bg-white/[0.03] rounded-xl mb-6 flex items-center justify-center border border-white/5 group-hover:border-purple-500/20 transition-colors duration-300">
                <div className="text-center">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 mx-auto mb-3 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-sm bg-purple-500/40" />
                  </div>
                  <p className="text-white/15 text-xs tracking-widest uppercase">Preview</p>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white font-semibold mb-1">Coming Soon</h3>
                  <p className="text-white/25 text-sm">Project in progress</p>
                </div>
                <div className="border border-white/10 rounded-full w-8 h-8 flex items-center justify-center group-hover:border-purple-500/40 group-hover:bg-purple-500/10 transition-all duration-300">
                  <span className="text-white/20 text-xs group-hover:text-purple-400 transition-colors duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-8 py-20 max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-purple-500 text-xs tracking-widest uppercase mb-3 font-medium">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Website Design", desc: "Pixel-perfect interfaces built to impress and convert. Every detail intentional.", symbol: "✦" },
            { title: "Development", desc: "Fast, scalable, and clean code. Built on modern stacks that grow with your business.", symbol: "◈" },
            { title: "Optimization", desc: "Speed, SEO, and conversion rate improvements that directly impact your bottom line.", symbol: "◎" },
          ].map((s) => (
            <div
              key={s.title}
              className="group border border-white/5 rounded-2xl p-8 hover:border-purple-500/20 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.03]"
              onMouseEnter={cardGlowOn}
              onMouseLeave={cardGlowOff}
            >
              <div
                className="text-purple-400 text-2xl mb-5 group-hover:scale-110 transition-transform duration-200 inline-block"
                style={{ textShadow: "0 0 12px rgba(168,85,247,0.6)" }}
              >
                {s.symbol}
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">{s.title}</h3>
              <p className="text-white/35 text-sm leading-relaxed font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="px-8 py-32 max-w-4xl mx-auto text-center relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(168,85,247,0.10) 0%, transparent 70%)" }}
        />
        <p className="text-purple-400 text-xs tracking-widest uppercase mb-5 font-medium">Let's Build</p>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
          Ready to grow<br />
          <span className="font-light text-white/50">your business?</span>
        </h2>
        <p className="text-white/35 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
          Stop leaving money on the table. Get a website that{" "}
          <span className="text-white/60 font-medium">works as hard as you do.</span>
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=shubhamchohan911@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-purple-500/40 hover:border-purple-500/70 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 hover:scale-105 text-sm tracking-wide bg-purple-500/5 hover:bg-purple-500/10"
          onMouseEnter={ctaGlowOn}
          onMouseLeave={ctaGlowOff}
        >
          Start a Project
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-8 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="https://i.imgur.com/PeuKUbQ.png" alt="Nyx Labs" className="h-6 w-auto object-contain opacity-50" />
            <span className="text-white/25 text-xs tracking-widest uppercase font-medium">NYX LABS</span>
          </div>
          <p className="text-white/15 text-xs tracking-wide">Nyx Labs — Next Yield eXecution</p>
          <p className="text-white/10 text-xs">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>

    </main>
  );
}