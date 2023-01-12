let positionScrollPage;
let diaDoEvento = window.document.getElementById("dia--evento");

let blurAnimation = setInterval(() => {
  positionScrollPage = document.documentElement.scrollTop;
  if (positionScrollPage >= 500) {
    diaDoEvento.classList.remove("put-blur");
    clearInterval(blurAnimation);
  }

  console.log("i am here");
}, 100);

function diaDoEventoScroll(e) {
  window.scrollTo({
    top: 600,
    behavior: "smooth",
  });
}
