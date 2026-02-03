import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import galleryHero from "@/assets/gallery.png";
import { useLanguage } from "@/contexts/LanguageContext";

// Import gallery images

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

const categories = [
  { id: "all", label: "All Photos" },
  { id: "rallies", label: "Rallies & Events" },
  { id: "medical", label: "Medical Camps" },
  { id: "education", label: "Education" },
  { id: "women", label: "Women Empowerment" },
  { id: "environment", label: "Environment" },
  { id: "sports", label: "Sports" },
  { id: "welfare", label: "Welfare Programs" },
];

// Import gallery images dynamically
const imageModules = import.meta.glob('@/assets/gallery/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });

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
    const filename = path.split('/').pop()?.toLowerCase() || "";

    return {
      id: index + 1,
      src: src as string,
      title: filename.includes("modi") ? "Meeting with PM Modi" : content.title,
      category: content.category,
      description: content.desc
    };
  });

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filtered images is just all images now
  const filteredImages = galleryImages;

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
      {/* Hero Section */}
      <section className="pt-8 pb-12 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} // Changed animation to slide from left
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left" // Align text to left
            >
              <p className="text-sage font-body text-sm uppercase tracking-[0.2em] mb-4">
                {t('gallery.badge')}
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground mb-6">
                {t('gallery.photos')}
              </h1>
              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                {t('gallery.description')}
              </p>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} // Slide from right
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-lg">
                <div className="absolute -inset-4 bg-gradient-to-br from-sage/20 to-gold/20 rounded-2xl blur-xl" />
                <img
                  src={galleryHero}
                  alt="Gallery Highlights"
                  className="relative w-full h-auto rounded-lg shadow-2xl border-4 border-white/50"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Grid (No Filter) */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
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
                    download={`ananthan-gallery-${image.id}.png`}
                    className="absolute top-2 right-2 z-20 p-2 bg-sage/80 hover:bg-sage text-cream rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={(e) => e.stopPropagation()}
                    title="Download Photo"
                  >
                    <Download size={18} />
                  </a>
                </motion.div>
              ))}
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
                download={`ananthan-gallery-${selectedImage.id}.png`}
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
              className="absolute left-4 top-1/2 -translate-y-1/2 text-cream hover:text-gold transition-colors z-10 p-2"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
            >
              <ChevronLeft size={40} />
            </button>

            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-cream hover:text-gold transition-colors z-10 p-2"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
            >
              <ChevronRight size={40} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain rounded-sm"
              />
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
