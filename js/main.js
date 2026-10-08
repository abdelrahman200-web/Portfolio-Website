// ==============================================================================
// Abdelrahman Saeed — Portfolio Core Interactions & Logic (2026)
// ==============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderProjects('all');
  initFilterTabs();
  initModal();
  initMobileMenu();
  initNavObserver();
  initCopyEmail();
  initContactForm();
});

/* --------------------------------------------------------------------------
   Theme Management (Dark / Light)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('as_portfolio_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'dark'); // Default dark
  document.documentElement.setAttribute('data-theme', initialTheme);
  updateThemeIcon(initialTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('as_portfolio_theme', next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'light') {
    // Show Moon icon to switch to dark
    icon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
  } else {
    // Show Sun icon to switch to light
    icon.innerHTML = `
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    `;
  }
}

/* --------------------------------------------------------------------------
   Project Rendering & Category Filtering
   -------------------------------------------------------------------------- */
function renderProjects(activeCategory) {
  const container = document.getElementById('projects-grid');
  if (!container || !window.PORTFOLIO_PROJECTS) return;

  const filtered = activeCategory === 'all'
    ? window.PORTFOLIO_PROJECTS
    : window.PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  container.innerHTML = filtered.map(project => {
    const badgeClass = project.badgeType === 'production' 
      ? 'badge-production' 
      : project.badgeType === 'enterprise' 
        ? 'badge-enterprise' 
        : 'badge-academic';

    const metricsHtml = project.metrics ? project.metrics.map(m => `
      <div class="proj-metric-pill">
        <span>${m.label}:</span> <strong>${m.value}</strong>
      </div>
    `).join('') : '';

    const techHtml = project.technologies.slice(0, 5).map(t => `
      <span class="tech-tag">${t}</span>
    `).join('');

    const githubLinkHtml = project.github ? `
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="proj-icon-link" title="View Source on GitHub">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
    ` : '';

    return `
      <article class="project-card ${project.featured ? 'featured-card' : ''}" data-project-id="${project.id}">
        <div>
          <div class="project-card-top">
            <span class="project-badge ${badgeClass}">${project.badge}</span>
            <span class="project-context">${project.role} • ${project.period}</span>
          </div>

          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.shortDescription}</p>

          <div class="engineering-story-block">
            <div class="story-line">
              <span class="story-label label-problem">Problem:</span>
              <span>${project.story.problem.length > 160 ? project.story.problem.substring(0, 160) + '...' : project.story.problem}</span>
            </div>
            <div class="story-line">
              <span class="story-label label-solution">Solution:</span>
              <span>${project.story.approach.length > 160 ? project.story.approach.substring(0, 160) + '...' : project.story.approach}</span>
            </div>
            <div class="story-line">
              <span class="story-label label-impact">Impact:</span>
              <span>${project.story.results}</span>
            </div>
          </div>

          ${metricsHtml ? `<div class="project-metrics-strip">${metricsHtml}</div>` : ''}
          <div class="project-tech-tags">${techHtml}</div>
        </div>

        <div class="project-card-footer">
          <button class="btn-deep-dive" onclick="openProjectModal('${project.id}')">
            <span>Architecture & Deep Dive</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <div class="project-links">
            ${githubLinkHtml}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function initFilterTabs() {
  const filterButtons = document.querySelectorAll('.filter-chip');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter') || 'all';
      renderProjects(category);
    });
  });
}

/* --------------------------------------------------------------------------
   Project Deep Dive Modal Management
   -------------------------------------------------------------------------- */
function initModal() {
  const backdrop = document.getElementById('project-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && backdrop) {
    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

window.openProjectModal = function(projectId) {
  const project = (window.PORTFOLIO_PROJECTS || []).find(p => p.id === projectId);
  if (!project) return;

  const backdrop = document.getElementById('project-modal-backdrop');
  const titleElem = document.getElementById('modal-title');
  const badgeElem = document.getElementById('modal-badge');
  const metaElem = document.getElementById('modal-meta');
  const bodyElem = document.getElementById('modal-body-content');
  const githubElem = document.getElementById('modal-github-link');

  if (!backdrop) return;

  titleElem.textContent = project.title;
  badgeElem.textContent = project.badge;
  badgeElem.className = `project-badge ${
    project.badgeType === 'production' ? 'badge-production' :
    project.badgeType === 'enterprise' ? 'badge-enterprise' : 'badge-academic'
  }`;
  metaElem.textContent = `${project.role} | ${project.client} | ${project.period}`;

  if (project.github) {
    githubElem.style.display = 'inline-flex';
    githubElem.href = project.github;
  } else {
    githubElem.style.display = 'none';
  }

  const architectureSteps = project.story.architecture 
    ? project.story.architecture.map(step => `<div class="modal-step-item">${step}</div>`).join('')
    : '<div class="modal-step-item">End-to-end modular pipeline.</div>';

  const techBadges = project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('');
  const metricsBadges = project.metrics ? project.metrics.map(m => `
    <div class="proj-metric-pill">
      <span>${m.label}:</span> <strong>${m.value}</strong>
    </div>
  `).join('') : '';

  bodyElem.innerHTML = `
    <div>
      <div class="modal-section-title">01 // Problem & Context</div>
      <p class="modal-text">${project.story.problem}</p>
    </div>

    <div>
      <div class="modal-section-title">02 // Technical Approach & Solution</div>
      <p class="modal-text">${project.story.approach}</p>
    </div>

    <div>
      <div class="modal-section-title">03 // Architecture & System Workflow</div>
      <div class="modal-steps-list">
        ${architectureSteps}
      </div>
    </div>

    <div>
      <div class="modal-section-title">04 // Implementation & Production Considerations</div>
      <p class="modal-text">${project.story.implementation}</p>
    </div>

    <div>
      <div class="modal-section-title">05 // Results & Verified Metrics</div>
      <p class="modal-text" style="color: var(--text-primary); font-weight: 500;">${project.story.results}</p>
      ${metricsBadges ? `<div class="project-metrics-strip" style="margin-top: 12px;">${metricsBadges}</div>` : ''}
    </div>

    <div>
      <div class="modal-section-title">06 // Complete Tech Stack</div>
      <div class="project-tech-tags" style="margin-bottom: 0;">${techBadges}</div>
    </div>
  `;

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  const backdrop = document.getElementById('project-modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* --------------------------------------------------------------------------
   Mobile Navigation Menu
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   Scrollspy & Active Navigation Observer
   -------------------------------------------------------------------------- */
function initNavObserver() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   Clipboard & Toast Notifications
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'abdelrahman.saeed.eng01@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('Copied email to clipboard!');
      copyBtn.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.textContent = 'Copy';
      }, 2500);
    }).catch(() => {
      showToast('Email: abdelrahman.saeed.eng01@gmail.com');
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* --------------------------------------------------------------------------
   Contact Form Handler
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value;
    const email = document.getElementById('form-email').value;
    const subject = document.getElementById('form-subject').value || 'AI Engineer Inquiry';
    const message = document.getElementById('form-message').value;

    const mailtoUrl = `mailto:abdelrahman.saeed.eng01@gmail.com?subject=${encodeURIComponent(`[Portfolio] ${subject} - from ${name}`)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
    
    window.location.href = mailtoUrl;
    showToast('Opening default email client...');
    form.reset();
  });
}
