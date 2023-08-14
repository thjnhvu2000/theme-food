
let getPayMess = document.querySelector(".content__pay-method-list .content__pay-messenger")
var getPayList = document.querySelectorAll(".content__pay-method-list li");
const [a, ...rest] = getPayList;
a.addEventListener("click", function() {
    this.style.borderColor = "rgb(242, 159, 5)";
    getPayMess.style.display = "block"
    for(let value of rest) {
        value.style.borderColor = "unset";
    }

    let newArray = [getPayTable, getPayMess2, getPayMess3, getPayMess4];
    for(let item of newArray) {
        item.style.display = "none";
    }
})

let getPayTable = document.querySelector(".content__pay-method-table");
const [ , b, ...rest2] = getPayList;
b.addEventListener("click", function() {
    this.style.borderColor = "rgb(242, 159, 5)";
    getPayTable.style.display = "block";
    rest2.unshift(a);
    for(let value of rest2) {
        value.style.borderColor = "unset";
    }
    let newArray = [getPayMess, getPayMess2, getPayMess3, getPayMess4];
    for(let item of newArray) {
        item.style.display = "none";
    }
})

let getPayMess2 = document.querySelector(".content__pay-method-list .content__pay-messenger-2")
const [ , , c, ...rest3] = getPayList;
c.addEventListener("click", function() {
    this.style.borderColor = "rgb(242, 159, 5)";
    getPayMess2.style.display = "block";
    rest3.unshift(a, b);
    for(let value of rest3) {
        value.style.borderColor = "unset";
    }
    let newArray = [getPayMess, getPayTable, getPayMess3, getPayMess4];
    for(let item of newArray) {
        item.style.display = "none";
    }
})


let getPayMess3 = document.querySelector(".content__pay-method-list .content__pay-messenger-3")
const [ , , , d, ...rest4] = getPayList;
d.addEventListener("click", function() {
    this.style.borderColor = "rgb(242, 159, 5)";
    getPayMess3.style.display = "block";
    rest4.unshift(a, b, c);
    for(let value of rest4) {
        value.style.borderColor = "unset";
    }
    let newArray = [getPayMess, getPayTable, getPayMess2, getPayMess4];
    for(let item of newArray) {
        item.style.display = "none";
    }
})

let getPayMess4 = document.querySelector(".content__pay-method-list .content__pay-messenger-4")
const [ , , , , e , ...rest5] = getPayList;
e.addEventListener("click", function() {
    this.style.borderColor = "rgb(242, 159, 5)";
    getPayMess4.style.display = "block";
    rest5.unshift(a, b, c, d);
    for(let value of rest5) {
        value.style.borderColor = "unset";
    }
    let newArray = [getPayMess, getPayTable, getPayMess2, getPayMess3];
    for(let item of newArray) {
        item.style.display = "none";
    }
})

