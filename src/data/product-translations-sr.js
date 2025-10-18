// Serbian product translations based on product slugs or titles
export const serbianProductTranslations = {
  // Traveler Max 1.2L variants
  "black-traveler-max": {
    description: `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju.

Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti. Izrađen od izdržljivog nerđajućeg čelika sa duplim zidom za dugotrajnu upotrebu

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja
• Nerđajući čelik 18/8 - visok kvalitet, bezbedan za hranu i dugotrajan

Ostanite hidrirani tokom celog dana uz Dose Traveler Max termos u mat crnoj boji. Ovaj moderni termos daje savremen, neutralan izgled i pomaže vam da uvek imate vodu ili neko drugo omiljeno piće pri ruci, tokom treninga, na putu do posla, školi ili bilo kojoj drugoj svakodnevnoj aktivnosti.

Termos je potpuno zatvoren kada je slamka u spuštenom položaju, a preklopni poklopac sa slamkom omogućava lako i ugodno srkanje. Dizajn baze omogućava postavljanje u standardne držače za čaše, a ergonomska ručka olakšava nošenje na putu. Napravljen od izdržljivog nerđajućeg čelika, održava vaše napitke hladnim satima i dizajniran je da podrži doslednu hidrataciju.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`
  },
  "creme-traveler-max": {
    description: `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju.

Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti. Izrađen od izdržljivog nerđajućeg čelika sa duplim zidom za dugotrajnu upotrebu

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja
• Nerđajući čelik 18/8 - visok kvalitet, bezbedan za hranu i dugotrajan

Ostanite hidrirani sa Dose Traveler Max termosom u nijansi Cream. Topla, vanilasta boja, daje nežan izgled, koji se skladno uklapa uz poslovni i ležerni stil.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`
  },
  "frost-traveler-max": {
    description: `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju.

Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti. Izrađen od izdržljivog nerđajućeg čelika sa duplim zidom za dugotrajnu upotrebu

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja

Ostanite hidrirani sa Dose Traveler Max termosom u nijansi Frost, elegantna i suptilna boja, koja deluje čisto i moderno uklapa se savršeno u minimalistički stil.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`
  },
  "neon-magenta-traveler-max": {
    description: `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju.

Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti. Izrađen od izdržljivog nerđajućeg čelika sa duplim zidom za dugotrajnu upotrebu

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja

Dose Traveler Max termos u boji Neon Magenta je vaš verni saputnik u svakodnevnim aktivnostima, ova odvažna i energična nijansa ružičaste zrači samopouzdanjem i privlači pažnju gde god se pojavite.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`
  }
};

// Helper function to get Serbian description by slug
export const getSerbianDescription = (slug) => {
  return serbianProductTranslations[slug]?.description || null;
};



