"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Yasmin = void 0;
var Yasmin;
(function (Yasmin) {
    function strategy(_score, _active, _potential) {
        if (_potential > 50) {
            return Math.random() < 1;
        }
        return Math.random() < 0.5;
    }
    Yasmin.strategy = strategy;
})(Yasmin || (exports.Yasmin = Yasmin = {}));
//# sourceMappingURL=Dice.js.map