import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Contact } from "@/components/home/Contact";
import { SectionContainer } from "@/components/layout/Container";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/team/sarah.jpg",
    bio: "With over 15 years of experience in digital transformation, Sarah leads Corlate's vision of empowering businesses through technology.",
  },
  {
    name: "David Moyo",
    role: "Technical Director",
    image: "/team/david.jpg",
    bio: "David brings extensive expertise in software architecture and development, ensuring our solutions are built on solid technical foundations.",
  },
  {
    name: "Lisa Naidoo",
    role: "Creative Director",
    image: "/team/lisa.jpg",
    bio: "Lisa's innovative approach to design and user experience has helped countless clients achieve their digital goals.",
  },
  {
    name: "Michael van der Merwe",
    role: "Head of Digital Marketing",
    image: "/team/michael.jpg",
    bio: "Michael's strategic thinking and deep understanding of digital marketing helps our clients reach their target audience effectively.",
  },
];

const values = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to client service.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Collaboration",
    description: "We believe in working closely with our clients to achieve the best possible outcomes.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Timeliness",
    description: "We respect deadlines and deliver projects on time without compromising quality.",
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Innovation",
    description: "We stay ahead of the curve with the latest technologies and best practices.",
  },
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

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <SectionContainer className="relative overflow-hidden py-20 md:py-28">
        {/* Soft blue gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e3f0ff] via-[#f5faff] to-[#d0e6fa] dark:from-[#1a237e]/80 dark:via-[#1976d2]/60 dark:to-[#0d1333]/80 z-0" />
        {/* Glassmorphism overlay */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] max-w-3xl max-h-96 bg-white/30 dark:bg-white/10 rounded-3xl blur-2xl z-0" />
        {/* Floating SVG shape */}
        <svg className="absolute right-[-80px] top-[-60px] w-64 h-64 opacity-30 z-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1976d2" fillOpacity="0.15" d="M44.8,-67.2C57.2,-59.2,65.7,-44.2,70.2,-28.7C74.7,-13.2,75.2,2.8,70.2,16.7C65.2,30.6,54.7,42.4,42.1,51.2C29.5,60,14.7,65.8,-0.7,66.7C-16.1,67.6,-32.2,63.6,-44.2,54.2C-56.2,44.8,-64.1,30,-67.2,14.2C-70.3,-1.6,-68.6,-18.4,-60.7,-30.7C-52.8,-43,-38.7,-50.8,-24.2,-57.2C-9.7,-63.6,5.2,-68.6,20.7,-70.2C36.2,-71.8,51.2,-70.2,44.8,-67.2Z" transform="translate(100 100)" />
        </svg>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Corlate Technologies
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Founded in 2019, we've been helping businesses across South Africa transform their digital presence and achieve remarkable growth.
            </p>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At Corlate Technologies, our mission is to empower businesses with innovative digital solutions that drive growth and success. We believe in creating lasting partnerships with our clients, understanding their unique challenges, and delivering solutions that exceed expectations.
              </p>
              <p className="text-muted-foreground">
                Based in Germiston, Gauteng, we serve clients across South Africa with a commitment to excellence, innovation, and customer satisfaction.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <img
                src="/about/office.jpg"
                alt="Corlate Technologies Office"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Core Values
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={item}
                className="text-center p-6 rounded-lg bg-card border hover:border-primary transition-colors"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Meet Our Team
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={item}
                className="text-center"
              >
                <div className="relative aspect-square rounded-full overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Work With Us</h2>
            <p className="text-muted-foreground mb-8">
              Ready to take your business to the next level? Let's work together to create innovative digital solutions that drive results.
            </p>
            <Button asChild size="lg">
              <Link to="/contact" className="inline-flex items-center">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
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

export default About;
