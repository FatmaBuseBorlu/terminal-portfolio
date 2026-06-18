const profile = {
  name: "Fatma Buse Borlu",
  role: "Junior Full Stack .NET Developer",
  location: "Istanbul, Turkiye",
  github: "https://github.com/FatmaBuseBorlu",
  linkedin: "https://www.linkedin.com/in/fatma-buse-borlu-36537519b/",
  email: "fatmabuseborlu@gmail.com"
};

const projects = [
  {
    key: "reporterday",
    name: "ReporterDay",
    focus: "Layered ASP.NET Core MVC blog/news platform with Identity, EF Core, FluentValidation, Data Protection, and AI-assisted comment moderation.",
    stack: ["ASP.NET Core 8", "C#", "EF Core", "SQL Server", "Identity", "AI API"],
    repo: "https://github.com/FatmaBuseBorlu/ReporterDay",
    status: "Strongest backend portfolio project"
  },
  {
    key: "identitychatmail",
    name: "IdentityChatMail",
    focus: "Internal mail-style MVC application with ASP.NET Core Identity, inbox/sent flows, soft delete, favorites, search, and SQL Server migrations.",
    stack: ["ASP.NET Core MVC", "Identity", "EF Core", "SQL Server", "Razor"],
    repo: "https://github.com/FatmaBuseBorlu/IdentityChatMail",
    status: "Auth and CRUD practice"
  },
  {
    key: "foodmartmongo",
    name: "FoodMartMongo",
    focus: "MongoDB-backed e-commerce style project with product, category, customer, discount, and slider management screens.",
    stack: ["ASP.NET Core", "MongoDB", "MVC", "Mail Settings", "Bootstrap"],
    repo: "https://github.com/FatmaBuseBorlu/FoodMartMongo",
    status: "NoSQL and admin dashboard practice"
  },
  {
    key: "dapperdayproject",
    name: "DapperDayProject",
    focus: "SQL Server data access project using Dapper, DTOs, repository abstraction, async CRUD operations, and join queries.",
    stack: ["ASP.NET Core 9", "Dapper", "SQL Server", "DTO", "Repository"],
    repo: "https://github.com/FatmaBuseBorlu/DapperDayProject",
    status: "SQL and lightweight data access"
  },
  {
    key: "postgreday",
    name: "PostgreDay",
    focus: "PostgreSQL and EF Core project for practicing relational modeling, migrations, and database-backed MVC workflows.",
    stack: ["ASP.NET Core", "PostgreSQL", "Npgsql", "EF Core", "AutoMapper"],
    repo: "https://github.com/FatmaBuseBorlu/PostgreDay",
    status: "PostgreSQL practice"
  },
  {
    key: "facialemotion",
    name: "FacialEmotionKDEF-CNN",
    focus: "Machine learning project focused on facial emotion recognition with CNN-based experimentation.",
    stack: ["Python", "CNN", "Deep Learning", "Computer Vision"],
    repo: "https://github.com/FatmaBuseBorlu/FacialEmotionKDEF-CNN",
    status: "AI/ML background signal"
  }
];

const output = document.getElementById("terminalOutput");
const form = document.getElementById("terminalForm");
const input = document.getElementById("terminalInput");
const chips = document.querySelectorAll(".cmd-chip");
let commandHistory = [];
let historyIndex = -1;

const commands = {
  help: () => card(`
    <p><span class="accent-amber">Available commands</span></p>
    <p>about, skills, projects, open &lt;project&gt;, roadmap, certs, contact, github, clear</p>
  `),
  about: () => card(`
    <p><span class="accent-amber">${profile.name}</span> is a ${profile.role} focused on backend systems, REST APIs, SQL-backed applications, and maintainable .NET architecture.</p>
    <p>Current direction: become job-ready for .NET backend roles in fintech, banking, SaaS, and product teams.</p>
    <p>Core signal: C#, ASP.NET Core, Entity Framework Core, SQL Server, clean architecture, Git, and practical project delivery.</p>
  `),
  skills: () => card(`
    <p><span class="accent-amber">Backend</span> C#, ASP.NET Core MVC, Web API, Entity Framework Core, Identity, RESTful API design.</p>
    <p><span class="accent-blue">Database</span> SQL Server, PostgreSQL, MongoDB, Dapper, relational modeling, migrations, query discipline.</p>
    <p><span class="accent-violet">Architecture</span> Layered architecture, Clean Architecture basics, SOLID, repository/service patterns, validation.</p>
    <p><span class="accent-rose">Next focus</span> Docker, Redis, test automation, CI/CD, Azure SQL, observability, deployment flow.</p>
  `),
  projects: () => projectGrid(projects),
  roadmap: () => card(`
    <p><span class="accent-amber">Phase 1</span> Polish public GitHub repos: README, screenshots, run steps, clean connection strings.</p>
    <p><span class="accent-blue">Phase 2</span> Deploy this portfolio to the custom domain and connect project/demo links.</p>
    <p><span class="accent-violet">Phase 3</span> Build one flagship backend project with Web API, SQL Server, Redis, Docker, tests, and CI.</p>
    <p><span class="accent-rose">Phase 4</span> Apply with targeted CV, LinkedIn messages, and role-specific project links.</p>
  `),
  certs: () => card(`
    <p><span class="accent-amber">Recommended first certificate</span> Microsoft Azure Fundamentals AZ-900.</p>
    <p><span class="accent-blue">After deployment practice</span> Azure Developer Associate or focused Docker/Kubernetes labs.</p>
    <p><span class="accent-violet">Priority</span> Projects and interviews first; certificates should support the story, not replace it.</p>
  `),
  contact: () => card(`
    <p><span class="accent-amber">GitHub</span> <a href="${profile.github}" target="_blank" rel="noreferrer">${profile.github}</a></p>
    <p><span class="accent-blue">LinkedIn</span> <a href="${profile.linkedin}" target="_blank" rel="noreferrer">${profile.linkedin}</a></p>
    <p><span class="accent-violet">Email</span> <a href="mailto:${profile.email}">${profile.email}</a></p>
  `),
  github: () => card(`
    <p>Opening GitHub profile...</p>
    <p><a href="${profile.github}" target="_blank" rel="noreferrer">${profile.github}</a></p>
  `)
};

function card(html) {
  return `<div class="terminal-card">${html}</div>`;
}

function projectGrid(items) {
  const cards = items.map((project) => `
    <article class="project-card">
      <h3>${project.name}</h3>
      <p>${project.focus}</p>
      <p><span class="accent-blue">${project.status}</span></p>
      <div class="tag-row">${project.stack.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <p><a href="${project.repo}" target="_blank" rel="noreferrer">View repository</a></p>
    </article>
  `).join("");

  return `<div class="grid-output">${cards}</div>`;
}

function print(command, html) {
  const entry = document.createElement("div");
  entry.className = "terminal-entry";
  entry.innerHTML = `
    <div class="terminal-command">buse@portfolio % ${escapeHtml(command)}</div>
    ${html}
  `;
  output.appendChild(entry);
  output.scrollTop = output.scrollHeight;
}

function runCommand(rawCommand) {
  const command = rawCommand.trim().toLowerCase();

  if (!command) {
    return;
  }

  commandHistory.push(command);
  historyIndex = commandHistory.length;

  if (command === "clear") {
    output.innerHTML = "";
    return;
  }

  if (command.startsWith("open ")) {
    const key = command.replace("open ", "").replace(/\s+/g, "");
    const project = projects.find((item) => item.key === key || item.name.toLowerCase() === key);
    if (!project) {
      print(command, card(`<p>Project not found. Try <span class="accent-amber">projects</span> to list available project keys.</p>`));
      return;
    }

    print(command, projectGrid([project]));
    window.open(project.repo, "_blank", "noopener,noreferrer");
    return;
  }

  const action = commands[command];
  if (action) {
    print(command, action());
    if (command === "github") {
      window.open(profile.github, "_blank", "noopener,noreferrer");
    }
    return;
  }

  print(command, card(`<p>Command not found: <span class="accent-rose">${escapeHtml(command)}</span></p><p>Type <span class="accent-amber">help</span> to see available commands.</p>`));
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  runCommand(value);
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === "NumpadEnter") {
    event.preventDefault();
    const value = input.value;
    input.value = "";
    runCommand(value);
    return;
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    historyIndex = Math.max(0, historyIndex - 1);
    input.value = commandHistory[historyIndex] || "";
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    historyIndex = Math.min(commandHistory.length, historyIndex + 1);
    input.value = commandHistory[historyIndex] || "";
  }
});

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const command = chip.dataset.command;
    input.value = command;
    runCommand(command);
    input.value = "";
    input.focus();
  });
});

print("boot", card(`
  <p><span class="accent-amber">Portfolio terminal initialized.</span></p>
  <p>Type <span class="accent-blue">help</span> or choose a command above.</p>
`));
