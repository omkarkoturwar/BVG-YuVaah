// Navbar 
const navbar = document.querySelector(".navbar");
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach((el) => {
    const revealTop = el.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
// Statement section reveal
const statement = document.querySelector(".statement");

const statementObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        statementObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

if (statement) {
  statementObserver.observe(statement);
}
