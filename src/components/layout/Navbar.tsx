import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Code, Globe, Shield, Palette, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { motion, AnimatePresence, Variants } from "framer-motion";
import corlateLogo from "@/assets/corlate-logo-two.png";

const buttonVariants: Variants = {
  initial: { 
    scale: 1,
    boxShadow: "0 0 0 rgba(25, 118, 210, 0)"
  },
  hover: { 
    scale: 1.02,
    boxShadow: "0 4px 20px rgba(25, 118, 210, 0.15)"
  },
  tap: { 
    scale: 0.98 
  }
};

const menuItemVariants: Variants = {
  initial: { y: -4, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -4, opacity: 0 }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const services = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Web Development",
      description: "Custom websites and web applications",
      href: "/services/web-development",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Digital Marketing",
      description: "Strategic online marketing solutions",
      href: "/services/digital-marketing",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Tech Support",
      description: "Professional IT support services",
      href: "/services/tech-support",
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "Design & Software",
      description: "Custom design and software solutions",
      href: "/services/design-software",
    },
  ];

  const navItems = [
    { name: "Home", href: "/", icon: <Home className="h-4 w-4" /> },
    { name: "Solutions", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group" aria-label="Home">
            <div className="bg-gradient-to-br from-[#e3f0ff]/70 via-white/60 to-[#f3e5f5]/70 backdrop-blur-md border border-white/40 shadow-xl rounded-full p-2 flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:ring-2 group-hover:ring-primary/30">
              <motion.img
                src={corlateLogo}
                alt="Corlate Technologies Logo"
                className="h-10 w-auto max-w-[160px] object-contain transition-transform duration-200 group-hover:scale-110"
                whileHover={{ scale: 1.10 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <motion.div
                      variants={menuItemVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <Link 
                        to={item.href} 
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "flex items-center gap-2 relative px-4 py-2 rounded-md transition-all duration-200",
                          location.pathname === item.href 
                            ? "text-primary bg-primary/10" 
                            : "hover:text-primary hover:bg-primary/5"
                        )}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                        {location.pathname === item.href && (
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-primary"
                            layoutId="navbar-underline"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent hover:bg-primary/5 data-[state=open]:bg-primary/10"
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <motion.div 
                      className="grid grid-cols-2 gap-3 p-4 w-[600px]"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          to={service.href}
                          className="flex items-start p-3 hover:bg-accent rounded-lg transition-all duration-200 group"
                        >
                          <div className="text-primary mr-3 group-hover:scale-110 transition-transform">
                            {service.icon}
                          </div>
                          <div>
                            <div className="font-medium group-hover:text-primary transition-colors">
                              {service.title}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-full",
              "hover:bg-primary/5 active:bg-primary/10",
              "transition-colors duration-200"
            )}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-background/95 backdrop-blur-lg border-t"
          >
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-lg",
                        "transition-all duration-200",
                        location.pathname === item.href
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-primary/5 active:bg-primary/10"
                      )}
                    >
                      {item.icon && (
                        <span className="mr-3 text-primary">{item.icon}</span>
                      )}
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <div className="relative py-2">
                  <motion.button
                    className={cn(
                      "w-full flex items-center justify-between",
                      "px-4 py-3 rounded-lg",
                      "hover:bg-primary/5 active:bg-primary/10",
                      "transition-all duration-200"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{ scale: 0.98 }}
                  >
                    Services
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </motion.button>
                  <div className="mt-1 space-y-1 pl-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={service.href}
                          className={cn(
                            "flex items-center px-4 py-2 rounded-lg",
                            "text-sm group transition-all duration-200",
                            "hover:bg-primary/5 active:bg-primary/10"
                          )}
                        >
                          <div className="text-primary mr-3 group-hover:scale-110 transition-transform">
                            {service.icon}
                          </div>
                          {service.title}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
