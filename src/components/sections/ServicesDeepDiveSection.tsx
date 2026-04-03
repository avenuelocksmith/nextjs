import Link from 'next/link'
import { Home, Building2, Car, Zap, Key, ShieldCheck, ArrowRight, Lock, Camera, Smartphone, DoorOpen } from 'lucide-react'
import { cn } from '@/lib/utils'

const SERVICE_CATEGORIES = [
  {
    id: 'residential',
    icon: Home,
    label: 'Residential',
    heading: 'Home Locksmith Services',
    intro:
      'Most calls we get from Brooklyn homeowners fall into a handful of situations: locked out at a bad hour, just moved in and not sure who has keys, or a lock that\'s finally given up after years of hard use. We handle all of it — quickly, without damage, at a price we tell you before we touch anything.',
    services: [
      {
        name: 'Apartment & House Lockout',
        desc: 'Locked out of your apartment or home? We\'ll get you back inside using non-destructive methods — no unnecessary drilling, no replacing hardware you don\'t need to replace. Most residential lockouts take under 20 minutes once we arrive.',
        href: '/services/lockout-service/residential-lockout/',
      },
      {
        name: 'Lock Rekeying',
        desc: 'Just moved in? Gave a key to someone you no longer trust? Rekeying changes the internal pins so old keys stop working — your lock stays, the cost is low, and your security is reset. We rekey Schlage, Kwikset, Medeco, Mul-T-Lock, and most standard cylinders.',
        href: '/services/lock-rekey/',
      },
      {
        name: 'Lock Change & Replacement',
        desc: 'When a lock is worn, damaged, or simply not up to standard, we replace it. We carry Schlage B-series, Kwikset SmartKey, and Medeco deadbolts on the truck — you pick the grade, we handle installation.',
        href: '/services/lock-change/',
      },
      {
        name: 'Deadbolt Installation',
        desc: 'A Grade-3 deadbolt offers token resistance. We install ANSI Grade 1 and Grade 2 deadbolts that meet commercial security standards — common sense for any Brooklyn apartment or brownstone front door. Medeco and Mul-T-Lock options available for higher-security needs.',
        href: '/services/deadbolt-installation/',
      },
      {
        name: 'Smart Lock Installation',
        desc: 'Keypad locks, Bluetooth entry, and Wi-Fi-enabled deadbolts from Schlage Encode, August, and Yale. We assess your door first — a smart lock on a weak frame is a false sense of security. We only recommend what actually improves your setup.',
        href: '/services/security-solutions/smart-locks/',
      },
      {
        name: 'New Tenant Lock Change',
        desc: 'Brooklyn law and common sense both say the same thing: when you move in, change the locks. Previous tenants, landlords, maintenance workers, or old roommates may have copies. We do this fast — one visit, same day.',
        href: '/services/new-tenant-lock-change/',
      },
      {
        name: 'Key Duplication',
        desc: 'Standard keys, high-security restricted keys (Medeco, Mul-T-Lock), mailbox keys, cabinet keys, and more. We cut duplicates accurately the first time — no "try it and see."',
        href: '/services/key-duplication/',
      },
      {
        name: 'Mailbox & Cabinet Locks',
        desc: 'Broken mailbox lock, filing cabinet you\'ve lost the key to, storage unit lock that\'s seized up. These are quick jobs that most locksmiths don\'t bother with — we do.',
        href: '/services/mailbox-lock/',
      },
    ],
    href: '/services/residential-locksmith/',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
  },
  {
    id: 'commercial',
    icon: Building2,
    label: 'Commercial',
    heading: 'Commercial Locksmith Services',
    intro:
      'Offices, retail spaces, restaurants, schools, medical offices, warehouses — Brooklyn has them all, and every one has different security requirements. We\'ve worked in all of them. Whether it\'s a single office lockout at 6am or a full master key system for a 40-unit building, we know what we\'re doing.',
    services: [
      {
        name: 'Business Lockout',
        desc: 'Locked out of your office, store, or commercial space? We dispatch to commercial properties across Brooklyn 24/7. We know that every hour the doors are closed costs money.',
        href: '/services/lockout-service/commercial-lockout/',
      },
      {
        name: 'Master Key Systems',
        desc: 'One key opens everything you need; other keys open only what they should. A well-designed master key system eliminates the chaos of dozens of separate keys for property managers, building supers, and multi-location businesses. We design and install these properly — a poorly keyed master system creates security holes.',
        href: '/services/commercial-locksmith/',
      },
      {
        name: 'Access Control Systems',
        desc: 'Keypad entry, key fob systems, and card access for offices and commercial buildings. Control who enters, log activity, and revoke access instantly without changing physical locks. We install and service systems from leading manufacturers.',
        href: '/services/security-solutions/access-control/',
      },
      {
        name: 'High-Security Commercial Locks',
        desc: 'Grade 1 locks, mortise locksets, and patented key systems that prevent unauthorized duplication. Mul-T-Lock, Medeco, and Abloy options for businesses that need genuine security rather than the appearance of it.',
        href: '/services/security-solutions/high-security-locks/',
      },
      {
        name: 'Panic Bars & Exit Devices',
        desc: 'Building code requires push-to-exit hardware on many commercial doors. We install, repair, and replace panic bars and exit devices for retail spaces, restaurants, schools, and office buildings.',
        href: '/services/commercial-locksmith/',
      },
      {
        name: 'Intercom & Video Entry Systems',
        desc: 'Apartment buildings, offices, and storefronts use intercom systems to control visitor access. We install audio and video intercom systems — residents buzz in who they choose, management monitors entry points.',
        href: '/services/security-solutions/access-control/',
      },
      {
        name: 'Eviction Lock Change',
        desc: 'Post-eviction lock changes for NYC landlords and property managers. We understand the marshal eviction process and carry the paperwork requirements. Legal, fast, and properly documented.',
        href: '/services/eviction-locksmith/',
      },
      {
        name: 'Safe Opening & Installation',
        desc: 'Office safes, fireproof document safes, depository safes, and floor safes. Lost combination? Malfunction? We open safes without damage in most cases. We also deliver and install new safes.',
        href: '/services/safe-locksmith/',
      },
    ],
    href: '/services/commercial-locksmith/',
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
  },
  {
    id: 'automotive',
    icon: Car,
    label: 'Automotive',
    heading: 'Auto Locksmith Services',
    intro:
      'Car locksmith work is a specialty. Programming a transponder key requires the right equipment for your specific make and model — it\'s not something every locksmith can do. We\'ve invested in the tools. Our automotive rates run well below what dealers charge, and we come to you.',
    services: [
      {
        name: 'Car Lockout',
        desc: 'Keys locked inside? Keys lost? We open car doors without damage — no slim jim scratching your door frame, no broken weather stripping. We work on virtually all makes and models, domestic and foreign.',
        href: '/services/lockout-service/auto-lockout/',
      },
      {
        name: 'Car Key Replacement',
        desc: 'Lost your only key? Need a spare? We cut and program replacement car keys on-site for most vehicles. No towing to the dealer, no waiting days — we come to you and have you driving again the same visit.',
        href: '/services/auto-locksmith/',
      },
      {
        name: 'Transponder Key Programming',
        desc: 'Modern car keys contain a chip that communicates with your vehicle\'s immobilizer. If the chip isn\'t programmed correctly, the key turns but the car won\'t start. We program transponder keys for most makes — typically at 40–60% less than dealer pricing.',
        href: '/services/auto-locksmith/',
      },
      {
        name: 'Key Fob Replacement & Programming',
        desc: 'Remote entry fobs, proximity keys, push-to-start smart keys. We source and program key fobs for most vehicles. Some jobs take 20 minutes; some take longer depending on the vehicle security system.',
        href: '/services/auto-locksmith/',
      },
      {
        name: 'Ignition Repair & Replacement',
        desc: 'Ignition cylinders wear out, get damaged, or get stuck with a broken key inside. We repair and replace ignition cylinders for most vehicles — another job dealers charge a premium for that we handle at competitive rates.',
        href: '/services/auto-locksmith/',
      },
      {
        name: 'Broken Key Extraction',
        desc: 'Key snapped off in the door lock or ignition? We extract broken key fragments without damaging the lock mechanism in most cases, then cut and program a new key on the spot.',
        href: '/services/auto-locksmith/',
      },
    ],
    href: '/services/auto-locksmith/',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
  },
  {
    id: 'security',
    icon: Camera,
    label: 'Security Systems',
    heading: 'Security Solutions & Upgrades',
    intro:
      'Lock hardware is the foundation. Beyond that, cameras, access control, and reinforced entry points complete the picture. We don\'t sell security systems as an upsell — we recommend them when they genuinely improve your situation.',
    services: [
      {
        name: 'CCTV & Security Camera Installation',
        desc: 'Indoor and outdoor cameras for homes, offices, and commercial properties. We assess coverage gaps, run wiring cleanly, and set up remote monitoring so you can check in from anywhere.',
        href: '/services/security-solutions/cctv/',
      },
      {
        name: 'Keyless Entry & Keypad Locks',
        desc: 'Eliminate physical keys for properties with high staff turnover, short-term rentals, or frequent access changes. Codes change in seconds; no re-keying required. We install Schlage, Yale, and Kwikset SmartKey systems.',
        href: '/services/security-solutions/keyless-entry/',
      },
      {
        name: 'Biometric Access Control',
        desc: 'Fingerprint readers for high-security offices, server rooms, and restricted areas. Biometric access provides a clear audit trail and eliminates the risk of lost key cards.',
        href: '/services/security-solutions/biometric-access/',
      },
      {
        name: 'Door Reinforcement',
        desc: 'A high-security lock on a weak door frame accomplishes little. Door jamb reinforcement kits, strike plate upgrades, and door barricade bars address the points where most forced entries actually occur.',
        href: '/services/security-solutions/door-reinforcement/',
      },
      {
        name: 'High-Security Lock Upgrades',
        desc: 'Medeco, Mul-T-Lock, and Abloy Protec locks — drill-resistant, pick-resistant, and bump-resistant. These are the locks specified for banks, government buildings, and high-value commercial properties. We install and rekey them for residential and commercial clients.',
        href: '/services/security-solutions/high-security-locks/',
      },
      {
        name: 'Free Security Assessment',
        desc: 'Not sure where your vulnerabilities are? We walk through your property, assess your entry points, and give you a straight opinion — without the pressure to buy anything. Book a free security consultation.',
        href: '/free-quote/',
      },
    ],
    href: '/services/security-solutions/',
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
  },
]

interface ServicesDeepDiveSectionProps {
  className?: string
}

export function ServicesDeepDiveSection({ className }: ServicesDeepDiveSectionProps) {
  return (
    <section className={cn('py-14 md:py-20 bg-white', className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-brand-amber font-semibold text-sm uppercase tracking-wider mb-2">
            Every Service We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-3">
            Residential, Commercial, Auto &amp; Security Solutions
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            One call covers it — whether you&apos;re locked out of your car at midnight, upgrading an office building&apos;s access control, or figuring out what locks your Brooklyn apartment actually needs.
          </p>
        </div>

        <div className="space-y-10">
          {SERVICE_CATEGORIES.map((category) => {
            const CategoryIcon = category.icon
            return (
              <div key={category.id} className={cn('rounded-2xl border p-6 md:p-8', category.color)}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                    <CategoryIcon size={20} className={category.iconColor} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">{category.label}</p>
                    <h3 className="font-bold text-xl text-brand-navy leading-tight">{category.heading}</h3>
                  </div>
                </div>

                <p className="text-brand-muted text-sm leading-relaxed mb-6 max-w-3xl">
                  {category.intro}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {category.services.map((svc) => (
                    <Link
                      key={svc.name}
                      href={svc.href}
                      className="bg-white rounded-xl p-4 border border-white hover:border-brand-amber/50 hover:shadow-sm transition-all group flex flex-col"
                    >
                      <h4 className="font-bold text-brand-navy text-sm mb-1.5 group-hover:text-brand-amber transition-colors flex items-start gap-1.5">
                        <Lock size={12} className="flex-shrink-0 mt-0.5 text-brand-amber" aria-hidden="true" />
                        {svc.name}
                      </h4>
                      <p className="text-brand-muted text-xs leading-relaxed flex-1">{svc.desc}</p>
                      <span className="flex items-center gap-1 text-brand-amber text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                        Details <ArrowRight size={10} />
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/60">
                  <Link
                    href={category.href}
                    className="inline-flex items-center gap-1.5 text-brand-navy font-semibold text-sm hover:text-brand-amber transition-colors"
                  >
                    All {category.label} Services <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
