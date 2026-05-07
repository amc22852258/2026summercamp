const header = document.querySelector(".site-header");
const faqItems = document.querySelectorAll(".faq-item");

const syncHeader = () => {
  header.dataset.scrolled = String(window.scrollY > 18);
};

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const isOpen = item.getAttribute("aria-expanded") === "true";
    faqItems.forEach((target) => target.setAttribute("aria-expanded", "false"));
    item.setAttribute("aria-expanded", String(!isOpen));
  });
});
