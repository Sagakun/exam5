function supermarket(){
    
    let price = parseFloat(prompt("Заттың бағасын енгізіңіз:"));
    let quantity = parseInt(prompt("Сатып алғыңыз келетін заттың санын енгізіңіз:"));


    let total = price * quantity;


    let discount = 0;
    if (total > 20000) {
        discount = 0.3;
    } else if (total > 10000) {
        discount = 0.2; 
    } else if (total > 5000) {
        discount = 0.1; 
    }


    let discountAmount = total * discount;
    let finalPayment = total - discountAmount;


    console.log(`Жалпы құн: ${total.toFixed(2)} тг`);
    console.log(`Жеңілдік: ${discountAmount.toFixed(2)} тг`);
    console.log(`Соңғы төлем: ${finalPayment.toFixed(2)} тг`);
    alert(`Жалпы құн: ${total.toFixed(2)} тг\nЖеңілдік: ${discountAmount.toFixed(2)} тг\nСоңғы төлем: ${finalPayment.toFixed(2)} тг`);

}

supermarket()