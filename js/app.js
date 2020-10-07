let sections = document.querySelectorAll("section");
let list = document.getElementById("navbar__list");

// this function changes the background of the section to show it is the active one
const activeSection = section => {
  section.className = "your-active-class";
};

// this function return the section to its normal status when the user is not viewing it anymore
const inactiveSection = section => {
  section.className = "";
};

// this function to be called when navigation links are needed to be created
const linkCreator = section => {
  let point = document.createElement("li");
  let link = document.createElement("a");
  link.className = "menu__link";
  link.textContent = section.id;
  // to make it look clickable
  link.href = `#${section.id}`;
  link.addEventListener("click", () => {
    section.scrollIntoView(true);
  });
  point.appendChild(link);
  return point;
};

for (let section of sections) {
  section.addEventListener("mouseover", () => {
    activeSection(section);
  });
  section.addEventListener("mouseout", () => {
    inactiveSection(section);
  });

  list.appendChild(linkCreator(section));
}
