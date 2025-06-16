import { SectionTitle } from "@/components/ui/SectionTitle";
import { Lightbulb, Briefcase, Store, Smartphone, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionContainer } from "@/components/layout/Container";

const processSteps = [
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Discovery & Strategy",
    description: "We listen to your goals and challenges, then craft a digital strategy tailored to your business."
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Design & Build",
    description: "Our team designs and develops beautiful, high-performing digital solutions."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Launch & Grow",
    description: "We launch your project, monitor results, and help you grow with ongoing support."
  }
];

const sampleSolutions = [
  {
    icon: <Store className="h-8 w-8 text-primary" />,
    title: "For Local Businesses",
    description: "Get a modern website, local SEO, and digital marketing to attract more customers in your area."
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "For Startups",
    description: "Launch fast with a scalable web presence, branding, and growth-focused digital strategy."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "For Organizations",
    description: "Empower your team and audience with custom portals, apps, and ongoing tech support."
  }
];

const whyBizcore = [
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Local Expertise",
    description: "We understand the South African market and help you stand out locally and globally."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Innovation",
    description: "We use the latest technology and creative thinking to deliver unique solutions."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Dedicated Support",
    description: "Our team is always here to help you grow, every step of the way."
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionContainer className="relative overflow-hidden py-20 md:py-28">
        {/* Soft blue/purple gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e3f0ff] via-[#ede7f6] to-[#f3e5f5] dark:from-[#1a237e]/80 dark:via-[#7e57c2]/60 dark:to-[#0d1333]/80 z-0" />
        {/* Glassmorphism overlay */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] max-w-3xl max-h-96 bg-white/30 dark:bg-white/10 rounded-3xl blur-2xl z-0" />
        {/* Floating SVG shape */}
        <svg className="absolute right-[-80px] top-[-60px] w-64 h-64 opacity-30 z-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#7e57c2" fillOpacity="0.15" d="M44.8,-67.2C57.2,-59.2,65.7,-44.2,70.2,-28.7C74.7,-13.2,75.2,2.8,70.2,16.7C65.2,30.6,54.7,42.4,42.1,51.2C29.5,60,14.7,65.8,-0.7,66.7C-16.1,67.6,-32.2,63.6,-44.2,54.2C-56.2,44.8,-64.1,30,-67.2,14.2C-70.3,-1.6,-68.6,-18.4,-60.7,-30.7C-52.8,-43,-38.7,-50.8,-24.2,-57.2C-9.7,-63.6,5.2,-68.6,20.7,-70.2C36.2,-71.8,51.2,-70.2,44.8,-67.2Z" transform="translate(100 100)" />
        </svg>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Solutions for Your Business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl text-muted-foreground mb-8"
          >
            Discover how Bizcore empowers South African businesses with creative digital solutions and a proven process.
          </motion.p>
        </div>
      </SectionContainer>

      {/* Why Bizcore Section */}
      <SectionContainer>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-6"
        >
          Why Choose Bizcore?
        </motion.h2>
        <p className="text-center text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Bizcore is your partner for digital growth. We combine local knowledge, innovative thinking, and dedicated support to help your business thrive.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
          {whyBizcore.map((item) => (
            <div key={item.title} className="bg-card/80 border rounded-2xl p-8 text-center shadow-md">
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/contact">Start Your Journey with Bizcore</Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Our Process Section */}
      <SectionContainer>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Process
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="bg-card/80 border rounded-2xl p-8 flex-1 min-w-[220px] text-center shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionContainer>

      {/* Sample Solutions Section */}
      <SectionContainer>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Sample Solutions
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {sampleSolutions.map((solution, idx) => (
            <motion.div
              key={solution.title}
              className="bg-card/80 border rounded-2xl p-8 text-center shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionContainer>

      {/* Call to Action Section */}
      <SectionContainer>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
          <p className="text-muted-foreground mb-8">
            Let's talk about your goals and how we can help you achieve them. Whether you're a local business, startup, or organization, we're here to help you grow.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
};

export default Solutions;
