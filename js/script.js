// toggle mobile navigation
const openMenu = document.querySelector(".open-menu");
const menu = document.querySelector(".navlinks");
const closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", () => {
  menu.classList.add("show-navlinks");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("show-navlinks");
});

// destination
const planetImages = document.querySelectorAll(".planet-img");
const tabBtns = document.querySelectorAll(".tab-btn");
const InfoContainer = document.querySelector(".info-container");
const planetInfo = document.querySelectorAll(".planet-info-container");

// crew
const crewBtns = document.querySelectorAll(".crew-btn");
const crewMembers = document.querySelectorAll(".crew-member-info");
const crewMemberImages = document.querySelectorAll(".crew-member-img");
const btnContainer = document.querySelector(".crew-btn-container");

// technology
const techCircles = document.querySelectorAll(".tech-circle");
const techImages = document.querySelectorAll(".tech-image");
// console.log(techImages);
const techInfo = document.querySelectorAll(".tech-info");
const techInfoContainer = document.querySelector(".tech-info-container");

if (InfoContainer) {
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
} else if (btnContainer) {
  btnContainer.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    if (id) {
      // remove active from all buttons
      crewBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      // hide other crew images
      crewMemberImages.forEach((img) => {
        img.classList.remove("active");
      });

      // hide other crew members info
      crewMembers.forEach((info) => {
        info.classList.remove("active");
      });

      // show only crew members with active class (i.e both the planet img and info)
      const crewMember = document.querySelectorAll(`#${id}`);
      crewMember.forEach((item) => {
        item.classList.add("active");
      });
    }
  });
} else {
  techInfoContainer.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // remove all active class from the tech circles
      techCircles.forEach((circle) => {
        circle.classList.remove("active");
      });
      // add the active class to the circle that is clicked
      e.target.classList.add("active");

      // remove all active class from the tech images
      techImages.forEach((img) => {
        img.classList.remove("active");
      });

      // remove all active class from tech info
      techInfo.forEach((info) => {
        info.classList.remove("active");
      });

      // show only items with active class (i.e both the tech img and info)
      const techItems = document.querySelectorAll(`#${id}`);
      techItems.forEach((item) => {
        item.classList.add("active");
      });
    }
  });
}
