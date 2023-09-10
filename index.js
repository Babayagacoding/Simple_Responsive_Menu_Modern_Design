let WindowLength = window.innerWidth;
if (WindowLength < 768) {
  let menuCallerBtn = document.getElementById("roundBoxForMenuBtnLook");
  let menu = document.getElementById("MenuOnHover");
  menuCallerBtn.addEventListener("click", function () {
    menu.classList.add("onClickMenuInMobile");
  });
  // PIECE OF SHIT 🐶
  window.addEventListener("click", function (e) {
    if (menu.contains(e.target)) {
      console.log("Jai Shree Ram");
      console.log("Clicked Inside Of The Box");
    } else if (menuCallerBtn.contains(e.target)) {
      menu.classList.add("onClickMenuInMobile");
    } else {
      menu.classList.remove("onClickMenuInMobile");
    }
  });
} else {
  console.log("Window Width is greater than 768px");
}
