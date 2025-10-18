"use client";

import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";

export default function ProductDescription({ product }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  // Determine specifications based on product size
  const getSpecifications = () => {
    if (product?.size?.includes('Regular (0.88L)')) {
      return {
        capacity: '0.88L (30oz)',
        hot: currentLang === 'sr' ? 'Čuva toplo 6 sati' : 'Keeps hot for 6 hours',
        cold: currentLang === 'sr' ? 'Čuva hladno 20 sati' : 'Keeps cold for 20 hours'
      };
    } else if (product?.size?.includes('Mini (0.6L)')) {
      return {
        capacity: '0.6L (20oz)',
        hot: currentLang === 'sr' ? 'Čuva toplo 5 sati' : 'Keeps hot for 5 hours',
        cold: currentLang === 'sr' ? 'Čuva hladno 18 sati' : 'Keeps cold for 18 hours'
      };
    } else {
      // Default to Max (1.2L)
      return {
        capacity: '1.2L (40oz)',
        hot: currentLang === 'sr' ? 'Čuva toplo 7 sati' : 'Keeps hot for 7 hours',
        cold: currentLang === 'sr' ? 'Čuva hladno 24 sata' : 'Keeps cold for 24 hours'
      };
    }
  };

  const specs = getSpecifications();

  // Get Serbian description based on product title/slug
  const getSerbianDescription = () => {
    const title = product.title?.toLowerCase() || '';
    
    // Map product titles to their descriptions
    if (title.includes('black') && title.includes('max')) {
      return `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju. Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti. Izrađen od izdržljivog nerđajućeg čelika sa duplim zidom za dugotrajnu upotrebu

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja
• Nerđajući čelik 18/8 - visok kvalitet, bezbedan za hranu i dugotrajan

Ostanite hidrirani tokom celog dana uz Dose Traveler Max termos u mat crnoj boji. Ovaj moderni termos daje savremen, neutralan izgled i pomaže vam da uvek imate vodu ili neko drugo omiljeno piće pri ruci, tokom treninga, na putu do posla, školi ili bilo kojoj drugoj svakodnevnoj aktivnosti.

Termos je potpuno zatvoren kada je slamka u spuštenom položaju, a preklopni poklopac sa slamkom omogućava lako i ugodno srkanje. Dizajn baze omogućava postavljanje u standardne držače za čaše, a ergonomska ručka olakšava nošenje na putu. Napravljen od izdržljivog nerđajućeg čelika, održava vaše napitke hladnim satima i dizajniran je da podrži doslednu hidrataciju.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('cream') && title.includes('max')) {
      return `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju. Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti. Izrađen od izdržljivog nerđajućeg čelika sa duplim zidom za dugotrajnu upotrebu

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja
• Nerđajući čelik 18/8 - visok kvalitet, bezbedan za hranu i dugotrajan

Ostanite hidrirani sa Dose Traveler Max termosom u nijansi Cream. Topla, vanilasta boja, daje nežan izgled, koji se skladno uklapa uz poslovni i ležerni stil.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('frost') && title.includes('max')) {
      return `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju. Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti.

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja

Ostanite hidrirani sa Dose Traveler Max termosom u nijansi Frost, elegantna i suptilna boja, koja deluje čisto i moderno uklapa se savršeno u minimalistički stil.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('magenta') && title.includes('max')) {
      return `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju. Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti.

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja

Dose Traveler Max termos u boji Neon Magenta je vaš verni saputnik u svakodnevnim aktivnostima, ova odvažna i energična nijansa ružičaste zrači samopouzdanjem i privlači pažnju gde god se pojavite.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('pink sand') && title.includes('max')) {
      return `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju. Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti.

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja

Ostanite hidrirani uz Dose Traveler Max termos u nijansi Pink Sand. Ova nežna bledo ružičasta nijansa se lako uklapa u svakodnevni stil. Pastelna završna obrada daje i svilenkasti mat izgled čine Pink Sand verziju termosa posebno sofisticiranom i nenametljivom za nošenje u svakoj prilici.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('coral') && title.includes('max')) {
      return `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju. Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti.

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja

Ostanite hidrirani tokom celog dana uz Dose Traveler Max termos u nijansi Coral, živahnoj nijansi koja odiše toplinom, optimizmom i svežinom. Savršena za letnji veseo izgled.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('hyper blue') && title.includes('max')) {
      return `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju. Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti.

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja

Ostanite hidrirani uz Dose Traveler Max termos u intezivnoj, električnoj nijansi plave, koja odiše snagom, samopouzdanjem i energijom - Hyper Blue.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('sage') && title.includes('max')) {
      return `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju. Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti.

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja

Ostanite dosledni u hidrataciji uz Dose Traveler Max termos u nijansi Sage. Njegova mat zelena boja pruža smiren i sofisticiran izgled koji se lako uklapa u različite stilove.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('mauve') && title.includes('max')) {
      return `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju. Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti.

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja

Ostanite hidrirani tokom celog dana uz Dose Traveler Max termos u nijansi Mauve, umirujuće nijanse ljubičaste koja spaja eleganciju i nežnost, ostavljajući suptilan ali nezaboravan utisak.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('tan') && title.includes('max')) {
      return `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju. Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti.

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja

Ostanite hidrirani tokom celog dana uz Dose Traveler Max termos u toploj zemljanoj nijansi Tan, koja odiše prirodnom elegancijom i bezvremenskom jednostavnošću.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('cranberry') && title.includes('max')) {
      return `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju. Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti.

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja

Ostanite hidrirani tokom celog dana uz Dose Traveler Max termos u bogatoj, elegantnoj nijansi Cranberry, koja zrači toplinom, snagom i prefinjenošću.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('pink sugar') && title.includes('max')) {
      return `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju. Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti.

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja

Ostanite hidrirani tokom celog dana uz Dose Traveler Max termos u Pink Sugar nijansi, njegova boja podseća na žvakaću gumu, sa akcentom na detalje u ljubičastoj boji, dajući mu veselu i šik notu.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    // Traveler Regular 0.88L variants
    if (title.includes('black') && title.includes('regular')) {
      return `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju. Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti.

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja

Ostanite hidrirani tokom celog dana uz Dose Traveler Regular termos u mat crnoj boji. Zapremina od 0.88 l nudi idealnu ravnotežu - dovoljno velike količine da vas održi hidriranim tokom celog dana, a ipak lagana i praktična za svakodnevno nošenje.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('cream') && title.includes('regular')) {
      return `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju. Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti.

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima - lako staje u većinu držača za čaše
• Otporan na curenje - piće je sigurno i bez prosipanja

Ostanite hidrirani sa Dose Traveler Regular termosom u nijansi Cream. Topla, vanilasta boja, daje nežan izgled, koji se skladno uklapa uz poslovni i ležerni stil.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    // More Regular variants
    if (title.includes('frost') && title.includes('regular')) {
      return `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati. Zapremina od 0.88 l nudi idealnu ravnotežu - dovoljno velike količine da vas održi hidriranim tokom celog dana, a ipak lagana i praktična za svakodnevno nošenje.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('pink sand') && title.includes('regular')) {
      return `Ostanite hidrirani uz Dose Traveler Regular termos u nijansi Pink Sand. Ova nežna bledo ružičasta nijansa se lako uklapa u svakodnevni stil. Pastelna završna obrada daje i svilenkasti mat izgled čine Pink Sand verziju termosa posebno sofisticiranom i nenametljivom za nošenje u svakoj prilici.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('coral') && title.includes('regular')) {
      return `Ostanite hidrirani tokom celog dana uz Dose Traveler Regular termos u nijansi Coral, živahnoj nijansi koja odiše toplinom, optimizmom i svežinom. Savršena za letnji veseo izgled.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('sage') && title.includes('regular')) {
      return `Ostanite dosledni u hidrataciji uz Dose Traveler Regular termos u nijansi Sage. Njegova mat zelena boja pruža smiren i sofisticiran izgled koji se lako uklapa u različite stilove.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('mauve') && title.includes('regular')) {
      return `Ostanite hidrirani tokom celog dana uz Dose Traveler Regular termos u nijansi Mauve, umirujuće nijanse ljubičaste koja spaja eleganciju i nežnost, ostavljajući suptilan ali nezaboravan utisak.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    // Traveler Mini 0.6L variants
    if (title.includes('black') && title.includes('mini')) {
      return `Ostanite hidrirani uz Dose Traveler Mini termos u mat crnoj boji. Ovaj moderni termos daje savremen, neutralan izgled i prati vas tokom putovanja, treninga i dugih radnih dana. Kapacitet od 0.6 l je najpraktičniji u traveler liniji.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('pink sugar') && title.includes('mini')) {
      return `Ostanite verni svojojoj hidrataciji uz Dose Traveler Mini termos, zapremine 0.6 l u nijansi Pink Sugar. Njegova boja podseća na žvakaću gumu sa akcentom na detalje u ljubičastoj boji, dajući mu veselu i šik notu.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('cream') && title.includes('mini')) {
      return `Ostanite hidrirani sa Dose Traveler Mini termosom u nijansi Cream. Topla, vanilasta boja, daje nežan i elegantan izgled koji se skladno uklapa uz poslovni i ležerni stil.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('summer peach') && title.includes('mini')) {
      return `Uz Dose Traveler Mini termos u Summer Peach boji, nećeš zaboraviti na svoj dnevni unos tečnosti. Nežna boja breskve, daje laganu, sunčanu notu, a kompaktan oblik olakšava održavanje hidratacije.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('sage') && title.includes('mini')) {
      return `Ostanite dosledni u hidrataciji uz Dose Traveler Mini termos u nijansi Sage. Njegova mat zelena boja, pruža smiren i sofisticiran izgled, koji se lako uklapa u različite stilove.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('pink sand') && title.includes('mini')) {
      return `Ostanite hidrirani uz Dose Traveler Mini termos u Pink Sand nijansi. Ova nežna bledo ružičasta nijansa se lako uklapa u svakodnevni stil, dok kompaktan dizajn omogućava osveženje tokom treninga, radnih dana.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('bubblegum') && title.includes('mini')) {
      return `Dose Traveler Mini termos u boji Bubblegum donosi razigranu I vedru notu svakodnevnoj hidrataciji. Kompaktan dizajn olakšava nošenje tokom svakodnevnih aktivnosti.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('kelly green') && title.includes('mini')) {
      return `Dose Traveler Mini termos u nijansi Kelly Green, donosi svež, živahan ton koji unosi energiju i optimizam, savršen za one koji vole upečatljive ali prirodne nijanse.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    if (title.includes('sapphire') && title.includes('mini')) {
      return `Dose Traveler Mini termos u jednostavnoj, lepoj nijansi plave, koja uvek izgleda otmeno. Kompaktan dizajn omogućava praktično nošenje tokom čitavog dana.

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }

    // Default - show generic description for all Dose products
    if (title.includes('dose') || title.includes('traveler') || title.includes('termos')) {
      return `Praktičan i moderan termos koji čuva piće sveže i hladno do 24h, a toplo i aromatično do 7 sati

Veliki kapacitet u kombinaciji sa slamkom i čvrstom ručkom pruža udobnost pri korišćenju i nošenju. Savršen saputnik za posao, školu, putovanja, prirodu i sportske aktivnosti.

• Bez BPA - potpuno bezbedno za upotrebu
• Praktičan za držače u kolima
• Otporan na curenje
• Nerđajući čelik 18/8 - visok kvalitet

Održavanje: Termos operite s malo deterdženta pod tekućom vodom.`;
    }
    
    return null;
  };

  const serbianDesc = getSerbianDescription();

  return <Box>
      <Typography variant="h3" sx={{ mb: 2 }}>
        {currentLang === 'sr' ? 'Specifikacije:' : 'Specification:'}
      </Typography>

      {/* Show Serbian description if available and language is Serbian */}
      {currentLang === 'sr' && serbianDesc && (
        <Box sx={{ mb: 3, whiteSpace: 'pre-line' }}>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            {serbianDesc}
          </Typography>
        </Box>
      )}

      {/* Specifications table */}
      <div>
        {currentLang === 'sr' ? 'Brend' : 'Brand'}: Dose <br />
        {currentLang === 'sr' ? 'Materijal' : 'Material'}: 18/8 {currentLang === 'sr' ? 'Nerđajući Čelik' : 'Stainless Steel'} <br />
        {currentLang === 'sr' ? 'Izolacija' : 'Insulation'}: {currentLang === 'sr' ? 'Dupli Zid Vakuum' : 'Double Wall Vacuum'} <br />
        {currentLang === 'sr' ? 'Kapacitet' : 'Capacity'}: {specs.capacity} <br />
        {currentLang === 'sr' ? 'Toplo' : 'Hot'}: {specs.hot} <br />
        {currentLang === 'sr' ? 'Hladno' : 'Cold'}: {specs.cold} <br />
        {currentLang === 'sr' ? 'Otporno na curenje' : 'Leak-proof'}: {currentLang === 'sr' ? 'Da' : 'Yes'} <br />
        BPA-free: {currentLang === 'sr' ? 'Da' : 'Yes'} <br />
        {currentLang === 'sr' ? 'Može u mašinu za sudove' : 'Dishwasher Safe'}: {currentLang === 'sr' ? 'Da' : 'Yes'} <br />
      </div>
    </Box>;
}