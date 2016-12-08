function priceCalculator(basePrice, numberPeopleOnJob, material) {

    var flatMarkupRate = 0.05;
    var peopleMarkupRate = 0.012;

    var basePricePlusFlatMarkup = basePrice * (1 + flatMarkupRate);

    if (material == 'drugs') {
        return basePricePlusFlatMarkup * (1 + (peopleMarkupRate * numberPeopleOnJob) + 0.075);
    } else if (material == 'food') {
        return basePricePlusFlatMarkup * (1 + (peopleMarkupRate * numberPeopleOnJob) + 0.13);
    } else if (material == 'electronics') {
        return basePricePlusFlatMarkup * (1 + (peopleMarkupRate * numberPeopleOnJob) + 0.02);
    } else {
        return basePricePlusFlatMarkup * (1 + (peopleMarkupRate * numberPeopleOnJob));
    }
}

var basePrice;
var numberPeopleOnJob;
var material;

basePrice = process.argv[2];
numberPeopleOnJob = process.argv[3];
material = process.argv[4];

console.log(priceCalculator(basePrice, numberPeopleOnJob, material));