"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoPatternsValidation = /** @class */ (function () {
    function NoPatternsValidation() {
    }
    NoPatternsValidation.prototype.isValid = function (arr) {
        return arr.length === 0;
    };
    return NoPatternsValidation;
}());
exports.NoPatternsValidation = NoPatternsValidation;
var Maximum = /** @class */ (function () {
    function Maximum() {
    }
    Maximum.prototype.findMaximum = function (number1, number2) {
        return Math.max(number1, number2);
    };
    return Maximum;
}());
exports.Maximum = Maximum;
var FragmentsModification = /** @class */ (function () {
    function FragmentsModification() {
    }
    FragmentsModification.prototype.remove = function (fragments, index) {
        fragments.splice(index, 1);
        return fragments;
    };
    FragmentsModification.prototype.merge = function (fragment1, fragment2, overlap) {
        var subString2 = fragment2.substring(overlap, fragment2.length);
        return fragment1 + subString2;
    };
    return FragmentsModification;
}());
exports.FragmentsModification = FragmentsModification;
var Contents = /** @class */ (function () {
    function Contents() {
    }
    Contents.prototype.exists = function (pattern1, pattern2) {
        return pattern1.indexOf(pattern2) > -1 ? true : false;
    };
    return Contents;
}());
exports.Contents = Contents;
var Overlap = /** @class */ (function () {
    function Overlap() {
    }
    Overlap.prototype.findOverlap = function (pattern1, pattern2) {
        var overlap = 0;
        var length1 = pattern1.length;
        var length2 = pattern2.length;
        var minLength = length1 < length2 ? length1 : length2;
        for (var i = 0; i < minLength; i++) {
            var shift = i + 1;
            var suffix = pattern1.substring(length1 - shift, length1);
            var prefix = pattern2.substring(0, shift);
            if (suffix === prefix)
                overlap = shift;
        }
        return overlap;
    };
    return Overlap;
}());
exports.Overlap = Overlap;
var Iteration = /** @class */ (function () {
    function Iteration(fragments) {
        this.fragments = fragments;
        this.prefIndex = 0;
        this.suffIndex = 0;
        this.maxOverlap = 0;
    }
    Iteration.prototype.findOverlappingPatterns = function () {
        for (var i = 0; i < this.fragments.length; i++) {
            for (var j = 0; j < this.fragments.length; j++) {
                if (i === j)
                    continue;
                if (new Contents().exists(this.fragments[i], this.fragments[j]))
                    return new FragmentsModification().remove(this.fragments, j);
                var overlap = new Overlap().findOverlap(this.fragments[i], this.fragments[j]);
                if (overlap > this.maxOverlap) {
                    this.maxOverlap = overlap;
                    this.prefIndex = j;
                    this.suffIndex = i;
                }
            }
        }
        //if hasn't found two overlapping fragments then concatenating first two fragments
        if (this.maxOverlap === 0) {
            this.suffIndex = 0;
            this.prefIndex = 1;
        }
        var modifiedFragments = new FragmentsModification();
        this.fragments[this.suffIndex] = modifiedFragments
            .merge(this.fragments[this.suffIndex], this.fragments[this.prefIndex], this.maxOverlap);
        this.fragments = modifiedFragments.remove(this.fragments, this.prefIndex);
        return this.fragments;
    };
    return Iteration;
}());
exports.Iteration = Iteration;
var OriginalDocument = /** @class */ (function () {
    function OriginalDocument(fragments) {
        this.fragments = fragments;
    }
    OriginalDocument.prototype.reconstruct = function () {
        if (new NoPatternsValidation().isValid(this.fragments))
            //if(new Validation.NoPatternsValidation().isValid(this.fragments)) 
            return ["Zero values are contained in the giving sample!"];
        while (this.fragments.length > 1) {
            this.fragments = new Iteration(this.fragments).findOverlappingPatterns();
        }
        return this.fragments;
    };
    return OriginalDocument;
}());
exports.OriginalDocument = OriginalDocument;
var globFragments = [
    'verra, magna dui v',
    'mper viverra, magna d',
    'Nunc posuere, e',
    'ibulum felis, eget fauci',
    'ere, erat pulvinar semper v',
    'na dui vestibulum felis, eg',
    'eu ligula.',
    'iverra, magna dui vestibulum felis, eg',
    'per viverra, magna dui vestibulum f',
    ', magna dui vestibulum felis, eget fauc',
    'cibus magna sem e',
    'bus magna',
    'rra, magna dui vestibulum fel',
    'tibulum felis, eget faucibu',
    'a dui vestibulum felis, eget fau',
    're, erat pulv'
];
var fragments = new OriginalDocument(globFragments);
console.log(fragments.reconstruct());
//# sourceMappingURL=main.js.map