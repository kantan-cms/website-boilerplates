# Website Boilerplates

A collection of Next.js website boilerplates with AI-powered prompt generation for quick website development.

## Features

- **Multiple website types**: Landing pages, multi-page websites, and blogs
- **Kantan CMS Integration**: Built-in functions for content management
- **AI Prompt Generator**: Automated prompt creation for consistent website generation
- **Tailwind CSS**: Modern styling with utility-first CSS
- **TypeScript**: Type-safe development
- **Next.js 15**: Latest framework features

## Directory Structure

```
website-boilerplates/
├── .gitignore                 # Git ignore rules for all Next.js projects
├── prompt_generator.py        # AI prompt generation tool
├── saas-startup/             # Example SaaS startup website
└── [your-projects]/          # Additional website projects
```

## Prompt Generator Usage

The `prompt_generator.py` script helps generate consistent AI prompts for creating websites with specific requirements.

### Website Types

The generator supports three website types via the `type_website` parameter:

#### 1. Landing Page (`landing_page`)
- Single-page layout with smooth scrolling
- Sections organized in `src/components/sections/`
- Contact form integration with Kantan CMS
- Perfect for: Product launches, campaigns, lead generation

#### 2. Multi-Page Website (`website`)
- Traditional multi-page structure
- Pages: Home, About, Services, Work, News, Contact
- CMS integration for news/blog articles and portfolio items
- Perfect for: Corporate sites, agencies, service businesses

#### 3. Blog (`blog`)
- Content-focused with post management
- Pages: Home, About, Profile, Posts, Categories
- Full CMS integration for posts, categories, and tags
- Perfect for: Personal blogs, publications, content sites

### Example Usage

```python
from prompt_generator import WebsitePromptGenerator, WebsiteRequirements

generator = WebsitePromptGenerator()

# Create a landing page
requirements = WebsiteRequirements(
    business_type="SaaS startup",
    target_audience="small business owners",
    primary_goal="generate leads and conversions",
    content_focus="product features and benefits",
    brand_personality="modern, innovative, trustworthy",
    type_website="landing_page"  # NEW: Specify website type
)

prompt = generator.generate_prompt(
    requirements,
    project_name="saas-startup"
)
print(prompt)
```

### Available Parameters

**WebsiteRequirements:**
- `business_type`: Type of business (e.g., "SaaS startup", "food blog")
- `target_audience`: Who the site is for (e.g., "small business owners")
- `primary_goal`: Main objective (e.g., "generate leads")
- `content_focus`: What content emphasizes (e.g., "product features")
- `brand_personality`: Brand voice (e.g., "modern, innovative")
- `type_website`: Site structure - `'landing_page'`, `'website'`, or `'blog'`

**generate_prompt() options:**
- `template_category`: Business category (auto-selected if not provided)
- `template_style`: Specific template (auto-selected if not provided)
- `visual_style`: UI style (auto-selected if not provided)
- `layout_approach`: Layout type (auto-selected if not provided)
- `project_name`: Directory name for the project

## Kantan CMS Integration

All boilerplates include pre-built CMS integration functions in `src/libs/`:

### getSortedCollectionsData
Retrieve all records from a collection:
```tsx
import { getSortedCollectionsData } from '@/libs/getSortedPostsData';
const items = getSortedCollectionsData('COLLECTION_NAME', 'date');
```

### getCollectionsRecord
Get a single record by slug:
```tsx
import { getCollectionsRecord } from '@/libs/getCollectionsRecord';
const {slug} = await params;
const item = getCollectionsRecord('COLLECTION_NAME', slug);
```

### postFormData
Submit form data to Kantan CMS:
```tsx
import { postFormData } from '@/libs/postFormData';
const result = await postFormData({ name, email, message });
```

## Template Styles

### Business Corporate
- `clean_corporate`: Conservative, trust-focused
- `modern_business`: Contemporary with personality
- `startup_saas`: Conversion-focused, growth-oriented

### Creative Portfolio
- `minimalist_portfolio`: Whitespace-heavy, elegant
- `bold_creative`: Experimental, vibrant
- `photography_showcase`: Image-first, visual

### E-commerce
- `clean_marketplace`: Product-focused, organized
- `luxury_retail`: Premium, sophisticated
- `modern_shop`: Trendy, conversion-optimized

### Content/Blog
- `magazine_style`: Multi-column, editorial
- `personal_blog`: Cozy, story-focused
- `news_publication`: Structured, authoritative

### Service Based
- `agency_consultancy`: Results-focused, expertise-driven
- `restaurant_hospitality`: Atmospheric, experiential
- `healthcare_professional`: Trustworthy, informational

## Visual Styles

- **Brutalist**: Bold typography, high contrast
- **Glassmorphism**: Frosted glass effects, modern depth
- **Neumorphism**: Soft shadows, tactile elements
- **Flat Material**: Clean, functional, minimal
- **Retro Vintage**: Nostalgic, classic typography

## Layout Approaches

- **Grid Based**: Structured, organized, systematic
- **Asymmetrical**: Dynamic, modern, creative
- **Single Page Scrolling**: Narrative, continuous flow
- **Multi Section**: Traditional navigation, hierarchical

## Getting Started

### 1. Generate a prompt
```bash
python3 prompt_generator.py
```

### 2. Copy the generated prompt to your AI assistant

### 3. AI assistant will create your website structure

### 4. Install dependencies
```bash
cd your-project-name
npm install
```

### 5. Run development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file in your project:

```env
NEXT_PUBLIC_CMS_API_URL=your-kantan-cms-url
NEXT_PUBLIC_CMS_TOKEN=your-cms-token
```

## Contributing

When adding new boilerplates:
1. Follow the existing structure
2. Include Kantan CMS integration functions
3. Update the prompt generator if needed
4. Add examples to the documentation

## License

MIT
