let randomChar = ["w", "&", "h", "a", ">","i","!","T","P","d","q","s","l","H"]



document.querySelector(".btn").addEventListener("click", randomNumbersResult);

function randomNumbersResult(){

    document.querySelectorAll(".split-item").forEach(x => {
        x.innerHTML = "";
        for (i=0; i<randomChar.length; i++){
            let randomNum = Math.floor(Math.random() * randomChar.length);
            randomChar[randomNum];
            x.innerHTML += randomChar[randomNum];
        }
    })   

    
}

//copy to clipboard

document.querySelectorAll(".split-item").forEach(x => {
    x.addEventListener("click", copyPassword)
})

function copyPassword(){
    navigator.clipboard.writeText(this.innerHTML)
    console.log(this.innerHTML);
}