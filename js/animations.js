// Activate fadeUp on scroll
window.addEventListener("scroll", fadeUp);

function fadeUp() {
    const fadeUps = document.querySelectorAll(".fadeUp");
    for (let i = 0; i < fadeUps.length; i++){
        let windowHeight = window.innerHeight;
        let fadeUpTop = fadeUps[i].getBoundingClientRect().top;
        let fadeUpPoint = 100;

        if (fadeUpTop < windowHeight - fadeUpPoint) {
            fadeUps[i].classList.add("fadeUpOnScroll")
        } else {
            fadeUps[i].classList.remove("fadeUpOnScroll");
        }
    }
}

// Activate fadeLeft on scroll
window.addEventListener("scroll", fadeLeft);

function fadeLeft() {
    const fadeLefts = document.querySelectorAll(".fadeLeft");
    for (let i = 0; i < fadeLefts.length; i++){
        let windowHeight = window.innerHeight;
        let fadeLeftTop = fadeLefts[i].getBoundingClientRect().top;
        let fadeLeftPoint = 150;

        if (fadeLeftTop < windowHeight - fadeLeftPoint) {
            fadeLefts[i].classList.add("fadeLeftOnScroll")
        } else {
            fadeLefts[i].classList.remove("fadeLeftOnScroll");
        }
    }
}

// Activate fadeLeft on scroll
window.addEventListener("scroll", fadeRight);

function fadeRight() {
    const fadeRights = document.querySelectorAll(".fadeRight");
    for (let i = 0; i < fadeRights.length; i++){
        let windowHeight = window.innerHeight;
        let fadeRightTop = fadeRights[i].getBoundingClientRect().top;
        let fadeRightPoint = 150;

        if (fadeRightTop < windowHeight - fadeRightPoint) {
            fadeRights[i].classList.add("fadeRightOnScroll")
        } else {
            fadeRights[i].classList.remove("fadeRightOnScroll");
        }
    }
}

// Activate fadeLeft on scroll
window.addEventListener("scroll", zoomOut);

function zoomOut() {
    const zoomOuts = document.querySelectorAll(".zoomOut");
    for (let i = 0; i < zoomOuts.length; i++){
        let windowHeight = window.innerHeight;
        let zoomOutTop = zoomOuts[i].getBoundingClientRect().top;
        let zoomOutPoint = 50;

        if (zoomOutTop < windowHeight - zoomOutPoint) {
            zoomOuts[i].classList.add("zoomOutOnScroll")
        } else {
            zoomOuts[i].classList.remove("zoomOutOnScroll");
        }
    }
}

// Activate rotate Anticlockwise on scroll
window.addEventListener("scroll", rotateA);

function rotateA() {
    const rotateAs = document.querySelectorAll(".rotateA");
    for (let i = 0; i < rotateAs.length; i++){
        let windowHeight = window.innerHeight;
        let rotateATop = rotateAs[i].getBoundingClientRect().top;
        let rotateAPoint = 50;

        if (rotateATop < windowHeight - rotateAPoint) {
            rotateAs[i].classList.add("rotateAOnScroll")
        } else {
            rotateAs[i].classList.remove("rotateAOnScroll");
        }
    }
}