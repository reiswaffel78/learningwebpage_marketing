export const conversionOptimizationConcepts = [
  {
    id: "co-001",
    term: "A/B Testing (Split Testing)",
    definition:
      "A controlled experiment in which two versions of a webpage, email, or ad (A = control, B = variant) are shown to randomized user segments simultaneously to measure which version achieves better performance on a defined metric. A/B testing replaces opinion-based decisions with statistically valid data.",
    keyApplication:
      "Test one element at a time: headline, CTA copy, button color, hero image, form length, or social proof placement. Prioritize tests using the PIE framework (Potential impact, Importance of the page, Ease of implementation). Run tests for a minimum of 2 business cycles (typically 2 weeks) and until statistical significance (95% confidence) is reached.",
    commonPitfall:
      "Running too many simultaneous tests on the same page, which creates interaction effects between tests and invalidates results. Tests on the same user journey must be sequenced or use multivariate testing methodology with appropriate sample size calculations for the additional complexity.",
    domain: "Conversion Optimization",
    type: "flashcard",
  },
  {
    id: "co-002",
    term: "Landing Page Optimization",
    definition:
      "The systematic process of improving the design, copy, and user experience of a dedicated landing page to increase the percentage of visitors who complete the desired action (conversion). Effective landing pages align messaging with ad copy (message match), remove distractions (single CTA), and establish trust through social proof and credibility indicators.",
    keyApplication:
      "Apply the LIFT model to audit landing pages: Value Proposition (is the benefit clear and compelling?), Relevance (does the page match the visitor's expectations?), Clarity (is the page easy to understand?), Urgency (is there a reason to act now?), Anxiety (what concerns might stop conversion?), Distraction (what else is competing for attention?). Address the highest-impact LIFT factor first.",
    commonPitfall:
      "Sending paid traffic to a homepage rather than a dedicated landing page. Homepages serve multiple audiences and goals simultaneously. A dedicated landing page with a single conversion goal consistently outperforms homepages for paid traffic by 2-5x in conversion rate.",
    domain: "Conversion Optimization",
    type: "flashcard",
  },
  {
    id: "co-003",
    term: "Heatmaps & Session Recordings",
    definition:
      "Visual analytics tools that reveal user behavior on web pages. Heatmaps aggregate data to show where users click (click maps), how far they scroll (scroll maps), and where they move their cursor (move maps). Session recordings capture individual user sessions as video replays. Tools include Hotjar, FullStory, and Microsoft Clarity.",
    keyApplication:
      "Use heatmaps to identify whether CTAs are visible in the scroll range of most visitors, whether users are clicking on non-clickable elements (indicating navigation confusion), and which page sections receive most attention. Use session recordings to diagnose specific friction points, form abandonment behaviors, and mobile UX issues invisible in aggregate analytics.",
    commonPitfall:
      "Drawing conclusions from heatmaps with insufficient sample size. A click map based on 50 sessions is statistically meaningless. Ensure a minimum of 2,000-5,000 sessions per page for reliable heatmap patterns. Also beware of heatmap data on pages that have recently changed layout, as historical maps may not reflect current page structure.",
    domain: "Conversion Optimization",
    type: "flashcard",
  },
  {
    id: "co-004",
    term: "Friction & Resistance",
    definition:
      "Friction refers to any element in the conversion process that creates difficulty, confusion, or effort for the user, reducing the likelihood of completing the desired action. Sources of friction include complex forms, unclear navigation, slow load times, confusing copy, and hidden costs. Reducing friction is often the highest-impact CRO lever.",
    keyApplication:
      "Audit your conversion path for common friction points: number of form fields (remove everything that isn't essential), form validation errors (implement inline validation), checkout steps (benchmark against 3-step maximum), page load speed (target under 3 seconds), and required account creation (always offer guest checkout). Quantify friction by measuring drop-off rate at each step.",
    commonPitfall:
      "Removing friction without addressing underlying resistance (cognitive objections and emotional hesitations). A simplified form will not convert users who fundamentally distrust the brand or don't believe in the product's value. Friction reduction works best when combined with trust-building elements that address the root reasons for hesitation.",
    domain: "Conversion Optimization",
    type: "flashcard",
  },
  {
    id: "co-005",
    term: "Social Proof in CRO",
    definition:
      "Psychological influence elements that demonstrate other people's positive experiences with a product or service, reducing the perceived risk of conversion. Types include customer reviews and ratings, testimonials, case studies, trust badges, customer count statistics, and user-generated content. Social proof is most persuasive when specific, credible, and relevant to the prospect's situation.",
    keyApplication:
      "Position social proof strategically: place reviews near the CTA to reduce conversion anxiety, use industry-specific testimonials that mirror target persona characteristics, display numerical social proof (e.g., '47,000+ customers') for social validation, and surface relevant customer stories at each stage of the buying journey to address the objections most common at that stage.",
    commonPitfall:
      "Using generic, unspecific testimonials ('Great product! Highly recommend!') that provide no substantive evidence of value. Effective testimonials include the customer's name, photo, company, specific result achieved, and the context of their situation before using the product. Specificity dramatically increases credibility and persuasive impact.",
    domain: "Conversion Optimization",
    type: "flashcard",
  },
  {
    id: "co-006",
    term: "Call-to-Action (CTA) Optimization",
    definition:
      "The process of improving the design, copy, placement, and timing of the buttons, links, or prompts that direct users to take the desired conversion action. CTA optimization affects both visibility (will the user notice it?) and motivation (will the user want to click it?). Small CTA changes can have outsized conversion impact.",
    keyApplication:
      "Test CTA copy that emphasizes value gained rather than action required: 'Get My Free Report' outperforms 'Download' because it focuses on the benefit. Use first-person language ('Start My Trial' vs. 'Start Your Trial'). Ensure CTAs have sufficient visual contrast, are above the fold on key pages, and repeat at logical decision points throughout longer pages.",
    commonPitfall:
      "Having multiple competing CTAs of equal visual prominence on a single page, creating decision paralysis. Every page should have one primary CTA (highest visual emphasis) and at most one secondary CTA (lower visual prominence). The visitor's eye should be naturally guided to the single most important action you want them to take.",
    domain: "Conversion Optimization",
    type: "flashcard",
  },
  {
    id: "co-007",
    term: "Form Optimization",
    definition:
      "The process of improving online forms to maximize completion rates while collecting the information needed for business objectives. Form optimization addresses length (number of fields), layout (single column vs. multi-column), field order, validation feedback, and conditional logic (show only relevant fields based on previous answers).",
    keyApplication:
      "Reduce form fields to the absolute minimum required for the next step in the customer journey. For top-of-funnel lead gen, ask only for email (and perhaps first name for personalization). Progressive profiling collects additional data over time through subsequent interactions. Test each additional form field against its impact on completion rate; typically each added field reduces completions by 10-15%.",
    commonPitfall:
      "Asking for too much information too early in the relationship. Requesting company size, budget, and phone number on a first-touch gated content form signals distrust and creates friction for users who aren't ready to enter a sales process. Ask for commitment commensurate with the value being offered.",
    domain: "Conversion Optimization",
    type: "flashcard",
  },
  {
    id: "co-008",
    term: "Urgency & Scarcity",
    definition:
      "Psychological principles used in CRO to motivate immediate action by highlighting limited time (urgency) or limited availability (scarcity). Real urgency and scarcity are powerful conversion drivers rooted in loss aversion psychology. Examples include genuine countdown timers, low-stock indicators, limited enrollment windows, and time-limited pricing.",
    keyApplication:
      "Use urgency and scarcity only when they accurately reflect the actual situation. Real deadlines (sale ends Sunday), real scarcity (only 3 units in stock), and real availability limits (cohort enrollment closes Friday) drive genuine urgency. Implement clear, specific countdown timers and inventory indicators that are programmatically accurate, not cosmetic.",
    commonPitfall:
      "Manufacturing false urgency with perpetual countdown timers that reset or 'limited time offers' that never expire. Sophisticated consumers recognize fake urgency tactics immediately, and they damage trust rather than increasing conversions. Brands caught using dishonest scarcity messaging face backlash that far outweighs any short-term conversion lift.",
    domain: "Conversion Optimization",
    type: "flashcard",
  },
  {
    id: "co-scenario-001",
    term: "A/B Test Sample Size Calculation",
    definition:
      "Determining the minimum number of visitors required per variant to achieve statistically significant results in an A/B test before launching.",
    keyApplication:
      "Calculate required sample size before starting any A/B test to avoid running underpowered tests that yield false positives or false negatives.",
    commonPitfall:
      "Using online sample size calculators without understanding the inputs. Setting statistical power too low (e.g., 70% instead of 80%) increases the risk of missing real effects. Setting minimum detectable effect too aggressively (wanting to detect 1% lifts) requires impractically large sample sizes.",
    domain: "Conversion Optimization",
    type: "scenario",
    narrative:
      "A landing page currently converts at 3.2%. You want to detect an improvement of at least 20% relative lift (from 3.2% to 3.84%), with 95% confidence and 80% statistical power. Using standard sample size tables for these parameters, approximately 12,500 visitors per variant are required. The page receives 2,000 visitors per week. Calculate how many weeks the test must run and the total visitors required for both variants combined.",
    variables: {
      baselineConversionRate: 0.032,
      relativeLift: 0.20,
      minimumDetectableEffect: 0.0064,
      sampleSizePerVariant: 12500,
      weeklyVisitors: 2000,
    },
    correctAnswer: 12.5,
    unit: "weeks to reach significance",
    formula:
      "Visitors Per Variant Needed = 12,500; Total Visitors = 12,500 x 2 = 25,000; Weeks = Total Visitors / Weekly Visitors",
    workedSolution:
      "Total visitors needed = 12,500 (variant A) + 12,500 (variant B) = 25,000 visitors. With 2,000 weekly visitors split 50/50 between variants, each variant receives 1,000 visitors per week. Weeks required = 12,500 / 1,000 = 12.5 weeks. This is a relatively long test duration, suggesting that a 20% relative lift threshold may be too conservative for this traffic level. Consider whether the business can afford to wait 12+ weeks, or whether a higher MDE (e.g., 30% relative lift = larger effect, smaller sample required) is still meaningful given the expected business impact.",
    difficulty: "Intermediate",
  },
  {
    id: "co-scenario-002",
    term: "Funnel Drop-off Prioritization",
    definition:
      "Analyzing conversion rates at each funnel step to identify which stage represents the highest-priority optimization opportunity based on volume impact.",
    keyApplication:
      "Use funnel drop-off analysis to direct CRO resources toward the steps where improving conversion will have the greatest total impact on bottom-of-funnel revenue.",
    commonPitfall:
      "Optimizing the step with the worst conversion rate rather than the step where improvement will have the greatest absolute impact on total conversions. A 10% improvement at a high-volume early stage often beats a 50% improvement at a low-volume late stage.",
    domain: "Conversion Optimization",
    type: "scenario",
    narrative:
      "An e-commerce checkout funnel has 4 steps with the following monthly data: Step 1 (Product Page): 50,000 visitors, 35% proceed to cart. Step 2 (Cart): 17,500 visitors, 55% proceed to checkout. Step 3 (Checkout): 9,625 visitors, 72% complete payment. Step 4 (Order Confirmation): 6,930 completions. Average order value is $85. If a 10% relative improvement were achieved at each step individually, calculate the incremental monthly revenue for each step and identify the highest-priority optimization target.",
    variables: {
      productPageVisitors: 50000,
      productToCartRate: 0.35,
      cartToCheckoutRate: 0.55,
      checkoutToOrderRate: 0.72,
      aov: 85,
    },
    correctAnswer: 59482.5,
    unit: "dollars incremental monthly revenue from improving Step 1 by 10%",
    formula:
      "Baseline orders at each stage change if conversion rate at that stage improves; New Orders = recalculate funnel from improved step; Revenue Gain = (New Orders - Baseline Orders) x AOV",
    workedSolution:
      "Baseline: 50,000 x 35% x 55% x 72% = 50,000 x 0.35 x 0.55 x 0.72 = 6,930 orders x $85 = $589,050/month. Step 1 improvement (35% → 38.5%): 50,000 x 38.5% x 55% x 72% = 50,000 x 0.385 x 0.55 x 0.72 = 7,623 orders. Revenue gain = (7,623 - 6,930) x $85 = 693 x $85 = $58,905/month. Step 2 improvement (55% → 60.5%): 50,000 x 35% x 60.5% x 72% = 7,623 orders x... = 17,500 x 60.5% x 72% = 10,500 x 72% ≈ 7,623 orders. Step 2 at 60.5%: 17,500 x 0.605 x 0.72 = 10,588 x 0.72 = 7,623. Hmm let me recalculate. Baseline orders = 50000 × 0.35 × 0.55 × 0.72 = 17500 × 0.55 × 0.72 = 9625 × 0.72 = 6930. Step 1 (10% relative lift on 35% = new rate 38.5%): 50000 × 0.385 × 0.55 × 0.72 = 19250 × 0.55 × 0.72 = 10587.5 × 0.72 = 7623 orders. Gain = 693 × $85 = $58,905. Step 2 (55% → 60.5%): 50000 × 0.35 × 0.605 × 0.72 = 17500 × 0.605 × 0.72 = 10587.5 × 0.72 = 7623 orders. Same gain! Step 3 (72% → 79.2%): 9625 × 0.792 = 7623. Also same—because 10% relative lift at any single step raises output by the same proportion. Step 1 is highest priority because it affects the largest absolute volume and any improvement compounds through all subsequent steps equally. Recommended: Focus CRO resources on Step 1 (product-to-cart) for maximum revenue impact.",
    difficulty: "Advanced",
  },
  {
    id: "co-scenario-003",
    term: "CRO Revenue Uplift vs. Traffic Acquisition",
    definition:
      "Comparing the cost efficiency of improving conversion rate versus buying additional traffic to achieve the same revenue growth target.",
    keyApplication:
      "Use CRO vs. traffic cost comparison to justify CRO investment and determine the right balance between paid acquisition and conversion optimization in the marketing budget.",
    commonPitfall:
      "Treating paid traffic and CRO as either/or choices. The optimal strategy uses CRO to maximize return on existing traffic before scaling paid acquisition, then scales paid channels into a more efficient funnel.",
    domain: "Conversion Optimization",
    type: "scenario",
    narrative:
      "An e-commerce site has 40,000 monthly visitors converting at 2.1%, with an AOV of $95. Their blended paid traffic CPC is $1.80. They have two options to increase monthly revenue by $25,000: Option A: Increase traffic by buying more clicks at $1.80 CPC. Option B: Invest $8,000 in a CRO program projected to improve conversion rate from 2.1% to 2.7%. Calculate how many additional clicks Option A requires and compare the costs of both options for achieving the $25,000 revenue target.",
    variables: {
      monthlyVisitors: 40000,
      conversionRate: 0.021,
      aov: 95,
      cpc: 1.80,
      croInvestment: 8000,
      targetRevenueIncrease: 25000,
      projectedNewCR: 0.027,
    },
    correctAnswer: 8000,
    unit: "dollars CRO investment vs traffic cost comparison",
    formula:
      "Current Revenue = Visitors x CR x AOV; Additional Clicks for Traffic Option = Revenue Target / (CR x AOV - CPC already baked in); CRO Revenue = Visitors x New CR x AOV; Compare incremental cost of each option",
    workedSolution:
      "Current monthly revenue = 40,000 x 2.1% x $95 = $79,800. Target revenue = $79,800 + $25,000 = $104,800. Option B (CRO): New revenue = 40,000 x 2.7% x $95 = 40,000 x 0.027 x $95 = 1,080 x $95 = $102,600. Revenue increase = $102,600 - $79,800 = $22,800 (close to $25K target). Cost = $8,000 one-time. Revenue per dollar invested in CRO = $22,800 / $8,000 = 2.85x. Option A (Traffic): Revenue per click = 2.1% x $95 = $1.995 per visitor. Net revenue per additional click = $1.995 - $1.80 CPC = $0.195 profit per click. To generate $25,000 additional profit: $25,000 / $0.195 = 128,205 additional clicks needed. Cost of additional traffic = 128,205 x $1.80 = $230,769 per month ongoing. CRO delivers similar revenue uplift for $8,000 vs. $230,769/month in additional traffic spend—a dramatically more capital-efficient approach. Furthermore, CRO improvements apply to future traffic, making the ROI compound over time.",
    difficulty: "Advanced",
  },
];
