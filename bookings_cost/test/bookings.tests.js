describe("Booking Cost", function() {
    it(" booking cost discount for wednesday", function() {
        let booking = {
            check_in_day: "Wednesday",
            duration: 3
        };
     assert.equal(45 * 3 * 0.75, bookingCost(booking));
    });
    it(" booking cost discount for friday", function() {
        let booking = {
            check_in_day: "Friday",
            duration: 3
        };
     assert.equal(45 * 3 * 0.85, bookingCost(booking));
    });
});
