import { motion } from "framer-motion";
import { Rocket, Building, Train, Leaf, Factory, Plane, GraduationCap, Heart, Users, BookOpen, Trophy, Target, Sparkles, Droplet, Zap, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import visionImg from "@/assets/vision.jpg";

// Import all initiative images
import oneNationImg from "@/assets/hero/ONE NATION ONE DREAM.png";
import tenSemiImg from "@/assets/Journey/Silicon_Startup.jpg";
import drugFreeImg from "@/assets/hero/DFT.png";
import vaazhaiImg from "@/assets/vaazhai.png";
import startupSummitImg from "@/assets/hero/startup tenkasi.png";
import neetImg from "@/assets/hero/youth.jpg";
import spaceImg from "@/assets/space science bootcamp.jpg";
import welfareImg from "@/assets/hero/MODI WELFARE CAMPS .jpg";
import waterImg from "@/assets/impact.jpg";
import womenImg from "@/assets/women empowerment.jpg";
import toiletImg from "@/assets/smart toilet.jpg";
import libraryImg from "@/assets/media.jpg";

// Import Vision Pillars images
import pillarJobs from "@/assets/initiatives/one lakh high tech jobs .jpg";
import pillarRD from "@/assets/initiatives/R&D.jpg";
import pillarTrain from "@/assets/initiatives/Electric train .jpg";
import pillarAirport from "@/assets/initiatives/Airport .jpg";
import pillarIndustry from "@/assets/initiatives/Hogh Tech Industry .jpg";
import pillarVillages from "@/assets/initiatives/Self Sustained Villages .jpg";

// Vision Pillars
const visionPillars = [
  {
    icon: Rocket,
    title: "ONE LAKH Hi-Tech Jobs by 2032",
    image: pillarJobs,
    description: "Creating 1,00,000 high-technology jobs in Tenkasi through semiconductor manufacturing, IT services, R&D centers, and rural innovation hubs.",
  },
  {
    icon: Building,
    title: "R&D Centre at Every District",
    image: pillarRD,
    description: "Research and development centers across every district in Tamil Nadu, bringing cutting-edge innovation to rural areas.",
  },
  {
    icon: Train,
    title: "Electric Train to Every Panchayat",
    image: pillarTrain,
    description: "Modern, sustainable transportation connecting every panchayat, ensuring accessibility and reducing carbon footprint.",
  },
  {
    icon: Plane,
    title: "Airport at Every District",
    image: pillarAirport,
    description: "Regional airport infrastructure boosting tourism, business connectivity, and economic development.",
  },
  {
    icon: Factory,
    title: "Hi-Tech Industry at Every Rural Block",
    image: pillarIndustry,
    description: "Environment-friendly, technology-driven industries creating local employment and wealth.",
  },
  {
    icon: Leaf,
    title: "Self-Sustained Villages",
    image: pillarVillages,
    description: "Empowered villages providing progress and prosperity through local manufacturing, agriculture tech, and clean energy.",
  },
];

// Key Initiatives
const keyInitiatives = [
  {
    icon: Rocket,
    title: "One Nation One Dream",
    image: oneNationImg,
    stats: "3,000+ Students",
    description: "Historic celebration where 3,000+ students recited 1,330 Thirukkural verses with Former President Ram Nath Kovind and Sridhar Vembu, forming a 133-ft Thiruvalluvar outline.",
    category: "Education",
    year: "2025"
  },
  {
    icon: Building,
    title: "TenSemi - Rural Semiconductor Hub",
    image: tenSemiImg,
    stats: "www.tensemi.com",
    description: "First-ever rural semiconductor design center in collaboration with Zoho Corp, creating high-value tech jobs in Tenkasi.",
    category: "Economy",
    year: "2024"
  },
  {
    icon: Heart,
    title: "Drug Free Tenkasi",
    image: drugFreeImg,
    stats: "7,000+ Participants",
    description: "Mega rally with 5,000+ students from 50+ institutions, chaired by Hon TN Gov Shri R.N. Ravi.",
    category: "Social Welfare",
    year: "2024"
  },
  {
    icon: GraduationCap,
    title: "Vaazhai Incubation Center",
    image: vaazhaiImg,
    stats: "www.vaazhai.org",
    description: "Support for rural startups and entrepreneurs, fostering innovation and self-employment opportunities.",
    category: "Economy",
    year: "Ongoing"
  },
  {
    icon: Users,
    title: "Startup Tenkasi Summit",
    image: startupSummitImg,
    stats: "200+ Startups",
    description: "First major startup summit of Southern Tamil Nadu with 2,000+ pan-India enthusiasts sparking rural innovation.",
    category: "Economy",
    year: "2023"
  },
  {
    icon: BookOpen,
    title: "Free NEET Coaching",
    image: neetImg,
    stats: "Govt School Students",
    description: "Free coaching for 2025 NEET exams in collaboration with Aatrupadai Foundation for government school students.",
    category: "Education",
    year: "2024"
  },
  {
    icon: Trophy,
    title: "Space Science Bootcamp",
    image: spaceImg,
    stats: "196 Students",
    description: "2-day residential bootcamp from 5 districts with telescope-assisted night sky viewing of Saturn, Jupiter, and Moon.",
    category: "Education",
    year: "2024"
  },
  {
    icon: Heart,
    title: "Modi Welfare Camps",
    image: welfareImg,
    stats: "500+ Camps",
    description: "Bridging PM Modi-ji's flagship schemes to every village - UJJWALA YOJANA, Sukanya Samriddhi, free medical camps.",
    category: "Social Welfare",
    year: "2023-25"
  },
  {
    icon: Droplet,
    title: "Water Security & Environment",
    image: waterImg,
    stats: "Active Projects",
    description: "Desilting ponds, restoring water bodies, replacing invasive trees with native palms for sustainable agriculture.",
    category: "Environment",
    year: "Ongoing"
  },
  {
    icon: Users,
    title: "Women Entrepreneurship",
    image: womenImg,
    stats: "Empowering Women",
    description: "Handicraft training (coconut shell craft) connecting rural women with export-oriented industry partners.",
    category: "Economy",
    year: "Ongoing"
  },
  {
    icon: Building,
    title: "Smart Toilets Project",
    image: toiletImg,
    stats: "1000 Toilets Goal",
    description: "Renovating toilets in government schools prioritizing girls' welfare across Tenkasi district.",
    category: "Infrastructure",
    year: "Ongoing"
  },
  {
    icon: BookOpen,
    title: "Free Libraries & Study Materials",
    image: libraryImg,
    stats: "Multiple Libraries",
    description: "Setup free libraries and donated 1000s of materials to TNPSC & UPSC aspirants with Zoho Corp.",
    category: "Education",
    year: "2024"
  },
];

// Roadmap Milestones
const roadmap = [
  {
    year: "2025-2026",
    goals: [
      "Launch 5 R&D centers across districts",
      "Establish 10 skill development hubs",
      "Create 10,000 high-tech jobs",
      "Complete 100 smart toilet projects"
    ]
  },
  {
    year: "2027-2028",
    goals: [
      "Open TenSemi semiconductor production facility",
      "Start 3 new incubation centers",
      "Achieve 30,000 jobs milestone",
      "Launch regional connectivity projects"
    ]
  },
  {
    year: "2029-2030",
    goals: [
      "Complete rural electrification with renewables",
      "Launch regional airport infrastructure",
      "Reach 60,000 jobs across sectors",
      "100% village water security"
    ]
  },
  {
    year: "2031-2032",
    goals: [
      "Hit 1 LAKH jobs milestone",
      "100% self-sustained villages achieved",
      "Estonia of Asia vision realized",
      "Model for rural India complete"
    ]
  },
];

import { useLanguage } from "@/contexts/LanguageContext";

// ... (other imports)

// ... (arrays remain logic bound or hardcoded for now)

const Vision = () => {
  const { t } = useLanguage();
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex lg:items-center justify-center overflow-hidden">
        {/* ... (Hero Image) */}
        <div className="absolute inset-0 z-0">
          <img
            src={visionImg}
            alt="Vision & Initiatives for Tenkasi 2032"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/65 to-black/75" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-gold/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-gold/30"
            >
              <p className="text-gold font-body text-sm uppercase tracking-[0.2em] font-semibold">{t('vision.badge')}</p>
            </motion.div>

            <h1 className="font-display text-2xl sm:text-3xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 leading-tight">
              <span className="block">{t('vision.title').split(':')[0]}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-300 to-gold">
                {t('vision.title').split(':')[1]}
              </span>
            </h1>

            <p className="font-body text-base md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed mb-6 md:mb-8">
              {t('vision.description')}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#vision-pillars" className="bg-gold text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors shadow-lg">
                {t('vision.explore')}
              </a>
              <a href="#initiatives" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                {t('vision.viewInitiatives')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section id="vision-pillars" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-6xl font-bold text-foreground mb-4 md:mb-6">
              {t('vision.pillarsTitle')}
            </h2>
            <p className="text-muted-foreground font-body text-base md:text-xl max-w-3xl mx-auto">
              {t('vision.pillarsDesc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visionPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-sage/30 relative overflow-hidden flex flex-col"
              >
                {/* Image Section */}
                <div className="h-48 md:h-56 overflow-hidden relative">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex-1">
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-3 font-bold group-hover:text-sage transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section id="initiatives" className="py-24 bg-gradient-to-br from-cream to-gold/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              {t('vision.initiativesTitle')}
            </h2>
            <p className="text-muted-foreground font-body text-lg md:text-xl max-w-3xl mx-auto">
              {t('vision.initiativesDesc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.1 }}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-sage/30 relative overflow-hidden flex flex-col"
              >
                {/* Image Section */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1">
                  <div className="text-xs text-sage font-bold uppercase tracking-widest mb-2">{initiative.category}</div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-sage transition-colors">
                    {initiative.title}
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-0.5 w-6 bg-gold rounded-full" />
                    <div className="text-sage-dark font-bold text-sm">{initiative.stats}</div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 pl-4 border-l-2 border-gold/30">
                    {initiative.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap to 2032 */}
      <section className="py-24 bg-sage text-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              {t('vision.roadmapTitle')}
            </h2>
            <p className="text-cream/80 font-body text-lg md:text-xl max-w-2xl mx-auto">
              {t('vision.roadmapDesc')}
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {roadmap.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-sage-dark/50 backdrop-blur-sm border-2 border-gold/20 rounded-xl p-6 md:p-8"
              >
                <div className="bg-gold text-foreground font-display text-xl md:text-2xl font-bold px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-lg mb-4 md:mb-6 inline-block">
                  {milestone.year}
                </div>
                <ul className="space-y-3 md:space-y-4">
                  {milestone.goals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-2 md:gap-3">
                      <Target className="w-4 h-4 md:w-5 md:h-5 text-gold flex-shrink-0 mt-1" />
                      <span className="text-cream/95 font-body text-base md:text-lg">{goal}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </Layout>
  );
};

export default Vision;
