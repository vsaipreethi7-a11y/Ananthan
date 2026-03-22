import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get language from localStorage or default to 'en'
    const saved = localStorage.getItem('language') as Language;
    return saved || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = language === 'en' ? translations.en : translations.ta;

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key; // Return key if translation not found
  };

  useEffect(() => {
    document.documentElement.lang = language === 'ta' ? 'ta' : 'en';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translation files
const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      journey: 'Journey',
      vision: 'Vision',
      initiatives: 'Initiatives',
      impact: 'Impact',
      gallery: 'Gallery',
      media: 'Media',
      connect: 'Connect'
    },
    hero: {
      title: 'Ananthan Ayyasamy',
      subtitle: 'BJP Tenkasi District President',
      tagline: '"Ask for nothing less than the greatest"',
      description: 'Bringing Tech Leadership to Politics — From Intel Engineering Director in USA to grassroots political leader. Envisioning',
      jobsGoal: 'One Lakh Hi-Tech Jobs',
      jobsDescription: 'in Tenkasi by 2032.',
      knowMore: 'Know More',
      connect: 'Connect'
    },
    about: {
      badge: 'About',
      title: 'Ananthan Ayyasamy',
      p1: 'Ananthan Ayyasamy is a technology leader, entrepreneur, and public servant committed to building a future driven by innovation, opportunity, and inclusive growth.',
      p2: 'He currently serves as the BJP President for Tenkasi District, where he actively works toward regional development, employment generation, and community empowerment.',
      p3: 'With a distinguished global career, Ananthan is an Ex-Engineering Director at Intel, USA, where he led advanced semiconductor engineering initiatives and holds multiple patents. His work has contributed to cutting-edge technology that powers modern computing systems worldwide.',
      p4: 'Beyond his corporate leadership, he is the Founder & CEO of TenSemi.com, a semiconductor-focused initiative aimed at nurturing high-tech talent and innovation. He also founded VoiceofTenkasi.org and Vaazhai.org, platforms dedicated to social awareness, grassroots development, and amplifying regional voices.',
      p5: 'Driven by a bold and future-focused vision, Ananthan envisions creating ONE LAKH Hi-Tech Jobs in Tenkasi by 2032—transforming the region into a hub for technology, skills, and sustainable economic growth.',
      careerHistory: 'Career History',
      leadership: 'Leadership',
      socialLeadership: 'Social & Political Leadership',
      journey: 'Journey'
    },
    vision: {
      badge: 'Vision 2032 & Initiatives',
      title: 'Tenkasi: The Estonia of Asia',
      description: 'A comprehensive vision to transform rural Tenkasi into a global tech hub by 2032 with ONE LAKH hi-tech jobs, world-class infrastructure, and self-sustained villages.',
      explore: 'Explore Vision',
      viewInitiatives: 'View Initiatives',
      pillarsTitle: 'Six Pillars of Transformation',
      pillarsDesc: 'Our comprehensive roadmap to make Tenkasi a model for rural India and a global technology hub',
      initiativesTitle: 'Initiatives in Action',
      initiativesDesc: 'Concrete programs already transforming Tenkasi — from education to economy, health to infrastructure',
      roadmapTitle: 'Roadmap to 2032',
      roadmapDesc: 'Phased milestones toward achieving our ambitious vision for Tenkasi'
    },
    impact: {
      badge: 'Results Driven Leadership',
      title: 'Grassroots Impact',
      description: "Since 2022, bringing PM Modi-ji's schemes to every village in Tenkasi through 500+ welfare camps.",
      reportCard: 'Leadership Achievement Report Card',
      reportCardDesc: 'Since becoming BJP Tenkasi District President (January 2025)',
      achievedTitle: 'What We Achieved Since 2022',
      achievedDesc: 'MODI-fied Tenkasi through unprecedented grassroots mobilization',
      megaEvents: 'Historic Mega Events & Rallies',
      followLive: 'Follow Our Journey Live',
      followX: 'Follow on X (Twitter)'
    },
    media: {
      badge: 'Press & Social Media',
      title: 'Media Coverage',
      description: 'News articles, interviews, and features about our initiatives and achievements',
      inNews: 'In the News',
      pressCoverage: 'Press Coverage',
      search: 'Search & Discover',
      findGoogle: 'Find Us on Google',
      recentUpdates: 'Recent Social Media Updates',
      stayConnected: 'Stay Connected'
    },
    gallery: {
      badge: 'Photos',
      title: 'Photo Gallery',
      description: 'Moments from rallies, welfare camps, educational initiatives, and community events across Tenkasi.',
      videoTitle: 'Videos',
      videoDesc: 'Watch highlights from rallies, events, speeches, and community initiatives',
      videos: 'Videos',
      catVoice: 'Voice of People',
      catAnanthan: 'Ananthan',
      catModiCamps: 'Modi Camps'
    },
    connect: {
      badge: 'Contact',
      title: 'Get in Touch',
      description: 'Join the movement to transform Tenkasi.',
      writeToUs: 'Write to Us',
      name: 'Your name',
      email: 'Email',
      phone: 'Phone number',
      subject: 'Select Subject',
      message: 'Your message',
      submit: 'Submit Message',
      infoTitle: 'Contact Information',
      office: 'Office Address',
      organizations: 'Our Organizations'
    },
    stats: {
      patents: 'Patents Filed',
      experience: 'Years in Semiconductor Design',
      students: 'Students Reached',
      camps: 'Community Welfare Camps'
    },
    common: {
      viewAll: 'View All',
      learnMore: 'Learn More',
      readArticle: 'Read Article',
      visitWebsite: 'Visit Website',
      viewPost: 'View Post'
    },
    footer: {
      description: "Bringing Tech Leadership to Politics — Envisioning One Lakh Hi-Tech Jobs in Tenkasi by 2032. Transforming rural Tenkasi into the Estonia of Asia.",
      copyright: "© 2026 Ananthan Ayyasamy. All rights reserved.",
      quickLinks: "Quick Links",
      contact: "Contact"
    }
  },
  ta: {
    nav: {
      home: 'முகப்பு',
      about: 'எங்களை பற்றி',
      journey: 'என் பயணம்',
      vision: 'தொலைநோக்கு',
      initiatives: 'முயற்சிகள்',
      impact: 'தாக்கம்',
      gallery: 'படத்தொகுப்பு',
      media: 'ஊடகம்',
      connect: 'தொடர்பு'
    },
    hero: {
      title: 'ஆனந்தன் அய்யாசாமி',
      subtitle: 'பாஜக தென்காசி மாவட்ட தலைவர்',
      tagline: '"பெரிதினும் பெரிது கேள்"',
      description: 'அரசியலுக்கு தொழில்நுட்ப தலைமையை கொண்டு வருதல் - அமெரிக்காவில் இன்டெல் இன்ஜினியரிங் டைரக்டரிலிருந்து அடிமட்ட அரசியல் தலைவர் வரை. எதிர்நோக்குதல்',
      jobsGoal: 'ஒரு லட்சம் உயர் தொழில்நுட்ப வேலைகள்',
      jobsDescription: '2032 ஆம் ஆண்டுக்குள் தென்காசியில்.',
      knowMore: 'மேலும் அறிய',
      connect: 'தொடர்பு கொள்ள'
    },
    about: {
      badge: 'எங்களை பற்றி',
      title: 'ஆனந்தன் அய்யாசாமி',
      p1: 'ஆனந்தன் அய்யாசாமி ஒரு தொழில்நுட்பத் தலைவர், தொழிலதிபர் மற்றும் பொதுச் சேவகர், அவர் புதுமை, வாய்ப்பு மற்றும் அனைவரையும் உள்ளடக்கிய வளர்ச்சியால் இயக்கப்படும் எதிர்காலத்தை உருவாக்க உறுதிபூண்டுள்ளார்.',
      p2: 'அவர் தற்போது தென்காசி மாவட்ட பாஜக தலைவராகப் பணியாற்றி வருகிறார், அங்கு அவர் பிராந்திய வளர்ச்சி, வேலைவாய்ப்பு உருவாக்கம் மற்றும் சமூக அதிகாரமளிப்பதில் தீவிரமாக செயல்பட்டு வருகிறார்.',
      p3: 'அமெரிக்காவின் இன்டெல் நிறுவனத்தில் முன்னாள் பொறியியல் இயக்குநராகப் பணியாற்றிய ஆனந்தன், மேம்பட்ட செமிகண்டக்டர் பொறியியல் முன்னெடுப்புகளுக்குத் தலைமை தாங்கி பல காப்புரிமைகளைப் பெற்றுள்ளார். அவரது பணி உலகம் முழுவதும் நவீன கணினி அமைப்புகளை இயக்கும் அதிநவீன தொழில்நுட்பத்திற்கு பங்களித்துள்ளது.',
      p4: 'தனது கார்ப்பரேட் தலைமைக்கு அப்பால், அவர் TenSemi.com-ன் நிறுவனர் மற்றும் CEO ஆவார், இது உயர் தொழில்நுட்ப திறமை மற்றும் புதுமைகளை வளர்ப்பதை நோக்கமாகக் கொண்ட ஒரு செமிகண்டக்டர் முன்முயற்சியாகும். அவர் VoiceofTenkasi.org மற்றும் Vaazhai.org ஆகியவற்றைத் தொடங்கினார், இது சமூக விழிப்புணர்வு, அடிமட்ட வளர்ச்சி மற்றும் பிராந்திய குரல்களை மேம்படுத்துவதற்கான தளங்களாகும்.',
      p5: 'தைரியமான மற்றும் எதிர்காலத்தை நோக்கிய பார்வையால் ஈர்க்கப்பட்ட ஆனந்தன், 2032 ஆம் ஆண்டிற்குள் தென்காசியில் ஒரு லட்சம் உயர் தொழில்நுட்ப வேலைகளை உருவாக்குவதை எதிர்நோக்குகிறார் - இப்பகுதியை தொழில்நுட்பம், திறன்கள் மற்றும் நிலையான பொருளாதார வளர்ச்சிக்கான மையமாக மாற்றுகிறார்.',
      careerHistory: 'பணி வரலாறு',
      leadership: 'தலைமைத்துவம்',
      socialLeadership: 'சமூக மற்றும் அரசியல் தலைமை',
      journey: 'பயணம்'
    },
    vision: {
      badge: 'தொலைநோக்கு 2032 & முயற்சிகள்',
      title: 'தென்காசி: ஆசியாவின் எஸ்டோனியா',
      description: 'ஒரு லட்சம் உயர் தொழில்நுட்ப வேலைகள், உலகத்தரம் வாய்ந்த உள்கட்டமைப்பு மற்றும் தன்னிறைவு பெற்ற கிராமங்களுடன் 2032 ஆம் ஆண்டிற்குள் கிராமப்புற தென்காசியை உலகளாவிய தொழில்நுட்ப மையமாக மாற்றுவதற்கான விரிவான பார்வை.',
      explore: 'தொலைநோக்கை ஆராய்க',
      viewInitiatives: 'முயற்சிகளை காண்க',
      pillarsTitle: 'மாற்றத்தின் ஆறு தூண்கள்',
      pillarsDesc: 'தென்காசியை கிராமப்புற இந்தியாவின் முன்மாதிரியாகவும், உலகளாவிய தொழில்நுட்ப மையமாகவும் மாற்றுவதற்கான எங்கள் விரிவான வரைபடம்',
      initiativesTitle: 'செயலில் உள்ள முயற்சிகள்',
      initiativesDesc: 'தென்காசியை ஏற்கனவே மாற்றியமைக்கும் உறுதியான திட்டங்கள் - கல்வி முதல் பொருளாதாரம் வரை, சுகாதாரம் முதல் உள்கட்டமைப்பு வரை',
      roadmapTitle: '2032க்கான வரைபடம்',
      roadmapDesc: 'தென்காசிக்கான எங்கள் லட்சிய பார்வையை அடைவதற்கான கட்டம் கட்ட மைல்கற்கள்'
    },
    impact: {
      badge: 'முடிவுகளை மையமாகக் கொண்ட தலைமை',
      title: 'அடிமட்ட தாக்கம்',
      description: "2022 முதல், 500+ நல முகாம்கள் மூலம் பிரதமர் மோடிஜியின் திட்டங்களை தென்காசியின் ஒவ்வொரு கிராமத்திற்கும் கொண்டு செல்லுதல்.",
      reportCard: 'தலைமை சாதனை அறிக்கை அட்டை',
      reportCardDesc: 'பாஜக தென்காசி மாவட்ட தலைவராக பதவியேற்ற பிறகு (ஜனவரி 2025)',
      achievedTitle: '2022 முதல் நாங்கள் சாதித்தவை',
      achievedDesc: 'முன்னெப்போதும் இல்லாத அடிமட்ட அணிதிரட்டல் மூலம் தென்காசியை மோடிமயமாக்கல்',
      megaEvents: 'வரலாற்று சிறப்புமிக்க மெகா நிகழ்வுகள் & பேரணிகள்',
      followLive: 'எங்கள் பயணத்தை நேரலையில் பின்தொடரவும்',
      followX: 'X (Twitter)-ல் பின்தொடரவும்'
    },
    media: {
      badge: 'பத்திரிகை மற்றும் சமூக ஊடகங்கள்',
      title: 'ஊடக கவரேஜ்',
      description: 'எங்கள் முயற்சிகள் மற்றும் சாதனைகள் பற்றிய செய்திக் கட்டுரைகள், நேர்காணல்கள் மற்றும் சிறப்பம்சங்கள்',
      inNews: 'செய்திகளில்',
      pressCoverage: 'பத்திரிகை கவரேஜ்',
      search: 'தேடல் & கண்டுபிடிப்பு',
      findGoogle: 'கூகுளில் எங்களை தேடுங்கள்',
      recentUpdates: 'சமீபத்திய சமூக ஊடக புதுப்பிப்புகள்',
      stayConnected: 'இணைந்திருங்கள்'
    },
    gallery: {
      badge: 'புகைப்படங்கள்',
      title: 'புகைப்படத் தொகுப்பு',
      description: 'தென்காசி முழுவதும் நடைபெற்ற பேரணிகள், நல முகாம்கள், கல்வி முயற்சிகள் மற்றும் சமூக நிகழ்வுகளின் தருணங்கள்.',
      videoTitle: 'வீடியோக்கள்',
      videoDesc: 'பேரணிகள், நிகழ்வுகள், உரைகள் மற்றும் சமூக முயற்சிகளின் சிறப்பம்சங்களைப் பாருங்கள்',
      videos: 'வீடியோக்கள்',
      catVoice: 'மக்களின் குரல்',
      catAnanthan: 'ஆனந்தன்',
      catModiCamps: 'மோடி முகாம்கள்'
    },
    connect: {
      badge: 'தொடர்பு',
      title: 'தொடர்பு கொள்ள',
      description: 'தென்காசியை மாற்றியமைக்கும் இயக்கத்தில் இணையுங்கள்.',
      writeToUs: 'எங்களுக்கு எழுதுங்கள்',
      name: 'உங்கள் பெயர்',
      email: 'மின்னஞ்சல்',
      phone: 'தொலைபேசி எண்',
      subject: 'விடயத்தை தேர்ந்தெடுக்கவும்',
      message: 'உங்கள் செய்தி',
      submit: 'செய்தியை சமர்ப்பிக்கவும்',
      infoTitle: 'தொடர்பு தகவல்',
      office: 'அலுவலக முகவரி',
      organizations: 'எங்கள் நிறுவனங்கள்'
    },
    stats: {
      patents: 'காப்புரிமைகள்',
      experience: 'செமிகண்டக்டர் துறையில் அனுபவம்',
      students: 'மாணவர்கள் பயன்பெற்றனர்',
      camps: 'சமுதாய நல முகாம்கள்'
    },
    common: {
      viewAll: 'அனைத்தையும் காண்க',
      learnMore: 'மேலும் அறிய',
      readArticle: 'கட்டுரையை படிக்க',
      visitWebsite: 'இணையதளத்தைப் பார்வையிடவும்',
      viewPost: 'பதிவை காண்க'
    },
    footer: {
      description: "அரசியலுக்கு தொழில்நுட்ப தலைமையை கொண்டு வருதல் — 2032க்குள் தென்காசியில் ஒரு லட்சம் உயர் தொழில்நுட்ப வேலைகளை உருவாக்குதல். கிராமப்புற தென்காசியை ஆசியாவின் எஸ்டோனியாவாக மாற்றுதல்.",
      copyright: "© 2026 ஆனந்தன் அய்யாசாமி. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
      quickLinks: "விரைவான இணைப்புகள்",
      contact: "தொடர்பு"
    }
  }
};
