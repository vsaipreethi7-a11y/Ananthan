import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/AnanthAyyasamy", label: "X (Twitter)" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100091498852259", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/tenkasi_ananthan/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ananthan/", label: "LinkedIn" },
  ];

  const quickLinks = [
    { label: t('nav.about'), path: "/about" },
    { label: t('nav.journey'), path: "/about#journey" },
    { label: t('nav.initiatives'), path: "/initiatives" },
    { label: t('nav.impact'), path: "/impact" },
    { label: t('nav.vision'), path: "/vision" },
    { label: t('nav.gallery'), path: "/gallery" },
    { label: t('nav.media'), path: "/media" },
    { label: t('nav.connect'), path: "/connect" },
  ];

  return (
    <footer className="bg-sage text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-cream/20 rounded-full flex items-center justify-center">
                <span className="text-cream font-display font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-cream">{t('hero.title')}</h3>
                <p className="text-cream/70 text-sm font-body">{t('hero.subtitle')}</p>
              </div>
            </div>
            <p className="text-cream/80 font-body leading-relaxed max-w-md mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cream/10 hover:bg-cream/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-cream" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-6">{t('footer.quickLinks')}</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-cream/70 hover:text-cream font-body text-sm transition-colors duration-300 link-underline w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-cream mb-6">{t('footer.contact')}</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+919840328856"
                className="flex items-center gap-3 text-cream/70 hover:text-cream font-body text-sm transition-colors duration-300"
              >
                <Phone size={16} />
                +91 98403 28856
              </a>
              <a
                href="mailto:ananthan@voiceoftenkasi.org"
                className="flex items-center gap-3 text-cream/70 hover:text-cream font-body text-sm transition-colors duration-300"
              >
                <Mail size={16} />
                ananthan@voiceoftenkasi.org
              </a>
              <div className="flex items-start gap-3 text-cream/70 font-body text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                Tenkasi Parliament, Vasudevanallur Assembly, Tamil Nadu
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/60 font-body text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-4">
            <a href="https://voiceoftenkasi.org" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-cream font-body text-sm transition-colors">
              voiceoftenkasi.org
            </a>
            <span className="text-cream/40">•</span>
            <a href="https://tensemi.com" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-cream font-body text-sm transition-colors">
              tensemi.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
