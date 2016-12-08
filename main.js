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

// var basePrice = process.argv[2];
// var numberPeopleOnJob = process.argv[3];
// var material = process.argv[4];

// var totalPrice = priceCalculator(basePrice, numberPeopleOnJob, material).toFixed(2);

// console.log('Total Price: $' + totalPrice);

var prompt = require('prompt');

var calculatorInputs = [
    {
        name: 'basePrice',
        validator: /[0-9]$/,
        warning: 'Base price can only include numbers and the dollar sign.'
    },
    {
        name: 'numberPeopleOnJob',
        validator: /[0-9]/,
        warning: 'The number of people on the job can only include numbers.'
    },
    {
        name: 'material',
        validator: /[a-z]/,
        warning: 'Materials can only be entered in lower case letters.'
    }
];

prompt.start();

prompt.get(calculatorInputs, function(err, result) {

    if (err) {
        return onErr(err);
    }

    var totalPrice = priceCalculator(result.basePrice, result.numberPeopleOnJob, result.material).toFixed(2);
    console.log('Total Price: $' + totalPrice);
});

function onErr(err) {
    console.log(err);
    return 1;
}

