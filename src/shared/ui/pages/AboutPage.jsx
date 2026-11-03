import React from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Heart,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Quote,
  PackageCheck,
  Star,
  Headphones
} from "lucide-react";

const About = () => {
  return (
    <main className="bg-[#FAF9F6] text-[#1A1A1A] font-body">
      {/* Hero Section */}
      <section className="px-5 md:px-12 lg:px-20 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="flex items-center gap-3 text-xs tracking-[3px] uppercase text-[#84947D] font-semibold">
              <span className="w-8 h-[1px] bg-[#A3B19B]" />
              Our Story
            </span>

            <h1 className="font-display text-5xl md:text-6xl lg:text-[72px] leading-[1.08] tracking-[-3px] font-semibold mt-7">
              More than
              <br />
              just a <span className="text-[#84947D]">store.</span>
              <br />
              It's a feeling.
            </h1>

            <p className="text-[#4A4540] text-sm md:text-base leading-8 max-w-lg mt-7">
              We believe shopping should be more than just buying things. It
              should be about discovering products that make everyday living a
              little better, easier, and more meaningful.
            </p>

            <a
              href="#our-journey"
              className="inline-flex items-center gap-3 mt-9 bg-[#1A1A1A] text-white px-7 py-4 rounded-full text-sm hover:bg-[#84947D] transition-all duration-300"
            >
              Discover Our Journey
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="relative">
            <div className="rounded-[24px] overflow-hidden h-[420px] md:h-[540px]">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
                alt="Our store and shopping experience"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-7 -left-3 md:-left-8 bg-[#F4F1EA] rounded-2xl p-5 md:p-7 shadow-sm max-w-[220px]">
              <span className="font-display text-4xl font-semibold">100%</span>
              <p className="text-xs text-[#4A4540] mt-2 leading-5">
                Commitment to quality and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="bg-[#F4F1EA] px-5 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[3px] uppercase text-[#84947D] font-semibold">
            Who We Are
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight tracking-tight mt-6">
            We make everyday shopping
            <span className="text-[#84947D]"> feel extraordinary.</span>
          </h2>

          <p className="text-[#4A4540] text-sm md:text-base leading-8 mt-7 max-w-3xl mx-auto">
            Our vision is simple: bring together quality, thoughtful design, and
            a seamless shopping experience in one place. Every product we
            feature reflects our commitment to offering value, reliability, and
            something worth coming back for.
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section id="our-journey" className="px-5 md:px-12 lg:px-20 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="rounded-[24px] overflow-hidden h-[400px] md:h-[490px]">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000"
                alt="Our shopping journey"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-6 left-6 bg-[#FAF9F6]/95 backdrop-blur-sm rounded-full px-5 py-3 text-xs font-semibold tracking-wide">
              Built with purpose.
            </div>
          </div>

          <div>
            <span className="text-xs tracking-[3px] uppercase text-[#84947D] font-semibold">
              The Journey
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-5 leading-tight">
              A small idea.
              <br />A bigger vision.
            </h2>

            <p className="text-[#4A4540] text-sm leading-8 mt-7">
              Every great journey begins with an idea. Ours started with a
              simple thought: why can't online shopping feel more personal,
              reliable, and effortless?
            </p>

            <p className="text-[#4A4540] text-sm leading-8 mt-4">
              That thought became our motivation to build a shopping destination
              where customers can discover thoughtfully selected products, enjoy
              a smooth experience, and shop with confidence.
            </p>

            <div className="border-l-2 border-[#A3B19B] pl-5 mt-8">
              <p className="font-display text-lg font-semibold">
                Our journey is still growing.
              </p>
              <p className="text-xs text-[#4A4540] mt-2 leading-6">
                And every customer is an important part of our story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#F4F1EA] px-5 md:px-12 lg:px-20 py-24">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[3px] uppercase text-[#84947D] font-semibold">
            What Makes Us Different
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mt-4">
            Values behind everything.
          </h2>

          <p className="text-sm text-[#4A4540] mt-4 max-w-xl mx-auto leading-7">
            We don't just focus on what we sell. We care about how we serve,
            what we deliver, and the trust we build.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: Award,
              title: "Premium Quality",
              desc: "We believe every product should meet high standards of quality, usability, and value.",
            },
            {
              icon: ShieldCheck,
              title: "Trusted Shopping",
              desc: "We aim to make every shopping experience secure, transparent, and dependable.",
            },
            {
              icon: Heart,
              title: "Customer First",
              desc: "Your needs, comfort, and shopping experience remain at the heart of what we do.",
            },
            {
              icon: CheckCircle2,
              title: "Customer Satisfaction",
              desc: "We continuously strive to make every interaction and purchase a positive experience.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#FAF9F6] rounded-[20px] p-7 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#E9EDE6] text-[#71816B] flex items-center justify-center">
                <item.icon size={25} strokeWidth={1.6} />
              </div>

              <h3 className="font-display font-semibold text-lg mt-7">
                {item.title}
              </h3>

              <p className="text-xs text-[#4A4540] leading-7 mt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="px-5 md:px-12 lg:px-20 py-24">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[3px] uppercase text-[#84947D] font-semibold">
            Our Commitment
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-semibold mt-4">
            Trust is our biggest achievement.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              number: "100%",
              label: "Quality Commitment",
              icon: Award,
            },
            {
              number: "24/7",
              label: "Customer Care Goal",
              icon: Headphones,
            },
            {
              number: "100%",
              label: "Customer Focus",
              icon: Users,
            },
            {
              number: "1",
              label: "Promise: Your Trust",
              icon: ShieldCheck,
            },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#F4F1EA] flex items-center justify-center mx-auto text-[#84947D]">
                <item.icon size={21} />
              </div>

              <h3 className="font-display text-3xl md:text-5xl font-semibold mt-5">
                {item.number}
              </h3>

              <p className="text-xs text-[#4A4540] mt-3">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Trust */}
      <section className="bg-[#1A1A1A] text-[#FAF9F6] px-5 md:px-12 lg:px-20 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs tracking-[3px] uppercase text-[#A3B19B] font-semibold">
              Built on Trust
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight mt-5">
              Relationships matter
              <span className="text-[#A3B19B]"> more than transactions.</span>
            </h2>

            <p className="text-[#B9B4AC] text-sm leading-8 mt-7 max-w-lg">
              Our customers are at the center of our journey. We aim to earn
              their trust through quality products, dependable service, clear
              communication, and care that goes beyond checkout.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Quality you can trust",
                "Customer-focused service",
                "Reliable shopping experience",
              ].map((text, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 border border-white/15 rounded-full px-4 py-3 text-xs text-[#E8E5DF]"
                >
                  <CheckCircle2 size={14} className="text-[#A3B19B]" />
                  {text}
                </span>
              ))}
            </div>
          </div>

          <div className="relative bg-[#292929] rounded-[24px] p-8 md:p-12">
            <Quote size={38} className="text-[#A3B19B]" />

            <h3 className="font-display text-2xl md:text-3xl font-semibold leading-relaxed mt-7">
              "A great shopping experience doesn't end when you place an order.
              It begins with trust."
            </h3>

            <div className="mt-9 pt-7 border-t border-white/10">
              <p className="text-sm font-semibold">Our Promise</p>
              <p className="text-xs text-[#B9B4AC] mt-2">
                Quality. Care. Confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 md:px-12 lg:px-20 py-24">
        <div className="bg-[#F4F1EA] rounded-[28px] px-7 md:px-14 py-16 text-center">
          <span className="text-xs tracking-[3px] uppercase text-[#84947D] font-semibold">
            Be Part of Our Story
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-5">
            Your next favourite
            <br />
            find is waiting.
          </h2>

          <p className="text-sm text-[#4A4540] mt-5 max-w-lg mx-auto leading-7">
            Discover a collection made with care and find products that fit your
            everyday life.
          </p>

          <a
            href="/main/shop"
            className="inline-flex items-center gap-8 bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-sm mt-9 hover:bg-[#84947D] transition-all duration-300"
          >
            Explore Our Store
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
