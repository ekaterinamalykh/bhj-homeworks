"use strict";

const adsArr = Array.from(document.getElementsByClassName("rotator__case"));

function changeAd() {
  let activeAd = adsArr.findIndex(item => item.className.includes("rotator__case_active")); 
  adsArr[activeAd].className = "rotator__case";
  let nextAd = (activeAd == adsArr.length - 1) ? adsArr[0] : adsArr[activeAd + 1];
  nextAd.className = "rotator__case rotator__case_active";
}

setInterval(changeAd, 1000);





