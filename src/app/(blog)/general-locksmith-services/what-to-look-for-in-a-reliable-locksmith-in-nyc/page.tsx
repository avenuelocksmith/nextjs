import type { Metadata } from 'next'
import { BreadcrumbNav } from '@/components/ui/BreadcrumbNav'
import { JsonLd } from '@/components/schema/JsonLd'
import { getArticleSchema, getBreadcrumbSchema, getHowToSchema } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { BUSINESS } from '@/lib/constants'
import { Phone, CheckCircle, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = buildMetadata({
  title: 'What to Look for in a Reliable Locksmith in NYC | Avenue Locksmith',
  description: 'How to find a trustworthy locksmith in New York City — licensing requirements, scam warning signs, what to ask before work begins, and how to verify credentials.',
  path: '/general-locksmith-services/what-to-look-for-in-a-reliable-locksmith-in-nyc/',
})

export default function ReliableLocksmithNYCArticlePage() {
  return (
    <>
      <JsonLd data={getArticleSchema({
        title: 'What to Look for in a Reliable Locksmith in NYC',
        description: 'How to find a trustworthy locksmith in New York City — licensing requirements, scam warning signs, and how to verify credentials.',
        url: '/general-locksmith-services/what-to-look-for-in-a-reliable-locksmith-in-nyc/',
        datePublished: '2024-02-10',
        dateModified: '2025-01-15',
      })} />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'General Locksmith Services', url: '/general-locksmith-services/' },
        { name: 'What to Look for in a Reliable Locksmith in NYC', url: '/general-locksmith-services/what-to-look-for-in-a-reliable-locksmith-in-nyc/' },
      ])} />
      <JsonLd data={getHowToSchema({
        name: 'How to Verify a Locksmith is Legitimate in NYC',
        description: 'Step-by-step guide to confirming a locksmith holds a valid NYC DCWP license, provides upfront pricing, and is not running a scam operation.',
        totalTime: 'PT10M',
        steps: [
          {
            name: 'Ask for the NYC DCWP license number',
            text: 'Before any work begins, ask the locksmith for their NYC Department of Consumer and Worker Protection (DCWP) Locksmith License number. A legitimate locksmith provides this without hesitation. You can verify any NYC locksmith license on the DCWP website.',
          },
          {
            name: 'Request the total price in writing before work starts',
            text: 'Ask the locksmith to confirm the full price — including all labor and parts — via text or email before they touch anything. If the quoted price changes after arrival, do not allow them to start and call another company.',
          },
          {
            name: 'Confirm they will attempt picking before drilling',
            text: 'For standard residential locks, drilling should be extremely rare. Ask the locksmith to confirm they will try non-destructive entry first. If they say drilling is immediately necessary without attempting to pick, that is a major scam signal.',
          },
          {
            name: 'Check the Google review history',
            text: 'Look for a consistent review history spanning multiple years across different service types. A profile with hundreds of 5-star reviews from the past few months only is suspicious and may indicate fake reviews.',
          },
          {
            name: 'Verify a real physical business address',
            text: 'A legitimate NYC locksmith has a verifiable business address in the city. Search the business name and confirm the address appears in independent sources beyond just their own website.',
          },
        ],
      })} />
      <BreadcrumbNav items={[
        { label: 'Home', href: '/' },
        { label: 'General Locksmith Services', href: '/category/general-locksmith-services/' },
        { label: 'What to Look for in a Reliable Locksmith in NYC' },
      ]} />
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <header className="mb-8">
            <p className="text-brand-amber text-sm font-semibold uppercase tracking-wider mb-3">General Locksmith Services</p>
            <h1 className="text-4xl font-bold text-brand-navy leading-tight mb-4">What to Look for in a Reliable Locksmith in NYC</h1>
            <p className="text-brand-muted text-sm">By {BUSINESS.name} · Updated January 2025 · 7 min read</p>
          </header>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle size={20} className="text-amber-600 mt-0.5 shrink-0" />
              <p className="text-amber-800 text-sm leading-relaxed"><strong>The NYC Locksmith Scam Problem:</strong> New York City has one of the highest concentrations of fraudulent locksmith operations in the United States. Fake locksmiths advertise on Google with local phone numbers and low prices, then show up, charge dramatically more, and perform unnecessary or damaging work. This guide helps you avoid them.</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-brand-text">
            <p className="text-xl leading-relaxed mb-6">Finding a reliable locksmith in New York City is harder than it should be. The combination of high call volume, a large population unfamiliar with how locksmith scams work, and low barriers to setting up a fake local listing has created an environment where scam operations flourish. Here is what to look for — and what to watch out for.</p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">New York City Locksmith Licensing Requirements</h2>
            <p>There is no statewide locksmith license in New York State. Licensing is at the city level — New York City requires locksmiths operating in the five boroughs to hold a license issued by the New York City Department of Consumer and Worker Protection (DCWP). This requirement exists to protect consumers and ensure minimum competency standards.</p>
            <p className="mt-4">A licensed locksmith in New York City must:</p>
            <ul className="space-y-2 my-4 pl-4">
              <li>Hold a valid DCWP Locksmith License</li>
              <li>Carry proof of licensing and present it on request</li>
              <li>Have a physical place of business in New York City</li>
              <li>Carry liability insurance</li>
            </ul>
            <p><strong>What to do:</strong> Before any locksmith begins work, ask for their license number. A legitimate locksmith will provide it without hesitation. You can verify NYC locksmith licenses at the DCWP website.</p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Red Flags: Signs of a Scam Operation</h2>
            <div className="space-y-4 my-6">
              {[
                { flag: 'Price quoted on the phone is far below market rate', detail: 'Legitimate lockout service in NYC starts around $75–$125. If you are quoted $15–$35, the real price will be dramatically higher after they arrive.' },
                { flag: 'The locksmith says they must drill your lock', detail: 'Drilling should be extremely rare on standard residential locks. If a locksmith immediately says drilling is necessary without attempting picking, this is a major scam signal. Drilling also conveniently destroys the lock (so they can sell you a replacement) and is much more expensive.' },
                { flag: 'The price changes after arrival', detail: 'The most common scam pattern: a low phone quote becomes $300+ after the locksmith arrives and you are in a vulnerable position. Do not allow them to start work and do not pay the inflated price.' },
                { flag: 'No license number when asked', detail: 'If the locksmith cannot or will not provide their license number, do not hire them.' },
                { flag: 'Unmarked van with out-of-state plates', detail: 'Many scam operations dispatch from New Jersey or operate without proper NYC business registration. A local, legitimate locksmith will typically have in-state identification.' },
              ].map(item => (
                <div key={item.flag} className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                  <AlertTriangle size={16} className="text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-red-800 text-sm">{item.flag}</p>
                    <p className="text-red-700 text-sm mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">What to Ask Before Work Begins</h2>
            <p>Before allowing any locksmith to touch your door or lock, ask these questions:</p>
            <div className="space-y-3 my-6">
              {[
                'What is the total price for this job, including all labor and parts?',
                'Can you give me that price in writing (text or email) before starting?',
                'What is your license number?',
                'Will you attempt to pick the lock before drilling?',
                'If you drill the lock, is a replacement lock included in this price?',
              ].map(q => (
                <div key={q} className="flex items-start gap-2.5">
                  <CheckCircle size={16} className="text-brand-amber mt-0.5 shrink-0" />
                  <span className="text-brand-text text-sm">{q}</span>
                </div>
              ))}
            </div>
            <p>If the locksmith hesitates, refuses to answer, or gives evasive responses to any of these questions — do not proceed.</p>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">How to Find a Legitimate NYC Locksmith</h2>
            <p>The most reliable way to find a legitimate locksmith in New York City:</p>
            <ul className="space-y-2 my-4 pl-4">
              <li><strong>Check Google reviews carefully.</strong> Look for a consistent review history over multiple years, with a mix of service types. A profile with hundreds of 5-star reviews from the last 6 months is suspicious.</li>
              <li><strong>Look for a real physical address.</strong> A legitimate local locksmith has a verifiable business address in the city, not just a phone number.</li>
              <li><strong>Verify the license.</strong> NYC DCWP license lookup is publicly available.</li>
              <li><strong>Ask in local neighborhood groups.</strong> Brooklyn neighborhood Facebook groups and Nextdoor are excellent sources for personal referrals to locksmiths who have actually served those communities.</li>
              <li><strong>Save a number before you need it.</strong> The worst time to research a locksmith is when you are standing outside your locked apartment at midnight. Save a trusted number now.</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">What Legitimate Locksmith Pricing Looks Like</h2>
            <p>As a reference point, here is what you should expect to pay for common locksmith services in Brooklyn and NYC:</p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th className="p-3 text-left">Service</th>
                    <th className="p-3 text-left">Typical Range</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Home/apartment lockout', '$75 – $125'],
                    ['Car lockout', '$65 – $100'],
                    ['Business lockout', '$85 – $150'],
                    ['Lock rekeying (per lock)', '$75 – $125'],
                    ['Standard deadbolt replacement', '$100 – $175 (hardware included)'],
                    ['High-security lock installation', '$200 – $400 (hardware included)'],
                    ['Broken key extraction', '$75 – $125'],
                  ].map(([svc, price]) => (
                    <tr key={svc} className="border-b border-brand-border">
                      <td className="p-3 text-brand-text">{svc}</td>
                      <td className="p-3 text-brand-navy font-medium">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-brand-muted text-sm">Prices reflect Brooklyn/NYC market rates. All legitimate quotes should be provided before work begins.</p>
          </div>

          <div className="mt-12 bg-brand-navy rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Avenue Locksmith — Licensed & Insured in Brooklyn</h2>
            <p className="text-white/80 mb-6">We quote the full price before work begins, every time. Ask for our license number on the call.</p>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-3 bg-brand-amber hover:bg-brand-orange text-brand-navy font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-xl"><Phone size={22} aria-hidden="true" />{BUSINESS.phone}</a>
          </div>

          <div className="mt-8 pt-8 border-t border-brand-border">
            <p className="text-brand-muted text-sm">Related: <Link href="/emergency-locksmith-in-brooklyn-ny/" className="text-brand-navy hover:underline">Emergency Locksmith Brooklyn</Link> · <Link href="/services/residential-locksmith/" className="text-brand-navy hover:underline">Residential Locksmith Services</Link> · <Link href="/services/lock-rekey/" className="text-brand-navy hover:underline">Lock Rekeying</Link></p>
          </div>
        </div>
      </article>
    </>
  )
}
