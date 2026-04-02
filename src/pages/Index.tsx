import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Users, Building2, Award, GraduationCap, Rocket, Heart, Trophy, Megaphone, Lightbulb, Twitter, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import ananthanImage from "@/assets/Ananthan1_nobg.png";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
} from "@/components/ui/carousel";

import heroProfile from "@/assets/hero/Ananthan.png";
import oneNationImg from "@/assets/hero/ONE NATION ONE DREAM.png";
import drugFreeImg from "@/assets/hero/DFT.png";
import startupImg from "@/assets/hero/startup tenkasi.png";
import welfareImg from "@/assets/hero/MODI WELFARE CAMPS .jpg";
import heroVision from "@/assets/hero/vision.jpg";
import slide1 from "@/assets/sliders/Slide1.JPG.jpeg";
import slide2 from "@/assets/sliders/Slide2.JPG.jpeg";
import slide3 from "@/assets/sliders/Slide3.JPG.jpeg";
import slide4 from "@/assets/sliders/Slide4.JPG.jpeg";
import slide5 from "@/assets/sliders/Slide5.JPG.jpeg";
import slide6 from "@/assets/sliders/Slide6.JPG.jpeg";


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
  { image: slide1, title: "Ananthan Ayyasamy - Public Service Leader" },
  { image: slide2, title: "Global Tech Visionary" },
  { image: slide3, title: "Strategy Meets Service" },
  { image: slide4, title: "Driving Social Change" },
  { image: slide5, title: "A Leader for the People" },
  { image: slide6, title: "Think Global, Act Local" },
];


const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#566039]">
        <Carousel
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
          opts={{ loop: true, align: "start" }}
          className="w-full"
        >
          <CarouselContent>
            {heroSliders.map((slide, index) => (
              <CarouselItem key={index}>
                {/* Mobile: aspect-ratio container so landscape images display fully */}
                <div className="relative w-full overflow-hidden
                  aspect-[4/3] sm:aspect-[16/9] md:aspect-auto md:h-[480px] lg:h-[640px]
                  bg-[#566039]"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full
                      object-contain sm:object-contain md:object-fill"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Small Dot navigation */}
          <div className="absolute bottom-4 left-0 right-0 z-50 flex items-center justify-center pointer-events-none">
            <div className="flex-shrink-0 pointer-events-auto px-4 py-2">
              <CarouselDots />
            </div>
          </div>
        </Carousel>
      </section>

      {/* Featured Video Section */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Featured <span className="text-sage">Videos</span>
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch the journey, vision, and impact of Ananthan Ayyasamy's work in Tenkasi.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Primary Video - The Journey */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-elevated border border-border group"
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
              <div className="p-4 md:p-6">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-sage transition-colors">From Silicon Valley to Tenkasi Soil</h3>
                <p className="text-muted-foreground text-sm">Watch the inspiring story of Ananthan Ayyasamy's return to his roots.</p>
              </div>
            </motion.div>

            {/* New Video 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-elevated border border-border group"
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src="https://www.youtube.com/embed/SlodAZCC_sg"
                  title="Ananthan Ayyasamy Interview"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-sage transition-colors">Strategic Vision for Tenkasi</h3>
                <p className="text-muted-foreground text-sm">Exploring the roadmap for industrial and social development.</p>
              </div>
            </motion.div>

            {/* New Video 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-elevated border border-border group"
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src="https://www.youtube.com/embed/pzo_XzzTCVU"
                  title="Who is Ananthan Ayyasamy?"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-sage transition-colors">Building a Better Tenkasi</h3>
                <p className="text-muted-foreground text-sm">Direct interaction and community engagement highlights.</p>
              </div>
            </motion.div>

            {/* New Video 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-elevated border border-border group"
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src="https://www.youtube.com/embed/C7D08YwhxBA"
                  title="BJP Tenkasi Highlights"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-sage transition-colors">Digital Transformation & Governance</h3>
                <p className="text-muted-foreground text-sm">Implementing modern solutions for grassroots challenges.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-white overflow-hidden border-y border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 * 0.1, duration: 0.6 }}
              className="bg-white border border-sage/10 p-4 md:p-8 rounded-xl md:rounded-2xl shadow-sm text-center hover:shadow-md hover:border-sage/30 transition-all duration-300 group"
            >
              <Award className="w-8 h-8 md:w-10 md:h-10 text-gold mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-display text-2xl md:text-5xl font-bold text-sage mb-1 md:mb-2">
                5+
              </p>
              <p className="font-body text-muted-foreground text-[10px] md:text-sm uppercase tracking-wider font-medium">
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
              <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-gold mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-display text-2xl md:text-5xl font-bold text-sage mb-1 md:mb-2">
                20+
              </p>
              <p className="font-body text-muted-foreground text-[10px] md:text-sm uppercase tracking-wider font-medium">
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
              <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-gold mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-display text-2xl md:text-5xl font-bold text-sage mb-1 md:mb-2">
                1,00,000+
              </p>
              <p className="font-body text-muted-foreground text-[10px] md:text-sm uppercase tracking-wider font-medium">
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
              <Building2 className="w-8 h-8 md:w-10 md:h-10 text-gold mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform" />
              <p className="font-display text-2xl md:text-5xl font-bold text-sage mb-1 md:mb-2">
                250+
              </p>
              <p className="font-body text-muted-foreground text-[10px] md:text-sm uppercase tracking-wider font-medium">
                {t('stats.camps')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Journey Preview */}
      <section className="py-16 md:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-start">

            {/* Left Column: Intro Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32 mb-8 lg:mb-0"
            >
              <p className="text-sage font-body text-xs md:text-sm uppercase tracking-[0.2em] mb-4 md:mb-6">{t('about.journey')}</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4 md:mb-6 leading-tight">
                From Village <br className="hidden md:block" /> to Global Tech <br className="hidden md:block" />
                <span className="text-sage">Back to Grassroots</span>
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
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
      <section className="py-16 md:py-32 bg-gradient-to-b from-cream to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-20"
          >
            <p className="text-sage font-body text-xs md:text-sm uppercase tracking-[0.2em] mb-4">{t('nav.initiatives')}</p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-gold">Tenkasi</span>
            </h2>
            <p className="text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto px-4">
              Bringing real change through impactful programs and community-driven initiatives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative h-[320px] md:h-[450px] bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden"
              >
                {/* Full Background Image */}
                <div className="absolute inset-0 bg-black">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${
                      initiative.title === "Startup Tenkasi" 
                        ? "object-contain object-center" 
                        : initiative.title === "One Nation One Dream"
                        ? "object-contain"
                        : "object-contain md:object-cover"
                    }`}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  {/* Title */}
                  <h3 className="font-display text-xl md:text-3xl font-bold text-white mb-2 md:mb-3 drop-shadow-md">
                    {initiative.title}
                  </h3>

                  {/* Description (Revealed on Hover) */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                    <p className="font-body text-white/90 leading-relaxed text-sm md:text-lg drop-shadow-sm">
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
      <section id="vision-quote" className="py-16 md:py-32 relative overflow-hidden">
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
                <blockquote className="font-display text-lg md:text-3xl lg:text-4xl text-cream leading-relaxed mb-6 md:mb-10">
                  Transforming rural Tenkasi into the <span className="text-gold">Estonia of Asia</span> by 2032
                  with R&D centres in every district, electric trains to every panchayat,
                  and self-sustained villages for all.
                </blockquote>
                <p className="font-body text-gold text-sm md:text-lg font-medium tracking-widest uppercase whitespace-nowrap">Ananthan Ayyasamy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
