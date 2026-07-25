/** Resume content — edit here to update the portfolio. */
export const resume = {
  name: 'Ram Mohan',
  brand: 'RAM MOHAN',
  role: 'Senior Android Engineer',
  tagline:
    'Building high-scale FinTech and hybrid mobile apps for remote teams across Taiwan, the UK, Germany, Japan, and France.',
  locationNote: 'Remote · FinTech · Jetpack Compose',
  email: 'ram10.rm6@gmail.com',
  phone: '+91 9497891704',
  social: {
    linkedin: '#',
    github: '#',
  },
  summary:
    'Senior Android Engineer with 4+ years building high-scale FinTech and hybrid mobile applications, including a banking platform serving 500K+ active users. Specializes in Kotlin, Jetpack Compose, and Clean Architecture — bridging native Android, iOS (Swift), and Flutter to ship cross-platform features without full rewrites.',
  metrics: [
    { value: 63, suffix: '%', label: 'Faster app launch', detail: 'Line Bank performance' },
    { value: 28, suffix: '%', label: 'Fewer state bugs', detail: 'Redux-style ViewModels' },
    { value: 500, suffix: 'K+', label: 'Active users', detail: 'Enterprise FinTech' },
    { value: 4, suffix: '+', label: 'Years shipping', detail: 'Fully remote' },
  ],
  competencies: {
    languages: ['Kotlin', 'Java', 'Dart', 'Swift'],
    android: ['Android SDK', 'Multi-module Architecture', 'Jetpack Compose', 'Material 3'],
    architecture: ['MVVM', 'MVI', 'Clean Architecture', 'Hilt', 'Coroutines / Flow'],
    crossPlatform: ['Flutter hybrid', 'MethodChannel', 'iOS / TestFlight / App Store'],
    tooling: ['Cursor', 'Codex', 'Jenkins', 'GitLab CI/CD', 'LeakCanary'],
  },
  projects: [
    {
      id: 'line-bank',
      name: 'Line Bank',
      region: 'Taiwan',
      type: 'Enterprise FinTech',
      headline: '500K+ users · 50+ engineers',
      problem:
        'A large-scale banking app needed faster launches, fewer state bugs, and banking-grade security across 50+ screens.',
      approach:
        'Restructured coroutines, eliminated 50+ memory leaks, engineered a Redux-inspired StateFlow ViewModel framework, and led Jetpack Compose migration while delivering P2P, QR payments, and secure beneficiary flows with Keystore + ECDSA + biometrics.',
      impact: [
        '63% faster app launch',
        '28% fewer state-management bugs',
        '25% less UI boilerplate via Compose',
        '54 UAT/production issues resolved',
      ],
      stack: ['Kotlin', 'Compose', 'StateFlow', 'Hilt', 'Security'],
    },
    {
      id: 'swimple',
      name: 'Swimple',
      region: 'UK',
      type: 'Hybrid booking & e-commerce',
      headline: 'Flutter inside native · AI-accelerated delivery',
      problem:
        'A booking platform needed incremental feature rollout across Android, Flutter, and iOS without a full rewrite — while stabilizing a fragile multi-module CI pipeline.',
      approach:
        'Architected a hybrid environment embedding Flutter modules in native Android, engineered a secure MethodChannel bridge for WebView checkout/payments, shipped native iOS in Swift through TestFlight to App Store, and accelerated delivery with Cursor and Codex as informal tech lead.',
      impact: [
        '43% fewer CI build failures',
        'Incremental hybrid rollout without rewrite',
        'Secure Flutter↔Native payment sessions',
        'End-to-end iOS release ownership',
      ],
      stack: ['Kotlin', 'Flutter', 'Swift', 'MethodChannel', 'CI/CD'],
      callout:
        'Prompt → ship: AI-assisted planning and implementation compressed cross-platform delivery cycles while keeping architecture intentional.',
    },
    {
      id: 'near2you',
      name: 'Near2You',
      region: 'Social',
      type: 'Location-aware social',
      headline: 'Maps · Firebase · Compose system',
      problem:
        'Needed real-time, location-aware social features with a reusable Compose UI system and solid local sync.',
      approach:
        'Integrated Google Maps, Firebase auth, and Room for local storage/sync; designed a Material Compose UI system with smooth navigation; mentored juniors through architecture reviews while shipping media upload workflows.',
      impact: [
        'Reusable Compose design system',
        'Real-time location features',
        'Mentored junior Android engineers',
      ],
      stack: ['Compose', 'Maps', 'Firebase', 'Room'],
    },
    {
      id: 'event-app',
      name: 'Event App',
      region: 'Germany',
      type: 'Municipal platform',
      headline: 'Sole Android engineer · full-lifecycle launch',
      problem:
        'A municipal news and events platform needed engagement, performance, and WCAG accessibility — delivered on schedule by a single Android engineer.',
      approach:
        'Integrated WebSockets, WorkManager sync, and calendar/notifications; optimized screen loads; shipped TalkBack support and content descriptions for accessibility compliance.',
      impact: [
        '22% higher engagement',
        '31% faster screen loads',
        'WCAG / TalkBack compliance',
      ],
      stack: ['Kotlin', 'WebSocket', 'WorkManager', 'Accessibility'],
    },
    {
      id: 'cariteko',
      name: 'Cariteko',
      region: 'Japan',
      type: 'Car rental',
      headline: 'Booking · payments · live tracking',
      problem:
        'Car rental flows needed reliable booking/payments with maps and real-time vehicle tracking — without crash-prone paths.',
      approach:
        'Built booking and payment workflows with Google Maps SDK and live tracking; used Android Profiler and memory optimization to stabilize crash-prone flows.',
      impact: [
        'Stable booking & payment paths',
        'Real-time vehicle tracking',
        'Profiler-driven crash reduction',
      ],
      stack: ['Kotlin', 'Maps SDK', 'Payments'],
    },
    {
      id: 'ago',
      name: 'AGO Recommendations',
      region: 'France',
      type: 'HealthTech',
      headline: 'Modular medical content · offline-first',
      problem:
        'Breast cancer guideline content updates frequently; clinicians needed offline access, notes, and favorites with high release quality.',
      approach:
        'Built a modular WebView app rendering HTML medical content with offline access, notes, and favorites; led weekly code reviews across two release cycles.',
      impact: [
        '34% fewer production defects',
        'Offline guidelines with notes/favorites',
        'Quality via structured reviews',
      ],
      stack: ['Kotlin', 'WebView', 'Offline'],
    },
  ],
  process: [
    {
      step: '01',
      title: 'Prompt',
      body: 'Capture intent with precise prompts — constraints, architecture, and acceptance criteria before code.',
    },
    {
      step: '02',
      title: 'Architecture',
      body: 'Clean Architecture + multi-module boundaries. Compose UI, Flow state, Hilt DI — decisions that scale.',
    },
    {
      step: '03',
      title: 'Ship',
      body: 'Native, Flutter hybrid, or iOS bridge as needed. CI green, TestFlight → store, metrics in production.',
    },
  ],
  writing: [
    {
      title: 'Jetpack Compose vs XML – The 2025 Face-off for Android UI Supremacy',
      href: '#',
    },
    {
      title: 'Clean Architecture in Android – What I Did Right, What Broke, and How to Fix It',
      href: '#',
    },
  ],
  education: [
    'B.Tech in Computer Science Engineering — University College of Engineering Trivandrum (2021)',
    'Meta Android Developer Professional Certificate',
    'ServiceNow Certified System Administrator',
    'Freshdesk Product Expert Certification',
  ],
  employer: {
    title: 'Senior Android Engineer',
    company: 'Simplogics Solutions Pvt Ltd',
    period: 'Nov 2021 – Present',
  },
};
