import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Users, Building2, Award, GraduationCap, Rocket, Heart, Trophy, Megaphone, Lightbulb, Twitter, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import ananthanImage from "@/assets/Ananthan1.png";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import heroProfile from "@/assets/hero/Ananthan.png";
import oneNationImg from "@/assets/hero/ONE NATION ONE DREAM.jpg";
import drugFreeImg from "@/assets/hero/DRUG FREE TENKASKI.jpg";
import startupImg from "@/assets/hero/startup_tenkasi.png";
import welfareImg from "@/assets/hero/MODI WELFARE CAMPS .png";
import heroVision from "@/assets/hero/vision.png";


const stats = [
  { number: "5+", label: "Patents Filed", icon: Award },
  { number: "20+", label: "Years in Semiconductor Design", icon: Lightbulb },
  { number: "1,00,000+", label: "Students Reached", icon: GraduationCap },
  { number: "250+", label: "Community Welfare Camps", icon: Building2 },
];

const journeyMilestones = [
  { year: "1976", event: "Born in an agricultural labourer's family in Tenkasi" },
  { year: "1997", event: "Graduated from NIT Trichy with distinction" },
  { year: "2004", event: "Joined Intel USA, led key projects with multiple patents" },
  { year: "2010", event: "MBA from Arizona State University with honors" },
  { year: "2022", event: "Returned to India to serve at grassroots level" },
  { year: "2023", event: "Joined BJP, received Pride of India Award" },
  { year: "2025", event: "Appointed BJP Tenkasi District President" },
];


const initiatives = [
  {
    title: "One Nation One Dream",
    description: "3,000+ students recited 1,330 Thirukkural verses with Former President Ram Nath Kovind",
    icon: Rocket,
    image: oneNationImg,
  },
  {
    title: "Drug Free Tenkasi",
    description: "Mega rally with 7,000+ participants including students from 50+ institutions",
    icon: Heart,
    image: drugFreeImg,
  },
  {
    title: "Startup Tenkasi",
    description: "First major startup summit of Southern Tamil Nadu with 2,000+ participants",
    icon: Trophy,
    image: startupImg,
  },
  {
    title: "Modi Welfare Camps",
    description: "500+ camps bringing government schemes to every village in Tenkasi",
    icon: Megaphone,
    image: welfareImg,
  },
];

const heroSliders = [
  {
    subtitle: "BJP TENKASI DISTRICT PRESIDENT",
    title: "Ananthan Ayyasamy",
    description: "Bringing Tech Leadership to Politics — A remarkable journey of resilience, excellence, and service from an agricultural labourer's son to Intel Engineering Director in USA. Now dedicated to transforming rural India as a grassroots political leader, envisioning One Lakh Hi-Tech Jobs in Tenkasi by 2032.",
    image: heroProfile,
    bgColor: "bg-sage/10",
  },
  {
    subtitle: "Tech & Innovation",
    title: "Tech & Innovation",
    description: "Empowering the next generation of technology through leadership in semiconductor design, analytics, and cutting-edge solutions.",
    image: heroProfile,
    bgColor: "bg-blue-50/50",
  },
  {
    subtitle: "Entrepreneur & Strategist",
    title: "Entrepreneurship Meets Strategy",
    description: "Director of multiple high-impact companies focused on analytics, semiconductor technology, and strategic business innovation.",
    image: heroProfile,
    bgColor: "bg-orange-50/50",
  },
  {
    subtitle: "Social Impact & Public Service",
    title: "Driving Social Change",
    description: "Committed to community growth, sustainable development, and creating opportunities for all through thoughtful leadership.",
    image: heroProfile,
    bgColor: "bg-purple-50/50",
  },
  {
    subtitle: "Political Engagement",
    title: "A Leader for the People",
    description: "Serving and shaping public policy with purpose — building bridges between technology and governance.",
    image: heroProfile,
    bgColor: "bg-green-50/50",
  },
  {
    subtitle: "Global Perspectives",
    title: "Think Global, Act Local",
    description: "Bridging global technology standards with local community needs — expanding horizons for future generations.",
    image: heroProfile,
    bgColor: "bg-gold/10",
  },
];


const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-auto lg:min-h-[95vh] flex lg:items-center bg-sage/5 lg:overflow-hidden">
        {/* Background Pattern - Global to section */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23425a3a' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <Carousel
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
          opts={{ loop: true, align: "start" }}
          className="w-full"
        >
          <CarouselContent>
            {heroSliders.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-6 pb-12 md:py-20">
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">

                    {/* Left Column: Text Content */}
                    <div className="order-2 lg:order-1 h-full min-h-0 lg:min-h-[450px] flex flex-col justify-center pb-12 lg:pb-0">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left pr-4"
                      >
                        <p className="text-sage font-body text-sm uppercase tracking-[0.2em] mb-4 font-bold">
                          {slide.subtitle}
                        </p>
                        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold text-foreground leading-tight mb-6">
                          {slide.title}
                        </h1>
                        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                          {slide.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <Button asChild size="lg" className="bg-sage hover:bg-sage-dark text-white rounded-full px-8 h-12">
                            <Link to="/vision">{t('nav.vision')} <ArrowRight className="ml-2 w-4 h-4" /></Link>
                          </Button>
                          <Button asChild variant="outline" size="lg" className="border-sage text-sage hover:bg-sage/5 rounded-full px-8 h-12">
                            <Link to="/about">{t('nav.about')}</Link>
                          </Button>
                        </div>
                      </motion.div>

                      {/* Navigation Buttons */}
                      <div className="flex gap-3 mt-10">
                        <CarouselPrevious className="static translate-y-0 h-11 w-11 border-sage/20 hover:bg-sage hover:text-white" />
                        <CarouselNext className="static translate-y-0 h-11 w-11 border-sage/20 hover:bg-sage hover:text-white" />
                      </div>
                    </div>

                    {/* Right Column: Image & Social Icons */}
                    <div className="order-1 lg:order-2 flex flex-col items-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative w-full max-w-xl mt-0 md:-mt-20 lg:-mt-28 pt-8 md:pt-0"
                      >
                        <img
                          src={slide.image || heroProfile}
                          alt={slide.title}
                          className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] z-20 relative transition-transform duration-700"
                          loading="eager"
                        />

                        {/* Social Icons */}
                        <div className="flex justify-center gap-6 mt-12 relative z-50">
                          <a
                            href="https://x.com/AnanthAyyasamy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-sage border border-sage/20 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                          >
                            <Twitter size={24} fill="currentColor" />
                          </a>
                          <a
                            href="https://www.facebook.com/profile.php?id=100091498852259"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-sage border border-sage/20 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                          >
                            <Facebook size={24} fill="currentColor" />
                          </a>
                          <a
                            href="https://www.instagram.com/tenkasi_ananthan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-sage border border-sage/20 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                          >
                            <Instagram size={24} />
                          </a>
                          <a
                            href="https://www.linkedin.com/in/ananthan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-sage border border-sage/20 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                          >
                            <Linkedin size={24} fill="currentColor" />
                          </a>
                        </div>
                      </motion.div>
                    </div>

                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column: Video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-elevated border-4 border-white/50"
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src="https://www.youtube.com/embed/FKA-b5KXha8"
                  title="Ananthan Ayyasamy Journey"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-1 bg-gold mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                From Silicon Valley to <span className="text-sage">Tenkasi Soil</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Watch the inspiring story of Ananthan Ayyasamy's return to his roots. After a successful career at Intel USA, he chose to dedicate his life to the service of his people in Tenkasi.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                This interview covers his vision, his challenges, and his roadmap for a prosperous district.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white overflow-hidden border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 * 0.1, duration: 0.6 }}
              className="bg-white border border-sage/10 p-8 rounded-2xl shadow-sm text-center hover:shadow-md hover:border-sage/30 transition-all duration-300 group"
            >
              <Award className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-display text-4xl md:text-5xl font-bold text-sage mb-2">
                5+
              </p>
              <p className="font-body text-muted-foreground text-sm uppercase tracking-wider font-medium">
                {t('stats.patents')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 * 0.1, duration: 0.6 }}
              className="bg-white border border-sage/10 p-8 rounded-2xl shadow-sm text-center hover:shadow-md hover:border-sage/30 transition-all duration-300 group"
            >
              <Lightbulb className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-display text-4xl md:text-5xl font-bold text-sage mb-2">
                20+
              </p>
              <p className="font-body text-muted-foreground text-sm uppercase tracking-wider font-medium">
                {t('stats.experience')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2 * 0.1, duration: 0.6 }}
              className="bg-white border border-sage/10 p-8 rounded-2xl shadow-sm text-center hover:shadow-md hover:border-sage/30 transition-all duration-300 group"
            >
              <GraduationCap className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-display text-4xl md:text-5xl font-bold text-sage mb-2">
                1,00,000+
              </p>
              <p className="font-body text-muted-foreground text-sm uppercase tracking-wider font-medium">
                {t('stats.students')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 3 * 0.1, duration: 0.6 }}
              className="bg-white border border-sage/10 p-8 rounded-2xl shadow-sm text-center hover:shadow-md hover:border-sage/30 transition-all duration-300 group"
            >
              <Building2 className="w-10 h-10 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-display text-4xl md:text-5xl font-bold text-sage mb-2">
                250+
              </p>
              <p className="font-body text-muted-foreground text-sm uppercase tracking-wider font-medium">
                {t('stats.camps')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Journey Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

            {/* Left Column: Intro Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32"
            >
              <p className="text-sage font-body text-sm uppercase tracking-[0.2em] mb-6">{t('about.journey')}</p>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
                From Village <br /> to Global Tech <br />
                <span className="text-sage">Back to Grassroots</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                A remarkable journey of resilience, excellence, and service — from agricultural labourer's son
                to Intel Director, now dedicated to transforming rural India.
              </p>
              <Button asChild variant="outline" size="lg" className="group">
                <Link to="/about#journey">
                  {t('about.journey')} <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            {/* Right Column: Timeline List */}
            <div className="relative pl-8 border-l border-sage/20">
              {journeyMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative mb-12 last:mb-0 group"
                >
                  {/* Dot */}
                  <div className="absolute -left-[39px] top-1.5 w-4 h-4 rounded-full bg-background border-4 border-gold group-hover:scale-125 transition-transform duration-300" />

                  {/* Content */}
                  <div>
                    <span className="font-display font-bold text-2xl text-sage mb-2 block">
                      {milestone.year}
                    </span>
                    <p className="font-body text-foreground/80 leading-relaxed text-lg">
                      {milestone.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-24 bg-gradient-to-b from-cream to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sage font-body text-sm uppercase tracking-[0.2em] mb-4">{t('nav.initiatives')}</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-gold">Tenkasi</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Bringing real change through impactful programs and community-driven initiatives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative h-[400px] bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden"
              >
                {/* Full Background Image */}
                <div className="absolute inset-0 bg-black">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  {/* Title */}
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-md">
                    {initiative.title}
                  </h3>

                  {/* Description (Revealed on Hover) */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                    <p className="font-body text-white/90 leading-relaxed text-lg drop-shadow-sm">
                      {initiative.description}
                    </p>
                  </div>

                  {/* Divider line that appears on hover */}
                  <div className="w-12 h-1 bg-gold mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button asChild variant="sage" size="lg" className="shadow-md hover:shadow-lg">
              <Link to="/initiatives">
                {t('common.viewAll')} {t('nav.initiatives')} <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Vision Quote Section */}
      <section id="vision-quote" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-sage-dark p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group hover:shadow-gold/10 transition-all duration-500">
              {/* Decorative Effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-gold/10 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cream/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl group-hover:bg-cream/10 transition-colors duration-500" />

              <div className="relative z-10 text-center">
                <div className="text-gold text-6xl font-display mb-6 opacity-80"></div>
                <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-cream leading-relaxed mb-10">
                  Transforming rural Tenkasi into the <span className="text-gold">Estonia of Asia</span> by 2032
                  with R&D centres in every district, electric trains to every panchayat,
                  and self-sustained villages for all.
                </blockquote>
                <p className="font-body text-gold text-lg font-medium tracking-widest uppercase">Ananthan Ayyasamy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
