import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-32 px-6 md:px-12 lg:px-24 bg-brand-black min-h-[80vh] flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <span className="contact-reveal block text-brand-accent font-mono text-sm mb-6 tracking-widest uppercase">
              04 / Start a project
            </span>
            <h2 className="contact-reveal font-display text-5xl md:text-7xl font-bold leading-tight mb-8">
              Let's build something{" "}
              <span className="text-brand-accent">legendary</span>.
            </h2>
            <p className="contact-reveal text-xl text-gray-400 mb-12 max-w-lg">
              Have a project in mind? We'd love to hear about it. Send us a
              message and we'll get back to you within 24 hours.
            </p>

            <div className="contact-reveal space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <Mail className="text-brand-accent" />
                <a
                  href="mailto:contact@pixeldperfect.com"
                  className="hover:text-white transition-colors"
                >
                  contact@pixeldperfect.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <Phone className="text-brand-accent" />
                <a
                  href="tel:+917845151961"
                  className="hover:text-white transition-colors"
                >
                  +917845151961
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <MapPin className="text-brand-accent" />
                <span>New Perungalathur, Chennai</span>
              </div>
            </div>
          </div>

          <form className="contact-reveal bg-brand-gray p-8 md:p-12 rounded-2xl border border-white/5 space-y-6 self-center w-full">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-mono text-gray-500 mb-2 uppercase"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-brand-black border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-accent transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-mono text-gray-500 mb-2 uppercase"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-brand-black border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-accent transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-mono text-gray-500 mb-2 uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-brand-black border border-gray-800 rounded-lg p-4 text-white focus:outline-none focus:border-brand-accent transition-colors"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-brand-accent text-brand-black font-bold py-4 rounded-lg hover:bg-white transition-colors duration-300 flex justify-center items-center gap-2 group"
            >
              Send Message
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
