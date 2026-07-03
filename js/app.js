// ============================================================
// CLAUDE ACADEMIA — APP LOGIC
// Autor: Alberti Juan | Licencia: MIT
// ============================================================

'use strict';

// ── STATE ──────────────────────────────────────────────────
const state = {
  currentModule: 'home',
  currentLesson: null,
  progress: JSON.parse(localStorage.getItem('ca_progress') || '{}'),
  openCards: new Set()
};

// ── INIT ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  registerSW();
  renderHome();
  setupInstallPrompt();
});

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

// ── INSTALL PROMPT ─────────────────────────────────────────
let deferredPrompt;
function setupInstallPrompt() {
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('install-btn')?.classList.remove('hidden');
  });
}

function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => { deferredPrompt = null; });
  }
}

// ── ROUTER ─────────────────────────────────────────────────
function navigate(target) {
  state.currentModule = target;
  window.scrollTo(0, 0);
  if (target === 'home') return renderHome();
  if (target === 'M1') return renderModule(ACADEMY_DATA.modulo1);
  if (target === 'M2') return renderModule(ACADEMY_DATA.modulo2);
  if (target === 'M3') return renderModule(ACADEMY_DATA.modulo3);
}

function openLesson(moduleId, lessonId) {
  const mod = moduleId === 'M1' ? ACADEMY_DATA.modulo1
            : moduleId === 'M2' ? ACADEMY_DATA.modulo2
            : ACADEMY_DATA.modulo3;
  const lesson = mod.lecciones.find(l => l.id === lessonId);
  if (!lesson) return;
  state.currentLesson = lesson;
  state.currentModule = moduleId + '_lesson_' + lessonId;
  renderLesson(lesson, mod);
  window.scrollTo(0, 0);
}

function goBack() {
  const mod = state.currentLesson?.id?.startsWith('M1') ? 'M1'
            : state.currentLesson?.id?.startsWith('M2') ? 'M2' : 'M3';
  navigate(mod);
}

// ── PROGRESS ───────────────────────────────────────────────
function markComplete(lessonId) {
  state.progress[lessonId] = true;
  localStorage.setItem('ca_progress', JSON.stringify(state.progress));
  document.getElementById('complete-btn')?.classList.add('completed');
  document.getElementById('complete-btn').textContent = '✓ Completada';
  updateProgressDisplay();
}

function isComplete(lessonId) { return !!state.progress[lessonId]; }

function getModuleProgress(mod) {
  const done = mod.lecciones.filter(l => isComplete(l.id)).length;
  return { done, total: mod.lecciones.length, pct: Math.round(done / mod.lecciones.length * 100) };
}

function getTotalProgress() {
  const allLessons = [
    ...ACADEMY_DATA.modulo1.lecciones,
    ...ACADEMY_DATA.modulo2.lecciones,
    ...ACADEMY_DATA.modulo3.lecciones
  ];
  const done = allLessons.filter(l => isComplete(l.id)).length;
  return { done, total: allLessons.length };
}

function updateProgressDisplay() {
  const el = document.getElementById('total-progress');
  if (!el) return;
  const { done, total } = getTotalProgress();
  el.textContent = `${done}/${total}`;
}

// ── COPY ───────────────────────────────────────────────────
function copyText(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const text = el.innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✓ Copiado';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 2000);
  });
}

// ── RENDER HOME ────────────────────────────────────────────
function renderHome() {
  const { done, total } = getTotalProgress();
  const pct = Math.round(done / total * 100);

  const mods = [ACADEMY_DATA.modulo1, ACADEMY_DATA.modulo2, ACADEMY_DATA.modulo3];

  document.getElementById('app').innerHTML = `
    <div class="home">

      <header class="home-header">
        <div class="logo-mark">CA</div>
        <div class="header-right">
          <button id="install-btn" class="install-btn hidden" onclick="installApp()">+ Instalar app</button>
          <span class="progress-pill" id="total-progress">${done}/${total}</span>
        </div>
      </header>

      <div class="hero-home">
        <div class="hero-eyebrow">Proyecto libre · Alberti Juan</div>
        <h1 class="hero-title">Claude<br><span class="accent-gradient">Academia</span></h1>
        <p class="hero-sub">De usar Claude a construir con Claude.<br>72 lecciones. 3 niveles. Todo en español.</p>

        <div class="progress-bar-home">
          <div class="pb-track"><div class="pb-fill" style="width:${pct}%"></div></div>
          <span class="pb-label">${pct}% completado</span>
        </div>
      </div>

      <div class="modules-grid">
        ${mods.map(m => renderModuleCard(m)).join('')}
      </div>

      <div class="home-footer">
        <p>72 lecciones · PWA instalable · Libre uso educativo</p>
        <p>Creado por <strong>Alberti Juan</strong> · Licencia MIT</p>
      </div>

    </div>
  `;
}

function renderModuleCard(mod) {
  const prog = getModuleProgress(mod);
  const levelColors = { principiante: '#6affcc', intermedio: '#ffd86a', avanzado: '#ff6a9b' };
  const color = levelColors[mod.nivel] || '#7c6aff';

  return `
    <div class="mod-card" onclick="navigate('${mod.id}')" style="--mc:#00000000; border-top: 3px solid ${color}">
      <div class="mc-top">
        <span class="mc-emoji">${mod.emoji}</span>
        <span class="mc-level" style="color:${color}">${mod.nivel.toUpperCase()}</span>
      </div>
      <h2 class="mc-title">${mod.titulo}</h2>
      <p class="mc-sub">${mod.subtitulo}</p>
      <p class="mc-desc">${mod.descripcion}</p>
      <div class="mc-stats">
        <span>${mod.lecciones.length} lecciones</span>
        ${!mod.gratis ? `<span class="free-badge">Vista previa gratis</span>` : `<span class="free-badge all-free">Todo gratis</span>`}
      </div>
      <div class="mc-progress">
        <div class="mc-track"><div class="mc-fill" style="width:${prog.pct}%; background:${color}"></div></div>
        <span class="mc-pct" style="color:${color}">${prog.done}/${prog.total}</span>
      </div>
      <button class="mc-btn" style="background:${color}; color:#0a0a0f">Ir al módulo →</button>
    </div>
  `;
}

// ── RENDER MODULE ──────────────────────────────────────────
function renderModule(mod) {
  const prog = getModuleProgress(mod);
  const color = mod.nivel === 'principiante' ? '#6affcc' : mod.nivel === 'intermedio' ? '#ffd86a' : '#ff6a9b';

  const lessons = mod.lecciones.map((l, i) => {
    const done = isComplete(l.id);
    const locked = !l.gratis;
    return `
      <div class="lesson-row ${done ? 'done' : ''} ${locked ? 'locked' : ''}"
           onclick="${locked ? 'showPaywall()' : `openLesson('${mod.id}', '${l.id}')`}">
        <div class="lr-num" style="color:${color}">${String(l.num).padStart(2,'0')}</div>
        <div class="lr-info">
          <div class="lr-title">${l.titulo}</div>
          <div class="lr-meta">
            <span>${l.tiempo}</span>
            ${locked ? '<span class="lock-icon">🔒 Plan educativo</span>' : '<span class="free-tag">Gratis</span>'}
          </div>
        </div>
        <div class="lr-status">${done ? '✓' : locked ? '›' : '›'}</div>
      </div>
    `;
  }).join('');

  document.getElementById('app').innerHTML = `
    <div class="module-view">
      <div class="module-header" style="border-bottom:3px solid ${color}">
        <button class="back-btn" onclick="navigate('home')">← Inicio</button>
        <div class="mh-content">
          <span class="mh-emoji">${mod.emoji}</span>
          <div>
            <div class="mh-level" style="color:${color}">${mod.nivel.toUpperCase()}</div>
            <h1 class="mh-title">${mod.titulo}</h1>
          </div>
        </div>
        <div class="mh-progress">
          <div class="mhp-track"><div class="mhp-fill" style="width:${prog.pct}%;background:${color}"></div></div>
          <span style="color:${color}">${prog.done}/${prog.total} completadas</span>
        </div>
      </div>

      ${!mod.gratis ? `
        <div class="preview-banner">
          <span>👁️ Las primeras ${mod.gratis_preview} lecciones son gratuitas.</span>
          <span class="pb-cta">El resto requiere plan educativo.</span>
        </div>
      ` : ''}

      <div class="lessons-list">${lessons}</div>
    </div>
  `;
}

// ── RENDER LESSON ──────────────────────────────────────────
function renderLesson(lesson, mod) {
  const color = mod.nivel === 'principiante' ? '#6affcc' : mod.nivel === 'intermedio' ? '#ffd86a' : '#ff6a9b';
  const done = isComplete(lesson.id);
  const modId = mod.id;

  // Find prev/next
  const lessons = mod.lecciones;
  const idx = lessons.findIndex(l => l.id === lesson.id);
  const prev = idx > 0 ? lessons[idx - 1] : null;
  const next = idx < lessons.length - 1 ? lessons[idx + 1] : null;

  document.getElementById('app').innerHTML = `
    <div class="lesson-view">

      <div class="lesson-topbar">
        <button class="back-btn" onclick="goBack()">← ${mod.titulo}</button>
        <span class="lt-num" style="color:${color}">${String(lesson.num).padStart(2,'0')} / ${lessons.length}</span>
      </div>

      <div class="lesson-hero" style="border-left:4px solid ${color}">
        <div class="lh-level" style="color:${color}">${mod.emoji} ${mod.nivel.toUpperCase()}</div>
        <h1 class="lh-title">${lesson.titulo}</h1>
        <div class="lh-meta">
          <span>⏱ ${lesson.tiempo}</span>
          <span>🔧 ${lesson.tecnica}</span>
        </div>
      </div>

      <div class="lesson-body">

        <div class="concept-box">
          <div class="cb-label">💡 CONCEPTO</div>
          <p class="cb-text">${lesson.concepto}</p>
        </div>

        <div class="prompt-section">
          <div class="ps-label bad-lbl">❌ PROMPT POCO EFECTIVO</div>
          <div class="prompt-block bad">
            <pre id="bad-prompt">${escHtml(lesson.mal)}</pre>
            <button class="copy-btn" onclick="copyText('bad-prompt', this)">Copiar</button>
          </div>
        </div>

        <div class="prompt-section">
          <div class="ps-label good-lbl">✅ PROMPT EFECTIVO — LISTO PARA USAR</div>
          <div class="prompt-block good">
            <pre id="good-prompt">${escHtml(lesson.bien)}</pre>
            <button class="copy-btn" onclick="copyText('good-prompt', this)">Copiar</button>
          </div>
        </div>

        <div class="why-box">
          <div class="why-label">🎯 ¿POR QUÉ FUNCIONA?</div>
          <p>${lesson.por_que}</p>
        </div>

        <div class="lesson-actions">
          <button
            id="complete-btn"
            class="complete-btn ${done ? 'completed' : ''}"
            style="background: ${done ? '#1a2e20' : color}; color: ${done ? '#6affcc' : '#0a0a0f'}; border-color: ${done ? '#6affcc' : 'transparent'}"
            onclick="markComplete('${lesson.id}')"
          >${done ? '✓ Completada' : 'Marcar como completada'}</button>
        </div>

        <div class="lesson-nav">
          ${prev ? `<button class="nav-btn prev-btn" onclick="openLesson('${modId}', '${prev.id}')">← ${prev.titulo}</button>` : '<div></div>'}
          ${next ? `<button class="nav-btn next-btn" style="background:${color};color:#0a0a0f" onclick="openLesson('${modId}', '${next.id}')">Siguiente →</button>` : '<button class="nav-btn next-btn" onclick="navigate(\'home\')">Ir al inicio →</button>'}
        </div>

      </div>

    </div>
  `;
}

// ── PAYWALL ────────────────────────────────────────────────
function showPaywall() {
  document.getElementById('app').insertAdjacentHTML('beforeend', `
    <div class="paywall-overlay" onclick="closePaywall(event)">
      <div class="paywall-modal">
        <div class="pw-icon">🔒</div>
        <h2>Lección del plan educativo</h2>
        <p>Esta lección requiere el plan educativo de Claude Academia.</p>
        <div class="pw-features">
          <div>✓ Módulo Intermedio completo (20 lecciones)</div>
          <div>✓ Módulo Avanzado completo (40 lecciones)</div>
          <div>✓ Prompts para desplegar infraestructura real</div>
          <div>✓ Actualizaciones de por vida</div>
        </div>
        <div class="pw-cta-note">Este proyecto es de libre uso recreativo y educativo.<br>Las lecciones avanzadas financian el desarrollo continuo.</div>
        <button class="pw-close" onclick="closePaywall()">← Volver a las lecciones gratuitas</button>
      </div>
    </div>
  `);
}

function closePaywall(e) {
  if (!e || e.target.classList.contains('paywall-overlay') || e.currentTarget.classList.contains('pw-close')) {
    document.querySelector('.paywall-overlay')?.remove();
  }
}

// ── UTILS ──────────────────────────────────────────────────
function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
