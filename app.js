// ============================================================
// Navashikshana - M2I Trainings Platform Clone
// ============================================================

// --- Course Data ---
const courses = [
  {
    id: "html-basics",
    icon: "🌐",
    title: "HTML Fundamentals",
    desc: "Learn the building blocks of the web. Structure content with semantic HTML elements.",
    level: "beginner",
    duration: "45 min",
    lessons: [
      {
        id: "html-1", title: "Introduction to HTML", duration: "5 min",
        content: `<p>HTML (HyperText Markup Language) is the standard language for creating web pages. Every website you visit is built with HTML at its core.</p>
          <p>An HTML document has a specific structure:</p>
          <pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
    &lt;p&gt;This is my first web page.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
          <p>The <code>&lt;head&gt;</code> section contains metadata, while the <code>&lt;body&gt;</code> holds all visible content.</p>`
      },
      {
        id: "html-2", title: "Headings & Paragraphs", duration: "5 min",
        content: `<p>HTML provides six levels of headings, from <code>&lt;h1&gt;</code> (most important) to <code>&lt;h6&gt;</code> (least important).</p>
          <pre>&lt;h1&gt;Main Title&lt;/h1&gt;
&lt;h2&gt;Section Title&lt;/h2&gt;
&lt;h3&gt;Subsection&lt;/h3&gt;

&lt;p&gt;Paragraphs contain body text.&lt;/p&gt;</pre>
          <p>Use headings to create a clear content hierarchy. Screen readers and search engines rely on this structure.</p>`
      },
      {
        id: "html-3", title: "Links & Images", duration: "5 min",
        content: `<p>Links connect pages together using the anchor tag:</p>
          <pre>&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;

&lt;!-- Open in new tab --&gt;
&lt;a href="https://example.com" target="_blank"&gt;
  External Link
&lt;/a&gt;</pre>
          <p>Images are embedded with the self-closing <code>&lt;img&gt;</code> tag:</p>
          <pre>&lt;img src="photo.jpg" alt="A descriptive text" /&gt;</pre>
          <p>Always include the <code>alt</code> attribute for accessibility.</p>`
      },
      {
        id: "html-4", title: "Lists & Tables", duration: "6 min",
        content: `<p>HTML supports ordered and unordered lists:</p>
          <pre>&lt;ul&gt;
  &lt;li&gt;Unordered item&lt;/li&gt;
&lt;/ul&gt;

&lt;ol&gt;
  &lt;li&gt;First step&lt;/li&gt;
  &lt;li&gt;Second step&lt;/li&gt;
&lt;/ol&gt;</pre>
          <p>Tables organize data in rows and columns:</p>
          <pre>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Age&lt;/th&gt;&lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;td&gt;Alice&lt;/td&gt;&lt;td&gt;25&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</pre>`
      }
    ],
    quiz: [
      { q: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "HyperText Marketing Language", "Hyper Tool Multi Language"], answer: 1, explanation: "HTML stands for HyperText Markup Language." },
      { q: "Which tag is used for the largest heading?", options: ["<heading>", "<h6>", "<h1>", "<head>"], answer: 2, explanation: "<h1> is the largest heading." },
      { q: "What attribute makes images accessible?", options: ["src", "title", "alt", "href"], answer: 2, explanation: "The alt attribute provides alternative text for screen readers." },
      { q: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: 1, explanation: "The <a> (anchor) tag creates hyperlinks." }
    ]
  },
  {
    id: "css-basics",
    icon: "🎨",
    title: "CSS Styling",
    desc: "Style your web pages with colors, layouts, and animations using CSS.",
    level: "beginner",
    duration: "50 min",
    lessons: [
      {
        id: "css-1", title: "What is CSS?", duration: "5 min",
        content: `<p>CSS (Cascading Style Sheets) controls the visual presentation of HTML elements.</p>
          <pre>/* External stylesheet (recommended) */
&lt;link rel="stylesheet" href="style.css"&gt;

/* Internal style block */
&lt;style&gt;
  h1 { color: blue; }
&lt;/style&gt;

/* Inline styles (avoid) */
&lt;p style="color: red;"&gt;Red text&lt;/p&gt;</pre>`
      },
      {
        id: "css-2", title: "Selectors & Properties", duration: "6 min",
        content: `<p>CSS selectors target HTML elements to apply styles:</p>
          <pre>/* Element selector */
p { color: gray; }

/* Class selector */
.highlight { background: yellow; }

/* ID selector */
#header { font-size: 24px; }

/* Pseudo-class */
a:hover { color: blue; }</pre>`
      },
      {
        id: "css-3", title: "Box Model & Layout", duration: "7 min",
        content: `<p>Every HTML element is a box with four layers:</p>
          <pre>.card {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  margin: 16px;
  box-sizing: border-box;
}</pre>
          <p>Use <code>box-sizing: border-box</code> to make sizing predictable.</p>`
      },
      {
        id: "css-4", title: "Flexbox", duration: "8 min",
        content: `<p>Flexbox is a one-dimensional layout system:</p>
          <pre>.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.item { flex: 1; }</pre>`
      }
    ],
    quiz: [
      { q: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"], answer: 1, explanation: "CSS stands for Cascading Style Sheets." },
      { q: "Which selector targets class='btn'?", options: ["#btn", ".btn", "btn", "*btn"], answer: 1, explanation: "A period (.) selects by class." },
      { q: "What creates space INSIDE an element's border?", options: ["margin", "padding", "border-spacing", "gap"], answer: 1, explanation: "Padding creates space between content and border." },
      { q: "Which display value enables Flexbox?", options: ["display: block", "display: flex", "display: grid", "display: inline"], answer: 1, explanation: "display: flex enables Flexbox." }
    ]
  },
  {
    id: "js-basics",
    icon: "⚡",
    title: "JavaScript Essentials",
    desc: "Add interactivity with variables, functions, and DOM manipulation.",
    level: "beginner",
    duration: "55 min",
    lessons: [
      {
        id: "js-1", title: "Variables & Data Types", duration: "6 min",
        content: `<p>JavaScript variables store data values:</p>
          <pre>const name = "Alice";   // string
let age = 25;           // number
let isActive = true;    // boolean
const colors = ["red", "blue"]; // array
const user = { name: "Alice", age: 25 }; // object</pre>
          <p>Avoid <code>var</code> — use <code>let</code> and <code>const</code> instead.</p>`
      },
      {
        id: "js-2", title: "Functions", duration: "7 min",
        content: `<p>Functions are reusable blocks of code:</p>
          <pre>function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow function
const add = (a, b) => a + b;

// Default parameters
const welcome = (name = "Guest") => {
  console.log("Welcome, " + name);
};</pre>`
      },
      {
        id: "js-3", title: "DOM Manipulation", duration: "8 min",
        content: `<p>The DOM lets JavaScript interact with HTML:</p>
          <pre>const title = document.querySelector("h1");
title.textContent = "New Title";
title.style.color = "blue";
title.classList.add("active");

const btn = document.createElement("button");
btn.textContent = "Click me";
document.body.appendChild(btn);</pre>`
      },
      {
        id: "js-4", title: "Events", duration: "6 min",
        content: `<p>Events let you respond to user interactions:</p>
          <pre>const button = document.querySelector("#myBtn");

button.addEventListener("click", () => {
  alert("Clicked!");
});

const input = document.querySelector("#search");
input.addEventListener("input", (e) => {
  console.log(e.target.value);
});</pre>`
      }
    ],
    quiz: [
      { q: "Which keyword declares a constant?", options: ["var", "let", "const", "define"], answer: 2, explanation: "const declares a constant." },
      { q: "Correct arrow function syntax?", options: ["function => (a, b)", "(a, b) => a + b", "a, b => { a + b }", "=> (a, b) { a + b }"], answer: 1, explanation: "Arrow functions use (params) => expression." },
      { q: "Which selects the FIRST matching element?", options: ["getElementById", "querySelectorAll", "querySelector", "getElementsByClassName"], answer: 2, explanation: "querySelector returns the first match." },
      { q: "How to listen for a click?", options: ['element.onClick("click", fn)', 'element.addEventListener("click", fn)', 'element.listen("click", fn)', 'element.on("click", fn)'], answer: 1, explanation: "addEventListener is the standard method." }
    ]
  },
  {
    id: "responsive",
    icon: "📱",
    title: "Responsive Design",
    desc: "Build layouts that work on every screen size with media queries and modern CSS.",
    level: "intermediate",
    duration: "40 min",
    lessons: [
      {
        id: "resp-1", title: "Viewport & Media Queries", duration: "6 min",
        content: `<p>Start with the viewport meta tag:</p>
          <pre>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</pre>
          <p>Media queries apply styles based on screen size:</p>
          <pre>/* Mobile first */
.grid { display: flex; flex-direction: column; }

@media (min-width: 768px) {
  .grid { flex-direction: row; }
}

@media (min-width: 1024px) {
  .grid > * { width: 33.333%; }
}</pre>`
      },
      {
        id: "resp-2", title: "CSS Grid for Layouts", duration: "8 min",
        content: `<p>CSS Grid is a two-dimensional layout system:</p>
          <pre>.card-grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}</pre>`
      },
      {
        id: "resp-3", title: "Fluid Typography", duration: "5 min",
        content: `<p>Use <code>clamp()</code> for fluid sizing:</p>
          <pre>h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

.container {
  padding: clamp(16px, 4vw, 48px);
}</pre>`
      }
    ],
    quiz: [
      { q: "What does 'mobile-first' mean?", options: ["Only build for mobile", "Write base styles for mobile, then enhance for larger screens", "Use max-width queries", "Disable desktop features"], answer: 1, explanation: "Mobile-first means base CSS for small screens, min-width queries for larger." },
      { q: "Which CSS function creates fluid sizing?", options: ["calc()", "var()", "clamp()", "min()"], answer: 2, explanation: "clamp(min, preferred, max) scales fluidly." },
      { q: "Responsive grid without media queries?", options: ["grid-template-columns: 1fr 1fr", "repeat(auto-fill, minmax(280px, 1fr))", "display: flex; flex-wrap: wrap", "grid-auto-flow: dense"], answer: 1, explanation: "repeat(auto-fill, minmax()) auto-adjusts columns." }
    ]
  },
  {
    id: "git-basics",
    icon: "🔀",
    title: "Git Version Control",
    desc: "Track changes, collaborate, and manage code history with Git.",
    level: "intermediate",
    duration: "35 min",
    lessons: [
      {
        id: "git-1", title: "Getting Started with Git", duration: "5 min",
        content: `<p>Initialize a repository and start tracking:</p>
          <pre>git init
git status
git add index.html
git commit -m "Initial commit"
git log --oneline</pre>`
      },
      {
        id: "git-2", title: "Branching & Merging", duration: "7 min",
        content: `<p>Branches let you work on features independently:</p>
          <pre>git checkout -b feature/navbar
git add .
git commit -m "Add navbar"
git checkout main
git merge feature/navbar
git branch -d feature/navbar</pre>`
      },
      {
        id: "git-3", title: "Remote Repositories", duration: "6 min",
        content: `<p>Share code and collaborate:</p>
          <pre>git remote add origin https://github.com/user/repo.git
git push -u origin main
git pull origin main
git clone https://github.com/user/repo.git</pre>`
      }
    ],
    quiz: [
      { q: "What does 'git init' do?", options: ["Downloads a repo", "Creates a new Git repository", "Pushes code to GitHub", "Installs Git"], answer: 1, explanation: "git init initializes a new repository." },
      { q: "Command to stage ALL changes?", options: ["git commit -a", "git add .", "git stage --all", "git push"], answer: 1, explanation: "git add . stages all changes." },
      { q: "Create and switch to a new branch?", options: ["git branch new", "git checkout -b new", "git switch --create new && git branch", "git new-branch"], answer: 1, explanation: "git checkout -b creates and switches." }
    ]
  },
  {
    id: "js-advanced",
    icon: "🚀",
    title: "Advanced JavaScript",
    desc: "Master async programming, closures, and modern ES6+ patterns.",
    level: "advanced",
    duration: "60 min",
    lessons: [
      {
        id: "adv-1", title: "Promises & Async/Await", duration: "8 min",
        content: `<p>Handle asynchronous operations:</p>
          <pre>// Async/Await
async function getData() {
  try {
    const response = await fetch(
      "https://api.example.com/data"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed:", error);
  }
}</pre>`
      },
      {
        id: "adv-2", title: "Closures & Scope", duration: "7 min",
        content: `<p>A closure remembers variables from its outer scope:</p>
          <pre>function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2</pre>`
      },
      {
        id: "adv-3", title: "Array Methods", duration: "8 min",
        content: `<p>Functional array methods:</p>
          <pre>const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
];

const active = users.filter(u => u.active);
const names = users.map(u => u.name);
const total = users.reduce((s, u) => s + u.age, 0);

const result = users
  .filter(u => u.active)
  .map(u => u.name)
  .join(", ");</pre>`
      }
    ],
    quiz: [
      { q: "What keyword makes a function async?", options: ["defer", "await", "async", "promise"], answer: 2, explanation: "async makes a function return a Promise." },
      { q: "What is a closure?", options: ["A way to close the browser", "A function with access to its outer scope's variables", "A method to end a loop", "A way to close a DB connection"], answer: 1, explanation: "A closure retains access to variables from its enclosing scope." },
      { q: "Which method creates a NEW array?", options: ["forEach", "push", "map", "splice"], answer: 2, explanation: "map() creates a new array by transforming each element." }
    ]
  }
];

// --- State ---
let currentCourse = null;
let currentLessonIdx = 0;
let currentQuizIdx = 0;
let selectedOption = null;
let quizAnswered = false;
let quizScore = 0;
let loggedInUser = null;

// --- localStorage Progress ---
function getProgress() {
  return JSON.parse(localStorage.getItem("ns_progress") || "{}");
}

function saveProgress(p) {
  localStorage.setItem("ns_progress", JSON.stringify(p));
}

function markLessonComplete(courseId, lessonId) {
  const p = getProgress();
  if (!p[courseId]) p[courseId] = { lessons: [], quizScore: null };
  if (!p[courseId].lessons.includes(lessonId)) {
    p[courseId].lessons.push(lessonId);
  }
  saveProgress(p);
}

function saveQuizScore(courseId, score, total) {
  const p = getProgress();
  if (!p[courseId]) p[courseId] = { lessons: [], quizScore: null };
  p[courseId].quizScore = { score, total };
  saveProgress(p);
}

function getCourseProgress(courseId) {
  const course = courses.find(c => c.id === courseId);
  const p = getProgress();
  if (!p[courseId]) return 0;
  return Math.round((p[courseId].lessons.length / course.lessons.length) * 100);
}

// --- Page Navigation ---
function showPage(name) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page-" + name).classList.add("active");
  window.scrollTo({ top: 0 });
}

// --- Section Navigation (Dashboard) ---
function switchSection(name, el) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById("sec-" + name).classList.add("active");

  document.querySelectorAll(".tnav-link").forEach(l => l.classList.remove("active"));
  if (el && el.classList) el.classList.add("active");

  closeUserMenu();
  window.scrollTo({ top: 0 });

  if (name === "courses") renderCourseList();
  if (name === "dashboard") renderDashboard();
  if (name === "reports") renderReports();
  if (name === "certificates") renderCertificates();
  if (name === "profile") renderProfile();
}

// --- Toast ---
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2500);
}

// --- User Menu ---
function toggleUserMenu() {
  document.getElementById("user-dropdown").classList.toggle("show");
}

function closeUserMenu() {
  document.getElementById("user-dropdown").classList.remove("show");
}

document.addEventListener("click", function(e) {
  if (!e.target.closest(".topnav-right")) closeUserMenu();
});

// =============================================
// LOGIN
// =============================================
function handleLogin(e) {
  e.preventDefault();
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (!user || !pass) {
    showLoginError("Please enter both username and password.");
    return;
  }

  // Demo login — accept any credentials
  loggedInUser = {
    id: user,
    name: user,
    email: user.toLowerCase() + "@m2iconsulting.com",
    dept: "Training & Development",
    org: "Prime M2i Consulting Pvt. Ltd."
  };

  const initials = user.substring(0, 2).toUpperCase();
  document.getElementById("user-avatar").textContent = initials;
  document.getElementById("user-display-name").textContent = user;
  document.getElementById("welcome-name").textContent = "Welcome back, " + user + "!";

  showPage("dashboard");
  switchSection("dashboard", document.querySelector('.tnav-link[data-section="dashboard"]'));
  showToast("Signed in successfully!");
}

function showLoginError(msg) {
  const el = document.getElementById("login-error");
  el.textContent = msg;
  el.style.display = "block";
  setTimeout(() => { el.style.display = "none"; }, 4000);
}

function handleForgot(e) {
  e.preventDefault();
  showToast("Password reset link sent! (Demo)");
  setTimeout(() => showPage("login"), 1500);
}

function showForgotPassword(e) {
  e.preventDefault();
  showPage("forgot");
}

function handleCpanelLogin(e) {
  e.preventDefault();
  showToast("Admin login is restricted. (Demo)");
}

function handleLogout() {
  loggedInUser = null;
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  showPage("login");
  showToast("Logged out successfully.");
}

// =============================================
// DASHBOARD
// =============================================
function renderDashboard() {
  const progress = getProgress();
  const startedCourses = Object.keys(progress);

  let totalLessons = 0;
  let completedCourses = 0;
  let totalQuizzes = 0;

  startedCourses.forEach(cid => {
    totalLessons += progress[cid].lessons.length;
    if (progress[cid].quizScore) totalQuizzes++;
    const course = courses.find(c => c.id === cid);
    if (course && progress[cid].lessons.length === course.lessons.length) {
      completedCourses++;
    }
  });

  document.getElementById("stat-enrolled").textContent = startedCourses.length;
  document.getElementById("stat-completed").textContent = completedCourses;
  document.getElementById("stat-hours").textContent = Math.round(totalLessons * 6 / 60);
  document.getElementById("stat-certs").textContent = totalQuizzes;

  // Continue Learning
  const cont = document.getElementById("continue-learning");
  if (startedCourses.length === 0) {
    cont.innerHTML = `<div class="empty-state"><i class="fas fa-book-open"></i><p>Start a course to see your progress here.</p></div>`;
  } else {
    cont.innerHTML = courses
      .filter(c => progress[c.id])
      .map(c => {
        const pct = getCourseProgress(c.id);
        return `<div class="continue-card" onclick="openCourseDetail('${c.id}')">
          <div class="continue-icon">${c.icon}</div>
          <div class="continue-info">
            <h4>${c.title}</h4>
            <p>${c.lessons.length} lessons &middot; ${c.level}</p>
          </div>
          <div class="continue-progress">
            <div class="pct">${pct}%</div>
            <div class="mini-bar"><div class="mini-bar-fill" style="width:${pct}%"></div></div>
          </div>
        </div>`;
      }).join("");
  }
}

// =============================================
// COURSES
// =============================================
function renderCourseList() {
  const search = (document.getElementById("course-search")?.value || "").toLowerCase();
  const filter = document.getElementById("course-filter")?.value || "all";

  const filtered = courses.filter(c => {
    const matchLevel = filter === "all" || c.level === filter;
    const matchSearch = !search || c.title.toLowerCase().includes(search) || c.desc.toLowerCase().includes(search);
    return matchLevel && matchSearch;
  });

  const grid = document.getElementById("course-grid");
  grid.innerHTML = filtered.map(c => {
    const pct = getCourseProgress(c.id);
    return `<div class="course-card" onclick="openCourseDetail('${c.id}')">
      <div class="card-banner ${c.level}"></div>
      <div class="card-body">
        <div class="card-icon-row">
          <span class="card-emoji">${c.icon}</span>
          <span class="card-title">${c.title}</span>
        </div>
        <div class="card-desc">${c.desc}</div>
        <div class="card-meta">
          <span class="level-badge ${c.level}">${c.level}</span>
          <span><i class="fas fa-book"></i> ${c.lessons.length} lessons</span>
          <span><i class="fas fa-clock"></i> ${c.duration}</span>
        </div>
        <div class="card-progress-bar"><div class="card-progress-fill" style="width:${pct}%"></div></div>
        <div class="card-progress-text">${pct}% complete</div>
      </div>
    </div>`;
  }).join("");

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state"><i class="fas fa-search"></i><p>No courses match your search.</p></div>`;
  }
}

// =============================================
// COURSE DETAIL
// =============================================
function openCourseDetail(courseId) {
  currentCourse = courses.find(c => c.id === courseId);
  if (!currentCourse) return;

  const progress = getProgress();
  const cp = progress[courseId] || { lessons: [], quizScore: null };
  const pct = getCourseProgress(courseId);

  document.getElementById("course-detail-content").innerHTML = `
    <button class="back-btn" onclick="switchSection('courses', document.querySelector('.tnav-link[data-section=courses]'))">
      <i class="fas fa-arrow-left"></i> Back to Courses
    </button>
    <div class="detail-header">
      <div class="icon">${currentCourse.icon}</div>
      <h1>${currentCourse.title}</h1>
      <p>${currentCourse.desc}</p>
      <div class="detail-stats">
        <span><i class="fas fa-book"></i> ${currentCourse.lessons.length} Lessons</span>
        <span><i class="fas fa-question-circle"></i> ${currentCourse.quiz.length} Quiz Questions</span>
        <span><i class="fas fa-chart-pie"></i> ${pct}% Complete</span>
        ${cp.quizScore ? `<span><i class="fas fa-trophy"></i> Quiz: ${cp.quizScore.score}/${cp.quizScore.total}</span>` : ""}
      </div>
    </div>
    <h3 class="lesson-list-header">Lessons</h3>
    ${currentCourse.lessons.map((l, i) => `
      <div class="lesson-item" onclick="openLesson(${i})">
        <div class="lesson-num ${cp.lessons.includes(l.id) ? 'done' : ''}">${cp.lessons.includes(l.id) ? '<i class="fas fa-check"></i>' : i + 1}</div>
        <div class="lesson-info">
          <div class="lesson-title">${l.title}</div>
          <div class="lesson-dur"><i class="fas fa-clock"></i> ${l.duration}</div>
        </div>
        ${cp.lessons.includes(l.id) ? '<span class="lesson-badge">Completed</span>' : ''}
      </div>
    `).join("")}
    <button class="quiz-start-btn" onclick="startQuiz()">
      <i class="fas fa-pen"></i> Take Quiz
    </button>
  `;

  switchSection("course-detail", null);
}

// =============================================
// LESSON
// =============================================
function openLesson(idx) {
  if (!currentCourse) return;
  currentLessonIdx = idx;
  const lesson = currentCourse.lessons[idx];

  document.getElementById("lesson-content").innerHTML = `
    <button class="back-btn" onclick="openCourseDetail('${currentCourse.id}')">
      <i class="fas fa-arrow-left"></i> Back to ${currentCourse.title}
    </button>
    <div class="lesson-page">
      <h2>${lesson.title}</h2>
      <div class="lesson-body">${lesson.content}</div>
      <div class="lesson-nav">
        ${idx > 0 ? `<button onclick="openLesson(${idx - 1})"><i class="fas fa-arrow-left"></i> Previous</button>` : "<div></div>"}
        <button class="primary" onclick="completeLesson(${idx})">
          ${idx < currentCourse.lessons.length - 1 ? 'Complete & Next <i class="fas fa-arrow-right"></i>' : 'Complete Lesson <i class="fas fa-check"></i>'}
        </button>
      </div>
    </div>
  `;

  switchSection("lesson", null);
}

function completeLesson(idx) {
  markLessonComplete(currentCourse.id, currentCourse.lessons[idx].id);
  showToast("Lesson completed!");
  if (idx < currentCourse.lessons.length - 1) {
    openLesson(idx + 1);
  } else {
    openCourseDetail(currentCourse.id);
  }
}

// =============================================
// QUIZ
// =============================================
function startQuiz() {
  if (!currentCourse) return;
  currentQuizIdx = 0;
  quizScore = 0;
  renderQuestion();
  switchSection("quiz", null);
}

function renderQuestion() {
  const quiz = currentCourse.quiz;
  const q = quiz[currentQuizIdx];
  selectedOption = null;
  quizAnswered = false;
  const labels = ["A", "B", "C", "D"];
  const pct = (currentQuizIdx / quiz.length) * 100;

  document.getElementById("quiz-content").innerHTML = `
    <button class="back-btn" onclick="openCourseDetail('${currentCourse.id}')">
      <i class="fas fa-arrow-left"></i> Back to ${currentCourse.title}
    </button>
    <div class="quiz-header">
      <h2>${currentCourse.title} — Quiz</h2>
      <p>Question ${currentQuizIdx + 1} of ${quiz.length}</p>
    </div>
    <div class="quiz-progress-row">
      <div class="quiz-bar"><div class="quiz-bar-fill" style="width:${pct}%"></div></div>
      <span>${Math.round(pct)}%</span>
    </div>
    <div class="question-card">
      <div class="question-text">${q.q}</div>
      <div class="options">
        ${q.options.map((opt, i) => `
          <div class="option" onclick="pickOption(${i})" id="opt-${i}">
            <div class="opt-marker">${labels[i]}</div>
            <span>${opt}</span>
          </div>
        `).join("")}
      </div>
      <div id="explanation-box"></div>
      <div class="quiz-actions">
        <button class="btn-check" id="check-btn" onclick="checkAnswer()">Check Answer</button>
        <button class="btn-next" id="next-btn" onclick="nextQuestion()" style="display:none">
          ${currentQuizIdx < quiz.length - 1 ? "Next Question" : "See Results"} <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  `;
}

function pickOption(i) {
  if (quizAnswered) return;
  selectedOption = i;
  document.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
  document.getElementById("opt-" + i).classList.add("selected");
}

function checkAnswer() {
  if (selectedOption === null || quizAnswered) return;
  quizAnswered = true;
  const q = currentCourse.quiz[currentQuizIdx];

  document.getElementById("opt-" + q.answer).classList.add("correct");
  if (selectedOption !== q.answer) {
    document.getElementById("opt-" + selectedOption).classList.add("wrong");
  } else {
    quizScore++;
  }

  document.getElementById("explanation-box").innerHTML = `<div class="explanation-box">${q.explanation}</div>`;
  document.getElementById("check-btn").style.display = "none";
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuizIdx++;
  if (currentQuizIdx < currentCourse.quiz.length) {
    renderQuestion();
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  const total = currentCourse.quiz.length;
  const pct = Math.round((quizScore / total) * 100);
  saveQuizScore(currentCourse.id, quizScore, total);

  let msg = "";
  if (pct === 100) msg = "Perfect score! You've mastered this topic!";
  else if (pct >= 75) msg = "Great job! Strong understanding.";
  else if (pct >= 50) msg = "Good effort! Review lessons to improve.";
  else msg = "Keep learning! Go through the lessons again.";

  document.getElementById("quiz-content").innerHTML = `
    <div class="quiz-result">
      <div class="result-score">${pct}%</div>
      <div class="result-label">${quizScore} of ${total} correct</div>
      <div class="result-msg">${msg}</div>
      <div class="result-actions">
        <button onclick="openCourseDetail('${currentCourse.id}')"><i class="fas fa-arrow-left"></i> Back to Course</button>
        <button class="primary" onclick="startQuiz()"><i class="fas fa-redo"></i> Retry Quiz</button>
      </div>
    </div>
  `;
}

// =============================================
// REPORTS
// =============================================
function renderReports() {
  const progress = getProgress();
  const started = Object.keys(progress).length;

  if (started === 0) {
    document.getElementById("reports-content").innerHTML = `<div class="empty-state"><i class="fas fa-chart-bar"></i><p>Complete courses to see your reports.</p></div>`;
    return;
  }

  let totalLessons = 0, totalQuizCorrect = 0, totalQuizTotal = 0;
  courses.forEach(c => {
    if (progress[c.id]) {
      totalLessons += progress[c.id].lessons.length;
      if (progress[c.id].quizScore) {
        totalQuizCorrect += progress[c.id].quizScore.score;
        totalQuizTotal += progress[c.id].quizScore.total;
      }
    }
  });

  document.getElementById("reports-content").innerHTML = `
    <div class="report-grid">
      <div class="report-card">
        <h4><i class="fas fa-chart-pie"></i> Overall Summary</h4>
        <div class="report-row"><span class="label">Courses Started</span><span class="value">${started}</span></div>
        <div class="report-row"><span class="label">Total Lessons Done</span><span class="value">${totalLessons}</span></div>
        <div class="report-row"><span class="label">Quiz Accuracy</span><span class="value">${totalQuizTotal ? Math.round((totalQuizCorrect/totalQuizTotal)*100) : 0}%</span></div>
        <div class="report-row"><span class="label">Est. Time Spent</span><span class="value">${Math.round(totalLessons * 6)} min</span></div>
      </div>
      ${courses.filter(c => progress[c.id]).map(c => {
        const pct = getCourseProgress(c.id);
        const qs = progress[c.id].quizScore;
        return `<div class="report-card">
          <h4>${c.icon} ${c.title}</h4>
          <div class="report-row"><span class="label">Lessons</span><span class="value">${progress[c.id].lessons.length}/${c.lessons.length}</span></div>
          <div class="report-row"><span class="label">Progress</span><span class="value">${pct}%</span></div>
          <div class="report-row"><span class="label">Quiz Score</span><span class="value">${qs ? qs.score + '/' + qs.total : '—'}</span></div>
        </div>`;
      }).join("")}
    </div>
  `;
}

// =============================================
// CERTIFICATES
// =============================================
function renderCertificates() {
  const progress = getProgress();
  const completed = courses.filter(c => {
    if (!progress[c.id] || !progress[c.id].quizScore) return false;
    const pct = getCourseProgress(c.id);
    const qpct = (progress[c.id].quizScore.score / progress[c.id].quizScore.total) * 100;
    return pct === 100 && qpct >= 75;
  });

  if (completed.length === 0) {
    document.getElementById("certificates-content").innerHTML = `
      <div class="empty-state">
        <i class="fas fa-certificate"></i>
        <p>Complete all lessons and score 75%+ on the quiz to earn a certificate.</p>
      </div>`;
    return;
  }

  document.getElementById("certificates-content").innerHTML = `
    <div class="cert-grid">
      ${completed.map(c => `
        <div class="cert-card">
          <div class="cert-icon"><i class="fas fa-award"></i></div>
          <h4>Certificate of Completion</h4>
          <p style="font-size:16px; font-weight:600; margin:8px 0;">${c.title}</p>
          <div class="cert-date">Issued to: ${loggedInUser ? loggedInUser.name : 'Learner'}</div>
          <div class="cert-date">Date: ${new Date().toLocaleDateString()}</div>
          <button class="cert-download" onclick="showToast('Certificate downloaded! (Demo)')">
            <i class="fas fa-download"></i> Download
          </button>
        </div>
      `).join("")}
    </div>
  `;
}

// =============================================
// PROFILE
// =============================================
function renderProfile() {
  const user = loggedInUser || { id: "Guest", name: "Guest", email: "—", dept: "—", org: "—" };
  const progress = getProgress();
  const started = Object.keys(progress).length;

  document.getElementById("profile-content").innerHTML = `
    <div class="profile-card">
      <div class="profile-avatar">${user.name.substring(0, 2).toUpperCase()}</div>
      <div class="profile-row"><span class="label">Employee ID</span><span class="value">${user.id}</span></div>
      <div class="profile-row"><span class="label">Name</span><span class="value">${user.name}</span></div>
      <div class="profile-row"><span class="label">Email</span><span class="value">${user.email}</span></div>
      <div class="profile-row"><span class="label">Department</span><span class="value">${user.dept}</span></div>
      <div class="profile-row"><span class="label">Organization</span><span class="value">${user.org}</span></div>
      <div class="profile-row"><span class="label">Courses Enrolled</span><span class="value">${started}</span></div>
    </div>
  `;
}

// =============================================
// INIT — show login page
// =============================================
showPage("login");
