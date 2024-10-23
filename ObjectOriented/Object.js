"use strict";
var VectorObject;
(function (VectorObject) {
    class Vector {
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    let v1 = new Vector();
    v1.scale(2);
    console.log(v1);
})(VectorObject || (VectorObject = {}));
//# sourceMappingURL=Object.js.map