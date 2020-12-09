var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var actualUrl = "https://api.funtranslations.com/translate/minion.json"


var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")


function getTranslationURL(text){
    return actualUrl + "?text=" + text;
}

function errorHandler(error){
    console.log("Error Occured : " + error);
}


function clickHandle(){
    var txt = textInput.value;
    console.log(txt);
    console.log(getTranslationURL(txt));
    fetch(getTranslationURL(txt)).then(response => response.json()).then(json => outputDiv.innerHTML = json.contents.translated).catch(errorHandler);
}

btnTranslate.addEventListener("click",clickHandle);
