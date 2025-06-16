import { ArrowRight, Code, Database, Globe, Layout, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const features = [
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Custom Web Design",
      description: "Beautiful, responsive websites tailored to your brand and business needs.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Applications",
      description: "Powerful web applications built with modern technologies and frameworks.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "E-commerce Solutions",
      description: "Secure and scalable online stores with seamless payment integration.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "CMS Development",
      description: "Easy-to-manage content management systems for your website.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Fast-loading websites optimized for search engines and user experience.",
    },
  ];

  const processSteps = [
    {
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and project requirements.",
    },
    {
      title: "Planning",
      description: "Our team creates a detailed project plan, wireframes, and design mockups.",
    },
    {
      title: "Development",
      description: "We build your website using modern technologies and best practices.",
    },
    {
      title: "Testing",
      description: "Rigorous testing ensures your website works perfectly across all devices.",
    },
    {
      title: "Launch",
      description: "We deploy your website and provide training on how to manage it.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background to-background" />
        <div className="hero-blur-circle left-1/4 top-1/4" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional{" "}
              <span className="text-gradient">Web Development</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your online presence with custom web solutions that drive results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/your_whatsapp_number"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link to="/case-studies" className="btn btn-outline">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive web development solutions to help your business succeed online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card card-hover-effect"
              >
                <div className="p-6">
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured approach to delivering high-quality web solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative"
              >
                <div className="card p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-border transform translate-x-1/2">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="text-primary h-6 w-6" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a web solution that helps your business grow.
          </p>
          <a
            href="https://wa.me/your_whatsapp_number"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment; 