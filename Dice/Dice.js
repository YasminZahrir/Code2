export var Yasmin;
(function (Yasmin) {
    function strategy(_score, _active, _potential) {
        if (_potential > 15) {
            return Math.random() < 0.8;
        }
        else {
            return Math.random() < 0.5;
        }
    }
    Yasmin.strategy = strategy;
})(Yasmin || (Yasmin = {}));
//# sourceMappingURL=Dice.js.map