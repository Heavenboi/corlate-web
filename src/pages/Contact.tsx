import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useEffect, useState, useRef } from "react";
import { ServiceBooking } from "@/components/booking/ServiceBooking";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import { Contact as ContactSection } from "@/components/home/Contact";
import { SectionContainer } from "@/components/layout/Container";

// List of available services for booking
const availableServices = [
  {
    id: "digital-marketing",
    title: "Digital Marketing"
  },
  {
    id: "web-development",
    title: "Web Development"
  },
  {
    id: "seo",
    title: "SEO Optimization"
  },
  {
    id: "social-media",
    title: "Social Media Marketing"
  },
  {
    id: "content-marketing",
    title: "Content Marketing"
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development"
  }
];

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Visit Us",
    details: [
      "35 Poplar Road",
      "Primrose, Germiston",
      "Gauteng, South Africa"
    ]
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    details: [
      "+27 (752) 614-220",
      "Monday to Friday",
      "9:00 AM - 6:00 PM SAST"
    ]
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Us",
    details: [
      "hello@corlate.co.za",
      "support@corlate.co.za",
      "24/7 Online Support"
    ]
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Business Hours",
    details: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 2:00 PM",
      "Sunday: Closed"
    ]
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

const Contact = () => {
  const bookingRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("message");
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  
  // Smooth scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSuccess(true);
    setTimeout(() => setMessageSuccess(false), 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <SectionContainer className="relative overflow-hidden py-20 md:py-28">
        {/* Soft pink/rose gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fce4ec] via-[#f8bbd0] to-[#f3e5f5] dark:from-[#ad1457]/80 dark:via-[#ec407a]/60 dark:to-[#4a0036]/80 z-0" />
        {/* Glassmorphism overlay */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vw] max-w-3xl max-h-96 bg-white/30 dark:bg-white/10 rounded-3xl blur-2xl z-0" />
        {/* Floating SVG shape */}
        <svg className="absolute right-[-80px] bottom-[-60px] w-64 h-64 opacity-30 z-0" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ec407a" fillOpacity="0.15" d="M44.8,-67.2C57.2,-59.2,65.7,-44.2,70.2,-28.7C74.7,-13.2,75.2,2.8,70.2,16.7C65.2,30.6,54.7,42.4,42.1,51.2C29.5,60,14.7,65.8,-0.7,66.7C-16.1,67.6,-32.2,63.6,-44.2,54.2C-56.2,44.8,-64.1,30,-67.2,14.2C-70.3,-1.6,-68.6,-18.4,-60.7,-30.7C-52.8,-43,-38.7,-50.8,-24.2,-57.2C-9.7,-63.6,5.2,-68.6,20.7,-70.2C36.2,-71.8,51.2,-70.2,44.8,-67.2Z" transform="translate(100 100)" />
        </svg>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have a question or want to discuss a project? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Contact Info Grid */}
      <SectionContainer>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {contactInfo.map((info) => (
            <motion.div
              key={info.title}
              variants={item}
              className="p-6 rounded-lg bg-card border hover:border-primary transition-colors text-center"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4">{info.title}</h3>
              <ul className="space-y-2">
                {info.details.map((detail, index) => (
                  <li key={index} className="text-muted-foreground">
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </SectionContainer>

      {/* Unified Contact/Booking Card */}
      <SectionContainer>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-white/60 to-primary/10 p-1 rounded-2xl shadow-xl">
            <div className="bg-white/60 dark:bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 md:p-10">
              <div className="flex flex-col items-center mb-6">
                <CalendarIcon className="h-10 w-10 text-primary mb-2 animate-fade-in" />
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="mx-auto mb-6 flex justify-center bg-white/40 dark:bg-white/10 backdrop-blur rounded-full p-1">
                    <TabsTrigger value="message" className="px-6 py-2 rounded-full font-medium">Send a Message</TabsTrigger>
                    <TabsTrigger value="booking" className="px-6 py-2 rounded-full font-medium">Book an Appointment</TabsTrigger>
                  </TabsList>
                  <TabsContent value="message">
                    {messageSuccess ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-8"
                      >
                        <div className="text-4xl mb-2">✅</div>
                        <h3 className="text-2xl font-semibold mb-2 text-primary">Message Sent!</h3>
                        <p className="text-muted-foreground mb-4">Thank you for reaching out. We'll get back to you soon.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Your email" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input id="subject" placeholder="What's this about?" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea id="message" placeholder="Your message" rows={6} required />
                        </div>
                        <Button type="submit" size="lg" className="w-full">
                          Send Message
                        </Button>
                      </form>
                    )}
                  </TabsContent>
                  <TabsContent value="booking">
                    {bookingSuccess ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-8"
                      >
                        <div className="text-4xl mb-2">🎉</div>
                        <h3 className="text-2xl font-semibold mb-2 text-primary">Appointment Booked!</h3>
                        <p className="text-muted-foreground mb-4">Thank you for booking with us. We'll be in touch soon.</p>
                      </motion.div>
                    ) : (
                      <ServiceBooking
                        services={availableServices}
                        onComplete={() => setBookingSuccess(true)}
                      />
                    )}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Social Media Section */}
      <SectionContainer>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
          <p className="text-muted-foreground mb-8">
            Follow us on social media to stay updated with our latest news and updates.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/company/corlate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com/corlate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/corlate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com/corlate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Contact;
