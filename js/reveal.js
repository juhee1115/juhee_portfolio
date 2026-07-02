// 스크롤 리빌: .reveal 클래스가 붙은 요소가 화면에 들어오면 .active를 추가
document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    // 구형 브라우저는 그냥 바로 보이게 처리
    revealEls.forEach((el) => el.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // 한 번 나타난 뒤엔 재관찰 안 함
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    }
  );

  revealEls.forEach((el) => observer.observe(el));
});