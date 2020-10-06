const sections = document.querySelectorAll("section");

// this function changes the background of the section to show it is the active one
const activeSection = section => {
  section.style.backgroundColor = "#6BCAE2";
};

// this function return the section to its normal status when the user is not viewing it anymore
const inactiveSection = section => {
  section.style.backgroundColor = "";
};

// to loop throught the nodelist and add eventlistneres for the functions above
for (let section of sections) {
  section.addEventListener("mouseover", () => {
    activeSection(section);
  });
  section.addEventListener("mouseout", () => {
    inactiveSection(section);
  });
}
