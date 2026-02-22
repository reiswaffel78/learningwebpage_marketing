export const analyticsConcepts = [
  {
    id: "an-001",
    term: "KPIs (Key Performance Indicators)",
    definition:
      "Quantifiable metrics used to evaluate the success of an organization, campaign, or individual in meeting objectives. Effective KPIs are Specific, Measurable, Achievable, Relevant, and Time-bound (SMART). They differ from vanity metrics (page views, follower counts) in that they directly tie to business outcomes.",
    keyApplication:
      "For each marketing campaign, define 2-3 primary KPIs before launch. Common KPIs by channel: SEO (organic traffic, ranking positions), Paid Ads (ROAS, CPA), Email (revenue per email, list growth rate), Social (engagement rate, share of voice). Align KPIs to business goals: awareness, acquisition, activation, retention, or revenue.",
    commonPitfall:
      "Tracking too many KPIs simultaneously, which dilutes focus and makes it unclear what is actually being optimized. The more metrics you track without hierarchy, the less accountable you become to any of them. Define a primary KPI and 1-2 supporting metrics per initiative.",
    domain: "Analytics",
    type: "flashcard",
  },
  {
    id: "an-002",
    term: "Attribution Models",
    definition:
      "Frameworks that determine how credit for a conversion is assigned across the multiple touchpoints in a customer's journey. Models include: Last Click (100% credit to final touch), First Click (100% to first touch), Linear (equal credit across all touches), Time Decay (more credit to recent touches), and Data-Driven (algorithmic based on actual conversion probability).",
    keyApplication:
      "Choose attribution models based on campaign objective and sales cycle length. Last-click undervalues awareness channels (social, display). For long B2B sales cycles, use linear or time-decay to understand the full journey. In GA4, use data-driven attribution as the default as it most accurately reflects contribution across channels.",
    commonPitfall:
      "Applying a single attribution model across all channels and decisions without considering what each model measures and misses. Each model tells a different story. Using only last-click attribution consistently under-invests in top-of-funnel channels that initiate the customer journey.",
    domain: "Analytics",
    type: "flashcard",
  },
  {
    id: "an-003",
    term: "Conversion Funnel Analysis",
    definition:
      "The systematic examination of user behavior at each stage of the conversion funnel—from initial awareness through consideration, intent, action, and retention—to identify where users drop off and quantify improvement opportunities. Funnel analysis reveals the bottlenecks that have the largest impact on revenue.",
    keyApplication:
      "Map your digital funnel by pages and steps, then calculate conversion rates between each stage. Prioritize optimization at the stage with the largest absolute drop-off in users. A 1% improvement at a high-volume top-of-funnel stage often outweighs a 10% improvement at a low-volume BOFU stage in total impact.",
    commonPitfall:
      "Analyzing average funnel performance without segmenting by traffic source, device, or user type. A funnel that converts at 2% overall may convert at 5% for organic search but only 0.8% for display traffic. Blended averages mask these optimization opportunities.",
    domain: "Analytics",
    type: "flashcard",
  },
  {
    id: "an-004",
    term: "Cohort Analysis",
    definition:
      "A type of behavioral analysis that groups users (cohorts) based on a shared characteristic or experience within a specific time period—typically their acquisition date or first purchase date—and then tracks how this group behaves over subsequent time periods. Cohort analysis reveals retention patterns, LTV trends, and the long-term impact of product or marketing changes.",
    keyApplication:
      "Use monthly acquisition cohorts to track how retention evolves over time by channel. If customers acquired via paid social retain at 40% after 3 months while organic search customers retain at 65%, this signals a fundamental difference in acquisition quality. Adjust LTV projections and CAC thresholds by channel using cohort data.",
    commonPitfall:
      "Drawing conclusions from cohort analysis without accounting for seasonal effects or significant product changes during the analysis period. A December cohort naturally behaves differently than a June cohort due to seasonal purchase intent, not necessarily product quality differences.",
    domain: "Analytics",
    type: "flashcard",
  },
  {
    id: "an-005",
    term: "Bounce Rate",
    definition:
      "The percentage of sessions in which a user views only one page before leaving the website without any interaction. In Universal Analytics: (Single-page Sessions / Total Sessions) x 100. Note: GA4 replaced bounce rate with 'engagement rate' (the inverse), defined as sessions lasting 10+ seconds or having 2+ page views.",
    keyApplication:
      "Benchmark bounce rates by traffic source and page type. Blog posts typically see 60-80% bounce rates (normal behavior). Landing pages should be 30-50%. High bounce rates on key conversion pages signal relevance mismatch, poor UX, or slow load times. Pair with exit rates and session duration for complete analysis.",
    commonPitfall:
      "Treating a high bounce rate as always negative. A high bounce rate on a contact page where users found the phone number and called the business directly represents a successful session. Always interpret bounce rate in context of the page's intended purpose and expected user behavior.",
    domain: "Analytics",
    type: "flashcard",
  },
  {
    id: "an-006",
    term: "UTM Parameters",
    definition:
      "Tags added to URLs that allow analytics platforms to track the source, medium, campaign, term, and content of traffic. The five standard parameters are: utm_source (where traffic comes from), utm_medium (marketing channel), utm_campaign (campaign name), utm_term (paid keyword), and utm_content (differentiates ad creatives or links).",
    keyApplication:
      "Implement a UTM tagging taxonomy before any campaign launch. Create a UTM governance document with standardized naming conventions (lowercase, hyphens not spaces, consistent source/medium definitions) used across all team members. Use Google's Campaign URL Builder for consistency. Track UTMs in a shared spreadsheet to maintain a complete campaign reference.",
    commonPitfall:
      "Using inconsistent UTM naming (Email vs email vs EMAIL, facebook vs Facebook vs fb) which fragments data in analytics and prevents accurate channel reporting. Even minor case differences create separate data buckets in GA4, making performance comparison impossible without manual cleanup.",
    domain: "Analytics",
    type: "flashcard",
  },
  {
    id: "an-007",
    term: "Statistical Significance",
    definition:
      "A statistical measure indicating whether an observed difference in test results is likely due to a genuine effect rather than random chance. Typically expressed as a p-value, with p<0.05 considered significant (meaning less than 5% probability the result occurred by chance). Requires sufficient sample size and test duration to achieve.",
    keyApplication:
      "Always calculate required sample size before starting A/B tests using tools like Optimizely's Sample Size Calculator. Run tests until significance is reached, not just until one variant leads. For conversion rate tests, generally require minimum 1,000 conversions per variant and 2-4 weeks of data to account for day-of-week variations.",
    commonPitfall:
      "Stopping A/B tests early when one variant appears to be winning (peeking problem). Prematurely terminating tests inflates false positive rates dramatically. A test showing 90% confidence at day 3 may only be 60% confident if run to its proper conclusion. Commit to sample size targets before starting.",
    domain: "Analytics",
    type: "flashcard",
  },
  {
    id: "an-008",
    term: "Customer Journey Mapping",
    definition:
      "A visual representation of every touchpoint a customer has with a brand, from initial awareness through purchase and post-purchase, across all channels and devices. It combines quantitative data (analytics) with qualitative research (user interviews, surveys) to understand the complete customer experience and identify friction points.",
    keyApplication:
      "Build journey maps for your top 2-3 customer personas using Google Analytics path reports, session recordings (Hotjar, FullStory), customer interviews, and CRM data. Identify moments of friction and delight, and prioritize improvements at the highest-traffic, lowest-conversion stages of the journey.",
    commonPitfall:
      "Creating journey maps as a one-time documentation exercise rather than a living analytical tool. Customer journeys evolve as products, channels, and customer expectations change. Review and update journey maps quarterly using fresh data to ensure they reflect current reality rather than historical assumptions.",
    domain: "Analytics",
    type: "flashcard",
  },
  {
    id: "an-scenario-001",
    term: "Conversion Rate Optimization Impact",
    definition:
      "Calculating the revenue impact of a conversion rate improvement to quantify the business value of CRO investment.",
    keyApplication:
      "Use CRO impact calculations to prioritize optimization experiments by potential revenue uplift and to build business cases for UX and analytics investment.",
    commonPitfall:
      "Projecting CRO results based on short-term test data without accounting for regression to the mean. A test winner should be validated over multiple business cycles before projecting full annual revenue impact.",
    domain: "Analytics",
    type: "scenario",
    narrative:
      "An e-commerce site receives 80,000 monthly visitors with a 1.8% conversion rate and $110 average order value. After a series of CRO tests (checkout flow simplification, trust badges, and mobile UX improvements), conversion rate increases to 2.4%. Calculate the monthly revenue before and after CRO, and the annual revenue impact of this improvement.",
    variables: {
      monthlyVisitors: 80000,
      originalCR: 0.018,
      newCR: 0.024,
      aov: 110,
    },
    correctAnswer: 633600,
    unit: "dollars annual revenue increase",
    formula:
      "Monthly Revenue = Visitors x CR x AOV; Revenue Increase = (New Revenue - Old Revenue) x 12",
    workedSolution:
      "Original monthly revenue = 80,000 x 1.8% x $110 = 80,000 x 0.018 x $110 = $158,400. New monthly revenue = 80,000 x 2.4% x $110 = 80,000 x 0.024 x $110 = $211,200. Monthly increase = $211,200 - $158,400 = $52,800. Annual revenue increase = $52,800 x 12 = $633,600. The 0.6 percentage point improvement in conversion rate generates over $633K in additional annual revenue from the same traffic, illustrating why CRO is often the highest-ROI marketing investment.",
    difficulty: "Beginner",
  },
  {
    id: "an-scenario-002",
    term: "Multi-Touch Attribution Analysis",
    definition:
      "Comparing channel performance under different attribution models to understand how model selection affects channel credit allocation and budget decisions.",
    keyApplication:
      "Use multi-model attribution comparison to make more informed budget decisions by understanding which channels initiate journeys versus which channels close them.",
    commonPitfall:
      "Making channel budget cuts based on last-click attribution without investigating the channel's role in assisting conversions. A channel with 10% last-click conversions may assist 40% of all conversions—cutting it could drop total conversions significantly.",
    domain: "Analytics",
    type: "scenario",
    narrative:
      "In a given month, 500 conversions were tracked across three channels. Last-click attribution reports: Paid Search = 240 conversions, Email = 180 conversions, Display = 80 conversions. Linear attribution (equal credit across all touches in the journey) reports: Paid Search = 175, Email = 155, Display = 170. The average conversion value is $200. Calculate the revenue difference each channel appears to generate under each model and identify which channel's contribution is most undervalued by last-click.",
    variables: {
      lastClickPaidSearch: 240,
      lastClickEmail: 180,
      lastClickDisplay: 80,
      linearPaidSearch: 175,
      linearEmail: 155,
      linearDisplay: 170,
      conversionValue: 200,
    },
    correctAnswer: 18000,
    unit: "dollars Display undervalued by last-click",
    formula:
      "Revenue = Conversions x Conversion Value; Undervaluation = (Linear Conversions - Last-Click Conversions) x Conversion Value",
    workedSolution:
      "Last-click revenue: Paid Search = 240 x $200 = $48,000; Email = 180 x $200 = $36,000; Display = 80 x $200 = $16,000. Linear attribution revenue: Paid Search = 175 x $200 = $35,000; Email = 155 x $200 = $31,000; Display = 170 x $200 = $34,000. Display undervaluation = (170 - 80) x $200 = 90 x $200 = $18,000. Display advertising is the most undervalued channel under last-click attribution, receiving credit for $16K in conversions despite contributing to $34K under linear attribution—a 113% difference. Cutting Display based on last-click data would likely hurt total conversion volume significantly.",
    difficulty: "Advanced",
  },
  {
    id: "an-scenario-003",
    term: "Cohort Retention Revenue Analysis",
    definition:
      "Analyzing customer cohort retention data to calculate actual LTV and compare it against CAC to assess business health and profitability by acquisition channel.",
    keyApplication:
      "Use cohort-based LTV calculations to set accurate CAC targets by channel, forecast future revenue from current customer cohorts, and identify which months of retention are most critical to protect.",
    commonPitfall:
      "Using average retention rates rather than actual cohort data. Average retention masks the rapid drop-off in early months and overstates LTV for recently acquired customers who haven't yet reached their retention inflection point.",
    domain: "Analytics",
    type: "scenario",
    narrative:
      "A SaaS company acquires 400 customers in January at a CAC of $320. The monthly subscription is $89. Cohort tracking shows the following monthly retention: Month 1: 100%, Month 2: 78%, Month 3: 65%, Month 4: 58%, Month 5: 52%, Month 6: 48%. Calculate the total cohort revenue through Month 6 and the actual LTV through Month 6. Determine if the LTV:CAC ratio meets the 3:1 benchmark.",
    variables: {
      cohortSize: 400,
      cac: 320,
      monthlySubscription: 89,
      retention: [1.0, 0.78, 0.65, 0.58, 0.52, 0.48],
    },
    correctAnswer: 1.29,
    unit: "LTV:CAC ratio through Month 6",
    formula:
      "Monthly Revenue = Cohort Size x Retention Rate x Monthly Fee; Cumulative LTV = Sum of (Retention x Monthly Fee) for each month; LTV:CAC = LTV / CAC",
    workedSolution:
      "Monthly revenues per customer: M1 = 1.0 x $89 = $89; M2 = 0.78 x $89 = $69.42; M3 = 0.65 x $89 = $57.85; M4 = 0.58 x $89 = $51.62; M5 = 0.52 x $89 = $46.28; M6 = 0.48 x $89 = $42.72. LTV through M6 per customer = $89 + $69.42 + $57.85 + $51.62 + $46.28 + $42.72 = $356.89 + $52.00 = $412.89 ≈ let's be precise: 89+69.42+57.85+51.62+46.28+42.72 = $356.89. Actually: 89+69.42 = 158.42; +57.85 = 216.27; +51.62 = 267.89; +46.28 = 314.17; +42.72 = $356.89 per customer through M6. LTV:CAC = $356.89 / $320 = 1.12. The ratio does not meet the 3:1 benchmark at month 6. Total cohort revenue = 400 x $356.89 = $142,756. The company needs to either extend customer LTV beyond month 6, reduce CAC, or expand revenue per customer (upsell) to reach profitability targets.",
    difficulty: "Advanced",
  },
];
