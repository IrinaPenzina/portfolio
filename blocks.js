document.addEventListener('mousemove', (e) => {
  const sqrs = document.querySelectorAll('.item');

  const mouseX = e.pageX;
  const mouseY = e.pageY;

  sqrs.forEach(sqr => {
    const sqrX = sqr.offsetLeft + 20;
    const sqrY = sqr.offsetTop + 20;

    const diffX = mouseX - sqrX;
    const diffY = mouseY - sqrY;

    const radians = Math.atan2(diffY, diffX);

    const angle = radians * 180 / Math.PI;

    sqr.style.transform = `rotate(${angle}deg)`;
  })

})

// carousel
function moveToSelected(element) {
  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
console.log("Hello world!");
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected)
    .removeClass()
    .addClass("selected");

  $(prev)
    .removeClass()
    .addClass("prev");
  $(next)
    .removeClass()
    .addClass("next");

  $(nextSecond)
    .removeClass()
    .addClass("nextRightSecond");
  $(prevSecond)
    .removeClass()
    .addClass("prevLeftSecond");

  $(nextSecond)
    .nextAll()
    .removeClass()
    .addClass("hideRight");
  $(prevSecond)
    .prevAll()
    .removeClass()
    .addClass("hideLeft");
}

// Eventos teclado
$(document).keydown(function(e) {
  switch (e.which) {
    case 37: // left
      moveToSelected("prev");
      break;

    case 39: // right
      moveToSelected("next");
      break;

    default:
      return;
  }
  e.preventDefault();
});

$("#carousel div").click(function() {
  moveToSelected($(this));
});

$("#prev").click(function() {
  moveToSelected("prev");
});

$("#next").click(function() {
  moveToSelected("next");
});
