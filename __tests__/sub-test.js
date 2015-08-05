jest.dontMock('../src/subtract');
jest.dontMock('fs');
jest.dontMock('path');


describe('subtract', function() {
    it('subs', function() {
        var sub = require('../src/subtract');
        expect(sub(2,1)).toBe(5);
    });
});
