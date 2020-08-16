"use strict";
const tabs = document.querySelectorAll("div.tab");
const tabsArr = Array.from(tabs);
const content = document.querySelectorAll("div.tab__content");
const contentArr = Array.from(content);

function tabsNavigation() {
  let activeTab = tabsArr.findIndex((item) => item.className.includes("tab_active"));
  tabsArr[activeTab].classList.remove("tab_active");
  this.classList.add("tab_active");
  let activeIndex = tabsArr.indexOf(this);
  let activeContent = contentArr.findIndex((item) => item.className.includes("tab__content_active"));
  contentArr[activeContent].classList.remove("tab__content_active");
  contentArr[activeIndex].classList.add("tab__content_active");
}

for (let tab of tabsArr) {
  tab.addEventListener("click", tabsNavigation);
}






