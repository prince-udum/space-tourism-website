const crewBtns = document.querySelectorAll(".crew-btn");
const crewMembers = document.querySelectorAll(".crew-member-info");
const crewMemberImages = document.querySelectorAll(".crew-member-img");
const btnContainer = document.querySelector(".crew-btn-container");

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
