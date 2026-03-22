import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ananthanImage from "@/assets/ananthan-main.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();


  const navItems = [
    { label: t('nav.home'), path: "/" },
    { label: t('nav.about'), path: "/about" },
    { label: t('nav.initiatives'), path: "/initiatives" },
    { label: t('nav.impact'), path: "/impact" },
    { label: t('nav.gallery'), path: "/gallery" },
    { label: t('nav.media'), path: "/media" },
    { label: t('nav.connect'), path: "/connect" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-sage shadow-md py-4"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div>
                <h1 className="font-display text-lg sm:text-xl font-semibold tracking-wide transition-colors duration-300 text-cream">
                  Ananthan Ayyasamy
                </h1>
              </div>
            </Link>



            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-body font-medium tracking-wide transition-all duration-300 relative group ${location.pathname === item.path
                    ? "text-gold"
                    : "text-cream/80 hover:text-gold"
                    }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold transition-all duration-300 ${location.pathname === item.path ? "w-6" : "w-0 group-hover:w-6"
                      }`}
                  />
                </Link>
              ))}

              {/* Language Selector */}
              <div className="ml-4 relative group">
                <button className="flex items-center gap-2 px-4 py-2 bg-gold text-white text-sm font-semibold rounded hover:bg-gold/90 transition-colors">
                  <span>{language === 'en' ? 'EN' : 'த'}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <button
                    onClick={() => setLanguage('en')}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-cream transition-colors rounded-t-lg ${language === 'en' ? 'bg-cream text-sage font-semibold' : 'text-foreground'
                      }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage('ta')}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-cream transition-colors rounded-b-lg ${language === 'ta' ? 'bg-cream text-sage font-semibold' : 'text-foreground'
                      }`}
                  >
                    தமிழ் (Tamil)
                  </button>
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-cream hover:bg-cream/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-sage/98 backdrop-blur-lg pt-24 px-6">
              <nav className="flex flex-col items-center gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-3 px-6 text-xl font-display font-medium tracking-wide transition-colors ${location.pathname === item.path
                        ? "text-gold"
                        : "text-cream/80 hover:text-gold"
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              {/* Language Toggle in Mobile Menu */}
              <div className="mt-8 flex justify-center gap-3">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                    language === 'en' ? 'bg-gold text-foreground' : 'bg-cream/20 text-cream'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('ta')}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
                    language === 'ta' ? 'bg-gold text-foreground' : 'bg-cream/20 text-cream'
                  }`}
                >
                  தமிழ்
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
