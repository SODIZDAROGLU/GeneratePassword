
function getRandomLowerCase(){
    var lowerCaseLetters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var randomIndex=Math.floor(Math.random()*26);
    console.log(lowerCaseLetters[randomIndex] + " lowerCase")
    return lowerCaseLetters[randomIndex];
}
function getRandomUpperCase(){
    var upperCaseLetters=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var randomIndex=Math.floor(Math.random()*26);
    console.log(upperCaseLetters[randomIndex] + " UpperCase");
    return upperCaseLetters[randomIndex];
}
function getRandomChar(){
    var characters=["@","#","%","&","$"];
    var randomIndex=Math.floor(Math.random()*5);
    console.log(characters[randomIndex] + " character")
    return characters[randomIndex];
}
function getRandomNumbers(){
    var number=Math.floor(Math.random()*9);
   console.log(number + " number");
  return number
}

function createPassword(num){
    console.log("random number",num);

    switch (num) {
        
        case 0:
            var myChar = getRandomChar();
             return myChar;
           
        case 1:
            var myNumber = getRandomNumbers();
            return myNumber;
           
        case 2:
            var myLowerCase = getRandomLowerCase();
        return myLowerCase;

          
        case 3:
           var myUpperCase = getRandomUpperCase();
         return myUpperCase;
           

    
        default:
            break;
    }
    
     

}


document.getElementById("generate").addEventListener("click", displayPassword);

function displayPassword() {
    var passWordLength=parseInt(prompt("how many characters would like your password to contain?"));
    var finalPassword=[];
    
    if (passWordLength>=8 && passWordLength <=128){
        //debugger;
        for (var i=0; i< passWordLength; i++){
            var numtr = Math.floor(Math.random()*4);
          //console.log(numtr + " numtr")
          finalPassword.push(createPassword(numtr));
         
        }
                var confirmCharactersPassword=confirm('click OK to confirm including special characters');
                if (confirmCharactersPassword){
                
                }
                else{
                alert('you must have special character')
                    
                }
            
            var confirmNumericPassword=confirm('click OK to confirm including numeric characters');
            
                if (confirmNumericPassword){
    
    
                }
                else {
                alert('you must have numaric characters');
                }
    
                var confirmLowerCase=confirm('click OK to confirm including lower case characters');
                    if (confirmLowerCase){
    
    
                }
                else {
                ('you must have lower case characters');
    
                }
            
            var confirmUpperCase=confirm('click OK to confirm including upper case characters');
            if (confirmUpperCase){
                
            }
            else {
                alert('you must have upper case characters');
            }
    }
    else {
        alert('it must have min 8 and max 128 and Password length must be provided as a number');
       
     
    }
    
var generatorPassword=finalPassword.join("");
console.log("my final password is :  ",generatorPassword); 

  document.getElementById("password").innerHTML = generatorPassword;
}
