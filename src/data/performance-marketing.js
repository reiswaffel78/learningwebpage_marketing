export const performanceMarketingConcepts = [
  {
    id: "pm-001",
    term: "ROAS (Return on Ad Spend)",
    definition:
      "A marketing metric that measures the revenue generated for every dollar spent on advertising. Calculated as Revenue from Ads divided by Ad Spend. A ROAS of 4:1 means every $1 spent on ads generates $4 in revenue.",
    keyApplication:
      "Set ROAS targets based on your profit margins. If your gross margin is 50%, you need at minimum a 2:1 ROAS to break even. Use ROAS to compare campaign effectiveness across channels and allocate budget to the highest-performing campaigns.",
    commonPitfall:
      "Confusing ROAS with ROI. ROAS measures gross revenue against ad spend only, while ROI accounts for all costs (COGS, overhead, ad spend). A campaign with a 3:1 ROAS can still be unprofitable if margins are thin.",
    domain: "Performance Marketing",
    type: "flashcard",
  },
  {
    id: "pm-002",
    term: "CPC (Cost Per Click)",
    definition:
      "The price an advertiser pays each time a user clicks on their ad. In auction-based platforms like Google Ads, the actual CPC is determined by your Quality Score, bid amount, and competitor bids. Actual CPC is often lower than maximum bid.",
    keyApplication:
      "Lower CPC by improving Quality Score through better ad relevance, landing page experience, and expected CTR. Use negative keywords to filter irrelevant clicks. Segment campaigns by match type and adjust bids at the keyword level for optimal efficiency.",
    commonPitfall:
      "Optimizing solely for the lowest CPC without considering conversion quality. A $0.50 click that never converts is more expensive than a $5.00 click that converts at 10%. Focus on cost per conversion, not just cost per click.",
    domain: "Performance Marketing",
    type: "flashcard",
  },
  {
    id: "pm-003",
    term: "CTR (Click-Through Rate)",
    definition:
      "The percentage of people who click on an ad after seeing it, calculated as (Clicks / Impressions) x 100. CTR is a key indicator of ad relevance and creative effectiveness. In Google Search Ads, the average CTR across industries is approximately 3-5%.",
    keyApplication:
      "Improve CTR by writing compelling ad copy with strong calls-to-action, using ad extensions (sitelinks, callouts, structured snippets), and ensuring tight keyword-to-ad group alignment. Test multiple ad variations to identify top performers.",
    commonPitfall:
      "Chasing high CTR at the expense of qualified traffic. Clickbait-style ads may drive high CTR but attract unqualified visitors who don't convert, wasting budget and reducing ROAS. CTR should be evaluated alongside conversion rate.",
    domain: "Performance Marketing",
    type: "flashcard",
  },
  {
    id: "pm-004",
    term: "CPM (Cost Per Mille)",
    definition:
      "The cost an advertiser pays per 1,000 impressions of their ad. CPM is the standard pricing model for display advertising and brand awareness campaigns. Calculated as (Total Ad Spend / Total Impressions) x 1,000.",
    keyApplication:
      "Use CPM bidding for brand awareness campaigns where the goal is maximum visibility rather than direct clicks. Compare CPM across placements and audiences to find efficient reach. Typical display CPMs range from $2-$10, while premium placements can exceed $30.",
    commonPitfall:
      "Using CPM as a performance metric for direct-response campaigns. A low CPM means cheap impressions, not effective advertising. Without tracking viewability and downstream conversions, a low CPM campaign may deliver impressions that no one actually sees.",
    domain: "Performance Marketing",
    type: "flashcard",
  },
  {
    id: "pm-005",
    term: "Conversion Rate",
    definition:
      "The percentage of visitors who complete a desired action (purchase, sign-up, download) out of total visitors. Calculated as (Conversions / Total Visitors) x 100. The average e-commerce conversion rate is approximately 2-3%, though this varies widely by industry and traffic source.",
    keyApplication:
      "Segment conversion rates by traffic source, device, audience, and landing page to identify optimization opportunities. Paid search typically converts higher than display or social because of stronger purchase intent. Use conversion rate alongside volume metrics for complete performance analysis.",
    commonPitfall:
      "Comparing conversion rates across fundamentally different traffic sources without context. A 1% conversion rate from cold display traffic may actually be excellent, while a 3% rate from branded search traffic may be underperforming. Always benchmark within the same channel and funnel stage.",
    domain: "Performance Marketing",
    type: "flashcard",
  },
  {
    id: "pm-006",
    term: "CAC (Customer Acquisition Cost)",
    definition:
      "The total cost of acquiring a new customer, including all marketing and sales expenses. Calculated as Total Marketing and Sales Spend divided by Number of New Customers Acquired. CAC encompasses ad spend, agency fees, salaries, tools, and creative production costs.",
    keyApplication:
      "Track CAC by channel to understand where your most cost-efficient acquisition comes from. Set CAC targets based on customer lifetime value, aiming for an LTV:CAC ratio of at least 3:1. Monitor CAC trends monthly to catch rising acquisition costs early.",
    commonPitfall:
      "Calculating CAC using only ad spend while ignoring team salaries, tool subscriptions, agency fees, and content production costs. This understates true acquisition cost and can make unprofitable channels appear profitable.",
    domain: "Performance Marketing",
    type: "flashcard",
  },
  {
    id: "pm-007",
    term: "LTV (Customer Lifetime Value)",
    definition:
      "The total predicted revenue a business can expect from a single customer account throughout their entire relationship. A simple calculation is Average Order Value x Purchase Frequency x Average Customer Lifespan. LTV is the cornerstone metric for sustainable growth strategy.",
    keyApplication:
      "Use LTV to determine how much you can profitably spend to acquire a customer. Segment LTV by acquisition channel, customer cohort, and product to identify your most valuable customer profiles. Invest in retention strategies that increase LTV over time.",
    commonPitfall:
      "Using a single average LTV across all customers rather than segmenting. High-value customers from organic search may have 5x the LTV of customers from discount-driven paid campaigns. Blended LTV can mask unprofitable acquisition in specific channels.",
    domain: "Performance Marketing",
    type: "flashcard",
  },
  {
    id: "pm-008",
    term: "Break-even ROAS",
    definition:
      "The minimum ROAS needed to cover costs and avoid losing money on ad spend. Calculated as 1 / Gross Profit Margin. If your margin is 40%, your break-even ROAS is 1 / 0.40 = 2.5, meaning you need $2.50 in revenue for every $1 in ad spend to break even.",
    keyApplication:
      "Calculate break-even ROAS before launching any paid campaign to set a minimum performance threshold. Any campaign above break-even ROAS is profitable; any below is losing money. Use this as the baseline for bid strategies and budget allocation decisions.",
    commonPitfall:
      "Forgetting to account for all variable costs (shipping, payment processing, returns) when calculating the margin used in break-even ROAS. Using gross margin instead of contribution margin overstates profitability and sets the break-even threshold too low.",
    domain: "Performance Marketing",
    type: "flashcard",
  },
  {
    id: "pm-scenario-001",
    term: "ROAS Calculation",
    definition:
      "Measuring the return on ad spend to determine campaign profitability against a break-even threshold.",
    keyApplication:
      "Use ROAS alongside break-even ROAS to quickly determine whether campaigns are profitable and by how much.",
    commonPitfall:
      "Looking at ROAS in isolation without factoring in product margins. A 3x ROAS sounds good but is a loss if your margin is only 25% (break-even ROAS = 4x).",
    domain: "Performance Marketing",
    type: "scenario",
    narrative:
      "An e-commerce brand selling premium headphones runs a Google Ads campaign. They spend $8,500 on ads over one month and generate $34,000 in revenue directly attributed to the campaign. Their product gross margin is 55%. Calculate the campaign's ROAS and determine whether it exceeds the break-even ROAS.",
    variables: {
      adSpend: 8500,
      revenue: 34000,
      grossMargin: 0.55,
    },
    correctAnswer: 4,
    unit: "ROAS ratio",
    formula:
      "ROAS = Revenue / Ad Spend; Break-even ROAS = 1 / Gross Margin",
    workedSolution:
      "ROAS = $34,000 / $8,500 = 4.0. Break-even ROAS = 1 / 0.55 = 1.82. The campaign ROAS of 4.0 significantly exceeds the break-even ROAS of 1.82, meaning the campaign is profitable. Gross profit from campaign = $34,000 x 55% - $8,500 = $18,700 - $8,500 = $10,200 net profit from the campaign.",
    difficulty: "Beginner",
  },
  {
    id: "pm-scenario-002",
    term: "CPC Optimization Impact",
    definition:
      "Calculating how Quality Score improvements reduce CPC and the resulting impact on campaign reach within a fixed budget.",
    keyApplication:
      "Justify investment in landing page and ad relevance optimization by quantifying the additional clicks and conversions gained from lower CPCs.",
    commonPitfall:
      "Assuming Quality Score improvements will perfectly halve CPC. The actual relationship is influenced by auction dynamics and competitor behavior.",
    domain: "Performance Marketing",
    type: "scenario",
    narrative:
      "A SaaS company has a monthly Google Ads budget of $12,000 with a current average CPC of $4.80. By improving Quality Score from 5 to 8, they reduce their average CPC to $3.20. Their landing page converts at 6%. Calculate how many additional clicks and conversions the CPC reduction delivers within the same budget.",
    variables: {
      monthlyBudget: 12000,
      originalCPC: 4.80,
      newCPC: 3.20,
      conversionRate: 0.06,
    },
    correctAnswer: 75,
    unit: "additional conversions",
    formula:
      "Original Clicks = Budget / Original CPC; New Clicks = Budget / New CPC; Additional Clicks = New - Original; Additional Conversions = Additional Clicks x Conversion Rate",
    workedSolution:
      "Original Clicks = $12,000 / $4.80 = 2,500 clicks. New Clicks = $12,000 / $3.20 = 3,750 clicks. Additional Clicks = 3,750 - 2,500 = 1,250 clicks. Additional Conversions = 1,250 x 6% = 75 additional conversions per month from the same budget, a 50% increase in conversion volume.",
    difficulty: "Intermediate",
  },
  {
    id: "pm-scenario-003",
    term: "CAC vs LTV Viability Analysis",
    definition:
      "Comparing customer acquisition cost against lifetime value across channels to determine which acquisition channels are sustainably profitable.",
    keyApplication:
      "Use LTV:CAC ratios by channel to make informed budget allocation decisions and identify which channels to scale and which to cut.",
    commonPitfall:
      "Using blended LTV across all channels. Customers from different acquisition channels often have significantly different retention rates and lifetime values.",
    domain: "Performance Marketing",
    type: "scenario",
    narrative:
      "A subscription box company acquires customers through two channels. Paid Social: spends $25,000/month acquiring 200 customers, with an average customer lifespan of 8 months and $45/month subscription. Paid Search: spends $18,000/month acquiring 120 customers, with an average customer lifespan of 14 months and $45/month subscription. Calculate the CAC and LTV for each channel and determine which has the better LTV:CAC ratio.",
    variables: {
      paidSocialSpend: 25000,
      paidSocialCustomers: 200,
      paidSocialLifespan: 8,
      paidSearchSpend: 18000,
      paidSearchCustomers: 120,
      paidSearchLifespan: 14,
      monthlySubscription: 45,
    },
    correctAnswer: 4.2,
    unit: "LTV:CAC ratio (Paid Search)",
    formula:
      "CAC = Channel Spend / Customers Acquired; LTV = Monthly Revenue x Average Lifespan; LTV:CAC = LTV / CAC",
    workedSolution:
      "Paid Social: CAC = $25,000 / 200 = $125. LTV = $45 x 8 = $360. LTV:CAC = $360 / $125 = 2.88. Paid Search: CAC = $18,000 / 120 = $150. LTV = $45 x 14 = $630. LTV:CAC = $630 / $150 = 4.2. Despite Paid Search having a higher CAC ($150 vs $125), it delivers a significantly better LTV:CAC ratio (4.2 vs 2.88) because those customers retain nearly twice as long. Paid Search is the more profitable channel to scale.",
    difficulty: "Advanced",
  },
];
