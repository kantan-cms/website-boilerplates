from dataclasses import dataclass
from typing import Dict, Literal


@dataclass
class WebsiteRequirements:
    business_type: str
    target_audience: str
    primary_goal: str
    content_focus: str
    brand_personality: str
    type_website: Literal['landing_page', 'website', 'blog'] = 'website'


class WebsitePromptGenerator:
    def __init__(self):
        self.templates = {
            "business_corporate": {
                "clean_corporate": "conservative, trust-focused, professional",
                "modern_business": "sleek, professional with personality, contemporary",
                "startup_saas": "conversion-focused, bold CTAs, growth-oriented",
            },
            "creative_portfolio": {
                "minimalist_portfolio": "whitespace-heavy, typography-focused, elegant",
                "bold_creative": "experimental layouts, vibrant colors, artistic",
                "photography_showcase": "image-first, gallery-style, visual storytelling",
            },
            "ecommerce": {
                "clean_marketplace": "product-grid focused, organized, user-friendly",
                "luxury_retail": "premium feel, elegant spacing, sophisticated",
                "modern_shop": "trendy, social-proof heavy, conversion-optimized",
            },
            "content_blog": {
                "magazine_style": "multi-column, content-rich, editorial",
                "personal_blog": "cozy, readable, story-focused, intimate",
                "news_publication": "structured, information-dense, authoritative",
            },
            "service_based": {
                "agency_consultancy": "results-focused, case studies, expertise-driven",
                "restaurant_hospitality": "atmospheric, menu-focused, experiential",
                "healthcare_professional": "trustworthy, informational, credible",
            },
        }

        self.visual_styles = {
            "brutalist": "bold typography, high contrast, geometric shapes, raw aesthetic",
            "glassmorphism": "soft translucent elements, frosted glass effects, modern depth",
            "neumorphism": "soft shadows, subtle depth, tactile interface elements",
            "flat_material": "clean, simple, functional, minimal visual hierarchy",
            "retro_vintage": "nostalgic color palettes, classic typography, timeless feel",
        }

        self.layout_approaches = {
            "grid_based": {
                "description": "structured, organized, systematic layout with clear grid system",
                "characteristics": "consistent spacing, aligned elements, predictable structure",
            },
            "asymmetrical": {
                "description": "dynamic, modern, visually interesting with intentional imbalance",
                "characteristics": "varied element sizes, creative positioning, visual tension",
            },
            "single_page_scrolling": {
                "description": "narrative flow, continuous scrolling experience, story-driven",
                "characteristics": "smooth transitions, progressive disclosure, guided journey",
            },
            "multi_section": {
                "description": "traditional navigation, distinct page sections, organized content",
                "characteristics": "clear navigation, separate content areas, hierarchical structure",
            },
        }

    def generate_prompt(
        self,
        requirements: WebsiteRequirements,
        template_category: str = None,
        template_style: str = None,
        visual_style: str = None,
        layout_approach: str = None,
        project_name: str = None,
    ) -> str:
        """
        Generate a website creation prompt based on requirements and style choices.
        If style parameters are None, they will be auto-selected based on requirements.
        """

        # Auto-select template if not provided
        if not template_category or not template_style:
            template_category, template_style = self._select_template(requirements)

        # Auto-select visual style if not provided
        if not visual_style:
            visual_style = self._select_visual_style(requirements, template_category)

        # Auto-select layout approach if not provided
        if not layout_approach:
            layout_approach = self._select_layout_approach(
                requirements, template_category
            )

        # Get template description
        template_desc = self.templates[template_category][template_style]
        visual_desc = self.visual_styles[visual_style]
        layout_info = self.layout_approaches[layout_approach]

        # Generate base prompt
        prompt = f"""Create a website for a {requirements.business_type} targeting {requirements.target_audience}. at `{project_name or 'project-name'}`

BUSINESS REQUIREMENTS:
- Primary Goal: {requirements.primary_goal}
- Content Focus: {requirements.content_focus}
- Brand Personality: {requirements.brand_personality}

DESIGN SPECIFICATIONS:
- Template Style: {template_style.replace("_", " ").title()} ({template_desc})
- Visual Style: {visual_style.replace("_", " ").title()} ({visual_desc})
- Layout Approach: {layout_approach.replace("_", " ").title()} ({layout_info["description"]})
- Layout Characteristics: {layout_info["characteristics"]}

IMPLEMENTATION GUIDELINES:
1. Use the {template_style.replace("_", " ")} boilerplate as your foundation
2. Apply {visual_style.replace("_", " ")} visual styling throughout
3. Implement {layout_approach.replace("_", " ")} layout structure
4. Ensure the design aligns with the {requirements.brand_personality} brand personality
5. Optimize for {requirements.primary_goal}
6. Focus content around {requirements.content_focus}

SECTIONS TO INCLUDE:
- Hero section optimized for {requirements.primary_goal}
- About/introduction section highlighting {requirements.content_focus}
- Main content area suitable for {requirements.target_audience}
- Call-to-action sections aligned with {requirements.primary_goal}
- Contact/footer section

Modify the selected boilerplate to match these specifications while maintaining visual consistency and user experience best practices."""

        # Add website type-specific instructions
        website_type_instructions = self._get_website_type_instructions(
            requirements.type_website, project_name or 'project-name'
        )
        if website_type_instructions:
            prompt += f"\n\n{website_type_instructions}"

        return prompt

    def _select_template(self, requirements: WebsiteRequirements) -> tuple:
        """Auto-select template based on business requirements"""
        business_keywords = requirements.business_type.lower()

        # Simple keyword matching for demo - you could make this more sophisticated
        if any(
            word in business_keywords for word in ["restaurant", "cafe", "hotel", "spa"]
        ):
            return "service_based", "restaurant_hospitality"
        elif any(
            word in business_keywords
            for word in ["shop", "store", "retail", "ecommerce"]
        ):
            return "ecommerce", "modern_shop"
        elif any(
            word in business_keywords
            for word in ["blog", "news", "magazine", "publication"]
        ):
            return "content_blog", "magazine_style"
        elif any(
            word in business_keywords
            for word in ["portfolio", "artist", "designer", "photographer"]
        ):
            return "creative_portfolio", "minimalist_portfolio"
        elif any(word in business_keywords for word in ["startup", "saas", "tech"]):
            return "business_corporate", "startup_saas"
        else:
            return "business_corporate", "modern_business"

    def _select_visual_style(
        self, requirements: WebsiteRequirements, template_category: str
    ) -> str:
        """Auto-select visual style based on brand personality and template"""
        personality = requirements.brand_personality.lower()

        if "modern" in personality or "innovative" in personality:
            return "glassmorphism"
        elif "bold" in personality or "edgy" in personality:
            return "brutalist"
        elif "elegant" in personality or "luxury" in personality:
            return "neumorphism"
        elif "vintage" in personality or "classic" in personality:
            return "retro_vintage"
        else:
            return "flat_material"

    def _select_layout_approach(
        self, requirements: WebsiteRequirements, template_category: str
    ) -> str:
        """Auto-select layout approach based on content focus and template"""
        content_focus = requirements.content_focus.lower()

        if "story" in content_focus or "journey" in content_focus:
            return "single_page_scrolling"
        elif "creative" in content_focus or "artistic" in content_focus:
            return "asymmetrical"
        elif "information" in content_focus or "complex" in content_focus:
            return "multi_section"
        else:
            return "grid_based"

    def _get_website_type_instructions(self, type_website: str, project_name: str) -> str:
        """Generate website type-specific implementation instructions"""

        cms_functions_guide = """
## KANTAN CMS INTEGRATION

The following CMS integration functions are available in src/libs/ directory:

**getSortedCollectionsData(collection, sortKey?)** - Retrieve all records from a collection
```tsx
import { getSortedCollectionsData } from '@/libs/getSortedPostsData';
const items = getSortedCollectionsData('COLLECTION_NAME', 'date');
```

**getCollectionsRecord(collection, slug)** - Retrieve a single record by slug
```tsx
import { getCollectionsRecord } from '@/libs/getCollectionsRecord';
const {slug} = await params;
const item = getCollectionsRecord('COLLECTION_NAME', slug) as Post | null;
```

**postFormData(formData, token?)** - Submit form data to Kantan CMS
```tsx
import { postFormData } from '@/libs/postFormData';
const result = await postFormData({ name, email, message });
```"""

        if type_website == 'landing_page':
            return f"""
## WEBSITE TYPE: LANDING PAGE

Create a single-page website with all content on one page using smooth scrolling navigation.

### STRUCTURE REQUIREMENTS:
1. **Single Page Layout**: Build everything on the home page (src/app/page.tsx)
2. **Reusable Sections**: Create modular section components in `{project_name}/src/components/sections/`
3. **Section Organization**: Each major content block should be its own component:
   - HeroSection.tsx
   - FeaturesSection.tsx
   - BenefitsSection.tsx
   - TestimonialsSection.tsx
   - PricingSection.tsx (if applicable)
   - ContactSection.tsx
   - Any other relevant sections

### CMS INTEGRATION:
- **Contact Form**: Use the `postFormData` function to submit contact form data to Kantan CMS
- Implement form validation and success/error feedback
- Store form submissions in Kantan CMS for lead management

{cms_functions_guide}

### IMPLEMENTATION NOTES:
- Use anchor links (#section-id) for smooth scrolling navigation
- Implement intersection observer for scroll animations
- Create a sticky navigation that highlights the current section
- Ensure mobile responsiveness for single-page scroll experience"""

        elif type_website == 'website':
            return f"""
## WEBSITE TYPE: MULTI-PAGE WEBSITE

Create a comprehensive multi-page website with traditional navigation structure.

### PAGE STRUCTURE:
Create the following pages in src/app/:
1. **Home** (page.tsx) - Landing page with overview
2. **About Us** (about/page.tsx) - Company story, mission, values
3. **Services** (services/page.tsx) - Service offerings with details
4. **Our Work / Portfolio** (work/page.tsx) - Case studies and projects
5. **News / Blog** (news/page.tsx) - Latest updates and articles
6. **Contact** (contact/page.tsx) - Contact form and information
7. **Additional Pages** as needed (Team, Careers, FAQ, etc.)

### SECTION COMPONENTS:
Create reusable sections in `{project_name}/src/components/sections/`:
- Each page should utilize modular section components
- Share common sections (Hero, CTA, Newsletter) across pages
- Build page-specific sections for unique content

### CMS INTEGRATION:
- **News/Blog Listing**: Use `getSortedCollectionsData` to fetch and display articles
  ```tsx
  const articles = getSortedCollectionsData('news', 'publishDate');
  ```
- **Individual Articles**: Use `getCollectionsRecord` for article detail pages
  ```tsx
  const article = getCollectionsRecord('news', slug);
  ```
- **Portfolio/Work Items**: Fetch case studies or projects from Kantan CMS
- **Contact Form**: Use `postFormData` for contact form submissions
  ```tsx
  const result = await postFormData({{{{ name, email, message }}}});
  ```

{cms_functions_guide}

### IMPLEMENTATION NOTES:
- Create a consistent layout with shared header/footer components
- Implement breadcrumb navigation for better UX
- Use Next.js dynamic routes for CMS-driven pages (e.g., news/[slug])
- Implement proper metadata for SEO on each page"""

        elif type_website == 'blog':
            return f"""
## WEBSITE TYPE: BLOG / CONTENT PUBLICATION

Create a blog-focused website with content management integration.

### PAGE STRUCTURE:
Create the following pages in src/app/:
1. **Home** (page.tsx) - Featured posts and latest articles
2. **About** (about/page.tsx) - About the blog/author
3. **Profile** (profile/page.tsx) - Author information and bio
4. **Blog Archive** (posts/page.tsx) - All posts with filtering/pagination
5. **Individual Post** (posts/[slug]/page.tsx) - Full article view
6. **Categories** (categories/[category]/page.tsx) - Posts by category
7. **Tags** (tags/[tag]/page.tsx) - Posts by tag (optional)

### SECTION COMPONENTS:
Create reusable sections in `{project_name}/src/components/sections/`:
- FeaturedPostsSection.tsx - Highlight top articles
- LatestPostsSection.tsx - Recent blog posts grid
- CategoryListSection.tsx - Browse by category
- NewsletterSection.tsx - Email signup
- RelatedPostsSection.tsx - Suggested reading
- AuthorBioSection.tsx - Author information

### CMS INTEGRATION:
All blog content should be managed through Kantan CMS:

- **Homepage**: Fetch featured and latest posts
  ```tsx
  const featuredPosts = getSortedCollectionsData('posts', 'featured');
  const latestPosts = getSortedCollectionsData('posts', 'publishDate');
  ```

- **Blog Archive**: List all published posts with sorting and filtering
  ```tsx
  const allPosts = getSortedCollectionsData('posts', 'publishDate');
  ```

- **Individual Posts**: Dynamic routes for each article
  ```tsx
  const post = getCollectionsRecord('posts', slug);
  ```

- **Newsletter Signup**: Use `postFormData` for email subscriptions
  ```tsx
  const result = await postFormData({{{{ email, name }}}}, 'newsletter');
  ```

{cms_functions_guide}

### IMPLEMENTATION NOTES:
- Implement post metadata (reading time, publish date, author, categories)
- Add social sharing buttons for each post
- Create a search functionality for posts
- Implement pagination or infinite scroll for post listings
- Add RSS feed support
- Include post navigation (previous/next post)
- Consider adding comments integration
- Implement related posts based on categories/tags"""

        else:
            return ""

    def get_available_options(self) -> Dict:
        """Return all available template and style options"""
        return {
            "templates": self.templates,
            "visual_styles": self.visual_styles,
            "layout_approaches": self.layout_approaches,
        }


# Example usage
if __name__ == "__main__":
    generator = WebsitePromptGenerator()

    # Example 1: Tech Startup Landing Page
    requirements1 = WebsiteRequirements(
        business_type="SaaS startup",
        target_audience="small business owners",
        primary_goal="generate leads and conversions",
        content_focus="product features and benefits",
        brand_personality="modern, innovative, trustworthy",
        type_website="landing_page",
    )

    prompt1 = generator.generate_prompt(requirements1, project_name="saas-startup")
    print("=== EXAMPLE 1: TECH STARTUP LANDING PAGE ===")
    print(prompt1)
    print("\n" + "=" * 80 + "\n")

    # Example 2: Photography Portfolio Website
    requirements2 = WebsiteRequirements(
        business_type="freelance photographer",
        target_audience="wedding couples and event planners",
        primary_goal="showcase portfolio and book clients",
        content_focus="visual storytelling and artistic work",
        brand_personality="elegant, artistic, professional",
        type_website="website",
    )

    prompt2 = generator.generate_prompt(
        requirements2,
        template_category="creative_portfolio",
        template_style="photography_showcase",
        visual_style="neumorphism",
        layout_approach="asymmetrical",
        project_name="photography-portfolio",
    )
    print("=== EXAMPLE 2: PHOTOGRAPHER PORTFOLIO WEBSITE ===")
    print(prompt2)
    print("\n" + "=" * 80 + "\n")

    # Example 3: Food Blog
    requirements3 = WebsiteRequirements(
        business_type="food blog",
        target_audience="home cooks and food enthusiasts",
        primary_goal="build audience and share recipes",
        content_focus="recipes, cooking tips, and food photography",
        brand_personality="friendly, approachable, inspiring",
        type_website="blog",
    )

    prompt3 = generator.generate_prompt(requirements3, project_name="food-blog")
    print("=== EXAMPLE 3: FOOD BLOG ===")
    print(prompt3)
    print("\n" + "=" * 80 + "\n")

    # Example 4: Restaurant Multi-page Website
    requirements4 = WebsiteRequirements(
        business_type="family restaurant",
        target_audience="local families and food enthusiasts",
        primary_goal="increase reservations and online orders",
        content_focus="menu items and dining experience",
        brand_personality="warm, welcoming, traditional",
        type_website="website",
    )

    prompt4 = generator.generate_prompt(requirements4, project_name="restaurant-site")
    print("=== EXAMPLE 4: FAMILY RESTAURANT WEBSITE ===")
    print(prompt4)
