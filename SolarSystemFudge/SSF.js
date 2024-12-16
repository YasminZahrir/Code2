"use strict";
var SolarSystemFudge;
(function (SolarSystemFudge) {
    var ƒ = FudgeCore;
    window.addEventListener("load", start);
    let sun;
    let viewport;
    function start() {
        sun = new SolarSystemFudge.Body("Sun", 1, 0, 0, "yellow");
        const earth = new SolarSystemFudge.Body("Earth", 2, 2, 5, "blue");
        const moon = new SolarSystemFudge.Body("Moon", 1, 1, 2, "grey");
        sun.addChild(earth.rotationNode);
        sun.addChild(earth.scalingNode);
        earth.addChild(moon.rotationNode);
        earth.addChild(moon.scalingNode);
        console.log(earth);
        const canvas = document.querySelector("canvas");
        const camera = new ƒ.ComponentCamera();
        // camera.mtxPivot.translateZ(15);
        // camera.mtxPivot.translateY(15);
        camera.mtxPivot.rotateY(180);
        camera.mtxPivot.translateZ(-10);
        viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", sun, camera, canvas);
        viewport.draw();
        ƒ.Loop.addEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, update);
        ƒ.Loop.start();
    }
    function update() {
        // (sun.getChild(0).getChild(0) as Body).step();
        sun.step();
        sun.scaling();
        viewport.draw();
    }
})(SolarSystemFudge || (SolarSystemFudge = {}));
//# sourceMappingURL=SSF.js.map