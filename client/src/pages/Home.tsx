import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Globe,
  Award,
  Zap,
  Building,
  User,
  History,
  Contact,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import HeroImage from "@assets/Untitled_design_1769620114292.png";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const experiences = [
    {
      company: "EKI Energy Services Ltd (EnKing International)",
      role: "Chairman & MD",
      period: "2008 - Present",
      location: "Indore, India",
      details: [
        "Global Carbon Markets Leader - reached Unicorn status ($1B+ valuation) in Jan 2022.",
        "Recently commented on FY27 Budget expectations, emphasizing policy continuity for carbon markets (Jan 2026).",
        "Strategic wholly-owned acquisition of GHG completed (Jan 2022).",
        "Advocating for market integrity: 'Carbon markets will be led by integrity, not volume.'",
      ],
    },
    {
      company: "EKI RED - Real Estate & Developers",
      role: "Managing Director",
      period: "2026 - Present",
      details: [
        "Redefining Indore’s growth with sustainable design and refined luxury.",
        "Strategic land aggregation for renewable energy projects nationwide (500 GW goal).",
      ],
    },
    {
      company: "Carbon Markets Association of India",
      role: "President",
      period: "2022 - Present",
      details: [
        "Helping Industries in ref. to domestic ETS, Art 6.2, Art 6.4, CBAM, and Carbon Neutrality.",
        "Empowered growth to net zero journey by 2070.",
      ],
    },
    {
      company: "CII National Committee on Bioenergy",
      role: "Chair of Subgroup on Regulatory Carbon Credit",
      period: "2024 - Present",
      details: [
        "Working towards India's commitment to decarbonisation and just energy transition.",
      ],
    },
    {
      company: "Amrut Nature Solutions (JV with Shell)",
      role: "Chairman of the Board",
      period: "2022 - Present",
      details: [
        "Focusing on conservation, enhancement and restoration of natural ecosystems.",
        "Investment into forests, agriculture, grasslands, and blue carbon.",
      ],
    },
  ];

  const education = [
    {
      school: "Indian Institute of Management, Ahmedabad",
      degree: "Executive Education",
      year: "2018",
    },
    {
      school: "Devi Ahilya Vishwavidyalaya",
      degree: "Master of Business Administration - MBA",
      year: "2007",
    },
    {
      school: "Rajiv Gandhi Prodyogiki Vishwavidyalaya",
      degree: "Bachelor of Engineering - BE, Electrical",
      year: "2005",
    },
  ];

  return (
    <div className="bg-white text-black font-sans selection:bg-black selection:text-white">
      {/* Minimal Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-black/5 px-6 py-6 flex justify-between items-center">
        <span className="font-serif text-2xl font-bold tracking-tighter">
          MANISH DABKARA
        </span>
        <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="#about" className="hover:opacity-50 transition-opacity">
            About
          </a>
          <a href="#experience" className="hover:opacity-50 transition-opacity">
            Experience
          </a>
          <a href="#recognition" className="hover:opacity-50 transition-opacity">
            Recognition
          </a>
          <a href="#leadership" className="hover:opacity-50 transition-opacity">
            Ecosystem
          </a>
          <a href="#contact" className="hover:opacity-50 transition-opacity">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section - Author Style */}
      <section className="min-h-screen flex flex-col justify-center section-padding pt-32">
        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-huge">
                Climate <br />
                <span className="italic font-normal">Strategist.</span> <br />
                Unicorn <span className="opacity-30">Founder.</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl text-xl md:text-2xl leading-relaxed font-light text-black/70"
            >
              Building EKI Energy Services Ltd to be a global leader in
              decarbonization. Mobilizing 200M+ offsets and serving 3,500+
              clients across 40 countries.
            </motion.div>
            <div className="flex gap-6">
              <Button
                variant="ghost"
                className="p-0 text-lg group flex items-center gap-4 hover:bg-transparent"
              >
                <span className="underline underline-offset-8 decoration-1 font-medium">
                  Read the story
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="aspect-[3/4] overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all duration-1000 border-8 border-white shadow-2xl"
            >
              <img
                src={HeroImage}
                alt="Manish Dabkara"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute -bottom-6 -left-6 bg-black text-white p-8 hidden md:block">
              <p className="text-4xl font-serif">Fortune</p>
              <p className="text-sm uppercase tracking-widest mt-2">
                40 Under 40
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary / About */}
      <section id="about" className="section-padding bg-black text-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <h2 className="text-4xl md:text-6xl font-serif">
            A path to a <br /> greener future.
          </h2>
          <div className="space-y-8 text-xl font-light text-white/70 leading-relaxed">
            <p>
              Decarbonization becomes real when claims must survive audit,
              regulation, and reputational scrutiny—not just quarterly
              storytelling.
            </p>
            <p>
              I founded EKI (EnKing International) in 2008 and serve as Chairman
              & MD of EKI Energy Services Ltd, a listed company in India. In
              January 2022, EKI reached unicorn status with a $1 billion+
              valuation—the first carbon credit company in India to cross that
              milestone.
            </p>
            <p>
              Beyond climate markets, I build operating businesses in GTD
              training, green fuel manufacturing, and real estate—domains where
              discipline and repeatable execution decide outcomes.
            </p>
            <div className="grid grid-cols-2 gap-12 pt-12">
              <div>
                <p className="text-5xl font-serif text-white">17+</p>
                <p className="text-xs uppercase tracking-widest mt-2">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-5xl font-serif text-white">3.5k+</p>
                <p className="text-xs uppercase tracking-widest mt-2">
                  Global Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Clean Grid */}
      <section id="experience" className="section-padding">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between items-end mb-24">
            <h2 className="text-5xl md:text-7xl font-serif">
              Career <br /> Footprint
            </h2>
            <div className="text-right hidden md:block">
              <p className="text-xs uppercase tracking-widest opacity-40">
                Timeline
              </p>
              <p className="text-sm font-medium mt-2">2008 — 2026</p>
            </div>
          </div>

          <div className="divide-y divide-black/10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 group"
              >
                <div className="lg:col-span-3">
                  <span className="text-sm font-medium opacity-40">
                    {exp.period}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-2xl font-serif font-bold group-hover:translate-x-2 transition-transform duration-500">
                    {exp.company}
                  </h3>
                  <p className="text-sm uppercase tracking-widest mt-2 opacity-60">
                    {exp.role}
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <ul className="space-y-4">
                    {exp.details.map((detail, j) => (
                      <li
                        key={j}
                        className="text-lg font-light text-black/60 flex gap-4"
                      >
                        <span className="block w-1 h-1 bg-black mt-3 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards, Recognition & Events Section */}
      <section id="recognition" className="section-padding bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-4">Recognition & Impact</h2>
            <p className="text-muted-foreground uppercase tracking-widest text-xs font-bold">Last 6 Months Highlights</p>
          </div>

          <Tabs defaultValue="awards" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12 bg-black/5 p-1 rounded-none h-12">
              <TabsTrigger value="awards" className="rounded-none data-[state=active]:bg-black data-[state=active]:text-white uppercase tracking-widest text-[10px] font-bold">Awards & Honors</TabsTrigger>
              <TabsTrigger value="events" className="rounded-none data-[state=active]:bg-black data-[state=active]:text-white uppercase tracking-widest text-[10px] font-bold">Keynote & Speaking</TabsTrigger>
            </TabsList>
            
            <TabsContent value="awards" className="grid grid-cols-1 md:grid-cols-2 gap-8 outline-none">
              {[
                { 
                  title: "Best CSR Project (Women Empowerment)", 
                  org: "Indian Social Impact Awards", 
                  date: "Jan 2026", 
                  desc: "Recognized for EKI's commitment to social equity and clean energy access.",
                  link: "https://www.india-csr.com/eki-energy-services-honoured-with-indian-social-impact-awards/" 
                },
                { 
                  title: "Environment Protection Appreciation", 
                  org: "Rotary India National CSR Awards", 
                  date: "Dec 2025", 
                  desc: "Awarded for excellence in environmental stewardship and carbon project integrity.",
                  link: "https://enkingint.org/csr-awards-recognition/" 
                },
                { 
                  title: "Excellence in Clean Energy Initiative", 
                  org: "16th India CSR Awards", 
                  date: "Nov 2025", 
                  desc: "For the 'Clean Cooking Project' impacting rural communities globally.",
                  link: "https://indiacsr.in/eki-energy-services-wins-excellence-in-clean-energy-initiative/" 
                },
                { 
                  title: "Carbon Stewardship Award", 
                  org: "Green Climate Conclave", 
                  date: "June 2025", 
                  desc: "Recognized for driving climate action and nature-based solutions.",
                  link: "https://enkingint.org/manish-dabkara-wins-carbon-stewardship-award/" 
                }
              ].map((award, i) => (
                <div key={i} className="bg-white p-10 border border-black/5 hover:border-black/20 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <Award className="w-8 h-8 opacity-20" />
                      <span className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-2 py-1">{award.date}</span>
                    </div>
                    <h4 className="text-xl font-serif font-bold mb-2">{award.title}</h4>
                    <p className="text-xs uppercase tracking-widest opacity-40 mb-4">{award.org}</p>
                    <p className="text-sm text-black/60 leading-relaxed mb-6">{award.desc}</p>
                  </div>
                  <a href={award.link} target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 hover:opacity-50 transition-opacity">
                    Read Announcement <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="events" className="grid grid-cols-1 md:grid-cols-2 gap-8 outline-none">
              {[
                { 
                  title: "India Energy Week 2026", 
                  role: "Technical Committee Member", 
                  location: "New Delhi", 
                  date: "Feb 2026", 
                  desc: "Shaping the technical discourse for India's premier energy transition forum.",
                  link: "https://www.indiaenergyweek.com/speakers/2026-technical-committee/manish-dabkara/"
                },
                { 
                  title: "World Utilities Congress", 
                  role: "Executive Committee Member", 
                  location: "Abu Dhabi", 
                  date: "Jan 2026", 
                  desc: "Strategic advisor for global utility decarbonization pathways.",
                  link: "https://www.worldutilitiescongress.com/speaker-collection/2025-executive-committee/manish-dabkara/"
                },
                { 
                  title: "RMM 2025 Amsterdam", 
                  role: "Featured Panelist", 
                  location: "Amsterdam", 
                  date: "April 2025", 
                  desc: "Discussing India's Renewable Energy Market prospects with global leaders.",
                  link: "https://www.renewablemarketmeet.com/speakers/manish-dabkara/"
                },
                { 
                  title: "COP29 Azerbaijan", 
                  role: "Keynote Speaker", 
                  location: "Baku", 
                  date: "Nov 2025", 
                  desc: "Addressed Article 6 implementation and private sector roles in climate finance.",
                  link: "https://enkingint.org/cop29-highlights-manish-dabkara/"
                }
              ].map((event, i) => (
                <div key={i} className="bg-white p-10 border border-black/5 hover:border-black/20 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <Globe className="w-8 h-8 opacity-20" />
                      <span className="text-[10px] font-bold uppercase tracking-widest border border-black px-2 py-1">{event.date}</span>
                    </div>
                    <h4 className="text-xl font-serif font-bold mb-2">{event.title}</h4>
                    <p className="text-xs uppercase tracking-widest opacity-40 mb-1">{event.role}</p>
                    <p className="text-[10px] font-bold mb-4 flex items-center gap-1">📍 {event.location}</p>
                    <p className="text-sm text-black/60 leading-relaxed mb-6">{event.desc}</p>
                  </div>
                  <a href={event.link} target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 hover:opacity-50 transition-opacity">
                    View Event Details <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="section-padding bg-black text-white border-t border-white/10">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-5xl font-serif">Latest <br /> Updates</h2>
            <p className="text-white/40 max-w-xs text-right hidden md:block uppercase tracking-widest text-xs">Jan — Feb 2026</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <Badge variant="outline" className="text-white border-white/20">Press Release</Badge>
              <h4 className="text-xl font-serif font-bold">Subsidiary Acquisition</h4>
              <p className="text-sm text-white/60 leading-relaxed mb-4">EKI successfully acquired an additional 14.11% stake in GHG, making it a wholly-owned subsidiary to strengthen its environmental services portfolio.</p>
              <a href="https://www.devdiscourse.com/article/headlines/3779105-eki-energy-services-faces-financial-setback-amid-strategic-acquisition" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                View Full PR <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="space-y-4">
              <Badge variant="outline" className="text-white border-white/20">Market Outlook</Badge>
              <h4 className="text-xl font-serif font-bold">2026 Carbon Reset</h4>
              <p className="text-sm text-white/60 leading-relaxed mb-4">Manish Dabkara highlights that Asia's nature-based carbon markets are resetting, with a shift toward high-quality ARR and blue carbon assets.</p>
              <a href="https://x.com/manishdabkara1/status/2006252988860600524" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                Read on X <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="space-y-4">
              <Badge variant="outline" className="text-white border-white/20">Budget 2026</Badge>
              <h4 className="text-xl font-serif font-bold">Policy Continuity</h4>
              <p className="text-sm text-white/60 leading-relaxed mb-4">Commented on expectations for the FY27 Budget, focusing on policy stability for renewable energy deployment and corporate decarbonization.</p>
              <a href="https://www.business-standard.com/budget/news/renewable-energy-industry-seeks-sops-for-r-d-affordable-green-finance-in-fy27-budget-126011300244.html" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 text-white/40 hover:text-white transition-colors">
                Read Article <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Roles */}
      <section id="leadership" className="section-padding bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-center text-4xl font-serif mb-20 underline underline-offset-[20px] decoration-black/10">
            Global Governance Roles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-black/5 border border-black/5">
            {[
              { title: "IIT Kanpur", role: "Guest Faculty (Industry)" },
              { title: "SEPC India", role: "Committee Member (Env. Services)" },
              { title: "IEEMA", role: "National Executive Council" },
              { title: "ICVCM London", role: "Work Programme Member" },
              {
                title: "Carbon Registry-India",
                role: "Governing Council Member",
              },
              {
                title: "World Utilities Congress",
                role: "Executive Committee",
              },
            ].map((role, i) => (
              <div
                key={i}
                className="bg-white p-12 hover:bg-black hover:text-white transition-colors duration-500"
              >
                <p className="text-xs uppercase tracking-widest opacity-40 mb-4">
                  Ecosystem
                </p>
                <h4 className="text-xl font-serif font-bold mb-2">
                  {role.title}
                </h4>
                <p className="text-sm opacity-60">{role.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row gap-24">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-serif">
                Academic <br /> Foundation
              </h2>
            </div>
            <div className="md:w-2/3 space-y-12">
              {education.map((edu, i) => (
                <div key={i} className="border-l-2 border-black pl-8">
                  <p className="text-sm uppercase tracking-widest opacity-40 mb-2">
                    {edu.year}
                  </p>
                  <h4 className="text-2xl font-serif font-bold">
                    {edu.school}
                  </h4>
                  <p className="text-lg font-light text-black/60">
                    {edu.degree}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Final Author Style */}
      <section id="contact" className="section-padding border-t border-black/5">
        <div className="max-w-screen-xl mx-auto text-center py-24 space-y-12">
          <h2 className="text-6xl md:text-9xl font-serif">
            Get in <span className="italic">Touch.</span>
          </h2>
          <div className="flex flex-col items-center gap-6">
            <a
              href="mailto:manish@enkingint.org"
              className="text-2xl md:text-4xl font-light hover:opacity-50 transition-opacity underline underline-offset-[12px] decoration-black/20"
            >
              manish@enkingint.org
            </a>
            <div className="flex gap-10 mt-12">
              <a
                href="https://linkedin.com/in/manishdabkara"
                className="text-xs uppercase tracking-[0.2em] font-bold hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://www.enkingint.org"
                className="text-xs uppercase tracking-[0.2em] font-bold hover:underline"
              >
                Company
              </a>
              <a
                href="#"
                className="text-xs uppercase tracking-[0.2em] font-bold hover:underline"
              >
                TEDx Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-black/5 text-center text-[10px] uppercase tracking-widest opacity-40 font-bold">
        © 2026 Manish Dabkara — Leading the global decarbonization movement.
      </footer>
    </div>
  );
}
