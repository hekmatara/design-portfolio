const projects = [
  {
    id: "blossom",
    title: "Blossom A",
    category: "Object / 3D",
    role: "Furniture design and development",
    deck: "A chair project for Storängen Design, presented through the finished object, details and process.",
    overview: "A wooden chair for Storängen Design. The project is shown through product imagery, drawings and a small set of process photographs.",
    heroCaption: "BLOSSOM A / PRODUCT IMAGE",
    hero: "Projects/blossom-3mb/Blossom_hero_insta.png",
    heroAlt: "A wooden chair set among dark rocks beneath a peach sky",
    images: [
      { src: "Projects/blossom-3mb/Blossom_detail_01_insta.png", alt: "Close view of the Blossom A chair", caption: "DETAIL" },
      { src: "Projects/blossom-3mb/Storangen Design Blossom, Foto_ Johan Carlson.jpg", alt: "Blossom A photographed in a room", caption: "IN CONTEXT" },
      { src: "Projects/blossom-3mb/Blossom_detail_02 copy.jpg", alt: "Alternate view of Blossom A", caption: "DETAIL" },
      { src: "Projects/blossom-3mb/ritningar_stol_storängen (dragged) 2.jpg", alt: "Blossom A chair drawing", caption: "DRAWING", wide: true }
    ],
    process: [
      { src: "Projects/blossom-3mb/process/Process photographer_ Erik Karlsson Malinen — https_www.erikkarlssonmalinen.com_ _ @ekm_foto.jpg", alt: "Blossom A in the studio during the design process", caption: "STUDIO" },
      { src: "Projects/blossom-3mb/process/Process photographer_ Erik Karlsson Malinen — https_www.erikkarlssonmalinen.com_ _ @ekm_foto.jpg(1).jpg", alt: "Blossom A studio detail", caption: "DETAIL" }
    ],
  },
  {
    id: "swedish-girls",
    title: "Swedish Girls",
    category: "Digital",
    role: "Digital design",
    deck: "A digital project for Swedish Girls, shown across desktop, tablet and mobile.",
    overview: "Swedish Girls is a digital magazine and editorial platform celebrating contemporary Swedish culture through fashion, portraiture and long-form stories. The project brings its distinctive visual identity into a responsive web experience, balancing image-led storytelling with clear navigation across desktop, tablet and mobile. The interface gives each story space to breathe while helping readers move naturally between features, collections and editorial sections. It is designed to feel open and intuitive, with the imagery, typography and rhythm of reading at the centre.",
    roleDescription: "I led the digital design, translating the editorial direction into a responsive visual system. I shaped the page structure and interaction patterns, designed the desktop, tablet and mobile layouts, and refined the image pacing and typography that guide readers through each story.",
    heroCaption: "SWEDISH GIRLS / DESKTOP",
    hero: "Projects/swedishgirls.org/Final images/SWG-site-iMac.png",
    heroAlt: "A Swedish Girls digital experience shown on a desktop display",
    images: [
      { src: "Projects/swedishgirls.org/Final images/iPad_Landscape.png", alt: "Swedish Girls interface on a tablet", caption: "TABLET" },
      { src: "Projects/swedishgirls.org/Final images/SWG-iPhone 15-optim.png", alt: "Swedish Girls interface on a phone", caption: "MOBILE", tall: true },
      { src: "Projects/swedishgirls.org/Final images/iPad_Landscape-Transparent.png", alt: "Swedish Girls product interface on a tablet", caption: "PRODUCT", tall: true },
      { src: "Projects/swedishgirls.org/Final images/SWG-site-iMac copy.png", alt: "An alternate Swedish Girls desktop view", caption: "DESKTOP" }
    ],
    process: []
  },
  {
    id: "celebrity",
    title: "A Swedish Celebrity",
    category: "Graphic / Editorial",
    role: "Image-making and editorial design",
    deck: "An image-led editorial project presented through photographs and printed matter.",
    overview: "A visual study shown through a sequence of photographs, a printed booklet and supporting graphics.",
    heroCaption: "A SWEDISH CELEBRITY / IMAGE STUDY",
    hero: "Projects/a-swedish-celebrity-resize/a-swedish-celebrity-combo.jpg",
    heroAlt: "Two colorful editorial photographs from A Swedish Celebrity",
    images: [
      { src: "Projects/a-swedish-celebrity-resize/a-swedish-celebrity-booklet.jpg", alt: "Printed A Swedish Celebrity booklet", caption: "PUBLICATION" },
      { src: "Projects/a-swedish-celebrity-resize/a swedish celebrity_fri.png", alt: "A Swedish Celebrity graphic", caption: "GRAPHIC", tall: true },
      { src: "Projects/a-swedish-celebrity-resize/a-swedish-celebrity-1.jpg", alt: "Photograph from A Swedish Celebrity", caption: "IMAGE" },
      { src: "Projects/a-swedish-celebrity-resize/a-swedish-celebrity-6.jpg", alt: "Photograph from A Swedish Celebrity", caption: "IMAGE" },
      { src: "Projects/a-swedish-celebrity-resize/a-swedish-celebrity-14.jpg", alt: "Photograph from A Swedish Celebrity", caption: "IMAGE" },
      { src: "Projects/a-swedish-celebrity-resize/a-swedish-celebrity-22.jpg", alt: "Photograph from A Swedish Celebrity", caption: "IMAGE" }
    ],
    process: []
  },
  {
    id: "mecca",
    title: "Meccamonster",
    category: "Product / Object",
    role: "Product design and prototyping",
    deck: "A coffee-machine object study documented through prototype photographs and process images.",
    overview: "An experimental coffee-machine object study, documented through studio photographs and a selection of process images.",
    heroCaption: "MECCAMONSTER / OBJECT STUDY",
    hero: "Projects/Meccamonster/Meccamonster Resized/meccamonster-shoot-3.jpg",
    heroAlt: "A coffee-machine prototype in a bright studio",
    images: [
      { src: "Projects/Meccamonster/Meccamonster Resized/meccamonster-shoot-1.jpg", alt: "Meccamonster in the studio with its designer", caption: "IN STUDIO", wide: true },
      { src: "Projects/Meccamonster/Meccamonster Resized/meccamonster-shoot-2.jpg", alt: "Meccamonster prototype in the studio", caption: "OBJECT" },
      { src: "Projects/Meccamonster/Meccamonster Resized/meccamonster-shoot-4.jpg", alt: "Detail of the Meccamonster object", caption: "DETAIL" }
    ],
    process: [
      { src: "Projects/Meccamonster/Meccamonster Resized/moccamaster-process-1.jpg", alt: "Meccamonster process study", caption: "FORM STUDY" },
      { src: "Projects/Meccamonster/Meccamonster Process Large/moccamaster-process-3.jpg", alt: "Meccamonster process image", caption: "PROTOTYPE" },
      { src: "Projects/Meccamonster/Meccamonster Process Large/moccamaster-process-7.jpg", alt: "Meccamonster process image", caption: "STUDIO" }
    ],
  }
];

const projectList = document.querySelector("#project-index");
const personalProjectNav = document.querySelector("#personal-project-nav-list");
const agencyProjectNav = document.querySelector("#agency-project-nav-list");
const tocNav = document.querySelector("#toc-links");
const navScrim = document.querySelector(".nav-scrim");
const menuToggle = document.querySelector(".menu-toggle");
const leftSidebar = document.querySelector(".left-sidebar");
const rightSidebar = document.querySelector(".right-sidebar");
const homeView = document.querySelector("#home-view");
const projectView = document.querySelector("#project-view");
const projectDetail = document.querySelector("#project-detail");
const siteFooter = document.querySelector("#site-footer");
const themeToggle = document.querySelector("#theme-toggle");
const emailCopyButton = document.querySelector("#copy-email");
const copyToast = document.querySelector("#copy-toast");
const copyCursor = document.querySelector("#copy-cursor");
const sideRailBreakpoint = window.matchMedia("(min-width: 721px)");
const rightRailBreakpoint = window.matchMedia("(min-width: 1101px)");
let activeProjectId = "";
let sectionObserver;
let copyToastTimeout;
let copyToastHideTimeout;

async function copyEmailToClipboard() {
  const email = emailCopyButton.textContent.trim();
  let copied = false;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(email);
      copied = true;
    }
  } catch {}

  if (!copied) {
    const temporaryInput = document.createElement("textarea");
    temporaryInput.value = email;
    temporaryInput.setAttribute("readonly", "");
    temporaryInput.style.position = "fixed";
    temporaryInput.style.opacity = "0";
    document.body.append(temporaryInput);
    temporaryInput.select();
    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    } finally {
      temporaryInput.remove();
    }
  }

  if (copied) {
    copyToast.textContent = "Copied to clipboard";
  } else {
    copyToast.textContent = "Couldn’t copy email";
  }

  window.clearTimeout(copyToastHideTimeout);
  copyToast.hidden = false;
  requestAnimationFrame(() => copyToast.classList.add("is-visible"));
  window.clearTimeout(copyToastTimeout);
  copyToastTimeout = window.setTimeout(() => {
    copyToast.classList.remove("is-visible");
    copyToastHideTimeout = window.setTimeout(() => { copyToast.hidden = true; }, 180);
  }, 1800);
}

emailCopyButton.addEventListener("click", copyEmailToClipboard);
function positionCopyCursor(event) {
  copyCursor.style.left = `${event.clientX}px`;
  copyCursor.style.top = `${event.clientY}px`;
}
emailCopyButton.addEventListener("pointerenter", (event) => {
  if (event.pointerType === "touch") return;
  positionCopyCursor(event);
  copyCursor.classList.add("is-visible");
});
emailCopyButton.addEventListener("pointermove", (event) => {
  if (event.pointerType !== "touch") positionCopyCursor(event);
});
emailCopyButton.addEventListener("pointerleave", () => copyCursor.classList.remove("is-visible"));

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function makeGallery(items, target) {
  items.forEach((item) => {
    const figure = element("figure", "gallery-item" + (item.wide ? " wide" : "") + (item.tall ? " tall" : ""));
    const image = element("img");
    image.src = item.src;
    image.alt = item.alt;
    image.loading = "lazy";
    image.decoding = "async";
    const caption = element("figcaption", "", item.caption || "");
    figure.append(image);
    if (item.caption) figure.append(caption);
    target.append(figure);
  });
}

function renderHomeProject(project) {
  const article = element("article", "project-preview");
  article.dataset.projectPreview = project.id;

  const mediaLink = element("a", "preview-media");
  mediaLink.href = "#project-" + project.id;
  mediaLink.dataset.openProject = project.id;
  mediaLink.setAttribute("aria-label", "Open " + project.title);
  const image = element("img");
  image.src = project.hero;
  image.alt = project.heroAlt;
  image.loading = "lazy";
  image.decoding = "async";
  mediaLink.append(image);
  article.append(mediaLink);
  article.append(element("span", "preview-caption", project.title));
  return article;
}

function renderProjectDetail(project) {
  projectDetail.replaceChildren();
  const article = element("article", "project-detail");
  article.dataset.projectId = project.id;

  const header = element("header", "project-header");
  header.append(element("h1", "project-title", project.title));
  const breadcrumb = element("div", "breadcrumb project-breadcrumb");
  const homeLink = element("a", "", "PERSONAL PROJECTS");
  homeLink.href = "#top";
  homeLink.dataset.homeLink = "";
  const breadcrumbTitle = element("span", "", project.title.toUpperCase());
  breadcrumbTitle.id = "detail-breadcrumb";
  breadcrumb.append(homeLink, element("span", "", "/"), breadcrumbTitle);
  header.append(breadcrumb);
  article.append(header);

  const summary = element("div", "project-summary");
  const description = element("section", "project-summary-block detail-section");
  description.id = "project-" + project.id + "-description";
  description.append(element("h2", "project-summary-label", "Description"));
  description.append(element("p", "project-summary-copy", project.overview));

  const role = element("section", "project-summary-block detail-section");
  role.id = "project-" + project.id + "-role";
  role.append(element("h2", "project-summary-label", "My role"));
  if (project.roleDescription) role.append(element("p", "project-role-type", project.role));
  role.append(element("p", "project-summary-copy role-copy", project.roleDescription || project.role));
  summary.append(description, role);
  header.append(summary);

  const images = element("section", "document-section detail-section");
  images.id = "project-" + project.id + "-images";
  const heroFrame = element("figure", "hero-frame");
  const hero = element("img");
  hero.src = project.hero;
  hero.alt = project.heroAlt;
  hero.loading = "eager";
  hero.decoding = "async";
  heroFrame.append(hero, element("figcaption", "figure-caption", project.heroCaption));
  images.append(heroFrame);
  const gallery = element("div", "image-gallery");
  makeGallery(project.images, gallery);
  images.append(gallery);
  article.append(images);

  if (project.process.length) {
    const process = element("section", "document-section detail-section process-section");
    process.id = "project-" + project.id + "-process";
    if (project.process.length) {
      const processGallery = element("div", "image-gallery process-gallery");
      makeGallery(project.process, processGallery);
      process.append(processGallery);
    }
    article.append(process);
  }

  projectDetail.append(article);
}

function renderNavGroup(category, items) {
  const group = element("div", "nav-group");
  group.append(element("div", "nav-category", category));
  const links = element("div", "nav-subcategories");
  items.forEach((item) => {
    const link = element("a", "nav-subcategory", item.label);
    link.href = "#" + item.id;
    link.dataset.sectionLink = item.id;
    links.append(link);
  });
  group.append(links);
  return group;
}

function renderHomeContents() {
  tocNav.replaceChildren(
    renderNavGroup("Get Started", [
      { id: "about", label: "About me" },
      { id: "cv", label: "CV" }
    ])
  );
  document.querySelector("#mobile-project-name").textContent = "Personal projects";
}

function renderProjectContents(project) {
  const projectLinks = [
    { id: "project-" + project.id + "-description", label: "Description" },
    { id: "project-" + project.id + "-role", label: "My role" },
    { id: "project-" + project.id + "-images", label: "Images" }
  ];
  tocNav.replaceChildren(renderNavGroup("In this project", projectLinks));
  document.querySelector("#mobile-project-name").textContent = project.title;
  const firstLink = tocNav.querySelector("[data-section-link]");
  firstLink?.setAttribute("aria-current", "location");
}

function observeCurrentSections(selector) {
  sectionObserver?.disconnect();
  sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting);
    if (!visible.length) return;
    visible.sort((first, second) => Math.abs(first.boundingClientRect.top - 130) - Math.abs(second.boundingClientRect.top - 130));
    const currentId = visible[0].target.id;
    tocNav.querySelectorAll("[data-section-link]").forEach((link) => {
      if (link.dataset.sectionLink === currentId) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-18% 0px -64% 0px", threshold: 0 });
  document.querySelectorAll(selector).forEach((section) => sectionObserver.observe(section));
}

function observeFooterReveal() {
  const scene = siteFooter.querySelector(".footer-scene");
  const wordmark = siteFooter.querySelector(".footer-wordmark-wrap");
  if (!("IntersectionObserver" in window)) {
    siteFooter.classList.add("is-visible");
    wordmark.classList.add("is-visible");
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target === scene) siteFooter.classList.toggle("is-visible", entry.isIntersecting);
      else entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0 });
  revealObserver.observe(scene);
  revealObserver.observe(wordmark);
}

function showHome(targetId = "top", updateHistory = true) {
  activeProjectId = "";
  homeView.hidden = false;
  projectView.hidden = true;
  renderHomeContents();
  document.querySelectorAll("[data-project-link]").forEach((link) => link.removeAttribute("aria-current"));
  observeCurrentSections("#about, #cv, #more-work");
  if (updateHistory) updateHistoryLocation({ view: "home" }, targetId);
  window.scrollTo(0, 0);
  if (targetId !== "top") requestAnimationFrame(() => document.getElementById(targetId)?.scrollIntoView());
}

function showProject(project, updateHistory = true, scrollTarget = "") {
  activeProjectId = project.id;
  homeView.hidden = true;
  projectView.hidden = false;
  renderProjectDetail(project);
  renderProjectContents(project);
  document.querySelector("#detail-breadcrumb").textContent = project.title.toUpperCase();
  document.querySelectorAll("[data-project-link]").forEach((link) => {
    if (link.dataset.projectLink === project.id) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  observeCurrentSections("#project-detail .detail-section");
  if (updateHistory) updateHistoryLocation({ view: "project", id: project.id }, "project-" + project.id);
  window.scrollTo(0, 0);
  if (scrollTarget && scrollTarget !== "project-" + project.id) {
    requestAnimationFrame(() => document.getElementById(scrollTarget)?.scrollIntoView());
  }
}

function updateHistoryLocation(state, hash) {
  const url = "#" + hash;
  try {
    history.pushState(state, "", url);
  } catch {
    // Some file:// browser contexts reject History API writes for opaque origins.
    window.location.hash = hash;
  }
}

function renderProjects() {
  projects.forEach((project) => {
    projectList.append(renderHomeProject(project));
    const navLink = element("a", "", project.title);
    navLink.href = "#project-" + project.id;
    navLink.dataset.projectLink = project.id;
    const targetNav = project.navGroup === "agency" ? agencyProjectNav : personalProjectNav;
    targetNav.append(navLink);
  });

  ["Index", "Andulf", "Blueair", "ISB", "Other"].forEach((title) => {
    agencyProjectNav.append(element("span", "project-nav-placeholder", title));
  });
}

function openProjectFromLink(event) {
  const link = event.target.closest("[data-open-project], [data-project-link]");
  if (!link) return;
  const project = projects.find((item) => item.id === link.dataset.openProject || item.id === link.dataset.projectLink);
  if (!project) return;
  event.preventDefault();
  showProject(project);
  document.body.classList.remove("nav-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

renderProjects();
renderHomeContents();
observeCurrentSections("#about, #cv, #more-work");
observeFooterReveal();

leftSidebar.addEventListener("click", openProjectFromLink);
projectList.addEventListener("click", openProjectFromLink);
document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  showHome("top");
});
document.querySelector(".header-index").addEventListener("click", (event) => {
  event.preventDefault();
  showHome("project-index");
});
projectView.addEventListener("click", (event) => {
  if (!event.target.closest("[data-home-link]")) return;
  event.preventDefault();
  showHome("top");
});
siteFooter.addEventListener("click", (event) => {
  const link = event.target.closest("[data-footer-target]");
  if (!link) return;
  event.preventDefault();
  showHome(link.dataset.footerTarget);
});

function renderFromLocation() {
  const hash = decodeURIComponent(window.location.hash.slice(1));
  const project = projects.find((item) => hash === "project-" + item.id || hash.startsWith("project-" + item.id + "-"));
  if (project) {
    showProject(project, false, hash);
  } else {
    showHome(hash || "top", false);
  }
}

window.addEventListener("popstate", renderFromLocation);
window.addEventListener("hashchange", renderFromLocation);

function setTheme(theme, persist = true) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(isDark));
  const nextTheme = isDark ? "light" : "dark";
  themeToggle.setAttribute("aria-label", "Switch to " + nextTheme + " mode");
  themeToggle.title = "Switch to " + nextTheme + " mode";
  themeToggle.querySelector(".sun-icon").hidden = !isDark;
  themeToggle.querySelector(".moon-icon").hidden = isDark;
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#171917" : "#ececea";
  if (persist) {
    try { localStorage.setItem("portfolio-theme-override", theme); } catch {}
  }
}

let savedTheme = null;
try {
  const storedTheme = localStorage.getItem("portfolio-theme-override");
  if (storedTheme === "dark" || storedTheme === "light") savedTheme = storedTheme;
} catch {}
const systemTheme = typeof window.matchMedia === "function" ? window.matchMedia("(prefers-color-scheme: dark)") : null;
let followsSystemTheme = savedTheme === null;
setTheme(savedTheme || (systemTheme ? (systemTheme.matches ? "dark" : "light") : "dark"), false);
systemTheme?.addEventListener?.("change", (event) => {
  if (followsSystemTheme) setTheme(event.matches ? "dark" : "light", false);
});
themeToggle.addEventListener("click", () => {
  followsSystemTheme = false;
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});

const initialHash = decodeURIComponent(window.location.hash.slice(1));
const initialProject = projects.find((item) => initialHash === "project-" + item.id || initialHash.startsWith("project-" + item.id + "-"));
if (initialProject) showProject(initialProject, false, initialHash);
else if (initialHash && initialHash !== "top") requestAnimationFrame(() => document.getElementById(initialHash)?.scrollIntoView());

menuToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
navScrim.addEventListener("click", () => {
  document.body.classList.remove("nav-open");
  menuToggle.setAttribute("aria-expanded", "false");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.body.classList.remove("nav-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

let railProgress = 0;
let previousScrollY = window.scrollY;

function updateRailPosition(resetScrollBaseline = false) {
  const currentScrollY = window.scrollY;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  if (!sideRailBreakpoint.matches) {
    railProgress = 0;
    leftSidebar.inert = false;
    rightSidebar.inert = false;
  } else if (resetScrollBaseline) {
    previousScrollY = currentScrollY;
  } else {
    const delta = currentScrollY - previousScrollY;
    const start = viewportHeight / 3;
    const travel = Math.max(1, viewportHeight);

    if (delta > 0 && currentScrollY > start) {
      const distancePastStart = currentScrollY - Math.max(previousScrollY, start);
      railProgress += Math.max(0, distancePastStart) / travel;
    } else if (delta < 0) {
      railProgress += delta / travel;
    }

    railProgress = Math.min(1, Math.max(0, railProgress));
    previousScrollY = currentScrollY;
    leftSidebar.inert = railProgress === 1;
    rightSidebar.inert = rightRailBreakpoint.matches && railProgress === 1;
  }

  if (!sideRailBreakpoint.matches) previousScrollY = currentScrollY;

  const gap = 18;
  const leftDistance = leftSidebar.getBoundingClientRect().width + gap;
  const rightDistance = rightSidebar.getBoundingClientRect().width + gap;
  leftSidebar.style.setProperty("--rail-shift", `${-leftDistance * railProgress}px`);
  rightSidebar.style.setProperty("--rail-shift", `${rightDistance * railProgress}px`);
}

let railFramePending = false;
let resetRailScrollBaseline = false;
function scheduleRailPosition(resetBaseline = false) {
  resetRailScrollBaseline ||= resetBaseline;
  if (railFramePending) return;
  railFramePending = true;
  requestAnimationFrame(() => {
    railFramePending = false;
    const shouldResetBaseline = resetRailScrollBaseline;
    resetRailScrollBaseline = false;
    updateRailPosition(shouldResetBaseline);
  });
}

window.addEventListener("scroll", () => scheduleRailPosition(false), { passive: true });
window.addEventListener("resize", () => scheduleRailPosition(true), { passive: true });
sideRailBreakpoint.addEventListener("change", () => scheduleRailPosition(true));
rightRailBreakpoint.addEventListener("change", () => scheduleRailPosition(true));
updateRailPosition(true);
