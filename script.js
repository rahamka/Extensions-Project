// Select DOM elements
let modeBtn = document.querySelector("#moon-icon");
let aboutDiv = document.querySelector("#aboutDiv");
let homeDiv = document.querySelector("#homeDiv");
let allDiv = document.querySelector("#allDiv");
let activeDiv = document.querySelector("#activeDiv");
let inactiveDiv = document.querySelector("#inactiveDiv");
let extnLogo = document.querySelector("#logoDiv");

// headerArea Accessing
let headerArea1 = document.querySelector(".headerArea1");
let headerArea2 = document.querySelector(".headerArea2");
let headerArea3 = document.querySelector(".headerArea3");
let headerArea4 = document.querySelector(".headerArea4");
let headerArea5 = document.querySelector(".headerArea5");
let headerArea6 = document.querySelector(".headerArea6");
let headerArea7 = document.querySelector(".headerArea7");
let headerArea8 = document.querySelector(".headerArea8");
let headerArea9 = document.querySelector(".headerArea9");
let headerArea10 = document.querySelector(".headerArea10");
let headerArea11 = document.querySelector(".headerArea11");
let headerArea12 = document.querySelector(".headerArea12");

// titleDiv Accessing (Fixed typo: titleDev1 to titleDiv1)
let titleDiv1 = document.querySelector(".titleDiv1"); // Corrected typo
let titleDiv2 = document.querySelector(".titleDiv2");
let titleDiv3 = document.querySelector(".titleDiv3");
let titleDiv4 = document.querySelector(".titleDiv4");
let titleDiv5 = document.querySelector(".titleDiv5");
let titleDiv6 = document.querySelector(".titleDiv6");
let titleDiv7 = document.querySelector(".titleDiv7");
let titleDiv8 = document.querySelector(".titleDiv8");
let titleDiv9 = document.querySelector(".titleDiv9");
let titleDiv10 = document.querySelector(".titleDiv10");
let titleDiv11 = document.querySelector(".titleDiv11");
let titleDiv12 = document.querySelector(".titleDiv12");

// discription Accessing
let discript1 = document.querySelector(".discriptPara1");
let discript2 = document.querySelector(".discriptPara2");
let discript3 = document.querySelector(".discriptPara3");
let discript4 = document.querySelector(".discriptPara4");
let discript5 = document.querySelector(".discriptPara5");
let discript6 = document.querySelector(".discriptPara6");
let discript7 = document.querySelector(".discriptPara7");
let discript8 = document.querySelector(".discriptPara8");
let discript9 = document.querySelector(".discriptPara9");
let discript10 = document.querySelector(".discriptPara10");
let discript11 = document.querySelector(".discriptPara11");
let discript12 = document.querySelector(".discriptPara12");

// Remove Button Accessing
let removeBtn1 = document.querySelector(".removeBtn1");
let removeBtn2 = document.querySelector(".removeBtn2");
let removeBtn3 = document.querySelector(".removeBtn3");
let removeBtn4 = document.querySelector(".removeBtn4");
let removeBtn5 = document.querySelector(".removeBtn5");
let removeBtn6 = document.querySelector(".removeBtn6");
let removeBtn7 = document.querySelector(".removeBtn7");
let removeBtn8 = document.querySelector(".removeBtn8");
let removeBtn9 = document.querySelector(".removeBtn9");
let removeBtn10 = document.querySelector(".removeBtn10");
let removeBtn11 = document.querySelector(".removeBtn11");
let removeBtn12 = document.querySelector(".removeBtn12");

// Combined modeBtn event listener (merged both click handlers)
modeBtn.addEventListener("click", () => {
  if (modeBtn.src.includes("icon-moon.svg")) {
    // Dark mode
    document.body.style.background = "hsl(227, 75%, 14%)";
    modeBtn.src = "icon-sun.svg";
    aboutDiv.style.color = "white";
    modeBtn.style.background = "hsl(226, 25%, 17%)";
    allDiv.style.background = "hsl(225, 23%, 24%)";
    activeDiv.style.background = "hsl(225, 23%, 24%)";
    inactiveDiv.style.background = "hsl(225, 23%, 24%)";
    allDiv.style.color = "white";
    activeDiv.style.color = "white";
    inactiveDiv.style.color = "white";
    homeDiv.style.background = "hsl(225, 23%, 24%)";
    extnLogo.style.color = "white";

    // headerArea styling
    headerArea1.style.background = "hsl(225, 23%, 24%)";
    headerArea2.style.background = "hsl(225, 23%, 24%)";
    headerArea3.style.background = "hsl(225, 23%, 24%)";
    headerArea4.style.background = "hsl(225, 23%, 24%)";
    headerArea5.style.background = "hsl(225, 23%, 24%)";
    headerArea6.style.background = "hsl(225, 23%, 24%)";
    headerArea7.style.background = "hsl(225, 23%, 24%)";
    headerArea8.style.background = "hsl(225, 23%, 24%)";
    headerArea9.style.background = "hsl(225, 23%, 24%)";
    headerArea10.style.background = "hsl(225, 23%, 24%)";
    headerArea11.style.background = "hsl(225, 23%, 24%)";
    headerArea12.style.background = "hsl(225, 23%, 24%)";

    // titleDiv styling (Removed redundant titleDiv1 declaration)
    titleDiv1.style.color = "white";
    titleDiv2.style.color = "white";
    titleDiv3.style.color = "white";
    titleDiv4.style.color = "white";
    titleDiv5.style.color = "white";
    titleDiv6.style.color = "white";
    titleDiv7.style.color = "white";
    titleDiv8.style.color = "white";
    titleDiv9.style.color = "white";
    titleDiv10.style.color = "white";
    titleDiv11.style.color = "white";
    titleDiv12.style.color = "white";

    // discription style
    discript1.style.color = "rgb(223, 234, 245)";
    discript2.style.color = "rgb(223, 234, 245)";
    discript3.style.color = "rgb(223, 234, 245)";
    discript4.style.color = "rgb(223, 234, 245)";
    discript5.style.color = "rgb(223, 234, 245)";
    discript6.style.color = "rgb(223, 234, 245)";
    discript7.style.color = "rgb(223, 234, 245)";
    discript8.style.color = "rgb(223, 234, 245)";
    discript9.style.color = "rgb(223, 234, 245)";
    discript10.style.color = "rgb(223, 234, 245)";
    discript11.style.color = "rgb(223, 234, 245)";
    discript12.style.color = "rgb(223, 234, 245)";

    // removeBtn style
    removeBtn1.style.background = "hsl(225, 23%, 24%)";
    removeBtn2.style.background = "hsl(225, 23%, 24%)";
    removeBtn3.style.background = "hsl(225, 23%, 24%)";
    removeBtn4.style.background = "hsl(225, 23%, 24%)";
    removeBtn5.style.background = "hsl(225, 23%, 24%)";
    removeBtn6.style.background = "hsl(225, 23%, 24%)";
    removeBtn7.style.background = "hsl(225, 23%, 24%)";
    removeBtn8.style.background = "hsl(225, 23%, 24%)";
    removeBtn9.style.background = "hsl(225, 23%, 24%)";
    removeBtn10.style.background = "hsl(225, 23%, 24%)";
    removeBtn11.style.background = "hsl(225, 23%, 24%)";
    removeBtn12.style.background = "hsl(225, 23%, 24%)";

    // removeBtn color style
    removeBtn1.style.color = "white";
    removeBtn2.style.color = "white";
    removeBtn3.style.color = "white";
    removeBtn4.style.color = "white";
    removeBtn5.style.color = "white";
    removeBtn6.style.color = "white";
    removeBtn7.style.color = "white";
    removeBtn8.style.color = "white";
    removeBtn9.style.color = "white";
    removeBtn10.style.color = "white";
    removeBtn11.style.color = "white";
    removeBtn12.style.color = "white";

    // removeBtn border styling
    removeBtn1.style.border = "1px solid white";
    removeBtn2.style.border = "1px solid white";
    removeBtn3.style.border = "1px solid white";
    removeBtn4.style.border = "1px solid white";
    removeBtn5.style.border = "1px solid white";
    removeBtn6.style.border = "1px solid white";
    removeBtn7.style.border = "1px solid white";
    removeBtn8.style.border = "1px solid white";
    removeBtn9.style.border = "1px solid white";
    removeBtn10.style.border = "1px solid white";
    removeBtn11.style.border = "1px solid white";
    removeBtn12.style.border = "1px solid white";

    // changing the menu - logo
    extnLogo.src = "white-logo.png";

    // Save to localStorage
    localStorage.setItem("bodyColor", "hsl(227, 75%, 14%)");
    localStorage.setItem("headerColor", "hsl(225, 23%, 24%)");
    console.log("black");
  } else if (modeBtn.src.includes("icon-sun.svg")) {
    // Light mode
    document.body.style.background = "rgb(223, 234, 245)";
    modeBtn.src = "icon-moon.svg";
    aboutDiv.style.color = "black";
    modeBtn.style.background = "rgb(225, 230, 235)";
    allDiv.style.background = "white";
    activeDiv.style.background = "white";
    inactiveDiv.style.background = "white";
    allDiv.style.color = "black";
    activeDiv.style.color = "black";
    inactiveDiv.style.color = "black";
    homeDiv.style.background = "white";

    // headerArea styling
    headerArea1.style.background = "white";
    headerArea2.style.background = "white";
    headerArea3.style.background = "white";
    headerArea4.style.background = "white";
    headerArea5.style.background = "white";
    headerArea6.style.background = "white";
    headerArea7.style.background = "white";
    headerArea8.style.background = "white";
    headerArea9.style.background = "white";
    headerArea10.style.background = "white";
    headerArea11.style.background = "white";
    headerArea12.style.background = "white";

    // titleDiv styling
    titleDiv1.style.color = "black";
    titleDiv2.style.color = "black";
    titleDiv3.style.color = "black";
    titleDiv4.style.color = "black";
    titleDiv5.style.color = "black";
    titleDiv6.style.color = "black";
    titleDiv7.style.color = "black";
    titleDiv8.style.color = "black";
    titleDiv9.style.color = "black";
    titleDiv10.style.color = "black";
    titleDiv11.style.color = "black";
    titleDiv12.style.color = "black";

    // discript style
    discript1.style.color = "black";
    discript2.style.color = "black";
    discript3.style.color = "black";
    discript4.style.color = "black";
    discript5.style.color = "black";
    discript6.style.color = "black";
    discript7.style.color = "black";
    discript8.style.color = "black";
    discript9.style.color = "black";
    discript10.style.color = "black";
    discript11.style.color = "black";
    discript12.style.color = "black";

    // removeBtn styling
    removeBtn1.style.background = "white";
    removeBtn2.style.background = "white";
    removeBtn3.style.background = "white";
    removeBtn4.style.background = "white";
    removeBtn5.style.background = "white";
    removeBtn6.style.background = "white";
    removeBtn7.style.background = "white";
    removeBtn8.style.background = "white";
    removeBtn9.style.background = "white";
    removeBtn10.style.background = "white";
    removeBtn11.style.background = "white";
    removeBtn12.style.background = "white";

    // removeBtn color styling
    removeBtn1.style.color = "black";
    removeBtn2.style.color = "black";
    removeBtn3.style.color = "black";
    removeBtn4.style.color = "black";
    removeBtn5.style.color = "black";
    removeBtn6.style.color = "black";
    removeBtn7.style.color = "black";
    removeBtn8.style.color = "black";
    removeBtn9.style.color = "black";
    removeBtn10.style.color = "black";
    removeBtn11.style.color = "black";
    removeBtn12.style.color = "black";

    // removeBtn border color styling
    removeBtn1.style.border = "1px solid black";
    removeBtn2.style.border = "1px solid black";
    removeBtn3.style.border = "1px solid black";
    removeBtn4.style.border = "1px solid black";
    removeBtn5.style.border = "1px solid black";
    removeBtn6.style.border = "1px solid black";
    removeBtn7.style.border = "1px solid black";
    removeBtn8.style.border = "1px solid black";
    removeBtn9.style.border = "1px solid black";
    removeBtn10.style.border = "1px solid black";
    removeBtn11.style.border = "1px solid black";
    removeBtn12.style.border = "1px solid black";

    // changing the menu - logo
    extnLogo.src = "logo.svg";

    // Save to localStorage
    localStorage.setItem("bodyColor", "rgb(223, 234, 245)");
    localStorage.setItem("headerColor", "#ffff");
    console.log("white");
  }
});

// Load saved theme from localStorage
let getItem = localStorage.getItem("bodyColor");
window.addEventListener("load", () => {
  if (getItem === "hsl(227, 75%, 14%)") {
    document.body.style.backgroundColor = "hsl(227, 75%, 14%)";
    headerArea1.style.backgroundColor = "hsl(225, 23%, 24%)";
    headerArea2.style.backgroundColor = "hsl(225, 23%, 24%)";
    headerArea3.style.backgroundColor = "hsl(225, 23%, 24%)";
    headerArea4.style.backgroundColor = "hsl(225, 23%, 24%)";
    headerArea5.style.backgroundColor = "hsl(225, 23%, 24%)";
    headerArea6.style.backgroundColor = "hsl(225, 23%, 24%)";
    headerArea7.style.backgroundColor = "hsl(225, 23%, 24%)";
    headerArea8.style.backgroundColor = "hsl(225, 23%, 24%)";
    headerArea9.style.backgroundColor = "hsl(225, 23%, 24%)";
    headerArea10.style.backgroundColor = "hsl(225, 23%, 24%)";
    headerArea11.style.backgroundColor = "hsl(225, 23%, 24%)";
    headerArea12.style.backgroundColor = "hsl(225, 23%, 24%)";
    allDiv.style.backgroundColor = "hsl(225, 23%, 24%)";
    activeDiv.style.backgroundColor = "hsl(225, 23%, 24%)";
    inactiveDiv.style.backgroundColor = "hsl(225, 23%, 24%)";
    homeDiv.style.backgroundColor = "hsl(225, 23%, 24%)";
    document.body.style.color = "white";
    removeBtn1.style.background = "hsl(225, 23%, 24%)";
    removeBtn2.style.background = "hsl(225, 23%, 24%)";
    removeBtn3.style.background = "hsl(225, 23%, 24%)";
    removeBtn4.style.background = "hsl(225, 23%, 24%)";
    removeBtn5.style.background = "hsl(225, 23%, 24%)";
    removeBtn6.style.background = "hsl(225, 23%, 24%)";
    removeBtn7.style.background = "hsl(225, 23%, 24%)";
    removeBtn8.style.background = "hsl(225, 23%, 24%)";
    removeBtn9.style.background = "hsl(225, 23%, 24%)";
    removeBtn10.style.background = "hsl(225, 23%, 24%)";
    removeBtn11.style.background = "hsl(225, 23%, 24%)";
    removeBtn12.style.background = "hsl(225, 23%, 24%)";
    removeBtn1.style.color = "#ffff";
    removeBtn2.style.color = "#ffff";
    removeBtn3.style.color = "#ffff";
    removeBtn4.style.color = "#ffff";
    removeBtn5.style.color = "#ffff";
    removeBtn6.style.color = "#ffff";
    removeBtn7.style.color = "#ffff";
    removeBtn8.style.color = "#ffff";
    removeBtn9.style.color = "#ffff";
    removeBtn10.style.color = "#ffff";
    removeBtn11.style.color = "#ffff";
    removeBtn12.style.color = "#ffff";
    removeBtn1.style.border = "1px solid white";
    removeBtn2.style.border = "1px solid white";
    removeBtn3.style.border = "1px solid white";
    removeBtn4.style.border = "1px solid white";
    removeBtn5.style.border = "1px solid white";
    removeBtn6.style.border = "1px solid white";
    removeBtn7.style.border = "1px solid white";
    removeBtn8.style.border = "1px solid white";
    removeBtn9.style.border = "1px solid white";
    removeBtn10.style.border = "1px solid white";
    removeBtn11.style.border = "1px solid white";
    removeBtn12.style.border = "1px solid white";
    extnLogo.src = "white-logo.png";
    modeBtn.style.backgroundColor = "hsl(226, 25%, 17%)";
    modeBtn.src = "icon-sun.svg";
  }
});

// Tab event listeners
allDiv.addEventListener("click", () => {
  allDiv.classList.add("tabsStyle");
  activeDiv.classList.remove("tabsStyle");
  inactiveDiv.classList.remove("tabsStyle");
  filterTabs("all");
});

activeDiv.addEventListener("click", () => {
  activeDiv.classList.add("tabsStyle");
  allDiv.classList.remove("tabsStyle");
  inactiveDiv.classList.remove("tabsStyle");
  filterTabs("active");
});

inactiveDiv.addEventListener("click", () => {
  inactiveDiv.classList.add("tabsStyle");
  allDiv.classList.remove("tabsStyle");
  activeDiv.classList.remove("tabsStyle");
  filterTabs("inactive");
});

extnLogo.addEventListener("click", () => {
  location.reload();
});

// Updated filterTabs function to fix layout shift
function filterTabs(tab) {
  const cards = document.querySelectorAll(
    ".headerArea1, .headerArea2, .headerArea3, .headerArea4, .headerArea5, .headerArea6, .headerArea7, .headerArea8, .headerArea9, .headerArea10, .headerArea11, .headerArea12"
  );
  cards.forEach((card) => {
    const toggle = card.querySelector(".toggle-switch input[type='checkbox']");
    const isActive = toggle ? toggle.checked : false;

    // Normalize margin to prevent layout shifts
    card.style.display = "block";
    card.style.margin = "0";
    if (tab === "active" && !isActive) {
      card.style.display = "none";
    } else if (tab === "inactive" && isActive) {
      card.style.display = "none";
    }
  });

  // Ensure consistent spacing for visible cards
  const lastRows = document.querySelectorAll("#lastRow");
  lastRows.forEach((row) => {
    row.style.margin = "0px 25px 10px 25px"; // Consistent margin
  });
}

// Remove button functionality
let buttons = document.querySelectorAll("#removeBtn");
buttons.forEach((elements) => {
  elements.addEventListener("click", () => {
    elements.style.background = "#0026ffff";
    elements.style.color = "white";
    setTimeout(() => {
      let element = elements.parentElement;
      element.parentElement.remove();
    }, 200);
  });
});
