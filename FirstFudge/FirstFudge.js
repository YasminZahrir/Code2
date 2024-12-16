"use strict";
var FirstFudge;
(function (FirstFudge) {
    var ƒ = FudgeCore;
    const node = new ƒ.Node("Node");
    let globalViewport;
    window.addEventListener("load", start);
    function start() {
        const canvas = document.querySelector("canvas");
        const mesh = new ƒ.MeshCube("Cube");
        const camera = new ƒ.ComponentCamera();
        const cmpMesh = new ƒ.ComponentMesh(mesh);
        node.addComponent(cmpMesh);
        const material = new ƒ.Material("Material", ƒ.ShaderLit);
        const cmpMaterial = new ƒ.ComponentMaterial(material);
        cmpMaterial.clrPrimary.set(0, 2, 5, 0.5);
        node.addComponent(cmpMaterial);
        node.addComponent(new ƒ.ComponentTransform());
        camera.mtxPivot.translateZ(5);
        camera.mtxPivot.rotateY(180);
        const viewport = new ƒ.Viewport();
        viewport.initialize("Viewport", node, camera, canvas);
        viewport.draw();
        globalViewport = viewport;
        ƒ.Loop.addEventListener("loopFrame" /* ƒ.EVENT.LOOP_FRAME */, moveCube);
        ƒ.Loop.start();
        ƒ.Time.game.setScale(1);
    }
    function moveCube() {
        const frameTimeInMilliseconds = ƒ.Loop.timeFrameGame;
        const frameTimeInSeconds = (frameTimeInMilliseconds / 1000);
        const degrees = 360 * frameTimeInSeconds;
        node.mtxLocal.rotateY(degrees);
        globalViewport.draw();
    }
})(FirstFudge || (FirstFudge = {}));
//# sourceMappingURL=FirstFudge.js.map