// HEAD_CART-LIST
let getCart = document.querySelector(".right__cart-box");

getCart.onclick = function() {hiddenF()};

function hiddenF() {
    getCartList = document.querySelector
    (".right__cart-list-item").classList.toggle("show")
}


// Slider
let imgs = [
    "./imgs/food-slider_5.jpg",
    "./imgs/food-slider_8.jpg",
    "./imgs/food-slider_6.jpg"
];

let num = 0;

function next() {
    let slider = document.querySelector(".slider-img");
    num++;
    if(num >= imgs.length) {
        num = 0;
    }

    slider.setAttribute("src", `${imgs[num]}`);
}

function prev() {
    let slider = document.querySelector(".slider-img");
    num--;
    if(num < 0) {
        num = imgs.length - 1;
    }
    slider.setAttribute("src", `${imgs[num]}`);

}


// SLIDER AUTO
var imgSlider = document.querySelector(".slider-img");

var i = 1;

function sliderShowAuto() {
    imgSlider.setAttribute("src", imgs[i]);
    i++;
    if(i == imgs.length) {
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


// let apiLink = 'https://jsonplaceholder.typicode.com/posts'

// fetch(apiLink)
// .then((response) => {
//     return response.json();
// })

// .then((comments) => {
//     let htmls = comments.map((comment) => {
//         return `<li>
//         <h1>User id: ${comment.id}</h1>
//         <p>Title: ${comment.title}</p>
//         </li>`

//     })
//     let html = htmls.join('');
//     document.querySelector("#test-block").innerHTML = html;
// })
