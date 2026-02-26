import { motion } from "motion/react";
import { 
  Code2, 
  Monitor, 
  Smartphone, 
  Globe, 
  BarChart3, 
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isScrolled ? "bg-brand-600" : "bg-white"}`}>
            <Code2 className={isScrolled ? "text-white" : "text-brand-600"} size={24} />
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${isScrolled ? "text-brand-900" : "text-white"}`}>
            IDEMU<span className="text-brand-500">SYSTEM</span>
          </span>
        </div>
        
        <div className={`hidden md:flex items-center gap-8 font-medium ${isScrolled ? "text-brand-800" : "text-white/90"}`}>
          <a href="#home" className="hover:text-brand-500 transition-colors">Home</a>
          <a href="#services" className="hover:text-brand-500 transition-colors">Services</a>
          <a href="#projects" className="hover:text-brand-500 transition-colors">Projects</a>
          <a href="#divisions" className="hover:text-brand-500 transition-colors">Divisions</a>
          <a href="#about" className="hover:text-brand-500 transition-colors">About</a>
          <a 
            href="https://wa.me/6281234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-5 py-2 rounded-full font-semibold transition-all ${isScrolled ? "bg-brand-600 text-white hover:bg-brand-700" : "bg-white text-brand-900 hover:bg-brand-50"}`}
          >
            Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/tech-workspace/1920/1080" 
          alt="Technology Workspace" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 via-brand-900/60 to-brand-950/90" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          PT Idemu Sistem Sinergi
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-light text-brand-100 mb-8"
        >
          Empowering Innovation Through Advanced Technology
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          We are pioneers in IT solutions, combining creative thinking with cutting-edge technology to build digital ecosystems that drive business growth and social impact.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#divisions" className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-brand-500/30 flex items-center gap-2">
            Explore Our Solutions <ArrowRight size={20} />
          </a>
          <a href="#about" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm rounded-full font-bold text-lg transition-all">
            Learn More
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white clip-path-hero" style={{ clipPath: 'ellipse(70% 100% at 50% 100%)' }}></div>
    </section>
  );
};

const Shortcuts = () => {
  const shortcuts = [
    { icon: <BarChart3 size={28} />, title: "Our Services", color: "bg-blue-500" },
    { icon: <Globe size={28} />, title: "Digital Marketing", color: "bg-emerald-500" },
    { icon: <Smartphone size={28} />, title: "Mobile App Development", color: "bg-indigo-500" },
    { icon: <Monitor size={28} />, title: "Website Development", color: "bg-orange-500" },
    { icon: <MessageSquare size={28} />, title: "IT Consulting & Support", color: "bg-rose-500" },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {shortcuts.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className={`w-20 h-20 rounded-full ${item.color} text-white flex items-center justify-center shadow-xl mb-4 transition-transform group-hover:scale-110`}>
                {item.icon}
              </div>
              <span className="font-semibold text-brand-900 max-w-[120px] leading-tight">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Smart City Dashboard",
      category: "UI/UX & Data Analytics",
      image: "https://i.pinimg.com/736x/9b/47/f8/9b47f8874863821ae08fe3ee8cca1f82.jpg",
      desc: "A comprehensive real-time monitoring system for urban infrastructure and public services."
    },
    {
      title: "FinTech Mobile App",
      category: "Mobile Development",
      image: "https://i.pinimg.com/736x/27/69/9f/27699f998a7faec9dc335d2f7a1ed205.jpg",
      desc: "Secure and intuitive digital banking experience with advanced biometric authentication."
    },
    {
      title: "E-Commerce Ecosystem",
      category: "Web Development",
      image: "https://i.pinimg.com/1200x/3c/c7/e2/3cc7e2a03a0e197dd75fd854e3b6c844.jpg",
      desc: "Scalable multi-vendor marketplace platform with integrated logistics and payment gateways."
    }
  ];

  return (
    <section id="projects" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-display text-4xl font-bold text-brand-950 mb-4">Latest Projects & Insights</h2>
            <p className="text-brand-700 max-w-xl">Showcasing our recent innovations and digital transformations across various industries.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-brand-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-brand-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-brand-950 mb-3 group-hover:text-brand-600 transition-colors">{project.title}</h3>
                <p className="text-brand-700 mb-6 line-clamp-2">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Divisions = () => {
  const divisions = [
    {
      title: "PROGRAMMER",
      icon: <Code2 size={40} />,
      desc: "Our elite coding squad specializing in robust backend architectures, scalable APIs, and high-performance software engineering.",
      skills: ["Java", "Python", "Node.js", "Go"]
    },
    {
      title: "WEB DESIGN",
      icon: <Monitor size={40} />,
      desc: "Creative visionaries crafting immersive UI/UX experiences that blend aesthetic beauty with functional precision and accessibility.",
      skills: ["Figma", "React", "Tailwind", "Three.js"]
    },
    {
      title: "DIGITAL MARKETING",
      icon: <BarChart3 size={40} />,
      desc: "Strategic experts driving growth through data-backed campaigns, SEO optimization, and high-impact social media presence.",
      skills: ["SEO", "SEM", "Content", "Analytics"]
    }
  ];

  return (
    <section id="divisions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-brand-950 mb-4">Our Leading Divisions</h2>
          <div className="w-20 h-1.5 bg-brand-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {divisions.map((div, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-white border border-brand-100 shadow-xl shadow-brand-900/5 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-8">
                {div.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-950 mb-4 tracking-tight">{div.title}</h3>
              <p className="text-brand-700 leading-relaxed mb-8">
                {div.desc}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {div.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 bg-brand-50 text-brand-600 text-xs font-semibold rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Ecosystem = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/digital-network/1920/1080" 
          alt="Digital Network" 
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Our Technology Ecosystem
            </h2>
            <div className="space-y-6 text-brand-100 text-lg leading-relaxed">
              <p>
                Founded on the principles of synergy and innovation, PT Idemu Sistem Sinergi has evolved from a small tech collective into a powerhouse of digital transformation.
              </p>
              <p>
                Our vision is to be the catalyst for a superior digital generation, bridging the gap between complex technology and human-centric solutions. We don't just build software; we build the future.
              </p>
              <p className="font-semibold text-brand-400">
                "Commitment to building a superior generation through innovation."
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">150+</div>
                <div className="text-brand-300 text-sm uppercase tracking-widest font-bold">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">45+</div>
                <div className="text-brand-300 text-sm uppercase tracking-widest font-bold">Expert Engineers</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full border-2 border-brand-500/30 p-8 animate-pulse-slow">
              <div className="w-full h-full rounded-full border-2 border-brand-500/50 p-8">
                <div className="w-full h-full rounded-full bg-brand-500/10 flex items-center justify-center backdrop-blur-sm overflow-hidden border border-brand-500/20">
                  <img 
                    src="https://picsum.photos/seed/innovation/600/600" 
                    alt="Innovation" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 size={120} className="text-white opacity-40" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-600 rounded-2xl flex items-center justify-center shadow-2xl animate-bounce-slow">
              <Smartphone className="text-white" size={32} />
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-400 rounded-full flex items-center justify-center shadow-2xl animate-float">
              <Globe className="text-white" size={40} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-brand-500 flex items-center justify-center">
                <Code2 className="text-white" size={24} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                IDEMU<span className="text-brand-500">SYSTEM</span>
              </span>
            </div>
            <p className="text-brand-300 leading-relaxed mb-8">
              Leading the way in digital innovation and professional IT services. We transform ideas into reality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-500 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-brand-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#divisions" className="hover:text-white transition-colors">Divisions</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-brand-300">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-500 shrink-0" />
                <span>Jl. Teknologi Inovasi No. 88, Digital Hub, Jakarta 12345, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-500 shrink-0" />
                <span>+62 21 555 0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-500 shrink-0" />
                <span>hello@idemu.co.id</span>
              </li>
              <li className="pt-4">
                <a 
                  href="https://wa.me/6281234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  <MessageSquare size={18} /> Free Consultation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-brand-300 mb-4 text-sm">Stay updated with our latest tech insights.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors"
              />
              <button className="bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-400 text-sm">
            © 2026 PT Idemu Sistem Sinergi. All rights reserved.
          </p>
          <div className="flex gap-8 text-brand-400 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Shortcuts />
      <Projects />
      <Divisions />
      <Ecosystem />
      <Footer />
    </div>
  );
}
