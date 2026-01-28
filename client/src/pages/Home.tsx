import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Globe, 
  Award, 
  TrendingUp, 
  Linkedin, 
  Mail, 
  ExternalLink,
  ChevronRight,
  MapPin,
  Calendar,
  Zap,
  Building
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const experiences = [
    {
      company: "EKI RED - EnKing International Real Estate & Developers",
      role: "Managing Director",
      period: "Jan 2026 - Present",
      description: "Redefining Indore’s growth with sustainable design and refined luxury. Strategic land aggregation for renewable energy projects nationwide."
    },
    {
      company: "EKI Energy Services Ltd (EnKing International)",
      role: "Chairman & MD",
      period: "Aug 2008 - Present",
      description: "Leading developer and supplier of carbon credits globally. Reached Unicorn status ($1B+ valuation) in Jan 2022. Served 3,500+ clients across 40+ countries."
    },
    {
      company: "Carbon Markets Association of India",
      role: "President",
      period: "Oct 2022 - Present",
      description: "Empowering India's growth to Net Zero by 2070. Supporting government and industry on domestic ETS, Article 6, and Voluntary Carbon Markets."
    }
  ];

  const highlights = [
    { icon: <Globe className="w-6 h-6" />, label: "Unicorn Founder", value: "$1B+ Valuation" },
    { icon: <Zap className="w-6 h-6" />, label: "Credits Mobilized", value: "200M+ Offsets" },
    { icon: <Building className="w-6 h-6" />, label: "Global Reach", value: "40+ Countries" },
    { icon: <Award className="w-6 h-6" />, label: "Recognition", value: "Fortune 40U40" }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-primary/5 px-6 py-4 flex justify-between items-center">
        <span className="font-serif text-xl font-bold text-primary tracking-tight">MANISH DABKARA</span>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#leadership" className="hover:text-primary transition-colors">Leadership</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-20 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(45,160,80,0.05),transparent_50%)]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-8"
          >
            <Badge variant="outline" className="px-4 py-1 border-primary/20 text-primary bg-primary/5">
              Building the Future of Decarbonization
            </Badge>
            <h1 className="text-6xl lg:text-8xl font-serif font-bold leading-[0.9] text-primary">
              Integrity in <br /> <span className="text-foreground/80">Climate Action.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl font-light leading-relaxed">
              Chairman & MD of EKI Energy Services Ltd. Reached unicorn status by bringing credibility and scale to international environmental commodity markets.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground group" data-testid="button-contact">
                Work Together <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" data-testid="button-linkedin">
                <Linkedin className="mr-2 w-4 h-4" /> Profile
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] bg-muted shadow-2xl">
              <img 
                src="/attached_assets/Untitled_design_1769619641043.png" 
                alt="Manish Dabkara" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Abstract background element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Highlight Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {highlights.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border-l border-primary/10 space-y-3"
            >
              <div className="text-primary">{item.icon}</div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{item.label}</p>
                <p className="text-xl font-serif font-bold text-primary">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 lg:px-20 bg-primary/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary">Key Initiatives</h2>
              <p className="text-muted-foreground max-w-md">Driving global decarbonization through listed enterprise leadership and strategic policy advocacy.</p>
            </div>
          </div>

          <div className="grid gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-0 flex flex-col md:flex-row">
                    <div className="w-1 bg-primary/20 group-hover:bg-primary transition-colors" />
                    <div className="p-8 flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                          <p className="text-muted-foreground font-medium">{exp.role}</p>
                        </div>
                        <Badge variant="secondary" className="w-fit">{exp.period}</Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Ecosystem Section */}
      <section id="leadership" className="py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary">Global Impact Roles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Shaping international standards and market readiness across industries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-primary/5 bg-primary/[0.01] hover:bg-primary/[0.03] transition-colors">
              <TrendingUp className="w-8 h-8 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-3">CII Subgroup Chair</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Leading Regulatory Carbon Credit subgroup under National Committee on Bioenergy, supporting India's 2070 Net Zero goal.</p>
            </div>
            <div className="p-8 rounded-2xl border border-primary/5 bg-primary/[0.01] hover:bg-primary/[0.03] transition-colors">
              <Globe className="w-8 h-8 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-3">ICVCM Member</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Contributing to transparency and standardization through Continuous Improvement Work Programmes in London.</p>
            </div>
            <div className="p-8 rounded-2xl border border-primary/5 bg-primary/[0.01] hover:bg-primary/[0.03] transition-colors">
              <Leaf className="w-8 h-8 text-primary mb-6" />
              <h4 className="text-xl font-bold mb-3">Amrut Nature Solutions</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Chairman of the JV between EnKing & Shell, focusing on nature-based solutions and ecosystem restoration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Footer Grid */}
      <section className="py-20 border-t border-primary/5 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 opacity-60 grayscale">
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest">Fortune India</span>
            <p className="font-serif text-sm">40 Under 40</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest">TEDx Speaker</span>
            <p className="font-serif text-sm">Path to a Greener Future</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest">GTD Trainer</span>
            <p className="font-serif text-sm">Productivity Expert</p>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest">Unicorn Status</span>
            <p className="font-serif text-sm">1st Carbon Credit Unicorn</p>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 px-6 lg:px-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold leading-tight">Let's build a <br /> sustainable legacy.</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <a href="mailto:manish@enkingint.org" className="flex items-center justify-center md:justify-start gap-2 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" /> manish@enkingint.org
              </a>
              <a href="https://linkedin.com/in/manishdabkara" className="flex items-center justify-center md:justify-start gap-2 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" /> /manishdabkara
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right space-y-4">
            <p className="text-sm opacity-60">Indore, Madhya Pradesh, India</p>
            <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-10">
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs opacity-40">
          <p>© 2026 Manish Dabkara. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://www.enkingint.org" target="_blank" rel="noreferrer" className="flex items-center gap-1">EKI Energy Services <ExternalLink className="w-3 h-3" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
