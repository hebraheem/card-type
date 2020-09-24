let card = document.getElementById("card");
let type = document.getElementById("type");
let text = document.getElementById("text");
card.addEventListener('keyup', cardType)
function cardType() {
    if (!card.value) {
        type.innerHTML="PLS INPUT YOUR CARD NUMBER TO PROCEED"
    }
       else if ((card.value.startsWith(55) && card.value.length ==16 || (card.value.startsWith(55) && card.value.length == 2)) || (card.value.startsWith(51) && card.value.length == 16) || (card.value.startsWith(51) && card.value.length ==2)){
        text.style.display = "none"
        card.style.color = "blue"
        type.innerHTML = "MASTER CARD" 
    }  else if ((card.value.startsWith(50) && (card.value.length ==16) || (card.value.startsWith(50) && card.value.length == 2)) || (card.value.startsWith(65) && (card.value.length ==16) || (card.value.startsWith(65)&& card.value.length ==2))){
        text.style.display = "none"
        card.style.color = "blue"
        type.innerHTML = "VERVE CARD" 
    } else if ((card.value.startsWith(40) && card.value.length ==16 ) || (card.value.startsWith(40) && card.value.length == 2)){
        text.style.display = "none"
        card.style.color = "blue"
        type.innerHTML = "VISA CARD" 
    } else if (card.value.startsWith(34) && (card.value.length ==16 || card.value.startsWith(34) && card.value.length == 2) || card.value.startsWith(37) && (card.value.length ==16) || card.value.startsWith(37) && card.value.length ==2){
        text.style.display = "none"
        card.style.color = "blue"
        type.innerHTML = "AMERICAN EXPRESS CARD" 
    } else {
        type.innerHTML = "INVALID CARD TYPE"
        text.style.display = "none"
        card.style.color = "red"
    }
}
