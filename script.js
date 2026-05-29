const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const previewImage = document.querySelector(".project-preview img");
const projectRows = document.querySelectorAll(".project-row");
const galleryCards = document.querySelectorAll(".gallery-card");

menuButton?.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("is-open");
  header.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
    header.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

projectRows.forEach((row) => {
  row.addEventListener("pointerenter", () => {
    const nextImage = row.dataset.preview;
    if (!nextImage || !previewImage) return;

    previewImage.style.opacity = "0";
    window.setTimeout(() => {
      previewImage.src = nextImage;
      previewImage.style.opacity = "1";
    }, 120);
  });
});

galleryCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    const image = card.querySelector("img");
    if (!image?.src) return;

    event.preventDefault();
    window.open(image.src, "_blank", "noopener,noreferrer");
  });
});
