// HEAD_CART-LIST
let getCart = document.querySelector(".right__cart-box");

getCart.onclick = function() {hiddenF()};

function hiddenF() {
    document.querySelector(".right__cart-list-item").classList.toggle("show")
}

// Country 
let getCountry = document.querySelector(".right__country-box");

getCountry.onclick = () => {
    handleCountry();
}

function handleCountry() {
    document.querySelector(".right__country-sub-box").classList.toggle("showCountry");
}

// Nav Mobile 
let menuMobile = document.querySelector(".head__mobile-nav span");
menuMobile.addEventListener("click", () => {
    let modalMobile = document.querySelector("#modal-mobile");
    let modalMbWrapper = document.querySelector(".modal-mobile-wrapper");

    modalMobile.style.visibility = "unset";
    modalMbWrapper.style.transform = "translateX(0)";
   
    document.querySelector(".nav-mobile-close").addEventListener("click", () => {
        modalMobile.style.visibility = "hidden";
        modalMbWrapper.style.transform = "translateX(-100%)";
    })

    modalMobile.addEventListener("click", () => {
        modalMobile.style.visibility = "hidden";
        modalMbWrapper.style.transform = "translateX(-100%)";
        modalMbWrapper.addEventListener("click", (e) => {
            e.stopPropagation();
        })
    })
})

// Slider
let sliderFirstImgWidth = document.querySelectorAll(".slider-main img")[0].clientWidth + 5;
let sliderMain = document.querySelector(".slider-main");
let sliderIcons = document.querySelectorAll("#slider-wrapper span");
sliderIcons.forEach((sliderIcon) => {
    sliderIcon.addEventListener("click", () => {
        sliderMain.scrollLeft += sliderIcon.id == "prev" ? -sliderFirstImgWidth : sliderFirstImgWidth;
    })
})

// SLIDER AUTO
let sliderImgs = [
    "./imgs/food-slider_5.jpg",
    "./imgs/food-slider_8.jpg",
    "./imgs/food-slider_6.jpg"
];

var sliderImg = document.querySelector(".slider-main img");

var i = 1;

function sliderShowAuto() {
    sliderImg.setAttribute("src", sliderImgs[i]);
    i++;
    if(i == sliderImgs.length) {
        i= 0;
    }

} 

setInterval(sliderShowAuto, 5000);


// SLIDER HIDDEN
function openNav() {
    let getNavList = document.querySelector(".nav__list");
    getNavList.classList.toggle("show");
}

window.addEventListener("load", function() {
    const sliderBox = document.querySelector(".content__products-box");
    
    // Draggble Image
    let isDragStart = false, isDragging = false,  prevPageX, prevScrollLeft, positionDiff;

    const autoSlider = () => {
        // if there is no image left to scroll then return from here
        if(sliderBox.scrollLeft == (sliderBox.scrollLeft - sliderBox.clientWidth)) return;

        positionDiff = Math.abs(positionDiff);
        let sliderFirstItemWidth = sliderFirstItem.clientWidth;
        // getting difference value that needs to add or reduce from carousel left  to take middle img center
        let valDifference = sliderFirstItemWidth - positionDiff;

        if(sliderBox.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
            return sliderBox.scrollLeft += positionDiff > sliderFirstItemWidth / 3 ? valDifference : -positionDiff;
        }
        // if user scrolling to the left
        sliderBox.scrollLeft -= positionDiff > sliderFirstItemWidth / 3 ? valDifference : -positionDiff;
    }
    
    const dragStart = (e) => {
        // updating global variables value on mouse down event
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = sliderBox.scrollLeft;
    }
    
    // scrolling images to left according to mouse pointer
    const dragging = (e) => {
        if(!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        sliderBox.classList.add("dragging");
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        sliderBox.scrollLeft = prevScrollLeft - positionDiff;
    }

    const dragStop = () => {
        sliderBox.classList.remove("dragging");
        isDragStart = false;
        if(!isDragging) return;
        isDragging = false;
        autoSlider();
    }
    
    sliderBox.addEventListener("mousedown", dragStart); //Khi đè chuột xuống
    sliderBox.addEventListener("touchstart", dragStart); //Khi chạm vào màn hình cảm ứng

    sliderBox.addEventListener("mousemove", dragging);//Khi di chuyển chuột 
    sliderBox.addEventListener("touchmove", dragging);//Khi di chuyển ở màn hình cảm ứng

    sliderBox.addEventListener("mouseup", dragStop); // Khi thả chuột
    sliderBox.addEventListener("mouseleave", dragStop); // Khi con trỏ chuột được di chuyển ra khỏi phần tử đó
    sliderBox.addEventListener("touchend", dragStop); // Khi con trỏ chuột được di chuyển ra khỏi phần tử đó trên cảm ứng
    
    
    // Next and Prev
    
    const arrowIcons = document.querySelectorAll(".content__products-arrow span");
    const sliderFirstItem = document.querySelectorAll(".content__products-list .content__products-list-item")[0];
    arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            let sliderFirstItemWidth = sliderFirstItem.clientWidth;
            sliderBox.scrollLeft += icon.id == "slider-left" ? -sliderFirstItemWidth : sliderFirstItemWidth;
        })
    })


    // const sliderItemWidth = sliderItems[0].offsetWidth;
    // const sliderItemLength = sliderItems.length;
    // let positionX = 0;
    // let index = 0;


    // sliderNext.addEventListener("click", function() {
    //     sliderHandle(1)
    // });

    // sliderPrev.addEventListener("click", function() {
    //     sliderHandle(-1)
    // });

    // function sliderHandle(direction) {
    //     if(direction ===1 ) {
    //         if(index >= sliderItemLength - 4) {
    //             index = sliderItemLength - 4
    //             return;
    //         };
    //         positionX = positionX - sliderItemWidth;
    //         sliderWrap.style = `transform: translateX(${positionX}px)`;
    //         index++;
    //     } else if(direction === -1) {
    //         if(index <= 0) {
    //             index = 0;
    //             return;
    //         }
    //         positionX = positionX + sliderItemWidth;
    //         sliderWrap.style = `transform: translateX(${positionX}px)`;
    //         index--;
    //     }
    
    // }
});

// MODAL 
let getProductsName = document.querySelectorAll(".content__products-text");
let getProductsSalePrice = document.querySelectorAll(".content__sale-price");
let getProductsPrimePrice = document.querySelectorAll(".content__prime-price");
let getModalBtn =  document.querySelectorAll(".content__add-cart");
let getModal = document.querySelector("#modal");
let getModalBlock = document.querySelector(".modal__block");
let getModalClose = document.querySelector(".modal__close");
let getModalPriceBox = document.querySelector(".modal__price-box");
let modalProductsSale = document.querySelector(".modal__sale-price");
let modalProductsPrime = document.querySelector(".modal__prime-price");



    for(let i = 0; i < getModalBtn.length; i++) {
        getModalBtn[i].addEventListener("click", function() {
            getModal.style.display = "block";
            getModalBlock.style.transform = "unset";
            getModal.style.visibility = "unset";    
            getModalBlock.style.animation = "modalOpen .2s ease";
            let getProductImg = this.parentElement.childNodes[1].childNodes[1].getAttribute("src");
            document.querySelector(".modal__img").setAttribute("src", getProductImg);
            let getProductName = this.parentElement.childNodes[3].textContent;
            let getProductSalePrice = this.parentElement.childNodes[5].childNodes[1].textContent;
            let getProductPrimePrice = this.parentElement.childNodes[5].childNodes[3].textContent;
            document.querySelector(".modal__right-name").innerText = getProductName;
            modalProductsSale.innerText = getProductSalePrice;
            modalProductsPrime.innerText = getProductPrimePrice;
        })
    }

 
getModalClose.addEventListener("click", function() {
    getModalBlock.style.transform = "translateY(-165%)";
    getModal.style.visibility = "hidden";
})
getModal.addEventListener("click", function() {
    getModalBlock.style.transform = "translateY(-165%)";
    getModal.style.visibility = "hidden";    
})

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape'){
        getModalBlock.style.transform = "translateY(-165%)";
        getModal.style.visibility = "hidden";
    }
  })

getModalBlock.addEventListener("click", function(e) {
    e.stopPropagation();
})

// Continue shopping hidden
document.querySelector(".modal__cart-btn-right").addEventListener("click", function() {
    hiddenModal();
})

function hiddenModal() {
    getModalBlock.style.transform = "translateY(-165%)";
    getModal.style.visibility = "hidden";
}