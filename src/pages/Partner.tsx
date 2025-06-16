import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Target, Award, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionContainer } from "@/components/layout/Container";

const benefits = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Strategic Growth",
    description: "Access new markets and opportunities through our established network and reputation."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Collaborative Success",
    description: "Work with a team that values partnership and mutual growth."
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Industry Recognition",
    description: "Benefit from our award-winning expertise and market presence."
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Innovation Focus",
    description: "Stay ahead with access to cutting-edge technologies and methodologies."
  }
];

const partnerTypes = [
  {
    title: "Technology Partners",
    description: "Join our ecosystem of technology providers to deliver comprehensive solutions.",
    features: [
      "Access to our client base",
      "Joint marketing opportunities",
      "Technical integration support",
      "Co-branded solutions"
    ],
    badge: "Featured"
  },
  {
    title: "Implementation Partners",
    description: "Help deliver our solutions to clients while growing your business.",
    features: [
      "Implementation training",
      "Project collaboration",
      "Revenue sharing model",
      "Dedicated support"
    ],
    badge: "Popular"
  },
  {
    title: "Referral Partners",
    description: "Earn rewards by referring clients to our services and solutions.",
    features: [
      "Competitive commission rates",
      "Marketing resources",
      "Lead tracking system",
      "Regular payment schedule"
    ],
    badge: "Easy Start"
  }
];

const successMetrics = [
  {
    value: "50+",
    label: "Active Partners",
    description: "Growing network of successful partnerships"
  },
  {
    value: "R25M+",
    label: "Partner Revenue",
    description: "Generated for our partners in 2023"
  },
  {
    value: "95%",
    label: "Partner Satisfaction",
    description: "Based on annual partner survey"
  },
  {
    value: "24/7",
    label: "Partner Support",
    description: "Dedicated assistance when you need it"
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

const Partner = () => {
  return (
    <div>
      {/* Hero Section */}
      <SectionContainer className="relative overflow-hidden py-20 md:py-28">
        {/* Soft orange/peach gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fff3e0] via-[#ffe0b2] to-[#ffd180] dark:from-[#ff7043]/80 dark:via-[#ffa726]/60 dark:to-[#bf360c]/80 z-0" />
        {/* Glassmorphism overlay */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] max-w-3xl max-h-96 bg-white/30 dark:bg-white/10 rounded-3xl blur-2xl z-0" />
        {/* Floating SVG shape */}
        <svg className="absolute left-[-80px] top-[-60px] w-64 h-64 opacity-30 z-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffa726" fillOpacity="0.15" d="M44.8,-67.2C57.2,-59.2,65.7,-44.2,70.2,-28.7C74.7,-13.2,75.2,2.8,70.2,16.7C65.2,30.6,54.7,42.4,42.1,51.2C29.5,60,14.7,65.8,-0.7,66.7C-16.1,67.6,-32.2,63.6,-44.2,54.2C-56.2,44.8,-64.1,30,-67.2,14.2C-70.3,-1.6,-68.6,-18.4,-60.7,-30.7C-52.8,-43,-38.7,-50.8,-24.2,-57.2C-9.7,-63.6,5.2,-68.6,20.7,-70.2C36.2,-71.8,51.2,-70.2,44.8,-67.2Z" transform="translate(100 100)" />
        </svg>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Partner With Corlate
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join our partner ecosystem and let's create exceptional digital solutions together.
            </p>
            <Button asChild size="lg">
              <Link to="/contact" className="inline-flex items-center">
                Become a Partner
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Partner With Us
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={item}
                className="text-center p-6 rounded-lg bg-card border hover:border-primary transition-colors"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Partnership Programs
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {partnerTypes.map((type) => (
              <motion.div
                key={type.title}
                variants={item}
                className="relative p-6 rounded-lg bg-card border hover:border-primary transition-colors"
              >
                <Badge
                  className="absolute top-4 right-4 bg-primary/90 hover:bg-primary"
                  variant="secondary"
                >
                  {type.badge}
                </Badge>
                <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <ul className="space-y-3 mb-6">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {successMetrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={item}
                className="text-center p-6 rounded-lg bg-card border"
              >
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="font-medium mb-1">{metric.label}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Forces?</h2>
            <p className="text-muted-foreground mb-8">
              Take the first step towards a mutually beneficial partnership that drives growth and innovation.
            </p>
            <Button asChild size="lg">
              <Link to="/contact" className="inline-flex items-center">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
