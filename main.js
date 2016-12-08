function priceCalculator(basePrice, numberPeopleOnJob, material) {

    var flatMarkupRate = 0.05;
    var peopleMarkupRate = 0.012;

    var basePricePlusFlatMarkup = basePrice * (1 + flatMarkupRate);

    if (material.toLowerCase() == 'drugs') {
        return basePricePlusFlatMarkup * (1 + (peopleMarkupRate * numberPeopleOnJob) + 0.075);
    } else if (material.toLowerCase() == 'food') {
        return basePricePlusFlatMarkup * (1 + (peopleMarkupRate * numberPeopleOnJob) + 0.13);
    } else if (material.toLowerCase() == 'electronics') {
        return basePricePlusFlatMarkup * (1 + (peopleMarkupRate * numberPeopleOnJob) + 0.02);
    } else {
        return basePricePlusFlatMarkup * (1 + (peopleMarkupRate * numberPeopleOnJob));
    }
}

var basePrice = process.argv[2];
var numberPeopleOnJob = process.argv[3];
var material = process.argv[4];

if (isNaN(basePrice)) {
    console.log('Please enter a numeric value for the base price.')
} else if (isNaN(numberPeopleOnJob) || Number.isInteger(numberPeopleOnJob) == false) {
    console.log('Please enter an integer for the number of people on the job.') 
} else {
    var totalPrice = priceCalculator(basePrice, numberPeopleOnJob, material).toFixed(2);
    console.log('Total Price: $' + totalPrice);
}


