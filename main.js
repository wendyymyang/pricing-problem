function priceCalculator(basePrice, numberPeopleOnJob, material) {
    var flatMarkupRate = 0.05;
    var peopleMarkupRate = 0.012;

    var basePricePlusFlatMarkup = basePrice * (1 + flatMarkupRate);

    var materialInLowerCase = material.toLowerCase();

    if (materialInLowerCase == 'drugs') {
        return basePricePlusFlatMarkup * (1 + (peopleMarkupRate * numberPeopleOnJob) + 0.075);
    } else if (materialInLowerCase == 'food') {
        return basePricePlusFlatMarkup * (1 + (peopleMarkupRate * numberPeopleOnJob) + 0.13);
    } else if (materialInLowerCase == 'electronics') {
        return basePricePlusFlatMarkup * (1 + (peopleMarkupRate * numberPeopleOnJob) + 0.02);
    } else {
        return basePricePlusFlatMarkup * (1 + (peopleMarkupRate * numberPeopleOnJob));
    }
}

var basePrice = process.argv[2];
var numberPeopleOnJob = process.argv[3];
var material = process.argv[4];

if (process.argv.length < 5) {
    console.log('Please enter the base price, the number of people on the job, and the material used.');
} else {
    if (isNaN(basePrice)) {
        console.log('Please enter a numeric value for the base price.');
    } else if (numberPeopleOnJob % 1 != 0) {
        console.log('Please enter an integer for the number of people on the job.');
    } else {
        var totalCost = priceCalculator(basePrice, numberPeopleOnJob, material).toFixed(2);
        console.log('Total Cost: $' + totalCost);
    }
}




