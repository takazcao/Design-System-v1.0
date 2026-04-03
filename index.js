/* ============================================================
   Design System v1.0 — Interactive JavaScript
   ============================================================ */

(function () {
  'use strict';

  // ——————————————————————————————————————————————
  // 1. COLOR PALETTES (dynamic swatch generation)
  // ——————————————————————————————————————————————
  const palettes = {
    blue:    ['#eff6ff','#dbeafe','#bfdbfe','#93c5fd','#60a5fa','#3b82f6','#2563eb','#1d4ed8','#1e40af','#1e3a8a'],
    purple:  ['#faf5ff','#f3e8ff','#e9d5ff','#d8b4fe','#c084fc','#a855f7','#9333ea','#7e22ce','#6b21a8','#581c87'],
    teal:    ['#f0fdfa','#ccfbf1','#99f6e4','#5eead4','#2dd4bf','#14b8a6','#0d9488','#0f766e','#115e59','#134e4a'],
    green:   ['#f0fdf4','#dcfce7','#bbf7d0','#86efac','#4ade80','#22c55e','#16a34a','#15803d','#166534','#14532d'],
    amber:   ['#fffbeb','#fef3c7','#fde68a','#fcd34d','#fbbf24','#f59e0b','#d97706','#b45309','#92400e','#78350f'],
    red:     ['#fef2f2','#fee2e2','#fecaca','#fca5a5','#f87171','#ef4444','#dc2626','#b91c1c','#991b1b','#7f1d1d'],
    neutral: ['#fafafa','#f5f5f5','#e5e5e5','#d4d4d4','#a3a3a3','#737373','#525252','#404040','#262626','#171717']
  };

  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  Object.entries(palettes).forEach(([name, colors]) => {
    const container = document.getElementById(`palette-${name}`);
    if (!container) return;
    colors.forEach((hex, i) => {
      const swatch = document.createElement('div');
      swatch.className = 'color-swatch';
      swatch.style.background = hex;
      swatch.innerHTML = `<span class="swatch-tooltip">${name}-${steps[i]}<br>${hex}</span>`;
      swatch.addEventListener('click', () => {
        navigator.clipboard.writeText(hex).then(() => showToast('info', `Copied ${hex} to clipboard`));
      });
      container.appendChild(swatch);
    });
  });

  // Semantic colors
  const semanticTokens = [
    { name: 'Primary',        var: '--color-primary'       },
    { name: 'Primary Hover',  var: '--color-primary-hover'  },
    { name: 'On Primary',     var: '--color-on-primary'     },
    { name: 'Background',     var: '--color-bg'             },
    { name: 'Surface',        var: '--color-surface'        },
    { name: 'Surface Raised', var: '--color-surface-raised' },
    { name: 'Text',           var: '--color-text'           },
    { name: 'Text Secondary', var: '--color-text-secondary' },
    { name: 'Border',         var: '--color-border'         },
    { name: 'Success',        var: '--color-success'        },
    { name: 'Warning',        var: '--color-warning'        },
    { name: 'Danger',         var: '--color-danger'         },
    { name: 'Info',           var: '--color-info'           },
    { name: 'Focus Ring',     var: '--color-focus-ring'     },
  ];

  const semanticContainer = document.getElementById('semantic-colors');
  if (semanticContainer) {
    semanticTokens.forEach(token => {
      const computed = getComputedStyle(document.documentElement).getPropertyValue(token.var).trim();
      const div = document.createElement('div');
      div.className = 'semantic-swatch';
      div.innerHTML = `
        <div class="semantic-swatch-color" style="background:var(${token.var});"></div>
        <span class="semantic-swatch-name">${token.name}</span>
        <span class="semantic-swatch-value">${token.var}</span>
      `;
      semanticContainer.appendChild(div);
    });
  }

  // ——————————————————————————————————————————————
  // 2. TYPOGRAPHY SCALE
  // ——————————————————————————————————————————————
  const typeScale = [
    { name: 'Display LG', size: '48px', weight: 900, lineHeight: '1.1',  letterSpacing: '-0.03em', preview: 'The quick brown fox' },
    { name: 'Display MD', size: '36px', weight: 800, lineHeight: '1.15', letterSpacing: '-0.02em', preview: 'The quick brown fox' },
    { name: 'Heading LG', size: '28px', weight: 700, lineHeight: '1.2',  letterSpacing: '-0.01em', preview: 'The quick brown fox jumps' },
    { name: 'Heading MD', size: '22px', weight: 700, lineHeight: '1.3',  letterSpacing: '-0.01em', preview: 'The quick brown fox jumps over' },
    { name: 'Heading SM', size: '18px', weight: 600, lineHeight: '1.35', letterSpacing: '0',       preview: 'The quick brown fox jumps over the lazy' },
    { name: 'Body LG',    size: '16px', weight: 400, lineHeight: '1.6',  letterSpacing: '0',       preview: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Body MD',    size: '14px', weight: 400, lineHeight: '1.6',  letterSpacing: '0',       preview: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Body SM',    size: '13px', weight: 400, lineHeight: '1.5',  letterSpacing: '0.01em',  preview: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Caption',    size: '12px', weight: 500, lineHeight: '1.4',  letterSpacing: '0.02em',  preview: 'The quick brown fox jumps over the lazy dog' },
    { name: 'Label',      size: '11px', weight: 700, lineHeight: '1.3',  letterSpacing: '0.06em',  preview: 'THE QUICK BROWN FOX JUMPS OVER' },
  ];

  const typeContainer = document.getElementById('type-scale');
  if (typeContainer) {
    typeScale.forEach(t => {
      const row = document.createElement('div');
      row.className = 'type-row';
      row.innerHTML = `
        <div class="type-meta">
          <span class="type-name">${t.name}</span>
          <span class="type-specs">${t.size} / ${t.lineHeight}</span>
        </div>
        <div class="type-preview" style="font-size:${t.size};font-weight:${t.weight};line-height:${t.lineHeight};letter-spacing:${t.letterSpacing};">${t.preview}</div>
      `;
      typeContainer.appendChild(row);
    });
  }

  // ——————————————————————————————————————————————
  // 3. SPACING SCALE
  // ——————————————————————————————————————————————
  const spacingTokens = [
    { name: 'sp-0',  value: 0  },
    { name: 'sp-1',  value: 4  },
    { name: 'sp-2',  value: 8  },
    { name: 'sp-3',  value: 12 },
    { name: 'sp-4',  value: 16 },
    { name: 'sp-5',  value: 20 },
    { name: 'sp-6',  value: 24 },
    { name: 'sp-8',  value: 32 },
    { name: 'sp-10', value: 40 },
    { name: 'sp-12', value: 48 },
    { name: 'sp-16', value: 64 },
  ];

  const spacingContainer = document.getElementById('spacing-scale');
  if (spacingContainer) {
    spacingTokens.forEach(sp => {
      const row = document.createElement('div');
      row.className = 'spacing-row';
      row.innerHTML = `
        <span class="spacing-label">${sp.name}</span>
        <div class="spacing-bar" style="width:${sp.value}px;"></div>
        <span class="spacing-value">${sp.value}px</span>
      `;
      spacingContainer.appendChild(row);
    });
  }

  // Radius demo
  const radiusTokens = [
    { name: 'none', value: '0'      },
    { name: 'sm',   value: '4px'    },
    { name: 'md',   value: '8px'    },
    { name: 'lg',   value: '16px'   },
    { name: 'xl',   value: '24px'   },
    { name: 'full', value: '9999px' },
  ];

  const radiusContainer = document.getElementById('radius-demo');
  if (radiusContainer) {
    radiusTokens.forEach(r => {
      const item = document.createElement('div');
      item.className = 'radius-item';
      item.style.borderRadius = r.value;
      item.textContent = r.name;
      radiusContainer.appendChild(item);
    });
  }

  // ——————————————————————————————————————————————
  // 4. ELEVATION GRID
  // ——————————————————————————————————————————————
  const elevations = [
    { level: 'elevation-0', shadow: 'var(--shadow-0)', desc: 'Flat surfaces'     },
    { level: 'elevation-1', shadow: 'var(--shadow-1)', desc: 'Cards, dropdowns'  },
    { level: 'elevation-2', shadow: 'var(--shadow-2)', desc: 'Modals, popovers'  },
    { level: 'elevation-3', shadow: 'var(--shadow-3)', desc: 'Dialogs, toasts'   },
  ];

  const elevationContainer = document.getElementById('elevation-grid');
  if (elevationContainer) {
    elevations.forEach(e => {
      const card = document.createElement('div');
      card.className = 'elevation-card';
      card.style.boxShadow = e.shadow;
      card.innerHTML = `
        <span class="elevation-label">${e.level}</span>
        <span class="elevation-desc">${e.desc}</span>
      `;
      elevationContainer.appendChild(card);
    });
  }

  // ——————————————————————————————————————————————
  // 5. ICON GRID
  // ——————————————————————————————————————————————
  const icons = [
    { name: 'Home',      svg: '<path d="M3 10.5L10 4l7 6.5V18a1 1 0 01-1 1H4a1 1 0 01-1-1v-7.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 19v-5h4v5" stroke="currentColor" stroke-width="1.5"/>' },
    { name: 'User',      svg: '<path d="M10 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM3 17.5c0-3.04 3.13-5.5 7-5.5s7 2.46 7 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
    { name: 'Search',    svg: '<circle cx="9" cy="9" r="5.5" stroke="currentColor" stroke-width="1.5"/><path d="M13.5 13.5L18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
    { name: 'Settings',  svg: '<circle cx="10" cy="10" r="2.5" stroke="currentColor" stroke-width="1.5"/><path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.93 4.93l1.41 1.41M13.66 13.66l1.41 1.41M4.93 15.07l1.41-1.41M13.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
    { name: 'Mail',      svg: '<rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 6l8 5 8-5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>' },
    { name: 'Bell',      svg: '<path d="M10 2a5 5 0 015 5c0 5 2 6.5 2 6.5H3S5 12 5 7a5 5 0 015-5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 16a2 2 0 104 0" stroke="currentColor" stroke-width="1.5"/>' },
    { name: 'Heart',     svg: '<path d="M10 17l-1.05-.95C5.21 12.66 3 10.64 3 8.15A3.92 3.92 0 017 4.25c1.3 0 2.4.63 3 1.58A4.04 4.04 0 0113 4.25a3.92 3.92 0 014 3.9c0 2.49-2.21 4.51-5.95 7.9L10 17z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>' },
    { name: 'Star',      svg: '<path d="M10 2l2.47 5.01L18 7.74l-4 3.9.94 5.5L10 14.58l-4.94 2.56.94-5.5-4-3.9 5.53-.73L10 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>' },
    { name: 'Edit',      svg: '<path d="M12.5 3.5l4 4L6 18H2v-4L12.5 3.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>' },
    { name: 'Trash',     svg: '<path d="M4 5h12M7 5V4a1 1 0 011-1h4a1 1 0 011 1v1M5 5v12a2 2 0 002 2h6a2 2 0 002-2V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' },
    { name: 'Plus',      svg: '<path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
    { name: 'Minus',     svg: '<path d="M4 10h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
    { name: 'Check',     svg: '<path d="M4 10l4 4 8-8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' },
    { name: 'Close',     svg: '<path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
    { name: 'Arrow R',   svg: '<path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' },
    { name: 'Arrow L',   svg: '<path d="M16 10H4M8 6l-4 4 4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' },
    { name: 'ChevDown',  svg: '<path d="M5 7l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' },
    { name: 'ChevUp',    svg: '<path d="M5 13l5-5 5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' },
    { name: 'Download',  svg: '<path d="M10 3v10m0 0l-3.5-3.5m3.5 3.5l3.5-3.5M3 15v2a1 1 0 001 1h12a1 1 0 001-1v-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' },
    { name: 'Upload',    svg: '<path d="M10 17V7m0 0L6.5 10.5M10 7l3.5 3.5M3 15v2a1 1 0 001 1h12a1 1 0 001-1v-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' },
    { name: 'Eye',       svg: '<path d="M1 10s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" stroke="currentColor" stroke-width="1.5"/><circle cx="10" cy="10" r="3" stroke="currentColor" stroke-width="1.5"/>' },
    { name: 'Lock',      svg: '<rect x="5" y="9" width="10" height="8" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M7 9V6a3 3 0 016 0v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
    { name: 'Globe',     svg: '<circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/><path d="M2 10h16M10 2c2.5 2.5 3.5 5 3.5 8s-1 5.5-3.5 8c-2.5-2.5-3.5-5-3.5-8s1-5.5 3.5-8z" stroke="currentColor" stroke-width="1.5"/>' },
    { name: 'Calendar',  svg: '<rect x="3" y="4" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M3 8h14M7 2v4M13 2v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  ];

  const iconGridContainer = document.getElementById('icon-grid');
  if (iconGridContainer) {
    icons.forEach(ic => {
      const item = document.createElement('div');
      item.className = 'icon-item';
      item.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">${ic.svg}</svg>
        <span>${ic.name}</span>
      `;
      iconGridContainer.appendChild(item);
    });
  }

  // ——————————————————————————————————————————————
  // 6. HERO STATS — animated counter
  // ——————————————————————————————————————————————
  const statsMap = {
    'stat-colors':     70,
    'stat-components': 12,
    'stat-patterns':   7,
    'stat-icons':      icons.length,
  };

  function animateCounter(el, target, duration = 1200) {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const id = setInterval(() => {
      start += step;
      if (start >= target) { start = target; clearInterval(id); }
      el.textContent = start;
    }, 16);
  }

  // Use IntersectionObserver for nice entrance animation
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          Object.entries(statsMap).forEach(([id, val]) => {
            const el = document.getElementById(id);
            if (el) animateCounter(el, val);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(heroSection);
  }

  // ——————————————————————————————————————————————
  // 7. THEME TOGGLE (light / dark)
  // ——————————————————————————————————————————————
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Restore saved theme
  const savedTheme = localStorage.getItem('ds-theme') || 'light';
  html.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('ds-theme', next);
    });
  }

  // ——————————————————————————————————————————————
  // 8. SIDEBAR — mobile toggle + active link tracking
  // ——————————————————————————————————————————————
  const sidebar  = document.getElementById('sidebar');
  const menuBtn  = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('sidebar-close');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');

  if (menuBtn && sidebar)  menuBtn.addEventListener('click', () => sidebar.classList.add('open'));
  if (closeBtn && sidebar)  closeBtn.addEventListener('click', () => sidebar.classList.remove('open'));

  // Close sidebar when clicking a link (mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900 && sidebar) sidebar.classList.remove('open');
    });
  });

  // Scroll-spy: highlight active nav link
  const sections = document.querySelectorAll('.section[id]');
  const observerNav = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(section => observerNav.observe(section));

  // ——————————————————————————————————————————————
  // 9. MODALS
  // ——————————————————————————————————————————————
  const modalOverlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');
  const modalTitle   = document.getElementById('modal-title');
  const modalBody    = document.getElementById('modal-body');
  const modalFooter  = document.getElementById('modal-footer');
  const modalClose   = document.getElementById('modal-close');
  const modalCancel  = document.getElementById('modal-cancel');

  const modalSizes = {
    'open-modal-sm': { cls: 'ds-modal-sm', title: 'Small Dialog',  body: '<p>This is a compact dialog for quick confirmations or short messages.</p>' },
    'open-modal-md': { cls: 'ds-modal-md', title: 'Medium Dialog', body: '<p>This modal is suitable for forms, detail views, and moderate content. It provides enough space for comfortable reading.</p><p style="margin-top:12px;">You can add any component inside the modal body, including inputs, checkboxes, and more.</p>' },
    'open-modal-lg': { cls: 'ds-modal-lg', title: 'Large Dialog',  body: '<p>Large modals are ideal for complex content like multi-step forms, data tables, or rich media previews.</p><p style="margin-top:12px;">The extra width ensures content is not cramped and is easy to interact with.</p><div style="margin-top:16px;height:140px;background:var(--color-bg-secondary);border:1px dashed var(--color-border);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--color-text-tertiary);font-size:13px;">Content placeholder area</div>' },
  };

  function openModal(sizeKey) {
    const cfg = modalSizes[sizeKey];
    if (!cfg || !modalOverlay || !modalContent) return;
    modalContent.className = 'ds-modal ' + cfg.cls;
    if (modalTitle) modalTitle.textContent = cfg.title;
    if (modalBody)  modalBody.innerHTML = cfg.body;
    modalOverlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modalOverlay) modalOverlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  Object.keys(modalSizes).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', () => openModal(id));
  });

  if (modalClose)   modalClose.addEventListener('click', closeModal);
  if (modalCancel)   modalCancel.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Escape key closes modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // ——————————————————————————————————————————————
  // 10. TOASTS
  // ——————————————————————————————————————————————
  const toastMessages = {
    info:    'This is an informational message.',
    success: 'Operation completed successfully!',
    warning: 'Please review before proceeding.',
    error:   'Something went wrong. Try again.',
  };

  const toastIcons = {
    info:    '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#fff" stroke-width="1.5"/><path d="M10 9v4M10 7h.01" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>',
    success: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#fff" stroke-width="1.5"/><path d="M7 10l2 2 4-4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    warning: '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 3l8 14H2L10 3z" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><path d="M10 9v3M10 14h.01" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>',
    error:   '<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#fff" stroke-width="1.5"/><path d="M7 7l6 6M13 7l-6 6" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>',
  };

  window.showToast = function (type, customMsg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `ds-toast ds-toast-${type}`;
    toast.innerHTML = `${toastIcons[type] || ''}<span>${customMsg || toastMessages[type]}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('removing');
      toast.addEventListener('animationend', () => toast.remove());
    }, 3500);
  };

  // ——————————————————————————————————————————————
  // 11. TABS
  // ——————————————————————————————————————————————
  document.querySelectorAll('.ds-tabs').forEach(tabGroup => {
    const tabs = tabGroup.querySelectorAll('.ds-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Deactivate siblings
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Show correct panel — walk siblings after the tab group
        const panelId = tab.getAttribute('data-tab');
        // Get all panels that are siblings of the tab group
        let sibling = tabGroup.nextElementSibling;
        while (sibling && sibling.classList.contains('ds-tab-panel')) {
          sibling.classList.remove('active');
          if (sibling.id === panelId) sibling.classList.add('active');
          sibling = sibling.nextElementSibling;
        }
      });
    });
  });

  // ——————————————————————————————————————————————
  // 12. SELECT-ALL (table)
  // ——————————————————————————————————————————————
  const selectAll = document.getElementById('select-all');
  if (selectAll) {
    selectAll.addEventListener('change', () => {
      const table = selectAll.closest('table');
      if (!table) return;
      table.querySelectorAll('tbody input[type="checkbox"]').forEach(cb => {
        cb.checked = selectAll.checked;
      });
    });
  }

  // ——————————————————————————————————————————————
  // 13. TAG REMOVE
  // ——————————————————————————————————————————————
  document.querySelectorAll('.tag-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.closest('.ds-tag');
      if (tag) {
        tag.style.transition = 'all .2s ease';
        tag.style.opacity = '0';
        tag.style.transform = 'scale(0.8)';
        setTimeout(() => tag.remove(), 200);
      }
    });
  });

})();
