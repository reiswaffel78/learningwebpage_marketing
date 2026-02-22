import { seoConcepts } from "./seo.js";
import { performanceMarketingConcepts } from "./performance-marketing.js";
import { contentMarketingConcepts } from "./content-marketing.js";
import { socialMediaConcepts } from "./social-media.js";
import { emailMarketingConcepts } from "./email-marketing.js";
import { analyticsConcepts } from "./analytics.js";
import { brandStrategyConcepts } from "./brand-strategy.js";
import { conversionOptimizationConcepts } from "./conversion-optimization.js";

/**
 * domainMap – keyed by domain display name, each value is an array of concept objects.
 */
export const domainMap = {
  SEO: seoConcepts,
  "Performance Marketing": performanceMarketingConcepts,
  "Content Marketing": contentMarketingConcepts,
  "Social Media": socialMediaConcepts,
  "Email Marketing": emailMarketingConcepts,
  Analytics: analyticsConcepts,
  "Brand Strategy": brandStrategyConcepts,
  "Conversion Optimization": conversionOptimizationConcepts,
};

/**
 * domainIcons – maps each domain name to a Lucide icon component name string.
 * Dashboard dynamically resolves these to actual Lucide components.
 */
export const domainIcons = {
  SEO: "Search",
  "Performance Marketing": "TrendingUp",
  "Content Marketing": "FileText",
  "Social Media": "Share2",
  "Email Marketing": "Mail",
  Analytics: "BarChart3",
  "Brand Strategy": "Award",
  "Conversion Optimization": "Target",
};
