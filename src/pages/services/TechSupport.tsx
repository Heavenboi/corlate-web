import { ArrowRight, Clock, Cloud, HardDrive, Laptop, Shield, Wifi } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const TechSupport = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Hardware Support",
      description: "Expert maintenance and repair for computers, laptops, and other devices.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Network Security",
      description: "Protect your business with robust security solutions and monitoring.",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Services",
      description: "Seamless cloud integration and management for your business.",
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Network Setup",
      description: "Professional network installation and configuration services.",
    },
    {
      icon: <HardDrive className="h-6 w-6" />,
      title: "Data Backup",
      description: "Secure data backup and recovery solutions to protect your business.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support when you need it most.",
    },
  ];

  const features = [
    {
      title: "Fast Response Time",
      description: "Get quick assistance with our rapid response support team.",
    },
    {
      title: "Expert Technicians",
      description: "Experienced professionals who understand your business needs.",
    },
    {
      title: "Proactive Monitoring",
      description: "Prevent issues before they impact your business operations.",
    },
    {
      title: "Cost-Effective",
      description: "Flexible support plans tailored to your budget and requirements.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background to-background" />
        <div className="hero-blur-circle left-1/3 top-1/3" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional{" "}
              <span className="text-gradient">Tech Support</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Keep your business running smoothly with reliable IT support and maintenance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/your_whatsapp_number"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link to="/case-studies" className="btn btn-outline">
                View Success Stories
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
              Our Tech Support Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT support solutions to keep your business running efficiently.
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
              Why Choose Our Tech Support?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience reliable and professional IT support for your business.
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
              <div className="text-4xl font-bold text-primary mb-2">15min</div>
              <div className="text-muted-foreground">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Need Technical Support?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get in touch with our team for reliable and efficient IT support solutions.
          </p>
          <a
            href="https://wa.me/your_whatsapp_number"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Contact Support
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default TechSupport; 