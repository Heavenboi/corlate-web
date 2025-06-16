import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import corlateLogo from "@/assets/corlate-logo-two.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2" aria-label="Home">
              <div className="bg-gradient-to-br from-[#e3f0ff]/70 via-white/60 to-[#f3e5f5]/70 backdrop-blur-md border border-white/40 shadow-xl rounded-full p-2 flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-primary/30">
                <img
                  src={corlateLogo}
                  alt="Corlate Technologies Logo"
                  className="h-10 w-auto max-w-[160px] object-contain transition-transform duration-200 hover:scale-110"
                />
              </div>
            </Link>
            <p className="text-muted-foreground">
              A forward-thinking digital services firm dedicated to empowering South African SMBs with innovative solutions.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/corlate-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/corlatetechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/corlatetech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/corlatetech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/web-development"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/digital-marketing"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/tech-support"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Tech Support & IT
                </Link>
              </li>
              <li>
                <Link
                  to="/services/design-software"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Design & Software
                </Link>
              </li>
              <li>
                <Link
                  to="/services/seo"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mobile-apps"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mobile App Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/partner"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  35 Poplar Road, Primrose<br />
                  Germiston, Gauteng<br />
                  South Africa
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="tel:+27752614220"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +27 (752) 614-220
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:hello@corlate.co.za"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@corlate.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Corlate Technology. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
