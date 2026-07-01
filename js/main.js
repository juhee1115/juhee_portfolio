document.addEventListener("DOMContentLoaded", () => {
  const tag = document.querySelector(".tag");
  const card = document.querySelector(".card");
  const about = document.querySelector("#about");

  tag.addEventListener("click", () => {
    // 봉투 열기 애니메이션
    card.classList.add("open");

    // 애니메이션 후 About으로 이동
    setTimeout(() => {
      about.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 900);
  });
});

const nav = document.querySelector(".gnb");
const intro = document.querySelector(".intro");

window.addEventListener("scroll", () => {
  const introBottom = intro.offsetHeight;

  if (window.scrollY >= introBottom - 100) {
    nav.classList.add("show");
  } else {
    nav.classList.remove("show");
  }
});
const items = document.querySelectorAll(".design-item img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");
const modalBg = document.querySelector(".modal-bg");

// 열기
items.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("show");

    modalImg.src = img.dataset.detail;
    modalText.innerText = img.nextElementSibling.innerText;
  });
});

// 닫기
function closeModal() {
  modal.classList.remove("show");
  modalImg.src = "";
}

closeBtn.addEventListener("click", closeModal);
modalBg.addEventListener("click", closeModal);


function setupMarquee(selector, speed, direction) {
  const marquee = document.querySelector(selector);
  const track = marquee.querySelector(".track");

  // 🔥 핵심: 복제해서 2세트 만들기
  track.innerHTML += track.innerHTML;

  let position = 0;
  const halfWidth = track.scrollWidth / 2;

  function animate() {
    position += speed * direction;

    // 🔥 절반 지나면 리셋 (끊김 없음 핵심)
    if (Math.abs(position) >= halfWidth) {
      position = 0;
    }

    track.style.transform = `translateX(${position}px)`;

    requestAnimationFrame(animate);
  }

  animate();
}

// 위: 왼쪽 흐름
setupMarquee(".marquee.left", 0.5, -1);

// 아래: 오른쪽 흐름
setupMarquee(".marquee.right", 0.5, 1);