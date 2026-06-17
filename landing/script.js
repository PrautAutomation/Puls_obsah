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

const CO_DOSTANES = "10 pracovních dní. Živé online hodiny. Krátký vstupní dotazník — žádný test tvých znalostí, jen potřebujeme znát tvůj kontext, abychom příklady trefili do tvé praxe. Všechny materiály a postavená workflow ti zůstanou navždy.";
const NAV_REVEAL_POINT = 0.56;

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav-fixed");
  const heroLogo = document.querySelector(".hero-logo img");
  const navLogo = document.querySelector(".nav-logo");
  const tierBands = document.querySelectorAll(".tier-band");
  const tierList = document.querySelector(".tier-list");
  const reduceLogoMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const compactLogoMotion = window.matchMedia("(max-width: 760px)").matches;
  let introNavVisible = false;
  let hasScrolledPastNavPoint = false;
  let navTransitionPlayed = false;
  let navSettleTimer = null;

  window.setTimeout(() => {
    document.body.classList.add("thread-live");
  }, reduceLogoMotion ? 0 : 1850);

  window.setTimeout(() => {
    introNavVisible = true;
    nav.classList.add("is-settled");
    updateNavVisibility();
  }, reduceLogoMotion ? 0 : 2300);

  function clearLogoTravelers() {
    document.querySelectorAll(".landing-logo-traveler").forEach((traveler) => {
      traveler.remove();
    });
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
    const travelDuration = 2200;

    navSettleTimer = window.setTimeout(settleNavLogo, travelDuration * 0.52);

    const motion = traveler.animate(
      [
        { offset: 0, transform: "translate(0, 0) scale(1)", opacity: 1 },
        {
          offset: 0.34,
          transform: `translate(${dx * 0.28}px, ${dy * 0.28}px) scale(${Math.max(scale * 7.2, 0.58)})`,
          opacity: 0.92
        },
        {
          offset: 0.68,
          transform: `translate(${dx * 0.76}px, ${dy * 0.70}px) scale(${Math.max(scale * 3.2, 0.28)})`,
          opacity: 0.72
        },
        {
          offset: 0.88,
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
      settleNavLogo();
    };
    motion.oncancel = () => {
      traveler.remove();
    };
  }

  function updateNavVisibility() {
    const threshold = window.innerHeight * NAV_REVEAL_POINT;
    const scrolledPastNavPoint = window.scrollY > threshold;
    const isVisible = introNavVisible || scrolledPastNavPoint;

    nav.classList.toggle("is-visible", isVisible);

    if (scrolledPastNavPoint && !hasScrolledPastNavPoint) {
      if (!navTransitionPlayed) {
        navTransitionPlayed = true;
        animateHeroLogoToNav();
      } else {
        settleNavLogo();
      }
    }

    if (!isVisible) {
      window.clearTimeout(navSettleTimer);
      nav.classList.remove("is-transitioning");
      clearLogoTravelers();
    }

    hasScrolledPastNavPoint = scrolledPastNavPoint;
  }

  function createMailtoSubject(prefix, tierName) {
    return `mailto:tereza.svanda@praut.cz?subject=${encodeURIComponent(`${prefix} ${tierName}`)}`;
  }

  function selectTier(tierKey) {
    const tier = TIERS[tierKey];
    if (!tier || !tierList) return;

    tierList.classList.add("has-selection");
    tierBands.forEach((band) => {
      const isActive = band.dataset.tier === tierKey;
      band.classList.toggle("active", isActive);
      band.setAttribute("aria-pressed", String(isActive));
    });

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
            <a class="cta-primary mono" href="${createMailtoSubject("Objednávka", tier.name)}">[ Objednat ${tier.name} ]</a>
            <a class="cta-secondary" href="${createMailtoSubject("Dotaz", tier.name)}">Chci se nejdřív zeptat — nezávazně, ozveme se do 24 hodin</a>
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
  }

  updateNavVisibility();
  window.addEventListener("scroll", updateNavVisibility, { passive: true });
  window.addEventListener("resize", updateNavVisibility);

  tierBands.forEach((band) => {
    band.addEventListener("click", () => selectTier(band.dataset.tier));
    band.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectTier(band.dataset.tier);
      }
    });
  });
});
