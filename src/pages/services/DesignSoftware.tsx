import { ArrowRight, Code, Layout, Palette, Smartphone, Terminal, Wand2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const DesignSoftware = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      icon: <Layout className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Create intuitive and engaging user experiences for your digital products.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Brand Design",
      description: "Develop a strong brand identity that resonates with your audience.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Software",
      description: "Build tailored software solutions to meet your business needs.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Apps",
      description: "Develop native and cross-platform mobile applications.",
    },
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "API Development",
      description: "Create robust APIs for seamless system integration.",
    },
    {
      icon: <Wand2 className="h-6 w-6" />,
      title: "Automation",
      description: "Streamline your business processes with custom automation.",
    },
  ];

  const features = [
    {
      title: "User-Centered Design",
      description: "We put your users first in every design and development decision.",
    },
    {
      title: "Modern Technologies",
      description: "We use the latest technologies to build future-proof solutions.",
    },
    {
      title: "Scalable Solutions",
      description: "Our software grows with your business needs and requirements.",
    },
    {
      title: "Ongoing Support",
      description: "We provide continuous support and maintenance for your solutions.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background to-background" />
        <div className="hero-blur-circle right-1/3 top-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Custom{" "}
              <span className="text-gradient">Design & Software</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your ideas into reality with our design and software development expertise.
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

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our Design & Software Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end design and development solutions for your digital needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="card card-hover-effect"
              >
                <div className="p-6">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Design & Software Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of working with a dedicated design and development team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card p-6"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Apps Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <div className="text-muted-foreground">Repeat Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a solution that exceeds your expectations.
          </p>
          <a
            href="https://wa.me/your_whatsapp_number"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default DesignSoftware; 