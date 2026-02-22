export const seoConcepts = [
  {
    id: "seo-001",
    term: "Keywords",
    definition:
      "Specific words and phrases that users type into search engines to find information. Keywords bridge the gap between what people are searching for and the content you provide to fill that need.",
    keyApplication:
      "Conduct keyword research using tools like Google Keyword Planner, Ahrefs, or SEMrush to identify high-volume, low-competition terms relevant to your business. Map keywords to specific pages to avoid cannibalization.",
    commonPitfall:
      "Targeting only high-volume head terms while ignoring long-tail keywords. Long-tail keywords (3+ words) typically have lower competition, higher intent, and better conversion rates despite lower individual search volume.",
    domain: "SEO",
    type: "flashcard",
  },
  {
    id: "seo-002",
    term: "Search Intent",
    definition:
      "The underlying purpose behind a user's search query, categorized into four types: informational (seeking knowledge), navigational (looking for a specific site), transactional (ready to buy), and commercial investigation (comparing options before purchase).",
    keyApplication:
      "Analyze the current SERP for your target keyword to understand what Google considers the dominant intent. Align your content format (blog post, product page, comparison table) to match. Mismatched intent leads to poor rankings regardless of content quality.",
    commonPitfall:
      "Creating a product page for an informational query or a blog post for a transactional keyword. If someone searches 'best running shoes,' they expect a comparison, not a single product listing.",
    domain: "SEO",
    type: "flashcard",
  },
  {
    id: "seo-003",
    term: "Domain Authority",
    definition:
      "A search engine ranking score developed by Moz (scored 1-100) that predicts how likely a website is to rank in search engine result pages. It is calculated by evaluating linking root domains, total number of links, and other factors.",
    keyApplication:
      "Use DA as a comparative metric against competitors rather than an absolute goal. Focus on building high-quality backlinks from authoritative sites in your niche to steadily increase DA. A DA above 50 is considered strong for most industries.",
    commonPitfall:
      "Treating Domain Authority as a Google ranking factor. DA is a third-party metric created by Moz, not used by Google's algorithm. Google uses PageRank and hundreds of other signals. DA is useful for benchmarking, not as a direct optimization target.",
    domain: "SEO",
    type: "flashcard",
  },
  {
    id: "seo-004",
    term: "Core Web Vitals",
    definition:
      "A set of three specific page experience metrics that Google uses as ranking signals: Largest Contentful Paint (LCP) measures loading performance, Interaction to Next Paint (INP) measures interactivity, and Cumulative Layout Shift (CLS) measures visual stability.",
    keyApplication:
      "Target LCP under 2.5 seconds, INP under 200 milliseconds, and CLS under 0.1. Use Google PageSpeed Insights and Chrome DevTools to diagnose issues. Optimize images, implement lazy loading, use a CDN, and minimize render-blocking JavaScript.",
    commonPitfall:
      "Testing only lab data (Lighthouse) without checking field data (Chrome User Experience Report). Lab data shows potential performance, but field data reflects real user experiences across diverse devices and network conditions.",
    domain: "SEO",
    type: "flashcard",
  },
  {
    id: "seo-005",
    term: "E-E-A-T",
    definition:
      "Experience, Expertise, Authoritativeness, and Trustworthiness. A framework from Google's Search Quality Rater Guidelines used to evaluate content quality. The extra 'E' for Experience was added in December 2022, emphasizing first-hand experience with the topic.",
    keyApplication:
      "Publish content written by qualified authors with visible credentials. Add author bios, cite authoritative sources, keep content accurate and updated, and demonstrate first-hand experience. Especially critical for YMYL (Your Money or Your Life) topics like health and finance.",
    commonPitfall:
      "Assuming E-E-A-T is a direct algorithmic ranking factor with a numerical score. It is a conceptual framework for human quality raters. There is no E-E-A-T score in Google's algorithm, but the signals it describes (backlinks, author authority, accuracy) are factored into various ranking systems.",
    domain: "SEO",
    type: "flashcard",
  },
  {
    id: "seo-006",
    term: "Backlinks",
    definition:
      "Inbound hyperlinks from one website to another. Backlinks function as votes of confidence in search engine algorithms. The quality, relevance, and diversity of a site's backlink profile are among the strongest ranking factors in Google's algorithm.",
    keyApplication:
      "Build backlinks through creating link-worthy content (original research, data studies, comprehensive guides), digital PR, guest posting on relevant authoritative sites, and broken link building. Focus on earning links from sites with high topical relevance to your domain.",
    commonPitfall:
      "Pursuing quantity over quality by buying links or using private blog networks (PBNs). Google's Penguin algorithm specifically targets manipulative link schemes. A single high-quality editorial link from a relevant, authoritative site outweighs hundreds of low-quality links.",
    domain: "SEO",
    type: "flashcard",
  },
  {
    id: "seo-007",
    term: "Crawlability",
    definition:
      "The ability of search engine bots (like Googlebot) to access and crawl through the pages of a website. If a page cannot be crawled, it cannot be indexed, and if it cannot be indexed, it cannot rank in search results regardless of content quality.",
    keyApplication:
      "Ensure a clean site architecture with logical internal linking, submit an XML sitemap via Google Search Console, use robots.txt wisely to guide crawl budget, fix broken links and redirect chains, and resolve duplicate content with canonical tags.",
    commonPitfall:
      "Accidentally blocking important pages via robots.txt or noindex tags during development and forgetting to remove them at launch. Always audit robots.txt and meta robots tags after a site migration or redesign.",
    domain: "SEO",
    type: "flashcard",
  },
  {
    id: "seo-008",
    term: "Schema Markup",
    definition:
      "Structured data vocabulary (from Schema.org) added to HTML that helps search engines understand the context and meaning of page content. It enables rich results like star ratings, FAQ dropdowns, recipe cards, and event listings in search results.",
    keyApplication:
      "Implement JSON-LD schema markup for your content type (Article, Product, FAQ, LocalBusiness, HowTo). Use Google's Rich Results Test to validate. Prioritize schema types that trigger rich snippets in your industry, as they significantly increase SERP click-through rates.",
    commonPitfall:
      "Adding schema markup that does not accurately represent on-page content, or marking up content that is hidden from users. Google penalizes misleading structured data and may issue manual actions or remove rich result eligibility for the entire site.",
    domain: "SEO",
    type: "flashcard",
  },
  {
    id: "seo-scenario-001",
    term: "Organic CTR Estimation",
    definition:
      "Calculating expected organic clicks based on search volume and position-based click-through rates from SERP ranking data.",
    keyApplication:
      "Use position-based CTR benchmarks to forecast organic traffic and set realistic SEO KPIs for client reporting.",
    commonPitfall:
      "Assuming CTR is uniform across all positions. CTR drops dramatically after position 1, and SERP features like featured snippets can significantly reduce organic CTR for all positions.",
    domain: "SEO",
    type: "scenario",
    narrative:
      "Your client's primary keyword has a monthly search volume of 12,000. After an SEO campaign, their page has moved from position 8 to position 3. Industry benchmarks show that position 3 has an average organic CTR of 7.5%. Calculate the expected monthly organic clicks from this single keyword at position 3.",
    variables: {
      monthlySearchVolume: 12000,
      currentPosition: 3,
      ctrAtPosition3: 0.075,
    },
    correctAnswer: 900,
    unit: "clicks/month",
    formula: "Expected Clicks = Monthly Search Volume x CTR at Position",
    workedSolution:
      "Expected Clicks = 12,000 x 7.5% = 12,000 x 0.075 = 900 clicks per month. At position 8 (approx 1.5% CTR), the page would have received only about 180 clicks, so the move to position 3 represents a 5x increase in estimated organic traffic from this keyword.",
    difficulty: "Beginner",
  },
  {
    id: "seo-scenario-002",
    term: "Keyword Difficulty Assessment",
    definition:
      "Evaluating the competitive landscape for a keyword by analyzing the average Domain Authority of the top-ranking pages and estimating the number of quality backlinks needed to compete.",
    keyApplication:
      "Prioritize keyword targets based on realistic assessment of the effort and link building required to rank, balancing difficulty against potential traffic value.",
    commonPitfall:
      "Relying solely on a single tool's keyword difficulty score. Different tools use different methodologies. Always manually review the SERP to validate automated difficulty scores.",
    domain: "SEO",
    type: "scenario",
    narrative:
      "You are evaluating a target keyword. The top 10 ranking pages have an average of 45 referring domains each. Your page currently has 12 referring domains. A backlink gap analysis suggests you need to match at least 80% of the average competitor's referring domains to have a realistic chance of reaching page 1. If your link building campaign costs $150 per quality backlink acquired, calculate the total referring domains you need and the estimated link building budget.",
    variables: {
      avgCompetitorReferringDomains: 45,
      currentReferringDomains: 12,
      targetPercentage: 0.80,
      costPerBacklink: 150,
    },
    correctAnswer: 3600,
    unit: "dollars",
    formula:
      "Target Referring Domains = Avg Competitor RDs x Target%; Links Needed = Target RDs - Current RDs; Budget = Links Needed x Cost Per Link",
    workedSolution:
      "Target Referring Domains = 45 x 80% = 36. Links Needed = 36 - 12 = 24 new referring domains. Budget = 24 x $150 = $3,600. This gives a realistic estimate of the investment needed to become competitive for this keyword.",
    difficulty: "Intermediate",
  },
  {
    id: "seo-scenario-003",
    term: "Page Speed Revenue Impact",
    definition:
      "Quantifying the business impact of page load time improvements on conversion rates and revenue, based on established research correlating speed with user behavior.",
    keyApplication:
      "Build a business case for Core Web Vitals improvements by tying page speed gains to projected revenue increases, making technical SEO investment tangible to stakeholders.",
    commonPitfall:
      "Assuming a perfectly linear relationship between speed and conversions. The impact is most dramatic in the first few seconds of improvement (e.g., going from 5s to 3s has more impact than going from 3s to 1s).",
    domain: "SEO",
    type: "scenario",
    narrative:
      "An e-commerce site currently loads in 4.8 seconds and receives 200,000 monthly visitors with a 2.0% conversion rate and $85 average order value. Research shows that for every 1 second of load time improvement, conversion rate increases by approximately 0.3 percentage points. The development team proposes reducing load time to 2.8 seconds (a 2-second improvement). Calculate the projected monthly revenue increase from this speed improvement.",
    variables: {
      monthlyVisitors: 200000,
      currentConversionRate: 0.02,
      avgOrderValue: 85,
      speedImprovement: 2,
      conversionLiftPerSecond: 0.003,
    },
    correctAnswer: 102000,
    unit: "dollars/month",
    formula:
      "New CR = Current CR + (Speed Improvement x Lift Per Second); Revenue Increase = Monthly Visitors x (New CR - Old CR) x AOV",
    workedSolution:
      "New Conversion Rate = 2.0% + (2 seconds x 0.3 percentage points) = 2.0% + 0.6% = 2.6%. Current Monthly Revenue = 200,000 x 2.0% x $85 = $340,000. New Monthly Revenue = 200,000 x 2.6% x $85 = $442,000. Projected Monthly Revenue Increase = $442,000 - $340,000 = $102,000 per month.",
    difficulty: "Advanced",
  },
];
