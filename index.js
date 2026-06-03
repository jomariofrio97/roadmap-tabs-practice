function handleClick(event) {
    let el = document.getElementById(event.target.id);
    
    el.addEventListener("click", showAlert(event.target.id))
}

function showAlert( element ){
    console.log(element);
    let el = document.getElementsByClassName("tab-item");

    for (let i = 0; i < el.length; i++){
        if(el[i].className.includes("active")) {
            el[i].classList.remove("active");
            break;
        }
    }
    document.getElementById(element).classList.add("active")
    if (element.includes(1)) {
        let dashboard = document.getElementById("dashboard");
        dashboard.textContent="Tab 1";
    } else if (element.includes(2)) {
        let dashboard = document.getElementById("dashboard");
        dashboard.textContent="Tab 2";
    } else if (element.includes(3)) {
        let dashboard = document.getElementById("dashboard");
        dashboard.textContent="Tab 3";
    } else if (element.includes(4)) {
        
    }
}  

function load() {
    let el = document.getElementsByClassName("tab-item");

    for (let i = 0; i < el.length; i++){
        el[i].addEventListener("click", handleClick);
    }
}


document.addEventListener('DOMContentLoaded', load, false);