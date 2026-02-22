export const emailMarketingConcepts = [
  {
    id: "em-001",
    term: "Open Rate",
    definition:
      "The percentage of email recipients who open a given email, calculated as (Unique Opens / Emails Delivered) x 100. Open rate measures the effectiveness of your sender name, subject line, and preheader text. Industry average open rates vary from 20-40% depending on sector, with B2B often outperforming B2C.",
    keyApplication:
      "Improve open rates by A/B testing subject lines, optimizing send timing (Tuesday-Thursday typically perform best), personalizing subject lines with recipient names or company names, and maintaining list hygiene to protect sender reputation. Segment lists to send more relevant content to smaller, targeted groups.",
    commonPitfall:
      "Treating open rate as the primary success metric since Apple's Mail Privacy Protection (iOS 15+) inflates open rates by prefetching emails regardless of actual opens. Use click-to-open rate (CTOR) and click-through rate as more reliable engagement indicators post-2021.",
    domain: "Email Marketing",
    type: "flashcard",
  },
  {
    id: "em-002",
    term: "Click-Through Rate (CTR) vs. CTOR",
    definition:
      "Email CTR measures the percentage of all delivered emails that received at least one click: (Clicks / Emails Delivered) x 100. Click-to-Open Rate (CTOR) measures clicks as a percentage of opens: (Clicks / Unique Opens) x 100. CTOR measures email body effectiveness; CTR measures overall campaign reach efficiency.",
    keyApplication:
      "Use CTOR to evaluate whether your email content and CTAs are compelling once someone opens it. A high open rate with low CTOR indicates the subject line outperforms the body content. Average CTOR benchmarks range from 10-15% across industries. Improve CTOR by placing CTAs above the fold, using a single primary CTA, and ensuring mobile-responsive design.",
    commonPitfall:
      "Optimizing for CTR without CTOR, which misses whether low clicks are due to poor subject lines (low opens) or poor body content (low CTOR). Diagnosing the correct bottleneck leads to more targeted improvements.",
    domain: "Email Marketing",
    type: "flashcard",
  },
  {
    id: "em-003",
    term: "Email Segmentation",
    definition:
      "The practice of dividing an email subscriber list into smaller, targeted groups based on shared characteristics such as demographics, purchase history, engagement level, geographic location, or stage in the customer journey. Segmented campaigns consistently outperform blasts sent to entire lists.",
    keyApplication:
      "Start with behavioral segmentation: active subscribers (opened in last 90 days), at-risk subscribers (no opens in 90-180 days), and dormant subscribers (no opens in 180+ days). Further segment by purchase history, product interest, or LTV tier. Mailchimp data shows segmented campaigns generate 14% higher open rates and 101% more clicks than non-segmented campaigns.",
    commonPitfall:
      "Over-segmenting into too many micro-segments that are difficult to manage and maintain. Start with 3-5 meaningful segments based on the behaviors that most predict conversion, then add complexity as your team's capacity allows.",
    domain: "Email Marketing",
    type: "flashcard",
  },
  {
    id: "em-004",
    term: "Marketing Automation & Drip Campaigns",
    definition:
      "Pre-designed sequences of emails sent automatically based on triggers (sign-up, purchase, abandonment, inactivity) or time intervals. Drip campaigns deliver the right message to the right person at the right time without manual intervention, enabling scale while maintaining personalization.",
    keyApplication:
      "Build core automation sequences: welcome series (5-7 emails over 2 weeks), abandoned cart recovery (3 emails over 24 hours), post-purchase onboarding, win-back campaigns for lapsed customers, and lead nurturing for B2B prospects. Map each sequence to a specific conversion goal with measurable outcomes.",
    commonPitfall:
      "Setting up automations and never reviewing them. Automated sequences can run for months or years untouched, becoming outdated, referencing discontinued products, or applying to situations they were not designed for. Audit automations quarterly for relevance, deliverability, and performance.",
    domain: "Email Marketing",
    type: "flashcard",
  },
  {
    id: "em-005",
    term: "Deliverability",
    definition:
      "The ability of emails to reach recipients' inboxes (not spam folders) successfully. Deliverability is determined by sender reputation, authentication protocols (SPF, DKIM, DMARC), list hygiene, engagement rates, and content quality. Even perfectly crafted emails are worthless if they land in spam.",
    keyApplication:
      "Maintain deliverability by implementing SPF, DKIM, and DMARC records, removing hard bounces immediately, suppressing unengaged subscribers, avoiding spam trigger words, sending consistent volume rather than sudden spikes, and using double opt-in to ensure quality subscribers. Monitor sender reputation via Google Postmaster Tools and MXToolbox.",
    commonPitfall:
      "Sending to old or purchased lists that generate high bounce rates and spam complaints. A spam complaint rate above 0.1% triggers inbox provider flags that can damage domain reputation for all future sends. List quality is more important than list size.",
    domain: "Email Marketing",
    type: "flashcard",
  },
  {
    id: "em-006",
    term: "A/B Testing in Email",
    definition:
      "A controlled experiment in email marketing where two versions of an email (A and B) are sent to random subsets of the audience to determine which performs better on a specific metric before sending the winner to the remainder of the list. Variables tested include subject lines, sender names, send times, CTA copy, and email body content.",
    keyApplication:
      "Test one variable at a time for statistical validity. Ensure test group size is large enough (minimum 1,000 recipients per variant) to achieve statistical significance. Use a 20/20/60 split: 20% receives version A, 20% version B, then 60% receives the winning version after a predetermined test duration (typically 2-4 hours for time-sensitive sends).",
    commonPitfall:
      "Testing too many variables simultaneously or declaring a winner based on insufficient data. A subject line that 'wins' with 200 recipients per variant may not have statistical significance. Premature optimization based on small samples leads to false conclusions and poor decisions.",
    domain: "Email Marketing",
    type: "flashcard",
  },
  {
    id: "em-007",
    term: "List Hygiene",
    definition:
      "The ongoing process of cleaning and maintaining an email subscriber list by removing invalid addresses, hard bounces, long-term non-engagers, and spam trap addresses. Clean lists improve deliverability, reduce sending costs, and provide more accurate performance metrics.",
    keyApplication:
      "Run list hygiene processes quarterly: remove hard bounces immediately (automated), suppress soft bounces after 3 failures, sunset subscribers with no engagement in 12+ months (send a re-engagement campaign first), and use email validation tools (ZeroBounce, NeverBounce) before importing new lists. Set up automatic suppression rules in your ESP.",
    commonPitfall:
      "Delaying list cleaning to protect vanity metrics like total subscriber count. A list of 100,000 with 20% active subscribers performs worse and costs more than a clean list of 30,000 highly engaged subscribers. Deliverability, revenue per subscriber, and metrics accuracy all improve with a cleaner list.",
    domain: "Email Marketing",
    type: "flashcard",
  },
  {
    id: "em-008",
    term: "Revenue Per Email (RPE)",
    definition:
      "A metric that measures the average revenue generated per email sent, calculated as Total Revenue from Email / Number of Emails Sent. RPE allows direct comparison of campaign efficiency and helps forecast the revenue impact of list growth. It is particularly useful for e-commerce email programs.",
    keyApplication:
      "Track RPE by campaign type, segment, and list to identify your highest-value sends. Promotional campaigns typically generate higher RPE than newsletters but have faster list fatigue. Balance high-RPE promotional sends with value-delivering content emails that maintain engagement and protect long-term list health.",
    commonPitfall:
      "Optimizing exclusively for short-term RPE by sending aggressive promotional emails to the entire list. This inflates immediate revenue while burning out subscribers, increasing unsubscribes, and degrading long-term list quality. Sustainable email revenue requires balancing promotional frequency with genuine value delivery.",
    domain: "Email Marketing",
    type: "flashcard",
  },
  {
    id: "em-scenario-001",
    term: "Email Revenue Projection",
    definition:
      "Forecasting the revenue impact of list growth and open rate improvements using revenue-per-email metrics.",
    keyApplication:
      "Use RPE projections to build business cases for email marketing investment and to set realistic growth targets for email program expansion.",
    commonPitfall:
      "Assuming RPE will remain constant as the list grows. As lists scale, engagement rates often decline due to broader, less targeted audience composition, reducing RPE even as total revenue grows.",
    domain: "Email Marketing",
    type: "scenario",
    narrative:
      "An e-commerce brand sends 4 promotional emails per month to a list of 85,000 subscribers. Their current average open rate is 22%, CTOR is 12%, and average order value is $95 with a 3% conversion rate of clickers. Calculate their current monthly email revenue and project the revenue impact of growing the list to 120,000 subscribers while maintaining all other metrics constant.",
    variables: {
      currentListSize: 85000,
      emailsPerMonth: 4,
      openRate: 0.22,
      ctor: 0.12,
      conversionRate: 0.03,
      aov: 95,
      projectedListSize: 120000,
    },
    correctAnswer: 31161.6,
    unit: "dollars projected monthly revenue",
    formula:
      "Openers = List x Open Rate; Clickers = Openers x CTOR; Conversions = Clickers x Conv Rate; Revenue per send = Conversions x AOV; Monthly Revenue = Revenue per send x Emails/Month",
    workedSolution:
      "Per email send: Openers = 85,000 x 22% = 18,700. Clickers = 18,700 x 12% = 2,244. Conversions = 2,244 x 3% = 67.32. Revenue = 67.32 x $95 = $6,395.40. Monthly Revenue (4 sends) = $6,395.40 x 4 = $25,581.60. Projected with 120,000 subscribers: Openers = 26,400; Clickers = 3,168; Conversions = 95.04; Revenue per send = $9,028.80; Monthly = $31,161.60 (increase of $5,580/month). Growing the list by 41% increases email revenue by the same proportion.",
    difficulty: "Intermediate",
  },
  {
    id: "em-scenario-002",
    term: "Abandoned Cart Email ROI",
    definition:
      "Calculating the revenue recovery and ROI of an automated abandoned cart email sequence against the cost of implementation and platform fees.",
    keyApplication:
      "Use abandoned cart ROI analysis to justify automation investment and prioritize the sequence as one of the highest-return email programs available to e-commerce businesses.",
    commonPitfall:
      "Attributing 100% of post-abandonment purchases to the cart recovery email without considering that some customers would have returned and purchased without the email. Use a holdout group to measure true incremental lift.",
    domain: "Email Marketing",
    type: "scenario",
    narrative:
      "An e-commerce store has 3,200 monthly cart abandonments with an average cart value of $140. They implement a 3-email abandoned cart sequence. The sequence recovers 8% of abandoned carts. The automation setup costs $800 (one-time) and the ESP adds $120/month for the automation feature. Calculate the monthly recovered revenue, first-month ROI, and steady-state monthly ROI (months 2+).",
    variables: {
      monthlyAbandonment: 3200,
      avgCartValue: 140,
      recoveryRate: 0.08,
      setupCost: 800,
      monthlyEspCost: 120,
    },
    correctAnswer: 2836.67,
    unit: "percent steady-state monthly ROI",
    formula:
      "Recovered Revenue = Abandonments x Recovery Rate x Cart Value; Month 1 ROI = ((Revenue - Setup - Monthly) / (Setup + Monthly)) x 100; Steady ROI = ((Revenue - Monthly ESP) / Monthly ESP) x 100",
    workedSolution:
      "Monthly recovered revenue = 3,200 x 8% x $140 = 256 x $140 = $35,840. Month 1 ROI = (($35,840 - $800 - $120) / ($800 + $120)) x 100 = ($34,920 / $920) x 100 = 3,795.7%. Steady-state monthly ROI (month 2+) = (($35,840 - $120) / $120) x 100 = ($35,720 / $120) x 100 = 29,766.7%. Abandoned cart automation is one of the highest-ROI email programs available, generating nearly $36K/month at a recurring cost of only $120/month.",
    difficulty: "Advanced",
  },
  {
    id: "em-scenario-003",
    term: "List Segment Revenue Comparison",
    definition:
      "Comparing revenue per email across subscriber segments to optimize sending strategy and budget allocation toward the highest-value audience groups.",
    keyApplication:
      "Use segment-level RPE analysis to decide which segments to prioritize for promotional sends, how frequently to email each segment, and where to focus acquisition efforts to grow the highest-LTV subscriber cohorts.",
    commonPitfall:
      "Focusing only on the highest-RPE segment and neglecting nurture of lower-engagement segments. Mid-tier segments often represent the largest opportunity for improvement and can be moved up-tier with the right content strategy.",
    domain: "Email Marketing",
    type: "scenario",
    narrative:
      "An email list of 60,000 subscribers is divided into three segments: Active buyers (8,000 subscribers, 38% open rate, 15% CTOR, $120 AOV, 5% conversion of clickers), Engaged non-buyers (22,000 subscribers, 28% open rate, 8% CTOR, $120 AOV, 1.5% conversion), Dormant subscribers (30,000 subscribers, 9% open rate, 3% CTOR, $120 AOV, 0.5% conversion). Calculate the revenue per email sent for each segment.",
    variables: {
      activeBuyersCount: 8000,
      activeBuyersOR: 0.38,
      activeBuyersCTOR: 0.15,
      activeBuyersConv: 0.05,
      engagedCount: 22000,
      engagedOR: 0.28,
      engagedCTOR: 0.08,
      engagedConv: 0.015,
      dormantCount: 30000,
      dormantOR: 0.09,
      dormantCTOR: 0.03,
      dormantConv: 0.005,
      aov: 120,
    },
    correctAnswer: 34.2,
    unit: "dollars RPE for active buyers",
    formula:
      "RPE = List Size x Open Rate x CTOR x Conversion Rate x AOV / List Size = Open Rate x CTOR x Conversion Rate x AOV",
    workedSolution:
      "Active Buyers RPE = 38% x 15% x 5% x $120 = 0.38 x 0.15 x 0.05 x $120 = $0.342 per email sent = $34.20 per 100 subscribers, or per email: $120 x 0.0028 per subscriber ≈ let's recalc precisely: 0.38 x 0.15 = 0.057 (clickers as % of list); 0.057 x 0.05 = 0.00285 (converters as % of list); 0.00285 x $120 = $0.342 per subscriber per send. For 8,000: $2,736 per send. Engaged Non-Buyers RPE per sub = 0.28 x 0.08 x 0.015 x $120 = $0.04032; total per send = $887. Dormant RPE per sub = 0.09 x 0.03 x 0.005 x $120 = $0.00162; total per send = $48.60. Active buyers generate 21x more revenue per email than dormant subscribers, confirming that list segmentation and suppression of dormant subscribers dramatically improves program economics.",
    difficulty: "Advanced",
  },
];
