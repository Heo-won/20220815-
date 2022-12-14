// Scroll Animation (sa, 스크롤 애니메이션)
const saDefaultMargin = 300;
let saTriggerMargin = 0;
let saTriggerHeight = 0;
const saElementList = document.querySelectorAll(".sa");

const saFunc = function () {
    for (const element of saElementList) {
        if (!element.classList.contains("show")) {
            if (element.dataset.saMargin) {
                saTriggerMargin = parseInt(element.dataset.saMargin);
            } else {
                saTriggerMargin = saDefaultMargin;
            }

            if (element.dataset.saTrigger) {
                saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
            } else {
                saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
            }

            if (window.innerHeight > saTriggerHeight) {
                let delay = element.dataset.saDelay ? element.dataset.saDelay : 0;
                setTimeout(function () {
                    element.classList.add("show");
                }, delay);
            }
        }
    }
};

const scrollMove = (event) => {
    if (event.target.dataset.direction === "bottom") window.scrollBy(0, 1000);
    else if (event.target.dataset.direction === "top") window.scrollBy(0, -300);
};

document.querySelector(".btn").addEventListener("click", scrollMove);
window.addEventListener("load", saFunc);
window.addEventListener("scroll", saFunc);
window.addEventListener("scroll", () => {
    //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
    console.log(window.scrollX, window.scrollY);
});
