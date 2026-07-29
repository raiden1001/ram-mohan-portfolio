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
  const androidSrc = `${import.meta.env.BASE_URL}android-logo.png`;
  return `
    <div class="hero-visual">
      <div class="hero-devices">
        <figure class="hero-device-card hero-device-card--android" data-device="android" tabindex="0" role="button" aria-label="Android device — hover or click to reveal Android logo">
          <div class="device-shell device-shell--android">
            <div class="device-frame">
              <span class="device-camera device-camera--punch" aria-hidden="true"></span>
              <div class="device-screen">
                <div class="device-status">
                  <span></span><span></span><span></span>
                </div>
                <div class="device-ui device-ui--android">
                  <div class="ui-chip ui-chip--mint"></div>
                  <div class="ui-row">
                    <div class="ui-tile"></div>
                    <div class="ui-tile ui-tile--amber"></div>
                  </div>
                  <div class="ui-banner"></div>
                  <div class="ui-panel"></div>
                </div>
                <img class="device-pop-logo" src="${androidSrc}" alt="" width="72" height="72" />
              </div>
              <span class="device-gesture" aria-hidden="true"></span>
            </div>
          </div>
          <figcaption class="hero-device-label">
            <div class="hero-device-title">
              ${androidLogo()}
              <strong>Android</strong>
            </div>
            <span>Compose · Kotlin · Flutter</span>
          </figcaption>
        </figure>

        <figure class="hero-device-card hero-device-card--ios" data-device="ios" aria-label="iOS device">
          <div class="device-shell device-shell--ios">
            <div class="device-frame">
              <span class="device-camera device-camera--island" aria-hidden="true"></span>
              <div class="device-screen">
                <div class="device-status device-status--ios">
                  <span></span><span></span>
                </div>
                <div class="device-ui device-ui--ios">
                  <div class="ui-chip ui-chip--blue"></div>
                  <div class="ui-banner ui-banner--ios"></div>
                  <div class="ui-row">
                    <div class="ui-tile ui-tile--ios"></div>
                    <div class="ui-tile ui-tile--ios-alt"></div>
                  </div>
                  <div class="ui-panel ui-panel--ios"></div>
                </div>
              </div>
              <span class="device-gesture" aria-hidden="true"></span>
            </div>
          </div>
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
initAndroidPop();

function initAndroidPop() {
  const card = document.querySelector('.hero-device-card--android');
  if (!card) return;

  card.addEventListener('click', () => {
    card.classList.toggle('is-popped');
  });

  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.classList.toggle('is-popped');
    }
  });
}
