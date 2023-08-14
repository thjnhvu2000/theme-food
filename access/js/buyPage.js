// LOGIN PAGE
window.addEventListener("load",function(){
    let getLoginPage = document.querySelector(".content__left-login");
    let getAddressnPage = document.querySelector(".content__left-address");
    let getForm1Page = document.querySelector(".content__form-1");
    let getForm2Page = document.querySelector(".content__form-2");
    
    if (!getLoginPage){ return false;}
    getLoginPage.addEventListener("click", function() {
        getForm1Page.style.display = "none";
        getForm2Page.style.display = "block";
        getLoginPage.style.backgroundColor = "#fff";
        getAddressnPage.style.backgroundColor = "#dad6d6";
    })

    if (!getAddressnPage){ return false;}
    getAddressnPage.addEventListener("click", function() {
        getForm2Page.style.display = "none";
        getForm1Page.style.display = "block";
        getLoginPage.style.backgroundColor = "#dad6d6";
        getAddressnPage.style.backgroundColor = "#fff";
    })
})

let getFname = document.querySelector(".input__pair-1 input[id='fullName']");
 let getFnameValue;
getFname.oninput = (e) => {
    getFnameValue = e.target.value;
}

let getRegion = document.querySelector(".input__pair-2 select[id='region']");
let getRegionValue;

getRegion.onchange = (e) => {
    getRegionValue = e.target.value;
}

