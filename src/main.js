import './style.css';
import { resume } from './data/resume.js';

const app = document.querySelector('#app');

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function brandChars(text) {
  return [...text]
    .map((ch, i) => {
      const delay = 0.2 + i * 0.035;
      const content = ch === ' ' ? '&nbsp;' : escapeHtml(ch);
      return `<span class="char" style="animation-delay:${delay}s">${content}</span>`;
    })
    .join('');
}

function socialHref(url) {
  return !url || url === '#' ? '#' : url;
}

function socialClass(url) {
  return !url || url === '#' ? 'is-placeholder' : '';
}

function heroVisual() {
  return `
    <div class="hero-visual" aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#3dffb0" stop-opacity="0.25"/>
            <stop offset="55%" stop-color="#0a1210" stop-opacity="0"/>
            <stop offset="100%" stop-color="#ffb84a" stop-opacity="0.18"/>
          </linearGradient>
          <linearGradient id="phone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1a2e28"/>
            <stop offset="100%" stop-color="#0d1815"/>
          </linearGradient>
        </defs>
        <rect width="1440" height="900" fill="#0a1210"/>
        <path d="M900 0 L1440 0 L1440 900 L620 900 Z" fill="url(#g1)"/>
        <!-- Abstract device / architecture plane -->
        <g transform="translate(780 120)">
          <rect x="0" y="0" width="340" height="620" rx="36" fill="url(#phone)" stroke="#3dffb0" stroke-opacity="0.35" stroke-width="2"/>
          <rect x="24" y="48" width="292" height="500" rx="8" fill="#0a1210" stroke="#c8d4cf" stroke-opacity="0.12"/>
          <rect x="40" y="72" width="160" height="10" rx="2" fill="#3dffb0" opacity="0.7"/>
          <rect x="40" y="98" width="240" height="6" rx="2" fill="#8a9a93" opacity="0.5"/>
          <rect x="40" y="118" width="200" height="6" rx="2" fill="#8a9a93" opacity="0.35"/>
          <g opacity="0.85">
            <rect x="40" y="160" width="120" height="90" rx="6" fill="#162420" stroke="#3dffb0" stroke-opacity="0.4"/>
            <rect x="176" y="160" width="120" height="90" rx="6" fill="#162420" stroke="#ffb84a" stroke-opacity="0.45"/>
            <rect x="40" y="268" width="256" height="70" rx="6" fill="#162420" stroke="#c8d4cf" stroke-opacity="0.15"/>
            <rect x="40" y="356" width="256" height="120" rx="6" fill="#101a17" stroke="#3dffb0" stroke-opacity="0.25"/>
          </g>
          <circle cx="170" cy="580" r="14" fill="none" stroke="#8a9a93" stroke-opacity="0.4"/>
          <!-- Flow lines -->
          <path d="M-180 200 C-80 180, -40 260, 40 205" fill="none" stroke="#ffb84a" stroke-opacity="0.45" stroke-width="1.5" stroke-dasharray="6 8"/>
          <path d="M-160 320 C-60 300, -20 380, 40 340" fill="none" stroke="#3dffb0" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="4 10"/>
          <text x="-200" y="190" fill="#ffb84a" font-family="IBM Plex Mono, monospace" font-size="12" opacity="0.7">UI</text>
          <text x="-200" y="310" fill="#3dffb0" font-family="IBM Plex Mono, monospace" font-size="12" opacity="0.7">DOMAIN</text>
          <text x="-200" y="430" fill="#8a9a93" font-family="IBM Plex Mono, monospace" font-size="12" opacity="0.7">DATA</text>
          <path d="M-160 440 C-40 420, 0 500, 40 470" fill="none" stroke="#8a9a93" stroke-opacity="0.35" stroke-width="1.5" stroke-dasharray="3 8"/>
        </g>
      </svg>
    </div>
  `;
}

function renderMetrics() {
  return resume.metrics
    .map(
      (m) => `
      <div class="signal">
        <div class="signal-value" data-count="${m.value}" data-suffix="${escapeHtml(m.suffix)}">0${escapeHtml(m.suffix)}</div>
        <span class="signal-label">${escapeHtml(m.label)}</span>
        <span class="signal-detail">${escapeHtml(m.detail)}</span>
      </div>`,
    )
    .join('');
}

function renderTabs() {
  return resume.projects
    .map(
      (p, i) => `
      <button
        type="button"
        class="project-tab"
        role="tab"
        id="tab-${p.id}"
        aria-controls="panel-${p.id}"
        aria-selected="${i === 0 ? 'true' : 'false'}"
        tabindex="${i === 0 ? '0' : '-1'}"
        data-project="${p.id}"
      >
        <span class="project-tab-name">${escapeHtml(p.name)}</span>
        <span class="project-tab-meta">${escapeHtml(p.region)} · ${escapeHtml(p.type)}</span>
      </button>`,
    )
    .join('');
}

function renderPanels() {
  return resume.projects
    .map(
      (p, i) => `
      <article
        class="project-panel"
        role="tabpanel"
        id="panel-${p.id}"
        aria-labelledby="tab-${p.id}"
        ${i === 0 ? '' : 'hidden'}
        tabindex="0"
      >
        <p class="project-kicker">${escapeHtml(p.region)} · ${escapeHtml(p.type)}</p>
        <h3 class="project-headline">${escapeHtml(p.headline)}</h3>
        <div class="project-blocks">
          <div class="project-block">
            <h4>Problem</h4>
            <p>${escapeHtml(p.problem)}</p>
          </div>
          <div class="project-block">
            <h4>Approach</h4>
            <p>${escapeHtml(p.approach)}</p>
          </div>
          <div class="project-block" style="grid-column: 1 / -1">
            <h4>Impact</h4>
            <ul class="impact-list">
              ${p.impact.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="project-stack">
          ${p.stack.map((s) => `<span class="chip">${escapeHtml(s)}</span>`).join('')}
        </div>
        ${
          p.callout
            ? `<p class="project-callout">${escapeHtml(p.callout)}</p>`
            : ''
        }
      </article>`,
    )
    .join('');
}

function renderProcess() {
  return resume.process
    .map(
      (step) => `
      <div class="process-step">
        <div class="process-num">${escapeHtml(step.step)}</div>
        <h3>${escapeHtml(step.title)}</h3>
        <p>${escapeHtml(step.body)}</p>
      </div>`,
    )
    .join('');
}

function renderWriting() {
  return resume.writing
    .map(
      (w) => `
      <li>
        <a href="${escapeHtml(socialHref(w.href))}" ${w.href === '#' ? 'aria-disabled="true" tabindex="-1" class="is-placeholder"' : 'target="_blank" rel="noopener noreferrer"'}>
          <span>${escapeHtml(w.title)}</span>
          <span class="arrow" aria-hidden="true">→</span>
        </a>
      </li>`,
    )
    .join('');
}

app.innerHTML = `
  <header class="site-header">
    <a class="mark" href="#top">${escapeHtml(resume.brand)}</a>
    <nav class="nav" aria-label="Primary">
      <a href="#work">Work</a>
      <a href="#process">Process</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero" aria-label="Introduction">
      ${heroVisual()}
      <div class="hero-content">
        <p class="hero-role">${escapeHtml(resume.role)} · ${escapeHtml(resume.locationNote)}</p>
        <h1 class="hero-brand" aria-label="${escapeHtml(resume.brand)}">${brandChars(resume.brand)}</h1>
        <p class="hero-tagline">${escapeHtml(resume.tagline)}</p>
        <div class="hero-cta">
          <a class="btn btn-primary" href="#work">View work</a>
          <a class="btn btn-ghost" href="#contact">Contact</a>
        </div>
      </div>
    </section>

    <section class="signals" aria-label="Impact signals">
      <div class="signal-grid">
        ${renderMetrics()}
      </div>
    </section>

    <section class="section" id="work" aria-labelledby="work-title">
      <div class="section-inner">
        <p class="section-label">Selected work</p>
        <h2 class="section-title" id="work-title">Impact Atlas</h2>
        <p class="section-lede">
          Case studies from FinTech at scale to hybrid booking platforms — problem, approach, and measurable impact. No client screenshots; the numbers speak.
        </p>
        <div class="work-layout">
          <div class="project-rail" role="tablist" aria-label="Projects" id="project-tabs">
            ${renderTabs()}
          </div>
          <div id="project-panels">
            ${renderPanels()}
          </div>
        </div>
      </div>
    </section>

    <section class="section process" id="process" aria-labelledby="process-title">
      <div class="section-inner">
        <p class="section-label">How I build</p>
        <h2 class="section-title" id="process-title">Prompt → architecture → ship</h2>
        <p class="section-lede">
          AI-assisted with Cursor and Codex — paired with Clean Architecture, Compose, and disciplined release practice across Android, Flutter hybrid, and iOS.
        </p>
        <div class="process-steps">
          ${renderProcess()}
        </div>
      </div>
    </section>

    <section class="section" id="writing" aria-labelledby="writing-title">
      <div class="section-inner">
        <p class="section-label">Writing</p>
        <h2 class="section-title" id="writing-title">Thought leadership</h2>
        <ul class="writing-list">
          ${renderWriting()}
        </ul>
      </div>
    </section>

    <section class="section contact" id="contact" aria-labelledby="contact-title">
      <div class="section-inner">
        <p class="section-label">Contact</p>
        <h2 class="section-title" id="contact-title">Let’s build something solid</h2>
        <p class="section-lede">${escapeHtml(resume.summary)}</p>
        <div class="contact-row">
          <div class="contact-item">
            <span>Email</span>
            <a href="mailto:${escapeHtml(resume.email)}">${escapeHtml(resume.email)}</a>
          </div>
          <div class="contact-item">
            <span>Phone</span>
            <a href="tel:${escapeHtml(resume.phone.replace(/\s/g, ''))}">${escapeHtml(resume.phone)}</a>
          </div>
          <div class="contact-item">
            <span>LinkedIn</span>
            <a class="${socialClass(resume.social.linkedin)}" href="${escapeHtml(socialHref(resume.social.linkedin))}" ${resume.social.linkedin === '#' ? 'aria-disabled="true"' : 'target="_blank" rel="noopener noreferrer"'}>
              ${resume.social.linkedin === '#' ? 'Add URL in resume.js' : 'Profile'}
            </a>
          </div>
          <div class="contact-item">
            <span>GitHub</span>
            <a class="${socialClass(resume.social.github)}" href="${escapeHtml(socialHref(resume.social.github))}" ${resume.social.github === '#' ? 'aria-disabled="true"' : 'target="_blank" rel="noopener noreferrer"'}>
              ${resume.social.github === '#' ? 'Add URL in resume.js' : 'Profile'}
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    © ${new Date().getFullYear()} ${escapeHtml(resume.name)} · ${escapeHtml(resume.employer.title)} · ${escapeHtml(resume.employer.company)}
  </footer>
`;

/* —— Interactions —— */

function selectProject(id) {
  const tabs = [...document.querySelectorAll('.project-tab')];
  const panels = [...document.querySelectorAll('.project-panel')];

  tabs.forEach((tab) => {
    const selected = tab.dataset.project === id;
    tab.setAttribute('aria-selected', selected ? 'true' : 'false');
    tab.tabIndex = selected ? 0 : -1;
  });

  panels.forEach((panel) => {
    const match = panel.id === `panel-${id}`;
    panel.hidden = !match;
    if (match) {
      panel.classList.remove('is-enter');
      // reflow for re-animation
      void panel.offsetWidth;
      panel.classList.add('is-enter');
    }
  });
}

function initProjectRail() {
  const tablist = document.getElementById('project-tabs');
  if (!tablist) return;

  tablist.addEventListener('click', (e) => {
    const tab = e.target.closest('.project-tab');
    if (!tab) return;
    selectProject(tab.dataset.project);
  });

  tablist.addEventListener('keydown', (e) => {
    const tabs = [...tablist.querySelectorAll('.project-tab')];
    const current = document.activeElement;
    const idx = tabs.indexOf(current);
    if (idx < 0) return;

    let next = idx;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      next = (idx + 1) % tabs.length;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      next = (idx - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      next = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      next = tabs.length - 1;
    } else {
      return;
    }

    tabs[next].focus();
    selectProject(tabs[next].dataset.project);
  });
}

function animateCount(el, target, suffix, duration = 1200) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    el.textContent = `${target}${suffix}`;
    return;
  }

  const start = performance.now();
  const from = 0;

  function frame(now) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - (1 - t) ** 3;
    const value = Math.round(from + (target - from) * eased);
    el.textContent = `${value}${suffix}`;
    if (t < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

function initMetricCounters() {
  const nodes = document.querySelectorAll('.signal-value[data-count]');
  if (!nodes.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        animateCount(el, target, suffix);
        obs.unobserve(el);
      });
    },
    { threshold: 0.4 },
  );

  nodes.forEach((n) => observer.observe(n));
}

initProjectRail();
initMetricCounters();
