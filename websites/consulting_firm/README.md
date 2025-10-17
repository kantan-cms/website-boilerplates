# Corporate Consultancy Website

A professional multi-page website for a business consulting firm, built with Next.js 15 and integrated with Kantan CMS. This website features a modern business aesthetic with flat material design, targeting enterprise executives and decision makers.

## Design Specifications

- **Template Style**: Modern Business (sleek, professional with personality, contemporary)
- **Visual Style**: Flat Material (clean, simple, functional, minimal visual hierarchy)
- **Layout Approach**: Grid Based (structured, organized, systematic layout with clear grid system)
- **Brand Personality**: Professional, trustworthy, innovative

## Features

### Multi-Page Structure

1. **Home** (`/`) - Landing page with hero, expertise overview, and CTA
2. **About Us** (`/about`) - Company story, mission, values, and team information
3. **Services** (`/services`) - Detailed service offerings with features and benefits
4. **Our Work** (`/work`) - Portfolio of case studies and client success stories
5. **News** (`/news`) - Blog/news listing with CMS integration
6. **News Detail** (`/news/[slug]`) - Individual article pages
7. **Contact** (`/contact`) - Contact form and company information

### Key Components

#### Layout Components
- **Header** - Sticky navigation with mobile menu
- **Footer** - Multi-column footer with links and contact info

#### Section Components
- **Hero** - Prominent hero section with CTAs and statistics
- **Expertise** - Service overview with icon grid
- **CTA** - Call-to-action sections throughout

### Design System

The website implements a flat material design system with:

- **Color Palette**:
  - Primary: Blue (#1565c0)
  - Secondary: Slate gray (#37474f)
  - Accent: Teal (#00897b)
  - Surface: White (#ffffff)

- **Typography**:
  - Font: Geist Sans (modern, professional)
  - Heading hierarchy with clear size and weight distinctions
  - Readable body text with proper line height

- **Components**:
  - Cards with subtle shadows
  - Material elevation system
  - Flat, minimal buttons with clear states
  - Grid-based layouts with consistent spacing

### CMS Integration

The website integrates with Kantan CMS for dynamic content:

#### News/Blog System
- **Listing Page**: Uses `getSortedCollectionsData('news', 'publishDate')` to display all articles
- **Detail Pages**: Uses `getCollectionsRecord('news', slug)` for individual articles
- **Dynamic Routing**: Implements Next.js 15 dynamic routes with proper metadata generation

#### Contact Form
- Uses `postFormData()` to submit form data to Kantan CMS
- Includes validation and error handling
- Success/error status messages

### Content Structure

The `contents/news/` directory contains markdown files with frontmatter:

```markdown
---
title: "Article Title"
excerpt: "Brief description"
publishDate: "2024-01-15"
category: "Category Name"
author: "Author Name"
readTime: "X min read"
---

Article content in markdown...
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
consulting_firm/
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── work/page.tsx
│   │   ├── news/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Expertise.tsx
│   │   │   └── CTA.tsx
│   │   └── index.ts
│   └── libs/
│       ├── getSortedPostsData.ts
│       ├── getCollectionsRecord.ts
│       └── postFormData.ts
├── contents/
│   └── news/
│       ├── digital-transformation-trends-2024.md
│       ├── strategic-planning-uncertain-times.md
│       └── operational-excellence-manufacturing.md
└── README.md
```

## Customization

### Branding

Update the following files to customize branding:
- Colors in `src/app/globals.css` (CSS variables)
- Logo and company name in `src/components/Header.tsx` and `src/components/Footer.tsx`
- Metadata in `src/app/layout.tsx`

### Content

- Add/edit pages in `src/app/`
- Add news articles in `contents/news/`
- Update service descriptions in `src/app/services/page.tsx`
- Update case studies in `src/app/work/page.tsx`

### Styling

The design system uses:
- Tailwind CSS for utility classes
- Custom CSS variables for theming
- Material design elevation system
- Grid-based layouts

## SEO

The website includes:
- Proper metadata configuration
- Dynamic metadata for blog posts
- Semantic HTML structure
- Open Graph tags
- Twitter card support

## Performance

Built with Next.js 15 features:
- Server-side rendering
- Static generation where appropriate
- Image optimization
- Font optimization with Geist fonts

## License

This project is part of the Kantan CMS website boilerplate collection.
