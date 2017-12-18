var emptyChar = ' ';
var treeChar = '.';

var drawChars = function (char, num) {
    var result = '';
    var i;

    for (i = 0; i < num; ++i) {
        result += char;
    }

    return result;
};

var drawEmptyChars = function (num) {
    return drawChars(emptyChar, num);
};

var drawTreeChars = function (num) {
    return drawChars(treeChar, num);
};

var drawTreeLevel = function (numberOfTreeChars, numberOfEmptyChars) {
    var result = '';

    result += drawEmptyChars(numberOfEmptyChars);
    result += drawTreeChars(numberOfTreeChars);
    result += drawEmptyChars(numberOfEmptyChars);
    result += '\n';

    return result;
};

module.exports = {
    create: function (height) {
        var level;
        var numberOfTreeChars = 1;
        var maxWidth = 2 * (height - 1) - numberOfTreeChars;
        var midPoint = Math.floor(maxWidth / 2);
        var heightWithoutTrunk = height - 1;
        var result = '';

        if (height < 4) return undefined;
        if (maxWidth % 2 !== 0) midPoint += 1;
        --midPoint;

        for (level = 0; level < heightWithoutTrunk; ++level, numberOfTreeChars += 2) {
            result += drawTreeLevel(numberOfTreeChars, midPoint - level);
        }

        result += drawTreeLevel(1, midPoint);

        return result;
    },
    create2: function (height) {
        var upperHeight = height - 1;
        var dots = 1;
        var dotIncrease = 2;
        var maxWidth = upperHeight * dotIncrease - dots;
        var level;
        var charIndex;
        var result = '';

        for (level = 0; level < upperHeight; ++level, dots += dotIncrease) {
            for (charIndex = 0; charIndex < Math.floor((maxWidth - dots) / 2); ++charIndex) {
                result += ' ';
            }

            for (charIndex = 0; charIndex < dots; ++charIndex) {
                result += '.';
            }

            for (charIndex = 0; charIndex < Math.floor((maxWidth - dots) / 2); ++charIndex) {
                result += ' ';
            }

            result += '\n';
        }

        for (charIndex = 0; charIndex < Math.floor((maxWidth - 1) / 2); ++charIndex) {
                result += ' ';
        }

        result += '.';

        for (charIndex = 0; charIndex < Math.floor((maxWidth - 1) / 2); ++charIndex) {
                result += ' ';
        }

        result += '\n';

        return result;
    }
};