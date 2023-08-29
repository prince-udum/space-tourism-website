const planetImages = document.querySelectorAll(".planet-img");
const tabBtns = document.querySelectorAll(".tab-btn");
const InfoContainer = document.querySelector(".info-container");
const planetInfo = document.querySelectorAll(".planet-info-container");

InfoContainer.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    tabBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // hide other images
    planetImages.forEach((img) => {
      img.classList.remove("active");
    });

    // hide other planets info
    planetInfo.forEach((info) => {
      info.classList.remove("active");
    });

    // show only planet with active class (i.e both the planet img and info)
    const planets = document.querySelectorAll(`#${id}`);
    planets.forEach((item) => {
      item.classList.add("active");
    });
  }
});
