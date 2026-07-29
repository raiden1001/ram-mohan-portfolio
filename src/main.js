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

function brandMarkup(text) {
  let charIndex = 0;
  return text
    .split(/\s+/)
    .map((word) => {
      const letters = [...word]
        .map((ch) => {
          const delay = 0.18 + charIndex * 0.03;
          charIndex += 1;
          return `<span class="char" style="animation-delay:${delay}s">${escapeHtml(ch)}</span>`;
        })
        .join('');
      return `<span class="brand-word">${letters}</span>`;
    })
    .join('<span class="brand-space" aria-hidden="true"> </span>');
}

function socialHref(url) {
  return !url || url === '#' ? '#' : url;
}

function socialClass(url) {
  return !url || url === '#' ? 'is-placeholder' : '';
}

function resumeHref() {
  return `${import.meta.env.BASE_URL}Ram_Mohan_Resume.pdf`;
}

function resumeDownload(variant = 'hero') {
  return `
    <a
      class="resume-card resume-card--${variant}"
      href="${resumeHref()}"
      download="Ram_Mohan_Resume.pdf"
      aria-label="Download Ram Mohan resume as PDF"
    >
      <span class="resume-card-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M7 3.5h7.2L19 8.3V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 6 20V5a1.5 1.5 0 0 1 1-1.5Z" stroke="currentColor" stroke-width="1.5"/>
          <path d="M14 3.5V8h4.8" stroke="currentColor" stroke-width="1.5"/>
          <path d="M12 11v6.5M9.5 15.5 12 18l2.5-2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="resume-card-copy">
        <strong>Download resume</strong>
        <span>PDF · Senior Android Engineer</span>
      </span>
      <span class="resume-card-cta" aria-hidden="true">Get PDF</span>
    </a>
  `;
}

function androidLogo() {
  const src = `${import.meta.env.BASE_URL}android-logo.png`;
  return `
    <img class="brand-logo brand-logo--android" src="${src}" alt="" width="24" height="24" />
  `;
}

function appleLogo() {
  return `
    <svg class="brand-logo brand-logo--apple" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#eef6f2" d="M16.7 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3.1-1.6-1.3-.1-2.5.8-3.2.8-.7 0-1.7-.8-2.8-.7-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.5 1.1 8.6.7 1 1.6 2.2 2.8 2.1 1.1 0 1.5-.7 2.9-.7s1.7.7 2.9.7c1.2 0 1.9-1 2.6-2 .8-1.2 1.1-2.3 1.1-2.4-.1 0-2.2-.8-2.2-3.7zM14.7 6.3c.6-.8 1-1.8.9-2.9-1 0-2.1.6-2.8 1.4-.6.7-1.1 1.8-.9 2.8 1.1.1 2.2-.5 2.8-1.3z"/>
    </svg>
  `;
}

function heroVisual() {
  return `
    <div class="hero-visual" aria-hidden="true">
      <div class="hero-devices">
        <figure class="hero-device-card hero-device-card--pixel">
          <svg class="hero-device" viewBox="0 0 300 620" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="pixelBody" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#1a2e28"/>
                <stop offset="100%" stop-color="#0d1815"/>
              </linearGradient>
              <linearGradient id="pixelGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#3dffb0" stop-opacity="0.14"/>
                <stop offset="100%" stop-color="#ffb84a" stop-opacity="0.08"/>
              </linearGradient>
            </defs>
            <rect x="18" y="10" width="264" height="600" rx="34" fill="url(#pixelBody)" stroke="#3dffb0" stroke-opacity="0.45" stroke-width="2"/>
            <rect x="28" y="22" width="244" height="576" rx="28" fill="#050a08"/>
            <rect x="28" y="22" width="244" height="576" rx="28" fill="url(#pixelGlow)"/>
            <!-- Pixel hole-punch camera -->
            <circle cx="150" cy="42" r="7" fill="#050a08" stroke="#c8d4cf" stroke-opacity="0.2" stroke-width="1"/>
            <circle cx="150" cy="42" r="3.5" fill="#1a2e28"/>
            <rect x="48" y="78" width="120" height="10" rx="3" fill="#3dffb0" opacity="0.8"/>
            <rect x="48" y="104" width="188" height="6" rx="2" fill="#8a9a93" opacity="0.45"/>
            <rect x="48" y="122" width="150" height="6" rx="2" fill="#8a9a93" opacity="0.3"/>
            <rect x="48" y="168" width="90" height="78" rx="10" fill="#162420" stroke="#3dffb0" stroke-opacity="0.45"/>
            <rect x="150" y="168" width="90" height="78" rx="10" fill="#162420" stroke="#ffb84a" stroke-opacity="0.5"/>
            <rect x="48" y="264" width="192" height="56" rx="10" fill="#162420" stroke="#c8d4cf" stroke-opacity="0.12"/>
            <rect x="48" y="340" width="192" height="150" rx="12" fill="#101a17" stroke="#3dffb0" stroke-opacity="0.3"/>
            <rect x="108" y="560" width="84" height="5" rx="2.5" fill="#c8d4cf" opacity="0.45"/>
          </svg>
          <figcaption class="hero-device-label">
            <div class="hero-device-title">
              ${androidLogo()}
              <strong>Android</strong>
            </div>
            <span>Compose · Kotlin · Flutter</span>
          </figcaption>
        </figure>

        <figure class="hero-device-card hero-device-card--ios">
          <svg class="hero-device" viewBox="0 0 300 620" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="iosBody" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#1c2428"/>
                <stop offset="100%" stop-color="#0e1418"/>
              </linearGradient>
              <linearGradient id="iosGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#5ac8fa" stop-opacity="0.16"/>
                <stop offset="100%" stop-color="#ffb84a" stop-opacity="0.08"/>
              </linearGradient>
            </defs>
            <rect x="22" y="12" width="256" height="596" rx="48" fill="url(#iosBody)" stroke="#5ac8fa" stroke-opacity="0.4" stroke-width="2"/>
            <rect x="30" y="20" width="240" height="580" rx="42" fill="#070b0e"/>
            <rect x="30" y="20" width="240" height="580" rx="42" fill="url(#iosGlow)"/>
            <rect x="108" y="34" width="84" height="22" rx="11" fill="#05080a"/>
            <rect x="52" y="84" width="100" height="10" rx="3" fill="#5ac8fa" opacity="0.75"/>
            <rect x="52" y="110" width="176" height="6" rx="2" fill="#8a9a93" opacity="0.4"/>
            <rect x="52" y="154" width="196" height="64" rx="14" fill="#142028" stroke="#5ac8fa" stroke-opacity="0.4"/>
            <rect x="52" y="236" width="92" height="84" rx="16" fill="#142028" stroke="#ffb84a" stroke-opacity="0.45"/>
            <rect x="156" y="236" width="92" height="84" rx="16" fill="#142028" stroke="#5ac8fa" stroke-opacity="0.35"/>
            <rect x="52" y="340" width="196" height="120" rx="16" fill="#101820" stroke="#c8d4cf" stroke-opacity="0.15"/>
            <rect x="110" y="562" width="80" height="4" rx="2" fill="#c8d4cf" opacity="0.5"/>
          </svg>
          <figcaption class="hero-device-label">
            <div class="hero-device-title">
              ${appleLogo()}
              <strong>iOS</strong>
            </div>
            <span>Swift · Flutter</span>
          </figcaption>
        </figure>
      </div>
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
        <a href="${escapeHtml(socialHref(w.href))}" ${
          w.href === '#'
            ? 'aria-disabled="true" tabindex="-1" class="is-placeholder"'
            : 'target="_blank" rel="noopener noreferrer"'
        }>
          <span>${escapeHtml(w.title)}</span>
          <span class="arrow" aria-hidden="true">→</span>
        </a>
      </li>`,
    )
    .join('');
}

app.innerHTML = `
  <header class="site-header">
    <nav class="nav" aria-label="Primary">
      <a href="#work">Work</a>
      <a href="#process">Process</a>
      <a href="#writing">Writing</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero" aria-label="Introduction">
      <div class="hero-shell">
        <div class="hero-content">
          <p class="hero-role">${escapeHtml(resume.role)} · ${escapeHtml(resume.locationNote)}</p>
          <h1 class="hero-brand" aria-label="${escapeHtml(resume.brand)}">${brandMarkup(resume.brand)}</h1>
          <p class="hero-tagline">${escapeHtml(resume.tagline)}</p>
          <div class="hero-cta">
            <a class="btn btn-primary" href="#work">View work</a>
            <a class="btn btn-ghost" href="#contact">Contact</a>
          </div>
          ${resumeDownload('hero')}
        </div>
        ${heroVisual()}
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
        <h2 class="section-title section-title--contact" id="contact-title">
          <span class="section-title-line">Let’s build something</span>
          <span class="section-title-line">solid</span>
        </h2>
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
              ${resume.social.linkedin === '#' ? 'Add URL in resume.js' : 'LinkedIn'}
            </a>
          </div>
          <div class="contact-item">
            <span>GitHub</span>
            <a class="${socialClass(resume.social.github)}" href="${escapeHtml(socialHref(resume.social.github))}" ${resume.social.github === '#' ? 'aria-disabled="true"' : 'target="_blank" rel="noopener noreferrer"'}>
              ${resume.social.github === '#' ? 'Add URL in resume.js' : 'Profile'}
            </a>
          </div>
        </div>
        ${resumeDownload('contact')}
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
