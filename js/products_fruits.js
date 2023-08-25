
// function hiddenFunc1() {
//     let getListJs1 = document.querySelector(".content__left-list-js1");
//     getListJs1.classList.toggle("hidden__nav");
//     let getIconArrow = document.querySelector(".content__left-title-icon");
//     getIconArrow.classList.toggle("toggle__nav");
// }

// function hiddenFunc2() {
//     let getListJs2 = document.querySelector(".content__left-list-js2");
//     getListJs2.classList.toggle("hidden__nav");
//     let getIconArrow = document.querySelector(".sub-icon-js");
//     getIconArrow.classList.toggle("toggle__nav");
// }

// function hiddenFunc3() {
//     let getListJs3 = document.querySelector(".content__left-list-js3");
//     getListJs3.classList.toggle("hidden__nav");
//     let getIconArrow = document.querySelector(".sub-icon-js2");
//     getIconArrow.classList.toggle("toggle__nav");
// }

// function hiddenFunc4() {
//     let getInput = document.querySelector(".content__left-key-input");
//     getInput.classList.toggle("hidden__nav");
//     getInput.style.animation = "modalOpen .3s ease";
    
//     let getIcon = document.querySelector(".content__left-key-ic > i");
//     if(getIcon.className == "fa-solid fa-plus") {
//         getIcon.className = "fa-solid fa-minus"
//     } else {
//         getIcon.className = "fa-solid fa-plus";
//     }
// }


// Price Input Range 
const rangeValue = document.querySelector("#rangeValue");
const inputRange = document.querySelector("#input-range");

rangeValue.textContent = inputRange.value + " $";
inputRange.addEventListener("input", (event) => {
    rangeValue.textContent = event.target.value + " $";
})

// function hiddenFunc5() {
//     let getRangeBox = document.querySelector(".content__left-range-box");
//     getRangeBox.classList.toggle("hidden__nav");
//     getRangeBox.style.animation = "modalOpen .3s ease";
    
//     let getIcon = document.querySelector(".content__left-range-ic > i");
//     if(getIcon.className == "fa-solid fa-plus") {
//         getIcon.className = "fa-solid fa-minus"
//     } else {
//         getIcon.className = "fa-solid fa-plus";
//     }
// }


// Collapsibles Đóng mở thanh nav
let getCtentNavBtn = document.querySelectorAll(".content__left-nav .content__left-nav_btn");
for(let i = 0; i < getCtentNavBtn.length; i++) {
    getCtentNavBtn[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let getNextElement = this.nextElementSibling;
        getNextElement.style.maxHeight ? 
        getNextElement.style.maxHeight = null : 
        getNextElement.style.maxHeight = getNextElement.scrollHeight + "px";
    })
}


let getCtenNavKey = document.querySelector(".content__left-key-box .content__left-key");
getCtenNavKey.addEventListener("click", function() {
    this.classList.toggle("active");
    let getNextElement = this.nextElementSibling;
        getNextElement.style.maxHeight ? 
        getNextElement.style.maxHeight = null : 
        getNextElement.style.maxHeight = getNextElement.scrollHeight + "px";
})


let getCtenNavPrice = document.querySelector(".content__left-price-box .content__left-key");
getCtenNavPrice.addEventListener("click", function() {
    this.classList.toggle("active");
    let getNextElement = this.nextElementSibling;
        getNextElement.style.maxHeight ? 
        getNextElement.style.maxHeight = null : 
        getNextElement.style.maxHeight = getNextElement.scrollHeight + "px";
})

let getCtenStatus = document.querySelector(".content__left-status-box .content__left-status");
getCtenStatus.addEventListener("click", function() {
    this.classList.toggle("minus");
    let getNextElement = document.querySelectorAll(".content__left-status_input-wrapper");
    for(let i = 0; i < getNextElement.length; i++) {
        if(getNextElement[i].style.maxHeight) {
            getNextElement[i].style.borderBottom = "unset";
            getNextElement[i].style.maxHeight = null;
        } else {
            getNextElement[i].style.borderBottom = "1px solid #d8d2d2";
            getNextElement[i].style.maxHeight = getNextElement[i].scrollHeight + "px";
        }
    }
})


let getCtenOrigin = document.querySelector(".content__left-origin-box .content__left-origin");
getCtenOrigin.addEventListener("click", function() {
    this.classList.toggle("origin-minus");
    let getNextElement = this.nextElementSibling;
        getNextElement.style.maxHeight ? 
        getNextElement.style.maxHeight = null : 
        getNextElement.style.maxHeight = getNextElement.scrollHeight + "px";
})


// let getCtVegetable1 = document.querySelector(".hide-appear1");
// let getCtVegetable2 = document.querySelector(".hide-appear2");
// let getCtPageBack = document.querySelector(".content__right-page-back");
// let getCtPageNext = document.querySelector(".content__right-page-next");
// let getCtPageOne = document.querySelector(".content__right-page-one");
// let getCtPageTwo = document.querySelector(".content__right-page-two");

// getCtPageTwo.addEventListener("click", function() {  
//     getCtVegetable1.classList.remove("appear");
//     getCtVegetable1.classList.add("hide");
//     getCtVegetable2.classList.replace("hide" , "appear");
// })

// getCtPageOne.addEventListener("click", function() {
//     getCtVegetable1.classList.replace("hide" , "appear");
//     getCtVegetable2.classList.remove("appear");
//     getCtVegetable2.classList.add("hide");
// })


let getCtPageBack = document.querySelector(".content__right-page-back");
let getCtPageNext = document.querySelector(".content__right-page-next");
let getCtPageOne = document.querySelector(".content__right-page-one");
let getCtPageTwo = document.querySelector(".content__right-page-two");

