const addToCartButtons = document.getElementsByClassName("games__button");
let cartMessage = 0;
const cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIsOpen = false;
let buzz = 0;
let darth = 0;
let c3po = 0;

for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].onclick = function(){
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch(addToCartButtons[i].dataset.product){
            case "buzz":
                buzz += 1;
                break

            case "darth":
                darth += 1;
                break
            case "c3po":
                c3po += 1;
                break
        }
        if(modalIsOpen === false){
            shoppingModal.style.display = "flex";
            modalIsOpen = true;
            setTimeout(function(){
                shoppingModal.style.display = "none";
                modalIsOpen = false;
            },2000);
        }
    }
}

const checkoutButton = document.getElementById("js--checkoutButton")
const checkoutWindow = document.getElementById("js--checkoutWindow")
const searchBar = document.getElementById("js--searchBar");
let checkoutIsOpen = false;
checkoutButton.onclick = function(){
    if(checkoutIsOpen === false){
        document.querySelector("main").style.display = "none"
        checkoutWindow.style.display = "block"
        checkoutIsOpen = true;
        document.getElementById("js--amount-buzz").innerHTML = buzz + "x";
        document.getElementById("js--amount-darth").innerHTML = darth + "x";
        document.getElementById("js--amount-c3po").innerHTML = c3po + "x";
        searchBar.style.display = "none"
        document.getElementsByClassName("searchBar__glass")[0].style.display = "none"
        return;
    }
    document.querySelector("main").style.display = "block";
    checkoutWindow.style.display = "none";
    checkoutIsOpen = false;
    searchBar.style.display = "block"
        document.getElementsByClassName("searchBar__glass")[0].style.display = "flex"
}



const games = document.getElementsByClassName("games__game")
searchBar.onkeyup = function(event){
    if(event.keyCode === 13){
        for(let i = 0; i < games.length; i++){
        if(games[i].dataset.title.search(searchBar.value.toUpperCase()) === -1){
            games[i].style.opacity = 0.3;

        }
        else{
            games[i].style.opacity = 1;
        }
        }
    }
}


let observer = new IntersectionObserver(
    function(entries){
        if(entries[0].isIntersecting === true){
            document.getElementsByTagName("main")[0].classList.add("a-popup");
            observer.disconnect()
        }
        else{
            console.log("voor minder dan 50% in beeld")
        }
    }, {
        threshold: 0.5,
    }
)

observer.observe(document.getElementsByTagName("main")[0]);