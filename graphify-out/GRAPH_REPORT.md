# Graph Report - learningwebpage_marketing  (2026-10-18)

## Corpus Check
- 30 files · ~24,995 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: (none) 3, .css 1)

## Summary
- 150 nodes · 250 edges · 11 communities (10 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3560da72`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- TopicDetail.jsx
- index.js
- useStore
- Dashboard.jsx
- FlashcardEngine.jsx
- ScenarioEngine.jsx
- devDependencies
- dependencies
- Badge.jsx
- React + Vite

## God Nodes (most connected - your core abstractions)
1. `useStore` - 15 edges
2. `react` - 14 edges
3. `framer-motion` - 10 edges
4. `TopicDetail()` - 8 edges
5. `FlashcardEngine()` - 8 edges
6. `Confetti()` - 8 edges
7. `Dashboard()` - 7 edges
8. `App()` - 6 edges
9. `ProgressVault()` - 6 edges
10. `ScenarioEngine()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `App()` --calls--> `useStore`  [EXTRACTED]
  src/App.jsx → src/store/store.js
- `Dashboard()` --calls--> `useStore`  [EXTRACTED]
  src/components/Dashboard.jsx → src/store/store.js
- `TopicDetail()` --calls--> `FlashcardEngine()`  [EXTRACTED]
  src/components/TopicDetail.jsx → src/components/engines/FlashcardEngine.jsx
- `TopicDetail()` --calls--> `ScenarioEngine()`  [EXTRACTED]
  src/components/TopicDetail.jsx → src/components/engines/ScenarioEngine.jsx
- `TopicDetail()` --calls--> `useStore`  [EXTRACTED]
  src/components/TopicDetail.jsx → src/store/store.js

## Import Cycles
- None detected.

## Communities (11 total, 1 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.11
Nodes (21): name, private, scripts, build, dev, lint, preview, type (+13 more)

### Community 1 - "TopicDetail.jsx"
Cohesion: 0.15
Nodes (13): framer-motion, react, react-dom, App(), calculateDomainMastery(), getMasteryBadge(), ICON_MAP, springTransition (+5 more)

### Community 2 - "index.js"
Cohesion: 0.15
Nodes (10): analyticsConcepts, brandStrategyConcepts, contentMarketingConcepts, conversionOptimizationConcepts, emailMarketingConcepts, domainIcons, domainMap, performanceMarketingConcepts (+2 more)

### Community 3 - "useStore"
Cohesion: 0.23
Nodes (12): ConceptTile(), FilterPill(), MASTERY_FILTERS, ProgressVault(), StatCard(), useAnimatedCounter(), WeakSpotItem(), useStreak() (+4 more)

### Community 4 - "Dashboard.jsx"
Cohesion: 0.18
Nodes (11): lucide-react, Dashboard(), DAY_LABELS, getLastTouchedDomain(), getMasteryStats(), ICON_COMPONENTS, MasteryRing(), MOCK_HEIGHTS (+3 more)

### Community 5 - "FlashcardEngine.jsx"
Cohesion: 0.21
Nodes (13): buttonFadeIn, CardBack(), CardFront(), cardSlideRightExit, cardSlideVariants, CompletionScreen(), correctFlashVariants, FlashcardEngine() (+5 more)

### Community 6 - "ScenarioEngine.jsx"
Cohesion: 0.29
Nodes (8): DIFFICULTY_COLORS, highlightNumbers(), ScenarioEngine(), spring, validateAnswer(), COLORS, Confetti(), generateParticles()

### Community 7 - "devDependencies"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, @types/react, @types/react-dom (+2 more)

### Community 8 - "dependencies"
Cohesion: 0.25
Nodes (8): dependencies, framer-motion, lucide-react, react, react-dom, tailwindcss, @tailwindcss/vite, zustand

### Community 10 - "React + Vite"
Cohesion: 0.50
Nodes (3): Expanding the ESLint configuration, React Compiler, React + Vite

## Knowledge Gaps
- **3 isolated node(s):** `tailwindcss`, `@types/react`, `@types/react-dom`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 57 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `TopicDetail.jsx` to `package.json`, `useStore`, `Dashboard.jsx`, `FlashcardEngine.jsx`, `ScenarioEngine.jsx`?**
  _High betweenness centrality (0.279) - this node is a cross-community bridge._
- **What connects `tailwindcss`, `@types/react`, `@types/react-dom` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.10507246376811594 - nodes in this community are weakly interconnected._
- **Why does `framer-motion` connect `TopicDetail.jsx` to `package.json`, `useStore`, `Dashboard.jsx`, `FlashcardEngine.jsx`, `ScenarioEngine.jsx`, `Badge.jsx`?**
  _High betweenness centrality (0.240) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._