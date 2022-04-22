describe('Weekly booking', function () {

    it("should return the total pay for hour worked on band A", function () {

        assert.equal(483, weeklyWage('A', '0,0,3,4,4,4,6'));

    });

    it("should return the total pay for hour worked on band B", function () {

        assert.equal(1221, weeklyWage('B', '0,3,8,4,4,6,8'));

    });

    it("should return the pay per daily week hours worked for 'C' band", function () {

        assert.equal(1836, weeklyWage('C', '8,3,4,4,7,6,4'));

    });

    

    it("should return 'missing day' string if there are less than 7 entries in the string for any band 'B'", function () {

        assert.equal("missing day", weeklyWage('B', '0,3,4,4,6'));

    });

    it("should return 0 if the band is not A, B or C with valid'", function () { 
        assert.equal(0, weeklyWage('D', '3,4,4,4,6,0,3'));
    });
});

