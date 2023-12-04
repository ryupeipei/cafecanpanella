const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


document.addEventListener("DOMContentLoaded", function (event) {
    let elements = document.getElementsByClassName("js-text-anime");
    for (var i = 0; i < elements.length; i++) {
        animateText(elements[i]);
    }
});

function animateText(element) {
    let text = element.innerText;
    element.innerText = "";

    for (var i = 0; i < text.length; i++) {
        var span = document.createElement("span");
        span.innerText = text[i];
        element.appendChild(span);
    }

    let spans = element.getElementsByTagName("span");
    for (var j = 0; j < spans.length; j++) {
        (function (index) {
            setTimeout(function () {
                spans[index].style.opacity = 1;
            }, index * 200); // 遅延時間を調整したい場合はここの数値を変更してください
        })(j);
    }
}


const fadeInTarget = document.querySelectorAll('.fadeInTarget');

function observation() {
    // 各要素に対して処理を繰り返す
    fadeInTarget.forEach(function (target) {
        // 要素の位置情報を取得
        const targetRect = target.getBoundingClientRect();

        // 画面内に入っているかどうかを判定
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            // 画面内に入った場合、クラスを付与
            target.classList.add('animate__fadeInRight'); // yourClassNameは付与したいクラス名に置き換えてください
        } else {
            // 画面外に出た場合、クラスを除去
            target.classList.remove('animate__fadeInRight');
        }
    });
};

// スクロールイベントを追加
window.addEventListener('scroll', observation);



// kuakkaImgのアニメーション
const targets1 = document.querySelectorAll('.kuakkaImg01');
const targets2 = document.querySelectorAll('.kuakkaImg02');
const targets3 = document.querySelectorAll('.kuakkaImg03');
function observation() {

    targets1.forEach(function (target) {

        const targetRect = target.getBoundingClientRect();
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            target.classList.add('animate__flip');
        } else {
            target.classList.remove('animate__flip');
        }
    })

    targets2.forEach(function (target) {

        const targetRect = target.getBoundingClientRect();
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            target.classList.add('animate__flipInY');
        } else {
            target.classList.remove('animate__flipInY');
        }
    })

    targets3.forEach(function (target) {

        const targetRect = target.getBoundingClientRect();
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            target.classList.add('animate__zoomOutLeft');
        } else {
            target.classList.remove('animate__zoomOutLeft');
        }
    })
};

window.addEventListener('scroll', observation);


// const kuakka02 = document.querySelectorAll('.kuakkaImg02');
// function observation() {

//     targets.forEach(function (target) {

//         const targetRect = target.getBoundingClientRect();
//         if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
//             target.classList.add('animate__hinge');
//         } else {
//             target.classList.remove('animate__hinge');
//         }
//     })
// };

// window.addEventListener('scroll', observation);





