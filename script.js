/* =========================================
   Hero Slideshow (fade in/out)
========================================= */
(function initHeroSlideshow() {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length === 0) return;

  let current = 0;
  const duration = 5500; // 1枚あたりの表示時間 (ms)

  setInterval(() => {
    slides[current].classList.remove("is-active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("is-active");
  }, duration);
})();

/* =========================================
   Header scroll state
========================================= */
(function initHeaderScroll() {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  const update = () => {
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
})();

/* =========================================
   Mobile Menu Toggle
========================================= */
(function initMenu() {
  const header = document.getElementById("siteHeader");
  const toggle = document.getElementById("menuToggle");
  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    header.classList.toggle("is-menu-open");
  });

  document.querySelectorAll(".site-nav a").forEach((a) => {
    a.addEventListener("click", () => {
      header.classList.remove("is-menu-open");
    });
  });
})();

/* =========================================
   Fade-in on scroll
========================================= */
(function initFadeIn() {
  const targets = document.querySelectorAll(
    ".section-head, .concept-text, .concept-image, .feature-card, .room-item, .naramachi-grid, .spot-card, .access-grid, .faq-item, .contact-form"
  );
  targets.forEach((el) => el.classList.add("fade-in"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  targets.forEach((el) => io.observe(el));
})();

/* =========================================
   Contact Form (demo only)
========================================= */
(function initForm() {
  const form = document.getElementById("contactForm");
  const thanks = document.getElementById("formThanks");
  if (!form || !thanks) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // デモ用: 実際の送信は行わず、完了メッセージのみ表示
    form.reset();
    thanks.hidden = false;
    thanks.scrollIntoView({ behavior: "smooth", block: "center" });
  });
})();
