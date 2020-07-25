$(document).ready(() => {
  const heroTitle1 = "Hi, I'm Wei Song";

  animateText(heroTitle1, ".animate-text-1");
});

function animateText(title, selector) {
  typeWrite(title, selector, 0);
}

function typeWrite(text, selector, i) {
  if (i < text.length) {
    $(selector)
      .text(text.substring(0, i + 1))
      .append("<span class='caret' aria-hidden='true'></span>");

    setTimeout(function () {
      typeWrite(text, selector, i + 1);
    }, 60);
  }
}
