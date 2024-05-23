function showTab(tabNumber) {
  let contents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active");
  }

  let TabContent = document.getElementById("tab-" + tabNumber);
  TabContent.classList.add("active");
}

// document.addEventListener("DOMContentLoaded", function () {
//   showTab(1);
// });
