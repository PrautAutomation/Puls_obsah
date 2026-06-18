const TIERS = {
  foundation: {
    name: "Foundation",
    tagline: "Od chaosu k prvnímu systému",
    odneses: [
      "Funkční pracovní systém v Claude: Projects, Memory a tvoji vlastní prompt knihovnu.",
      "Nový návyk: Automaticky sáhneš po AI pokaždé, když narazíš na mechanickou zátěž.",
      "Strukturu zadání: Negeneruje šum, ale rovnou tě dovede k výsledku.",
      "Certifikát za hotový výstup, ne za docházku."
    ]
  },
  power: {
    name: "Power",
    tagline: "Od chaosu k opakovatelnosti",
    odneses: [
      "Pokročilé prompty s XML strukturou: zadání drží napoprvé.",
      "Práci s nástroji v praxi: Chrome, Cowork, Excel, Claude Code.",
      "Workflow knihovnu pro úkoly, které tě dřív stály celé odpoledne.",
      "Nástrojovou mapu: víš, co kdy nasadit a proč.",
      "Certifikát za hotový výstup, ne za docházku."
    ]
  },
  advanced: {
    name: "Advanced",
    tagline: "Od uživatele k tvůrci",
    odneses: [
      "Vlastní nástroj postavený v Claude Code.",
      "Integraci s VS Code, Slackem nebo GitHubem.",
      "Znalost prompt injection a obrany proti němu.",
      "První vlastní volání Claude API.",
      "Certifikát za hotový výstup, ne za docházku."
    ]
  },
  expert: {
    name: "Expert",
    tagline: "Od tvůrce k produktu",
    odneses: [
      "Vlastní MCP server napojený na reálná data.",
      "Testování a nasazení do produkce.",
      "Dokumentaci a onboarding, který z projektu dělá produkt, ne prototyp.",
      "Portfolio z celého kurzu.",
      "Certifikát za hotový výstup, ne za docházku."
    ]
  }
};

const CO_DOSTANES = "10 pracovních dní. Živé online hodiny. Krátký vstupní dotazník – žádný test tvých znalostí, jen potřebujeme znát tvůj kontext, abychom příklady trefili do tvé praxe. Všechny materiály a postavená workflow ti zůstanou navždy.";
const NAV_REVEAL_POINT = 0.56;
const HERO_READY_DELAY = 120;
const HERO_INTRO_DELAY = 1000;
const HERO_LOCAL_THREAD_DELAY = 300;
const HERO_ZAZEH_DURATION = 2400;
const HERO_HANDOFF_DURATION = 1280;
const LOGO_TRAVEL_DURATION = 3000;

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav-fixed");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuToggle = document.querySelector(".nav-menu-toggle");
  const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");
  const heroLogo = document.querySelector(".hero-logo img");
  const heroLogoSystem = document.querySelector(".hero-logo-system");
  const navLogo = document.querySelector(".nav-logo");
  const thread = document.getElementById("puls-thread");
  const threadFiberLayer = document.getElementById("threadFiberLayer");
  const threadGoldPath = document.getElementById("threadGoldPath");
  const tierBands = document.querySelectorAll(".tier-band");
  const tierList = document.querySelector(".tier-list");
  const reduceLogoMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const compactLogoMotion = window.matchMedia("(max-width: 760px)").matches;
  const SVG_NS = "http://www.w3.org/2000/svg";
  const logoStates = new Set(["klid", "probuzeni", "puls", "thread", "nav"]);
  const threadStates = new Set(["zazeh", "klid", "zhusteni", "flare", "ping-flash", "utulek", "doutnak"]);
  const sectionStateMap = {
    hero: "klid",
    headline: "klid",
    problem: "klid",
    "breath-1": "klid",
    reseni: "klid",
    prechod: "flare",
    "breath-2": "flare",
    selektor: "flare",
    certifikat: "klid",
    planner: "klid",
    nemluvis: "klid",
    "tereza-quote": "utulek",
    "breath-3": "klid",
    garance: "klid",
    sef: "klid",
    finale: "klid",
    footer: "doutnak"
  };
  const threadStateConfig = {
    zazeh: {
      density: 14,
      stroke: 2,
      blur: 64,
      violet: 0.9,
      cyan: 0.35,
      gold: 0.10,
      amplitude: [4, 14],
      rate: "2.4s"
    },
    klid: {
      density: 10,
      stroke: 1.5,
      blur: 48,
      violet: 0.35,
      cyan: 0.08,
      gold: 0.08,
      amplitude: [2, 8],
      rate: "6s"
    },
    zhusteni: {
      density: 12,
      stroke: 2.5,
      blur: 56,
      violet: 0.55,
      cyan: 0.18,
      gold: 0.10,
      amplitude: [5, 13],
      rate: "4s"
    },
    flare: {
      density: 14,
      stroke: 3.5,
      blur: 96,
      violet: 0.78,
      cyan: 0.32,
      gold: 0.12,
      amplitude: [12, 20],
      rate: "2.5s"
    },
    "ping-flash": {
      density: 16,
      stroke: 3.5,
      blur: 136,
      violet: 1,
      cyan: 0.52,
      gold: 0.12,
      amplitude: [12, 20],
      rate: "450ms"
    },
    utulek: {
      density: 10,
      stroke: 1.5,
      blur: 180,
      violet: 0.65,
      cyan: 0.05,
      gold: 0.30,
      amplitude: [10, 22],
      rate: "4.6s",
      spread: 1.55
    },
    doutnak: {
      density: 5,
      stroke: 1,
      blur: 32,
      violet: 0.22,
      cyan: 0,
      gold: 0.06,
      amplitude: [4, 12],
      rate: "8s",
      spread: 1.35
    }
  };
  let introNavVisible = false;
  let hasScrolledPastNavPoint = false;
  let navTransitionPlayed = false;
  let navSettleTimer = null;
  let currentLogoState = "klid";
  let currentThreadState = "klid";
  let threadReturnState = "klid";
  let threadEventTimer = null;
  let activeTierKey = null;
  let globalThreadActivated = false;
  let globalThreadReleaseReady = false;
  let globalThreadActivationPending = false;
  let logoReadyForNav = false;
  let userScrollIntent = false;
  let lastMenuFocus = null;
  let lastScrollY = window.scrollY;
  let heroGhostTimer = null;
  let desiredUtulekActive = false;
  let observedStateSections = [];
  let scrollUpdateScheduled = false;

  if (thread && reduceLogoMotion) thread.classList.add("is-reduced");

  window.setTimeout(() => {
    document.body.classList.add("hero-ready");
  }, HERO_READY_DELAY);

  function hasZazehPlayed() {
    try {
      return sessionStorage.getItem("puls-zazeh-played") === "1";
    } catch (error) {
      return false;
    }
  }

  function markZazehPlayed() {
    try {
      sessionStorage.setItem("puls-zazeh-played", "1");
    } catch (error) {
      // Session storage can be blocked; the page still runs the visual sequence.
    }
  }

  function revealIntroNav() {
    introNavVisible = true;
    if (nav) nav.classList.add("is-settled");
    updateNavVisibility();
  }

  function activateGlobalThread(initialState = "klid") {
    if (globalThreadActivated) return;
    if (!globalThreadReleaseReady) {
      globalThreadActivationPending = true;
      return;
    }

    globalThreadActivated = true;
    globalThreadActivationPending = false;
    document.body.classList.add("thread-live");
    document.body.classList.add("thread-unmasked");
    setThreadState(initialState);

    if (heroLogoSystem && heroLogoSystem.classList.contains("hero-thread-emerging")) {
      heroLogoSystem.classList.add("hero-thread-dissolving");
      window.setTimeout(() => {
        heroLogoSystem.classList.remove("hero-thread-emerging", "hero-thread-dissolving");
      }, reduceLogoMotion ? 0 : HERO_HANDOFF_DURATION);
    }
  }

  function playHeroZazehSequence() {
    setThreadState("klid");
    if (heroLogoSystem) {
      heroLogoSystem.classList.remove("hero-thread-emerging", "hero-thread-dissolving");
    }

    window.setTimeout(() => {
      const shouldSkip = reduceLogoMotion || hasZazehPlayed();

      if (shouldSkip) {
        setLogoState("thread");
        setThreadState("klid");
        if (heroLogoSystem && !reduceLogoMotion) {
          heroLogoSystem.classList.add("hero-thread-emerging");
        }
        globalThreadReleaseReady = true;
        logoReadyForNav = true;
        revealIntroNav();
        if (window.scrollY > 8) activateGlobalThread("klid");
        return;
      }

      setLogoState("puls");

      window.setTimeout(() => {
        if (heroLogoSystem) heroLogoSystem.classList.add("hero-thread-emerging");
        globalThreadReleaseReady = true;
        if (globalThreadActivationPending || window.scrollY > 8) {
          window.setTimeout(() => activateGlobalThread("zazeh"), reduceLogoMotion ? 0 : 840);
        }
      }, HERO_LOCAL_THREAD_DELAY);

      window.setTimeout(() => {
        if (heroLogoSystem && globalThreadActivated) {
          heroLogoSystem.classList.remove("hero-thread-emerging", "hero-thread-dissolving");
        }
        setLogoState("thread");
        if (globalThreadActivated) setThreadState("klid");
        markZazehPlayed();
        logoReadyForNav = true;
        revealIntroNav();
        if (window.scrollY > 8) activateGlobalThread("klid");
      }, HERO_ZAZEH_DURATION);
    }, HERO_INTRO_DELAY);
  }

  function clearLogoTravelers() {
    document.querySelectorAll(".landing-logo-traveler").forEach((traveler) => {
      traveler.remove();
    });
    if (heroLogoSystem && currentLogoState !== "nav") {
      heroLogoSystem.classList.remove("is-traveling");
    }
  }

  function settleNavLogo() {
    window.clearTimeout(navSettleTimer);
    nav.classList.remove("is-transitioning");
    nav.classList.add("is-settled");
  }

  function animateHeroLogoToNav() {
    if (!heroLogo || !navLogo || reduceLogoMotion || compactLogoMotion) {
      settleNavLogo();
      return;
    }

    const start = heroLogo.getBoundingClientRect();
    const end = navLogo.getBoundingClientRect();
    if (!start.width || !start.height || !end.width || !end.height) {
      settleNavLogo();
      return;
    }

    clearLogoTravelers();
    if (heroLogoSystem) heroLogoSystem.classList.add("is-traveling");
    nav.classList.add("is-transitioning");
    nav.classList.remove("is-settled");

    const traveler = heroLogo.cloneNode(true);
    traveler.className = "landing-logo-traveler";
    traveler.style.setProperty("--traveler-width", `${start.width}px`);
    traveler.style.setProperty("--traveler-height", `${start.height}px`);
    traveler.style.left = `${start.left}px`;
    traveler.style.top = `${start.top}px`;
    document.body.appendChild(traveler);

    const dx = end.left + end.width / 2 - (start.left + start.width / 2);
    const dy = end.top + end.height / 2 - (start.top + start.height / 2);
    const scale = end.width / start.width;
    const travelDuration = LOGO_TRAVEL_DURATION;

    navSettleTimer = window.setTimeout(settleNavLogo, travelDuration * 0.62);

    const motion = traveler.animate(
      [
        { offset: 0, transform: "translate(0, 0) scale(1)", opacity: 0 },
        { offset: 0.08, transform: "translate(0, 0) scale(1)", opacity: 1 },
        {
          offset: 0.38,
          transform: `translate(${dx * 0.28}px, ${dy * 0.28}px) scale(${Math.max(scale * 7.2, 0.58)})`,
          opacity: 0.92
        },
        {
          offset: 0.70,
          transform: `translate(${dx * 0.76}px, ${dy * 0.70}px) scale(${Math.max(scale * 3.2, 0.28)})`,
          opacity: 0.72
        },
        {
          offset: 0.90,
          transform: `translate(${dx * 0.97}px, ${dy * 0.90}px) scale(${Math.max(scale * 1.62, scale)})`,
          opacity: 0.44
        },
        {
          offset: 1,
          transform: `translate(${dx}px, ${dy}px) scale(${scale})`,
          opacity: 0
        }
      ],
      {
        duration: travelDuration,
        easing: "cubic-bezier(0.45, 0, 0.2, 1)",
        fill: "forwards"
      }
    );

    motion.onfinish = () => {
      traveler.remove();
      if (heroLogoSystem) heroLogoSystem.classList.remove("is-traveling");
      settleNavLogo();
    };
    motion.oncancel = () => {
      traveler.remove();
      if (heroLogoSystem && currentLogoState !== "nav") {
        heroLogoSystem.classList.remove("is-traveling");
      }
    };
  }

  function seededRandom(seed) {
    let value = seed % 2147483647;
    return () => {
      value = value * 16807 % 2147483647;
      return (value - 1) / 2147483646;
    };
  }

  function randomBetween(random, min, max) {
    return min + (max - min) * random();
  }

  function weightedSign(random) {
    return random() < 0.5 ? -1 : 1;
  }

  function rateToSeconds(rate) {
    if (rate.endsWith("ms")) return parseFloat(rate) / 1000;
    return parseFloat(rate);
  }

  function buildThreadFiberPath({ xBase, phase, amplitude, speed, secondaryAmp }) {
    const points = [];
    const height = 1040;
    const step = 52;

    for (let y = -40; y <= height; y += step) {
      const t = y / height;
      const waveA = Math.sin(t * Math.PI * 4.4 * speed + phase) * amplitude;
      const waveB = Math.sin(t * Math.PI * 9.2 + phase * 0.62) * secondaryAmp;
      const x = 260 + xBase + waveA + waveB;
      points.push([x, y]);
    }

    let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;
    for (let i = 1; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      const cx = current[0].toFixed(2);
      const cy = current[1].toFixed(2);
      const mx = ((current[0] + next[0]) / 2).toFixed(2);
      const my = ((current[1] + next[1]) / 2).toFixed(2);
      d += ` Q ${cx} ${cy} ${mx} ${my}`;
    }

    return d;
  }

  function applyThreadStateVars(config) {
    if (!thread) return;
    thread.style.setProperty("--thread-stroke", `${config.stroke}px`);
    thread.style.setProperty("--thread-blur", `${config.blur}px`);
    thread.style.setProperty("--thread-opacity", config.violet);
    thread.style.setProperty("--thread-cyan-opacity", config.cyan);
    thread.style.setProperty("--thread-gold-opacity", config.gold);
    thread.style.setProperty("--thread-rate", config.rate);
  }

  function freezeThreadCloneStyles(layerClone, goldClone) {
    layerClone.querySelectorAll(".thread-fiber").forEach((fiber) => {
      const styles = window.getComputedStyle(fiber);
      fiber.style.opacity = styles.opacity;
      fiber.style.stroke = styles.stroke;
      fiber.style.strokeWidth = styles.strokeWidth;
      fiber.style.animation = "none";
    });

    if (goldClone) {
      const styles = window.getComputedStyle(goldClone);
      goldClone.style.opacity = styles.opacity;
      goldClone.style.stroke = styles.stroke;
      goldClone.style.strokeWidth = styles.strokeWidth;
      goldClone.style.animation = "none";
    }
  }

  function prepareThreadCrossfade() {
    if (reduceLogoMotion || !threadFiberLayer || !threadGoldPath) return null;
    if (!threadFiberLayer.children.length && !threadGoldPath.getAttribute("d")) return null;

    const previousLayer = threadFiberLayer.cloneNode(true);
    const previousGold = threadGoldPath.cloneNode(true);
    previousLayer.removeAttribute("id");
    previousGold.removeAttribute("id");

    threadFiberLayer.parentNode.insertBefore(previousGold, threadGoldPath);
    threadFiberLayer.parentNode.insertBefore(previousLayer, threadFiberLayer);
    freezeThreadCloneStyles(previousLayer, previousGold);
    previousLayer.animate(
      [{ opacity: 1 }, { opacity: 0 }],
      { duration: 1180, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" }
    );
    previousGold.animate(
      [{ opacity: Number(window.getComputedStyle(previousGold).opacity) || 1 }, { opacity: 0 }],
      { duration: 1320, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" }
    );
    window.setTimeout(() => {
      previousLayer.remove();
      previousGold.remove();
    }, 1320);

    return true;
  }

  function renderThreadFibers(state) {
    const config = threadStateConfig[state];
    if (!config || !threadFiberLayer || !threadGoldPath) return;

    const density = config.density;
    const seed = [...state].reduce((sum, char) => sum + char.charCodeAt(0), density * 97);
    const random = seededRandom(seed);
    const spread = config.spread || 1;
    const shouldCrossfade = state !== "ping-flash" && state !== "zazeh" && prepareThreadCrossfade();

    threadFiberLayer.replaceChildren();
    threadFiberLayer.classList.toggle("is-entering", Boolean(shouldCrossfade));
    threadGoldPath.classList.toggle("is-entering", Boolean(shouldCrossfade));
    applyThreadStateVars(config);

    for (let i = 0; i < density; i++) {
      const centerBias = Math.abs(i - (density - 1) / 2) / ((density - 1) / 2 || 1);
      const xOffset = Math.pow(centerBias, 2) * 40 * spread * weightedSign(random);
      const phase = randomBetween(random, 0, Math.PI * 2);
      const speed = randomBetween(random, 0.8, 1.4);
      const amplitude = randomBetween(random, config.amplitude[0], config.amplitude[1]);
      const secondaryAmp = randomBetween(random, 1.5, 5);
      const path = document.createElementNS(SVG_NS, "path");
      const isCyan = random() < config.cyan;
      const duration = Math.max(0.9, rateToSeconds(config.rate) * randomBetween(random, 0.8, 1.4));

      path.setAttribute("d", buildThreadFiberPath({ xBase: xOffset, phase, amplitude, speed, secondaryAmp }));
      path.setAttribute("class", `thread-fiber ${isCyan ? "is-cyan" : "is-violet"}`);
      path.style.opacity = String(config.violet * randomBetween(random, 0.58, 1));
      path.style.strokeWidth = `${config.stroke * randomBetween(random, 0.32, 0.72)}px`;
      path.style.animationDelay = `${-randomBetween(random, 0, duration).toFixed(2)}s`;
      path.style.animationDuration = `${duration.toFixed(2)}s`;
      threadFiberLayer.appendChild(path);
    }

    threadGoldPath.setAttribute("d", buildThreadFiberPath({
      xBase: 0,
      phase: 0.8,
      amplitude: state === "utulek" ? 18 : 8,
      speed: 1,
      secondaryAmp: 2
    }));

    if (shouldCrossfade) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          threadFiberLayer.classList.remove("is-entering");
          threadGoldPath.classList.remove("is-entering");
        });
      });
    }
  }

  function setLogoState(state) {
    if (!logoStates.has(state)) return;
    currentLogoState = state;
    document.body.dataset.logoState = state;
    if (heroLogoSystem) {
      if (state === "klid") {
        heroLogoSystem.removeAttribute("data-state");
      } else {
        heroLogoSystem.dataset.state = state;
      }
    }

    if (state === "nav") {
      introNavVisible = true;
      if (nav) nav.classList.add("is-visible");
      settleNavLogo();
    }
  }

  function setThreadState(state, options = {}) {
    if (!threadStates.has(state)) return;
    const remember = options.remember !== false;

    window.clearTimeout(threadEventTimer);
    currentThreadState = state;
    if (remember && state !== "ping-flash" && state !== "zazeh") {
      threadReturnState = state;
    }
    if (thread) thread.dataset.state = state;
    document.body.dataset.threadState = state;
    renderThreadFibers(state);

    if (state === "zazeh") {
      threadEventTimer = window.setTimeout(() => {
        if (currentThreadState === "zazeh") setThreadState("klid");
      }, reduceLogoMotion ? 0 : 2400);
    }

    if (state === "ping-flash") {
      threadEventTimer = window.setTimeout(() => {
        if (currentThreadState === "ping-flash") setThreadState("flare");
      }, reduceLogoMotion ? 0 : 450);
    }
  }

  function syncUtulekState(isActive) {
    desiredUtulekActive = isActive;
    if (!window.pulsUtulek) return;
    if (isActive && !window.pulsUtulek.isActive) {
      window.pulsUtulek.activate();
    } else if (!isActive && window.pulsUtulek.isActive) {
      window.pulsUtulek.deactivate();
    }
  }

  function applySectionThreadState(state) {
    if (!state) return;
    syncUtulekState(state === "utulek");
    if (currentThreadState === "zazeh" || currentThreadState === "ping-flash") return;
    if (state !== currentThreadState) setThreadState(state);
  }

  function getActiveSectionId() {
    if (!observedStateSections.length) return null;
    const anchorY = window.innerHeight * 0.5;
    const candidates = observedStateSections
      .map((section) => {
        const rect = section.getBoundingClientRect();
        const containsAnchor = rect.top <= anchorY && rect.bottom >= anchorY;
        const distance = Math.abs((rect.top + rect.bottom) / 2 - anchorY);
        return { id: section.id, rect, containsAnchor, distance };
      })
      .filter(({ id, rect }) => {
        if (id === "hero" && window.scrollY > 16) return false;
        return rect.bottom > 0 && rect.top < window.innerHeight;
      });

    const anchored = candidates
      .filter(({ containsAnchor }) => containsAnchor)
      .sort((a, b) => a.distance - b.distance)[0];

    if (anchored) return anchored.id;
    return candidates.sort((a, b) => a.distance - b.distance)[0]?.id ?? null;
  }

  function updateSectionStateFromScroll() {
    const activeId = getActiveSectionId();
    if (activeId) {
      applySectionThreadState(sectionStateMap[activeId]);
    }
  }

  function setupSectionObserver() {
    observedStateSections = Object.keys(sectionStateMap)
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(() => {
        updateSectionStateFromScroll();
      }, { threshold: [0.3, 0.5, 0.7] });

      observedStateSections.forEach((section) => observer.observe(section));
    }

    updateSectionStateFromScroll();
  }

  window.pulsLogo = {
    get currentState() {
      return currentLogoState;
    },
    setState: setLogoState,
    animateToNav() {
      if (currentLogoState === "nav" && navTransitionPlayed) return;
      currentLogoState = "nav";
      document.body.dataset.logoState = "nav";
      if (heroLogoSystem) heroLogoSystem.dataset.state = "nav";
      introNavVisible = true;
      if (nav) nav.classList.add("is-visible");
      navTransitionPlayed = true;
      animateHeroLogoToNav();
    }
  };

  window.pulsThread = {
    get currentState() {
      return currentThreadState;
    },
    setState: setThreadState,
    triggerPing() {
      if (reduceLogoMotion) return;
      setThreadState("ping-flash", { remember: false });
    }
  };

  function updateNavVisibility() {
    scrollUpdateScheduled = false;
    const currentScrollY = window.scrollY;
    const isScrollingUp = currentScrollY < lastScrollY;
    const hasScrolled = userScrollIntent && window.scrollY > 8;
    if (hasScrolled) activateGlobalThread("klid");

    if (hasScrolled && logoReadyForNav && !navTransitionPlayed) {
      navTransitionPlayed = true;
      window.pulsLogo.animateToNav();
    }

    const threshold = window.innerHeight * NAV_REVEAL_POINT;
    const scrolledPastNavPoint = window.scrollY > threshold;
    const isVisible = introNavVisible || scrolledPastNavPoint;

    nav.classList.toggle("is-visible", isVisible);

    if (scrolledPastNavPoint && !hasScrolledPastNavPoint) {
      settleNavLogo();
    }

    if (!isVisible) {
      window.clearTimeout(navSettleTimer);
      nav.classList.remove("is-transitioning");
      clearLogoTravelers();
    }

    window.clearTimeout(heroGhostTimer);
    const shouldShowHeroGhost = currentLogoState === "nav" && isScrollingUp && currentScrollY < window.innerHeight * 0.82;
    document.body.classList.toggle("hero-logo-suppressed", currentScrollY > 8);
    document.body.classList.toggle("hero-ghost-visible", shouldShowHeroGhost);
    if (shouldShowHeroGhost) {
      heroGhostTimer = window.setTimeout(() => {
        document.body.classList.remove("hero-ghost-visible");
      }, reduceLogoMotion ? 0 : 1600);
    }

    lastScrollY = currentScrollY;
    hasScrolledPastNavPoint = scrolledPastNavPoint;
    updateSectionStateFromScroll();
  }

  function scheduleScrollUpdate() {
    if (scrollUpdateScheduled) return;
    scrollUpdateScheduled = true;
    window.requestAnimationFrame(updateNavVisibility);
  }

  function setMobileMenuOpen(isOpen) {
    if (!mobileMenu || !mobileMenuToggle) return;
    if (isOpen) {
      lastMenuFocus = document.activeElement;
      mobileMenu.hidden = false;
      document.body.classList.add("mobile-menu-open");
      mobileMenuToggle.setAttribute("aria-expanded", "true");
      mobileMenuToggle.setAttribute("aria-label", "Zavřít menu");
      const firstLink = mobileMenu.querySelector("a");
      if (firstLink) firstLink.focus({ preventScroll: true });
      return;
    }

    document.body.classList.remove("mobile-menu-open");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    mobileMenuToggle.setAttribute("aria-label", "Otevřít menu");
    window.setTimeout(() => {
      if (!document.body.classList.contains("mobile-menu-open")) {
        mobileMenu.hidden = true;
      }
    }, reduceLogoMotion ? 0 : 320);
    if (lastMenuFocus && typeof lastMenuFocus.focus === "function") {
      lastMenuFocus.focus({ preventScroll: true });
    }
  }

  function createMailtoSubject(prefix, tierName) {
    return `mailto:tereza.svanda@praut.cz?subject=${encodeURIComponent(`${prefix} ${tierName}`)}`;
  }

  function collapseTierSelection() {
    const existingCard = tierList ? tierList.querySelector(".reveal-card") : null;
    if (existingCard) existingCard.remove();
    if (tierList) tierList.classList.remove("has-selection");
    tierBands.forEach((band) => {
      band.classList.remove("active");
      band.setAttribute("aria-pressed", "false");
      band.setAttribute("aria-expanded", "false");
    });
    activeTierKey = null;
  }

  function selectTier(tierKey) {
    const tier = TIERS[tierKey];
    if (!tier || !tierList) return;

    if (activeTierKey === tierKey && tierList.querySelector(".reveal-card")) {
      collapseTierSelection();
      return;
    }

    tierList.classList.add("has-selection");
    tierBands.forEach((band) => {
      const isActive = band.dataset.tier === tierKey;
      band.classList.toggle("active", isActive);
      band.setAttribute("aria-pressed", String(isActive));
      band.setAttribute("aria-expanded", String(isActive));
    });
    activeTierKey = tierKey;

    const existingCard = tierList.querySelector(".reveal-card");
    if (existingCard) {
      existingCard.remove();
    }

    const odnesesHTML = tier.odneses.map((item) =>
      `<li><span class="rib"></span><span class="odneses-text">${item}</span></li>`
    ).join("");

    const cardHTML = `
      <div class="reveal-card glass">
        <div class="reveal-inner">
          <div class="reveal-header">
            <h3 class="reveal-name">${tier.name}</h3>
            <p class="reveal-tagline">${tier.tagline}</p>
          </div>
          <div class="reveal-block">
            <h4 class="reveal-label mono">CO DOSTANEŠ</h4>
            <p>${CO_DOSTANES}</p>
          </div>
          <div class="reveal-block">
            <h4 class="reveal-label mono">CO SI ODNESEŠ</h4>
            <ul class="odneses-list">${odnesesHTML}</ul>
          </div>
          <div class="reveal-block reveal-price">
            <p class="price-main">5 000 Kč / osoba</p>
            <p class="price-sub">Garantujeme měřitelné výsledky. Podrobnosti v obchodních podmínkách.</p>
          </div>
          <div class="reveal-cta">
            <a class="cta-primary cta-contact" href="${createMailtoSubject("Objednávka", tier.name)}">Objednat ${tier.name}</a>
            <a class="cta-secondary cta-contact" href="${createMailtoSubject("Dotaz", tier.name)}">Chci se nejdřív zeptat – nezávazně, ozveme se do 24 hodin</a>
          </div>
        </div>
        <p class="reveal-footer mono">Není to tvoje úroveň? Zkus jinou odpověď.</p>
      </div>
    `;

    const activeBand = tierList.querySelector(`[data-tier="${tierKey}"]`);
    if (!activeBand) return;
    activeBand.insertAdjacentHTML("afterend", cardHTML);

    requestAnimationFrame(() => {
      const card = tierList.querySelector(".reveal-card");
      requestAnimationFrame(() => card.classList.add("visible"));
    });

    if (window.pulsThread) window.pulsThread.triggerPing();
  }

  setThreadState("klid");
  playHeroZazehSequence();
  updateNavVisibility();
  setupSectionObserver();
  window.addEventListener("load", () => syncUtulekState(desiredUtulekActive));

  function markUserScrollIntent() {
    userScrollIntent = true;
  }

  window.addEventListener("wheel", markUserScrollIntent, { passive: true });
  window.addEventListener("touchmove", markUserScrollIntent, { passive: true });
  window.addEventListener("keydown", (event) => {
    const scrollKeys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "];
    if (scrollKeys.includes(event.key)) markUserScrollIntent();
  });
  window.addEventListener("scroll", scheduleScrollUpdate, { passive: true });
  window.addEventListener("resize", scheduleScrollUpdate);
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      setMobileMenuOpen(!document.body.classList.contains("mobile-menu-open"));
    });
  }

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => setMobileMenuOpen(false));
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("mobile-menu-open")) {
      setMobileMenuOpen(false);
    }
  });

  tierBands.forEach((band) => {
    band.setAttribute("aria-expanded", "false");
    band.addEventListener("click", () => selectTier(band.dataset.tier));
    band.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectTier(band.dataset.tier);
      }
    });
  });
});
