document.addEventListener("DOMContentLoaded", () => {

  // =====================
  // ELEMENTS
  // =====================
  const tag = document.querySelector(".tag");
  const card = document.querySelector(".card");
  const intro = document.querySelector(".intro");
  const about = document.querySelector("#about");

  const nav = document.querySelector(".gnb");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".gnb a");

  const textEl = document.querySelector(".text");

  // =====================
  // INTRO TYPE
  // =====================
  const text = "HELLO, THIS IS JUHEE'S PORTFOLIO OPEN IT!";
  let i = 0;

  textEl.innerHTML = "";

  function type() {
    if (i < text.length) {
      textEl.innerHTML += text[i++];
      setTimeout(type, 60);
    }
  }

  type();

  // =====================
  // INTRO CLICK
  // =====================
  tag.addEventListener("click", () => {
    card.classList.add("open");

    setTimeout(() => {
      const y = about.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({ top: y, behavior: "smooth" });
    }, 800);

    setTimeout(() => {
      intro.classList.add("hide");
    }, 1000);

    setTimeout(() => {
      intro.remove();
    }, 1800);
  });

  // =====================
  // NAV ACTIVE (scroll only)
  // =====================
  function setActive() {
    let current = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.4) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${current}`
      );
    });
  }

  // =====================
  // NAV SHOW
  // =====================
  function toggleNav() {
    if (!intro) return;

    const introBottom =
      intro.getBoundingClientRect().bottom + window.scrollY;

    nav.classList.toggle("show", window.scrollY > introBottom - 100);
  }

  window.addEventListener("scroll", () => {
    toggleNav();
    setActive();
  });

  toggleNav();
  setActive();

  // =====================
  // MODAL
  // =====================
  const items = document.querySelectorAll(".design-item img");
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalText = document.getElementById("modal-text");
  const closeBtn = document.querySelector(".close");
  const modalBg = document.querySelector(".modal-bg");

  items.forEach((img) => {
    img.addEventListener("click", () => {
      modal.classList.add("show");
      modalImg.src = img.dataset.detail;
      modalText.innerText = img.nextElementSibling.innerText;
    });
  });

  function closeModal() {
    modal.classList.remove("show");
    modalImg.src = "";
  }

  closeBtn.addEventListener("click", closeModal);
  modalBg.addEventListener("click", closeModal);

  // =====================
  // MARQUEE
  // =====================
  function setupMarquee(selector, speed, direction) {
    const marquee = document.querySelector(selector);
    const track = marquee.querySelector(".track");

    const original = track.innerHTML;
    track.innerHTML = original + original;

    let position = 0;
    const halfWidth = track.scrollWidth / 2;

    function animate() {
      position += speed * direction;

      if (Math.abs(position) >= halfWidth) {
        position = position % halfWidth;
      }

      track.style.transform = `translate3d(${position}px, 0, 0)`;
      requestAnimationFrame(animate);
    }

    animate();
  }

  setupMarquee(".marquee.left", 1.0, -1);
  setupMarquee(".marquee.right", 1.0, 1);
});