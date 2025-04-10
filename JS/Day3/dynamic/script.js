let theme = document.documentElement;

let btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnClass = e.currentTarget.classList;
    if (btnClass.contains("btn1")) {
      theme.style.setProperty("--theme-color", "rgb(234, 227, 22)");
    } else if (btnClass.contains("btn2")) {
      theme.style.setProperty("--theme-color", "rgb(244, 15, 53)");
    } else if (btnClass.contains("btn3")) {
      theme.style.setProperty("--theme-color", "rgb(19, 16, 162)");
    } else if (btnClass.contains("btn4")) {
      theme.style.setProperty("--theme-color", "rgb(15, 162, 182)");
    } else {
      theme.style.setProperty("--theme-color", "rgb(182, 15, 176)");
    }
  });
});
