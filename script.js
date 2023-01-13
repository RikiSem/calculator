let line = "";
let task = [];
let operands = [];
let theme = "black";

function selectNum(btn){
    if(btn.innerText == "=" || btn.innerText == "<=" || btn.innerText == "AC"){
        
    }else{
        line += btn.innerText;
        document.getElementById("showActions").value = line;
    }
}
function showResult(){
    let result = eval(line);
    document.getElementById("showResultText").value = result;
}
function clearLine(){
    line = "";
    document.getElementById("showResultText").value = "";
    document.getElementById("showActions").value = "";
}
function deleteSimbol(){
    let tmpLIne = "";
    for(i = 0; i != line.length - 1; i ++){
        tmpLIne += line[i];
    }
    line = tmpLIne;
    document.getElementById("showActions").value = line;
    tmpLIne = "";
}
function switchTheme(){
    if(theme == "black"){
        theme = "white";
        document.getElementById("showActions").style.backgroundColor = "white";
        document.getElementById("showResultText").style.backgroundColor = "white";
        document.getElementById("showActions").style.color = "black";
        document.getElementById("showResultText").style.color = "black";
        document.getElementById("body").style.backgroundColor = "grey";
        document.getElementById("calcBody").style.backgroundColor = "white";
        document.getElementById("showResult").style.backgroundColor = "white";
        document.getElementById("control").style.backgroundColor = "white";
        document.getElementById("btns").children;
        for(i = 0; i != document.getElementById("btns").childElementCount; i++){
            document.getElementById("btns").children[i].style.backgroundColor = "white";
            document.getElementById("btns").children[i].style.color = "black";
            document.getElementById("btns").children[i].style.color = "black";
        }
        document.getElementById("themeBtn").style.backgroundColor = "white";
        document.getElementById("themeBtn").style.color = "black";
        document.getElementById("themeBtn").innerText = "темная тема";
    }else if(theme == "white"){
        theme = "black";
        document.getElementById("showActions").style.backgroundColor = "grey";
        document.getElementById("showResultText").style.backgroundColor = "grey";
        document.getElementById("showActions").style.color = "white";
        document.getElementById("showResultText").style.color = "white";
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("calcBody").style.backgroundColor = "grey";
        document.getElementById("showResult").style.backgroundColor = "grey";
        document.getElementById("control").style.backgroundColor = "grey";
        document.getElementById("btns").children;
        for(i = 0; i != document.getElementById("btns").childElementCount; i++){
            document.getElementById("btns").children[i].style.backgroundColor = "grey";
            document.getElementById("btns").children[i].style.color = "white";
            document.getElementById("btns").children[i].style.color = "white";
        }
        document.getElementById("themeBtn").style.backgroundColor = "grey";
        document.getElementById("themeBtn").style.color = "white";
        document.getElementById("themeBtn").innerText = "светлая тема";
    }
}