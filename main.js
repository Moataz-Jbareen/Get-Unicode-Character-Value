function detectChar(){
    let input = document.getElementById("inputType");
    let char=input.value;
    if(char.length==0){
        alert("Please enter a character");
    }else{
        const unicodeValue=char.charCodeAt(0);
        const result = ` The Unicode Value of "${char}" is ${unicodeValue}`;
        document.getElementById("result").textContent = result;
    }
    }
     
