function calculator() {
    let num1, num2;

   
    function getNumberInput(promptMessage) {
        let input;
        do {
            input = prompt(promptMessage);
            if (isNaN(input) || input === null || input.trim() === "") {
                alert("Қате енгізу! Сан енгізу керек.");
            } else {
                return parseFloat(input);
            }
        } while (true);
    }

  
    num1 = getNumberInput("Бірінші санды енгізіңіз:");
    num2 = getNumberInput("Екінші санды енгізіңіз:");

  
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num2 !== 0 ? (num1 / num2).toFixed(2) : "Бөлу мүмкін емес (0-ге бөлу)";

    alert(`
    Қосынды: ${sum}
    Айырма: ${difference}
    Көбейтінді: ${product}
    Бөлінді: ${quotient}
    `);
}


calculator();
