function weeklyWage(band, weeklyHours) {
    // 
    
    var hours = weeklyHours.split(',');
    var payPerHour = 0;
    var totalPayPerWeek = 0;

    if (band === 'A') {
        payPerHour = 23;
    }
    
    else if (band === 'B') {
        payPerHour = 37;
    }

    else if (band === 'C') {
        payPerHour = 51;
    }

    else {
        return 0;
    }

    for (var i = 0; i < hours.length; i++) {
        // var day1 = hours[0] + hours[1] + hours[2] + hours[3] + hours[4] + hours[5] + hours[6];
        var sum = hours.reduce(function(a, b){
            return a + b;
        }, 0);
        var totalPayPerWeek = payPerHour * sum;
        // console.log(totalPayPerWeek);
    }

    return totalPayPerWeek;
    
};
 console.log(weeklyWage('A', '0,0,3,4,4,4,6'));


