let sections = document.querySelectorAll("section");
let list = document.getElementById("navbar__list");

// this part for responsive navigation
let hamburgerMenu = document.getElementById("hamburger");
hamburgerMenu.addEventListener("click", () => {
  list.classList.toggle("show");
});

// this function to highlight top menu
const activeLink = section => {
  let links = document.querySelectorAll("a");
  for (let link of links) {
    if (link.textContent == section.id) {
      link.classList.toggle("linkActive");
    }
  }
};
// this function changes the background of the section to show it is the active one
const activeSection = section => {
  section.classList.add("your-active-class");

  // activeLink(section);
};

// this function return the section to its normal status when the user is not viewing it anymore
const inactiveSection = section => {
  section.classList.remove("your-active-class");
  // activeLink(section);
};

// this function to be called when navigation links are needed to be created
const linkCreator = section => {
  let point = document.createElement("li");
  let link = document.createElement("a");
  link.className = "menu__link";
  link.textContent = section.id;

  link.addEventListener("click", () => {
    section.scrollIntoView(true);
  });
  point.appendChild(link);
  return point;
};

// for the scrolling part
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.75
};
// to observe the scrolling
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      activeSection(entry.target);
    } else {
      inactiveSection(entry.target);
    }
  });
}, options);

// where all the functions are called
for (let section of sections) {
  section.addEventListener("mouseover", () => {
    activeLink(section);
  });
  section.addEventListener("mouseout", () => {
    activeLink(section);
  });

  observer.observe(section);
  list.appendChild(linkCreator(section));
}
