const observer = new IntersectionObserver((entries) => {
  entries.forEach((entery) => {
    if (entery.isIntersecting) {
      entery.target.classList.add(`show`);
    } 
  });
});
const items = document.querySelectorAll(".item");
const sec = document.querySelectorAll(".move");

items.forEach((el) => observer.observe(el));
sec.forEach((el) => observer.observe(el));

for (item of items) {
  item.classList.add("hide");
}
const CLoseList = document.querySelector(".close__list");
const OpenList = document.querySelector(".open__list");

function open() {
    const NavList = document.querySelector(".nav__list");
    OpenList.style.display = "none";
    CLoseList.style.display = "block";
    NavList.classList.add(`Smove`);
    NavList.classList.remove(`Hmove`);

}

function close() {
    const NavList = document.querySelector(".nav__list");
    OpenList.style.display = "block";
    CLoseList.style.display = "none";
    NavList.classList.remove(`Smove`);
    NavList.classList.add(`Hmove`);
}
OpenList.addEventListener("click",open);
CLoseList.addEventListener("click",close);