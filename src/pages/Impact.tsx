import { motion } from "framer-motion";
import { TrendingUp, Users, Target, Award, BookOpen, Trophy, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import impactImg from "@/assets/impact.png";
import { useLanguage } from "@/contexts/LanguageContext";

// Import event images
import meetImg from "@/assets/Journey/bjp_district_president.png";
import drugFreeImg from "@/assets/hero/DRUG FREE TENKASKI.jpg";
import oneNationImg from "@/assets/hero/ONE NATION ONE DREAM.jpg";
import yatraImg from "@/assets/Journey/En_mann_en_makkal.png";
import visitImg from "@/assets/Journey/joined_bjp.png";
import startupImg from "@/assets/hero/startup_tenkasi.png";

// New Impact Images
import impact1Img from "@/assets/impacts/1.png";
import impact2Img from "@/assets/impacts/2.jpg";

const Impact = () => {
  const { t } = useLanguage();

  const leadershipMetrics = [
    {
      metric: "Total Members",
      before: "62,519",
      after: "75,402",
      growth: "+21%",
      period: "Feb 2025 → Oct 2025"
    },
    {
      metric: "Booth Committee Coverage",
      before: "53%",
      after: "85%",
      growth: "+32%",
      period: "Across all assemblies"
    },
    {
      metric: "Booths with 50+ Members",
      before: "54%",
      after: "69%",
      growth: "+15%",
      period: "District-wide strength"
    }
  ];

  const primaryImpact = [
    { icon: Users, number: "2 Lakh+", label: "People Mobilized", detail: "for various gatherings and rallies" },
    { icon: Heart, number: "500+", label: "Modi Welfare Camps", detail: "bringing schemes to every village" },
    { icon: Target, number: "50K+", label: "Students Catalyzed", detail: "career guidance, NEET, spoken English" },
    { icon: Award, number: "25K+", label: "Job Aspirants Enabled", detail: "books, libraries, model exams" },
  ];

  const secondaryStats = [
    { icon: Trophy, number: "100+", label: "Sport Events", detail: "Kabaddi, Chess, Silambam, Yoga" },
    { icon: Heart, number: "200+", label: "Medical Camps", detail: "Free healthcare in remote villages" },
    { icon: Heart, number: "300+", label: "Annadanam & Puja", detail: "Temple renovations, community service" },
  ];

  const megaEvents = [
    {
      title: "Mega Public Meeting - Vasudevanallur",
      image: meetImg,
      stats: "25,000+ People",
      detail: "500+ cadre from DMK, AIADMK, Congress joined BJP in presence of K. Annamalai",
      date: "March 2025"
    },
    {
      title: "Drug Free Tenkasi Rally",
      image: drugFreeImg,
      stats: "7,000+ Participants",
      detail: "Including 5,000+ students from 50+ institutions, chaired by Hon Governor R.N. Ravi",
      date: "October 2024"
    },
    {
      title: "One Nation One Dream",
      image: oneNationImg,
      stats: "3,000 Students",
      detail: "Recited 1,330 Thirukkural verses with Former President Ram Nath Kovind and Sridhar Vembu",
      date: "2025"
    },
    {
      title: "En Mann En Makkal Yatra",
      image: yatraImg,
      stats: "25K+ Per Assembly",
      detail: "Record crowds across 7 assembly constituencies in Tenkasi Parliament",
      date: "September 2023"
    },
    {
      title: "State President's Visit",
      image: visitImg,
      stats: "8,000+ Cadres",
      detail: "Massive gathering for Nainar Nagendran's visit as part of Tamilanin Payanam yatra",
      date: "2025"
    },
    {
      title: "Startup Tenkasi Summit",
      image: startupImg,
      stats: "200+ Startups",
      detail: "First major startup summit of Southern Tamil Nadu with 2,000+ enthusiasts",
      date: "March 2023"
    },
  ];

  const assemblyGrowth = [
    { assembly: "Alangulam", growth: "+13%" },
    { assembly: "Tenkasi", growth: "+23%" },
    { assembly: "Kadayanallur", growth: "+20%" },
    { assembly: "Vasudevanallur", growth: "+35%" },
    { assembly: "Sankarankovil", growth: "+12%" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-12 md:pb-20 bg-gradient-to-br from-sage/5 via-background to-gold/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-block bg-gold/10 px-4 py-2 rounded-full mb-4">
                <p className="text-sage font-body text-xs md:text-sm uppercase tracking-[0.2em] font-semibold">{t('impact.badge')}</p>
              </div>

              <h1 className="font-display text-3xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-gold">{t('impact.title')}</span>
              </h1>

              <p className="font-body text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {t('impact.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                <img
                  src={impactImg}
                  alt="Grassroots Impact in Tenkasi"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-sage/20 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>





      {/* Ground Presence & Mobilization Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-sage/10 text-sage px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Direct Engagement
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Strengthening the <br />
                <span className="text-sage">Grassroots Presence</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
                True impact is measured by the strength of our connections on the ground. Through regular booth-level meetings, village outreach programs, and direct cadre engagement, we have built a resilient organizational structure across all 7 assembly constituencies.
              </p>

              {/* Stat cards inline */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-sage p-6 rounded-2xl text-cream">
                  <div className="text-3xl font-bold mb-1">2,500+</div>
                  <div className="text-sm opacity-80 uppercase tracking-widest font-bold">Booth Meetings</div>
                </div>
                <div className="bg-gold p-6 rounded-2xl text-foreground">
                  <div className="text-3xl font-bold mb-1">1,000+</div>
                  <div className="text-sm opacity-80 uppercase tracking-widest font-bold">Village Visits</div>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Personalized Outreach", desc: "Door-to-door engagement in over 1,000 villages." },
                  { title: "Structural Integrity", desc: "85% booth committee coverage achieved in record time." },
                  { title: "Cadre Empowerment", desc: "Regular training sessions and workshops for grassroots leaders." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Primary Impact Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('impact.achievedTitle')}
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              {t('impact.achievedDesc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {primaryImpact.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-cream to-gold/5 p-8 rounded-lg shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-sage" />
                </div>
                <div className="text-4xl font-display font-bold text-sage mb-2">{stat.number}</div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Secondary Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {secondaryStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center p-6 bg-white rounded-lg border border-border/30 hover:border-sage/50 transition-colors"
              >
                <stat.icon className="w-8 h-8 text-sage mx-auto mb-3" />
                <div className="text-2xl font-display font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.detail}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mega Events */}
      <section className="py-20 bg-gradient-to-br from-cream to-gold/10">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('impact.megaEvents')}
            </h2>
            <p className="text-muted-foreground font-body text-lg">
              Mobilizing thousands for PM Modi-ji's vision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {megaEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-sm border border-border hover:shadow-xl transition-all overflow-hidden flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8 flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-sage transition-colors">{event.title}</h3>
                  <div className="text-gold text-2xl font-bold mb-3">{event.stats}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{event.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Social Media / Twitter Section */}
      <section className="py-20 bg-sage-dark text-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              {t('impact.followLive')}
            </h2>
            <p className="font-body text-lg text-cream/80 mb-8 leading-relaxed">
              Stay updated with daily ground reports, rally highlights, and community initiatives.
              Follow @AnanthAyyasamy on X (Twitter) for real-time updates from Tenkasi.
            </p>
            <a
              href="https://x.com/AnanthAyyasamy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
            >
              {t('impact.followX')}
            </a>
          </motion.div>
        </div>
      </section>
    </Layout >
  );
};

export default Impact;
