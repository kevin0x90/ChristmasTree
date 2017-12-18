var christmasTree = require('../christmasTree');

describe("A christmas tree", function () {
    it("can have a height of 4", function () {
        var expected = "  .  \n" +
                       " ... \n" +
                       ".....\n" +
                       "  .  \n";

        var result = christmasTree.create(4);

        expect(result).toBe(expected);
    });

    it("can not have a height lower 4", function () {
        var expected = undefined;
        var result = christmasTree.create(3);

        expect(result).toBe(expected);
    });

    it("can have a height of 7", function () {
        var expected = "     .     \n" +
                       "    ...    \n" +
                       "   .....   \n" +
                       "  .......  \n" +
                       " ......... \n" +
                       "...........\n" +
                       "     .     \n";

        var result = christmasTree.create(7);

        expect(result).toBe(expected);
    });
});

describe("A christmas tree version 2", function () {
    it("can have a height of 4", function () {
        var expected = "  .  \n" +
                       " ... \n" +
                       ".....\n" +
                       "  .  \n";

        var result = christmasTree.create2(4);

        expect(result).toBe(expected);
    });
});