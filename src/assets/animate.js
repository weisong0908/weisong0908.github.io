import $ from "jquery";

export default function () {
    const heroTitle1 = "Hi, I'm Wei Song -";
    const heroTitle2 = "I'm a web developer based in Singapore.";

    const playTitleAnimation = sessionStorage.getItem("play-title-animation");

    if (playTitleAnimation == null || playTitleAnimation == true) {
        clearTitles();
        animateText(heroTitle1, ".hero-title-1", 1500);
    } else {
        $(".hero-title-1").html(heroTitle1);
        $(".hero-title-2")
            .html(heroTitle2)
            .append("<span class='caret' aria-hidden='true'></span>");
    }

    $(".hero-container").on("hero-title-1:done", (event) => {
        $(".caret").remove();
        $(".hero-title-2").append("<span class='caret' aria-hidden='true'></span>");
        animateText(heroTitle2, ".hero-title-2", 1000);
    });

    $(".hero-container").on("hero-title-2:done", (event) => {
        sessionStorage.setItem("play-title-animation", false);
        $(".play-animation-btn").show();
    });

    $(".play-animation-btn").on("click", (event) => {
        event.preventDefault();
        sessionStorage.setItem("play-title-animation", true);
        clearTitles();
        animateText(heroTitle1, ".hero-title-1", 500);
    });
};

function clearTitles() {
    $(".hero-title-1")
        .empty()
        .append("<span class='caret' aria-hidden='true'></span>");
    $(".hero-title-2").empty();
    $(".play-animation-btn").hide();
}

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