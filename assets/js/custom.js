
let switcherLis = document.querySelectorAll('.switcher button');
let imgs = Array.from(document.querySelectorAll('.all'));
switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});

function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove('active');
        this.classList.add('active');
    });
};

function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = 'none';
        document.querySelectorAll(this.dataset.cat).forEach((ele) => {
            ele.style.display = 'block';
        })
    })
}

let goToTop = document.querySelector('.go-to-top .go-to-top-icon ');
window.addEventListener('scroll', goTop);
function goTop() {
    if (window.pageYOffset >= 500) {
        goToTop.style.display = "flex";
    } else {
        goToTop.style.display = "none";
    }
};
goToTop.addEventListener('click', topGo);
function topGo() {
    window.scrollTo(0, 0)
};

// let links = document.querySelectorAll(".navbar .navbar-nav .nav-item .nav-link");
// links.forEach((li) => {
//     li.addEventListener("click", removeActiveFromLinks);
// });

// function removeActiveFromLinks() {
//     links.forEach((li) => {
//         li.classList.remove('active');
//         this.classList.add('active');
//     });
// };


const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar-nav .nav-item");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(`${current}-n`)) {
            li.classList.add("active");
        }
    });
});