/**
 * @license
 * SPDX-License-Identifier: Apache-2.0*/
import ecommerce from "./assets/images/ecommerce.jpg";
import watch from "./assets/images/watch.jpg";
import shopify from "./assets/images/shopify.jpg";
import funnel from "./assets/images/funnel.jpg";
import branding from "./assets/images/branding.jpg";
import social from "./assets/images/social.jpg";
import analytics from "./assets/images/analytics.jpg";
import convImg from "./assets/images/slide4.jpg";
import revenueImg from "./assets/images/slide10.jpg";
import metaImg from "./assets/images/slide8.jpg";
import salesImg from "./assets/images/slide1.jpg";
import cpcImg from "./assets/images/slide2.jpg";
import growthImg from "./assets/images/slide3.jpg";
import slide1 from "./assets/images/slide1.jpg";
import slide2 from "./assets/images/slide2.jpg";
import slide3 from "./assets/images/slide3.jpg";
import slide4 from "./assets/images/slide4.jpg";
import slide5 from "./assets/images/slide5.jpg";
import slide6 from "./assets/images/slide6.jpg";
import slide7 from "./assets/images/slide7.jpg";
import slide8 from "./assets/images/slide8.jpg";
import slide9 from "./assets/images/slide9.jpg";
import slide10 from "./assets/images/slide10.jpg";
import { motion } from "motion/react";
import { 
  TrendingUp, 
  ShoppingBag, 
  BarChart3, 
  Target, 
  Gem, 
  Smartphone, 
  Zap, 
  MessageSquare,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  Star
} from "lucide-react";

const stats = [
{
    title: "Store Conversion Optimization",
    desc: "Achieved a 7.23% conversion rate through strategic UI/UX audits and precision Meta Ads targeting.",
    image: convImg,
    icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
  },
  {
    title: "E-commerce Revenue Scaling",
    desc: "Generated over PKR 1.5M in sales by implementing high-converting Shopify funnels and scaling.",
    image: revenueImg,
    icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
  },
  {
    title: "Meta Ads ROAS Success",
    desc: "Delivered a consistent 8.33x Return on Ad Spend (ROAS) for premium lifestyle brands.",
    image: metaImg,
    icon: <Target className="w-5 h-5 text-emerald-400" />,
  },
  {
    title: "Daily Sales Performance",
    desc: "Successfully scaled daily store revenue to PKR 246K with high-intent audience targeting.",
    image: salesImg,
    icon: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
  },
  {
    title: "Low CPC Traffic Generation",
    desc: "Optimized ad campaigns to achieve a low CPC of PKR 7.73, driving massive cost-effective traffic.",
    image: cpcImg,
    icon: <Zap className="w-5 h-5 text-emerald-400" />,
  },
  {
    title: "Business Growth Analytics",
    desc: "Detailed tracking and performance reporting to ensure sustainable month-on-month growth.",
    image: growthImg,
    icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
  },
];

const projects = [
  {
    title: "Luxury Watch Marketing",
    image: watch,
    desc: "Strategic Meta Ads campaigns for high-end luxury watch brands.",
  },
  {
    title: "Shopify Store Growth",
    image: shopify,
    desc: "Complete Shopify optimization and scaling strategies.",
  },
  {
    title: "Strategy & Funnel Planning",
    image: funnel,
    desc: "Custom sales funnels designed for maximum conversion.",
  },
  {
    title: "Brand Authority Scaling",
    image: branding,
    desc: "Building brand authority and market positioning.",
  },
  {
    title: "Social Media Mastery",
    image: social,
    desc: "Engaging content strategies across all social platforms.",
  },
  {
    title: "Performance Analytics",
    image: analytics,
    desc: "Data-driven insights for continuous improvement.",
  },
];

const demoImages = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
];

const testimonials = [
  {
    name: "James A",
    role: "CEO, Julie Brands",
    text: "Saifullah scaled our jewelry brand's ROAS from 2.1 to 6.5 within just two months. Exceptional strategy!"
  },
  {
    name: "Sarah L",
    role: "Founder, ChicVibe",
    text: "The way he manages Meta Ads for clothing niches is unmatched. Our daily sales doubled under his management."
  },
  {
    name: "Robert K",
    role: "Marketing Lead",
    text: "Professional, data-driven, and very transparent. Best decision for our Shopify store's growth."
  }
];

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#f5f5f5]/90 backdrop-blur-lg border-b border-black/5 text-black">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">
            Saifullah <span className="text-emerald-600">Portfolio</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-black/60">
            <a href="#" className="hover:text-black transition-colors">Home</a>
            <a href="#results" className="hover:text-black transition-colors">Results</a>
            <a href="#brands" className="hover:text-black transition-colors">Brands</a>
            <a href="#testimonials" className="hover:text-black transition-colors">Testimonials</a>
          </div>
          <a href="mailto:umersaifullah177@gmail.com" className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-2 rounded-full text-sm font-bold transition-all">
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Scaling E-commerce Brands <br />
              With <span className="text-gradient italic">Precision Marketing</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Expert Meta Ads Strategist & Shopify Growth Consultant helping brands achieve 
              unprecedented ROAS and sustainable revenue scaling.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium uppercase tracking-widest">
                Meta Ads Expert
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium uppercase tracking-widest">
                Shopify Scaling
              </div>
              <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium uppercase tracking-widest">
                Conversion Rate Optimization
              </div>
            </div>
            <div className="flex justify-center">
              <a href="mailto:umersaifullah177@gmail.com" className="bg-emerald-500 hover:bg-emerald-600 text-black px-10 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-emerald-500/20 hover:scale-105">
                Start Scaling Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Slider Marquee */}
      <div className="relative overflow-hidden py-12 border-y border-white/5 bg-white/1">
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#0a0a0a] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#0a0a0a] to-transparent z-10"></div>
        
        <motion.div 
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...demoImages, ...demoImages].map((img, i) => (
            <div key={i} className="shrink-0 w-80 h-52 rounded-2xl overflow-hidden border border-white/10 glass-card group">
              <img
  src={img}
  alt="slider"
  className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110 hover:shadow-xl"
/>
            </div>
          ))}
        </motion.div>
      </div>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Expert in <span className="text-gradient">E-commerce Transformation</span>
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                <p>
                  I specialize in transforming struggling E-commerce stores into high-revenue brands. 
                  Since 2021, my focus has been on data-driven Meta Ads and Technical SEO that actually converts. 
                  I don't believe in vanity metrics; I believe in ROAS, Scalability, and sustainable Growth. 
                  Whether it's Luxury Fashion or High-end Jewelry, I build the funnels that turn visitors into lifelong customers.
                </p>
                <p>
                  I don't just run ads; I build profitable ecosystems. With deep roots in digital marketing since 2021, 
                  I have mastered the art of taking brands from zero to consistent 6 and 7-figure revenues. 
                  My approach combines technical precision with creative strategy, ensuring every click translates into long-term growth for your brand.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full"></div>
              <div className="relative glass-card overflow-hidden rounded-3xl border-white/20">
                <img
  src={ecommerce}
  alt="E-commerce"
  className="w-full h-full object-cover rounded-2xl"
/>
              </div>
            </motion.div>
          </div>

          {/* Core Expertise Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Meta Ads", desc: "Scaling brands to 7-figures.", icon: <Target className="w-8 h-8" /> },
              { title: "Shopify SEO", desc: "Ranking high-intent keywords.", icon: <TrendingUp className="w-8 h-8" /> },
              { title: "CRO Strategy", desc: "Turning visitors into buyers.", icon: <Zap className="w-8 h-8" /> },
              { title: "Full-Funnel Ads", desc: "Mastering the customer journey.", icon: <BarChart3 className="w-8 h-8" /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Results Section */}
      <section id="results" className="py-20 px-6 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Proven Results & E-commerce Success</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 flex flex-col"
              >
                <div className="mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={stat.image} 
                    alt={stat.title} 
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  {stat.icon}
                  <h3 className="font-bold text-lg">{stat.title}</h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-6 grow">
                  {stat.desc}
                </p>
                <div className="flex items-center text-emerald-400 text-xs font-bold uppercase tracking-wider group cursor-pointer">
                  View Case Study <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results for Real Brands */}
      <section id="brands" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Real Results for Real Brands</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl aspect-4/5"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 p-8 w-full">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {project.desc}
                  </p>
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-black transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <p className="text-white/80 italic mb-8 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-white/40 text-xs uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
                <MessageSquare className="absolute top-8 right-8 w-8 h-8 text-white/5" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923204108738?text=Hello%20Saifullah,%20I'm%20interested%20in%20your%20services.%20How%20can%20you%20help%20me%20grow%20my%20business?"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-100 group"
      >
        <div className="absolute -inset-2 bg-emerald-500/20 blur-xl rounded-full group-hover:bg-emerald-500/40 transition-all duration-500"></div>
        <div className="relative w-16 h-16 bg-[#009966] text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/20 hover:scale-110 transition-all duration-300">
          <svg 
            viewBox="0 0 24 24" 
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.44h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </a>

      {/* Footer */}
      <footer className="py-5 px-6 bg-[#f5f5f5] text-black border-t border-black/">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
            <div className="text-3xl font-bold tracking-tighter">
              Saifullah <span className="text-emerald-600">Portfolio</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-black/60">
              <a href="#" className="hover:text-black transition-colors">Home</a>
              <a href="#results" className="hover:text-black transition-colors">Results</a>
              <a href="#brands" className="hover:text-black transition-colors">Brands</a>
              <a href="#testimonials" className="hover:text-black transition-colors">Testimonials</a>
            </div>
            <div className="flex gap-4">
              <a href="tel:+923204108738" className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all group relative">
                <Phone className="w-5 h-5" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">+92 320 4108738</span>
              </a>
              <a href="mailto:umersaifullah177@gmail.com" className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all group relative">
                <Mail className="w-5 h-5" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">umersaifullah177@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="text-center text-black/40 text-sm">
            <p className="mb-2">Contact: <a href="mailto:umersaifullah177@gmail.com" className="text-emerald-600 hover:underline">umersaifullah177@gmail.com</a></p>
            <p>© 2026 Saifullah Portfolio | Expert Web Developer & Meta Ads Strategist</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
