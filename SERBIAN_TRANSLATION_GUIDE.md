# Serbian Translation Implementation Guide

## Overview
The application now supports bilingual functionality (English/Serbian) with a language toggle button. Users can switch between languages, and their preference is saved in localStorage.

## Features Implemented

### 1. Language Toggle Button
- **Location**: Top-left corner of every page (next to Home button)
- **Design**: Flag icons (🇬🇧 for English, 🇷🇸 for Serbian)
- **Functionality**: Click to open dropdown menu and select language

### 2. Translated Components
All user-facing text has been translated, including:
- **Cart Page**: All labels, buttons, and messages
- **Checkout Form**: All form fields, placeholders, error messages
- **Empty Cart**: Empty state messages
- **Mini Cart**: Cart preview text
- **Order Confirmation**: Success messages
- **Navigation**: Home button and other UI elements

### 3. Translation Keys
Translations are organized by category in `/src/i18n/resource.js`:
- **Common**: HOT, Home, Free Express Shipping
- **Cart**: cart.empty.title, cart.viewCart, cart.clearCart, cart.total
- **Forms**: form.fullName, form.email, form.addressLine1, etc.
- **Buttons**: button.checkout, button.addToCart, button.processing
- **Errors**: error.cartEmpty, error.orderFailed
- **Order**: order.thankYou, order.confirmation, order.browseProducts

### 4. Product Translations
Serbian product descriptions are available in `/src/data/product-translations-sr.js` for:
- Termos Dose Traveler Max 1.2L (all color variants)
- Termos Dose Traveler Regular 0.88L (all color variants)  
- Termos Dose Traveler Mini 0.6L (all color variants)

## How It Works

### Language Persistence
- User's language choice is saved to `localStorage` with key `'language'`
- On page reload, the saved language is automatically loaded
- Default language is English if no preference is saved

### Adding New Translations
To add a new translation:

1. **Add English and Serbian text** to `/src/i18n/resource.js`:
```javascript
en: {
  translation: {
    "your.translation.key": "English text"
  }
},
sr: {
  translation: {
    "your.translation.key": "Srpski tekst"
  }
}
```

2. **Use in component**:
```javascript
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t } = useTranslation();
  return <div>{t('your.translation.key')}</div>;
}
```

### Adding New Languages
To add another language:

1. Add language resource to `/src/i18n/resource.js`
2. Add language option to `/src/components/language-toggle/language-toggle.jsx`:
```javascript
const languages = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'sr', label: 'Srpski', flag: '🇷🇸' },
  { code: 'xx', label: 'New Language', flag: '🏳️' }
];
```

## Files Modified

### Created Files
- `/src/components/language-toggle/language-toggle.jsx`
- `/src/components/language-toggle/index.js`
- `/src/data/product-translations-sr.js`

### Modified Files
- `/src/i18n/index.js` - Added localStorage persistence
- `/src/i18n/resource.js` - Added Serbian translations
- `/src/components/layouts/shop-layout-1/shop-layout-1.jsx` - Added language toggle
- `/src/app/products/layout.jsx` - Added language toggle
- `/src/pages-sections/cart/checkout-form.jsx` - Added translation hooks
- `/src/pages-sections/cart/empty-cart.jsx` - Added translation hooks
- `/src/pages-sections/cart/page-view/cart.jsx` - Added translation hooks
- `/src/pages-sections/mini-cart/mini-cart.jsx` - Added translation hooks
- `/src/pages-sections/order-confirmation/page-view.jsx` - Added translation hooks

## Testing
1. Open the application
2. Click the language toggle button in the top-left
3. Select "Srpski" (🇷🇸)
4. Verify all text changes to Serbian
5. Refresh the page - language preference should persist
6. Switch back to English to verify both directions work

## Future Enhancements
- Add more product translations (currently only Thermos products have Serbian descriptions)
- Add translations for product titles and categories
- Add translations for error messages from the API
- Support more languages (German, French, etc.)



