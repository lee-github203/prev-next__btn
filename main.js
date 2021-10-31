var nowImg = 1;

document.getElementsByClassName("next-btn")[0].addEventListener("click", function () {
    document.getElementsByClassName("slide-container")[0].style.transform = "translateX(-" + nowImg + "00vw)";
    if (nowImg < 3) {
        nowImg += 1;
    }
});

document.getElementsByClassName("prev-btn")[0].addEventListener("click", function () {
    document.getElementsByClassName("slide-container")[0].style.transform = "translateX(-" + (nowImg - 1) + "00vw)";
    if (nowImg > 1) {
        nowImg -= 1;
    }
});
