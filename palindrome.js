let numInput = document.querySelector("#string > input");
let resOutput = document.querySelector("#yesno > output");
//console.log(numInput);

numInput.addEventListener('input',function(){
    const num = numInput.value;
    const revenum = reversed(num);
    function reversed(num){
        num=num+"";
        return num.split("").reverse().join("");
    }
    //console.log(num===revenum);
    const final = finalF(num,revenum); 
    function finalF(a,b){
        return a===b;
    }
    document.getElementById("yesno").innerHTML = final;
});



ghj