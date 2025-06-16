import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Globe, Shield, Palette, CheckCircle2, Users, Target, Cpu, Cloud, Wifi, Code2, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Contact } from "@/components/home/Contact";
<<<<<<< HEAD
=======
import lottie from "lottie-web";
>>>>>>> 8e9894a8c3280e5ed6f21b835329f7016779e2a3

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Website Development",
    description: "Custom-built, responsive websites that drive conversions and growth for your business."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Digital Marketing",
    description: "Strategic online marketing solutions to increase your brand visibility and reach."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Tech Support & IT",
    description: "Comprehensive IT support services to keep your business running smoothly."
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Design & Software",
    description: "Beautiful designs and custom software solutions tailored to your needs."
  }
];

const stats = [
  {
    value: "200+",
    label: "Happy Clients",
    description: "Across South Africa"
  },
  {
    value: "95%",
    label: "Client Satisfaction",
    description: "Based on feedback"
  },
  {
    value: "5+",
    label: "Years Experience",
    description: "In digital services"
  }
];

const testimonials = [
  {
    quote: "Corlate Technology transformed our online presence. Their team delivered a beautiful website that perfectly represents our brand and has significantly increased our customer engagement.",
    author: "Sarah Johnson",
    role: "Marketing Director, RetailTech SA"
  },
  {
    quote: "The digital marketing strategy developed by Corlate has helped us reach new customers and grow our business. Their expertise and dedication to our success is outstanding.",
    author: "Michael van der Merwe",
    role: "CEO, BuildRight Construction"
  },
  {
    quote: "Working with Corlate has been a game-changer for our IT infrastructure. Their support team is responsive, knowledgeable, and always goes the extra mile.",
    author: "David Nkosi",
    role: "Operations Manager, LogiTech Solutions"
  }
];

const AnimatedGradientBG = () => (
  <motion.div
    className="absolute inset-0 w-full h-full z-0"
    initial={{ background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)" }}
    animate={{
      background: [
        "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
        "linear-gradient(135deg, #42a5f5 0%, #7c3aed 100%)",
        "linear-gradient(135deg, #06b6d4 0%, #1976d2 100%)",
        "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)"
      ]
    }}
    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
    style={{ backgroundSize: "200% 200%" }}
  />
);

const AnimatedTechIcons = () => {
  const icons = [
    { icon: <Cpu className="h-6 w-6 text-cyan-400" />, style: "top-12 left-10" },
    { icon: <Cloud className="h-7 w-7 text-blue-300" />, style: "top-32 right-24" },
    { icon: <Wifi className="h-5 w-5 text-purple-400" />, style: "bottom-20 left-1/4" },
    { icon: <Code2 className="h-6 w-6 text-indigo-400" />, style: "bottom-10 right-1/3" },
    { icon: <Database className="h-7 w-7 text-sky-400" />, style: "top-1/2 left-1/2" },
  ];
  return (
    <>
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute z-0 ${item.style}`}
          initial={{ y: 0, opacity: 0.7, scale: 1 }}
          animate={{
            y: [0, -10, 0, 10, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 6 + i, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        >
          {item.icon}
        </motion.div>
      ))}
    </>
  );
};

const AnimatedModernTechMotifSVG = () => (
  <motion.svg
    className="absolute left-0 top-0 w-full h-full opacity-25 pointer-events-none select-none z-0"
    viewBox="0 0 1440 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    initial={{ opacity: 0.18 }}
    animate={{ opacity: [0.18, 0.28, 0.18] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  >
    <defs>
      <linearGradient id="techGradient" x1="0" y1="0" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="40%" stopColor="#1976d2" />
        <stop offset="70%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#42a5f5" />
      </linearGradient>
    </defs>
    <motion.g
      stroke="url(#techGradient)"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: [0.7, 1, 0.7] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    >
      <polyline points="100,100 300,60 600,180 900,120 1200,200 1340,100" />
      <polyline points="200,300 500,220 800,340 1100,260 1400,320" />
      <polyline points="0,200 400,100 800,200 1200,100 1440,180" />
    </motion.g>
    {/* Colorful nodes */}
    <motion.circle cx="300" cy="60" r="7" fill="#06b6d4" animate={{ cy: [60, 50, 60] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
    <motion.circle cx="600" cy="180" r="7" fill="#1976d2" animate={{ cy: [180, 170, 180] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
    <motion.circle cx="900" cy="120" r="7" fill="#7c3aed" animate={{ cy: [120, 110, 120] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
    <motion.circle cx="1200" cy="200" r="7" fill="#42a5f5" animate={{ cy: [200, 190, 200] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
    <motion.circle cx="500" cy="220" r="5" fill="#06b6d4" animate={{ cy: [220, 210, 220] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
    <motion.circle cx="800" cy="340" r="5" fill="#1976d2" animate={{ cy: [340, 330, 340] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
    <motion.circle cx="1100" cy="260" r="5" fill="#7c3aed" animate={{ cy: [260, 250, 260] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
    <motion.circle cx="400" cy="100" r="4" fill="#42a5f5" animate={{ cy: [100, 90, 100] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
    <motion.circle cx="800" cy="200" r="4" fill="#06b6d4" animate={{ cy: [200, 190, 200] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
    <motion.circle cx="1200" cy="100" r="4" fill="#1976d2" animate={{ cy: [100, 90, 100] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
  </motion.svg>
);

const HeroTechIcon = () => (
  <svg
    className="mx-auto mb-4 h-12 w-12 text-primary"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="8" y="8" width="32" height="32" rx="8" fill="#1976d2" fillOpacity="0.08" />
    <path d="M16 24h16M24 16v16" stroke="#1976d2" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="24" cy="24" r="3.5" fill="#1976d2" />
  </svg>
);

const trustedLogos = [
  // Placeholder logo URLs (replace with real ones as needed)
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
];

const FeaturesMotifSVG = () => (
  <svg
    className="absolute left-0 bottom-0 w-full h-32 opacity-10 pointer-events-none select-none"
    viewBox="0 0 1440 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
  >
    <polyline points="0,64 360,32 720,96 1080,48 1440,64" stroke="#1976d2" strokeWidth="2" fill="none" />
    <circle cx="360" cy="32" r="4" fill="#1976d2" />
    <circle cx="720" cy="96" r="4" fill="#1976d2" />
    <circle cx="1080" cy="48" r="4" fill="#1976d2" />
    <circle cx="0" cy="64" r="4" fill="#1976d2" />
    <circle cx="1440" cy="64" r="4" fill="#1976d2" />
  </svg>
);

const featureIcons = [
  <Code key="code" className="h-8 w-8 text-primary" />,
  <Globe key="globe" className="h-8 w-8 text-primary" />,
  <Shield key="shield" className="h-8 w-8 text-primary" />,
  <Palette key="palette" className="h-8 w-8 text-primary" />,
];

const MinimalHeroSVG = () => (
  <svg className="absolute right-8 bottom-8 w-24 h-8 opacity-30 pointer-events-none select-none" viewBox="0 0 96 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="8" y1="16" x2="88" y2="16" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" />
    <circle cx="8" cy="16" r="3" fill="#1976d2" />
    <circle cx="88" cy="16" r="2" fill="#1976d2" />
    <circle cx="48" cy="16" r="1.5" fill="#1976d2" />
  </svg>
);

const Index = () => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationContainer.current) {
<<<<<<< HEAD
      // Placeholder for the removed lottie usage
=======
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://lottie.host/a92e6f04-1416-491c-9e81-823fa156d7f9/RLIliDfaYZ.lottie"
      });

      return () => {
        anim.destroy();
      };
>>>>>>> 8e9894a8c3280e5ed6f21b835329f7016779e2a3
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-36 flex items-center justify-center min-h-[60vh] overflow-hidden">
        <MinimalHeroSVG />
        <div className="container relative z-10 flex flex-col items-center justify-center">
          <div className="max-w-2xl w-full mx-auto flex flex-col items-center text-center">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase">
              Digital Solutions for Modern Business
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 font-sans tracking-tight leading-tight">
              Simple. Powerful. Tech.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 font-medium">
              We build reliable, modern digital solutions to help your business thrive in a connected world.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Our Services</h2>
            <p className="text-muted-foreground">
              Digital solutions to help your business thrive in a connected world.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-background border border-border flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4">{featureIcons[index % featureIcons.length]}</div>
                <h3 className="font-semibold mb-2 text-primary text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-medium mb-1 text-card-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Why Choose Corlate?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-card-foreground">Local Expertise</h3>
                    <p className="text-muted-foreground">
                      Deep understanding of the South African market and business landscape.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-card-foreground">Client-Centric Approach</h3>
                    <p className="text-muted-foreground">
                      We put your business goals first and deliver solutions that drive real value.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium text-card-foreground">Results-Driven</h3>
                    <p className="text-muted-foreground">
                      Focus on delivering measurable outcomes and ROI for your business.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Don't just take our word for it - hear from some of our satisfied clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="p-6 rounded-xl bg-background border border-border shadow-sm hover:shadow-md transition-all duration-300"
              >
                <p className="text-muted-foreground mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="font-medium text-card-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-8">
              Let's work together to create digital solutions that drive your business forward.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Index;
