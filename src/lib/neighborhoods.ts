export interface NeighborhoodFAQ {
  question: string
  answer: string
}

export interface Neighborhood {
  slug: string
  /** Previous URL slug used before the ZIP-embedded rewrite. Used to emit 301 redirects. */
  legacySlug?: string
  name: string
  zip: string
  borough: string
  lat: number
  lng: number
  localContext: string
  nearbyNeighborhoods: string[]
  faqs: NeighborhoodFAQ[]
}

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    slug: 'park-slope-11215-11217',
    legacySlug: 'park-slope',
    name: 'Park Slope',
    zip: '11215',
    borough: 'Brooklyn',
    lat: 40.6710,
    lng: -73.9814,
    localContext: 'Park Slope is home to some of Brooklyn\'s most beautiful brownstones and rowhouses. With tree-lined streets running from Prospect Park to the Gowanus Canal, the neighborhood\'s mix of families and young professionals means high demand for residential locksmith services — from deadbolt upgrades to apartment rekeying when tenants change.',
    nearbyNeighborhoods: ['Gowanus', 'Prospect Heights', 'Windsor Terrace', 'Carroll Gardens'],
    faqs: [
      {
        question: 'My landlord in Park Slope says I need their permission to rekey the lock — is that true in NYC?',
        answer: 'In NYC, tenants have the right to change their own locks under NYC Administrative Code §27-2043, but you must provide your landlord a copy of the new key within 30 days. Many Park Slope leases add their own language — read your lease and call us if you have questions. We rekey and hand you the extra copy so you stay compliant.',
      },
      {
        question: 'How much does it cost to change locks on a Park Slope brownstone with multiple doors?',
        answer: 'A typical Park Slope brownstone front door rekeying starts at $65. Replacing a deadbolt runs $90–$175 depending on the lock grade you choose. For a full building with garden unit and parlor floor, budget $180–$350. We always quote the full price before touching anything — no surprise fees after.',
      },
      {
        question: 'I just moved into a rental on 7th Avenue — do I actually need to change the locks?',
        answer: "Yes. You have no way of knowing how many copies of the previous tenant's key are floating around — former roommates, ex-partners, building staff. Rekeying costs about $65 per lock and takes under 20 minutes. It is the single cheapest home security upgrade you can make. We do same-day service throughout Park Slope.",
      },
      {
        question: 'Can you open a locked brownstone door without damaging the original hardware?',
        answer: 'Almost always, yes. Our locksmiths are trained in non-destructive entry, which is especially important for Park Slope\'s historic brownstone hardware. We use lock picking and bypass techniques before any drilling. Drilling is a true last resort and only used when a lock is seized or damaged beyond picking.',
      },
      {
        question: 'Are there locksmiths in Park Slope available on weekends and holidays?',
        answer: 'Avenue Locksmith operates 24/7, 365 days a year — including all holidays. We have technicians based in and around Park Slope, so response times on weekends are the same as weekdays: typically 15–25 minutes. No holiday surcharge for standard service calls.',
      },
    ],
  },
  {
    slug: 'williamsburg-11211-11249',
    legacySlug: 'williamsburg',
    name: 'Williamsburg',
    zip: '11211',
    borough: 'Brooklyn',
    lat: 40.7081,
    lng: -73.9571,
    localContext: 'Williamsburg\'s dense mix of converted lofts, new luxury high-rises, and classic walk-up apartments makes it one of Brooklyn\'s most active neighborhoods for locksmith calls. With the L train corridor and North Side warehouse conversions, residents frequently need lock changes on move-in and smart lock upgrades.',
    nearbyNeighborhoods: ['Greenpoint', 'Bushwick', 'Bedford-Stuyvesant', 'East Williamsburg'],
    faqs: [
      {
        question: 'I got locked out of my Williamsburg loft at 2am — how fast can someone get to me?',
        answer: 'Williamsburg is one of our highest-volume areas, so we usually have a technician within 2–3 miles at any hour. Typical arrival time is 15–25 minutes. Call (347) 386-7164 directly — do not use an app or third-party dispatcher, as those add delay and sometimes send contractors from far away.',
      },
      {
        question: 'My building has a key fob system but my unit still has a regular deadbolt — can I upgrade just my door?',
        answer: 'Yes. Many Williamsburg conversions have building-wide fob access for common areas but standard deadbolts on individual units. We can upgrade your unit deadbolt to a smart lock (August, Schlage Encode, Yale) that works independently of the building system. You keep your key for the building entrance and use a code or app for your door.',
      },
      {
        question: 'What should I do if a locksmith in Williamsburg quoted me $35 on the phone but wants $300 at the door?',
        answer: 'That is a scam, unfortunately common in high-traffic neighborhoods like Williamsburg. The "bait and quote" scheme lures you with a low phone price then invents fees once they have your lock open. Refuse to pay more than the quoted amount and call Avenue Locksmith at (347) 386-7164. We give you a full price upfront, in writing, before any work starts.',
      },
      {
        question: 'Can I get duplicate keys made for a Medeco or Mul-T-Lock on my Williamsburg apartment?',
        answer: 'Yes. Both Medeco and Mul-T-Lock are high-security restricted-keyway systems — you cannot copy them at a hardware store. We are authorized to cut and duplicate these keys. Bring your key card or authorization card if the previous tenant registered the lock. Duplicates run $25–$85 depending on the keyway.',
      },
      {
        question: 'My landlord changed my locks while I was away — is that legal in New York?',
        answer: 'No. In New York State, a landlord who changes your locks without a court order or your consent is committing an illegal lockout, which is a violation of Real Property Law §235. You can call 911, and the landlord can face civil and criminal penalties. If you are locked out this way, call us and we can help you regain entry — then speak to a tenant attorney.',
      },
    ],
  },
  {
    slug: 'dumbo-11201',
    legacySlug: 'dumbo',
    name: 'DUMBO',
    zip: '11201',
    borough: 'Brooklyn',
    lat: 40.7033,
    lng: -73.9883,
    localContext: 'DUMBO (Down Under the Manhattan Bridge Overpass) blends upscale condos, creative office lofts, and boutique shops. As one of Brooklyn\'s priciest ZIP codes, DUMBO residents often invest in premium high-security lock systems, smart locks, and access control for both residential and commercial properties.',
    nearbyNeighborhoods: ['Brooklyn Heights', 'Vinegar Hill', 'Cobble Hill', 'Downtown Brooklyn'],
    faqs: [
      {
        question: 'I own a loft in DUMBO — what high-security lock upgrades make the most sense for a ground-floor unit?',
        answer: 'For ground-floor DUMBO lofts, we typically recommend a Grade 1 deadbolt (Medeco or Mul-T-Lock), a door reinforcement kit for the strike plate, and a secondary chain lock or door bar. If your building allows it, a smart lock with access logging (August Pro or Schlage Encode) adds visibility on who comes and goes. We do free consultations for DUMBO residential clients.',
      },
      {
        question: 'Can you install access control for a small DUMBO creative office?',
        answer: 'Yes. We install keypad, key fob, and smartphone-based access control systems for commercial spaces of all sizes. DUMBO offices often need solutions that work for rotating teams and client visits without physical key management. We spec, install, and program systems same week for most small offices.',
      },
      {
        question: 'How do I find a locksmith in DUMBO who will not overcharge me?',
        answer: 'Look for a locally operated company with verifiable Google reviews, a NYC DCWP license, and a commitment to upfront pricing before work starts. Avoid any locksmith whose website shows only a toll-free number — those are lead aggregators who resell your call to unknown contractors. Avenue Locksmith is a mobile service operating throughout Brooklyn.',
      },
      {
        question: 'My DUMBO co-op board requires proof that our locksmith is insured — can you provide that?',
        answer: 'Absolutely. We carry full general liability insurance and can provide a certificate of insurance (COI) naming your building or co-op board as additionally insured. Most DUMBO co-op and condo buildings require this before any contractor works on doors. Email us in advance and we will have it ready before the appointment.',
      },
      {
        question: 'Is a smart lock a good idea for a DUMBO Airbnb or short-term rental unit?',
        answer: 'Smart locks with code management (like Schlage Encode or Yale Assure) are ideal for short-term rentals — you assign a unique code per guest, no physical key exchange, and you can see entry logs. We install and program these throughout DUMBO. Note: NYC short-term rental law (Local Law 18) has strict rules on renting units — make sure you are compliant before setting up guest access.',
      },
    ],
  },
  {
    slug: 'brooklyn-heights-11201',
    legacySlug: 'brooklyn-heights',
    name: 'Brooklyn Heights',
    zip: '11201',
    borough: 'Brooklyn',
    lat: 40.6960,
    lng: -73.9936,
    localContext: 'Brooklyn Heights is one of New York\'s most historic neighborhoods, with pre-Civil War brownstones and classic townhouses that require careful, experienced locksmith work. The neighborhood\'s homeowners and co-op residents frequently request high-security deadbolt installations and master key systems for their properties.',
    nearbyNeighborhoods: ['DUMBO', 'Cobble Hill', 'Downtown Brooklyn', 'Boerum Hill'],
    faqs: [
      {
        question: 'I live in a pre-war brownstone in Brooklyn Heights — will changing the lock damage the original door hardware?',
        answer: 'Pre-war Brooklyn Heights doors often have mortise lock bodies, which require a different process than standard cylindrical deadbolts. Our technicians are experienced with these older systems. We can rekey the existing mortise cylinder, replace just the cylinder, or install a new compatible mortise lock body that matches the period aesthetic. We never recommend drilling unless the lock is seized or destroyed.',
      },
      {
        question: 'My co-op in Brooklyn Heights requires board approval to change door hardware — what do I tell them?',
        answer: 'Most Brooklyn Heights co-op boards are concerned with three things: licensed contractor (we are), no damage to common-area wiring or fire doors, and maintaining building master key access if applicable. We provide a written scope of work and our license and insurance details before starting, so you have everything you need for the board.',
      },
      {
        question: 'Someone tried to break into my Brooklyn Heights apartment — what should I upgrade first?',
        answer: 'After a break-in attempt, prioritize: (1) reinforce the strike plate with 3-inch screws into the door frame stud — most kick-ins succeed because of weak plates, not weak locks; (2) upgrade to a Grade 1 deadbolt like Medeco or Schlage B60N; (3) add a door reinforcement bar for overnight security. We do security assessments and can complete all three in one visit.',
      },
      {
        question: 'How much notice do you need to schedule a lock installation in Brooklyn Heights?',
        answer: 'For non-emergency work, we typically schedule same-day or next-day in Brooklyn Heights. For emergency lockouts, we arrive in 15–25 minutes with no scheduling needed — just call. We work around your schedule and can do evening appointments for residents who are not home during business hours.',
      },
      {
        question: 'Can you make extra keys for a Brooklyn Heights townhouse with a restricted-keyway master key system?',
        answer: 'Yes. Many Brooklyn Heights townhouses use patented or restricted keyways (Medeco, Mul-T-Lock, ASSA) to prevent unauthorized duplication. We are authorized to cut these keys with proper identification and, where required, the original authorization card. We also service and replace master key systems for multi-unit brownstones.',
      },
    ],
  },
  {
    slug: 'flatbush-11226-11210',
    legacySlug: 'flatbush',
    name: 'Flatbush',
    zip: '11226',
    borough: 'Brooklyn',
    lat: 40.6432,
    lng: -73.9596,
    localContext: 'Flatbush is one of Brooklyn\'s most diverse and densely populated neighborhoods, with a large Caribbean-American community centered around Flatbush Avenue. Rental apartments are common here, and new tenants regularly call us for move-in rekeying and lock change services.',
    nearbyNeighborhoods: ['Ditmas Park', 'Midwood', 'East Flatbush', 'Prospect Lefferts Gardens'],
    faqs: [
      {
        question: 'I just signed a lease on Flatbush Avenue — does my landlord have to give me a working key?',
        answer: 'Yes. Under NYC law, a landlord must provide a tenant with at least one working key to their unit at the start of tenancy. If you moved in and the lock is broken, sticks, or you were given fewer keys than people on the lease, the landlord is required to remedy that. Call us and we will document the lock condition and get you working keys same day.',
      },
      {
        question: 'Is there a locksmith in Flatbush open at night for emergencies?',
        answer: 'Avenue Locksmith operates 24 hours a day, every day including holidays. Flatbush is well within our regular service area — response time is typically 20–35 minutes depending on traffic. Call (347) 386-7164 for immediate dispatch. Do not wait until morning if you are locked out — your safety comes first.',
      },
      {
        question: 'How much does it cost to change the locks in a Flatbush apartment?',
        answer: 'A standard rekey (changing the internal pins so old keys no longer work) costs $65–$85 per lock. A full lock replacement with a new Kwikset or Schlage deadbolt runs $95–$150 installed. For two locks (front door and door knob), budget $130–$220 total. We give you an exact quote before starting.',
      },
      {
        question: 'My Flatbush building has a broken intercom — can you fix that or is it only for door locks?',
        answer: 'We specialize in door locks, deadbolts, and entry systems. Intercom and buzzer systems are typically handled by an intercom-specific company or your building super. However, if the issue is the door latch or electric strike connected to the intercom buzzer, we can service that component.',
      },
      {
        question: 'Can a locksmith help if I have been locked out of my Flatbush apartment and my landlord is unreachable?',
        answer: 'Yes. Being locked out does not require your landlord\'s permission to get back in — it is your home. A licensed locksmith can verify you are the tenant (lease, ID, utility bill matching the address) and open the door using non-destructive techniques. We handle this routinely in Flatbush. Call us and have your ID ready.',
      },
    ],
  },
  {
    slug: 'bay-ridge-11209',
    legacySlug: 'bay-ridge',
    name: 'Bay Ridge',
    zip: '11209',
    borough: 'Brooklyn',
    lat: 40.6346,
    lng: -74.0232,
    localContext: 'Bay Ridge has a strong homeownership culture, with many multi-generational families in single-family homes and brownstones along the waterfront. We regularly serve Bay Ridge homeowners with deadbolt installations, master key systems, and security upgrades.',
    nearbyNeighborhoods: ['Dyker Heights', 'Sunset Park', 'Bensonhurst'],
    faqs: [
      {
        question: 'I own a single-family home in Bay Ridge — what is the best deadbolt for an exterior door facing the street?',
        answer: 'For Bay Ridge single-family homes with street-facing doors, we recommend a Grade 1 ANSI/BHMA-rated deadbolt. Top choices include the Schlage B60N (solid value), Medeco Maxum (maximum pick and drill resistance), or the Mul-T-Lock MT5+ for restricted key control. We stock all three and can install same day. The Schlage B60N is the best value for most homeowners.',
      },
      {
        question: 'Can you set up a master key system for my Bay Ridge two-family home?',
        answer: 'Yes. A master key system lets you have one key that opens all units while each tenant has a key that opens only their own unit. We design and install master key systems for two-family and multi-family homes throughout Bay Ridge. The system is pinned and installed on-site — usually completed in 2–3 hours for a two-family.',
      },
      {
        question: 'How do I know if my Bay Ridge home\'s locks are high enough quality to get a break-in discount on insurance?',
        answer: 'Many insurers require "deadbolt locks on all exterior doors" for a discount, but some specify ANSI Grade 1. Call your insurer and ask what they require. If you need to upgrade, we can install qualifying deadbolts and provide a written receipt showing the brand and grade for your insurer. We do this routinely for Bay Ridge homeowners.',
      },
      {
        question: 'My Bay Ridge house has an old skeleton key lock — can it be replaced with a modern lock?',
        answer: 'Yes. Old mortise or skeleton key locks can be replaced, but the door may need slight modification depending on the backset and bore size. We assess this on-site — sometimes we can convert the existing mortise to take a modern cylinder, other times a full mortise replacement is cleaner. We bring parts on the truck so most replacements are done in one visit.',
      },
      {
        question: 'Can you come to Bay Ridge after 6pm on weekdays?',
        answer: 'Yes. We offer evening appointments for non-emergency work throughout Bay Ridge, typically until 9pm. Saturdays are also available. Emergency calls are 24/7 — no need to schedule, just call. Let us know your preferred window when you call and we will do our best to accommodate.',
      },
    ],
  },
  {
    slug: 'bedford-stuyvesant-11216-11221-11233',
    legacySlug: 'bedford-stuyvesant',
    name: 'Bedford-Stuyvesant',
    zip: '11233',
    borough: 'Brooklyn',
    lat: 40.6872,
    lng: -73.9418,
    localContext: 'Bed-Stuy is experiencing rapid growth with long-time residents and newcomers alike calling Brooklyn\'s largest historic district home. With a mix of owned brownstones and rental apartments, we serve both homeowners upgrading security and renters seeking lock changes after move-in.',
    nearbyNeighborhoods: ['Bushwick', 'Crown Heights', 'Williamsburg', 'Stuyvesant Heights'],
    faqs: [
      {
        question: 'I am buying a Bed-Stuy brownstone — should I change all the locks before moving in?',
        answer: 'Absolutely. Previous owners, contractors, real estate agents, and their family members may all have had copies of the keys over the years. Rekeying all exterior locks is standard practice when taking ownership of a home. We typically rekey or replace 2–4 locks in a Bed-Stuy brownstone in under two hours. It is one of the first calls any new homeowner should make.',
      },
      {
        question: 'Do you work on the locks of Bedford-Stuyvesant buildings undergoing renovation?',
        answer: 'Yes. We regularly work with contractors and owners renovating Bed-Stuy brownstones. Construction lock cylinders (temporary, keyed construction master systems) let contractors in during the build and are then switched to permanent locks before occupancy. We supply and install construction keyed systems and do the final changeover.',
      },
      {
        question: 'My Bed-Stuy rental has a broken key stuck in the lock — what do I do?',
        answer: 'Do not try to pull it with pliers — that can push it deeper or damage the cylinder pins. Call us. Key extraction is a standard service. We remove the broken key, inspect the cylinder for damage, and rekey or replace as needed. The whole job usually takes 20–40 minutes and starts at $65.',
      },
      {
        question: 'Is rekeying cheaper than replacing the lock in Bed-Stuy?',
        answer: 'Yes, significantly. Rekeying ($65–$85) changes the internal pin configuration so old keys no longer work, while keeping the same lock hardware. Full lock replacement ($95–$175) is necessary only if the lock is damaged, worn, or you want to upgrade the security grade. For a typical move-in situation, rekeying is the right call.',
      },
      {
        question: 'Can you help a Bed-Stuy landlord change locks after an eviction?',
        answer: 'Yes. We handle post-eviction lock changes for landlords throughout Bed-Stuy. After a legal eviction (court order in hand), we replace the cylinder or full lock set and key the unit for your use. We require you to have the marshal\'s paperwork or official eviction order before we begin any eviction lock change — this protects both you and us legally.',
      },
    ],
  },
  {
    slug: 'crown-heights-11213-11216-11225-11233',
    legacySlug: 'crown-heights',
    name: 'Crown Heights',
    zip: '11213',
    borough: 'Brooklyn',
    lat: 40.6694,
    lng: -73.9422,
    localContext: 'Crown Heights stretches from Eastern Parkway down to Linden Boulevard, mixing brownstone blocks, apartment buildings, and Caribbean cultural institutions. Rental turnover is high here, making move-in lock changes and rekeying some of our most common services in the area.',
    nearbyNeighborhoods: ['Prospect Heights', 'Bedford-Stuyvesant', 'Flatbush', 'East Flatbush'],
    faqs: [
      {
        question: 'How quickly can a locksmith get to Crown Heights for an emergency lockout?',
        answer: 'Crown Heights is one of our regular service areas. During daytime hours we typically arrive within 15–25 minutes. Late-night calls average 20–35 minutes. Call (347) 386-7164 for live dispatch — we do not use automated queuing for emergencies. You will speak with a dispatcher immediately.',
      },
      {
        question: 'I keep locking myself out of my Crown Heights apartment — is there a solution besides hiding a key?',
        answer: 'Yes. A keypad deadbolt (like Schlage Encode or Kwikset 620) eliminates the need to carry a key entirely. You punch in your code and are in. Setup takes about 45 minutes and the lock runs $120–$220 installed. For renters, make sure your lease allows alterations, or choose a model that can be rekeyed back when you move out.',
      },
      {
        question: 'My Crown Heights building has high tenant turnover — what is the best way to manage security?',
        answer: 'Rekeying between tenants is the minimum. If you manage multiple units, consider a building-wide Schlage or Mul-T-Lock master key system — one key for you, individual keys per unit. For higher turnover, a keypad or smart lock system with code management eliminates the need to rekey at all — just change the code when a tenant leaves.',
      },
      {
        question: 'Someone has a copy of my Crown Heights apartment key and I feel unsafe — what should I do tonight?',
        answer: 'Call us now. Rekeying takes 20 minutes and immediately invalidates every copy of the old key — the cylinder pins are re-stacked to match a brand-new key only, so the person holding the old brass is locked out permanently. If you feel you are in immediate danger, call 911 first, then us. We do emergency rekey calls 24/7. Crown Heights rekey runs $65–$85 per cylinder.',
      },
      {
        question: 'Can I get a locksmith in Crown Heights on a Sunday morning?',
        answer: 'Yes. Sunday mornings, holidays, middle of the night — we operate 24/7, 365 days a year. There is no extra charge for weekends for emergency lockout calls. Scheduled work on Sundays is available on request. Call us and we will have someone at your door.',
      },
    ],
  },
  {
    slug: 'bushwick-11221',
    legacySlug: 'bushwick',
    name: 'Bushwick',
    zip: '11221',
    borough: 'Brooklyn',
    lat: 40.6944,
    lng: -73.9213,
    localContext: 'Bushwick\'s artistic community lives in everything from converted warehouses to classic walk-ups. With one of the highest renter populations in Brooklyn, lock changes and rekeying on move-in are extremely common requests from Bushwick tenants and landlords.',
    nearbyNeighborhoods: ['East Williamsburg', 'Bedford-Stuyvesant', 'Brownsville', 'East New York'],
    faqs: [
      {
        question: 'I rent a loft in Bushwick — does my landlord have to replace a broken lock, or is that on me?',
        answer: 'Under NYC Housing Maintenance Code, landlords are required to maintain door locks in good working condition. If your lock is broken, sticking, or not latching properly, submit a written repair request to your landlord and document it. If they do not act within a reasonable time, you may be able to repair and deduct the cost. Call 311 to file an HPD complaint if needed. We can fix the lock and provide you an itemized receipt.',
      },
      {
        question: 'My Bushwick building has a keypad entry for the lobby but my apartment lock is old — can I upgrade just my unit?',
        answer: 'Yes. Your apartment door is your responsibility (and right) to upgrade, independent of the building system. We install Schlage, Kwikset, Yale, and other Grade 1 deadbolts on apartment doors throughout Bushwick. Just make sure your lease does not prohibit alterations, and if it does, many landlords will approve a smart lock upgrade in writing.',
      },
      {
        question: 'How much does an emergency lockout in Bushwick cost at 3am?',
        answer: 'Emergency lockout service starts at $75–$125 for a standard residential door during any hour. We do not charge extra for late night or early morning calls — the quote is the quote. Be wary of locksmiths who quote $35 on the phone and add fees at the door; that is a known scam in this area. Get a verbal confirmation of total cost before anyone touches your lock.',
      },
      {
        question: 'Can you duplicate keys for a Bushwick warehouse loft with a high-security lock?',
        answer: 'Yes. Many Bushwick warehouse conversions use Medeco, Abloy, or Mul-T-Lock cylinders, which have restricted keyways that cannot be copied at a hardware store. We are authorized to duplicate these with proper ID and authorization documentation. Call us to confirm your specific lock brand before coming in.',
      },
      {
        question: 'I lost my keys in Bushwick — should I rekey or replace my lock?',
        answer: 'If the keys had your address on them, replace the lock entirely to change the physical appearance (in case someone targets your address). If they were anonymous keys, rekeying is sufficient — it changes the internal pins so the lost keys no longer work, at a fraction of replacement cost. Either way, do not wait — call us today.',
      },
    ],
  },
  {
    slug: 'sunset-park-11220-11232',
    legacySlug: 'sunset-park',
    name: 'Sunset Park',
    zip: '11220',
    borough: 'Brooklyn',
    lat: 40.6514,
    lng: -74.0027,
    localContext: 'Sunset Park is a vibrant community with strong Chinese and Latin American neighborhoods centered around 8th Avenue and 5th Avenue corridors. Businesses here frequently request commercial locksmith services, while residents seek affordable lock changes and key duplication.',
    nearbyNeighborhoods: ['Bay Ridge', 'Dyker Heights', 'Borough Park', 'Bensonhurst'],
    faqs: [
      {
        question: 'I own a business on 8th Avenue in Sunset Park — how do I secure it after hours?',
        answer: 'For Sunset Park commercial properties, we recommend a heavy-duty Grade 1 commercial deadbolt, reinforced strike plate, and a door barricade bar for roll-down gate-less storefronts. We also install padlocks on roll-down gates, access control keypads, and mortise lock systems. Most small business security upgrades are completed in a single visit.',
      },
      {
        question: 'Can you make extra keys for my Sunset Park apartment building super?',
        answer: 'Yes. We cut standard and high-security keys for building supers throughout Sunset Park. If your building uses a restricted keyway system (Medeco, Mul-T-Lock), bring the authorization card and your ID. For standard Kwikset and Schlage keys, we can cut duplicates on the spot, typically for $5–$15 per key.',
      },
      {
        question: 'What is the fastest way to get a locksmith to Sunset Park?',
        answer: 'Call (347) 386-7164 directly. Do not use Yelp or Google to click a call-now button without checking the company — many numbers in map listings are lead resellers who dispatch random contractors. When you call us, you get our dispatcher, our technician, and our upfront price. Typical arrival in Sunset Park is 20–35 minutes.',
      },
      {
        question: 'My Sunset Park storefront lock was drilled open during a break-in — what happens now?',
        answer: 'We handle post-break-in emergency lockouts for commercial properties. We will board or temporarily secure the door if needed, replace the destroyed lock with a Grade 1 commercial cylinder, and provide a written incident report for your insurance claim. We carry commercial replacement parts on the truck for most common commercial locks.',
      },
      {
        question: 'How much does lock rekeying cost in Sunset Park compared to replacing the whole lock?',
        answer: 'Rekeying a standard lock costs $65–$85 and takes about 20 minutes per lock. Full replacement with a comparable quality lock runs $95–$175 installed. For commercial locks (mortise, rim cylinders), pricing varies — call us for a quote. In most cases, if the lock hardware is in good shape, rekeying is all you need.',
      },
    ],
  },
  {
    slug: 'cobble-hill-11201',
    legacySlug: 'cobble-hill',
    name: 'Cobble Hill',
    zip: '11201',
    borough: 'Brooklyn',
    lat: 40.6860,
    lng: -73.9957,
    localContext: 'Cobble Hill is a quiet, family-friendly neighborhood between Atlantic Avenue and the BQE, known for its well-preserved Federal and Italianate brownstones. Homeowners here take security seriously, and we regularly install high-security deadbolts and handle lock upgrades for the neighborhood\'s historic properties.',
    nearbyNeighborhoods: ['Brooklyn Heights', 'Carroll Gardens', 'Boerum Hill', 'Red Hook'],
    faqs: [
      {
        question: 'I live in a historic Cobble Hill brownstone — will a new deadbolt fit without altering the original door frame?',
        answer: 'In most cases, yes. Standard 2-3/8" or 2-3/4" backset deadbolts fit existing bore holes in historic doors. If your door has a mortise lock body (common in pre-1940 Cobble Hill homes), we assess whether to retrofit the mortise or install a surface-mount deadbolt alongside it. We never enlarge bore holes unnecessarily on historic doors.',
      },
      {
        question: 'My neighbor in Cobble Hill says their locksmith rekeyed their lock for $50 — why are other companies quoting more?',
        answer: 'Low quotes are often loss leaders — the real price appears once the technician is at your door and adds "labor," "emergency," or "security pin" fees. Our rekeying price is $65–$85 all-in for a standard residential lock. That includes labor, new pins, and the key cuts. We state the full price on the phone before you book.',
      },
      {
        question: 'Do I need a locksmith or a carpenter if my Cobble Hill door will not close properly?',
        answer: 'Depends on the cause. If the door itself is warped or the frame has shifted (common in older Cobble Hill buildings), that is a carpenter or super issue. If the latch or deadbolt is misaligned, we can adjust the strike plate, file the latch face, or replace the hardware. We diagnose on arrival and tell you honestly if it is a door issue rather than a lock issue.',
      },
      {
        question: 'Can I get copies made of my Cobble Hill building entrance key?',
        answer: 'For standard building keys, yes — we cut duplicates on the spot. If your building key has a "Do Not Duplicate" stamp, we will not copy it, but this stamp is not legally enforceable — it is a deterrent. If the key is a restricted-keyway system (Medeco, Mul-T-Lock, Best), duplication requires authorization. Check with your building management to clarify.',
      },
      {
        question: 'What should I do if I am locked out of my Cobble Hill apartment on a weekday and my building super is not responding?',
        answer: 'Call Avenue Locksmith at (347) 386-7164. You do not need your super\'s permission to re-enter your own apartment. We verify your identity (ID plus proof of address) and use non-destructive entry techniques. This is faster and cheaper than waiting for a super who may be hours away. We service Cobble Hill 24/7.',
      },
    ],
  },
  {
    slug: 'carroll-gardens-11231',
    legacySlug: 'carroll-gardens',
    name: 'Carroll Gardens',
    zip: '11231',
    borough: 'Brooklyn',
    lat: 40.6795,
    lng: -73.9991,
    localContext: 'Carroll Gardens is known for its deep front-yard rowhouses and tight-knit Italian-American community, now shared with young families and professionals. Residents frequently call us for residential lock upgrades, deadbolt installations, and smart lock conversions.',
    nearbyNeighborhoods: ['Cobble Hill', 'Red Hook', 'Gowanus', 'Park Slope'],
    faqs: [
      {
        question: 'I just moved into a Carroll Gardens rental — my lease says I cannot change the locks. What are my options?',
        answer: 'NYC law gives tenants the right to change locks regardless of lease language prohibiting it (NYC Admin Code §27-2043). The lease clause is unenforceable. You must give your landlord a copy of the new key within 30 days. We rekey your lock and provide an extra key for the landlord at no additional charge.',
      },
      {
        question: 'Can you install a smart lock on my Carroll Gardens apartment door?',
        answer: 'Yes. Smart locks like the August Wi-Fi Smart Lock, Schlage Encode, or Yale Assure are popular in Carroll Gardens rentals because they can be removed when you move out and reset to the original keyed function. We install and configure smart locks including app setup and adding backup codes. Most installations take 45–60 minutes.',
      },
      {
        question: 'My Carroll Gardens front door has a Medeco lock — the key broke inside. How do you remove it?',
        answer: 'Medeco cylinders are precision machined and require careful extraction. We use specialized broken key extractor tools to remove the fragment without damaging the Medeco cylinder, which would be expensive to replace. If the cylinder is damaged, we carry Medeco replacements. Extraction starts at $65 and most jobs are done in 20–30 minutes.',
      },
      {
        question: 'Do you handle both residential and commercial locksmith work in Carroll Gardens?',
        answer: 'Yes. We serve Carroll Gardens homeowners, renters, and the many restaurants and small businesses along Smith Street and Court Street. Commercial work includes storefront deadbolts, mortise locks, panic bars, and master key systems. Residential work covers everything from lockouts to smart lock installs.',
      },
      {
        question: 'How do I avoid locksmith scams when searching for help in Carroll Gardens?',
        answer: 'Red flags: prices under $50 quoted on the phone, generic company name with a toll-free number only. Safe approach: search for the company name, check their Google Maps listing and reviews, and confirm they have a NYC DCWP locksmith license. Avenue Locksmith is a licensed mobile service operating throughout Brooklyn. We quote full prices before arriving.',
      },
    ],
  },
  {
    slug: 'boerum-hill-11217-11201',
    legacySlug: 'boerum-hill',
    name: 'Boerum Hill',
    zip: '11217',
    borough: 'Brooklyn',
    lat: 40.6848,
    lng: -73.9845,
    localContext: 'Boerum Hill sits at the crossroads of several Brooklyn neighborhoods, with a mix of historic townhouses and newer apartment buildings. The neighborhood\'s location near Atlantic Terminal makes it a frequent destination for locksmith calls — from apartment lockouts to lock upgrades.',
    nearbyNeighborhoods: ['Brooklyn Heights', 'Carroll Gardens', 'Cobble Hill', 'Park Slope'],
    faqs: [
      {
        question: 'I live near Atlantic Terminal in Boerum Hill and got locked out — how long will it take to get help?',
        answer: 'Boerum Hill is centrally located in Brooklyn, making it one of our fastest response zones. Typical arrival is 15–25 minutes. Call (347) 386-7164 — we dispatch directly, no third-party routing. Stay somewhere well-lit and safe while you wait, especially if it is late at night.',
      },
      {
        question: 'My Boerum Hill townhouse has three exterior doors — can you rekey them all to the same key?',
        answer: 'Yes. Keying multiple locks alike (so one key opens all doors) is a standard request for Boerum Hill townhouses. We repin the lock cylinders so they all accept the same key. Most three-door jobs take about 90 minutes. We also key locks differently if you want separate keys for different entrances.',
      },
      {
        question: 'There is a lot of foot traffic in Boerum Hill near Atlantic Center — does that increase break-in risk?',
        answer: 'High pedestrian traffic can cut both ways — more witnesses, but also more opportunity for someone to case a building. For Boerum Hill properties near the transit hub, we recommend Grade 1 deadbolts, reinforced strike plates, and door viewers. A five-minute security assessment is free with any service call.',
      },
      {
        question: 'Can I schedule a Boerum Hill locksmith visit without being home — can I let a neighbor let them in?',
        answer: 'For lock work inside your apartment, we need the occupant or an authorized person to be present and provide identification. A neighbor can let us into the building, but we will need you or a verified authorized person at the unit door. This protects you — we do not work on locks without identity verification.',
      },
      {
        question: 'What types of locks work best for Boerum Hill apartment buildings with heavy street doors?',
        answer: 'Heavy lobby or vestibule doors in Boerum Hill buildings typically use commercial-grade rim locks or mortise locks, which are far more durable than standard residential deadbolts. For front doors subject to heavy daily use, we recommend an ANSI Grade 1 mortise lock or a heavy-duty rim cylinder. We assess your specific door and recommend accordingly.',
      },
    ],
  },
  {
    slug: 'prospect-heights-11238-11217',
    legacySlug: 'prospect-heights',
    name: 'Prospect Heights',
    zip: '11238',
    borough: 'Brooklyn',
    lat: 40.6775,
    lng: -73.9692,
    localContext: 'Prospect Heights borders Prospect Park and the Brooklyn Museum, attracting residents who value both culture and security. With a booming rental market and many multi-unit buildings, rekeying and lock change services are in high demand throughout the neighborhood.',
    nearbyNeighborhoods: ['Park Slope', 'Crown Heights', 'Flatbush', 'Windsor Terrace'],
    faqs: [
      {
        question: 'I just signed a lease near the Brooklyn Museum in Prospect Heights — should I rekey or replace the lock?',
        answer: 'For a rental move-in, rekeying is the right choice in most cases — it changes the pins so old keys no longer work, costs $65–$85, and takes 20 minutes. Full replacement is only necessary if the lock is damaged or worn. When you call us, we inspect the lock first and give our honest recommendation.',
      },
      {
        question: 'My Prospect Heights building management is slow to respond — can I change my own lock?',
        answer: 'Yes. NYC law allows tenants to change their own lock without landlord permission. You must give the landlord a copy of the new key within 30 days. Keep a written record of when you had the work done and when you provided the key. We give you the extra key cut and ready at the time of service.',
      },
      {
        question: 'What is the difference between rekeying and a lock change in Prospect Heights?',
        answer: 'Rekeying changes the internal pin configuration so the old key no longer works — same lock, new key. A lock change means replacing the entire lock hardware. Rekeying is cheaper ($65–$85 vs. $95–$175+) and appropriate when the lock is in good working condition. Lock change is better when the hardware is worn, damaged, or you want to upgrade security grade.',
      },
      {
        question: 'Can you handle a lockout at a Prospect Heights Airbnb unit?',
        answer: 'Yes. We handle lockouts for both hosts and guests at Prospect Heights short-term rentals. Hosts: consider installing a smart lock with guest code management to eliminate physical key exchanges. Guests: have the host\'s contact number and our number saved. We verify identity with the host\'s authorization before opening for a guest.',
      },
      {
        question: 'Are there locksmiths in Prospect Heights who speak languages other than English?',
        answer: 'Our dispatch team speaks English and can coordinate with technicians. For specific language needs, let us know when you call and we will do our best to match you with a technician who can assist. Most of our service in Prospect Heights is straightforward enough that language is rarely a barrier — we show our tools and the job clearly.',
      },
    ],
  },
  {
    slug: 'greenpoint-11222',
    legacySlug: 'greenpoint',
    name: 'Greenpoint',
    zip: '11222',
    borough: 'Brooklyn',
    lat: 40.7274,
    lng: -73.9514,
    localContext: 'Greenpoint, Brooklyn\'s northernmost neighborhood, has a strong Polish heritage and waterfront views of Manhattan. With many walk-up apartments and a mix of longtime residents and newcomers, we regularly handle move-in lock changes, key duplication, and lockout services here.',
    nearbyNeighborhoods: ['Williamsburg', 'Vinegar Hill', 'East Williamsburg'],
    faqs: [
      {
        question: 'I live in a Greenpoint walk-up and my key broke off in the lock — can someone come tonight?',
        answer: 'Yes. Broken key extraction is a 24/7 emergency service. We remove the fragment, inspect the cylinder, and rekey or replace as needed in one visit. Do not try to extract with tweezers or a pin — this pushes the fragment deeper. Call (347) 386-7164 and we will be in Greenpoint within 15–25 minutes.',
      },
      {
        question: 'My Greenpoint landlord has a Polish-built mortise lock that no hardware store recognizes — can you service it?',
        answer: 'Yes. Greenpoint has a strong Polish heritage and some older buildings use European-standard mortise locks. We carry common European cylinder sizes (typically DIN standard) and can replace cylinders or the full mortise body. Bring us a photo of the lock face if possible when you call — it helps us come prepared with the right parts.',
      },
      {
        question: 'How do I know a Greenpoint locksmith is legitimate and not going to overcharge me?',
        answer: 'Verify three things: a NYC DCWP locksmith license, verifiable Google reviews, and an upfront written quote before work starts. We confirm the full price on the phone and in person before touching your lock. If the price changes at the door without explanation, send the technician away.',
      },
      {
        question: 'Can I get my Greenpoint apartment rekeyed while I am at work and have a family member present?',
        answer: 'Yes, with a caveat. We need an authorized adult (18+) present who can provide ID and either a lease or utility bill showing the address. A family member or roommate listed on the lease qualifies. We will not proceed without identity verification — this is for your protection.',
      },
      {
        question: 'I am moving out of my Greenpoint apartment — should I give back the original key or return it to factory settings?',
        answer: 'When moving out, you return whatever keys were given to you when you moved in. The lock does not need to be rekeyed back — that is the landlord\'s responsibility for the next tenant. If you installed a smart lock, remove it and reinstall the original hardware (which you should have kept). We can help with swap-back installations in Greenpoint.',
      },
    ],
  },
  {
    slug: 'red-hook-11231',
    legacySlug: 'red-hook',
    name: 'Red Hook',
    zip: '11231',
    borough: 'Brooklyn',
    lat: 40.6734,
    lng: -74.0083,
    localContext: 'Red Hook is a waterfront neighborhood undergoing significant change, with warehouses converted to residences and businesses alongside longstanding public housing. Our locksmith team regularly serves both residential and commercial clients in this increasingly vibrant area.',
    nearbyNeighborhoods: ['Carroll Gardens', 'Cobble Hill', 'Gowanus', 'Sunset Park'],
    faqs: [
      {
        question: 'I run a small business in Red Hook — can you install a lock that employees can use without a key?',
        answer: 'Yes. Keypad locks and key fob access systems are ideal for Red Hook small businesses with multiple employees. We install Schlage, Kisi, and ButterflyMX compatible systems. Keypad models start at $175 installed. Access control systems with individual codes or fobs run $400–$1,200 depending on the number of doors and users.',
      },
      {
        question: 'Red Hook feels isolated at night — what should I do if I get locked out of my apartment after dark?',
        answer: 'Call us immediately at (347) 386-7164. Do not attempt to climb into windows or break in yourself. Stay in a well-lit area — the waterfront near Fairway or a 24-hour diner on Van Brunt. We serve Red Hook 24/7 and understand that transit options are limited here. A technician will be with you in 20–35 minutes.',
      },
      {
        question: 'My Red Hook warehouse unit has a roll-up door with a padlock — what is the most secure option?',
        answer: 'For warehouse roll-up doors, we recommend a hardened steel shackle padlock (Abloy PL362 or ABUS Granit) with a locking hasp that prevents the padlock body from being accessed with bolt cutters. The weak point is usually the hasp and bolt, not the padlock. We can assess your specific door setup and recommend the right combination of padlock and hasp.',
      },
      {
        question: 'Does Red Hook have reliable same-day locksmith service?',
        answer: 'Yes. Red Hook is within our regular Brooklyn service area. Same-day service is available for both emergencies (lockouts, break-ins) and scheduled work (lock replacements, rekeying, smart lock installs). Call in the morning for afternoon service, or call any time for emergencies. We aim for 20–35 minute response.',
      },
      {
        question: 'The flooding during Hurricane Sandy damaged our Red Hook building\'s locks — how do I know if the locks still work properly?',
        answer: 'Salt water and moisture cause corrosion inside lock cylinders and deadbolt mechanisms. Signs of flood damage: stiff or sticky operation, visible rust on the face plate or bolt, or a key that turns harder than usual. We inspect flood-affected locks free with any service call. Damaged locks should be replaced — do not rely on a compromised lock for security.',
      },
    ],
  },
  {
    slug: 'east-flatbush-11203-11212-11226',
    legacySlug: 'east-flatbush',
    name: 'East Flatbush',
    zip: '11203',
    borough: 'Brooklyn',
    lat: 40.6530,
    lng: -73.9302,
    localContext: 'East Flatbush has a predominantly Caribbean-American community and a mix of apartment buildings and single-family homes. Renters frequently call for move-in rekeying, while landlords use us for eviction lock changes and building-wide master key systems.',
    nearbyNeighborhoods: ['Flatbush', 'Crown Heights', 'Canarsie', 'Brownsville'],
    faqs: [
      {
        question: 'My East Flatbush landlord is asking me to pay for rekeying on move-in — is that legal?',
        answer: 'It depends on your lease. Landlords are not legally required to pay for tenant-initiated rekeying, but some leases include it. Check your lease for any language about lock changes. Practically speaking, rekeying at $65–$85 is worth it regardless of who pays — your safety is worth more than the cost. We can bill the landlord directly if they agree to it.',
      },
      {
        question: 'Is there a fast locksmith near East Flatbush who does not charge double for late-night calls?',
        answer: 'Avenue Locksmith does not add a surcharge for late-night emergency calls. Our lockout pricing is the same at 2am as it is at 2pm: $75–$125 for a standard residential lockout. We have technicians in and around East Flatbush around the clock. Call (347) 386-7164 for immediate service.',
      },
      {
        question: 'My East Flatbush apartment door lock is very old — is it worth rekeying or should I replace it?',
        answer: 'If the lock is stiff, worn, or more than 15 years old, replacement is often the better investment. An old lock that has been rekeyed five times may have worn pins that fail soon after. For $95–$150 installed, a new Grade 1 deadbolt gives you 10+ years of reliable security. We will tell you honestly which makes more sense after inspecting the lock.',
      },
      {
        question: 'Can you change the locks on an East Flatbush apartment after an eviction?',
        answer: 'Yes. We work with East Flatbush landlords on post-eviction lock changes. You must have the court-ordered marshal\'s paperwork (Warrant of Eviction, executed). We do not change occupied apartment locks for landlords without documentation — this protects everyone from an illegal lockout situation.',
      },
      {
        question: 'I found scratches around my East Flatbush apartment keyhole — does that mean someone tried to pick it?',
        answer: 'Scratches around a keyhole are usually from normal use — keys miss the hole in low light constantly. However, if combined with scratches on the door frame or strike plate, it may indicate a tampering attempt. We can inspect the cylinder for internal damage (look for bent pins) and upgrade your lock if warranted. A security inspection is free with any service call.',
      },
    ],
  },
  {
    slug: 'borough-park-11219',
    legacySlug: 'borough-park',
    name: 'Borough Park',
    zip: '11219',
    borough: 'Brooklyn',
    lat: 40.6340,
    lng: -73.9888,
    localContext: 'Borough Park is the heart of Brooklyn\'s Orthodox Jewish community, with a dense residential population and many family-owned businesses along 13th Avenue. We provide locksmith services for both homes and stores here, with a focus on reliability and transparent pricing.',
    nearbyNeighborhoods: ['Bensonhurst', 'Sunset Park', 'Dyker Heights', 'Kensington'],
    faqs: [
      {
        question: 'My Borough Park storefront on 13th Avenue needs a new lock — what commercial lock do you recommend?',
        answer: 'For Borough Park storefronts, we recommend a commercial-grade mortise lock or heavy-duty rim cylinder with a double-cylinder deadbolt (key on both sides) for storefront doors with glass. Add a surface bolt at the top and bottom of the door for after-hours security. We carry Marks, Sargent, and Corbin Russwin commercial locks and install same day.',
      },
      {
        question: 'I observe Shabbat — is there a locksmith in Borough Park available on Saturday nights?',
        answer: 'Yes. Saturday evenings and nights (after Shabbat ends) are fully covered. Our 24/7 service includes Saturday nights throughout Borough Park. We also understand urgency — if you are locked out and it is a safety issue, call us. We will be there.',
      },
      {
        question: 'My Borough Park home has multiple family members — can we all have our own keys that open all the same doors?',
        answer: 'Yes — this is a standard keying configuration called "keyed alike." We repin all your locks to accept the same key so any family member\'s key opens every door. We can do this for 2–6 locks in a single visit for most Borough Park homes. Each family member gets identical keys cut.',
      },
      {
        question: 'Can you install a door lock that does not require me to carry keys at all in my Borough Park home?',
        answer: 'Absolutely. Smart deadbolts with code entry (Schlage Encode, Yale Assure) are ideal for this. You enter a 4–8 digit code to unlock — no key required. They also have a key override in case the battery dies. Battery life is typically 1–2 years. We install and program these throughout Borough Park, and you can set different codes for different family members.',
      },
      {
        question: 'How do you verify that a locksmith in Borough Park is actually licensed in New York?',
        answer: 'New York State does not issue a single statewide locksmith license, but New York City requires locksmiths operating in the five boroughs to be licensed under the NYC Consumer and Worker Protection (DCWP) licensing law. You can verify a NYC locksmith license at the NYC DCWP website by searching the company name. Avenue Locksmith is fully licensed and will provide our license number on request.',
      },
    ],
  },
  {
    slug: 'bensonhurst-11214-11204',
    legacySlug: 'bensonhurst',
    name: 'Bensonhurst',
    zip: '11204',
    borough: 'Brooklyn',
    lat: 40.6044,
    lng: -73.9937,
    localContext: 'Bensonhurst is a large Brooklyn neighborhood with a strong Italian-American and Chinese-American heritage. Many single-family homes and multi-family buildings line its streets, and we serve both homeowners needing security upgrades and landlords managing rental units.',
    nearbyNeighborhoods: ['Bay Ridge', 'Borough Park', 'Dyker Heights', 'Gravesend'],
    faqs: [
      {
        question: 'I own a multi-family home in Bensonhurst — what is the best way to manage keys for multiple tenants?',
        answer: 'A master key system is the most efficient solution for Bensonhurst multi-family owners. Each tenant has a key that opens only their unit; you have one master key that opens everything. We design, pin, and install master key systems for 2–6 unit buildings in a single day. It eliminates the need to collect and reissue keys when tenants change — just rekey the changed unit.',
      },
      {
        question: 'My Bensonhurst apartment door has both a knob lock and a deadbolt — do I need both rekeyed?',
        answer: 'Yes, both should be rekeyed if you want full security. The door knob lock alone offers minimal protection — most can be bypassed in seconds. The deadbolt is your real security layer, but a determined person could shim the knob lock to turn the inner handle. Rekeying both for the same key costs about $110–$140 combined.',
      },
      {
        question: 'Can a locksmith in Bensonhurst also open a car lockout?',
        answer: 'Yes. We handle automotive lockouts for most domestic and foreign makes throughout Bensonhurst. If you are locked out of your car in a parking garage on 86th Street or on the street, call us. Car lockout service starts at $75. We are usually there within 20–15–25 minutes. We do not do ignition repairs or key programming on the street — only entry.',
      },
      {
        question: 'Do you charge extra to come to Bensonhurst from Brooklyn?',
        answer: 'No. Bensonhurst is within our standard Brooklyn service area. There is no travel surcharge. Our pricing is the same for Bensonhurst as any other Brooklyn neighborhood: $75–$125 for a residential lockout, $65–$85 for rekeying, $95–$175 for lock replacement. We confirm the exact price before starting.',
      },
      {
        question: 'My Bensonhurst home was recently burglarized — what should I upgrade first?',
        answer: 'After a break-in, the entry point tells you what failed. The most common failure is the door frame and strike plate, not the lock itself — a single kick defeats a weak frame. First: reinforce the strike plate with 3-inch screws into the stud (this prevents kick-ins). Second: upgrade to a Grade 1 deadbolt. Third: add a door bar for nighttime security. We do all three in one visit.',
      },
    ],
  },
  {
    slug: 'sheepshead-bay-11235-11229',
    legacySlug: 'sheepshead-bay',
    name: 'Sheepshead Bay',
    zip: '11235',
    borough: 'Brooklyn',
    lat: 40.5912,
    lng: -73.9451,
    localContext: 'Sheepshead Bay is a southern Brooklyn neighborhood known for its fishing boats and waterfront dining on Emmons Avenue. With a large Russian-speaking community and many homeowners, residents regularly call us for lock upgrades, deadbolt installation, and after-hours emergency service.',
    nearbyNeighborhoods: ['Gravesend', 'Manhattan Beach', 'Marine Park', 'Midwood'],
    faqs: [
      {
        question: 'I live near Emmons Avenue in Sheepshead Bay — can you come for a lockout late at night after the restaurants close?',
        answer: 'Absolutely. Sheepshead Bay is in our 24/7 coverage area. Late-night lockouts near Emmons Avenue or anywhere in the 11235 ZIP code are handled with the same 15–25 minute response as daytime calls. The waterfront area is well-lit and easy to find — we will meet you at your door.',
      },
      {
        question: 'My Sheepshead Bay home is close to the water — do salt air and humidity damage door locks faster?',
        answer: 'Yes. Coastal exposure accelerates corrosion in lock cylinders and door hardware, especially in brass and zinc components. Signs: key turns with increasing resistance, visible green patina on the lock face, or intermittent failure to retract the bolt. We recommend stainless steel or solid brass deadbolts for Sheepshead Bay homes, and a light spray of graphite lubricant annually prevents internal corrosion.',
      },
      {
        question: 'Can you install a smart lock on my Sheepshead Bay single-family home?',
        answer: 'Yes. Smart locks are popular among Sheepshead Bay homeowners who want to let in house cleaners, dog walkers, or family members without making physical copies of keys. We install and configure August, Schlage Encode, and Yale Assure smart locks. These use Wi-Fi or Bluetooth and let you manage access from your phone.',
      },
      {
        question: 'My elderly parent lives alone in Sheepshead Bay — how do I make their home more secure without complicated locks?',
        answer: 'For elderly residents, we recommend a lever-handle smart lock (easier to grip than a knob), a wide-angle door viewer (peephole), and a door reinforcement kit. An emergency code — a simple 4-digit keypad entry — means they never get locked out. We work with families throughout Sheepshead Bay to set these up, including showing the resident how to use them.',
      },
      {
        question: 'How do I find out if the locksmith I called in Sheepshead Bay is actually licensed?',
        answer: 'NYC locksmiths must be licensed through the NYC DCWP (Department of Consumer and Worker Protection). Ask for the license number and look it up at nyc.gov/dcwp. Alternatively, call 311 and ask to verify a locksmith license by name. Avenue Locksmith is fully licensed — we provide our license number upfront to any customer who asks.',
      },
    ],
  },
  {
    slug: 'canarsie-11236',
    legacySlug: 'canarsie',
    name: 'Canarsie',
    zip: '11236',
    borough: 'Brooklyn',
    lat: 40.6388,
    lng: -73.9015,
    localContext: 'Canarsie sits on Jamaica Bay\'s northern shore, with a mix of homes, apartments, and retail on Rockaway Parkway. We serve Canarsie residents with lockout response, lock change services, and key duplication throughout this southeastern Brooklyn neighborhood.',
    nearbyNeighborhoods: ['East Flatbush', 'Flatlands', 'Mill Basin', 'East New York'],
    faqs: [
      {
        question: 'I got locked out near Rockaway Parkway in Canarsie — how do I get help fast?',
        answer: 'Call (347) 386-7164 immediately. Canarsie is in our regular service zone and we typically arrive within 20–35 minutes. Let the dispatcher know your exact cross street. Stay near your door in a lit area, especially if it is late. We operate 24/7 — there is no time of day that is too late to call.',
      },
      {
        question: 'My Canarsie apartment building does not have a super on-site — who do I call for a lockout?',
        answer: 'Call us directly. You do not need building management or a super to get back into your own apartment. We verify your identity with ID and proof of address, then use non-destructive entry. This is typically faster than trying to reach building management, especially on nights and weekends.',
      },
      {
        question: 'Can you replace both the door knob lock and deadbolt in my Canarsie home in one visit?',
        answer: 'Yes. We carry a full range of replacement hardware on the truck — Schlage, Kwikset, and Defiant at various price points. Replacing both a door knob and deadbolt typically takes 45–60 minutes. We also key them alike (same key opens both) at your request.',
      },
      {
        question: 'Is rekeying available same day in Canarsie, or do I need to book in advance?',
        answer: 'Same-day rekeying is available throughout Canarsie. Call in the morning and we can usually be there that afternoon. For emergencies, we come immediately. For scheduled non-emergency work (like preparing a rental unit), give us a 2–3 hour window and we will fit it in.',
      },
      {
        question: 'I run a small store near Canarsie Pier — can you secure my business after a break-in?',
        answer: 'Yes. We provide emergency post-break-in security for Canarsie businesses. Services include: temporary door boarding, full deadbolt replacement, reinforced strike plate installation, and a written incident report for insurance. We carry commercial-grade hardware on the truck and can often complete the full job in one visit.',
      },
    ],
  },
  {
    slug: 'flatlands-11234',
    legacySlug: 'flatlands',
    name: 'Flatlands',
    zip: '11234',
    borough: 'Brooklyn',
    lat: 40.6233,
    lng: -73.9310,
    localContext: 'Flatlands is a quiet residential neighborhood in southeastern Brooklyn near our home base, making it one of our fastest response areas. Homeowners in Flatlands often call us for deadbolt installations, lock upgrades, and garage lock service.',
    nearbyNeighborhoods: ['Canarsie', 'Mill Basin', 'Midwood', 'East Flatbush'],
    faqs: [
      {
        question: 'How fast can a locksmith get to Flatlands from your base in Brooklyn?',
        answer: 'Flatlands is one of our closest service areas. Response times are typically 10–20 minutes. Emergency or scheduled, we have techs nearby and ready to dispatch.',
      },
      {
        question: 'I have a detached garage in Flatlands — what is the best lock for the side door?',
        answer: 'Detached garage side doors are frequent targets because they are out of sight. We recommend a Grade 1 deadbolt plus a door reinforcement kit on the strike plate. If the garage has a window near the lock, a double-cylinder (key on both sides) deadbolt prevents a hand-reach unlock — though local fire codes may affect this choice. We assess on-site and advise before installing.',
      },
      {
        question: 'Can you do a whole-home lock upgrade in Flatlands in one visit?',
        answer: 'Yes. A typical Flatlands single-family home has 2–4 exterior locks. We can rekey all of them to a single key, or replace all locks with new hardware, in a single 2–3 hour appointment. We carry enough stock to complete most whole-home jobs without a second trip.',
      },
      {
        question: 'My Flatlands neighbor says her locksmith quoted $250 to rekey one lock — is that normal?',
        answer: 'That is extremely high for a single rekey. Standard rekeying in Brooklyn runs $65–$85 per lock, all-in. $250 for one lock would only be justified for a very unusual high-security restricted-keyway system (Medeco 10-pin, for example). If you were quoted that for a standard Schlage or Kwikset, find another locksmith. We give free phone quotes.',
      },
      {
        question: 'My Flatlands house has sliding glass doors — can you install better locks on those?',
        answer: 'Yes. Sliding glass doors have notoriously weak factory latches. We install secondary security for sliding doors including surface-mount deadbolts, bar locks (Charlie bars), and anti-lift pins that prevent the door from being lifted off its track. A full sliding door security upgrade runs $75–$150 depending on what is needed.',
      },
    ],
  },
  {
    slug: 'mill-basin-11234',
    legacySlug: 'mill-basin',
    name: 'Mill Basin',
    zip: '11234',
    borough: 'Brooklyn',
    lat: 40.6073,
    lng: -73.9105,
    localContext: 'Mill Basin is a suburban enclave in southern Brooklyn known for its large single-family homes and waterfront properties along Mill Basin and the Marine Parkway. We\'re located nearby and serve Mill Basin homeowners with premium residential locksmith services including high-security lock installs.',
    nearbyNeighborhoods: ['Flatlands', 'Canarsie', 'Gerritsen Beach', 'Bergen Beach'],
    faqs: [
      {
        question: 'I own a large home in Mill Basin — what high-security locks are worth the investment for a property like this?',
        answer: 'For high-value Mill Basin homes, we recommend Medeco Maxum or Mul-T-Lock MT5+ deadbolts. Both are Grade 1, pick-resistant, drill-resistant, and use restricted keyways (keys cannot be copied without authorization). For front doors with multi-point locking, we also install Abloy and ASSA Abloy systems. Expect $250–$450 per door for premium security hardware installed.',
      },
      {
        question: 'My Mill Basin waterfront home has a boat dock gate lock that keeps corroding — what should I replace it with?',
        answer: 'Marine-grade locks are essential for waterfront properties. We recommend Abloy marine padlocks (disc detainer mechanism, no springs to corrode) or ABUS Titalium series locks for outdoor and marine applications. These are designed for saltwater exposure and last years longer than standard padlocks. We stock several sizes for dock gates and storage.',
      },
      {
        question: 'Can you set up a vacation home security system at my Mill Basin property?',
        answer: 'For vacation or seasonal homes, we recommend a smart lock with remote access monitoring, so you know when someone enters even when you are away. Combined with a reinforced door and deadbolt, it covers the basics. For full alarm integration, we can coordinate with your alarm company on access control. We consult on security setups for Mill Basin seasonal properties regularly.',
      },
      {
        question: 'My Mill Basin house has five exterior doors — can one key open all of them?',
        answer: 'Yes. We can key all your exterior locks to a single key (called "keyed alike"). For five locks, this is a two to three hour job. We bring all hardware on the truck and complete it in one visit. You will have however many identical key copies you need cut at the end.',
      },
      {
        question: 'Are there locksmiths who specialize in safes in Mill Basin?',
        answer: 'Yes. We service, open, and install home safes throughout Mill Basin. Services include: dial combination changes, digital combination reset, locked-out safe opening (non-destructive where possible), and anchor installation for floor and wall safes. Gun safes, fireproof document safes, and floor safes are all in scope.',
      },
    ],
  },
  {
    slug: 'marine-park-11234',
    legacySlug: 'marine-park',
    name: 'Marine Park',
    zip: '11234',
    borough: 'Brooklyn',
    lat: 40.6063,
    lng: -73.9283,
    localContext: 'Marine Park borders the largest public park in Brooklyn and has a quiet, suburban feel with single-family homes and row houses. Homeowners here frequently request deadbolt upgrades, garage lock service, and security consultations.',
    nearbyNeighborhoods: ['Flatlands', 'Mill Basin', 'Gerritsen Beach', 'Sheepshead Bay'],
    faqs: [
      {
        question: 'My Marine Park home is next to the park — are there specific security concerns I should address with my locks?',
        answer: 'Homes adjacent to large parks like Marine Park can have visibility gaps — side and rear entrances are less observed. We recommend deadbolts on all exterior doors, secondary security on basement and garage entry doors, and window lock pins. A free security assessment comes with any service call and we will identify the specific weak points for your property.',
      },
      {
        question: 'Can I get a locksmith to Marine Park for a non-emergency lock replacement on a weekday morning?',
        answer: 'Yes. Non-emergency scheduled work in Marine Park is available any weekday, and Saturdays. Call us, tell us what you need, and we will schedule a 2-hour arrival window that works for you. Morning slots fill up fastest — call the day before if possible.',
      },
      {
        question: 'My Marine Park house has a door that drags on the threshold — can a locksmith fix that, or do I need someone else?',
        answer: 'If the drag is causing the deadbolt to not fully extend or the latch to not catch, we can adjust or relocate the strike plate to compensate for minor settling. For a severe drag (door visibly misaligned or sticking significantly), a carpenter or your contractor should address the door frame or threshold first. We are honest about what is a lock problem versus a structural one.',
      },
      {
        question: 'I just bought a house in Marine Park — when should I call a locksmith?',
        answer: 'Before you move your furniture in. Rekeying or replacing all exterior lock cylinders is the first thing a new homeowner should do. You have no way to know how many keys exist from the previous owners, contractors, real estate agents, or prior tenants. The job takes 1–2 hours and gives you complete key control from day one.',
      },
      {
        question: 'How do door reinforcement kits work and are they worth it in Marine Park?',
        answer: 'Door reinforcement kits (like Door Armor or Strikemaster II) replace the standard one-inch strike plate screws with 3-inch screws that anchor into the door stud, and add a full-length strike plate that distributes kick force across a longer surface. They prevent the most common break-in method (kicking the door frame apart) for about $30–$80 in materials, installed. Yes, absolutely worth it.',
      },
    ],
  },
  {
    slug: 'midwood-11230',
    legacySlug: 'midwood',
    name: 'Midwood',
    zip: '11230',
    borough: 'Brooklyn',
    lat: 40.6219,
    lng: -73.9603,
    localContext: 'Midwood is a predominantly Jewish neighborhood with many single-family homes and a strong community feel. We serve Midwood homeowners and businesses along Ocean Avenue and Avenue J with residential lock installations, key duplication, and commercial security systems.',
    nearbyNeighborhoods: ['Flatbush', 'Borough Park', 'Sheepshead Bay', 'Gravesend'],
    faqs: [
      {
        question: 'I own a home near Ocean Avenue in Midwood — what is the most reliable deadbolt for an aluminum-frame storm door?',
        answer: 'Aluminum storm doors typically cannot accept a deadbolt through the door itself — they use a latch handle with a built-in lock. The real security layer is the primary door behind it. Make sure your primary door has a Grade 1 deadbolt with a proper strike plate. We see Midwood homeowners spend money on storm door locks while the inner door has a Grade 3 deadbolt — that is the wrong priority.',
      },
      {
        question: 'Can a Midwood locksmith also open a car that I locked my keys inside?',
        answer: 'Yes. We handle residential, commercial, and automotive lockouts throughout Midwood. Car lockout service starts at $75 and covers most domestic and import makes. We use non-damaging slim jim and air wedge tools — no broken windows. Most cars in Midwood parking situations are opened within 10–15 minutes of arrival.',
      },
      {
        question: 'My Midwood home has been in the family for 30 years — the locks have never been changed. What should I do?',
        answer: 'Replace them. Locks used for 20–30 years have worn pins, springs, and keyways that make them easier to pick, easier to bump, and sometimes unreliable. A full exterior lock replacement (2–4 locks) runs $190–$600 depending on the lock grade you choose. We assess each lock and recommend replacement or rekey based on actual condition.',
      },
      {
        question: 'Are there locksmiths in Midwood who service commercial properties on Avenue J?',
        answer: 'Yes. We serve retail, restaurant, and office tenants on Avenue J and throughout Midwood\'s commercial corridors. Commercial services include storefront lock replacement, master key systems for multi-tenant buildings, access control systems, and emergency after-hours lockouts. Commercial work is available 24/7.',
      },
      {
        question: 'What is the right way to lubricate a sticky lock in Midwood?',
        answer: 'Use dry graphite powder — the type that comes in a puffer bottle. Insert the puffer into the keyhole and squeeze. Do NOT use WD-40 inside a lock cylinder; it is a solvent that strips the factory lubrication and leaves residue that attracts dirt and causes faster wear. We carry graphite lubricant on the truck and include it with every service call.',
      },
    ],
  },
  {
    slug: 'kensington-in-11218',
    legacySlug: 'kensington',
    name: 'Kensington',
    zip: '11218',
    borough: 'Brooklyn',
    lat: 40.6386,
    lng: -73.9729,
    localContext: 'Kensington is a diverse neighborhood with a large South Asian and Pakistani community along Church Avenue. With many rental apartments and two-family homes, move-in rekeying and lock change services are among our most frequent calls in Kensington.',
    nearbyNeighborhoods: ['Windsor Terrace', 'Park Slope', 'Flatbush', 'Borough Park'],
    faqs: [
      {
        question: 'I live near Church Avenue in Kensington — my building key and my apartment key are both worn. Can you handle both?',
        answer: 'Yes. We can cut new keys from your worn originals (called "tracing" or "code cutting"), rekey either lock so new keys work, or do both in the same visit. If the key is too worn to trace accurately, we decode the lock cylinder directly and cut from the code. This is a common service in older Kensington buildings.',
      },
      {
        question: 'My Kensington landlord wants to change my locks but I do not want to give up my old keys — what are my rights?',
        answer: 'Your landlord may change locks on common areas (lobby, hallways) at any time. For your apartment door, they must give you a working key immediately if they change the lock. They cannot change your apartment lock to lock you out — that is an illegal lockout. If you believe this is happening, call 311 and document everything in writing to your landlord.',
      },
      {
        question: 'Can I get a locksmith in Kensington who can work on a two-family home during the day while I am at work?',
        answer: 'Yes. We work with Kensington homeowners who need service while they are away. We need an authorized adult at the property — a family member, trusted neighbor, or property manager who can provide ID and verify the address. Once verified, we complete the work and leave you a full receipt and all keys cut.',
      },
      {
        question: 'I moved into a Kensington apartment that has a chain lock but no deadbolt — is that a violation?',
        answer: 'NYC requires at least one deadbolt (or acceptable equivalent) on every apartment door, per NYC Housing Maintenance Code §27-2043. A chain lock alone does not meet this requirement. Notify your landlord in writing. If they do not install a deadbolt within a reasonable time, file an HPD complaint at nyc.gov/hpd. We can install a compliant deadbolt and provide a receipt showing what was installed.',
      },
      {
        question: 'How do I get a locksmith in Kensington who will not charge me a fake "emergency fee" on a regular Tuesday?',
        answer: 'Legitimate locksmiths do not charge a separate emergency fee on top of the quoted price for standard daytime calls. Our pricing is transparent: lockout service $75–$125, rekeying $65–$85, lock replacement $95–$175. There are no "emergency fee," "trip fee," or "fuel surcharge" add-ons. If a locksmith adds fees at the door that were not quoted, refuse to pay and call us.',
      },
    ],
  },
  {
    slug: 'windsor-terrace-11215-11218',
    legacySlug: 'windsor-terrace',
    name: 'Windsor Terrace',
    zip: '11218',
    borough: 'Brooklyn',
    lat: 40.6539,
    lng: -73.9758,
    localContext: 'Windsor Terrace is a small, tight-knit neighborhood bordering Prospect Park to the west and south. With a growing number of young families moving in, we see frequent requests for smart lock installations and security upgrades alongside traditional locksmith services.',
    nearbyNeighborhoods: ['Park Slope', 'Kensington', 'Prospect Heights'],
    faqs: [
      {
        question: 'I just had a baby and we moved to Windsor Terrace — what is the safest way to secure our home?',
        answer: 'For new families in Windsor Terrace, we recommend: Grade 1 deadbolt on all exterior doors, door reinforcement kit (prevents kick-in), a door viewer (peephole) if you do not have one, and window lock pins on ground-floor windows. For the nursery door, a door knob cover makes more sense than a lock. We do family home security assessments with practical, non-alarmist recommendations.',
      },
      {
        question: 'My Windsor Terrace apartment is near Prospect Park — is there a security issue with ground-floor units?',
        answer: 'Ground-floor units near park perimeters have two considerations: visibility (passers-by can see when you are away) and accessible windows. Beyond a Grade 1 deadbolt, we recommend window stops on ground-floor double-hungs and a secondary door lock (chain or swing bar) on the inside of the front door for nighttime use. A door camera or video doorbell adds another layer without complex installation.',
      },
      {
        question: 'Can a locksmith in Windsor Terrace also install window locks?',
        answer: 'Yes. We install sash locks, window pins, and keyed window locks on single and double-hung windows. For casement windows, we install locking hardware compatible with the existing hardware. Ground-floor window security is a common add-on to lock change service calls in Windsor Terrace.',
      },
      {
        question: 'My Windsor Terrace lease is ending and I installed a smart lock — how do I restore the original lock?',
        answer: 'Save the original lock hardware when you remove it — store it in a closet. When moving out, reinstall the original lock. We can help with this swap-back in a 30-minute visit. If you no longer have the original, we install an equivalent-grade new lock. Most landlords accept this, and we provide a receipt showing what was installed.',
      },
      {
        question: 'How long does it take to rekey all locks in a Windsor Terrace apartment?',
        answer: 'For a typical Windsor Terrace apartment with a front door deadbolt and a door knob lock, rekeying takes 30–45 minutes total. If there is also a mailbox key or building entrance key to match, add 10–15 minutes. We cut all your new keys on the spot using our key machine in the van.',
      },
    ],
  },
  {
    slug: 'ditmas-park-11226',
    legacySlug: 'ditmas-park',
    name: 'Ditmas Park',
    zip: '11218',
    borough: 'Brooklyn',
    lat: 40.6370,
    lng: -73.9610,
    localContext: 'Ditmas Park is unique in Brooklyn for its concentration of large Victorian and Edwardian free-standing homes with front yards. These older properties often have outdated lock hardware, and homeowners regularly call us to upgrade to modern high-security deadbolts and smart lock systems.',
    nearbyNeighborhoods: ['Flatbush', 'Kensington', 'Prospect Lefferts Gardens'],
    faqs: [
      {
        question: 'I own a Victorian house in Ditmas Park — the original 1920s mortise lock still works but I want better security. What should I do?',
        answer: 'A functioning original mortise lock can often be upgraded without replacing the entire body. We retrofit the mortise cylinder with a high-security cylinder (Medeco or Mul-T-Lock) that uses restricted keys, making the lock pick and bump resistant while preserving the original hardware. This is our most common upgrade for Ditmas Park Victorians and costs significantly less than a full mortise replacement.',
      },
      {
        question: 'Do old Ditmas Park Victorian doors need special considerations for deadbolt installation?',
        answer: 'Yes. Original Victorian doors often have thicker stiles and unusual backsets that do not match standard bore kits. We measure your specific door before recommending or ordering hardware. In some cases, we bore a new hole (with your permission) for a modern deadbolt alongside the existing mortise. We discuss all options before drilling anything.',
      },
      {
        question: 'My Ditmas Park home has a basement door with just a padlock hasp — is that adequate?',
        answer: 'A hasp-and-padlock on a basement door is the minimum. The weakness is usually the door frame itself and the hasp mounting screws. We reinforce by using hardened hasp with carriage bolt installation (not screws) and pairing it with an Abloy or Medeco padlock. Better yet, if the door is solid, we install a proper deadbolt — far stronger than any hasp setup.',
      },
      {
        question: 'Can you match a lock for a Ditmas Park home to look period-appropriate?',
        answer: 'Yes. Several manufacturers offer period-appropriate oil-rubbed bronze and antique brass deadbolts that match Victorian door hardware aesthetics. We stock Baldwin, Emtek, and Grandeur decorative deadbolts that provide Grade 1 security in period finishes. Great for Ditmas Park homeowners who do not want modern-looking hardware on a historic home.',
      },
      {
        question: 'My Ditmas Park neighbor had a package stolen off her porch — should I upgrade my locks?',
        answer: 'Package theft and door lock security are different risks. For porch security, a video doorbell (Ring, Nest) is the most effective deterrent. For home entry security, check that your front door deadbolt is Grade 1 and that your strike plate has 3-inch screws into the stud. We can assess both in one visit.',
      },
    ],
  },
  {
    slug: 'east-new-york-11207-11208',
    legacySlug: 'east-new-york',
    name: 'East New York',
    zip: '11207',
    borough: 'Brooklyn',
    lat: 40.6590,
    lng: -73.8822,
    localContext: 'East New York is a large, working-class Brooklyn neighborhood undergoing significant investment. We provide fast, affordable locksmith services throughout the neighborhood — from emergency lockouts to lock change and key duplication for both residents and local businesses.',
    nearbyNeighborhoods: ['Bushwick', 'Canarsie', 'Brownsville', 'Cypress Hills'],
    faqs: [
      {
        question: 'Is there a locksmith in East New York available today for an emergency lockout?',
        answer: 'Yes. We service East New York 24/7. Call (347) 386-7164 for immediate dispatch — typical arrival in East New York is 20–35 minutes. We do not use third-party dispatch; you speak with our team directly and get our technician, not a random contractor.',
      },
      {
        question: 'My East New York apartment has been broken into — what should I do about the locks right now?',
        answer: 'Call the police first to file a report (you will need this for insurance). Then call us. We respond to post-break-in emergencies in East New York with priority. We replace destroyed locks, reinforce door frames, and provide a written incident report for your insurance claim. If the door cannot close securely, we can board or brace it temporarily while we get permanent hardware installed.',
      },
      {
        question: 'I cannot afford a high-security lock right now — what is the most important security improvement for $100 in East New York?',
        answer: 'Reinforce your strike plate first. A $15–$30 door reinforcement kit with 3-inch screws into the door stud prevents kick-in, which accounts for the majority of residential break-ins. If you have $100 total, get the reinforcement kit plus a Grade 2 Schlage B60N deadbolt installed. That combination stops most opportunistic break-in attempts.',
      },
      {
        question: 'Do locksmiths in East New York charge more because of the neighborhood?',
        answer: 'Legitimate locksmiths do not charge more based on ZIP code or neighborhood. Our pricing is uniform across all of Brooklyn: lockout $75–$125, rekeying $65–$85, lock replacement $95–$175. If someone quotes you more specifically because you are in East New York, that is discriminatory pricing — call us instead.',
      },
      {
        question: 'My East New York building has a broken front door lock — can you fix the building entrance, or only apartment locks?',
        answer: 'We service both apartment doors and building entrances. For a building entrance, the work should be authorized by the building owner or management. Tenants can report broken entrance locks to the landlord and HPD (nyc.gov/hpd) if the landlord does not act. We work with building managers throughout East New York on common area lock repairs.',
      },
    ],
  },
  {
    slug: 'brownsville-11212-11233',
    legacySlug: 'brownsville',
    name: 'Brownsville',
    zip: '11212',
    borough: 'Brooklyn',
    lat: 40.6612,
    lng: -73.9115,
    localContext: 'Brownsville is a densely populated neighborhood with a mix of public housing, private rentals, and small businesses. We offer fast, affordable locksmith response throughout Brownsville, including emergency lockouts, lock change services, and building security upgrades.',
    nearbyNeighborhoods: ['East New York', 'East Flatbush', 'Crown Heights', 'Bedford-Stuyvesant'],
    faqs: [
      {
        question: 'My Brownsville apartment building has a broken lobby door — does my landlord have to fix it?',
        answer: 'Yes. Under NYC Housing Maintenance Code, landlords must maintain building entrance doors, locks, and intercoms in good working order. A broken lobby door is a "C" (immediately hazardous) violation. File an HPD complaint at nyc.gov/hpd or call 311. We can also fix the building entrance lock if authorized by management — contact your landlord and have them call us.',
      },
      {
        question: 'I need a locksmith in Brownsville right now — how fast can you get here?',
        answer: 'Call (347) 386-7164. Brownsville is within our regular Brooklyn coverage — we typically arrive in 20–35 minutes. We dispatch directly, so no delays from routing through a call center. Let us know your cross streets for the fastest response.',
      },
      {
        question: 'What is the cheapest legitimate option to improve my Brownsville apartment lock?',
        answer: 'If your existing lock works but the door frame is weak, a door reinforcement kit ($30–$50 installed) is your best dollar-for-dollar security upgrade. If the lock itself is old or worn, rekeying ($65–$85) refreshes key control. A new Grade 2 deadbolt installed is $95–$130. We will tell you honestly what is actually needed — not upsell you on hardware you do not need.',
      },
      {
        question: 'My Brownsville landlord refuses to give me a second key — is that illegal?',
        answer: 'Yes. NYC law requires landlords to provide at least one working key to each unit at the start of tenancy. If you are on the lease and were denied a key, that is a violation. You can also rekey the lock yourself (NYC Admin Code §27-2043 permits this) and give the landlord a copy within 30 days. Call us for rekeying and we cut the landlord copy on the spot.',
      },
      {
        question: 'Do you install peepholes in Brownsville apartment doors?',
        answer: 'Yes. A wide-angle door viewer (peephole) is a simple, inexpensive security addition. We install them in apartment and house doors throughout Brownsville, typically in under 20 minutes. A peephole plus a door chain or swing bar gives you the ability to screen visitors without opening the door. Ask about adding these to any lock service call.',
      },
    ],
  },
  {
    slug: 'gowanus-11215-11217',
    legacySlug: 'gowanus',
    name: 'Gowanus',
    zip: '11231',
    borough: 'Brooklyn',
    lat: 40.6738,
    lng: -73.9883,
    localContext: 'Gowanus is rapidly transforming from an industrial zone to a residential neighborhood with new luxury developments alongside creative studios and long-standing businesses. We serve both residents and businesses in this evolving neighborhood with commercial and residential locksmith services.',
    nearbyNeighborhoods: ['Park Slope', 'Carroll Gardens', 'Cobble Hill', 'Red Hook'],
    faqs: [
      {
        question: 'I rent a new luxury apartment in Gowanus — the lock they gave me feels flimsy. Can I upgrade it?',
        answer: 'Yes. NYC law allows tenants to change their own door lock regardless of lease language. Many new Gowanus developments install builder-grade Kwikset or similar Grade 3 hardware. We can upgrade to a Schlage Grade 1 deadbolt or a smart lock like Yale Assure for $95–$220 installed. Provide your landlord a copy of the new key within 30 days.',
      },
      {
        question: 'My Gowanus creative studio had a break-in — the lock was drilled out. What is the repair process?',
        answer: 'We replace the entire lock cylinder and deadbolt on drilled doors. If the door face or bore is damaged, we may need to patch the bore with a steel reinforcer before installing new hardware. We bring Grade 1 commercial deadbolts for post-break-in work. We also provide a written incident report listing the old lock, the new lock installed, and the date — needed for most insurance claims.',
      },
      {
        question: 'Gowanus is still industrial in parts — what security do you recommend for a live-work loft?',
        answer: 'Live-work lofts in Gowanus often have large rolling doors or oversized commercial-style entries. For these, we recommend a hardened padlock on a carriage-bolt-mounted hasp, or a commercial-grade surface-mount deadbolt with a steel security door frame. For the pedestrian entry, a Grade 1 deadbolt plus secondary bolt is sufficient. We assess the specific door type before recommending.',
      },
      {
        question: 'Can I get a locksmith to Gowanus during a weekend for a non-emergency job?',
        answer: 'Yes. Weekend scheduled service is available throughout Gowanus for rekeying, lock installation, and smart lock setup. Saturday appointments are available in the morning and afternoon. Call us to book — same-day Saturday is often possible if you call before noon.',
      },
      {
        question: 'My Gowanus apartment key says "Do Not Duplicate" — why can\'t I get a copy made?',
        answer: '"Do Not Duplicate" stamping is a deterrent, not a legal restriction. Any locksmith or hardware store can legally duplicate a key with that stamp. However, if your key is a patented restricted-keyway system (Medeco, Mul-T-Lock), duplication requires authorization documentation. We can identify your key type and tell you exactly what is needed to get a duplicate made.',
      },
    ],
  },
  {
    slug: 'downtown-brooklyn-11201',
    legacySlug: 'downtown-brooklyn',
    name: 'Downtown Brooklyn',
    zip: '11201',
    borough: 'Brooklyn',
    lat: 40.6930,
    lng: -73.9857,
    localContext: 'Downtown Brooklyn is the borough\'s business and transit hub, with major office towers, college campuses, and a growing residential population. We serve commercial clients with business lockout response, access control systems, and after-hours office lock changes throughout the downtown area.',
    nearbyNeighborhoods: ['Brooklyn Heights', 'Boerum Hill', 'DUMBO', 'Fort Greene'],
    faqs: [
      {
        question: 'I work downtown Brooklyn and got locked out near Fulton Street — how fast can you get here?',
        answer: 'Downtown Brooklyn is one of our most frequently serviced areas. During daytime hours, we can typically reach Fulton Street or the downtown core in 15–25 minutes. We handle lockouts at offices, residences, and vehicles throughout the 11201 ZIP code. Call (347) 386-7164 for direct dispatch.',
      },
      {
        question: 'Can you service an office lock in Downtown Brooklyn on a Saturday when the building is technically closed?',
        answer: 'Yes. Many Downtown Brooklyn office lockouts happen on weekends when someone goes in to catch up on work. We serve commercial clients 24/7. You may need to show a work ID and have building security or management verify your access. Call us and we will coordinate.',
      },
      {
        question: 'My Downtown Brooklyn co-working space needs access control for members — what do you install?',
        answer: 'For co-working spaces, we install key fob or PIN access systems that can be managed remotely. Options include standalone keypads, Bluetooth proximity systems, or full cloud-managed access control (like Kisi or Brivo) with access logs. We spec, install, and configure — you manage members through a phone app. Setup for a single-entry space starts at $450.',
      },
      {
        question: 'A Downtown Brooklyn building manager locked us out of our rented office — is that legal?',
        answer: 'If you are current on rent and have a valid commercial lease, a landlord who changes your lock or prevents access without a court order is committing an illegal lockout. New York State commercial tenants have significant protections. Document the situation, contact an attorney, and call 311. We can help restore access after legal authorization, but we need confirmation from you that you have the right to enter.',
      },
      {
        question: 'Can you handle after-hours emergency locksmith service for Brooklyn businesses near MetroTech?',
        answer: 'Yes. We service the MetroTech area, Fulton Mall corridor, and all commercial properties in Downtown Brooklyn 24/7. After-hours commercial lockouts, broken locks, and post-break-in emergency repairs are all in scope. We carry commercial lock hardware on the truck and can typically complete a replacement in one after-hours visit.',
      },
    ],
  },
  {
    slug: 'fort-greene-11205-11217',
    legacySlug: 'fort-greene',
    name: 'Fort Greene',
    zip: '11205',
    borough: 'Brooklyn',
    lat: 40.6921,
    lng: -73.9737,
    localContext: 'Fort Greene is a culturally rich neighborhood adjacent to BAM and Barclays Center, with a mix of renovated brownstones and apartment buildings. Residents here — many of them homeowners and long-term renters — frequently call for lock upgrades and smart lock installations.',
    nearbyNeighborhoods: ['Downtown Brooklyn', 'Clinton Hill', 'Bedford-Stuyvesant', 'Prospect Heights'],
    faqs: [
      {
        question: 'I live in a Fort Greene brownstone near BAM — can a locksmith come this evening?',
        answer: 'Yes. Evening appointments (up to 9pm) are available for non-emergency lock work in Fort Greene. Emergencies are 24/7. Call (347) 386-7164 and let us know your preferred window. Fort Greene is a central Brooklyn neighborhood with fast response times — typically 15–25 minutes.',
      },
      {
        question: 'My Fort Greene apartment is above a restaurant on Dekalb — is there a noise concern with using power tools to change locks?',
        answer: 'Lock replacement typically requires a cordless drill for removing screws — it takes about 2 minutes and is no louder than a power screwdriver. No jackhammer work, no loud impact tools. Even in thin-walled Fort Greene apartment buildings above busy ground floors, the job is quiet enough to do at any reasonable hour.',
      },
      {
        question: 'I host guests on my Fort Greene brownstone\'s garden level — should I install a smart lock for them?',
        answer: 'Smart locks are ideal for accessory unit rentals. You set a unique code per guest, no key exchange, no lockbox. The August Wi-Fi Smart Lock and Schlage Encode are the most popular choices we install in Fort Greene garden apartments. Setup takes about an hour and includes code programming and app configuration.',
      },
      {
        question: 'Can you replace the lock on a Fort Greene building\'s front vestibule door?',
        answer: 'Yes. Building entrance locks — typically rim cylinders or electric strikes connected to an intercom — are within our scope. We need authorization from the building owner or management to work on common-area locks. We replace worn rim cylinders, repair Sargent and similar commercial mortise locks, and service electric strike hardware.',
      },
      {
        question: 'Someone tried the handle of my Fort Greene apartment door at night — how do I make the door more secure?',
        answer: 'Start with a Grade 1 deadbolt if you do not already have one — a handle-try will not open it. Add a door chain or swing bar for nighttime security so you can crack the door to speak to someone without fully unlocking. A door reinforcement kit prevents a forced entry. If this is a recurring concern, a video doorbell adds surveillance. We can do all of this in one visit.',
      },
    ],
  },
  {
    slug: 'clinton-hill-11205-11238',
    legacySlug: 'clinton-hill',
    name: 'Clinton Hill',
    zip: '11205',
    borough: 'Brooklyn',
    lat: 40.6897,
    lng: -73.9662,
    localContext: 'Clinton Hill borders Fort Greene and is home to Pratt Institute\'s campus. With a mix of historic mansions, brownstones, and apartment buildings, we serve both long-term residents upgrading older lock hardware and students renting apartments who need lock change services.',
    nearbyNeighborhoods: ['Fort Greene', 'Bedford-Stuyvesant', 'Prospect Heights'],
    faqs: [
      {
        question: 'I am a Pratt student renting in Clinton Hill — do I have the right to change my apartment lock?',
        answer: 'Yes. All NYC tenants — students included — have the right to change their own apartment door lock under NYC Admin Code §27-2043. You must give your landlord a copy of the new key within 30 days. Rekeying costs $65–$85 and takes 20 minutes. We regularly serve students and young renters in the Clinton Hill and Pratt area.',
      },
      {
        question: 'My Clinton Hill sublet does not have a working deadbolt — can the landlord be required to install one?',
        answer: 'NYC law requires at least one deadbolt on every apartment door. If your unit lacks one, the landlord is in violation of the Housing Maintenance Code. Submit a written request to the landlord. If they do not install one within a reasonable timeframe, file an HPD complaint at nyc.gov/hpd. We can install a compliant deadbolt and give you a dated receipt.',
      },
      {
        question: 'Can you duplicate keys for my Clinton Hill apartment building\'s entrance fob?',
        answer: 'Key fobs are programmed electronic devices, not mechanical keys. We cannot duplicate fobs — that requires the building\'s access control system administrator (usually your super or management company) to issue a new fob. For mechanical building entrance keys, we can duplicate them. Contact your building office for fob replacements.',
      },
      {
        question: 'My Clinton Hill townhouse has a gate to the front steps with a padlock — what is the most weather-resistant padlock for outdoor use in Brooklyn?',
        answer: 'For outdoor gates in Brooklyn weather, we recommend the Abloy PL362 (disc detainer mechanism, no exposed springs to corrode) or the ABUS Granit 37/60. Both have hardened steel shackles and solid brass or stainless bodies that resist rain, snow, and urban grime. They cost more upfront but outlast cheap padlocks by years.',
      },
      {
        question: 'I lost all my keys in Clinton Hill and cannot get into my apartment — what are my options tonight?',
        answer: 'Call us immediately at (347) 386-7164. We are available now and can be at your Clinton Hill address within 15–25 minutes. Have your ID and something with your address (lease, utility bill) ready. We use non-destructive entry techniques — picking or bypass — in almost all cases. Do not try to break in through a window; it is dangerous and can result in more damage.',
      },
    ],
  },
  {
    slug: 'gravesend-11223',
    legacySlug: 'gravesend',
    name: 'Gravesend',
    zip: '11223',
    borough: 'Brooklyn',
    lat: 40.5962,
    lng: -73.9697,
    localContext: 'Gravesend is a southern Brooklyn neighborhood with a large Russian and Chinese community, known for its active restaurant scene on Avenue U. We provide locksmith services for both residential clients and the many small businesses throughout Gravesend.',
    nearbyNeighborhoods: ['Bensonhurst', 'Sheepshead Bay', 'Dyker Heights', 'Homecrest'],
    faqs: [
      {
        question: 'Can you service restaurant and business locks on Avenue U in Gravesend?',
        answer: 'Yes. We serve commercial properties along Avenue U and throughout Gravesend. Commercial services include: mortise lock repair and replacement, storefront deadbolts, push bar panic hardware, and after-hours emergency response. We carry Marks, Dorma, and Von Duprin commercial hardware. Commercial locksmith calls on Avenue U are a regular part of our business.',
      },
      {
        question: 'I own a home in Gravesend and want to rekey all locks before a family member moves in — how does that work?',
        answer: 'We come to your Gravesend home, remove each lock cylinder, repin it to a new key combination, and reinstall it. All locks are keyed alike (same key opens all) or differently as you prefer. We cut however many keys you need for each family member on the spot. The whole job for a typical home takes 1–2 hours.',
      },
      {
        question: 'My Gravesend neighbor recommended a locksmith who only accepts cash — should I be concerned?',
        answer: 'Cash-only operations are not necessarily scammers, but it is a warning sign when combined with no physical address and no verifiable license. A legitimate locksmith should provide a receipt whether they accept cash or card. We accept both cash and credit card and provide an itemized receipt for every job.',
      },
      {
        question: 'Can you come to Gravesend the same day I call for a scheduled lock change?',
        answer: 'Usually yes, especially for morning calls. Call us and describe what you need — lock replacement, rekeying, smart lock install. If we have availability that day, we will schedule you. For complex jobs (master key system, access control), same-week is more realistic. Emergency calls are always same-day, within 15–25 minutes.',
      },
      {
        question: 'What is the difference between a double-cylinder deadbolt and a single-cylinder one for my Gravesend home?',
        answer: 'A single-cylinder deadbolt has a key on the outside and a thumb turn on the inside — easiest to use. A double-cylinder requires a key on both sides. Double-cylinder prevents someone from breaking a window near the door and reaching in to turn the thumb latch — but creates a fire escape risk if you cannot find your key in an emergency. NYC fire code discourages double-cylinders without secondary egress. We advise on this based on your specific door and window situation.',
      },
    ],
  },
  {
    slug: 'dyker-heights-11228',
    legacySlug: 'dyker-heights',
    name: 'Dyker Heights',
    zip: '11228',
    borough: 'Brooklyn',
    lat: 40.6213,
    lng: -74.0093,
    localContext: 'Dyker Heights is famous for its elaborate holiday light displays and its concentration of beautiful single-family homes. Homeowners here take security seriously and frequently call us for high-security deadbolt installations and lock upgrades.',
    nearbyNeighborhoods: ['Bay Ridge', 'Bensonhurst', 'Borough Park'],
    faqs: [
      {
        question: 'I own a large single-family home in Dyker Heights — what is the best lock upgrade for a home valued over $1M?',
        answer: 'For high-value Dyker Heights homes, we recommend a complete exterior lock system upgrade: Medeco Maxum or Mul-T-Lock MT5+ deadbolts on all exterior doors, reinforced door frames with 3-inch strike plate screws, and secondary locks on the garage entry door. If you have a home alarm, we can coordinate with your alarm company so the new locks integrate with your existing system.',
      },
      {
        question: 'My Dyker Heights home gets a lot of holiday visitors in December — how do I manage keys for house cleaners and family?',
        answer: 'Smart locks with code management (Schlage Encode, Yale Assure) are the perfect solution for Dyker Heights homeowners with seasonal household staff and visiting family. Set a different code for each person, delete codes instantly when not needed, and check entry logs from your phone. No key copies floating around indefinitely.',
      },
      {
        question: 'Can you install a lock on a Dyker Heights basement bulkhead door?',
        answer: 'Yes. Basement bulkhead doors are a common weak point on Dyker Heights single-family homes. We install heavy-duty hasp and padlock systems (with carriage bolt through-mounting to prevent pry-off), or a surface-mount deadbolt on steel bulkhead doors. We assess the door type and condition first — some older bulkhead doors need a carpenter before a lock does any good.',
      },
      {
        question: 'The alarm company recommended I upgrade my Dyker Heights door locks — can you coordinate with them?',
        answer: 'Yes. We work alongside security companies regularly. If your alarm company specified a lock grade or brand, we will install exactly that. If they are vague about specs, we recommend ANSI Grade 1 which exceeds insurance requirements and satisfies virtually all alarm company recommendations. We provide documentation of the locks installed for your records.',
      },
      {
        question: 'Can you make an extra key for the nanny or house cleaner at my Dyker Heights home without compromising security?',
        answer: 'Yes. We cut additional keys and can also set up a key management system for your home. For the highest security, a smart lock with individual access codes means you never have to worry about unreturned keys from former employees. When the nanny moves on, you delete their code — no rekeying required. We install and program these for Dyker Heights homeowners regularly.',
      },
    ],
  },
  {
    slug: 'vinegar-hill-11201',
    legacySlug: 'vinegar-hill',
    name: 'Vinegar Hill',
    zip: '11201',
    borough: 'Brooklyn',
    lat: 40.7025,
    lng: -73.9823,
    localContext: 'Vinegar Hill is one of Brooklyn\'s smallest and most historic neighborhoods, with cobblestone streets and Federal-style row houses dating to the 1800s. With such old and often unique lock hardware, our experienced locksmiths are well-suited to handle these properties with care.',
    nearbyNeighborhoods: ['DUMBO', 'Brooklyn Heights', 'Downtown Brooklyn'],
    faqs: [
      {
        question: 'My Vinegar Hill home has a 19th-century Federal-style door with a very old rim lock — can you service or replace it?',
        answer: 'Yes. We specialize in old and unusual lock hardware. Nineteenth-century rim locks (surface-mounted spring latches) can often be serviced or have their cylinder replaced without touching the decorative case. If the mechanism is beyond repair, we source period-appropriate replacement hardware or install a modern lock in a way that respects the door. Vinegar Hill homes are among our most interesting jobs.',
      },
      {
        question: 'Vinegar Hill is one of Brooklyn\'s smallest neighborhoods — do you actually cover it?',
        answer: 'Yes. Vinegar Hill is between DUMBO and the Navy Yard, and we cover it regularly. Response times are typically 15–25 minutes. We service every address in the 11201 ZIP code including Vinegar Hill\'s handful of blocks. Call us — we know where it is.',
      },
      {
        question: 'I am renovating a historic Vinegar Hill property — can you install a construction key system and then switch to permanent locks?',
        answer: 'Yes. We install construction key systems (a temporary master key cylinder that all contractors use during the build) and then replace them with permanent high-security cylinders upon project completion. The construction cylinder is returned or destroyed. This is standard practice for Vinegar Hill and DUMBO renovation projects.',
      },
      {
        question: 'The cobblestone streets in Vinegar Hill can make it hard for vans to access — is that a problem?',
        answer: 'Not at all. Our technicians are very familiar with Vinegar Hill\'s cobblestone blocks and the tight access off Hudson and Plymouth. We park nearby and walk in with our tools. The job is done at your door, not from the van.',
      },
      {
        question: 'Do you carry parts for old Brooklyn Federal-style home locks in Vinegar Hill?',
        answer: 'We carry a range of rim lock cylinders, mortise cylinders, and old-style deadbolts that fit pre-war Brooklyn homes. For truly unique 19th-century hardware, we may need to order parts — but we assess on-site and tell you before committing. In many cases, we can rekey the existing cylinder or fit a new compatible cylinder without any special ordering.',
      },
    ],
  },
  {
    slug: 'columbia-waterfront-11231',
    legacySlug: 'columbia-waterfront',
    name: 'Columbia Waterfront District',
    zip: '11231',
    borough: 'Brooklyn',
    lat: 40.6829,
    lng: -74.0001,
    localContext: 'The Columbia Waterfront District stretches along the Brooklyn waterfront between the BQE and the water, mixing residential blocks with former industrial properties. Residents here enjoy waterfront views and frequently request residential lock upgrades and smart lock installations.',
    nearbyNeighborhoods: ['Carroll Gardens', 'Red Hook', 'Cobble Hill'],
    faqs: [
      {
        question: 'I moved into a Columbia Waterfront District apartment with a view — the lock feels cheap. Can I upgrade?',
        answer: 'Yes. Many Columbia Waterfront District buildings, especially converted residential units in former industrial spaces, have builder-grade hardware. We upgrade to Grade 1 Schlage or Medeco deadbolts for $95–$175 installed. As a tenant, you have the right to upgrade under NYC law — just provide the landlord a copy of the new key.',
      },
      {
        question: 'My Columbia Waterfront District building is near the BQE — the lock keeps sticking from vibration and dust. What helps?',
        answer: 'Lock sticking near high-vibration areas can be mechanical or caused by dust accumulation in the cylinder. We start with graphite lubrication (not WD-40). If the cylinder has worn pins from dust abrasion, rekeying with fresh pins restores smooth operation. If the door itself shifts from vibration, we adjust the strike plate alignment. All diagnosed on-site.',
      },
      {
        question: 'Can you service both my residential door and my ground-floor storage unit lock in the Columbia Waterfront area?',
        answer: 'Yes. We service residential doors, storage unit locks (padlocks and cylindrical locks), and building common areas in a single visit. Let us know all the locks you need serviced when you call so we bring the right hardware.',
      },
      {
        question: 'Is parking available for locksmith vans near Columbia Waterfront District addresses?',
        answer: 'Columbia Waterfront is accessible from Columbia Street and the service roads along the BQE. Our technicians are experienced navigating this area and finding spots. If parking is particularly tight, they will call ahead. The work is done at your door, so van access is only needed for tool retrieval.',
      },
      {
        question: 'I am a landlord with waterfront properties in the Columbia Waterfront District — can you handle rekeying between tenants across multiple units?',
        answer: 'Yes. We work with Columbia Waterfront landlords on tenant changeover rekeying — scheduling all units in one or two visits to minimize disruption. We key units individually, provide documented key hand-off, and can include a master key for the owner. Contact us with your building address and number of units for a project quote.',
      },
    ],
  },
  {
    slug: 'highland-park-11208',
    legacySlug: 'highland-park',
    name: 'Highland Park',
    zip: '11208',
    borough: 'Brooklyn',
    lat: 40.6873,
    lng: -73.8897,
    localContext: 'Highland Park sits on the Brooklyn–Queens border near the Highland Park reservoir. A quiet working-class neighborhood with a strong community, residents here often call us for affordable lock change and rekeying services.',
    nearbyNeighborhoods: ['Cypress Hills', 'East New York', 'Brownsville'],
    faqs: [
      {
        question: 'Highland Park is on the Brooklyn-Queens border — do you service both sides?',
        answer: 'We primarily serve Brooklyn addresses. Highland Park\'s Brooklyn side (ZIP 11208) is within our service area. For addresses on the Queens side of the park (Woodhaven/Richmond Hill), we may service those as well — call us with your specific address and we will confirm coverage.',
      },
      {
        question: 'I got locked out of my Highland Park apartment and it is late — is there anyone available?',
        answer: 'Yes. We operate 24/7 throughout Highland Park and the 11208 ZIP code. Call (347) 386-7164 immediately. Response time is typically 25–40 minutes for Highland Park addresses. Stay somewhere safe and lit while you wait.',
      },
      {
        question: 'How much does it cost to change all the locks in a Highland Park apartment?',
        answer: 'For a typical Highland Park apartment with a front door deadbolt and a door knob lock, rekeying both runs $110–$140. Replacing both with new hardware runs $170–$270 depending on brand and grade. We quote exactly before starting. No fees added at the door.',
      },
      {
        question: 'My Highland Park building super is difficult to reach — who do I call for a lock problem?',
        answer: 'Call us directly at (347) 386-7164. We work independently of building management for apartment door issues. You do not need your super\'s authorization to service your own apartment door. For common area doors (lobby, laundry), building authorization is required — file an HPD complaint if management does not respond.',
      },
      {
        question: 'Can you come to Highland Park the same day for a deadbolt installation?',
        answer: 'Usually yes. Same-day service is available for most standard lock work in Highland Park, including deadbolt installation, rekeying, and lockouts. Call in the morning and we typically have afternoon availability. We carry common lock brands on the truck so there is no delay waiting for parts.',
      },
    ],
  },
  {
    slug: 'cypress-hills-11208',
    legacySlug: 'cypress-hills',
    name: 'Cypress Hills',
    zip: '11208',
    borough: 'Brooklyn',
    lat: 40.6799,
    lng: -73.8816,
    localContext: 'Cypress Hills is a diverse neighborhood on Brooklyn\'s eastern edge, bordered by the Cypress Hills Cemetery and Jackie Robinson Pkwy. We serve residents throughout the area with emergency lockout response, lock changes, and key duplication.',
    nearbyNeighborhoods: ['East New York', 'Highland Park', 'Bushwick', 'Brownsville'],
    faqs: [
      {
        question: 'Is there a 24-hour locksmith in Cypress Hills?',
        answer: 'Yes. Avenue Locksmith operates 24 hours a day, 7 days a week, including holidays. Cypress Hills is within our Brooklyn service area. Response time is typically 25–40 minutes. Call (347) 386-7164 at any hour for immediate dispatch.',
      },
      {
        question: 'My Cypress Hills apartment has two deadbolts — do I need both?',
        answer: 'Two deadbolts on one door is unusual and one is typically redundant. One properly installed Grade 1 deadbolt with a reinforced strike plate provides more security than two poorly installed locks. If both are functional and not causing door operation problems, keeping both is not harmful. But if one is worn or installed incorrectly, we recommend replacing or removing it.',
      },
      {
        question: 'Can I get key copies made in Cypress Hills without going to a hardware store?',
        answer: 'Yes. We cut standard keys on-site from our mobile key machine. No need to go anywhere — we come to you, cut the keys at your door, and test them before we leave. Standard key duplication runs $5–$15 per key for common keyways.',
      },
      {
        question: 'My Cypress Hills home had someone try the door overnight — what should I add beyond a deadbolt?',
        answer: 'A door reinforcement kit (3-inch strike plate screws) prevents kick-in. A door swing bar or chain gives you a safety gap when answering the door. A wide-angle peephole lets you see who is outside without opening. These three additions cost under $150 installed and significantly raise the barrier to entry. We do all three in one visit.',
      },
      {
        question: 'Does Avenue Locksmith serve the 11208 area code in Cypress Hills?',
        answer: 'Yes, ZIP code 11208 (which covers both Cypress Hills and East New York) is within our regular service area. We serve residential and commercial clients throughout this ZIP code with the same pricing and response times as all other Brooklyn neighborhoods.',
      },
    ],
  },
  {
    slug: 'prospect-lefferts-gardens-11225',
    legacySlug: 'prospect-lefferts-gardens',
    name: 'Prospect Lefferts Gardens',
    zip: '11225',
    borough: 'Brooklyn',
    lat: 40.6594,
    lng: -73.9527,
    localContext: 'Prospect Lefferts Gardens (PLG) is a vibrant Brooklyn neighborhood adjacent to the Prospect Park Zoo. With many historic limestone rowhouses and a diverse community, we handle lock upgrades, smart lock installations, and emergency lockout calls throughout PLG.',
    nearbyNeighborhoods: ['Flatbush', 'Crown Heights', 'Prospect Heights', 'Windsor Terrace'],
    faqs: [
      {
        question: 'I rent a limestone rowhouse in Prospect Lefferts Gardens — the lock is original to the building. Should I worry?',
        answer: 'Original PLG rowhouse locks are often 40–60 years old. The main concerns are worn pins (easy to pick or bump) and a cylinder that could fail mechanically. If the key operates smoothly and nothing looks cracked or rusty, a rekey with new pins gives you 5–10 more years. If the mechanism is stiff or the key wobbles, replacement is smarter. We inspect and advise honestly.',
      },
      {
        question: 'My PLG apartment was listed on a Facebook rental group — I am worried the previous poster may still have keys. What do I do?',
        answer: 'Rekey immediately. Informal Facebook and Craigslist rental chains often have multiple people who had keys — the original lister, anyone who "showed" the apartment, and possibly prior tenants. Rekeying at $65–$85 eliminates all of those in 20 minutes. This is the number one thing to do when moving into any informal sublet.',
      },
      {
        question: 'How do I find a legitimate locksmith serving Prospect Lefferts Gardens who is not a scam operation?',
        answer: 'Check: (1) does the company have a NYC DCWP locksmith license?, (2) do their Google reviews look legitimate and consistent?, (3) do they give a full price on the phone — not a "starting from $35" teaser? All three yes = likely legitimate. Avenue Locksmith passes all three and will verify our NYC locksmith license number on request.',
      },
      {
        question: 'Can you install a smart lock on a PLG rowhouse door with a transom window above it?',
        answer: 'Yes. Smart lock installation is independent of what is above the door. We assess the door thickness and backset, install the appropriate smart lock model, and configure it. A transom window above the door does not affect the deadbolt installation below it. Most PLG rowhouse door installs take 45–60 minutes.',
      },
      {
        question: 'I share a PLG apartment with two roommates — can all three of us have different keys that all open the same lock?',
        answer: 'A standard rekeyed lock produces one key combination — all three copies open the door, but they are identical keys. For three truly different keys that open the same lock, you would need a master key system, which adds significant cost. Most roommate situations are fine with identical keys cut to the same bitting — you each have your own physical key, but they are mechanically identical.',
      },
    ],
  },
  {
    slug: 'homecrest-11229',
    legacySlug: 'homecrest',
    name: 'Homecrest',
    zip: '11229',
    borough: 'Brooklyn',
    lat: 40.6037,
    lng: -73.9585,
    localContext: 'Homecrest is a quiet residential neighborhood in southern Brooklyn with largely one- and two-family homes. Homeowners here frequently contact us for lock replacements, key duplication, and deadbolt installations.',
    nearbyNeighborhoods: ['Midwood', 'Sheepshead Bay', 'Gravesend', 'Marine Park'],
    faqs: [
      {
        question: 'I own a one-family home in Homecrest — what maintenance should I do on my locks annually?',
        answer: 'Annual lock maintenance for a Homecrest home: (1) apply dry graphite powder to all cylinders, (2) check that deadbolt bolts extend and retract smoothly, (3) tighten any loose screws on strike plates, (4) test that all keys operate without force. If anything feels stiff or worn, call us — a rekey with fresh pins often extends lock life another 5–10 years for $65–$85.',
      },
      {
        question: 'My Homecrest neighbor had a car broken into on the street — should I worry about my home locks too?',
        answer: 'Car break-ins and home break-ins involve different methods and opportunists. However, opportunistic crime in an area does suggest reviewing your home security. Ensure your front door has a Grade 1 deadbolt and that windows are secured. A well-lit exterior (motion sensor lights) is one of the most effective deterrents for any break-in type.',
      },
      {
        question: 'Can you replace a lock on a Homecrest two-family home\'s shared entrance door?',
        answer: 'Yes. Shared entrance doors in two-family homes need locks keyed to both units\' owners. We can key it alike with one or both tenants\' key, or set up a master key so the owner has one key for everything. We advise on the configuration based on your building setup and ownership situation.',
      },
      {
        question: 'Is there a locksmith near Homecrest who can also open a safe?',
        answer: 'Yes. We open and service home safes throughout Homecrest and South Brooklyn. Combination changes, digital reset, and non-destructive opening for locked-out safes are all in scope. Call with your safe brand and model if possible — we may be able to tell you on the phone if the job requires a specialist.',
      },
      {
        question: 'How long does a standard lock replacement take in a Homecrest home?',
        answer: 'Replacing a standard deadbolt takes 20–30 minutes per door. Replacing both a door knob and deadbolt takes 40–60 minutes. Adding key-alike service across multiple doors adds about 15 minutes per additional lock. We work efficiently and clean up after ourselves — no hardware debris left behind.',
      },
    ],
  },
  {
    slug: 'bergen-beach-11234',
    legacySlug: 'bergen-beach',
    name: 'Bergen Beach',
    zip: '11234',
    borough: 'Brooklyn',
    lat: 40.6207,
    lng: -73.9073,
    localContext: 'Bergen Beach is a small waterfront community in southeastern Brooklyn near Marine Park. With single-family homes and a tight-knit residential feel, homeowners here call us for security upgrades, lock installs, and emergency service.',
    nearbyNeighborhoods: ['Mill Basin', 'Flatlands', 'Gerritsen Beach', 'Marine Park'],
    faqs: [
      {
        question: 'Bergen Beach feels remote — do locksmiths actually service this area of Brooklyn?',
        answer: 'Yes. Bergen Beach is in our regular service zone. We have techs stationed nearby and response times are typically 15–25 minutes. We service every address in Bergen Beach including the waterfront blocks.',
      },
      {
        question: 'My Bergen Beach home has a wooden fence gate that needs a lock upgrade — what do you recommend?',
        answer: 'For wooden fence gates, we recommend a surface-mount deadbolt (key-outside, thumb-turn inside) for a pedestrian gate, or a heavy-duty hasp and padlock for a vehicle gate. The key is using hardware sized appropriately for a wood gate, which is thinner than a standard door. We bring hardware appropriate for gate thickness on service calls.',
      },
      {
        question: 'Can you install a lock on a garden shed or storage building in Bergen Beach?',
        answer: 'Yes. We install padlocks, hasp hardware, and simple cylindrical locks on outbuildings throughout Bergen Beach. For a garden shed, a quality closed-shackle padlock on a proper through-bolted hasp is the most practical solution. We assess what the structure can support and recommend accordingly.',
      },
      {
        question: 'I am worried about flooding risk in Bergen Beach — do I need waterproof locks?',
        answer: 'Standard residential deadbolts are not sealed against flooding. If flooding is a genuine risk for your ground-floor or basement entry, consider marine-grade padlocks (Abloy) for any floodgate or outside entry hardware. For your main residential deadbolts, the priority is drying them out quickly after any flooding event and applying dry lubricant to prevent corrosion. We can assess flood-affected hardware on site.',
      },
      {
        question: 'Can I get rekeying service in Bergen Beach the same week I call?',
        answer: 'Yes, usually same day or next day. Bergen Beach residents can call in the morning for afternoon service. We confirm availability when you call and give you a 2-hour arrival window. Emergency lockouts are always immediate.',
      },
    ],
  },
  {
    slug: 'gerritsen-beach-11229',
    legacySlug: 'gerritsen-beach',
    name: 'Gerritsen Beach',
    zip: '11229',
    borough: 'Brooklyn',
    lat: 40.5877,
    lng: -73.9218,
    localContext: 'Gerritsen Beach is one of Brooklyn\'s most secluded neighborhoods, with waterfront homes and a strong community identity. As a neighborhood of primarily homeowners, we provide residential locksmith services, key duplication, and lock replacements throughout the area.',
    nearbyNeighborhoods: ['Marine Park', 'Manhattan Beach', 'Sheepshead Bay'],
    faqs: [
      {
        question: 'Gerritsen Beach is a tight-knit community — are there specific security concerns for waterfront homes here?',
        answer: 'Gerritsen Beach waterfront homes have two distinct security profiles: the street-facing front door and the waterfront rear access. Rear and side doors are often less observed and less secured. We regularly help Gerritsen Beach homeowners upgrade rear entry deadbolts, sliding door locks, and marine-exposure-resistant padlocks for dock gates and storage.',
      },
      {
        question: 'Can you come to Gerritsen Beach for a non-emergency lock upgrade on a weekend?',
        answer: 'Yes. Weekend service — including Saturday and Sunday — is available for scheduled work throughout Gerritsen Beach. Gerritsen Beach residents often ask for arrival windows that dodge the one-way loops around Plumb Beach Channel and the weekend launch traffic at the marina, so call ahead and we\'ll schedule around them.',
      },
      {
        question: 'My Gerritsen Beach home was inherited — the locks are very old. What is the best approach?',
        answer: 'For an inherited home, we recommend a complete key control assessment: replace or rekey every exterior cylinder, check for damaged or worn mechanisms, and upgrade any locks that are below Grade 2. This gives you a clean slate — you know exactly who has keys from this point forward. We can do the full assessment and changeover in one visit.',
      },
      {
        question: 'Do you handle lockouts for boats or marina storage in Gerritsen Beach?',
        answer: 'We handle lockouts for land-based storage units, trailers, and vehicle doors. Boat cabin locks and marine hardware are not our specialty — for those, contact a marine service company. However, if you are locked out of your vehicle in the marina parking area or the access gate to the waterfront, we can help.',
      },
      {
        question: 'Is Avenue Locksmith the closest locksmith to Gerritsen Beach?',
        answer: 'We are one of the closest Brooklyn-based locksmiths to Gerritsen Beach. We have techs stationed in southeastern Brooklyn so we are typically among the fastest to arrive. Call (347) 386-7164 and we will give you an honest arrival estimate.',
      },
    ],
  },
  {
    slug: 'manhattan-beach-11235',
    legacySlug: 'manhattan-beach',
    name: 'Manhattan Beach',
    zip: '11235',
    borough: 'Brooklyn',
    lat: 40.5781,
    lng: -73.9389,
    localContext: 'Manhattan Beach is an upscale enclave on Brooklyn\'s southern shore with large private homes and a beachfront park. Homeowners here invest in premium lock hardware, and we regularly install high-security deadbolts, smart locks, and garage door locks in the area.',
    nearbyNeighborhoods: ['Sheepshead Bay', 'Gerritsen Beach', 'Brighton Beach'],
    faqs: [
      {
        question: 'I own a large home in Manhattan Beach — what is the most secure lock available for my front door?',
        answer: 'The most secure residential deadbolts currently available are the Abloy Protec2 (disc detainer mechanism, no pin springs to pick or bump), Medeco Maxum (ANSI Grade 1 with hardened inserts, key control), and Mul-T-Lock MT5+ (patented sidebar, anti-drill, anti-pick). All three require professional installation and cost $300–$600 per door installed. We stock and install all three for Manhattan Beach homeowners.',
      },
      {
        question: 'My Manhattan Beach home has a housekeeper who needs access — how do I manage that securely?',
        answer: 'Best practice: install a smart lock (Schlage Encode, Yale Assure) with a dedicated housekeeper code that is only active during their working hours. You set the schedule in the app — the code only works Tuesday/Thursday 10am–3pm, for example. Access logs show every entry and exit. When employment ends, delete the code — no rekeying required.',
      },
      {
        question: 'The ocean air in Manhattan Beach is corroding my door hardware — what should I replace it with?',
        answer: 'Marine-environment-rated hardware is the answer. For deadbolts, solid brass or 316 stainless steel are the most corrosion-resistant. We recommend Abloy PROTEC2 or ASSA Abloy marine-rated cylinders for coastal exposure. Avoid zinc alloy or painted steel hardware, which corrodes within 1–2 years at the shoreline. Annual graphite lubrication extends any lock\'s life.',
      },
      {
        question: 'Can you install a gate lock for my Manhattan Beach waterfront property that holds up year-round?',
        answer: 'Yes. For waterfront gate hardware in Manhattan Beach, we use Abloy marine padlocks and stainless steel hasp hardware, through-bolted with stainless fasteners. This combination handles salt spray, humidity, and UV. We also recommend rinsing gate hardware with fresh water after major storms to prevent accelerated salt corrosion.',
      },
      {
        question: 'My Manhattan Beach home has a guest cottage — can you key it differently from the main house but give me access to both?',
        answer: 'Yes. We set up a simple master key configuration: your key opens both the main house and the cottage, while a guest key opens only the cottage. This is a two-lock master key system — straightforward to implement and costs about $200–$350 depending on the lock hardware you choose.',
      },
    ],
  },
  {
    slug: 'brighton-beach-11235',
    legacySlug: 'brighton-beach',
    name: 'Brighton Beach',
    zip: '11235',
    borough: 'Brooklyn',
    lat: 40.5776,
    lng: -73.9554,
    localContext: 'Brighton Beach — known as "Little Odessa" — has a large Russian-speaking community along Brighton Beach Avenue. With a mix of apartments, condos, and older multi-unit buildings, lock change and rekeying services are frequently requested by both tenants and property managers here.',
    nearbyNeighborhoods: ['Sheepshead Bay', 'Coney Island', 'Manhattan Beach'],
    faqs: [
      {
        question: 'I rent an apartment in Brighton Beach and just moved in — my landlord gave me one key. Can I get more made?',
        answer: 'Yes. We duplicate standard residential keys on-site for $5–$15 each. If your key says "Do Not Duplicate," that is a deterrent stamp, not a legal restriction. If the key is a restricted keyway (Medeco, Mul-T-Lock), bring authorization paperwork. For a fresh move-in, we also recommend rekeying so the previous tenant\'s keys no longer work.',
      },
      {
        question: 'Brighton Beach has a large Russian-speaking community — do you have Russian-speaking staff?',
        answer: 'We have Russian-speaking staff available. When you call, let us know and we will connect you with a Russian-speaking dispatcher or technician. Communication is important for getting the job done right — we want you to fully understand the work being done and the price before it starts.',
      },
      {
        question: 'My Brighton Beach building has multiple apartment doors with the same key — is that a security problem?',
        answer: 'Yes, this is a master key or construction key situation and it is a significant security risk. If multiple units share the same key, any tenant can enter any other unit. Report this to your building management immediately — it is a housing code violation. File an HPD complaint if management does not rekey units to individual combinations. We handle building-wide rekeying projects like this for Brighton Beach landlords.',
      },
      {
        question: 'The Brighton Beach boardwalk is busy in summer — does that affect how quickly you can reach me?',
        answer: 'Summer traffic near the boardwalk can slow response somewhat during peak hours. We route around it and typically arrive within 20–35 minutes. Give us your cross street when you call — Brighton Beach Avenue, Ocean Parkway, or a specific side street — and we will find the fastest approach.',
      },
      {
        question: 'Can you also service commercial locks for stores on Brighton Beach Avenue?',
        answer: 'Yes. Brighton Beach Avenue commercial properties — restaurants, delis, retail — are within our regular commercial service area. We handle storefront deadbolts, roll-down gate padlocks, mortise lock repair, and after-hours emergency lockouts for businesses. Commercial calls receive the same 24/7 response as residential.',
      },
    ],
  },
  {
    slug: 'coney-island-11224',
    legacySlug: 'coney-island',
    name: 'Coney Island',
    zip: '11224',
    borough: 'Brooklyn',
    lat: 40.5755,
    lng: -73.9707,
    localContext: 'Coney Island is famous for its boardwalk and amusement parks, but it\'s also home to thousands of residents in high-rise housing complexes and rental apartments. We provide locksmith services for both businesses along Surf Avenue and residents throughout the Coney Island peninsula.',
    nearbyNeighborhoods: ['Brighton Beach', 'Gravesend', 'Manhattan Beach', 'Bensonhurst'],
    faqs: [
      {
        question: 'I live in a Coney Island high-rise housing complex — can a locksmith help me if my super is unavailable?',
        answer: 'For your individual apartment door, yes — you do not need the super to re-enter your own unit. We verify your identity (ID plus lease or utility bill with your address) and use non-destructive entry. For common area doors or building entrance issues, those require building management authorization. Call us for the apartment; call your building management for the common areas.',
      },
      {
        question: 'My Coney Island business near Surf Avenue was broken into — what is the emergency process?',
        answer: 'Call 911 first to report the break-in and preserve evidence. Then call us at (347) 386-7164. We respond to commercial post-break-in emergencies on Surf Avenue and throughout Coney Island 24/7. We replace destroyed locks, board or temporarily secure the entry, and provide a written incident report for insurance. We prioritize getting your business secured the same night.',
      },
      {
        question: 'Does the summer tourist season affect locksmith response times in Coney Island?',
        answer: 'Summer on weekends near the boardwalk can add 10–15 minutes to response times due to traffic around the amusement area. We plan routes around the congestion. If you are in a residential area away from the boardwalk (inland blocks of Coney Island), impact is minimal. Give us your exact cross street for the fastest response.',
      },
      {
        question: 'I run an amusement game booth on the boardwalk — can you install a padlock system for my booth\'s security panels?',
        answer: 'Yes. We install heavy-duty padlocks and hasp hardware for commercial boardwalk installations. For outdoor commercial hardware subject to salt air, we use marine-grade or hardened steel options. Contact us before the season starts for the best availability.',
      },
      {
        question: 'What should I do if I am locked out of my Coney Island apartment and it is raining?',
        answer: 'Call us immediately at (347) 386-7164. While you wait, see if a neighbor can let you into the lobby or vestibule, or find a nearby shelter like a laundromat or 24-hour diner. Do not sit outside in the rain for a long time — especially in winter, this is a health risk. We will get there as fast as possible, and our technicians work in all weather.',
      },
    ],
  },
  {
    slug: 'stuyvesant-heights-11233',
    legacySlug: 'stuyvesant-heights',
    name: 'Stuyvesant Heights',
    zip: '11233',
    borough: 'Brooklyn',
    lat: 40.6832,
    lng: -73.9337,
    localContext: 'Stuyvesant Heights is a historic section of Bed-Stuy with beautiful landmarked blocks of brownstones. Homeowners and renovators frequently call us for lock upgrades when restoring these classic properties, and renters use us for move-in lock changes.',
    nearbyNeighborhoods: ['Bedford-Stuyvesant', 'Bushwick', 'Crown Heights', 'Fort Greene'],
    faqs: [
      {
        question: 'I am renovating a Stuyvesant Heights brownstone — when should I call a locksmith during the renovation process?',
        answer: 'Call us twice: once at the start to install construction cylinders (a keyed system for contractor access), and again before you move in to install permanent high-security locks. Construction cylinders are cheap, universal, and get replaced at move-in so contractors cannot return. We handle this sequence regularly for Stuyvesant Heights brownstone renovations.',
      },
      {
        question: 'My Stuyvesant Heights brownstone is a landmark building — does that affect what locks I can install?',
        answer: 'NYC Landmark Preservation rules govern the exterior appearance of designated buildings. Lock hardware on the door face (the visible plate and knob) may need to be in character with the building — but you have wide latitude for the functional cylinder and deadbolt. We have experience with period-appropriate hardware (Baldwin, Emtek, antique brass finishes) that satisfies both LPC guidelines and modern security requirements.',
      },
      {
        question: 'Can a locksmith in Stuyvesant Heights help set up security for a multi-family brownstone I just purchased?',
        answer: 'Yes. For a newly purchased multi-family brownstone in Stuyvesant Heights, we recommend: rekeying all unit cylinders to individual combinations, installing a master key for the owner, replacing the building entrance lock, and assessing the mailbox locks. We can do the complete building in one visit. Call us with the number of units for a project quote.',
      },
      {
        question: 'My Stuyvesant Heights tenant moved out and left the apartment a mess — can I change the locks before getting a new tenant?',
        answer: 'If the tenant has vacated (surrendered the unit), yes — change the locks before the next showing. If there is any question about whether they have legally vacated, consult an attorney before changing locks to avoid an illegal lockout claim. For a properly vacated unit, we do same-day rekeying throughout Stuyvesant Heights.',
      },
      {
        question: 'Do any Stuyvesant Heights buildings have historic lock hardware that requires specialized service?',
        answer: 'Yes. Many Stuyvesant Heights brownstones still have original mortise lock bodies from the early 1900s. These use different cylinders and mechanisms than modern deadbolts. We service, rekey, and replace these cylinders and can source period-compatible replacement hardware when the mortise body itself needs replacement. Stuyvesant Heights historic hardware is familiar territory for us.',
      },
    ],
  },
  {
    slug: 'east-williamsburg-11206-11211-11237',
    legacySlug: 'east-williamsburg',
    name: 'East Williamsburg',
    zip: '11206',
    borough: 'Brooklyn',
    lat: 40.7108,
    lng: -73.9350,
    localContext: 'East Williamsburg sits between Williamsburg and Bushwick, with warehouse loft conversions and dense residential blocks. This fast-growing area sees high rental turnover, meaning move-in lock changes and emergency lockouts are among our most common calls.',
    nearbyNeighborhoods: ['Williamsburg', 'Bushwick', 'Bedford-Stuyvesant', 'Greenpoint'],
    faqs: [
      {
        question: 'I just moved into an East Williamsburg loft and the landlord gave me a key that barely works — what should I do?',
        answer: 'A key that barely works usually means a worn lock cylinder or a key cut to a worn original. We can try re-cutting the key from the lock code, or rekey with fresh pins — whichever is cheaper based on what we find. If the whole lock is worn, replacement makes more sense. Same-day service is available throughout East Williamsburg.',
      },
      {
        question: 'My East Williamsburg live-work space has two street-facing doors — can they be keyed alike?',
        answer: 'Yes. We can rekey or replace both locks so your single key opens both street-facing doors. This is called keying alike. It adds about 20 minutes to the job and costs $15–$25 extra beyond the cost of servicing each lock. Highly recommended for live-work spaces where you do not want to juggle multiple keys.',
      },
      {
        question: 'East Williamsburg has a lot of deliveries and foot traffic — how do I secure my building entrance better?',
        answer: 'For building entrances in high-traffic East Williamsburg, the most impactful upgrade is replacing a worn rim cylinder (the standard type on most NYC vestibule doors) with a higher-security version. If your building has a buzzer/intercom, make sure the electric strike is working properly — a loose strike defeats the whole system. We service all of these components.',
      },
      {
        question: 'I am subleasing an East Williamsburg apartment — do I have the same right to change the lock as a primary tenant?',
        answer: 'In NYC, a sublessee\'s rights depend on whether the sublet is authorized by the primary lease and landlord. For an authorized sublet, you generally have the same rights as a primary tenant. For an unauthorized sublet, it is more complicated. We recommend consulting your lease and potentially a tenant attorney before changing locks in a sublet situation.',
      },
      {
        question: 'Can you come to East Williamsburg the same day I call for rekeying?',
        answer: 'Same-day rekeying service is available throughout East Williamsburg. Call us in the morning for afternoon service. For emergencies (lockouts, security incidents), we arrive within 15–25 minutes at any hour. We confirm exact availability when you call and give you a 2-hour window.',
      },
    ],
  },
]

export function getNeighborhood(slug: string): Neighborhood | undefined {
  return NEIGHBORHOODS.find((n) => n.slug === slug)
}

export function generateNeighborhoodParams() {
  return NEIGHBORHOODS.map((n) => ({ neighborhood: n.slug }))
}
