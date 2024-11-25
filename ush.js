function game(){
    
const hiddenNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let guess; 
console.log("1 мен 100 арасындағы санды табыңыз!");


while (guess !== hiddenNumber) {
    
    guess = parseInt(prompt("Сіздің болжамыңыз қандай?"), 10);
    attempts++; 

   
    if (guess === hiddenNumber) {
        console.log(`Дұрыс! Сіз ${attempts} әрекеттен кейін таптыңыз.`);
        alert(`Дұрыс! Сіз ${attempts} әрекеттен кейін таптыңыз.`);
        break; 
    } else if (Math.abs(guess - hiddenNumber) <= 5) {
        
        if (guess < hiddenNumber) {
            console.log("Сәл жоғары");
            alert("Сәл жоғары");
        } else {
            console.log("Сәл төмен");
            alert("Сәл төмен");
        }
    } else {
       
        if (guess < hiddenNumber) {
            console.log("Жай жоғары");
            alert("Жай жоғары");
        } else {
            console.log("Жай төмен");
            alert("Жай төмен");
        }
    }
}

}

game()