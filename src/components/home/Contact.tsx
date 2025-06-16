import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                Get in touch with us through any of these channels.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  variants={item}
                  className="p-6 rounded-lg bg-card border hover:border-primary transition-colors"
                >
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  <ul className="space-y-1">
                    {info.details.map((detail, index) => (
                      <li key={index} className="text-muted-foreground text-sm">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
