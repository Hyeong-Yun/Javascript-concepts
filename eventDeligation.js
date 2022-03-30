// document.getElementById("file").addEventListener("click", function(e) {
//   // 파일 메뉴 동작
// });
// document.getElementById("edit").addEventListener("click", function(e) {
//   // 편집 메뉴 동작
// });
// document.getElementById("view").addEventListener("click", function(e) {
//   // 보기 메뉴 동작
// });

document.getElementById("menu").addEventListener("click", function (e) {
  let target = e.target;
  if (target.id === "file") {
    // 파일 메뉴 동작
  } else if (target.id === "edit") {
    // 편집 메뉴 동작
  } else if (target.id === "view") {
    // 보기 메뉴 동작
  }
});
