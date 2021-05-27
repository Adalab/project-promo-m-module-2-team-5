const progressBarEl = document.querySelector(".js-progress-bar");
const imputName = document.querySelectorAll(".js-name");
const imputJob = document.querySelectorAll(".js-job");
const allImputEls = document.querySelectorAll(".js-progress");
const labelProgressEl = document.querySelector(".js-label-progress");

console.log(allImputEls);
//previewPhotoElement

function fillProgressBar() {
  progressBarEl.value = progressBarEl.value + 12.5;
}
