import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  MapPin,
  Users,
  Building2,
  Target,
  TrendingUp,
  Lightbulb,
  Globe,
  Speaker,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import ananthanImage from "@/assets/about_profile_nobg.png";
import ananthan1Img from "@/assets/Ananthan1_nobg.png";

// Journey images
import born from "@/assets/Journey/Born.jpg";
import adversity from "@/assets/Journey/adversity_tmp.jpg";
import nitTrichy from "@/assets/Journey/Nit_Trichy.jpg";
import siliconStartup from "@/assets/Journey/Silicon_Startup.jpg";
import intel from "@/assets/Journey/intel.jpg";
import politicalSteward from "@/assets/Journey/En_mann_en_makkal.jpg";
import joinedBjp from "@/assets/Journey/joined_bjp.jpg";
import voiceOfTenkasi from "@/assets/Journey/Voice_of_Tenkasi.jpg";
import prideOfIndia from "@/assets/Journey/Pride_of_India.jpg";
import startupTenkasi from "@/assets/Journey/startup_tenkasi.jpg";
import governorVisit from "@/assets/Journey/governor_visit.jpg";
import enMannMakkal from "@/assets/Journey/En_mann_en_makkal.jpg";
import bjpPresident from "@/assets/Journey/bjp_district_president.jpg";
import oneNation from "@/assets/hero/ONE NATION ONE DREAM.png";
import megaRally from "@/assets/Journey/bothai olipu perani.png";


const careerHistory = [
  {
    role: "Co-Founder & CEO",
    company: "Tenkasi Semiconductors Pvt Ltd",
    period: "Nov 2024 – Present",
    link: "www.tensemi.com",
    icon: Briefcase,
  },
  {
    role: "Co-Founder & CEO",
    company: "Vaazhai Incubation Center",
    period: "Nov 2024 – Present",
    link: "www.vaazhai.org",
    icon: TrendingUp,
  },
  {
    role: "Founder, President",
    company: "PDXPrime Realtors, LLC., USA",
    period: "July 2017 - March 2023",
    highlight: "Rated Top 1.5% Realtor in USA",
    icon: Award,
  },
  {
    role: "Director of Engineering",
    company: "Intel Corporation, USA",
    period: "October 2004 - March 2023",
    highlight: "Multiple Patents Filed",
    icon: Lightbulb,
  },
  {
    role: "ASIC Design Lead Engineer",
    company: "S3 Pvt Limited (acquired by Intel)",
    period: "August 2000 - Sept 2004",
    icon: Briefcase,
  },
  {
    role: "Telecom Research Engineer",
    company: "C-DoT, Govt of India",
    period: "August 1997 - August 2000",
    icon: Building2,
  },
];

const socialLeadership = [
  {
    role: "District President",
    organization: "BJP Tenkasi, Tamilnadu",
    period: "Jan 2025 - Current",
  },
  {
    role: "State Convenor",
    organization: "TN BJP Startup Cell",
    period: "December 2023 – Jan 2025",
    link: "www.tnbjpstartup.org"
  },
  {
    role: "Founder-President",
    organization: "Voice of Tenkasi Foundation",
    period: "October 2022 - Present",
    link: "www.voiceoftenkasi.org"
  },
  {
    role: "President (2019-2020) & Director (2021-2024)",
    organization: "Greater Portland Tamil Mandram (GPTM)",
    period: "2019 – 2024",
    link: "www.gptm.org",
  },
  {
    role: "Member Board of Directors",
    organization: "Indian Art and Cultural Association, CA",
    period: "Jan 2022 – Present",
  },
];

const journeyData = [
  {
    year: "1976",
    title: "Born in Humble Beginnings",
    description:
      "Born in an agricultural labourer's family in Tenkasi, Tamil Nadu. Early life marked by economic hardship and challenges.",
    image: born,
  },
  {
    year: "1991",
    title: "Overcoming Adversity",
    description:
      "Made it through prolonged hunger & caste oppressions and topped high school despite facing numerous societal challenges.",
    image: adversity,
  },
  {
    year: "1997",
    title: "NIT Trichy Graduate",
    description:
      "Graduated from National Institute of Technology, Trichy with distinction - a major milestone in academic excellence.",
    image: nitTrichy,
  },
  {
    year: "2000",
    title: "Silicon Startup Choice",
    description:
      "Aspired to be an IAS officer but chose a silicon startup, beginning a remarkable journey in the technology sector.",
    image: siliconStartup,
  },
  {
    year: "2004",
    title: "Intel USA & Patents",
    description:
      "Joined Intel Corporation in the USA, led several key projects, and filed multiple patents in semiconductor technology.",
    image: intel,
  },
  {
    year: "2010",
    title: "MBA with Distinction",
    description:
      "Earned MBA from Arizona State University with Distinction, combining technical expertise with business acumen.",
    image: adversity,
  },
  {
    year: "2016",
    title: "Political Stewardship",
    description:
      "Steered younger brother's entry into politics (2006) and guided his rise to become an AIADMK MLA (2016-2021).",
    image: politicalSteward,
  },
  {
    year: "2022",
    title: "Joined BJP",
    description:
      "Left Intel and joined BJP, making a decisive transition from corporate America to grassroots Indian politics.",
    image: joinedBjp,
  },
  {
    year: "2023",
    title: "Voice of Tenkasi",
    description:
      "Established Voice of Tenkasi Foundation to drive social welfare and development initiatives across the district.",
    image: voiceOfTenkasi,
  },
  {
    year: "2023",
    title: "Pride of India Award",
    description:
      "Received the prestigious PRIDE OF INDIA Award in Washington, DC for outstanding contributions.",
    image: prideOfIndia,
  },
  {
    year: "2023",
    title: "Startup Tenkasi",
    description:
      "Organized Startup Tenkasi summit - a pioneering initiative to attract high-tech jobs to rural Tamil Nadu.",
    image: startupTenkasi,
  },
  {
    year: "2023",
    title: "Governor's Visit",
    description:
      "Organized Governor's historic visit to monuments of early freedom fighters in Tenkasi district.",
    image: governorVisit,
  },
  {
    year: "2023",
    title: "En Mann En Makkal",
    description:
      "Co-ordinated hugely successful Yatra in Tenkasi with 25,000+ crowd in each assembly constituency.",
    image: enMannMakkal,
  },
  {
    year: "2024",
    title: "Mega Rally",
    description:
      "Organized Drug-Free Tenkasi Mega Rally with 7,000+ participants including 5,000+ students from 50+ institutions.",
    image: megaRally,
  },
  {
    year: "2025",
    title: "BJP District President",
    description:
      "Appointed as District President of BJP Tenkasi - leading the party's vision for the region's development.",
    image: bjpPresident,
  },
  {
    year: "2025",
    title: "One Nation One Dream",
    description:
      "3,000 students participated in the historic One Nation, One Dream event with Former President Ram Nath Kovind.",
    image: oneNation,
  },
];

const About = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = journeyData[activeIndex];
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#journey") {
      const element = document.getElementById("journey");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : journeyData.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < journeyData.length - 1 ? prev + 1 : 0));
  };

  const handleYearClick = (index: number) => {
    setActiveIndex(index);
    const element = document.getElementById(`journey-year-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-cream via-background to-cream/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight whitespace-nowrap">
                <span>{t('about.title').split(' ')[0]}</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-gold">{t('about.title').split(' ').slice(1).join(' ')}</span>
              </h1>
              <div className="w-32 md:w-48 h-1 md:h-1.5 bg-gold mb-6 md:10 rounded-full mx-auto lg:mx-0" />
              <div className="space-y-4 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p>{t('about.p3')}</p>
                <p>{t('about.p4')}</p>
                <p>{t('about.p5')}</p>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-6 bg-gradient-to-br from-sage/20 to-gold/20 rounded-2xl blur-2xl" />
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={ananthanImage}
                    alt="Ananthan Ayyasamy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Navigation - Integrated from Journey Page */}
      {/* Journey Wrapper */}
      <div id="journey" className="relative">
        {/* Timeline Navigation - Integrated from Journey Page */}
        <section className="bg-white/80 backdrop-blur-md border-b border-border z-40 shadow-sm transition-all duration-300">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="pt-6 md:pt-8 pb-0 text-center">
              <h2 className="font-display text-2xl md:text-4xl text-foreground inline-block bg-gradient-to-r from-sage/10 to-gold/10 px-6 py-2 rounded-xl mb-6 md:8 border-b-0">{t('about.journey')}</h2>

              {/* Timeline Strip */}
              <div className="w-full overflow-x-auto relative px-4 no-scrollbar">
                <div className="flex items-center justify-between min-w-max gap-20 px-8 py-1">
                  {journeyData.map((item, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={index}
                        id={`journey-year-${index}`}
                        onClick={() => handleYearClick(index)}
                        className="flex flex-col items-center group relative min-w-[6rem] focus:outline-none gap-4 transition-transform duration-300"
                      >
                        <span
                          className={`text-sm md:text-base font-body transition-all duration-300 ${isActive ? "text-orange-500 font-semibold" : "text-gray-400 font-medium group-hover:text-gray-600"
                            }`}
                        >
                          {item.year}
                        </span>

                        {/* Dot Indicator */}
                        <div className={`transition-all duration-300 flex items-center justify-center`}>
                          <div className={`rounded-full transition-all duration-300 ${isActive
                            ? "w-3 h-3 bg-orange-500 ring-4 ring-orange-100"
                            : "w-3 h-3 bg-gray-300 group-hover:bg-gray-400"
                            }`} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Journey Content Section */}
        <section className="pt-4 pb-20 bg-gradient-to-b from-white to-cream/50 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-sage/5 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl opacity-60" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="max-w-6xl mx-auto"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center bg-white/40 backdrop-blur-sm p-4 md:p-12 rounded-2xl md:rounded-3xl border border-white/50 shadow-xl">

                  {/* Image Section - Left */}
                  <div className="relative group perspective-1000 w-full max-w-[300px] md:max-w-sm mx-auto lg:mx-0">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 transform transition-transform duration-500 group-hover:-translate-y-2 bg-white/50 backdrop-blur-sm">
                      <img
                        src={activeItem.image}
                        alt={activeItem.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Content Section - Right */}
                  <div className="space-y-8 text-left">
                    {/* Year Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="inline-flex items-center gap-3"
                    >

                      <div className="relative z-10 bg-sage text-white px-6 py-2 rounded-full font-bold text-xl shadow-lg shadow-sage/20">
                        {activeItem.year}
                      </div>
                      <div className="h-px w-20 bg-sage/30" />
                    </motion.div>

                    {/* Title & Description */}
                    <div className="relative z-10 space-y-4 md:space-y-6">
                      <h2 className="font-display text-2xl md:text-5xl font-bold text-foreground leading-tight">
                        {activeItem.title}
                      </h2>

                      <p className="text-muted-foreground text-sm md:text-xl leading-relaxed text-left border-l-4 border-gold/30 pl-4 md:pl-6">
                        {activeItem.description}
                      </p>
                    </div>

                    {/* Navigation Controls inside Content (Optional UX Improvement) */}
                    <div className="flex gap-4 pt-4">
                      <button onClick={handlePrev} className="group p-3 rounded-full border border-border hover:border-sage bg-white hover:bg-sage transition-all duration-300">
                        <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-white" />
                      </button>
                      <button onClick={handleNext} className="group p-3 rounded-full border border-border hover:border-sage bg-white hover:bg-sage transition-all duration-300">
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </div>


      {/* Career History */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="font-display text-2xl md:text-5xl font-bold text-foreground inline-block bg-gradient-to-r from-sage/10 to-gold/10 px-6 py-2 rounded-xl">
              {t('about.careerHistory')}
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {careerHistory.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="group bg-white relative overflow-hidden p-5 md:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-sage/50"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-sage to-sage/50" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-sage/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-sage/10" />

                <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-sage/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <job.icon className="w-6 h-6 md:w-8 md:h-8 text-sage" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-sage transition-colors">{job.role}</h3>
                      <span className="inline-block bg-cream text-sage-dark px-4 py-1 rounded-full text-sm font-semibold border border-sage/10">
                        {job.period}
                      </span>
                    </div>

                    <p className="text-sage font-semibold text-lg mb-3 flex items-center gap-2">
                      {job.company}
                    </p>

                    {job.highlight && (
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold/20 to-transparent text-yellow-700 px-4 py-2 rounded-lg text-sm font-semibold mt-2 border border-gold/20">
                        <Award className="w-4 h-4" />
                        {job.highlight}
                      </div>
                    )}
                    {job.link && (
                      <a href={`https://${job.link}`} target="_blank" rel="noopener noreferrer" className="block text-sage/80 hover:text-sage text-sm mt-3 font-medium transition-colors underline-offset-4 hover:underline">
                        {job.link}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Leadership */}
      <section className="py-20 bg-gradient-to-b from-cream to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sage font-body text-sm uppercase tracking-[0.2em] mb-4">{t('about.leadership')}</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground inline-block bg-gradient-to-r from-sage/10 to-gold/10 px-6 py-2 rounded-xl">
              {t('about.socialLeadership')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
            {socialLeadership.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 border border-sage/10 hover:border-sage/30 relative overflow-hidden hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sage/5 to-gold/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />

                <div className="flex items-start gap-4 md:gap-5 relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-sage/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-sage text-sage group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:rotate-3">
                    <Speaker className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-sage transition-colors leading-tight">{position.role}</h3>
                    <p className="text-sage-dark font-medium text-base md:text-lg border-l-2 border-gold/40 pl-3 mb-3">{position.organization}</p>

                    <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-2 border-t border-gray-100/50">
                      <div className="text-muted-foreground text-xs font-bold tracking-wider uppercase bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 group-hover:border-sage/20 transition-colors">
                        {position.period}
                      </div>
                      {position.link && (
                        <a href={`https://${position.link}`} target="_blank" rel="noopener noreferrer" className="text-sage hover:text-gold text-sm font-semibold transition-colors flex items-center gap-1 group/link">
                          {t('common.visitWebsite')} <ChevronRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
