import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { Twitter, Facebook, Instagram, Youtube, Newspaper, ExternalLink, Quote, X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

// Dynamically import all media images
const mediaImports = import.meta.glob('../assets/media/*.{png,jpg,jpeg,PNG,JPG}', { eager: true, import: 'default' });
const mediaImages = Object.values(mediaImports) as string[];

const socialPlatforms = [
  {
    name: "X (Twitter)",
    icon: Twitter,
    handle: "@AnanthAyyasamy",
    link: "https://x.com/AnanthAyyasamy",
    followers: "10K+",
    description: "Daily updates on grassroots initiatives, political insights, and community engagement",
    color: "from-blue-400 to-blue-600"
  },
  {
    name: "Facebook",
    icon: Facebook,
    handle: "Ananthan Ayyasamy",
    link: "https://www.facebook.com/profile.php?id=100091498852259",
    followers: "25K+",
    description: "Event coverage, community stories, and welfare program highlights",
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "Instagram",
    icon: Instagram,
    handle: "@tenkasi_ananthan",
    link: "https://www.instagram.com/tenkasi_ananthan/",
    followers: "15K+",
    description: "Behind-the-scenes moments, rally photos, and youth empowerment content",
    color: "from-pink-500 to-purple-600"
  },
  {
    name: "YouTube",
    icon: Youtube,
    handle: "Ananthan Ayyasamy",
    link: "https://youtube.com/@ananthanayyasamy",
    followers: "5K+",
    description: "Full event coverage, speeches, interviews, and campaign updates",
    color: "from-red-500 to-red-700"
  },
];

const googleSearchTerms = [
  "Ananthan Ayyasamy Tenkasi",
  "TenSemi Semiconductor Tenkasi",
  "Voice of Tenkasi Foundation",
  "BJP Tenkasi District President",
  "Startup Tenkasi Summit",
  "Drug Free Tenkasi Rally",
];


const Media = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ url: string; id: number } | null>(null);

  // Helper to get dummy or derived info for news clippings
  const getMediaInfo = (id: number) => {
    const titles = [
      "Swarajya Magazine Feature",
      "Tenkasi Development Report",
      "Strategic Leadership Interview",
      "Semiconductor Hub Vision",
      "Grassroots Impact Coverage",
      "Youth Empowerment Initiative",
      "BJP District President Profile",
      "TenSemi Innovation Launch",
      "Public Welfare Camp Record",
      "Infrastructure Milestone"
    ];
    return {
      title: titles[id % titles.length],
      date: `Media Coverage ${2023 + (id % 3)}`,
      description: "Comprehensive coverage of Ananthan Ayyasamy's vision for Tenkasi, focusing on industrial growth, social welfare, and political transformation in Southern Tamil Nadu."
    };
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-8 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block bg-gold/10 px-6 py-2 rounded-full mb-6">
              <p className="text-sage font-body text-sm uppercase tracking-[0.2em] font-semibold">{t('media.badge')}</p>
            </div>
            <h1 className="font-display text-4xl md:text-7xl font-bold text-foreground mb-6">{t('media.title')}</h1>
            <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('media.description')}
            </p>
            <p className="font-body text-lg text-sage/80 mt-4">
              Featured in Swarajya Magazine, The Hindu, and 1000+ news imprints
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-20">

        {/* News Articles & Press Coverage (Gallery) */}
        <section className="mb-20">


          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {mediaImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="group relative aspect-square bg-gray-50 rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 border border-border/50"
                onClick={() => setSelectedImage({ url: image, id: idx })}
              >
                <img
                  src={image}
                  alt={`News coverage ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-sage/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/95 p-2 rounded-full opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <ZoomIn className="w-5 h-5 text-sage" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Google Search Highlights */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/50 backdrop-blur-sm border border-border rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-sm"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage/5 rounded-full -ml-32 -mb-32 blur-3xl" />

            <div className="relative z-10 text-center mb-12">
              <p className="text-sage font-body text-xs uppercase tracking-[0.3em] font-bold mb-4">Search & Discover</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Find Us on <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-gold">Google</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
                Explore the depth of our impact, news features, and leadership initiatives by searching these curated terms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto relative z-10">
              {googleSearchTerms.map((term, idx) => (
                <motion.a
                  key={idx}
                  href={`https://www.google.com/search?q=${encodeURIComponent(term)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex items-center justify-between bg-white border border-border/60 p-5 rounded-2xl hover:border-gold hover:shadow-xl hover:shadow-gold/5 transition-all duration-300"
                >
                  <span className="font-body font-semibold text-foreground/80 group-hover:text-sage transition-colors leading-tight">
                    {term}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-cream border border-border flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all">
                    <ExternalLink className="w-4 h-4 text-sage group-hover:text-white transition-colors" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>



        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-sage to-sage-dark p-12 rounded-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Quote className="w-12 h-12 text-gold mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Connected
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Follow our journey and be part of the transformation. Get daily updates, event coverage, and grassroots stories directly on your feed.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {socialPlatforms.map((platform, idx) => (
                <a
                  key={idx}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-sage px-6 py-3 rounded-full font-semibold hover:bg-gold hover:text-white transition-colors shadow-md hover:shadow-lg"
                >
                  <platform.icon className="w-5 h-5" />
                  {platform.name}
                </a>
              ))}
            </div>
          </motion.div>
        </section>
      </div>

      {/* Image Info Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] md:max-w-5xl p-0 bg-white border-none shadow-2xl overflow-hidden rounded-3xl">
          <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
            {/* Image Side */}
            <div className="md:w-2/3 bg-gray-50 flex items-center justify-center p-4">
              <div className="relative w-full h-full flex items-center justify-center">
                {selectedImage && (
                  <img
                    src={selectedImage.url}
                    alt="Full coverage view"
                    className="max-w-full max-h-[60vh] md:max-h-[80vh] object-contain shadow-lg"
                  />
                )}
              </div>
            </div>

            {/* Info Side */}
            <div className="md:w-1/3 p-8 md:p-10 flex flex-col bg-white">
              <DialogClose className="self-end mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <X className="w-5 h-5 text-gray-500" />
                </div>
              </DialogClose>

              {selectedImage && (
                <div className="flex-1">
                  <div className="inline-block bg-sage/10 text-sage px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                    {getMediaInfo(selectedImage.id).date}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight uppercase">
                    {getMediaInfo(selectedImage.id).title}
                  </h3>
                  <div className="w-12 h-1 bg-gold mb-8" />
                  <p className="font-body text-muted-foreground leading-relaxed mb-8 text-lg">
                    {getMediaInfo(selectedImage.id).description}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Newspaper className="w-4 h-4 text-sage" />
                      <span>Verified Press Release</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <ExternalLink className="w-4 h-4 text-sage" />
                      <span>View Original Source</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-full bg-sage-dark text-white py-4 rounded-xl font-bold hover:bg-sage transition-colors shadow-lg"
                >
                  Close Achievement View
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Media;
