import type { Metadata } from 'next'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getArticleSchema, getBreadcrumbSchema, getHowToSchema, getWebPageSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  title: 'Avenue Locks Residential Locksmith Service in New York City | Avenue Locksmith',
  description: 'Complete guide to residential locksmith services in NYC from Avenue Locksmith — lockouts, rekeying, deadbolt installation, and security upgrades for Brooklyn renters and homeowners.',
  path: '/residential-locksmith-services/avenue-locks-residential-locksmith-service-in-new-york-city/',
})

export default function ResidentialLocksmithArticlePage() {
  return (
    <>
      <JsonLd data={getWebPageSchema({
        title: 'Avenue Locks Residential Locksmith Service in New York City | Avenue Locksmith',
        description: 'Residential locksmith services in New York City from Avenue Locksmith. Apartment lockouts, rekeying, lock replacement, smart locks, and deadbolt installation. Licensed & insured.',
        url: '/residential-locksmith-services/avenue-locks-residential-locksmith-service-in-new-york-city/',
      })} />
      <JsonLd data={getArticleSchema({
        title: 'Avenue Locks Residential Locksmith Service in New York City',
        description: 'Complete guide to residential locksmith services in NYC from Avenue Locksmith.',
        url: '/residential-locksmith-services/avenue-locks-residential-locksmith-service-in-new-york-city/',
        datePublished: '2024-01-15',
        dateModified: '2025-01-15',
      })} />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Residential Locksmith Services', url: '/residential-locksmith-services/' },
        { name: 'Avenue Locks Residential Service in NYC', url: '/residential-locksmith-services/avenue-locks-residential-locksmith-service-in-new-york-city/' },
      ])} />
      <JsonLd data={getHowToSchema({
        name: 'How to Decide Between Rekeying and Lock Replacement',
        description: 'A step-by-step guide for Brooklyn renters and homeowners to determine whether rekeying or full lock replacement is the right choice for their situation.',
        totalTime: 'PT5M',
        steps: [
          {
            name: 'Check the condition of your existing lock',
            text: 'Inspect your lock for damage, wobbling, sticking, or wear. If the lock is damaged, jammed, or difficult to operate, replacement is the right choice. If it functions normally, rekeying is likely sufficient.',
          },
          {
            name: 'Assess who may have copies of your key',
            text: 'If you have just moved in, recently ended a relationship, had a break-in, or lost your keys, there may be unauthorized key copies in circulation. Rekeying eliminates all existing keys instantly — only your new keys will work.',
          },
          {
            name: 'Evaluate your current security grade',
            text: 'Check whether your deadbolt is ANSI Grade 1 or Grade 2. If it is a low-grade lock or a basic knob lock without a deadbolt, replacement with a higher-security lock is recommended for Brooklyn apartments.',
          },
          {
            name: 'Decide based on cost and goals',
            text: 'Rekeying costs $65–$85 per lock and takes about 20 minutes. Lock replacement costs $95–$200+ and takes 30–45 minutes. Choose rekeying to secure against old keys; choose replacement to upgrade security hardware or fix a damaged lock.',
          },
          {
            name: 'Call a licensed locksmith for an on-site assessment',
            text: 'A licensed NYC DCWP locksmith can assess your specific lock and door in minutes and confirm the best option. Avenue Locksmith provides upfront pricing before any work begins — call (347) 386-7164.',
            url: '/services/lock-rekey/',
          },
        ],
      })} />
      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'Residential Locksmith Services', href: '/category/residential-locksmith-services/' },
        { label: 'Avenue Locks Residential Service in NYC' },
      ]} />
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <header className="mb-8">
            <p className="text-brand-amber text-sm font-semibold uppercase tracking-wider mb-3">Residential Locksmith Services</p>
            <h1 className="text-4xl font-bold text-brand-navy leading-tight mb-4">Avenue Locks Residential Locksmith Service in New York City</h1>
            <p className="text-brand-muted text-sm">By {BUSINESS.name} · Updated January 2025 · 8 min read</p>
          </header>

          <div className="prose prose-lg max-w-none text-brand-text">
            <p className="text-xl leading-relaxed text-brand-text mb-6">Residential locksmith service in New York City is not one-size-fits-all. The sheer variety of housing in Brooklyn alone — pre-war brownstones, converted industrial lofts, modern luxury towers, rent-stabilized walkups — means the locksmith who serves it well needs to know every type of door, every type of lock, and the specific context that each housing type creates.</p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">The Brooklyn Renter Context</h2>
            <p>Over 70% of Brooklyn households rent, which shapes what residential locksmith service looks like here. The most common residential locksmith calls in Brooklyn are not what you might expect from watching national locksmith ads — they are:</p>
            <ul className="space-y-2 my-4 pl-4">
              {['Move-in rekeying — new tenants securing their apartment against previous key holders', 'Lockouts — coming home to a locked door without keys', 'Move-out lock changes — landlords resetting locks between tenants', 'Security upgrades — renters upgrading worn or inadequate deadbolts'].map(item => (
                <li key={item} className="text-brand-text">{item}</li>
              ))}
            </ul>
            <p>Homeownership-driven services like full lock replacement after purchasing a home exist, but they are less dominant than in suburban markets. Understanding this changes how a good Brooklyn locksmith approaches residential service.</p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Move-In Rekeying: The Most Important Call</h2>
            <p>When you move into a Brooklyn apartment, you receive keys from your landlord. What you cannot know is how many other copies of those keys exist — from previous tenants, from previous tenants' family members, from contractors, from old supers. In a high-turnover rental market, this is not a hypothetical concern.</p>
            <p className="mt-4">Rekeying changes the internal pin configuration of your existing lock cylinder so that all previously cut keys no longer work. Only the new keys — which you control — open your door. It costs a fraction of full lock replacement (typically $75–$150 per lock) and takes 15–25 minutes per lock. It is the single most important security step you can take when moving into a Brooklyn apartment.</p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Apartment Lockouts: What to Expect</h2>
            <p>A residential lockout call in Brooklyn follows a consistent pattern. You call, we dispatch within minutes, we arrive within 15–25 minutes, we identify your lock configuration, and we open your door using the least invasive method available. For most standard deadbolts and knob locks, this means lock picking — manipulating the lock's internal pins to retract the bolt without a key. In almost all cases, this leaves your lock and door completely undamaged.</p>
            <p className="mt-4">We always quote the full price before picking up a tool. In New York City, locksmith scams are unfortunately common — companies that advertise low prices and then dramatically inflate the bill once they arrive. A legitimate locksmith quotes completely upfront. If you are ever given a dramatically different price after a locksmith arrives, do not pay it and call another company.</p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Lock Types Common in Brooklyn Residences</h2>
            <p>Brooklyn's housing stock creates a varied lock landscape:</p>
            <div className="space-y-4 my-6">
              {[
                { title: 'Pin tumbler deadbolts', body: 'The most common lock type in modern Brooklyn apartments. Standard pick and bypass tools handle these efficiently. ANSI Grade 1 deadbolts (Schlage B60N, Kwikset 980) offer the best security in this category.' },
                { title: 'Mortise locks', body: 'Common in pre-war brownstones and older co-op buildings. A mortise lock is a more complex mechanism that requires specific tools. Many Brooklyn buildings retain original mortise hardware from the early 20th century.' },
                { title: 'Rim cylinder locks (Fox locks)', body: 'Common in Brooklyn apartments — a cylinder mounted on the surface of the door that operates a vertical deadbolt. These require different bypass techniques than standard deadbolts.' },
                { title: 'High-security cylinders', body: 'Medeco, Mul-T-Lock, and Abloy locks are found in higher-end Brooklyn residences. These are specifically designed to resist picking, drilling, and bumping.' },
              ].map(item => (
                <div key={item.title} className="bg-brand-bg rounded-xl p-4 border border-brand-border">
                  <h3 className="font-bold text-brand-navy mb-1">{item.title}</h3>
                  <p className="text-brand-muted text-sm">{item.body}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">When to Replace vs. Rekey</h2>
            <p>Rekeying is the right choice when your lock is in good condition but the wrong people may have keys. Lock replacement is the right choice when:</p>
            <ul className="space-y-2 my-4 pl-4">
              <li>The lock is damaged, worn, or jammed</li>
              <li>You want to upgrade to a higher security grade</li>
              <li>The lock is a low-quality single-cylinder model and you want a deadbolt with more resistant internals</li>
              <li>You want restricted keyway (keys that cannot be copied at hardware stores)</li>
            </ul>
            <p>For most move-in situations in Brooklyn apartments, rekeying is the correct, cost-effective choice.</p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Avenue Locksmith Residential Services</h2>
            <p>Our residential locksmith services in Brooklyn and across New York City include:</p>
            <ul className="space-y-2 my-4 pl-4">
              {['Apartment and home lockouts — 15–25 minute response, 24/7', 'Move-in rekeying — all lock types', 'Lock replacement and upgrade — Schlage, Kwikset, Medeco, Mul-T-Lock', 'ANSI Grade 1 deadbolt installation', 'High-security lock installation', 'Reinforced strike plate installation', 'Mailbox lock replacement', 'New tenant lock change (for landlords)', 'Key duplication — all standard key types'].map(item => (
                <li key={item} className="text-brand-text">{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12 bg-brand-navy rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Brooklyn residential dispatch — licensed team, not a referral network</h2>
            <p className="text-white/80 mb-6">Emergency lockouts, move-in rekeys, and hardware upgrades all handled by the same Brooklyn team with the same rate card.</p>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-xl"><Phone size={22} aria-hidden="true" />{BUSINESS.phone}</a>
          </div>

          <div className="mt-8 pt-8 border-t border-brand-border">
            <p className="text-brand-muted text-sm">Related: <Link href="/services/residential-locksmith/" className="text-brand-navy hover:underline">Residential Locksmith Services</Link> · <Link href="/services/lock-rekey/" className="text-brand-navy hover:underline">Lock Rekeying</Link> · <Link href="/services/new-tenant-lock-change/" className="text-brand-navy hover:underline">New Tenant Lock Change</Link></p>
          </div>
        </div>
      </article>
    </>
  )
}
