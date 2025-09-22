let modeBtn = document.querySelector("#moon-icon");
let aboutDiv = document.querySelector("#aboutDiv");
let homeDiv = document.querySelector("#homeDiv");
let allDiv = document.querySelector("#allDiv");
let activeDiv = document.querySelector(".activeDiv");
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

// titleDiv Accessing
let titleDiv1 = document.querySelector(".titleDiv1");
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
modeBtn.addEventListener("click", () => {
  if (modeBtn.src.includes("icon-moon.svg")) {
    document.body.style.background = "hsl(227, 75%, 14%)";
    modeBtn.src = "icon-sun.svg";
    aboutDiv.style.color = "white";
    modeBtn.style.background = "hsl(226, 11%, 37%)";
    modeBtn.style.background = "hsl(226, 25%, 17%)";
    allDiv.style.background = "hsl(225, 23%, 24%)";
    activeDiv.style.background = "hsl(225, 23%, 24%)";
    inactiveDiv.style.background = "hsl(225, 23%, 24%)";
    allDiv.style.color = "white";
    activeDiv.style.color = "white";
    inactiveDiv.style.color = "white";
    // homeDiv style
    homeDiv.style.background = "hsl(225, 23%, 24%)";
    // extension logo stylehsl(225, 23%, 24%)
    extnLogo.style.color = "white";
    // extnLogo style isn't working?
    //
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

    // titleDiv styling
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
    // removeBtn border styling
  } else if (modeBtn.src.includes("icon-sun.svg")) {
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

    // titleDiv styleing
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
  }
});

allDiv = document.querySelector("#allDiv");
activeDiv = document.querySelector(".activeDiv");
inactiveDiv = document.querySelector("#inactiveDiv");

allDiv.addEventListener("click", () => {
  if (modeBtn.src.includes("icon-sun.svg")) {
    allDiv.style.color = "white";
    allDiv.style.background = "hsl(3, 71%, 56%)";
  } else if (modeBtn.src.includes("icon-moon.svg")) {
    allDiv.style.color = "white";
    allDiv.style.background = "hsl(3, 71%, 56%)";
  }
});

activeDiv.addEventListener("click", () => {
  if (modeBtn.src.includes("icon-sun.svg")) {
    activeDiv.style.color = "white";
    activeDiv.style.background = "hsl(3, 71%, 56%)";
  } else if (modeBtn.src.includes("icon-moon.svg")) {
    activeDiv.style.color = "white";
    activeDiv.style.background = "hsl(3, 71%, 56%)";
  }
});

inactiveDiv.addEventListener("click", () => {
  if (modeBtn.src.includes("icon-sun.svg")) {
    inactiveDiv.style.color = "white";
    inactiveDiv.style.background = "hsl(3, 71%, 56%)";
  } else if (modeBtn.src.includes("icon-moon.svg")) {
    inactiveDiv.style.color = "white";
    inactiveDiv.style.background = "hsl(3, 71%, 56%)";
  }
});
// now add logic when i click on the activeDiv then show active extensions
// else others
