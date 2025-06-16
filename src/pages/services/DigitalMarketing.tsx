import { ArrowRight, BarChart, Globe, Mail, Megaphone, Search, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const DigitalMarketing = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const services = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Search Engine Optimization",
      description: "Improve your website's visibility and rank higher in search results.",
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage with your audience on social platforms.",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Marketing",
      description: "Create targeted email campaigns that convert subscribers into customers.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Analytics & Reporting",
      description: "Track performance and make data-driven marketing decisions.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Content Marketing",
      description: "Develop engaging content that attracts and retains customers.",
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "PPC Advertising",
      description: "Run targeted ad campaigns that deliver measurable results.",
    },
  ];

  const benefits = [
    {
      title: "Increased Brand Visibility",
      description: "Get your brand in front of the right audience at the right time.",
    },
    {
      title: "Higher Conversion Rates",
      description: "Turn more visitors into leads and customers with optimized campaigns.",
    },
    {
      title: "Better ROI",
      description: "Maximize your marketing budget with data-driven strategies.",
    },
    {
      title: "Local Market Dominance",
      description: "Stand out in the South African market with targeted campaigns.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background to-background" />
        <div className="hero-blur-circle right-1/4 top-1/4" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic{" "}
              <span className="text-gradient">Digital Marketing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Drive growth and engagement with data-driven digital marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/your_whatsapp_number"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get a Strategy
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
              Our Digital Marketing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions to help your business grow online.
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

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Digital Marketing Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the benefits of working with a results-driven digital marketing team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="card p-6"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
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
              <div className="text-4xl font-bold text-primary mb-2">50%+</div>
              <div className="text-muted-foreground">Average Traffic Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3x</div>
              <div className="text-muted-foreground">Lead Generation Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200%</div>
              <div className="text-muted-foreground">ROI on Ad Spend</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Grow Your Online Presence?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's create a digital marketing strategy that helps you reach your business goals.
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

export default DigitalMarketing; 