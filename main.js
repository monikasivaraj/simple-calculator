let outputScreen = document.querySelector("#inputab");

function display(num){
    outputScreen.value += num
}

function calculate(){
    try{
        outputScreen.value=eval(outputScreen.value)
    }
    catch{
        alert("invalid")
    }
}

function clearall()
{
    outputScreen.value=''
}

function delet()
{
   outputScreen.value=outputScreen.value.slice(0,-1)
}