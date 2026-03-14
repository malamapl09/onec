# ONEC — Organización Nacional de Empresas Comerciales

Marketing website for ONEC, a Dominican Republic nonprofit trade association representing the organized retail sector since 1997.

## Stack

- **Framework:** Astro 6 (static-first, islands architecture)
- **Styling:** Tailwind CSS v4
- **CMS:** Sanity (embedded Studio at `/admin`)
- **Deployment:** Vercel
- **Fonts:** Inter (body) + Plus Jakarta Sans (headings)
- **Language:** Spanish only

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero banner, stats, services overview, member logos, latest news |
| `/nosotros` | About — history timeline, mission/vision, leadership team |
| `/membresia` | Membership — benefits, sectors, how to join, member directory |
| `/servicios` | Services — service cards, key initiatives, expert profiles |
| `/noticias` | News listing with category filter and pagination |
| `/noticias/[slug]` | Individual article pages |
| `/comites` | Working committees |
| `/contacto` | Contact form + map + office info |
| `/politica-privacidad` | Privacy policy |
| `/admin` | Sanity Studio (CMS) |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

The site runs at `http://localhost:4321`.

## Environment Variables

Copy `.env.example` to `.env` and fill in:

```
PUBLIC_SANITY_PROJECT_ID=   # Sanity project ID
PUBLIC_SANITY_DATASET=      # Sanity dataset (default: production)
```

## Project Structure

```
src/
├── components/
│   ├── global/        # Header, Footer, Breadcrumbs, MobileMenu
│   ├── home/          # Hero, StatsBar, ServicesOverview, MemberLogos, LatestNews, JoinCTA
│   ├── about/         # Timeline, MissionVision, LeadershipGrid
│   ├── membership/    # BenefitsGrid, SectorCards, HowToJoin, MemberDirectory
│   ├── services/      # ServiceCard, ExpertProfile, InitiativeCard
│   ├── news/          # ArticleCard, ArticleContent, CategoryFilter, Pagination
│   ├── committees/    # CommitteeCard
│   ├── contact/       # ContactForm, MapEmbed
│   └── ui/            # Button, Card, SectionHeading, Badge, Container, SanityImage
├── layouts/           # BaseLayout, PageLayout, ArticleLayout
├── pages/             # All routes
├── data/              # Shared data (navigation links)
├── lib/               # Sanity client, SEO helpers, utilities
└── styles/            # Global CSS with Tailwind v4 theme
sanity/
├── schemas/           # 10 content models (article, teamMember, memberCompany, etc.)
└── lib/               # GROQ queries
public/
└── images/            # Banners, logos, expert photos, committee images, member strips
```

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site |
| `npm run preview` | Preview production build locally |

## Deployment

The site deploys to Vercel. Push to `main` to trigger a build.

Old WordPress URL redirects are configured in `vercel.json`.
