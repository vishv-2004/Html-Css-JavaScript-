function majedar() {
  document.querySelector("[addclass]").classList.remove("activen");
  document.querySelector("[addclass]").classList.add("activey");
  document.querySelector("[addclass1]").classList.remove("activen");
  document.querySelector("[addclass1]").classList.add("activey");
}
function notmajedar() {
  document.querySelector("[addclass]").classList.remove("activey");
  document.querySelector("[addclass]").classList.add("activen");
  document.querySelector("[addclass1]").classList.remove("activey");
  document.querySelector("[addclass1]").classList.add("activen");
}
let shareprofile = document.querySelector("[shareprofile]");
shareprofile.addEventListener("click", () => {
  majedar();
});

let cancle = document.querySelector("[cancle]");
cancle.addEventListener("click", () => {
  notmajedar();
});
let addclass = document.querySelector("[addclass]");
addclass.addEventListener("click", () => {
  notmajedar();
});
