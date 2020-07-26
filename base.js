$(document).ready(() => {
  const heroTitle1 = "Hi, I'm Wei Song -";
  const heroTitle2 = "I'm a web developer based in Singapore.";

  animateText(heroTitle1, ".hero-title-1", 2500);

  $(".hero-container").on("hero-title-1:done", (event) => {
    $(".caret").remove();
    $(".hero-title-2").append("<span class='caret' aria-hidden='true'></span>");
    animateText(heroTitle2, ".hero-title-2", 1000);
  });
});

function animateText(title, selector, delay) {
  setTimeout(() => {
    typeWrite(title, selector, 0);
  }, delay);
}

function typeWrite(text, selector, i) {
  if (i < text.length) {
    $(selector)
      .html(text.substring(0, i + 1))
      .append("<span class='caret' aria-hidden='true'></span>");

    setTimeout(function () {
      typeWrite(text, selector, i + 1);
    }, 100);
  } else {
    setTimeout(() => {
      $(".hero-container").trigger(`${selector.substring(1)}:done`);
    }, 500);
  }
}
