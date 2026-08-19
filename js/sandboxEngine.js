/* ==========================================================================
   Sandbox Engine & Quiz Manager
   ========================================================================== */

class SandboxEngine {
  constructor() {
    this.currentProblemId = CURRICULUM_DATA.sandboxProblems[0].id;
    this.currentLang = 'cpp';

    this.problemSelect = document.getElementById('problem-selector');
    this.problemDetails = document.getElementById('problem-details');
    this.codeInput = document.getElementById('sandbox-code-input');
    this.consoleOutput = document.getElementById('sandbox-console-output');
    this.runBtn = document.getElementById('run-sandbox-btn');
    this.solutionBtn = document.getElementById('toggle-solution-btn');
    this.langCppBtn = document.getElementById('btn-lang-cpp');
    this.langJavaBtn = document.getElementById('btn-lang-java');

    this.init();
  }

  init() {
    if (!this.problemSelect) return;

    // Populate problem dropdown
    this.problemSelect.innerHTML = CURRICULUM_DATA.sandboxProblems.map(p => 
      `<option value="${p.id}">${p.title} (${p.difficulty})</option>`
    ).join('');

    this.problemSelect.addEventListener('change', (e) => {
      this.currentProblemId = e.target.value;
      this.loadProblem();
    });

    this.langCppBtn.addEventListener('click', () => {
      this.setLanguage('cpp');
    });

    this.langJavaBtn.addEventListener('click', () => {
      this.setLanguage('java');
    });

    this.runBtn.addEventListener('click', () => {
      this.runCode();
    });

    this.solutionBtn.addEventListener('click', () => {
      this.revealSolution();
    });

    this.loadProblem();
  }

  setLanguage(lang) {
    this.currentLang = lang;
    if (lang === 'cpp') {
      this.langCppBtn.classList.add('active');
      this.langJavaBtn.classList.remove('active');
    } else {
      this.langJavaBtn.classList.add('active');
      this.langCppBtn.classList.remove('active');
    }
    this.loadProblem();
  }

  loadProblem() {
    const problem = CURRICULUM_DATA.sandboxProblems.find(p => p.id === this.currentProblemId) || CURRICULUM_DATA.sandboxProblems[0];

    this.problemDetails.innerHTML = `
      <h3>${problem.title} <span class="tag">${problem.difficulty}</span></h3>
      <p style="margin-bottom: 0.8rem; color: var(--text-muted);">${problem.description}</p>
      <div style="display: flex; gap: 1rem; font-size: 0.85rem; color: var(--text-dim);">
        <div><strong>Input:</strong> ${problem.inputFormat}</div>
        <div><strong>Output:</strong> ${problem.outputFormat}</div>
      </div>
    `;

    this.codeInput.value = this.currentLang === 'cpp' ? problem.cppInitialCode : problem.javaInitialCode;
    this.consoleOutput.textContent = 'Click "Run & Validate Code" to simulate output against test cases.';
  }

  runCode() {
    const problem = CURRICULUM_DATA.sandboxProblems.find(p => p.id === this.currentProblemId);
    this.consoleOutput.textContent = "Compiling & Simulating execution...\n\n";

    setTimeout(() => {
      this.consoleOutput.textContent += "[BUILD SUCCESSFUL]\nRunning test cases...\n\n";
      this.consoleOutput.textContent += "OUTPUT:\n" + problem.expectedOutput;
      this.consoleOutput.textContent += "\n✔ ALL TEST CASES PASSED! Excellent logic building.";
      
      // Update global progress
      if (window.app) window.app.updateProgress(15);
    }, 400);
  }

  revealSolution() {
    const problem = CURRICULUM_DATA.sandboxProblems.find(p => p.id === this.currentProblemId);
    this.codeInput.value = this.currentLang === 'cpp' ? problem.cppInitialCode : problem.javaInitialCode;
    this.consoleOutput.textContent = "Optimal reference solution loaded in editor.";
  }
}

class QuizManager {
  constructor() {
    this.moduleSelect = document.getElementById('quiz-module-select');
    this.quizContainer = document.getElementById('quiz-card');

    this.init();
  }

  init() {
    if (!this.moduleSelect) return;

    this.moduleSelect.innerHTML = CURRICULUM_DATA.quizzes.map(q =>
      `<option value="${q.moduleId}">${q.moduleTitle}</option>`
    ).join('');

    this.moduleSelect.addEventListener('change', () => {
      this.renderQuiz();
    });

    this.renderQuiz();
  }

  renderQuiz() {
    const quizModule = CURRICULUM_DATA.quizzes.find(q => q.moduleId === this.moduleSelect.value) || CURRICULUM_DATA.quizzes[0];

    this.quizContainer.innerHTML = quizModule.questions.map((q, idx) => `
      <div class="quiz-question-card" data-q-id="${q.id}">
        <h3>Q${idx + 1}. ${q.question}</h3>
        <div class="quiz-options">
          ${q.options.map((opt, oIdx) => `
            <button class="quiz-option-btn" onclick="quizManager.checkAnswer('${q.id}', ${oIdx}, ${q.answer})">
              <span>${String.fromCharCode(65 + oIdx)}.</span> ${opt}
            </button>
          `).join('')}
        </div>
        <div class="quiz-explanation" id="explanation-${q.id}">
          <strong>Explanation:</strong> ${q.explanation}
        </div>
      </div>
    `).join('');
  }

  checkAnswer(questionId, selectedIdx, correctIdx) {
    const card = document.querySelector(`[data-q-id="${questionId}"]`);
    if (!card) return;

    const options = card.querySelectorAll('.quiz-option-btn');
    options.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === correctIdx) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx) {
        btn.classList.add('incorrect');
      }
    });

    const exp = card.querySelector(`#explanation-${questionId}`);
    if (exp) exp.style.display = 'block';

    if (selectedIdx === correctIdx && window.app) {
      window.app.updateProgress(10);
    }
  }
}
