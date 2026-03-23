import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

// Import gallery images dynamically
const imageModules = import.meta.glob('@/assets/gallery/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true, import: 'default' });

const galleriesInfo = [
  { title: "TenSemi Chip Design Center Launch", category: "education", desc: "Inaugurating the first-ever rural semiconductor design center in Tenkasi." },
  { title: "Meeting with Sridhar Vembu", category: "welfare", desc: "Discussing strategies for rural industrialization and job creation." },
  { title: "AI/ML Skill Workshop", category: "education", desc: "Empowering local students with cutting-edge tech skills." },
  { title: "Village Temple Renovation", category: "rallies", desc: "Restoring our cultural heritage and community centers." },
  { title: "Election Campaign Rally", category: "rallies", desc: "Massive gathering of supporters for the cause." },
  { title: "Medical Camp", category: "medical", desc: "Free healthcare checkups for the elderly and needy." },
];

const galleryImages: GalleryImage[] = Object.entries(imageModules)
  .filter(([path]) => {
    const filename = path.split('/').pop()?.toLowerCase() || "";
    // Only exclude PSD files or non-image assets if any accidentally matched
    return !filename.endsWith('.psd') && !filename.includes('solo/');
  })
  .sort(([pathA], [pathB]) => {
    const numA = parseInt(pathA.match(/(\d+)/)?.[0] || "9999");
    const numB = parseInt(pathB.match(/(\d+)/)?.[0] || "9999");
    if (numA !== numB && numA !== 9999 && numB !== 9999) return numA - numB;
    return pathA.localeCompare(pathB);
  })
  .map(([path, src], index) => {
    const content = galleriesInfo[index % galleriesInfo.length];
    const pathParts = path.split('/');
    const filename = pathParts.pop()?.toLowerCase() || "";
    const folderName = pathParts.pop()?.toLowerCase() || "";
    
    const isAnanthan = folderName === 'ananthan' || filename.includes("ananthan") || filename.includes("hero");
    const isEvents = folderName === 'events' || filename.includes("events");
    const isPeople = folderName === 'people' || filename.includes("voice_of_people") || filename.includes("people");
    const isModiCamps = folderName === 'modi welfare' || filename.includes("modi");
    const isEducation = folderName === 'education' || filename.includes("education") || filename.includes("science");
    const isWomen = folderName === 'women empowerment' || filename.includes("women");
    const isSports = folderName === 'sports' || filename.includes("sports");

    return {
      id: index + 1,
      src: src as string,
      title: isAnanthan
        ? "Portrait of Ananthan Ayyasamy" 
        : isEvents
          ? "Event Coverage"
          : isPeople
            ? "Voice of People Initiative"
            : isModiCamps
              ? "Modi Welfare Camps"
              : isEducation
                ? "Educational Initiatives"
                : isWomen
                  ? "Women Empowerment"
                  : isSports
                    ? "Sports & Youth Development"
                    : content.title,
      category: isAnanthan
        ? "ananthan" 
        : isEvents
          ? "events"
          : isPeople
            ? "voice_of_people"
            : isModiCamps
              ? "modicamps"
              : isEducation
                ? "education"
                : isWomen
                  ? "women"
                  : isSports
                    ? "sports"
                    : content.category === "rallies" ? "events" : content.category,
      description: isAnanthan
        ? "Official portrait of Ananthan Ayyasamy." 
        : isEvents
          ? "Moments from our various events and gatherings."
          : isPeople
            ? "Direct interaction with the citizens of Tenkasi to understand their needs."
            : isModiCamps
              ? "Moments from Modiji's welfare camps and associated events."
              : isEducation
                ? "Empowering the youth through transformative educational opportunities."
                : isWomen
                  ? "Supporting and uplifting women across the region."
                  : isSports
                    ? "Encouraging athletic excellence and team spirit among the youth."
                    : content.desc
    };
  });

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("ananthan");

  const categories = [
    { id: "ananthan", label: t('gallery.catAnanthan') },
    { id: "voice_of_people", label: t('gallery.catVoice') },
    { id: "events", label: "Events" },
    { id: "modicamps", label: t('gallery.catModiCamps') },
    { id: "education", label: "Education" },
    { id: "women", label: "Women Empowerment" },
    { id: "sports", label: "Sports" },
  ];

  // Filter images based on active category
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
        : (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <Layout>
      {/* Gallery Header */}
      <section className="pt-20 pb-8 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3">
              {t('gallery.title')}
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground">
              {t('gallery.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-3 bg-cream border-b border-border/50 sticky top-16 z-30 backdrop-blur-md bg-cream/90">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex overflow-x-auto gap-2 md:gap-3 md:flex-wrap md:justify-center pb-1 scrollbar-none" style={{scrollbarWidth:'none'}}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-sage text-cream shadow-md scale-105"
                    : "bg-white text-muted-foreground hover:bg-sage/10 border border-border/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 md:py-16 bg-cream">
        <div className="container mx-auto px-3 md:px-4 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.length > 0 ? (
                filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group cursor-pointer relative"
                  >
                    <div
                      className="relative overflow-hidden rounded-sm shadow-soft hover:shadow-elevated transition-shadow duration-300"
                      onClick={() => openLightbox(image, index)}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full aspect-square object-contain bg-cream/50 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Download Button */}
                    <a
                      href={image.src}
                      download={`ananthan-gallery-${image.id}.jpg`}
                      className="absolute top-2 right-2 z-20 p-2 bg-sage/80 hover:bg-sage text-cream rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={(e) => e.stopPropagation()}
                      title="Download Photo"
                    >
                      <Download size={18} />
                    </a>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="text-muted-foreground text-lg">No photos found in this category yet.</p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Top Bar Controls */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-4">
              {/* Download Button */}
              <a
                href={selectedImage.src}
                download={`ananthan-gallery-${selectedImage.id}.jpg`}
                className="text-cream hover:text-gold transition-colors p-2"
                onClick={(e) => e.stopPropagation()}
                title="Download Photo"
              >
                <Download size={32} />
              </a>

              {/* Close Button */}
              <button
                className="text-cream hover:text-gold transition-colors p-2"
                onClick={closeLightbox}
              >
                <X size={32} />
              </button>
            </div>

            {/* Previous Button */}
            <button
              className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 text-cream hover:text-gold transition-colors z-10 p-1 md:p-2"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
            >
              <ChevronLeft size={28} className="md:w-10 md:h-10" />
            </button>

            {/* Next Button */}
            <button
              className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 text-cream hover:text-gold transition-colors z-10 p-1 md:p-2"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
            >
              <ChevronRight size={28} className="md:w-10 md:h-10" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl w-full flex flex-col items-center px-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[55vh] md:max-h-[70vh] object-contain rounded-sm"
              />
              <div className="mt-3 md:mt-6 p-4 md:p-6 bg-background/90 text-center rounded-xl shadow-2xl max-w-3xl w-full border border-border/50 backdrop-blur-sm">
                <h3 className="text-lg md:text-2xl font-display font-bold text-foreground mb-1 md:mb-3">{selectedImage.title}</h3>
                <p className="text-muted-foreground font-body text-sm md:text-base">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Gallery Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4 text-center">
              {t('gallery.videos')}
            </h2>
            <p className="text-center text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Watch highlights from rallies, events, speeches, and community initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: "V6cDeGqTvlY", title: "Speech Highlights" },
              { id: "qHx_2_gbsrc", title: "Event Coverage" },
              { id: "vOG9FhBCiQk", title: "Keynote Address" },
              { id: "5ZWDbs3RL-M", title: "Community Interaction" },
              { id: "ieE3iTW5xZM", title: "Press Meet" },
              { id: "7jja47I40QA", title: "Rally Highlights" },
              { id: "Q1BbLsotQZ4", title: "Interview Session" },
              { id: "nvBvJ5-1p64", title: "Public Address" },
              { id: "O7YPpBU_AYc", title: "Development Works" },
              { id: "U65GxOZg7nM", title: "Campaign Trail" },
              { id: "t5Aa_aaibXo", title: "Vision for 2032" },
              { id: "BqthMnx4YoA", title: "Live Event Coverage" },
              { id: "pzo_XzzTCVU", title: "Youth Interaction" },
              { id: "PzNRr-LOPEg", title: "Rural Development" },
              { id: "C7D08YwhxBA", title: "Closing Remarks" }
            ].map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300"
              >
                <div className="relative pb-[56.25%] h-0">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-display text-lg font-medium text-foreground group-hover:text-sage transition-colors">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
