# Language Translation System

## How It Works

The website now supports English and Tamil language switching. The system uses React Context to manage language state globally.

## Adding New Translations

### Step 1: Add to Translation File

Open `src/contexts/LanguageContext.tsx` and add your translations to both `en` and `ta` objects:

```tsx
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      // Add more here
    },
    yourNewSection: {
      title: "Your English Title",
      description: "Your English Description",
    },
  },
  ta: {
    nav: {
      home: "முகப்பு",
      about: "எங்களை பற்றி",
      // Add more here
    },
    yourNewSection: {
      title: "உங்கள் தமிழ் தலைப்பு",
      description: "உங்கள் தமிழ் விவரணை",
    },
  },
};
```

### Step 2: Use Translations in Components

Import and use the `useLanguage` hook in any component:

```tsx
import { useLanguage } from "@/contexts/LanguageContext";

const YourComponent = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h1>{t("yourNewSection.title")}</h1>
      <p>{t("yourNewSection.description")}</p>
    </div>
  );
};
```

## Current Translations

Currently translated areas:

- ✅ Navigation menu
- ✅ Hero section (Home page)
- ✅ Stats section
- ✅ Footer

### To Add:

- 📝 About page
- 📝 Journey page
- 📝 Vision page
- 📝 Initiatives page
- 📝 Impact page
- 📝 Gallery page
- 📝 Media page
- 📝 Connect page

## Tamil Translation Guidelines

1. **Keep translations culturally appropriate**
2. **Maintain formal tone** for political content
3. **Use proper Tamil Unicode** (தமிழ்) not transliteration
4. **Test readability** on mobile devices

## Example: Translating Home Page Stats

```tsx
// In LanguageContext.tsx
stats: {
  partyMembers: {
    en: 'Party Members',
    ta: 'கட்சி உறுப்பினர்கள்'
  },
  welfareCamps: {
    en: 'Welfare Camps',
    ta: 'நல்வாழ்வு முகாம்கள்'
  }
}

// In your component
<div>
  <span>{t('stats.partyMembers')}</span>
</div>
```

## Language Persistence

The selected language is automatically saved to `localStorage` and persists across page refreshes.

## Testing

1. Click the "EN ▼" button in the navbar
2. Select "தமிழ் (Tamil)" from dropdown
3. Navigate links should change to Tamil
4. Refresh page - Tamil should remain selected
5. Switch back to English to verify

## Need Help?

Contact the development team or refer to the React i18n documentation for advanced features.
