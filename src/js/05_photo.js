"use strict";

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  photo = fr.result;
  updatePhoto();
}

function updatePhoto() {
  const currentPhoto = photo;
  if (currentPhoto !== "") {
    profilePreview.style.backgroundImage = `url(${currentPhoto})`;
    profileImage.style.backgroundImage = `url(${currentPhoto})`;
    data.photo = fr.result;
  }
  return data.photo;
}
function clearPhoto() {
  photo = "";
  profilePreview.style.backgroundImage = "";
  profileImage.style.backgroundImage = "";
}

function fakeFileClick(ev) {
  ev.preventDefault();
  fileField.click();
}

uploadBtn.addEventListener("click", fakeFileClick);
fileField.addEventListener("change", getImage);
