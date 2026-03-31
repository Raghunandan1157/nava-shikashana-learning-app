// ============================================================
// Nava Shikashana - Learning App
// ============================================================

// --- Course Data ---
const courses = [
  {
    id: "html-basics",
    icon: "🌐",
    title: "HTML Fundamentals",
    desc: "Learn the building blocks of the web. Structure content with semantic HTML elements.",
    level: "beginner",
    lessons: [
      {
        id: "html-1",
        title: "Introduction to HTML",
        duration: "5 min",
        content: `
          <p>HTML (HyperText Markup Language) is the standard language for creating web pages. Every website you visit is built with HTML at its core.</p>
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
          <p>The <code>&lt;head&gt;</code> section contains metadata, while the <code>&lt;body&gt;</code> holds all visible content.</p>
        `,
      },
      {
        id: "html-2",
        title: "Headings & Paragraphs",
        duration: "5 min",
        content: `
          <p>HTML provides six levels of headings, from <code>&lt;h1&gt;</code> (most important) to <code>&lt;h6&gt;</code> (least important).</p>
          <pre>&lt;h1&gt;Main Title&lt;/h1&gt;
&lt;h2&gt;Section Title&lt;/h2&gt;
&lt;h3&gt;Subsection&lt;/h3&gt;

&lt;p&gt;Paragraphs contain body text. Each
paragraph is a block-level element.&lt;/p&gt;</pre>
          <p>Use headings to create a clear content hierarchy. Screen readers and search engines rely on this structure.</p>
        `,
      },
      {
        id: "html-3",
        title: "Links & Images",
        duration: "5 min",
        content: `
          <p>Links connect pages together using the anchor tag:</p>
          <pre>&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;

&lt;!-- Open in new tab --&gt;
&lt;a href="https://example.com" target="_blank"&gt;
  External Link
&lt;/a&gt;</pre>
          <p>Images are embedded with the self-closing <code>&lt;img&gt;</code> tag:</p>
          <pre>&lt;img src="photo.jpg" alt="A descriptive text" /&gt;</pre>
          <p>Always include the <code>alt</code> attribute for accessibility.</p>
        `,
      },
      {
        id: "html-4",
        title: "Lists & Tables",
        duration: "6 min",
        content: `
          <p>HTML supports ordered and unordered lists:</p>
          <pre>&lt;ul&gt;
  &lt;li&gt;Unordered item&lt;/li&gt;
  &lt;li&gt;Another item&lt;/li&gt;
&lt;/ul&gt;

&lt;ol&gt;
  &lt;li&gt;First step&lt;/li&gt;
  &lt;li&gt;Second step&lt;/li&gt;
&lt;/ol&gt;</pre>
          <p>Tables organize data in rows and columns:</p>
          <pre>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Name&lt;/th&gt;
      &lt;th&gt;Age&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Alice&lt;/td&gt;
      &lt;td&gt;25&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</pre>
        `,
      },
    ],
    quiz: [
      {
        q: "What does HTML stand for?",
        options: [
          "Hyper Trainer Marking Language",
          "HyperText Markup Language",
          "HyperText Marketing Language",
          "Hyper Tool Multi Language",
        ],
        answer: 1,
        explanation:
          "HTML stands for HyperText Markup Language. It's the standard markup language for creating web pages.",
      },
      {
        q: "Which tag is used for the largest heading?",
        options: ["<heading>", "<h6>", "<h1>", "<head>"],
        answer: 2,
        explanation:
          "<h1> is the largest heading. Headings range from <h1> (biggest) to <h6> (smallest).",
      },
      {
        q: "What attribute makes images accessible?",
        options: ["src", "title", "alt", "href"],
        answer: 2,
        explanation:
          "The 'alt' attribute provides alternative text for screen readers and when the image fails to load.",
      },
      {
        q: "Which tag creates a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: 1,
        explanation:
          "The <a> (anchor) tag creates hyperlinks. The href attribute specifies the URL.",
      },
    ],
  },
  {
    id: "css-basics",
    icon: "🎨",
    title: "CSS Styling",
    desc: "Style your web pages with colors, layouts, and animations using CSS.",
    level: "beginner",
    lessons: [
      {
        id: "css-1",
        title: "What is CSS?",
        duration: "5 min",
        content: `
          <p>CSS (Cascading Style Sheets) controls the visual presentation of HTML elements. It handles colors, fonts, spacing, layout, and more.</p>
          <p>There are three ways to add CSS:</p>
          <pre>/* 1. External stylesheet (recommended) */
&lt;link rel="stylesheet" href="style.css"&gt;

/* 2. Internal style block */
&lt;style&gt;
  h1 { color: blue; }
&lt;/style&gt;

/* 3. Inline styles (avoid when possible) */
&lt;p style="color: red;"&gt;Red text&lt;/p&gt;</pre>
          <p>External stylesheets keep your code organized and reusable across pages.</p>
        `,
      },
      {
        id: "css-2",
        title: "Selectors & Properties",
        duration: "6 min",
        content: `
          <p>CSS selectors target HTML elements to apply styles:</p>
          <pre>/* Element selector */
p { color: gray; }

/* Class selector */
.highlight { background: yellow; }

/* ID selector */
#header { font-size: 24px; }

/* Descendant selector */
nav a { text-decoration: none; }

/* Pseudo-class */
a:hover { color: blue; }</pre>
          <p>Properties define what to style, and values define how. Together they form <strong>declarations</strong>.</p>
        `,
      },
      {
        id: "css-3",
        title: "Box Model & Layout",
        duration: "7 min",
        content: `
          <p>Every HTML element is a box with four layers:</p>
          <pre>/* Content → Padding → Border → Margin */

.card {
  width: 300px;
  padding: 20px;      /* inside the border */
  border: 1px solid #ccc;
  margin: 16px;       /* outside the border */
  box-sizing: border-box; /* include padding in width */
}</pre>
          <p>Use <code>box-sizing: border-box</code> to make sizing more predictable. Most modern resets apply this globally.</p>
        `,
      },
      {
        id: "css-4",
        title: "Flexbox",
        duration: "8 min",
        content: `
          <p>Flexbox is a one-dimensional layout system for arranging items in rows or columns:</p>
          <pre>.container {
  display: flex;
  justify-content: space-between; /* horizontal */
  align-items: center;            /* vertical */
  gap: 16px;
}

.item {
  flex: 1;  /* grow equally */
}

/* Column layout */
.stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}</pre>
          <p>Flexbox handles alignment, distribution, and ordering of child elements effortlessly.</p>
        `,
      },
    ],
    quiz: [
      {
        q: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Creative Style System",
          "Colorful Style Sheets",
        ],
        answer: 1,
        explanation:
          "CSS stands for Cascading Style Sheets. The 'cascading' refers to how styles are applied in order of specificity.",
      },
      {
        q: "Which selector targets elements with class='btn'?",
        options: ["#btn", ".btn", "btn", "*btn"],
        answer: 1,
        explanation:
          "A period (.) before a name selects by class. A hash (#) selects by ID.",
      },
      {
        q: "What property creates space INSIDE an element's border?",
        options: ["margin", "padding", "border-spacing", "gap"],
        answer: 1,
        explanation:
          "Padding creates space between the content and the border. Margin creates space outside the border.",
      },
      {
        q: "Which display value enables Flexbox?",
        options: [
          "display: block",
          "display: flex",
          "display: grid",
          "display: inline",
        ],
        answer: 1,
        explanation:
          "display: flex enables the Flexbox layout model on the container.",
      },
    ],
  },
  {
    id: "js-basics",
    icon: "⚡",
    title: "JavaScript Essentials",
    desc: "Add interactivity to your sites with variables, functions, and DOM manipulation.",
    level: "beginner",
    lessons: [
      {
        id: "js-1",
        title: "Variables & Data Types",
        duration: "6 min",
        content: `
          <p>JavaScript variables store data values. Use <code>const</code> for values that don't change, and <code>let</code> for ones that do:</p>
          <pre>const name = "Alice";   // string
let age = 25;           // number
let isActive = true;    // boolean
const colors = ["red", "blue"]; // array
const user = {          // object
  name: "Alice",
  age: 25
};</pre>
          <p>Avoid using <code>var</code> in modern JavaScript &mdash; <code>let</code> and <code>const</code> have clearer scoping rules.</p>
        `,
      },
      {
        id: "js-2",
        title: "Functions",
        duration: "7 min",
        content: `
          <p>Functions are reusable blocks of code:</p>
          <pre>// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow function (modern syntax)
const add = (a, b) => a + b;

// With default parameters
const welcome = (name = "Guest") => {
  console.log("Welcome, " + name);
};

greet("Alice");  // "Hello, Alice!"
add(3, 5);       // 8
welcome();       // "Welcome, Guest"</pre>
          <p>Arrow functions are more concise and are commonly used in modern JavaScript.</p>
        `,
      },
      {
        id: "js-3",
        title: "DOM Manipulation",
        duration: "8 min",
        content: `
          <p>The DOM (Document Object Model) lets JavaScript interact with HTML:</p>
          <pre>// Select elements
const title = document.querySelector("h1");
const items = document.querySelectorAll(".item");

// Change content
title.textContent = "New Title";
title.innerHTML = "&lt;em&gt;Styled&lt;/em&gt; Title";

// Change styles
title.style.color = "blue";
title.classList.add("active");
title.classList.toggle("hidden");

// Create elements
const btn = document.createElement("button");
btn.textContent = "Click me";
document.body.appendChild(btn);</pre>
        `,
      },
      {
        id: "js-4",
        title: "Events",
        duration: "6 min",
        content: `
          <p>Events let you respond to user interactions:</p>
          <pre>const button = document.querySelector("#myBtn");

// Click event
button.addEventListener("click", () => {
  alert("Button clicked!");
});

// Input event
const input = document.querySelector("#search");
input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

// Keyboard event
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});</pre>
          <p>Use <code>addEventListener</code> instead of inline event handlers like <code>onclick</code> for better separation of concerns.</p>
        `,
      },
    ],
    quiz: [
      {
        q: "Which keyword declares a constant variable?",
        options: ["var", "let", "const", "define"],
        answer: 2,
        explanation:
          "const declares a constant — its value cannot be reassigned after initialization.",
      },
      {
        q: "What is the correct arrow function syntax?",
        options: [
          "function => (a, b)",
          "(a, b) => a + b",
          "a, b => { a + b }",
          "=> (a, b) { a + b }",
        ],
        answer: 1,
        explanation:
          "Arrow functions use the (params) => expression syntax. For single expressions, curly braces and return are optional.",
      },
      {
        q: "Which method selects the FIRST matching element?",
        options: [
          "getElementById",
          "querySelectorAll",
          "querySelector",
          "getElementsByClassName",
        ],
        answer: 2,
        explanation:
          "querySelector returns the first element matching the CSS selector. querySelectorAll returns all matches.",
      },
      {
        q: "How do you listen for a click event?",
        options: [
          'element.onClick("click", fn)',
          'element.addEventListener("click", fn)',
          'element.listen("click", fn)',
          'element.on("click", fn)',
        ],
        answer: 1,
        explanation:
          "addEventListener is the standard method for attaching event handlers in modern JavaScript.",
      },
    ],
  },
  {
    id: "responsive",
    icon: "📱",
    title: "Responsive Design",
    desc: "Build layouts that look great on every screen size with media queries and modern CSS.",
    level: "intermediate",
    lessons: [
      {
        id: "resp-1",
        title: "Viewport & Media Queries",
        duration: "6 min",
        content: `
          <p>Responsive design ensures your site works on all devices. Start with the viewport meta tag:</p>
          <pre>&lt;meta name="viewport"
  content="width=device-width, initial-scale=1.0"&gt;</pre>
          <p>Media queries apply styles based on screen size:</p>
          <pre>/* Mobile first - base styles for small screens */
.grid { display: flex; flex-direction: column; }

/* Tablet and up */
@media (min-width: 768px) {
  .grid {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .grid > * { width: 50%; }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid > * { width: 33.333%; }
}</pre>
        `,
      },
      {
        id: "resp-2",
        title: "CSS Grid for Layouts",
        duration: "8 min",
        content: `
          <p>CSS Grid is a two-dimensional layout system ideal for page layouts:</p>
          <pre>.page {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* Responsive grid - auto-fit columns */
.card-grid {
  display: grid;
  grid-template-columns:
    repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}</pre>
          <p>The <code>auto-fill</code> and <code>minmax()</code> combination creates responsive grids without media queries.</p>
        `,
      },
      {
        id: "resp-3",
        title: "Fluid Typography & Spacing",
        duration: "5 min",
        content: `
          <p>Use <code>clamp()</code> for fluid sizing that scales smoothly:</p>
          <pre>h1 {
  /* min, preferred, max */
  font-size: clamp(1.5rem, 4vw, 3rem);
}

.container {
  padding: clamp(16px, 4vw, 48px);
  max-width: 1200px;
  margin: 0 auto;
}

/* Responsive spacing scale */
:root {
  --space-sm: clamp(8px, 2vw, 12px);
  --space-md: clamp(16px, 3vw, 24px);
  --space-lg: clamp(32px, 5vw, 64px);
}</pre>
          <p>Fluid typography eliminates abrupt breakpoint changes and creates smoother scaling.</p>
        `,
      },
    ],
    quiz: [
      {
        q: "What does 'mobile-first' mean in responsive design?",
        options: [
          "Only build for mobile",
          "Write base styles for mobile, then enhance for larger screens",
          "Use max-width media queries",
          "Disable desktop features",
        ],
        answer: 1,
        explanation:
          "Mobile-first means writing base CSS for small screens and using min-width media queries to add styles for larger viewports.",
      },
      {
        q: "Which CSS function creates fluid sizing?",
        options: ["calc()", "var()", "clamp()", "min()"],
        answer: 2,
        explanation:
          "clamp(min, preferred, max) creates values that scale fluidly between a minimum and maximum.",
      },
      {
        q: "What creates a responsive grid without media queries?",
        options: [
          "grid-template-columns: 1fr 1fr",
          "grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))",
          "display: flex; flex-wrap: wrap",
          "grid-auto-flow: dense",
        ],
        answer: 1,
        explanation:
          "repeat(auto-fill, minmax(280px, 1fr)) creates columns that automatically adjust based on available space.",
      },
    ],
  },
  {
    id: "git-basics",
    icon: "🔀",
    title: "Git Version Control",
    desc: "Track changes, collaborate with others, and manage code history with Git.",
    level: "intermediate",
    lessons: [
      {
        id: "git-1",
        title: "Getting Started with Git",
        duration: "5 min",
        content: `
          <p>Git tracks changes to your files over time. Initialize a repository and start tracking:</p>
          <pre># Initialize a new repository
git init

# Check status
git status

# Stage files for commit
git add index.html
git add .  # stage everything

# Commit changes
git commit -m "Initial commit"

# View history
git log --oneline</pre>
          <p>Each commit is a snapshot of your project at a point in time.</p>
        `,
      },
      {
        id: "git-2",
        title: "Branching & Merging",
        duration: "7 min",
        content: `
          <p>Branches let you work on features independently:</p>
          <pre># Create and switch to a new branch
git checkout -b feature/navbar

# Make changes, then commit
git add .
git commit -m "Add responsive navbar"

# Switch back to main
git checkout main

# Merge the feature branch
git merge feature/navbar

# Delete the branch after merging
git branch -d feature/navbar</pre>
          <p>Keep the <code>main</code> branch stable. Do all development work on feature branches.</p>
        `,
      },
      {
        id: "git-3",
        title: "Remote Repositories",
        duration: "6 min",
        content: `
          <p>Remote repositories let you share code and collaborate:</p>
          <pre># Add a remote
git remote add origin https://github.com/user/repo.git

# Push your code
git push -u origin main

# Pull latest changes
git pull origin main

# Clone an existing repo
git clone https://github.com/user/repo.git</pre>
          <p>GitHub, GitLab, and Bitbucket are popular platforms for hosting remote repositories.</p>
        `,
      },
    ],
    quiz: [
      {
        q: "What does 'git init' do?",
        options: [
          "Downloads a repository",
          "Creates a new Git repository",
          "Pushes code to GitHub",
          "Installs Git",
        ],
        answer: 1,
        explanation:
          "git init initializes a new Git repository in the current directory by creating a .git folder.",
      },
      {
        q: "What command stages ALL changes for commit?",
        options: ["git commit -a", "git add .", "git stage --all", "git push"],
        answer: 1,
        explanation:
          "git add . stages all modified and new files in the current directory and subdirectories.",
      },
      {
        q: "How do you create and switch to a new branch?",
        options: [
          "git branch new-branch",
          "git checkout -b new-branch",
          "git switch --create new-branch && git branch",
          "git new-branch",
        ],
        answer: 1,
        explanation:
          "git checkout -b creates a new branch and switches to it in one command.",
      },
    ],
  },
  {
    id: "js-advanced",
    icon: "🚀",
    title: "Advanced JavaScript",
    desc: "Master async programming, closures, prototypes, and modern ES6+ patterns.",
    level: "advanced",
    lessons: [
      {
        id: "adv-1",
        title: "Promises & Async/Await",
        duration: "8 min",
        content: `
          <p>Asynchronous code handles operations that take time (API calls, file reads):</p>
          <pre>// Promise
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/Await (cleaner syntax)
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
}</pre>
          <p>Async/await makes asynchronous code read like synchronous code.</p>
        `,
      },
      {
        id: "adv-2",
        title: "Closures & Scope",
        duration: "7 min",
        content: `
          <p>A closure is a function that remembers the variables from its outer scope:</p>
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
counter.increment(); // 2
counter.getCount();  // 2

// Practical example: event handler factory
function handleClick(message) {
  return function() {
    alert(message);
  };
}

btn.addEventListener("click", handleClick("Hello!"));</pre>
          <p>Closures enable data privacy and are the foundation of many JavaScript patterns.</p>
        `,
      },
      {
        id: "adv-3",
        title: "Array Methods",
        duration: "8 min",
        content: `
          <p>Modern array methods enable functional programming patterns:</p>
          <pre>const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Carol", age: 28, active: true },
];

// Filter
const active = users.filter(u => u.active);

// Map
const names = users.map(u => u.name);

// Find
const bob = users.find(u => u.name === "Bob");

// Reduce
const totalAge = users.reduce(
  (sum, u) => sum + u.age, 0
);

// Chaining
const result = users
  .filter(u => u.active)
  .map(u => u.name)
  .join(", "); // "Alice, Carol"</pre>
        `,
      },
    ],
    quiz: [
      {
        q: "What keyword makes a function asynchronous?",
        options: ["defer", "await", "async", "promise"],
        answer: 2,
        explanation:
          "The 'async' keyword before a function declaration makes it return a Promise and enables the use of 'await' inside it.",
      },
      {
        q: "What is a closure?",
        options: [
          "A way to close the browser",
          "A function with access to its outer scope's variables",
          "A method to end a loop",
          "A way to close a database connection",
        ],
        answer: 1,
        explanation:
          "A closure is a function that retains access to variables from its enclosing scope, even after the outer function has returned.",
      },
      {
        q: "Which method creates a NEW array from an existing one?",
        options: ["forEach", "push", "map", "splice"],
        answer: 2,
        explanation:
          "map() creates a new array by calling a function on every element. forEach() doesn't return anything, push() modifies the original.",
      },
    ],
  },
];

// --- State ---
let currentCourse = null;
let currentLessonIdx = 0;
let currentQuizIdx = 0;
let selectedOption = null;
let quizAnswered = false;
let quizScore = 0;

// --- Progress (localStorage) ---
function getProgress() {
  return JSON.parse(localStorage.getItem("ns_progress") || "{}");
}

function saveProgress(progress) {
  localStorage.setItem("ns_progress", JSON.stringify(progress));
}

function markLessonComplete(courseId, lessonId) {
  const progress = getProgress();
  if (!progress[courseId]) progress[courseId] = { lessons: [], quizScore: null };
  if (!progress[courseId].lessons.includes(lessonId)) {
    progress[courseId].lessons.push(lessonId);
  }
  saveProgress(progress);
}

function saveQuizScore(courseId, score, total) {
  const progress = getProgress();
  if (!progress[courseId]) progress[courseId] = { lessons: [], quizScore: null };
  progress[courseId].quizScore = { score, total };
  saveProgress(progress);
}

function getCourseProgress(courseId) {
  const course = courses.find((c) => c.id === courseId);
  const progress = getProgress();
  if (!progress[courseId]) return 0;
  const completedLessons = progress[courseId].lessons.length;
  const totalLessons = course.lessons.length;
  return Math.round((completedLessons / totalLessons) * 100);
}

// --- View Management ---
function showView(viewName) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  document.getElementById(`view-${viewName}`).classList.add("active");

  document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"));
  const navLink = document.querySelector(`.nav-link[data-view="${viewName}"]`);
  if (navLink) navLink.classList.add("active");

  window.scrollTo({ top: 0 });

  if (viewName === "home") renderCourses();
  if (viewName === "progress") renderProgress();
}

// --- Toast ---
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// --- Render Courses ---
function renderCourses(filter = "all", search = "") {
  const grid = document.getElementById("course-grid");
  const filtered = courses.filter((c) => {
    const matchLevel = filter === "all" || c.level === filter;
    const matchSearch =
      !search ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase());
    return matchLevel && matchSearch;
  });

  grid.innerHTML = filtered
    .map((c) => {
      const pct = getCourseProgress(c.id);
      return `
      <div class="course-card" onclick="openCourse('${c.id}')">
        <div class="card-icon">${c.icon}</div>
        <div class="card-title">${c.title}</div>
        <div class="card-desc">${c.desc}</div>
        <div class="card-meta">
          <span class="badge ${c.level}">${c.level}</span>
          <span>${c.lessons.length} lessons</span>
          <span>${c.quiz.length} quiz questions</span>
        </div>
        ${
          pct > 0
            ? `<div class="card-progress"><div class="card-progress-fill" style="width:${pct}%"></div></div>`
            : ""
        }
      </div>`;
    })
    .join("");

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state"><div class="icon">🔍</div><p>No courses found matching your search.</p></div>`;
  }
}

let activeFilter = "all";
function filterByTag(tag, el) {
  activeFilter = tag;
  document.querySelectorAll(".filter-tags .tag").forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
  const search = document.getElementById("search-input").value;
  renderCourses(tag, search);
}

function filterCourses() {
  const search = document.getElementById("search-input").value;
  renderCourses(activeFilter, search);
}

// --- Open Course ---
function openCourse(courseId) {
  currentCourse = courses.find((c) => c.id === courseId);
  if (!currentCourse) return;

  const progress = getProgress();
  const courseProgress = progress[courseId] || { lessons: [], quizScore: null };
  const pct = getCourseProgress(courseId);

  const detail = document.getElementById("course-detail");
  detail.innerHTML = `
    <div class="course-header">
      <div class="icon">${currentCourse.icon}</div>
      <h1>${currentCourse.title}</h1>
      <p>${currentCourse.desc}</p>
      <div class="course-stats">
        <span>${currentCourse.lessons.length} Lessons</span>
        <span>${currentCourse.quiz.length} Quiz Questions</span>
        <span>${pct}% Complete</span>
        ${courseProgress.quizScore ? `<span>Quiz: ${courseProgress.quizScore.score}/${courseProgress.quizScore.total}</span>` : ""}
      </div>
    </div>
    <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Lessons</h3>
    <ul class="lesson-list">
      ${currentCourse.lessons
        .map(
          (l, i) => `
        <li class="lesson-item" onclick="openLesson(${i})">
          <div class="lesson-num ${courseProgress.lessons.includes(l.id) ? "completed" : ""}">${
            courseProgress.lessons.includes(l.id) ? "✓" : i + 1
          }</div>
          <div class="lesson-info">
            <div class="lesson-title">${l.title}</div>
            <div class="lesson-duration">${l.duration}</div>
          </div>
          ${courseProgress.lessons.includes(l.id) ? '<span class="lesson-status done">Done</span>' : ""}
        </li>`
        )
        .join("")}
    </ul>
    <button class="quiz-btn" onclick="startQuiz()">Take Quiz →</button>
  `;

  showView("course");
}

// --- Open Lesson ---
function openLesson(idx) {
  if (!currentCourse) return;
  currentLessonIdx = idx;
  const lesson = currentCourse.lessons[idx];

  const container = document.getElementById("lesson-content");
  container.innerHTML = `
    <div class="lesson-page">
      <h2>${lesson.title}</h2>
      <div class="lesson-body">${lesson.content}</div>
      <div class="lesson-nav">
        ${idx > 0 ? `<button onclick="openLesson(${idx - 1})">← Previous</button>` : "<div></div>"}
        <button class="primary" onclick="completeAndNext(${idx})">
          ${idx < currentCourse.lessons.length - 1 ? "Complete & Next →" : "Complete Lesson ✓"}
        </button>
      </div>
    </div>
  `;

  document.getElementById("back-to-course").onclick = () => openCourse(currentCourse.id);
  showView("lesson");
}

function completeAndNext(idx) {
  const lesson = currentCourse.lessons[idx];
  markLessonComplete(currentCourse.id, lesson.id);
  showToast("Lesson completed!");

  if (idx < currentCourse.lessons.length - 1) {
    openLesson(idx + 1);
  } else {
    openCourse(currentCourse.id);
  }
}

// --- Quiz ---
function startQuiz() {
  if (!currentCourse) return;
  currentQuizIdx = 0;
  quizScore = 0;
  renderQuizQuestion();
  document.getElementById("back-to-course-from-quiz").onclick = () =>
    openCourse(currentCourse.id);
  showView("quiz");
}

function renderQuizQuestion() {
  const quiz = currentCourse.quiz;
  const q = quiz[currentQuizIdx];
  selectedOption = null;
  quizAnswered = false;

  const container = document.getElementById("quiz-content");
  const labels = ["A", "B", "C", "D"];
  const progressPct = ((currentQuizIdx) / quiz.length) * 100;

  container.innerHTML = `
    <div class="quiz-header">
      <h2>${currentCourse.title} — Quiz</h2>
      <p>Question ${currentQuizIdx + 1} of ${quiz.length}</p>
    </div>
    <div class="quiz-progress">
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width: ${progressPct}%"></div>
      </div>
      <span>${Math.round(progressPct)}%</span>
    </div>
    <div class="question-card">
      <div class="question-text">${q.q}</div>
      <div class="options">
        ${q.options
          .map(
            (opt, i) => `
          <div class="option" onclick="selectOption(${i})" id="opt-${i}">
            <div class="option-marker">${labels[i]}</div>
            <span>${opt}</span>
          </div>`
          )
          .join("")}
      </div>
      <div id="explanation"></div>
      <div class="quiz-actions">
        <button class="btn-check" id="check-btn" onclick="checkAnswer()">Check Answer</button>
        <button class="btn-next" id="next-btn" onclick="nextQuestion()" style="display:none">
          ${currentQuizIdx < quiz.length - 1 ? "Next Question →" : "See Results →"}
        </button>
      </div>
    </div>
  `;
}

function selectOption(idx) {
  if (quizAnswered) return;
  selectedOption = idx;
  document.querySelectorAll(".option").forEach((o) => o.classList.remove("selected"));
  document.getElementById(`opt-${idx}`).classList.add("selected");
}

function checkAnswer() {
  if (selectedOption === null || quizAnswered) return;
  quizAnswered = true;

  const q = currentCourse.quiz[currentQuizIdx];
  const correct = q.answer;

  document.getElementById(`opt-${correct}`).classList.add("correct");
  if (selectedOption !== correct) {
    document.getElementById(`opt-${selectedOption}`).classList.add("wrong");
  } else {
    quizScore++;
  }

  document.getElementById("explanation").innerHTML = `<div class="explanation">${q.explanation}</div>`;
  document.getElementById("check-btn").style.display = "none";
  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuizIdx++;
  if (currentQuizIdx < currentCourse.quiz.length) {
    renderQuizQuestion();
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  const total = currentCourse.quiz.length;
  const pct = Math.round((quizScore / total) * 100);
  saveQuizScore(currentCourse.id, quizScore, total);

  let message = "";
  if (pct === 100) message = "Perfect score! You've mastered this topic!";
  else if (pct >= 75) message = "Great job! You have a strong understanding.";
  else if (pct >= 50) message = "Good effort! Review the lessons to improve.";
  else message = "Keep learning! Go through the lessons again and retry.";

  document.getElementById("quiz-content").innerHTML = `
    <div class="quiz-result">
      <div class="result-score">${pct}%</div>
      <div class="result-label">${quizScore} out of ${total} correct</div>
      <div class="result-message">${message}</div>
      <div class="result-actions">
        <button onclick="openCourse('${currentCourse.id}')">Back to Course</button>
        <button class="primary" onclick="startQuiz()">Retry Quiz</button>
      </div>
    </div>
  `;
}

// --- Progress View ---
function renderProgress() {
  const progress = getProgress();
  const container = document.getElementById("progress-content");

  const started = Object.keys(progress).length;
  let totalLessonsCompleted = 0;
  let totalQuizzesTaken = 0;

  Object.values(progress).forEach((p) => {
    totalLessonsCompleted += p.lessons.length;
    if (p.quizScore) totalQuizzesTaken++;
  });

  if (started === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="icon">📚</div>
        <p>You haven't started any courses yet.</p>
        <p style="margin-top: 8px; font-size: 14px; color: var(--text-muted);">
          Browse courses and begin your learning journey!
        </p>
      </div>`;
    return;
  }

  let html = `
    <div class="progress-overview">
      <div class="stat-card">
        <div class="stat-value">${started}</div>
        <div class="stat-label">Courses Started</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${totalLessonsCompleted}</div>
        <div class="stat-label">Lessons Completed</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">${totalQuizzesTaken}</div>
        <div class="stat-label">Quizzes Taken</div>
      </div>
    </div>
    <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Course Progress</h3>
    <div class="progress-courses">
  `;

  courses.forEach((c) => {
    if (!progress[c.id]) return;
    const pct = getCourseProgress(c.id);
    const quizInfo = progress[c.id].quizScore;
    html += `
      <div class="progress-course-item" style="cursor:pointer" onclick="openCourse('${c.id}')">
        <div class="progress-course-icon">${c.icon}</div>
        <div class="progress-course-info">
          <h3>${c.title} ${quizInfo ? `<span style="font-weight:400;font-size:12px;color:var(--text-muted)">Quiz: ${quizInfo.score}/${quizInfo.total}</span>` : ""}</h3>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width:${pct}%"></div>
          </div>
        </div>
        <div class="progress-pct">${pct}%</div>
      </div>`;
  });

  html += "</div>";
  container.innerHTML = html;
}

// --- Initialize ---
renderCourses();
