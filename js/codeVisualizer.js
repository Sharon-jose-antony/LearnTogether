/* ==========================================================================
   Memory & Pointer Visualizer Engine
   ========================================================================== */

const VISUALIZER_SCENARIOS = {
  cpp_pointers: {
    title: "C++ Pointers & Address Operators",
    steps: [
      {
        explanation: "1. Variable <code>int val = 42;</code> is allocated on the <strong>Stack</strong> at address <code>0x7ffd100</code>.",
        stack: [
          { name: "val (int)", val: "42", addr: "0x7ffd100", active: false }
        ],
        heap: []
      },
      {
        explanation: "2. Pointer variable <code>int *ptr = &val;</code> is created on the Stack at address <code>0x7ffd108</code>. It holds the memory address of <code>val</code> (<code>0x7ffd100</code>).",
        stack: [
          { name: "val (int)", val: "42", addr: "0x7ffd100", active: true },
          { name: "ptr (int*)", val: "0x7ffd100", addr: "0x7ffd108", active: true, pointsTo: "0x7ffd100" }
        ],
        heap: []
      },
      {
        explanation: "3. Dereferencing: <code>*ptr = 99;</code> follows the pointer to address <code>0x7ffd100</code> and updates the value of <code>val</code> directly to <code>99</code>!",
        stack: [
          { name: "val (int)", val: "99", addr: "0x7ffd100", active: true },
          { name: "ptr (int*)", val: "0x7ffd100", addr: "0x7ffd108", active: true, pointsTo: "0x7ffd100" }
        ],
        heap: []
      }
    ]
  },
  cpp_dynamic: {
    title: "C++ Dynamic Heap Allocation (new & delete)",
    steps: [
      {
        explanation: "1. <code>int *heapArr = new int[3]{10, 20, 30};</code> is executed. A 12-byte contiguous array is dynamically requested on the <strong>Heap</strong> at address <code>0x0050a10</code>.",
        stack: [
          { name: "heapArr (int*)", val: "0x0050a10", addr: "0x7ffd200", active: true }
        ],
        heap: [
          { name: "[0]: 10, [1]: 20, [2]: 30", addr: "0x0050a10", active: true }
        ]
      },
      {
        explanation: "2. <code>delete[] heapArr;</code> is called! The Heap memory at <code>0x0050a10</code> is deallocated. BUT <code>heapArr</code> still holds the old address (Dangling Pointer!).",
        stack: [
          { name: "heapArr (int*) [DANGLING]", val: "0x0050a10", addr: "0x7ffd200", active: true }
        ],
        heap: [
          { name: "[FREED / UNALLOCATED]", addr: "0x0050a10", active: false }
        ]
      },
      {
        explanation: "3. Good Practice: <code>heapArr = nullptr;</code> resets the pointer to null, preventing illegal memory access.",
        stack: [
          { name: "heapArr (int*)", val: "nullptr (0x0)", addr: "0x7ffd200", active: false }
        ],
        heap: []
      }
    ]
  },
  java_references: {
    title: "Java Reference Variables & Garbage Collection",
    steps: [
      {
        explanation: "1. <code>int[] arr = new int[]{5, 10};</code> creates an Object on the JVM Heap at <code>0x99a20</code>. The reference variable <code>arr</code> on Stack stores this reference address.",
        stack: [
          { name: "arr (ref)", val: "0x99a20", addr: "Stack-Slot 1", active: true }
        ],
        heap: [
          { name: "int[] [5, 10]", addr: "0x99a20", active: true }
        ]
      },
      {
        explanation: "2. <code>arr = null;</code> reassigned! The reference link is severed. The Heap object at <code>0x99a20</code> now has ZERO active GC roots.",
        stack: [
          { name: "arr (ref)", val: "null", addr: "Stack-Slot 1", active: false }
        ],
        heap: [
          { name: "int[] [UNREACHABLE]", addr: "0x99a20", active: false, gcCandidate: true }
        ]
      },
      {
        explanation: "3. JVM Garbage Collector runs <code>System.gc()</code>: Unreachable heap memory at <code>0x99a20</code> is reclaimed automatically!",
        stack: [
          { name: "arr (ref)", val: "null", addr: "Stack-Slot 1", active: false }
        ],
        heap: []
      }
    ]
  }
};

class MemoryVisualizer {
  constructor() {
    this.currentScenarioKey = 'cpp_pointers';
    this.currentStepIndex = 0;

    this.scenarioSelect = document.getElementById('visualizer-scenario-select');
    this.prevBtn = document.getElementById('vis-prev-step');
    this.nextBtn = document.getElementById('vis-next-step');
    this.resetBtn = document.getElementById('vis-reset-step');
    this.counterEl = document.getElementById('vis-step-counter');
    this.explanationEl = document.getElementById('vis-explanation');
    this.stackContainer = document.getElementById('stack-container');
    this.heapContainer = document.getElementById('heap-container');

    this.init();
  }

  init() {
    if (!this.scenarioSelect) return;

    this.scenarioSelect.addEventListener('change', (e) => {
      this.currentScenarioKey = e.target.value;
      this.currentStepIndex = 0;
      this.render();
    });

    this.prevBtn.addEventListener('click', () => {
      if (this.currentStepIndex > 0) {
        this.currentStepIndex--;
        this.render();
      }
    });

    this.nextBtn.addEventListener('click', () => {
      const scenario = VISUALIZER_SCENARIOS[this.currentScenarioKey];
      if (scenario && this.currentStepIndex < scenario.steps.length - 1) {
        this.currentStepIndex++;
        this.render();
      }
    });

    this.resetBtn.addEventListener('click', () => {
      this.currentStepIndex = 0;
      this.render();
    });

    this.render();
  }

  render() {
    const scenario = VISUALIZER_SCENARIOS[this.currentScenarioKey] || VISUALIZER_SCENARIOS['cpp_pointers'];
    const step = scenario.steps[this.currentStepIndex];

    // Counter
    this.counterEl.textContent = `Step ${this.currentStepIndex + 1} of ${scenario.steps.length}`;

    // Controls active state
    this.prevBtn.disabled = this.currentStepIndex === 0;
    this.nextBtn.disabled = this.currentStepIndex === scenario.steps.length - 1;

    // Explanation
    this.explanationEl.innerHTML = step.explanation;

    // Render Stack
    this.stackContainer.innerHTML = '';
    if (step.stack.length === 0) {
      this.stackContainer.innerHTML = '<div class="region-desc">Stack Frame Empty</div>';
    } else {
      step.stack.forEach(item => {
        const box = document.createElement('div');
        box.className = `mem-box ${item.active ? 'active-pointer' : ''}`;
        box.innerHTML = `
          <div class="mem-box-title">${item.name}</div>
          <div class="mem-box-val">${item.val}</div>
          <div class="mem-box-addr">${item.addr}</div>
        `;
        this.stackContainer.appendChild(box);
      });
    }

    // Render Heap
    this.heapContainer.innerHTML = '';
    if (step.heap.length === 0) {
      this.heapContainer.innerHTML = '<div class="region-desc">Heap Region Unallocated</div>';
    } else {
      step.heap.forEach(item => {
        const box = document.createElement('div');
        box.className = `mem-box ${item.active ? 'active-heap' : ''}`;
        if (item.gcCandidate) {
          box.style.borderColor = 'var(--rose-accent)';
        }
        box.innerHTML = `
          <div class="mem-box-title">${item.name}</div>
          <div class="mem-box-addr">${item.addr}</div>
        `;
        this.heapContainer.appendChild(box);
      });
    }
  }
}
