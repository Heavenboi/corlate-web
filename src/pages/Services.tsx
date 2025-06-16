import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Globe, Shield, Palette, ArrowRight, Smartphone, Search, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Contact } from "@/components/home/Contact";
import { SectionContainer } from "@/components/layout/Container";

const services = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Website Development",
    description: "Custom-built, responsive websites that drive conversions and growth for your business.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Content Management Systems",
      "Progressive Web Apps"
    ],
    href: "/services/web-development"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Digital Marketing",
    description: "Strategic online marketing solutions to increase your brand visibility and reach.",
    features: [
      "Social Media Marketing",
      "Email Marketing Campaigns",
      "Content Marketing",
      "PPC Advertising"
    ],
    href: "/services/digital-marketing"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Tech Support & IT",
    description: "Comprehensive IT support services to keep your business running smoothly.",
    features: [
      "24/7 Technical Support",
      "Network Security",
      "Cloud Solutions",
      "Data Backup & Recovery"
    ],
    href: "/services/tech-support"
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Design & Software",
    description: "Beautiful designs and custom software solutions tailored to your needs.",
    features: [
      "UI/UX Design",
      "Brand Identity",
      "Custom Software Development",
      "Mobile Applications"
    ],
    href: "/services/design-software"
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive organic traffic to your website.",
    features: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Link Building"
    ],
    href: "/services/seo"
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "iOS Development",
      "Android Development",
      "React Native Apps",
      "App Store Optimization"
    ],
    href: "/services/mobile-apps"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <SectionContainer className="py-20 md:py-28">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From web development to digital marketing, we offer end-to-end services to help your business thrive in the digital age.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get Started</Link>
            </Button>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Services List Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-6 rounded-xl bg-background border border-border flex flex-col items-center text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/40 hover:scale-105 cursor-pointer"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-semibold mb-2 text-primary text-lg">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <Link to={service.href} className="inline-flex items-center text-primary font-medium hover:underline group transition-colors">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how our services can help your business grow and succeed in the digital world.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 focus:ring-2 focus:ring-primary/40 focus:outline-none transition-transform hover:scale-105 shadow-md">
              <Link to="/contact" className="inline-flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default Services;
