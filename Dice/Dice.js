"use strict";
var Yasmin;
(function (Yasmin) {
    function strategy(_score, _active, _potential) {
        if (_potential > 50) {
            return Math.random() > 1;
        }
        return Math.random() > 0.5;
    }
    Yasmin.strategy = strategy;
})(Yasmin || (Yasmin = {}));
//# sourceMappingURL=Dice.js.map