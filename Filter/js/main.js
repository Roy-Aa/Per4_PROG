let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");

setInterval(function(){
}, 1500);

for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}




filters[0].onchange = function(){
    if(filters[0].checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "action"){
                allGames[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "action"){
                allGames[i].style.display = "none"
            }
        }
    }
}

filters[1].onchange = function(){
    if(filters[1].checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "adventure"){
                allGames[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "adventure"){
                allGames[i].style.display = "none"
            }
        }
    }
}

filters[2].onchange = function(){
    if(filters[2].checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "openworld"){
                allGames[i].style.display = "block"
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "openworld"){
                allGames[i].style.display = "none"
            }
        }
    }
}
