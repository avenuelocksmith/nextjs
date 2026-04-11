#!/usr/bin/env node
/**
 * generate-gallery-placeholders.mjs
 *
 * One-shot script that generates a 1200×1200 WebP placeholder for every
 * entry in src/lib/gallery.ts and writes it to public/gallery/{category}/...
 *
 * These are *placeholders* for the contextual gallery / before-after slider
 * pipeline. They exist so the site renders without 404s while waiting for
 * real photography. When real photos arrive, drop them into the same paths
 * with the same filenames and delete (or ignore) this script.
 *
 * Run: `node scripts/generate-gallery-placeholders.mjs`
 */

import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const ROOT = dirname(dirname(__filename))
const OUT_DIR = join(ROOT, 'public', 'gallery')

const WIDTH = 1200
const HEIGHT = 1200

// Category palette — readable on white text, distinct per category.
const PALETTE = {
  residential: { base: '#1E3A8A', accent: '#F59E0B' },
  commercial: { base: '#0F172A', accent: '#38BDF8' },
  auto: { base: '#7C2D12', accent: '#FB923C' },
  emergency: { base: '#7F1D1D', accent: '#FCA5A5' },
  security: { base: '#064E3B', accent: '#34D399' },
  eviction: { base: '#4C1D95', accent: '#C4B5FD' },
}

// Mirrored from src/lib/gallery.ts — kept in sync manually. If the registry
// grows, mirror the additions here.
const ITEMS = [
  // ── Residential ──
  { filename: 'residential/deadbolt-install-park-slope-11215-11217-01.webp', title: 'Grade 1 Deadbolt Install', subtitle: 'Park Slope · Brownstone front door', category: 'residential' },
  { filename: 'residential/lock-rekey-williamsburg-11211-11249-01.webp', title: 'Move-in Rekey', subtitle: 'Williamsburg · Schlage cylinder', category: 'residential' },
  { filename: 'residential/smart-lock-retrofit-brooklyn-heights-11201-01.webp', title: 'August Smart Lock Retrofit', subtitle: 'Brooklyn Heights · Apartment', category: 'residential' },
  { filename: 'residential/mortise-lock-repair-cobble-hill-11201-01.webp', title: 'Mortise Lock Repair', subtitle: 'Cobble Hill · Antique brownstone', category: 'residential' },
  { filename: 'residential/mailbox-lock-bay-ridge-11209-01.webp', title: 'Apartment Mailbox Lock', subtitle: 'Bay Ridge · Building lobby', category: 'residential' },

  // ── Commercial ──
  { filename: 'commercial/master-key-system-dumbo-11201-01.webp', title: 'Master Key System', subtitle: 'DUMBO · Office building', category: 'commercial' },
  { filename: 'commercial/access-control-sunset-park-11220-11232-01.webp', title: 'Access Control Panel', subtitle: 'Sunset Park · Retail storefront', category: 'commercial' },
  { filename: 'commercial/storefront-deadbolt-bed-stuy-11216-11221-11233-01.webp', title: 'Storefront Deadbolt', subtitle: 'Bed-Stuy · Retail door', category: 'commercial' },

  // ── Auto ──
  { filename: 'auto/transponder-key-program-flatbush-11226-11210-01.webp', title: 'Transponder Key Program', subtitle: 'Flatbush · Curbside', category: 'auto' },
  { filename: 'auto/car-lockout-crown-heights-11213-11216-11225-11233-01.webp', title: 'Car Lockout', subtitle: 'Crown Heights · Non-destructive entry', category: 'auto' },
  { filename: 'auto/ignition-cylinder-bushwick-11221-01.webp', title: 'Ignition Cylinder Replacement', subtitle: 'Bushwick · Vehicle on site', category: 'auto' },

  // ── Emergency ──
  { filename: 'emergency/home-lockout-prospect-heights-11238-01.webp', title: 'Apartment Lockout', subtitle: 'Prospect Heights · Opened without damage', category: 'emergency' },
  { filename: 'emergency/broken-key-extraction-carroll-gardens-11231-01.webp', title: 'Broken Key Extraction', subtitle: 'Carroll Gardens · Deadbolt rescue', category: 'emergency' },
  { filename: 'emergency/kicked-door-frame-repair-bed-stuy-before-01.webp', title: 'Kicked-in Door Frame', subtitle: 'Bed-Stuy · Attempted break-in', category: 'emergency', beforeAfter: 'before' },
  { filename: 'emergency/kicked-door-frame-repair-bed-stuy-after-01.webp', title: 'Reinforced Strike + Grade 1', subtitle: 'Bed-Stuy · Same door, repaired', category: 'emergency', beforeAfter: 'after' },

  // ── Security ──
  { filename: 'security/high-security-medeco-windsor-terrace-11215-01.webp', title: 'Medeco High-Security Deadbolt', subtitle: 'Windsor Terrace · Apartment', category: 'security' },
  { filename: 'security/cctv-install-greenpoint-11222-01.webp', title: 'CCTV Camera Install', subtitle: 'Greenpoint · Business entrance', category: 'security' },
  { filename: 'security/grade-1-deadbolt-upgrade-park-slope-before-01.webp', title: 'Grade 3 Entry Knob', subtitle: 'Park Slope · Before upgrade', category: 'security', beforeAfter: 'before' },
  { filename: 'security/grade-1-deadbolt-upgrade-park-slope-after-01.webp', title: 'Grade 1 Deadbolt', subtitle: 'Park Slope · After upgrade', category: 'security', beforeAfter: 'after' },

  // ── Eviction ──
  { filename: 'eviction/post-eviction-lock-change-east-new-york-11207-01.webp', title: 'Post-Eviction Lock Change', subtitle: 'East New York · Marshal warrant', category: 'eviction' },
  { filename: 'eviction/marshal-warrant-lock-change-brownsville-11212-01.webp', title: 'Marshal Warrant Lock Change', subtitle: 'Brownsville · Property recovery', category: 'eviction' },
]

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

/** Wrap a string to N chars, respecting word boundaries. */
function wrap(text, max) {
  const words = text.split(' ')
  const lines = []
  let cur = ''
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max) {
      if (cur) lines.push(cur)
      cur = w
    } else {
      cur = (cur + ' ' + w).trim()
    }
  }
  if (cur) lines.push(cur)
  return lines
}

function buildSvg(item) {
  const pal = PALETTE[item.category]
  const categoryLabel = item.category.toUpperCase()
  const badge = item.beforeAfter
    ? item.beforeAfter === 'before'
      ? { text: 'BEFORE', fill: '#FEE2E2', color: '#7F1D1D' }
      : { text: 'AFTER', fill: '#D1FAE5', color: '#064E3B' }
    : null

  const titleLines = wrap(item.title, 22)
  const subtitleLines = wrap(item.subtitle, 28)

  // Title rendered vertically-centered-ish, responsive to line count.
  const titleStartY = 520 - (titleLines.length - 1) * 45
  const subtitleStartY = titleStartY + titleLines.length * 90 + 40

  const titleTspans = titleLines
    .map(
      (line, i) =>
        `<tspan x="600" y="${titleStartY + i * 90}">${escapeXml(line)}</tspan>`
    )
    .join('')

  const subtitleTspans = subtitleLines
    .map(
      (line, i) =>
        `<tspan x="600" y="${subtitleStartY + i * 42}">${escapeXml(line)}</tspan>`
    )
    .join('')

  const badgeSvg = badge
    ? `
    <g transform="translate(1020, 60)">
      <rect x="0" y="0" width="140" height="44" rx="22" fill="${badge.fill}"/>
      <text x="70" y="29" font-family="DejaVu Sans, sans-serif" font-size="22" font-weight="bold" fill="${badge.color}" text-anchor="middle">${badge.text}</text>
    </g>`
    : ''

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${pal.base}"/>
        <stop offset="100%" stop-color="#0B1220"/>
      </linearGradient>
    </defs>
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

    <!-- Accent bar -->
    <rect x="0" y="0" width="${WIDTH}" height="14" fill="${pal.accent}"/>

    <!-- Category label -->
    <text x="60" y="100" font-family="DejaVu Sans, sans-serif" font-size="28" font-weight="bold" fill="${pal.accent}" letter-spacing="4">${escapeXml(categoryLabel)}</text>

    <!-- Brand mark -->
    <text x="60" y="1140" font-family="DejaVu Sans, sans-serif" font-size="26" font-weight="bold" fill="#F8FAFC" opacity="0.75">AVENUE LOCKSMITH</text>
    <text x="60" y="1170" font-family="DejaVu Sans, sans-serif" font-size="18" fill="#CBD5E1" opacity="0.75">Placeholder · replace with real photo</text>

    <!-- Decorative lock silhouette -->
    <g transform="translate(540, 200)" opacity="0.12" fill="#F8FAFC">
      <rect x="20" y="60" width="80" height="100" rx="8"/>
      <path d="M 30 60 C 30 20, 90 20, 90 60" stroke="#F8FAFC" stroke-width="10" fill="none"/>
      <circle cx="60" cy="100" r="10" fill="${pal.base}"/>
      <rect x="56" y="105" width="8" height="30" fill="${pal.base}"/>
    </g>

    <!-- Title -->
    <text font-family="DejaVu Sans, sans-serif" font-size="64" font-weight="bold" fill="#F8FAFC" text-anchor="middle">
      ${titleTspans}
    </text>

    <!-- Subtitle -->
    <text font-family="DejaVu Sans, sans-serif" font-size="30" fill="#CBD5E1" text-anchor="middle">
      ${subtitleTspans}
    </text>

    ${badgeSvg}
  </svg>`
}

async function generate(item) {
  const svg = buildSvg(item)
  const outPath = join(OUT_DIR, item.filename)
  await mkdir(dirname(outPath), { recursive: true })
  await sharp(Buffer.from(svg))
    .webp({ quality: 82, effort: 4 })
    .toFile(outPath)
  return outPath
}

async function main() {
  console.log(`Generating ${ITEMS.length} placeholders in ${OUT_DIR}`)
  for (const item of ITEMS) {
    const out = await generate(item)
    console.log(`  ✓ ${item.filename}`)
  }
  console.log('Done.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
