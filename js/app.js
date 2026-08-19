/* ==========================================================================
   Learn Together with S J A: Main Application Controller
   ========================================================================== */

class App {
  constructor() {
    this.progress = parseInt(localStorage.getItem('pre_dsa_progress') || '0', 10);
    
    this.initTabs();
    this.initTeacherModal();
    this.initRoadmap();
    this.initComparator();
    this.initInterviewQuestions();
    this.initCheatSheet();
    this.initCopyButtons();
    this.initProgress();
  }

  /* Teacher Plan Modal Controls */
  initTeacherModal() {
    const modal = document.getElementById('teacher-modal');
    const openBtn = document.getElementById('teacher-guide-btn');
    const closeBtn = document.getElementById('close-modal-btn');
    const startCtaBtn = document.getElementById('modal-start-btn');
    const heroStartBtn = document.getElementById('start-here-btn');

    if (!modal) return;

    const open = () => modal.classList.add('active');
    const close = () => modal.classList.remove('active');

    if (openBtn) openBtn.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (startCtaBtn) startCtaBtn.addEventListener('click', () => {
      close();
      this.jumpToConcept(1);
    });

    if (heroStartBtn) heroStartBtn.addEventListener('click', () => {
      this.jumpToConcept(1);
    });

    // Auto show modal on first visit ever
    if (!localStorage.getItem('visited_pre_dsa')) {
      localStorage.setItem('visited_pre_dsa', 'true');
      setTimeout(open, 500);
    }
  }

  /* Navigation Tabs */
  initTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');

        tabs.forEach(t => t.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const targetPane = document.getElementById(`tab-${targetTab}`);
        if (targetPane) targetPane.classList.add('active');
      });
    });
  }

  /* Roadmap Renderer */
  initRoadmap() {
    const container = document.getElementById('roadmap-levels-container');
    if (!container) return;

    container.innerHTML = CURRICULUM_DATA.levels.map(level => `
      <div class="level-card" id="level-card-${level.id}">
        <div>
          <div class="level-header">
            <span class="level-num">Level ${level.id}</span>
            <span class="tag">${level.badge}</span>
          </div>
          <h3 class="level-title">${level.title}</h3>
          <p class="level-desc">${level.description}</p>

          <div class="level-topics">
            ${level.topics.map(t => `<div class="topic-item">${t}</div>`).join('')}
          </div>
        </div>

        <div class="level-footer">
          <button class="btn btn-primary btn-sm" onclick="app.jumpToConcept(${level.id})">Start Level ${level.id} Lesson ▶</button>
          <span style="font-size: 0.78rem; color: var(--emerald-accent); font-weight: 600;">DSA Target: ${level.dsaValue.slice(0, 30)}...</span>
        </div>
      </div>
    `).join('');
  }

  jumpToConcept(levelId) {
    const conceptSelector = document.getElementById('concept-selector');
    if (conceptSelector && conceptSelector.options.length >= levelId) {
      conceptSelector.selectedIndex = levelId - 1;
      conceptSelector.dispatchEvent(new Event('change'));
    }

    // Switch to Comparator Tab
    const compTab = document.querySelector('[data-tab="comparator"]');
    if (compTab) compTab.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* Side-by-Side Comparator */
  initComparator() {
    const selector = document.getElementById('concept-selector');
    if (!selector) return;

    selector.innerHTML = CURRICULUM_DATA.comparisons.map((c, idx) => 
      `<option value="${c.id}">Lesson ${idx + 1}: ${c.title}</option>`
    ).join('');

    selector.addEventListener('change', () => {
      this.loadComparison(selector.value);
    });

    this.loadComparison(CURRICULUM_DATA.comparisons[0].id);
  }

  loadComparison(id) {
    const item = CURRICULUM_DATA.comparisons.find(c => c.id === id) || CURRICULUM_DATA.comparisons[0];

    document.getElementById('concept-meta').innerHTML = `
      <h3>${item.title}</h3>
      <p style="color: var(--text-muted); font-size: 0.95rem;">${item.description}</p>
    `;

    document.getElementById('cpp-concept-title').textContent = item.cppTitle;
    document.getElementById('cpp-code-block').textContent = item.cppCode;
    document.getElementById('cpp-notes').innerHTML = `<strong>C++ Architecture:</strong> ${item.cppNotes}`;

    document.getElementById('java-concept-title').textContent = item.javaTitle;
    document.getElementById('java-code-block').textContent = item.javaCode;
    document.getElementById('java-notes').innerHTML = `<strong>Java Architecture:</strong> ${item.javaNotes}`;

    document.getElementById('takeaways-list').innerHTML = item.takeaways.map(t => 
      `<li>${t}</li>`
    ).join('');

    this.updateProgress(5);
  }

  /* Technical Interview Q&A Renderer */
  initInterviewQuestions() {
    const container = document.getElementById('interview-questions-container');
    if (!container || !CURRICULUM_DATA.interviewQuestions) return;

    container.innerHTML = CURRICULUM_DATA.interviewQuestions.map((iq, idx) => `
      <div class="interview-card">
        <div class="interview-card-header">
          <span class="tag" style="background: rgba(168, 85, 247, 0.2); color: #c084fc;">${iq.category}</span>
          <span class="iq-num">Question ${idx + 1}</span>
        </div>
        <h3 class="iq-question">Q: ${iq.question}</h3>
        <div class="iq-answer">
          <strong>Key Interview Answer:</strong> ${iq.answer}
        </div>
        ${iq.codeSnippet ? `
          <div class="iq-code-box">
            <pre class="code-container"><code class="language-cpp">${this.escapeHtml(iq.codeSnippet)}</code></pre>
          </div>
        ` : ''}
      </div>
    `).join('');
  }

  /* Cheat Sheet */
  initCheatSheet() {
    const tbody = document.getElementById('cheatsheet-tbody');
    const searchInput = document.getElementById('cheatsheet-search');
    if (!tbody) return;

    const render = (query = '') => {
      const filtered = CURRICULUM_DATA.cheatsheet.filter(item => 
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.cpp.toLowerCase().includes(query.toLowerCase()) ||
        item.java.toLowerCase().includes(query.toLowerCase()) ||
        item.context.toLowerCase().includes(query.toLowerCase())
      );

      tbody.innerHTML = filtered.map(item => `
        <tr>
          <td><strong>${item.category}</strong></td>
          <td><span class="code-inline cpp-inline">${this.escapeHtml(item.cpp)}</span></td>
          <td><span class="code-inline java-inline">${this.escapeHtml(item.java)}</span></td>
          <td><span class="code-inline">${item.complexity}</span></td>
          <td style="color: var(--text-muted); font-size: 0.88rem;">${item.context}</td>
        </tr>
      `).join('');
    };

    if (searchInput) {
      searchInput.addEventListener('input', (e) => render(e.target.value));
    }

    render();
  }

  escapeHtml(text) {
    return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* Copy Buttons */
  initCopyButtons() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const codeEl = document.getElementById(targetId);
        if (codeEl) {
          navigator.clipboard.writeText(codeEl.textContent);
          const originalText = btn.textContent;
          btn.textContent = '✓ Copied!';
          setTimeout(() => btn.textContent = originalText, 1500);
        }
      });
    });
  }

  /* Learning Progress Tracker */
  initProgress() {
    this.updateProgressBar();
    const resetBtn = document.getElementById('reset-progress-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.progress = 0;
        localStorage.setItem('pre_dsa_progress', '0');
        this.updateProgressBar();
      });
    }
  }

  updateProgress(amount) {
    this.progress = Math.min(100, this.progress + amount);
    localStorage.setItem('pre_dsa_progress', this.progress.toString());
    this.updateProgressBar();
  }

  updateProgressBar() {
    const textEl = document.getElementById('progress-percentage');
    const barEl = document.getElementById('progress-bar');
    if (textEl) textEl.textContent = `${this.progress}%`;
    if (barEl) barEl.style.width = `${this.progress}%`;
  }
}

// Global Initialization
let app, memoryVisualizer, sandboxEngine, quizManager;

document.addEventListener('DOMContentLoaded', () => {
  app = new App();
  memoryVisualizer = new MemoryVisualizer();
  sandboxEngine = new SandboxEngine();
  quizManager = new QuizManager();
});
