let rec = new webkitSpeechRecognition();

rec.lang= "uz-UZ";


rec.onerror = function (err){
    console.log(err, "error")
}

rec.onend = function (){
    console.log("Aloqa tugadi")
}

rec.onresult = function(evt){
    let command = evt.results[0][0].transcript

    let newLi = document.createElement("li");
    newLi.textContent = command;
    list.appendChild(newLi);


    if(command === "qizil"){
        document.body.style.background ="red"
    }
    else if(command === "yashil"){
        document.body.style.background ="green"
    }
    else if(command === "qora"){
        document.body.style.background ="black"
    }

}

button.addEventListener("click", function(){
    rec.start()
})
