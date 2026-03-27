import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

const Connect = () => {
    const { t } = useLanguage();

    return (
        <Layout>
            <section className="pt-24 pb-12 bg-gradient-to-br from-cream to-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <p className="text-sage font-body text-sm uppercase tracking-[0.2em] mb-4">Get in Touch</p>
                        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
                            Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-gold">Ananthan</span>
                        </h1>
                        <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                            Have a question, suggestion, or want to join our initiatives? We'd love to hear from you.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-sage/10 space-y-6 md:space-y-8">
                                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">Contact Details</h3>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-sage" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">Office Address</h4>
                                        <p className="text-muted-foreground">
                                            BJP District Office,<br />
                                            Tenkasi, Tamil Nadu<br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-sage" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">Email Us</h4>
                                        <a href="mailto:ananthan@voiceoftenkasi.org" className="text-muted-foreground hover:text-sage transition-colors">
                                            ananthan@voiceoftenkasi.org
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-sage" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">Call Us</h4>
                                        <a href="tel:+919840328856" className="text-muted-foreground hover:text-sage transition-colors">
                                            +91 98403 28856
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-sage/5 p-6 md:p-8 rounded-2xl shadow-sm border border-sage/10">
                                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Follow Us</h3>
                                <div className="flex flex-wrap gap-3 md:gap-4">
                                    <a 
                                        href="https://x.com/AnanthAyyasamy" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                                    >
                                        <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                                    </a>
                                    <a 
                                        href="https://www.facebook.com/profile.php?id=100091498852259" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                                    >
                                        <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                                    </a>
                                    <a 
                                        href="https://www.instagram.com/tenkasi_ananthan/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                                    >
                                        <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                                    </a>
                                    <a 
                                        href="https://www.linkedin.com/in/ananthan/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                                    >
                                        <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-sage/10"
                        >
                            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">Send a Message</h3>
                            <form className="space-y-4 md:space-y-6">
                                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                        <Input id="name" placeholder="Your Name" className="h-11 md:h-12" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                        <Input id="email" type="email" placeholder="your@email.com" className="h-11 md:h-12" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                                    <Input id="subject" placeholder="How can we help?" className="h-11 md:h-12" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                    <Textarea id="message" placeholder="Your message..." className="min-h-[120px] md:min-h-[150px]" />
                                </div>
                                <Button className="w-full bg-sage hover:bg-sage-dark text-white h-12 text-base md:text-lg">
                                    Send Message <Send className="ml-2 w-4 h-4" />
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Connect;
