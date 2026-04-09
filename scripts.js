document.addEventListener("DOMContentLoaded", () => {

  // MAIN TABS
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      
      // remove active from all
      tabButtons.forEach(btn => btn.classList.remove("active"));
      tabContents.forEach(content => content.classList.remove("active"));

      // activate clicked
      button.classList.add("active");
      const target = document.getElementById(button.dataset.target);
      if (target) target.classList.add("active");
    });
  });

  // SUB TABS
  const subButtons = document.querySelectorAll(".sub-btn");

  subButtons.forEach(button => {
    button.addEventListener("click", () => {
      
      const parentTab = button.closest(".tab-content");

      const subContents = parentTab.querySelectorAll(".sub-content");
      const subBtns = parentTab.querySelectorAll(".sub-btn");

      subBtns.forEach(btn => btn.classList.remove("active"));
      subContents.forEach(content => content.classList.remove("active"));

      button.classList.add("active");

      const target = document.getElementById(button.dataset.target);
      if (target) target.classList.add("active");
    });
  });

  // OPEN FIRST TAB BY DEFAULT
  if (tabButtons.length > 0) {
    tabButtons[0].click();
  }

});